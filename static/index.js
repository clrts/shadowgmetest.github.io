const form=document.querySelector('form');const input=document.querySelector('input');if(form){form.addEventListener('submit',async event=>{event.preventDefault();window.navigator.serviceWorker.register('./sw.js',{scope:__uv$config.prefix}).then(()=>{let url=input.value.trim();if(!isUrl(url))url='https://www.google.com/search?q='+url;else if(!(url.startsWith('https://')||url.startsWith('http://')))url='http://'+url;window.location.href=__uv$config.prefix+__uv$config.encodeUrl(url);});});}
function isUrl(val=''){if(/^http(s?):\/\//.test(val)||val.includes('.')&&val.substr(0,1)!==' ')return true;return false;};document.body.addEventListener("keydown",function(event){if(event.key==="="){window.location.replace("https://drive.google.com/");}});function shuffle(elems){allElems=(function(){var ret=[],l=elems.length;while(l--){ret[ret.length]=elems[l];}
return ret;})();var shuffled=(function(){var l=allElems.length,ret=[];while(l--){var random=Math.floor(Math.random()*allElems.length),randEl=allElems[random].cloneNode(true);allElems.splice(random,1);ret[ret.length]=randEl;}
return ret;})(),l=elems.length;while(l--){elems[l].parentNode.insertBefore(shuffled[l],elems[l].nextSibling);elems[l].parentNode.removeChild(elems[l]);}}
function hidebyID(idname)
{var menu=document.querySelectorAll('#random > button')
for(var i=0;menu[i];i++){menu[i].style.display="none"}
var menu=document.querySelectorAll('#random > .'+idname)
for(var i=0;menu[i];i++){menu[i].style.display="inline"}}