(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(t,e,n){"use strict";n.r(e);n(65);var r=n(4),o=(n(55),n(40),n(87),{props:["province"],data:function(){return{status:"",text:"",countdown:0,link:""}},methods:{textCountDown:function(){return"waitting"!=this.status?"":"Còn ".concat(this.convertHMS(Math.floor(this.countdown/1e3))," nữa!")},convertHMS:function(t){var e=parseInt(t,10),n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),o=e-3600*n-60*r;return n<10&&(n="0"+n),r<10&&(r="0"+r),o<10&&(o="0"+o),n+":"+r+":"+o},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/kqxs/status/".concat(t.province));case 2:n=e.sent,t.link=n.link,t.status=n.status,e.t0=t.status,e.next="waitting"===e.t0?8:"tomorow"===e.t0?12:"running"===e.t0?14:"finnish"===e.t0?16:17;break;case 8:return t.text="Đang chờ xổ số ".concat(n.title," lúc ").concat(n.time,"."),t.countdown=t.$dayjs(n.time,"HH:mm:ss").valueOf()-t.$dayjs().valueOf(),setInterval((function(){t.countdown-=1e3}),1e3),e.abrupt("break",17);case 12:return t.text=n.text,e.abrupt("break",17);case 14:return t.text="Đang tường thuật trực tiếp KQXS ".concat(n.title," » Bấm Xem!..."),e.abrupt("break",17);case 16:t.text="Xổ số ".concat(n.title,"  hôm nay đã kết thúc!");case 17:case"end":return e.stop()}}),e)})))()}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",["error"==t.status||t.$fetchState.pending?t._e():e("div",{staticClass:"card w-100 shadow-sm p-2 mb-2 bg-body rounded border-0"},[e("div",{staticClass:"card-body p-0 text-center"},[e("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:t.link}},[t._v(t._s(t.text)+" "+t._s(t.textCountDown()))])],1)]),t._v(" "),e("ContentResultLive")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentResultLive:n(385).default})}}]);