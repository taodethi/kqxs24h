(window.webpackJsonp=window.webpackJsonp||[]).push([[1,29,30,31,32,33,34],{365:function(t,n,e){"use strict";var r=e(3),o=e(88).findIndex,l=e(107),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},404:function(t,n,e){"use strict";e.r(n);e(19),e(56),e(365),e(13),e(106),e(48),e(242);var r={data:function(){return{numbers:"",result:""}},methods:{viewResult:function(){if(this.numbers){for(var t=[],n=[],e=this.numbers.replace(/ +/g,",").replace(/[^0-9,]/g,""),b=this.trim_array(e.split(",")),i=0;i<b.length;i++)if(-1==n.findIndex((function(t){return t==b[i]}))){for(var r=!1,o=i+1;o<b.length;o++)if(this.is_palindrome(b[i],b[o])){var l=this.rolling_number(b[i]);t.push(l),r=!0,n.push(b[i],b[o])}0==r&&(t.push(this.number_pad(b[i])),n.push(b[i]))}this.result=t.map((function(t){return"  "+t})).toString()}},rolling_number:function(t){var n=this.number_pad(t).split("");return n[0]+n[1]+n[0]},number_pad:function(t){return("0000"+t).substring(("0000"+t).length-2)},trim_array:function(t){for(var i=0;i<t.length;i++)t[i]=t[i].trim();return t},is_palindrome:function(t,n){if(t=this.number_pad(t),n=this.number_pad(n),t.length!=n.length||0==t.length)return!1;for(var e=t.split("").reverse(),r=n.split(""),i=0;i<2;i++)if(e[i]!=r[i])return!1;return!0}}},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ xổ số - Gộp dàn đặc biệt"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[t._v("\n      Công cụ này sẽ gộp những cặp số có dạng AB và BA thành dạng thu gọn\n      ABA."),n("br"),t._v("\n      Những cặp số rời (độc lập), chẳng hạn CD mà không có DC sẽ được giữ\n      nguyên"),n("br"),t._v("\n      p/s: Nhập các số có 2 chữ số, ví dụ: 00,09,99"),n("br"),t._v("\n      Ví dụ:"),n("br"),t._v("\n      Dàn số nhập vào là: 12,21,34,43,89,98 sau khi gộp thành dàn 121, 343,\n      898"),n("br"),t._v("\n      Dàn số nhập vào là: 12,34,43,56,89,98 sau khi gộp thành dàn 12, 343, 56,\n      898\n    ")]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Nhập dàn số")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Nhập dàn số (cách nhau bằng dấu phẩy hoặc cách). Các số có 2 chữ số."},domProps:{value:t.numbers},on:{input:function(n){n.target.composing||(t.numbers=n.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder text-primary"},[t._v("Kết quả gộp dàn số\n      ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"form-control",attrs:{rows:"3",readonly:"",disabled:""},domProps:{value:t.result},on:{input:function(n){n.target.composing||(t.result=n.target.value)}}})])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:e(163).default})},405:function(t,n,e){"use strict";e.r(n);e(242),e(19),e(56),e(13),e(29),e(106),e(48);var r={data:function(){return{numbers:"",result:""}},methods:{trim_array:function(t){for(var i=0;i<t.length;i++)t[i]=t[i].trim();return t},viewResult:function(){var t=[],n=this.numbers.replace(/ +/g,",").replace(/[^0-9,]/,"");this.trim_array(n.split(",")).forEach((function(element){if(element.length<=2)t.push(element);else if(3==element.length){var n=element.split("");t.push(n[0]+n[1]),t.push(n[1]+n[2])}})),this.result=t.map((function(t){return"  "+t})).toString()}}},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ xổ số - Tách dàn đặc biệt"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[t._v("\n      Công cụ này sẽ tách những cặp số có dạng thu gọn ABA thành dạng AB và\n      BA"),n("br"),t._v("\n      Những cặp số rời (độc lập), chẳng hạn CD, EF sẽ được giữ nguyên "),n("br"),t._v("\n      Ví dụ: "),n("br"),t._v("\n      Dàn số nhập vào là: 121,343,898 sau khi tách thành dàn 12, 21, 34, 43,\n      89, 98"),n("br"),t._v("\n      Dàn số nhập vào là: 12,343,56,898 sau khi tách thành dàn 12, 34, 43,\n      56,89, 98\n    ")]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Nhập dàn số")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Nhập dàn số (cách nhau bằng dấu phẩy hoặc cách). Các số có 2 chữ số."},domProps:{value:t.numbers},on:{input:function(n){n.target.composing||(t.numbers=n.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder text-primary"},[t._v("Kết quả tách dàn số\n      ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"form-control",attrs:{rows:"3",readonly:"",disabled:""},domProps:{value:t.result},on:{input:function(n){n.target.composing||(t.result=n.target.value)}}})])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:e(163).default})},406:function(t,n,e){"use strict";e.r(n);e(242),e(23),e(13),e(40),e(28),e(41),e(19),e(56),e(106),e(48);var r={data:function(){return{number1:"",number2:"",dan_trung:"",dan_ghep:"",loc_dan1:"",loc_dan2:""}},methods:{number_pad:function(t){return("0000"+t).substring(("0000"+t).length-2)},trim_array:function(t){for(var i=0;i<t.length;i++)t[i]=t[i].trim();return t},array_pad:function(t){for(var n=[],i=0;i<t.length;i++)n.push(this.number_pad(t[i]));return n},intersect:function(a,b){var t;return b.length>a.length&&(t=b,b=a,a=t),a.filter((function(t){return b.indexOf(t)>-1}))},combine:function(a,b){var t=a.concat(b);return t.filter((function(n,e){return t.indexOf(n)==e}))},subtract:function(t,n){return t.filter((function(t){return!n.includes(t)}))},viewResult:function(){var t=this.number1.replace(/ +/g,",").replace(/[^0-9,]/,""),n=this.number2.replace(/ +/g,",").replace(/[^0-9,]/,""),e=this.array_pad(this.trim_array(t.split(","))),r=this.array_pad(this.trim_array(n.split(","))),o=e.filter((function(t,n){return e.indexOf(t)==n})),l=r.filter((function(t,n){return r.indexOf(t)==n}));this.dan_trung=this.intersect(o,l).map((function(t){return"  "+t})).toString(),this.dan_ghep=this.combine(o,l).map((function(t){return"  "+t})).toString(),this.loc_dan1=this.subtract(o,l).map((function(t){return"  "+t})).toString(),this.loc_dan2=this.subtract(l,o).map((function(t){return"  "+t})).toString()}}},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ Lọc - Ghép dàn đặc biệt"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[t._v("\n      KQXS24H.TOP: Hỗ trợ lọc ghép dàn chuyên nghiệp chính xác nhất. Dàn số\n      cách nhau bằng dấu phẩy. Mỗi số gồm có 2 chữ số.\n    ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Dàn số 1")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.number1,expression:"number1"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Thêm dàn thứ 1 (cách nhau bởi dấu phẩy hoặc cách)"},domProps:{value:t.number1},on:{input:function(n){n.target.composing||(t.number1=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Dàn số 2")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.number2,expression:"number2"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Thêm dàn thứ 2 (cách nhau bởi dấu phẩy hoặc cách)"},domProps:{value:t.number2},on:{input:function(n){n.target.composing||(t.number2=n.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"row form-padding border-bottom"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn trùng")]),t._v("\n        (Những số có mặt đồng thời trong cả Dàn 1 và Dàn 2)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dan_trung,expression:"dan_trung"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.dan_trung},on:{input:function(n){n.target.composing||(t.dan_trung=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row form-padding border-bottom"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn ghép")]),t._v("\n        (Những số có mặt ít nhất 1 lần trong Dàn 1 hoặc Dàn 2, hoặc có mặt\n        trong cả 2 dàn)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dan_ghep,expression:"dan_ghep"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.dan_ghep},on:{input:function(n){n.target.composing||(t.dan_ghep=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row form-padding border-bottom"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn 1 loại Dàn 2")]),t._v("\n        (Những số có mặt trong Dàn 1 nhưng không có mặt trong Dàn 2)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.loc_dan1,expression:"loc_dan1"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.loc_dan1},on:{input:function(n){n.target.composing||(t.loc_dan1=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row form-padding"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"fw-bold"},[t._v("Dàn 2 loại Dàn 1")]),t._v("\n        (Những số có mặt trong Dàn 2 nhưng không có mặt trong Dàn 1)\n      ")]),t._v(" "),n("div",{staticClass:"col-md-8"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.loc_dan2,expression:"loc_dan2"}],staticClass:"form-control",attrs:{rows:"3",disabled:""},domProps:{value:t.loc_dan2},on:{input:function(n){n.target.composing||(t.loc_dan2=n.target.value)}}})])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:e(163).default})},407:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{}},methods:{viewResult:function(){}}},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ Tạo dàn 3D - 4D"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[n("span",{staticClass:"text-danger fw-bolder"},[t._v("HƯỚNG DẪN:")]),n("br"),t._v("\n      Tạo dàn 3-4D: Tạo dàn 4D bằng cách ghép càng 4D + 3D và dàn 2D (nếu càng 4D bỏ trống thì sẽ ghép thành dàn 3D)"),n("br"),t._v("\n      Ghép AB x BC: Tạo dàn bằng cách ghép dàn 2D AB với dàn 2D BC (nếu dàn sau là dàn 3D BCD thì sẽ ghép thành dàn 4D)\n    ")]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder"},[t._v("Nhập dàn số")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.numbers,expression:"numbers"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Nhập dàn số (cách nhau bằng dấu phẩy hoặc cách). Các số có 2 chữ số."},domProps:{value:t.numbers},on:{input:function(n){n.target.composing||(t.numbers=n.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder text-primary"},[t._v("Kết quả tách dàn số\n      ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"form-control",attrs:{rows:"3",readonly:"",disabled:""},domProps:{value:t.result},on:{input:function(n){n.target.composing||(t.result=n.target.value)}}})])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:e(163).default})},408:function(t,n,e){"use strict";e.r(n);e(245),e(165),e(19),e(56);var r={data:function(){return{iddau:"",idduoi:"",idcham:"",idbo:"",idtong:"",idloaiso:"",idthemso:"",result:""}},methods:{viewResult:function(){var t=this.iddau,n=this.idduoi,e=this.idcham,r=this.idbo,o=this.idtong,l=this.idloaiso,c=this.idthemso;t.endsWith(",")&&(t=t.substring(0,t.length-1)),n.endsWith(",")&&(n=n.substring(0,n.length-1)),r.endsWith(",")&&(r=r.substring(0,r.length-1)),o.endsWith(",")&&(o=o.substring(0,o.length-1)),l.endsWith(",")&&(l=l.substring(0,l.length-1)),l.startsWith(",")&&(l=l.substring(1)),c.endsWith(",")&&(c=c.substring(0,c.length-1));for(var d="00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99",m=this.myTrim(d).split(","),v=this.myTrim(t).split(","),i=0;i<m.length;i++)for(var h=0;h<v.length;h++)m[i][0]==v[h]&&(d=(d=d.replace(m[i]+",","")).replace(m[i],""));m=this.myTrim(d).split(",");var f=this.myTrim(n).split(",");for(i=0;i<m.length;i++)for(h=0;h<f.length;h++)m[i][1]==f[h]&&(d=(d=d.replace(m[i]+",","")).replace(m[i],""));m=this.myTrim(d).split(",");var _=this.myTrim(e).split(",");for(i=0;i<m.length;i++)for(h=0;h<_.length;h++)m[i][0]!=_[h]&&m[i][1]!=_[h]||(d=(d=d.replace(m[i]+",","")).replace(m[i],""));m=this.myTrim(d).split(",");var C=this.myTrim(o).split(",");for(i=0;i<m.length;i++){var x=this.sumdigits(m[i]);for(h=0;h<C.length;h++)C[h].length>0&&(x-C[h]!=0&&x-C[h]!=10||(d=(d=d.replace(m[i]+",","")).replace(m[i],"")))}var w=this.myTrim(r).split(",");for(i=0;i<w.length;i++)if(""!=this.myTrim(w[i])&&2==this.myTrim(w[i]).length){var y=this.BOSO(w[i]);m=this.myTrim(y).split(",");for(h=0;h<m.length;h++)""!=this.myTrim(m[h])&&2==this.myTrim(m[h]).length&&(d=(d=d.replace(m[h]+",","")).replace(m[h],""))}if(""!=this.myTrim(l)){m=this.myTrim(l).split(",");for(h=0;h<m.length;h++)d=(d=d.replace(m[h]+",","")).replace(m[h],"")}if(""!=this.myTrim(c)){m=this.myTrim(c).split(",");for(h=0;h<m.length;h++)""!=this.myTrim(m[h])&&2==m[h].length&&d.indexOf(m[h])<0&&(d=d+","+m[h])}this.result=d.replace(/\,/g,",  "),console.log(d)},myTrim:function(t){return t.replace(/^\s+|\s+$/gm,"")},BOSO:function(t){var n=t.substring(0,1),e=t.substring(1),r=this.BONGSO(n),o=this.BONGSO(e),l="";return l+=n+e+",",l+=e+n+",",l+=n+o+",",l+=o+n+",",l+=r+e+",",l+=e+r+",",l+=r+o+",",l+=o+r+","},sumdigits:function(t){for(var n=0;t>0;)n+=t%10,t=Math.floor(t/10);return n},BONGSO:function(t){switch(t){case"0":return"5";case"5":return"0";case"1":return"6";case"6":return"1";case"2":return"7";case"7":return"2";case"3":return"8";case"8":return"3";case"4":return"9";case"9":return"4"}}}},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("ContentElement",{attrs:{title:"Công cụ xổ số - loại dàn đặc biệt"}},[n("div",{staticClass:"padding-10"},[n("div",{staticClass:"alert alert-primary"},[t._v("\n      KQXS24H.TOP: Hỗ trợ loại dàn xổ số đặc biệt chuyên nghiệp chính xác\n      nhất. Dàn số cách nhau bằng dấu phẩy. Mỗi số gồm có 2 chữ số.\n    ")]),t._v(" "),n("h4",{staticClass:"text-primary text-center"},[t._v("NHẬP THÔNG TIN DƯỚI ĐÂY")]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Loại đầu:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.iddau,expression:"iddau"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.iddau},on:{input:function(n){n.target.composing||(t.iddau=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Loại đuôi:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.idduoi,expression:"idduoi"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.idduoi},on:{input:function(n){n.target.composing||(t.idduoi=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Loại tổng:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.idtong,expression:"idtong"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.idtong},on:{input:function(n){n.target.composing||(t.idtong=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Loại chạm:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.idcham,expression:"idcham"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.idcham},on:{input:function(n){n.target.composing||(t.idcham=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Loại bộ:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.idbo,expression:"idbo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.idbo},on:{input:function(n){n.target.composing||(t.idbo=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Loại những số:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.idloaiso,expression:"idloaiso"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.idloaiso},on:{input:function(n){n.target.composing||(t.idloaiso=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"mb-3 form-padding row border-bottom"},[n("label",{staticClass:"col-sm-3 col-form-label"},[t._v("Thêm những số:")]),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.idthemso,expression:"idthemso"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.idthemso},on:{input:function(n){n.target.composing||(t.idthemso=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-padding mb-3"},[n("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",attrs:{type:"submit"},on:{click:t.viewResult}},[t._v("\n        XEM KẾT QUẢ\n      ")])]),t._v(" "),n("div",{staticClass:"mb-3 text-center form-padding"},[n("label",{staticClass:"form-label fw-bolder text-primary"},[t._v("Kết quả Loại dàn đặc biệt\n      ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"form-control",attrs:{rows:"5",disabled:""},domProps:{value:t.result},on:{input:function(n){n.target.composing||(t.result=n.target.value)}}})])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentElement:e(163).default})},415:function(t,n,e){"use strict";e.r(n);var r=e(2),component=Object(r.a)({},(function(){return(0,this._self._c)("datagrid")}),[],!1,null,null,null);n.default=component.exports},422:function(t,n,e){"use strict";e.r(n);var r={props:["type"]},o=e(2),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return"gop-so-xo-so"==t.type?n("ContentToolsGopSo"):"tach-so-xo-so"==t.type?n("ContentToolsTachSo"):"loc-ghep-dan-xo-so"==t.type?n("ContentToolsGhepDan"):"tao-nhanh-dan-xo-so-dac-biet"==t.type?n("ContentToolsTaoDan"):"tao-dan-xo-so-3d-4d"==t.type?n("ContentToolsD3"):"loai-dan-xo-so-dac-biet"==t.type?n("ContentToolsLoaiDan"):t._e()}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentToolsGopSo:e(404).default,ContentToolsTachSo:e(405).default,ContentToolsGhepDan:e(406).default,ContentToolsTaoDan:e(415).default,ContentToolsD3:e(407).default,ContentToolsLoaiDan:e(408).default})}}]);