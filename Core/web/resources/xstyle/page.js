//>>built
define("xstyle/page",["xstyle/core/base","xstyle/main","dojo/domReady!"],function(c){var a=document.getElementsByTagName("textarea")[0].value,b=document.body,d={"\x26lt;":"\x3c","\x26gt;":"\x3e","\x26amp;":"\x26"};b._contentNode=b;b.innerHTML="";a=a.replace(/&\w+;/g,function(a){return d[a]});a=eval("("+a+")");c.definitions.pageContent.put(a)});
//# sourceMappingURL=page.js.map