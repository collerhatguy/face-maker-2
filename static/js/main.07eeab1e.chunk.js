(this["webpackJsonpface-maker-2"]=this["webpackJsonpface-maker-2"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),r=a(5),h=a.n(r),i=a(6),j=(a(11),a(1));function o(e){var t=e.face;return Object(j.jsx)("div",{className:"head-container",children:Object(j.jsxs)("div",{style:t.head,class:"head",children:[Object(j.jsx)("div",{style:t.hair,class:"hair",children:Object(j.jsx)("div",{style:t.hair,class:"hair-corner"})}),Object(j.jsxs)("div",{style:t.brows,class:"brows",children:[Object(j.jsx)("div",{class:"brow"}),Object(j.jsx)("div",{class:"brow"})]}),Object(j.jsxs)("div",{class:"eyes",children:[Object(j.jsxs)("div",{style:t.eyes,class:"eye",children:[Object(j.jsx)("div",{style:t.eyes.iris,className:"iris"}),Object(j.jsx)("div",{className:"pupil"})]}),Object(j.jsxs)("div",{style:t.eyes,class:"eye",children:[Object(j.jsx)("div",{style:t.eyes.iris,className:"iris"}),Object(j.jsx)("div",{className:"pupil"})]})]}),Object(j.jsx)("div",{style:t.nose,class:"nose"}),Object(j.jsx)("div",{style:t.mouth,class:"mouth"}),Object(j.jsxs)("div",{class:"ears",children:[Object(j.jsx)("div",{style:t.ears,class:"ear"}),Object(j.jsx)("div",{style:t.ears,class:"ear"})]})]})})}function d(e){var t=e.bodyPart,a=e.dispatch,c=e.ACTIONS;return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{for:"".concat(t,"color"),children:"Color: "}),Object(j.jsx)("input",{type:"color",id:"".concat(t,"color"),name:"".concat(t,"color"),onChange:function(e){var s;s=e.target.value,a({type:c[t].color,payload:{value:s}})}})]})}function b(e){var t=e.bodyPart,a=e.dispatch,c=e.ACTIONS;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("label",{for:"".concat(t,"width"),children:["Width:",Object(j.jsx)("input",{type:"number",id:"".concat(t,"width"),name:"".concat(t,"width"),onChange:function(e){var s;s="".concat(e.target.value,"px"),a({type:c[t].width,payload:{value:s}})}}),"px"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{for:"".concat(t,"height"),children:["Height:",Object(j.jsx)("input",{type:"number",id:"".concat(t,"height"),name:"".concat(t,"height"),onChange:function(e){var s;s="".concat(e.target.value,"px"),a({type:c[t].height,payload:{value:s}})}}),"px"]})})]})}function l(e){var t=e.dispatch,a=e.ACTIONS;return Object(j.jsxs)("form",{children:[Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Hair"}),Object(j.jsx)(d,{bodyPart:"hair",dispatch:t,ACTIONS:a}),Object(j.jsx)(b,{bodyPart:"hair",dispatch:t,ACTIONS:a})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Head"}),Object(j.jsx)(d,{bodyPart:"head",dispatch:t,ACTIONS:a}),Object(j.jsx)(b,{bodyPart:"head",dispatch:t,ACTIONS:a})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Eyes"}),Object(j.jsx)(d,{bodyPart:"eyes",dispatch:t,ACTIONS:a}),Object(j.jsx)(b,{bodyPart:"eyes",dispatch:t,ACTIONS:a})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Nose"}),Object(j.jsx)(d,{bodyPart:"nose",dispatch:t,ACTIONS:a}),Object(j.jsx)(b,{bodyPart:"nose",dispatch:t,ACTIONS:a})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Mouth"}),Object(j.jsx)(d,{bodyPart:"mouth",dispatch:t,ACTIONS:a}),Object(j.jsx)(b,{bodyPart:"mouth",dispatch:t,ACTIONS:a})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Ears"}),Object(j.jsx)(d,{bodyPart:"ears",dispatch:t,ACTIONS:a}),Object(j.jsx)(b,{bodyPart:"ears",dispatch:t,ACTIONS:a})]})]})}var O,n=a(0),u=a(3),y=(O={hair:{color:"set-hair-color",width:"set-hair-width",height:"set-hair-height"},head:{color:"set-head-color",width:"set-head-width",height:"set-head-height"},eyes:{color:"set-eye-color",width:"set-eye-width",height:"set-eye-height"},nose:{color:"set-nose-color",width:"set-nose-width",height:"set-nose-height"},mouth:{color:"set-mouth-color",width:"set-mouth-width",height:"set-mouth-height"}},Object(u.a)(O,"mouth",{color:"set-mouth-color",width:"set-mouth-width",height:"set-mouth-height"}),Object(u.a)(O,"ears",{color:"set-ears-color",width:"set-ears-width",height:"set-ears-height"}),O);function x(e,t){switch(t.type){case y.hair.color:return Object(n.a)(Object(n.a)({},e),{},{hair:Object(n.a)(Object(n.a)({},e.hair),{},{backgroundColor:t.payload.value})});case y.hair.width:return Object(n.a)(Object(n.a)({},e),{},{hair:Object(n.a)(Object(n.a)({},e.hair),{},{width:t.payload.value})});case y.hair.height:return Object(n.a)(Object(n.a)({},e),{},{hair:Object(n.a)(Object(n.a)({},e.hair),{},{height:t.payload.value})});case y.head.color:return Object(n.a)(Object(n.a)({},e),{},{head:Object(n.a)(Object(n.a)({},e.head),{},{backgroundColor:t.payload.value})});case y.head.height:return Object(n.a)(Object(n.a)({},e),{},{head:Object(n.a)(Object(n.a)({},e.head),{},{height:t.payload.value})});case y.head.width:return Object(n.a)(Object(n.a)({},e),{},{head:Object(n.a)(Object(n.a)({},e.head),{},{width:t.payload.value})});case y.eyes.color:return Object(n.a)(Object(n.a)({},e),{},{eyes:Object(n.a)(Object(n.a)({},e.eyes),{},{iris:{backgroundColor:t.payload.value}})});case y.eyes.width:return Object(n.a)(Object(n.a)({},e),{},{eyes:Object(n.a)(Object(n.a)({},e.eyes),{},{width:t.payload.value})});case y.eyes.height:return Object(n.a)(Object(n.a)({},e),{},{eyes:Object(n.a)(Object(n.a)({},e.eyes),{},{height:t.payload.value})});case y.nose.color:return Object(n.a)(Object(n.a)({},e),{},{nose:Object(n.a)(Object(n.a)({},e.nose),{},{borderColor:t.payload.value})});case y.nose.width:return Object(n.a)(Object(n.a)({},e),{},{nose:Object(n.a)(Object(n.a)({},e.nose),{},{width:t.payload.value})});case y.nose.height:return Object(n.a)(Object(n.a)({},e),{},{nose:Object(n.a)(Object(n.a)({},e.nose),{},{height:t.payload.value})});case y.mouth.color:return Object(n.a)(Object(n.a)({},e),{},{mouth:Object(n.a)(Object(n.a)({},e.mouth),{},{backgroundColor:t.payload.value})});case y.mouth.width:return Object(n.a)(Object(n.a)({},e),{},{mouth:Object(n.a)(Object(n.a)({},e.mouth),{},{width:t.payload.value})});case y.mouth.height:return Object(n.a)(Object(n.a)({},e),{},{mouth:Object(n.a)(Object(n.a)({},e.mouth),{},{height:t.payload.value})});case y.ears.color:return Object(n.a)(Object(n.a)({},e),{},{ears:Object(n.a)(Object(n.a)({},e.ears),{},{backgroundColor:t.payload.value})});case y.ears.width:return Object(n.a)(Object(n.a)({},e),{},{ears:Object(n.a)(Object(n.a)({},e.ears),{},{width:t.payload.value})});case y.ears.height:return Object(n.a)(Object(n.a)({},e),{},{ears:Object(n.a)(Object(n.a)({},e.ears),{},{height:t.payload.value})});default:return e}}var p=function(){var e=Object(c.useReducer)(x,{hair:{},head:{},brows:{},eyes:{},ears:{},nose:{},mouth:{}}),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){console.log(a)}),[a]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{face:a}),Object(j.jsx)(l,{dispatch:s,ACTIONS:y})]})};h.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.07eeab1e.chunk.js.map