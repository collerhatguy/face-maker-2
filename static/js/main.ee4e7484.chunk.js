(this["webpackJsonpface-maker-2"]=this["webpackJsonpface-maker-2"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),r=s(5),i=s.n(r),o=s(6),h=s(3),n=(s(11),s(0));function d(e){var t=e.face;return Object(n.jsxs)("div",{style:t.head,class:"head",children:[Object(n.jsx)("div",{style:t.hair,class:"hair",children:Object(n.jsx)("div",{style:t.hair,class:"hair-corner"})}),Object(n.jsxs)("div",{style:t.brows,class:"brows",children:[Object(n.jsx)("div",{class:"brow"}),Object(n.jsx)("div",{class:"brow"})]}),Object(n.jsxs)("div",{class:"eyes",children:[Object(n.jsxs)("div",{style:t.eyes,class:"eye",children:[Object(n.jsx)("div",{style:t.eyes.iris,className:"iris"}),Object(n.jsx)("div",{className:"pupil"})]}),Object(n.jsxs)("div",{style:t.eyes,class:"eye",children:[Object(n.jsx)("div",{style:t.eyes.iris,className:"iris"}),Object(n.jsx)("div",{className:"pupil"})]})]}),Object(n.jsx)("div",{style:t.nose,class:"nose"}),Object(n.jsx)("div",{style:t.mouth,class:"mouth"}),Object(n.jsxs)("div",{style:t.ears,class:"ears",children:[Object(n.jsx)("div",{class:"ear"}),Object(n.jsx)("div",{class:"ear"})]})]})}function j(e){var t=e.bodyPart,s=e.changeColor;return Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{for:"".concat(t,"color"),children:"Color: "}),Object(n.jsx)("input",{type:"color",id:"".concat(t,"color"),name:"".concat(t,"color"),onChange:function(e){s(e.target.value)}})]})}function l(e){var t=e.bodyPart,s=e.changeHeight,a=e.changeWidth;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsxs)("label",{for:"".concat(t,"width"),children:["Width:",Object(n.jsx)("input",{type:"number",id:"".concat(t,"width"),name:"".concat(t,"width"),onChange:function(e){a("".concat(e.target.value,"px"))}}),"px"]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{for:"".concat(t,"height"),children:["Height:",Object(n.jsx)("input",{type:"number",id:"".concat(t,"height"),name:"".concat(t,"height"),onChange:function(e){s("".concat(e.target.value,"px"))}}),"px"]})})]})}function b(e){var t=e.dispatch,s=e.ACTIONS,a=function(e,s){t({type:s,payload:{value:e}})};return Object(n.jsxs)("form",{children:[Object(n.jsxs)("feildset",{children:[Object(n.jsx)("legend",{children:"Hair"}),Object(n.jsx)(j,{bodyPart:"hair",changeColor:function(e){return a(e,s.setHairColor)}}),Object(n.jsx)(l,{bodyPart:"hair",changeWidth:function(e){return a(e,s.setHairWidth)},changeHeight:function(e){return a(e,s.setHairHeight)}})]}),Object(n.jsxs)("feildset",{children:[Object(n.jsx)("legend",{children:"Head"}),Object(n.jsx)(j,{bodyPart:"head",changeColor:function(e){return a(e,s.setHeadColor)}}),Object(n.jsx)(l,{bodyPart:"head",changeWidth:function(e){return a(e,s.setHeadWidth)},changeHeight:function(e){return a(e,s.setHeadHeight)}})]}),Object(n.jsxs)("feildset",{children:[Object(n.jsx)("legend",{children:"Eyes"}),Object(n.jsx)(j,{bodyPart:"eyes",changeColor:function(e){return a(e,s.setEyeColor)}}),Object(n.jsx)(l,{bodyPart:"eyes",changeWidth:function(e){return a(e,s.setEyeWidth)},changeHeight:function(e){return a(e,s.setEyeHeight)}})]}),Object(n.jsxs)("feildset",{children:[Object(n.jsx)("legend",{children:"Nose"}),Object(n.jsx)(j,{bodyPart:"nose",changeColor:function(e){return a(e,s.setNoseColor)}}),Object(n.jsx)(l,{bodyPart:"nose",changeWidth:function(e){return a(e,s.setNoseWidth)},changeHeight:function(e){return a(e,s.setNoseHeight)}})]}),Object(n.jsx)("feildset",{children:Object(n.jsx)("legend",{children:"Mouth"})}),Object(n.jsx)("feildset",{children:Object(n.jsx)("legend",{children:"Ears"})})]})}var O=s(1),u=Object(h.a)({setHairColor:"set-hair-color",setHairWidth:"set-hair-width",setHairHeight:"set-hair-height",setHeadColor:"set-head-color",setHeadWidth:"set-head-width",setHeadHeight:"set-head-height",setEyeColor:"set-eye-color",setEyeWidth:"set-eye-width",setEyeHeight:"set-eye-height",setNoseColor:"set-nose-color",setNoseWidth:"set-nose-width",setNoseHeight:"set-nose-height",setEars:"set-eyes",setMouth:"set-mouth"},"setEars","set-ears");function y(e,t){switch(t.type){case u.setHairColor:return Object(O.a)(Object(O.a)({},e),{},{hair:Object(O.a)(Object(O.a)({},e.hair),{},{backgroundColor:t.payload.value})});case u.setHairWidth:return Object(O.a)(Object(O.a)({},e),{},{hair:Object(O.a)(Object(O.a)({},e.hair),{},{width:t.payload.value})});case u.setHairHeight:return Object(O.a)(Object(O.a)({},e),{},{hair:Object(O.a)(Object(O.a)({},e.hair),{},{height:t.payload.value})});case u.setHeadColor:return Object(O.a)(Object(O.a)({},e),{},{head:Object(O.a)(Object(O.a)({},e.head),{},{backgroundColor:t.payload.value})});case u.setHeadHeight:return Object(O.a)(Object(O.a)({},e),{},{head:Object(O.a)(Object(O.a)({},e.head),{},{height:t.payload.value})});case u.setHeadWidth:return Object(O.a)(Object(O.a)({},e),{},{head:Object(O.a)(Object(O.a)({},e.head),{},{width:t.payload.value})});case u.setEyeColor:return Object(O.a)(Object(O.a)({},e),{},{eyes:Object(O.a)(Object(O.a)({},e.eyes),{},{iris:{backgroundColor:t.payload.value}})});case u.setEyeWidth:return Object(O.a)(Object(O.a)({},e),{},{eyes:Object(O.a)(Object(O.a)({},e.eyes),{},{width:t.payload.value})});case u.setEyeHeight:return Object(O.a)(Object(O.a)({},e),{},{eyes:Object(O.a)(Object(O.a)({},e.eyes),{},{height:t.payload.value})});case u.setNoseColor:return Object(O.a)(Object(O.a)({},e),{},{nose:Object(O.a)(Object(O.a)({},e.nose),{},{borderColor:t.payload.value})});case u.setNoseWidth:return Object(O.a)(Object(O.a)({},e),{},{nose:Object(O.a)(Object(O.a)({},e.nose),{},{width:t.payload.value})});case u.setNoseHeight:return Object(O.a)(Object(O.a)({},e),{},{nose:Object(O.a)(Object(O.a)({},e.nose),{},{height:t.payload.value})});default:return e}}var g=Object(h.a)({setHairColor:"set-hair-color",setHairWidth:"set-hair-width",setHairHeight:"set-hair-height",setHeadColor:"set-head-color",setHeadWidth:"set-head-width",setHeadHeight:"set-head-height",setEyeColor:"set-eye-color",setEyeWidth:"set-eye-width",setEyeHeight:"set-eye-height",setNoseColor:"set-nose-color",setNoseWidth:"set-nose-width",setNoseHeight:"set-nose-height",setEars:"set-eyes",setMouth:"set-mouth"},"setEars","set-ears");var x=function(){var e=Object(a.useReducer)(y,{hair:{},head:{},brows:{},eyes:{},ears:{},nose:{},mouth:{}}),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){console.log(s)}),[s]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{face:s}),Object(n.jsx)(b,{dispatch:c,ACTIONS:g})]})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ee4e7484.chunk.js.map