"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[582],{8582:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r,i,o,c,u,a,s,l,m,d,f,h,p,x,b,j=t(2791),g=t(9434),Z=t(3634),v=t(6916),y=function(n){return n.contacts.contactsList},k=function(n){return n.contacts.isLoading},P=function(n){return n.contacts.error},w=function(n){return n.filter.value},_=(0,v.P1)([y,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),C=t(168),z=t(6444),F=z.ZP.section(r||(r=(0,C.Z)(["\n  padding: ","px 0;\n"])),(function(n){return n.theme.space[3]})),S=z.ZP.h2(i||(i=(0,C.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),q=t(184),I=function(n){var e=n.title,t=n.children;return(0,q.jsxs)(F,{children:[e&&(0,q.jsx)(S,{children:e}),t]})},L=t(9126),N=t(5705),R=z.ZP.div(o||(o=(0,C.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]})),E=z.ZP.label(c||(c=(0,C.Z)(["\n  display: block;\n  font-size: ",";\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[2]})),H=(0,z.ZP)(N.gN)(u||(u=(0,C.Z)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-bottom: ","px;\n  border-radius: ",";\n  outline: 1px solid ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.black})),K=(0,z.ZP)(N.Bc)(a||(a=(0,C.Z)(["\n  font-size: ",";\n  color: red;\n  padding-left: ","px;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space[2]})),M=z.ZP.button(s||(s=(0,C.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  padding: ","px ","px;\n  color: ",";\n  font-weight: 700;\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  transition: background-color 200ms ease-in;\n  span {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: ","px;\n  }\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.secondary})),V=t(2797),A={name:"",number:""},B=V.Ry().shape({name:V.Z_().required(),number:V.Rx().required()}),G=function(){var n=(0,g.I0)(),e=(0,g.v9)(y);return(0,q.jsx)(N.J9,{initialValues:A,validationSchema:B,onSubmit:function(t,r){var i=t.name,o=t.number,c=r.resetForm;if(e.find((function(n){return n.name===i})))alert("".concat(i," is already in contacts"));else if(e.find((function(n){return n.number===o})))alert("Number ".concat(o," already exists"));else{var u={name:i,number:o};n((0,Z.uK)(u)),c()}},children:(0,q.jsxs)(N.l0,{noValidate:!0,children:[(0,q.jsxs)(R,{children:[(0,q.jsx)(E,{htmlFor:"name",children:"Name:"}),(0,q.jsx)(H,{type:"text",name:"name",id:"name",placeholder:"Enter name",required:!0}),(0,q.jsx)(K,{name:"name",component:"p"})]}),(0,q.jsxs)(R,{children:[(0,q.jsx)(E,{htmlFor:"number",children:"Number: "}),(0,q.jsx)(H,{type:"tel",name:"number",id:"number",placeholder:"Enter phone number",required:!0}),(0,q.jsx)(K,{name:"number",component:"p"})]}),(0,q.jsxs)(M,{type:"submit",children:[(0,q.jsx)("span",{children:(0,q.jsx)(L.RYR,{})}),"Add contact"]})]})})},J=z.ZP.li(l||(l=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),Y=z.ZP.p(m||(m=(0,C.Z)(["\n  line-height: 1;\n  overflow: hidden;\n"]))),D=z.ZP.span(d||(d=(0,C.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accent})),O=z.ZP.span(f||(f=(0,C.Z)(["\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[3]})),Q=z.ZP.button(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  padding: ","px ","px;\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 200ms ease-in;\n  :hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.delete})),T=function(){var n=(0,g.I0)(),e=(0,g.v9)(_);return(0,q.jsx)("ul",{children:e.map((function(e){var t=e.name,r=e.number,i=e.id;return(0,q.jsxs)(J,{id:i,children:[(0,q.jsx)(D,{children:(0,q.jsx)(L.HHm,{})}),(0,q.jsxs)(Y,{children:[t,":",(0,q.jsx)(O,{children:r})]}),(0,q.jsx)(Q,{onClick:function(){return n((0,Z.GK)(i))},children:(0,q.jsx)(L.M3_,{})})]},t)}))})},U=z.ZP.div(p||(p=(0,C.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]})),W=z.ZP.label(x||(x=(0,C.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s})),X=z.ZP.input(b||(b=(0,C.Z)(["\n  width: 100%;\n  display: block;\n  border-radius: ",";\n  outline: 1px solid ",";\n"])),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.black})),$=t(4808),nn=function(){var n=(0,g.I0)(),e=(0,g.v9)(w);return(0,q.jsxs)(U,{children:[(0,q.jsx)(W,{htmlFor:"filter",children:"Find contacts:"}),(0,q.jsx)(X,{onChange:function(e){n((0,$.M)(e.target.value))},type:"text",name:"filter",value:e,id:"filter",placeholder:"Search"})]})},en=t(3904),tn=function(){var n=(0,g.I0)(),e=(0,g.v9)(k),t=(0,g.v9)(P);return(0,j.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,q.jsxs)("div",{children:[(0,q.jsx)(I,{title:"Phone-book",children:(0,q.jsx)(G,{})}),(0,q.jsxs)(I,{title:"Contacts",children:[(0,q.jsx)(nn,{}),e&&!t&&(0,q.jsx)(en.Z,{}),!e&&(0,q.jsx)(T,{})]})]})}}}]);
//# sourceMappingURL=582.7c865624.chunk.js.map