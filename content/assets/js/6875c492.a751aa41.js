(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610,0],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,g=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2903:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(7294),n=r(6010),l=r(4137),o=r(7130),c=r(2511),i=r(4395),s=r(5386),m=r(4175),u=r(7680),d="blogPostTitle_GeHD",p="blogPostData_291c",g="blogPostDetailsFull_3kfx";var f=function(e){var t,r,f,h=(r=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,v=e.frontMatter,b=e.metadata,_=e.truncated,y=e.isBlogPostPage,Z=void 0!==y&&y,N=b.date,k=b.formattedDate,w=b.permalink,T=b.tags,O=b.readingTime,P=b.title,x=b.editUrl,j=v.author,L=v.image,M=v.keywords,I=v.author_url||v.authorURL,U=v.author_title||v.authorTitle,C=v.author_image_url||v.authorImageURL;return a.createElement(a.Fragment,null,a.createElement(m.Z,{keywords:M,image:L}),a.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(f=Z?"h1":"h2",a.createElement("header",null,a.createElement(f,{className:d},Z?P:a.createElement(c.Z,{to:w},P)),a.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},a.createElement("time",{dateTime:N},k),O&&a.createElement(a.Fragment,null," \xb7 ",h(O))),a.createElement("div",{className:"avatar margin-vert--md"},C&&a.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:I},a.createElement("img",{src:C,alt:j})),a.createElement("div",{className:"avatar__intro"},j&&a.createElement(a.Fragment,null,a.createElement("div",{className:"avatar__name"},a.createElement(c.Z,{href:I},j)),a.createElement("small",{className:"avatar__subtitle"},U)))))),a.createElement("div",{className:"markdown"},a.createElement(l.Zo,{components:s.Z},E)),(T.length>0||_)&&a.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[g]=Z,t))},T.length>0&&a.createElement("div",{className:"col"},a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),T.map((function(e){var t=e.label,r=e.permalink;return a.createElement(c.Z,{key:r,className:"margin-horiz--sm",to:r},t)}))),Z&&x&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:x})),!Z&&_&&a.createElement("div",{className:"col text--right"},a.createElement(c.Z,{to:b.permalink,"aria-label":"Read more about "+P},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4112:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(7294),n=r(6010),l=r(2511),o="sidebar_2ahu",c="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",s="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=r(7130);function p(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),a.createElement("ul",{className:i},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:s},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},3866:function(e,t,r){"use strict";r.r(t);var a=r(7294),n=r(1083),l=r(2903),o=r(2511),c=r(4112),i=r(7130),s=r(4395);t.default=function(e){var t,r=e.metadata,m=e.items,u=e.sidebar,d=r.allTagsPath,p=r.name,g=r.count,f=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(g),tagName:p});return a.createElement(n.Z,{title:h,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("aside",{className:"col col--3"},a.createElement(c.Z,{sidebar:u})),a.createElement("main",{className:"col col--7"},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,h),a.createElement(o.Z,{href:d},a.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return a.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},a.createElement(t,null))}))))))}},7680:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294),n=r(7130),l=r(2122),o=r(9756),c=r(6010),i="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,r=(0,o.Z)(e,s);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},r),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(m,null),a.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5386:function(e,t,r){"use strict";var a=r(7294),n=r(2511),l=r(2210),o=r(5607),c={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(l.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(n.Z,e)},pre:function(e){var t,r=e.children;return(0,a.isValidElement)(null==r||null==(t=r.props)?void 0:t.children)?null==r?void 0:r.props.children:a.createElement(l.Z,(0,a.isValidElement)(r)?null==r?void 0:r.props:{children:r})},h1:(0,o.Z)("h1"),h2:(0,o.Z)("h2"),h3:(0,o.Z)("h3"),h4:(0,o.Z)("h4"),h5:(0,o.Z)("h5"),h6:(0,o.Z)("h6")};t.Z=c},283:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(2122),n=r(9756),l=r(7294),o=r(6010),c=r(2511),i=r(4395),s=r(9524),m="footerLogoLink_qW4Z",u="footerCopyright_2yvt",d=r(4087),p=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,r=e.href,o=e.label,i=e.prependBaseUrlToHref,m=(0,n.Z)(e,p),u=(0,s.Z)(t),d=(0,s.Z)(r,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},r?{href:i?d:r}:{to:u},m),o)}var f=function(e){var t=e.sources,r=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:r,sources:t})};var h=function(){var e=(0,i.LU)().footer,t=e||{},r=t.copyright,a=t.links,n=void 0===a?[]:a,d=t.logo,p=void 0===d?{}:d,h={light:(0,s.Z)(p.src),dark:(0,s.Z)(p.srcDark||p.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(g,e))}))):null)}))),(p||r)&&l.createElement("div",{className:"footer__bottom text--center"},p&&(p.src||p.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},p.href?l.createElement(c.Z,{href:p.href,className:m},l.createElement(f,{alt:p.alt,sources:h})):l.createElement(f,{alt:p.alt,sources:h})),r?l.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);