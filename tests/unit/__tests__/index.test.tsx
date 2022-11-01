import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Home from '../../../pages';
import { createProjectData, projectData} from "../../../utils/interfaces";

const testProject1: projectData = createProjectData({
  id: "1",
  name: "Test Project1",
  docsType: "microservice",
});
const testProject2: projectData = createProjectData({
  id: "2",
  name: "Test Project2",
  docsType: "backend",
});

const setupComponent = ({projects}: {projects: projectData[] }) => render(<Home projectsData={projects} />);

describe('Home', () => {
  afterEach(() => {
    cleanup();
  });

  describe('UI Tests', () => {
    it('Home component (with both backend and microservice projects) should render without crashing', async () => {
      const screen = setupComponent({
        projects: [testProject1, testProject2]
      });
      expect(screen.container).toBeDefined();
    });
    it('Home component (without microservice projects) should render without crashing', async () => {
      const screen = setupComponent({
        projects: [testProject2]
      });
      expect(screen.container).toBeDefined();
    });
    it('Home component (without backend projects) should render without crashing', async () => {
      const screen = setupComponent({
        projects: [testProject1]
      });
      expect(screen.container).toBeDefined();
    });
  });
  it('Home component should render correctly', async () => {
    const screen = setupComponent({projects: [testProject1, testProject2]});
    await screen
        .findByText(/microservices/i)
        .then((element) => expect(element).toBeInTheDocument());
    await screen
        .findByText(/backend/i)
        .then((element) => expect(element).toBeInTheDocument());

  });

  it('renders a heading', () => {
    render(<Home projectsData={[testProject1, testProject2]} />);
    const heading = screen.getByRole('heading', {
      name: /Swagger API/i,
    });
    expect(heading).toBeInTheDocument();
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot (with backend and microservice projects)', () => {
      const {container} = setupComponent({projects: [testProject1, testProject2]});
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (without microservice projects)', () => {
      const {container} = setupComponent({projects: [testProject2]});
      expect(container).toMatchSnapshot();
    });
    it('should match a basic snapshot (without backend projects)', () => {
      const {container} = setupComponent({projects: [testProject1]});
      expect(container).toMatchSnapshot();
    });
  });
});
