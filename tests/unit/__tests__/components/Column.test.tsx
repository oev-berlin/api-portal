import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { Column, ColumnProps } from '../../../../components/Column';
import { ProjectData } from '../../../../utils/interfaces';
// eslint-disable-next-line import/extensions
import 'jest-styled-components';
import { createProjectData } from '../../../../utils/testUtilities';

expect.extend(toHaveNoViolations);

const testProject1: ProjectData = createProjectData({
  title: 'Test Project1',
});
const testProject2: ProjectData = createProjectData({
  title: 'Test Project2',
});

const setupComponent = ({ projects, name }: ColumnProps) => render(
  <Column
    projects={projects}
    name={name}
  />,
);

describe('Column', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('Column component (column name and projects are not empty) should render without crashing', async () => {
      const screen = setupComponent({
        projects: [testProject1, testProject2],
        name: 'microservices',
      });
      expect(screen.container).toBeDefined();
    });
    it('Column component (column name is empty) should render without crashing', async () => {
      const screen = setupComponent({
        projects: [testProject1, testProject2],
        name: '',
      });
      expect(screen.container).toBeDefined();
    });
    it('Column component (column projects is empty) should render without crashing', async () => {
      const screen = setupComponent({
        projects: [],
        name: 'microservices',
      });
      expect(screen.container).toBeDefined();
    });

    it('Column component should render correctly', async () => {
      const screen = setupComponent({ projects: [testProject1, testProject2], name: 'microservices' });
      await screen
        .findByText(/microservices/)
        .then((element) => expect(element).toBeInTheDocument());
      await screen
        .findByText(/Test Project1/)
        .then((element) => expect(element).toBeInTheDocument());
      await screen
        .findByText(/Test Project2/)
        .then((element) => expect(element).toBeInTheDocument());
    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot (column name and projects are not empty)', () => {
      const { container } = setupComponent({ projects: [testProject1, testProject2], name: 'microservices' });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (column name is empty)', () => {
      const { container } = setupComponent({ projects: [testProject1, testProject2], name: '' });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (column projects is empty)', () => {
      const { container } = setupComponent({ projects: [], name: 'microservices' });
      expect(container).toMatchSnapshot();
    });
  });
  describe('Accessibility Tests', () => {
    it('should pass a basic accessibility test', async () => {
      const { container } = setupComponent({ projects: [testProject1, testProject2], name: 'microservices' });
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
