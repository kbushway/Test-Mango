//>>built
define("dstore/Rest","dojo/request dojo/when dojo/_base/lang dojo/json dojo/io-query dojo/_base/declare ./Request".split(" "),function(f,l,g,h,p,m,n){return m(n,{stringify:h.stringify,get:function(c,a){a=a||{};var b=g.mixin({Accept:this.accepts},this.headers,a.headers||a),d=this;return f(this.target+c,{headers:b}).then(function(a){return d._restore(d.parse(a),!0)})},autoEmitEvents:!1,put:function(c,a){a=a||{};var b="id"in a?a.id:this.getIdentity(c),d="undefined"!==typeof b,e=this,h="beforeId"in a?
null===a.beforeId?{"Put-Default-Position":"end"}:{"Put-Before":a.beforeId}:!d||!1===a.overwrite?{"Put-Default-Position":this.defaultNewToStart?"start":"end"}:null,k=f(d?this.target+b:this.target,{method:d&&!a.incremental?"PUT":"POST",data:this.stringify(c),headers:g.mixin({"Content-Type":"application/json",Accept:this.accepts,"If-Match":!0===a.overwrite?"*":null,"If-None-Match":!1===a.overwrite?"*":null},h,this.headers,a.headers)});return k.then(function(d){var b={};"beforeId"in a&&(b.beforeId=a.beforeId);
d=b.target=e._restore(e.parse(d),!0)||c;l(k.response,function(a){e.emit(201===a.status?"add":"update",b)});return d})},add:function(c,a){a=a||{};a.overwrite=!1;return this.put(c,a)},remove:function(c,a){a=a||{};var b=this;return f(this.target+c,{method:"DELETE",headers:g.mixin({},this.headers,a.headers)}).then(function(a){var e=a&&b.parse(a);b.emit("delete",{id:c,target:e});return a?e:!0})}})});
//# sourceMappingURL=Rest.js.map