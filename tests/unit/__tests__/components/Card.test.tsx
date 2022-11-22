import { render, cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { Card } from '../../../../components/Card';
import { projectData } from '../../../../utils/interfaces';
// eslint-disable-next-line import/extensions
import 'jest-styled-components';
import { createProjectData } from '../../../../utils/testUtilities';

expect.extend(toHaveNoViolations);

const setupComponent = ({ projectData }: { projectData: projectData }) => render(
  <Card projectData={projectData} />,
);

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('Card component (type microservice) should render without crashing', async () => {
      const screen = setupComponent({
        projectData: createProjectData({
          docsType: 'microservice',
        }),
      });
      expect(screen.container).toBeDefined();
    });

    it('Card component (type backend) should render without crashing', async () => {
      const screen = setupComponent({
        projectData: createProjectData({
          docsType: 'backend',
        }),
      });
      expect(screen.container).toBeDefined();
    });

    it('Card component (without microservices) should render without crashing', async () => {
      const screen = setupComponent({
        projectData: createProjectData({
          microservices: [],
        }),
      });
      expect(screen.container).toBeDefined();
    });
    it('Card component (without external services) should render without crashing', async () => {
      const screen = setupComponent({
        projectData: createProjectData({
          externalServices: [],
        }),
      });
      expect(screen.container).toBeDefined();
    });

    it('Card component should render correctly', async () => {
      const screen = setupComponent({
        projectData: createProjectData({}),
      });
      await screen
        .findByText(/Test Project/)
        .then((element) => expect(element).toBeInTheDocument());
      await screen
        .findByText(/PDF Service/)
        .then((element) => expect(element).toBeInTheDocument());
      await screen
        .findByText(/Email Service/)
        .then((element) => expect(element).toBeInTheDocument());
    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot (type microservice)', () => {
      const { container } = setupComponent({
        projectData: createProjectData({
          docsType: 'microservice',
        }),
      });
      expect(container).toMatchSnapshot();
    });

    it('should match a basic snapshot (type backend)', () => {
      const { container } = setupComponent({
        projectData: createProjectData({
          docsType: 'backend',
        }),
      });
      expect(container).toMatchSnapshot();
    });

    it('should match a basic snapshot (without microservices)', () => {
      const { container } = setupComponent({
        projectData: createProjectData({
          microservices: [],
        }),
      });
      expect(container).toMatchSnapshot();
    });

    it('should match a basic snapshot (without external services)', () => {
      const { container } = setupComponent({
        projectData: createProjectData({
          externalServices: [],
        }),
      });
      expect(container).toMatchSnapshot();
    });
  });
});
