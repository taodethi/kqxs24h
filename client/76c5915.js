(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{405:function(t,n,r){"use strict";r.r(n);r(240),r(23),r(13),r(40),r(28),r(41),r(19),r(56),r(106),r(48);var e={data:function(){return{number1:"",number2:"",dan_trung:"",dan_ghep:"",loc_dan1:"",loc_dan2:""}},methods:{number_pad:function(t){return("0000"+t).substring(("0000"+t).length-2)},trim_array:function(t){for(var i=0;i<t.length;i++)t[i]=t[i].trim();return t},array_pad:function(t){for(var n=[],i=0;i<t.length;i++)n.push(this.number_pad(t[i]));return n},intersect:function(a,b){var t;return b.length>a.length&&(t=b,b=a,a=t),a.filter((function(t){return b.indexOf(t)>-1}))},combine:function(a,b){var t=a.concat(b);return t.filter((function(n,r){return t.indexOf(n)==r}))},subtract:function(t,n){return t.filter((function(t){return!n.includes(t)}))},viewResult:function(){var t=this.number1.replace(/ +/g,",").replace(/[^0-9,]/,""),n=this.number2.replace(/ +/g,",").replace(/[^0-9,]/,""),r=this.array_pad(this.trim_array(t.split(","))),e=this.array_pad(this.trim_array(n.split(","))),o=r.filter((function(t,n){return r.indexOf(t)==n})),c=e.filter((function(t,n){return e.indexOf(t)==n}));this.dan_trung=this.intersect(o,c).map((function(t){return"  "+t})).toString(),this.dan_ghep=this.combine(o,c).map((function(t){return"  "+t})).toString(),this.loc_dan1=this.subtract(o,c).map((function(t){return"  "+t})).toString(),this.loc_dan2=this.subtract(c,o).map((function(t){return"  "+t})).toString()}}},o=r(2),component=Object(o.a)(e,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ Lọc - Ghép dàn đặc biệt"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[t._v("\n      KQXS24H.TOP: Hỗ trợ lọc ghép dàn chuyên nghiệp chính xác nhất. Dàn số\n      cách nhau bằng dấu phẩy. Mỗi số gồm có 2 chữ số.\n    ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Dàn số 1")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.number1,expression:"number1"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Thêm dàn thứ 1 (cách nhau bởi dấu phẩy hoặc cách)"},domProps:{value:t.number1},on:{input:function(n){n.target.composing||(t.number1=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Dàn số 2")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.number2,expression:"number2"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Thêm dàn thứ 2 (cách nhau bởi dấu phẩy hoặc cách)"},domProps:{value:t.number2},on:{input:function(n){n.target.composing||(t.number2=n.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"row form-padding border-bottom"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn trùng")]),t._v("\n        (Những số có mặt đồng thời trong cả Dàn 1 và Dàn 2)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dan_trung,expression:"dan_trung"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.dan_trung},on:{input:function(n){n.target.composing||(t.dan_trung=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row form-padding border-bottom"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn ghép")]),t._v("\n        (Những số có mặt ít nhất 1 lần trong Dàn 1 hoặc Dàn 2, hoặc có mặt\n        trong cả 2 dàn)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dan_ghep,expression:"dan_ghep"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.dan_ghep},on:{input:function(n){n.target.composing||(t.dan_ghep=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row form-padding border-bottom"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn 1 loại Dàn 2")]),t._v("\n        (Những số có mặt trong Dàn 1 nhưng không có mặt trong Dàn 2)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.loc_dan1,expression:"loc_dan1"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.loc_dan1},on:{input:function(n){n.target.composing||(t.loc_dan1=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row form-padding"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn 2 loại Dàn 1")]),t._v("\n        (Những số có mặt trong Dàn 2 nhưng không có mặt trong Dàn 1)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.loc_dan2,expression:"loc_dan2"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.loc_dan2},on:{input:function(n){n.target.composing||(t.loc_dan2=n.target.value)}}})])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:r(163).default})}}]);