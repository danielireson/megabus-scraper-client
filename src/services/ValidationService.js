import DateService from './DateService.js'
import LocationService from './LocationService.js'

var ValidationService = {
  validate (searchParams) {
    if (DateService.isValidDate(searchParams.startDate) &&
      DateService.isValidDate(searchParams.startDate) &&
      DateService.isEndDateAfterStartDate(searchParams.startDate, searchParams.endDate) &&
      LocationService.isValidLocation(searchParams.originLocation) &&
      LocationService.isValidLocation(searchParams.destinationLocation)) {
      return true
    } else {
      return false
    }
  }
}

export default ValidationService
