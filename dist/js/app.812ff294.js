(function(e){function t(t){for(var o,r,a=t[0],s=t[1],l=t[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f1992144"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"92561e44"}[e]+".css",c=s.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===o||u===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/covid/dist/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d1e":function(e,t,n){"use strict";var o=n("a78e"),r=n.n(o),c=n("256f"),i=n("5bc3");t["a"]={listeners:[],getOnce:function(e){this.listeners.push({method:e,recurrent:!1}),this.call()},get:function(e){this.listeners.push({method:e,recurrent:!0}),this.call()},current:null,posToPoint:function(e){return Object(c["d"])(e)},contained:function(e,t){return new i["b"](t).intersectsCoordinate(e)},update:function(){var e=r.a.getJSON("currentLocation");if(e)return this.set(e);this.poll()},set:function(e){this.current=e,r.a.set("currentLocation",e),this.call()},refresh:function(e){this.set(null),e&&this.getOnce(e)},polling:!1,poll:function(){var e=this;this.polling||(this.polling=!0,navigator.geolocation.watchPosition((function(t){return e.handleNavPos(t)}),(function(e){return console.error("Error fetching position: ".concat(e.message))}),{enableHighAccuracy:!0}))},handleNavPos:function(e){var t=[e.coords.longitude,e.coords.latitude],n=e.coords.accuracy;this.set({coords:t,accuracy:n})},call:function(){if(null===this.current)return this.update();var e=this.listeners;this.listeners=[];while(e.length){var t=e.pop();t.method(this.current),t.recurrent&&this.listeners.push(t)}}}},"2cf2":function(e,t,n){"use strict";n("dd93")},"2f4b":function(e,t,n){},"2f61":function(e,t,n){"use strict";n("b5ae")},"3afb":function(e,t,n){"use strict";n("781c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,i){var a=Object(o["x"])("router-view"),s=Object(o["x"])("font-awesome-icon"),l=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(a,{class:["container",{pwa:i.isPwa}]},null,8,["class"]),Object(o["h"])("div",{id:"nav",class:{pwa:i.isPwa}},[Object(o["h"])(l,{to:"/"},{default:Object(o["D"])((function(){return[Object(o["h"])(s,{icon:c.faBullhorn,"fixed-width":""},null,8,["icon"])]})),_:1}),Object(o["h"])(l,{to:"/add"},{default:Object(o["D"])((function(){return[Object(o["h"])(s,{icon:c.faMapMarkedAlt,"fixed-width":""},null,8,["icon"])]})),_:1}),Object(o["h"])("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=function(){return i.about&&i.about.apply(i,arguments)})},[Object(o["h"])(s,{icon:c.faInfo,"fixed-width":""},null,8,["icon"])])],2)],64)}var c=n("c074"),i=n("f3b8"),a={data:function(){return{faBullhorn:c["c"],faInfo:c["i"],faMapMarkedAlt:c["k"]}},computed:{isPwa:function(){return i["a"].isPwa}},methods:{about:function(){window.open("https://github.com/yspreen/covid")}}};n("2f61");a.render=r;var s=a,l=n("9483");Object(l["a"])("".concat("/covid/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var u=n("6c02"),d=Object(o["F"])("data-v-34dd656c"),f=d((function(e,t,n,r,c,i){var a=Object(o["x"])("condition-set-view"),s=Object(o["x"])("location-loader");return Object(o["q"])(),Object(o["e"])("div",{class:[{load:null===c.location,"mb-5":null!==c.location},"mb-5"]},[null!==c.location?(Object(o["q"])(),Object(o["e"])(a,{key:0,conditionSet:c.conditionSet,onRefresh:i.refresh},null,8,["conditionSet","onRefresh"])):Object(o["f"])("",!0),null===c.location?(Object(o["q"])(),Object(o["e"])(s,{key:1})):Object(o["f"])("",!0)],2)})),h=(n("7db0"),n("b0c0"),Object(o["F"])("data-v-27940e94"));Object(o["t"])("data-v-27940e94");var b=Object(o["h"])("div",{class:""},"Current Rules for",-1),p={class:"h1"},m={class:"ml-2 ul-primary"},j=Object(o["g"])(": "),O={key:2};Object(o["r"])();var v=h((function(e,t,n,r,c,i){var a=Object(o["x"])("font-awesome-icon"),s=Object(o["x"])("condition");return Object(o["q"])(),Object(o["e"])("div",null,[b,Object(o["h"])("h1",p,[Object(o["h"])(a,{icon:c.faRedoAlt,class:"click smaller",onClick:t[1]||(t[1]=function(t){return e.$emit("refresh")})},null,8,["icon"]),Object(o["h"])("span",m,Object(o["z"])(i.conditionSetProxy.regionName),1),j]),(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(i.conditionSetProxy.rules,(function(e,t){return Object(o["q"])(),Object(o["e"])(s,{key:t,icon:e.icon,color:e.color,text:e.name,more:e.more,addMapButton:e.addMapButton},null,8,["icon","color","text","more","addMapButton"])})),128)),i.conditionSetProxy.dateText?(Object(o["q"])(),Object(o["e"])(s,{key:0,text:"Active: "+i.conditionSetProxy.dateText,color:0,icon:1},null,8,["text"])):Object(o["f"])("",!0),i.conditionSetProxy.sourceUrl?(Object(o["q"])(),Object(o["e"])(s,{key:1,text:"Source",link:i.conditionSetProxy.sourceUrl,color:0,icon:0},null,8,["link"])):Object(o["f"])("",!0),i.conditionSetProxy.fullName?(Object(o["q"])(),Object(o["e"])("span",O,"Added by "+Object(o["z"])(i.conditionSetProxy.fullName)+".",1)):Object(o["f"])("",!0),i.conditionSetProxy.id?(Object(o["q"])(),Object(o["e"])("a",{key:3,class:"black",href:"mailto:covid.info.page@gmail.com?subject=Report%20"+i.conditionSetProxy.id+i.reportBody()},"report via email",8,["href"])):Object(o["f"])("",!0)])})),g=(n("9911"),Object(o["F"])("data-v-5287cea6"));Object(o["t"])("data-v-5287cea6");var y={class:"d-flex big"},w={key:0,class:"expand"},k={key:2},x={ref:"accordion",class:"accordion-collapse collapse"},S={class:"accordion-body"};Object(o["r"])();var P=g((function(e,t,n,r,c,i){var a=Object(o["x"])("font-awesome-icon");return Object(o["q"])(),Object(o["e"])("div",{class:["host",{clickable:""!==n.more}],style:{backgroundColor:i.colorName},onClick:t[2]||(t[2]=function(){return i.toggle&&i.toggle.apply(i,arguments)})},[Object(o["h"])("div",y,[Object(o["h"])("div",null,[Object(o["h"])(a,{class:"icon",icon:i.iconName,"fixed-width":"",key:i.iconName},null,8,["icon"])]),""===n.link?(Object(o["q"])(),Object(o["e"])("div",w,[Object(o["g"])(Object(o["z"])(n.text),1),n.addMapButton?(Object(o["q"])(),Object(o["e"])(a,{key:0,icon:c.faMapMarkedAlt,class:"dim"},null,8,["icon"])):Object(o["f"])("",!0)])):Object(o["f"])("",!0),""!==n.link?(Object(o["q"])(),Object(o["e"])("a",{key:1,href:"javascript:void(0)",class:"expand",onClick:t[1]||(t[1]=function(){return i.openLink&&i.openLink.apply(i,arguments)})},Object(o["z"])(n.text),1)):Object(o["f"])("",!0),""!==n.more?(Object(o["q"])(),Object(o["e"])("div",k,[Object(o["h"])(a,{class:"arrow",icon:c.faCaretDown,"fixed-width":""},null,8,["icon"])])):Object(o["f"])("",!0)]),Object(o["h"])("div",x,[Object(o["h"])("div",S,Object(o["z"])(n.more),1)],512)],6)})),C=(n("a9e3"),window.$),N={data:function(){return{faCaretDown:c["f"],faMapMarkedAlt:c["k"],shown:!1}},props:{icon:{type:Number,default:0},addMapButton:{type:Number,default:0},color:{type:Number,default:0},text:{type:String},link:{type:String,default:""},more:{type:String,default:""}},computed:{iconName:function(){return i["a"].icons[this.icon]},colorName:function(){return i["a"].colors[this.color]}},methods:{toggle:function(){C(this.$refs.accordion).collapse("toggle")},openLink:function(){window.open(this.link)}}};n("7473");N.render=P,N.__scopeId="data-v-5287cea6";var A=N,M={components:{Condition:A},data:function(){return{faUserFriends:c["w"],faMapPin:c["l"],faRedoAlt:c["q"]}},props:["conditionSet"],methods:{reportBody:function(){return"&body="+encodeURIComponent("Here's the reason why I'm reporting the rule listing for "+this.conditionSetProxy.regionName+": ")}},computed:{conditionSetProxy:function(){return this.conditionSet||{rules:[{icon:0,color:0,name:"This site tracks the currently active COVID-rules for your region."},{icon:0,color:0,addMapButton:1,name:"We don't have information for your current location yet. Want to add them to help others? Click the map below "},{icon:0,color:0,name:"Here are some general rules to follow during the pandemic:"},{icon:8,color:7,name:"Limit your social contacts"},{icon:7,color:7,name:"If your area permits meeting someone, do so outside"},{icon:11,color:7,name:"Keep a distance of 2m / 6ft to other people"},{icon:9,color:7,name:"When outside, wear a mask. Surgical, FFP2 and N95 work best"},{icon:15,color:7,name:"Wash your hands regularly"},{icon:14,color:8,name:"Avoid traveling"}],coords:null,regionName:"Your Location",regionType:"city",customType:"City",area:0,range:[null,null],dateText:"",id:"",sourceUrl:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"}}}};n("3afb");M.render=v,M.__scopeId="data-v-27940e94";var q=M,L=Object(o["F"])("data-v-67ce4965");Object(o["t"])("data-v-67ce4965");var T={class:"host"},_=Object(o["h"])("h2",{class:"h2"},[Object(o["g"])(" This page shows the current COVID rules for "),Object(o["h"])("u",null," your area"),Object(o["g"])(". We'll ask you for your location to show you relevant information. ")],-1),F=Object(o["g"])(" Loading Location ");Object(o["r"])();var B=L((function(e,t,n,r,c,i){var a=Object(o["x"])("font-awesome-icon");return Object(o["q"])(),Object(o["e"])("div",T,[_,Object(o["h"])("div",null,[Object(o["h"])(a,{icon:c.faSpinner,"fixed-width":"",pulse:""},null,8,["icon"]),F])])})),I={data:function(){return{faSpinner:c["r"]}},props:{},computed:{},methods:{}};n("fa37");I.render=B,I.__scopeId="data-v-67ce4965";var D=I,E=n("1d1e"),R=n("bc3a"),U={components:{ConditionSetView:q,LocationLoader:D},data:function(){return{faUserFriends:c["w"],faMapPin:c["l"],conditionSet:null,location:null,dataPoints:[]}},mounted:function(){var e=this;this.ajax(),E["a"].getOnce((function(t){e.setLocation(t)}))},methods:{ajax:function(){var e=this;R.get(i["a"].dataUrl()).then((function(t){e.setDataPoints(t.data.dataPoints)}))},setDataPoints:function(e){this.dataPoints=e,this.getConditionSet()},setLocation:function(e){this.location=e,this.getConditionSet()},getConditionSet:function(){if(null!==this.location){var e=this.location.coords,t=E["a"].posToPoint(e);this.conditionSet=this.dataPoints.find((function(e){return E["a"].contained(t,e.poly)}))}else this.conditionSet=null},refresh:function(){var e=this;this.ajax(),this.setLocation(null),E["a"].refresh((function(t){e.setLocation(t)}))}}};n("2cf2");U.render=f,U.__scopeId="data-v-34dd656c";var W=U,z=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/add",name:"Add",component:function(){return n.e("about").then(n.bind(null,"5197"))}}],H=Object(u["a"])({history:Object(u["b"])(),routes:z}),J=H,V=n("ad3d"),$=n("3495"),K=Object(o["d"])(s);K.use(J).component("font-awesome-icon",V["a"]).component("lorem",$["a"]).mount("#app")},7473:function(e,t,n){"use strict";n("2f4b")},"781c":function(e,t,n){},b0d4:function(e,t,n){},b5ae:function(e,t,n){},dd93:function(e,t,n){},f3b8:function(e,t,n){"use strict";var o=n("c074"),r=n("b702");t["a"]={dataUrl:function(){var e="/covid/dist/data.json";return e+"?t="+(new Date).getTime()},icons:[o["j"],o["e"],0,0,0,0,0,o["w"],o["x"],o["h"],r["a"],o["a"],o["z"],o["u"],o["o"],o["g"],o["d"],o["n"],o["b"],o["t"],o["y"],o["v"]],iconNames:["Info","Calendar",0,0,0,0,0,"Friends","People","Mask","Clock","Distance","Alcohol","Syringe","Travel","Hand Wash","Transport","Worship","Office","Stores","Restaurants","Recreation"],colors:["#eeeeee",0,0,0,0,0,0,"#FFF2CF","#fbb783","#f86882"],colorNames:["Gray",0,0,0,0,0,0,"Yellow","Orange","Red"],isPwa:window.matchMedia("(display-mode: standalone)").matches?1:0}},fa37:function(e,t,n){"use strict";n("b0d4")}});
//# sourceMappingURL=app.812ff294.js.map