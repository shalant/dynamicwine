(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{201:function(e,t,n){e.exports=n(454)},206:function(e,t,n){},405:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},450:function(e,t,n){},451:function(e,t,n){},454:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(32),i=n.n(r),c=n(197),o=n(10),s=n(19),u=(n(206),n(49)),m=n(79),f=n.n(m),g=n(191),d=n(192),E=n(200),p=n(199),y=function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={hidden:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({hidden:!1})}),this.props.waitBeforeShow)}},{key:"render",value:function(){return this.state.hidden?"":this.props.children}}]),n}(l.a.Component),h={styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#2b0001"},{visibility:"on"}]}],disableDefaultUI:!1,zoomControl:!0};function b(e){f.a.setApiKey("AIzaSyDZpId9vU-4E_1JioDeZ1IV58nOK5ygtZE"),f.a.setLanguage("en");var t=Object(a.useState)([e]),n=Object(s.a)(t,2),r=n[0],i=n[1];Object(a.useEffect)((function(){i(e),e.wineList.map((function(e){f.a.fromAddress(e.address).then((function(t){return e.coords=t.results[0].geometry.location,e}),(function(e){console.error(e)}))}))}),[e,r]);var c=Object(u.withScriptjs)(Object(u.withGoogleMap)((function(t){return l.a.createElement(u.GoogleMap,{className:"map",defaultZoom:1.5,options:h,defaultCenter:{lat:0,lng:0}},e.wineList.map((function(e){return l.a.createElement(u.Marker,{position:e.coords,key:e._id},l.a.createElement(u.InfoWindow,null,l.a.createElement("div",null,e.wine_name," ",e.year)))})))})));return l.a.createElement(y,{waitBeforeShow:700},l.a.createElement(c,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDZpId9vU-4E_1JioDeZ1IV58nOK5ygtZE&v=3.exp&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"545px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}))}var v=n(455),w=n(463),C=n(464),O=n(456);n(405);function S(e){var t=e.setWines,n=e.fullWineList,r=(e.wines,Object(a.useState)("Color")),i=Object(s.a)(r,2),c=i[0],o=i[1],u=Object(a.useState)("Country"),m=Object(s.a)(u,2),f=m[0],g=m[1],d=Object(a.useState)("Size"),E=Object(s.a)(d,2),p=E[0],y=E[1],h=function(e){var a=e.target.id;console.log("colorclicked",n),t((function(){return n.filter((function(e){return e.color===a}))})),o(e.target.id),g("All Countries"),y("All Sizes")},b=function(e){var a=e.target.id;t((function(){return n.filter((function(e){return e.country===a}))})),g(e.target.id),y("All Sizes"),o("All Colors")},S=function(e){var a=e.target.id;t((function(){return n.filter((function(e){return e.size===a}))})),y(e.target.id),o("All Colors"),g("All Countries")},j=Object(a.useState)(!1),k=Object(s.a)(j,2),A=k[0],N=k[1],T=Object(a.useState)(!1),z=Object(s.a)(T,2),G=z[0],I=z[1],B=Object(a.useState)(!1),P=Object(s.a)(B,2),_=P[0],W=P[1],D=function(e){return console.log("e.target.val",e.target.value)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{isOpen:A,toggle:function(){return N((function(e){return!e}))},onChange:D,inline:"true"},l.a.createElement(w.a,{className:"button",caret:!0},c),l.a.createElement(C.a,null,l.a.createElement(O.a,{id:"White",onClick:h},"White"),l.a.createElement(O.a,{id:"Rose",onClick:h},"Rose"),l.a.createElement(O.a,{id:"Red",onClick:h},"Red"),l.a.createElement(O.a,{id:"All Colors",onClick:function(e){console.log("colorall",n),t((function(){return n.filter((function(e){return e.color,e.color,["Red"===e.color]}))})),o(e.target.id),g("All Countries"),y("All Sizes")}},"All"))),l.a.createElement(v.a,{isOpen:G,toggle:function(){return I((function(e){return!e}))},onChange:function(e){return console.log("e.target.val",e.target.value)},inline:"true"},l.a.createElement(w.a,{className:"button",caret:!0},f),l.a.createElement(C.a,null,l.a.createElement(O.a,{id:"Canada",onClick:b},"Canada"),l.a.createElement(O.a,{id:"France",onClick:b},"France"),l.a.createElement(O.a,{id:"Germany",onClick:b},"Germany"),l.a.createElement(O.a,{id:"Greece",onClick:b},"Greece"),l.a.createElement(O.a,{id:"Italy",onClick:b},"Italy"),l.a.createElement(O.a,{id:"New Zealand",onClick:b},"New Zealand"),l.a.createElement(O.a,{id:"Portugal",onClick:b},"Portugal"),l.a.createElement(O.a,{id:"South Africa",onClick:b},"South Africa"),l.a.createElement(O.a,{id:"Spain",onClick:b},"Spain"),l.a.createElement(O.a,{id:"USA",onClick:b},"U.S.A."),l.a.createElement(O.a,{id:"All Countries",onClick:function(e){t((function(){return n.filter((function(e){return e.country,e.country,e.country,e.country,e.country,e.country,e.country,e.country,["USA"===e.country]}))})),g(e.target.id),y("All Sizes"),o("All Colors")}},"All"))),l.a.createElement(v.a,{isOpen:_,toggle:function(){return W((function(e){return!e}))},onChange:D,inline:"true"},l.a.createElement(w.a,{className:"button",caret:!0},p),l.a.createElement(C.a,null,l.a.createElement(O.a,{id:"Glass",onClick:S},"Glass"),l.a.createElement(O.a,{id:"Bottle",onClick:S},"Bottle"),l.a.createElement(O.a,{id:"All Sizes",onClick:function(e){t((function(){return n.filter((function(e){return e.size,["Bottle"===e.size]}))})),y(e.target.id),o("All Colors"),g("All Countries")}},"All"))))}n(178);var j=n(459),k=n(460),A=n(461),N=n(58),T=n.n(N),z=function(){return T.a.get("/api/wines")};n(441);function G(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function I(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var B=n(193),P=n(462),_=n(457),W=n(458),D=(n(442),function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],c=function(){return i(!r)};return l.a.createElement("div",null,l.a.createElement(B.a,{onClick:c,className:"info"},"info"),l.a.createElement(P.a,{isOpen:r,toggle:c,className:"wine"},l.a.createElement(_.a,{toggle:c},l.a.createElement("h2",null,l.a.createElement("strong",{className:"strong"},e.wine.wine_name),' "',e.wine.full_name,'"'),l.a.createElement("h4",null,e.wine.year," ",e.wine.region,", ",e.wine.country," ",l.a.createElement("strong",{className:"strong"}," ",e.wine.PPG," | ",e.wine.PPB))),l.a.createElement(W.a,null,l.a.createElement("strong",{className:"strong"},"Style: "),e.wine.carbonation," ",e.wine.color,l.a.createElement("br",null),l.a.createElement("strong",{className:"strong"},"Varietal: "),e.wine.grape_detail,l.a.createElement("br",null),l.a.createElement("strong",{className:"strong"},"Notes: "),e.wine.details)))});n(450);function M(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),c=Object(s.a)(i,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){z().then((function(e){r(e.data),u(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"body"},l.a.createElement(j.a,{className:"header componenets"},l.a.createElement(k.a,{lg:8}),n.length>0&&l.a.createElement(S,{fullWineList:o,setWines:r,wines:n,className:"filters"})),l.a.createElement(A.a,{fluid:!0,className:"main"},l.a.createElement(j.a,null,l.a.createElement(k.a,{lg:8},l.a.createElement(A.a,{fluid:!0,className:"map"},l.a.createElement(b,{wineList:n}))),l.a.createElement(k.a,{lg:4},l.a.createElement(A.a,{fluid:!0,className:"components"},n.length?l.a.createElement(G,null,n.map((function(e){return l.a.createElement(I,{key:e._id,wine:e},l.a.createElement(j.a,null,l.a.createElement(k.a,{lg:10},l.a.createElement("strong",{wine:e},e.wine_name,' "',e.full_name,'"'),l.a.createElement("div",null,e.year," ",e.grape," ",e.PPG," | ",e.PPB)),l.a.createElement(k.a,{lg:2},l.a.createElement(D,{className:"info",wine:e}," "))))}))):l.a.createElement("h3",null,"No Results to Display"))))))}n(451);function U(){return l.a.createElement("div",null,"log in stuff here")}function Z(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{path:"/",component:M,exact:!0}),l.a.createElement(o.a,{path:"/login",component:U}))}i.a.render(l.a.createElement(Z,null),document.getElementById("root")),function(){function e(){return function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(n),l=new Uint8Array(a.length),r=0;r<a.length;++r)l[r]=a.charCodeAt(r);return l}("BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo")}var t="".concat("","/sw.js");navigator.serviceWorker.register(t).then((function(t){return console.warn("response",t),t.pushManager.getSubscription().then((function(n){t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e()})}))}))}()}},[[201,1,2]]]);
//# sourceMappingURL=main.0277cda4.chunk.js.map