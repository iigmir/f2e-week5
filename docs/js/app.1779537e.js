(function(t){function e(e){for(var a,r,n=e[0],c=e[1],h=e[2],d=0,p=[];d<n.length;d++)r=n[d],o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,n=1;n<i.length;n++){var c=i[n];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},o={1:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/f2e-week5/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var h=0;h<n.length;h++)e(n[h]);var u=c;s.push([4,0]),i()})({4:function(t,e,i){t.exports=i("zUnb")},"d/iM":function(t,e,i){"use strict";var a=i("nsIC"),o=i.n(a);o.a},eP4t:function(t,e,i){"use strict";var a=i("k8Fn"),o=i.n(a);o.a},ec75:function(t,e,i){},k8Fn:function(t,e,i){},nNx0:function(t,e,i){"use strict";var a=i("uWEC"),o=i.n(a);o.a},nsIC:function(t,e,i){},ozOm:function(t,e,i){"use strict";var a=i("ec75"),o=i.n(a);o.a},uWEC:function(t,e,i){},zUnb:function(t,e,i){"use strict";i.r(e);i("VRzm");var a=i("Kw5r"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{dark:t.$store.state.dark_mode},attrs:{id:"app"}},[i("nav",[i("router-link",{attrs:{tag:"h1",to:"/"}},[t._v("Comicomic")])],1),i("router-view")],1)},s=[],r=(i("nNx0"),i("KHd+")),n={},c=Object(r["a"])(n,o,s,!1,null,null,null),h=c.exports,u=i("jE9Z"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mainpage")],1)},p=[],l=i("xmWZ"),_=i("3Aqn"),g=i("0yhX"),m=i("EdlT"),f=i("mrSG"),v=i("YKMj"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("adv",{attrs:{api:t.adve.header}}),i("div",{attrs:{id:"main-container"}},[i("aside",[i("img",{attrs:{src:t.info.cover,alt:"Cover"}})]),i("article",[i("hgroup",[i("h2",[t._v(" "+t._s(t.info.title)+" ")])]),i("section",[i("h3",{attrs:{hidden:""}},[t._v(" Info of comic ")]),i("dl",[i("dt",[t._v(" Genres ")]),i("dd",t._l(t.info.genres,function(e,a){return i("span",{key:a,staticClass:"genre"},[t._v("\n                            "+t._s(e)+" "),i("span",[t._v("/")])])})),i("dt",[t._v(" Author ")]),i("dd",[t._v(" "+t._s(t.info.author)+" ")]),i("dt",[t._v(" Status ")]),i("dd",[t._v(" "+t._s(t.info.status)+" ")]),i("dt",[t._v(" Rate ")]),i("dd",[t._v(" "+t._s(t.info.rate)+" ")])])]),i("section",{staticClass:"summary"},[i("h3",[t._v(" Summary ")]),i("p",[t._v(" "+t._s(t.info.summary)+" ")])]),i("div",{attrs:{hidden:""}},[i("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])]),i("adv",{attrs:{api:t.adve.center}}),i("article",{attrs:{id:"chapters"}},[i("h2",[t._v(" All Chapters ")]),i("section",t._l(t.chap,function(e){return i("router-link",{key:e.id,attrs:{tag:"p",to:{name:"comic",params:{comicid:t.info.id,chapid:e.id}}}},[t._v("\n                "+t._s(e.title)+"\n                "),e.latest?i("span",[t._v("NEW")]):t._e()])}))]),i("adv",{attrs:{api:t.adve.footer}})],1)},w=[],E=i("yT7P"),k=i("L2JU"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.api?i("div",{staticClass:"adv"},[i("a",{attrs:{href:t.api.url,target:"_blank"}},[i("img",{attrs:{src:t.api.img,alt:"Advertisment"}})])]):t._e()},x=[],O=function(t){function e(){return Object(l["a"])(this,e),Object(g["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(_["a"])(e,t),e}(v["c"]);f["a"]([Object(v["b"])(),f["b"]("design:type",Object)],O.prototype,"api",void 0),O=f["a"]([v["a"]],O);var T=O,j=T,F=(i("ozOm"),Object(r["a"])(j,y,x,!1,null,"79a585e9",null)),H=F.exports,D=v["c"].extend({data:function(){return{}},mounted:function(){this.get_data({id:1}),this.get_adve(),this.get_chap({id:this.info.id})},methods:Object(E["a"])({},Object(k["b"])(["get_data","get_adve","get_chap"])),computed:Object(E["a"])({},Object(k["c"])({info:function(t){return t.comic_info},adve:function(t){return t.adver_info},chap:function(t){return t.chapt_info}})),components:{adv:H}}),C=D,$=(i("d/iM"),Object(r["a"])(C,b,w,!1,null,null,null)),S=$.exports,P=function(t){function e(){return Object(l["a"])(this,e),Object(g["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(_["a"])(e,t),e}(v["c"]);P=f["a"]([Object(v["a"])({components:{Mainpage:S}})],P);var A=P,M=A,I=Object(r["a"])(M,d,p,!1,null,null,null),N=I.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],G={},J=Object(r["a"])(G,z,W,!1,null,null,null),K=J.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{attrs:{id:"comic"}},[i("div",{staticClass:"panel"},[i("div",{staticClass:"left"},[i("h2",[t._v(" "+t._s(t.info.title)+" ")]),i("i",{staticClass:"fas fa-caret-right"}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.current_chapter,expression:"current_chapter"}],attrs:{id:"current-chapter"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.current_chapter=e.target.multiple?i:i[0]},t.switch_chap]}},t._l(t.chap,function(e,a){return i("option",{key:a,domProps:{value:e.id}},[t._v("\n                    Chapter "+t._s(e.id)+"\n                ")])})),i("select",{directives:[{name:"model",rawName:"v-model",value:t.current_page_index,expression:"current_page_index"}],attrs:{id:"current-page"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.current_page_index=e.target.multiple?i:i[0]}}},t._l(t.page,function(e,a){return i("option",{key:a,domProps:{value:a}},[t._v("\n                    Page "+t._s(a+1)+"\n                ")])}))]),i("div",{staticClass:"right"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.dark_mode,expression:"dark_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.dark_mode)?t._i(t.dark_mode,null)>-1:t.dark_mode},on:{change:function(e){var i=t.dark_mode,a=e.target,o=!!a.checked;if(Array.isArray(i)){var s=null,r=t._i(i,s);a.checked?r<0&&(t.dark_mode=i.concat([s])):r>-1&&(t.dark_mode=i.slice(0,r).concat(i.slice(r+1)))}else t.dark_mode=o}}}),i("i",{staticClass:"fas fa-sun"}),t._m(0),i("i",{staticClass:"fas fa-moon"})])])]),i("article",[i("h2",{attrs:{hidden:""}},[t._v(" Content of "+t._s(t.info.title)+" ")]),i("img",{attrs:{src:t.page[t.current_page_index],alt:t.info.title}}),i("div",{staticClass:"goto prev fa-3x",on:{click:function(e){t.switch_page(-1)}}},[i("i",{staticClass:"fas fa-chevron-left"})]),i("div",{staticClass:"goto next fa-3x",on:{click:function(e){t.switch_page(1)}}},[i("i",{staticClass:"fas fa-chevron-right"})])])])},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"switch"},[i("span",{staticClass:"btn"})])}],U=(i("rGqo"),i("yt8O"),i("RW0V"),v["c"].extend({data:function(){return{dark_mode:!1,fisrt_enter:!0,current_chapter:0,current_page_index:0}},watch:{dark_mode:function(t){this.switch_dark({dark_mode:t})}},mounted:function(){Object.keys(this.info).length<1&&this.info.constructor===Object&&this.get_data({id:this.$route.params.comicid}),this.chap.length<1&&this.get_chap({id:this.$route.params.chapid}),Object.keys(this.adve).length<1&&this.adve.constructor===Object&&this.get_adve(),this.get_comic({comicid:this.$route.params.comicid,chapterid:this.$route.params.chapid}),this.current_chapter=parseInt(this.$route.params.chapid,10)},methods:Object(E["a"])({},Object(k["b"])(["get_data","get_adve","get_chap","get_comic","switch_dark"]),{switch_chap:function(){var t={name:"comic",params:{comicid:this.$route.params.comicid,chapid:this.current_chapter}};this.$router.push(t),this.get_comic({comicid:this.$route.params.comicid,chapterid:this.$route.params.chapid}),this.current_page_index=0},switch_page:function(t){var e=0,i=this.current_page_index+t;e=i<=0?0:i>=this.page.length-1?this.page.length-1:i,this.current_page_index=e}}),computed:Object(E["a"])({},Object(k["c"])({info:function(t){return t.comic_info},adve:function(t){return t.adver_info},chap:function(t){return t.chapt_info},page:function(t){return t.comic_page},dark:function(t){return t.dark_mode}}))})),q=U,V=(i("eP4t"),Object(r["a"])(q,L,R,!1,null,null,null)),X=V.exports;a["default"].use(u["a"]);var Y=new u["a"]({routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:K},{path:"/comic/:comicid/:chapid",name:"comic",component:X}]}),Z=function(t){return{title:"MY HEXSCHOOL",genres:["a","b","c"],author:"Namae Shiranai",status:"Ongoing",rate:4,summary:"If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. ",pages:12,cover:"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/comic%20cover.png",id:1}},B={header:{img:"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-1.png",url:"https://hexschool.github.io/THE_F2E_Design/week5-comic viewer"},center:{img:"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-2.png",url:"https://github.com/hexschool/TheF2E"},footer:{img:"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-3.png",url:"https://www.facebook.com/groups/173311386703334"}},Q=function(t){var e=[{id:1,latest:!1,title:"Chapter 1: The F2E Challenge Start!"},{id:2,latest:!0,title:"Chapter 2: Todo List is Going Crazy!"}],i=[{id:1,latest:!1,title:"退屈"},{id:2,latest:!1,title:"エル"}],a={1:e,2:i},o=String(t);return a[o]},tt={1:{1:["https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"],2:["https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"]},2:{1:["https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"],2:["https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"]}},et=tt;a["default"].use(k["a"]);var it=new k["a"].Store({state:{comic_info:{},adver_info:{},chapt_info:[],comic_page:[],dark_mode:!1},mutations:{deal_data:function(t,e){t.comic_info=e.data},deal_adve:function(t,e){t.adver_info=e.data},deal_chap:function(t,e){t.chapt_info=e.data},read_comic:function(t,e){t.comic_page=e.data},clear_comic:function(t){t.comic_page=[]},switch_dark:function(t,e){t.dark_mode=e.data}},actions:{get_data:function(t,e){var i=Z(e.id);t.commit("deal_data",{data:i})},get_adve:function(t){t.commit("deal_adve",{data:B})},get_chap:function(t,e){var i=Q(e.id);t.commit("deal_chap",{data:i})},get_comic:function(t,e){t.commit("read_comic",{data:et[e.comicid][e.chapterid]})},switch_dark:function(t,e){t.commit("switch_dark",{data:e.dark_mode})}}});a["default"].config.productionTip=!1,new a["default"]({router:Y,store:it,render:function(t){return t(h)}}).$mount("#app")}});