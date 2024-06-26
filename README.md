# PODCASTER

## v1.1.1

Poject seed

## Getting Started 🚀

These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes.
See **Deployment** to know how to deploy the project.

### Pre-requirements 📋

[//]: # 'This is an internal comment not shown in the README visually'
[//]: # 'What things do you need to work with the project and how to install them'

- [Node JS >= 20.10.x](https://nodejs.org/es/)
- [Git](https://git-scm.com/)

### Installation 🔧

[//]: # 'A series of step-by-step examples that tells you what to run to have a development environment running'

1.  Clone repository:

        #!shell
        git clone https://github.com/cmgalvangrajales/podcaster.git

2.  Go to the project folder:

        #!shell
        cd podcaster

3.  Node version:

        #!shell
        nvm use // if you are using node versions, else, be sure to use Node version 20.10.x

4.  Install dependencies:

        #!shell
        npm install

5.  Run the project:

        #!shell
        npm run dev

    **NOTE:**
    Open browser in the following route `http://localhost:3002`

## Running the tests ⚙️

[//]: # 'Explain how to run automated tests for this system'

### Running unit tests 🔩

```shell
npm run test
npm run test:coverage // this will include coverage
```

### Running linter 🖋

```shell
npm run format:fix // Validate and fix code structure and guidelines
npm run format:check // Validate code structure and guidelines
npm run lint // EsLint Validation
```

### Dist build 🔧

```shell
npm run build:prod // Generates the project build
```

## Built with 🛠️

[//]: # 'Mention the development libraries and frameworks you used to create your project'

- [Vite](https://vitejs.dev/)
- [React](https://es.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React intl](https://formatjs.io/docs/getting-started/installation/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Testing library](https://testing-library.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
