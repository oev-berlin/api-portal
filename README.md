# Frontend Boilerplate OEV

## Stack:

- Yarn
- [Next JS](https://nextjs.org/docs)
- Typescript
- Testing:
  - End-to-End:
    - [Cucumber](https://github.com/cucumber/cucumber-js)
    - [Playwright](https://playwright.dev/docs/intro) - End to end test runner
  - Unit:
    - [Jest](https://jestjs.io/docs/getting-started) - Unit testing, snapshot testing (html comparison)
    - [Storybook UI](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/) - Unit testing, snapshot testing (pixel-wise), development tool
- Hooks and formatters
  - [ESlint](https://eslint.org/docs/user-guide/getting-started) - Cleaning the code (js, jsx, ts, tsx)
  - [Stylelint](https://https://stylelint.io/) - Cleaning the style files (css, scss, sass)
  - [Prettier](https://prettier.io/) - Formatting the code (js, jsx, ts, tsx)
  - [Husky](https://typicode.github.io/husky/#/) - Git hooks
- Deployment tools
  - [Docker](https://docs.docker.com/get-docker/) - Build and run docker images
  - [docker-compose](https://docs.docker.com/compose/install/) - orchestrate docker images

---

## Running instructions

### Precondition

- <mark style="background-color: red;">NodeJS >= 14.0
- Docker
- docker-compose

### Installation

`yarn install`

### Application scripts

- `yarn build` : Build the application
- `yarn start` : Start the application
- `docker-compose up`: Frontend will be build into a new image, backend will be pulled from registry, the command will start backend and frontend together

### Testing scripts

- `yarn test` : Run all unit tests - headless
- `yarn run test-e2e` : Run all E2E tests - headless
- `yarn run cucumber-js path/to/feature.feature` : Run specific E2E test - headless
- `yarn run debug path/to/feature.feature` : Run specific E2E test in debug mode - headful

For testing in a specific engin (firefox, chromium, webkit(safari) ) add an BROWSER environment variable with the engine you would like to test with.

e.g. : `BROWSER=webkit yarn ...`

---

## TDD Development Process

### Unit tests

<img src="./assets/jest-logo.png" alt="drawing" width="50"/><img src="./assets/white-plus.png" alt="drawing" width="20" style="position:relative; bottom:10px"/><img src="./assets/storybook.svg" alt="drawing" width="50"/>

1. Before writing new Component `component`, add new jest component for this component in `__tests__/components/component.tsx`
2. Write tests:
   1. Screenshot test
   2. Test which describes a right behavior
      - For input field, for example, set assertion of the output with the right input
   3. Test which describes a wrong behavior
      - For input field, for example, set assertion of the output with the errors
3. Always use mockups, never built-in data in the tests.

### <mark>End-To-End tests </mark>

Implementing the assertions with cypress and the behavior with cucumber will allow us to write user stories in an easy and understandable way.
The user stories could be written by any stack-holder without any previous knowledge in development.
This will contribute to the TDD approach.

- Write requirement.
- we translate into failed tests.
- we implement the code to pass the test and fulfill the requirements.

<img src="./assets/playwright.png" alt="drawing" width="50"/><img src="./assets/white-plus.png" alt="drawing" width="20" style="position:relative; bottom:10px; left: 2px"/><img src="./assets/cucumberjs-logo.png" alt="drawing" width="50"/>

1. Before writing new Feature `feature`, add `.feature` file and a folder for its steps in `./tests/e2e/features/feat.feature, ./tests/e2e/src/steps/feat.step.ts`
2. Define different scenarios for this flow, make sure the tests exist before starting to develop the feature and its components
3. For separate parts of the scenarios with `And` (inside the `When` part, `When I write my username And enter my password And agree to the terms...`) in order to follow the mistakes
4. Steps that are used often and are relevant for multiple tests can be written in the general step file.
5. For pixel-wise snapshot comparison, use the steps defined in `./tests/e2e/src/steps/general.steps.ts`
6. ...

For **debugging**, use debugging script, or add debug tag (`@debug`) in the first line of the feature

To **ignore** a specific feature, add ignore tag (`@ignore`) in the first line of the feature

## Conventional Commits

Commit messages have to comply with the [Conventional Commits Summary](https://www.conventionalcommits.org/en/v1.0.0/#summary). This will be enforced by husky.
The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

---

## Project structure

```
Project
    .husky\
        _\
        package.json
        pre-commit              ................... Precommit hook sctipt
    .next\
    .storybook\
        main.js                 ................... Declare plugins and other configs
        preview.js              ................... Determine how to render the stories
        components\             ................... Component unit tests
        page\                   ................... Pages unit tests
        index.test.tsx
    tests\
        unit\
            __mocks__\          ................... Mockups for the Unit tests
            __tests__\          ................... Unit tests
                components\
                pages\
                partials\
                cta\
        e2e\
            features\           ................... E2E features (Gherkin tests for features)  name convension `example.feature`
            src\
                steps\          ................... Steps for the feature files, name convension `example.test.ts`
                support\
                    commom-hooks.ts   ............. Hooks for the E2E tests
                    config.ts         ............. Configurations
                    custom-world.ts   ............. Enviroment definitions for the tests
                utils\
                    compareSnapshots.ts  ............. For snapshot comparison
    node_modules\
    pages\                      ...................
        api\
            helo.ts             ...................
        _app.tsx
        index.tsx               ................... Main app
    public\                     ................... Public files
        favicon.ico
        vercel.svg
    stories\
        pages\
        components\
        partials\
    styles\
        components\             ................... Styles for components only
        pages\                  ................... Styles for pages
        global.css              ................... Global styles
        Home.modules.css
    .gitignore
    jest.config.ts
    jest.setup.js
    package.json
    ...
```
