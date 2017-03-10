import Vue from 'vue'

import NotificationService from './NotificationService'

var LocationService = {
  state: {
    locations: {}
  },
  getLocationCode (location) {
    return this.state.locations[location.toLowerCase()]
  },
  isValidLocation (location) {
    if (!(location.toLowerCase() in this.state.locations)) {
      NotificationService.showMessage('Invalid location selected', 'danger')
      return false
    }
    return true
  },
  isNotTheSameLocation (locationOne, locationTwo) {
    if (locationOne === locationTwo) {
      NotificationService.showMessage('You have selected the same origin and destination location', 'danger')
      return false
    }
    return true
  },
  _getLocations () {
    Vue.http.get('locations').then((response) => {
      this.state.locations = response.data.data
    }, () => {
      NotificationService.showMessage('Error getting locations', 'danger', false)
    })
  }
}

LocationService._getLocations()
export default LocationService
