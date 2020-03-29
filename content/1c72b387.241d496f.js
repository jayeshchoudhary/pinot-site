/*! For license information please see 1c72b387.241d496f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),l=(n(0),n(205)),c=n(212),o=n(209),i={title:"GCP Quickstart",sidebar_label:"GCP",description:"Run Pinot on GCP"},s={id:"administration/installation/cloud/gcp",title:"GCP Quickstart",description:"Run Pinot on GCP",source:"@site/docs/administration/installation/cloud/gcp.md",permalink:"/docs/administration/installation/cloud/gcp",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/gcp.md",sidebar_label:"GCP",sidebar:"docs",previous:{title:"AWS Quickstart",permalink:"/docs/administration/installation/cloud/aws"},next:{title:"Azure Quickstart",permalink:"/docs/administration/installation/cloud/azure"}},u=[{value:"Tooling Installation",id:"tooling-installation",children:[{value:"Install Kubectl",id:"install-kubectl",children:[]},{value:"Install Helm",id:"install-helm",children:[]}]},{value:"Install Google Cloud SDK",id:"install-google-cloud-sdk",children:[{value:"For Mac User",id:"for-mac-user",children:[]},{value:"(Optional) Initialize Google Cloud Environment",id:"optional-initialize-google-cloud-environment",children:[]},{value:"(Optional) Create a Kubernetes cluster(GKE) in Google Cloud",id:"optional-create-a-kubernetes-clustergke-in-google-cloud",children:[]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To have basic set with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/kubernetes-engine"}),"Google Kubernetes Engine(GKE)")," on GCP:"),Object(l.b)("h2",{id:"tooling-installation"},"Tooling Installation"),Object(l.b)("h3",{id:"install-kubectl"},"Install Kubectl"),Object(l.b)("p",null,"Please follow this link (",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"}),"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),Object(l.b)("p",null,"For Mac User"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-cli\n")),Object(l.b)("p",null,"Please check kubectl version after installation."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl version\n")),Object(l.b)("p",null,"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12"),Object(l.b)("h3",{id:"install-helm"},"Install Helm"),Object(l.b)("p",null,"Please follow this ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/using_helm/#installing-helm"}),"link to install helm")),Object(l.b)("p",null,"For Mac User"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-helm\n")),Object(l.b)("p",null,"Please check helm version after installation."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm version\n")),Object(l.b)(c.a,{icon:!1,type:"info",mdxType:"Alert"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1. Please pick the script based on your helm version."),Object(l.b)("h2",{id:"install-google-cloud-sdk"},"Install Google Cloud SDK"),Object(l.b)("p",null,"Please follow this link to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/install"}),"install Google Cloud SDK")),Object(l.b)("h3",{id:"for-mac-user"},"For Mac User"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install Google Cloud SDK")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl https://sdk.cloud.google.com | bash\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Restart your shell")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"exec -l $SHELL\n")),Object(l.b)("h3",{id:"optional-initialize-google-cloud-environment"},"(Optional) Initialize Google Cloud Environment"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"gcloud init\n")),Object(l.b)("h3",{id:"optional-create-a-kubernetes-clustergke-in-google-cloud"},"(Optional) Create a Kubernetes cluster(GKE) in Google Cloud"),Object(l.b)("p",null,"Below script will create a 3 nodes cluster named pinot-quickstart in ",Object(l.b)("inlineCode",{parentName:"p"},"us-west1-b")," with ",Object(l.b)("inlineCode",{parentName:"p"},"n1-standard-2")," machines for demo purposes."),Object(l.b)("p",null,"Please modify the parameters in the example command below:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"GCLOUD_PROJECT=[your gcloud project name]\nGCLOUD_ZONE=us-west1-b\nGCLOUD_CLUSTER=pinot-quickstart\nGCLOUD_MACHINE_TYPE=n1-standard-2\nGCLOUD_NUM_NODES=3\ngcloud container clusters create ${GCLOUD_CLUSTER} \\\n  --num-nodes=${GCLOUD_NUM_NODES} \\\n  --machine-type=${GCLOUD_MACHINE_TYPE} \\\n  --zone=${GCLOUD_ZONE} \\\n  --project=${GCLOUD_PROJECT}\n")),Object(l.b)("p",null,"You can monitor cluster status by command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"gcloud compute instances list\n")),Object(l.b)("p",null,"Once the cluster is in RUNNING status, it's ready to be used."),Object(l.b)("h3",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),Object(l.b)("p",null,"Simply run below command to get the credential for the cluster pinot-quickstart that you just created or your existing cluster."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"GCLOUD_PROJECT=[your gcloud project name]\nGCLOUD_ZONE=us-west1-b\nGCLOUD_CLUSTER=pinot-quickstart\ngcloud container clusters get-credentials ${GCLOUD_CLUSTER} --zone ${GCLOUD_ZONE} --project ${GCLOUD_PROJECT}\n")),Object(l.b)("p",null,"To verify the connection, you can run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes\n")),Object(l.b)("h3",{id:"pinot-quickstart"},"Pinot Quickstart"),Object(l.b)("p",null,"Please follow this ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/installation/cloud/on-premises"}),"Kubernetes QuickStart")," to deploy your Pinot Demo."),Object(l.b)(o.a,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),Object(l.b)("h3",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"GCLOUD_ZONE=us-west1-b\ngcloud container clusters delete pinot-quickstart --zone=${GCLOUD_ZONE}\n")))}p.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||l;return n?r.a.createElement(m,o({ref:t},s,{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},206:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===l)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},207:function(e,t,n){"use strict";var a=n(1),r=n(0),l=n.n(r),c=n(37),o=n(208),i=n(11),s=n.n(i);t.a=function(e){var t,n=e.to,i=e.href,u=n||i,b=Object(o.a)(u),p=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?l.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,a;d&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):l.a.createElement("a",Object(a.a)({},e,{href:u}))}},208:function(e,t,n){"use strict";function a(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return a}))},209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(207),c=n(206),o=n.n(c);n(128);t.a=function(e){var t=e.children,n=e.className,a=e.badge,c=e.icon,i=e.size,s=e.target,u=e.to,b=o()("jump-to","jump-to--"+i,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:u,target:s,className:b},p):r.a.createElement(l.a,{to:u,className:b},p)}},210:function(e,t,n){var a=n(18);a(a.P,"Array",{fill:n(211)}),n(70)("fill")},211:function(e,t,n){"use strict";var a=n(51),r=n(71),l=n(36);e.exports=function(e){for(var t=a(this),n=l(t.length),c=arguments.length,o=r(c>1?arguments[1]:void 0,n),i=c>2?arguments[2]:void 0,s=void 0===i?n:r(i,n);s>o;)t[o++]=e;return t}},212:function(e,t,n){"use strict";n(210);var a=n(0),r=n.n(a),l=n(206),c=n.n(l);n(129);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,l=e.icon,o=e.type,i=null;switch(o){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:c()(n,"alert","alert--"+o,{"alert--fill":a,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:c()("feather","icon-"+(l||i))}),t)}}}]);