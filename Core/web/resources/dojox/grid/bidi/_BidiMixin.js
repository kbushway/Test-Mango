//>>built
define("dojox/grid/bidi/_BidiMixin","../../main dojo/_base/lang ../_Builder dijit/_BidiSupport ../_Grid ../cells/_base ../cells/dijit".split(" "),function(h,d,k,g,n,l,m){d.extend(n,{setCellNodeTextDirection:function(a,b,c){this.getCell(a).getNode(b).style.direction=c||""},getCellNodeTextDirection:function(a,b){return this.getCell(a).getNode(b).style.direction},_setTextDirAttr:function(a){this.textDir=a;this.render()}});d.extend(k._ContentBuilder,{_getTextDirStyle:function(a,b,c){var d=this.grid.getItem(c);
"auto"===a&&(b=b.get?b.get(c,d):b.value||b.defaultValue)&&(a=g.prototype._checkContextual(b));return" direction:"+a+";"}});d.extend(k._HeaderBuilder,{_getTextDirStyle:function(a,b,c){"auto"===a&&(b=c||b.name||b.grid.getCellName(b))&&(a=g.prototype._checkContextual(b));return" direction:"+a+"; "}});d.extend(l.Cell,{LRE:"\u202a",RLE:"\u202b",PDF:"\u202c",KEY_HANDLER:'onkeyup\x3d\' javascript:(function(){var target; if (event.target) target \x3d event.target; else if (event.srcElement) target \x3d event.srcElement; if(!target) return;var regExMatch \x3d /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(target.value);target.dir \x3d regExMatch ? ( regExMatch[0] \x3c\x3d "z" ? "ltr" : "rtl" ) : target.dir ? target.dir : "ltr"; })();\'',
_getTextDirMarkup:function(a){var b="",c=this.textDir||this.grid.textDir;c&&("auto"===c&&(b=this.KEY_HANDLER,c=g.prototype._checkContextual(a)),b+=" dir\x3d'"+c+"'; ");return b},formatEditing:function(a,b){this.needFormatNode(a,b);return'\x3cinput class\x3d"dojoxGridInput" '+this._getTextDirMarkup(a)+' type\x3d"text" value\x3d"'+a+'"\x3e'},_enforceTextDirWithUcc:function(a,b){a="auto"===a?g.prototype._checkContextual(b):a;return("rtl"===a?this.RLE:this.LRE)+b+this.PDF}});d.extend(l.Select,{_getValueCallOrig:h.grid.cells.Select.prototype.getValue,
getValue:function(a){if((a=this._getValueCallOrig(a))&&(this.textDir||this.grid.textDir))a=a.replace(/\u202A|\u202B|\u202C/g,"");return a},formatEditing:function(a,b){this.needFormatNode(a,b);for(var c=['\x3cselect dir \x3d "'+(this.grid.isLeftToRight()?"ltr":"rtl")+'" class\x3d"dojoxGridSelect"\x3e'],d=0,e,f;void 0!==(e=this.options[d])&&void 0!==(f=this.values[d]);d++){f=f.replace?f.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;"):f;e=e.replace?e.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;"):
e;if(this.textDir||this.grid.textDir)e=this._enforceTextDirWithUcc(this.textDir||this.grid.textDir,e);c.push("\x3coption",a==f?" selected":"",' value \x3d "'+f+'"',"\x3e",e,"\x3c/option\x3e")}c.push("\x3c/select\x3e");return c.join("")}});d.extend(m.ComboBox,{getWidgetPropsCallOrig:h.grid.cells.ComboBox.prototype.getWidgetProps,getWidgetProps:function(a){a=this.getWidgetPropsCallOrig(a);if(this.textDir||this.grid.textDir)a.textDir=this.textDir||this.grid.textDir;return a}});d.extend(m._Widget,{getWidgetPropsCallOrig:h.grid.cells._Widget.prototype.getWidgetProps,
getWidgetProps:function(a){a=this.getWidgetPropsCallOrig(a);if(this.textDir||this.grid.textDir)a.textDir=this.textDir||this.grid.textDir;return a}})});
//# sourceMappingURL=_BidiMixin.js.map