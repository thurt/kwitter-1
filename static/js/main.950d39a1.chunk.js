(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){},178:function(e,t,n){e.exports=n.p+"static/media/stockIcon.b531e899.gif"},191:function(e,t,n){e.exports=n(361)},196:function(e,t,n){},211:function(e,t,n){},213:function(e,t,n){},217:function(e,t,n){},340:function(e,t,n){},343:function(e,t,n){},345:function(e,t,n){},347:function(e,t,n){},349:function(e,t,n){},351:function(e,t,n){},353:function(e,t,n){},355:function(e,t,n){},357:function(e,t,n){},359:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(66),c=n.n(s),o=(n(196),n(45)),u=n(11),l=n(15),i=n(13),m=n(12),d=n(14),p=(n(211),n(370)),h=n(371),f=(n(213),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"kwitterIcon"}),r.a.createElement("h1",null,"KWITTER"))}}]),t}(r.a.Component)),E=n(20),g=n(116),b=n.n(g),O=n(161),j="https://rocky-lake-69947.herokuapp.com",y=function(e){return function(t){return t({type:"LOGIN"}),fetch("".concat(j,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(e){if(!0!==e.success)throw"nope.";t({type:"LOGIN_SUCCESS",loginData:e}),t(C())}).catch(function(e){throw t({type:"LOGIN_FAILURE",loginResult:"You shall not pass!"})})}},S=function(){return function(e){fetch("".concat(j,"/messages?limit=10")).then(function(e){return e.json()}).then(function(t){e(v(t.messages))})}},v=function(e){return{type:"GET_MESSAGES",messages:e}},w=function(e){return{type:"GET_USER_MESSAGES",messages:e}},N=function(e){return{type:"GET_USER_SUCCESS",user:e}},C=function(){return function(e){fetch("".concat(j,"/users?limit=10000&offset=0")).then(function(e){return e.json()}).then(function(t){e(U(t.users))})}},U=function(e){return{type:"GET_ALL_USERS",users:e}},R=function(){return{type:"LOGOUT_USER"}},k=n(369),_=n(375),D=n(372),T=n(376),A=(n(217),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleCheckUserName=function(e){n.setState({username:e.target.value})},n.handleCheckPassword=function(e){n.setState({password:e.target.value})},n.handleLogin=function(e){n.props.login({username:n.state.username,password:n.state.password})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,null,r.a.createElement(D.a,{action:"https://s.codepen.io/voltron2112/debug/PqrEPM?",method:"get",className:"ui large form"},r.a.createElement(T.a,null,r.a.createElement("div",{className:"ui stacked secondary segment"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"user icon"}),r.a.createElement("input",{type:"text",onChange:this.handleCheckUserName,required:!0,placeholder:"Enter Username"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",onChange:this.handleCheckPassword,required:!0,placeholder:"Enter Password"}))),r.a.createElement("div",{className:"ui fluid large teal submit button",onClick:this.handleLogin},"Login")),r.a.createElement(k.a,{to:"/registration"},r.a.createElement("div",{className:"ui message"},"New To Us? Register")))))}}]),t}(a.Component)),I=Object(E.connect)(function(e){return{result:e.LoginResult}},function(e){return{login:function(t){return e(function(e){return function(t){t(y(e)).then(function(){return t(Object(o.push)("/mainFeed"))}).catch(function(){return window.alert("GET OUT RIGHT NOW!!!!  Bad password or username.")})}}(t))}}})(A),L=(n(340),n(374)),P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",displayName:""},n.handleChangeUsername=function(e){n.setState({username:e.target.value})},n.handleChangePassword=function(e){n.setState({password:e.target.value})},n.handleChangeDisplayName=function(e){n.setState({displayName:e.target.value})},n.handleRegister=function(e){n.props.register({username:n.state.username,password:n.state.password,displayName:n.state.displayName})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"entireform"},r.a.createElement(_.a,{className:"grid"},r.a.createElement(D.a,{className:"somethingGood"},r.a.createElement(T.a,{stacked:!0},r.a.createElement(D.a.Field,null,r.a.createElement("input",{type:"text",onChange:this.handleChangeUsername,required:!0,placeholder:"Username"})),r.a.createElement("br",null),r.a.createElement(D.a.Field,null,r.a.createElement("input",{type:"password",onChange:this.handleChangePassword,required:!0,placeholder:"Password"})),r.a.createElement("br",null),r.a.createElement(D.a.Field,null,r.a.createElement("input",{type:"text",onChange:this.handleChangeDisplayName,required:!0,placeholder:"Display Name"})),r.a.createElement(L.a,{onClick:this.handleRegister,name:"register",placeholder:"Register"},"Register")))))}}]),t}(a.Component),F=Object(E.connect)(function(e){return{result:e.registerResult}},function(e){return{register:function(t){return e(function(e){return function(t){t({type:"REGISTER"}),fetch("".concat(j,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(n){function a(){return(a=Object(O.a)(b.a.mark(function n(){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(y({username:e.username,password:e.password})).then(function(){return t(Object(o.push)("/userProfile"))});case 2:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}t({type:"REGISTER_SUCCESS",register:n,result:"Successfully Registered!"}),function(){a.apply(this,arguments)}()}).catch(function(e){t({type:"REGISTER_FAIL",result:"Failed to Register!"})})}}(t))}}})(P),G=(n(156),r.a.Component,function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={message:""},n.handleMessages=function(e){n.setState({message:e.target.value})},n.handlepostMessage=function(e){n.props.postMessage(n.state.message),n.setState({message:""})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"messages"},r.a.createElement("div",{className:"messageFeed"},r.a.createElement("div",null,r.a.createElement("input",{value:this.state.message,placeholder:"Kweet here!",type:"text",onChange:this.handleMessages}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handlepostMessage},"Post Kweet!"),r.a.createElement("br",null))))}}]),t}(r.a.Component)),M=Object(E.connect)(function(e){return{messages:e.messages}},function(e){return{postMessage:function(t){return e((n=t,function(e,t){var a=t().loginData.token;fetch("".concat(j,"/messages/"),{method:"POST",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify({text:n})}).then(function(e){return e.json()}).then(function(t){e(S())})}));var n}}})(G),x=n(114),B=n.n(x),W=(n(343),n(178)),q=n.n(W),J=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={src:q.a},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://kwitter-api.herokuapp.com/users/".concat(this.props.userID,"/picture")).then(function(t){404!==t.status&&t.ok&&e.setState({src:"https://kwitter-api.herokuapp.com/users/".concat(e.props.userID,"/picture")})})}},{key:"render",value:function(){return r.a.createElement("img",{className:"image",src:this.state.src})}}]),t}(r.a.Component),H=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).matchIdtoUsername=function(e){var t=n.props.users.find(function(t){return t.id===e});return t?t.username:"Deleted"},n.formatDate=function(e){var t=new Date(e);return t.toLocaleDateString()+" at "+t.toLocaleTimeString()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMessages()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"messages"},r.a.createElement("div",{className:"messageFeed"},this.props.messages.map(function(t){return r.a.createElement("div",null,r.a.createElement(J,{userID:t.userId}),e.matchIdtoUsername(t.userId),": ",r.a.createElement("br",null),t.text," ",r.a.createElement("br",null),e.formatDate(t.createdAt))})))}}]),t}(r.a.Component),z={fetchMessages:S},K=Object(E.connect)(function(e){return{messages:e.messages||[],users:e.users}},z)(H),V=(n(345),n(373)),X=n(33),Q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).matchIdtoUsername=function(e){var t=n.props.user.find(function(t){return t.id===e});return t?t.username:"Deleted"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(V.a,{className:"userprofile"},r.a.createElement(J,{userID:this.props.user.id}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Header,null,"Name: ",this.props.user.displayName),r.a.createElement(V.a.Meta,null,r.a.createElement("span",{className:"date"},"Kweeter since ",B()(this.props.user.createdAt).fromNow())),r.a.createElement(V.a.Description,null,"Hello my name is ",this.props.user.username,' , This is what I have to say about myself: "',this.props.user.about,'""')),r.a.createElement(V.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(X.a,{name:"user"}),"1M Friends"))))}}]),t}(r.a.Component),Y=Object(E.connect)(function(e){return{result:e.registerResult,user:e.user}},function(e){return{getUserData:function(){return e(function(e,t){var n=t().loginData.id;e({type:"GET_USER"}),fetch("".concat(j,"/users/").concat(n)).then(function(e){return e.json()}).then(function(t){e(N(t.user))})})}}})(Q),$={fetchMessages:function(){return function(e,t){var n=t().loginData.id;fetch("".concat(j,"/users/").concat(n)).then(function(e){return e.json()}).then(function(t){e(w(t.user.messages))})}}},Z=Object(E.connect)(function(e){return{messages:e.user.messages||[],users:e.users}},$)(H),ee=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{className:"deleteUserButton",onClick:this.props.deleteUser},"Delete User")}}]),t}(r.a.Component),te=Object(E.connect)(null,function(e){return{deleteUser:function(){return e(function(e,t){var n=t().loginData.token;e({type:"DELETE_USER"}),fetch("".concat(j,"/users"),{method:"DELETE",headers:{Authorization:"Bearer "+n}}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(t){e({type:"DELETE_USER_SUCCESS"}),e(Object(o.push)("/"))}).catch(function(t){e({type:"DELETE_USER_FAILURE",deleteUserResult:"Permission denied"})})})}}})(ee),ne=(n(347),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{to:"/mainFeed"},r.a.createElement(L.a,{className:"mainFeedNavButton",onClick:this.setRedirect},"Main Page"))}}]),t}(r.a.Component)),ae=(n(349),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{className:"logOutButton",onClick:this.props.logoutUser},"Log Out")}}]),t}(r.a.Component)),re={logoutUser:function(){return function(e){e(R()),e(Object(o.push)("/"))}}},se=Object(E.connect)(null,re)(ae),ce=(n(351),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target);n.props.image(t)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"file",name:"picture",id:"picture"}),r.a.createElement("button",{type:"submit",value:"Submit"},"Submit Upload"),this.props.uploadImageResult)}}]),t}(r.a.Component)),oe=Object(E.connect)(function(e){return{uploadImageResult:e.uploadImageResult}},function(e){return{image:function(t){return e(function(e){return function(t,n){var a=n().loginData.token;fetch("".concat(j,"/users/picture"),{method:"PUT",headers:{Authorization:"Bearer "+a},body:e}).then(function(e){if(!e.ok)throw e.status;t({type:"UPLOAD_IMAGE_SUCCESS",uploadImageResult:"Upload Successful!"})}).catch(function(e){t({type:"UPLOAD_IMAGE_FAILURE",uploadImageResult:"Upload image failed.  Please try again later!"})})}}(t))}}})(ce),ue=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",displayName:"",token:""},n.handleChangeUpdatePassword=function(e){n.setState({password:e.target.value})},n.handleChangeUpdateDisplayName=function(e){n.setState({displayName:e.target.value})},n.handleUpdate=function(e){n.props.updateUser({password:n.state.password,displayName:n.state.displayName})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{className:"grid",centered:!0},r.a.createElement(D.a,{className:"form"},r.a.createElement(D.a.Field,{className:"gridcolumn1",width:4},r.a.createElement(_.a.Column,null,r.a.createElement(Y,null),r.a.createElement("div",{className:"uploadphoto"},r.a.createElement(oe,null)))),r.a.createElement(D.a.Field,{className:"gridcolumn2",width:6},r.a.createElement(_.a.Column,null,r.a.createElement("p",null,"Where the feed for Profile goes"),r.a.createElement(Z,null))),r.a.createElement(D.a.Field,{className:"gridcolumn3",width:4},r.a.createElement(_.a.Column,null,r.a.createElement("legend",null,"Making a Change?"),r.a.createElement(T.a,{className:"segment",stacked:!0},r.a.createElement(D.a.Field,null,r.a.createElement("input",{className:"input",type:"text",onChange:this.handleChangeUpdateDisplayName,placeholder:"New Display Name"})),r.a.createElement("br",null),r.a.createElement(D.a.Field,null,"Enter New Password:",r.a.createElement("br",null),r.a.createElement("input",{className:"input",type:"password",onChange:this.handleChangeUpdatePassword,placeholder:"New Password"})),r.a.createElement("br",null),r.a.createElement(D.a.Field,null,"Confirm New Password:",r.a.createElement("br",null),r.a.createElement("input",{className:"input",type:"password"})),r.a.createElement(L.a,{className:"button",onClick:this.handleUpdate},"Submit changes"),r.a.createElement(te,null),r.a.createElement("br",null),r.a.createElement(ne,null),r.a.createElement(se,null),r.a.createElement(L.a,{className:"button",onClick:this.props.toLoginPage},"Log Out"))))))}}]),t}(r.a.Component),le=Object(E.connect)(null,function(e){return{updateUser:function(t){return e((n=t,function(e,t){var a=t().loginData.token;e({type:"UPDATE_USER"}),fetch("".concat(j,"/users"),{method:"PATCH",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(t){e({type:"UPDATE_USER_SUCCESS",displayName:t.user.displayName}),e(Object(o.push)("/mainFeed"))}).catch(function(t){e({type:"UPDATE_USER_FAILURE",updateResult:"no one likes you"})})}));var n}}})(ue),ie=(n(353),r.a.Component,n(355),r.a.Component,n(357),r.a.Component,n(359),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{to:"/userProfile"},r.a.createElement(L.a,{className:"profilePageNavButton"},"Profile Page"))}}]),t}(r.a.Component)),me=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{className:"grid",centered:!0},r.a.createElement(D.a,{className:"form"},r.a.createElement(D.a.Field,{className:"gridcolumn1",width:4},r.a.createElement(_.a.Column,null,r.a.createElement(Y,null))),r.a.createElement(D.a.Field,{className:"gridcolumn2",width:6},r.a.createElement(_.a.Column,null,r.a.createElement(M,null),r.a.createElement(K,null))),r.a.createElement(D.a.Field,{className:"gridcolumn3",width:4},r.a.createElement(_.a.Column,null,r.a.createElement(ie,null),r.a.createElement(se,null)))))}}]),t}(r.a.Component),de=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={width:window.innerWidth},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"firstView"},r.a.createElement(f,null),r.a.createElement("div",{className:"startingPage"},r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))}}),r.a.createElement(h.a,{path:"/registration",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null))}}),r.a.createElement(h.a,{path:"/userProfile",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null))}}),r.a.createElement(h.a,{path:"/mainFeed",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null))}}))))}}]),t}(r.a.Component),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var fe=n(67),Ee=n(34),ge={register:{},registerResult:"",loginData:{token:"",id:0,success:!1},loginResult:"",uploadImageResult:"",user:{id:0,username:"",displayName:"",about:"",createdAt:"",updatedAt:"",messages:[]},users:[{id:0,username:"",displayName:"",about:"",createdAt:"",updatedAt:""}],displayName:"",updateResult:"",deleteUserResult:"",messages:[]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":return e;case"REGISTER_SUCCESS":return Object(Ee.a)({},e,{register:t.register,registerResult:t.result});case"REGISTER_FAIL":return Object(Ee.a)({},e,{registerResult:t.result});case"LOGIN_SUCCESS":return Object(Ee.a)({},e,{loginData:t.loginData});case"LOGIN_FAILURE":case"LOGIN":return Object(Ee.a)({},e,{loginResult:t.result});case"DELETE_USER_SUCCESS":return Object(Ee.a)({},e,ge);case"DELETE_USER_FAILURE":return Object(Ee.a)({},e,{deleteUserResult:t.deleteUserResult});case"DELETE_USER":return Object(Ee.a)({},e);case"GET_MESSAGES":return Object(Ee.a)({},e,{messages:t.messages});case"POST_MESSAGES":return Object(Ee.a)({},e,{messages:t.result});case"UPDATE_USER":return Object(Ee.a)({},e);case"UPDATE_USER_SUCCESS":return Object(Ee.a)({},e,{displayName:t.displayName});case"UPDATE_USER_FAILURE":return Object(Ee.a)({},e,{updateResult:t.updateResult});case"GET_USER":return Object(Ee.a)({},e);case"GET_USER_SUCCESS":return Object(Ee.a)({},e,{user:t.user});case"GET_ALL_USERS":return Object(Ee.a)({},e,{users:t.users});case"GET_USER_MESSAGES":return Object(Ee.a)({},e,{AHMessages:t.messages});case"LOGOUT_USER":return Object(Ee.a)({},ge);case"UPLOAD_IMAGE_SUCCESS":case"UPLOAD_IMAGE_FAILURE":return Object(Ee.a)({},e,{uploadImageResult:t.uploadImageResult});default:return e}},Oe=n(179),je=n(40),ye=Object(je.a)({basename:"/kwitter"}),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.c,ve=Object(fe.d)(Object(o.connectRouter)(ye)(be),Se(Object(fe.a)(Object(o.routerMiddleware)(ye),Oe.a)));c.a.render(r.a.createElement(E.Provider,{store:ve},r.a.createElement(o.ConnectedRouter,{basename:"/kwitter",history:ye},r.a.createElement(de,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/kwitter",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/kwitter","/service-worker.js");pe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):he(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):he(e)})}}()}},[[191,2,1]]]);
//# sourceMappingURL=main.950d39a1.chunk.js.map