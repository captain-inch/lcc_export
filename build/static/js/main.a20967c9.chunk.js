(this.webpackJsonplcc_export=this.webpackJsonplcc_export||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),i=n(5),a=n(6),c=n(8),s=n(7),o=n(1),l=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{ref:this.props.refprop,className:"anchor",id:this.props.id})}}]),n}(o.Component)},17:function(e,t,n){"use strict";n.r(t),n.d(t,"bgvideos",(function(){return s})),n.d(t,"thumbnails",(function(){return o}));var r=n.p+"static/media/vignes.ed4d6dc5.mp4",i=n.p+"static/media/barriques.daddf1de.mov",a=n.p+"static/media/vignes.b4690899.jpg",c=n.p+"static/media/barriques.553c491e.jpg",s=[r,i],o=[a,c]},27:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n.n(i),c=n(18),s=n.n(c),o=(n(26),n(27),n(5)),l=n(6),u=n(8),d=n(7),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("li",{children:Object(r.jsx)("span",{route:this.props.route,refprop:"#"+this.props.refprop,href:this.props.route,onClick:function(t){return e.props.callback(t,e.props.refprop.current,e.props.route)},style:{transition:"all 0.3s"},className:this.props.className+(this.props.active===this.props.route?" b pb1 bb bw2 b--white-50":""),children:this.props.text})})}}]),n}(i.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).menuClick=function(e,t,n){r.state.menuEnabled&&r.setState({menuEnabled:!1});try{t.scrollIntoView({behavior:"smooth"})}catch(i){console.warn("Unable to scroll to, ref link is probably broken")}r.props.callback(n)},r.expendMenu=function(){r.setState({menuEnabled:!r.state.menuEnabled})},r.state={menuEnabled:!1},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("nav",{id:"navbar",className:"bgt1 bgblur z-999 absolute",style:{position:"fixed",top:0},children:[Object(r.jsxs)("div",{className:"flex flex-column-m justify-between-l",children:[Object(r.jsx)("a",{href:"#home",className:"flex-m justify-center-m",children:Object(r.jsx)("img",{className:"mr0-m ml0-m h3",src:this.props.logo,alt:"Logo Domaine Michelin",onClick:function(t){return e.menuClick(t,document.getElementById("root"),"home")}})}),Object(r.jsx)("div",{className:"hamburger db dn-ns self-center pa3",style:{marginLeft:"auto"},id:"expandmenu",onClick:this.expendMenu,children:Object(r.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-three-dots-vertical pointer",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{fillRule:"evenodd",fill:"white",d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})})}),Object(r.jsx)("ul",{className:"dn mt2-m mb3-m list justify-around tc flex-ns pa1 mr3 self-center-l",children:this.props.links.reduce((function(t,n){return t.push(Object(r.jsx)(h,{text:n.text,route:n.route,refprop:e.props.refs[t.length],active:e.props.active,callback:e.menuClick,className:"tc1 pointer link dim f4 ma3-l mb0-l mt0-l"},t.length)),t}),[])})]}),this.state.menuEnabled?Object(r.jsx)("ul",{className:"dn-ns list mb0 justify-around vh-50 tc v-mid flex flex-column flex-row-ns ",children:this.props.links.reduce((function(t,n){return t.push(Object(r.jsx)(h,{text:n.text,route:n.route,refprop:e.props.refs[t.length],active:e.props.active,callback:e.menuClick,className:"tc1 pointer link dim f3"},t.length)),t}),[])}):null]})}}]),n}(i.Component),p=["Organic wineyard at the heart of Minervois",3e3,"Quality-driven",2500,"Human-sized",2500],m=[{text:"Discover our story",icon:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-arrow-down-square",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})})},{text:"Contact us",icon:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-envelope",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})}],f=n(3),j=n(10),v=n(20),x=n(2),g=n.n(x),y=n(9),O=n(11),w=n.n(O),k=n(17);document.querySelector("body");f.b.registerPlugin(j.a);var N=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={loaded:!1,bgvideos:[],src:null,videoIndex:0,videoEl:null,thumbnails:k.thumbnails},n}return Object(l.a)(i,[{key:"loadVideos",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading videos"),e.next=3,Promise.resolve().then(n.bind(null,17));case 3:return t=e.sent,r=t.bgvideos,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("#heroVideo");this.setState({videoEl:t}),this.loadVideos().then((function(t){return e.setState({bgvideos:t,thumbnails:k.thumbnails,videosrc:t[e.state.videoIndex],thumbnailsrc:e.state.thumbnails[e.state.videoIndex]})})),this.initTriggers()}},{key:"videoEnded",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(this.state.videoIndex+1)%this.state.bgvideos.length,this.setState({videoIndex:n,videosrc:this.state.bgvideos[n],thumbnailsrc:this.state.thumbnails[n],loaded:!1},(function(){t.target.load(),t.target.play()}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initTriggers",value:function(){var e=this;j.a.create({trigger:"#hero",start:"0 0",end:"100% 0%",onEnterBack:function(){try{e.state.videoEl.play()}catch(t){}},onLeave:function(){try{e.state.videoEl.pause()}catch(t){}}})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{id:"hero",className:"",children:[Object(r.jsx)("video",{id:"heroVideo",className:this.state.loaded?"db":"dn",autoPlay:!0,loop:!1,muted:!0,onEnded:function(t){return e.videoEnded(t)},onCanPlay:function(t){return e.setState({loaded:!0})},children:Object(r.jsx)("source",{src:this.state.videosrc})}),Object(r.jsx)("img",{src:this.state.thumbnailsrc,className:this.state.loaded?"dn":"db",alt:"Preview thumbnail",id:"videoThumbnail"}),this.state.loaded?null:Object(r.jsx)(w.a,{type:"TailSpin",color:"#cccccc",className:"loader",height:100,width:100})]})}}]),i}(i.Component);document.querySelector("body");f.b.registerPlugin(j.a);var S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{ref:this.props.refprop,id:"hero",className:"flex content-center justify-center",children:[Object(r.jsx)(N,{}),Object(r.jsx)(v.a,{className:"b tc1 bgt br3 pa2 coverText pa3 mt4-m textShadow",steps:p,loop:1/0,wrapper:"div"}),Object(r.jsx)("div",{className:"ctaContainer flex flex-column flex-row-ns",children:m.reduce((function(t,n){var i;return t.push(Object(r.jsxs)("a",{className:"ctaItem flex items-center pointer w-100 ma3 mb5-l mb4-m f4-l f5 grow br2 ba bw1 ph3 pv2 dib white bg-black-30 hover-bg-black-60 bgblur",onClick:(i=e.props.ctaRefs[t.length].current,function(){i.scrollIntoView({behavior:"smooth"})}),children:[Object(r.jsx)("span",{className:"pr2 nowrap tc center",children:n.text}),Object(r.jsxs)("span",{className:"w2",children:[" ",n.icon]})]},t.length)),t}),[])})]})}}]),n}(i.Component),C=n(13),E=n.p+"static/media/logowhite.0ff3523c.png",A=[{text:"Home",route:"home",active:"home"},{text:"Story",route:"story",active:"home"},{text:"Wineyard",route:"wineyard",active:"home"},{text:"Wines",route:"wines",active:"home"},{text:"Infos & contact",route:"contact",active:"home"}],P=n(14),z=.5,L=.4,T=.8,q=function(e,t){e.map((function(n){return j.a.create({trigger:"#Anchor_"+n,start:"50% 50%",end:"50% 50%",onEnter:function(e){return n=e.vars.trigger.split("#Anchor_")[1],void t.setState({route:n});var n},onLeaveBack:function(n){return function(n){try{t.setState({route:e[e.indexOf(n)-1]})}catch(r){console.warn("Error on the sequence of nav items when moving upwards")}}(n.vars.trigger.split("#Anchor_")[1])}})}))},I=function(e){_(document.querySelectorAll(".wineHeaderText"));f.a.to(".wineOverview",{opacity:0,scale:.8}),f.a.timeline({scrollTrigger:{trigger:".winesTitle",start:"50% 60%",id:"overview",scrub:!0,onEnter:function(){return f.a.to(".wineOverview",{opacity:1,scale:1,duration:z})},onLeaveBack:function(){return f.a.to(".wineOverview",{opacity:0,scale:.8,duration:L})}}}),e.map((function(e){f.a.to("#wine"+e,{opacity:0,xPercent:e%2===1?-10:10,duration:0}),f.a.to("#wine"+e+" .winePicture",{opacity:0,duration:0,yPercent:5}),f.a.timeline({scrollTrigger:{trigger:"#wine"+e,start:"50% 90%",end:"50% 50%",scrub:!0,onEnter:function(){return f.a.timeline().to("#wine"+e,{opacity:1,xPercent:0,duration:z,ease:""},0).to("#wine"+e+" .winePicture",{opacity:1,duration:L,yPercent:0,ease:"power1"},.25)},onLeaveBack:function(){return f.a.timeline().to("#wine"+e,{opacity:0,xPercent:e%2===1?-10:10,duration:L,ease:"power1.in"},0).to("#wine"+e+" .winePicture",{opacity:0,duration:L,yPercent:5},0)}}})}))},M=function(){_(document.querySelectorAll(".wineyardItem")),_(document.querySelectorAll("#galleryWrapper")),f.a.timeline({scrollTrigger:{trigger:"#wineyardtitle",start:"50% 90%",end:"50% 10%",scrub:!0}}).from("#wineyardtitle",{scale:.9,opacity:0,duration:2,yPercent:30,ease:"power3.out"},0).from("#wineyardbanner",{scale:1.2,duration:2,yPercent:-10,ease:"power2.out"},0)},V=function(){_(document.querySelectorAll(".teamItem")),f.a.to("#trio",{filter:"grayscale(100%)"}),f.a.timeline({scrollTrigger:{trigger:"#trio",start:"50% 100%",end:"50% 40%",id:"overview",scrub:!0}}).to("#trio",{filter:"grayscale(0%)",scale:1.05,duration:z})},B=function(){_(document.querySelectorAll(".contactItem")),_(document.querySelectorAll("#domainlocationmap"))},_=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(P.a)(e);try{var i=function(){var e=t.value;null===n&&(n=e),f.a.to(e,{opacity:0,scale:T}),f.a.timeline({scrollTrigger:{trigger:e,start:"50% 100%",id:"overview",scrub:!0,onEnter:function(){return f.a.to(e,{opacity:1,scale:1,duration:z})},onLeaveBack:function(){return f.a.to(n,{opacity:0,scale:T,duration:L})}}})};for(r.s();!(t=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}},H=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,74))})),R=Object(i.lazy)((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,72))})),D=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,73))})),W=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,75))})),J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(o.a)(this,n),r=t.call(this,e);for(var i=[],c=0;c<A.length;c++)i.push(a.a.createRef());return r.state={route:"#home",refs:i},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=e.reduce((function(e,t){return e.push(t.route),e}),[]);q(n,t),I([0,1,2,3,4,5,6,7,8]),M(),V(),B(),_(document.querySelectorAll(".sectionTitle")),_(document.querySelectorAll(".sectionSubtitle"))}(A,this)}},{key:"render",value:function(){return Object(r.jsxs)("div",{id:"App",children:[Object(r.jsx)(b,{callback:this.routeChange,links:A,refs:this.state.refs,active:this.state.route,logo:E}),Object(r.jsx)(C.a,{id:"Anchor_home",refprop:this.state.refs[0]}),Object(r.jsx)(S,{timeout:5e3,id:"home",ctaRefs:[this.state.refs[1],this.state.refs[4]]}),Object(r.jsx)(C.a,{id:"Anchor_story",refprop:this.state.refs[1]}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsxs)("div",{className:"h5 bg--yellow",style:{display:"grid",placeContent:"center"},children:[Object(r.jsx)("h3",{children:"Loading ..."}),Object(r.jsx)(w.a,{type:"TailSpin",color:"#cccccc",className:"",visible:!this.state.loaded,height:100,width:100})]}),children:Object(r.jsx)(H,{})}),Object(r.jsx)(C.a,{id:"Anchor_wineyard",refprop:this.state.refs[2]}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsxs)("div",{className:"h5 bg--yellow",style:{display:"grid",placeContent:"center"},children:[Object(r.jsx)("h3",{children:"Loading ..."}),Object(r.jsx)(w.a,{type:"TailSpin",color:"#cccccc",className:"",visible:!this.state.loaded,height:100,width:100})]}),children:Object(r.jsx)(R,{})}),Object(r.jsx)(C.a,{id:"Anchor_wines",refprop:this.state.refs[3]})," ",Object(r.jsx)(i.Suspense,{fallback:Object(r.jsxs)("div",{className:"h5 bg--yellow",style:{display:"grid",placeContent:"center"},children:[Object(r.jsx)("h3",{children:"Loading ..."}),Object(r.jsx)(w.a,{type:"TailSpin",color:"#cccccc",className:"",visible:!this.state.loaded,height:100,width:100})]}),children:Object(r.jsx)(D,{refprop:this.state.refs[3],className:"wines"})}),Object(r.jsx)(C.a,{id:"Anchor_contact",refprop:this.state.refs[4]}),Object(r.jsx)(i.Suspense,{fallback:Object(r.jsxs)("div",{className:"h5 bg--yellow",style:{display:"grid",placeContent:"center"},children:[Object(r.jsx)("h3",{children:"Loading ..."}),Object(r.jsx)(w.a,{type:"TailSpin",color:"#cccccc",className:"",visible:!this.state.loaded,height:100,width:100})]}),children:Object(r.jsx)(W,{})})]})}}]),n}(i.Component);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a20967c9.chunk.js.map