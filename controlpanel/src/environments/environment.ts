// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBupsXPIUwm_Vv4p4AnPbee29x9ZOHOk_4',
    authDomain: 'hajj-hackathon.firebaseapp.com',
    databaseURL: 'https://hajj-hackathon.firebaseio.com',
    projectId: 'hajj-hackathon',
    storageBucket: 'hajj-hackathon.appspot.com',
    messagingSenderId: '343732346255'
  }
};
