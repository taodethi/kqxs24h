(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{407:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{}},methods:{viewResult:function(){}}},l=e(2),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ Tạo dàn 3D - 4D"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[n("span",{staticClass:"text-danger fw-bolder"},[t._v("HƯỚNG DẪN:")]),n("br"),t._v("\n      Tạo dàn 3-4D: Tạo dàn 4D bằng cách ghép càng 4D + 3D và dàn 2D (nếu càng 4D bỏ trống thì sẽ ghép thành dàn 3D)"),n("br"),t._v("\n      Ghép AB x BC: Tạo dàn bằng cách ghép dàn 2D AB với dàn 2D BC (nếu dàn sau là dàn 3D BCD thì sẽ ghép thành dàn 4D)\n    ")]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Nhập dàn số")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Nhập dàn số (cách nhau bằng dấu phẩy hoặc cách). Các số có 2 chữ số."},domProps:{value:t.numbers},on:{input:function(n){n.target.composing||(t.numbers=n.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder text-primary"},[t._v("Kết quả tách dàn số\n      ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"form-control",attrs:{rows:"3",readonly:"",disabled:""},domProps:{value:t.result},on:{input:function(n){n.target.composing||(t.result=n.target.value)}}})])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:e(163).default})}}]);