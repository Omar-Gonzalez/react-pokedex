(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),s=n.n(a),u=(n(11),n(2)),i=n.n(u),o=n(4),l=n(3),j=(n(13),n(0)),b=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Pokedex"}),Object(j.jsx)("p",{children:"A react based pokedex"})]})},f=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(l.a)(a,2),u=s[0],b=s[1],f=Object(r.useState)(null),p=Object(l.a)(f,2),d=p[0],O=p[1],m=Object(r.useState)(null),v=Object(l.a)(m,2),k=v[0],g=v[1],w=Object(r.useState)(null),_=Object(l.a)(w,2),y=_[0],N=_[1],S=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var c,a,s,u,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r||"".concat("https://pokeapi.co/api/v2/","pokemon?limit=").concat(t,"&offset=").concat(n),e.prev=1,e.next=4,fetch(c);case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,u=s.results,o=s.previous,l=s.next,e.abrupt("return",{results:u,previous:o,next:l});case 14:return e.prev=14,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{results:[],previous:null,next:null});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(null,null,t);case 2:n=e.sent,r=n.results,a=n.previous,s=n.next,c(r),b(a),O(s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)(Object(o.a)(i.a.mark((function e(){var t,n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(40,0);case 2:t=e.sent,n=t.results,r=t.previous,a=t.next,c(n),b(r),O(a);case 9:case"end":return e.stop()}}),e)}))),[]),Object(j.jsxs)(r.Fragment,{children:[function(){if(k)return Object(j.jsxs)("div",{className:"navbar",children:[y>=1?Object(j.jsx)("button",{onClick:function(){return function(){try{g(n[parseInt(y)-1].url),N(parseInt(y)-1)}catch(e){}}()},href:"",children:"\xab Previous Pokemon"}):"",y<n.length-1?Object(j.jsx)("button",{onClick:function(){return function(){try{g(n[parseInt(y)+1].url),N(parseInt(y)+1)}catch(e){}}()},href:"",children:"Next Pokemon \xbb"}):""]})}(),Object(j.jsx)(h,{resourceUrl:k}),Object(j.jsxs)("div",{className:"navbar",children:[u?Object(j.jsx)("button",{onClick:function(){return P(u)},href:"",children:"\xab Previous Page"}):"",d?Object(j.jsx)("button",{onClick:function(){return P(d)},href:"",children:"Next Page \xbb"}):""]}),Object(j.jsx)("div",{className:"pokemon-grid",children:n.map((function(e,t){return Object(j.jsx)(x,{index:t,pokemon:e,setResourceUrl:g,setCurrentIndex:N},t)}))})]})},h=function(e){var t=e.resourceUrl,n=Object(r.useState)(null),c=Object(l.a)(n,2),a=c[0],s=c[1],u=Object(r.useState)(""),b=Object(l.a)(u,2),f=b[0],h=b[1],x=Object(r.useState)(null),d=Object(l.a)(x,2),O=d[0],m=d[1],v=Object(r.useState)([]),k=Object(l.a)(v,2),g=k[0],w=k[1],_=Object(r.useState)([]),y=Object(l.a)(_,2),N=y[0],S=y[1],P=Object(r.useState)(""),C=Object(l.a)(P,2),F=C[0],I=C[1],E=Object(r.useState)([]),z=Object(l.a)(E,2),B=z[0],L=z[1],M=Object(r.useState)([]),U=Object(l.a)(M,2),A=U[0],D=U[1],J=Object(r.useState)({}),R=Object(l.a)(J,2),T=R[0],Y=R[1],H=Object(r.useState)({habitat:{name:""},flavor_text_entries:[{name:""}]}),q=Object(l.a)(H,2),G=q[0],K=q[1],Q=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",{});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t!==a&&Object(o.a)(i.a.mark((function e(){var n,r,c,a,u,o,l,j,b,f,p,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:if(!(n=e.sent)){e.next=22;break}return r=n.name,c=n.abilities,a=n.forms,u=n.sprites,o=n.base_experience,l=n.moves,j=n.location_area_encounters,b=n.species,f=u.other["official-artwork"].front_default?u.other["official-artwork"].front_default:"https://res.cloudinary.com/dlzzmbcfy/image/upload/v1543814600/placeholder_hmfbul.png",e.next=8,V(j);case 8:return p=e.sent,e.next=11,W(b.url);case 11:x=e.sent,h(r),m(f),w(c),s(t),S(a),I(o),L(l),D(p),Y(u),K(x);case 22:case"end":return e.stop()}}),e)})))()})),Object(j.jsxs)(r.Fragment,{children:[t?Object(j.jsxs)("div",{className:"pokemon-detail",children:[Object(j.jsx)("img",{className:"artwork",src:O,alt:"Pokemon Artwork"}),Object(j.jsx)("h1",{children:f}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"detail-container",children:[Object(j.jsxs)("div",{className:"detail-tile",children:[Object(j.jsx)("h2",{children:"Abilities"}),Object(j.jsx)("ul",{children:g.map((function(e,t){return Object(j.jsx)("li",{children:e.ability.name},t)}))}),Object(j.jsx)("h2",{children:"Forms"}),Object(j.jsx)("ul",{children:N.map((function(e,t){return Object(j.jsx)("li",{children:e.name},t)}))}),Object(j.jsx)("h2",{children:"Base Experience"}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:F})})]}),Object(j.jsxs)("div",{className:"detail-tile",children:[Object(j.jsx)("h2",{children:"More Details"}),Object(j.jsx)("img",{src:T.front_default?T.front_default:T.font_shiny,alt:"Pokemon Front"}),Object(j.jsx)("img",{src:T.back_default,alt:"Pokemon Back"}),Object(j.jsx)("p",{children:G.flavor_text_entries[0].flavor_text}),Object(j.jsxs)("p",{children:["Habitat: ",Object(j.jsx)("b",{children:G.habitat.name}),", Legendary: ",Object(j.jsx)("b",{children:G.is_legendary?"Yes":"No"}),", Mythical: ",Object(j.jsx)("b",{children:G.is_mythical?"Yes":"No"})]})]})]})]}):"",Object(j.jsx)(p,{moves:B,locations:A})]})},p=function(e){var t=e.moves,n=e.locations;return Object(j.jsx)(r.Fragment,{children:function(){if(t.length>0||n.length>0)return Object(j.jsxs)("div",{className:"pokemon-detail",children:[Object(j.jsx)("h2",{className:"text-center",children:"Moves"}),Object(j.jsx)("ul",{className:"long-list",children:t.map((function(e,t){return Object(j.jsx)("li",{children:e.move.name},t)}))}),Object(j.jsx)("h2",{className:"text-center",children:"Locations"}),Object(j.jsx)("ul",{className:"long-list",children:n.map((function(e,t){return Object(j.jsx)("li",{children:e.location_area.name},t)}))})]})}()})},x=function(e){var t=e.index,n=e.pokemon,c=e.setResourceUrl,a=e.setCurrentIndex,s=Object(r.useState)("https://res.cloudinary.com/dlzzmbcfy/image/upload/v1543814600/placeholder_hmfbul.png"),u=Object(l.a)(s,2),b=u[0],f=u[1],h=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,c=r.sprites,e.prev=7,e.abrupt("return",c.front_default);case 11:e.prev=11,e.t0=e.catch(7),console.warn(e.t0);case 14:case"end":return e.stop()}}),e,null,[[7,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n.url);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))()})),Object(j.jsxs)("div",{onClick:function(){return c(n.url),void a(t)},className:"pokemon-tile",children:[Object(j.jsx)("img",{src:b}),n.name]})},d=function(){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(f,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.d18d7ab5.chunk.js.map