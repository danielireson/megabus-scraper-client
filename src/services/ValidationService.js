import DateService from './DateService'
import LocationService from './LocationService'

var ValidationService = {
  validate (searchParams) {
    if (DateService.isValidDate(searchParams.startDate) &&
      DateService.isValidDate(searchParams.startDate) &&
      DateService.isEndDateAfterStartDate(searchParams.startDate, searchParams.endDate) &&
      DateService.isMaxOneMonthInLength(searchParams.startDate, searchParams.endDate) &&
      LocationService.isValidLocation(searchParams.originLocation) &&
      LocationService.isValidLocation(searchParams.destinationLocation)) {
      return true
    } else {
      return false
    }
  }
}

export default ValidationService
