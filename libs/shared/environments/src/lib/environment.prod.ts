
// Change tsconfig.base.ts file to import on root dir  package.json
// "compilerOptions": {
//   ...
//   "resolveJsonModule": true,



import * as data from '../../../../../package.json';





let packageJson = data
//make it crash: console.log(data.property)
console.log(packageJson.version)

export const environment = {
  production: true,
  appVersion: packageJson.version,

  // Replace this with your server API URL
  // We assigned it to empty string for the Fake API
  apiUrl: '',

  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id', // <Your auth client id here>
      secretId: 'fake-secret-id', // <Your auth secret id here>

      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb',
    },
  },
};
