//>>built
define("dojox/dtl/filter/integers",["dojo/_base/lang","../_base"],function(c,e){var d=c.getObject("filter.integers",!0,e);c.mixin(d,{add:function(a,b){a=parseInt(a,10);b=parseInt(b,10);return isNaN(b)?a:a+b},get_digit:function(a,b){a=parseInt(a,10);b=parseInt(b,10)-1;0<=b&&(a+="",a=b<a.length?parseInt(a.charAt(b),10):0);return isNaN(a)?0:a}});return d});
//@ sourceMappingURL=integers.js.map