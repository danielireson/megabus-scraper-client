import LocationsJson from '../locations.json'
import NotificationService from './NotificationService.js'

var LocationService = {
  getLocations () {
    return LocationsJson
  },
  lookupCodeFromLocation (string) {
    let result = false
    LocationsJson.forEach((location) => {
      if (location.name.toLowerCase() === string) {
        result = location.code
      }
    })
    return result
  },
  isValidLocation (string) {
    let result = false
    LocationService.getLocations().forEach((location) => {
      if (location.name.toLowerCase() === string) {
        result = true
      }
    })

    if (!result) {
      NotificationService.showMessage('You\'ve passed an invalid location', 'danger')
    }

    return result
  }
}

export default LocationService
