// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  adsense: {
    adClient: 'pub-9785777104044346',
    show: true
  },
  url_api:'https://dionisium-api.onrender.com/api',
  firebase:{
  apiKey: "AIzaSyB6Tqm02OS7gDQZHrTircSESMKrgT9qe6o",
  authDomain: "dionisium-users.firebaseapp.com",
  projectId: "dionisium-users",
  storageBucket: "dionisium-users.appspot.com",
  messagingSenderId: "590230766611",
  appId: "1:590230766611:web:92d7bdd96e6c299fbe6be6",
  measurementId: "G-XLME18EWGQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
