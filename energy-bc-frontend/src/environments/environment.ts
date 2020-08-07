// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_URL: 'https://capspire-bc.herokuapp.com/',
  API_URL: 'http://127.0.0.1:5000/',
  CHAIN: 'chain',
  ADD_TRANSACTION: 'new_transaction',
  PENDING_TRANSACTION: 'pending_tx',
  MINE_BLOCK: 'mine',
  CHECK_CHAIN_VALIDITY: 'check_chain_validity'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
