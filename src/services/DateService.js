import NotificationService from './NotificationService.js'

var DateService = {
  getLengthBetweenDates (startDate, endDate) {
    let oneDay = 24 * 60 * 60 * 1000
    let numberOfDays = Math.abs(this.getDateObjectFromString(startDate).getTime() - this.getDateObjectFromString(endDate).getTime()) / oneDay
    numberOfDays = Math.round(numberOfDays)
    return numberOfDays
  },
  getDateObjectFromString (string) {
    let components = string.split('-')
    let day = components[0]
    let month = components[1]
    let year = components[2]
    return new Date(year, month - 1, day)
  },
  isValidDate (string) {
    let result = false
    let todaysYear = new Date().getFullYear()
    let comp = string.split('-')
    let day = comp[0]
    let month = comp[1]
    let year = comp[2]

    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= todaysYear && year <= todaysYear + 1) {
      let date = new Date(comp[2], comp[1] - 1, comp[0])
      if (date) {
        result = true
      }
    }

    if (!result) {
      NotificationService.showMessage('Dates should formatted as DD-MM-YYYY and be within one year', 'danger')
    }

    return result
  },
  isEndDateAfterStartDate (startDate, endDate) {
    if (this.getDateObjectFromString(startDate) < this.getDateObjectFromString(endDate)) {
      return true
    } else {
      NotificationService.showMessage('Search start date is after the end date', 'danger')
      return false
    }
  },
  isMaxOneMonthInLength (startDate, endDate) {
    if (this.getLengthBetweenDates(startDate, endDate) > 31) {
      NotificationService.showMessage('You can only search across a maximum of 31 days', 'danger')
      return false
    } else {
      return true
    }
  }
}

export default DateService
