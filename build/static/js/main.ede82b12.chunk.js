(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},73:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(20),r=c.n(a),o=(c(62),c(63),c(54)),i=c.n(o),l=c(114),j=c(16),u=(c(64),c(48)),h=c(19),d=c(34),b=c.n(d),m=c(53),O=c.n(m),g=(c(65),c(113)),x=c(4),_=c(2),f=Object(s.createContext)(),v=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(_.jsx)(f.Provider,{value:Object(s.useReducer)(t,c),children:n})},p=function(){return Object(s.useContext)(f)},N=c(38),k="SET_SEARCH_TERM",S=function(e,t){switch(console.log(t),t.type){case k:return Object(N.a)(Object(N.a)({},e),{},{term:t.term});default:return e}};var w=function(e){var t=e.hiddenButtons,c=p(),n=Object(h.a)(c,2);Object(u.a)(n[0]);var a=n[1],r=Object(s.useState)(""),o=Object(h.a)(r,2),i=o[0],l=o[1],j=Object(x.f)(),d=function(e){e.preventDefault(),console.log(">>>>>>>>>>>>>>>search icon"),a({type:k,term:i}),j.push("/search")};return Object(_.jsxs)("form",{className:"search",children:[Object(_.jsxs)("div",{className:"search__input",children:[Object(_.jsx)(b.a,{onClick:d,className:"search__inputIcon"}),Object(_.jsx)("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)}}),Object(_.jsx)(O.a,{className:"search__MicIcon"})]}),t?Object(_.jsxs)("div",{className:"search__buttonContainer",children:[Object(_.jsx)(g.a,{type:"submit",onClick:d,variant:"outlined",className:"button",children:"Google Search"}),Object(_.jsx)(g.a,{variant:"outlined",className:"button",children:"I'm Feeling Lucky"})]}):Object(_.jsxs)("div",{className:"search__buttonContainer hide",children:[Object(_.jsx)(g.a,{type:"submit",onClick:d,variant:"outlined",className:"button",children:"Google Search"}),Object(_.jsx)(g.a,{variant:"outlined",className:"button",children:"I'm Feeling Lucky"})]})]})};var y=function(){return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsxs)("div",{className:"home__header",children:[Object(_.jsxs)("div",{className:"home__headerLinksLeft",children:[Object(_.jsx)(j.b,{to:"#",className:"link",children:"About"}),Object(_.jsx)(j.b,{to:"#",className:"link",children:"Store"})]}),Object(_.jsxs)("div",{className:"home__headerLinksRight",children:[Object(_.jsx)(j.b,{to:"#",className:"link",children:"Gmail"}),Object(_.jsx)(j.b,{to:"#",className:"link",children:"Image"}),Object(_.jsx)(i.a,{className:"icons"}),Object(_.jsx)(l.a,{className:"icons"})]})]}),Object(_.jsxs)("div",{className:"home__body",children:[Object(_.jsx)("img",{src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:""}),Object(_.jsx)("div",{className:"home__inputContainer",children:Object(_.jsx)(w,{hiddenButtons:!0})})]})]})},C=(c(73),c(37)),P=c.n(C),I=c(55),L=(c(75),"AIzaSyBuF4bsmiA1e_OEG8bo6_oISnAR8LXbQDk"),A=function(e){var t=Object(s.useState)(null),c=Object(h.a)(t,2),n=c[0],a=c[1];return console.log(">>>>>>>>>> term",e),console.log(">>>>>>>>>> API",L),Object(s.useEffect)((function(){(function(){var t=Object(I.a)(P.a.mark((function t(){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/customsearch/v1?key=".concat(L,"&cx=").concat("9315428aefc796032","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){a(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:n}};var F=function(){var e=p(),t=Object(h.a)(e,2),c=t[0].term,s=(t[1],A(c).data);return console.log(">>>>>>>>>> data",s),Object(_.jsxs)("div",{className:"searchPage",children:[Object(_.jsxs)("div",{className:"searchPage__header",children:[Object(_.jsx)(j.b,{to:"/",children:Object(_.jsx)("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",alt:"google.png",srcset:""})}),Object(_.jsx)("div",{className:"searchPage__searchBody",children:Object(_.jsx)(w,{})})]}),c&&Object(_.jsxs)("div",{className:"searchPage__results",children:[Object(_.jsxs)("p",{className:"searchPage__resultsCount",children:["About ",null===s||void 0===s?void 0:s.searchInformation.formattedTotalResults," result (",null===s||void 0===s?void 0:s.searchInformation.formattedSearchTime," second) for ",c]}),null===s||void 0===s?void 0:s.items.map((function(e){return Object(_.jsxs)("div",{className:"searchPage__result",children:[Object(_.jsx)("a",{className:"searchPage__resultLink",href:e.link,children:e.displayLink}),Object(_.jsx)("a",{className:"searchPage__resultsTitle",href:e.link,children:Object(_.jsxs)("h3",{children:[" ",e.title]})}),Object(_.jsx)("p",{className:"searchPage__resultsSnippet",children:e.snippet})]})}))]})]})};var T=function(){return Object(_.jsx)("div",{className:"app",children:Object(_.jsx)(j.a,{children:Object(_.jsxs)(x.c,{children:[Object(_.jsx)(x.a,{exact:!0,path:"/",children:Object(_.jsx)(y,{})}),Object(_.jsx)(x.a,{exact:!0,path:"/search",children:Object(_.jsx)(F,{})})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,115)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(v,{initialState:{term:null},reducer:S,children:Object(_.jsx)(T,{})})}),document.getElementById("root")),B()}},[[94,1,2]]]);
//# sourceMappingURL=main.ede82b12.chunk.js.map