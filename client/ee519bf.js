(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,19,20,21,22],{367:function(t,e,l){},368:function(t,e,l){"use strict";l.r(e);l(48);var n={props:["results","date","title"],data:function(){return{showloto:!0,view:"0",live:!1}},computed:{loto:function(){return(this.results||[]).map((function(t){return{title:t.title,data:t.results}}))}}},o=(l(381),l(2)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-white br-10 table-shadow m-b-15"},[t.live?e("ContentResultLiveRunning"):t._e(),t._v(" "),e("ContentResultTable",{class:{"live-result-board":t.live},attrs:{source:{results:t.results,date:t.date,title:t.title,view:t.view}}}),t._v(" "),e("ContentResultTableSelect",{model:{value:t.view,callback:function(e){t.view=e},expression:"view"}},[e("ContentResultTableBottom",{model:{value:t.showloto,callback:function(e){t.showloto=e},expression:"showloto"}})],1)],1),t._v(" "),t.showloto?e("ContentResultTableLoto",{attrs:{results:t.loto}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentResultLiveRunning:l(372).default,ContentResultTable:l(373).default,ContentResultTableBottom:l(374).default,ContentResultTableSelect:l(375).default,ContentResultTableLoto:l(376).default})},372:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{living:!1,livingText:"XX"}},methods:{reLive:function(){}}},o=l(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"live-prize-box"},[e("h2",{staticClass:"text-white text-center fw-bold txt-sub-title position-relative"},[t._v("\n    Trực tiếp xổ số Miền Bắc 25/09/2022\n  ")]),t._v(" "),t.living?e("div",{staticClass:"color-content text-center fw-medium live-prize-title"},[t._v("\n    "+t._s(t.livingText)+"\n  ")]):e("button",{staticClass:"replay-live bg-btn-gradient btn",on:{click:t.reLive}},[e("div",{staticClass:"d-flex align-items-center"},[t._v("Xem lại trực tiếp")])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex",attrs:{id:"drawl_ball"}},[e("div",{staticClass:"position-relative draw-ball"},[e("div",{staticClass:"raffle-cage"},[e("div",{staticClass:"raffle-cage-sheet"})]),t._v(" "),e("div",{staticClass:"raffle-ball raffle-ball-3 txt-special-prize"},[e("div",[t._v("3")])])]),t._v(" "),e("div",{staticClass:"position-relative draw-ball"},[e("div",{staticClass:"raffle-cage"},[e("div",{staticClass:"raffle-cage-sheet raffle-cage-anim-2"})])]),t._v(" "),e("div",{staticClass:"position-relative draw-ball"},[e("div",{staticClass:"raffle-cage"},[e("div",{staticClass:"raffle-cage-sheet raffle-cage-anim-3"})])]),t._v(" "),e("div",{staticClass:"position-relative draw-ball"},[e("div",{staticClass:"raffle-cage"},[e("div",{staticClass:"raffle-cage-sheet raffle-cage-anim-4"})])]),t._v(" "),e("div",{staticClass:"position-relative draw-ball"},[e("div",{staticClass:"raffle-cage"},[e("div",{staticClass:"raffle-cage-sheet raffle-cage-anim-5"})])])])}],!1,null,null,null);e.default=component.exports},373:function(t,e,l){"use strict";l.r(e);var n=l(10),o=(l(19),l(56),l(40),l(48),{props:["source"],methods:{processText:function(text){for(;/\*/g.test(text);)text=text.replace(/\*/,'<img src="https://www.minhngoc.com.vn/images/loading.gif" style="width: 15px; height: 15px;">');for(;/\+/g.test(text);)text=text.replace(/\+/,'<img align="absmiddle" src="https://www.minhngoc.com.vn/images/loto'.concat(Math.floor(10*Math.random()),'.gif" style="width: 1em">'));return text}},computed:{kqxs:function(){var t=this;if(!this.source.results.length)return[];var e=[],l=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];if(1==this.source.results.length){var o=Object(n.a)(this.source.results,1)[0],title="Kết quả xổ số ".concat(o.title," - ").concat(l[this.$dayjs(o.date,"DD/MM/YYYY").$W]," ngày ").concat(o.date);e.push({class:"",data:[{class:"",row:"",col:27,text:'<h2 class="color-brand text-decoration-none fw-bold txt-title mb-0 lh-base" >'+title+"</h2>"}]}),e.push({class:"",data:[{class:"color-sub-brand txt-sub-title fw-medium",row:"",col:27,text:o.key}]}),o.results.map((function(l,n){var o=[{class:n?"fw-medium":"color-highlight fw-bold",row:l.length>5?2:1,col:3,text:n?"G"+n:"ĐB"}];l.map((function(r,c){(6==l.length&&3==c||7==l.length&&4==c)&&(e.push({class:n%2?"bg-color-lotto-background":"",data:o}),o=[]);var col=24/l.length;7==l.length&&(col=c>=4?8:6),6==l.length&&(col=8),o.push({class:n?"txt-normal-prize":"txt-special-prize",col:col,text:r.substr(0-t.source.view)})})),e.push({class:n%2?"bg-color-lotto-background":"",data:o})}))}else{title="Kết quả xổ số ".concat(this.source.title," - ").concat(l[this.$dayjs(this.source.date,"DD/MM/YYYY").$W]," ngày ").concat(this.source.date);e.push({class:"",data:[{class:"",row:"",col:8*this.source.results.length+3,text:'<h2 class="color-brand text-decoration-none fw-bold txt-title mb-0 lh-base">'+title+"</h2>"}]});for(var r=[{class:"color-sub-brand txt-content fw-medium p-0",row:"",col:3,text:"Tỉnh"}],i=0;i<this.source.results.length;i++)r.push({class:"color-sub-brand txt-content fw-medium p-0",row:"",col:8,text:this.source.results[i].title});e.push({class:"bg-light",data:r});for(i=this.source.results[0].results.length-1;i>=0;i--)r=[{class:i?"fw-medium":"fw-bold color-highlight",row:this.source.results[0].results[i].length,col:3,text:i?"G"+i:"ĐB"}],this.source.results[0].results[i].map((function(l,n){for(var o=0;o<t.source.results.length;o++)r.push({class:i?"txt-normal-prize":"txt-special-prize",col:8,text:t.source.results[o].results[i][n].substr(0-t.source.view)});e.push({class:i%2?"bg-color-lotto-background":"",data:r}),r=[]}))}return e},getSize:function(){return this.source.results.length}}}),r=l(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"result-board"},[e("table",{staticClass:"table-lotto br-8 overflow-hidden bg-white w-100 text-center",class:{"table-4-provinces":4==t.getSize}},[e("tbody",t._l(t.kqxs,(function(l,n){return e("tr",{key:n,class:l.class},t._l(l.data,(function(l,n){return e("td",{key:n,class:l.class,attrs:{colspan:l.col,rowspan:l.row},domProps:{innerHTML:t._s(t.processText(l.text))}})})),0)})),0)])])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,l){"use strict";l.r(e);var n={emits:["input"],props:["value"],data:function(){return{showloto:!0}},created:function(){},watch:{value:function(t){this.showloto=t}}},o=l(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",{staticClass:"me-1 d-sm-inline d-none"},[e("button",{staticClass:"option-results-btn txt-sub-content text-white bg-linear-gradient btn",attrs:{type:"button"},on:{click:function(e){return t.$emit("input",!t.value)}}},[t._v("\n      "+t._s(t.showloto?"Ẩn":"Xem")+" bảng Loto\n    ")])]),t._v(" "),e("div",{},[e("button",{staticClass:"option-results-btn txt-sub-content text-white bg-btn-gradient btn dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n      Tùy chọn\n    ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("li",{staticClass:"d-sm-none d-inline"},[e("a",{staticClass:"dropdown-item cursor-pointer",attrs:{href:"#"},on:{click:function(e){return t.$emit("input",!t.value)}}},[t._v(t._s(t.showloto?"Ẩn":"Xem")+" bảng Loto")])])])])])}),[function(){var t=this._self._c;return t("li",[t("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Action")])])},function(){var t=this._self._c;return t("li",[t("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Another action")])])}],!1,null,null,null);e.default=component.exports},375:function(t,e,l){"use strict";l.r(e);var n={emits:["input"],props:["value"],data:function(){return{id_:"id_"+Math.floor(1e5*Math.random()),view:"0"}},created:function(){this.view=this.value}},o=l(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"padding-10 text-nowrap bg-white d-flex align-items-center justify-content-between bblr-10 bbrr-10"},[e("div",{staticClass:"txt-sub-content d-flex align-items-center"},[e("div",{staticClass:"form-check m-r-10"},[e("label",{staticClass:"form-check-label cursor-pointer",on:{click:function(e){return t.$emit("input","0")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"view"}],staticClass:"form-check-input change_view_mode",attrs:{type:"radio",value:"0"},domProps:{checked:t._q(t.view,"0")},on:{change:function(e){t.view="0"}}}),t._v("Tất cả\n      ")])]),t._v(" "),e("div",{staticClass:"form-check m-r-10"},[e("label",{staticClass:"form-check-label cursor-pointer",on:{click:function(e){return t.$emit("input","2")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"view"}],staticClass:"form-check-input change_view_mode",attrs:{type:"radio",value:"2"},domProps:{checked:t._q(t.view,"2")},on:{change:function(e){t.view="2"}}}),t._v("2 số cuối\n      ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label cursor-pointer",on:{click:function(e){return t.$emit("input","3")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"view"}],staticClass:"form-check-input change_view_mode",attrs:{type:"radio",value:"3"},domProps:{checked:t._q(t.view,"3")},on:{change:function(e){t.view="3"}}}),t._v("3 số cuối\n      ")])])]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,l){"use strict";l.r(e);l(48),l(134),l(13),l(106),l(19),l(40);var n={props:{results:{type:Array,default:[]}},computed:{number:function(){try{var table=[],t=this.results.map((function(t){for(var e={},i=0;i<10;i++)e[i]={head:[],foot:[]};return t.data.map((function(t){return t.toString()})).join(",").split(",").map((function(t){var l=t.substr(-2);/(\D)/g.test(l)||(e[parseInt(l[0])].head.push(l),e[parseInt(l[1])].foot.push(l))})),e}));if(1==this.results.length){table.push({class:"bg-light text-center",data:[{row:"",col:26,text:'<h2 class="fs-6 mb-0 lh-base">Thống kê đầu đuôi lô tô XSTTH</h2>'}]});var e=["Đầu","Lô tô","Đuôi","Lô tô"].map((function(t,e){return{class:"color-sub-brand txt-content fw-medium p-0",row:"",col:e%2?10:3,text:t}}));table.push({class:"bg-light text-center",data:e});for(var i=0;i<10;i++)e=["","head","","foot"].map((function(e,l){return{class:l%2?"":"text-center",col:l%2?10:3,text:l%2?t[0][i][e].join("; "):i}})),table.push({class:i%2?"bg-color-lotto-background":"",data:e})}else{for(e=[{class:"color-sub-brand txt-content fw-medium p-0",row:"",col:3,text:"Đầu"}],i=0;i<this.results.length;i++)e.push({class:"color-sub-brand txt-content fw-medium p-0",row:"",col:8,text:this.results[i].title});table.push({class:"bg-light text-center",data:e});for(i=0;i<10;i++)e=(e=[{class:"color-sub-brand txt-content fw-medium p-0 text-center",row:"",col:3,text:i}]).concat(this.results.map((function(e,l){return{row:"",col:8,text:t[l][i].head.join("; ")}}))),table.push({class:i%2?"bg-color-lotto-background":"",data:e})}return table}catch(t){return console.log(t),[]}}}},o=l(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("table",{staticClass:"h-100 table-lotto table-shadow overflow-hidden w-100 bg-white br-10 fw-medium m-b-15"},[e("tbody",t._l(t.number,(function(l,n){return e("tr",{key:n,class:l.class},t._l(l.data,(function(l,n){return e("td",{key:n,class:l.class,attrs:{colspan:l.col,rowspan:l.row},domProps:{innerHTML:t._s(l.text)}})})),0)})),0)])])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,l){"use strict";l(367)}}]);