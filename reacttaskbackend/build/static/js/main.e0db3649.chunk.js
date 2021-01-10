(this.webpackJsonpreacttask=this.webpackJsonpreacttask||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(19),n(7)),u=n.n(i),p=n(8),l=n(3),d=n(4),h=n(6),j=n(5),b=n(2),g=new function e(){Object(l.a)(this,e),Object(b.g)(this,{loading:!0,isLoggedIn:!1,username:""})},m=n(13),v=n(12),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"inputField",children:Object(s.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.type,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),n}(r.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"submitButton",children:Object(s.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()},children:this.props.text})})}}]),n}(r.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},s}return Object(d.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(v.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(g.isLoggedIn=!0,g.username=n.username):n&&0==n.success&&(this.resetForm(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"loginForm",children:["Login Form",Object(s.jsx)(f,{type:"username",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(s.jsx)(f,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(s.jsx)(O,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),n}(r.a.Component),y=(n(22),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(g.loading=!1,g.isLoggedIn=!0,g.username=n.username):(g.loading=!1,g.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),g.loading=!1,g.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(g.isLoggedIn=!1,g.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return g.loading?Object(s.jsx)("div",{className:"app",children:Object(s.jsx)("div",{className:"container",children:"Loading, please wait..."})}):g.isLoggedIn?Object(s.jsx)("div",{className:"app",children:Object(s.jsxs)("div",{className:"container",children:["Hello, ",g.username,Object(s.jsx)(O,{text:"Logout",disabled:!1,onClick:function(){return e.doLogout()}})]})}):Object(s.jsx)("div",{className:"app",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(x,{})})})}}]),n}(r.a.Component)),k=Object(m.a)(y),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.e0db3649.chunk.js.map