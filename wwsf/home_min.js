function initialize(){var e=[{stylers:[{hue:"#fff"},{visibility:"on"},{gamma:.65},{weight:.4},{saturation:-100}]},{elementType:"labels",stylers:[{visibility:"on"}]}];var t={zoom:3,center:brooklyn,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,MY_MAPTYPE_ID]},mapTypeId:MY_MAPTYPE_ID,zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.DEFAULT,position:google.maps.ControlPosition.LEFT_BOTTOM}};map=new google.maps.Map(document.getElementById("map-canvas"),t);var n={name:"Custom Style"};var r=new google.maps.StyledMapType(e,n);map.mapTypes.set(MY_MAPTYPE_ID,r);var i=new google.maps.LatLng(43.6606141,-79.3527294);var s=new google.maps.LatLng(18.4573,-69.94863);var o=new google.maps.LatLng(34.026474,-118.254147);var u=new google.maps.LatLng(37.981235,23.7320245);var a=new google.maps.LatLng(32.0878802,34.797246);var f=new google.maps.LatLng(44.9397075,-93.1060534);var l=new google.maps.LatLng(42.4422877,-76.4983749);var c=new google.maps.LatLng(17.1490283,-36.6693794,5);var h=new google.maps.LatLng(34.0204989,-118.4117325);var p=new google.maps.LatLng(45.5601451,-73.7120832);var d=new google.maps.LatLng(40.7212149,-73.9970065);var v=new google.maps.LatLng(40.6211925,22.9460273,13);var m="icon-1.png";var g="icon-2.png";var y="icon-3.png";var b="icon-4.png";var w="icon-5.png";var E="icon-6.png";var S="icon-7.png";var x="icon-8.png";var T="icon-9.png";var N="icon-10.png";var C="icon-11.png";var k="large1.png";var L="large2.png";var A="large3.png";var O="large4.png";var M="large5.png";var _="large6.png";var D="large6sec.png";var P="large7.png";var H="large8.png";var B="large9.png";var j="large10.png";var F="large11.png";var I=new google.maps.Marker({position:i,map:map,title:"Hello World!",icon:m});var q=new google.maps.Marker({position:s,map:map,icon:g});var R=new google.maps.Marker({position:o,map:map,icon:y});var U=new google.maps.Marker({position:u,map:map,icon:b});var z=new google.maps.Marker({position:a,map:map,icon:w});var W=new google.maps.Marker({position:f,map:map,icon:E});var X=new google.maps.Marker({position:l,map:map,icon:S});var V=new google.maps.Marker({position:c,map:map,icon:x});var $=new google.maps.Marker({position:h,map:map,icon:T});var J=new google.maps.Marker({position:p,map:map,icon:N});var K=new google.maps.Marker({position:d,map:map,icon:C});var Q=new google.maps.Marker({position:v,map:map,icon:E});I.setAnimation(google.maps.Animation.DROP);q.setAnimation(google.maps.Animation.DROP);R.setAnimation(google.maps.Animation.DROP);U.setAnimation(google.maps.Animation.DROP);z.setAnimation(google.maps.Animation.DROP);W.setAnimation(google.maps.Animation.DROP);X.setAnimation(google.maps.Animation.DROP);V.setAnimation(google.maps.Animation.DROP);$.setAnimation(google.maps.Animation.DROP);J.setAnimation(google.maps.Animation.DROP);K.setAnimation(google.maps.Animation.DROP);google.maps.event.addDomListener(window,"resize",function(){var e=map.getCenter();google.maps.event.trigger(map,"resize");map.setCenter(e)});google.maps.event.addListener(I,"mouseover",function(){I.setIcon(k);this.setOptions({zIndex:999+1})});google.maps.event.addListener(I,"mouseout",function(){I.setIcon(m)});google.maps.event.addListener(I,"click",function(){window.location.href="project1.html"});google.maps.event.addListener(q,"mouseover",function(){q.setIcon(L);this.setOptions({zIndex:999+1})});google.maps.event.addListener(q,"mouseout",function(){q.setIcon(g)});google.maps.event.addListener(q,"click",function(){window.location.href="project2.html"});google.maps.event.addListener(R,"mouseover",function(){R.setIcon(A);this.setOptions({zIndex:999+1})});google.maps.event.addListener(R,"mouseout",function(){R.setIcon(y)});google.maps.event.addListener(R,"click",function(){window.location.href="project3.html"});google.maps.event.addListener(U,"mouseover",function(){U.setIcon(O);this.setOptions({zIndex:999+1})});google.maps.event.addListener(U,"mouseout",function(){U.setIcon(b)});google.maps.event.addListener(U,"click",function(){window.location.href="project4.html"});google.maps.event.addListener(z,"mouseover",function(){z.setIcon(M);this.setOptions({zIndex:999+1})});google.maps.event.addListener(z,"mouseout",function(){z.setIcon(w)});google.maps.event.addListener(z,"click",function(){window.location.href="project5.html"});google.maps.event.addListener(W,"mouseover",function(){W.setIcon(_);this.setOptions({zIndex:999+1})});google.maps.event.addListener(W,"mouseout",function(){W.setIcon(E)});google.maps.event.addListener(W,"click",function(){window.location.href="project6.html"});google.maps.event.addListener(X,"mouseover",function(){X.setIcon(P);this.setOptions({zIndex:999+1})});google.maps.event.addListener(X,"mouseout",function(){X.setIcon(S)});google.maps.event.addListener(X,"click",function(){window.location.href="project7.html"});google.maps.event.addListener(V,"mouseover",function(){V.setIcon(H);this.setOptions({zIndex:999+1})});google.maps.event.addListener(V,"mouseout",function(){V.setIcon(x)});google.maps.event.addListener(V,"click",function(){window.location.href="project8.html"});google.maps.event.addListener($,"mouseover",function(){$.setIcon(B);this.setOptions({zIndex:999+1})});google.maps.event.addListener($,"mouseout",function(){$.setIcon(T)});google.maps.event.addListener($,"click",function(){window.location.href="project9.html"});google.maps.event.addListener(J,"mouseover",function(){J.setIcon(j);this.setOptions({zIndex:999+1})});google.maps.event.addListener(J,"mouseout",function(){J.setIcon(N)});google.maps.event.addListener(J,"click",function(){window.location.href="project10.html"});google.maps.event.addListener(K,"mouseover",function(){K.setIcon(F);this.setOptions({zIndex:999+1})});google.maps.event.addListener(K,"mouseout",function(){K.setIcon(C)});google.maps.event.addListener(K,"click",function(){window.location.href="project11.html"});google.maps.event.addListener(Q,"mouseover",function(){Q.setIcon(D);this.setOptions({zIndex:999+1})});google.maps.event.addListener(Q,"mouseout",function(){Q.setIcon(E)});google.maps.event.addListener(Q,"click",function(){window.location.href="project6.html"});var G={minZoom:3,maxZoom:9};map.setOptions(G)}var map;var brooklyn=new google.maps.LatLng(16.467694,-42.932149);var MY_MAPTYPE_ID="custom_style";google.maps.event.addDomListener(window,"load",initialize);$(document).ready(function(){$(".open").click(function(e){$(".overlay").css({visibility:"visible",opacity:"1","pointer-events":"auto"}),$(".info-text").css({"pointer-events":"auto"})});$(".close").click(function(e){$(".overlay").css({visibility:"hidden",opacity:"0","pointer-events":"none"}),$(".info-text").css({"pointer-events":"none"})});$("#audio_on").click(function(e){});$(".calendar").click(function(e){$(".calendaroverlay").css({opacity:"1",visibility:"visible","pointer-events":"auto"})});$(".calclose").click(function(e){$(".calendaroverlay").css({opacity:"0",visibility:"hidden","pointer-events":"none"})})})