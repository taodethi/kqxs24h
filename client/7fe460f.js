(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{365:function(n,t,e){"use strict";var r=e(3),l=e(88).findIndex,o=e(107),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(n){return l(this,n,arguments.length>1?arguments[1]:void 0)}}),o(c)},404:function(n,t,e){"use strict";e.r(t);e(19),e(56),e(365),e(13),e(106),e(48),e(242);var r={data:function(){return{numbers:"",result:""}},methods:{viewResult:function(){if(this.numbers){for(var n=[],t=[],e=this.numbers.replace(/ +/g,",").replace(/[^0-9,]/g,""),b=this.trim_array(e.split(",")),i=0;i<b.length;i++)if(-1==t.findIndex((function(n){return n==b[i]}))){for(var r=!1,l=i+1;l<b.length;l++)if(this.is_palindrome(b[i],b[l])){var o=this.rolling_number(b[i]);n.push(o),r=!0,t.push(b[i],b[l])}0==r&&(n.push(this.number_pad(b[i])),t.push(b[i]))}this.result=n.map((function(n){return"  "+n})).toString()}},rolling_number:function(n){var t=this.number_pad(n).split("");return t[0]+t[1]+t[0]},number_pad:function(n){return("0000"+n).substring(("0000"+n).length-2)},trim_array:function(n){for(var i=0;i<n.length;i++)n[i]=n[i].trim();return n},is_palindrome:function(n,t){if(n=this.number_pad(n),t=this.number_pad(t),n.length!=t.length||0==n.length)return!1;for(var e=n.split("").reverse(),r=t.split(""),i=0;i<2;i++)if(e[i]!=r[i])return!1;return!0}}},l=e(2),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("ContentElement",{attrs:{title:"Công cụ xổ số - Gộp dàn đặc biệt"}},[t("div",{staticClass:"padding-10"},[t("div",{staticClass:"alert alert-primary"},[n._v("\n      Công cụ này sẽ gộp những cặp số có dạng AB và BA thành dạng thu gọn\n      ABA."),t("br"),n._v("\n      Những cặp số rời (độc lập), chẳng hạn CD mà không có DC sẽ được giữ\n      nguyên"),t("br"),n._v("\n      p/s: Nhập các số có 2 chữ số, ví dụ: 00,09,99"),t("br"),n._v("\n      Ví dụ:"),t("br"),n._v("\n      Dàn số nhập vào là: 12,21,34,43,89,98 sau khi gộp thành dàn 121, 343,\n      898"),t("br"),n._v("\n      Dàn số nhập vào là: 12,34,43,56,89,98 sau khi gộp thành dàn 12, 343, 56,\n      898\n    ")]),n._v(" "),t("div",{staticClass:"mb-3 text-center form-padding"},[t("label",{staticClass:"form-label fw-bolder"},[n._v("Nhập dàn số")]),n._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Nhập dàn số (cách nhau bằng dấu phẩy hoặc cách). Các số có 2 chữ số."},domProps:{value:n.numbers},on:{input:function(t){t.target.composing||(n.numbers=t.target.value)}}})]),n._v(" "),t("div",{staticClass:"form-padding mb-3"},[t("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:n.viewResult}},[n._v("\n        XEM KẾT QUẢ\n      ")])]),n._v(" "),t("div",{staticClass:"mb-3 text-center form-padding"},[t("label",{staticClass:"form-label fw-bolder text-primary"},[n._v("Kết quả gộp dàn số\n      ")]),n._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.result,expression:"result"}],staticClass:"form-control",attrs:{rows:"3",readonly:"",disabled:""},domProps:{value:n.result},on:{input:function(t){t.target.composing||(n.result=t.target.value)}}})])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentElement:e(163).default})}}]);