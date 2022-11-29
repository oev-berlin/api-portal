import { render, cleanup } from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe';
import React from 'react';
import { Button } from '../../../../components/Button';
import 'jest-styled-components';
import ButtonProps from "../../../../components/Button/interfaces";
import { act } from 'react-dom/test-utils';

expect.extend(toHaveNoViolations);

const setupComponent = ({ text }: ButtonProps ) => render(
  <Button text={text} />,
);

let screen;
describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('Button component should render without crashing', async () => {
      act(()=>{screen = setupComponent({text:"Back"})});
      expect(screen.container).toBeDefined();
    });

    it('Card component (empty text) should render without crashing', async () => {
      act( ()=>{screen = setupComponent({text: ""})});
      expect(screen.container).toBeDefined();
    });

    it('Card component should be enabled', async () => {
      act( ()=>{screen = setupComponent({text: "Back"})});
      await screen
          .findByText(/back/i)
          .then((element) =>
              expect(element).not.toBeDisabled());
    });

    it('Button component should render correctly', async () => {
      act( ()=>{screen = setupComponent({text:"Back"})});
      await screen
        .findByText(/back/i)
        .then((element) => expect(element).toBeInTheDocument());
    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot', () => {
      act( ()=>{screen  = setupComponent({text:"Back"})});
      expect(screen.container).toMatchSnapshot();
    });

    it('should match a basic snapshot (empty text)', () => {
      act(()=>{ screen = setupComponent({text:""})});
      expect(screen.container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests', () => {
    it('should pass a basic accessibility test', async () => {
      act(()=>{ screen = setupComponent({ text:"Back"})});
      const results = await axe(screen.container);
      expect(results).toHaveNoViolations();
    });
  });
});
