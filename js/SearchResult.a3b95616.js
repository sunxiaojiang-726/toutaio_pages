(self["webpackChunkhmtt"]=self["webpackChunkhmtt"]||[]).push([[181],{6713:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"title-box"},[n("span",[t._v(t._s(t.artObj.title))]),1===t.artObj.cover.type?n("van-image",{staticClass:"thumb",attrs:{src:t.artObj.cover.images[0],"lazy-load":""},scopedSlots:t._u([{key:"error",fn:function(){return[t._v("图片走丢了")]},proxy:!0}],null,!1,4193490152)}):t._e()],1),t.artObj.cover.type>1?n("div",{staticClass:"thumb-box"},t._l(t.artObj.cover.images,(function(e,r){return n("van-image",{key:r,staticClass:"thumb",attrs:{src:e,"lazy-load":""},scopedSlots:t._u([{key:"error",fn:function(){return[t._v("图片走丢了")]},proxy:!0}],null,!0)})})),1):t._e()]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"label-box"},[n("div",[n("span",[t._v(t._s(t.artObj.aut_name))]),n("span",[t._v(t._s(t.artObj.comm_count)+"评论")]),n("span",[t._v(t._s(t.formateTime(t.artObj.pubdate)))])]),t.isShow?n("van-icon",{attrs:{name:"cross"},on:{click:function(e){e.stopPropagation(),t.show=!0}}}):t._e()],1)]},proxy:!0}])}),n("van-action-sheet",{attrs:{actions:t.actions,"get-container":"body","cancel-text":t.bottomText},on:{select:t.onSelect,cancel:t.cancelFn,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[],s=n(3842);const a=[{name:"不感兴趣"},{name:"反馈垃圾内容"}],o=[{value:0,name:"其它问题"},{value:1,name:"标题夸张"},{value:2,name:"低俗色情"},{value:3,name:"错别字多"},{value:4,name:"旧闻重复"},{value:6,name:"内容不实"},{value:8,name:"侵权"},{value:5,name:"广告软文"},{value:7,name:"涉嫌违法犯罪"}];var u={props:{artObj:Object,isShow:{type:Boolean,default:!0}},data(){return{show:!1,actions:a,bottomText:"取消"}},methods:{formateTime:s.S,onSelect(t,e){"反馈垃圾内容"===t.name?(this.actions=o,this.bottomText="返回"):"不感兴趣"===t.name?(this.$emit("disLikeEV",this.artObj.art_id),this.show=!1):(this.$emit("reportEV",this.artObj.art_id,t.value),this.show=!1)},cancelFn(){"返回"===this.bottomText&&(this.show=!0,this.actions=a,this.bottomText="取消")},closeFn(){this.actions=a,this.bottomText="取消"}}},c=u,l=n(1001),h=(0,l.Z)(c,r,i,!1,null,"faf93226",null),f=h.exports},1805:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search-result-container"},[n("van-nav-bar",{attrs:{title:"搜索结果","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}})],1),n("div",[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多搜索结果了","immediate-check":!1,offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleLsit,(function(e){return n("ArticleItem",{key:e.art_id,attrs:{artObj:e,isShow:!1},nativeOn:{click:function(n){return t.itemClickFn(e.art_id)}}})})),1)],1)])},i=[],s=n(2502),a=n(6713),o={name:"SearchResult",data(){return{page:1,articleLsit:[],loading:!1,finished:!1}},async created(){const t=await(0,s.G_)({page:this.page,q:this.$route.params.kw});console.log(t,"搜索结果"),this.articleLsit=t.data.data.results},components:{ArticleItem:a.Z},methods:{async onLoad(){this.page++;const t=await(0,s.G_)({page:this.page,q:this.$route.params.kw});0===t.data.data.results.length&&(this.finished=!0),console.log(t,"搜索结果"),this.articleLsit=[...this.articleLsit,...t.data.data.results],this.loading=!1},itemClickFn(t){this.$router.push({path:`/detail?art_id=${t}`})}}},u=o,c=n(1001),l=(0,c.Z)(u,r,i,!1,null,"6fbe49e4",null),h=l.exports},7484:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",h="year",f="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:u,d:o,D:f,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=_;var g=function(t){return t instanceof b},w=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,i=o}return!r&&i&&(y=i),i||!r&&y},S=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},Y=p;Y.l=w,Y.i=g,Y.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function _(t){this.$L=w(t.locale,null,!0),this.parse(t)}var $=_.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(Y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return Y},$.isValid=function(){return!(this.$d.toString()===d)},$.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return S(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<S(t)},$.$g=function(t,e,n){return Y.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!Y.u(e)||e,l=Y.p(t),d=function(t,e){var i=Y.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return Y.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,_=this.$M,$=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case h:return r?d(1,0):d(31,11);case c:return r?d(1,_):d(0,_+1);case u:var y=this.$locale().weekStart||0,M=(v<y?v+7:v)-y;return d(r?$-M:$+(6-M),_);case o:case f:return m(p+"Hours",0);case a:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=Y.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[o]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===h){var v=this.clone().set(f,1);v.$d[d](m),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[Y.p(t)]()},$.add=function(r,l){var f,d=this;r=Number(r);var m=Y.p(l),v=function(t){var e=S(d);return Y.w(e.date(e.date()+Math.round(t*r)),d)};if(m===c)return this.set(c,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return v(1);if(m===u)return v(7);var _=(f={},f[s]=e,f[a]=n,f[i]=t,f)[m]||1,$=this.$d.getTime()+r*_;return Y.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=Y.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return Y.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:Y.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:Y.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:Y.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:Y.s(a,2,"0"),s:String(this.$s),ss:Y.s(this.$s,2,"0"),SSS:Y.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||m[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,f,d){var m,v=Y.p(f),_=S(r),$=(_.utcOffset()-this.utcOffset())*e,p=this-_,y=Y.m(this,_);return y=(m={},m[h]=y/12,m[c]=y,m[l]=y/3,m[u]=(p-$)/6048e5,m[o]=(p-$)/864e5,m[a]=p/n,m[s]=p/e,m[i]=p/t,m)[v]||p,d?y:Y.a(y)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return Y.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},_}(),D=b.prototype;return S.prototype=D,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",h],["$D",f]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,b,S),t.$i=!0),S},S.locale=w,S.isDayjs=g,S.unix=function(t){return S(1e3*t)},S.en=M[y],S.Ls=M,S.p={},S}))},2009:function(t,e,n){!function(e,r){t.exports=r(n(7484))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),r={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(r,null,!0),r}))},4110:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,o){for(var u,c,l,h=s.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=f.length,m=0;m<d;m+=1){var v=f[m];v.d&&(u=a?n(e).diff(s,v.d,!0):s.diff(e,v.d,!0));var _=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,_<=v.r||!v.r){_<=1&&m>0&&(v=f[m-1]);var $=h[v.l];o&&(_=o(""+_)),c="string"==typeof $?$.replace("%d",_):$(_,r,v.l,l);break}}if(r)return c;var p=l?h.future:h.past;return"function"==typeof p?p(c):p.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}))},3842:function(t,e,n){"use strict";n.d(e,{S:function(){return o},p:function(){return u}});var r=n(7484),i=n.n(r),s=n(4110),a=n.n(s);n(2009);const o=t=>{i().extend(a()),i().locale("zh");const e=i()(),n=i()(t);return e.to(n)},u=t=>i()(t).format("YYYY-MM-DD")}}]);
//# sourceMappingURL=SearchResult.a3b95616.js.map