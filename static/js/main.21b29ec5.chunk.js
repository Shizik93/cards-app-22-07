(this["webpackJsonpcards-app-10-12"]=this["webpackJsonpcards-app-10-12"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports={superInput:"SuperInputText_superInput__WuyFe",input:"SuperInputText_input__1XNDN",errorInput:"SuperInputText_errorInput__2h4-F",error:"SuperInputText_error__2Ii1S"}},,function(e,n,t){e.exports={default:"SuperButton_default__1Oj1f",red:"SuperButton_red__17evz"}},function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__1wekg",spanClassName:"SuperCheckbox_spanClassName__309sz"}},function(e,n,t){e.exports={double:"SuperDoubleRange_double__j_YjA",wrapper:"SuperDoubleRange_wrapper__jJdK4"}},,function(e,n,t){},function(e,n,t){e.exports={test:"test_test__3Z_re"}},,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(14),s=t.n(r),o=(t(21),t(22),t(4)),j=t(3),u=t(9),l=t.n(u),i=t(0),b=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=(e.className,e.spanClassName),u=Object(j.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),b="".concat(l.a.error," ").concat(s||""),p="".concat(r?l.a.errorInput:l.a.superInput);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",Object(o.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:p},u)),r&&Object(i.jsx)("span",{style:{borderRadius:"48px"},className:b,children:r})]})},p=t(11),h=t.n(p),O=function(e){var n=e.red,t=e.className,a=Object(j.a)(e,["red","className"]),c="".concat(n?h.a.red:h.a.default," ").concat(t);return Object(i.jsx)("button",Object(o.a)({className:c},a))},x=t(12),d=t.n(x),g=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(j.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(d.a.checkbox," ").concat(a||"");return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",Object(o.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:s},r)),c&&Object(i.jsx)("span",{className:d.a.spanClassName,children:c})]})},C=t(7),f=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,r=Object(j.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),u=Object(C.a)(s,2),l=u[0],p=u[1],h=c||{},O=h.children,x=h.onDoubleClick,d=h.className,g=Object(j.a)(h,["children","onDoubleClick","className"]),f=" ".concat(d);return Object(i.jsx)(i.Fragment,{children:l?Object(i.jsx)(b,Object(o.a)({autoFocus:!0,onBlur:function(e){p(!1),n&&n(e)},onEnter:function(){p(!1),t&&t()}},r)):Object(i.jsx)("span",Object(o.a)(Object(o.a)({onDoubleClick:function(e){p(!0),x&&x(e)},className:f},g),{},{children:O||r.value}))})},m=function(e){var n=e.options,t=e.onChange,a=e.onChangeOption,c=Object(j.a)(e,["options","onChange","onChangeOption"]),r=n?n.map((function(e,n){return Object(i.jsx)("option",{value:e,children:e},n+"-"+e)})):[];return Object(i.jsx)("select",Object(o.a)(Object(o.a)({onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},v=function(e){e.type;var n=e.name,t=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(j.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),o=t?t.map((function(e,t){return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{onChange:s,type:"radio",name:n,checked:e===a,value:e}),e]},n+"-"+t)})):[];return Object(i.jsx)(i.Fragment,{children:o})},_=t(15),N=t.n(_),y=function(e){e.type;var n=e.onChange,t=e.onChangeRange,a=e.className,c=Object(j.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(N.a.range," ").concat(a||"");return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("input",Object(o.a)({value:c.value,type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:r},c))})},R=t(13),k=t.n(R),w=function(e){return Object(i.jsxs)("div",{className:k.a.wrapper,children:[Object(i.jsx)(y,{value:e.value&&e.value[0],onChangeRange:function(n){e.onChangeRange&&e.value&&(e.value[0]<=e.value[1]-5?e.onChangeRange([n,e.value[1]]):n<=95?e.onChangeRange([n,n+5]):e.onChangeRange([n,e.value[1]]))}}),Object(i.jsx)(y,{className:k.a.double,value:e.value&&e.value[1],onChangeRange:function(n){e.onChangeRange&&e.value&&(e.value[0]<=e.value[1]-5?e.onChangeRange([e.value[0],n]):n>=5?e.onChangeRange([n-5,n]):e.onChangeRange([0,n]))}})]})},S=t(16),T=t.n(S),F=function(){return Object(i.jsxs)("div",{className:T.a.test,children:[Object(i.jsx)(b,{}),Object(i.jsx)(O,{children:"+"}),Object(i.jsx)(g,{}),Object(i.jsx)(f,{}),Object(i.jsx)(m,{}),Object(i.jsx)(v,{}),Object(i.jsx)(y,{}),Object(i.jsx)(w,{})]})},I=t(2),P=function(){return Object(i.jsx)("div",{children:"Error 404"})},E=t(6),B="error404",D="login",K="new-password",L="profile",J="registration",z="restore-password",A="test",M=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(E.b,{to:D,children:"Login "}),Object(i.jsx)(E.b,{to:K,children:"New-Password "}),Object(i.jsx)(E.b,{to:L,children:"Profile "}),Object(i.jsx)(E.b,{to:J,children:"Registration "}),Object(i.jsx)(E.b,{to:z,children:" Restore-Password "}),Object(i.jsx)(E.b,{to:A,children:"Test "}),Object(i.jsx)(E.b,{to:B,children:"Error "})]})},W=function(){return Object(i.jsx)("div",{children:"Login"})},X=function(){return Object(i.jsx)("div",{children:"NewPassword"})},Y=function(){return Object(i.jsx)("div",{children:"Profile"})},Z=function(){return Object(i.jsx)("div",{children:"Registration"})},q=function(){return Object(i.jsx)("div",{children:"Restore Password"})};var G=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(M,{}),Object(i.jsxs)(I.c,{children:[Object(i.jsx)(I.a,{element:Object(i.jsx)(P,{}),path:B}),Object(i.jsx)(I.a,{element:Object(i.jsx)(W,{}),path:D}),Object(i.jsx)(I.a,{element:Object(i.jsx)(X,{}),path:K}),Object(i.jsx)(I.a,{element:Object(i.jsx)(Y,{}),path:L}),Object(i.jsx)(I.a,{element:Object(i.jsx)(Z,{}),path:J}),Object(i.jsx)(I.a,{element:Object(i.jsx)(q,{}),path:z}),Object(i.jsx)(I.a,{element:Object(i.jsx)(F,{}),path:A}),Object(i.jsx)(I.a,{element:Object(i.jsx)(P,{}),path:"*"})]})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(E.a,{children:Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(G,{})})}),document.getElementById("root")),H()}],[[24,1,2]]]);
//# sourceMappingURL=main.21b29ec5.chunk.js.map