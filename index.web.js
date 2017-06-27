'use strict';

import { Platform } from 'react-native';

export default class RNiBeacons {
  constructor() {}

  requestAlwaysAuthorization() {}

  requestWhenInUseAuthorization() {}

  getAuthorizationStatus() {}

  startMonitoringForRegion(region) {}

  startRangingBeaconsInRegion(region) {}

  stopMonitoringForRegion(region) {}

  stopRangingBeaconsInRegion(region: BeaconRegion) {}
}
