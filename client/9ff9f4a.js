(window.webpackJsonp=window.webpackJsonp||[]).push([[40,4,8,12,16,17,34,35],{367:function(t,e,n){},370:function(t,e,n){"use strict";n.r(e);n(65),n(48),n(35),n(23),n(13),n(28),n(41);var r={data:function(){return{kqxs:{xsmb:"Miền Bắc",xsmt:"Miền Trung",xsmn:"Miền Nam"}}},computed:{lists:function(){var t=this.$store.state.menus.kqxs,e={},n=0;return Object.keys(t).map((function(r){t[r].type&&(e[r]=t[r].data.filter((function(t){return t.days.includes((new Date).getDay())})),n=Math.max(n,e[r].length))})),{result:e,maxResult:n}}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-b-15 overflow-hidden table-shadow br-10"},[e("div",{staticClass:"d-flex bg-linear-gradient"},t._l(t.kqxs,(function(n,link){return e("nuxt-link",{key:link,staticClass:"tab-btn text-white col",attrs:{to:"/"+link}},[t._v(t._s(n))])})),1),t._v(" "),e("table",{staticClass:"table-lotto overflow-hidden bg-white bblr-10 bbrr-10 w-100 text-center txt-sub-content"},[e("tbody",[e("tr",t._l(t.lists.result,(function(n,link){return e("th",{key:link,staticClass:"p-0 align-top"},t._l(n,(function(n){return e("NuxtLink",{key:n.link,staticClass:"fw-normal color-content list-link",attrs:{to:"/"+link+"/"+n.link}},[t._v(t._s(n.title))])})),1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"feather feather-zap",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("polygon",{attrs:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}})])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,n){"use strict";n(367)},378:function(t,e,n){"use strict";n.r(e);n(65);var r=n(4),o=(n(55),n(40),n(87),{props:["province"],data:function(){return{status:"",text:"",countdown:0,link:""}},methods:{textCountDown:function(){return"waitting"!=this.status?"":"Còn ".concat(this.convertHMS(Math.floor(this.countdown/1e3))," nữa!")},convertHMS:function(t){var e=parseInt(t,10),n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),o=e-3600*n-60*r;return n<10&&(n="0"+n),r<10&&(r="0"+r),o<10&&(o="0"+o),n+":"+r+":"+o},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/kqxs/status/".concat(t.province));case 2:n=e.sent,t.link=n.link,t.status=n.status,e.t0=t.status,e.next="waitting"===e.t0?8:"tomorow"===e.t0?12:"running"===e.t0?14:"finnish"===e.t0?16:17;break;case 8:return t.text="Đang chờ xổ số ".concat(n.title," lúc ").concat(n.time,"."),t.countdown=t.$dayjs(n.time,"HH:mm:ss").valueOf()-t.$dayjs().valueOf(),setInterval((function(){t.countdown-=1e3}),1e3),e.abrupt("break",17);case 12:return t.text=n.text,e.abrupt("break",17);case 14:return t.text="Đang tường thuật trực tiếp KQXS ".concat(n.title," » Bấm Xem!..."),e.abrupt("break",17);case 16:t.text="Xổ số ".concat(n.title,"  hôm nay đã kết thúc!");case 17:case"end":return e.stop()}}),e)})))()}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",["error"==t.status||t.$fetchState.pending?t._e():e("div",{staticClass:"card w-100 shadow-sm p-2 mb-2 bg-body rounded border-0"},[e("div",{staticClass:"card-body p-0 text-center"},[e("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:t.link}},[t._v(t._s(t.text)+" "+t._s(t.textCountDown()))])],1)]),t._v(" "),e("ContentResultLive")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentResultLive:n(388).default})},379:function(t,e,n){"use strict";n.r(e);n(28),n(41);var r={data:function(){return{domain:"",lists:{"thu-2":"Thứ 2","thu-3":"Thứ 3","thu-4":"Thứ 4","thu-5":"Thứ 5","thu-6":"Thứ 6","thu-7":"Thứ 7","chu-nhat":"C.Nhật"}}},created:function(){this.domain=this.$route.params.domain}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white br-8 table-shadow overflow-hidden d-flex txt-change-content m-b-15"},t._l(t.lists,(function(title,n){return e("NuxtLink",{key:n,staticClass:"col weekdays",class:{"bg-btn-gradient text-white":t.$route.path.includes("/"+t.domain+"/"+n)},attrs:{to:"/"+t.domain+"/"+n}},[t._v(t._s(title))])})),1)}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);var r={},o=n(2),component=Object(o.a)(r,(function(){var t=this._self._c;return t("button",{staticClass:"btn bg-btn-gradient text-white w-100 m-t-15 m-b-30 txt-sub-title"},[t("ContentIconsZap"),this._v("\n    Xem thêm kết quả\n")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentIconsZap:n(371).default})},381:function(t,e,n){"use strict";n.r(e);n(372);var r=n(2),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticStyle:{display:"flex",height:"50vh","align-items":"center","justify-content":"center"}},[t("span",{staticClass:"loader"})])}],!1,null,"7c65482d",null);e.default=component.exports},383:function(t,e,n){"use strict";n.r(e);n(65);var r=n(10),o=n(4),c=(n(55),n(40),{data:function(){return{results:[]}},computed:{viewMode:function(){return this.$store.state.menus.viewMode},currentDays:function(){return this.$store.state.menus.currentDays},currentSetting:function(){return this.$store.state.menus.currentSetting},currentStatus:function(){return this.$store.state.menus.currentSetting},lastDate:function(){return this.results[this.results.length-1].date}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/kqxs/result/".concat(t.currentSetting.link||t.currentSetting.domain,"/").concat(t.currentSetting.date),e.next=3,t.$axios.$get(n);case 3:t.results=e.sent.data,o=Object(r.a)(t.results,1),(c=o[0]).date==t.currentDays||t.currentStatus||t.$store.commit("menus/changeValue",{key:"currentDays",value:c.date});case 6:case"end":return e.stop()}}),e)})))()},methods:{loadMore:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$dayjs(t.lastDate,"DD/MM/YYYY").subtract(1,"day").format("DD-MM-YYYY"),r="/kqxs/result/".concat(t.currentSetting.link||t.currentSetting.domain,"/").concat(n),e.next=4,t.$axios.$get(r);case 4:o=e.sent.data,t.results=t.results.concat(o);case 6:case"end":return e.stop()}}),e)})))()}}}),l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.$fetchState.pending?e("ContentIconsLoading"):e("div",[e("ContentTop"),t._v(" "),e("client-only",[e("ContentResultStatus",{attrs:{province:t.currentSetting.link||t.currentSetting.domain}})],1),t._v(" "),"byDays"==t.viewMode?e("ContentTopDays"):t._e(),t._v(" "),t._l(t.results,(function(t){return e("ContentResult",{key:t.date+t.title,attrs:{date:t.date,title:t.title,results:t.results}})})),t._v(" "),"byProDay"!=t.viewMode?e("ContentResultLoadmore",{nativeOn:{click:function(e){return t.loadMore.apply(null,arguments)}}}):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentIconsLoading:n(381).default,ContentTop:n(370).default,ContentResultStatus:n(378).default,ContentTopDays:n(379).default,ContentResult:n(369).default,ContentResultLoadmore:n(380).default})},387:function(t,e,n){"use strict";var r=n(3),o=n(11);r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return o(URL.prototype.toString,this)}})},453:function(t,e,n){"use strict";n.r(e);var r=n(42),o=(n(40),n(65),n(23),n(13),n(387),{middleware:["redirect"],head:function(t){var e=t.$seoMeta;return{title:this.getTitle,meta:[{name:"revisit-after",content:"1 days"},{property:"og:image:alt",content:this.getTitle},{property:"og:type",content:"article",hid:"og:type"}].concat(Object(r.a)(e({title:this.getTitle,image:this.getImage,description:this.getDescription,keywords:this.getKeywords},!1)))}},computed:{currentSetting:function(){return this.$store.state.menus.currentSetting},getTitle:function(){var t=this.$dayjs(this.currentSetting.date,"DD-MM-YYYY");return"".concat(this.currentSetting.domain.toUpperCase()," ").concat(t.format("DD/MM"),", Kết quả xổ số ").concat(this.currentSetting.title," ngày ").concat(t.format("DD")," tháng ").concat(t.format("MM")," năm ").concat(t.format("YYYY")," trực tiếp kết quả xổ số ").concat(this.currentSetting.title," hôm nay ").concat(t.format("DD/MM/YYYY"),". xổ số hôm nay ").concat(t.format("DD/MM/YYYY"))},getDescription:function(){var t=this.$dayjs(this.currentSetting.date,"DD-MM-YYYY");return"".concat(this.currentSetting.domain.toUpperCase()," ").concat(t.format("DD/MM")," - xổ số hôm nay ").concat(t.format("DD/MM")," - Trực tiếp kết quả xổ số ").concat(this.currentSetting.title," ").concat(t.format("DD/MM/YYYY"),". xổ số hôm nay ngày ").concat(t.format("DD")," tháng ").concat(t.format("MM"),". KQ").concat(this.currentSetting.domain.toUpperCase()," thứ ").concat(t.$W?t.$W+1:"chủ nhật",". ").concat(this.currentSetting.domain.toUpperCase()," ").concat(t.format("DD/MM/YYYY"))},getKeywords:function(){var t=this.$dayjs(this.currentSetting.date,"DD-MM-YYYY");return"".concat(this.currentSetting.domain.toUpperCase()," ").concat(t.format("DD/MM"),",kq").concat(this.currentSetting.domain.toUpperCase()," ").concat(t.format("DD/MM"),",dự đoán ").concat(this.currentSetting.domain.toUpperCase()," ").concat(t.format("DD/MM"),",xổ số hôm nay ").concat(t.format("DD/MM"),",").concat(this.currentSetting.domain.toUpperCase()," hôm nay,").concat(this.currentSetting.domain.toUpperCase()," thứ ").concat(t.$W?t.$W+1:"chủ nhật",",").concat(this.currentSetting.domain.toUpperCase(),",sxmn ").concat(t.format("DD/MM"),",xổ số ").concat(this.currentSetting.title," ").concat(t.format("DD/MM"),",xổ số ").concat(this.currentSetting.title," hôm nay,kết quả xổ số ").concat(this.currentSetting.title,",dự đoán xổ số ").concat(this.currentSetting.title,",xổ số ").concat(this.currentSetting.title," thứ ").concat(t.$W?t.$W+1:"chủ nhật",",xổ số ").concat(this.currentSetting.title,",xổ số hôm nay,dự đoán ").concat(this.currentSetting.domain.toUpperCase())},getImage:function(){var t=this,e=this.$store.state.menus.kqxs,image=e[this.currentSetting.domain].image;return this.currentSetting.link&&(image=e[this.currentSetting.domain].data.filter((function(e){return e.link==t.currentSetting.link}))[0].image||""),image||this.$store.state.menus.image}},jsonld:function(){return[{"@context":"https://schema.org","@type":"Organization",name:"KQXS24H",url:"https://kqxs24h.top/",logo:"https://i.imgur.com/1AdH3Vy.gif"},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://kqxs24h.top/",name:"Trang chủ"}},{"@type":"ListItem",position:1,item:{"@id":"https://kqxs24h.top/"+this.currentSetting.domain,name:"Xổ số hôm nay"}}]},{"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":"https://kqxs24h.top"+this.$route.fullPath},headline:this.getTitle,description:this.getDescription,image:{"@type":"ImageObject",url:this.getImage,width:1200,height:628},datePublished:this.$dayjs(this.currentSetting.date,"DD-MM-YYYY").subtract(6,"hours").toJSON(),dateModified:this.$dayjs().subtract(1,"days")>this.$dayjs(this.currentSetting.date,"DD-MM-YYYY")?this.$dayjs(this.currentSetting.date,"DD-MM-YYYY").add(1,"days").subtract(15,"minute").toJSON():this.$dayjs().subtract(15,"minute").toJSON(),author:{"@type":"Person",name:"KQXS24H",url:"https://kqxs24h.top/tin-tuc/du-doan-xo-so"},publisher:{"@type":"Organization",name:"https://kqxs24h.top/",logo:{"@type":"ImageObject",url:"https://i.imgur.com/1AdH3Vy.gif",width:400}}}]}}),c=n(2),component=Object(c.a)(o,(function(){return(0,this._self._c)("Content")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Content:n(383).default})}}]);