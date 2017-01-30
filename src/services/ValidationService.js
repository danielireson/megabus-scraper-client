import DateService from './DateService'
import LocationService from './LocationService'

var ValidationService = {
  isValid (searchParams) {
    if (this._runValidation(searchParams)) {
      return true
    }
    return false
  },
  _runValidation (searchParams) {
    return this._runDateValidation(searchParams) && this._runLocationValidation(searchParams)
  },
  _runDateValidation (searchParams) {
    return (
      DateService.isValidDate(searchParams.startDate) &&
      DateService.isValidDate(searchParams.endDate) &&
      DateService.isInTheFuture(searchParams.startDate) &&
      DateService.isEndDateAfterStartDate(searchParams.startDate, searchParams.endDate) &&
      DateService.isMaxOneMonthInLength(searchParams.startDate, searchParams.endDate)
    )
  },
  _runLocationValidation (searchParams) {
    return (
      LocationService.isValidLocation(searchParams.originLocation) &&
      LocationService.isValidLocation(searchParams.destinationLocation) &&
      LocationService.isNotTheSameLocation(searchParams.originLocation, searchParams.destinationLocation)
    )
  }
}

export default ValidationService
