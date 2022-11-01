import {render, cleanup} from '@testing-library/react';
import {toHaveNoViolations} from 'jest-axe';
import {Microservice} from "../../../../components/Card/fragments";

expect.extend(toHaveNoViolations);

const setupComponent = ({serviceName}: { serviceName: string }) =>
    render(
        <Microservice serviceName={serviceName}/>
    );

describe('Microservice', () => {
    afterEach(() => {
        cleanup();
    });

    describe('UI Tests', () => {
        it('Microservice component (with correct name) should render without crashing', async () => {
            const screen = setupComponent({serviceName: "TestMicroservice"});
            expect(screen.container).toBeDefined();
        });

        it('Microservice component (with empty name) should render without crashing', async () => {
            const screen = setupComponent({serviceName: ""});
            expect(screen.container).toBeDefined();
        });

        it('Microservice component should render correctly', async () => {
            const screen = setupComponent({serviceName: "TestMicroservice"});
            //Check if the Microservice is rendered.
            await screen
                .findByText(/TestMicroservice/)
                .then((element) => expect(element).toBeInTheDocument());
        });
    });

    describe('Snapshots Tests', () => {
        it('should match a basic snapshot (with correct name)', () => {
            const {container} = setupComponent({serviceName: 'TestMicroservice'});
            expect(container).toMatchSnapshot();
        });

        it('should match a basic snapshot (with empty name)', () => {
            const {container} = setupComponent({serviceName: ''});
            expect(container).toMatchSnapshot();
        });
    });
});
