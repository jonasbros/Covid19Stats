(function(a){function t(t){for(var e,u,i=t[0],l=t[1],s=t[2],c=0,d=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(a[e]=l[e]);S&&S(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var a,t=0;t<o.length;t++){for(var n=o[t],e=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(e=!1)}e&&(o.splice(t--,1),a=u(u.s=n[0]))}return a}var e={},r={app:0},o=[];function u(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return a[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=a,u.c=e,u.d=function(a,t,n){u.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},u.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},u.t=function(a,t){if(1&t&&(a=u(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)u.d(n,e,function(t){return a[t]}.bind(null,e));return n},u.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return u.d(t,"a",t),t},u.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var S=l;o.push([0,"chunk-vendors"]),n()})({0:function(a,t,n){a.exports=n("56d7")},"025d":function(a,t,n){"use strict";n("2c89")},"0345":function(a,t,n){},"286d":function(a,t,n){},"2c89":function(a,t,n){},4678:function(a,t,n){var e={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(a){var t=o(a);return n(t)}function o(a){if(!n.o(e,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return e[a]}r.keys=function(){return Object.keys(e)},r.resolve=o,a.exports=r,r.id="4678"},"56d7":function(a,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("7a23");function r(a,t,n,r,o,u){var i=Object(e["t"])("router-view");return Object(e["o"])(),Object(e["d"])(i)}n("9cdc");const o={};o.render=r;var u=o,i=n("6c02"),l={class:"home"},s=Object(e["f"])("h1",{class:"main-header"},"COVID19 STATS TRACKER",-1),S={class:"world-stats__header"},c=Object(e["f"])("h1",null,"Worldwide Stats",-1),d={class:"world-stats__container"},g={class:"stat"},y=Object(e["f"])("h2",null,"Confirmed",-1),C={class:"stat"},O=Object(e["f"])("h2",null,"Recovered",-1),b={class:"stat"},f=Object(e["f"])("h2",null,"Deaths",-1),h={class:"stat"},I=Object(e["f"])("h2",null,"Active",-1),m={class:"chart__container"};function j(a,t,n,r,o,u){var i=Object(e["t"])("router-link"),j=Object(e["t"])("Search"),p=Object(e["t"])("Chart");return Object(e["o"])(),Object(e["d"])("div",l,[Object(e["f"])(i,{to:"/"},{default:Object(e["z"])((function(){return[s]})),_:1}),Object(e["f"])(j),Object(e["f"])("div",S,[c,Object(e["f"])("h2",null,"As of "+Object(e["v"])(u.date),1)]),Object(e["f"])("div",d,[Object(e["f"])("div",g,[y,Object(e["f"])("span",null,Object(e["v"])(o.stats.TotalConfirmed.toLocaleString("en-US")),1)]),Object(e["f"])("div",C,[O,Object(e["f"])("span",null,Object(e["v"])(o.stats.TotalRecovered.toLocaleString("en-US")),1)]),Object(e["f"])("div",b,[f,Object(e["f"])("span",null,Object(e["v"])(o.stats.TotalDeaths.toLocaleString("en-US")),1)]),Object(e["f"])("div",h,[I,Object(e["f"])("span",null,Object(e["v"])(o.stats.TotalActive.toLocaleString("en-US")),1)])]),Object(e["f"])("div",m,[Object(e["f"])(p,{country:"world",chartType:"bar"})])])}n("96cf");var p=n("1da1"),v=n("bc3a"),T=n.n(v),M=n("c1df"),k=n.n(M),R={class:"chart__container"},w=Object(e["f"])("canvas",{id:"chart",width:"550",height:"400"},null,-1);function D(a,t,n,r,o,u){return Object(e["o"])(),Object(e["d"])("div",R,[w])}n("99af"),n("4160"),n("a9e3"),n("159b");var A=n("30ef"),z=n.n(A),N={props:{country:{type:String,default:null},chartType:{type:String,default:"bar"},everyN:{type:Number,default:100},dateRange:{type:Object,default:function(){return{start:"",end:""}}}},data:function(){return{data:{arrNewConfirmed:[],arrNewDeaths:[],arrNewRecovered:[],arrTotalConfirmed:[],arrTotalDeaths:[],arrTotalRecovered:[],arrTotalActive:[]},timeline:[],chartObj:null,numberEntries:100,apiDateRange:"",fontSize:12,screenWidth:null}},mounted:function(){"world"!=this.country?this.getDataByCountry():this.getDataWorldTotal(),this.setApiDateRange(),this.setFontSize()},watch:{everyN:function(a){this.numberEntries=a,this.resetChartByCountry()},"dateRange.start":function(){this.setApiDateRange(),this.resetChartByCountry()},country:function(){this.resetChartByCountry()}},methods:{setFontSize:function(){switch(this.screenWidth=screen.width,!0){case this.screenWidth>=3840:this.fontSize=28;break;case this.screenWidth>=2560:this.fontSize=18;break;default:this.fontSize=12}},getDataWorldTotal:function(){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("https://api.covid19api.com/world/total");case 2:n=t.sent,a.data.arrTotalConfirmed.push(n.data.TotalConfirmed),a.data.arrTotalDeaths.push(n.data.TotalDeaths),a.data.arrTotalRecovered.push(n.data.TotalRecovered),a.data.arrTotalActive.push(n.data.TotalConfirmed-n.data.TotalRecovered-n.data.TotalDeaths),a.renderChart(a.chartType,["Worldwide Stats"]);case 8:case"end":return t.stop()}}),t)})))()},getDataByCountry:function(){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,e,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("https://api.ipify.org");case 2:return n=t.sent,t.next=5,T.a.get("https://geo.ipify.org/api/v1?apiKey=at_u4q2r5FqJXtoRzApieK9G8vy2ynhx&ipAddress="+n.data);case 5:return e=t.sent,r=a.country?a.country:e.data.location.country,t.next=9,T.a.get("https://api.covid19api.com/total/country/"+r.toLowerCase()+a.apiDateRange);case 9:o=t.sent,o.data.forEach((function(t,n,e){var r=k()(t.Date,"YYYY-MM-DD").format("MM/DD");0!=n&&n!=e.length-1&&n%a.numberEntries!=0||(a.timeline.push(k()(r).format("MMM DD")),a.data.arrTotalConfirmed.push(t.Confirmed),a.data.arrTotalRecovered.push(t.Recovered),a.data.arrTotalDeaths.push(t.Deaths),a.data.arrTotalActive.push(t.Confirmed-t.Recovered-t.Deaths))})),a.renderChart(a.chartType,a.timeline);case 12:case"end":return t.stop()}}),t)})))()},renderChart:function(a,t){var n=this,e=document.querySelector("#chart"),r="bar"==a;this.chartObj=new z.a(e,{type:a,data:{labels:t,datasets:[{label:"Total Confirmed Cases",data:this.data.arrTotalConfirmed,borderCapStyle:"round",borderJoinStyle:"round",fill:r,backgroundColor:["rgba(54, 162, 235, 1)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:3},{label:"Total Recovered",data:this.data.arrTotalRecovered,borderCapStyle:"round",borderJoinStyle:"round",fill:r,backgroundColor:["rgba(75, 192, 192, 1)"],borderColor:["rgba(75, 192, 192, 1)"],borderWidth:3},{label:"Total Deaths",data:this.data.arrTotalDeaths,borderCapStyle:"round",borderJoinStyle:"round",fill:r,backgroundColor:["rgba(255, 99, 132, 1)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:3},{label:"Total Active Cases",data:this.data.arrTotalActive,borderCapStyle:"round",borderJoinStyle:"round",fill:r,backgroundColor:["rgba(255, 206, 86, 1)"],borderColor:["rgba(255, 206, 86, 1)"],borderWidth:3}]},options:{legend:{labels:{fontSize:this.fontSize}},tooltips:{callbacks:{labels:function(a){return n.formattedNumber(a)}}},scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,callback:function(a){return n.formattedNumber(a)}}}]},animation:{easing:"easeInOutSine"}}})},formattedNumber:function(a){return a.toLocaleString("en-US")},resetChartByCountry:function(){this.chartObj.destroy(),this.timeline=[],this.data.arrTotalConfirmed=[],this.data.arrTotalRecovered=[],this.data.arrTotalDeaths=[],this.data.arrTotalActive=[],this.getDataByCountry()},setApiDateRange:function(){""==this.dateRange.start&&(this.apiDateRange=""),""!=this.dateRange.start&&(this.apiDateRange="?from=".concat(k()(this.dateRange.start).format("YYYY-MM-DD"),"T00:00:01Z&to=").concat(k()().format("YYYY-MM-DD"),"T00:00:01Z")),""!=this.dateRange.start&&""!=this.dateRange.end&&(this.apiDateRange="?from=".concat(k()(this.dateRange.start).format("YYYY-MM-DD"),"T00:00:01Z&to=").concat(k()(this.dateRange.end).format("YYYY-MM-DD"),"T00:00:01Z"))}}};n("025d");N.render=D;var B=N,G={class:"search__container"},E={action:"#"},L={class:"countries-select",autocomplete:"false"},Y=Object(e["f"])("option",{value:""},"Search country",-1);function P(a,t,n,r,o,u){return Object(e["o"])(),Object(e["d"])("div",G,[Object(e["f"])("form",E,[Object(e["f"])("select",L,[Y,(Object(e["o"])(!0),Object(e["d"])(e["a"],null,Object(e["s"])(o.countries,(function(a,t){return Object(e["o"])(),Object(e["d"])("option",{value:a.Slug,key:t},Object(e["v"])(a.Country),9,["value"])})),128))])])])}var K={data:function(){return{countries:[{Country:"ALA Aland Islands",Slug:"ala-aland-islands",ISO2:"AX"},{Country:"Afghanistan",Slug:"afghanistan",ISO2:"AF"},{Country:"Albania",Slug:"albania",ISO2:"AL"},{Country:"Algeria",Slug:"algeria",ISO2:"DZ"},{Country:"American Samoa",Slug:"american-samoa",ISO2:"AS"},{Country:"Andorra",Slug:"andorra",ISO2:"AD"},{Country:"Angola",Slug:"angola",ISO2:"AO"},{Country:"Anguilla",Slug:"anguilla",ISO2:"AI"},{Country:"Antarctica",Slug:"antarctica",ISO2:"AQ"},{Country:"Antigua and Barbuda",Slug:"antigua-and-barbuda",ISO2:"AG"},{Country:"Argentina",Slug:"argentina",ISO2:"AR"},{Country:"Armenia",Slug:"armenia",ISO2:"AM"},{Country:"Aruba",Slug:"aruba",ISO2:"AW"},{Country:"Australia",Slug:"australia",ISO2:"AU"},{Country:"Austria",Slug:"austria",ISO2:"AT"},{Country:"Azerbaijan",Slug:"azerbaijan",ISO2:"AZ"},{Country:"Bahamas",Slug:"bahamas",ISO2:"BS"},{Country:"Bahrain",Slug:"bahrain",ISO2:"BH"},{Country:"Bangladesh",Slug:"bangladesh",ISO2:"BD"},{Country:"Barbados",Slug:"barbados",ISO2:"BB"},{Country:"Belarus",Slug:"belarus",ISO2:"BY"},{Country:"Belgium",Slug:"belgium",ISO2:"BE"},{Country:"Belize",Slug:"belize",ISO2:"BZ"},{Country:"Benin",Slug:"benin",ISO2:"BJ"},{Country:"Bermuda",Slug:"bermuda",ISO2:"BM"},{Country:"Bhutan",Slug:"bhutan",ISO2:"BT"},{Country:"Bolivia",Slug:"bolivia",ISO2:"BO"},{Country:"Bosnia and Herzegovina",Slug:"bosnia-and-herzegovina",ISO2:"BA"},{Country:"Botswana",Slug:"botswana",ISO2:"BW"},{Country:"Bouvet Island",Slug:"bouvet-island",ISO2:"BV"},{Country:"Brazil",Slug:"brazil",ISO2:"BR"},{Country:"British Indian Ocean Territory",Slug:"british-indian-ocean-territory",ISO2:"IO"},{Country:"British Virgin Islands",Slug:"british-virgin-islands",ISO2:"VG"},{Country:"Brunei Darussalam",Slug:"brunei",ISO2:"BN"},{Country:"Bulgaria",Slug:"bulgaria",ISO2:"BG"},{Country:"Burkina Faso",Slug:"burkina-faso",ISO2:"BF"},{Country:"Burundi",Slug:"burundi",ISO2:"BI"},{Country:"Cambodia",Slug:"cambodia",ISO2:"KH"},{Country:"Cameroon",Slug:"cameroon",ISO2:"CM"},{Country:"Canada",Slug:"canada",ISO2:"CA"},{Country:"Cape Verde",Slug:"cape-verde",ISO2:"CV"},{Country:"Cayman Islands",Slug:"cayman-islands",ISO2:"KY"},{Country:"Central African Republic",Slug:"central-african-republic",ISO2:"CF"},{Country:"Chad",Slug:"chad",ISO2:"TD"},{Country:"Chile",Slug:"chile",ISO2:"CL"},{Country:"China",Slug:"china",ISO2:"CN"},{Country:"Christmas Island",Slug:"christmas-island",ISO2:"CX"},{Country:"Cocos (Keeling) Islands",Slug:"cocos-keeling-islands",ISO2:"CC"},{Country:"Colombia",Slug:"colombia",ISO2:"CO"},{Country:"Comoros",Slug:"comoros",ISO2:"KM"},{Country:"Congo (Brazzaville)",Slug:"congo-brazzaville",ISO2:"CG"},{Country:"Congo (Kinshasa)",Slug:"congo-kinshasa",ISO2:"CD"},{Country:"Cook Islands",Slug:"cook-islands",ISO2:"CK"},{Country:"Costa Rica",Slug:"costa-rica",ISO2:"CR"},{Country:"Croatia",Slug:"croatia",ISO2:"HR"},{Country:"Cuba",Slug:"cuba",ISO2:"CU"},{Country:"Cyprus",Slug:"cyprus",ISO2:"CY"},{Country:"Czech Republic",Slug:"czech-republic",ISO2:"CZ"},{Country:"Côte d'Ivoire",Slug:"cote-divoire",ISO2:"CI"},{Country:"Denmark",Slug:"denmark",ISO2:"DK"},{Country:"Djibouti",Slug:"djibouti",ISO2:"DJ"},{Country:"Dominica",Slug:"dominica",ISO2:"DM"},{Country:"Dominican Republic",Slug:"dominican-republic",ISO2:"DO"},{Country:"Ecuador",Slug:"ecuador",ISO2:"EC"},{Country:"Egypt",Slug:"egypt",ISO2:"EG"},{Country:"El Salvador",Slug:"el-salvador",ISO2:"SV"},{Country:"Equatorial Guinea",Slug:"equatorial-guinea",ISO2:"GQ"},{Country:"Eritrea",Slug:"eritrea",ISO2:"ER"},{Country:"Estonia",Slug:"estonia",ISO2:"EE"},{Country:"Ethiopia",Slug:"ethiopia",ISO2:"ET"},{Country:"Falkland Islands (Malvinas)",Slug:"falkland-islands-malvinas",ISO2:"FK"},{Country:"Faroe Islands",Slug:"faroe-islands",ISO2:"FO"},{Country:"Fiji",Slug:"fiji",ISO2:"FJ"},{Country:"Finland",Slug:"finland",ISO2:"FI"},{Country:"France",Slug:"france",ISO2:"FR"},{Country:"French Guiana",Slug:"french-guiana",ISO2:"GF"},{Country:"French Polynesia",Slug:"french-polynesia",ISO2:"PF"},{Country:"French Southern Territories",Slug:"french-southern-territories",ISO2:"TF"},{Country:"Gabon",Slug:"gabon",ISO2:"GA"},{Country:"Gambia",Slug:"gambia",ISO2:"GM"},{Country:"Georgia",Slug:"georgia",ISO2:"GE"},{Country:"Germany",Slug:"germany",ISO2:"DE"},{Country:"Ghana",Slug:"ghana",ISO2:"GH"},{Country:"Gibraltar",Slug:"gibraltar",ISO2:"GI"},{Country:"Greece",Slug:"greece",ISO2:"GR"},{Country:"Greenland",Slug:"greenland",ISO2:"GL"},{Country:"Grenada",Slug:"grenada",ISO2:"GD"},{Country:"Guadeloupe",Slug:"guadeloupe",ISO2:"GP"},{Country:"Guam",Slug:"guam",ISO2:"GU"},{Country:"Guatemala",Slug:"guatemala",ISO2:"GT"},{Country:"Guernsey",Slug:"guernsey",ISO2:"GG"},{Country:"Guinea",Slug:"guinea",ISO2:"GN"},{Country:"Guinea-Bissau",Slug:"guinea-bissau",ISO2:"GW"},{Country:"Guyana",Slug:"guyana",ISO2:"GY"},{Country:"Haiti",Slug:"haiti",ISO2:"HT"},{Country:"Heard and Mcdonald Islands",Slug:"heard-and-mcdonald-islands",ISO2:"HM"},{Country:"Holy See (Vatican City State)",Slug:"holy-see-vatican-city-state",ISO2:"VA"},{Country:"Honduras",Slug:"honduras",ISO2:"HN"},{Country:"Hong Kong, SAR China",Slug:"hong-kong-sar-china",ISO2:"HK"},{Country:"Hungary",Slug:"hungary",ISO2:"HU"},{Country:"Iceland",Slug:"iceland",ISO2:"IS"},{Country:"India",Slug:"india",ISO2:"IN"},{Country:"Indonesia",Slug:"indonesia",ISO2:"ID"},{Country:"Iran, Islamic Republic of",Slug:"iran",ISO2:"IR"},{Country:"Iraq",Slug:"iraq",ISO2:"IQ"},{Country:"Ireland",Slug:"ireland",ISO2:"IE"},{Country:"Isle of Man",Slug:"isle-of-man",ISO2:"IM"},{Country:"Israel",Slug:"israel",ISO2:"IL"},{Country:"Italy",Slug:"italy",ISO2:"IT"},{Country:"Jamaica",Slug:"jamaica",ISO2:"JM"},{Country:"Japan",Slug:"japan",ISO2:"JP"},{Country:"Jersey",Slug:"jersey",ISO2:"JE"},{Country:"Jordan",Slug:"jordan",ISO2:"JO"},{Country:"Kazakhstan",Slug:"kazakhstan",ISO2:"KZ"},{Country:"Kenya",Slug:"kenya",ISO2:"KE"},{Country:"Kiribati",Slug:"kiribati",ISO2:"KI"},{Country:"Korea (North)",Slug:"korea-north",ISO2:"KP"},{Country:"Korea (South)",Slug:"korea-south",ISO2:"KR"},{Country:"Kuwait",Slug:"kuwait",ISO2:"KW"},{Country:"Kyrgyzstan",Slug:"kyrgyzstan",ISO2:"KG"},{Country:"Lao PDR",Slug:"lao-pdr",ISO2:"LA"},{Country:"Latvia",Slug:"latvia",ISO2:"LV"},{Country:"Lebanon",Slug:"lebanon",ISO2:"LB"},{Country:"Lesotho",Slug:"lesotho",ISO2:"LS"},{Country:"Liberia",Slug:"liberia",ISO2:"LR"},{Country:"Libya",Slug:"libya",ISO2:"LY"},{Country:"Liechtenstein",Slug:"liechtenstein",ISO2:"LI"},{Country:"Lithuania",Slug:"lithuania",ISO2:"LT"},{Country:"Luxembourg",Slug:"luxembourg",ISO2:"LU"},{Country:"Macao, SAR China",Slug:"macao-sar-china",ISO2:"MO"},{Country:"Macedonia, Republic of",Slug:"macedonia",ISO2:"MK"},{Country:"Madagascar",Slug:"madagascar",ISO2:"MG"},{Country:"Malawi",Slug:"malawi",ISO2:"MW"},{Country:"Malaysia",Slug:"malaysia",ISO2:"MY"},{Country:"Maldives",Slug:"maldives",ISO2:"MV"},{Country:"Mali",Slug:"mali",ISO2:"ML"},{Country:"Malta",Slug:"malta",ISO2:"MT"},{Country:"Marshall Islands",Slug:"marshall-islands",ISO2:"MH"},{Country:"Martinique",Slug:"martinique",ISO2:"MQ"},{Country:"Mauritania",Slug:"mauritania",ISO2:"MR"},{Country:"Mauritius",Slug:"mauritius",ISO2:"MU"},{Country:"Mayotte",Slug:"mayotte",ISO2:"YT"},{Country:"Mexico",Slug:"mexico",ISO2:"MX"},{Country:"Micronesia, Federated States of",Slug:"micronesia",ISO2:"FM"},{Country:"Moldova",Slug:"moldova",ISO2:"MD"},{Country:"Monaco",Slug:"monaco",ISO2:"MC"},{Country:"Mongolia",Slug:"mongolia",ISO2:"MN"},{Country:"Montenegro",Slug:"montenegro",ISO2:"ME"},{Country:"Montserrat",Slug:"montserrat",ISO2:"MS"},{Country:"Morocco",Slug:"morocco",ISO2:"MA"},{Country:"Mozambique",Slug:"mozambique",ISO2:"MZ"},{Country:"Myanmar",Slug:"myanmar",ISO2:"MM"},{Country:"Namibia",Slug:"namibia",ISO2:"NA"},{Country:"Nauru",Slug:"nauru",ISO2:"NR"},{Country:"Nepal",Slug:"nepal",ISO2:"NP"},{Country:"Netherlands",Slug:"netherlands",ISO2:"NL"},{Country:"Netherlands Antilles",Slug:"netherlands-antilles",ISO2:"AN"},{Country:"New Caledonia",Slug:"new-caledonia",ISO2:"NC"},{Country:"New Zealand",Slug:"new-zealand",ISO2:"NZ"},{Country:"Nicaragua",Slug:"nicaragua",ISO2:"NI"},{Country:"Niger",Slug:"niger",ISO2:"NE"},{Country:"Nigeria",Slug:"nigeria",ISO2:"NG"},{Country:"Niue",Slug:"niue",ISO2:"NU"},{Country:"Norfolk Island",Slug:"norfolk-island",ISO2:"NF"},{Country:"Northern Mariana Islands",Slug:"northern-mariana-islands",ISO2:"MP"},{Country:"Norway",Slug:"norway",ISO2:"NO"},{Country:"Oman",Slug:"oman",ISO2:"OM"},{Country:"Pakistan",Slug:"pakistan",ISO2:"PK"},{Country:"Palau",Slug:"palau",ISO2:"PW"},{Country:"Palestinian Territory",Slug:"palestine",ISO2:"PS"},{Country:"Panama",Slug:"panama",ISO2:"PA"},{Country:"Papua New Guinea",Slug:"papua-new-guinea",ISO2:"PG"},{Country:"Paraguay",Slug:"paraguay",ISO2:"PY"},{Country:"Peru",Slug:"peru",ISO2:"PE"},{Country:"Philippines",Slug:"philippines",ISO2:"PH"},{Country:"Pitcairn",Slug:"pitcairn",ISO2:"PN"},{Country:"Poland",Slug:"poland",ISO2:"PL"},{Country:"Portugal",Slug:"portugal",ISO2:"PT"},{Country:"Puerto Rico",Slug:"puerto-rico",ISO2:"PR"},{Country:"Qatar",Slug:"qatar",ISO2:"QA"},{Country:"Republic of Kosovo",Slug:"kosovo",ISO2:"XK"},{Country:"Romania",Slug:"romania",ISO2:"RO"},{Country:"Russian Federation",Slug:"russia",ISO2:"RU"},{Country:"Rwanda",Slug:"rwanda",ISO2:"RW"},{Country:"Réunion",Slug:"réunion",ISO2:"RE"},{Country:"Saint Helena",Slug:"saint-helena",ISO2:"SH"},{Country:"Saint Kitts and Nevis",Slug:"saint-kitts-and-nevis",ISO2:"KN"},{Country:"Saint Lucia",Slug:"saint-lucia",ISO2:"LC"},{Country:"Saint Pierre and Miquelon",Slug:"saint-pierre-and-miquelon",ISO2:"PM"},{Country:"Saint Vincent and Grenadines",Slug:"saint-vincent-and-the-grenadines",ISO2:"VC"},{Country:"Saint-Barthélemy",Slug:"saint-barthélemy",ISO2:"BL"},{Country:"Saint-Martin (French part)",Slug:"saint-martin-french-part",ISO2:"MF"},{Country:"Samoa",Slug:"samoa",ISO2:"WS"},{Country:"San Marino",Slug:"san-marino",ISO2:"SM"},{Country:"Sao Tome and Principe",Slug:"sao-tome-and-principe",ISO2:"ST"},{Country:"Saudi Arabia",Slug:"saudi-arabia",ISO2:"SA"},{Country:"Senegal",Slug:"senegal",ISO2:"SN"},{Country:"Serbia",Slug:"serbia",ISO2:"RS"},{Country:"Seychelles",Slug:"seychelles",ISO2:"SC"},{Country:"Sierra Leone",Slug:"sierra-leone",ISO2:"SL"},{Country:"Singapore",Slug:"singapore",ISO2:"SG"},{Country:"Slovakia",Slug:"slovakia",ISO2:"SK"},{Country:"Slovenia",Slug:"slovenia",ISO2:"SI"},{Country:"Solomon Islands",Slug:"solomon-islands",ISO2:"SB"},{Country:"Somalia",Slug:"somalia",ISO2:"SO"},{Country:"South Africa",Slug:"south-africa",ISO2:"ZA"},{Country:"South Georgia and the South Sandwich Islands",Slug:"south-georgia-and-the-south-sandwich-islands",ISO2:"GS"},{Country:"South Sudan",Slug:"south-sudan",ISO2:"SS"},{Country:"Spain",Slug:"spain",ISO2:"ES"},{Country:"Sri Lanka",Slug:"sri-lanka",ISO2:"LK"},{Country:"Sudan",Slug:"sudan",ISO2:"SD"},{Country:"Suriname",Slug:"suriname",ISO2:"SR"},{Country:"Svalbard and Jan Mayen Islands",Slug:"svalbard-and-jan-mayen-islands",ISO2:"SJ"},{Country:"Swaziland",Slug:"swaziland",ISO2:"SZ"},{Country:"Sweden",Slug:"sweden",ISO2:"SE"},{Country:"Switzerland",Slug:"switzerland",ISO2:"CH"},{Country:"Syrian Arab Republic (Syria)",Slug:"syria",ISO2:"SY"},{Country:"Taiwan, Republic of China",Slug:"taiwan",ISO2:"TW"},{Country:"Tajikistan",Slug:"tajikistan",ISO2:"TJ"},{Country:"Tanzania, United Republic of",Slug:"tanzania",ISO2:"TZ"},{Country:"Thailand",Slug:"thailand",ISO2:"TH"},{Country:"Timor-Leste",Slug:"timor-leste",ISO2:"TL"},{Country:"Togo",Slug:"togo",ISO2:"TG"},{Country:"Tokelau",Slug:"tokelau",ISO2:"TK"},{Country:"Tonga",Slug:"tonga",ISO2:"TO"},{Country:"Trinidad and Tobago",Slug:"trinidad-and-tobago",ISO2:"TT"},{Country:"Tunisia",Slug:"tunisia",ISO2:"TN"},{Country:"Turkey",Slug:"turkey",ISO2:"TR"},{Country:"Turkmenistan",Slug:"turkmenistan",ISO2:"TM"},{Country:"Turks and Caicos Islands",Slug:"turks-and-caicos-islands",ISO2:"TC"},{Country:"Tuvalu",Slug:"tuvalu",ISO2:"TV"},{Country:"US Minor Outlying Islands",Slug:"us-minor-outlying-islands",ISO2:"UM"},{Country:"Uganda",Slug:"uganda",ISO2:"UG"},{Country:"Ukraine",Slug:"ukraine",ISO2:"UA"},{Country:"United Arab Emirates",Slug:"united-arab-emirates",ISO2:"AE"},{Country:"United Kingdom",Slug:"united-kingdom",ISO2:"GB"},{Country:"United States of America",Slug:"united-states",ISO2:"US"},{Country:"Uruguay",Slug:"uruguay",ISO2:"UY"},{Country:"Uzbekistan",Slug:"uzbekistan",ISO2:"UZ"},{Country:"Vanuatu",Slug:"vanuatu",ISO2:"VU"},{Country:"Venezuela (Bolivarian Republic)",Slug:"venezuela",ISO2:"VE"},{Country:"Viet Nam",Slug:"vietnam",ISO2:"VN"},{Country:"Virgin Islands, US",Slug:"virgin-islands",ISO2:"VI"},{Country:"Wallis and Futuna Islands",Slug:"wallis-and-futuna-islands",ISO2:"WF"},{Country:"Western Sahara",Slug:"western-sahara",ISO2:"EH"},{Country:"Yemen",Slug:"yemen",ISO2:"YE"},{Country:"Zambia",Slug:"zambia",ISO2:"ZM"},{Country:"Zimbabwe",Slug:"zimbabwe",ISO2:"ZW"}]}},mounted:function(){var a=this;window.$(".countries-select").selectize().on("change",(function(t){a.$router.push({name:"Country",params:{slug:t.target.value,countryName:t.target.firstChild.innerHTML}})}))}};n("e503");K.render=P;var F=K,U={components:[B,F],data:function(){return{stats:{TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0,TotalActive:0}}},computed:{date:function(){return k()().format("MMMM DD, YYYY")}},mounted:function(){this.getStats()},methods:{getStats:function(){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("https://api.covid19api.com/world/total");case 2:n=t.sent,a.stats.TotalConfirmed=n.data.TotalConfirmed,a.stats.TotalDeaths=n.data.TotalDeaths,a.stats.TotalRecovered=n.data.TotalRecovered,a.stats.TotalActive=n.data.TotalConfirmed-n.data.TotalRecovered-n.data.TotalDeaths;case 7:case"end":return t.stop()}}),t)})))()}}};n("e69a");U.render=j;var x=U,W={class:"country"},H=Object(e["f"])("h1",{class:"main-header"},"COVID19 STATS TRACKER",-1),V={type:"date",ref:"calendar"},_=Object(e["e"])('<option value="1">Show All Entries</option><option value="50">Show Every 50 Entries</option><option value="100">Show Every 100 Entries</option><option value="150">Show Every 150 Entries</option><option value="200">Show Every 200 Entries</option><option value="300">Show Every 300 Entries</option>',6),J={class:"chart__container"};function Z(a,t,n,r,o,u){var i=Object(e["t"])("router-link"),l=Object(e["t"])("Search"),s=Object(e["t"])("Chart");return Object(e["o"])(),Object(e["d"])("div",W,[Object(e["f"])(i,{to:"/"},{default:Object(e["z"])((function(){return[H]})),_:1}),Object(e["f"])(l),Object(e["f"])("h2",null,"Statistics for "+Object(e["v"])(u.countryName),1),Object(e["f"])("input",V,null,512),Object(e["A"])(Object(e["f"])("select",{name:"everyn-entry",class:"everyn-select","onUpdate:modelValue":t[1]||(t[1]=function(a){return o.everyN=a})},[_],512),[[e["x"],o.everyN]]),Object(e["f"])("div",J,[Object(e["f"])(s,{country:a.$route.params.slug,chartType:"line",everyN:parseInt(o.everyN),dateRange:o.dateRange},null,8,["country","everyN","dateRange"])])])}var q=n("bfad"),Q=n.n(q),X={components:[B,F],data:function(){return{everyN:100,dateRange:{start:"",end:""}}},mounted:function(){var a=this,t=Q.a.attach(this.$refs.calendar,{color:"info",isRange:!0,startDate:k()("20200101"),endDate:k()().format("YYYYMMDD"),maxDate:k()().format("YYYYMMDD"),labelFrom:"From",labelTo:"To"})[0];t.on("select",(function(t){a.dateRange.start=t.data.startDate,a.dateRange.end=t.data.endDate})),document.querySelector(".datetimepicker-clear-button").addEventListener("click",(function(){a.dateRange.start="",a.dateRange.end=""}))},computed:{countryName:function(){return this.$route.params.countryName}}};n("c076");X.render=Z;var $=X,aa=[{path:"/",name:"Home",component:x},{path:"/country/:slug",name:"Country",component:$}],ta=Object(i["a"])({history:Object(i["b"])("/"),routes:aa}),na=ta,ea=n("5502"),ra=Object(ea["a"])({state:{},mutations:{},actions:{},modules:{}}),oa=(n("ac1f"),n("5319"),{methods:{replaceDashWithSpace:function(a){return a.replace(/-/g," ")}}});Object(e["c"])(u).mixin(oa).component("Search",F).component("Chart",B).use(ra).use(na).mount("#app")},"5c9d":function(a,t,n){},"9cdc":function(a,t,n){"use strict";n("c701")},c076:function(a,t,n){"use strict";n("5c9d")},c701:function(a,t,n){},e503:function(a,t,n){"use strict";n("0345")},e69a:function(a,t,n){"use strict";n("286d")}});
//# sourceMappingURL=app.b9530846.js.map