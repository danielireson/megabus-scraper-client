import DateService from './DateService'
import LocationService from './LocationService'
import NotificationService from './NotificationService'

var ValidationService = {
  isValid (searchParams) {
    if (this._runValidation(searchParams)) {
      return true
    }
    return false
  },
  _runValidation (searchParams) {
    return (
      this._runNotNullValidation(searchParams) &&
      this._runDateValidation(searchParams) &&
      this._runLocationValidation(searchParams)
    )
  },
  _runNotNullValidation (searchParams) {
    for (let key in searchParams) {
      if (searchParams[key] === '') {
        NotificationService.showMessage('Please fill out ' + this._camelCaseToFriendlyText(key), 'danger')
        return false
      }
    }
    return true
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
  },
  _camelCaseToFriendlyText (str) {
    let withSpaces = str.split(/(?=[A-Z])/).join(' ')
    let capitalisedFirst = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)
    return capitalisedFirst
  }
}

export default ValidationService
