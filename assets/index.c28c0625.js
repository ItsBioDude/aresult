var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,i=(e,i)=>{for(var s in i||(i={}))n.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))r.call(i,s)&&o(e,s,i[s]);return e};import("data:text/javascript;base64,Cg==");import{m as s,a,b as h}from"./vendor.a92413f7.js";const l={math:{fullName:{vi:"Toán học",en:"Mathematics"},bgColor:"from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500",first:[],second:[],third:[]}};for(const p in l)"function"!=typeof l[p]&&(l[p].calcAverage=function(){let e,t=0,n=0;if(t+=this.first.length+2*this.second.length+3*this.third.length,t>0){const r=[this.first,this.second,this.third];for(const e in r)for(const t of r[e])n+=t*Number(e+1);e=(n/t).toFixed(2)}else e="-:-";return this.average=e,e}),l[p].calcAverage();l.calcAverage=function(){const e=Object.keys(this).length-1;let t,n=0;for(const r in this){const e=Number(this[r].average);console.log(r,e),e&&(n+=e)}return t=n>0?(n/e).toFixed(2):"-:-",this.average=t,t},l.calcAverage();const c={code:"vi-VN",home:"Trang chủ",grade:"Lớp",semester:"Học kì",version:"Phiên bản",setting:"Cài đặt",bug:"Góp ý",schedule:"Thời khoá biểu"},g={code:"en-US",home:"Home",grade:"Class",semester:"Semester",version:"Version",setting:"Setting",bug:"Report bug",schedule:"Schedule"},u={sun:'<i class="uil uil-sun from-red-500 to-orange-400 bg-gradient-to-r bg-clip-text text-transparent"></i>',moon:'<i class="uil uil-moon bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-600 to bg-purple-600"></i>'},d=[[u.sun,"1","Chào cờ","Hoá học","Tin học","Hình học","Đại số",""],["","2","Sinh hoạt lớp","Hoá học","Tin học","Hình học","Đại số","Vật lí"],["","3","Toán","Hoá học","Anh văn","Hình học","","Vật lí"],["","4","Toán","Vật lí","Anh văn","Địa lí","","Lịch sử"],["","5","Đại số","Vật lí","GDCD","Địa lí","","Lịch sử"]],b=[[u.moon,"1","Ngữ văn","","Hoá học","","Anh văn",""],["","2","Ngữ văn","","GDQP-AN","","Thể dục",""],["","3","Ngữ văn","","Ngữ văn","","Thể dục",""],["","4","","","Sinh học","","Công nghệ",""],["","5","","","","","",""]];window.Alpine=s,s.plugin(a),s.plugin(h),s.data("allSubjects",(()=>({items:i({},l)}))),s.store("showResultCard",{on:!1,toggle(){this.on=!this.on}}),s.data("schedule",(()=>({cells:{head:["Buổi","Tiết","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],sun:[...d],moon:[...b]}}))),s.data("i18n",(function(){return{isEnglish:this.$persist(!1),langCode(){return this.isEnglish?"en":"vi"},lang(){return this.data=this.isEnglish?i({},g):i({},c),this.data}}})),s.store("avatar",{webp:"avatar.webp",png:"avatar.png"}),s.store("showSideBar",!1),s.start(),document.querySelectorAll("a").forEach((e=>{"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer")})),document.querySelectorAll("img").forEach((e=>{e.setAttribute("loading","lazy")}));