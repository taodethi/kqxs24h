(window.webpackJsonp=window.webpackJsonp||[]).push([[64,13],{365:function(t,n,e){"use strict";e.r(n);e(40);var o=e(4),r=(e(55),e(48),{props:{limit:{type:String,default:5},category:{type:String,default:"so-mo"}},data:function(){return{posts:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("/posts/lists?limit=".concat(t.limit,"&category=").concat(t.category));case 2:t.posts=n.sent.map((function(t){return t.Meta=JSON.parse(t.Meta),t}));case 3:case"end":return n.stop()}}),n)})))()}}),c=e(2),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"row row-cols-1 row-cols-md-2 g-4"},t._l(t.posts,(function(e){return n("div",{key:e.PostId,staticClass:"col"},[n("div",{staticClass:"card cursor-pointer shadow bg-body border-0",on:{click:function(n){return t.$router.push("/tin-tuc/".concat(e.Category,"/").concat(e.Slug))}}},[n("img",{staticClass:"card-img-top",attrs:{src:e.Meta.cover,alt:""}}),t._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.Title))])]),t._v(" "),n("div",{staticClass:"card-footer bg-btn-gradient"},[n("small",{staticClass:"text-white"},[t._v("Cập nhật lúc\n          "+t._s(t.$dayjs(e.updated_at).format("HH:mm DD/MM/YYYY ")))])])])])})),0)}),[],!1,null,null,null);n.default=component.exports},441:function(t,n,e){"use strict";e.r(n);e(24),e(57);var o={data:function(){return{title:"Tin tức xổ số hàng ngày mới nhất ",description:"Tin tức xổ số hàng ngày mới nhất - Tin tức 24h cập nhất nhanh nhất, tin tóng diễn ra trên tất ... Hướng dẫn cách chơi xổ số Vietlott Max 3D Pro chuẩn nhất."}},head:function(t){var n=t.$seoMeta;return{title:this.title,meta:n({title:this.title,description:this.description,image:"https://i.imgur.com/al8XCgm.jpg",keywords:"Tin tức xổ số hàng ngày mới nhất, Xổ số kiến thiết, kết quả xổ số, xổ số, sổ xố, xo so kien thiet, ket qua xo so, xo so, so xo, xoso, soxo, kqxs, kqsx, xskt, so so, xo xo"},!1)}}},r=e(2),component=Object(r.a)(o,(function(){return(0,this._self._c)("ContentNews",{attrs:{limit:"10",category:"tin-hot-hang-ngay"}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentNews:e(365).default})}}]);