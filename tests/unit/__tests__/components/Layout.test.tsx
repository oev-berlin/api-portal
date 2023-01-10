import { act, render, cleanup, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations} from 'jest-axe';
import React from 'react';
import { Layout, LayoutProps } from '../../../../components/Layout';
import 'jest-styled-components';
import userEvent from '@testing-library/user-event';

expect.extend(toHaveNoViolations);

export const useRouter = jest.spyOn(require("next/router"), "useRouter");
const pushMock = jest.fn()
const setupComponent = ({ searchOptions, children }: LayoutProps) => render(
  <Layout
    searchOptions={searchOptions}
    children={children}
  />,
);

describe('Layout', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    useRouter.mockImplementationOnce(()=>({
      pathname: "/",
      route: "/",
      query: "",
      asPath: "/",})
    );
    it('Layout component should render without crashing', async () => {
      const screen = setupComponent({
        searchOptions: ['salneo', 'tidy'],
        children: <div />,
      });
      expect(screen.container).toBeDefined();
    });
    it('Layout component (searchOptions is empty) should render without crashing', async () => {
      const screen = setupComponent({
        searchOptions: [""],
        children: <div />,
      });
      expect(screen.container).toBeDefined();
    });

    it('Layout component should render correctly (Title should be rendered)', async () => {
      const screen = setupComponent({ searchOptions: ['salneo', 'tidy'], children: <div /> });
      await screen
        .findByText(/swagger api/i)
        .then((element) => expect(element).toBeInTheDocument());
    });
    it('Layout component should render correctly (Title should be rendered even if options are empty)', async () => {
      const screen = setupComponent({ searchOptions: [], children: <div /> });
      await screen
          .findByText(/swagger api/i)
          .then((element) => expect(element).toBeInTheDocument());
    });

    it('Layout component should behave correctly (click on the arrow)', async () => {
      const screen =  setupComponent({ searchOptions: ['salneo', 'tidy'], children: <div /> });
      expect(await screen.queryByText(/salneo/)).not.toBeInTheDocument();
      expect(await screen.queryByText(/tidy/)).not.toBeInTheDocument();

      await act(() => screen.findByRole('button')
          .then((button) => userEvent.click(button)));

      await screen.findByText(/salneo/).then((element) => expect(element).toBeInTheDocument());
      await screen.findByText(/tidy/).then((element) => expect(element).toBeInTheDocument());

    });
    it('Layout component should behave correctly (click on an item from the list)', async () => {
      useRouter.mockReturnValue({
        query: "/",
        push: pushMock
      })
      const screen =  setupComponent({ searchOptions: ['salneo', 'tidy'], children: <div /> });
      await act(() => screen.findByRole('button')
          .then((button) => userEvent.click(button)));

      await act(() =>screen.findByText(/salneo/)
          .then((salneoOption) => userEvent.click(salneoOption)));
      expect(pushMock).toHaveBeenCalledWith("/project/salneo");
    });
    it('Layout component should behave correctly (Autocomplete should work correctly)', async () => {
      useRouter.mockReturnValue({
        query: "/",
        push: pushMock
      })
      const screen =  setupComponent({ searchOptions: ['salneo', 'tidy'], children: <div /> });
      expect(await screen.queryByText(/salneo/)).not.toBeInTheDocument();
      expect(await screen.queryByText(/tidy/)).not.toBeInTheDocument();

      await act(() => screen.findByRole('combobox')
          .then((combobox) => userEvent.type(combobox, 's')));

      expect(await screen.queryByText(/salneo/)).toBeInTheDocument();
      expect(await screen.queryByText(/tidy/)).not.toBeInTheDocument();
      await act(() =>screen.findByText(/salneo/)
          .then((salneoOption) => userEvent.type(salneoOption, '{enter}')));
      await act(() => screen.findByRole('combobox').then((combobox)=>expect(combobox.value).toEqual('salneo')))

    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot', () => {
      const { container } = setupComponent({ searchOptions: ['salneo', 'tidy'], children: <div /> });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (searchOptions is empty)', () => {
      const { container } = setupComponent({ searchOptions: [""], children: <div /> });
      expect(container).toMatchSnapshot();
    });
  });
  describe('Accessibility Tests', () => {
    it('should pass a basic accessibility test', async () => {
      const { container } = setupComponent({ searchOptions: ['salneo'], children: <div /> });
      const results = await waitFor(() => axe(container));
      expect(results).toHaveNoViolations();
    });
  });
});