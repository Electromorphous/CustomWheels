(this["webpackJsonpcustom-wheels"]=this["webpackJsonpcustom-wheels"]||[]).push([[0],{55:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var o=s(48),n=s.n(o),r=s(6),c=(s(55),s(9)),a=s(10),l=s(3),i=s(16),h=s(64),j=s(62),u=s(63),b=s(65),d=s(19),m={position:"absolute",top:0,left:0,right:0,bottom:0,background:"black",color:"white",fontSize:"2rem",zIndex:100};var O=function(){return Object(d.jsx)("div",{style:m,children:Object(d.jsx)("div",{class:"loader-container arc-rotate-double",children:Object(d.jsxs)("div",{class:"loader",children:[Object(d.jsx)("div",{class:"arc-1"}),Object(d.jsx)("div",{class:"arc-2"})]})})})};function v(e){var t=Object(h.a)("https://electromorphous.github.io/CustomWheels/lambo.glb"),s=t.scene,o=t.nodes,n=t.materials;return Object(r.useLayoutEffect)((function(){s.traverse((function(e){return"Mesh"===e.type&&(e.receiveShadow=e.castShadow=!0)})),Object.assign(o.wheel003_020_2_Chrome_0.material,{metalness:0,roughness:.4,color:new l.Color("#222")}),Object.assign(n.WhiteCar,{roughness:1,metalness:0,color:new l.Color("#777"),envMapIntensity:.5})}),[s,o,n]),Object(d.jsx)("primitive",Object(a.a)({object:s},e))}function p(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),s=t[0],o=t[1];return Object(r.useEffect)((function(){var e=function(){return o(window.pageYOffset)};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[]),console.log(s),Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)(O,{}),children:Object(d.jsxs)(i.a,{shadows:!0,camera:{fov:31},resize:{scroll:!0,debounce:{scroll:50,resize:0}},children:[Object(d.jsx)("color",{attach:"background",args:["#000"]}),Object(d.jsxs)(j.a,{speed:1.7,global:!0,zoom:.95,rotation:[-Math.PI/47,-Math.PI/5,0],polar:[0,Math.PI/2.5],children:[Object(d.jsx)(u.a,{environment:null,intensity:.75,contactShadow:!1,shadowBias:-.015,children:Object(d.jsx)(v,{scale:.01})}),Object(d.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],children:[Object(d.jsx)("planeGeometry",{args:[500,500]}),Object(d.jsx)(b.a,{blur:[30,20],resolution:1024,mixBlur:1,mixStrength:50,roughness:.75,depthScale:0,minDepthThreshold:.4,maxDepthThreshold:1.4,color:"#101010",metalness:0})]})]})]})})}n.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.705d7dc2.chunk.js.map