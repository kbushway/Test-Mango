//>>built
define("dojox/mobile/bidi/Button",["dojo/_base/declare","./common"],function(c,b){return c(null,{_setLabelAttr:function(a){this.inherited(arguments,[this._cv?this._cv(a):a]);this.focusNode.innerHTML=b.enforceTextDirWithUcc(this.focusNode.innerHTML,this.textDir)},_setTextDirAttr:function(a){if(!this._created||this.textDir!==a)this._set("textDir",a),this.focusNode.innerHTML=b.enforceTextDirWithUcc(b.removeUCCFromText(this.focusNode.innerHTML),this.textDir)}})});
//# sourceMappingURL=Button.js.map