(this.webpackJsonplcc_export=this.webpackJsonplcc_export||[]).push([[4],{51:function(e,t,i){"use strict";e.exports=i(52)},52:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i(1)),a=o(i(4)),r=o(i(53));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var i=[],n=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(l){a=!0,r=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=[(i=d(this,h(t).call(this,e))).props.text,i.props.min,i.props.ideal,i.props.max],a=l(r.default.apply(void 0,n),2),o=a[0],s=a[1];return i.state={displaySecondary:!1,primaryText:o,secondaryText:s,readMoreText:i.props.readMoreText},i}var i,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),i=t,(a=[{key:"setStatus",value:function(){var e=!this.state.displaySecondary;this.setState({displaySecondary:e})}},{key:"render",value:function(){return this.state.secondaryText?this.state.displaySecondary?n.default.createElement("div",{className:"display-text-group"},n.default.createElement("span",{className:"displayed-text",onClick:this.setStatus.bind(this)},"".concat(this.state.primaryText," ").concat(this.state.secondaryText))):n.default.createElement("div",{className:"display-text-group"},n.default.createElement("span",{className:"displayed-text"},this.state.primaryText,n.default.createElement("span",{style:{display:"none"}},this.state.secondaryText),n.default.createElement("div",{className:"read-more-button",onClick:this.setStatus.bind(this)},this.state.readMoreText))):n.default.createElement("div",{className:"display-text-group"},n.default.createElement("span",{className:"displayed-text"},"".concat(this.state.primaryText," ").concat(this.state.secondaryText)))}}])&&c(i.prototype,a),o&&c(i,o),t}(n.default.Component);t.default=m,m.propTypes={text:a.default.string.isRequired,min:a.default.number,ideal:a.default.number,max:a.default.number,readMoreText:a.default.string},m.defaultProps={readMoreText:"read more"}},53:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[".",",","!","?","'","{","}","(",")","[","]","/"],a=function(e){if(" "===e)return!0},r=function(e,t,i,r){if(e<i&&e>r&&function(e,t){if(n.indexOf(t[e])>=0&&a(t[e+1]))return!0}(e,t))return!0},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;if(n<t||i>n||i<t)throw new Error("The minimum length must be less than the maximum, and the ideal must be between the minimum and maximum.");if(e.length<i)return[e,""];for(var o,s,l=i,c=i,d=function(t){a(e[t])&&(o=o||t)};l<n||c>t;){if(r(l,e,n,t)){s=l+1;break}if(r(c,e,n,t)){s=c+1;break}d(l),d(c),l++,c--}return void 0===s&&(s=o&&o>=t&&o<=n?o:i-t<n-i?t:n),[e.slice(0,s),e.slice(s).trim()]};t.default=o},73:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return N}));var n=i(0),a=i(5),r=i(6),o=i(8),s=i(7),l=i(1),c=i.p+"static/media/trio.098e76a0.jpg",d=i.p+"static/media/michel.72335dcb.jpg",h=i.p+"static/media/xavier.ea0daded.jpg",u=i.p+"static/media/francois.b294df6e.jpg",m=i.p+"static/media/fred.a73b7beb.jpg",f={img:c,title:"Xavier, Fran\xe7ois & Michel"},p={title:"RECENTLY STARTED, IMMEDIATELY IDENTIFIED",body:[{text:"Domaine Michelin \u2013 Les Combes Cach\xe9es",highlight:!0},{text:" is the dream come true of three old friends (Xavier Michelin, Michel Pousse and Fran\xe7ois Aumonier) from the same village near Toulouse, with different backgrounds but a shared passion for wine. Michel and Xavier have been riding in bicycle in the past 20 years, in most of the French vineyard and came to the conclusion that they should definitely own and operate their own wine estate. After searching for 2 years,"},{text:" they found the ideal quality-driven terroir and vines they were looking for in La Livini\xe8re.",highlight:!0},{text:" The team partnered with an experienced winemaker from the region, with international background. With the support of friends and family, the estate Les Combes Cach\xe9es launched its first vintage 2015, immediately noticed by critics. Since 2015 the Estate has permanently evolved with new vines, new wine cellar, new equipment, enlarged team, etc. in the spirit of perpetual improvement and quality search.",highlight:!1}]},g=[{name:"Xavier Michelin",img:h,text:"Xavier, initially a farmer, was producing cereals in the region of Toulouse. He has a large experience of agriculture and ground terrain. Within Domaine Michelin- Les Combes Cach\xe9es, he is now driving all operations in the vineyard\u2026 and also driving tractors! Xavier is also a former rally man, and is very good at driving any kind of vehicle including with tools and heavy load. He very quickly fully involves himself in all aspects of winery operations."},{name:"Michel Pousse",img:d,text:"Michel, initially geographer (PHD),  has a 30 year international business experience worldwide  in the field of space industry and meteorology (Spot Image, Meteo France International). Within Domaine Michelin-Les Combes Cach\xe9es, Michel is now driving wine making, wine marketing and sales. He went through specific training for wine making in Universit\xe9 du Vin, in Suze la Rousse near Avignon, in order to get appropriate background.  Michel loves this new live, on the field, in direct link with its geographical background."},{name:"Fran\xe7ois Aumonier",img:u,text:"Fran\xe7ois, initially agronomist, has a long career in the marketing of high technologies and business management. He is now taking care of administration and finance for Domaine Michelin-Les Combes Cach\xe9es. Fran\xe7ois favorite kidding is to say that, unlike Xavier and Michel, he is doing absolutely nothing for Domaine Michelin - Les Combes Cach\xe9es , except non-significant and funny job like custom declarations, finance  and administration matters that Xavier and Michel do hate to handle."},{name:"Frederic Justeau",img:m,text:"Frederic, a.k.a Fred, is the Swiss Knife of the Domaine. Fred has a very comprehensive experience in all fields of a winery, as attentive in the vine tending as in the delicate cellar operations. He has been in charge of wine making in New Zealand, Australia, South Africa and various regions of France including famous estates. Within Domaine Michelin Les Combes Cach\xe9es, he is in charge of all operations in the vineyard and in the cellar, and loves the diversity of his job. Xavier and Michel would love to have Fred 100% involved in their main field of activity, vine or cellar work, but Fred enjoys having a comprehensive job with all aspects. And Fred aims at having always a very positive spirit, aiming at finding solutions to problems."}],b=i.p+"static/media/nicolasT.367a9786.jpg",y=i.p+"static/media/nicolasD.b7389d39.jpg",v=i.p+"static/media/paula.e305807f.jpg",x=i.p+"static/media/family.d8d5e134.jpg",j={title:"Our oenologists team ",text:"Since 2020 Domaine Michelin Les Combes Cach\xe9es has established a partnership with a leading oenological laboratory for Southern France, Laboratoire Dubernet, based near Narbonne. Laboratoire Dubernet is at the forefront of oenological science with many innovations and related services in all fields. They do comply with most demanding international standards ISO 17025, COFRAC\u2026 \nLaboratoire Dubernet is providing to Domaine Michelin-Les Combes Cach\xe9es all along the year advice and analytical follow up for wine making, aging and bottling, with a team of not less than 3 experienced oenologist, each one with its own duty:",members:[{src:b,name:"Nicolas Triviaux",text:"Agronomist, specialized in oenology. Wine maker in Southern France, California, New Zealand, Australia. Since 2010 Nicolas has been in charge of wine making operations and management in several big wineries of Languedoc region ( Minervois, Corbi\xe8res, Cabard\xe8s). Joined Dubernet in 2021 as oenologist, advisor.."},{src:v,name:"Paula Godoy",text:"Agronomist, graduated in Chile, specialized in oenology. Extensive experience with many winery of all size in Chile (Anakena , Concha y Toro, Casa Lapostolle etc.), California, Australia and France (Paul Mas, etc...). Joined Dubernet in 2020 as oenologist, advisor.."},{src:y,name:"Nicolas Dutour: ",text:"Agronomist and oenologist, graduated in 2007. Wine making experience in Southern France, California and Brazil. Nicolas  has had management responsabilities in Languedoc region (Domaines Auriol). Nicolas joined Laboratoire Dubernet in 2013 as oenologist, senior advisor."}]},w={src:x,title:"Boris, Thibault, Etienne, Martin, Christine, Maria and team, among others...",text:"Apart from permanent staff, many people are involved in various aspects of the Winery life. Starting with founders own family members. Boris and Thibault, Xavier\u2019s sons, have been working for a very significant time in the vines for daily work, harvest or cellar\u2019s work. Martin, Camille and Etienne, Michel\u2019s children,  have been involved in other duties like wine cellar equipment for Martin and marketing support and web site conception for Camille and Etienne\u2026  And also many temporary staff is  contributing to winter, spring or hand picking. Like Maria and his family, living nearby ad often involved in vine work. Without seasonal staff we would obviously not be in a position to face the peak of activities in the vines."},O=i(18),k=i(51),M=i.n(k),N=function(e){Object(o.a)(i,e);var t=Object(s.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"componentDidMount",value:function(){Object(O.c)()}},{key:"render",value:function(){return Object(n.jsxs)("div",{id:"story",children:[Object(n.jsx)("h1",{className:"sectionTitle z-999",children:"Story"}),Object(n.jsx)("h3",{className:"sectionSubtitle",children:f.title}),Object(n.jsx)("div",{className:"flex flex-column justify-center mt3 mb4",children:Object(n.jsx)("img",{id:"trio",className:"shadow-3",style:{margin:"auto auto"},src:f.img,alt:f.title})}),Object(n.jsx)("h3",{className:"sectionSubtitle",children:p.title}),Object(n.jsx)("p",{id:"storyText",className:"center tj pa2 pa3-ns mw7 w-100",children:p.body.reduce((function(e,t){return e.push(t.highlight?Object(n.jsx)("span",{className:"emphathize",children:t.text},e.length):t.text),e}),[])})," ",Object(n.jsx)("div",{className:"flex flex-row flex-wrap justify-around",children:g.reduce((function(e,t){return e.push(Object(n.jsxs)("div",{className:"teamItem flex flex-column w5 ma2",children:[Object(n.jsx)("h4",{className:"mt3 mb3",children:t.name}),Object(n.jsx)("img",{className:"shadow-3 grow",src:t.img,alt:t.name}),Object(n.jsx)("div",{className:"tj",children:Object(n.jsx)(M.a,{text:t.text,min:130,ideal:160,max:220,readMoreText:"Read more"})})]},e.length)),e}),[])}),Object(n.jsxs)("div",{id:"oenologists",children:[Object(n.jsx)("h3",{children:j.title}),Object(n.jsx)("p",{className:"mw7 tj center pa2",children:j.text}),Object(n.jsx)("div",{className:"flex flex-row flex-wrap justify-around",children:j.members.reduce((function(e,t){return e.push(Object(n.jsxs)("div",{className:"teamItem flex flex-column w5 ma2",children:[Object(n.jsx)("h4",{className:"mt3 mb3",children:t.name}),Object(n.jsx)("img",{className:"shadow-3 grow",src:t.src,alt:t.name}),Object(n.jsx)("div",{className:"tj",children:Object(n.jsx)(M.a,{text:t.text,min:130,ideal:160,max:220,readMoreText:"Read more"})})]},e.length)),e}),[])})," "]}),Object(n.jsxs)("div",{id:"family",children:[Object(n.jsx)("h3",{className:"mb2",children:w.title}),Object(n.jsx)("p",{className:"mw7 tj center pa2",children:w.text}),Object(n.jsx)("div",{className:"flex items-center",children:Object(n.jsx)("img",{className:"shadow-3 grow mw6 center",src:w.src,alt:w.title})})]})]})}}]),i}(l.Component)}}]);
//# sourceMappingURL=4.8c95071c.chunk.js.map