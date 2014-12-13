//>>built
define("dojo/i18n","./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "),function(n,q,r,w,C,s,z,D,E){r.add("dojo-preload-i18n-Api",1);var t=n.i18n={},F=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,G=function(a,c,b,d){var g=[b+d];c=c.split("-");for(var k="",e=0;e<c.length;e++)if(k+=(k?"-":"")+c[e],!a||a[k])g.push(b+k+"/"+d),g.specificity=k;return g},h={},A=function(a,c,b){b=b?b.toLowerCase():n.locale;a=a.replace(/\./g,"/");c=c.replace(/\./g,"/");
return/root/i.test(b)?a+"/nls/"+c:a+"/nls/"+b+"/"+c},H=n.getL10nName=function(a,c,b){return E.id+"!"+A(a,c,b)},J=function(a,c,b,d,g,k){a([c],function(e){var l=s.clone(e.root),u=G(!e._v1x&&e,g,b,d);a(u,function(){for(var a=1;a<u.length;a++)l=s.mixin(s.clone(l),arguments[a]);h[c+"/"+g]=l;l.$locale=u.specificity;k()})})},K=function(a){var c=C.extraLocale||[],c=s.isArray(c)?c:[c];c.push(a);return c},y=function(a,c,b){if(r("dojo-preload-i18n-Api")){var d=a.split("*"),g="preload"==d[1];g&&(h[a]||(h[a]=
1,L(d[2],D.parse(d[3]),1,c)),b(1));if(!(d=g))v&&x.push([a,c,b]),d=v;if(d)return}a=F.exec(a);var k=a[1]+"/",e=a[5]||a[4],l=k+e,d=(a=a[5]&&a[4])||n.locale||"",u=l+"/"+d;a=a?[d]:K(d);var I=a.length,f=function(){--I||b(s.delegate(h[u]))};w.forEach(a,function(a){var b=l+"/"+a;r("dojo-preload-i18n-Api")&&m(b);h[b]?f():J(c,l,k,e,a,f)})};if(r("dojo-unit-tests"))var M=t.unitTests=[];r("dojo-preload-i18n-Api");var N=t.normalizeLocale=function(a){a=a?a.toLowerCase():n.locale;return"root"==a?"ROOT":a},v=0,x=
[],L=t._preloadLocalizations=function(a,c,b,d){function g(a,c){d.isXdUrl(q.toUrl(a+".js"))||b?d([a],c):B([a],c,d)}function k(a,c){for(var b=a.split("-");b.length;){if(c(b.join("-")))return;b.pop()}c("ROOT")}function e(b){b=N(b);k(b,function(b){if(0<=w.indexOf(c,b)){var d=a.replace(/\./g,"/")+"_"+b;v++;g(d,function(a){for(var c in a)h[q.toAbsMid(c)+"/"+b]=a[c];for(--v;!v&&x.length;)y.apply(null,x.shift())});return!0}return!1})}d=d||q;e();w.forEach(n.config.extraLocale,e)},m=function(){},f={},p=new Function("__bundle",
"__checkForLegacyModules","__mid","__amdValue","var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),B=function(a,c,b){var d=[];w.forEach(a,function(a){function c(b){b=
p(b,m,a,f);b===f?d.push(h[e]=f.result):(b instanceof Error&&(b={}),d.push(h[e]=/nls\/[^\/]+\/[^\/]+$/.test(e)?b:{root:b,_v1x:1}))}var e=b.toUrl(a+".js");if(h[e])d.push(h[e]);else{var l=b.syncLoadNls(a);if(l)d.push(l);else if(z)z.get({url:e,sync:!0,load:c,error:function(){d.push(h[e]={})}});else try{b.getText(e,!0,c)}catch(n){d.push(h[e]={})}}});c&&c.apply(null,d)},m=function(a){for(var c,b=a.split("/"),d=n.global[b[0]],g=1;d&&g<b.length-1;d=d[b[g++]]);d&&((c=d[b[g]])||(c=d[b[g].replace(/-/g,"_")]),
c&&(h[a]=c));return c};t.getLocalization=function(a,c,b){var d;a=A(a,c,b);y(a,!q.isXdUrl(q.toUrl(a+".js"))?function(a,b){B(a,b,q)}:q,function(a){d=a});return d};r("dojo-unit-tests")&&M.push(function(a){a.register("tests.i18n.unit",function(a){var b;b=p("{prop:1}",m,"nonsense",f);a.is({prop:1},b);a.is(void 0,b[1]);b=p("({prop:1})",m,"nonsense",f);a.is({prop:1},b);a.is(void 0,b[1]);b=p("{'prop-x':1}",m,"nonsense",f);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=p("({'prop-x':1})",m,"nonsense",f);a.is({"prop-x":1},
b);a.is(void 0,b[1]);b=p("define({'prop-x':1})",m,"nonsense",f);a.is(f,b);a.is({"prop-x":1},f.result);b=p("define('some/module', {'prop-x':1})",m,"nonsense",f);a.is(f,b);a.is({"prop-x":1},f.result);b=p("this is total nonsense and should throw an error",m,"nonsense",f);a.is(b instanceof Error,!0)})});return s.mixin(t,{dynamic:!0,normalize:function(a,c){return/^\./.test(a)?c(a):a},load:y,cache:h,getL10nName:H})});
//@ sourceMappingURL=i18n.js.map