# NG-3box

A simple example of an Angular app using [3box-js](https://github.com/uport-project/3box-js)

This app uses : 
- Angular 6.1.0
- 3box 1.0.0-beta.7
- Web3 1.0.0-beta.36

## Custom Builders

Note that builder has been changed to avoid several node modules errors during compilation time.

Dev Dependancies : 
- `npm install --save-dev @angular-builders/custom-webpack`
- `npm install --save-dev @angular-builders/dev-server`


In `angular.json` :
- The builder of `build` has been change to `@angular-builders/custom-webpack:browser`
- The builder of `serve` has been change to `@angular-builders/dev-server:generic`

`webpack.config.js` has been added at the root to append the default webpack config.

Please follow this [article](https://codeburst.io/customizing-angular-cli-6-build-an-alternative-to-ng-eject-a48304cd3b21) for more details.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
