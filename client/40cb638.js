(window.webpackJsonp=window.webpackJsonp||[]).push([[48,36,38],{389:function(t,e,n){"use strict";n.r(e);n(41),n(19),n(56),n(48),n(40),n(58),n(23),n(13),n(65);var r={props:["source"],methods:{innerText:function(text){for(;/\*/g.test(text);)text=text.replace(/\*/,'<img src="https://www.minhngoc.com.vn/images/loading.gif" style="width: 15px; height: 15px;">');for(;/\+/g.test(text);)text=text.replace(/\+/,'<img align="absmiddle" src="https://www.minhngoc.com.vn/images/loto'.concat(Math.floor(10*Math.random()),'.gif" style="width: 1em">'));return/^\d{1,6}$/g.test(text)?text.substr(-this.source.view):text}},computed:{toTable:function(){var table=[];return this.source.key&&table.push([{colspan:27,value:this.source.key,class:"color-sub-brand fw-medium txt-sub-title"}]),this.source.data.map((function(t,e){var n=[{colspan:3,rowspan:t.length>4?2:1,value:e?"G"+e:"ĐB",class:"fw-medium "+(e?"":"color-highlight ")}];switch(t.length){case 6:case 7:n=n.concat(t.slice(0,Math.ceil(t.length/2)).map((function(t,e,n){return{colspan:Math.floor(24/n.length),rowspan:"",value:t,class:"txt-normal-prize"}}))),table.push(n),n=t.slice(Math.ceil(t.length/2)).map((function(t,e,n){return{colspan:Math.floor(24/n.length),rowspan:"",value:t,class:"txt-normal-prize"}}));break;default:n=n.concat(t.map((function(t,n,r){return{colspan:Math.floor(24/r.length),rowspan:"",value:t,class:e?"txt-normal-prize":"txt-special-prize"}})))}table.push(n)})),table},getTextDate:function(){var t=this.$dayjs(this.source.time,"DD-MM-YYYY");return"".concat(t.$W?"Thứ "+(t.$W+1):"Chủ nhật"," ngày ").concat(t.format("DD/MM/YYYY"))},currentProvince:function(){var t=this;return this.$store.state.menus.province.filter((function(e){return e.code==t.source.code})).shift()},createLink:function(){return"/".concat(this.currentProvince.domain||"xsmb","/").concat(this.currentProvince.link||"","/").concat(this.source.time).replace(/\/\//g,"/")}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("table",{staticClass:"table-lotto btlr-8 btrr-8 overflow-hidden bg-white w-100 text-center"},[e("thead",[e("tr",{staticClass:"bg-btn-gradient"},[e("th",{attrs:{colspan:"27"}},[e("NuxtLink",{staticClass:"text-decoration-none text-white",attrs:{to:t.createLink}},[e("span",{staticClass:"text-white text-decoration-none fw-bold txt-title"},[t._v("Kết quả xổ số "+t._s(t.currentProvince.title))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-around"},[e("div",{staticClass:"text-center fw-normal"},[t._v("\n              "+t._s(t.getTextDate)+"\n            ")])])])],1)])]),t._v(" "),e("tbody",t._l(t.toTable,(function(n,r){return e("tr",{key:r,class:{"bg-color-lotto-background":"24578".includes(r)&&11==t.toTable.length||10==r||10==t.toTable.length&&"1368".includes(r)}},t._l(n,(function(n,r){return e("td",{key:r,class:n.class,attrs:{colspan:n.colspan||"",rowspan:n.rowspan||""},domProps:{innerHTML:t._s(t.innerText(n.value))}})})),0)})),0)])}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n.r(e);var r={emit:["input"],props:["value"],data:function(){return{view:this.value,radio:[{value:"0",title:"Đầy đủ"},{value:"2",title:"2 số"},{value:"3",title:"3 số"}]}},watch:{view:function(){this.$emit("input",this.view)}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"padding-5 text-nowrap bg-white d-flex align-items-center justify-content-between bblr-10 bbrr-10"},[e("div",t._l(t.radio,(function(n,r){return e("label",{key:r,staticClass:"cursor-pointer",class:{"fw-bolder text-primary":n.value==t.view}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"view"}],staticClass:"hidden",attrs:{type:"radio"},domProps:{value:n.value,checked:t._q(t.view,n.value)},on:{change:function(e){t.view=n.value}}}),t._v("\n      "+t._s(n.title)),e("span",{directives:[{name:"show",rawName:"v-show",value:r<t.radio.length-1,expression:"index < radio.length - 1"}],staticClass:"px-1"},[t._v(" · ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,n){"use strict";n.r(e);n(48),n(23),n(13);var r=n(10),o=n(4),c=n(42),l=(n(55),n(19),{head:function(t){var e=t.$seoMeta;return{title:"Dò vé số, Tra cứu kết quả xổ số kiến thiết",meta:Object(c.a)(e({title:"Dò vé số, Tra cứu kết quả xổ số kiến thiết",image:"https://i.imgur.com/yRIo594.png",description:"Dò vé số - Tra cứu kết quả xổ số · Kết quả xổ số kiết thiết 3 miền - ngày "+this.$dayjs().format("DD/MM/YYYY")+" Dò vé số. Giúp bạn kiểm tra con số mình đánh có về không một cách nhanh nhất",keywords:"do ve so, dò vé số hôm nay, dò vé số online"},!1))}},data:function(){return{dayso:this.$route.query.dayso||"",code:this.$route.query.code||"mb",end_date:this.$route.query.end_date||this.$dayjs().format("YYYY-MM-DD"),result:null}},methods:{viewResult:function(){/^\d{2,6}$/g.test(this.dayso)&&this.$router.push({path:"/do-ve-so",query:{code:this.code,end_date:this.end_date,dayso:this.dayso}})},fetchData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var content,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/kqxs/so-ket-qua",{code:t.code,date:t.$dayjs(t.end_date).format("DD-MM-YYYY"),dow:"7",count:1});case 2:if(!(content=e.sent).error){e.next=5;break}return e.abrupt("return",alert("Hệ thống đang gặp lỗi. Vui lòng thực hiện lại."));case 5:n=Object(r.a)(content.data,1),(o=n[0]).time!==t.$dayjs(t.end_date).format("DD-MM-YYYY")&&(t.end_date=t.$dayjs(o.time,"DD-MM-YYYY").format("YYYY-MM-DD")),t.result=o,console.log(content);case 9:case"end":return e.stop()}}),e)})))()}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},watch:{end_date:function(t){if(this.$dayjs().valueOf()<this.$dayjs(t).valueOf())return this.end_date=this.$dayjs().format("YYYY-MM-DD")},$route:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()}},computed:{listProvince:function(){return this.$store.state.menus.province},currentProvince:function(){var t=this;return this.listProvince.filter((function(e){return e.code==t.province})).shift()}}}),d=n(2),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("ContentElement",{attrs:{title:"Dò vé số, Tra cứu kết quả xổ số kiến thiết"}},[e("div",{staticClass:"padding-10"},[e("div",{staticClass:"row form-margin"},[e("div",{staticClass:"col-sm-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Chọn ngày")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.end_date,expression:"end_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.end_date},on:{input:function(e){e.target.composing||(t.end_date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-6 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Chọn tỉnh")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.code=e.target.multiple?n:n[0]}}},t._l(t.listProvince,(function(n){return e("option",{key:n.code,domProps:{value:n.code}},[t._v("\n              "+t._s(n.title)+"\n            ")])})),0)]),t._v(" "),e("div",{staticClass:"col-sm-12 form-padding"},[e("label",{staticClass:"fw-medium txt-sub-content d-block m-b-5"},[t._v("Dãy số")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.dayso,expression:"dayso"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Dãy số cần tra..."},domProps:{value:t.dayso},on:{input:function(e){e.target.composing||(t.dayso=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-12 form-padding"},[e("button",{staticClass:"btn text-white bg-btn-gradient w-100 text-nowrap line-clamp-1",on:{click:t.viewResult}},[t._v("\n            XEM KẾT QUẢ\n          ")])])])])]),t._v(" "),t.result?e("div",{staticClass:"mb-3"},[e("ContentView",{attrs:{source:t.result}}),t._v(" "),e("ContentViewOptions",{model:{value:t.result.view,callback:function(e){t.$set(t.result,"view",e)},expression:"result.view"}})],1):t._e(),t._v(" "),e("ContentElement",{attrs:{title:"QUY ĐỊNH CHUNG"}},[e("div",{staticClass:"padding-10 table-responsive"},[e("div",{staticClass:"fst-italic",staticStyle:{"text-align":"justify"}},[e("p",[t._v("\n          * Vé số trúng giải là những vé có dãy số dự thưởng trùng với các con\n          số trên bảng kết quả theo thứ tự hàng của từng giải thưởng có mệnh\n          giá theo cơ cấu thưởng của c.ty xổ số kiến thiết.\n        ")]),t._v(" "),e("p",[t._v("\n          * Vé số trúng phải còn nguyên hình, nguyên số, không rách rời và\n          không cạo sửa.\n        ")]),t._v(" "),e("p",[t._v("\n          * Vé số trúng có giá trị lãnh thưởng trong thời hạn trả thưởng qui\n          định. (30 ngày)\n        ")]),t._v(" "),e("p",[t._v("* Vé số trúng nhiều giải được lãnh đủ tổng giá trị các giải.")]),t._v(" "),e("p",[t._v("\n          * Vé số có tổng giá trị các giải trúng trên 10 triệu đồng phải đóng\n          thuế thu nhập, giải trúng 10 triệu trở lại không phải đóng thuế.\n          C.Ty xổ số kiến thiết sẽ khấu trừ và nộp vào ngân sách nhà nước khi\n          trả thưởng.\n        ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentElement:n(164).default,ContentView:n(389).default,ContentViewOptions:n(390).default})}}]);