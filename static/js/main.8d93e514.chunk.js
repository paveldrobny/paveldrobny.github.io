(this["webpackJsonppaveldrobny.github.io"]=this["webpackJsonppaveldrobny.github.io"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(4),i=c.n(s),a=c(16),r=c.n(a),d=(c(22),c(9));c(23);var o=function(e){var t=e.isActive;return Object(n.jsxs)("div",{id:"themeMessage",className:t?"active":"",children:[Object(n.jsx)("div",{id:"msgTextMain",children:"NEW THEME!"}),Object(n.jsx)("div",{id:"msgText",children:"Dark theme available."}),Object(n.jsxs)("div",{id:"msgText",children:["Click on the ",Object(n.jsx)("i",{className:"fas fa-moon"})," to switch theme."]})]})};c(24);var l=function(e){var t=e.value;return Object(n.jsx)("div",{id:"progressCont",children:Object(n.jsx)("div",{id:"progressValue",style:{width:"".concat(t,"%")}})})};c(25);var j=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!!localStorage.getItem("isDarkTheme")),r=Object(d.a)(a,2),j=r[0],u=r[1],b=Object(s.useState)(!localStorage.getItem("isMessageTheme")),h=Object(d.a)(b,2),m=h[0],f=h[1],O="";function v(){localStorage.setItem("isDarkTheme",j),localStorage.setItem("isMessageTheme",m)}function x(){var e=document.body.classList,t=document.documentElement.classList;localStorage.isDarkTheme||v(),"true"===localStorage.getItem("isDarkTheme")?(e.add("darkTheme"),t.add("darkTheme"),u(!1)):"false"===localStorage.getItem("isDarkTheme")&&(e.remove("darkTheme"),t.remove("darkTheme"),u(!0)),"false"===localStorage.getItem("isMessageTheme")&&f(!1)}return Object(s.useEffect)((function(){x()})),window.addEventListener("scroll",(function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.body.scrollHeight-document.documentElement.clientHeight;i(e/t*100)})),window.scrollY>=15&&(O+="active"),Object(n.jsxs)("div",{id:"header",className:O,children:[Object(n.jsx)(l,{value:c}),Object(n.jsxs)("div",{className:"header-cont",children:[Object(n.jsx)("div",{className:"header-title",children:"Pavel Drobny"}),Object(n.jsx)("div",{className:"header-navBtn",children:Object(n.jsx)("ul",{children:Object(n.jsx)("li",{id:"themeBtn",onClick:function(){v(),f(!1),x()},children:Object(n.jsx)("i",{className:"fas fa-moon"})})})})]}),Object(n.jsx)(o,{isActive:m})]})},u=c(11);var b=function(e){var t=e.id,c=e.icon,s=e.onClick;return Object(n.jsx)("button",{onClick:s,id:t,children:Object(n.jsx)("i",{className:c})})};var h=function(e){var t=e.slider,c=e.index,s=e.current;return Object(n.jsx)("div",{className:c===s?"slider-image active":"slider-image",style:{backgroundImage:"url(".concat(t.img,")"),right:"".concat(100*s,"%")},children:Object(n.jsx)("div",{className:"projectInfo",children:Object(n.jsxs)("div",{className:"projectName",children:[Object(n.jsx)("i",{children:Object(n.jsx)("b",{children:t.name})}),t.using]})})})};c(29),c(30);var m=function(){return Object(n.jsxs)("div",{className:"lds-ellipsis",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})};var f=function(e){var t=e.index,c=e.current,s=e.onClick;return Object(n.jsx)("div",{className:t===c?"slider-dots active":"slider-dots",onClick:s})};var O=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([{idT:"silder-btn-left",class:"fas fa-chevron-left",isLeft:!0},{idT:"silder-btn-right",class:"fas fa-chevron-right",isLeft:!1}]),r=Object(d.a)(a,2),o=r[0],l=(r[1],Object(s.useState)([])),j=Object(d.a)(l,2),O=j[0],v=j[1],x=Object(s.useState)(!0),g=Object(d.a)(x,2),p=g[0],N=g[1],k=Object(s.useState)(!0),S=Object(d.a)(k,2),T=S[0],y=S[1],C=u.a.firestore();function I(e){p&&(N(!1),setTimeout((function(){return N(!0)}),500),i(e?0===c?O.length-1:c-1:c===O.length-1?0:c+1))}return Object(s.useEffect)((function(){var e=[];C.collection("Projects").orderBy("id","desc").get().then((function(t){var c=t.size;t.forEach((function(t){var n=t.data().id;n>=c-1&&n<=c&&(console.log(t.id),e.push(t.data()))})),v(e),y(!1)}))}),[]),Object(n.jsx)("div",{className:"slider-content",children:Object(n.jsx)("div",{className:"slider",children:T?Object(n.jsx)(m,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"slider-btn",children:o.map((function(e,t){return Object(n.jsx)(b,{id:e.idT,onClick:function(){return I(e.isLeft)},icon:e.class},t)}))}),Object(n.jsx)("div",{id:"slider-title",children:"Lates updates"}),Object(n.jsx)("div",{id:"slider-imageCont",children:O.map((function(e,t){return Object(n.jsx)(h,{index:t,slider:e,current:c},t)}))}),Object(n.jsx)("div",{id:"slider-dotsCont",children:O.map((function(e,t){return Object(n.jsx)(f,{index:t,current:c,onClick:function(){return function(e){i(e)}(t)}},t)}))})]})})})};var v=function(e){var t=e.card;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card_img_Cont",children:Object(n.jsx)("div",{className:"card-img",style:{backgroundImage:"url(".concat(t.img,")")}})}),Object(n.jsxs)("div",{className:"card_view_content",children:[Object(n.jsx)("div",{className:"card_title",children:Object(n.jsx)("i",{children:t.name})}),Object(n.jsx)("div",{className:"card_info",children:Object(n.jsxs)("b",{children:["Using: ",t.using," "]})}),Object(n.jsx)("div",{className:"card_info",children:Object(n.jsxs)("b",{children:["Language: ",t.language]})}),Object(n.jsx)("div",{className:"card_info",children:Object(n.jsxs)("b",{children:["Update: ",t.update]})}),Object(n.jsxs)("div",{className:"card_view",children:[Object(n.jsx)("a",{target:"_blank",className:"btn_Demo ".concat(t.isDemo?"activeDemo":""),href:t.urlDemo,children:"DEMO"}),Object(n.jsx)("a",{target:"_blank",className:"btn_Code",href:t.urlCode,children:"SOURCE CODE"})]})]})]})};c(31);var x=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!0),r=Object(d.a)(a,2),o=r[0],l=r[1],j=u.a.firestore();return Object(s.useEffect)((function(){var e=[];j.collection("Projects").orderBy("id","desc").get().then((function(t){t.forEach((function(t){e.push(t.data()),function(e,t){var c="",n="https://api.github.com/repos/paveldrobny/".concat(e);fetch(n).then((function(e){return e.json()})).then((function(e){c=e.updated_at.slice(0,10),j.collection("Projects").doc(t).update({update:c})}))}(t.data().repoName,t.id)})),i(e),l(!1)}))}),[]),Object(n.jsx)("div",{className:"projects",children:Object(n.jsx)("section",{children:o?Object(n.jsx)("div",{id:"cardsLoading",children:"Loading projects..."}):c.map((function(e,t){return Object(n.jsx)(v,{card:e},t)}))})})};c(32);var g=function(){var e=Object(s.useState)("0000/00/00"),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([{href:"https://vk.com/pdrobny",class:"fab fa-vk"},{href:"https://github.com/paveldrobny",class:"fab fa-github"}]),r=Object(d.a)(a,2),o=r[0];return r[1],Object(s.useEffect)((function(){var e="";return fetch("https://api.github.com/repos/paveldrobny/paveldrobny.github.io/branches/gh-pages").then((function(e){return e.json()})).then((function(t){e=t.commit.commit.author.date.slice(0,10),i(e)})).catch((function(e){return e}))})),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("div",{id:"updateSite",children:["Update: ",c]}),Object(n.jsx)("div",{id:"footer_Cont",children:o.map((function(e,t){return Object(n.jsx)("a",{href:e.href,children:Object(n.jsx)("i",{className:e.class})},t)}))})]})};var p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)(O,{}),Object(n.jsx)(x,{}),Object(n.jsx)(g,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};c(33);u.a.initializeApp({apiKey:"AIzaSyA14cD51_IYnfmRyL_BxUrfp5q7mhbkyyc",authDomain:"personal-24c21.firebaseapp.com",projectId:"personal-24c21",storageBucket:"personal-24c21.appspot.com",messagingSenderId:"165295557630",appId:"1:165295557630:web:cd002ca44b29c4f7154eaf",measurementId:"G-B3WV4J8D5C"}),r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.8d93e514.chunk.js.map