(this.webpackJsonplcc_export=this.webpackJsonplcc_export||[]).push([[4],{76:function(e,t,i){"use strict";e.exports=i(77)},77:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(i(1)),r=s(i(4)),a=s(i(78));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=[(i=d(this,u(t).call(this,e))).props.text,i.props.min,i.props.ideal,i.props.max],r=l(a.default.apply(void 0,n),2),s=r[0],o=r[1];return i.state={displaySecondary:!1,primaryText:s,secondaryText:o,readMoreText:i.props.readMoreText},i}var i,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),i=t,(r=[{key:"setStatus",value:function(){var e=!this.state.displaySecondary;this.setState({displaySecondary:e})}},{key:"render",value:function(){return this.state.secondaryText?this.state.displaySecondary?n.default.createElement("div",{className:"display-text-group"},n.default.createElement("span",{className:"displayed-text",onClick:this.setStatus.bind(this)},"".concat(this.state.primaryText," ").concat(this.state.secondaryText))):n.default.createElement("div",{className:"display-text-group"},n.default.createElement("span",{className:"displayed-text"},this.state.primaryText,n.default.createElement("span",{style:{display:"none"}},this.state.secondaryText),n.default.createElement("div",{className:"read-more-button",onClick:this.setStatus.bind(this)},this.state.readMoreText))):n.default.createElement("div",{className:"display-text-group"},n.default.createElement("span",{className:"displayed-text"},"".concat(this.state.primaryText," ").concat(this.state.secondaryText)))}}])&&c(i.prototype,r),s&&c(i,s),t}(n.default.Component);t.default=m,m.propTypes={text:r.default.string.isRequired,min:r.default.number,ideal:r.default.number,max:r.default.number,readMoreText:r.default.string},m.defaultProps={readMoreText:"read more"}},78:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[".",",","!","?","'","{","}","(",")","[","]","/"],r=function(e){if(" "===e)return!0},a=function(e,t,i,a){if(e<i&&e>a&&function(e,t){if(n.indexOf(t[e])>=0&&r(t[e+1]))return!0}(e,t))return!0},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;if(n<t||i>n||i<t)throw new Error("The minimum length must be less than the maximum, and the ideal must be between the minimum and maximum.");if(e.length<i)return[e,""];for(var s,o,l=i,c=i,d=function(t){r(e[t])&&(s=s||t)};l<n||c>t;){if(a(l,e,n,t)){o=l+1;break}if(a(c,e,n,t)){o=c+1;break}d(l),d(c),l++,c--}return void 0===o&&(o=s&&s>=t&&s<=n?s:i-t<n-i?t:n),[e.slice(0,o),e.slice(o).trim()]};t.default=s},97:function(e,t){},98:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return A}));var n=i(0),r=i(17),a=i(6),s=i(7),o=i(9),l=i(8),c=i(1),d=i.n(c),u=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).state={side:n.props.id%2},n}return Object(s.a)(i,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"wine"+this.props.id,className:"relative h5 w-100 ",children:Object(n.jsxs)("div",{className:"waveBg dimBg w-90-l w-100-m w-100 h-100 absolute "+(this.state.side?"left-0-l right-1-m":"right-0-l left-1-m"),children:[Object(n.jsx)("img",{alt:this.props.content.headerText,src:this.props.content.img,className:"winePicture "+(0!==this.state.side?"right-0 mr2 mr0-ns":"left-0 ml2 ml0-ns")}),Object(n.jsxs)("div",{className:"wineContent flex flex-column "+(this.state.side?"mr6 pr1 pr0-ns left-0 tr ml4-ns ml2":"ml6 pl1 pl0-ns right-0 tl mr4-ns mr2"),children:[Object(n.jsx)("div",{className:"wineHeaderText f4 f3-m f2-l b black mb3-ns",children:this.props.content.headerText}),Object(n.jsxs)("div",{className:"f6 f5-m f4-l tj black pt2 pt3-l",children:[" ",this.props.content.text]})]})]})})}}]),i}(c.Component),h=i(16),m=i.p+"static/media/MLL SR.66909cb5.png",f=i.p+"static/media/MLL_Michelin_3ecus.1c456e50.png",p=i.p+"static/media/MLL_Michelin_Elias.c5d6b2ac.png",b=i.p+"static/media/MR CL.d7fdd40c.png",v=i.p+"static/media/MR_Michelin_HDS.0008b737.png",g=i.p+"static/media/MB CV.7d30fe90.png",w=i.p+"static/media/VIO LM.e5129217.png",y=i.p+"static/media/ROSE PF.a2530d2b.png",x=i.p+"static/media/overview_1.c98aa49d.jpg",j=i.p+"static/media/overview_2.a94eb127.jpg",O=i.p+"static/media/overview_3.89c9cc19.jpg",L=[{headerText:"Soleil Rouge",text:"Soleil Rouge, while keeping the specific elegance of Cru Livini\xe8re wines, offers a crunchy fruit and velvet mouth. A Livini\xe8re wine that you can drink young without waiting, with volume and freshness. This wine has two secrets: limited use of wood, with partial use of three years oak barrels; and use of Cinsault in the final blend, in order to provide more crunchy fruit\u2026 The result is there: Soleil Rouge offers a modern and attractive style of Livini\xe8re Cru.",img:m},{headerText:"Les Trois Ecus",text:"Les Trois \xc9cus is Domaine Michelin\u2019s classic style of Livini\xe8re Cru. An elegant and fruity wine, with volume and persistence. It is the result of 18 months aging minimum, including 12 months in 300L French Oak Barrels, with one third of new barrels every year. The selection of the new barrels is made very carefully, every year, according to the profile of the vintage. We aim at selecting barrels which will bring complexity and aging potential to the wine, without masking the aromas. We want to keep fruit after aging\u2026 Les Trois \xc9cus wines are ready to drink when put on the market. But they will take benefit of additional time in your cellar for aging if you are patient enough.",img:f},{headerText:"Minervois La Livini\xe8re - Les 3 \xe9cus",text:"G\xe9n\xe9rations is the brand name for our \u201cT\xeate de Cuv\xe9e\u201d. The most outstanding wine we can produce for a given vintage. The final name of the Cuv\xe9e depends on the year. \u201cAxel\u201d (2015), \u201cElias\u201d (2016), \u201cYuna\u201d (2017), \u201cMalone\u201d (2018), \u201cAnouk\u201d (2020). These are the names of our grandsons and granddaughters, born these last years. Lucky us\u2026 \nThis Cuv\xe9e is the selection, each year, of the very best barrels of the vintage in very limited volumes: 800 to 1000 bottles only. At the end of the aging of the vintage, we taste individually each barrel. And every year, we find gems: some of the barrels are exceptional and allow to produce a top-quality blend. G\xe9n\xe9rations Cuv\xe9e is therefore a very unique Cuv\xe9e, different every year, every year at the top.",img:p},{headerText:"La Curiosit\xe9 de Lauriole",text:"\u201cLa Curiosit\xe9 de Lauriole\u201d is a touristic spot in our region. It is also the place where our vines for this Cuv\xe9e are located. This wine provides immediate tasting pleasure, with intense nose of red fruits with mouth all in sweetness. This is an easy wine to drink for aperitif or ideal for barbecues. You can also serve it lightly chilled at 14\xb0 during summer\u2026  Its vinification by partial carbonic maceration allows the extraction of maximum aromas.",img:b},{headerText:"Hauts de Siran",text:"\u201cLes Hauts de Siran\u201d is a generous wine, with intense nose of red and black fruits, and spices. Powerful and long mouth with significant volume and sweetness. A very attractive Languedoc wine to be drunk on its own, or to be served with all kinds of food. \u201cLes Hauts de Siran\u201d reveals a typical freshness derived from altitude vines (300m above sea level), with unique terroirs and ideal maturation.",img:v},{headerText:"Combe Violon",text:"\xab Combe Violon\u201d is the name of one our \u201chidden combes\u201d, lost in the garrigue, producing a confidential wine:  1/2 ha of White Grenache and Roussanne. The fresh and ventilated terroir, 350m high, with limestone soil, produces a mineral, elegant ang very persistent white wine, with white flowers and fruits aromas. Very limited production (2000 bottles a year, on average). A typical wine for gastronomy, ideal with refined dishes, such as fish, white meat, goat cheese\u2026",img:g},{headerText:"La Martelle & Le Bois de La Martelle",text:"\u201cLa Martelle\u201d is the name of the vine from which we produce our 100% Viognier wine. This terroir is classified in Cru La Livini\xe8re, excellent terroir, but was planted in Viognier. An easy to drink, fresh, fruity and full-bodied white, ideal for drinking as such, or for any summer food, fish, cheese. We also produce, out of the same plot, a barrel (400L) aged version called \u201cLe Bois de la Martelle\u201d. The wood aging provides more complexity and power to the wine, while keeping freshness and fruit, with typical gastronomic profile\u2026",img:w},{headerText:"Small Cuv\xe9es",text:"Every year, according to our mood and to the vintage conditions, we like to try to produce limited small Cuv\xe9es: Minervois ros\xe9, sweet wine from our Viognier, or 100% Carignan from our beautiful terroir of La Galine. These are limited editions, under 1000 bottles, made only for our pleasure and your curiosity, and sold to our customers, on the local market. Come and visit us, we will be thrilled to share them with you\u2026 ",img:y}],T=[{img:x,title:"Whites",text:""},{img:j,title:"Minervois La Livini\xe8re",text:""},{img:O,title:"Red",text:""}],C=Object(n.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M17.568 9.432c0-2.55-.906-5.592-.944-5.72-.128-.423-.517-.712-.958-.712h-7.332c-.441 0-.83.289-.958.712-.038.128-.944 3.17-.944 5.72 0 2.735 1.984 5.011 4.587 5.477l-.019.091v4h-1c-.553 0-1 .447-1 1s.447 1 1 1h4c.553 0 1-.447 1-1s-.447-1-1-1h-1v-4l-.019-.092c2.603-.466 4.587-2.741 4.587-5.476zm-5.568 3.568c-1.773 0-3.236-1.303-3.511-3h7.021c-.274 1.697-1.737 3-3.51 3zm-3.555-4c.062-1.468.422-3.093.653-4h5.803c.231.907.591 2.532.653 4h-7.109z"})}),k=i(21),M=i(76),N=i.n(M),S=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).state={side:n.props.id%2},n}return Object(s.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"flex flex-column mw7 w-100 pa2 ml4 mr4 mb5 mb5-m mb2-l justify-center items-center dimBg waveBg2",children:[Object(n.jsx)("h4",{className:" mt3 mb4 f4 h3 tc flex flex-column justify-center",children:this.props.data.title}),Object(n.jsxs)("div",{className:"relative mt3 mw7 w-80 ",children:[Object(n.jsxs)("div",{className:"testimonialAuthor pa2 flex flex-column items-center bg-white-60  pa2 br4 ",children:[Object(n.jsx)("div",{className:"overflow-hidden flex flex-column justify-center items-center",children:Object(n.jsx)("img",{src:this.props.data.img,alt:this.props.data.authorCompany})}),Object(n.jsxs)("div",{className:"w4",children:[Object(n.jsx)("span",{className:"tc i db f6",children:this.props.data.author}),Object(n.jsx)("span",{className:"tc b db f6",children:this.props.data.authorCompany})]})]}),Object(n.jsx)("div",{className:"badgeText b tc3 mb5-l mb4-m f5-l f6 grow br2 ba bw1 ph3 pv2 dib  bg-white-30 hover-bg-white bgblur ",children:this.props.data.badge})," ",Object(n.jsx)("div",{className:"flex testimonial",children:Object(n.jsx)("p",{className:"tj ",children:this.props.data.text})}),Object(n.jsx)("div",{className:"badgeGrade flex justify-end mr3 b black underline mb3 f4 dib",children:this.props.data.grade})]})]},this.props.id)}}]),i}(c.Component),_=[{author:"Georgina Hindle",authorCompany:"Decanter",wine:"Domaine Les Combes Cach\xe9es, Cuv\xe9e Axel, Minervois \u2013 La Livini\xe8re 2015",img:i.p+"static/media/decanter_logo.6f7017e4.jpg",title:"Languedoc gems : 24 Minervois-La Livini\xe8re wines tasted",grade:"93/100",text:"Cuv\xe9e Axel by Domaine Les Combes Cach\xe9es also impressed. A limited production of 730 bottles were made in 2015 \u2013 a blend of the best three barrels from the vintage. The wine, made from Carignan (5%), Cinsault (10%), Grenache (20%) and Syrah (65%), is well-structured with aromatic power and great personality.",badge:"Top picks"},{author:"Joe Czerwinski",authorCompany:"The wine Advocate - Issue 249",wine:"Domaine Les Combes Cach\xe9es, Les Trois \xc9cus, Minervois \u2013 La Livini\xe8re 2017",img:i.p+"static/media/parker_wine_advocate_logo.51e8fcda.jpg",title:"Minervois La Livini\xe8re",badge:"Top producers",grade:"90/100",text:"Minervois La Livini\xe8re: Inland and upland, with a base of limestone and clay, this is a dry area of warms days and cool nights. Intense and powerful wines are the rule. Top producers in this report: Domaine de la Borie Blanche, Domaine Michelin Les Combes Cach\xe9es, G\xe9rard Bertrand. "}],A=(i(97),function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(e){var n;Object(a.a)(this,i),n=t.call(this,e);for(var r=[],s=0;s<3;s++)r.push(d.a.createRef());return n.state={activeAll:!0,hover:null,refs:r},n}return Object(s.a)(i,[{key:"componentDidMount",value:function(){Object(k.e)()}},{key:"checkZone",value:function(e){var t,i=Object(r.a)(document.querySelectorAll(".wineFamily"));try{for(i.s();!(t=i.n()).done;){var n=t.value;if(n.contains(e))return n.id}}catch(a){i.e(a)}finally{i.f()}}},{key:"mouseEnter",value:function(e){var t=this.checkZone(e.target);this.setState({activeAll:!1,hoverId:t})}},{key:"mouseLeave",value:function(e){this.setState({activeAll:!0})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"wines",children:[Object(n.jsx)("h1",{className:"winesTitle sectionTitle",children:"Our wines"}),Object(n.jsx)("div",{className:"wineOverview center flex flex-row-ns flex-column justify-center-ns",children:T.reduce((function(t,i){var r,a;return t.push(Object(n.jsxs)("div",{className:"wineFamily w-30-ns flex flex-column items-center justify-center"+(e.state.activeAll||e.state.hoverId==t.length?"notdimmed":"dimmed"),id:t.length,onMouseEnter:function(t){return e.mouseEnter(t)},onMouseLeave:function(t){return e.mouseLeave(t)},children:[Object(n.jsx)("img",{src:i.img,className:"objectFitContain grow",alt:i.title}),Object(n.jsx)("h2",{className:"pa1 no-underline pointer h3-ns mt0 mb5-ns mb2",i:t.length,children:i.title}),Object(n.jsxs)("div",{className:"flex items-center w4 center pointer ma2 ma3-ns f5-l f6 i grow br2 ba bw1 ph3 pv2 dib black hover-white hover-bg-black-60 bgblur",onClick:(r=t.length,a=e.state.refs,function(){console.log(r),a[r].current.scrollIntoView({behavior:"smooth"})}),children:[Object(n.jsx)("span",{className:"pr2 nowrap tc ",children:"See wines"}),Object(n.jsx)("span",{className:"w3 ",children:C})]},t.length),Object(n.jsxs)("div",{className:"pa1 mt0 tc i mb5 mb2-ns",children:[Object(n.jsx)(N.a,{text:i.text,min:100,ideal:150,max:220,readMoreText:"Read more"}),i.txt]})]},t.length)),t}),[])}),Object(n.jsx)("div",{className:"flex flex-column flex-row-l items-center",children:_.reduce((function(e,t){return e.push(Object(n.jsx)(S,{data:t,id:e.length})),e}),[])}),Object(n.jsx)(h.a,{refprop:this.state.refs[0]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"wineHeaderText mt5 pa5 tc cf1-ns b underline",children:"Minervois La Livini\xe8re"}),Object(n.jsxs)("div",{id:"wineList",className:"mt5 mb5",children:[Object(n.jsx)(u,{id:0,content:L[0],metaTitle:"Minervois La Livini\xe8re"}),Object(n.jsx)(u,{id:1,content:L[1]}),Object(n.jsx)(u,{id:2,content:L[2]})," "]}),Object(n.jsx)(h.a,{refprop:this.state.refs[1]}),Object(n.jsx)("h2",{className:"wineHeaderText mt5 pa5 tc cf1-ns b underline",children:"Minervois Rouge"}),Object(n.jsxs)("div",{id:"wineList",className:"mt5 mb5",children:[Object(n.jsx)(u,{id:3,content:L[3],metaTitle:"Minervois Rouge"}),Object(n.jsx)(u,{id:4,content:L[4]}),Object(n.jsx)(u,{id:5,content:L[5]})]}),Object(n.jsx)(h.a,{refprop:this.state.refs[2]}),Object(n.jsx)("h2",{className:"wineHeaderText mt5 pa5 tc cf1-ns b underline",children:"Others"}),Object(n.jsxs)("div",{id:"wineList",className:"mt5 mb5",children:[Object(n.jsx)(u,{id:6,content:L[6],metaTitle:"Others"}),Object(n.jsx)(u,{id:7,content:L[7]})]})]})]})}}]),i}(c.Component))}}]);
//# sourceMappingURL=4.1bffcfc9.chunk.js.map