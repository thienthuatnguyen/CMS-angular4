// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://jsonplaceholder.typicode.com',
  apiAccessKey: '',
  apiAccessSecret: '',
  firebase: {
    apiKey: 'AIzaSyCgaUcJ-vrr78r0_ffx29pPSL9euwDXSvs',
    authDomain: 'beecow-dev.firebaseapp.com',
    databaseURL: 'https://beecow-dev.firebaseio.com',
    projectId: 'beecow-dev',
    storageBucket: 'beecow-dev.appspot.com',
    messagingSenderId: '577064194723'
  },
  defaultImage: 'https://dm4fv4ltmsvz0.cloudfront.net/5001.jpg',
  ggAnalytic: false
};
