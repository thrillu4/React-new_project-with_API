(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},218:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var r=c(5),a=c(0),n=c(49),s=c(44),i=c(58),o=(c(107),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:r}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],j=Object(s.a)(),h=j.getCharacter,d=j.clearError,b=j.process,m=j.setProcess;Object(a.useEffect)((function(){O();var e=setInterval(O,6e4);return function(){clearInterval(e)}}),[]);var f=function(e){n(e)},O=function(){d();var e=Math.floor(400*Math.random()+1011e3);h(e).then(f).then((function(){return m("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(b,u,c),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:O,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(7),d=c(231),b=c(232),m=c(41),f=c(23),O=(c(108),function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],i=c[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),j=u[0],O=u[1],p=Object(a.useState)(210),x=Object(r.a)(p,2),v=x[0],_=x[1],N=Object(a.useState)(!1),g=Object(r.a)(N,2),k=g[0],y=g[1],w=Object(s.a)(),C=w.getAllCharacters,S=w.process,E=w.setProcess;Object(a.useEffect)((function(){F(v,!0)}),[]);var F=function(e,t){O(!t),C(e).then(P).then((function(){return E("confirmed")}))},P=function(e){var t=!1;e.length<9&&(t=!0),i([].concat(Object(h.a)(n),Object(h.a)(e))),O((function(e){return!1})),_((function(e){return e+9})),y((function(e){return t}))},T=Object(a.useRef)([]),I=function(e){T.current.forEach((function(e){return e.classList.remove("char__item_selected")})),T.current[e].classList.add("char__item_selected"),T.current[e].focus()};var A=Object(a.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(f.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(f.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(m.a,{});default:throw new Error("Unexpected char state")}}(S,(function(){return function(t){var c=t.map((function(t,c){var r={objectFit:"cover"};return t.thumbnail,r={objectFit:"unset"},Object(l.jsx)(d.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return T.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(b.a,{component:null,children:c})})}(n)}),j)}),[S]);return Object(l.jsxs)("div",{className:"char__list",children:[A,Object(l.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:k?"none":"block"},onClick:function(){return F(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),p=(c(109),function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:r}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),x=function(e){var t=Object(a.useState)(null),c=Object(r.a)(t,2),n=c[0],o=c[1];Object(a.useEffect)((function(){m()}),[e.charId]);var u=Object(s.a)(),j=u.getCharacter,h=u.clearError,d=u.process,b=u.setProcess,m=function(){var t=e.charId;t&&(h(),j(t).then(f).then((function(){return b("confirmed")})))},f=function(e){o(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(d,p,n)})},v=c(10),_=c(13),N=c(14),g=c(15),k=function(e){Object(N.a)(c,e);var t=Object(g.a)(c);function c(){var e;Object(v.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(_.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(m.a,{}):this.props.children}}]),c}(a.Component),y=c(223),w=c(224),C=c(11),S=(c(218),function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.a)(),o=i.getCharacterByName,u=i.clearError,j=i.process,h=i.setProcess,d=function(e){n(e)},b="error"===j?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(m.a,{})}):null,f=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(C.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(y.d,{initialValues:{charName:""},validationSchema:w.a({charName:w.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,u(),o(t).then(d).then((function(){return h("confirmed")}))},children:Object(l.jsxs)(y.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(y.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===j,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(y.a,{component:"div",className:"char__search-error",name:"charName"})]})}),f,b]})}),E=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(k,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(k,{children:Object(l.jsx)(O,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(k,{children:Object(l.jsx)(x,{charId:c})}),Object(l.jsx)(k,{children:Object(l.jsx)(S,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})}},41:function(e,t,c){"use strict";var r=c.p+"static/media/error.42292aa1.gif",a=c(2);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250 px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:""})}},44:function(e,t,c){"use strict";var r=c(4),a=c.n(r),n=c(6),s=c(5),i=c(0),o=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],r=t[1];return{request:Object(i.useCallback)(function(){var e=Object(n.a)(a.a.mark((function e(t){var c,n,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),r("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){r("loading")}),[]),process:c,setProcess:r}};t.a=function(){var e=o(),t=e.request,c=e.clearError,r=e.process,s=e.setProcess,i="https://gateway.marvel.com:443/v1/public/",l="apikey=42e09bced1848d4ec4fd4dc5a818c5f2",u=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,t("".concat(i,"characters?limit=9&offset=").concat(c,"&").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(i,"characters?name=").concat(c,"&").concat(l));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(m));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(i,"characters/").concat(c,"?").concat(l));case 2:return r=e.sent,e.abrupt("return",m(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,t("".concat(i,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(i,"comics/").concat(c,"?").concat(l));case 2:return r=e.sent,e.abrupt("return",f(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"No Description, Sorry!",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},f=function(e){return{id:e.id,title:e.title,description:e.description||"No Description, Sorry!",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us",prices:e.prices.price?"".concat(e.prices.price,"$"):"Not Available"}};return{process:r,setProcess:s,getAllCharacters:u,getCharacter:h,clearError:c,getAllComics:d,getComics:b,getCharacterByName:j}}},58:function(e,t,c){"use strict";var r=c(23),a=c(41),n=(c(59),c(2)),s=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(s,{});case"loading":return Object(n.jsx)(r.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(a.a,{});default:throw new Error("Unexpected char state")}}},59:function(e,t,c){}}]);
//# sourceMappingURL=5.d2437eff.chunk.js.map