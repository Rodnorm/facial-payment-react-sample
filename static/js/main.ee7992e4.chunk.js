(this["webpackJsonpfacial-payment-react"]=this["webpackJsonpfacial-payment-react"]||[]).push([[0],{29:function(e,t,a){e.exports=a(54)},34:function(e,t,a){},35:function(e,t,a){},43:function(e,t){},44:function(e,t){},45:function(e,t){},54:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),o=a(24),i=a.n(o),c=(a(34),a(35),a(27)),s=a(67),d=a(17),l=a.n(d),m=a(25),u=a(4);var v=function(){var e=Object(r.useRef)(document.createElement("div")),t=function(){navigator.getUserMedia?(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,navigator.getUserMedia({video:!0},o.stream,o.error)):navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}),Promise.all([u.g("/models"),u.e("/models"),u.f("/models"),u.i.tinyFaceDetector.loadFromUri("/models"),u.i.faceLandmark68Net.loadFromUri("/models"),u.i.faceRecognitionNet.loadFromUri("/models"),u.i.faceExpressionNet.loadFromUri("/models")]).then((function(t){setTimeout((function(){return function(e){var t=u.b(e.current.children[0]);t.className="canvas",e.current.prepend(t);var a={width:e.current.children[1].videoWidth,height:e.current.children[1].videoHeight};u.h(t,a),setInterval(Object(m.a)(l.a.mark((function r(){var n,o,i;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.c(e.current.children[1],new u.a).withFaceLandmarks().withFaceExpressions();case 2:n=r.sent,o=u.j(n,a),(i=t.getContext("2d"))&&i.clearRect(0,0,t.width,t.height),u.d.drawDetections(t,o),u.d.drawFaceLandmarks(t,o),u.d.drawFaceExpressions(t,o),n[0]&&void 0!=n[0].expressions&&n.length>-1&&n[0].hasOwnProperty("expressions")&&n[0].expressions.happy>.99&&console.log("sorriu");case 10:case"end":return r.stop()}}),r)}))),100)}(e)}),2e3)}))},a=Object(r.useState)({stream:function(t){return e.current.children[0].srcObject=t},error:function(){return console.log("erro")}}),o=Object(c.a)(a,1)[0];return Object(r.useEffect)((function(){return t()}),[]),n.a.createElement(s.a,{maxWidth:"sm"},n.a.createElement("div",{ref:e},n.a.createElement("video",{autoPlay:!0})))},h=a(68),f=a(26),g=a.n(f);var p=function(){return n.a.createElement(h.b,{history:g()({basename:"/facial-payment-react-sample"})},n.a.createElement(h.a,{exact:!0,path:"/",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.ee7992e4.chunk.js.map