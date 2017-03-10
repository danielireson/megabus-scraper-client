import Vue from 'vue'

import {BASE_MEGABUS_URL} from '../config/vars'

import DateService from '../services/DateService'
import LocationService from '../services/LocationService'
import NotificationService from './NotificationService'

var SearchService = {
  state: {
    loading: true,
    results: [],
    prices: {
      lowestPrice: null,
      firstThirdPriceBound: null,
      secondThirdPriceBound: null
    }
  },
  getResults (searchParams) {
    this._makeResultsStructureArray(searchParams.startDate, searchParams.endDate)
    Vue.http.get(this._buildApiRequestUrl(searchParams)).then((response) => {
      this.state.results = this._chunkArrayToWeeks(response.data.data)
      this._setPriceBounds(response.data.stats.lowestPrice, response.data.stats.highestPrice)
      this.state.loading = false
    }, (error) => {
      NotificationService.showMessage(error.data.message, 'danger', false)
    })
  },
  goToMegabusResult (searchParams, date) {
    let originCode = LocationService.getLocationCode(searchParams.originLocation)
    let destinationCode = LocationService.getLocationCode(searchParams.destinationLocation)
    let url = BASE_MEGABUS_URL + '&originCode=' + originCode
    url += '&destinationCode=' + destinationCode
    url += '&outboundDepartureDate=' + date.split('-').join('%2f')
    window.open(url)
  },
  _buildApiRequestUrl (searchParams) {
    let url = 'search/'
    url += searchParams.originLocation + '/'
    url += searchParams.destinationLocation + '/'
    url += searchParams.startDate + '/'
    url += searchParams.endDate + '/'
    return url
  },
  _setPriceBounds (lowestPrice, highestPrice) {
    lowestPrice = Number(lowestPrice)
    highestPrice = Number(highestPrice)
    let range = highestPrice - lowestPrice
    let boundRange = range / 3
    this.state.prices.lowestPrice = lowestPrice
    this.state.prices.firstThirdPriceBound = lowestPrice + boundRange
    this.state.prices.secondThirdPriceBound = lowestPrice + (boundRange * 2)
  },
  _makeResultsStructureArray (startDate, endDate) {
    // Builds the required column layout before the api returns results
    let daysArray = []
    let lengthBetweenDates = DateService.getLengthBetweenDates(startDate, endDate)
    for (let day = 0; day <= lengthBetweenDates; day++) {
      daysArray.push(day)
    }
    this.state.results = this._chunkArrayToWeeks(daysArray)
  },
  _chunkArrayToWeeks (array) {
    let resultsChunked = []
    for (let i = 0; i < array.length; i += 7) {
      let temp = array.slice(i, i + 7)
      resultsChunked.push(temp)
    }

    return resultsChunked
  }
}

export default SearchService
