(this["webpackJsonppaveldrobny.github.io"]=this["webpackJsonppaveldrobny.github.io"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(4),i=c.n(s),a=c(16),r=c.n(a),d=(c(22),c(8)),o=(c(23),c(24),function(e){var t=e.isActive;return Object(n.jsxs)("div",{id:"themeMessage",className:t?"active":"",children:[Object(n.jsx)("div",{id:"msgTextMain",children:"DARK THEME"}),Object(n.jsxs)("div",{id:"msgText",children:["Click on the ",Object(n.jsx)("i",{className:"fas fa-moon"})," to switch."]})]})}),l=(c(25),function(e){var t=e.value,c=e.styleType;return Object(n.jsx)("div",{id:"progressCont",children:Object(n.jsx)("div",{id:"progressValue",className:c,style:{width:"".concat(t,"%")}})})}),j=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!!localStorage.getItem("isDarkTheme")),r=Object(d.a)(a,2),j=r[0],u=r[1],b=Object(s.useState)(!localStorage.getItem("isMessageTheme")),h=Object(d.a)(b,2),m=h[0],f=h[1],O="";Object(s.useEffect)((function(){window.addEventListener("scroll",v),g()})),window.scrollY>=15&&(O+="active");var v=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.body.scrollHeight-document.documentElement.clientHeight;i(e/t*100)},x=function(){localStorage.setItem("isDarkTheme",j),localStorage.setItem("isMessageTheme",m)},g=function(){var e=document.body.classList,t=document.documentElement.classList;localStorage.isDarkTheme||x(),"true"===localStorage.getItem("isDarkTheme")?(e.add("darkTheme"),t.add("darkTheme"),u(!1)):"false"===localStorage.getItem("isDarkTheme")&&(e.remove("darkTheme"),t.remove("darkTheme"),u(!0)),"false"===localStorage.getItem("isMessageTheme")&&f(!1)};return Object(n.jsxs)("div",{id:"header",className:O,children:[Object(n.jsx)(l,{value:c,styleType:"headerV"}),Object(n.jsxs)("div",{className:"header-cont",children:[Object(n.jsx)("div",{className:"header-title",children:"Pavel Drobny"}),Object(n.jsx)("div",{className:"header-navBtn",children:Object(n.jsx)("ul",{children:Object(n.jsx)("li",{id:"themeBtn",onClick:function(){x(),f(!1),g()},children:Object(n.jsx)("i",{className:"fas fa-moon"})})})})]}),Object(n.jsx)(o,{isActive:m})]})},u=(c(26),c(11)),b=function(e){var t=e.id,c=e.icon,s=e.onClick;return Object(n.jsx)("button",{onClick:s,id:t,children:Object(n.jsx)("i",{className:c})})},h=function(e){var t=e.slider,c=e.index,s=e.currentT;return Object(n.jsx)("div",{className:c===s?"slider-image active":"slider-image",style:{backgroundImage:"url(".concat(t.img,")"),right:"".concat(100*s,"%")},children:Object(n.jsx)("div",{className:"projectInfo",children:Object(n.jsxs)("div",{className:"projectName",children:[Object(n.jsx)("i",{children:Object(n.jsx)("b",{children:t.name})}),t.using]})})})},m=(c(30),function(){return Object(n.jsxs)("div",{className:"lds-ellipsis",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})}),f=function(e){var t=e.index,c=e.currentT,s=e.onClick;return Object(n.jsx)("div",{className:t===c?"slider-dots active":"slider-dots",onClick:s})},O=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([{idT:"silder-btn-left",class:"fas fa-chevron-left",isLeft:!0},{idT:"silder-btn-right",class:"fas fa-chevron-right",isLeft:!1}]),r=Object(d.a)(a,2),o=r[0],j=(r[1],Object(s.useState)([])),O=Object(d.a)(j,2),v=O[0],x=O[1],g=Object(s.useState)(!0),p=Object(d.a)(g,2),T=p[0],N=p[1],y=Object(s.useState)(1),k=Object(d.a)(y,2),S=k[0],C=k[1],E=Object(s.useState)(!0),I=Object(d.a)(E,2),D=I[0],_=I[1],L=u.a.firestore(),w=5e3;Object(s.useEffect)((function(){var e=[];L.collection("Projects").orderBy("id","desc").get().then((function(t){var c=t.size;t.forEach((function(t){var n=t.data().id;n>=c-1&&n<=c&&e.push(t.data())})),x(e),_(!1)}))}),[]),Object(s.useEffect)((function(){var e=(c+1)%v.length,t=setTimeout((function(){return i(e)}),w);return C(0),function(){return clearTimeout(t)}}),[c,v.length]),Object(s.useEffect)((function(){var e=setTimeout((function(){return C(S+1)}),45);return function(){return clearTimeout(e)}}),[S]);var B=function(e){T&&(N(!1),setTimeout((function(){return N(!0)}),500),i(e?0===c?v.length-1:c-1:c===v.length-1?0:c+1))};return Object(n.jsx)("div",{className:"slider-content",children:Object(n.jsx)("div",{className:"slider",children:D?Object(n.jsx)(m,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"slider-btn",children:o.map((function(e,t){return Object(n.jsx)(b,{id:e.idT,onClick:function(){return B(e.isLeft)},icon:e.class},t)}))}),Object(n.jsx)("div",{id:"slider-title",children:"Lates updates"}),Object(n.jsx)("div",{id:"progressWrapper",children:Object(n.jsx)(l,{value:S,styleType:"sliderV"})}),Object(n.jsx)("div",{id:"slider-imageCont",children:v.map((function(e,t){return Object(n.jsx)(h,{index:t,slider:e,currentT:c},t)}))}),Object(n.jsx)("div",{id:"slider-dotsCont",children:v.map((function(e,t){return Object(n.jsx)(f,{index:t,currentT:c,onClick:function(){return i(t)}},t)}))})]})})})},v=function(e){var t=e.card;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card_img_Cont",children:Object(n.jsx)("div",{className:"card-img",style:{backgroundImage:"url(".concat(t.img,")")}})}),Object(n.jsxs)("div",{className:"card_view_content",children:[Object(n.jsx)("div",{className:"card_title",children:Object(n.jsx)("i",{children:t.name})}),Object(n.jsx)("div",{className:"card_info",children:Object(n.jsxs)("b",{children:["Using: ",t.using," "]})}),Object(n.jsx)("div",{className:"card_info",children:Object(n.jsxs)("b",{children:["Language: ",t.language]})}),Object(n.jsx)("div",{className:"card_info",children:Object(n.jsxs)("b",{children:["Update: ",t.update]})}),Object(n.jsxs)("div",{className:"card_view",children:[Object(n.jsx)("a",{target:"_blank",className:"btn_Demo ".concat(t.isDemo?"activeDemo":""),href:t.urlDemo,children:"DEMO"}),Object(n.jsx)("a",{target:"_blank",className:"btn_Code",href:t.urlCode,children:"SOURCE CODE"})]})]})]})},x=(c(31),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!0),r=Object(d.a)(a,2),o=r[0],l=r[1],j=u.a.firestore();Object(s.useEffect)((function(){var e=[];j.collection("Projects").orderBy("id","desc").get().then((function(t){t.forEach((function(t){e.push(t.data()),b(t.data().repoName,t.id)})),i(e),l(!1)}))}),[]);var b=function(e,t){var c="",n="https://api.github.com/repos/paveldrobny/".concat(e);fetch(n).then((function(e){return e.json()})).then((function(e){c=e.updated_at.slice(0,10),j.collection("Projects").doc(t).update({update:c})}))};return Object(n.jsx)("div",{className:"projects",children:Object(n.jsx)("section",{children:o?Object(n.jsx)("div",{id:"cardsLoading",children:"Loading projects..."}):c.map((function(e,t){return Object(n.jsx)(v,{card:e},t)}))})})}),g=(c(32),function(){var e=Object(s.useState)("0000/00/00"),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([{href:"https://vk.com/pdrobny",class:"fab fa-vk"},{href:"https://github.com/paveldrobny",class:"fab fa-github"}]),r=Object(d.a)(a,2),o=r[0];r[1];return Object(s.useEffect)((function(){var e="";return fetch("https://api.github.com/repos/paveldrobny/paveldrobny.github.io/branches/gh-pages").then((function(e){return e.json()})).then((function(t){e=t.commit.commit.author.date.slice(0,10),i(e)})).catch((function(e){return e}))})),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("div",{id:"updateSite",children:["Update: ",c]}),Object(n.jsx)("div",{id:"footer_Cont",children:o.map((function(e,t){return Object(n.jsx)("a",{href:e.href,children:Object(n.jsx)("i",{className:e.class})},t)}))})]})}),p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)(O,{}),Object(n.jsx)(x,{}),Object(n.jsx)(g,{})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};c(33);u.a.initializeApp({apiKey:"AIzaSyA14cD51_IYnfmRyL_BxUrfp5q7mhbkyyc",authDomain:"personal-24c21.firebaseapp.com",projectId:"personal-24c21",storageBucket:"personal-24c21.appspot.com",messagingSenderId:"165295557630",appId:"1:165295557630:web:cd002ca44b29c4f7154eaf",measurementId:"G-B3WV4J8D5C"}),r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),T()}},[[34,1,2]]]);
//# sourceMappingURL=main.d8e53124.chunk.js.map