//>>built
define("dojox/widget/Rotator","dojo/aspect dojo/_base/declare dojo/_base/Deferred dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/topic dojo/on dojo/parser dojo/query dojo/fx/easing dojo/NodeList-dom".split(" "),function(w,q,x,g,k,y,z,l,u,s,h,t,C,A,v){q=q("dojox.widget.Rotator",null,{transition:"dojox.widget.rotator.swap",transitionParams:"duration:500",panes:null,constructor:function(c,a){g.mixin(this,c);var b=this,d=
b.transition,m=b._transitions={},B=b._idMap={},f=b.transitionParams=eval("({ "+b.transitionParams+" })");a=b._domNode=z.byId(a);b._domNodeContentBox=s.getContentBox(a);var e={left:0,top:0},n=function(b,a){};b.id=a.id||(new Date).getTime();"static"==h.get(a,"position")&&h.set(a,"position","relative");m[d]=g.getObject(d);m[d]||(m[b.transition="dojox.widget.rotator.swap"]=g.getObject("dojox.widget.rotator.swap"));f.duration||(f.duration=500);k.forEach(b.panes,function(b){u.create("div",b,a)});var p=
b.panes=[];v("\x3e *",a).forEach(function(a,c){var d={node:a,idx:c,params:g.mixin({},f,eval("({ "+(l.get(a,"transitionParams")||"")+" })"))},r=d.trans=l.get(a,"transition")||b.transition;k.forEach(["id","title","duration","waitForEvent"],function(b){d[b]=l.get(a,b)});d.id&&(B[d.id]=c);if(!m[r]&&!(m[r]=g.getObject(r)))n(r,d.trans=b.transition);e.position="absolute";e.display="none";if(null==b.idx||l.get(a,"selected"))null!=b.idx&&h.set(p[b.idx].node,"display","none"),b.idx=c,e.display="";h.set(a,e);
v("\x3e script[type^\x3d'dojo/method']",a).orphan().forEach(function(a){var b=l.get(a,"event");b&&(d[b]=A._functionFromScript(a))});p.push(d)});b._controlSub=t.subscribe(b.id+"/rotator/control",g.hitch(b,this.control))},destroy:function(){k.forEach([this._controlSub,this.wfe],function(c){c.remove()});u.destroy(this._domNode)},next:function(){return this.go(this.idx+1)},prev:function(){return this.go(this.idx-1)},go:function(c){var a=this,b=a.idx,d=a.panes,m=d.length,l=a._idMap[c];a._resetWaitForEvent();
c=null!=l?l:c||0;c=c<m?0>c?m-1:c:0;if(c==b||a.anim)return null;var f=d[b],e=d[c];h.set(f.node,"zIndex",2);h.set(e.node,"zIndex",1);var n={current:f,next:e,rotator:a};if(b=a.anim=a._transitions[e.trans](g.mixin({rotatorBox:a._domNodeContentBox},n,e.params))){var p=new x,k=e.waitForEvent,q=w.after(b,"onEnd",function(){h.set(f.node,{display:"none",left:0,opacity:1,top:0,zIndex:0});q.remove();a.anim=null;a.idx=c;if(f.onAfterOut)f.onAfterOut(n);if(e.onAfterIn)e.onAfterIn(n);a.onUpdate("onAfterTransition");
k||(a._resetWaitForEvent(),p.callback())},!0);a.wfe=k?t.subscribe(k,function(){a._resetWaitForEvent();p.callback(!0)}):null;a.onUpdate("onBeforeTransition");if(f.onBeforeOut)f.onBeforeOut(n);if(e.onBeforeIn)e.onBeforeIn(n);b.play();return p}},onUpdate:function(c,a){t.publish(this.id+"/rotator/update",c,this,a||{})},_resetWaitForEvent:function(){this.wfe&&(this.wfe.remove(),delete this.wfe)},control:function(c){var a=g._toArray(arguments),b=this;a.shift();b._resetWaitForEvent();b[c]&&((a=b[c].apply(b,
a))&&a.addCallback(function(){b.onUpdate(c)}),b.onManualChange(c))},resize:function(c,a){var b=this._domNodeContentBox={w:c,h:a};s.setContentSize(this._domNode,b);k.forEach(this.panes,function(a){s.setContentSize(a.node,b)})},onManualChange:function(){}});g.setObject("dojox.widget.rotator.swap",function(c){return new y.Animation({play:function(){h.set(c.current.node,"display","none");h.set(c.next.node,"display","");this._fire("onEnd")}})});return q});
//# sourceMappingURL=Rotator.js.map