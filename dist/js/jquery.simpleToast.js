!function(a,n){"use strict";a.fn.simpleToast=function(n){var i,d,t,o,e=a.extend({},a.fn.simpleToast.defaults,n),s=a("<div></div>").addClass("toast").css({"z-index":e.zIndex});return(i=e,d=a("<i></i>").addClass(i.icon),t=a("<span></span>").css({color:i.color}).html(i.content),a("<div class='animated'></div>").css({"animation-duration":i.animateDuration/1e3+"s",background:i.background,opacity:i.opacity,"max-width":i.maxWidth,"font-size":i.fontSize,padding:i.padding,"border-radius":i.borderRadius}).addClass(i.animateIn).append(d).append(t)).appendTo(s),this.append(s),o=s,setTimeout(function(){o.remove()},e.duration),this},a.fn.simpleToast.defaults={maxWidth:"200px",padding:"10px 20px",background:"#2b2a2a",opacity:.9,zIndex:9999,borderRadius:"6px",duration:2e3,animateIn:"boxBounceIn",animateDuration:500,color:"#ffffff",fontSize:"14px",icon:"fa fa-spinner fa-pulse",content:"这是一个提示信息"}}(jQuery,window);