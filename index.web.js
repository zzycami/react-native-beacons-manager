'use strict';

import { Platform } from 'react-native';

function requestAlwaysAuthorization() {
}

/**
 * request when app in use authorization (bare minimum for beacons)
 * IMPORTANT: To be effective your info.plist file should have 'Privacy - Location When In Use Usage Description' key defined (hopefully 'react-native init' should have set it for you)
 */
function requestWhenInUseAuthorization() {
}

/**
 * get authorization status
 *
 * @returns {() => AuthorizationStatus} instant callback (not async)
 */
function getAuthorizationStatus() {
}

/**
 * start monitoring for a region
 *
 * @param {BeaconRegion} region region to monitor (identifier + uuid -> major and minor are optional)
 */
function startMonitoringForRegion(region) {
}

/**
* start ranging for a region
*
* @param {BeaconRegion} region region to scan (identifier + uuid -> major and minor are optional)
*/
function startRangingBeaconsInRegion(region){
}

/**
* stop monitoring for a region
*
* @param {BeaconRegion} region region (identifier + uuid -> major and minor are optional)
*/
function stopMonitoringForRegion(region){
}

/**
* stop ranging for a region
*
* @param {BeaconRegion} region region (identifier + uuid -> major and minor are optional)
*/
function stopRangingBeaconsInRegion(region) {
}

function startUpdatingLocation() {}

function stopUpdatingLocation(){}


export default {
  requestAlwaysAuthorization,
  requestWhenInUseAuthorization,
  getAuthorizationStatus,
  startMonitoringForRegion,
  startRangingBeaconsInRegion,
  stopMonitoringForRegion,
  stopRangingBeaconsInRegion,
  startUpdatingLocation,
  stopUpdatingLocation
};
