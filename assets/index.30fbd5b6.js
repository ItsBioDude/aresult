var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,o=(e,o)=>{for(var a in o||(o={}))r.call(o,a)&&s(e,a,o[a]);if(t)for(var a of t(o))i.call(o,a)&&s(e,a,o[a]);return e};import("data:text/javascript;base64,Cg==");import{m as a,a as n,b as l}from"./vendor.a92413f7.js";const h={math:{fullName:{vi:"Toán học",en:"Mathematics"},bgColor:"from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500",first:[],second:[],third:[],calcAverage(){let e,t=1,r=0;if(t+=this.first.length+2*this.second.length+3*this.third.length,t>1){for(let e=0;e<this.first.length;e++)r+=this.first.length;for(let e=0;e<this.second.length;e++)r+=this.second.length;for(let e=0;e<this.third.length;e++)r+=this.third.length;e=(r/t).toFixed(2)}else e="__.__";return this.average=e,e}}},g={code:"vi-VN",home:"Trang chủ",grade:"Lớp",semester:"Học kì",version:"Phiên bản",setting:"Cài đặt",bug:"Góp ý"},d={code:"en-US",home:"Home",grade:"Class",semester:"Semester",version:"Version",setting:"Setting",bug:"Report bug"};window.Alpine=a,a.plugin(n),a.plugin(l),a.data("allSubjects",(()=>({items:o({},h)}))),a.store("showResultCard",{on:!1,toggle(){this.on=!this.on}}),a.data("i18n",(function(){return{isEnglish:this.$persist(!1),langCode(){return this.isEnglish?"en":"vi"},lang(){return this.data=this.isEnglish?o({},d):o({},g),this.data}}})),a.store("avatar",{webp:"avatar.webp",png:"avatar.png"}),a.store("showSideBar",!1),a.start(),document.querySelectorAll("a").forEach((e=>{"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer")})),document.querySelectorAll("img").forEach((e=>{e.setAttribute("loading","lazy")}));