(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23813e"],{fe9b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[null==t.user?s("div",{staticClass:"row mt-3 pt-5"},[s("img",{staticClass:"img-fluid d-flex mx-auto",staticStyle:{height:"100px"},attrs:{src:t.$store.state.url_images+"loading.svg"}})]):t._e(),null!=t.user?s("div",{staticClass:"col"},[t._m(0),s("ul",{staticClass:"list-unstyled mt-3"},[s("li",{staticClass:"border-top py-2"},[t._v(t._s(t.user.nama_pelanggan))]),s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"fas fa-map-marker-alt mx-2 text-primary"}),null!=t.user.alamat?[t._v(t._s(t.user.alamat))]:[t._v(" Belum ada alamat yang tersimpan ")]],2),s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"far fa-calendar-alt mx-2 text-primary"}),t._v(" "+t._s(t.user.tanggal_lahir)+" ")])]),t._m(1),s("ul",{staticClass:"list-unstyled mt-3"},[s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"fas fa-mobile-alt mx-2 text-primary"}),t._v(" "+t._s(t.user.no_wa)+" "),s("i",{staticClass:"fas fa-check-circle text-info"})]),s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"far fa-envelope mx-2 text-primary"}),t._v(" "+t._s(t.user.email)+" ")])]),t._m(2),t._m(3),s("button",{staticClass:"btn btn-outline-secondary btn-block",on:{click:t.logout}},[s("i",{staticClass:"fas fa-sign-out-alt text-secondary"}),t._v(" Logout ")])]):t._e()])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-between mt-3 pt-5"},[s("span",{staticClass:"font-weight-bold"},[t._v("Informasi Umum")]),s("input",{staticClass:"btn btn-sm btn-outline-info",attrs:{type:"button",value:"edit"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"font-weight-bold"},[t._v("Whatsapp & Email")]),s("input",{staticClass:"btn btn-sm btn-outline-info",attrs:{type:"button",value:"edit"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"font-weight-bold"},[t._v("Pengaturan")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"list-unstyled mt-3"},[s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"fas fa-people-carry text-primary mx-2"}),t._v(" Gasan Pian ")]),s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"far fa-newspaper text-primary mx-2"}),t._v(" Artikel & Berita ")]),s("li",{staticClass:"border-top py-2"},[s("i",{staticClass:"fas fa-key text-primary mx-2"}),t._v(" Ganti Password ")])])}],l={name:"Profile",data:function(){return{user:null}},created:function(){var t=this;this.axios.get(this.$store.state.url_api+"account",{headers:{Authorization:"Bearer "+localStorage.token}}).then((function(a){t.user=a.data}))},methods:{logout:function(){var t=this;this.axios.get(this.$store.state.url_api+"auth/logout",{headers:{Authorization:"Bearer "+localStorage.token}}).then((function(){localStorage.removeItem("token"),t.$store.dispatch("setIfLogin",!1),t.$store.commit("SAVE_CART",null),t.$router.push({name:"login"})}))}}},n=l,r=s("2877"),o=Object(r["a"])(n,e,i,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d23813e.254f172d.js.map