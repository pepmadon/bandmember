// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// Change tsconfig.base.ts file to import on root dir  package.json
// "compilerOptions": {
//   ...
//   "resolveJsonModule": true,


import * as data from '../../../../../package.json';
 
let packageJson = data
//make it crash: console.log(data.property)
console.log(packageJson.version)

export const environment = {
  production: false,
  appVersion: packageJson.version,

  // Replace this with your server API URL
  // We assigned it to empty string for the Fake API
  // apiUrl: 'https://localhost:4000',
  apiUrl: 'http://localhost:4000',

  //settings: {
    // auth: {
    //   // OAuth2 credentials
    //   clientId: 'fake-client-id', // <Your auth client id here>
    //   secretId: 'fake-secret-id', // <Your auth secret id here>

    //   // keys to store tokens at local storage
    //   accessTokenKey: 'DoPS3ZrQjM',
    //   refreshTokenKey: 'nmlP8PW2nb',
    // },
  //},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

