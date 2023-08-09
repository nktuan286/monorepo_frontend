# Candidate name:
Tuan Nguyen

# Explaination:
The monorepo is a yarn workspace containing ReactJS projects in the packages folder.

## To install dependencies run:

### `yarn install`

This will install all dependencies for all projects in the packages directory.

To add a new project first add the root of your React app to the packages folder. All existing projects at the time of writing were created with create-react-app and I recommend also using this to avoid any unknown issues.

Next replace all Run, Build, Test, etc, scripts in your package.json to use react-app-rewired. You can easily find existing examples of this in the package.json files in the projects, e.g. the web project.

You will then need to copy and add the config-overrides.js file to the root of your new project, which can also be found in the existing projects.

The above two steps allow the shared folder to be bundled properly when running dev and production builds of the app.


Existing tsconfig.json files can be found in exisitng projects and TypeScript should be used for non-trivial Apps (e.g. anything more than a single page).

Jest with an overloaded version of @testing-library/react, which can be found in test.utils.tsx in the utils folder of the shared project as well as several other projects is used for testing and it is recommended to use the existing jest.config.js found in the current projects.

## Using shared components:

Shared components can be used within a project by adding the following dependency to your packages.json:

### `"@collies/shared": "1.0.0"`

You can then use the shared components by importing them. E.g for the Modal component you would use:

### `import { Modal } from '@collies/shared'`
