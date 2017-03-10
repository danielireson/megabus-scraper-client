import Vue from 'vue'
import moment from 'moment'

Vue.filter('locationKeyToFriendlyText', function (key) {
  let noDashes = key.replace(/-/g, ' ')
  return noDashes.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
})

Vue.filter('dateToSlashes', function (date) {
  let transformedDate = date
  for (let i = 0; i < date.length; i++) {
    transformedDate = transformedDate.replace('-', '/')
  }
  return transformedDate
})

Vue.filter('dateToDayOfWeek', function (date) {
  return moment(date, 'DD-MM-YYYY').format('dddd')
})

Vue.filter('dateToCalendar', function (date) {
  return moment(date, 'DD-MM-YYYY').format('MMMM Do YYYY')
})
