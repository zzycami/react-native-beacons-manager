// @flow

'use strict';

import { NativeModules } from 'react-native';
const RNiBeacons = NativeModules.RNiBeacon;

type BeaconRegion = {
  identifier: string,
  uuid: string,
  minor?: number,
  major?: number
};

type AuthorizationStatus =
| 'authorizedAlways'
| 'authorizedWhenInUse'
| 'denied'
| 'notDetermined'
| 'restricted';

type Proximity = 
| 'unknown'
| 'far'
| 'near'
| 'immediate'
| '';

/**
 * request always authorization (mandatory when ranging beacons but energy drain)
 * IMPORTANT: To be effective your info.plist file should have 'Privacy - Location Always Usage Description' key defined
 */
function requestAlwaysAuthorization(): void {
  RNiBeacons.requestAlwaysAuthorization();
}

/**
 * request when app in use authorization (bare minimum for beacons)
 * IMPORTANT: To be effective your info.plist file should have 'Privacy - Location When In Use Usage Description' key defined (hopefully 'react-native init' should have set it for you)
 */
function requestWhenInUseAuthorization(): void {
  RNiBeacons.requestWhenInUseAuthorization();
}

/**
 * get authorization status
 *
 * @returns {() => AuthorizationStatus} instant callback (not async)
 */
function getAuthorizationStatus(): () => AuthorizationStatus {
  return RNiBeacons.getAuthorizationStatus((status: AuthorizationStatus) => status);
}

/**
 * start monitoring for a region
 *
 * @param {BeaconRegion} region region to monitor (identifier + uuid -> major and minor are optional)
 */
function startMonitoringForRegion(region: BeaconRegion): void {
  return RNiBeacons.startMonitoringForRegion(region);
}

/**
* start ranging for a region
*
* @param {BeaconRegion} region region to scan (identifier + uuid -> major and minor are optional)
*/
function startRangingBeaconsInRegion(region: BeaconRegion): Promise<any> {
  return new Promise(
    (resolve, reject) => {
      try {
          RNiBeacons.startRangingBeaconsInRegion(region);
          resolve();
        } catch (error) {
          reject(error);
        }
    }
  );
}

/**
* stop monitoring for a region
*
* @param {BeaconRegion} region region (identifier + uuid -> major and minor are optional)
*/
function stopMonitoringForRegion(region: BeaconRegion): Promise<any> {
  return new Promise(
    (resolve, reject) => {
      try {
        RNiBeacons.stopMonitoringForRegion(region);
        resolve();
      } catch (error) {
        reject(error);
      }
    }
  );
}

/**
* stop ranging for a region
*
* @param {BeaconRegion} region region (identifier + uuid -> major and minor are optional)
*/
function stopRangingBeaconsInRegion(region: BeaconRegion): void {
  return RNiBeacons.stopRangingBeaconsInRegion(region);
}


export {
  requestAlwaysAuthorization,
  requestWhenInUseAuthorization,
  getAuthorizationStatus,
  startMonitoringForRegion,
  startRangingBeaconsInRegion,
  stopMonitoringForRegion,
  stopRangingBeaconsInRegion
};


export default RNiBeacons;
