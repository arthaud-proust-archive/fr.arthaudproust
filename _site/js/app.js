(()=>{var e,t={480:()=>{window.addEventListener("DOMContentLoaded",(function(){var e="arthaudproust-animation";window.superCursor=new SuperCursor,mobileAndTabletCheck()||(superCursor.prepare(),botCheck()||sessionStorage.getItem(e)?superCursor.enable():(sessionStorage.setItem(e,!0),document.body.classList.add("contentHidden"),setTimeout((function(){superCursor.enable()}),3500)));var t,n=1500,r=1e3,o=(document.getElementById("mainSlideStepper"),document.getElementById("mainSlideName"),document.getElementById("links").querySelectorAll("a")),i=Array.from(document.querySelectorAll("#main > div > section")),s=document.querySelector(".section-swiper"),c={left:document.querySelector(".pageArrow.left"),right:document.querySelector(".pageArrow.right")},a=new Swiper(".main-swiper",{direction:"horizontal",loop:!1,speed:window.mobileAndTabletCheck()?150:1500,mousewheel:{forceToAxis:!1,eventsTarget:".main-swiper"},parallax:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},grabCursor:!0,shortSwipes:!0,resistanceRatio:1.2,longSwipesRatio:.1,threshold:10,scrollbar:{el:".swiper-scrollbar"}});try{(t=new Swiper(s,{direction:"vertical",grabCursor:!0,loop:!1,freeMode:!0,mousewheel:{forceToAxis:!0,eventsTarget:s.closest(".swiper-slide")},resistanceRatio:.9})).on("reachBeginning",(function(e){a.slides.length>0&&!a.isBeginning&&a.slidePrev()})),t.on("reachEnd",(function(e){a.slides.length>0&&!a.isEnd&&a.slideNext()})),t.on("slideChange",(function(e){Object.keys(t.slides[t.activeIndex].dataset).includes("skipPrev")&&t.slidePrev();try{var n=document.getElementById("section-image-cover-container");Array.from(n.children).forEach((function(e){return e.classList.add("d-none")}));var r=window.screen.width>576?e.activeIndex+1:e.activeIndex,o=e.el.querySelectorAll(".swiper-slide")[r];if(!o)throw new Error;var i=o.dataset.cover;if(!i)throw new Error;n.querySelector("#sic-".concat(i)).classList.remove("d-none")}catch(e){try{document.getElementById("section-image-cover-container").querySelector("#sic-preview").classList.remove("d-none")}catch(e){}}}))}catch(e){}var l=function(e){if(u(),a.slides.length>0)if(Array.from(o).forEach((function(e){e.classList.toggle("active",e.dataset.to===a.slides[a.activeIndex].dataset.hash)})),n=a.slides[a.activeIndex],setTimeout((function(){n.querySelectorAll(".toAnimate").forEach((function(e){e.classList.add("animate")}))}),mobileAndTabletCheck()?50:500),a.slides[a.activeIndex].contains(t.el)){if(t.isBeginning,t.isEnd)try{t.slidePrev()}catch(e){}a.mousewheel.disable()}else a.mousewheel.enable();else Array.from(o).forEach((function(e){e.classList.remove("active")}));var n};function d(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];""!==e&&a.slideTo(i.indexOf(document.querySelector('section[data-hash="'.concat(e,'"]'))),t?0:800)}function u(){c.left.classList.toggle("hidden",a.isBeginning),c.right.classList.toggle("hidden",a.isEnd||a.isBeginning&&0===a.slides.length)}l(),a.on("slideChange",l),u(),d(window.location.hash.replace("#","")),a.on("sliderMove",(function(e,t){a.el.classList.add("grabbing"),superCursor.updateMouseFromEvent(t),superCursor.setActive(!0)})),a.on("touchEnd",(function(){a.el.classList.remove("grabbing"),superCursor.setActive(!1)})),c.left.addEventListener("click",(function(){a.slidePrev(n)})),c.right.addEventListener("click",(function(){a.slideNext(n)})),document.querySelectorAll("[on-click-section-prev]").forEach((function(e){e.addEventListener("click",(function(){t.slidePrev(r)}))})),document.querySelectorAll("[on-click-section-next]").forEach((function(e){console.log(e),e.addEventListener("click",(function(){t.slideNext(r)}))})),document.querySelectorAll("[on-click-section-n]").forEach((function(e){e.addEventListener("click",(function(){t.slideTo(e.dataset.onClickSectionN,r)}))})),document.querySelectorAll("[on-click-main-prev]").forEach((function(e){e.addEventListener("click",(function(){a.slidePrev(n)}))})),document.querySelectorAll("[on-click-main-next]").forEach((function(e){e.addEventListener("click",(function(){a.slideNext(n)}))})),o.forEach((function(e){return e.addEventListener("click",(function(){setMenu(!1),d(e.dataset.to,!1),t.slideTo(0)}))})),document.body.addEventListener("contextmenu",(function(e){e.preventDefault(),superCursor.setAlt(!superCursor.isAlt)})),document.getElementById("menu-toggle").addEventListener("click",toggleMenu),document.querySelectorAll(".list-subitem, .lessMore").forEach((function(e){e.addEventListener("click",(function(t){if("A"!=t.target.tagName&&"A"!=t.target.parentElement.tagName){var n="true"===e.dataset.open;document.querySelectorAll(".list-subitem, .lessMore").forEach((function(e){e.dataset.open=!1})),e.dataset.open=n?"false":"true"}}))})),document.querySelectorAll(".toCopy").forEach((function(e){e.addEventListener("click",(function(){e.dataset.text=this.innerText,e.innerText="".concat(e.dataset.text," (copié!)"),copyTextToClipboard(e.dataset.text),setTimeout((function(){e.innerText=e.dataset.text}),4e3)}))}))}))},411:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],c=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(c=!1,i<s&&(s=i));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={751:0,52:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,c,a]=n,l=0;if(s.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var d=a(r)}for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return r.O(d)},n=self.webpackChunkfr_arthaudproust=self.webpackChunkfr_arthaudproust||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[52],(()=>r(480)));var o=r.O(void 0,[52],(()=>r(411)));o=r.O(o)})();