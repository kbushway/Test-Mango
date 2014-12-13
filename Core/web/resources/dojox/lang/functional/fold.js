//>>built
define("dojox/lang/functional/fold",["dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","./lambda"],function(k,m,h,f){var l={};k.mixin(f,{foldl:function(a,d,e,c){"string"==typeof a&&(a=a.split(""));c=c||h.global;d=f.lambda(d);var b,g;if(k.isArray(a)){b=0;for(g=a.length;b<g;e=d.call(c,e,a[b],b,a),++b);}else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(b=0;a.hasNext();e=d.call(c,e,a.next(),b++,a));else for(b in a)b in l||(e=d.call(c,e,a[b],b,a));return e},foldl1:function(a,d,
e){"string"==typeof a&&(a=a.split(""));e=e||h.global;d=f.lambda(d);var c,b,g;if(k.isArray(a)){c=a[0];b=1;for(g=a.length;b<g;c=d.call(e,c,a[b],b,a),++b);}else if("function"==typeof a.hasNext&&"function"==typeof a.next){if(a.hasNext()){c=a.next();for(b=1;a.hasNext();c=d.call(e,c,a.next(),b++,a));}}else for(b in g=!0,a)b in l||(g?(c=a[b],g=!1):c=d.call(e,c,a[b],b,a));return c},foldr:function(a,d,e,c){"string"==typeof a&&(a=a.split(""));c=c||h.global;d=f.lambda(d);for(var b=a.length;0<b;--b,e=d.call(c,
e,a[b],b,a));return e},foldr1:function(a,d,e){"string"==typeof a&&(a=a.split(""));e=e||h.global;d=f.lambda(d);for(var c=a.length,b=a[c-1],c=c-1;0<c;--c,b=d.call(e,b,a[c],c,a));return b},reduce:function(a,d,e){return 3>arguments.length?f.foldl1(a,d):f.foldl(a,d,e)},reduceRight:function(a,d,e){return 3>arguments.length?f.foldr1(a,d):f.foldr(a,d,e)},unfold:function(a,d,e,c,b){b=b||h.global;d=f.lambda(d);e=f.lambda(e);a=f.lambda(a);for(var g=[];!a.call(b,c);g.push(d.call(b,c)),c=e.call(b,c));return g}})});
//@ sourceMappingURL=fold.js.map