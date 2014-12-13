//>>built
define("dojox/layout/ResizeHandle","dojo/_base/kernel dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/_base/event dojo/_base/fx dojo/_base/window dojo/fx dojo/window dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dijit/_base/manager dijit/_Widget dijit/_TemplatedMixin dojo/_base/declare".split(" "),function(h,k,g,s,t,n,l,u,z,v,p,e,f,q,r,w,x){h.experimental("dojox.layout.ResizeHandle");h=x("dojox.layout.ResizeHandle",[r,w],{targetId:"",targetContainer:null,resizeAxis:"xy",activeResize:!1,
activeResizeClass:"dojoxResizeHandleClone",animateSizing:!0,animateMethod:"chain",animateDuration:225,minHeight:100,minWidth:100,constrainMax:!1,maxHeight:0,maxWidth:0,fixedAspect:!1,intermediateChanges:!1,startTopic:"/dojo/resize/start",endTopic:"/dojo/resize/stop",templateString:'\x3cdiv dojoAttachPoint\x3d"resizeHandle" class\x3d"dojoxResizeHandle"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e',postCreate:function(){this.connect(this.resizeHandle,"onmousedown","_beginSizing");this.activeResize?this.animateSizing=
!1:(this._resizeHelper=q.byId("dojoxGlobalResizeHelper"),this._resizeHelper||(this._resizeHelper=(new y({id:"dojoxGlobalResizeHelper"})).placeAt(l.body()),p.add(this._resizeHelper.domNode,this.activeResizeClass)));this.minSize||(this.minSize={w:this.minWidth,h:this.minHeight});this.constrainMax&&(this.maxSize={w:this.maxWidth,h:this.maxHeight});this._resizeX=this._resizeY=!1;var a=k.partial(p.add,this.resizeHandle);switch(this.resizeAxis.toLowerCase()){case "xy":this._resizeX=this._resizeY=!0;a("dojoxResizeNW");
break;case "x":this._resizeX=!0;a("dojoxResizeW");break;case "y":this._resizeY=!0,a("dojoxResizeN")}},_beginSizing:function(a){if(!this._isSizing&&(g.publish(this.startTopic,[this]),this.targetDomNode=(this.targetWidget=q.byId(this.targetId))?this.targetWidget.domNode:v.byId(this.targetId),this.targetContainer&&(this.targetDomNode=this.targetContainer),this.targetDomNode)){if(!this.activeResize){var b=e.position(this.targetDomNode,!0);this._resizeHelper.resize({l:b.x,t:b.y,w:b.w,h:b.h});this._resizeHelper.show();
this.isLeftToRight()||(this._resizeHelper.startPosition={l:b.x,t:b.y})}this._isSizing=!0;this.startPoint={x:a.clientX,y:a.clientY};var b=f.getComputedStyle(this.targetDomNode),c="border-model"===e.boxModel?{w:0,h:0}:e.getPadBorderExtents(this.targetDomNode,b),m=e.getMarginExtents(this.targetDomNode,b);this.startSize={w:f.get(this.targetDomNode,"width",b),h:f.get(this.targetDomNode,"height",b),pbw:c.w,pbh:c.h,mw:m.w,mh:m.h};!this.isLeftToRight()&&"absolute"==dojo.style(this.targetDomNode,"position")&&
(b=e.position(this.targetDomNode,!0),this.startPosition={l:b.x,t:b.y});this._pconnects=[g.connect(l.doc,"onmousemove",this,"_updateSizing"),g.connect(l.doc,"onmouseup",this,"_endSizing")];t.stop(a)}},_updateSizing:function(a){if(this.activeResize)this._changeSizing(a);else{var b=this._getNewCoords(a,"border",this._resizeHelper.startPosition);if(!1===b)return;this._resizeHelper.resize(b)}a.preventDefault()},_getNewCoords:function(a,b,c){try{if(!a.clientX||!a.clientY)return!1}catch(m){return!1}this._activeResizeLastEvent=
a;var e=(this.isLeftToRight()?1:-1)*(this.startPoint.x-a.clientX),d=this.startPoint.y-a.clientY;a=this.startSize.w-(this._resizeX?e:0);d=this._checkConstraints(a,this.startSize.h-(this._resizeY?d:0));if((c=c||this.startPosition)&&this._resizeX)d.l=c.l+e,d.w!=a&&(d.l+=a-d.w),d.t=c.t;switch(b){case "margin":d.w+=this.startSize.mw,d.h+=this.startSize.mh;case "border":d.w+=this.startSize.pbw,d.h+=this.startSize.pbh}return d},_checkConstraints:function(a,b){if(this.minSize){var c=this.minSize;a<c.w&&(a=
c.w);b<c.h&&(b=c.h)}this.constrainMax&&this.maxSize&&(c=this.maxSize,a>c.w&&(a=c.w),b>c.h&&(b=c.h));if(this.fixedAspect){var c=this.startSize.w,e=this.startSize.h,f=c*b-e*a;0>f?a=b*c/e:0<f&&(b=a*e/c)}return{w:a,h:b}},_changeSizing:function(a){var b=this.targetWidget&&k.isFunction(this.targetWidget.resize),c=this._getNewCoords(a,b&&"margin");if(!1!==c&&(b?this.targetWidget.resize(c):this.animateSizing?u[this.animateMethod]([n.animateProperty({node:this.targetDomNode,properties:{width:{start:this.startSize.w,
end:c.w}},duration:this.animateDuration}),n.animateProperty({node:this.targetDomNode,properties:{height:{start:this.startSize.h,end:c.h}},duration:this.animateDuration})]).play():f.set(this.targetDomNode,{width:c.w+"px",height:c.h+"px"}),this.intermediateChanges))this.onResize(a)},_endSizing:function(a){s.forEach(this._pconnects,g.disconnect);var b=k.partial(g.publish,this.endTopic,[this]);this.activeResize?b():(this._resizeHelper.hide(),this._changeSizing(a),setTimeout(b,this.animateDuration+15));
this._isSizing=!1;this.onResize(a)},onResize:function(a){}});var y=dojo.declare("dojox.layout._ResizeHelper",r,{show:function(){f.set(this.domNode,"display","")},hide:function(){f.set(this.domNode,"display","none")},resize:function(a){e.setMarginBox(this.domNode,a)}});return h});
//@ sourceMappingURL=ResizeHandle.js.map