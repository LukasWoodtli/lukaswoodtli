(self.webpackChunkweb_page=self.webpackChunkweb_page||[]).push([[406],{8538:function(e,t,r){r(5743),e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",c="day",s="week",u="month",d="quarter",f="year",l="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},O=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},g={s:O,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+O(n,2,"0")+":"+O(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,u),i=r-o<0,a=t.clone().add(n+(i?-1:1),u);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:f,w:s,d:c,D:l,h:a,m:i,s:o,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",m={};m[b]=v;var j=function(e){return e instanceof S},P=function e(t,r,n){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(o=i),r&&(m[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var c=t.name;m[c]=t,o=c}return!n&&o&&(b=o),o||!n&&b},w=function(e,t){if(j(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},M=g;M.l=P,M.i=j,M.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function v(e){this.$L=P(e.locale,null,!0),this.parse(e)}var O=v.prototype;return O.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(h);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},O.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},O.$utils=function(){return M},O.isValid=function(){return!(this.$d.toString()===p)},O.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},O.isAfter=function(e,t){return w(e)<this.startOf(t)},O.isBefore=function(e,t){return this.endOf(t)<w(e)},O.$g=function(e,t,r){return M.u(e)?this[t]:this.set(r,e)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(e,t){var r=this,n=!!M.u(t)||t,d=M.p(e),p=function(e,t){var o=M.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(c)},h=function(e,t){return M.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},y=this.$W,v=this.$M,O=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case f:return n?p(1,0):p(31,11);case u:return n?p(1,v):p(0,v+1);case s:var b=this.$locale().weekStart||0,m=(y<b?y+7:y)-b;return p(n?O-m:O+(6-m),v);case c:case l:return h(g+"Hours",0);case a:return h(g+"Minutes",1);case i:return h(g+"Seconds",2);case o:return h(g+"Milliseconds",3);default:return this.clone()}},O.endOf=function(e){return this.startOf(e,!1)},O.$set=function(e,t){var r,s=M.p(e),d="set"+(this.$u?"UTC":""),p=(r={},r[c]=d+"Date",r[l]=d+"Date",r[u]=d+"Month",r[f]=d+"FullYear",r[a]=d+"Hours",r[i]=d+"Minutes",r[o]=d+"Seconds",r[n]=d+"Milliseconds",r)[s],h=s===c?this.$D+(t-this.$W):t;if(s===u||s===f){var y=this.clone().set(l,1);y.$d[p](h),y.init(),this.$d=y.set(l,Math.min(this.$D,y.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},O.set=function(e,t){return this.clone().$set(e,t)},O.get=function(e){return this[M.p(e)]()},O.add=function(n,d){var l,p=this;n=Number(n);var h=M.p(d),y=function(e){var t=w(p);return M.w(t.date(t.date()+Math.round(e*n)),p)};if(h===u)return this.set(u,this.$M+n);if(h===f)return this.set(f,this.$y+n);if(h===c)return y(1);if(h===s)return y(7);var v=(l={},l[i]=t,l[a]=r,l[o]=e,l)[h]||1,O=this.$d.getTime()+n*v;return M.w(O,this)},O.subtract=function(e,t){return this.add(-1*e,t)},O.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=M.z(this),i=this.$H,a=this.$m,c=this.$M,s=r.weekdays,u=r.months,d=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},f=function(e){return M.s(i%12||12,e,"0")},l=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:M.s(c+1,2,"0"),MMM:d(r.monthsShort,c,u,3),MMMM:d(u,c),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,s,2),ddd:d(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:M.s(i,2,"0"),h:f(1),hh:f(2),a:l(i,a,!0),A:l(i,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:o};return n.replace(y,(function(e,t){return t||h[e]||o.replace(":","")}))},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(n,l,p){var h,y=M.p(l),v=w(n),O=(v.utcOffset()-this.utcOffset())*t,g=this-v,b=M.m(this,v);return b=(h={},h[f]=b/12,h[u]=b,h[d]=b/3,h[s]=(g-O)/6048e5,h[c]=(g-O)/864e5,h[a]=g/r,h[i]=g/t,h[o]=g/e,h)[y]||g,p?b:M.a(b)},O.daysInMonth=function(){return this.endOf(u).$D},O.$locale=function(){return m[this.$L]},O.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=P(e,t,!0);return n&&(r.$L=n),r},O.clone=function(){return M.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},v}(),D=S.prototype;return w.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",c],["$M",u],["$y",f],["$D",l]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,S,w),e.$i=!0),w},w.locale=P,w.isDayjs=j,w.unix=function(e){return w(1e3*e)},w.en=m[b],w.Ls=m,w.p={},w}()},9790:function(e,t,r){r(5743),e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^\s\d-_:/()]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},c=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},f={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,c("seconds")],ss:[n,c("seconds")],m:[n,c("minutes")],mm:[n,c("minutes")],H:[n,c("hours")],h:[n,c("hours")],HH:[n,c("hours")],hh:[n,c("hours")],D:[n,c("day")],DD:[r,c("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,c("month")],MM:[r,c("month")],MMM:[o,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,c("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,c("year")],Z:s,ZZ:s};function l(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),c=a.length,s=0;s<c;s+=1){var u=a[s],d=f[u],l=d&&d[0],p=d&&d[1];a[s]=p?{regex:l,parser:p}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<c;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,s=o.parser,u=e.slice(n),d=i.exec(u)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var c=a[1];if("string"==typeof c){var s=!0===a[2],u=!0===a[3],d=s||u,f=a[2];u&&(f=a[2]),i=this.$locale(),!s&&f&&(i=r.Ls[f]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=l(t)(e),o=n.year,i=n.month,a=n.day,c=n.hours,s=n.minutes,u=n.seconds,d=n.milliseconds,f=n.zone,p=new Date,h=a||(o||i?1:p.getDate()),y=o||p.getFullYear(),v=0;o&&!i||(v=i>0?i-1:p.getMonth());var O=c||0,g=s||0,b=u||0,m=d||0;return f?new Date(Date.UTC(y,v,h,O,g,b,m+60*f.offset*1e3)):r?new Date(Date.UTC(y,v,h,O,g,b,m)):new Date(y,v,h,O,g,b,m)}catch(e){return new Date("")}}(t,c,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),d&&t!=this.format(c)&&(this.$d=new Date("")),i={}}else if(c instanceof Array)for(var p=c.length,h=1;h<=p;h+=1){a[1]=c[h-1];var y=r.apply(this,a);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}()},4125:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4414);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(6532);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(8922);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))},9399:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r(7154)),i=n(r(6479)),a=n(r(9713)),c=n(r(7294)),s=r(9860);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,i=void 0===o?[]:o,a=e.datePublished,u=e.dateCreated,f=e.dateModified,l=void 0===f?a:f,p=e.authorType,h=void 0===p?"Person":p,y=e.authorName,v=e.description,O=e.publisherName,g=e.publisherLogo,b=e.body,m=e.overrides,j=e.keywords,P=e.speakable,w=e.defer,M=void 0!==w&&w,S=d({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:i,datePublished:a,dateModified:l,dateCreated:u,author:{"@type":h,name:y},publisher:{"@type":"Organization",name:O,logo:{"@type":"ImageObject",url:g}},description:v,articleBody:b,speakable:P?P.map((function(e){return d({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(j)?j.join(", "):j},m);return c.default.createElement(s.JsonLd,{defer:M,json:S})};t.ArticleJsonLd=f;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,a=e.publisherLogo,s=void 0===a?"":a,u=e.publisherName,l=void 0===u?"":u,p=(0,i.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(f,(0,o.default)({defer:n,publisherName:l,publisherLogo:s},p,{overrides:d(d({},t),{},{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,a=void 0!==n&&n,s=(0,i.default)(e,["overrides","section","defer"]);return c.default.createElement(f,(0,o.default)({defer:a},s,{overrides:d(d({articleSection:r},t),{},{"@type":"NewsArticle"})}))}},203:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,u=e.datePublished,d=e.dateModified,f=void 0===d?null:d,l=e.authorName,p=e.authorType,h=void 0===p?"Person":p,y=e.keywords,v=e.description,O=e.publisherName,g=e.publisherLogo,b=e.posts,m=void 0===b?[]:b,j=e.issn,P=e.overrides,w=void 0===P?{}:P,M=e.defer,S=void 0!==M&&M,D=s({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:y,issn:j,image:c,datePublished:u,dateModified:null!=f?f:u,description:v,author:l?{"@type":h,name:l}:void 0,publisher:O?{"@type":"Organization",name:O,logo:g?{"@type":"ImageObject",url:g}:void 0}:void 0,blogPost:m.map((function(e){return s({"@type":"BlogPosting"},e)}))},w);return i.default.createElement(a.JsonLd,{defer:S,json:D})}},5358:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(9860);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,i=e.workExample,s=void 0===i?[]:i,d=e.id,f=e.sameAs,l=e.overrides,p=void 0===l?{}:l,h=e.defer,y=void 0!==h&&h,v=u({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":d,sameAs:f,author:u({"@type":"Person"},r),workExample:s.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,i=e.author,a=(0,o.default)(e,["bookFormat","potentialAction","author"]);return u(u({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},a),{},{person:u({"@type":"Person"},i),potentialAction:u({"@type":"ReadAction"},n)})}))},p);return a.default.createElement(c.JsonLd,{defer:y,json:v})}},898:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,s=void 0===n?{}:n,u=e.defer,d=void 0!==u&&u,f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},s);return i.default.createElement(a.JsonLd,{defer:d,json:f})}},3995:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r(7294)),i=r(2055),a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,s=void 0!==c&&c,u='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(a(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(a(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(i.Helmet,{defer:s},o.default.createElement("script",{type:"application/ld+json"},u))}},74:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,s=e.providerName,u=e.providerUrl,d=e.overrides,f=void 0===d?{}:d,l=e.defer,p=void 0!==l&&l,h=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:s?{"@type":"Organization",name:s,sameAs:u}:void 0},f);return i.default.createElement(a.JsonLd,{defer:p,json:h})}},4953:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,s=void 0===n?{}:n,u=e.defer,d=void 0!==u&&u,f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},s);return i.default.createElement(a.JsonLd,{defer:d,json:f})}},6532:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9399);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(203);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(5358);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=r(898);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var c=r(3995);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var s=r(74);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var u=r(4953);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var d=r(9860);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var f=r(6833);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var l=r(5975);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var p=r(18);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var h=r(1650);Object.keys(h).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return h[e]}})}));var y=r(4538);Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})}));var v=r(9756);Object.keys(v).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return v[e]}})}))},9860:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r(7294)),i=r(2055);t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(i.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},6833:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r(9713)),i=n(r(6479)),a=n(r(7294)),c=r(9860);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},f=function(e){var t;return"http://schema.org/".concat(null!==(t=d[e])&&void 0!==t?t:e)},l=function(e){return e?Array.isArray(e)?e.map(f):f(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,i.default)(e,["dayOfWeek"]);return u({"@type":"OpeningHoursSpecification",dayOfWeek:l(t)},r)})):u(u({"@type":"OpeningHoursSpecification"},e),{},{dayOfWeek:l(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,i=e.url,s=e.telephone,d=e.address,f=e.geo,l=e.images,h=e.openingHours,y=e.rating,v=e.priceRange,O=e.overrides,g=void 0===O?{}:O,b=e.defer,m=void 0!==b&&b,j=u({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:i,telephone:s,priceRange:v,image:l,geo:u({"@type":"GeoCoordinates"},f),address:u({"@type":"PostalAddress"},d),aggregateRating:y?u({"@type":"AggregateRating"},y):void 0,openingHoursSpecification:p(h)},g);return a.default.createElement(c.JsonLd,{defer:m,json:j})}},5975:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,s=void 0===n?{}:n,u=e.defer,d=void 0!==u&&u,f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},s);return i.default.createElement(a.JsonLd,{defer:d,json:f})}},18:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(9860);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},f={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,i=e.name,s=e.productName,l=e.images,p=void 0===l?[]:l,h=e.description,y=e.sku,v=e.gtin12,O=e.gtin,g=e.gtin8,b=e.gtin13,m=e.gtin14,j=e.mpn,P=e.brand,w=e.reviews,M=void 0===w?[]:w,S=e.aggregateRating,D=e.offers,_=e.offersType,$=void 0===_?"Offer":_,L=e.overrides,E=void 0===L?{}:L,k=e.defer,A=void 0!==k&&k,Y=u({"@context":"https://schema.org","@type":"Product",name:null!=i?i:s,image:p,sku:y,gtin:O,gtin8:g,gtin12:v,gtin13:b,gtin14:m,mpn:j,brand:P?{"@type":"Brand",name:P}:void 0,description:h,review:M.map((function(e){var t=e.reviewRating;return u(u({"@type":"Review"},(0,o.default)(e,["reviewRating"])),{},{reviewRating:u({"@type":"Rating"},t)})})),aggregateRating:S?u({"@type":"AggregateRating"},S):void 0,offers:D?u(u({"@type":$},D),{},{availability:(n=D.availability,n?d[n]:void 0),itemCondition:(r=D.itemCondition,r?f[r]:void 0),seller:D.seller?{"@type":null!==(t=D.seller.type)&&void 0!==t?t:"Organization",name:D.seller.name}:void 0}):void 0},E);return a.default.createElement(c.JsonLd,{defer:A,json:Y})}},1650:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SitelinksSearchBoxJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SitelinksSearchBoxJsonLd=function(e){var t=e.url,r=e.searchHandlerQueryStringUrl,n=e.overrides,s=void 0===n?{}:n,u=e.defer,d=void 0!==u&&u,f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"WebSite",url:t,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"".concat(r,"{search_term_string}")},"query-input":"required name=search_term_string"}},s);return i.default.createElement(a.JsonLd,{defer:d,json:f})}},4538:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r(7294)),i=r(2055);t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,a=e.sameAs,c=void 0===a?[]:a,s=e.defer,u=void 0!==s&&s,d='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(i.Helmet,{defer:u},o.default.createElement("script",{type:"application/ld+json"},d))}},9756:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(9860);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,s=void 0===n?{}:n,u=e.defer,d=void 0!==u&&u;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var f=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},s);return i.default.createElement(a.JsonLd,{defer:d,json:f})}},1326:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r(7294)),i=r(1792);t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,a=e.description,c=e.facebook,s=e.htmlAttributes,u=e.language,d=e.languageAlternates,f=e.mobileAlternate,l=e.nofollow,p=e.noindex,h=e.openGraph,y=e.title,v=e.titleTemplate,O=e.twitter;return o.default.createElement(i.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:a,facebook:c,htmlAttributes:s,language:u,languageAlternates:d,mobileAlternate:f,nofollow:l,noindex:p,openGraph:h,title:y,titleTemplate:v,twitter:O})}},4414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1792);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(1326);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},8922:function(){},7520:function(e,t,r){"use strict";var n=r(9308),o=r(7294),i=r(8538),a=r(9790);i.extend(a),t.Z=function(e){return o.createElement(n.Z,null,i(1e3*e.dateTimeStamp).format("D. MMMM YYYY"))}},3177:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(5371),i=r(4125),a=r(1041),c=r(9308),s=r(7520);t.default=function(e){var t=e.pageContext.allPosts.sort((function(e,t){return e.dates.created<t.dates.created}));return n.createElement(a.Z,null,n.createElement(i.GatsbySeo,{title:"All blog posts",description:"List of all my personal engineering blog posts"}),n.createElement("ol",{style:{listStyle:"none"}},t.map((function(e){e.excerpt.includes("TOC")&&console.error("Contains TOC string");var t=e.frontmatter.title;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0},n.createElement("header",null,n.createElement(c.Z,{variant:"h2"},n.createElement(o.rU,{to:e.fields.slug},n.createElement("span",{itemProp:"headline"},t))),n.createElement(s.Z,{dateTimeStamp:e.dates.created})),n.createElement("section",null,n.createElement(c.Z,{dangerouslySetInnerHTML:{__html:e.excerpt.replace("[TOC]","")},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-templates-blog-index-tsx-3539e3e05dfe41567008.js.map