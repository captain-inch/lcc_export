(this.webpackJsonpdomaine_michelin=this.webpackJsonpdomaine_michelin||[]).push([[7],{97:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return k}));var a=i(0),r=i(6),n=i(7),s=i(9),o=i(8),c=i(1),l=i(17),h=i(14),d=i(83),g=[{src:i.p+"static/media/gallery_1.bbd6b438.jpg",height:90,width:136},{src:i.p+"static/media/DSC_9260.f11aeabd.jpg",height:90,width:136},{src:i.p+"static/media/DSC04091.793229e6.jpg",height:90,width:135},{src:i.p+"static/media/DSC04733.396aeb36.jpg",height:90,width:135},{src:i.p+"static/media/DSC_9001.7fae44e6.jpg",height:90,width:136},{src:i.p+"static/media/DSC_9016.23483d0b.jpg",height:90,width:136},{src:i.p+"static/media/DSC_9023.70adfaab.jpg",height:727,width:1630},{src:i.p+"static/media/DSC_9229.66f18be2.jpg",height:900,width:1358},{src:i.p+"static/media/DSC_9238.190039df.jpg",height:900,width:1358},{src:i.p+"static/media/DSC_9286.6b863470.jpg",height:900,width:1358},{src:i.p+"static/media/IMG_3068.4e6161dd.jpg",height:900,width:1200},{src:i.p+"static/media/gallery_2.bd2144ce.jpg",height:900,width:1200},{src:i.p+"static/media/IMG_0528.7c6290c3.jpg",height:900,width:1200},{src:i.p+"static/media/IMG_0682.c7e5e4cb.jpg",height:698,width:1600},{src:i.p+"static/media/IMG_4364.581f01ec.JPG",height:1200,width:900},{src:i.p+"static/media/P1150951.ea854155.JPG",height:900,width:1347},{src:i.p+"static/media/IMG_2867.00f81f5b.jpg",height:900,width:1200},{src:i.p+"static/media/IMG_1746.cd13fe18.jpg",width:1200,height:900},{src:i.p+"static/media/P1160080.efb3a785.jpg",height:900,width:1347},{src:i.p+"static/media/DSCF0183.3cb3e9d8.jpg",height:3500,width:2334}],p=i(85),u=(i(96),function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={gallerySettings:g,lightboxSrcs:[],lightboxActive:!1,lightboxKey:0},a.openLightbox=a.openLightbox.bind(Object(h.a)(a)),a}return Object(n.a)(i,[{key:"openLightbox",value:function(e){try{var t,i=[],a=Object(l.a)(document.querySelectorAll(".react-photo-gallery--gallery img"));try{for(a.s();!(t=a.n()).done;){var r=t.value;i.push(r.src)}}catch(s){a.e(s)}finally{a.f()}var n=i.findIndex((function(t){return t===e.target.src}));this.setState({lightboxSrcs:i,lightboxActive:!0,lightboxKey:n}),document.body.style.overflow="hidden"}catch(e){console.warn("Error opening image lightbox...",e)}}},{key:"closeLightbox",value:function(e){document.body.style.overflow="visible",this.setState({lightboxActive:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"reactGallery",className:"mr4-l ml4-l pa2 b2 center",children:[Object(a.jsx)("div",{style:{backdropFilter:"blur(5px)"},className:"lightboxBg dn z-2 fixed top-0 left-0 w-100 vh-100 bg-black-60 pointer",children:this.state.lightboxActive?Object(a.jsx)(p.a,{mainSrc:this.state.lightboxSrcs[this.state.lightboxKey],nextSrc:this.state.lightboxSrcs[(this.state.lightboxKey+1)%this.state.lightboxSrcs.length],prevSrc:this.state.lightboxSrcs[(this.state.lightboxKey+this.state.lightboxSrcs.length-1)%this.state.lightboxSrcs.length],onCloseRequest:function(t){return e.closeLightbox(t)},onMovePrevRequest:function(){return e.setState({lightboxKey:(e.state.lightboxKey+e.state.lightboxSrcs.length-1)%e.state.lightboxSrcs.length})},onMoveNextRequest:function(){return e.setState({lightboxKey:(e.state.lightboxKey+1)%e.state.lightboxSrcs.length})}}):null}),Object(a.jsx)(d.a,{photos:this.state.gallerySettings,direction:"row",targetRowHeight:250,onClick:this.openLightbox})]})}}]),i}(c.Component)),b=i.p+"static/media/quality.ec36dfe1.jpg",m=i.p+"static/media/cellar.ae690163.jpg",f=i.p+"static/media/making.f19764a7.jpg",y=i.p+"static/media/organic.0197982a.jpg",x=i.p+"static/media/terroirs.ba0c5c47.jpg",v=[{headerText:"A terroir like no other",img:x,text:"Domaine Michelin\u2019s uniqueness lies in the quality of the soil where the winery is established:  small hidden valleys (\u201ccombes\u201d), located on the \u201cCausse de Minerve\u201d in the middle of the garrigue, on the southern slopes of the rugged, bushy Montagne Noire, facing the Pyrenees\u2019 Mountain. Our vines swirl down the hills, well drained and exposed, planted in clay and limestone soils, covered by gravels. \nOur vines are spread out in not less than 18 different sites, on the slopes and terraces of the Montagne Noire\u2026 and it takes hours to tour them by car! We have purchased them from different owners, tired of operating small and remote plots, and have gathered them to create the Domaine Michelin. Our idea: diversity and quality! Each plot brings its own personality and specific touch in final wine blend.\nOn average, our vines are 25 years old, with some very old Carignan (1953, 1969)."},{headerText:"Quality as a spirit",img:b,text:"We search the highest quality in every step of our wine making process: \n-\tVine pruning is adapted to each plot and vine type.\n-\tHarvest dates are decided plot per plot, according to the ideal maturity of grapes. \n-\tGrapes are handpicked, and carefully selected directly on the plot, and then at the cellar, using a sophisticated sorting table. \n-\tVinification is made plot per plot, with dedicated tanks, looking for ultimate expression of terroirs.\n-\tAging is adapted to the wine style: stainless steel for Minervois and Whites, oak barrels for Livini\xe8re. \n-\tBlend is made at the end of the aging process, 18 to 24 months after harvest for Livini\xe8re. It consists in a very thorough tasting process of each tank and every barrel\u2026  always searching for the best balance, the finest flavors, and the highest quality."},{headerText:"Organic by conviction",img:y,text:"Our goal is simple: produce high-quality wines, with a strong personality and an absolute respect for our precious environment. We believe it is the only way a terroir can express all its potential. So of course, right from the beginning, the Domaine Michelin - Les Combes Cach\xe9es has been conducted in an organic mode. We have never used any chemical products neither in the vine, nor in the cellar. We obtained the official organic label for all our products in 2018."},{headerText:"A state-of-the-art cellar",img:m,text:"Starting from scratch, we had to buy or quickly build our own wine cellar. We had the opportunity to acquire and refurbish the old distillery of Siran\u2019s Wine Cooperative, dating from 1904. This stone building has the typical architecture of wine cooperatives, in the South of France, in the 20th century. It had been unused for decades. We completely rehabilitated the building in order to create a modern wine cellar, perfectly designed for wine making and aging. The winery now has its own integrated cooling system linking all stainless-steel vats, allowing wine making at ideal temperature during fermentation process. Wine storage space and barrel room have their own AC system to maintain suitable temperature during aging and storage."},{headerText:"The art of wine making",img:f,text:"Wine making at Domaine Michelin starts with the harvest of each plot, at perfect maturity. Whites are directly pressed, full grape. For the reds, the grapes are destemmed and crushed, after careful selection using a state-of-the-art sorting table. Fermentation is made in stainless steel vats, with precise temperature control.  The extraction process, vatted duration, and related operations are decided plot per plot, vat per vat, according to the profile of the harvest, after daily wine tasting\u2026 The blending is performed after aging, before bottling, in order to obtain the very best of each vintage.\nWhite wines and Minervois red are aged in stainless steel vats. Minervois Blanc is aged on lees, with regular treading. Minervois-La Livini\xe8re Cru are aged in 300L French oak barrels."}],j=i(76),w=i.n(j),O=i.p+"static/media/bgbanner.590b433d.jpg",S=i(21),k=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"componentDidMount",value:function(){Object(S.d)()}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"winery",className:"mt5",children:[Object(a.jsxs)("div",{className:"flex flex-column items-center",children:[Object(a.jsx)("h1",{className:"tc dib dimBgOut z-5",id:"winerytitle",style:{background:"#ffffffaa",backdropFilter:"blur(3px)",margin:0},children:"An exceptional vineyard"}),Object(a.jsx)("div",{className:"w-100",id:"winerybanner",style:{marginTop:"-30px",height:"100px",background:"url("+O+")",backgroundSize:"cover",backgroundRepeat:"repeat-x"}})]}),Object(a.jsx)("h3",{className:"sectionSubtitle",children:"Our core values"}),Object(a.jsx)("div",{className:"flex flex-row flex-wrap justify-around",children:v.reduce((function(e,t){return e.push(Object(a.jsxs)("div",{className:"wineryItem flex flex-column w5 ma2 items-center dimBg waveBg2",children:[Object(a.jsx)("h4",{className:"mt3 mb3 h3 flex flex-column justify-center",children:t.headerText}),Object(a.jsx)("div",{className:"w5 h5 overflow-hidden flex flex-column justify-center",children:Object(a.jsx)("img",{className:"grow",src:t.img,alt:t.name})}),Object(a.jsx)("div",{className:"tj mt3 prewrap",children:Object(a.jsx)(w.a,{text:t.text,min:100,ideal:150,max:220,readMoreText:"Read more"})})]},e.length)),e}),[])}),Object(a.jsx)("h3",{className:"sectionSubtitle",id:"galleryTitle",children:"Gallery"}),Object(a.jsx)("div",{id:"galleryWrapper",children:Object(a.jsx)(u,{id:"galleryReact",targetRowHeight:300})})]})}}]),i}(c.Component)}}]);
//# sourceMappingURL=7.c4ad1d30.chunk.js.map