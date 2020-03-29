/*! For license information please see 2809b177.fdc54d6c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),o=(a(0),a(205)),l=(a(214),a(215),a(209)),c={title:"Running Pinot in Kubernetes",sidebar_label:"Kubernetes",description:"Running Pinot in Kubernetes"},i={id:"administration/installation/cloud/on-premises",title:"Running Pinot in Kubernetes",description:"Running Pinot in Kubernetes",source:"@site/docs/administration/installation/cloud/on-premises.md",permalink:"/docs/administration/installation/cloud/on-premises",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/on-premises.md",sidebar_label:"Kubernetes",sidebar:"docs",previous:{title:"Running Pinot in Docker",permalink:"/docs/administration/installation/containers/docker"},next:{title:"AWS Quickstart",permalink:"/docs/administration/installation/cloud/aws"}},s=[{value:"Setup a Pinot cluster for demo",id:"setup-a-pinot-cluster-for-demo",children:[{value:"Update helm dependency",id:"update-helm-dependency",children:[]},{value:"Start Pinot with Helm",id:"start-pinot-with-helm",children:[]}]},{value:"Troubleshooting (For helm v2.12.1)",id:"troubleshooting-for-helm-v2121",children:[]},{value:"Load data into Pinot through Kafka",id:"load-data-into-pinot-through-kafka",children:[{value:"Bring up a Kafka Cluster for realtime data ingestion",id:"bring-up-a-kafka-cluster-for-realtime-data-ingestion",children:[]},{value:"Check Kafka deployment status",id:"check-kafka-deployment-status",children:[]},{value:"Create Kafka topics",id:"create-kafka-topics",children:[]},{value:"Load data into Kafka and Create Pinot Schema/Tables",id:"load-data-into-kafka-and-create-pinot-schematables",children:[]}]},{value:"How to query pinot data",id:"how-to-query-pinot-data",children:[{value:"Pinot Query Console",id:"pinot-query-console",children:[]}]},{value:"Use Superset to query Pinot",id:"use-superset-to-query-pinot",children:[{value:"Bring up Superset",id:"bring-up-superset",children:[]},{value:"(First time) Set up Admin account",id:"first-time-set-up-admin-account",children:[]},{value:"(First time) Init Superset",id:"first-time-init-superset",children:[]},{value:"Load Demo Data source",id:"load-demo-data-source",children:[]},{value:"Access Superset UI",id:"access-superset-ui",children:[]}]},{value:"Access Pinot Using Presto",id:"access-pinot-using-presto",children:[{value:"Deploy Presto with Pinot Plugin",id:"deploy-presto-with-pinot-plugin",children:[]},{value:"Query Presto using Presto CLI",id:"query-presto-using-presto-cli",children:[]},{value:"Sample queries to execute",id:"sample-queries-to-execute",children:[]},{value:"How to clean up Pinot deployment",id:"how-to-clean-up-pinot-deployment",children:[]}]}],u={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This QuickStart assumes the existence of Kubernetes Cluster. Please follow below links to setup your Kubernetes cluster in local or major cloud vendors."),Object(o.b)("blockquote",null,Object(o.b)("b",null,"Prerequisites:")," ",Object(o.b)("br",null),Object(o.b)("p",null,"\xa0 ",Object(o.b)("a",{href:"https://docs.docker.com/docker-for-mac/kubernetes/",target:"_blank"},"Enable Kubernetes on Docker-Desktop"),Object(o.b)("br",null),"\xa0 ",Object(o.b)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank"},"Setup a Kubernetes Cluster using Amazon Elastic Kubernetes Service (Amazon EKS)")," ",Object(o.b)("br",null),"\xa0 ",Object(o.b)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank"},"Setup a Kubernetes Cluster using Google Kubernetes Engine(GKE)")," ",Object(o.b)("br",null),"\xa0 ",Object(o.b)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank"},"Setup a Kubernetes Cluster using Azure Kubernetes Service (AKS)")," ",Object(o.b)("br",null)," ")),Object(o.b)("h2",{id:"setup-a-pinot-cluster-for-demo"},"Setup a Pinot cluster for demo"),Object(o.b)("h3",{id:"update-helm-dependency"},"Update helm dependency"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm dependency update\n")),Object(o.b)("h3",{id:"start-pinot-with-helm"},"Start Pinot with Helm"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For Helm v2.12.1")),Object(o.b)("p",null,"If cluster is just initialized, ensure helm is initialized by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm init --service-account tiller\n")),Object(o.b)("p",null,"Then deploy pinot cluster by:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'helm install --namespace "pinot-quickstart" --name "pinot" .\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For Helm v3.0.0")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create ns pinot-quickstart\nhelm install -n pinot-quickstart pinot .\n")),Object(o.b)("h2",{id:"troubleshooting-for-helm-v2121"},"Troubleshooting (For helm v2.12.1)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Error: Please run below command if encountering issue:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'Error: could not find tiller".\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resolution:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl -n kube-system delete deployment tiller-deploy\nkubectl -n kube-system delete service/tiller-deploy\nhelm init --service-account tiller\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Error: Please run below command if encountering permission issue:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'Error: release pinot failed: namespaces "pinot-quickstart" is forbidden: User "system:serviceaccount:kube-system:default" cannot get resource "namespaces" in API group "" in the namespace "pinot-quickstart"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resolution:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f helm-rbac.yaml\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check deployment status")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get all -n pinot-quickstart\n")),Object(o.b)("h2",{id:"load-data-into-pinot-through-kafka"},"Load data into Pinot through Kafka"),Object(o.b)("h3",{id:"bring-up-a-kafka-cluster-for-realtime-data-ingestion"},"Bring up a Kafka Cluster for realtime data ingestion"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For helm v2.12.1")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator\nhelm install --namespace "pinot-quickstart"  --name kafka incubator/kafka\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For helm v3.0.0")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator\nhelm install -n pinot-quickstart kafka incubator/kafka --set replicas=1\n")),Object(o.b)("h3",{id:"check-kafka-deployment-status"},"Check Kafka deployment status"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get all -n pinot-quickstart |grep kafka\n")),Object(o.b)("p",null,"Ensure Kafka deployment is ready before executing the scripts in next steps:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pod/kafka-0                                                 1/1     Running     0          2m\npod/kafka-zookeeper-0                                       1/1     Running     0          10m\npod/kafka-zookeeper-1                                       1/1     Running     0          9m\npod/kafka-zookeeper-2                                       1/1     Running     0          8m\n")),Object(o.b)("h3",{id:"create-kafka-topics"},"Create Kafka topics"),Object(o.b)("p",null,"Below scripts will create two Kafka topics for data ingestion:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl -n pinot-quickstart exec kafka-0 -- kafka-topics --zookeeper kafka-zookeeper:2181 --topic flights-realtime --create --partitions 1 --replication-factor 1\nkubectl -n pinot-quickstart exec kafka-0 -- kafka-topics --zookeeper kafka-zookeeper:2181 --topic flights-realtime-avro --create --partitions 1 --replication-factor 1\n")),Object(o.b)("h3",{id:"load-data-into-kafka-and-create-pinot-schematables"},"Load data into Kafka and Create Pinot Schema/Tables"),Object(o.b)("p",null,"Below script will deploy 3 batch jobs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ingest 19492 Json messages to Kafka topic ",Object(o.b)("inlineCode",{parentName:"li"},"flights-realtime"),"  at a speed of 1 msg/sec"),Object(o.b)("li",{parentName:"ul"},"Ingest 19492 Avro messages to Kafka topic ",Object(o.b)("inlineCode",{parentName:"li"},"flights-realtime-avro"),"  at a speed of 1 msg/sec"),Object(o.b)("li",{parentName:"ul"},"Upload Pinot schema ",Object(o.b)("inlineCode",{parentName:"li"},"airlineStats")),Object(o.b)("li",{parentName:"ul"},"Create Pinot Table ",Object(o.b)("inlineCode",{parentName:"li"},"airlineStats")," to ingest data from Json encoded Kafka topic ",Object(o.b)("inlineCode",{parentName:"li"},"flights-realtime")),Object(o.b)("li",{parentName:"ul"},"Create Pinot Table ",Object(o.b)("inlineCode",{parentName:"li"},"airlineStatsAvro"),"  to ingest data from Avro encoded Kafka topic ",Object(o.b)("inlineCode",{parentName:"li"},"flights-realtime-avro"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f pinot-realtime-quickstart.yml\n")),Object(o.b)("h2",{id:"how-to-query-pinot-data"},"How to query pinot data"),Object(o.b)("h3",{id:"pinot-query-console"},"Pinot Query Console"),Object(o.b)("p",null,"Please use below script to do local port-forwarding and open Pinot query console on your web browser."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./query-pinot-data.sh\n")),Object(o.b)("h2",{id:"use-superset-to-query-pinot"},"Use Superset to query Pinot"),Object(o.b)("h3",{id:"bring-up-superset"},"Bring up Superset"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f superset.yaml\n")),Object(o.b)("h3",{id:"first-time-set-up-admin-account"},"(First time) Set up Admin account"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'export FLASK_APP=superset:app && flask fab create-admin'\n")),Object(o.b)("h3",{id:"first-time-init-superset"},"(First time) Init Superset"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset db upgrade'\nkubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset init'\n")),Object(o.b)("h3",{id:"load-demo-data-source"},"Load Demo Data source"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset import_datasources -p /etc/superset/pinot_example_datasource.yaml'\nkubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset import_dashboards -p /etc/superset/pinot_example_dashboard.json'\n")),Object(o.b)("h3",{id:"access-superset-ui"},"Access Superset UI"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./open-superset-ui.sh\n")),Object(o.b)("p",null,"You can open the imported dashboard by click Dashboards banner then click on AirlineStats."),Object(o.b)("h2",{id:"access-pinot-using-presto"},"Access Pinot Using Presto"),Object(o.b)("h3",{id:"deploy-presto-with-pinot-plugin"},"Deploy Presto with Pinot Plugin"),Object(o.b)("p",null,"You can run below command to deploy a customized Presto with Pinot plugin."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f presto-coordinator.yaml\n")),Object(o.b)("h3",{id:"query-presto-using-presto-cli"},"Query Presto using Presto CLI"),Object(o.b)("p",null,"Once Presto is deployed, you could run below command."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./pinot-presto-cli.sh\n")),Object(o.b)("h3",{id:"sample-queries-to-execute"},"Sample queries to execute"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"List all catalogs")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-SQL"}),"presto:default> show catalogs;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"Catalog\n---------\n pinot\n system\n(2 rows)\n\nQuery 20191112_050827_00003_xkm4g, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:01 [0 rows, 0B] [0 rows/s, 0B/s]\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"List All tables")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-SQL"}),"presto:default> show tables;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    Table\n--------------\n airlinestats\n(1 row)\n\nQuery 20191112_050907_00004_xkm4g, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:01 [1 rows, 29B] [1 rows/s, 41B/s]\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Show schema")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"presto:default> DESCRIBE pinot.dontcare.airlinestats;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"        Column        |  Type   | Extra | Comment\n----------------------+---------+-------+---------\n flightnum            | integer |       |\n origin               | varchar |       |\n quarter              | integer |       |\n lateaircraftdelay    | integer |       |\n divactualelapsedtime | integer |       |\n......\n\nQuery 20191112_051021_00005_xkm4g, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [80 rows, 6.06KB] [35 rows/s, 2.66KB/s]\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Count total documents")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-SQL"}),"presto:default> select count(*) as cnt from pinot.dontcare.airlinestats limit 10;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cnt\n------\n 9745\n(1 row)\n\nQuery 20191112_051114_00006_xkm4g, FINISHED, 1 node\nSplits: 17 total, 17 done (100.00%)\n0:00 [1 rows, 8B] [2 rows/s, 19B/s]\n")),Object(o.b)("h3",{id:"how-to-clean-up-pinot-deployment"},"How to clean up Pinot deployment"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete ns pinot-quickstart\n")),Object(o.b)(l.a,{to:"/docs/administration/",mdxType:"Jump"},"Administration"))}b.isMDXComponent=!0},205:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(m,c({ref:t},s,{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},206:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},207:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),l=a(37),c=a(208),i=a(11),s=a.n(i);t.a=function(e){var t,a=e.to,i=e.href,u=a||i,b=Object(c.a)(u),p=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?o.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var a,n;d&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},208:function(e,t,a){"use strict";function n(e){return/^\/(?!\/)/.test(e)}a.d(t,"a",(function(){return n}))},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(207),l=a(206),c=a.n(l);a(128);t.a=function(e){var t=e.children,a=e.className,n=e.badge,l=e.icon,i=e.size,s=e.target,u=e.to,b=c()("jump-to","jump-to--"+i,a),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:u,target:s,className:b},p):r.a.createElement(o.a,{to:u,className:b},p)}},214:function(e,t,a){"use strict";a(24),a(19),a(20);var n=a(0),r=a.n(n),o=a(206),l=a.n(o),c=a(130),i=a.n(c),s=37,u=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,c=e.values,b=Object(n.useState)(o),p=b[0],d=b[1],m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:l()("tab-item",i.a.tabItem,{"tab-item--active":p===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===p}))[0]))}},215:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);