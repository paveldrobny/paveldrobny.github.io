(this["webpackJsonppaveldrobny.github.io"]=this["webpackJsonppaveldrobny.github.io"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),r=a.n(s),i=a(2),o=(a(11),a(12),a(13),a(0)),d=(a(15),function(e){var t=e.value,a=e.styleType;return Object(o.jsx)("div",{id:"progress-content",children:Object(o.jsx)("div",{className:"progress-value ".concat(a),style:{width:"".concat(t,"%")}})})}),l=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=(t[0],t[1],Object(c.useState)(!0)),n=Object(i.a)(a,2),s=(n[0],n[1],Object(c.useState)(!!localStorage.getItem("isDarkTheme"))),r=Object(i.a)(s,2),d=r[0],l=r[1];Object(c.useEffect)((function(){j()}));var u=function(){localStorage.setItem("isDarkTheme",d)},j=function(){var e=document.body.classList,t=document.documentElement.classList;localStorage.isDarkTheme||u(),"true"===localStorage.getItem("isDarkTheme")?(e.add("dark-theme"),t.add("dark-theme"),l(!1)):"false"===localStorage.getItem("isDarkTheme")&&(e.remove("dark-theme"),t.remove("dark-theme"),l(!0))};return Object(o.jsx)("header",{id:"header",className:"is-active",children:Object(o.jsxs)("div",{className:"header-content",children:[Object(o.jsx)("div",{className:"header-title",children:"Pavel Drobny"}),Object(o.jsx)("div",{className:"header-nav-btn",children:Object(o.jsx)("ul",{children:Object(o.jsx)("li",{id:"theme-btn",onClick:function(){u(),j()},children:Object(o.jsx)("i",{className:"".concat(d?"fas fa-moon":"fas fa-sun"," ")})})})})]})})},u=(a(16),function(e){return Object(o.jsx)("div",{className:"carousel-btn",children:e.navButtons.map((function(t,a){return Object(o.jsx)("button",{onClick:function(){return e.changeSlide(t.isLeft)},id:t.id,children:Object(o.jsx)("i",{className:t.class})},a)}))})}),j=function(e){var t=e.card,a=n.a.useState(0),c=Object(i.a)(a,2),s=c[0],r=c[1];n.a.useEffect((function(){d()}),[]);var d=function(){var e=(new Date).getTime()-t.publishData,a=Math.floor(e/864e5);r(a)};return s>=0&&s<=7?Object(o.jsx)("div",{className:"card-new",children:"NEW"}):""},b=function(e){return Object(o.jsx)("div",{id:"carousel-image-content",children:e.carousels.map((function(t,a){return Object(o.jsxs)("div",{className:a===e.current?"carousel-image is-active":"carousel-image",style:{backgroundImage:"url(".concat(t.img,")"),right:"".concat(100*e.current,"%")},children:[Object(o.jsx)(j,{card:t}),Object(o.jsx)("div",{className:a===e.current?"project-info is-active":"project-info",children:Object(o.jsxs)("div",{className:"project-name",children:[Object(o.jsx)("i",{children:Object(o.jsx)("b",{children:t.name})}),t.using]})})]},a)}))})},m=(a(17),function(){return Object(o.jsxs)("div",{className:"carousel-content LoadCarouselMain",children:[Object(o.jsx)("div",{id:"carousel-title",className:"LoadCarouselText"}),Object(o.jsx)("div",{className:"carousel",children:Object(o.jsx)("div",{id:"carousel-image-content",className:"LoadCarousel"})})]})}),h=function(e){return Object(o.jsx)("div",{id:"carousel-dots-content",children:e.carousels.map((function(t,a){return Object(o.jsx)("div",{className:a===e.current?"carousel-dots is-active":"carousel-dots",onClick:function(){return e.setCurrent(a)}},a)}))})},O={pingPongJS:a.p+"static/media/PingPongJS.2feeb60e.png",hudInformation:a.p+"static/media/HUD_Information.8e5029fe.png",unityQuestSystem:a.p+"static/media/UnityQuestSystem.fbe62030.png",platformerJS:a.p+"static/media/PlatformerJS.72c4ea9b.png",spaceShooterJS:a.p+"static/media/SpaceShooter.0acbd54e.png"},f=[{id:5,img:O.spaceShooterJS,name:"Space shooter on JS",using:"Canvas",language:"JavaScript",repoName:"JS-Game_SpaceShooter",update:"04.02.2023",urlDemo:"https://paveldrobny.github.io/JS-Game_SpaceShooter/",urlCode:"https://github.com/paveldrobny/JS-Game_SpaceShooter",isShow:!0,isDemo:!0,publishData:1675544213316},{id:4,img:O.unityQuestSystem,name:"Unity Quest System v2.1",using:"Unity 2022",language:"C#",repoName:"Unity_QuestSystem",update:"24.12.2022",urlCode:"https://github.com/paveldrobny/Unity_QuestSystem",isShow:!0},{id:3,img:O.platformerJS,name:"Platformer on JS with EDITOR",using:"SVG, Canvas",language:"JavaScript",repoName:"PlatformerJS",update:"30.03.2022",urlDemo:"https://paveldrobny.github.io/PlatformerJS/",urlCode:"https://github.com/paveldrobny/PlatformerJS",isShow:!0,isDemo:!0},{id:2,img:O.hudInformation,name:"HUD information",using:"Unreal Engine 4.26",language:"C++, Blueprints",repoName:"UE4_HUDInformation",update:"04.09.2022",urlCode:"https://github.com/paveldrobny/UE4_HUDInformation",isShow:!0},{id:1,img:O.pingPongJS,name:"Ping Pong on JS",using:"Canvas",language:"JavaScript",repoName:"JS-Game_PingPong",update:"10.03.2022",urlDemo:"https://paveldrobny.github.io/JS-Game_PingPong/",urlCode:"https://github.com/paveldrobny/JS-Game_PingPong",isShow:!0,isDemo:!0}],v=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([{id:"silder-btn-left",class:"fas fa-chevron-left",isLeft:!0},{id:"silder-btn-right",class:"fas fa-chevron-right",isLeft:!1}]),r=Object(i.a)(s,2),l=r[0],j=(r[1],Object(c.useState)([])),O=Object(i.a)(j,2),v=O[0],p=O[1],g=Object(c.useState)(!0),x=Object(i.a)(g,2),S=x[0],N=x[1],y=Object(c.useState)(0),D=Object(i.a)(y,2),J=D[0],C=D[1],k=Object(c.useState)(!0),P=Object(i.a)(k,2),E=P[0],w=P[1];Object(c.useEffect)((function(){p(f.slice(0,3)),w(!1)}),[]),Object(c.useEffect)((function(){var e=(a+1)%v.length,t=setTimeout((function(){return n(e)}),5e3);return C(0),function(){return clearTimeout(t)}}),[a,v.length]),Object(c.useEffect)((function(){var e=setTimeout((function(){return C(J+1)}),42);return function(){return clearTimeout(e)}}),[J]);return Object(o.jsx)("div",{className:"carousel-content",children:Object(o.jsx)("div",{className:"carousel",children:E?Object(o.jsx)(m,{}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{id:"carousel-title",children:"Lates updates"}),Object(o.jsx)("div",{id:"progress-wrapper",children:Object(o.jsx)(d,{value:J,styleType:"_carousel"})}),Object(o.jsx)(b,{carousels:v,current:a}),Object(o.jsx)(u,{navButtons:l,changeSlide:function(e){S&&(N(!1),setTimeout((function(){return N(!0)}),500),n(e?0===a?v.length-1:a-1:a===v.length-1?0:a+1))}}),Object(o.jsx)(h,{carousels:v,current:a,setCurrent:n})]})})})},p=function(e){var t=e.cardInfo;return Object(o.jsx)(o.Fragment,{children:t.map((function(e,t){return Object(o.jsx)("div",{className:"card-info",children:Object(o.jsxs)("div",{className:"card-text",children:[e.name,": ",e.property]})},t)}))})},g=function(e){var t=e.card,a=e.name,c=e.className,n=e.FA_icon;return Object(o.jsxs)("a",{target:"_blank",rel:"noreferrer",className:c,href:t,children:[Object(o.jsx)("div",{className:"card-btn-text",children:a}),Object(o.jsx)("i",{className:"fas fa-".concat(n)})]})},x=function(e){var t=e.card;return Object(o.jsx)("div",{className:"card-title",children:t.name})},S=function(e){var t=e.card,a=n.a.useState([{name:"Using",property:t.using},{name:"Language",property:t.language},{name:"Update",property:t.update}]),c=Object(i.a)(a,2),s=c[0];c[1];return Object(o.jsxs)("div",{className:"card ".concat(t.isShow?"is-show":""),children:[Object(o.jsx)(j,{card:t}),Object(o.jsx)("div",{className:"card-img-content",children:Object(o.jsx)("div",{className:"card-img",style:{backgroundImage:"url(".concat(t.img,")")}})}),Object(o.jsxs)("div",{className:"card-view-content",children:[Object(o.jsx)(x,{card:t}),Object(o.jsx)(p,{cardInfo:s}),Object(o.jsxs)("div",{className:"card-view",children:[Object(o.jsx)(g,{card:t.urlDemo,name:"DEMO",FA_icon:"play",className:"card-btn btn-demo ".concat(t.isDemo?"is-active":"")}),Object(o.jsx)(g,{card:t.urlCode,name:"SOURCE CODE",FA_icon:"code",className:"card-btn btn-code"})]})]})]})},N=(a(18),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"}),Object(o.jsx)("div",{className:"load-card"})]})}),y=(a(19),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(i.a)(s,2),d=r[0],l=r[1];Object(c.useEffect)((function(){n(f),l(!1)}),[]);return Object(o.jsx)("div",{className:"projects",children:d?Object(o.jsx)(N,{}):a.map((function(e,t){return Object(o.jsx)(S,{card:e},t)}))})}),D=(a(20),function(){var e=Object(c.useState)("01.01.2023"),t=Object(i.a)(e,2),a=t[0],n=(t[1],Object(c.useState)([{href:"https://vk.com/pdrobny",class:"fab fa-vk"},{href:"https://github.com/paveldrobny",class:"fab fa-github"}])),s=Object(i.a)(n,2),r=s[0];s[1];return Object(c.useEffect)((function(){})),Object(o.jsx)("div",{id:"footer-wrapper",children:Object(o.jsxs)("footer",{children:[Object(o.jsxs)("div",{id:"footer-update-text",children:["Update: ",a," "]}),Object(o.jsx)("div",{children:r.map((function(e,t){return Object(o.jsx)("div",{className:"footer-link",children:Object(o.jsx)("a",{href:e.href,children:Object(o.jsx)("i",{className:e.class})})},t)}))})]})})}),J=[{title:"React.js / React Native",desc:"To develop a website / mobile application"},{title:"WPF / Electron",desc:"For desktop application development"},{title:"Unreal Engine / Unity",desc:"For game development"}],C=function(){var e=Object(c.useState)(J),t=Object(i.a)(e,2),a=t[0];t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("main",{id:"main-content",children:[Object(o.jsx)(v,{}),Object(o.jsx)(y,{}),Object(o.jsxs)("div",{id:"about",children:[Object(o.jsxs)("div",{id:"about-title",children:["I like ",Object(o.jsx)("i",{className:"fas fa-heart"})]}),Object(o.jsx)("div",{id:"about-cards-content",children:a.map((function(e){return Object(o.jsxs)("div",{className:"about-cards",children:[Object(o.jsx)("div",{className:"about-cards-title",children:e.title}),Object(o.jsx)("div",{className:"about-cards-desc",children:e.desc})]},e.title)}))})]}),Object(o.jsx)(D,{})]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.c56b38e7.chunk.js.map