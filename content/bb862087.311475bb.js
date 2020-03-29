/*! For license information please see bb862087.311475bb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),o=(n(0),n(205)),c=n(209),i={title:"Misc Content",description:"Misc content",sidebar_label:"hidden",hide_pagination:!0},u={id:"misc",title:"Misc Content",description:"Misc content",source:"@site/docs/misc.md",permalink:"/docs/misc",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/misc.md",sidebar_label:"hidden"},s=[],p={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provide basic foundation of Pinot."),Object(o.b)(c.a,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),Object(o.b)(c.a,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),Object(o.b)(c.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}f.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},f=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},206:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},207:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),c=n(37),i=n(208),u=n(11),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,p=n||u,f=Object(i.a)(p),l=Object(a.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&f&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,f]),p&&f?o.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){l.current||(window.docusaurus.preload(p),l.current=!0)},innerRef:function(e){var n,r;m&&e&&f&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):o.a.createElement("a",Object(r.a)({},e,{href:p}))}},208:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},209:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(207),c=n(206),i=n.n(c);n(128);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.icon,u=e.size,s=e.target,p=e.to,f=i()("jump-to","jump-to--"+u,n),l=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:p,target:s,className:f},l):a.a.createElement(o.a,{to:p,className:f},l)}}}]);