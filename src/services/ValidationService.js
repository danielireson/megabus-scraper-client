import DateService from './DateService.js'
import LocationService from './LocationService.js'

var ValidationService = {
  validate (searchParams) {
    DateService.isValidDate(searchParams.startDate)
    DateService.isValidDate(searchParams.endDate)
    DateService.isEndDateAfterStartDate(searchParams.startDate, searchParams.endDate)
    LocationService.isValidLocation(searchParams.originLocation)
    LocationService.isValidLocation(searchParams.destinationLocation)
  }
}

export default ValidationService
