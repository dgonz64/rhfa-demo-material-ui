(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3iOw":function(){},QfWi:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(0<=t.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(){return(o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(t);var c={};n.r(c),n.d(c,"CHANGE",(function(){return h})),n.d(c,"FIX",(function(){return p})),n.d(c,"CHANGE_CONFIG",(function(){return b})),n.d(c,"change",(function(){return y})),n.d(c,"fix",(function(){return g})),n.d(c,"initial",(function(){return E})),n.d(c,"reducer",(function(){return v})),n.d(c,"mapActions",(function(){return w}));var l=n("mXGw"),u=n.n(l),d=n("xARA"),m=(n("8X2e"),n("lWdj")),s=n.n(m),f=n("IPTR"),h=(n("gJJm"),n("aLDS"),n("KJ9C"),"CHANGE"),p="FIX",b="CHANGE_CONFIG",y=function(e){return{type:h,code:e}},g=function(e){return{type:p,config:e}},O="const pet = createSchema('pet', {\n  name: {\n    type: String,\n    required: true,\n    maxLength: 8\n  },\n  heads: {\n    type: Number\n  },\n  hair: {\n    type: 'select',\n    options: ['blue', 'yellow']\n  },\n});\n\nreturn createSchema('owner', {\n  name: {\n    type: 'string',\n    required: true,\n  },\n  height: {\n    type: 'radios',\n    options: ['tall', 'short']\n  },\n  usesHat: {\n    type: 'boolean'\n  },\n  pets: {\n    type: [pet],\n    minChildren: 1\n  }\n});",E={code:O,edit:O,config:{arrayMode:"panel"}},v=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:E,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{edit:t.code});case p:return Object.assign({},e,{code:e.edit,config:t.config});default:return e}},w=function(e){return{changeCode:function(t){e(y(t))},fix:function(t){e(g(t))}}},j=n("8liF"),S=(n("8Jek"),n("jZOI")),x=function(e){var t=e.type,n=e.text,o=e.children,i=a(e,["type","text","children"]),c="submit"==t?{color:"primary"}:{};return u.a.createElement(S.Button,r({type:t},c,i),n,o)},k={inputBlockWrap:"form-group",label:"",input:"form-control",standard:"",errored:"is-invalid",inlineWrap:"form-group",itemHeader:"",button:"btn btn-primary",checkboxWrap:"form-check",radioGroupWrap:"",radioWrap:"form-check",checkboxLabel:"form-check-label",radioLabel:"form-check-label",radio:"form-check-input",checkbox:"form-check-input",error:"invalid-feedback",errorIcon:"",select:"form-control",table:"table",panel:"card",title:"card-header",content:"card-body",contentMargin:""},C=function(e,t){return u.a.createElement(j.Autoform,o({styles:k},e,{ref:t}))};C=Object(l.forwardRef)(C),Object(j.addTranslations)({models:{owner:{name:"Owner's name",height:{_field:"Height",tall:"Tall",short:"Short"},usesHat:"Wears hat",pets:"Owned pets"},pet:{name:"Pet's name",heads:"Number of heads",type:{_field:"Kind",dog:"Dog",cat:"Cat"},hair:{_field:"Hair color",_default:"Select hair color...",blue:"Blue",yellow:"Yellow"}}},add:"Add",notall:"Only short people are allowed to have pets",submit:"Submit"});var A=function(e){var t,n=e.code,r=e.config,a=(e.onSubmit,Object(l.useRef)());try{return t=Function("createSchema","translatable",n)(j.createSchema,j.translatable),u.a.createElement(u.a.Fragment,null,u.a.createElement(C,{schema:t,form:"demo",destroyOnUnmount:!1,config:r,ref:a,onSubmit:function(e){f.NotificationManager.success(u.a.createElement("pre",null,JSON.stringify(e,null,"\t")),"Form data",1e4)}}),u.a.createElement(x,{text:Object(j.tr)("submit"),onClick:function(){a.current.submit()}}))}catch(e){return u.a.createElement("pre",null,e.toString())}};Object(j.addTranslations)({models:{config:{arrayMode:{_:"Array mode",table:"Table",panel:"Panels"}}}});var G=Object(j.createSchema)("config",{arrayMode:{type:"radios",options:["table","panel"]}}),N=function(e){var t=e.onSubmit,n=e.config,r=e.children;return u.a.createElement(C,{schema:G,onSubmit:t,config:n,initialValues:n},r)},M=function(e){var t=e.arrayMode;e.schema;return"<Autoform\n  schema={schema}\n  config={{ arrayMode: '".concat(void 0!==t&&t,"' }}\n/>")},F=function(e){var t=e.header,n=e.children;return u.a.createElement(S.Card,null,u.a.createElement(S.CardContent,null,u.a.createElement(S.Typography,{color:"textSecondary",gutterBottom:!0},t),u.a.createElement(S.Typography,{variant:"body2",component:"p"},n)))},W=n("7xQW"),I=(n("c+X+"),n("3iOw"),"90%"),T=Object(W.makeStyles)((function(e){return{root:{flexGrow:1,"& .MuiTextField-root":{width:I},"& .MuiSlider-root":{width:I},"& .MuiCard-root":{maxWidth:I}},paper:{height:140,width:100},control:{padding:e.spacing(2)}}})),H=function(e,t){e(t)};Object(j.setLanguageByName)("en"),Object(d.render)(u.a.createElement((function(){var e=Object(l.useRef)(null),t=T(),n=i(Object(l.useReducer)(c.reducer,c.initial),2),r=n[0],a=r.code,o=r.edit,d=r.config,m=n[1],h=c.mapActions(m);return Object(l.useEffect)((function(){var t=e.current.editor;t.setOptions({readOnly:!0,highlightActiveLine:!1,highlightGutterLine:!1}),t.renderer.$cursorLayer.element.style.display="none"})),u.a.createElement(S.Grid,{container:!0,className:t.root,spacing:1},u.a.createElement(S.Grid,{item:!0,xs:12},u.a.createElement("h3",null,u.a.createElement("a",{href:"https://github.com/dgonz64/react-hook-form-auto"},"react-hook-form-auto demo with Bootstrap 4"))),u.a.createElement(S.Grid,{item:!0,xs:6},u.a.createElement(F,{header:"Schema (edit and see the results in real time)",noMargin:!0},u.a.createElement(s.a,{mode:"javascript",theme:"github",onChange:H.bind(null,h.changeCode),value:o,width:"100%",name:"editor"}),u.a.createElement("p",null,u.a.createElement("small",null,"Editor thanks to"," ",u.a.createElement("a",{href:"https://github.com/securingsincity/react-ace"},"React-Ace"))))),u.a.createElement(S.Grid,{item:!0,xs:6},u.a.createElement(F,{header:"Form parameters"},u.a.createElement(N,{onSubmit:function(e){h.fix(e)},config:d},u.a.createElement("div",null,u.a.createElement(x,{type:"submit"},"Update")))),u.a.createElement(F,{header:"Form element",noMargin:!0},u.a.createElement(s.a,{mode:"jsx",theme:"github",value:M(d),name:"sample",maxLines:5,readOnly:!0,ref:e})),u.a.createElement(F,{header:"Generated form",borderType:"primary"},u.a.createElement(A,{code:a,config:d}))),u.a.createElement(f.NotificationContainer,null))}),null),document.getElementById("root"))}},[["QfWi",1,2]]]);