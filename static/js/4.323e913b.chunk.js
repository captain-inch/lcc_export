(this.webpackJsonplcc_export=this.webpackJsonplcc_export||[]).push([[4],{76:function(e,t,i){"use strict";e.exports=i(77)},77:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(1)),r=n(i(4)),s=n(i(78));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var i=[],a=!0,r=!1,s=void 0;try{for(var n,o=e[Symbol.iterator]();!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){r=!0,s=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=[(i=u(this,d(t).call(this,e))).props.text,i.props.min,i.props.ideal,i.props.max],r=l(s.default.apply(void 0,a),2),n=r[0],o=r[1];return i.state={displaySecondary:!1,primaryText:n,secondaryText:o,readMoreText:i.props.readMoreText},i}var i,r,n;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),i=t,(r=[{key:"setStatus",value:function(){var e=!this.state.displaySecondary;this.setState({displaySecondary:e})}},{key:"render",value:function(){return this.state.secondaryText?this.state.displaySecondary?a.default.createElement("div",{className:"display-text-group"},a.default.createElement("span",{className:"displayed-text",onClick:this.setStatus.bind(this)},"".concat(this.state.primaryText," ").concat(this.state.secondaryText))):a.default.createElement("div",{className:"display-text-group"},a.default.createElement("span",{className:"displayed-text"},this.state.primaryText,a.default.createElement("span",{style:{display:"none"}},this.state.secondaryText),a.default.createElement("div",{className:"read-more-button",onClick:this.setStatus.bind(this)},this.state.readMoreText))):a.default.createElement("div",{className:"display-text-group"},a.default.createElement("span",{className:"displayed-text"},"".concat(this.state.primaryText," ").concat(this.state.secondaryText)))}}])&&c(i.prototype,r),n&&c(i,n),t}(a.default.Component);t.default=p,p.propTypes={text:r.default.string.isRequired,min:r.default.number,ideal:r.default.number,max:r.default.number,readMoreText:r.default.string},p.defaultProps={readMoreText:"read more"}},78:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[".",",","!","?","'","{","}","(",")","[","]","/"],r=function(e){if(" "===e)return!0},s=function(e,t,i,s){if(e<i&&e>s&&function(e,t){if(a.indexOf(t[e])>=0&&r(t[e+1]))return!0}(e,t))return!0},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;if(a<t||i>a||i<t)throw new Error("The minimum length must be less than the maximum, and the ideal must be between the minimum and maximum.");if(e.length<i)return[e,""];for(var n,o,l=i,c=i,u=function(t){r(e[t])&&(n=n||t)};l<a||c>t;){if(s(l,e,a,t)){o=l+1;break}if(s(c,e,a,t)){o=c+1;break}u(l),u(c),l++,c--}return void 0===o&&(o=n&&n>=t&&n<=a?n:i-t<a-i?t:a),[e.slice(0,o),e.slice(o).trim()]};t.default=n},97:function(e,t){},99:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return N}));var a=i(0),r=i(17),s=i(6),n=i(7),o=i(9),l=i(8),c=i(1),u=i.n(c),d=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={side:a.props.id%2},a}return Object(n.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"wine"+this.props.id,className:"relative h5 w-100 ",children:Object(a.jsxs)("div",{className:"waveBg dimBg w-90-l w-100-m w-100 h-100 absolute "+(this.state.side?"left-0-l right-1-m":"right-0-l left-1-m"),children:[Object(a.jsx)("img",{alt:this.props.content.headerText,src:this.props.content.img,className:"winePicture "+(0!==this.state.side?"right-0 mr2 mr0-ns":"left-0 ml2 ml0-ns")}),Object(a.jsxs)("div",{className:"wineContent flex flex-column "+(this.state.side?"mr6 pr1 pr0-ns left-0 tr ml4-ns ml2":"ml6 pl1 pl0-ns right-0 tl mr4-ns mr2"),children:[Object(a.jsx)("div",{className:"wineHeaderText f4 f3-m f2-l b black mb3-ns",children:this.props.content.headerText}),Object(a.jsxs)("div",{className:"f6 f5-m f4-l tj black pt2 pt3-l",children:[" ",this.props.content.text]}),Object(a.jsxs)("div",{className:"f5 i f4-ns black mt3-ns mt2",children:[" ",this.props.content.headerText]})]})]})})}}]),i}(c.Component),m=i(16),p=i.p+"static/media/MLL 3 ecus.daf4e212.png",h=i.p+"static/media/MB CV.53a18e17.png",b=i.p+"static/media/overview_1.c98aa49d.jpg",f=i.p+"static/media/overview_2.a94eb127.jpg",v=i.p+"static/media/overview_3.89c9cc19.jpg",x=[{headerText:"Minervois La Livini\xe8re - Les 3 \xe9cus",text:"Nez complexe, de fruits noirs (myrtille, pruneaux, cassis) de torr\xe9faction (chocolat) avec des subtiles notes de boite \xe0 cigares et de garrigue. L\u2019attaque est ronde et puissante, suivie d'un milieu de bouche structur\xe9 tout en restant \xe9l\xe9gant. Fra\xeecheur appara\xeet en fin de bouche, et offre une finale \xe9quilibr\xe9e. Fin de bouche longue et persistante sur les \xe9pices, le thym sauvage et le pain grill\xe9.",img:p},{headerText:"Minervois Blanc - Combe Violon",text:"Un original blanc du sud, blanc de gastronomie : fraicheur, fruit, complexit\xe9, longueur en bouche\u2026Le parfait compagnon des poissons d\xe9licats, grill\xe9s ou en sauce, des coquilles saint jacques po\xeal\xe9es, des volailles \xe0 la cr\xe8me, des fromages particuli\xe8rement de ch\xe8vre. Rare et original.",img:h},{headerText:"Minervois La Livini\xe8re - Les 3 \xe9cus",text:"Nez complexe, de fruits noirs (myrtille, pruneaux, cassis) de torr\xe9faction (chocolat) avec des subtiles notes de boite \xe0 cigares et de garrigue. L\u2019attaque est ronde et puissante, suivie d'un milieu de bouche structur\xe9 tout en restant \xe9l\xe9gant. Fra\xeecheur appara\xeet en fin de bouche, et offre une finale \xe9quilibr\xe9e. Fin de bouche longue et persistante sur les \xe9pices, le thym sauvage et le pain grill\xe9.",img:p},{headerText:"Minervois Blanc - Combe Violon",text:"Un original blanc du sud, blanc de gastronomie : fraicheur, fruit, complexit\xe9, longueur en bouche\u2026Le parfait compagnon des poissons d\xe9licats, grill\xe9s ou en sauce, des coquilles saint jacques po\xeal\xe9es, des volailles \xe0 la cr\xe8me, des fromages particuli\xe8rement de ch\xe8vre. Rare et original. ",img:h},{headerText:"Minervois La Livini\xe8re - Les 3 \xe9cus",text:"Nez complexe, de fruits noirs (myrtille, pruneaux, cassis) de torr\xe9faction (chocolat) avec des subtiles notes de boite \xe0 cigares et de garrigue. L\u2019attaque est ronde et puissante, suivie d'un milieu de bouche structur\xe9 tout en restant \xe9l\xe9gant. Fra\xeecheur appara\xeet en fin de bouche, et offre une finale \xe9quilibr\xe9e. Fin de bouche longue et persistante sur les \xe9pices, le thym sauvage et le pain grill\xe9.",img:p},{headerText:"Minervois La Livini\xe8re - Les 3 \xe9cus",text:"Nez complexe, de fruits noirs (myrtille, pruneaux, cassis) de torr\xe9faction (chocolat) avec des subtiles notes de boite \xe0 cigares et de garrigue. L\u2019attaque est ronde et puissante, suivie d'un milieu de bouche structur\xe9 tout en restant \xe9l\xe9gant. Fra\xeecheur appara\xeet en fin de bouche, et offre une finale \xe9quilibr\xe9e. Fin de bouche longue et persistante sur les \xe9pices, le thym sauvage et le pain grill\xe9.",img:p},{headerText:"Minervois Blanc - Combe Violon",text:"Un original blanc du sud, blanc de gastronomie : fraicheur, fruit, complexit\xe9, longueur en bouche\u2026Le parfait compagnon des poissons d\xe9licats, grill\xe9s ou en sauce, des coquilles saint jacques po\xeal\xe9es, des volailles \xe0 la cr\xe8me, des fromages particuli\xe8rement de ch\xe8vre. Rare et original.",img:h},{headerText:"Minervois La Livini\xe8re - Les 3 \xe9cus",text:"Nez complexe, de fruits noirs (myrtille, pruneaux, cassis) de torr\xe9faction (chocolat) avec des subtiles notes de boite \xe0 cigares et de garrigue. L\u2019attaque est ronde et puissante, suivie d'un milieu de bouche structur\xe9 tout en restant \xe9l\xe9gant. Fra\xeecheur appara\xeet en fin de bouche, et offre une finale \xe9quilibr\xe9e. Fin de bouche longue et persistante sur les \xe9pices, le thym sauvage et le pain grill\xe9.",img:p},{headerText:"Minervois Blanc - Combe Violon",text:"Un original blanc du sud, blanc de gastronomie : fraicheur, fruit, complexit\xe9, longueur en bouche\u2026Le parfait compagnon des poissons d\xe9licats, grill\xe9s ou en sauce, des coquilles saint jacques po\xeal\xe9es, des volailles \xe0 la cr\xe8me, des fromages particuli\xe8rement de ch\xe8vre. Rare et original. ",img:h}],g=[{img:b,title:"Whites",text:"blabla lorem ipsum..."},{img:f,title:"Minervois La Livini\xe8re",text:"blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum... blabla lorem ipsum..."},{img:v,title:"Red",text:"blabla lorem ipsum..."}],j=Object(a.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M17.568 9.432c0-2.55-.906-5.592-.944-5.72-.128-.423-.517-.712-.958-.712h-7.332c-.441 0-.83.289-.958.712-.038.128-.944 3.17-.944 5.72 0 2.735 1.984 5.011 4.587 5.477l-.019.091v4h-1c-.553 0-1 .447-1 1s.447 1 1 1h4c.553 0 1-.447 1-1s-.447-1-1-1h-1v-4l-.019-.092c2.603-.466 4.587-2.741 4.587-5.476zm-5.568 3.568c-1.773 0-3.236-1.303-3.511-3h7.021c-.274 1.697-1.737 3-3.51 3zm-3.555-4c.062-1.468.422-3.093.653-4h5.803c.231.907.591 2.532.653 4h-7.109z"})}),y=i(21),O=i(76),w=i.n(O),L=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={side:a.props.id%2},a}return Object(n.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"flex flex-column mw7 w-100 pa2 ml4 mr4 mb5 mb5-m mb2-l justify-center items-center dimBg waveBg2",children:[Object(a.jsx)("h4",{className:" mt3 mb4 f4 h3 tc flex flex-column justify-center",children:this.props.data.title}),Object(a.jsxs)("div",{className:"relative mt3 mw7 w-80 ",children:[Object(a.jsxs)("div",{className:"testimonialAuthor pa2 flex flex-column items-center bg-white-60  pa2 br4 ",children:[Object(a.jsx)("div",{className:"overflow-hidden flex flex-column justify-center items-center",children:Object(a.jsx)("img",{src:this.props.data.img,alt:this.props.data.authorCompany})}),Object(a.jsxs)("div",{className:"w4",children:[Object(a.jsx)("span",{className:"tc i db f6",children:this.props.data.author}),Object(a.jsx)("span",{className:"tc b db f6",children:this.props.data.authorCompany})]})]}),Object(a.jsx)("div",{className:"badgeText b tc3 mb5-l mb4-m f5-l f6 grow br2 ba bw1 ph3 pv2 dib  bg-white-30 hover-bg-white bgblur ",children:this.props.data.badge})," ",Object(a.jsx)("div",{className:"flex testimonial",children:Object(a.jsx)("p",{className:"tj ",children:this.props.data.text})}),Object(a.jsx)("div",{className:"badgeGrade flex justify-end mr3 b black underline mb3 f4 dib",children:this.props.data.grade})]})]},this.props.id)}}]),i}(c.Component),T=[{author:"Georgina Hindle",authorCompany:"Decanter",wine:"Domaine Les Combes Cach\xe9es, Cuv\xe9e Axel, Minervois \u2013 La Livini\xe8re 2015",img:i.p+"static/media/decanter_logo.6f7017e4.jpg",title:"Languedoc gems : 24 Minervois-La Livini\xe8re wines tasted",grade:"93/100",text:"Cuv\xe9e Axel by Domaine Les Combes Cach\xe9es also impressed. A limited production of 730 bottles were made in 2015 \u2013 a blend of the best three barrels from the vintage. The wine, made from Carignan (5%), Cinsault (10%), Grenache (20%) and Syrah (65%), is well-structured with aromatic power and great personality.",badge:"Top picks"},{author:"Joe Czerwinski",authorCompany:"The wine Advocate - Issue 249",wine:"Domaine Les Combes Cach\xe9es, Les Trois \xc9cus, Minervois \u2013 La Livini\xe8re 2017",img:i.p+"static/media/parker_wine_advocate_logo.51e8fcda.jpg",title:"Minervois La Livini\xe8re",badge:"Top producers",grade:"90/100",text:"Minervois La Livini\xe8re: Inland and upland, with a base of limestone and clay, this is a dry area of warms days and cool nights. Intense and powerful wines are the rule. Top producers in this report: Domaine de la Borie Blanche, Domaine Michelin Les Combes Cach\xe9es, G\xe9rard Bertrand. "}],N=(i(97),function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(e){var a;Object(s.a)(this,i),a=t.call(this,e);for(var r=[],n=0;n<3;n++)r.push(u.a.createRef());return a.state={activeAll:!0,hover:null,refs:r},a}return Object(n.a)(i,[{key:"componentDidMount",value:function(){Object(y.e)()}},{key:"checkZone",value:function(e){var t,i=Object(r.a)(document.querySelectorAll(".wineFamily"));try{for(i.s();!(t=i.n()).done;){var a=t.value;if(a.contains(e))return a.id}}catch(s){i.e(s)}finally{i.f()}}},{key:"mouseEnter",value:function(e){var t=this.checkZone(e.target);this.setState({activeAll:!1,hoverId:t})}},{key:"mouseLeave",value:function(e){this.setState({activeAll:!0})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"wines",children:[Object(a.jsx)("h1",{className:"winesTitle sectionTitle",children:"Our wines"}),Object(a.jsx)("div",{className:"wineOverview center flex flex-row-ns flex-column justify-center-ns",children:g.reduce((function(t,i){var r,s;return t.push(Object(a.jsxs)("div",{className:"wineFamily w-30-ns flex flex-column items-center justify-center"+(e.state.activeAll||e.state.hoverId==t.length?"notdimmed":"dimmed"),id:t.length,onMouseEnter:function(t){return e.mouseEnter(t)},onMouseLeave:function(t){return e.mouseLeave(t)},children:[Object(a.jsx)("img",{src:i.img,className:"objectFitContain grow",alt:i.title}),Object(a.jsx)("h2",{className:"pa1 no-underline pointer h3-ns mt0 mb5-ns mb2",i:t.length,children:i.title}),Object(a.jsxs)("div",{className:"flex items-center w4 center pointer ma2 ma3-ns f5-l f6 i grow br2 ba bw1 ph3 pv2 dib black hover-white hover-bg-black-60 bgblur",onClick:(r=t.length,s=e.state.refs,function(){console.log(r),s[r].current.scrollIntoView({behavior:"smooth"})}),children:[Object(a.jsx)("span",{className:"pr2 nowrap tc ",children:"See wines"}),Object(a.jsx)("span",{className:"w3 ",children:j})]},t.length),Object(a.jsxs)("div",{className:"pa1 mt0 tc i mb5 mb2-ns",children:[Object(a.jsx)(w.a,{text:i.text,min:100,ideal:150,max:220,readMoreText:"Read more"}),i.txt]})]},t.length)),t}),[])}),Object(a.jsx)("div",{className:"flex flex-column flex-row-l items-center",children:T.reduce((function(e,t){return e.push(Object(a.jsx)(L,{data:t,id:e.length})),e}),[])}),Object(a.jsx)(m.a,{refprop:this.state.refs[0]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"wineHeaderText mt5 pa5 tc cf1-ns b underline",children:"Minervois La Livini\xe8re"}),Object(a.jsxs)("div",{id:"wineList",className:"mt5 mb5",children:[Object(a.jsx)(d,{id:0,content:x[0],metaTitle:"Minervois La Livini\xe8re"}),Object(a.jsx)(d,{id:1,content:x[1]}),Object(a.jsx)(d,{id:2,content:x[2]})," "]}),Object(a.jsx)(m.a,{refprop:this.state.refs[1]}),Object(a.jsx)("h2",{className:"wineHeaderText mt5 pa5 tc cf1-ns b underline",children:"Minervois Rouge"}),Object(a.jsxs)("div",{id:"wineList",className:"mt5 mb5",children:[Object(a.jsx)(d,{id:3,content:x[3],metaTitle:"Minervois Rouge"}),Object(a.jsx)(d,{id:4,content:x[4]}),Object(a.jsx)(d,{id:5,content:x[5]})]}),Object(a.jsx)(m.a,{refprop:this.state.refs[2]}),Object(a.jsx)("h2",{className:"wineHeaderText mt5 pa5 tc cf1-ns b underline",children:"Others"}),Object(a.jsxs)("div",{id:"wineList",className:"mt5 mb5",children:[Object(a.jsx)(d,{id:6,content:x[6],metaTitle:"Others"}),Object(a.jsx)(d,{id:7,content:x[7]}),Object(a.jsx)(d,{id:8,content:x[8]})]})]})]})}}]),i}(c.Component))}}]);
//# sourceMappingURL=4.323e913b.chunk.js.map