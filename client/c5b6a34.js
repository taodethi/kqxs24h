(window.webpackJsonp=window.webpackJsonp||[]).push([[54,9,10,13,22,23,24],{365:function(t,e,n){"use strict";n.r(e);n(40);var o=n(4),c=(n(55),n(48),{props:{limit:{type:String,default:5},category:{type:String,default:"so-mo"}},data:function(){return{posts:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/posts/lists?limit=".concat(t.limit,"&category=").concat(t.category));case 2:t.posts=e.sent.map((function(t){return t.Meta=JSON.parse(t.Meta),t}));case 3:case"end":return e.stop()}}),e)})))()}}),r=n(2),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row row-cols-1 row-cols-md-2 g-4"},t._l(t.posts,(function(n){return e("div",{key:n.PostId,staticClass:"col"},[e("div",{staticClass:"card cursor-pointer shadow bg-body border-0",on:{click:function(e){return t.$router.push("/tin-tuc/".concat(n.Category,"/").concat(n.Slug))}}},[e("img",{staticClass:"card-img-top",attrs:{src:n.Meta.cover,alt:""}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(n.Title))])]),t._v(" "),e("div",{staticClass:"card-footer bg-btn-gradient"},[e("small",{staticClass:"text-white"},[t._v("Cập nhật lúc\n          "+t._s(t.$dayjs(n.updated_at).format("HH:mm DD/MM/YYYY ")))])])])])})),0)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";var o=n(3),c=n(88).findIndex,r=n(107),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),r(l)},384:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"feather feather-minus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var o=n(2),component=Object(o.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"feather feather-plus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){},391:function(t,e,n){"use strict";n.r(e);n(41),n(65),n(40),n(19),n(48);var o={props:["source","province"],methods:{createLink:function(){return this.province.link?"/".concat(this.province.domain,"/").concat(this.province.link,"/").concat(this.getDate):"/".concat(this.province.domain,"/").concat(this.getDate)}},computed:{getDate:function(){return/(\d{2}-\d{2}-\d{4})/g.exec(this.source.date)[1]},getDays:function(){return["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]},getLoto:function(){var t=[];return this.source.result.map((function(e){e.map((function(e){isNaN(parseInt(e.value))||(t[Math.max(t.length-1,0)]||(t[Math.max(t.length-1,0)]=[]),7==t[Math.max(t.length-1,0)].length&&t.push([]),t[Math.max(t.length-1,0)].push(e.value.substr(-2)))}))})),t}}},c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"result-book m-b-20 p-l-10 p-r-10"},[e("div",{staticClass:"br-10 bd-2"},[e("table",{staticClass:"table-lotto br-8 overflow-hidden w-100 bg-white text-center"},[e("tbody",[e("tr",[e("th",{staticClass:"bg-btn-gradient",attrs:{colspan:"27"}},[e("NuxtLink",{staticClass:"text-decoration-none text-white",attrs:{to:t.createLink()}},[e("div",{staticClass:"text-decoration-none fw-bold txt-sub-title"},[t._v("\n                Kết quả xổ số "+t._s(t.province.title)+"\n              ")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-around"},[e("div",{staticClass:"text-center fw-normal"},[t._v("\n                  "+t._s(t.getDays[t.$dayjs(t.getDate,"DD-MM-YYYY").$W])+" ngày\n                  "+t._s(t.getDate)+"\n                ")])])])],1)]),t._v(" "),t._l(t.source.result,(function(n,o){return e("tr",{key:o,class:{"bg-color-lotto-background":"134679".includes(o)&&10==t.source.result.length||9==t.source.result.length&&"1368".includes(o)}},t._l(n,(function(n,o){return e("td",{key:o,class:{"fw-medium":3==n.colspan,"txt-normal-prize":3!=n.colspan},attrs:{colspan:n.colspan||"",rowspan:n.rowspan||""}},[t._v("\n            "+t._s(n.value)+"\n          ")])})),0)}))],2)])]),t._v(" "),e("div",[e("div",{staticClass:"br-10 bd-2"},[e("table",{staticClass:"table-lotto w-100 overflow-hidden bg-white br-8 fw-medium text-center lh-1"},[e("tbody",[t._m(0),t._v(" "),t._l(t.getLoto,(function(n,o){return e("tr",{key:o},t._l(n,(function(n,o){return e("td",{key:o},[t._v(t._s(n))])})),0)}))],2)])])])])}),[function(){var t=this._self._c;return t("tr",[t("th",{attrs:{colspan:"7"}},[this._v("BẢNG LÔ TÔ")])])}],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n(386)},403:function(t,e,n){},411:function(t,e,n){"use strict";n.r(e);n(48),n(23),n(13),n(28),n(41),n(65);var o={emit:["submit","edit"],props:["type"],data:function(){return{end_date:this.$dayjs().format("YYYY-MM-DD"),count:3,code:"mb",day_ow:"7"}},methods:{viewResult:function(){this.$emit("submit",{count:this.count,end_date:this.$dayjs(this.end_date).format("DD-MM-YYYY"),code:this.code,day_ow:this.day_ow,title:this.title})},changeRange:function(t){this.count<1||this.count>50||(this.count=parseInt(this.count)+t)},listDays:function(){return[{value:"0",title:"Chủ Nhật"},{value:"1",title:"Thứ Hai"},{value:"2",title:"Thứ Ba"},{value:"3",title:"Thứ Tư"},{value:"4",title:"Thứ Năm"},{value:"5",title:"Thứ Sáu"},{value:"6",title:"Thứ Bảy"},{value:"7",title:"Tất cả các ngày trong tuần"}]},listProvince:function(){return[{value:"mb",title:"Miền Bắc"},{value:"ag",title:"An Giang"},{value:"bl",title:"Bạc Liêu"},{value:"bdu",title:"Bình Dương"},{value:"bdi",title:"Bình Định"},{value:"bp",title:"Bình Phước"},{value:"bth",title:"Bình Thuận"},{value:"btr",title:"Bến Tre"},{value:"cm",title:"Cà Mau"},{value:"ct",title:"Cần Thơ"},{value:"dlt",title:"Đà Lạt"},{value:"dna",title:"Đà Nẵng"},{value:"dlc",title:"Đắc Lắc"},{value:"dno",title:"Đắc Nông"},{value:"dni",title:"Đồng Nai"},{value:"dt",title:"Đồng Tháp"},{value:"gl",title:"Gia Lai"},{value:"hg",title:"Hậu Giang"},{value:"hcm",title:"Hồ Chí Minh"},{value:"kg",title:"Kiên Giang"},{value:"kh",title:"Khánh Hoà"},{value:"kt",title:"Kon Tum"},{value:"la",title:"Long An"},{value:"nt",title:"Ninh Thuận"},{value:"py",title:"Phú Yên"},{value:"qb",title:"Quảng Bình"},{value:"qna",title:"Quảng Nam"},{value:"qng",title:"Quảng Ngãi"},{value:"qt",title:"Quảng Trị"},{value:"st",title:"Sóc Trăng"},{value:"tn",title:"Tây Ninh"},{value:"tth",title:"Huế"},{value:"tg",title:"Tiền Giang"},{value:"tv",title:"Trà Vinh"},{value:"vl",title:"Vĩnh Long"},{value:"vt",title:"Vũng Tàu"}]},changeValue:function(){this.$emit("edit")}},watch:{count:function(t){return t<1?this.count=1:t>50?this.count=50:void this.changeValue()},end_date:function(t){if(this.$dayjs().valueOf()<this.$dayjs(t).valueOf())return this.end_date=this.$dayjs().format("YYYY-MM-DD");this.changeValue()},day_ow:function(){this.changeValue()},code:function(){this.changeValue()}},computed:{getType:function(){return this.type.includes("theo-thu")},getTitle:function(){var t=this,e=this.$store.state.menus.stats["soi-cau"].data.filter((function(e){return e.link==t.type}));return e.length?e[0].title:"Soi cầu xổ số"},title:function(){var t=this,e=this.listProvince().filter((function(e){return e.value==t.code}));return e.length?e[0].title:"Miền Bắc"}}},c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("ContentElement",{attrs:{title:t.getTitle}},[e("div",{staticClass:"padding-10"},[e("div",{staticClass:"row form-margin m-b-5"},[t.getType?t._e():e("div",{staticClass:"col-sm-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Biên ngày cầu chạy")]),t._v(" "),e("div",{staticClass:"form-date position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.end_date,expression:"end_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.end_date},on:{input:function(e){e.target.composing||(t.end_date=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-sm-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Chọn tỉnh")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.code=e.target.multiple?n:n[0]}}},t._l(t.listProvince(),(function(n){return e("option",{key:n.value,domProps:{value:n.value}},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)]),t._v(" "),t.getType?e("div",{staticClass:"col-sm-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Thứ trong tuần")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.day_ow,expression:"day_ow"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.day_ow=e.target.multiple?n:n[0]}}},t._l(t.listDays(),(function(n){return e("option",{key:n.value,domProps:{value:n.value}},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)]):t._e(),t._v(" "),e("div",{staticClass:"col-sm-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Số ngày cầu chạy")]),t._v(" "),e("div",{staticClass:"position-relative form-soicau"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"form-control text-center",attrs:{type:"text",placeholder:"Số ngày cầu chạy"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn position-absolute plus bd-1",on:{click:function(e){return t.changeRange(1)}}},[e("ContentIconsPlus",{attrs:{width:"16",height:"16"}})],1),t._v(" "),e("button",{staticClass:"btn position-absolute minus bd-1",on:{click:function(e){return t.changeRange(-1)}}},[e("ContentIconsMinus",{attrs:{width:"16",height:"16"}})],1),t._v(" "),e("div",{staticClass:"date-soicau position-absolute"},[t._v("ngày")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 form-padding align-self-end"},[e("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap",on:{click:t.viewResult}},[t._v("\n          Xem kết quả\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentIconsPlus:n(385).default,ContentIconsMinus:n(384).default,ContentElement:n(164).default})},412:function(t,e,n){"use strict";n.r(e);n(13);var o=n(12);n(40),n(48),n(35),n(366),n(24),n(23),n(49),n(29),n(50);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var r={props:["source","data"],methods:{getTake:function(text){return text.split(":")[1].split(";").length}},computed:{title:function(){return"Bảng cầu tính từ ".concat(this.data.count," ngày trước ").concat(this.data.end_date).toUpperCase()},province:function(){var t=this,e=this.$store.state.menus.kqxs,n={};return"Miền Bắc"==this.data.title?{domain:"xsmb",link:"",title:this.data.title}:(Object.keys(e).map((function(r){var l=e[r].data.findIndex((function(e){return e.title==t.data.title}));l>=0&&(n=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({domain:r},e[r].data[l]))})),n)}}},l=r,d=(n(397),n(2)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.data.edit?t._e():e("div",[Array.isArray(t.source.result)&&t.source.result.length?e("ContentElement",{attrs:{title:t.title}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table-lotto text-center w-100"},[e("tbody",t._l(t.source.result,(function(n){return e("tr",{key:"items_"+n.number},[e("th",{staticClass:"txt-sub-content fw-medium bg-highlight-row show-on-web"},[t._v("\n              Đầu "+t._s(n.number)+"\n            ")]),t._v(" "),t._l(n.data,(function(o,c){return e("td",{key:"item_"+c+"_"+n.number},[o.number?e("div",{staticClass:"d-flex flex-column cursor-pointer",attrs:{title:o.postions}},[e("span",{staticClass:"txt-sub-title fw-bold mb-2 lh-1"},[t._v(t._s(o.number))]),t._v(" "),e("span",{staticClass:"txt-sub-content font-italic lh-1"},[t._v(t._s(t.getTake(o.postions))+" lần")])]):e("div",{staticClass:"d-flex flex-column cursor-pointer empty-soicau"},[e("span",{staticClass:"txt-sub-title fw-bold mb-2 lh-1"},[t._v(" ")]),t._v(" "),e("span",{staticClass:"txt-sub-content font-italic lh-1"},[t._v(" ")])])])}))],2)})),0)]),t._v(" "),e("table",{staticClass:"table table-condensed table-bordered text-center align-middle border border-light mb-0 hidden"},[e("tbody",t._l(t.source.result,(function(n){return e("tr",{key:"items_"+n.number},[e("th",{staticClass:"bg-info"},[t._v("Đầu "+t._s(n.number))]),t._v(" "),t._l(n.data,(function(o,c){return e("td",{key:"item_"+c+"_"+n.number,staticClass:"kichthuoc p-0 py-1",class:{"bg-secondary":!o.number,"bg-white":o.number}},[o.number?e("div",{staticClass:"btn btn-link text-decoration-none p-0",attrs:{title:o.postions}},[e("span",{staticClass:"text-danger fw-bolder"},[t._v(t._s(o.number))]),e("br"),t._v(" "),e("span",{staticClass:"text-muted fst-italic fs-6"},[t._v(t._s(t.getTake(o.postions))+" lần\n                ")])]):t._e()])}))],2)})),0)])])]):e("h3",{staticClass:"bg-error-gradient list-group-title text-center fw-medium fs-6 mb-3 lh-base"},[t._v("\n    Không có cầu hai nháy nào trong khoảng ngày bạn đã chọn\n  ")]),t._v(" "),Array.isArray(t.source.loto)&&t.source.loto.length?e("ContentElement",{attrs:{title:"Tổng số cầu xuất hiện theo cặp (sắp xếp giảm dần)"}},[e("div",{staticClass:"px-2"},[e("div",{staticClass:"row"},t._l(t.source.loto,(function(n){return e("div",{key:n.number,staticClass:"col-md-4 py-1 border-bottom"},[t._v("\n          Cặp số\n          "),e("span",{staticClass:"text-danger fw-bolder"},[t._v(t._s(n.number))]),t._v(" xuất\n          hiện "),e("span",{staticClass:"text-primary fw-bolder"},[t._v(t._s(n.take))]),t._v(" lần\n        ")])})),0)])]):t._e(),t._v(" "),Array.isArray(t.source.view)&&t.source.view.length?e("ContentElement",{attrs:{title:"Kết quả cụ thể theo ngày"}},[e("div",{staticClass:"txt-padding p-t-10 p-b-10"},[t._v("\n      Chi tiết cầu loto "),e("span",{staticClass:"fw-bold"},[t._v(t._s(t.province.title))]),t._v(" biên\n      độ "),e("span",{staticClass:"fw-bold"},[t._v(t._s(t.data.count))]),t._v(" ngày tính từ\n      "),e("span",{staticClass:"fw-bold"},[t._v(t._s(t.data.end_date))]),e("br"),t._v("\n      Cặp số "),e("span",{staticClass:"fw-bold"}),t._v(" xuất hiện\n      "),e("span",{staticClass:"fw-bold"}),t._v(" lần"),e("br"),t._v("\n      Vị trí số ghép lên cầu: Vị trí 1:\n      "),e("span",{staticClass:"fw-bold"}),t._v(", Vị trí 2:\n      "),e("span",{staticClass:"fw-bold"})]),t._v(" "),t._l(t.source.view,(function(n,o){return e("ContentSoiCauResult",{key:o,attrs:{source:n,province:t.province}})}))],2):t._e()],1)}),[],!1,null,"b809ed74",null);e.default=component.exports;installComponents(component,{ContentElement:n(164).default,ContentSoiCauResult:n(391).default})},424:function(t,e,n){"use strict";n(403)},448:function(t,e,n){"use strict";n.r(e);n(24),n(57),n(35),n(49),n(29),n(50);var o=n(12),c=n(4),r=n(42);n(55),n(366),n(65),n(23),n(13);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={head:function(t){var e=t.$seoMeta;return{title:this.getMeta.title,meta:Object(r.a)(e(this.getMeta,!1))}},layout:"column",middleware:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,c,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,o=t.params,c=t.redirect,t.$axios,r=o.type,l=n.state.menus.stats["soi-cau"].data,!(l.findIndex((function(t){return t.link==r}))<0)){e.next=6;break}return e.abrupt("return",c("/soi-cau"));case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{content:"",type:this.$route.params.type,data:{edit:!0,end_date:"",count:"",title:"Miền Bắc"},post:null}},methods:{viewResult:function(data){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.data=data,e.next=3,t.$axios.$post("/kqxs/soi-cau",d(d({},data),{},{type:t.switchType,url:t.type}));case 3:(content=e.sent).error?t.content={}:t.content=content.data,t.data.edit=!1;case 6:case"end":return e.stop()}}),e)})))()}},fetch:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null;case 1:case"end":return t.stop()}}),t)})))()},computed:{switchType:function(){var t="";switch(this.type){case"cau-giai-dac-biet":case"cau-hai-nhay":case"cau-loto":case"cau-loto-bach-thu":case"cau-loai-loto":case"cau-loai-bach-thu":case"cau-theo-thu":case"cau-dac-biet-theo-thu":t="co-ban"}return t},getTitle:function(){var t=this;return(this.$store.state.menus.stats["soi-cau"].data.filter((function(e){return e.link==t.type}))[0]||{}).title||""},getMeta:function(){if(this.post)return{title:this.post.Title,image:this.post.Meta.cover,description:this.post.Description,keywords:this.post.Keywords};var image,t,e;switch(this.type){case"cau-giai-dac-biet":image="https://i.imgur.com/E0jadcM.png",t="KQXS24H.TOP - Soi cầu giải đặc biệt: Soi cầu giải đặc biệt XSMB, giải đặc biệt xổ số 3 miền để đưa ra các cặp lô mới nhất, chính xác nhất  từ các vị trí trong bảng kết quả có thể ra trong các ngày tiếp theo",e="Soi cau giai dac biet, soi cau dac biet truyen thong, soi cau, soi cau xsmb, soi cau sxmb, soi cau hang ngay, cầu giải đặc biệt xsmb";break;case"cau-hai-nhay":image="https://i.imgur.com/5IEzOQN.png",t="KQXS24H.TOP - Soi cầu loto 2 nháy: dự đoán cặp lô của  XSMB, XSMN, XSMT  xác suất về 2 nháy bằng cách ghép nối các vị trí trong bảng kết quả ngày hôm trước",e="Soi cau lo 2 nhay, soi cau 2 nhay truyen thong,  soi cau ca cap,  soi cau lo, soi cau, soi cau xsmb, soi cau sxmb, lô 2 nháy xsmb";break;case"cau-loto":image="https://i.imgur.com/u4neug4.png",t="KQXS24H.TOP - Soi cầu loto: dự đoán cặp số có thể về dạng AB-BA (ví dụ 69-96) của XSMB, XSMN, XSMT bằng cách ghép các vị trí bất kì trong bảng kết quả đã về những ngày hôm trước tuỳ theo biên độ ngày đã chọn",e="Soi cau lo, soi cau lo truyen thong, soi cau xsmb, soi cau sxmb, cầu lô xsmb";break;case"cau-loto-bach-thu":image="https://i.imgur.com/dnvPGhD.png",t="KQXS24H.TOP - Soi cầu loto bạch thủ: dự đoán 1 bộ số loto duy nhất có xác suất cao sẽ về trong những lần quay tiếp theo của XSMB, XSMN, XSMT bằng cách ghép nối các vị trí khác nhau trên bảng kết quả",e="Soi cau lo bach thủ, soi cau lo bach thu truyen thong,  soi cau, soi cau xsmb, soi cau sxmb, lô bạch thủ xsmb";break;case"cau-loai-loto":image="https://i.imgur.com/exs2KDS.png",t="KQXS24H.TOP - Soi cầu loại loto: dựa vào diễn biến của bảng kết quả trong nhiều ngày liên tiếp gần đây để dự đoán loto sẽ không về trong ngày hôm nay, kết quả của soi cầu loại loto sẽ giúp bạn loại ra cặp loto có ít xác suất về nhất",e="Soi cau loai lotto, soi cau loai lotto truyen thong, soi cau loai lotto xsmb, soi cau, soi cau xsmb, soi cau sxmb";break;case"cau-loai-bach-thu":image="https://i.imgur.com/1At0wqs.png",t="KQXS24H.TOP - Soi cầu loại bạch thủ: soi cầu  XSMB, XSMN, XSMT  để đưa ra bộ số duy nhất có xác suất cao nhất sẽ không về dựa vào bảng kết quả các lần quay trước",e="Soi cau loai bach thu, soi cau loai bach thu truyen thong, soi cau loai bach thu xsmb, soi cau, soi cau xsmb, soi cau sxmb";break;case"cau-theo-thu":image="https://i.imgur.com/rwsjdTb.png",t="KQXS24H.TOP - Soi cầu theo thứ: soi cầu loto XSMB, XSMN, XSMT có xác suất cao nhất sẽ về trong những ngày tiếp theo dựa vào bảng kết quả theo Thứ đã chọn trong tuần",e="Soi cau theo thu xsmb, soi cau theo thu xo so truyen thong, soi cau thu 2, soi cau thu 3, soi cau thu 4, soi cau thu 5, soi cau thu 6, soi cau thu 7, soi cau chu nhat, soi cau, soi cau xsmb, soi cau sxmb";break;case"cau-dac-biet-theo-thu":image="https://i.imgur.com/Th66Up3.png",t="KQXS24H.TOP - Soi cầu giải đặc biệt theo thứ:  soi cầu đặc biệt XSMB, XSMN, XSMT có xác suất cao nhất sẽ về trong những ngày tiếp theo dựa vào bảng kết quả theo Thứ đã chọn trong tuần",e="Soi cau giai dac biet theo thu, soi cau db xsmb, soi cau dac biet thu 2, soi cau dac biet thu 3, soi cau dac biet thu 4, soi cau dac biet thu 5,  soi cau dac biet thu 6, soi cau dac biet thu 7, soi cau dac biet chu nhat, soi cau, soi cau xsmb, soi cau sxmb"}return{title:this.getTitle+" Xổ số 3 miền 2 ngày trước "+this.$dayjs().format("DD/MM/YYYY"),image:image,description:t,keywords:e}}}},v=(n(424),n(2)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return t.post?e("div",[e("div",{staticClass:"card mb-3 w-100 border-0"},[t.post.Meta?e("img",{staticClass:"card-img-top",attrs:{src:t.post.Meta.cover,alt:t.post.Title}}):t._e(),t._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title"},[t._v(t._s(t.post.Title))]),t._v(" "),e("div",{staticClass:"card-text",domProps:{innerHTML:t._s(t.post.Content)}})]),t._v(" "),e("div",{staticClass:"card-footer bg-btn-gradient"},[e("small",{staticClass:"text-white"},[t._v("Cập nhật lúc\n        "+t._s(t.$dayjs(t.post.updated_at).format("HH:mm DD/MM/YYYY ")))])])]),t._v(" "),e("ContentElement",{attrs:{title:"BÀI ĐĂNG LIÊN QUAN"}},[e("ContentNews",{attrs:{limit:"4",category:"so-mo"}})],1)],1):e("div",["co-ban"==t.switchType?e("ContentSoiCauForm",{attrs:{type:t.type},on:{submit:t.viewResult,edit:function(e){t.content={},t.data.edit=!0}}}):t._e(),t._v(" "),e("ContentSoiCauView",{attrs:{source:t.content,data:t.data}}),t._v(" "),e("ContentElement",{attrs:{title:"Giới thiệu tính năng "+t.getTitle}},[e("div",{staticClass:"txt-padding"},[e("p",{staticClass:"m-b-15"},[t._v(t._s(t.getMeta.description))]),t._v(" "),e("p",{staticClass:"font-italic txt-sub-content text-secondary mb-0"},[e("span",{staticClass:"fw-bolder"},[t._v("Từ khoá:")]),t._v(" "+t._s(t.getMeta.keywords)+"\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSoiCauForm:n(411).default,ContentSoiCauView:n(412).default,ContentElement:n(164).default,ContentNews:n(365).default})}}]);