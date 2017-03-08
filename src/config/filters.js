import Vue from 'vue'
import moment from 'moment'

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
