/*! For license information please see e8193bc1.fed8ab19.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2362],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(9756),i=n(7294),o=n(3727),a=n(9962),u=n(2735),c=n(6136),s=(0,i.createContext)({collectLink:function(){}}),l=n(9524),f=n(3905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,w=(0,r.Z)(e,d),j=(0,a.Z)().siteConfig.trailingSlash,P=(0,l.C)().withBaseUrl,k=(0,i.useContext)(s),E=m||v,_=(0,u.Z)(E),C=null==E?void 0:E.replace("pathname://",""),N=void 0!==C?(n=C,O&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;N&&_&&(N=(0,f.applyTrailingSlash)(N,j));var x,Z=(0,i.useRef)(!1),A=p?o.OL:o.rU,T=c.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!T&&_&&null!=N&&window.docusaurus.prefetch(N),function(){T&&x&&x.disconnect()}}),[N,T,_]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,D=!N||!_||S;return N&&_&&!S&&!y&&k.collectLink(N),D?i.createElement("a",Object.assign({href:N},E&&!_&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(A,Object.assign({},w,{onMouseEnter:function(){Z.current||null==N||(window.docusaurus.preload(N),Z.current=!0)},innerRef:function(e){var t,n;T&&e&&_&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(x=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),n())}))}))).observe(t))},to:N||""},p&&{isActive:h,activeClassName:b}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(9962),i=n(2735);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],i="/"===r?"/":t?(n=r).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);return e.replace(r,i)}},3905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9342:function(e,t,n){"use strict";var r=n(7294),i=n(2511),o=n(4184),a=n.n(o);t.Z=function(e){var t=e.children,n=e.className,o=e.badge,u=e.icon,c=e.size,s=e.target,l=e.to,f=a()("jump-to","jump-to--"+c,n),d=r.createElement("div",{className:"jump-to--inner"},r.createElement("div",{className:"jump-to--inner-2"},r.createElement("div",{className:"jump-to--main"},o?r.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),r.createElement("div",{className:"jump-to--right"},r.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return s?r.createElement("a",{href:l,target:s,className:f},d):r.createElement(i.Z,{to:l,className:f},d)}},1450:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(4137)),a=n(9342),u=["components"],c={title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0,draft:!0},s=void 0,l={unversionedId:"administration",id:"administration",isDocsHomePage:!1,title:"Adminstration",description:"Adminstration",source:"@site/docs/administration.md",sourceDirName:".",slug:"/administration",permalink:"/docs/administration",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration.md",version:"current",frontMatter:{title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0,draft:!0}},f=[],d={toc:f};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provide basic foundation of Pinot."),(0,o.kt)(a.Z,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"Running Pinot locally"),(0,o.kt)(a.Z,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),(0,o.kt)(a.Z,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}p.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);