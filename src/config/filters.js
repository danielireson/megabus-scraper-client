import Vue from 'vue'

Vue.filter('dateToSlashes', function (date) {
  let transformedDate = date
  for (let i = 0; i < date.length; i++) {
    transformedDate = transformedDate.replace('-', '/')
  }
  return transformedDate
})
