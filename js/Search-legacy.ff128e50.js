(self["webpackChunkhmtt"]=self["webpackChunkhmtt"]||[]).push([[288],{5425:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search-header"},[n("van-icon",{staticClass:"goback",attrs:{name:"arrow-left",color:"green",size:"0.48rem"},on:{click:function(e){return t.$router.back()}}}),n("van-search",{directives:[{name:"fofo",rawName:"v-fofo"}],attrs:{placeholder:"请输入搜索关键词",background:"pink",shape:"round"},on:{input:t.inputFn,search:t.searchFn},model:{value:t.kw,callback:function(e){t.kw="string"===typeof e?e.trim():e},expression:"kw"}})],1),0!==t.kw.length?n("div",{staticClass:"sugg-list"},t._l(t.suggestList,(function(e,r){return n("div",{key:r,staticClass:"sugg-item",domProps:{innerHTML:t._s(t.lightFn(e,t.kw))},on:{click:function(n){return t.suggestClickFn(e)}}})})),0):n("div",{staticClass:"search-history"},[n("van-cell",{attrs:{title:"搜索历史"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-icon",{staticClass:"search-icon",attrs:{name:"delete"},on:{click:t.clearFn}})]},proxy:!0}])}),n("div",{staticClass:"history-list"},t._l(t.history,(function(e,r){return n("span",{key:r,staticClass:"history-item",on:{click:function(n){return t.historyClickFn(e)}}},[t._v(t._s(e))])})),0)],1)])},i=[],o=n(6198),s=(n(4603),n(8450),n(4916),n(8386),n(9714),n(5306),n(1539),n(189),n(8783),n(3948),n(1038),n(8862),n(5666),n(2502)),u=n(5922),a={name:"Search",data:function(){return{kw:"",timer:null,suggestList:[],history:JSON.parse((0,u.cF)("history"))||[]}},methods:{inputFn:function(){var t=this;clearTimeout(this.timer),0===this.kw.length?this.suggestList=[]:this.timer=setTimeout((0,o.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Bq)({keywords:t.kw});case 2:n=e.sent,console.log(n,"联想菜单"),t.suggestList=n.data.data.options;case 5:case"end":return e.stop()}}),e)}))),300)},lightFn:function(t,e){var n=new RegExp(e,"ig");return t.replace(n,(function(t){return'<span style="color:red;">'.concat(t,"</span>")}))},moveFn:function(t){var e=this;setTimeout((function(){e.$router.push({path:"/search_result/".concat(t)})}),0)},searchFn:function(){this.kw.length>0&&(this.history.push(this.kw),this.moveFn(this.kw))},suggestClickFn:function(t){this.history.push(t),this.moveFn(t)},historyClickFn:function(t){this.moveFn(t)},clearFn:function(){this.history=[]}},watch:{history:{deep:!0,handler:function(){var t=new Set(this.history),e=Array.from(t);(0,u.po)("history",JSON.stringify(e))}}}},c=a,f=n(1001),l=(0,f.Z)(c,r,i,!1,null,"23e599cc",null),v=l.exports},7556:function(t,e,n){var r=n(7293);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},8457:function(t,e,n){"use strict";var r=n(7854),i=n(9974),o=n(6916),s=n(7908),u=n(3411),a=n(7659),c=n(4411),f=n(6244),l=n(6135),v=n(8554),h=n(1246),p=r.Array;t.exports=function(t){var e=s(t),n=c(this),r=arguments.length,d=r>1?arguments[1]:void 0,g=void 0!==d;g&&(d=i(d,r>2?arguments[2]:void 0));var y,x,w,k,m,b,E=h(e),F=0;if(!E||this==p&&a(E))for(y=f(e),x=n?new this(y):p(y);y>F;F++)b=g?d(e[F],F):e[F],l(x,F,b);else for(k=v(e,E),m=k.next,x=n?new this:[];!(w=o(m,k)).done;F++)b=g?u(k,d,[w.value,F],!0):w.value,l(x,F,b);return x.length=F,x}},1589:function(t,e,n){var r=n(7854),i=n(1400),o=n(6244),s=n(6135),u=r.Array,a=Math.max;t.exports=function(t,e,n){for(var r=o(t),c=i(e,r),f=i(void 0===n?r:n,r),l=u(a(f-c,0)),v=0;c<f;c++,v++)s(l,v,t[c]);return l.length=v,l}},3411:function(t,e,n){var r=n(9670),i=n(9212);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},5631:function(t,e,n){"use strict";var r=n(3070).f,i=n(30),o=n(9190),s=n(9974),u=n(5787),a=n(408),c=n(654),f=n(6340),l=n(9781),v=n(2423).fastKey,h=n(9909),p=h.set,d=h.getterFor;t.exports={getConstructor:function(t,e,n,c){var f=t((function(t,r){u(t,h),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=r&&a(r,t[c],{that:t,AS_ENTRIES:n})})),h=f.prototype,g=d(e),y=function(t,e,n){var r,i,o=g(t),s=x(t,e);return s?s.value=n:(o.last=s={index:i=v(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),l?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},x=function(t,e){var n,r=g(t),i=v(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(h,{clear:function(){var t=this,e=g(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=g(e),r=x(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),l?n.size--:e.size--}return!!r},forEach:function(t){var e,n=g(this),r=s(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!x(this,t)}}),o(h,n?{get:function(t){var e=x(this,t);return e&&e.value},set:function(t,e){return y(this,0===t?0:t,e)}}:{add:function(t){return y(this,t=0===t?0:t,t)}}),l&&r(h,"size",{get:function(){return g(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=d(e),o=d(r);c(t,e,(function(t,e){p(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},7710:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(1702),s=n(4705),u=n(8052),a=n(2423),c=n(408),f=n(5787),l=n(614),v=n(111),h=n(7293),p=n(7072),d=n(8003),g=n(9587);t.exports=function(t,e,n){var y=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),w=y?"set":"add",k=i[t],m=k&&k.prototype,b=k,E={},F=function(t){var e=o(m[t]);u(m,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!v(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return x&&!v(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!v(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},S=s(t,!l(k)||!(x||m.forEach&&!h((function(){(new k).entries().next()}))));if(S)b=n.getConstructor(e,t,y,w),a.enable();else if(s(t,!0)){var O=new b,R=O[w](x?{}:-0,1)!=O,A=h((function(){O.has(1)})),C=p((function(t){new k(t)})),D=!x&&h((function(){var t=new k,e=5;while(e--)t[w](e,e);return!t.has(-0)}));C||(b=e((function(t,e){f(t,m);var n=g(new k,t,b);return void 0!=e&&c(e,n[w],{that:n,AS_ENTRIES:y}),n})),b.prototype=m,m.constructor=b),(A||D)&&(F("delete"),F("has"),y&&F("get")),(D||R)&&F(w),x&&m.clear&&delete m.clear}return E[t]=b,r({global:!0,constructor:!0,forced:b!=k},E),d(b,t),x||n.setStrong(b,t,y),b}},6135:function(t,e,n){"use strict";var r=n(4948),i=n(3070),o=n(9114);t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},9190:function(t,e,n){var r=n(8052);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6677:function(t,e,n){var r=n(7293);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,u;return o&&r(s=e.constructor)&&s!==n&&i(u=s.prototype)&&u!==n.prototype&&o(t,u),t}},2423:function(t,e,n){var r=n(2109),i=n(1702),o=n(3501),s=n(111),u=n(2597),a=n(3070).f,c=n(8006),f=n(1156),l=n(2050),v=n(9711),h=n(6677),p=!1,d=v("meta"),g=0,y=function(t){a(t,d,{value:{objectID:"O"+g++,weakData:{}}})},x=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,d)){if(!l(t))return"F";if(!e)return"E";y(t)}return t[d].objectID},w=function(t,e){if(!u(t,d)){if(!l(t))return!0;if(!e)return!1;y(t)}return t[d].weakData},k=function(t){return h&&p&&l(t)&&!u(t,d)&&y(t),t},m=function(){b.enable=function(){},p=!0;var t=c.f,e=i([].splice),n={};n[d]=1,t(n).length&&(c.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===d){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f.f}))},b=t.exports={enable:m,fastKey:x,getWeakData:w,onFreeze:k};o[d]=!0},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},7850:function(t,e,n){var r=n(111),i=n(4326),o=n(5112),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},1156:function(t,e,n){var r=n(4326),i=n(5656),o=n(8006).f,s=n(1589),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s(u)}};t.exports.f=function(t){return u&&"Window"==r(t)?a(t):o(i(t))}},2050:function(t,e,n){var r=n(7293),i=n(111),o=n(4326),s=n(7556),u=Object.isExtensible,a=r((function(){u(1)}));t.exports=a||s?function(t){return!!i(t)&&((!s||"ArrayBuffer"!=o(t))&&(!u||u(t)))}:u},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4706:function(t,e,n){var r=n(6916),i=n(2597),o=n(7976),s=n(7066),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||i(t,"flags")||!o(u,t)?e:r(s,t)}},1038:function(t,e,n){var r=n(2109),i=n(8457),o=n(7072),s=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},8862:function(t,e,n){var r=n(2109),i=n(5005),o=n(2104),s=n(6916),u=n(1702),a=n(7293),c=n(3157),f=n(614),l=n(111),v=n(2190),h=n(206),p=n(133),d=i("JSON","stringify"),g=u(/./.exec),y=u("".charAt),x=u("".charCodeAt),w=u("".replace),k=u(1..toString),m=/[\uD800-\uDFFF]/g,b=/^[\uD800-\uDBFF]$/,E=/^[\uDC00-\uDFFF]$/,F=!p||a((function(){var t=i("Symbol")();return"[null]"!=d([t])||"{}"!=d({a:t})||"{}"!=d(Object(t))})),S=a((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")})),O=function(t,e){var n=h(arguments),r=e;if((l(e)||void 0!==t)&&!v(t))return c(e)||(e=function(t,e){if(f(r)&&(e=s(r,this,t,e)),!v(e))return e}),n[1]=e,o(d,null,n)},R=function(t,e,n){var r=y(n,e-1),i=y(n,e+1);return g(b,t)&&!g(E,i)||g(E,t)&&!g(b,r)?"\\u"+k(x(t,0),16):t};d&&r({target:"JSON",stat:!0,arity:3,forced:F||S},{stringify:function(t,e,n){var r=h(arguments),i=o(F?O:d,null,r);return S&&"string"==typeof i?w(i,m,R):i}})},4603:function(t,e,n){var r=n(9781),i=n(7854),o=n(1702),s=n(4705),u=n(9587),a=n(8880),c=n(8006).f,f=n(7976),l=n(7850),v=n(1340),h=n(4706),p=n(2999),d=n(2626),g=n(8052),y=n(7293),x=n(2597),w=n(9909).enforce,k=n(6340),m=n(5112),b=n(9441),E=n(7168),F=m("match"),S=i.RegExp,O=S.prototype,R=i.SyntaxError,A=o(O.exec),C=o("".charAt),D=o("".replace),I=o("".indexOf),_=o("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,z=/a/g,N=/a/g,T=new S(z)!==z,P=p.MISSED_STICKY,B=p.UNSUPPORTED_Y,L=r&&(!T||P||b||E||y((function(){return N[F]=!1,S(z)!=z||S(N)==N||"/a/i"!=S(z,"i")}))),M=function(t){for(var e,n=t.length,r=0,i="",o=!1;r<=n;r++)e=C(t,r),"\\"!==e?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),i+=e):i+="[\\s\\S]":i+=e+C(t,++r);return i},$=function(t){for(var e,n=t.length,r=0,i="",o=[],s={},u=!1,a=!1,c=0,f="";r<=n;r++){if(e=C(t,r),"\\"===e)e+=C(t,++r);else if("]"===e)u=!1;else if(!u)switch(!0){case"["===e:u=!0;break;case"("===e:A(j,_(t,r+1))&&(r+=2,a=!0),i+=e,c++;continue;case">"===e&&a:if(""===f||x(s,f))throw new R("Invalid capture group name");s[f]=!0,o[o.length]=[f,c],a=!1,f="";continue}a?f+=e:i+=e}return[i,o]};if(s("RegExp",L)){for(var J=function(t,e){var n,r,i,o,s,c,p=f(O,this),d=l(t),g=void 0===e,y=[],x=t;if(!p&&d&&g&&t.constructor===J)return t;if((d||f(O,t))&&(t=t.source,g&&(e=h(x))),t=void 0===t?"":v(t),e=void 0===e?"":v(e),x=t,b&&"dotAll"in z&&(r=!!e&&I(e,"s")>-1,r&&(e=D(e,/s/g,""))),n=e,P&&"sticky"in z&&(i=!!e&&I(e,"y")>-1,i&&B&&(e=D(e,/y/g,""))),E&&(o=$(t),t=o[0],y=o[1]),s=u(S(t,e),p?this:O,J),(r||i||y.length)&&(c=w(s),r&&(c.dotAll=!0,c.raw=J(M(t),n)),i&&(c.sticky=!0),y.length&&(c.groups=y)),t!==x)try{a(s,"source",""===x?"(?:)":x)}catch(k){}return s},K=c(S),q=0;K.length>q;)d(J,S,K[q++]);O.constructor=J,J.prototype=O,g(i,"RegExp",J,{constructor:!0})}k("RegExp")},8450:function(t,e,n){var r=n(7854),i=n(9781),o=n(9441),s=n(4326),u=n(7045),a=n(9909).get,c=RegExp.prototype,f=r.TypeError;i&&o&&u(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===s(this))return!!a(this).dotAll;throw f("Incompatible receiver, RegExp required")}}})},8386:function(t,e,n){var r=n(7854),i=n(9781),o=n(2999).MISSED_STICKY,s=n(4326),u=n(7045),a=n(9909).get,c=RegExp.prototype,f=r.TypeError;i&&o&&u(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===s(this))return!!a(this).sticky;throw f("Incompatible receiver, RegExp required")}}})},9714:function(t,e,n){"use strict";var r=n(6530).PROPER,i=n(8052),o=n(9670),s=n(1340),u=n(7293),a=n(4706),c="toString",f=RegExp.prototype,l=f[c],v=u((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=r&&l.name!=c;(v||h)&&i(RegExp.prototype,c,(function(){var t=o(this),e=s(t.source),n=s(a(t));return"/"+e+"/"+n}),{unsafe:!0})},7227:function(t,e,n){"use strict";var r=n(7710),i=n(5631);r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},189:function(t,e,n){n(7227)},5922:function(t,e,n){"use strict";n.d(e,{cF:function(){return i},po:function(){return r}});var r=function(t,e){localStorage.setItem(t,e)},i=function(t){return localStorage.getItem(t)}}}]);
//# sourceMappingURL=Search-legacy.ff128e50.js.map