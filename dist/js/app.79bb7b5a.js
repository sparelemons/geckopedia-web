(function(t){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],p=0,u=[];p<n.length;p++)i=n[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/geckopedia-web/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1f45":function(t,e,a){t.exports=a.p+"img/download-button-white.0f3514a4.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d3b7");var s=a("2b0e"),r=a("8c4f"),o=a("3f08"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],l=a("f5af"),c=a.n(l),d=a("8f5e"),p={name:"App",mounted:function(){c.a.init({once:!0,disable:"phone",duration:750,easing:"ease-out-quart"}),Object(d["a"])(),this.$router&&this.$watch("$route",(function(){Object(d["a"])("outline")}))}},u=p,h=a("2877"),m=Object(h["a"])(u,i,n,!1,null,null,null),f=m.exports,v=(a("cb43"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col min-h-screen overflow-hidden"},[a("Header"),a("main",{staticClass:"flex-grow"},[a("div",{staticClass:"relative max-w-6xl mx-auto h-0 pointer-events-none -z-1",attrs:{"aria-hidden":"true"}},[a("PageIllustration")],1),a("HeroHome")],1),a("Footer")],1)}),y=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"absolute w-full z-30"},[s("div",{staticClass:"max-w-6xl mx-auto px-4 sm:px-6"},[s("div",{staticClass:"flex items-center justify-between h-20"},[s("div",{staticClass:"flex-shrink-0 mr-5"},[s("router-link",{staticClass:"block",attrs:{to:"/","aria-label":"Cruip"}},[s("img",{attrs:{src:a("5d1c"),width:"50",alt:"Geckopedia","aria-hidden":"true"}})])],1),s("nav",{staticClass:"flex flex-grow"},[s("ul",{staticClass:"flex flex-grow flex-wrap items-center font-medium"},[s("li",[s("router-link",{staticClass:"text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out",attrs:{to:"/faq"}},[t._v("FAQ")])],1)])])])])])},g=[],w={name:"Header",components:{},data:function(){return{mobileNavOpen:!1,darkMode:this.handleLights()}},methods:{clickOutside:function(t){!this.mobileNavOpen||this.$refs.mobileNav.contains(t.target)||this.$refs.hamburger.contains(t.target)||(this.mobileNavOpen=!1)},keyPress:function(){this.mobileNavOpen&&27===event.keyCode&&(this.mobileNavOpen=!1)},handleLights:function(){var t=localStorage.getItem("dark-mode");return null===t||"true"===t}},watch:{darkMode:function(){localStorage.setItem("dark-mode",this.darkMode),this.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}},mounted:function(){document.addEventListener("click",this.clickOutside),document.addEventListener("keydown",this.keyPress)},beforeDestroy:function(){document.removeEventListener("click",this.clickOutside),document.removeEventListener("keydown",this.keyPress)}},b=w,C=Object(h["a"])(b,x,g,!1,null,null,null),_=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"absolute top-0 right-0 transform translate-x-1/2 -mr-16 dark:opacity-40",attrs:{width:"800",height:"502",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"400",cy:"102",r:"400",fill:"url(#heroglow_paint0_radial)","fill-opacity":".6"}}),a("circle",{attrs:{cx:"209",cy:"289",r:"170",fill:"url(#heroglow_paint1_radial)","fill-opacity":".4"}}),a("defs",[a("radialGradient",{attrs:{id:"heroglow_paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(90 149 251) scale(315.089)"}},[a("stop",{attrs:{"stop-color":"#3ABAB4"}}),a("stop",{attrs:{offset:"1","stop-color":"#3ABAB4","stop-opacity":".01"}})],1),a("radialGradient",{attrs:{id:"heroglow_paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(90 -40 249) scale(133.913)"}},[a("stop",{attrs:{"stop-color":"#667EEA"}}),a("stop",{attrs:{offset:"1","stop-color":"#667EEA","stop-opacity":".01"}})],1)],1)])},S=[],P={name:"PageIllustration"},T=P,O=Object(h["a"])(T,k,S,!1,null,null,null),E=O.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"max-w-6xl mx-auto px-4 sm:px-6"},[s("div",{staticClass:"pt-32 pb-10 md:pt-40 md:pb-16"},[s("div",{staticClass:"md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center"},[s("div",{staticClass:"md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left"},[s("h1",{staticClass:"h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold",attrs:{"data-aos":"fade-down"}},[t._v(" Geckopedia ")]),s("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400",attrs:{"data-aos":"fade-down","data-aos-delay":"150"}},[t._v(" We like the Geckos. We like looking at Geckos. Take a trip through the geckoverse with Geckopedia! ")]),s("ul",{staticClass:"max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8",attrs:{"data-aos":"fade-down","data-aos-delay":"450"}},[s("li",{staticClass:"flex items-center mb-2"},[s("svg",{staticClass:"w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0",attrs:{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"}})]),s("span",[t._v("Browse by rank or ID")])]),s("li",{staticClass:"flex items-center mb-2"},[s("svg",{staticClass:"w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0",attrs:{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"}})]),s("span",[t._v("Search by ID or rank")])]),s("li",{staticClass:"flex items-center mb-2"},[s("svg",{staticClass:"w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0",attrs:{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"}})]),s("span",[t._v("Keep a list of favorite Geckos")])])]),s("p",{staticClass:"mt-8",attrs:{"data-aos":"fade-down"}},[s("a",{attrs:{href:"#",target:"_blank",onclick:"firebase.analytics().logEvent('app_store_download_button')"}},[s("img",{attrs:{src:a("1f45"),width:"200",alt:"Geckopedia","aria-hidden":"true"}})])])]),s("div",{staticClass:"md:col-span-5 lg:col-span-5 text-center md:text-right",attrs:{"data-aos":"fade-up","data-aos-delay":"450"}},[s("div",{staticClass:"inline-flex relative justify-center items-center"},[s("svg",{staticClass:"absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40",attrs:{"aria-hidden":"true",width:"678",height:"634",viewBox:"0 0 678 634",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"240",cy:"394",r:"240",fill:"url(#piphoneill_paint0_radial)","fill-opacity":".4"}}),s("circle",{attrs:{cx:"438",cy:"240",r:"240",fill:"url(#piphoneill_paint1_radial)","fill-opacity":".6"}}),s("defs",[s("radialGradient",{attrs:{id:"piphoneill_paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(90 -77 317) scale(189.054)"}},[s("stop",{attrs:{"stop-color":"#667EEA"}}),s("stop",{attrs:{offset:"1","stop-color":"#667EEA","stop-opacity":".01"}})],1),s("radialGradient",{attrs:{id:"piphoneill_paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(90 99 339) scale(189.054)"}},[s("stop",{attrs:{"stop-color":"#9F7AEA"}}),s("stop",{attrs:{offset:"1","stop-color":"#9F7AEA","stop-opacity":".01"}})],1)],1)]),s("img",{staticClass:"absolute",staticStyle:{"max-width":"84.33%"},attrs:{src:a("d006"),width:"290",height:"624",alt:"Trading Journal"}}),s("img",{staticClass:"relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none",attrs:{src:a("d7c2"),width:"344",height:"674",alt:"iPhone mockup","aria-hidden":"true"}})]),s("Modal",{attrs:{id:"modal",ariaLabel:"modal-headline",show:t.videoModalOpen},on:{handleClose:function(e){t.videoModalOpen=!1}}},[s("div",{staticClass:"relative pb-9/16"},[s("iframe",{staticClass:"absolute w-full h-full",attrs:{src:"https://www.youtube.com/embed/qz4F1uMzihY",title:"Video",allowFullScreen:""}})])])],1)])])])])},A=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fragment",[a("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-out duration-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity",attrs:{"aria-hidden":"true"}})]),a("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-out duration-200","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",attrs:{id:t.id,role:"dialog","aria-modal":"true","aria-labelledby":t.ariaLabel}},[a("div",{ref:"modalContent",staticClass:"bg-white overflow-auto max-w-6xl w-full max-h-full"},[t._t("default")],2)])])],1)},G=[],I={name:"Modal",props:{id:{type:String,default:null},ariaLabel:{type:String,default:null},show:{type:Boolean,default:!1,required:!0}},methods:{clickOutside:function(t){this.show&&!this.$refs.modalContent.contains(t.target)&&this.$emit("handleClose")},keyPress:function(){this.show&&27===event.keyCode&&this.$emit("handleClose")}},mounted:function(){document.addEventListener("click",this.clickOutside),document.addEventListener("keydown",this.keyPress)},beforeDestroy:function(){document.removeEventListener("click",this.clickOutside),document.removeEventListener("keydown",this.keyPress)}},j=I,H=Object(h["a"])(j,$,G,!1,null,null,null),F=H.exports,B={name:"HeroHome",components:{Modal:F},data:function(){return{videoModalOpen:!1}}},W=B,M=Object(h["a"])(W,L,A,!1,null,null,null),z=M.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"relative"},[a("div",{staticClass:"max-w-6xl mx-auto px-4 sm:px-6"},[a("div",{staticClass:"py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px"},[a("div",{staticClass:"pointer-events-none -z-1",attrs:{"aria-hidden":"true"}},[a("svg",{staticClass:"absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40",attrs:{width:"800",height:"264",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"400",cy:"400",r:"400",fill:"url(#footerglow_paint0_radial)","fill-opacity":".4"}}),a("defs",[a("radialGradient",{attrs:{id:"footerglow_paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(90 0 400) scale(315.089)"}},[a("stop",{attrs:{"stop-color":"#3ABAB4"}}),a("stop",{attrs:{offset:"1","stop-color":"#3ABAB4","stop-opacity":".01"}})],1)],1)])]),a("div",{staticClass:"md:flex md:items-center md:justify-between"},[a("ul",{staticClass:"flex mb-4 md:order-2 md:ml-16 md:mb-0"},[a("li",[a("a",{staticClass:"flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out",attrs:{target:"_blank",href:"https://twitter.com/chart_garden","aria-label":"Twitter"}},[a("svg",{staticClass:"w-8 h-8 fill-current",attrs:{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"}})])])])]),a("div",{staticClass:"text-sm md:order-1 text-gray-700 mb-2 md:mb-0"},[a("router-link",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{to:"/terms"}},[t._v("Terms")]),t._v(" · "),a("router-link",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{to:"/privacy"}},[t._v("Privacy Policy")]),t._v(" · "),a("a",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{href:t.composeAddy()}},[t._v("Contact")])],1),a("div",{staticClass:"text-gray-600 dark:text-gray-400 text-sm mr-4"},[t._v("© 2021. All rights reserved.")])])])])])},q=[],N={name:"Footer",methods:{composeTo:function(){return"ma".concat("il","to:")},composeLabel:function(){var t="in".concat(String.fromCharCode(102),String.fromCharCode(111)),e=String.fromCharCode(64),a="spa".concat(String.fromCharCode(114),"ele",String.fromCharCode(109),"ons",String.fromCharCode(46),"c",String.fromCharCode(111),"m");return"".concat(t,e,a)},composeAddy:function(){return this.composeTo()+this.composeLabel()}}},D=N,Q=Object(h["a"])(D,U,q,!1,null,null,null),Y=Q.exports,J={name:"Home",created:function(){document.title="Geckopedia"},components:{Header:_,PageIllustration:E,HeroHome:z,Footer:Y}},K=J,V=Object(h["a"])(K,v,y,!1,null,null,null),R=V.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col min-h-screen overflow-hidden"},[s("Header"),s("main",{staticClass:"flex-grow"},[s("div",{staticClass:"relative max-w-6xl mx-auto h-0 pointer-events-none -z-1",attrs:{"aria-hidden":"true"}},[s("PageIllustration")],1),s("section",{staticClass:"relative"},[s("div",{staticClass:"max-w-6xl mx-auto px-4 sm:px-6"},[s("div",{staticClass:"pt-32 pb-12 md:pt-40 md:pb-20"},[s("div",{staticClass:"max-w-3xl mx-auto text-center"},[s("div",{staticClass:"relative inline-flex justify-center items-center"},[s("img",{staticClass:"hidden sm:block opacity-50 md:opacity-80",attrs:{src:a("752c"),width:"768",height:"432",alt:"404"}}),s("div",{staticClass:"hidden sm:block absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900",attrs:{"aria-hidden":"true"}}),s("div",{staticClass:"sm:absolute w-full"},[s("h1",{staticClass:"h3 font-red-hat-display mb-8"},[t._v("Hm, the page you were looking for doesn't exist anymore.")]),s("router-link",{staticClass:"btn text-white bg-teal-500 hover:bg-teal-400 inline-flex items-center",attrs:{to:"/"}},[s("span",[t._v("Back to Appy")]),s("svg",{staticClass:"w-3 h-3 flex-shrink-0 mt-px ml-2",attrs:{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"fill-current",attrs:{d:"M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"}})])])],1)])])])])])]),s("Footer")],1)},Z=[],tt={name:"Features",components:{Header:_,PageIllustration:E,Footer:Y}},et=tt,at=Object(h["a"])(et,X,Z,!1,null,null,null),st=at.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col min-h-screen overflow-hidden"},[a("Header"),a("main",{staticClass:"flex-grow"},[a("div",{staticClass:"relative max-w-6xl mx-auto h-0 pointer-events-none -z-1",attrs:{"aria-hidden":"true"}},[a("PageIllustration")],1),a("HeroFAQ"),t._m(0)],1),a("Footer")],1)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"relative"},[a("div",{staticClass:"relative max-w-6xl mx-auto px-4 sm:px-6 pb-12"},[a("div",{staticClass:"pt-4 pb-2 md:pt-3 md:pb-2"},[a("div",{staticClass:"max-w-3xl",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("What is Geckopedia?")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400"},[t._v(" An app for gecko lovers everywhere. Geckopedia goes beyond the current rarity tool. It lets you browse geckos (by id or rank), search geckos, and keep a list of favorite geckos. What's not to like? ")])]),a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("What is GGSG?")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400"},[t._v(" Galactic Geckos Space Garage is an NFT Social Adventure Club featuring 10,000 warrior turned space racing geckos. Learn more at: ")]),a("ul",[a("li",[t._v("🦎 "),a("a",{attrs:{href:"https://galacticgeckos.app/"}},[t._v("https://galacticgeckos.app/")])]),a("li",[t._v("🦎 "),a("a",{attrs:{href:"https://twitter.com/galacticgeckosg"}},[t._v("https://twitter.com/galacticgeckosg")])])])]),a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Is this an official GGSG app?")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400"},[t._v(" This is not an official app! The GGSG team didn't commision this. Nobody paid me to build this. This app is built for the community, by the community. 🦎 ")])]),a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Why was this app built?")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400"},[t._v(" Because I like the geckos! 🦎 And I like the GGSG community! ")])]),a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Have other questions or comments?")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400"},[t._v(" Message me on "),a("a",{attrs:{href:"https://twitter.com/chart_garden"}},[t._v("Twitter")]),t._v("! ")])])])])])}],it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"relative"},[a("div",{staticClass:"relative max-w-6xl mx-auto px-4 sm:px-6"},[a("div",{staticClass:"pt-32 pb-12 md:pt-40 md:pb-4"},[a("div",{staticClass:"max-w-3xl",attrs:{"data-aos":"fade-down"}},[a("article",[a("header",[a("div",{staticClass:"text-center md:text-left"},[a("h1",{staticClass:"h1 font-red-hat-display mb-4"},[t._v("Frequently Asked Questions")])])])])])])])])}],lt={name:"HeroBlog"},ct=lt,dt=Object(h["a"])(ct,it,nt,!1,null,null,null),pt=dt.exports,ut={name:"FAQ",created:function(){document.title="FAQ"},components:{Header:_,PageIllustration:E,HeroFAQ:pt,Footer:Y}},ht=ut,mt=Object(h["a"])(ht,rt,ot,!1,null,null,null),ft=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col min-h-screen overflow-hidden"},[a("Header"),a("main",{staticClass:"flex-grow"},[a("div",{staticClass:"relative max-w-6xl mx-auto h-0 pointer-events-none -z-1",attrs:{"aria-hidden":"true"}},[a("PageIllustration")],1),a("HeroPrivacy"),a("section",{staticClass:"relative"},[a("div",{staticClass:"relative max-w-6xl mx-auto px-4 sm:px-6 pb-12"},[a("div",{staticClass:"pt-4 pb-2 md:pt-3 md:pb-2"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Contact Us")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at "),a("a",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{href:t.composeAddy(),target:"_blank"}},[t._v(t._s(t.composeLabel()))]),t._v(". ")])])])])])],1),a("Footer")],1)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl",attrs:{"data-aos":"fade-down"}},[a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" Spare Lemons built the Geckopedia app as a free app. This service is provided by Spare Lemons at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400"},[t._v(" The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Spare Lemons unless otherwise defined in this Privacy Policy. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Information Collection and Use")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" This app regularly collects information about how the app is being used via Flurry Analytics. This analytics service allows us to analyze how the app is used and how to improve it. Please see "),a("a",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{target:"_blank",href:"https://developer.yahoo.com/flurry/legal-privacy/terms-service/flurry-analytics-terms-service.html#:~:text=You%20will%20not%20(and%20will,source%20as%20part%20of%20your"}},[t._v("Flurry's TOS for information on their privacy policies")]),t._v(". ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" Other than Flurry, we also may collect en email address via the feedback form inside the app. This address may be used to respond to comments or questions about the app. The email address is deleted after a year or until it's no longer needed, whichever comes first. It is "),a("b",[t._v("not")]),t._v(" shared with any third party and is "),a("b",[t._v("not")]),t._v(" used for promotional emails. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Log Data")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" Whenever you use Geckopedia, the app creates and stores log data on your phone. This Log Data includes information about app usage (buttons being clicked, data being created, etc) and information related to errors, abnormal events, and other such data that may be useful during debugging. The log data "),a("b",[t._v("never")]),t._v(" contains personally identifiable information. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v("Log data is "),a("b",[t._v("not")]),t._v(" sent back to our servers. It's merely collected on the device and available for analysis by somebody with physical access to your device. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Security")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. Whenever possible, we use https to communicate between the app and servers on the internet. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Links to Other Sites")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" The Geckopedia website or app may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Children’s Privacy")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Changes to This Privacy Policy")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 2021-09-30. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Changes to This Privacy Policy")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 2021-09-30. ")])])}],xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"relative"},[a("div",{staticClass:"relative max-w-6xl mx-auto px-4 sm:px-6"},[a("div",{staticClass:"pt-32 pb-12 md:pt-40 md:pb-4"},[a("div",{staticClass:"max-w-3xl",attrs:{"data-aos":"fade-down"}},[a("article",[a("header",[a("div",{staticClass:"text-center md:text-left"},[a("h1",{staticClass:"h1 font-red-hat-display mb-4"},[t._v("Privacy Policy")])])])])])])])])}],wt={name:"HeroBlog"},bt=wt,Ct=Object(h["a"])(bt,xt,gt,!1,null,null,null),_t=Ct.exports,kt={name:"Privacy",created:function(){document.title="Privacy Policy"},components:{Header:_,PageIllustration:E,HeroPrivacy:_t,Footer:Y},methods:{composeTo:function(){return"ma".concat("il","to:")},composeLabel:function(){var t="pr".concat(String.fromCharCode(105),"va",String.fromCharCode(99),String.fromCharCode(121)),e=String.fromCharCode(64),a="spa".concat(String.fromCharCode(114),"ele",String.fromCharCode(109),"ons",String.fromCharCode(46),"c",String.fromCharCode(111),"m");return"".concat(t,e,a)},composeAddy:function(){return this.composeTo()+this.composeLabel()}}},St=kt,Pt=Object(h["a"])(St,vt,yt,!1,null,null,null),Tt=Pt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col min-h-screen overflow-hidden"},[a("Header"),a("main",{staticClass:"flex-grow"},[a("div",{staticClass:"relative max-w-6xl mx-auto h-0 pointer-events-none -z-1",attrs:{"aria-hidden":"true"}},[a("PageIllustration")],1),a("HeroTerms"),a("section",{staticClass:"relative"},[a("div",{staticClass:"relative max-w-6xl mx-auto px-4 sm:px-6 pb-12"},[a("div",{staticClass:"pt-4 pb-2 md:pt-3 md:pb-2"},[t._m(0),t._m(1),a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Contact Us")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at "),a("a",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{href:t.composeAddy(),target:"_blank"}},[t._v(t._s(t.composeLabel()))]),t._v(". ")])])])])])],1),a("Footer")],1)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl",attrs:{"data-aos":"fade-down"}},[a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Spare Lemons. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" Spare Lemons is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" The app does use third party services that declare their own Terms and Conditions. See "),a("a",{staticClass:"text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out",attrs:{target:"_blank",href:"https://marketingplatform.google.com/about/analytics/terms/us/"}},[t._v("Google Analytic's TOS")]),t._v(". ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" You should be aware that there are certain things that Spare Lemons will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Spare Lemons cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" Along the same lines, Spare Lemons cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Spare Lemons cannot accept responsibility. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" With respect to Spare Lemons’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Spare Lemons accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app. ")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" At some point, we may wish to update the app. The app is currently available on iOS – and you’ll need to download the updates if you want to keep using the app. Spare Lemons does not promise that it will always update the app so that it is relevant to you and/or works with the iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you. We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-3xl pt-8 md:pt-6",attrs:{"data-aos":"fade-down"}},[a("h4",{staticClass:"h4"},[t._v("Changes to This Terms and Conditions")]),a("p",{staticClass:"text-xl text-gray-600 dark:text-gray-400 pb-4"},[t._v(" We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These terms and conditions are effective as of "),a("b",[t._v("2021-09-30")]),t._v(". ")])])}],Lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"relative"},[a("div",{staticClass:"relative max-w-6xl mx-auto px-4 sm:px-6"},[a("div",{staticClass:"pt-32 pb-12 md:pt-40 md:pb-4"},[a("div",{staticClass:"max-w-3xl",attrs:{"data-aos":"fade-down"}},[a("article",[a("header",[a("div",{staticClass:"text-center md:text-left"},[a("h1",{staticClass:"h1 font-red-hat-display mb-4"},[t._v("Terms and Conditions")])])])])])])])])}],$t={name:"HeroTerms"},Gt=$t,It=Object(h["a"])(Gt,Lt,At,!1,null,null,null),jt=It.exports,Ht={name:"Terms",created:function(){document.title="Terms"},components:{Header:_,PageIllustration:E,HeroTerms:jt,Footer:Y},methods:{composeTo:function(){return"ma".concat("il","to:")},composeLabel:function(){var t="pr".concat(String.fromCharCode(105),"va",String.fromCharCode(99),String.fromCharCode(121)),e=String.fromCharCode(64),a="spa".concat(String.fromCharCode(114),"ele",String.fromCharCode(109),"ons",String.fromCharCode(46),"c",String.fromCharCode(111),"m");return"".concat(t,e,a)},composeAddy:function(){return this.composeTo()+this.composeLabel()}}},Ft=Ht,Bt=Object(h["a"])(Ft,Ot,Et,!1,null,null,null),Wt=Bt.exports;s["a"].use(o["a"].Plugin),s["a"].use(r["a"]);var Mt=[{path:"/",component:R},{path:"/faq",component:ft},{path:"/privacy",component:Tt},{path:"/terms",component:Wt},{path:"*",component:st}],zt=new r["a"]({routes:Mt,mode:"history",scrollBehavior:function(t){return new Promise((function(){t.hash?window.scroll({top:0}):(document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior="")}))}});s["a"].config.productionTip=!1,new s["a"]({router:zt,render:function(t){return t(f)}}).$mount("#app")},"5d1c":function(t,e,a){t.exports=a.p+"img/geckopedia-logo.749f1acb.png"},"752c":function(t,e,a){t.exports=a.p+"img/404.61ce8887.jpg"},cb43:function(t,e,a){},d006:function(t,e,a){t.exports=a.p+"img/gecko-screen.55b706d9.jpg"},d7c2:function(t,e,a){t.exports=a.p+"img/iphone-mockup.454c7cd2.png"}});
//# sourceMappingURL=app.79bb7b5a.js.map
