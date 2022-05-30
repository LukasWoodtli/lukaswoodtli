"use strict";(self.webpackChunkweb_page=self.webpackChunkweb_page||[]).push([[218],{5813:function(e,t,o){o.d(t,{e:function(){return s}});var n=o(7294),r=o(3366),a=o(2055),p=["defer","metaTags","linkTags"];function i(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return(o=o.call(e)).next.bind(o);if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var h={noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},u=Object.assign({},h),d=function(e){var t,o,l=e.defer,h=void 0!==l&&l,d=e.metaTags,s=void 0===d?[]:d,c=e.linkTags,g=void 0===c?[]:c,f=(0,r.Z)(e,p),m=[],G=[],v=(null!==(t=f.noindex)&&void 0!==t?t:u.noindex)||f.dangerouslySetAllPagesToNoIndex,y=(null!==(o=f.nofollow)&&void 0!==o?o:u.nofollow)||f.dangerouslySetAllPagesToNoFollow,b=["robots","googlebot"];if(v||y){f.dangerouslySetAllPagesToNoIndex&&(u.noindex=!0),f.dangerouslySetAllPagesToNoFollow&&(u.nofollow=!0);for(var w,k=i(b);!(w=k()).done;){var O=w.value;m.push({name:O,content:(v?"noindex":"index")+","+(y?"nofollow":"follow")})}}else for(var T,A=i(b);!(T=A()).done;){var E=T.value;m.push({name:E,content:"index,follow"})}if(f.description&&m.push({name:"description",content:f.description}),f.mobileAlternate&&G.push({rel:"alternate",media:f.mobileAlternate.media,href:f.mobileAlternate.href}),f.languageAlternates&&f.languageAlternates.length>0&&f.languageAlternates.forEach((function(e){G.push({rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href})})),f.twitter&&(f.twitter.cardType&&m.push({name:"twitter:card",content:f.twitter.cardType}),f.twitter.site&&m.push({name:"twitter:site",content:f.twitter.site}),f.twitter.handle&&m.push({name:"twitter:creator",content:f.twitter.handle})),f.facebook&&f.facebook.appId&&m.push({property:"fb:app_id",content:f.facebook.appId}),f.openGraph){var I,S,x,_,H,V,W;if(f.openGraph.url||f.canonical)m.push({property:"og:url",content:null!==(x=f.openGraph.url)&&void 0!==x?x:f.canonical});if(f.openGraph.type){var N=f.openGraph.type.toLowerCase();if(m.push({property:"og:type",content:N}),"profile"===N&&f.openGraph.profile)f.openGraph.profile.firstName&&m.push({property:"profile:first_name",content:f.openGraph.profile.firstName}),f.openGraph.profile.lastName&&m.push({property:"profile:last_name",content:f.openGraph.profile.lastName}),f.openGraph.profile.username&&m.push({property:"profile:username",content:f.openGraph.profile.username}),f.openGraph.profile.gender&&m.push({property:"profile:gender",content:f.openGraph.profile.gender});else if("book"===N&&f.openGraph.book){var j,F;null!==(j=f.openGraph.book.authors)&&void 0!==j&&j.length&&f.openGraph.book.authors.forEach((function(e){m.push({property:"book:author",content:e})})),f.openGraph.book.isbn&&m.push({property:"book:isbn",content:f.openGraph.book.isbn}),f.openGraph.book.releaseDate&&m.push({property:"book:release_date",content:f.openGraph.book.releaseDate}),null!==(F=f.openGraph.book.tags)&&void 0!==F&&F.length&&f.openGraph.book.tags.forEach((function(e){m.push({property:"book:tag",content:e})}))}else if("article"===N&&f.openGraph.article){var C,D;f.openGraph.article.publishedTime&&m.push({property:"article:published_time",content:f.openGraph.article.publishedTime}),f.openGraph.article.modifiedTime&&m.push({property:"article:modified_time",content:f.openGraph.article.modifiedTime}),f.openGraph.article.expirationTime&&m.push({property:"article:expiration_time",content:f.openGraph.article.expirationTime}),null!==(C=f.openGraph.article.authors)&&void 0!==C&&C.length&&f.openGraph.article.authors.forEach((function(e){m.push({property:"article:author",content:e})})),f.openGraph.article.section&&m.push({property:"article:section",content:f.openGraph.article.section}),null!==(D=f.openGraph.article.tags)&&void 0!==D&&D.length&&f.openGraph.article.tags.forEach((function(e){m.push({property:"article:tag",content:e})}))}else if(("video.movie"===N||"video.episode"===N||"video.tv_show"===N||"video.other"===N)&&f.openGraph.video){var L,P,Z,M;null!==(L=f.openGraph.video.actors)&&void 0!==L&&L.length&&f.openGraph.video.actors.forEach((function(e){e.profile&&m.push({property:"video:actor",content:e.profile}),e.role&&m.push({property:"video:actor:role",content:e.role})})),null!==(P=f.openGraph.video.directors)&&void 0!==P&&P.length&&f.openGraph.video.directors.forEach((function(e){m.push({property:"video:director",content:e})})),null!==(Z=f.openGraph.video.writers)&&void 0!==Z&&Z.length&&f.openGraph.video.writers.forEach((function(e){m.push({property:"video:writer",content:e})})),f.openGraph.video.duration&&m.push({property:"video:duration",content:f.openGraph.video.duration.toString()}),f.openGraph.video.releaseDate&&m.push({property:"video:release_date",content:f.openGraph.video.releaseDate}),null!==(M=f.openGraph.video.tags)&&void 0!==M&&M.length&&f.openGraph.video.tags.forEach((function(e){m.push({property:"video:tag",content:e})})),f.openGraph.video.series&&m.push({property:"video:series",content:f.openGraph.video.series})}}if(f.openGraph.title||f.title)m.push({property:"og:title",content:null!==(_=f.openGraph.title)&&void 0!==_?_:(null!==(H=f.titleTemplate)&&void 0!==H?H:"").replace("%s",null!==(V=f.title)&&void 0!==V?V:"")});if(f.openGraph.description||f.description)m.push({property:"og:description",content:null!==(W=f.openGraph.description)&&void 0!==W?W:f.description});f.defaultOpenGraphImageWidth&&(u.defaultOpenGraphImageWidth=f.defaultOpenGraphImageWidth),f.defaultOpenGraphImageHeight&&(u.defaultOpenGraphImageHeight=f.defaultOpenGraphImageHeight),null!==(I=f.openGraph.images)&&void 0!==I&&I.length&&f.openGraph.images.forEach((function(e){m.push({property:"og:image",content:e.url}),e.alt&&m.push({property:"og:image:alt",content:e.alt}),e.width?m.push({property:"og:image:width",content:e.width.toString()}):u.defaultOpenGraphImageWidth&&m.push({property:"og:image:width",content:u.defaultOpenGraphImageWidth.toString()}),e.height?m.push({property:"og:image:height",content:e.height.toString()}):u.defaultOpenGraphImageHeight&&m.push({property:"og:image:height",content:u.defaultOpenGraphImageHeight.toString()})})),f.defaultOpenGraphVideoWidth&&(u.defaultOpenGraphVideoWidth=f.defaultOpenGraphVideoWidth),f.defaultOpenGraphVideoHeight&&(u.defaultOpenGraphVideoHeight=f.defaultOpenGraphVideoHeight),null!==(S=f.openGraph.videos)&&void 0!==S&&S.length&&f.openGraph.videos.forEach((function(e){m.push({property:"og:video",content:e.url}),e.alt&&m.push({property:"og:video:alt",content:e.alt}),e.width?m.push({property:"og:video:width",content:e.width.toString()}):u.defaultOpenGraphVideoWidth&&m.push({property:"og:video:width",content:u.defaultOpenGraphVideoWidth.toString()}),e.height?m.push({property:"og:video:height",content:e.height.toString()}):u.defaultOpenGraphVideoHeight&&m.push({property:"og:video:height",content:u.defaultOpenGraphVideoHeight.toString()})})),f.openGraph.locale&&m.push({property:"og:locale",content:f.openGraph.locale}),f.openGraph.site_name&&m.push({property:"og:site_name",content:f.openGraph.site_name})}f.canonical&&G.push({rel:"canonical",href:f.canonical,key:"canonical"}),s.forEach((function(e){m.push(e)})),g.forEach((function(e){G.push(e)}));var U=f.language?Object.assign({lang:f.language},f.htmlAttributes):Object.assign({},f.htmlAttributes),Y={meta:m,link:G,defer:h,htmlAttributes:U};return f.title&&(Y.title=f.title),f.titleTemplate&&(Y.titleTemplate=f.titleTemplate),n.createElement(n.Fragment,null,n.createElement(a.Helmet,Y))},s=function(e){var t=e.metaTags,o=e.linkTags,r=e.canonical,a=e.description,p=e.facebook,i=e.htmlAttributes,l=e.language,h=e.languageAlternates,u=e.mobileAlternate,s=e.nofollow,c=e.noindex,g=e.openGraph,f=e.title,m=e.titleTemplate,G=e.twitter;return n.createElement(d,{metaTags:t,linkTags:o,canonical:r,description:a,facebook:p,htmlAttributes:i,language:l,languageAlternates:h,mobileAlternate:u,nofollow:s,noindex:c,openGraph:g,title:f,titleTemplate:m,twitter:G})}},7735:function(e,t,o){o.r(t);var n=o(7294),r=o(1041),a=o(5813);t.default=function(){return n.createElement(r.Z,null,n.createElement(a.e,{title:"404: Not Found",description:"This page doesn't exist"}),n.createElement("h1",null,"404: Not Found"),n.createElement("p",null,"You just hit a route that doesn't exist..."))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-8aed2f7c06afa4dee4c2.js.map