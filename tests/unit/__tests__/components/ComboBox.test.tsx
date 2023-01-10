import { render, cleanup, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { ComboBox, ComboBoxProps } from '../../../../components/ComboBox';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

const setupComponent = ({ projectsTitles }: ComboBoxProps) => render(
  <ComboBox
    searchOptions={projectsTitles}
  />,
);

describe('ComboBox', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('ComboBox component should render without crashing', async () => {
      const screen = setupComponent({
        searchOptions: ['salneo', 'tidy'],
      });
      expect(screen.container).toBeDefined();
    });
    it('ComboBox component (searchOptions is empty) should render without crashing', async () => {
      const screen = setupComponent({
        searchOptions: [],
      });
      expect(screen.container).toBeDefined();
    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot', () => {
      const { container } = setupComponent({ searchOptions: ['salneo', 'tidy'] });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (searchOptions is empty)', () => {
      const { container } = setupComponent({ searchOptions: [] });
      expect(container).toMatchSnapshot();
    });
  });
  describe('Accessibility Tests', () => {
    it('should pass a basic accessibility test', async () => {
      const { container } = setupComponent({ searchOptions: ['salno'] });
      const results = await waitFor(() => axe(container));
      expect(results).toHaveNoViolations();
    });
  });
});
