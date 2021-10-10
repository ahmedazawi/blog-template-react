(this["webpackJsonpblog-site-react"]=this["webpackJsonpblog-site-react"]||[]).push([[0],{104:function(e,t,s){},105:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(21),o=s.n(a),l=s(2),r=s(17),i=s(18),j=s(29),d=s(28),b=s(32),h=s(7),O=s(114),x=s(107),p=s(113),u=s(1),m=function(){return Object(u.jsx)(O.a,{className:"p-2",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a.Brand,{href:"/",children:"Blog"}),Object(u.jsx)(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(O.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsx)(p.a,{className:"me-auto"}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(b.c,{className:"nav-link",exact:!0,to:"/",children:"Home"}),Object(u.jsx)(b.c,{className:"nav-link",to:{pathname:"/blog",hash:"1"},children:"Blog"}),Object(u.jsx)(b.c,{className:"nav-link",to:"/posts/add-post",children:"Add Post"})]})]})]})})},f=function(){return Object(u.jsx)("div",{className:"head",children:Object(u.jsx)("h1",{className:"display-2 text-light",children:"Hello React"})})},v=s(115),y=s(108),g=s.p+"static/media/1.3c33a0b4.jpeg",M=function(e){return Object(u.jsxs)(v.a,{style:{width:"18rem"},className:"mb-4",children:[Object(u.jsx)(v.a.Img,{variant:"top",src:g}),Object(u.jsxs)(v.a.Body,{children:[Object(u.jsx)(v.a.Title,{children:e.post.title}),Object(u.jsx)(v.a.Text,{children:e.post.body}),Object(u.jsx)(y.a,{onClick:function(){return e.openModal(e.post.id,e.post.title,e.post.body)},variant:"primary",children:"Show Post"})]})]})},N=s(109),k=s(110),w=function(){return Object(u.jsx)(N.a,{lg:12,className:"spinner",children:Object(u.jsx)(k.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},S=s(70),B=s.n(S),C=s(111),P=s(112),F=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={posts:[],showModal:!1,titleModal:null,bodyModal:null,idModal:null},e.renderPosts=function(){return e.state.posts.length>0?e.state.posts.map((function(t){return Object(u.jsx)(N.a,{className:"d-flex justify-content-center",md:6,lg:4,children:Object(u.jsx)(M,{post:t,openModal:e.openModal})},t.id)})):Object(u.jsx)(w,{})},e.openModal=function(t,s,n){e.showModal(),e.setState({idModal:t}),e.setState({titleModal:s}),e.setState({bodyModal:n})},e.closeModal=function(){e.setState({showModal:!1})},e.showModal=function(){e.setState({showModal:!0})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e.setState({posts:t.data})}))}},{key:"render",value:function(){return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(C.a,{children:Object(u.jsx)(N.a,{lg:12,children:Object(u.jsx)("h1",{className:"d-flex justify-content-center border-bottom pb-3 mb-4",children:"Posts"})})}),Object(u.jsx)(C.a,{children:this.renderPosts()}),Object(u.jsxs)(P.a,{show:this.state.showModal,size:"lg","aria-labelledby":"contained-modal-title-vcenter",onHide:this.closeModal,centered:!0,children:[Object(u.jsx)(P.a.Header,{closeButton:!0,children:Object(u.jsx)(P.a.Title,{id:"contained-modal-title-vcenter",children:Object(u.jsx)("h4",{children:this.state.titleModal})})}),Object(u.jsx)(P.a.Body,{children:Object(u.jsx)("p",{children:this.state.bodyModal})}),Object(u.jsxs)(P.a.Footer,{children:[Object(u.jsx)(b.b,{className:"btn btn-primary",to:{pathname:"/posts/"+this.state.idModal,state:this.state},children:"Show"}),Object(u.jsx)(y.a,{onClick:this.closeModal,children:"Close"})]})]})]})}}]),s}(n.Component),H=Object(h.g)(F),A=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(H,{})]})},T=function(){return Object(u.jsx)("div",{className:"home-head",children:Object(u.jsx)("h1",{className:"display-2 text-light",children:"Welcome"})})},R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(T,{})]})},z=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.props.history.replace("/404")}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"d-flex justify-content-center",children:"Page Not Found"})})}}]),s}(n.Component),D=z,I=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(C.a,{children:Object(u.jsx)(N.a,{className:"d-flex justify-content-center p-4",lg:12,children:e.post.bodyModal})})})})},J=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"single-post-title",children:Object(u.jsx)("h1",{className:"display-2 text-light",children:e.location.state.titleModal?e.location.state.titleModal:"Hello React"})}),Object(u.jsx)(I,{post:e.location.state})]})},E=function(){return Object(u.jsx)("footer",{className:"bg-dark p-1 d-flex justify-content-center",children:Object(u.jsx)("h4",{className:"lead ",children:"Rect Blog 2021"})})},L=(s(104),c.a.lazy((function(){return s.e(3).then(s.bind(null,116))}))),W=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={auth:!0},e}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(b.a,{basename:"/app",children:[Object(u.jsx)(m,{}),Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{path:"/",exact:!0,component:R}),Object(u.jsx)(h.b,{path:"/blog",component:A}),!0===this.state.auth?Object(u.jsx)(h.b,{path:"/posts/add-post",render:function(e){return Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)(w,{}),children:Object(u.jsx)(L,Object(l.a)({},e))})}}):Object(u.jsx)(h.a,{from:"/posts/add-post",to:"/"}),Object(u.jsx)(h.b,{path:"/posts/:id",component:J}),Object(u.jsx)(h.a,{from:"/home",to:"/"}),Object(u.jsx)(h.b,{component:D})]}),Object(u.jsx)(E,{})]})})}}]),s}(n.Component),q=W;o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.821e4ef8.chunk.js.map