(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{29:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),s=t(8),o=t.n(s),a=(t(29),t(30),t(31),t(44)),i=(t(32),t(1));function u(){return Object(i.jsxs)(a.a,{bg:"dark",className:"justify-content-between",variant:"dark",sticky:"top",children:[Object(i.jsxs)(a.a.Brand,{children:[" ",Object(i.jsx)("img",{className:"icon-img",src:"https://cdn-icons-png.flaticon.com/512/188/188918.png",alt:""})," Pokemon List"]}),Object(i.jsx)(a.a.Brand,{children:"S.S"})]})}var p=t(2),m=t(41),j=t(42),d=t(43),l=t(10),h=t.n(l),b=t(16),f=t(24);function k(e){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(h.a.mark((function e(n){var t,r,c,s,o,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.url,r=n.method,c=void 0===r?"get":r,s=n.body,o=n.headers,e.prev=1,e.next=4,fetch(t,{method:c,body:s,headers:o});case 4:return a=e.sent,e.abrupt("return",a.json());case 8:e.prev=8,e.t0=e.catch(1),Promise.reject(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var g=t.n(f)()((function(e,n){return{getPokemons:function(){var n=Object(b.a)(h.a.mark((function n(){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({isLoading:!0}),n.next=4,k({url:"https://pokeapi.co/api/v2/pokemon?limit=100"});case 4:t=n.sent,e({pokemons:t.results}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e({pokemons:[]});case 11:return n.prev=11,e({isLoading:!1}),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}(),pokemons:[],getPokemonImg:function(){var n=Object(b.a)(h.a.mark((function n(t){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:try{r="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),e({pokemonImg:r})}catch(c){e({pokemonImg:""})}case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),pokemonImg:"",isLoading:!1}})),O=g,v=t(40),y=t(45);function w(e){var n=e.name,t=e.url;return Object(i.jsx)(v.a,{xs:!0,md:"auto",children:Object(i.jsxs)(y.a,{className:"m-3",border:"secondary",style:{width:"18rem"},children:[Object(i.jsx)(y.a.Header,{children:Object(i.jsx)(y.a.Img,{variant:"top",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.split("/")[6],".png")})}),Object(i.jsxs)(y.a.Body,{children:[Object(i.jsx)(y.a.Title,{children:n}),Object(i.jsx)(y.a.Text,{children:"This is ".concat(n," say hello! :)")})]})]})})}t(37);function P(e){var n=e.pokemons,t=O((function(e){return{isLoading:e.isLoading}})).isLoading;return Object(i.jsx)(m.a,{fluid:!0,children:Object(i.jsx)(j.a,{className:"justify-content-center align-items-center",children:t?Object(i.jsx)(d.a,{animation:"border",className:"spinner"}):null===n||void 0===n?void 0:n.map((function(e,n){return Object(i.jsx)(w,Object(p.a)({},e),n)}))})})}function I(){var e=O((function(e){return{getPokemons:e.getPokemons,pokemons:e.pokemons}})),n=e.getPokemons,t=e.pokemons;return Object(r.useEffect)((function(){n().catch(null)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(P,{pokemons:t})]})}var L=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(I,{})})};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b8da595e.chunk.js.map