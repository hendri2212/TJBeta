(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35d8c0ea"],{"0d43":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"konten"},[r("HeaderMenu"),r("router-view",{key:t.$route.fullPath})],1)},a=[],n=r("74b7"),s={components:{HeaderMenu:n["a"]}},u=s,i=r("2877"),c=Object(i["a"])(u,o,a,!1,null,null,null);e["default"]=c.exports},"74b7":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-items-center fixed-top border-bottom shadow-sm py-2 px-2 bg-white justify-content-between container-header"},[t.notUseBack?r("router-link",{staticClass:"fas fa-arrow-left text-black-50 pl-2",attrs:{to:{name:t.back}}}):r("span",{staticClass:"fas fa-arrow-left text-black-50 pl-2",on:{click:function(e){return t.pushTo()}}}),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$route.meta.name))]),"login"!=t.$route.name&&"register"!=t.$route.name&&"forgot"!=t.$route.name&&"cart"!=t.$route.name&&"address"!=t.$route.name?r("ul",{staticClass:"nav"},[r("li",{staticClass:"nav-item"},[null==t.$store.state.cart.cart_product&&t.$store.state.login.ifLogin?r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("i",{staticClass:"fa fa-spinner fa-spin"})]):r("router-link",{staticClass:"nav-link",attrs:{to:{name:"cart",query:{from:t.$route.name}}}},[r("i",{staticClass:"fas fa-shopping-cart"}),r("span",{staticClass:"badge count_cart"},[t._v(t._s(t.$store.getters.cart_product_length))])])],1)]):t._e(),"login"==t.$route.name||"register"==t.$route.name||"forgot"==t.$route.name||"cart"==t.$route.name||"address"==t.$route.name?r("ul"):t._e()],1)},a=[],n=(r("b0c0"),{created:function(){},computed:{back:function(){return void 0==this.$route.query.from?"HomePage":this.$route.query.from},notUseBack:function(){return this.onCart||this.onProfile||this.onLogin},onCart:function(){return"cart"==this.$route.name&&(void 0==this.$route.query.from||"HomeWithProduct"!=this.$route.query.from&&"Product"!=this.$route.query.from&&"search"!=this.$route.query.from&&"address"!=this.$route.query.from)},onProfile:function(){return"profile"==this.$route.name&&(void 0==this.$route.query.from||"HomeWithProduct"!=this.$route.query.from)},onLogin:function(){return"login"==this.$route.name&&(void 0==this.$route.query.from||"HomeWithProduct"!=this.$route.query.from)}},methods:{pushTo:function(){this.$router.back()}}}),s=n,u=r("2877"),i=Object(u["a"])(s,o,a,!1,null,null,null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-35d8c0ea.61c51a78.js.map