(this["webpackJsonpcustom-wheels"]=this["webpackJsonpcustom-wheels"]||[]).push([[0],{55:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var n=s(48),o=s.n(n),r=s(6),c=(s(55),s(9)),a=s(10),l=s(3),i=s(16),h=s(64),u=s(62),j=s(63),b=s(65),d=s(22);function m(e){var t=Object(h.a)("./lambo.glb"),s=t.scene,n=t.nodes,o=t.materials;return Object(r.useLayoutEffect)((function(){s.traverse((function(e){return"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0)})),Object.assign(n.wheel003_020_2_Chrome_0.material,{metalness:.9,roughness:.4,color:new l.Color("#222")}),Object.assign(o.WhiteCar,{roughness:1,metalness:.5,color:new l.Color("#ab4700"),envMapIntensity:.5})}),[s,n,o]),Object(d.jsx)("primitive",Object(a.a)({object:s},e))}function w(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),s=t[0],n=t[1];return Object(r.useEffect)((function(){var e=function(){return n(window.pageYOffset)};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[]),console.log(s),Object(d.jsxs)(i.a,{shadows:!0,camera:{fov:31},resize:{scroll:!0,debounce:{scroll:50,resize:0}},children:[Object(d.jsx)("color",{attach:"background",args:["#000"]}),Object(d.jsx)(r.Suspense,{fallback:null,children:Object(d.jsxs)(u.a,{speed:1.7,global:!0,zoom:.95,rotation:[-Math.PI/69,-Math.PI/5,0],polar:[0,Math.PI/3],children:[Object(d.jsx)(j.a,{environment:null,intensity:.75,contactShadow:!1,shadowBias:-.015,children:Object(d.jsx)(m,{scale:.01})}),Object(d.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],children:[Object(d.jsx)("planeGeometry",{args:[500,500]}),Object(d.jsx)(b.a,{blur:[30,20],resolution:1024,mixBlur:.7,mixStrength:50,roughness:.75,depthScale:0,minDepthThreshold:.4,maxDepthThreshold:1.4,color:"#101010",metalness:.5})]})]})})]})}o.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.6fc39010.chunk.js.map