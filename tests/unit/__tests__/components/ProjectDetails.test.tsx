import { render, cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { projectData } from '../../../../utils/interfaces';
// eslint-disable-next-line import/extensions
import 'jest-styled-components';
import { ProjectDetails } from '../../../../components/ProjectDetails';
import exampleProject from '../../../../public/apis_docs/example_1.json';

expect.extend(toHaveNoViolations);

const testProject1: projectData = exampleProject;
const testProject2: projectData = { ...exampleProject, name: '' };
const testProject3: projectData = { ...exampleProject, description: '' };

const setupComponent = ({ project }: { project: projectData }) => render(
  <ProjectDetails project={project} />,
);

describe('ProjectDetails', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('ProjectDetails component (project name and project description are not empty) should render without crashing', async () => {
      const screen = setupComponent({
        project: testProject1,
      });
      expect(screen.container).toBeDefined();
    });
    it('ProjectDetails component (project name is empty) should render without crashing', async () => {
      const screen = setupComponent({
        project: testProject2,
      });
      expect(screen.container).toBeDefined();
    });
    it('ProjectDetails component (project description is empty) should render without crashing', async () => {
      const screen = setupComponent({
        project: testProject3,
      });
      expect(screen.container).toBeDefined();
    });

    it('ProjectDetails component should render correctly', async () => {
      const screen = setupComponent({ project: testProject1 });
      await screen
        .findByText(/project a/i)
        .then((element) => expect(element).toBeInTheDocument());
      await screen
        .findByText(/Description/)
        .then((element) => expect(element).toBeInTheDocument());
      await screen
        .findByText(/description of the project/)
        .then((element) => expect(element).toBeInTheDocument());
    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot (project name and project description are not empty)', () => {
      const { container } = setupComponent({ project: testProject1 });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (project name is empty)', () => {
      const { container } = setupComponent({ project: testProject2 });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (project description is empty)', () => {
      const { container } = setupComponent({ project: testProject3 });
      expect(container).toMatchSnapshot();
    });
  });
});
