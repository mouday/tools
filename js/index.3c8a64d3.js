var p=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,r=[],n=0;n<t.rangeCount;n++)r.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||r.forEach(function(l){t.addRange(l)}),e&&e.focus()}},m=p,d={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function y(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function v(t,e){var r,n,l,s,c,a,i=!1;e||(e={}),r=e.debug||!1;try{l=m(),s=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(o){if(o.stopPropagation(),e.format)if(o.preventDefault(),typeof o.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=d[e.format]||d.default;window.clipboardData.setData(u,t)}else o.clipboardData.clearData(),o.clipboardData.setData(e.format,t);e.onCopy&&(o.preventDefault(),e.onCopy(o.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),c.addRange(s);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");i=!0}catch(o){r&&console.error("unable to copy using execCommand: ",o),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),i=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),n=y("message"in e?e.message:g),window.prompt(n,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(s):c.removeAllRanges()),a&&document.body.removeChild(a),l()}return i}var b=v;export{b as c};