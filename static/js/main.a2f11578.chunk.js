(this["webpackJsonpvacuous-fruit.000webhostapp.com"]=this["webpackJsonpvacuous-fruit.000webhostapp.com"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),s=c(16),r=c.n(s),i=(c(21),c(8)),o=(c(22),c(23),c(2)),d=(c(25),function(e){var t=e.value,c=e.styleType;return Object(o.jsx)("div",{id:"progress-content",children:Object(o.jsx)("div",{className:"progress-value ".concat(c),style:{width:"".concat(t,"%")}})})}),u=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(i.a)(s,2),u=r[0],l=(r[1],Object(a.useState)(!!localStorage.getItem("isDarkTheme"))),j=Object(i.a)(l,2),b=j[0],f=j[1];Object(a.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[]),Object(a.useEffect)((function(){h()}));var m=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.body.scrollHeight-document.documentElement.clientHeight;n(e/t*100)},O=function(){localStorage.setItem("isDarkTheme",b)},h=function(){var e=document.body.classList,t=document.documentElement.classList;localStorage.isDarkTheme||O(),"true"===localStorage.getItem("isDarkTheme")?(e.add("dark-theme"),t.add("dark-theme"),f(!1)):"false"===localStorage.getItem("isDarkTheme")&&(e.remove("dark-theme"),t.remove("dark-theme"),f(!0))};return Object(o.jsxs)("header",{id:"header",className:"".concat(u?"is-active":""),children:[Object(o.jsx)(d,{value:c,styleType:"_header"}),Object(o.jsxs)("div",{className:"header-content",children:[Object(o.jsx)("div",{className:"header-title",children:"Pavel Drobny"}),Object(o.jsx)("div",{className:"header-nav-btn",children:Object(o.jsx)("ul",{children:Object(o.jsx)("li",{id:"theme-btn",onClick:function(){O(),h()},children:Object(o.jsx)("i",{className:"".concat(b?"fas fa-moon":"fas fa-sun"," ")})})})})]})]})},l=(c(26),c(11)),j=function(e){return Object(o.jsx)("div",{className:"carousel-btn",children:e.navButtons.map((function(t,c){return Object(o.jsx)("button",{onClick:function(){return e.changeSlide(t.isLeft)},id:t.id,children:Object(o.jsx)("i",{className:t.class})},c)}))})},b=function(e){var t=e.card,c=n.a.useState(0),a=Object(i.a)(c,2),s=a[0],r=a[1];n.a.useEffect((function(){d()}),[]);var d=function(){var e=(new Date).getTime()-t.publishData,c=Math.floor(e/864e5);r(c)};return s>=0&&s<=7?Object(o.jsx)("div",{className:"card-new",children:"NEW"}):""},f=function(e){return Object(o.jsx)("div",{id:"carousel-image-content",children:e.carousels.map((function(t,c){return Object(o.jsxs)("div",{className:c===e.current?"carousel-image is-active":"carousel-image",style:{backgroundImage:"url(".concat(t.img,")"),right:"".concat(100*e.current,"%")},children:[Object(o.jsx)(b,{card:t}),Object(o.jsx)("div",{className:c===e.current?"project-info is-active":"project-info",children:Object(o.jsxs)("div",{className:"project-name",children:[Object(o.jsx)("i",{children:Object(o.jsx)("b",{children:t.name})}),t.using]})})]},c)}))})},m=(c(30),function(){return Object(o.jsxs)("div",{className:"carousel-content LoadCarouselMain",children:[Object(o.jsx)("div",{id:"carousel-title",className:"LoadCarouselText"}),Object(o.jsx)("div",{className:"carousel",children:Object(o.jsx)("div",{id:"carousel-image-content",className:"LoadCarousel"})})]})}),O=function(e){return Object(o.jsx)("div",{id:"carousel-dots-content",children:e.carousels.map((function(t,c){return Object(o.jsx)("div",{className:c===e.current?"carousel-dots is-active":"carousel-dots",onClick:function(){return e.setCurrent(c)}},c)}))})},h=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([{id:"silder-btn-left",class:"fas fa-chevron-left",isLeft:!0},{id:"silder-btn-right",class:"fas fa-chevron-right",isLeft:!1}]),r=Object(i.a)(s,2),u=r[0],b=(r[1],Object(a.useState)([])),h=Object(i.a)(b,2),v=h[0],p=h[1],x=Object(a.useState)(!0),g=Object(i.a)(x,2),N=g[0],y=g[1],S=Object(a.useState)(1),k=Object(i.a)(S,2),E=k[0],T=k[1],w=Object(a.useState)(!0),D=Object(i.a)(w,2),I=D[0],C=D[1],L=l.a.firestore(),B=5e3;Object(a.useEffect)((function(){var e=[];L.collection("Projects").orderBy("update","desc").get().then((function(t){t.forEach((function(t){e.push(t.data())})),p(e.slice(0,3)),C(!1)}))}),[]),Object(a.useEffect)((function(){var e=(c+1)%v.length,t=setTimeout((function(){return n(e)}),B);return T(0),function(){return clearTimeout(t)}}),[c,v.length]),Object(a.useEffect)((function(){var e=setTimeout((function(){return T(E+1)}),45);return function(){return clearTimeout(e)}}),[E]);return Object(o.jsx)("div",{className:"carousel-content",children:Object(o.jsx)("div",{className:"carousel",children:I?Object(o.jsx)(m,{}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{id:"carousel-title",children:"Lates updates"}),Object(o.jsx)("div",{id:"progress-wrapper",children:Object(o.jsx)(d,{value:E,styleType:"_carousel"})}),Object(o.jsx)(f,{carousels:v,current:c}),Object(o.jsx)(j,{navButtons:u,changeSlide:function(e){N&&(y(!1),setTimeout((function(){return y(!0)}),500),n(e?0===c?v.length-1:c-1:c===v.length-1?0:c+1))}}),Object(o.jsx)(O,{carousels:v,current:c,setCurrent:n})]})})})},v=function(e){var t=e.cardInfo;return Object(o.jsx)(o.Fragment,{children:t.map((function(e,t){return Object(o.jsx)("div",{className:"card-info",children:Object(o.jsxs)("div",{className:"card-text",children:[e.name,": ",e.property]})},t)}))})},p=function(e){var t=e.card,c=e.name,a=e.className,n=e.FA_icon;return Object(o.jsxs)("a",{target:"_blank",rel:"noreferrer",className:a,href:t,children:[Object(o.jsx)("div",{className:"card-btn-text",children:c}),Object(o.jsx)("i",{className:"fas fa-".concat(n)})]})},x=function(e){var t=e.card;return Object(o.jsx)("div",{className:"card-title",children:Object(o.jsx)("i",{children:t.name})})},g=function(e){var t=e.card,c=n.a.useState([{name:"Using",property:t.using},{name:"Language",property:t.language},{name:"Update",property:t.update}]),a=Object(i.a)(c,2),s=a[0];a[1];return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)(b,{card:t}),Object(o.jsx)("div",{className:"card-img-content",children:Object(o.jsx)("div",{className:"card-img",style:{backgroundImage:"url(".concat(t.img,")")}})}),Object(o.jsxs)("div",{className:"card-view-content",children:[Object(o.jsx)(x,{card:t}),Object(o.jsx)(v,{cardInfo:s}),Object(o.jsxs)("div",{className:"card-view",children:[Object(o.jsx)(p,{card:t.urlDemo,name:"DEMO",FA_icon:"play",className:"card-btn btn-demo ".concat(t.isDemo?"is-active":"")}),Object(o.jsx)(p,{card:t.urlCode,name:"SOURCE CODE",FA_icon:"code",className:"card-btn btn-code"})]})]})]})},N=(c(31),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"})]})}),y=(c(32),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(i.a)(s,2),d=r[0],u=r[1],j=l.a.firestore();Object(a.useEffect)((function(){var e=[];j.collection("Projects").orderBy("id","desc").get().then((function(t){t.forEach((function(t){e.push(t.data()),b(t.data().repoName,t.id)})),n(e),u(!1)}))}),[]);var b=function(e,t){var c="",a="https://api.github.com/repos/paveldrobny/".concat(e);fetch(a).then((function(e){return e.json()})).then((function(e){c=e.updated_at.slice(0,10),j.collection("Projects").doc(t).update({update:c})}))};return Object(o.jsx)("div",{className:"projects",children:d?Object(o.jsx)(N,{}):c.map((function(e,t){return Object(o.jsx)(g,{card:e},t)}))})}),S=(c(33),function(){var e=Object(a.useState)("0000/00/00"),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([{href:"https://vk.com/pdrobny",class:"fab fa-vk"},{href:"https://github.com/paveldrobny",class:"fab fa-github"}]),r=Object(i.a)(s,2),d=r[0];r[1];return Object(a.useEffect)((function(){var e="";return fetch("https://api.github.com/repos/paveldrobny/paveldrobny.github.io/branches/gh-pages").then((function(e){return e.json()})).then((function(t){e=t.commit.commit.author.date.slice(0,10),n(e)})).catch((function(e){return e}))})),Object(o.jsx)("div",{id:"footer-wrapper",children:Object(o.jsxs)("footer",{children:[Object(o.jsxs)("div",{id:"footer-update-text",children:["Update: ",c]}),Object(o.jsx)("div",{children:d.map((function(e,t){return Object(o.jsx)("a",{id:"footer-link",href:e.href,children:Object(o.jsx)("i",{className:e.class})},t)}))})]})})}),k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsxs)("main",{id:"main-content",children:[Object(o.jsx)(h,{}),Object(o.jsx)(y,{}),Object(o.jsx)(S,{})]})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(34);l.a.initializeApp({apiKey:"AIzaSyA14cD51_IYnfmRyL_BxUrfp5q7mhbkyyc",authDomain:"personal-24c21.firebaseapp.com",projectId:"personal-24c21",storageBucket:"personal-24c21.appspot.com",messagingSenderId:"165295557630",appId:"1:165295557630:web:cd002ca44b29c4f7154eaf",measurementId:"G-B3WV4J8D5C"}),r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),E()}},[[35,1,2]]]);
//# sourceMappingURL=main.a2f11578.chunk.js.map