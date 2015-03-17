//>>built
define("dstore/legacy/DstoreAdapter",["dojo/_base/declare","dojo/_base/array","dojo/store/util/QueryResults"],function(p,l,q){function g(d){return d}var n={store:null,constructor:function(d){this.store=d;if(d._getQuerierFactory("filter")||d._getQuerierFactory("sort"))this.queryEngine=function(a,b){b=b||{};var c=d._getQuerierFactory("filter"),f=c?c(a):g,c=d._getQuerierFactory("sort"),h=g;c&&(h=c(l.map(b.sort,function(b){return{property:b.attribute,descending:b.descending}})));var m=g;if(!isNaN(b.start)||
!isNaN(b.count))m=function(a){var c=b.start||0,c=a.slice(c,c+(b.count||Infinity));c.total=a.length;return c};return function(b){return m(h(f(b)))}};var c=this;d.on("add,update,delete",function(a){var b=a.type,e=a.target;c.notify("add"===b||"update"===b?e:void 0,"delete"===b||"update"===b?"id"in a?a.id:d.getIdentity(e):void 0)})},query:function(d,c){c=c||{};var a=this.store.filter(d),b,e=c.sort;if(e)if("[object Array]"===Object.prototype.toString.call(e))for(var f;f=e.pop();)a=a.sort(f.attribute,f.descending);
else a=a.sort(e);var h;a.track&&!a.tracking&&(a=a.track(),h=!0);"start"in c&&(b=c.start||0,b=a[a.fetchRangeSync?"fetchRangeSync":"fetchRange"]({start:b,end:c.count?b+c.count:Infinity}),b.total=b.totalLength);b=b||new q(a[a.fetchSync?"fetchSync":"fetch"]());b.observe=function(b,c){function d(b){return void 0===b&&h?-1:b}var e=a.on("add",function(c){b(c.target,-1,d(c.index))}),f=a.on("update",function(a){(c||a.previousIndex!==a.index||!isFinite(a.index))&&b(a.target,d(a.previousIndex),d(a.index))}),
g=a.on("delete",function(a){b(a.target,d(a.previousIndex),-1)}),k={remove:function(){e.remove();f.remove();g.remove()}};k.cancel=k.remove;return k};return b},notify:function(){}};l.forEach(["get","put","add","remove","getIdentity"],function(d){n[d]=function(){var c=this.store;return(c[d+"Sync"]||c[d]).apply(c,arguments)}});return p(null,n)});
//# sourceMappingURL=DstoreAdapter.js.map