(()=>{var e,t={641:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=new Swiper(".main-swiper",{direction:"horizontal",loop:!1,mousewheel:{eventsTarget:"container"},parallax:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},grabCursor:!0,resistanceRatio:.8,scrollbar:{el:".swiper-scrollbar"}});function t(e){document.body.dataset.menuOpen=e,document.getElementById("menu-toggle").src="assets/".concat(e?"close":"menu",".svg")}e.on("sliderMove",(function(){e.el.classList.add("grabbing")})),e.on("touchEnd",(function(){e.el.classList.remove("grabbing")}));var n=Array.from(document.querySelectorAll("#main > div > section"));document.getElementById("links").querySelectorAll("a").forEach((function(r){return r.addEventListener("click",(function(){t(!1),e.slideTo(n.indexOf(document.querySelector('section[data-hash="'.concat(r.dataset.to,'"]'))))}))})),document.getElementById("menu-toggle").addEventListener("click",(function(){t(!("true"===document.body.dataset.menuOpen))})),document.querySelectorAll(".list-subitem, .lessMore").forEach((function(e){e.addEventListener("click",(function(){var t="true"===e.dataset.open;document.querySelectorAll(".list-subitem, .lessMore").forEach((function(e){e.dataset.open=!1})),e.dataset.open=t?"false":"true"}))}))}))},788:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={177:0,493:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(u)},n=self.webpackChunkfr_arthaudproust=self.webpackChunkfr_arthaudproust||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[493],(()=>r(641)));var o=r.O(void 0,[493],(()=>r(788)));o=r.O(o)})();