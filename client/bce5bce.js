(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{392:function(t,e,n){"use strict";n.r(e);n(48),n(23),n(13);var o={data:function(){return{code:"mb",date:this.$dayjs().format("YYYY-MM-DD"),begin_date:this.$dayjs().format("YYYY-MM-DD"),end_date:this.$dayjs().format("YYYY-MM-DD"),count:"30",numbers:"",day_ow:"7"}},methods:{viewResult:function(){}},computed:{listProvince:function(){return this.$store.state.menus.province},listDays:function(){return[{value:"0",title:"Chủ nhật"},{value:"1",title:"Thứ hai"},{value:"2",title:"Thứ ba"},{value:"3",title:"Thứ tư"},{value:"4",title:"Thứ năm"},{value:"5",title:"Thứ sáu"},{value:"6",title:"Thứ bảy"},{value:"7",title:"Tất cả các ngày trong tuần"}]},getType:function(){var t="";switch(this.$route.params.type){case"tan-suat-loto":case"tan-suat-cap-loto":case"dau-duoi-loto":t=1;break;case"chu-ky":t=2;break;case"tan-so-nhip":t=3}return t}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("ContentElement",{attrs:{title:"Thống kê"}},[e("div",{staticClass:"padding-10"},[1==t.getType?e("div",{staticClass:"row form-margin"},[e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Chọn tỉnh")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.code=e.target.multiple?n:n[0]}}},t._l(t.listProvince,(function(n){return e("option",{key:n.code,domProps:{value:n.code}},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Biên độ ngày")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Số ngày muốn xem")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-12 form-padding align-self-end"},[e("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",on:{click:t.viewResult}},[t._v("\n          Xem kết quả\n        ")])])]):t._e(),t._v(" "),2==t.getType?e("div",{staticClass:"row form-margin"},[e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Chọn tỉnh")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.code=e.target.multiple?n:n[0]}}},t._l(t.listProvince,(function(n){return e("option",{key:n.code,domProps:{value:n.code}},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"col-md-8 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Bộ số")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Điền các bộ số bạn muốn xem (ngăn cách bằng dấu phẩy hoặc cách). Để trống để xem mọi bộ số"},domProps:{value:t.numbers},on:{input:function(e){e.target.composing||(t.numbers=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-12 form-padding align-self-end"},[e("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",on:{click:t.viewResult}},[t._v("\n          Xem kết quả\n        ")])])]):t._e(),t._v(" "),3==t.getType?e("div",{staticClass:"row form-margin"},[e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Chọn tỉnh")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.code=e.target.multiple?n:n[0]}}},t._l(t.listProvince,(function(n){return e("option",{key:n.code,domProps:{value:n.code}},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Từ ngày")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.begin_date,expression:"begin_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.begin_date},on:{input:function(e){e.target.composing||(t.begin_date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-4 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Đến ngày")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.end_date,expression:"end_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.end_date},on:{input:function(e){e.target.composing||(t.end_date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Cặp số khảo sát")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.numbers},on:{input:function(e){e.target.composing||(t.numbers=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Theo thứ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.day_ow,expression:"day_ow"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.day_ow=e.target.multiple?n:n[0]}}},t._l(t.listDays,(function(n){return e("option",{key:n.value,domProps:{value:n.value}},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"col-md-12 form-padding align-self-end"},[e("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",on:{click:t.viewResult}},[t._v("\n          Xem kết quả\n        ")])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentElement:n(164).default})}}]);