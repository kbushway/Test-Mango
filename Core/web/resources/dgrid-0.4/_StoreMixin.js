//>>built
define("dgrid-0.4/_StoreMixin","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/aspect dojo/on dojo/when put-selector/put".split(" "),function(q,l,p,r,s,n,m){function t(a){if("object"!==typeof a)a=Error(a);else if("cancel"===a.dojoType)return;s.emit(this.domNode,"dgrid-error",{grid:this,error:a,cancelable:!0,bubbles:!0})}return q(null,{collection:null,_renderedCollection:null,_rows:null,_observerHandle:null,shouldTrackCollection:!0,getBeforePut:!0,noDataMessage:"",loadingMessage:"",_total:0,
constructor:function(){this.dirty={};this._updating={};this._columnsWithSet={};r.before(this,"configStructure",l.hitch(this,function(){this._columnsWithSet={}}))},destroy:function(){this.inherited(arguments);this._renderedCollection&&this._cleanupCollection()},_configColumn:function(a){a.set&&(this._columnsWithSet[a.field]=a);this.inherited(arguments)},_setCollection:function(a){this._renderedCollection&&(this.cleanup(),this._cleanupCollection({shouldRevert:!a||a.storage!==this._renderedCollection.storage}));
if(a){var f=a;this.sort&&0<this.sort.length&&(f=a.sort(this.sort));f.track&&this.shouldTrackCollection&&(f=f.track(),this._rows=[],this._observerHandle=this._observeCollection(f,this.contentNode,{rows:this._rows}));this._renderedCollection=f}this.collection=a;this.refresh()},_setStore:function(){},_getTotal:function(){return this._total},_cleanupCollection:function(a){a=a||{};this._renderedCollection.tracking&&this._renderedCollection.tracking.remove();this._observerHandle&&(this._observerHandle.remove(),
this._observerHandle=this._rows=null);!1!==a.shouldRevert&&(this.dirty={});this._renderedCollection=this.collection=null},_applySort:function(){this.collection&&this.set("collection",this.collection)},row:function(){var a=this.inherited(arguments);a&&(a.data&&"undefined"!==typeof a.id)&&(a.id=this.collection.getIdentity(a.data));return a},refresh:function(){var a=this.inherited(arguments);this.collection||(this.noDataNode=m(this.contentNode,"div.dgrid-no-data"),this.noDataNode.innerHTML=this.noDataMessage);
return a},renderArray:function(){var a=this.inherited(arguments);this.collection||a.length&&this.noDataNode&&m(this.noDataNode,"!");return a},insertRow:function(a,f,h,e,b){var g=this.collection,d=this.dirty,g=g&&g.getIdentity(a),k;g in d&&!(g in this._updating)&&(k=d[g]);k&&(a=l.delegate(a,k));d=this.inherited(arguments);b&&b.rows&&(b.rows[e]=d);this.noDataNode&&(m(this.noDataNode,"!"),this.noDataNode=null);return d},updateDirty:function(a,f,h){var e=this.dirty,b=e[a];b||(b=e[a]={});b[f]=h},save:function(){function a(a,
b){return function(c){var k=f._columnsWithSet,g=f._updating,d,l;if("function"===typeof c.set)c.set(b);else for(d in b)c[d]=b[d];for(d in k)l=k[d].set(c),void 0!==l&&(c[d]=l);g[a]=!0;return n(h.put(c),function(){delete e[a];delete g[a]})}}var f=this,h=this.collection,e=this.dirty,b=new p,g=b.promise,d=function(a){var b;return f.getBeforePut||!(b=f.row(a).data)?function(){return h.get(a)}:function(){return b}},k;for(k in e)var c=a(k,e[k]),g=g.then(d(k)).then(c);b.resolve();return g},revert:function(){this.dirty=
{};this.refresh()},_trackError:function(a){"string"===typeof a&&(a=l.hitch(this,a));var f=this,h;try{h=n(a())}catch(e){a=new p,a.reject(e),h=a.promise}h.otherwise(function(a){t.call(f,a)});return h},removeRow:function(a,f,h){var e={element:a};!f&&(this.noDataMessage&&this.up(e).element===a&&this.down(e).element===a)&&(this.noDataNode=m(this.contentNode,"div.dgrid-no-data"),this.noDataNode.innerHTML=this.noDataMessage);(e=h&&h.rows||this._rows)&&delete e[a.rowIndex];return this.inherited(arguments)},
renderQueryResults:function(a,f,h){h=l.mixin({rows:this._rows},h);var e=this;return n(a).then(function(a){a=e.renderArray(a,f,h);delete e._lastCollection;return a})},_observeCollection:function(a,f,h){var e=this,b=h.rows,g,d=[a.on("delete, update",function(a){var c=a.previousIndex,d=a.index;void 0!==c&&b[c]&&("max"in b&&(void 0===d||d<b.min||d>b.max)&&b.max--,g=b[c],g.parentNode===f&&e.removeRow(g,!1,h),b.splice(c,1),("delete"===a.type||"update"===a.type&&(c<d||void 0===d))&&b[c]&&b[c].rowIndex--,
e._processScroll&&e._processScroll());"delete"===a.type&&(g=null)}),a.on("add, update",function(a){var c=a.previousIndex,d=a.index;if(void 0!==d&&(!("max"in b)||d>=b.min&&d<=b.max)){"max"in b&&(void 0===c||c<b.min||c>b.max)&&b.max++;if(b.length){if(c=b[d],!c&&(c=b[d-1]))c=(c.connected||c).nextSibling}else c=e._getFirstRowSibling&&e._getFirstRowSibling(f);g&&(c&&g.id===c.id)&&(c=(c.connected||c).nextSibling);c&&!c.parentNode&&(c=document.getElementById(c.id));b.splice(d,0,void 0);g=e.insertRow(a.target,
f,c,d,h);e.highlightRow(g)}g=null}),a.on("add, delete, update",function(d){var c="undefined"!==typeof d.previousIndex?d.previousIndex:Infinity,f="undefined"!==typeof d.index?d.index:Infinity,g=Math.min(c,f);c!==f&&b[g]&&e.adjustRowIndices(b[g]);e._onNotification(b,d,a);a===e._renderedCollection&&"totalLength"in d&&(e._total=d.totalLength)})];return{remove:function(){for(;0<d.length;)d.pop().remove()}}},_onNotification:function(){}})});
//# sourceMappingURL=_StoreMixin.js.map