(window.webpackJsonp=window.webpackJsonp||[]).push([[58,13],{362:function(t,e,o){"use strict";o.r(e);o(40);var n=o(4),r=(o(55),o(48),{props:{limit:{type:String,default:5},category:{type:String,default:"so-mo"}},data:function(){return{posts:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/posts/lists?limit=".concat(t.limit,"&category=").concat(t.category));case 2:t.posts=e.sent.map((function(t){return t.Meta=JSON.parse(t.Meta),t}));case 3:case"end":return e.stop()}}),e)})))()}}),c=o(2),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row row-cols-1 row-cols-md-2 g-4"},t._l(t.posts,(function(o){return e("div",{key:o.PostId,staticClass:"col"},[e("div",{staticClass:"card cursor-pointer shadow bg-body border-0",on:{click:function(e){return t.$router.push("/tin-tuc/".concat(o.Category,"/").concat(o.Slug))}}},[e("img",{staticClass:"card-img-top",attrs:{src:o.Meta.cover,alt:""}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(o.Title))])]),t._v(" "),e("div",{staticClass:"card-footer bg-btn-gradient"},[e("small",{staticClass:"text-white"},[t._v("Cập nhật lúc\n          "+t._s(t.$dayjs(o.updated_at).format("HH:mm DD/MM/YYYY ")))])])])])})),0)}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,o){},417:function(t,e,o){"use strict";o(396)},440:function(t,e,o){"use strict";o.r(e);var n=o(4),r=o(42),c=(o(55),o(40),o(24),o(57),{data:function(){return{post:{Meta:{}}}},head:function(t){var e=t.$seoMeta;return{title:this.post.Title||"Tin Tức Về Xổ Số - Cập Nhật Thông Tin Về KQXS Mới Nhất Mỗi Ngày",meta:[{name:"revisit-after",content:"1 days"},{property:"og:image:alt",content:this.post.Title},{property:"og:type",content:"article",hid:"og:type"}].concat(Object(r.a)(e({title:this.post.Title||"Tin Tức Về Xổ Số - Cập Nhật Thông Tin Về KQXS Mới Nhất Mỗi Ngày",image:this.post.Meta.cover||this.getType[this.post.Category||"so-mo"].cover,description:this.post.Meta.description||this.getType[this.post.Category||"so-mo"].description,keywords:this.post.Meta.keywords||this.getType[this.post.Category||"so-mo"].keywords},!1)))}},computed:{getType:function(){return{"so-mo":{title:"Sổ mơ",cover:"https://i.imgur.com/c198vyr.png",description:"Tin Tức Về Xổ Số - Cập Nhật Thông Tin Về KQXS Mới Nhất Mỗi Ngày - Tổng hợp tin về xổ số kiến thiết, tin hot nhất tại cổng thông tin của kqxs24h.top.",keywords:"tin tuc xo so, xo so hom nay, xoso24h"},"du-doan-xo-so":{title:"Dự đoán xổ số",cover:"https://i.imgur.com/c198vyr.png",description:"Tin Tức Về Xổ Số - Cập Nhật Thông Tin Về KQXS Mới Nhất Mỗi Ngày - Tổng hợp tin về xổ số kiến thiết, tin hot nhất tại cổng thông tin của kqxs24h.top.",keywords:"tin tuc xo so, xo so hom nay, xoso24h"},"tin-hot-hang-ngay":{title:"Tin hót hằng ngày",cover:"https://i.imgur.com/c198vyr.png",description:"Tin Tức Về Xổ Số - Cập Nhật Thông Tin Về KQXS Mới Nhất Mỗi Ngày - Tổng hợp tin về xổ số kiến thiết, tin hot nhất tại cổng thông tin của kqxs24h.top.",keywords:"tin tuc xo so, xo so hom nay, xoso24h"}}}},mounted:function(){this.post.PostId||this.$fetchState.pending||this.$router.push("/tin-tuc")},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/posts/l/"+t.$route.params.slug);case 2:if(!(data=e.sent).error&&data){e.next=5;break}return e.abrupt("return",t.$router.push("/tin-tuc"));case 5:data.Meta=JSON.parse(data.Meta),t.post=data;case 7:case"end":return e.stop()}}),e)})))()},jsonld:function(){return[{"@context":"https://schema.org","@type":"Organization",name:"KQXS24H",url:"https://kqxs24h.top/",logo:"https://i.imgur.com/1AdH3Vy.gif"},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://kqxs24h.top/",name:"Trang chủ"}},{"@type":"ListItem",position:1,item:{"@id":"https://kqxs24h.top/tin-tuc/"+this.post.Category,name:this.getType[this.post.Category||"so-mo"].title}}]},{"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":"https://kqxs24h.top"+this.$route.fullPath},headline:this.post.Title,description:this.post.Meta.description,image:{"@type":"ImageObject",url:this.post.Meta.cover||this.getType[this.post.Category||"so-mo"].cover,width:1200,height:628},datePublished:this.post.created_at,dateModified:this.post.updated_at,author:{"@type":"Person",name:"KQXS24H",url:"https://kqxs24h.top/tin-tuc/du-doan-xo-so"},publisher:{"@type":"Organization",name:"https://kqxs24h.top/",logo:{"@type":"ImageObject",url:"https://i.imgur.com/1AdH3Vy.gif",width:400}}}]}}),h=(o(417),o(2)),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return t.$fetchState.pending?e("div",{staticClass:"text-center"}):e("div",[e("div",{staticClass:"card mb-3 w-100 border-0"},[t.post.Meta?e("img",{staticClass:"card-img-top",attrs:{src:t.post.Meta.cover,alt:t.post.Title}}):t._e(),t._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title"},[t._v(t._s(t.post.Title))]),t._v(" "),e("div",{staticClass:"card-text ql-editor",domProps:{innerHTML:t._s(t.post.Content)}})]),t._v(" "),e("div",{staticClass:"card-footer bg-btn-gradient"},[e("small",{staticClass:"text-white"},[t._v("Cập nhật lúc\n        "+t._s(t.$dayjs(t.post.updated_at).format("HH:mm DD/MM/YYYY ")))])])]),t._v(" "),e("ContentElement",{attrs:{title:"BÀI ĐĂNG LIÊN QUAN"}},[e("ContentNews",{attrs:{limit:"4",category:t.post.Category}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentNews:o(362).default,ContentElement:o(163).default})}}]);