import Vue from 'vue'

import NotificationService from './NotificationService'

var LocationService = {
  state: {
    locations: {}
  },
  getLocationCode (location) {
    return this.state.locations[location.toLowerCase()]
  },
  toFriendlyFormat (location) {
    let noDashes = location.replace(/-/g, ' ')
    return noDashes.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
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
