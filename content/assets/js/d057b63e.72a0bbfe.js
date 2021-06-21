(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1999],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9662:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(4137)),o=["components"],l={title:"Using Apache Pinot and Kafka to Analyze GitHub Events",author:"Kenny Bastani",author_title:"Kenny Bastani",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg",description:"Show you how Pinot and Kafka can be used together to ingest, query, and visualize event streams sourced from the public GitHub API.",keywords:["Pinot","LinkedIn","User Analytics","User-Facing Analytics","Real-time data platform"],tags:["Pinot","DevBlog","ThirdEye","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,s={permalink:"/blog/2020/04/10/DevBlog-AnalyzeGitEvents",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-04-10-DevBlog-AnalyzeGitEvents.md",source:"@site/blog/2020-04-10-DevBlog-AnalyzeGitEvents.md",title:"Using Apache Pinot and Kafka to Analyze GitHub Events",description:"Show you how Pinot and Kafka can be used together to ingest, query, and visualize event streams sourced from the public GitHub API.",date:"2020-04-10T00:00:00.000Z",formattedDate:"April 10, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.32,truncated:!1,prevItem:{title:"Monitoring business performance data with ThirdEye smart alerts",permalink:"/blog/2020/06/25/LinkedIn-SmartAlerts"},nextItem:{title:"Analyzing anomalies with ThirdEye",permalink:"/blog/2020/02/20/LinkedIn-Thirdeye"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this blog post, we\u2019ll show you how Pinot and Kafka can be used together to ingest, query, and visualize event streams sourced from the public GitHub API. For the step-by-step instructions, please visit our documentation, which will guide you through the specifics of running this example in your development environment."),(0,i.kt)("p",null,"Read More at ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/using-apache-pinot-and-kafka-to-analyze-github-events-93cdcb57d5f7"},"https://medium.com/apache-pinot-developer-blog/using-apache-pinot-and-kafka-to-analyze-github-events-93cdcb57d5f7")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/4728/1*eR64jBH1ZvC3uNfPP56p5g.png",alt:"Using Apache Pinot and Kafka to Analyze GitHub Events"})))}m.isMDXComponent=!0}}]);