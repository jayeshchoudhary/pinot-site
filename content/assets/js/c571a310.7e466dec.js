/*! For license information please see c571a310.7e466dec.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6900],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(9756),r=n(7294),i=n(3727),l=n(9962),o=n(2735),s=n(6136),c=(0,r.createContext)({collectLink:function(){}}),u=n(9524),p=n(3905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,f=e.to,k=e.href,h=e.activeClassName,v=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,N=(0,a.Z)(e,d),w=(0,l.Z)().siteConfig.trailingSlash,E=(0,u.C)().withBaseUrl,S=(0,r.useContext)(c),A=f||k,O=(0,o.Z)(A),C=null==A?void 0:A.replace("pathname://",""),P=void 0!==C?(n=C,y&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;P&&O&&(P=(0,p.applyTrailingSlash)(P,w));var _,j=(0,r.useRef)(!1),T=m?i.OL:i.rU,x=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!x&&O&&null!=P&&window.docusaurus.prefetch(P),function(){x&&_&&_.disconnect()}}),[P,x,O]);var W=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,M=!P||!O||W;return P&&O&&!W&&!b&&S.collectLink(P),M?r.createElement("a",Object.assign({href:P},A&&!O&&{target:"_blank",rel:"noopener noreferrer"},N)):r.createElement(T,Object.assign({},N,{onMouseEnter:function(){j.current||null==P||(window.docusaurus.preload(P),j.current=!0)},innerRef:function(e){var t,n;x&&e&&O&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))}))).observe(t))},to:P||""},m&&{isActive:v,activeClassName:h}))}},2735:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(9962),r=n(2735);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,a=e.split(/[#?]/)[0],r="/"===a?"/":t?(n=a).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(a);return e.replace(a,r)}},3905:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6261:function(e,t,n){"use strict";var a=n(7294),r=n(4184),i=n.n(r);t.Z=function(e){var t=e.children,n=e.classNames,r=e.fill,l=e.icon,o=e.type,s=null;switch(o){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.createElement("div",{className:i()(n,"alert","alert--"+o,{"alert--fill":r,"alert--icon":!1!==l}),role:"alert"},!1!==l&&a.createElement("i",{className:i()("feather","icon-"+(l||s))}),t)}},9342:function(e,t,n){"use strict";var a=n(7294),r=n(2511),i=n(4184),l=n.n(i);t.Z=function(e){var t=e.children,n=e.className,i=e.badge,o=e.icon,s=e.size,c=e.target,u=e.to,p=l()("jump-to","jump-to--"+s,n),d=a.createElement("div",{className:"jump-to--inner"},a.createElement("div",{className:"jump-to--inner-2"},a.createElement("div",{className:"jump-to--main"},i?a.createElement("span",{className:"badge badge--primary badge--right"},i):"",t),a.createElement("div",{className:"jump-to--right"},a.createElement("i",{className:"feather icon-"+(o||"chevron-right")+" arrow"}))));return c?a.createElement("a",{href:u,target:c,className:p},d):a.createElement(r.Z,{to:u,className:p},d)}},8864:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),l=n(6261),o=n(9342),s=["components"],c={title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS",draft:!0},u=void 0,p={unversionedId:"administration/installation/cloud/aws",id:"administration/installation/cloud/aws",isDocsHomePage:!1,title:"AWS Quickstart",description:"Run Pinot on AWS",source:"@site/docs/administration/installation/cloud/aws.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/aws",permalink:"/docs/administration/installation/cloud/aws",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/aws.md",version:"current",frontMatter:{title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS",draft:!0},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"},next:{title:"GCP",permalink:"/docs/administration/installation/cloud/gcp"}},d=[{value:"Tooling Installation",id:"tooling-installation",children:[]},{value:"(Optional) Login to your AWS account",id:"optional-login-to-your-aws-account",children:[{value:"(Optional) Create a Kubernetes cluster(EKS) in AWS",id:"optional-create-a-kubernetes-clustereks-in-aws",children:[]}]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document provides the basic instruction to set up a Kubernetes Cluster on ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Amazon Elastic Kubernetes Service (Amazon EKS)")),(0,i.kt)(l.Z,{type:"info",mdxType:"Alert"}," Because Pinot must be manually updated on Nix, new Pinot releases will be delayed. Generally new Pinot releases are made available within a few days."),(0,i.kt)("h2",{id:"tooling-installation"},"Tooling Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Pinot"),(0,i.kt)("p",{parentName:"li"},"Please follow this link (",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"},"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),(0,i.kt)("p",{parentName:"li"},"For Mac User"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-cli\n")),(0,i.kt)("p",{parentName:"li"},"Please check kubectl version after installation:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),(0,i.kt)(l.Z,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Helm"),(0,i.kt)("p",{parentName:"li"},"Please follow this link (",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/using_helm/#installing-helm"},"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),(0,i.kt)("p",{parentName:"li"},"For Mac User"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-helm\n")),(0,i.kt)("p",{parentName:"li"},"Please check helm version after installation."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,i.kt)(l.Z,{icon:!1,type:"info",mdxType:"Alert"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1."),(0,i.kt)("li",{parentName:"ul"},"Please pick the script based on your helm version.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install AWS CLI"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"(https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html#install-tool-bundled)"},"Install AWS CLI")),(0,i.kt)("p",{parentName:"li"},"For Mac User"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-macos.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Eksctl"),(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html#installing-eksctl"},"AWS CLI")),(0,i.kt)("p",{parentName:"li"},"For Mac User"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap weaveworks/tap\nbrew install weaveworks/tap/eksctl\n")))),(0,i.kt)("h2",{id:"optional-login-to-your-aws-account"},"(Optional) Login to your AWS account"),(0,i.kt)("p",null,"For first time AWS user, please register your ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"aws account")),(0,i.kt)("p",null,"Once created the account, you can go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/home"},"AWS Identity and Access Management (IAM)")," to create a user and create access keys under Security Credential tab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure\n")),(0,i.kt)(l.Z,{type:"info",mdxType:"Alert"}," Environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY will override  AWS configuration stored in file ~/.aws/credentials"),(0,i.kt)("h3",{id:"optional-create-a-kubernetes-clustereks-in-aws"},"(Optional) Create a Kubernetes cluster(EKS) in AWS"),(0,i.kt)("p",null,"Below script will create a 3 nodes cluster named pinot-quickstart in us-west-2 with t3.small machines for demo purposes.\nPlease modify the parameters in the example command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\neksctl create cluster \\\n  --name ${EKS_CLUSTER_NAME} \\\n  --version 1.14 \\\n  --region us-west-2 \\\n  --nodegroup-name standard-workers \\\n  --node-type t3.small \\\n  --nodes 3 \\\n  --nodes-min 3 \\\n  --nodes-max 4 \\\n  --node-ami auto\n")),(0,i.kt)("p",null,"You can monitor cluster status by command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks describe-cluster --name ${EKS_CLUSTER_NAME}\n")),(0,i.kt)("p",null,"Once the cluster is in ACTIVE status, it's ready to be used."),(0,i.kt)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),(0,i.kt)("p",null,"Simply run below command to get the credential for the cluster pinot-quickstart that you just created or your existing cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks update-kubeconfig --name ${EKS_CLUSTER_NAME}\n")),(0,i.kt)("p",null,"To verify the connection, you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),(0,i.kt)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),(0,i.kt)("p",null,"Please follow this ",(0,i.kt)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premises"},"Kubernetes QuickStart")," to deploy your Pinot Demo."),(0,i.kt)(o.Z,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),(0,i.kt)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks delete-cluster --name ${EKS_CLUSTER_NAME}\n")))}f.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);