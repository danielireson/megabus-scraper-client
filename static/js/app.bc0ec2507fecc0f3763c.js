webpackJsonp([2,0],[function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=a(71),s=o(n),i=a(69),r=o(i),c=a(70),d=o(c),l=a(68),u=o(l),h=a(65),p=o(h),m=a(64),f=o(m),v=a(66),g=o(v),b=a(8),y=o(b);s["default"].use(r["default"]),s["default"].use(d["default"]),s["default"].use(u["default"]),s["default"].filter("titleCase",function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}),s["default"].http.headers.common["X-Authorization"]=y["default"];var x=new r["default"]({hashbang:!1});x.map({"/":{component:p["default"]},"/about":{component:f["default"]},"/search/:originLocation/:destinationLocation/:startDate/:endDate":{name:"search",component:g["default"]}}),x.redirect({"*":"/"});var w=s["default"].extend({});x.start(w,"#app")},,,,,function(e,t,a){var o,n;a(49),o=a(16),n=a(59),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,a){var o,n;a(51),o=a(17),n=a(60),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={state:{visible:!1,text:"",type:"",timer:null},showMessage:function(e){var t=arguments.length<=1||void 0===arguments[1]?"info":arguments[1];this.state.text=e,this.state.type=t,this.state.visible=!0,clearTimeout(this.state.timer);var a=this;this.state.timer=setTimeout(function(){a.state.visible=!1},7e3)},hideMessage:function(){this.state.visible=!1,this.state.text=""}};t["default"]=a},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.API_DOMAIN="//megabus-scraper-server.digitalbydan.com/",t.API_ROOT="api/v1/",t.API_KEY="o0yBWAgXX2xuwyvXqrLbHdzCx2JQj5Pf4wjXpwuYpQYOlr91LAYxpdybuxc6",t.BASE_MEGABUS_URL="http://uk.megabus.com/JourneyResults.aspx?inboundDepartureDate=&passengerCount=1&transportType=-1&concessionCount=0&nusCount=0&outboundWheelchairSeated=0&outboundOtherDisabilityCount=0&inboundWheelchairSeated=0&inboundOtherDisabilityCount=0&outboundPcaCount=0&inboundPcaCount=0&promotionCode=&withReturn=0&accept=perm"},,,,,,function(e,t){e.exports=[{code:3,name:"Axminster"},{code:4,name:"Banbury"},{code:5,name:"Barnsley"},{code:6,name:"Bath Spa"},{code:7,name:"Bedford"},{code:8,name:"Birmingham"},{code:9,name:"Birmingham International Airport"},{code:128,name:"Blackburn"},{code:250,name:"Bodmin / St. Austell"},{code:10,name:"Bolton"},{code:11,name:"Bournemouth"},{code:12,name:"Bradford"},{code:143,name:"Brighton"},{code:13,name:"Bristol"},{code:225,name:"Bristol (Aztec)"},{code:226,name:"Bristol (Cribbs Causeway)"},{code:227,name:"Bristol (Filton)"},{code:249,name:"Bristol Airport"},{code:14,name:"Bristol UWE"},{code:16,name:"Camborne"},{code:17,name:"Cambridge"},{code:19,name:"Canterbury"},{code:24,name:"Cheltenham"},{code:130,name:"Chester"},{code:25,name:"Chesterfield"},{code:122,name:"Colchester"},{code:27,name:"Coventry"},{code:144,name:"Crawley"},{code:162,name:"Daventry"},{code:30,name:"Derby"},{code:31,name:"Doncaster"},{code:119,name:"East Dereham"},{code:33,name:"East Midlands Parkway"},{code:36,name:"Exeter"},{code:251,name:"Falmouth"},{code:39,name:"Gloucester"},{code:177,name:"Grantham"},{code:42,name:"Havant"},{code:145,name:"High Wycombe"},{code:44,name:"Honiton"},{code:45,name:"Huddersfield"},{code:46,name:"Hull"},{code:123,name:"Ipswich"},{code:178,name:"Kettering"},{code:120,name:"Kings Lynn"},{code:116,name:"Lancaster"},{code:52,name:"Leeds"},{code:53,name:"Leicester"},{code:54,name:"Liverpool"},{code:56,name:"London"},{code:57,name:"Loughborough"},{code:141,name:"Luton"},{code:58,name:"Manchester"},{code:59,name:"Middlesbrough"},{code:60,name:"Milton Keynes"},{code:62,name:"Newbury"},{code:63,name:"Newcastle"},{code:65,name:"Newquay"},{code:150,name:"Newton Abbot"},{code:166,name:"Northampton"},{code:66,name:"Norwich"},{code:67,name:"Norwich, University of East Anglia"},{code:68,name:"Nottingham"},{code:71,name:"Oxford"},{code:72,name:"Paignton"},{code:74,name:"Penzance"},{code:121,name:"Peterborough"},{code:77,name:"Plymouth"},{code:78,name:"Poole"},{code:79,name:"Portsmouth"},{code:80,name:"Preston"},{code:81,name:"Reading"},{code:82,name:"Redruth"},{code:84,name:"Rugby"},{code:86,name:"Salisbury"},{code:88,name:"Scunthorpe"},{code:90,name:"Sheffield"},{code:91,name:"Silverstone"},{code:93,name:"Southampton"},{code:108,name:"Southampton Airport"},{code:165,name:"St Erth"},{code:164,name:"Stockport"},{code:118,name:"Stoke-On-Trent"},{code:96,name:"Sunderland"},{code:98,name:"Swindon"},{code:100,name:"Taunton"},{code:109,name:"Thetford"},{code:101,name:"Torquay"},{code:167,name:"Towcester"},{code:102,name:"Wakefield/Woolley Edge"},{code:103,name:"Warrington"},{code:104,name:"Weymouth"},{code:129,name:"Wigan"},{code:105,name:"Winchester"},{code:136,name:"Worcester"},{code:142,name:"Worthing"},{code:106,name:"Yeovil Junction"},{code:107,name:"York"}]},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t,a){return this.l10n=(0,i["default"])({},r.init.prototype.l10n,a),r.init.call(this,e,t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(21),i=o(s),r=a(55);n.prototype=r.init.prototype,t["default"]={partials:{singleInput:a(56),wrapperInput:a(57)},props:{alignment:String,config:{type:Object,"default":function(){return{}}},l10n:{type:Object,"default":function(){return{}}},placeholder:{type:String,"default":"Pick date"},readonly:Boolean,value:String},ready:function(){this.create()},beforeDestroy:function(){this.destroy()},attached:function(){this.create()},detached:function(){this.destroy()},methods:{create:function(){var e=this;this.datepicker||(this.datepicker=new n(this.$el.nextSibling,this.config,this.l10n),this.datepicker.set("onChange",function(t,a){e.$set("value",a)}))},destroy:function(){this.datepicker&&!this["static"]&&(this.datepicker.destroy(),this.datepicker=null)}},computed:{wrap:function(){return!!this.config.wrap},"static":function(){return!!this.config["static"]},name:function(){return this.wrap?"wrapperInput":"singleInput"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{msg:"Hello World!"}}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),s=o(n);t["default"]={data:function(){return{notification:s["default"]}}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),s=o(n),i=a(5),r=o(i);t["default"]={data:function(){return{msg:"Home"}},components:{HeaderComponent:s["default"],FooterComponent:r["default"]}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(14),s=o(n),i=a(67),r=o(i),c=a(6),d=o(c),l=a(5),u=o(l);t["default"]={data:function(){return{locations:s["default"],searchParams:{originLocation:"",destinationLocation:"",startDate:"",endDate:""}}},components:{HeaderComponent:d["default"],FooterComponent:u["default"],Datepicker:r["default"]}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(14),s=o(n),i=a(7),r=o(i),c=a(6),d=o(c),l=a(5),u=o(l),h=a(8);t["default"]={data:function(){return{locations:s["default"],notification:r["default"],days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],searchParams:{originLocation:this.$route.params.originLocation,destinationLocation:this.$route.params.destinationLocation,startDate:this.$route.params.startDate,endDate:this.$route.params.endDate},resultsStructure:[],resultsLong:[],lowestPrice:999,highestPrice:0,firstThirdPriceBound:0,secondThirdPriceBound:0}},computed:{originCode:function(){return this.lookupCodeFromLocation(this.searchParams.originLocation)},destinationCode:function(){return this.lookupCodeFromLocation(this.searchParams.destinationLocation)},resultsChunked:function(){return this.chunkArrayToWeeks(this.resultsLong)}},ready:function(){this.validateFields(),this.makeResultsStructureArray(),this.getResults()},components:{HeaderComponent:d["default"],FooterComponent:u["default"]},methods:{validateFields:function(){this.isEndDateAfterStartDate()&&this.isValidLocation(this.searchParams.originLocation)&&this.isValidLocation(this.searchParams.destinationLocation)&&this.isValidDate(this.searchParams.startDate)&&this.isValidDate(this.searchParams.endDate)||this.$route.router.go("/")},newDateObject:function(e){var t=e.split("-"),a=t[0],o=t[1],n=t[2];return new Date(n,o-1,a)},isEndDateAfterStartDate:function(){var e=!1;return this.newDateObject(this.searchParams.startDate)<this.newDateObject(this.searchParams.endDate)&&(e=!0),e||this.notification.showMessage("Search start date is after the end date","danger"),e},isValidDate:function(e){var t=!1,a=(new Date).getFullYear(),o=e.split("-"),n=o[0],s=o[1],i=o[2];if(n>=1&&n<=31&&s>=1&&s<=12&&i>=a&&i<=a+1){var r=new Date(o[2],o[1]-1,o[0]);r&&(t=!0)}return t||this.notification.showMessage("Dates should formatted as DD/MM/YYYY and be in the future","danger"),t},getLengthBetweenDates:function(){var e=864e5,t=Math.abs(this.newDateObject(this.$route.params.startDate).getTime()-this.newDateObject(this.$route.params.endDate).getTime())/e;return t=Math.round(t)},isValidLocation:function(e){var t=!1;return this.locations.forEach(function(a){a.name.toLowerCase()===e&&(t=!0)}),t||this.notification.showMessage("A location passed was not in the Megabus UK station list","danger"),t},lookupCodeFromLocation:function(e){var t=!1;return this.locations.forEach(function(a){a.name.toLowerCase()===e&&(t=a.code)}),t},makeResultsStructureArray:function(){for(var e=[],t=0;t<=this.getLengthBetweenDates();t++)e.push(t);for(var a=this.chunkArrayToWeeks(e),o=0;o<a.length;o++)for(var n=0;n<a[o].length;n++)a[o][n]=n;this.resultsStructure=a},chunkArrayToWeeks:function(e){for(var t=[],a=0;a<e.length;a+=7){var o=e.slice(a,a+7);t.push(o)}return t},callScraperApi:function(e){var t=h.API_DOMAIN+h.API_ROOT+"search/";return t+=this.originCode+"/",t+=this.destinationCode+"/",t+=e,this.$http.get(t)},getResults:function(){var e=this;this.resultsLong=[];for(var t=function(t){var a=e.newDateObject(e.searchParams.startDate);a.setDate(a.getDate()+t);var o=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear();e.callScraperApi(o).then(function(t){var a={date:o,results:[]};for(var n in t.data.data)a.results.push({journey:t.data.data[n].journey,time:t.data.data[n].time,duration:t.data.data[n].duration,price:parseFloat(t.data.data[n].price)}),e.priceCheck(t.data.data[n].price),e.setPriceBounds();e.resultsLong.push(a)})},a=0;a<=this.getLengthBetweenDates();a++)t(a)},priceCheck:function(e){e=parseFloat(e),e<this.lowestPrice&&(this.lowestPrice=e),e>this.highestPrice&&(this.highestPrice=e)},setPriceBounds:function(){var e=this.highestPrice-this.lowestPrice,t=e/3;this.firstThirdPriceBound=this.lowestPrice+t,this.secondThirdPriceBound=this.lowestPrice+2*t},goToMegabusWebsiteResult:function(e){var t=h.BASE_MEGABUS_URL+"&originCode="+this.originCode;t+="&destinationCode="+this.destinationCode,t+="&outboundDepartureDate="+this.replaceAll(e,"-","%2f"),window.open(t)},replaceAll:function(e,t,a){return e.split(t).join(a)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t){e.exports="<input class=input type=text :placeholder=placeholder :readonly=readonly v-model=value /> "},function(e,t){e.exports='<p class="control has-addons flatpickr" data-wrap=true data-clickopens=false :class="{ [`has-addons-${alignment}`]: alignment }"> <input class=input type=text :placeholder=placeholder :readonly=readonly v-model=value data-input/> <slot></slot> </p> '},function(e,t){e.exports=" <partial :name=name> <slot></slot> </partial> "},function(e,t){e.exports=' <footer class=footer> <div class=container> <div class="content has-text-centered"> <p><strong>Megabus Search</strong> by <a href=http://digitalbydan.com>Daniel Ireson</a></p> <p>Not associated with megabus.com</p> </div> </div> </footer> '},function(e,t){e.exports=' <section class="hero is-info is-medium"> <div class=hero-head> <header class=nav> <div class=container> <div class=nav-left> <a v-link="\'/\'" class="header-logo nav-item"> <i class="fa fa-search"></i>Megabus Search </a> </div> <div class="nav-right nav-menu"> <span class=nav-item> <a href=https://github.com/danielireson/megabus-scraper-client class="button is-info is-inverted" target=_blank> <span class=icon> <i class="fa fa-github"></i> </span> <span>Client</span> </a> </span> <span class=nav-item> <a href=https://github.com/danielireson/megabus-scraper-server class="button is-info is-inverted" target=_blank> <span class=icon> <i class="fa fa-github"></i> </span> <span>Scraper</span> </a> </span> </div> </div> </header> </div> </section> <div v-show=notification.state.visible class="notification is-{{ notification.state.type }}"> <button @click=notification.hideMessage() class=delete></button> {{ notification.state.text }} </div> '},function(e,t){e.exports=' <header-component></header-component> <section class="hero is-info is-medium"> <div class=hero-body> <div class="container has-text-centered"> <h1 class=title> About Megabus Search </h1> </div> </div> </section> <footer-component></footer-component> '},function(e,t){e.exports=' <header-component></header-component> <section class="hero is-info is-medium"> <div class=hero-body> <div class="container has-text-centered"> <h1 class=title> The quickest way to search Megabus UK prices </h1> </div> </div> </section> <div class=columns> <div class="column is-half is-offset-one-quarter"> <section class=section> <div class=container> <div class="columns is-mobile"> <div class="column is-half"> <label class=label>Origin</label> <p class=control> <span class="select is-fullwidth"> <select v-model=searchParams.originLocation> <option value="" disabled=disabled selected=selected>Select location</option> <option v-for="location in locations" :value=location.name.toLowerCase()>{{ location.name }}</option> </select> </span> </p> <label class=label>Start date for search</label> <div id=startDate> <datepicker placeholder="Select date" :config="{ dateFormat: \'d-m-Y\' }" :value.sync=searchParams.startDate> </datepicker> </div> </div> <div class="column is-half"> <label class=label>Destination</label> <p class=control> <span class="select is-fullwidth"> <select v-model=searchParams.destinationLocation> <option value="" disabled=disabled selected=selected>Select location</option> <option v-for="location in locations" :value=location.name.toLowerCase()>{{ location.name }}</option> </select> </span> </p> <label class=label>End date for search</label> <div id=endDate> <datepicker placeholder="Select date" :config="{ dateFormat: \'d-m-Y\' }" :value.sync=searchParams.endDate> </datepicker> </div> </div> </div> <p class=control> <a href v-link="{name: \'search\', params: searchParams}" class="button is-fullwidth is-primary is-outlined"> Search for prices </a> </p> </div> </section> </div> </div> <footer-component></footer-component> '},function(e,t){e.exports=' <header-component></header-component> <section class="hero is-info is-small"> <div class=hero-body> <div class="container has-text-centered"> <h1 class=title> {{ searchParams.originLocation | titleCase }} to {{ searchParams.destinationLocation | titleCase }} </h1> <h2 class=subtitle>{{ searchParams.startDate }} - {{ searchParams.endDate }}</h2> </div> </div> </section> <section class=search-results> <div class="container has-text-centered is-hidden-mobile is-hidden-tablet-only"> <div class=columns> <div v-for="day in days" class=column> {{ day }} </div> </div> </div> <div class=container> <div v-for="week in resultsStructure" class="columns has-text-centered is-block-tablet is-flex-desktop"> <div v-for="day in week" class=column> <div class=box> <a v-show=!resultsChunked[resultsStructure.indexOf(week)] class="button is-loading box-loading"></a> <h3 class=search-results-date>{{ resultsChunked[resultsStructure.indexOf(week)][day].date }}</h3> <div v-show=resultsChunked[resultsStructure.indexOf(week)][day].results v-for="result in resultsChunked[resultsStructure.indexOf(week)][day].results" class=search-result> <div class="columns is-gapless"> <div class=column> <span class=search-result-time>{{ result.time }}</span> </div> <div class=column> <a @click.prevent=goToMegabusWebsiteResult(resultsChunked[resultsStructure.indexOf(week)][day].date) :class="{\'button\': true, \'is-small\': true, \'search-result-price\': true, \'price-low\': result.price <= firstThirdPriceBound, \'price-medium\': result.price > firstThirdPriceBound && result.price <= secondThirdPriceBound, \'price-high\': result.price > secondThirdPriceBound}">£{{ result.price }}</a> </div> </div> </div> <div v-show="resultsChunked[resultsStructure.indexOf(week)][day].results.length === 0"> No results </div> </div> </div> <div v-if="week.length % 7 !== 0" v-for="i in 7 - week.length % 7" class="column is-hidden-mobile is-hidden-tablet-only"> </div> </div> </div> </section> <footer-component></footer-component> '},function(e,t,a){var o,n;a(50),o=a(18),n=a(61),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,a){var o,n;a(52),o=a(19),n=a(62),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,a){var o,n;a(53),o=a(20),n=a(63),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,a){var o,n;a(54),o=a(15),n=a(58),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}]);
//# sourceMappingURL=app.bc0ec2507fecc0f3763c.js.map