# Project

## Stack:

- [Next JS](https://nextjs.org/docs),
- Typescript
- Testing:
  - End-to-End:
    - [Cucumber](https://github.com/cucumber/cucumber-js)
    - [Playwright](https://playwright.dev/docs/intro)
  - Unit:
    - [Jest](https://jestjs.io/docs/getting-started)
    - [Storybook UI](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/)

## TDD Development Process

### Development processes

### Unit tests

<img src="./assets/jest-logo.png" alt="drawing" width="50"/><img src="./assets/white-plus.png" alt="drawing" width="20" style="position:relative; bottom:10px"/><img src="./assets/storybook.svg" alt="drawing" width="50"/>

---

1. Before writing new Component `component`, add new jest component for this component in `__tests__/components/component.tsx`
2. Write tests:
   1. Screenshot test
   2. Test which describes a right behavior
      - For input field, for example, set assertion of the output with the right input
   3. Test which describes a wrong behavior
      - For input field, for example, set assertion of the output with the errors
3. Always use mockups, never built-in data in the tests.

### End-To-End tests

Implementing the assertions with cypress and the behavior with cucumber will allow us to write user stories in an easy and understandable way.
The user stories could be written by any stack-holder without any previous knowledge in development.
This will contribute to the TDD approach.

_We can test snapshots by pixels with Playwright_

- Write requirement.
- we translate into failed tests.
- we implement the code to pass the test and fulfill the requirements.

<img src="./assets/playwright.png" alt="drawing" width="50"/><img src="./assets/white-plus.png" alt="drawing" width="20" style="position:relative; bottom:10px; left: 2px"/><img src="./assets/cucumberjs-logo.png" alt="drawing" width="50"/>

---

1. Before writing new Feature `feature`, add `.feature` file and a folder for its steps in `./rsc/cypress/integration/feat.feature, fature\main.step.ts`
2. Define different scenarios for this flow, make sure the tests exist before starting to develop the feature and its components
3. For separate parts of the scenarios with `And` (inside the `When` part, `When I write my username And enter my password And agree to the terms...`) in order to follow the mistakes
4. ...

### Testing Hints

---

Use by role
https://testing-library.com/docs/queries/byrole/

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
    __mocks__\                  ................... Mockups for the Unit tests
    __tests__\                  ................... Unit tests
        components\             ................... Component unit tests
            ...
        page\                   ................... Pages unit tests
        index.test.tsx
    cypress\
        downloads\
        fixtures\
        integrations\           ................... E2E steps
            main-app.feature    ................... Describe the Feature to test with Gherkin
            main-app\
                main.step.ts        ................... Describe the step of the Gherkin feature test
        plugins\
            index.js
        support \
            commands.js
            index.js
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
            ...
        components\
            ...
        partials\
            ...
    styles\
        components\             ................... Styles for components only
            ...
        pages\                  ................... Styles for pages
            ...
        global.css              ................... Global styles
        Home.modules.css
    .gitignore
    cypress.json                ................... Cypress configuration file
    jest.config.ts
    jest.setup.js
    package.json
    ...
```
