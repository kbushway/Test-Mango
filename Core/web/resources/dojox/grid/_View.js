//>>built
require({cache:{"url:dojox/grid/resources/View.html":'\x3cdiv class\x3d"dojoxGridView" role\x3d"presentation"\x3e\n\t\x3cdiv class\x3d"dojoxGridHeader" dojoAttachPoint\x3d"headerNode" role\x3d"presentation"\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"headerNodeContainer" style\x3d"width:9000em" role\x3d"presentation"\x3e\n\t\t\t\x3cdiv dojoAttachPoint\x3d"headerContentNode" role\x3d"row"\x3e\x3c/div\x3e\n\t\t\x3c/div\x3e\n\t\x3c/div\x3e\n\t\x3cinput type\x3d"checkbox" class\x3d"dojoxGridHiddenFocus" dojoAttachPoint\x3d"hiddenFocusNode" role\x3d"presentation" /\x3e\n\t\x3cinput type\x3d"checkbox" class\x3d"dojoxGridHiddenFocus" role\x3d"presentation" /\x3e\n\t\x3cdiv class\x3d"dojoxGridScrollbox" dojoAttachPoint\x3d"scrollboxNode" role\x3d"presentation"\x3e\n\t\t\x3cdiv class\x3d"dojoxGridContent" dojoAttachPoint\x3d"contentNode" hidefocus\x3d"hidefocus" role\x3d"presentation"\x3e\x3c/div\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/grid/_View","dojo dijit/registry ../main dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/connect dojo/_base/sniff dojo/query dojo/_base/window dojo/text!./resources/View.html dojo/dnd/Source dijit/_Widget dijit/_TemplatedMixin dojox/html/metrics ./util dojo/_base/html ./_Builder dojo/dnd/Avatar dojo/dnd/Manager".split(" "),function(A,w,B,x,r,l,s,n,u,t,v,p,C,D,y,q,c,z,E,m){v=x("dojox.grid._View",[C,D],{defaultWidth:"18em",viewWidth:"",templateString:v,classTag:"dojoxGrid",
marginBottom:0,rowPad:2,_togglingColumn:-1,_headerBuilderClass:z._HeaderBuilder,_contentBuilderClass:z._ContentBuilder,postMixInProperties:function(){this.rowNodes={}},postCreate:function(){this.connect(this.scrollboxNode,"onscroll","doscroll");q.funnelEvents(this.contentNode,this,"doContentEvent","mouseover mouseout click dblclick contextmenu mousedown".split(" "));q.funnelEvents(this.headerNode,this,"doHeaderEvent","dblclick mouseover mouseout mousemove mousedown click contextmenu".split(" "));
this.content=new this._contentBuilderClass(this);this.header=new this._headerBuilderClass(this);this.grid.isLeftToRight()||(this.headerNodeContainer.style.width="")},destroy:function(){c.destroy(this.headerNode);delete this.headerNode;for(var a in this.rowNodes)this._cleanupRowWidgets(this.rowNodes[a]),c.destroy(this.rowNodes[a]);this.rowNodes={};this.source&&this.source.destroy();this.inherited(arguments)},focus:function(){n("ie")||n("webkit")||n("opera")?this.hiddenFocusNode.focus():this.scrollboxNode.focus()},
setStructure:function(a){a=this.structure=a;a.width&&!isNaN(a.width)?this.viewWidth=a.width+"em":this.viewWidth=a.width||(a.noscroll?"auto":this.viewWidth);this._onBeforeRow=a.onBeforeRow||function(){};this._onAfterRow=a.onAfterRow||function(){};if(this.noscroll=a.noscroll)this.scrollboxNode.style.overflow="hidden";this.simpleStructure=Boolean(1==a.cells.length);this.testFlexCells();this.updateStructure()},_cleanupRowWidgets:function(a){a&&r.forEach(u("[widgetId]",a).map(w.byNode),function(a){a._destroyOnRemove?
(a.destroy(),delete a):a.domNode&&a.domNode.parentNode&&a.domNode.parentNode.removeChild(a.domNode)})},onBeforeRow:function(a,b){this._onBeforeRow(a,b);0<=a&&this._cleanupRowWidgets(this.getRowNode(a))},onAfterRow:function(a,b,e){this._onAfterRow(a,b,e);var f=this.grid;r.forEach(u(".dojoxGridStubNode",e),function(a){if(a&&a.parentNode){var b=a.getAttribute("linkWidget"),e=window.parseInt(c.attr(a,"cellIdx"),10);f.getCell(e);(b=w.byId(b))?(a.parentNode.replaceChild(b.domNode,a),b._started||b.startup(),
A.destroy(a)):a.innerHTML=""}},this)},testFlexCells:function(){this.flexCells=!1;for(var a=0,b;b=this.structure.cells[a];a++)for(var c=0,f;f=b[c];c++)f.view=this,this.flexCells=this.flexCells||f.isFlex();return this.flexCells},updateStructure:function(){this.header.update();this.content.update()},getScrollbarWidth:function(){var a=this.hasVScrollbar(),b=c.style(this.scrollboxNode,"overflow");this.noscroll||!b||"hidden"==b?a=!1:"scroll"==b&&(a=!0);return a?y.getScrollbar().w:0},getColumnsWidth:function(){var a=
this.headerContentNode;return a&&a.firstChild?a.firstChild.offsetWidth||c.style(a.firstChild,"width"):0},setColumnsWidth:function(a){this.headerContentNode.firstChild.style.width=a+"px";this.viewWidth&&(this.viewWidth=a+"px")},getWidth:function(){return this.viewWidth||this.getColumnsWidth()+this.getScrollbarWidth()+"px"},getContentWidth:function(){return Math.max(0,c._getContentBox(this.domNode).w-this.getScrollbarWidth())+"px"},render:function(){this.scrollboxNode.style.height="";this.renderHeader();
0<=this._togglingColumn&&(this.setColumnsWidth(this.getColumnsWidth()-this._togglingColumn),this._togglingColumn=-1);var a=this.grid.layout.cells,b=l.hitch(this,function(b,d){!this.grid.isLeftToRight()&&(d=!d);for(var c=d?-1:1,e=this.header.getCellNodeIndex(b)+c,k=a[e];k&&k.getHeaderNode()&&"none"==k.getHeaderNode().style.display;)e+=c,k=a[e];return k?k.getHeaderNode():null});if(this.grid.columnReordering&&this.simpleStructure){this.source&&this.source.destroy();this.bottomMarker&&c.destroy(this.bottomMarker);
this.bottomMarker=c.byId("dojoxGrid_bottomMarker");this.topMarker&&c.destroy(this.topMarker);this.topMarker=c.byId("dojoxGrid_topMarker");this.bottomMarker||(this.bottomMarker=c.create("div",{id:"dojoxGrid_bottomMarker","class":"dojoxGridColPlaceBottom"},t.body()),this._hide(this.bottomMarker),this.topMarker=c.create("div",{id:"dojoxGrid_topMarker","class":"dojoxGridColPlaceTop"},t.body()),this._hide(this.topMarker));this.arrowDim=c.contentBox(this.bottomMarker);var e=c.contentBox(this.headerContentNode.firstChild.rows[0]).h;
this.source=new p(this.headerContentNode.firstChild.rows[0],{horizontal:!0,accept:["gridColumn_"+this.grid.id],viewIndex:this.index,generateText:!1,onMouseDown:l.hitch(this,function(a){this.header.decorateEvent(a);if((this.header.overRightResizeArea(a)||this.header.overLeftResizeArea(a))&&this.header.canResize(a)&&!this.header.moveable)this.header.beginColumnResize(a);else{if(this.grid.headerMenu)this.grid.headerMenu.onCancel(!0);a.button===(9>n("ie")?1:0)&&p.prototype.onMouseDown.call(this.source,
a)}}),onMouseOver:l.hitch(this,function(a){var b=this.source;b._getChildByEvent(a)&&p.prototype.onMouseOver.apply(b,arguments)}),_markTargetAnchor:l.hitch(this,function(a){var d=this.source;if(!(d.current==d.targetAnchor&&d.before==a)){d.targetAnchor&&b(d.targetAnchor,d.before)&&d._removeItemClass(b(d.targetAnchor,d.before),d.before?"After":"Before");p.prototype._markTargetAnchor.call(d,a);var g=a?d.targetAnchor:b(d.targetAnchor,d.before);a=0;g||(g=d.targetAnchor,a=c.contentBox(g).w+this.arrowDim.w/
2+2);g=c.position(g,!0);a=Math.floor(g.x-this.arrowDim.w/2+a);c.style(this.bottomMarker,"visibility","visible");c.style(this.topMarker,"visibility","visible");c.style(this.bottomMarker,{left:a+"px",top:e+g.y+"px"});c.style(this.topMarker,{left:a+"px",top:g.y-this.arrowDim.h+"px"});d.targetAnchor&&b(d.targetAnchor,d.before)&&d._addItemClass(b(d.targetAnchor,d.before),d.before?"After":"Before")}}),_unmarkTargetAnchor:l.hitch(this,function(){var a=this.source;a.targetAnchor&&(a.targetAnchor&&b(a.targetAnchor,
a.before)&&a._removeItemClass(b(a.targetAnchor,a.before),a.before?"After":"Before"),this._hide(this.bottomMarker),this._hide(this.topMarker),p.prototype._unmarkTargetAnchor.call(a))}),destroy:l.hitch(this,function(){s.disconnect(this._source_conn);s.unsubscribe(this._source_sub);p.prototype.destroy.call(this.source);this.bottomMarker&&(c.destroy(this.bottomMarker),delete this.bottomMarker);this.topMarker&&(c.destroy(this.topMarker),delete this.topMarker)}),onDndCancel:l.hitch(this,function(){p.prototype.onDndCancel.call(this.source);
this._hide(this.bottomMarker);this._hide(this.topMarker)})});this._source_conn=s.connect(this.source,"onDndDrop",this,"_onDndDrop");this._source_sub=s.subscribe("/dnd/drop/before",this,"_onDndDropBefore");this.source.startup()}},_hide:function(a){c.style(a,{top:"-10000px",visibility:"hidden"})},_onDndDropBefore:function(a,b,c){m.manager().target===this.source&&(this.source._targetNode=this.source.targetAnchor,this.source._beforeTarget=this.source.before,b=this.grid.views.views,a=b[a.viewIndex],b=
b[this.index],b!=a&&(a.convertColPctToFixed(),b.convertColPctToFixed()))},_onDndDrop:function(a,b,e){if(m.manager().target!==this.source)m.manager().source===this.source&&(this._removingColumn=!0);else{this._hide(this.bottomMarker);this._hide(this.topMarker);e=c.marginBox(b[0]).w;if(a.viewIndex!==this.index){var f=this.grid.views.views,d=f[a.viewIndex],f=f[this.index];d.viewWidth&&"auto"!=d.viewWidth&&d.setColumnsWidth(d.getColumnsWidth()-e);f.viewWidth&&"auto"!=f.viewWidth&&f.setColumnsWidth(f.getColumnsWidth())}e=
this.source._targetNode;d=this.source._beforeTarget;!this.grid.isLeftToRight()&&(d=!d);var f=this.grid.layout,g=this.index;delete this.source._targetNode;delete this.source._beforeTarget;f.moveColumn(a.viewIndex,g,b[0]?c.attr(b[0],"idx"):null,e?c.attr(e,"idx"):null,d)}},renderHeader:function(){this.headerContentNode.innerHTML=this.header.generateHtml(this._getHeaderContent);this.flexCells&&(this.contentWidth=this.getContentWidth(),this.headerContentNode.firstChild.style.width=this.contentWidth);q.fire(this,
"onAfterRow",[-1,this.structure.cells,this.headerContentNode])},_getHeaderContent:function(a){var b=a.name||a.grid.getCellName(a);/^\s+$/.test(b)&&(b="\x26nbsp;");var c=['\x3cdiv class\x3d"dojoxGridSortNode'];a.index!=a.grid.getSortIndex()?c.push('"\x3e'):c=c.concat([" ",0<a.grid.sortInfo?"dojoxGridSortUp":"dojoxGridSortDown",'"\x3e\x3cdiv class\x3d"dojoxGridArrowButtonChar"\x3e',0<a.grid.sortInfo?"\x26#9650;":"\x26#9660;",'\x3c/div\x3e\x3cdiv class\x3d"dojoxGridArrowButtonNode" role\x3d"presentation"\x3e\x3c/div\x3e',
'\x3cdiv class\x3d"dojoxGridColCaption"\x3e']);c=c.concat([b,"\x3c/div\x3e\x3c/div\x3e"]);return c.join("")},resize:function(){this.adaptHeight();this.adaptWidth()},hasHScrollbar:function(a){var b=this._hasHScroll||!1;if(void 0==this._hasHScroll||a)this.noscroll?this._hasHScroll=!1:(a=c.style(this.scrollboxNode,"overflow"),this._hasHScroll="hidden"==a?!1:"scroll"==a?!0:this.scrollboxNode.offsetWidth-this.getScrollbarWidth()<this.contentNode.offsetWidth);b!==this._hasHScroll&&this.grid.update();return this._hasHScroll},
hasVScrollbar:function(a){var b=this._hasVScroll||!1;if(void 0==this._hasVScroll||a)this.noscroll?this._hasVScroll=!1:(a=c.style(this.scrollboxNode,"overflow"),this._hasVScroll="hidden"==a?!1:"scroll"==a?!0:this.scrollboxNode.scrollHeight>this.scrollboxNode.clientHeight);b!==this._hasVScroll&&this.grid.update();return this._hasVScroll},convertColPctToFixed:function(){var a=!1;this.grid.initialWidth="";var b=u("th",this.headerContentNode),e=r.map(b,function(b,d){var e=b.style.width;c.attr(b,"vIdx",
d);if(e&&"%"==e.slice(-1))a=!0;else if(e&&"px"==e.slice(-2))return window.parseInt(e,10);return c.contentBox(b).w});return a?(r.forEach(this.grid.layout.cells,function(a,b){if(a.view==this){var g=a.view.getHeaderCellNode(a.index);if(g&&c.hasAttr(g,"vIdx")){var h=window.parseInt(c.attr(g,"vIdx"));this.setColWidth(b,e[h]);c.removeAttr(g,"vIdx")}}},this),!0):!1},adaptHeight:function(a){if(!this.grid._autoHeight){var b=this.domNode.style.height&&parseInt(this.domNode.style.height.replace(/px/,""),10)||
this.domNode.clientHeight;if(!a&&(a=this.noscroll))a:{for(var c in this.grid.views.views)if(a=this.grid.views.views[c],a!==this&&a.hasHScrollbar()){a=!0;break a}a=!1}a&&(b-=y.getScrollbar().h);q.setStyleHeightPx(this.scrollboxNode,b)}this.hasVScrollbar(!0)},adaptWidth:function(){this.flexCells&&(this.contentWidth=this.getContentWidth(),this.headerContentNode.firstChild.style.width=this.contentWidth);var a=this.scrollboxNode.offsetWidth-this.getScrollbarWidth();this._removingColumn?(a=Math.min(a,this.getColumnsWidth())+
"px",this._removingColumn=!1):a=Math.max(a,this.getColumnsWidth())+"px";this.contentNode.style.width=a;this.hasHScrollbar(!0)},setSize:function(a,b){var c=this.domNode.style,f=this.headerNode.style;a&&(c.width=a,f.width=a);c.height=0<=b?b+"px":""},renderRow:function(a){var b=this.createRowNode(a);this.buildRow(a,b);return b},createRowNode:function(a){var b=document.createElement("div");b.className=this.classTag+"Row";this instanceof B.grid._RowSelector?c.attr(b,"role","presentation"):(c.attr(b,"role",
"row"),"none"!=this.grid.selectionMode&&b.setAttribute("aria-selected","false"));b[q.gridViewTag]=this.id;b[q.rowIndexTag]=a;return this.rowNodes[a]=b},buildRow:function(a,b){this.buildRowContent(a,b);this.styleRow(a,b)},buildRowContent:function(a,b){b.innerHTML=this.content.generateHtml(a,a);this.flexCells&&this.contentWidth&&(b.firstChild.style.width=this.contentWidth);q.fire(this,"onAfterRow",[a,this.structure.cells,b])},rowRemoved:function(a){0<=a&&this._cleanupRowWidgets(this.getRowNode(a));
this.grid.edit.save(this,a);delete this.rowNodes[a]},getRowNode:function(a){return this.rowNodes[a]},getCellNode:function(a,b){var c=this.getRowNode(a);if(c)return this.content.getCellNode(c,b)},getHeaderCellNode:function(a){if(this.headerContentNode)return this.header.getCellNode(this.headerContentNode,a)},styleRow:function(a,b){b._style=void 0==b.style.cssText?b.getAttribute("style"):b.style.cssText;this.styleRowNode(a,b)},styleRowNode:function(a,b){b&&this.doStyleRowNode(a,b)},doStyleRowNode:function(a,
b){this.grid.styleRowNode(a,b)},updateRow:function(a){var b=this.getRowNode(a);b&&(b.style.height="",this.buildRow(a,b));return b},updateRowStyles:function(a){this.styleRowNode(a,this.getRowNode(a))},lastTop:0,firstScroll:0,_nativeScroll:!1,doscroll:function(a){13<=n("ff")&&(this._nativeScroll=!0);a=this.grid.isLeftToRight();if(2>this.firstScroll){if(!a&&1==this.firstScroll||a&&0===this.firstScroll){var b=c.marginBox(this.headerNodeContainer);n("ie")?this.headerNodeContainer.style.width=b.w+this.getScrollbarWidth()+
"px":n("mozilla")&&(this.headerNodeContainer.style.width=b.w-this.getScrollbarWidth()+"px",this.scrollboxNode.scrollLeft=a?this.scrollboxNode.clientWidth-this.scrollboxNode.scrollWidth:this.scrollboxNode.scrollWidth-this.scrollboxNode.clientWidth)}this.firstScroll++}this.headerNode.scrollLeft=this.scrollboxNode.scrollLeft;a=this.scrollboxNode.scrollTop;a!==this.lastTop&&this.grid.scrollTo(a);this._nativeScroll=!1},setScrollTop:function(a){this.lastTop=a;this._nativeScroll||(this.scrollboxNode.scrollTop=
a);return this.scrollboxNode.scrollTop},doContentEvent:function(a){if(this.content.decorateEvent(a))this.grid.onContentEvent(a)},doHeaderEvent:function(a){if(this.header.decorateEvent(a))this.grid.onHeaderEvent(a)},dispatchContentEvent:function(a){return this.content.dispatchEvent(a)},dispatchHeaderEvent:function(a){return this.header.dispatchEvent(a)},setColWidth:function(a,b){this.grid.setCellWidth(a,b+"px")},update:function(){if(this.domNode){this.content.update();this.grid.update();var a=this.scrollboxNode.scrollLeft;
this.scrollboxNode.scrollLeft=a;this.headerNode.scrollLeft=a}}});var F=x("dojox.grid._GridAvatar",E,{construct:function(){var a=t.doc,b=a.createElement("table");b.cellPadding=b.cellSpacing="0";b.className="dojoxGridDndAvatar";b.style.position="absolute";b.style.zIndex=1999;b.style.margin="0px";var e=a.createElement("tbody"),f=a.createElement("tr"),d=a.createElement("td"),g=a.createElement("td");f.className="dojoxGridDndAvatarItem";g.className="dojoxGridDndAvatarItemImage";g.style.width="16px";var h=
this.manager.source;if(h.creator)h=h._normalizedCreator(h.getItem(this.manager.nodes[0].id).data,"avatar").node;else{var h=this.manager.nodes[0].cloneNode(!0),k,l;"tr"==h.tagName.toLowerCase()?(k=a.createElement("table"),l=a.createElement("tbody"),l.appendChild(h),k.appendChild(l),h=k):"th"==h.tagName.toLowerCase()&&(k=a.createElement("table"),l=a.createElement("tbody"),a=a.createElement("tr"),k.cellPadding=k.cellSpacing="0",a.appendChild(h),l.appendChild(a),k.appendChild(l),h=k)}h.id="";d.appendChild(h);
f.appendChild(g);f.appendChild(d);c.style(f,"opacity",0.9);e.appendChild(f);b.appendChild(e);this.node=b;b=m.manager();this.oldOffsetY=b.OFFSET_Y;b.OFFSET_Y=1},destroy:function(){m.manager().OFFSET_Y=this.oldOffsetY;this.inherited(arguments)}}),G=m.manager().makeAvatar;m.manager().makeAvatar=function(){return void 0!==this.source.viewIndex&&!c.hasClass(t.body(),"dijit_a11y")?new F(this):G.call(m.manager())};return v});
//@ sourceMappingURL=_View.js.map