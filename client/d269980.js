(window.webpackJsonp=window.webpackJsonp||[]).push([[63,14],{364:function(t,o,e){"use strict";e.r(o);e(40);var n=e(4),r=(e(55),e(48),{props:{limit:{type:String,default:5},category:{type:String,default:"so-mo"}},data:function(){return{posts:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.$get("/posts/lists?limit=".concat(t.limit,"&category=").concat(t.category));case 2:t.posts=o.sent.map((function(t){return t.Meta=JSON.parse(t.Meta),t}));case 3:case"end":return o.stop()}}),o)})))()}}),c=e(2),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"row row-cols-1 row-cols-md-2 g-4"},t._l(t.posts,(function(e){return o("div",{key:e.PostId,staticClass:"col"},[o("div",{staticClass:"card cursor-pointer shadow bg-body border-0",on:{click:function(o){return t.$router.push("/tin-tuc/".concat(e.Category,"/").concat(e.Slug))}}},[o("img",{staticClass:"card-img-top",attrs:{src:e.Meta.cover,alt:""}}),t._v(" "),o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[t._v(t._s(e.Title))])]),t._v(" "),o("div",{staticClass:"card-footer bg-btn-gradient"},[o("small",{staticClass:"text-white"},[t._v("Cập nhật lúc\n          "+t._s(t.$dayjs(e.updated_at).format("HH:mm DD/MM/YYYY ")))])])])])})),0)}),[],!1,null,null,null);o.default=component.exports},436:function(t,o,e){"use strict";e.r(o);e(24),e(57);var n={data:function(){return{title:"Sổ mơ - giải mộng chiêm bao - so mo so de",description:"Tổng hợp bảng tra sổ mơ số đẹp đầy đủ và chính xác nhất; Tìm kiếm sổ mơ. Tra cứu sổ mơ giải mộng giấc mơ, so mo so de"}},head:function(t){var o=t.$seoMeta;return{title:this.title,meta:o({title:this.title,description:this.description,image:"https://i.imgur.com/5c8LITi.png",keywords:"Sổ mơ - giải mộng chiêm bao - so mo so de, Xổ số kiến thiết, kết quả xổ số, xổ số, sổ xố, xo so kien thiet, ket qua xo so, xo so, so xo, xoso, soxo, kqxs, kqsx, xskt, so so, xo xo"},!1)}}},r=e(2),component=Object(r.a)(n,(function(){return(0,this._self._c)("ContentNews",{attrs:{limit:"10",category:"so-mo"}})}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{ContentNews:e(364).default})}}]);