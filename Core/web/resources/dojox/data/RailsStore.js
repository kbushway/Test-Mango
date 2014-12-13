//>>built
define("dojox/data/RailsStore",["dojo","dojox","dojox/data/JsonRestStore"],function(e,h){return e.declare("dojox.data.RailsStore",h.data.JsonRestStore,{constructor:function(){},preamble:function(a){if("string"==typeof a.target&&!a.service){var g=a.target.replace(/\/$/g,"");a.service=h.rpc.Rest(this.target,!0,null,function(a,b){b=b||{};var k=g,f,c;e.isObject(a)?(c="",f="?"+e.objectToQuery(a)):b.queryStr&&-1!=b.queryStr.indexOf("?")?(c=b.queryStr.replace(/\?.*/,""),f=b.queryStr.replace(/[^?]*\?/g,"?")):
e.isString(b.query)&&-1!=b.query.indexOf("?")?(c=b.query.replace(/\?.*/,""),f=b.query.replace(/[^?]*\?/g,"?")):(c=a?a.toString():"",f="");-1!=c.indexOf("\x3d")&&(f=c,c="");var l=h.rpc._sync;h.rpc._sync=!1;return{url:c?k+"/"+c+".json"+f:k+".json"+f,handleAs:"json",contentType:"application/json",sync:l,headers:{Accept:"application/json,application/javascript",Range:b&&(0<=b.start||0<=b.count)?"items\x3d"+(b.start||"0")+"-"+(b.count&&b.count+(b.start||0)-1||""):void 0}}})}},fetch:function(a){function g(b){null==
a.queryStr&&(null==a.queryStr&&(a.queryStr=""),e.isObject(a.query)?a.queryStr="?"+e.objectToQuery(a.query):e.isString(a.query)&&(a.queryStr=a.query));var d=a,f=a.queryStr,c;c=-1==a.queryStr.indexOf("?")?"?":"\x26";d.queryStr=f+c+e.objectToQuery(b)}a=a||{};if(a.start||a.count){if((a.start||0)%a.count)throw Error("The start parameter must be a multiple of the count parameter");g({page:(a.start||0)/a.count+1,per_page:a.count})}if(a.sort){var d={sortBy:[],sortDir:[]};e.forEach(a.sort,function(a){d.sortBy.push(a.attribute);
d.sortDir.push(a.descending?"DESC":"ASC")});g(d);delete a.sort}return this.inherited(arguments)},_processResults:function(a,g){var d;if("undefined"==typeof this.rootAttribute&&a[0])if(a[0][this.idAttribute])this.rootAttribute=!1;else for(d in a[0])a[0][d][this.idAttribute]&&(this.rootAttribute=d);d=this.rootAttribute?e.map(a,function(a){return a[this.rootAttribute]},this):a;var b=a.length;return{totalCount:g.fullLength||(g.request.count==b?(g.request.start||0)+2*b:b),items:d}}})});
//@ sourceMappingURL=RailsStore.js.map