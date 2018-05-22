# biddle-fiddle
A NodeJS starter kit for fiddling around with or creating new biddles (packages). When you're all set, you can proudly show off your biddy to the world.

## Getting Started
- Install Node and NPM
- Fork Me and navigate to project directory
- `npm install`
- `npm start:open` or `npm start`

### Scripts
```
lint          Lints all project directories (excludes node_modules)
lint:fix      Runs lint command with the --fix option
build         Bundles the javascript with webpack using the webpack.config.js
start         Starts the Webpack Dev Server using the options defined in webpack.config.js
start:open    Runs the start command with the --open option
test          Runs the build command and runs test suite (Currently broken)
```

## Included Modules
- ESLint 4 with modified AirBnB base config
- Webpack 4 && Webpack Dev Server with Hot Reloading
- Mocha/Chai Testing Framework/Assertion Library

## TODO:
- update the readme
- fix the mocha/chai env and include Istanbul for code coverage output
- probably other plenty of other things
