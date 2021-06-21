(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3298],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5309:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(4137)),a=["components"],l={title:"A Brief History of Scaling LinkedIn",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"LinkedIn started in 2003 with the goal of connecting to your network for better job opportunities. It had only 2,700 members the first week. Fast forward many years, and LinkedIn\u2019s product portfolio, member base, and server load has grown tremendously.",keywords:["Pinot","LinkedIn","Data Scaling","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,s={permalink:"/blog/2015/05/16/LinkedIn-Scaling",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2015-05-16-LinkedIn-Scaling.md",source:"@site/blog/2015-05-16-LinkedIn-Scaling.md",title:"A Brief History of Scaling LinkedIn",description:"LinkedIn started in 2003 with the goal of connecting to your network for better job opportunities. It had only 2,700 members the first week. Fast forward many years, and LinkedIn\u2019s product portfolio, member base, and server load has grown tremendously.",date:"2015-05-16T00:00:00.000Z",formattedDate:"May 16, 2015",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.545,truncated:!1,prevItem:{title:"Open Sourcing Pinot - Scaling the Wall of Real-Time Analytics",permalink:"/blog/2015/06/10/Open-Sourcing-Pinot"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"LinkedIn started in 2003 with the goal of connecting to your network for better job opportunities. It had only 2,700 members the first week. Fast forward many years, and LinkedIn\u2019s product portfolio, member base, and server load has grown tremendously."),(0,i.kt)("p",null,"Today, LinkedIn operates globally with more than 350 million members. We serve tens of thousands of web pages every second of every day. We've hit our mobile moment where mobile accounts for more than 50 percent of all global traffic. All those requests are fetching data from our backend systems, which in turn handle millions of queries per second."),(0,i.kt)("p",null,"Read More at ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/architecture/brief-history-scaling-linkedin"},"https://engineering.linkedin.com/architecture/brief-history-scaling-linkedin")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/en-us/blog/migrated/data_centers_pops_0.png",alt:"A Brief History of Scaling LinkedIn"})))}d.isMDXComponent=!0}}]);