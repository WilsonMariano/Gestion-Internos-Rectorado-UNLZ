// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cantPagListados: 10,
  // rutaApi: 'http://l9000590.ferozo.com/apiInternos/'
  rutaApi: 'http://172.16.4.34/internos/apiInternos/index.php/'
  // rutaApi: 'http://localhost:8080/internos/apiInternos/index.php/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
