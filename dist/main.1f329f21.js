parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var i=$("#last"),n=$(".siteList"),l=JSON.parse(localStorage.getItem("nav")),t=l||[{logo:"acfun.png",url:"https://www.acfun.cn",link:"acfun"},{logo:"bilibili.jpg",url:"https://www.bilibili.com/",link:"bilibili"}],o=function l(){n.find("li:not(#last)").remove(),t.forEach(function(n,o){var c=$('<li>\n            <div class="site">\n                <div class="logo">\n                    '.concat(n.logo?'<img src="../images/'.concat(n.logo,'" alt="">'):n.link[0],'\n                </div>\n                <div class="link">').concat(n.link,'</div>\n                <div class="close">\n                    <svg t="1613302092961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1729" width="200" height="200"><path d="M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0" p-id="1730" fill="#707070"></path></svg>\n                </div>\n            </div>\n    </li>')).insertBefore(i);c.on("click",function(){window.open(n.url)}),c.on("click",".close",function(i){i.stopPropagation(),t.splice(o,1),localStorage.setItem("nav",JSON.stringify(t)),l()})})};o();var c=function(i){return i.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,"")};$("#add").on("click",function(){var i=window.prompt("请输入要添加的网址：");t.push({url:0!==i.indexOf("http")?"https://"+i:i,link:c(i)}),localStorage.setItem("nav",JSON.stringify(t)),o()});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.1f329f21.js.map