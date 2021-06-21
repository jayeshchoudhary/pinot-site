(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4165],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3818:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),o=["components"],c={title:"From Lambda to Lambda-less Lessons learned",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"The Lambda architecture has become a popular architectural style that promises both speed and accuracy in data processing by using a hybrid approach of both batch processing and stream processing methods.",keywords:["Pinot","Uber Data","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},l=void 0,s={permalink:"/blog/2020/12/01/LinkedIn-Lamda",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-12-01-LinkedIn-Lamda.md",source:"@site/blog/2020-12-01-LinkedIn-Lamda.md",title:"From Lambda to Lambda-less Lessons learned",description:"The Lambda architecture has become a popular architectural style that promises both speed and accuracy in data processing by using a hybrid approach of both batch processing and stream processing methods.",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.205,truncated:!1,prevItem:{title:"Change Data Analysis with Debezium and Apache Pinot",permalink:"/blog/2021/01/08/DevBlog-DebeziumCDC"},nextItem:{title:"Operating Apache Pinot at Uber Scale",permalink:"/blog/2020/10/20/Uber-Operating"}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Lambda architecture has become a popular architectural style that promises both speed and accuracy in data processing by using a hybrid approach of both batch processing and stream processing methods."),(0,i.kt)("p",null,"Read More at ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/lambda-to-lambda-less-architecture"},"https://engineering.linkedin.com/blog/2020/lambda-to-lambda-less-architecture")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/03/pinotincubator2.png",alt:"From Lambda to Lambda-less Lessons learned"})))}u.isMDXComponent=!0}}]);