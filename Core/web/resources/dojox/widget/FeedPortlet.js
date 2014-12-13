//>>built
define("dojox/widget/FeedPortlet",["dijit","dojo","dojox","dojo/require!dojox/widget/Portlet,dijit/Tooltip,dijit/form/TextBox,dijit/form/Button,dojox/data/GoogleFeedStore"],function(g,a,d){a.provide("dojox.widget.FeedPortlet");a.require("dojox.widget.Portlet");a.require("dijit.Tooltip");a.require("dijit.form.TextBox");a.require("dijit.form.Button");a.require("dojox.data.GoogleFeedStore");a.declare("dojox.widget.FeedPortlet",d.widget.Portlet,{local:!1,maxResults:5,url:"",openNew:!0,showFeedTitle:!0,
postCreate:function(){this.inherited(arguments);if(this.local&&!d.data.AtomReadStore)throw Error(this.declaredClass+": To use local feeds, you must include dojox.data.AtomReadStore on the page.");},onFeedError:function(){this.containerNode.innerHTML="Error accessing the feed."},addChild:function(a){this.inherited(arguments);var c=a.attr("feedPortletUrl");c&&this.set("url",c)},_getTitle:function(a){a=this.store.getValue(a,"title");return this.local?a.text:a},_getLink:function(a){a=this.store.getValue(a,
"link");return this.local?a.href:a},_getContent:function(a){a=this.store.getValue(a,"summary");if(!a)return null;this.local&&(a=a.text);a=a.split("\x3cscript").join("\x3c!--").split("\x3c/script\x3e").join("--\x3e");return a=a.split("\x3ciframe").join("\x3c!--").split("\x3c/iframe\x3e").join("--\x3e")},_setUrlAttr:function(a){this.url=a;this._started&&this.load()},startup:function(){if(!this.started&&!this._started){this.inherited(arguments);if(!this.url||""==this.url)throw Error(this.id+": A URL must be specified for the feed portlet");
this.url&&""!=this.url&&this.load()}},load:function(){this._resultList&&a.destroy(this._resultList);var b,c;this.local?(b=new d.data.AtomReadStore({url:this.url}),c={}):(b=new d.data.GoogleFeedStore,c={url:this.url});c={query:c,count:this.maxResults,onComplete:a.hitch(this,function(a){if(this.showFeedTitle&&b.getFeedValue){var c=this.store.getFeedValue("title");c&&this.set("title",c.text?c.text:c)}this.generateResults(a)}),onError:a.hitch(this,"onFeedError")};this.store=b;b.fetch(c)},generateResults:function(b){var c,
k=this._resultList=a.create("ul",{"class":"dojoxFeedPortletList"},this.containerNode);a.forEach(b,a.hitch(this,function(b){var f=a.create("li",{innerHTML:'\x3ca href\x3d"'+this._getLink(b)+'"'+(this.openNew?' target\x3d"_blank"':"")+"\x3e"+this._getTitle(b)+"\x3c/a\x3e"},k);a.connect(f,"onmouseover",a.hitch(this,function(d){c&&clearTimeout(c);c=setTimeout(a.hitch(this,function(){c=null;var h=this._getContent(b);h&&(h='\x3cdiv class\x3d"dojoxFeedPortletPreview"\x3e'+h+"\x3c/div\x3e",a.query("li",k).forEach(function(a){a!=
d.target&&g.hideTooltip(a)}),g.showTooltip(h,f.firstChild,!this.isLeftToRight()))}),500)}));a.connect(f,"onmouseout",function(){c&&(clearTimeout(c),c=null);g.hideTooltip(f.firstChild)})}));this.resize()}});a.declare("dojox.widget.ExpandableFeedPortlet",d.widget.FeedPortlet,{onlyOpenOne:!1,generateResults:function(b){var c=this._resultList=a.create("ul",{"class":"dojoxFeedPortletExpandableList"},this.containerNode);a.forEach(b,a.hitch(this,a.hitch(this,function(b){var e=a.create("li",{"class":"dojoxPortletItemCollapsed"},
c),f=a.create("div",{style:"width: 100%;"},e);a.create("div",{"class":"dojoxPortletItemSummary",innerHTML:this._getContent(b)},e);a.create("span",{"class":"dojoxPortletToggleIcon",innerHTML:"\x3cimg src\x3d'"+a.config.baseUrl+"/resources/blank.gif'\x3e"},f);b=a.create("a",{href:this._getLink(b),innerHTML:this._getTitle(b)},f);this.openNew&&a.attr(b,"target","_blank")})));a.connect(c,"onclick",a.hitch(this,function(b){if(a.hasClass(b.target,"dojoxPortletToggleIcon")||a.hasClass(b.target.parentNode,
"dojoxPortletToggleIcon")){a.stopEvent(b);for(var e=b.target.parentNode;"LI"!=e.tagName;)e=e.parentNode;this.onlyOpenOne&&a.query("li",c).filter(function(a){return a!=e}).removeClass("dojoxPortletItemOpen").addClass("dojoxPortletItemCollapsed");b=a.hasClass(e,"dojoxPortletItemOpen");a.toggleClass(e,"dojoxPortletItemOpen",!b);a.toggleClass(e,"dojoxPortletItemCollapsed",b)}}))}});a.declare("dojox.widget.PortletFeedSettings",d.widget.PortletSettings,{"class":"dojoxPortletFeedSettings",urls:null,selectedIndex:0,
buildRendering:function(){var b;this.urls&&0<this.urls.length&&(b=a.create("select"),this.srcNodeRef&&(a.place(b,this.srcNodeRef,"before"),a.destroy(this.srcNodeRef)),this.srcNodeRef=b,a.forEach(this.urls,function(c){a.create("option",{value:c.url||c,innerHTML:c.label||c},b)}));if("SELECT"==this.srcNodeRef.tagName){this.text=this.srcNodeRef;var c=a.create("div",{},this.srcNodeRef,"before");c.appendChild(this.text);this.srcNodeRef=c;a.query("option",this.text).filter("return !item.value;").forEach("item.value \x3d item.innerHTML");
this.text.value||(this.content&&0==this.text.options.length&&this.text.appendChild(this.content),a.attr(b||this.text,"value",this.text.options[this.selectedIndex].value))}this.inherited(arguments)},_setContentAttr:function(){},postCreate:function(){if(!this.text){var b=this.text=new g.form.TextBox({});a.create("span",{innerHTML:"Choose Url: "},this.domNode);this.addChild(b)}this.addChild(new g.form.Button({label:"Load",onClick:a.hitch(this,function(){this.portlet.attr("url","SELECT"==this.text.tagName?
this.text.value:this.text.attr("value"));"SELECT"==this.text.tagName&&a.some(this.text.options,a.hitch(this,function(a,b){return a.selected?(this.set("selectedIndex",b),!0):!1}));this.toggle()})}));this.addChild(new g.form.Button({label:"Cancel",onClick:a.hitch(this,"toggle")}));this.inherited(arguments)},startup:function(){if(!this._started){this.inherited(arguments);if(!this.portlet)throw Error(this.declaredClass+": A PortletFeedSettings widget cannot exist without a Portlet.");"SELECT"==this.text.tagName&&
a.forEach(this.text.options,a.hitch(this,function(b,d){a.attr(b,"selected",d==this.selectedIndex)}));var b=this.portlet.attr("url");b?"SELECT"==this.text.tagName?!this.urls&&1>a.query("option[value\x3d'"+b+"']",this.text).length&&a.place(a.create("option",{value:b,innerHTML:b,selected:"true"}),this.text,"first"):this.text.attr("value",b):this.portlet.attr("url",this.get("feedPortletUrl"))}},_getFeedPortletUrlAttr:function(){return this.text.value}})});
//@ sourceMappingURL=FeedPortlet.js.map