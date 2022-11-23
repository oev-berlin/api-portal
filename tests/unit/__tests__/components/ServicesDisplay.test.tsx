import { render, cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import React from 'react';
import 'jest-styled-components';
import { ServicesDisplay } from '../../../../components/ServicesDisplay';
import { projectInfo } from '../../../../utils/interfaces';
import exampleProject from '../../../../public/apis_docs/example_1.json';

expect.extend(toHaveNoViolations);

const testProject: projectInfo = exampleProject.info;
const setupComponent = ({ title, services }: { title: string, services: string[] }) => render(
  <ServicesDisplay title={title} services={services} />,
);
describe('ServicesDisplay', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('ServicesDisplay component (type internal, title and services are not empty) should render without crashing', async () => {
      const screen = setupComponent({
        title: 'Internal Services',
        services: testProject.microservices,
      });
      expect(screen.container).toBeDefined();
    });
    it('ServicesDisplay component (type external, title and services are not empty) should render without crashing', async () => {
      const screen = setupComponent({
        title: 'External Services',
        services: testProject.externalservices,
      });
      expect(screen.container).toBeDefined();
    });
    it('ServicesDisplay component (type internal, title is empty) should render without crashing', async () => {
      const screen = setupComponent({
        title: '',
        services: testProject.microservices,
      });
      expect(screen.container).toBeDefined();
    });
    it('ServicesDisplay component (type external, title is empty) should render without crashing', async () => {
      const screen = setupComponent({
        title: '',
        services: testProject.externalservices,
      });
      expect(screen.container).toBeDefined();
    });
    it('ServicesDisplay component (Services is empty) should render without crashing', async () => {
      const screen = setupComponent({
        title: 'Internal Services',
        services: [],
      });
      expect(screen.container).toBeDefined();
    });
    it('ServicesDisplay component (title and services are empty) should render without crashing', async () => {
      const screen = setupComponent({
        title: '',
        services: [],
      });
      expect(screen.container).toBeDefined();
    });
  });

  it('ServicesDisplay component should render correctly', async () => {
    const screen = setupComponent({ title: 'Internal Services', services: testProject.microservices });
    await screen
      .findByText(/internal services/i)
      .then((element) => expect(element).toBeInTheDocument());
    await screen
      .findByText(/mail-service/)
      .then((element) => expect(element).toBeInTheDocument());
    await screen
      .findByText(/pdf-service/i)
      .then((element) => expect(element).toBeInTheDocument());
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot (type internal, title and services are not empty)', () => {
      const { container } = setupComponent({ title: 'Internal Services', services: testProject.microservices });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (type external, title and services are not empty)', () => {
      const { container } = setupComponent({
        title: 'External Services',
        services: testProject.externalservices,
      });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (type internal, title is empty)', () => {
      const { container } = setupComponent({ title: '', services: testProject.microservices });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (type external, title is empty)', () => {
      const { container } = setupComponent({ title: '', services: testProject.externalservices });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (services is empty)', () => {
      const { container } = setupComponent({ title: 'External Services', services: [] });
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (title and services are empty)', () => {
      const { container } = setupComponent({ title: '', services: [] });
      expect(container).toMatchSnapshot();
    });
  });
});
