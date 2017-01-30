import Vue from 'vue'

import NotificationService from './NotificationService'

var LocationService = {
  state: {
    locations: {}
  },
  isValidLocation (location) {
    if (!(location.toLowerCase() in this.state.locations)) {
      NotificationService.showMessage('Invalid location selected', 'danger')
      return false
    }
    return true
  },
  toFriendlyFormat (location) {
    let noDashes = location.replace(/-/g, ' ')
    return noDashes.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  },
  _getLocations () {
    Vue.http.get('locations').then((response) => {
      this.state.locations = response.data.data
    }, () => {
      NotificationService.showMessage('Error getting locations', 'danger')
    })
  }
}

LocationService._getLocations()
export default LocationService
