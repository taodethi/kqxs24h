(window.webpackJsonp=window.webpackJsonp||[]).push([[45,5],{365:function(t,e,n){"use strict";var r=n(3),o=n(88).findIndex,c=n(107),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},396:function(t,e,n){var r=n(3),o=n(30),c=n(90),l=n(397),d=n(243),f=n(15),m=n(20),v=n(71),h=n(5),y=o("Reflect","construct"),C=Object.prototype,w=[].push,_=h((function(){function t(){}return!(y((function(){}),[],t)instanceof t)})),x=!h((function(){y((function(){}))})),O=_||x;r({target:"Reflect",stat:!0,forced:O,sham:O},{construct:function(t,e){d(t),f(e);var n=arguments.length<3?t:d(arguments[2]);if(x&&!_)return y(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return c(w,r,e),new(c(l,t,r))}var o=n.prototype,h=v(m(o)?o:C),O=c(t,h,e);return m(O)?O:h}})},397:function(t,e,n){"use strict";var r=n(6),o=n(66),c=n(20),l=n(16),d=n(110),f=n(108),m=Function,v=r([].concat),h=r([].join),y={},C=function(t,e,n){if(!l(y,e)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";y[e]=m("C,a","return new C("+h(r,",")+")")}return y[e](t,n)};t.exports=f?m.bind:function(t){var e=o(this),n=e.prototype,r=d(arguments,1),l=function(){var n=v(r,d(arguments));return this instanceof l?C(e,n.length,n):e.apply(t,n)};return c(n)&&(l.prototype=n),l}},402:function(t,e,n){"use strict";n.r(e);n(396);var r=n(4),o=n(166),c=n(167);function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function d(object,t){for(;!Object.prototype.hasOwnProperty.call(object,t)&&null!==(object=l(object)););return object}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var base=d(t,e);if(base){var desc=Object.getOwnPropertyDescriptor(base,e);return desc.get?desc.get.call(arguments.length<3?t:n):desc.value}},f.apply(this,arguments)}function m(t,p){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,p){return t.__proto__=p,t},m(t,p)}var v=n(18);function h(t,e){if(e&&("object"===Object(v.a)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var y;n(55),n(65),n(13),n(87);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(n,t);var e=C(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,null,[{key:"create",value:function(t){var e=f(l(n),"create",this).call(this,t);return"string"==typeof t&&(e.setAttribute("src",this.sanitize(t)),e.setAttribute("class","img-fluid"),e.setAttribute("alt","Kết quả xổ số 3 miền hôm nay - kqxs24h.top")),e}}]),n}((y=n(247)).import("formats/image"));y.register(w);var _={emits:["input"],props:["value"],data:function(){return{id:"",editor:null}},methods:{imageHandler:function(){var t=this,e=this,input=document.createElement("input");input.setAttribute("type","file"),input.setAttribute("accept","image/*"),input.click(),input.onchange=Object(r.a)(regeneratorRuntime.mark((function n(){var r,image,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.uploadImage(input.files[0]);case 2:r=n.sent,image="",o=e.editor.getSelection(),r.success?(image=r.data.link,e.editor.insertEmbed(o.index,"image",image)):((c=new FileReader).onloadend=function(){e.editor.insertEmbed(o.index,"image",c.result)},c.readAsDataURL(input.files[0]));case 6:case"end":return n.stop()}}),n)})))},uploadImage:function(t){return new Promise((function(e){var data=new FormData;data.append("image",t),fetch("https://api.imgur.com/3/image",{method:"POST",body:data,headers:{Authorization:"Client-ID b7a9455ecc883f9",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(data){return e(data)})).catch((function(t){e({error:"Lỗi khi tải ảnh lên."})}))}))}},mounted:function(){var t=this,e=this;this.id="Z"+this._uid,setTimeout((function(){t.editor=new y("#".concat(t.id),{modules:{toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:[1,2,3,4,5,6,!1]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]],handlers:{image:t.imageHandler}}},theme:"snow",placeholder:"Vui lòng nhập nội dung..."}),t.editor.on("text-change",(function(t,n,source){e.$emit("input",e.editor.root.innerHTML)}))}),0)}},x=n(2),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:t.id}},[e("div",{staticClass:"ql-editor",domProps:{innerHTML:t._s(t.value)}}),t._v(" "),e("div",{staticClass:"ql-clipboard",attrs:{contenteditable:"true",tabindex:"-1"}}),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"ql-tooltip ql-hidden"},[t("a",{staticClass:"ql-preview",attrs:{rel:"noopener noreferrer",target:"_blank",href:"about:blank"}}),t("input",{attrs:{type:"text","data-formula":"e=mc^2","data-link":"https://quilljs.com","data-video":"Embed URL"}}),t("a",{staticClass:"ql-action"}),t("a",{staticClass:"ql-remove"})])}],!1,null,null,null);e.default=component.exports},438:function(t,e,n){"use strict";n.r(e);n(48),n(23),n(13),n(24),n(57);var r=n(4),o=n(10),c=n(12),l=(n(55),n(242),n(40),n(65),n(365),{layout:"auth",middleware:"auth",data:function(){return{data:this.defaultPost(),error:"",Category:[{id:"du-doan-xo-so",title:"Dự đoán xổ số",image:"https://i.imgur.com/1fQ79IV.png"},{id:"so-mo",title:"Sổ mơ",image:"https://i.imgur.com/5c8LITi.png"},{id:"tin-hot-hang-ngay",title:"Tin hót hằng ngày",image:"https://i.imgur.com/al8XCgm.jpg"}]}},methods:{defaultPost:function(){var t;return t={PostId:"",Title:"",Content:"",Category:"du-doan-xo-so",Slug:"",Meta:{cover:"https://i.imgur.com/1fQ79IV.png"}},Object(c.a)(t,"Slug",""),Object(c.a)(t,"UserId",""),t},createPost:function(){var t=this;if(this.error="",!this.data.Title.trim())return this.error="Vui lòng nhập tên bài viết";var data=JSON.parse(JSON.stringify(this.data));data.Meta=JSON.stringify(data.Meta),this.$axios.$post("/posts",data).then((function(e){e.Meta=JSON.parse(e.Meta),t.data=e,alert("Cập nhật bài viết thành công!"),t.$router.push("/".concat(t.data.Category,"/").concat(t.data.Slug))}))},changeCover:function(t){var e=Object(o.a)(t.target.files,1)[0];this.error="Đang upload hình ảnh lên...",this.uploadImage(e)},uploadImage:function(t){var e=this,data=new FormData;data.append("image",t),fetch("https://api.imgur.com/3/image",{method:"POST",body:data,headers:{Authorization:"Client-ID b7a9455ecc883f9",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){t.success&&(e.data.Meta.cover=t.data.link,e.error="")})).catch((function(t){e.error="Lỗi khi tải ảnh lên."}))}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.$route.query.postId)){e.next=15;break}return e.prev=2,e.next=5,t.$axios.$get("/posts/p/"+n);case 5:r=e.sent,c=Object(o.a)(r,1),(l=c[0]).Meta=JSON.parse(l.Meta),t.data=l,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t.$router.push(t.$route.path);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()},updated:function(){var t=this;this.Category.findIndex((function(e){return e.image==t.data.Meta.cover}))>=0&&(this.data.Meta.cover=this.Category.filter((function(e){return e.id==t.data.Category}))[0].image)}}),d=n(2),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mw-1140 mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("ContentElement",{attrs:{title:"TẠO BÀI VIẾT MỚI"}},[e("div",{staticClass:"padding-10",staticStyle:{height:"90vh"}},[e("div",{staticClass:"mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.Title,expression:"data.Title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Tên bài viết..."},domProps:{value:t.data.Title},on:{input:function(e){e.target.composing||t.$set(t.data,"Title",e.target.value)}}})]),t._v(" "),t.data.Content||!t.$route.query.postId?e("ContentEditor",{model:{value:t.data.Content,callback:function(e){t.$set(t.data,"Content",e)},expression:"data.Content"}}):t._e()],1)])],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("ContentElement",{attrs:{title:"CẤU HÌNH SEO"}},[e("div",{staticClass:"padding-10"},[e("div",{staticClass:"mb-2"},[e("label",[e("img",{staticClass:"img-fluid",attrs:{src:t.data.Meta.cover||"https://i.imgur.com/lmmtnR5.jpg"}}),t._v(" "),e("input",{staticClass:"d-none",attrs:{type:"file",accept:"image/*"},on:{change:t.changeCover}})])]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("Chuyên mục")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.Category,expression:"data.Category"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"Category",e.target.multiple?n:n[0])}}},t._l(t.Category,(function(n,r){return e("option",{key:r,domProps:{value:n.id}},[t._v("\n                "+t._s(n.title)+"\n              ")])})),0)]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("Permalink")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.Slug,expression:"data.Slug"}],staticClass:"form-control w-100",attrs:{type:"text"},domProps:{value:t.data.Slug},on:{input:function(e){e.target.composing||t.$set(t.data,"Slug",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("Mô tả ngắn")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.Meta.description,expression:"data.Meta.description"}],staticClass:"form-control",attrs:{"aria-label":"With textarea"},domProps:{value:t.data.Meta.description},on:{input:function(e){e.target.composing||t.$set(t.data.Meta,"description",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("Từ khoá")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.Meta.keyword,expression:"data.Meta.keyword"}],staticClass:"form-control w-100",attrs:{type:"text"},domProps:{value:t.data.Meta.keyword},on:{input:function(e){e.target.composing||t.$set(t.data.Meta,"keyword",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"mb-2"},[e("strong",{staticClass:"text-danger"},[t._v(t._s(t.error))])]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-primary w-100",on:{click:t.createPost}},[t._v("\n          ĐĂNG BÀI NGAY\n        ")])])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentEditor:n(402).default,ContentElement:n(163).default})}}]);