(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/img.53016398.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/clouds.bfcbf6e3.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/hong-kong.be435631.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/tower.3e4975d8.jpg"},26:function(e,a,t){e.exports=t.p+"static/media/buildings.c77798ef.jpg"},28:function(e,a,t){e.exports=t(50)},33:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n,i,c,l,r,s,o=t(0),m=t.n(o),u=t(19),d=t.n(u),p=t(2),f=t(3),v=t(5),h=t(4),E=t(6),g=(t(33),t(11)),b=t(10),N=(t(34),window.pageYOffset),w=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={active:!1,activeNav:!1,flag:!0},t.changeStateNav=function(){t.setState({activeNav:!t.state.activeNav})},t.changeFlag=function(){t.setState({flag:!0})},t.handleClick=function(){t.setState({flag:!1,active:!t.state.active}),setTimeout(t.changeFlag,1e3),t.state.activeNav?setTimeout(t.changeStateNav,1e3):(t.setState({activeNav:!t.state.activeNav}),t.nav.current.style.transform="rotate(0deg)",t.nav.current.style.left="5vh")},t.handleScroll=function(){var e=window.pageYOffset;N<e&&e>50?(t.nav.current.style.transform="rotate(-90deg)",t.nav.current.style.left="0vh"):(t.nav.current.style.transform="rotate(0deg)",t.nav.current.style.left="5vh"),N=e},t.nav=m.a.createRef(),t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,a=e.active,t=e.activeNav;return m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{ref:this.nav,className:"navBtn",onClick:this.state.flag?this.handleClick:null},m.a.createElement("span",{className:t?"top bar active":"top bar"}),m.a.createElement("span",{className:t?"mid bar active":"mid bar"}),m.a.createElement("span",{className:t?"bot bar active":"bot bar"})),m.a.createElement("nav",{className:t?"active":""},m.a.createElement("ul",null,m.a.createElement(g.b,{to:"/",onClick:this.handleClick},m.a.createElement("li",null,m.a.createElement("span",{className:a?"number active":"number"},"01"),m.a.createElement("span",{className:a?"txt active":"txt"},"Start"))),m.a.createElement(g.b,{to:"/offer",onClick:this.state.flag?this.handleClick:null},m.a.createElement("li",null,m.a.createElement("span",{className:a?"number active":"number"},"02"),m.a.createElement("span",{className:a?"txt active":"txt"},"Oferta"))),m.a.createElement(g.b,{to:"/place",onClick:this.state.flag?this.handleClick:null},m.a.createElement("li",null,m.a.createElement("span",{className:a?"number active":"number"},"03"),m.a.createElement("span",{className:a?"txt active":"txt"},"Gdzie nas znajdziesz"))),m.a.createElement(g.b,{to:"/contact",onClick:this.state.flag?this.handleClick:null},m.a.createElement("li",null,m.a.createElement("span",{className:a?"number active":"number"},"04"),m.a.createElement("span",{className:a?"txt active":"txt"},"Kontakt"))))))}}]),a}(m.a.Component),j=t(22),y=t.n(j),O=(t(43),t(44),t(23)),k=t.n(O),x=t(24),R=t.n(x),C=window.innerHeight,q=function(e){function a(){var e,t;Object(p.a)(this,a);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={active:[!1,!1,!1,!1,!1]},t.handleScroll=function(){var e=window.scrollY;[t.div1,t.div2,t.img1,t.img2,t.div3].forEach(function(a,c){n=a.current.offsetTop,i=a.current.offsetHeight;var l=t.state.active;n<e+C-i/2?(l[c]=!0,t.setState({actives:l})):(l[c]=!1,t.setState({actives:l}))})},t.div1=m.a.createRef(),t.div2=m.a.createRef(),t.div3=m.a.createRef(),t.img1=m.a.createRef(),t.img2=m.a.createRef(),t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.active;return m.a.createElement("section",{className:"aboutPage"},m.a.createElement("div",{ref:this.div1,className:e[0]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "),m.a.createElement("div",{ref:this.div2,className:e[1]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "),m.a.createElement("img",{src:k.a,ref:this.img1,alt:"",className:e[2]?"aboutImg active":"aboutImg"}),m.a.createElement("img",{src:R.a,ref:this.img2,alt:"",className:e[3]?"aboutImg active":"aboutImg"}),m.a.createElement("div",{ref:this.div3,className:e[4]?"aboutContent active":"aboutContent"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus perspiciatis, provident at quod mollitia accusamus eligendi, quia facere, accusantium blanditiis. Atque, in praesentium! Veniam facere ipsam facilis harum aliquid? "))}}]),a}(m.a.Component),S=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).handleScroll=function(e){c=window.scrollY,l||(window.requestAnimationFrame(function(){var e=10+c/7;e<100?(t.img.current.style.top=e+"%",t.img.current.style.opacity=0,t.img.current.style.transform="scale(0)"):t.img.current.style.top="100%",t.img.current.style.transform="scale(".concat(1-c/400,") "),t.img.current.style.opacity="".concat(1-c/250),t.logo.current.style.opacity="".concat(1-c/250),l=!1}),l=!0)},t.img=m.a.createRef(),t.logo=m.a.createRef(),t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("section",{className:"home"},m.a.createElement("img",{ref:this.img,className:"homeImg",src:y.a,alt:""}),m.a.createElement("p",{className:"logo",ref:this.logo},"Business name")),m.a.createElement(q,null))}}]),a}(m.a.Component),L=(t(45),t(25)),A=t.n(L),F=t(26),I=t.n(F),z=window.innerHeight,B=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={active:[!1,!1,!1,!1,!1]},t.onLoad=function(){var e=[t.articleRef,t.articleRef2,t.articleRef3],a=0;e.forEach(function(e){e.current.style.transition="".concat(1,"s ").concat(a,"s"),a+=.2})},t.imgRef=m.a.createRef(),t.imgRef2=m.a.createRef(),t.articleRef=m.a.createRef(),t.articleRef2=m.a.createRef(),t.articleRef3=m.a.createRef(),t.handleScroll=function(){var e=window.scrollY;[t.articleRef,t.articleRef2,t.imgRef,t.articleRef3,t.imgRef2].forEach(function(a,n){r=a.current.offsetTop,s=a.current.offsetHeight;var i=t.state.active;r<e+z-s/2&&(i[n]=!0,t.setState({actives:i}))})},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.onLoad(),setTimeout(this.handleScroll,1700),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return m.a.createElement("section",{className:"offer"},m.a.createElement("p",{className:"title","data-text":"Oferta"},"Oferta"),m.a.createElement("article",{ref:this.articleRef,className:this.state.active[0]?"active":""},m.a.createElement("i",{className:"fas fa-users icon"}),m.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),m.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!")),m.a.createElement("article",{ref:this.articleRef2,className:this.state.active[1]?"active":""},m.a.createElement("i",{className:"fas fa-users icon"}),m.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),m.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!")),m.a.createElement("div",{className:"img"},m.a.createElement("img",{ref:this.imgRef,src:I.a,className:this.state.active[2]?"active":"",alt:""})),m.a.createElement("article",{ref:this.articleRef3,className:this.state.active[3]?"active":""},m.a.createElement("i",{className:"fas fa-users icon"}),m.a.createElement("p",{className:"titleArt"},"Lorem ipsum"),m.a.createElement("p",{className:"content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam alias maxime illum omnis praesentium cum delectus laboriosam. Repellendus non officia quaerat rerum culpa debitis, dolorem sed perferendis officiis corrupti minus!")),m.a.createElement("div",{className:"img"},m.a.createElement("img",{ref:this.imgRef2,className:this.state.active[4]?"active":"",src:A.a,alt:""})))}}]),a}(m.a.Component),D=t(27),T=(t(46),function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={username:"",email:"",message:""},t.handleChange=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(D.a)({},a,n))},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return m.a.createElement("section",{className:"contact"},m.a.createElement("h1",{className:"title"},"Kontakt"),m.a.createElement("p",{className:"content"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),m.a.createElement("p",{className:"content"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),m.a.createElement("form",{className:"contactForm"},m.a.createElement("label",{className:"name",htmlFor:"user"},m.a.createElement("p",null,"Imi\u0119"),m.a.createElement("input",{placeholder:"Imi\u0119",type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange})),m.a.createElement("label",{className:"email",htmlFor:"email"},m.a.createElement("p",null,"Email"),m.a.createElement("input",{placeholder:"Email",type:"text",id:"email",name:"email",value:this.state.email,onChange:this.handleChange})),m.a.createElement("label",{className:"message",htmlFor:"message"},m.a.createElement("p",null,"Wiadomo\u015b\u0107"),m.a.createElement("textarea",{id:"message",name:"message",value:this.state.message,onChange:this.handleChange})),m.a.createElement("button",null,"Send")))}}]),a}(m.a.Component)),W=(t(47),function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"loading"},m.a.createElement("div",{className:"loadingTxt"},m.a.createElement("p",{className:"shinyTxt"},"Mostowski")),m.a.createElement("div",{className:"wrapLoad"},m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null))))}}]),a}(m.a.Component)),M=(t(48),function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return m.a.createElement("section",{className:"place"},m.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.3035818382623!2d23.145927369669682!3d52.02703867803654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1553897983975!5m2!1spl!2spl",style:{border:0,frameborder:0},title:"google",allowFullScreen:!0}),m.a.createElement("p",{className:"adress"},"Orzechowa 23B Bia\u0142a Podlaska 21-500"))}}]),a}(m.a.Component)),U=(t(49),function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("footer",null,m.a.createElement("p",{className:"title"},"Wi\u0119cej o nas!"),m.a.createElement("div",{className:"socials"},m.a.createElement("p",null,"Instagram"),m.a.createElement("p",null,"Instagram")),m.a.createElement("div",{className:"contactFot"},m.a.createElement("p",{className:"header"},"Skontaktuj si\u0119 z nami!"),m.a.createElement("p",null,"exapsaka@o2.pl"),m.a.createElement("p",null,"530 439 439"),m.a.createElement("p",null,"Lub napisz wiadomo\u015b\u0107 tutaj!")),m.a.createElement("div",{className:"partnership"},m.a.createElement("p",{className:"header"},"Do\u0142\u0105cz do nas!"),m.a.createElement("p",null,"work.saodjk@o2.pl")),m.a.createElement("div",{className:"placeFot"},m.a.createElement("p",{className:"header"},"Znajdziesz nas pod adresem:"),m.a.createElement("p",null,"aosdk sapodasd 23, alskd laskda"))))}),Y=function(e){function a(){return Object(p.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return m.a.createElement(g.a,{basename:"/react-react-router-2"},m.a.createElement("div",{className:"App"},m.a.createElement(W,null),m.a.createElement(w,null),m.a.createElement(b.c,null,m.a.createElement(b.a,{path:"/",exact:!0,component:S}),m.a.createElement(b.a,{path:"/offer",exact:!0,component:B}),m.a.createElement(b.a,{path:"/place",exact:!0,component:M}),m.a.createElement(b.a,{path:"/contact",exact:!0,component:T})),m.a.createElement(U,null)))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(m.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.d7d49efa.chunk.js.map