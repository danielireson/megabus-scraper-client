import moment from 'moment'

import NotificationService from './NotificationService'

var DateService = {
  getLengthBetweenDates (startDate, endDate) {
    return moment(endDate, 'DD-MM-YYYY').diff(moment(startDate, 'DD-MM-YYYY'), 'days')
  },
  isValidDate (date) {
    if (!moment(date, 'DD-MM-YYYY').isValid()) {
      NotificationService.showMessage('Dates should formatted as DD-MM-YYYY', 'danger')
      return false
    }
    return true
  },
  isEndDateAfterStartDate (startDate, endDate) {
    if (moment(endDate, 'DD-MM-YYYY') < moment(startDate, 'DD-MM-YYYY')) {
      NotificationService.showMessage('Search start date is after the end date', 'danger')
      return false
    }
    return true
  },
  isMaxOneMonthInLength (startDate, endDate) {
    if (this.getLengthBetweenDates(startDate, endDate) > 31) {
      NotificationService.showMessage('Search dates must be within one month of each other', 'danger')
      return false
    }
    return true
  }
}

export default DateService
