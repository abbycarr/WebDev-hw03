(this["webpackJsonpbulls-and-cows"]=this["webpackJsonpbulls-and-cows"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),l=c.n(s),a=c(6),r=c.n(a),j=(c(13),c(7)),d=c(3);function i(){var e=[0,1,2,3,4,5,6,7,8,9];return""+(e=e.sort((function(){return Math.random()-.5})))[0]+e[1]+e[2]+e[3]}c(14);function b(e){var t=e.reset;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"You Lost!"}),Object(n.jsx)("h3",{children:"Try again?"}),Object(n.jsx)("p",{children:Object(n.jsx)("button",{class:"tertiary",onClick:t,children:"New Game"})})]})}function u(e){var t=e.reset;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"You Won!"}),Object(n.jsx)("h3",{children:"Play again?"}),Object(n.jsx)("p",{children:Object(n.jsx)("button",{class:"tertiary",onClick:t,children:"New Game"})})]})}var h=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],l=t[1],a=Object(s.useState)([]),r=Object(d.a)(a,2),h=r[0],O=r[1],o=Object(s.useState)([]),x=Object(d.a)(o,2),f=x[0],g=x[1],p=Object(s.useState)(i()),v=Object(d.a)(p,2),C=v[0],m=v[1];function G(){if(function(e){if(4==e.length){var t,c,n=!0,s=e.slice();for(t=0;t<4;t++)for(c=t+1;c<4;c++)s[t]===e[c]&&(n=!1);return!!n||(alert("Your four-digit guess must have four unique digits!"),!1)}return alert("Your guess must be a four-digit number!"),!1}(c)){var e=(n=h.concat(c),Array.from(new Set(n)));O(e);var t=function(e,t){for(var c=e.split(""),n=t.split("").filter((function(e){return c.includes(e)})),s=0,l=n.length,a=e.slice(),r=t.slice(),j=0;j<n.length;j++){var d=n[j];a.indexOf(d)==r.indexOf(d)&&(l-=1,s+=1)}return s+"B"+l+"C"}(C,c);g([].concat(Object(j.a)(f),[t])),l("")}var n}function w(){l(""),O([]),g([]),m(i())}return 8-h.length<=0?Object(n.jsx)(b,{reset:w}):"4B0C"==f[f.length-1]?Object(n.jsx)(u,{reset:w}):Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Bulls and Cows"}),Object(n.jsxs)("p",{children:["Guess the four-digit number. More information on the game\xa0",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Bulls_and_Cows",rel:"noreferrer",target:"_blank",children:"here"}),"."]}),Object(n.jsxs)("p",{children:["Input:\xa0",Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target.value,c=t[t.length-1];isNaN(c)&&""!==t||l(t)},onKeyPress:function(e){"Enter"===e.key&&G()}}),Object(n.jsx)("button",{class:"inverse",onClick:G,children:"OK"})]}),Object(n.jsxs)("table",{"max-height":"800px",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Guess"}),Object(n.jsx)("th",{children:"Result"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"1"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[0]}),Object(n.jsx)("td",{"data-label":"Result",children:f[0]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"2"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[1]}),Object(n.jsx)("td",{"data-label":"Result",children:f[1]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"3"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[2]}),Object(n.jsx)("td",{"data-label":"Result",children:f[2]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"4"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[3]}),Object(n.jsx)("td",{"data-label":"Result",children:f[3]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"5"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[4]}),Object(n.jsx)("td",{"data-label":"Result",children:f[4]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"6"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[5]}),Object(n.jsx)("td",{"data-label":"Result",children:f[5]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"7"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[6]}),Object(n.jsx)("td",{"data-label":"Result",children:f[6]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-label":"Count",children:"8"}),Object(n.jsx)("td",{"data-label":"Guess",children:h[7]}),Object(n.jsx)("td",{"data-label":"Result",children:f[7]})]})]})]}),Object(n.jsx)("button",{onClick:w,children:"New Game"})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),l(e),a(e)}))};r.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.054495c9.chunk.js.map