(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),i=n(6),l=n(8),a=n(1),r=n(4),o=n.n(r),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){return t.Alphabetically="alphabetically",t.Length="length",t.Reset="reset",t}({}),j=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),j=r[0],p=r[1],d=function(t,e){var n=Object(l.a)(t);return n.sort((function(t,n){switch(e.activeSort){case h.Alphabetically:return t.localeCompare(n);case h.Length:return t.length-n.length;default:return 0}})),e.isReversed&&n.reverse(),n}(b,{activeSort:n||h.Alphabetically,isReversed:j});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:o()("button","is-info",{"is-light":"alphabetically"!==n}),onClick:function(){return c("alphabetically")},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:o()("button","is-success",{"is-light":"length"!==n}),onClick:function(){return c("length")},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:o()("button","is-warning",{"is-light":!j}),onClick:function(){return p(!j)},children:"Reverse"}),(n||j)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),p(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{children:t},t)}))})]})};s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9afba3b2.chunk.js.map