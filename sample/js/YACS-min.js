var YACS={};(function(){YACS.id="";YACS.control=null;YACS.properties={};YACS.content={};YACS.items=new Array();YACS.elements={};YACS.callback=function(){};YACS.showEvent="click";YACS.customize=function(b,a){YACS.createId(b);YACS.control=YACS.getEBI(b);YACS.elements.original=YACS.control;YACS.parseProperties(a);YACS.getContent()};YACS.createId=function(a){YACS.id="yacs_"+a};YACS.parseProperties=function(a){YACS.properties=a;if(YACS.properties!=null){if((YACS.properties.onchange!=null||YACS.properties.onchange!=undefined)&&typeof(YACS.properties.onchange)=="function"){YACS.callback=YACS.properties.onchange}if(YACS.properties.showEvent!=null||YACS.properties.showEvent!=undefined||YACS.properties.showEvent=="click"||YACS.properties.showEvent=="mouseover"){YACS.showEvent=YACS.properties.showEvent}}};YACS.getContent=function(){var a=YACS.control.getElementsByTagName("option");var d;for(var b=0;b<a.length;b++){var c=a[b];d={};d.value=c.value;d.text=c.innerHTML;YACS.items.push(d)}YACS.buildCustomControl()};YACS.buildCustomControl=function(){var f=document.createElement("div");f.id=YACS.id+"_box";f.className="custom-select";YACS.elements.box=f;var h=document.createElement("div");h.id=YACS.id+"_currentView";h.className="custom-select-view";YACS.elements.currentView=h;var c=document.createElement("label");c.id=YACS.id+"_currentContent_";c.className="custom-select-label";YACS.elements.currentContent=c;var g=document.createElement("ul");g.id=YACS.id+"_list";g.className="custom-select-list";g.show=false;var b;var e;for(var a=0;a<YACS.items.length;a++){var d=YACS.items[a];console.log(d);b=document.createElement("li");b.innerHTML=d.text;b.value=d.value;if(a==0){b.className="custom-select-item custom-select-item-first"}else{if(a==(YACS.items.length-1)){b.className="custom-select-item custom-select-item-last"}else{b.className="custom-select-item"}}g.appendChild(b)}YACS.elements.list=g;if(YACS.elements.list.childNodes.length>0){YACS.elements.currentContent.innerHTML=YACS.elements.list.childNodes[0].innerHTML}h.appendChild(c);f.appendChild(h);f.appendChild(g);document.body.insertBefore(f,YACS.control);YACS.hideCustomList();YACS.buildEvents();YACS.hideOriginalControl()};YACS.buildEvents=function(){if(YACS.showEvent=="click"){YACS.elements.box.addEventListener("click",function(){if(!YACS.elements.list.show){YACS.showCustomList();YACS.elements.list.show=true;alert(YACS.elements.box.id)}else{YACS.hideCustomList();YACS.elements.list.show=false}})}else{YACS.elements.box.addEventListener("mouseover",function(){YACS.showCustomList();YACS.elements.list.show=true});YACS.elements.box.addEventListener("mouseout",function(){YACS.hideCustomList();YACS.elements.list.show=false})}var b;for(var a=0;a<YACS.elements.list.childNodes.length;a++){console.log(YACS.elements.list.childNodes[a].innerHTML);b=YACS.elements.list.childNodes[a];b.addEventListener("click",function(c){if(!c){var c=window.event;c.cancelBubble=true}if(c.stopPropagation){c.stopPropagation()}YACS.elements.currentContent.innerHTML=this.innerHTML;YACS.elements.original.value=this.value;YACS.hideCustomList();YACS.callback()},true)}};YACS.showOriginalControl=function(){YACS.control.style.display=""};YACS.hideOriginalControl=function(){YACS.control.style.display="none"};YACS.showCustomList=function(){YACS.elements.list.style.display=""};YACS.hideCustomList=function(){YACS.elements.list.style.display="none"};YACS.getEBI=function(a){return document.getElementById(a)}})();