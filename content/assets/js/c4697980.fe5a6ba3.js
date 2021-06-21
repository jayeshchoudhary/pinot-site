(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7710],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||g[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6073:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(4137)),i=["components"],l={title:"Monitoring Apache Pinot with JMX, Prometheus and Grafana",author:"PinotDev",author_title:"Pinot Editorial Team",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg",description:"Blog gives an overview of our use of Apache Pinot to solve some of biggest challenges around Data Analytics in Large Retail Chain",keywords:["Pinot","Monitoring","User-Facing Analytics","Real-time data platform"],tags:["Pinot","Monitoring","JMX","Prometheus","Grafana","DevBlog","ThirdEye","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,p={permalink:"/blog/2020/08/08/DevBlog-PinotMonitoring",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-08-08-DevBlog-PinotMonitoring.md",source:"@site/blog/2020-08-08-DevBlog-PinotMonitoring.md",title:"Monitoring Apache Pinot with JMX, Prometheus and Grafana",description:"Blog gives an overview of our use of Apache Pinot to solve some of biggest challenges around Data Analytics in Large Retail Chain",date:"2020-08-08T00:00:00.000Z",formattedDate:"August 8, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Monitoring",permalink:"/blog/tags/monitoring"},{label:"JMX",permalink:"/blog/tags/jmx"},{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Grafana",permalink:"/blog/tags/grafana"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.275,truncated:!1,prevItem:{title:"Leverage Plugins to Ingest Parquet Files from S3 in Pinot",permalink:"/blog/2020/08/08/DevBlog-IngestPlugins"},nextItem:{title:"Achieving 99th percentile latency SLA using Apache Pinot",permalink:"/blog/2020/08/08/DevBlog-SLAApps"}},s=[],g={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I may be kicking open doors here, but a simple question has always helped me start from somewhere. When it comes to investigating degraded user experience caused by latency, can I observe high resource usage on all or some nodes of the system?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/monitoring-apache-pinot-99034050c1a5"},"Read more at https://medium.com/apache-pinot-developer-blog/monitoring-apache-pinot-99034050c1a5")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*5kWginewoWzzQHQoZdPAGQ.png",alt:"Monitoring Apache Pinot with JMX, Prometheus and Grafana"})))}m.isMDXComponent=!0}}]);