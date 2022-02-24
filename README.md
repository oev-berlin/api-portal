# Project

## Stack:

- [Next JS](https://nextjs.org/docs),
- Typescript
- Testing:
  - End-to-End:
    - [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test),
    - [Cucumber](https://cucumber.io/docs/guides/10-minute-tutorial/),
    - [Cypress-Cucumber-Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor),
  - Unit:
    - [Jest](https://jestjs.io/docs/getting-started)
- ...

## TDD Development Process

### Development processes

### Unit tests

---

1. Before writing new Component `component`, add new jest component for this component in `__tests__/components/component.tsx`
2. Write tests:
   1. Screenshot test
   2. Test which describe a right behavior
      - For input field for example, set assertion of the output with the right input
   3. Test which describes a wrong behavior
      - For input field for example, set assertion of the output with the errors
3. Always use mockups, never built in data in the tests.

### End-To-End tests

Implement the assertions with cypress and the behaviour with cucumber will allow us writing user stories in an easy and understandable.
The user stories could be written by any stack-holder without any previous knowledge in development.
This will contribute to the TDD approach.

- Write requirement.
- we translate into failed tests.
- we implement the code to pass the test and fulfil the requirements.

---

1. Before writing new Feature `feature`, add `.feature` file and a folder for its steps in `./rsc/cypress/integration/feat.feature, fature\steps.js`
2. Define different scenarios for this flow, make sure the tests exist before starting to developing the feature and its components
3. For separate parts of the scenarios with `And` (inside the `When` part, `When I write my username And enter my password And agree to the terms...`) in order to follow the mistakes
4. ...

### Testing Hints

---

Use by role
https://testing-library.com/docs/queries/byrole/

## Project structure

```
Project
    .next\
    __mocks__\                  ................... Mockups for the Unit tests
    __tests__\                  ................... Unit tests
        components\             ................... Component unit tests
            ...
        page\                   ................... Pages unit tests
        index.test.tsx
    cypress\
        downloads\              ...................
        fixtures\               ...................
        integrations\           ................... E2E steps
            main-app.feature    ................... Describe the Feature to test with Gherkin
            main-app\
                steps.js        ................... Describe the step of the Gherkin feature test
        plugins\                ...................
            index.js            ...................
        support \
            commands.js
            index.js
    node_modules\
    pages\                      ...................
        api\                    ...................
            helo.ts             ...................
        _app.tsx                ...................
        index.tsx               ...................
    public\                     ................... Public files
        favicon.ico
        vercel.svg
    styles\
        components\             ................... Styles for components only
            ...
        pages\                  ................... Styles for pages
            ...
        global.css              ................... Global styles
        Home.modules.css
    .gitignore
    cypress.json                ................... Cypress configuration file
    jest.config.js
    jest.setup.js
    package.json
    ...
```
