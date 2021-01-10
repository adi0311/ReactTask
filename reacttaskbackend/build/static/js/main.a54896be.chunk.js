(this.webpackJsonpreacttask=this.webpackJsonpreacttask||[]).push([[0],{149:function(t,e,a){},152:function(t,e,a){},153:function(t,e,a){},154:function(t,e,a){},155:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(0),r=a.n(s),c=a(39),i=a.n(c),o=(a(149),a(4)),l=a.n(o),u=a(16),d=a(6),p=a(8),h=a(11),b=a(10),f=a(3),g=new function t(){Object(d.a)(this,t),Object(f.g)(this,{loading:!0,isLoggedIn:!1,username:""})},v=a(40),j=a(9),m=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"inputField",children:Object(n.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.type,value:this.props.value,onChange:function(e){return t.props.onChange(e.target.value)}})})}}]),a}(r.a.Component),x=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"submitButton",children:Object(n.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return t.props.onClick()},children:this.props.text})})}}]),a}(r.a.Component),y=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={username:"",password:"",buttonDisabled:!1},n}return Object(p.a)(a,[{key:"setInputValue",value:function(t,e){(e=e.trim()).length>12||this.setState(Object(j.a)({},t,e))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.username){t.next=2;break}return t.abrupt("return");case 2:if(this.state.password){t.next=4;break}return t.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),t.prev=5,t.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return e=t.sent,t.next=11,e.json();case 11:(a=t.sent)&&a.success?(g.isLoggedIn=!0,g.username=a.username):a&&0==a.success&&(this.resetForm(),alert(a.msg)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0),this.resetForm();case 19:case"end":return t.stop()}}),t,this,[[5,15]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"loginForm",children:["Login Form",Object(n.jsx)(m,{type:"username",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(e){return t.setInputValue("username",e)}}),Object(n.jsx)(m,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(e){return t.setInputValue("password",e)}}),Object(n.jsx)(x,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return t.doLogin()}})]})}}]),a}(r.a.Component),O=a(7),k=a(41),_=a(2),w=a(5),C=a.n(w);var S=function(t){var e=t.margin,a=t.width,n=t.height,s=(t.drawXAxis,t.drawYAxis,t.drawXGridlines),r=t.drawYGridlines,c=t.xLabel,i=t.yLabel,o=t.axisClass,l=t.gridClass,u=(t.data,t.svgRef),d=t.xScale,p=t.yScale,h=_.k(u.current).select("g");r&&h.append("g").attr("class",C()(["base__gridlines gridlines__y",l])).attr("transform","translate(0,".concat(n,")")).call(_.b(d).tickSize(-n).tickFormat("")),s&&h.append("g").attr("class",C()(["base__gridlines gridlines__x",l])).call(_.c(p).tickSize(-a).tickFormat("")),h.append("g").attr("class",C()(["base__axis axis__x",o])).attr("transform","translate(0,".concat(n,")")).call(_.b(d)),h.append("g").attr("class",C()(["base__axis axis__y",o])).call(_.c(p)),c&&h.append("text").attr("class","base__axis-label axis__x-label").attr("text-anchor","middle").attr("x",a/2).attr("y",n+e.top/2).text(c),i&&h.append("text").attr("class","base__axis-label axis__y-label").attr("text-anchor","middle").attr("x",-n/2).attr("y",-e.left/2).attr("transform","rotate(-90)").text(i)};var L=function(t){var e=t.useScaleBands,a=t.margin,n=t.width,s=t.height,r=t.data,c=t.svgRef,i=t.tooltipRef,o=t.markerClass,l=t.xScale,u=t.yScale,d=t.findHoverData,p=_.k(c.current).select("g"),h=_.k(i.current),b=p.append("g").attr("class","focus").style("display","none");b.append("circle").attr("r",5).attr("class",C()(["line-chart__circle",o])),e&&b.style("visibility","hidden"),p.append("rect").attr("class","overlay").attr("width",n).attr("height",s).style("opacity",0).on("mouseover",(function(){b.style("display",null)})).on("mouseout",(function(){b.style("opacity",0),h.transition().duration(300).style("opacity",0)})).on("mousemove",(function(){var t=_.d((function(t){return t.label})).left,n=_.h(this)[0],c=e?function(t,e){var a=t.step(),n=Math.floor(e/a);return t.domain()[n]}(l,n):l.invert(n),i=t(r,c),o=d?d(_.h(this),s,r,l,u):r[i];b.style("opacity",1),b.attr("transform","translate(".concat(l(o.label),",").concat(u(o.value),")")),h.transition().duration(300).style("opacity",.9),h.html(o.tooltipContent||o.label).style("transform","translate(-50%,-100%)").style("left","".concat(l(o.label)+a.left,"px")).style("top","".concat(u(o.value)+a.top-10,"px"))}))},N=(a(152),function(t,e){function a(a){var c=r.a.createRef(),i=r.a.createRef(),o=a.axisProps,l=a.data,u=a.svgProps,d=a.tooltipClass,p=a.scaleBandPadding,h=Object(k.a)(a,["axisProps","data","svgProps","tooltipClass","scaleBandPadding"]),b=e.useScaleBands,f=e.findHoverData,g=u.margin,v=u.width,j=u.height,m=u.svgContainerClass,x=(_.g(l,(function(t){return t.value})),_.f(l,(function(t){return t.value}))),y=_.g(l,(function(t){return t.label})),w=_.f(l,(function(t){return t.label})),N=_.j().domain([y,w]).range([0,v]);b.x&&(N=_.i().range([0,v]).domain(l.map((function(t){return t.label}))).padding(p));var I=_.j().range([j,0]).domain([0,x]);return b.y&&(I=_.i().range([j,0]).domain(l.map((function(t){return t.value}))).padding(p)),Object(s.useEffect)((function(){_.k(c.current).selectAll("*").remove(),function(){_.k(c.current).attr("width",v+g.left+g.right).attr("height",j+g.top+g.bottom).append("g").attr("transform","translate(".concat(g.left,",").concat(g.top,")"));S(Object(O.a)(Object(O.a)(Object(O.a)(Object(O.a)({},o),u),e),{},{data:l,svgRef:c,xScale:N,yScale:I})),t(Object(O.a)(Object(O.a)({svgRef:c,data:l,xScale:N,yScale:I},u),h)),L(Object(O.a)(Object(O.a)({useScaleBands:b,svgRef:c,tooltipRef:i,data:l,xScale:N,yScale:I,findHoverData:f},u),h))}()})),Object(n.jsxs)("div",{className:"base__container",children:[Object(n.jsx)("svg",{ref:c,className:C()("base__svg-container",m)}),Object(n.jsx)("div",{className:C()("base__tooltip",d),ref:i})]})}return a.defaultProps={scaleBandPadding:.05},a});a(153);var I=N((function(t){var e=t.svgRef,a=t.data,n=t.xScale,s=t.yScale,r=(t.width,t.height,t.margin,t.areaClass),c=t.strokeWidth,i=_.k(e.current).select("g");_.e().x((function(t){return n(t.label)})).y((function(t){return s(t.value)})),i.append("path").datum(a).attr("stroke-width",c).attr("class",C()(["area-chart__area",r])).attr("d",_.a().x((function(t){return n(t.label)})).y0(s(0)).y1((function(t){return s(t.value)})))})),P=(a(154),function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={data:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,n,s,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:if(!(a=t.sent)||!a.success){t.next=23;break}return g.isLoggedIn=!0,g.username=a.username,"https://api.github.com/repositories/19438/issues",t.next=13,fetch("https://api.github.com/repositories/19438/issues");case 13:return n=t.sent,t.next=16,n.json();case 16:for(s=t.sent,r=[],c=0;c<s.length;c++)r.push({label:s[c].created_at,value:s[c].comments,tooltipContent:"<b>x: </b>".concat(s[c].created_at,"<br><b>y: </b>").concat(s[c].comments)});this.setState({data:r}),g.loading=!1,t.next=25;break;case 23:g.loading=!1,g.isLoggedIn=!1;case 25:t.next=31;break;case 27:t.prev=27,t.t0=t.catch(0),g.loading=!1,g.isLoggedIn=!1;case 31:case"end":return t.stop()}}),t,this,[[0,27]])})));return function(){return t.apply(this,arguments)}}()},{key:"doLogout",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:(a=t.sent)&&a.success&&(g.isLoggedIn=!1,g.username=""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return g.loading?Object(n.jsx)("div",{className:"app",children:Object(n.jsx)("div",{className:"container",children:"Loading, please wait..."})}):g.isLoggedIn?Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(I,{svgProps:{margin:{top:80,bottom:80,left:80,right:80},width:600,height:400},axisProps:{xLabel:"X Axis",yLabel:"Y Axis"},data:this.state.data,strokeWidth:4}),Object(n.jsx)(x,{text:"Logout",disabled:!1,onClick:function(){return t.doLogout()}})]})}):Object(n.jsx)("div",{className:"app",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(y,{})})})}}]),a}(r.a.Component)),F=Object(v.a)(P),R=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,156)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),R()}},[[155,1,2]]]);
//# sourceMappingURL=main.a54896be.chunk.js.map