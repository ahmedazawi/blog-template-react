(this["webpackJsonpblog-site-react"]=this["webpackJsonpblog-site-react"]||[]).push([[4],{121:function(e,t,s){"use strict";s.r(t);var r=s(118),a=s.n(r),i=s(120),c=s(2),l=s(8),n=s(0),o=s(110),d=s(112),b=s(87),u=s(122),h=s(111),j=s(45),m=s(1);t.default=function(e){var t=Object(n.useState)({touched:!1,isValid:!1,errMsg:""}),s=Object(l.a)(t,2),r=s[0],g=s[1],p=Object(n.useState)({touched:!1,isValid:!1,errMsg:""}),x=Object(l.a)(p,2),O=x[0],V=x[1],f=Object(n.useState)(!1),M=Object(l.a)(f,2),v=M[0],w=M[1],y=function(){var t=Object(i.a)(a.a.mark((function t(s){var i,c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),i=s.target.title.value,c=s.target.body.value,w(!0),!r||!O){t.next=10;break}return t.next=7,N({title:i,body:c});case 7:l=t.sent,console.log(l),l&&e.history.replace("/blog");case 10:w(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(e){return new Promise((function(t,s){setTimeout((function(){t(e)}),2e3)}))};return Object(m.jsx)(o.a,{children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(b.a,{md:6,lg:4,className:"mx-auto card my-5 bg-secondary pt-4 shadow-sm",children:[Object(m.jsx)("h1",{className:"text-center mb-3",children:"Add Post"}),Object(m.jsxs)(u.a,{onSubmit:y,children:[Object(m.jsxs)(u.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(m.jsx)(u.a.Label,{children:"Post Title"}),Object(m.jsx)(u.a.Control,{type:"text",placeholder:"Post Title",name:"title",onChange:function(e){var t=e.target.value.trim(),s=Object(c.a)({},r);s.touched=!0,t.length<=0?(s.isValid=!1,s.errMsg="Title is Required"):t.split(" ").length<3?(s.isValid=!1,s.errMsg="Title must be more than 3 words"):t.split(" ").length>10?(s.isValid=!1,s.errMsg="Title must be less than 10 words"):(s.isValid=!0,s.errMsg=""),g(Object(c.a)({},s))},className:r.isValid&&r.touched?"border-success border-2":!r.isValid&&r.touched?"border-danger border-2":""}),r.errMsg?Object(m.jsx)("small",{className:"text-danger p-1",children:r.errMsg}):""]}),Object(m.jsxs)(u.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(m.jsx)(u.a.Label,{children:"Post Description"}),Object(m.jsx)(u.a.Control,{as:"textarea",name:"body",placeholder:"Add a description to your post",rows:3,onChange:function(e){var t=e.target.value.trim(),s=Object(c.a)({},O);s.touched=!0,t.length<=0?(s.isValid=!1,s.errMsg="Description is Required"):t.split(" ").length<10?(s.isValid=!1,s.errMsg="Description must be more than 10 words"):t.split(" ").length>50?(s.isValid=!1,s.errMsg="Description must be less than 50 words"):(s.isValid=!0,s.errMsg=""),V(Object(c.a)({},s))},className:O.isValid&&O.touched?"border-success border-2":!O.isValid&&O.touched?"border-danger border-2":""}),O.errMsg?Object(m.jsx)("small",{className:"text-danger p-1",children:O.errMsg}):""]}),Object(m.jsx)(h.a,{variant:"primary",type:"submit",className:"w-100 mb-3",disabled:!r.isValid||!O.isValid,children:v?Object(m.jsx)(j.a,{}):"Add New Post"})]})]})})})}}}]);
//# sourceMappingURL=4.fac7e813.chunk.js.map