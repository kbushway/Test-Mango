//>>built
define("dojox/dgauges/LogScaler",["dojo/_base/lang","dojo/_base/declare","dojo/Stateful"],function(h,f,g){return f("dojox.dgauges.LogScaler",g,{minimum:0,maximum:1E3,multiplier:10,majorTicks:null,_computedMultiplier:NaN,constructor:function(){this.watchedProperties=["minimum","maximum","multiplier"]},_buildMajorTickItems:function(){var a=[];this._computedMinimum=this.getComputedMinimum();this._computedMaximum=this.getComputedMaximum();this._computedMultiplier=this.getComputedMultiplier();if(this._computedMaximum>
this._computedMinimum)for(var b=Math.max(0,Math.floor(Math.log(this._computedMinimum+1E-9)/Math.LN10)),c=Math.max(0,Math.floor(Math.log(this._computedMaximum+1E-9)/Math.LN10)),e,d=b;d<=c;d+=this._computedMultiplier)e={},e.value=Math.pow(10,d),e.position=(d-b)/(c-b),a.push(e);return a},getComputedMinimum:function(){return Math.pow(10,Math.max(0,Math.floor(Math.log(this.minimum+1E-9)/Math.LN10)))},getComputedMaximum:function(){return Math.pow(10,Math.max(0,Math.floor(Math.log(this.maximum+1E-9)/Math.LN10)))},
getComputedMultiplier:function(){return Math.max(1,Math.floor(Math.log(this.multiplier+1E-9)/Math.LN10))},computeTicks:function(){this.majorTicks=this._buildMajorTickItems();return this.majorTicks.concat()},positionForValue:function(a){if(this._computedMaximum<this._computedMinimum||a<=this._computedMinimum||1>a||isNaN(a))a=this._computedMinimum;a>=this._computedMaximum&&(a=this._computedMaximum);a=Math.log(a)/Math.LN10;var b=Math.log(this._computedMinimum)/Math.LN10,c=Math.log(this._computedMaximum)/
Math.LN10;return(a-b)/(c-b)},valueForPosition:function(a){var b=Math.log(this._computedMinimum)/Math.LN10,c=Math.log(this._computedMaximum)/Math.LN10;return Math.pow(10,b+a*(c-b))}})});
//# sourceMappingURL=LogScaler.js.map