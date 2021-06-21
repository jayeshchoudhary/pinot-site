/*! For license information please see d6d9fd36.42ad38ac.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2377],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6261:function(e,t,n){"use strict";var a=n(7294),r=n(4184),o=n.n(r);t.Z=function(e){var t=e.children,n=e.classNames,r=e.fill,l=e.icon,i=e.type,s=null;switch(i){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.createElement("div",{className:o()(n,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==l}),role:"alert"},!1!==l&&a.createElement("i",{className:o()("feather","icon-"+(l||s))}),t)}},9047:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(4137)),l=n(6261),i=["components"],s={title:"PQL",sidebar_label:"PQL",description:"Pinot Query Language",draft:!0},u=void 0,p={unversionedId:"user-guide/pql",id:"user-guide/pql",isDocsHomePage:!1,title:"PQL",description:"Pinot Query Language",source:"@site/docs/user-guide/pql.md",sourceDirName:"user-guide",slug:"/user-guide/pql",permalink:"/docs/user-guide/pql",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/user-guide/pql.md",version:"current",frontMatter:{title:"PQL",sidebar_label:"PQL",description:"Pinot Query Language",draft:!0}},m=[{value:"PQL Limitations",id:"pql-limitations",children:[]},{value:"PQL Examples",id:"pql-examples",children:[{value:"Aggregation",id:"aggregation",children:[]},{value:"Grouping on Aggregation",id:"grouping-on-aggregation",children:[]},{value:"Ordering on Aggregation",id:"ordering-on-aggregation",children:[]},{value:"Filtering",id:"filtering",children:[]},{value:"Selection (Projection)",id:"selection-projection",children:[]},{value:"Ordering on Selection",id:"ordering-on-selection",children:[]},{value:"Pagination on Selection",id:"pagination-on-selection",children:[]},{value:"Wild-card match (in WHERE clause only)",id:"wild-card-match-in-where-clause-only",children:[]},{value:"UDF",id:"udf",children:[]},{value:"BYTES column",id:"bytes-column",children:[]}]},{value:"PQL Specification",id:"pql-specification",children:[{value:"SELECT",id:"select",children:[]},{value:"Supported aggregations on single-value columns",id:"supported-aggregations-on-single-value-columns",children:[]},{value:"Supported aggregations on multi-value columns",id:"supported-aggregations-on-multi-value-columns",children:[]},{value:"WHERE",id:"where",children:[]},{value:"GROUP BY",id:"group-by",children:[]},{value:"ORDER BY",id:"order-by",children:[]},{value:"TOP",id:"top",children:[]},{value:"LIMIT",id:"limit",children:[]}]},{value:"Transform Function in Aggregation and Grouping",id:"transform-function-in-aggregation-and-grouping",children:[{value:"Supported transform functions",id:"supported-transform-functions",children:[]}]},{value:"Differences with SQL",id:"differences-with-sql",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PQL is a derivative of SQL derivative that supports selection, projection, aggregation, grouping aggregation. There is no support for Joins or Subqueries. Specifically, for Pinot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aggregations are computed in parallel"),(0,o.kt)("li",{parentName:"ul"},"Results of aggregations with large amounts of group keys (>1M) are approximated")),(0,o.kt)("h2",{id:"pql-limitations"},"PQL Limitations"),(0,o.kt)("p",null,"PQL is only a derivative of SQL, and it does not support Joins nor Subqueries. In order to support them, we suggest to rely on ",(0,o.kt)("a",{parentName:"p",href:"https://prestodb.io/"},"PrestoDB"),", although Subqueries are not completely supported by PrestoDB at the moment of writing."),(0,o.kt)("h2",{id:"pql-examples"},"PQL Examples"),(0,o.kt)("p",null,"The Pinot Query Language (PQL) is very similar to standard SQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM myTable\n")),(0,o.kt)("h3",{id:"aggregation"},"Aggregation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*), MAX(foo), SUM(bar) FROM myTable\n")),(0,o.kt)("h3",{id:"grouping-on-aggregation"},"Grouping on Aggregation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM myTable\n  GROUP BY bar, baz LIMIT 50\n")),(0,o.kt)("h3",{id:"ordering-on-aggregation"},"Ordering on Aggregation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM myTable\n  GROUP BY bar, baz\n  ORDER BY bar, MAX(foo) DESC LIMIT 50\n")),(0,o.kt)("h3",{id:"filtering"},"Filtering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM myTable\n  WHERE foo = 'foo'\n  AND bar BETWEEN 1 AND 20\n  OR (baz < 42 AND quux IN ('hello', 'goodbye') AND quuux NOT IN (42, 69))\n")),(0,o.kt)("h3",{id:"selection-projection"},"Selection (Projection)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM myTable\n  WHERE quux < 5\n  LIMIT 50\n")),(0,o.kt)("h3",{id:"ordering-on-selection"},"Ordering on Selection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT foo, bar FROM myTable\n  WHERE baz > 20\n  ORDER BY bar DESC\n  LIMIT 100\n")),(0,o.kt)("h3",{id:"pagination-on-selection"},"Pagination on Selection"),(0,o.kt)("p",null,"Note: results might not be consistent if column ordered by has same value in multiple rows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT foo, bar FROM myTable\n  WHERE baz > 20\n  ORDER BY bar DESC\n  LIMIT 50, 100\n")),(0,o.kt)("h3",{id:"wild-card-match-in-where-clause-only"},"Wild-card match (in WHERE clause only)"),(0,o.kt)("p",null,"To count rows where the column ",(0,o.kt)("inlineCode",{parentName:"p"},"airlineName")," starts with U"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM SomeTable\n  WHERE regexp_like(airlineName, '^U.*')\n  GROUP BY airlineName TOP 10\n")),(0,o.kt)("h3",{id:"udf"},"UDF"),(0,o.kt)("p",null,"As of now, functions have to be implemented within Pinot. Injecting functions is not allowed yet. The example below demonstrate the use of UDFs. More examples in Transform Function in Aggregation Grouping"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM myTable\n  GROUP BY timeConvert(timeColumnName, 'SECONDS', 'DAYS')\n")),(0,o.kt)("h3",{id:"bytes-column"},"BYTES column"),(0,o.kt)("p",null,"Pinot supports queries on BYTES column using HEX string. The query response also uses hex string to represent bytes value.\nE.g. the query below fetches all the rows for a given UID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM myTable\n  WHERE UID = "c8b3bce0b378fc5ce8067fc271a34892"\n')),(0,o.kt)("h2",{id:"pql-specification"},"PQL Specification"),(0,o.kt)("h3",{id:"select"},"SELECT"),(0,o.kt)("p",null,"The select statement is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <outputColumn> (, outputColumn, outputColumn,...)\n  FROM <tableName>\n  (WHERE ... | GROUP BY ... | ORDER BY ... | TOP ... | LIMIT ...)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"outputColumn")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," to project all columns, columns (",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"baz"),") or aggregation functions like (",(0,o.kt)("inlineCode",{parentName:"p"},"MIN(foo), MAX(bar), AVG(baz)"),")."),(0,o.kt)("h3",{id:"supported-aggregations-on-single-value-columns"},"Supported aggregations on single-value columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"COUNT"),(0,o.kt)("li",{parentName:"ul"},"MIN"),(0,o.kt)("li",{parentName:"ul"},"MAX"),(0,o.kt)("li",{parentName:"ul"},"SUM"),(0,o.kt)("li",{parentName:"ul"},"AVG"),(0,o.kt)("li",{parentName:"ul"},"MINMAXRANGE"),(0,o.kt)("li",{parentName:"ul"},"DISTINCT"),(0,o.kt)("li",{parentName:"ul"},"DISTINCTCOUNT"),(0,o.kt)("li",{parentName:"ul"},"DISTINCTCOUNTHLL"),(0,o.kt)("li",{parentName:"ul"},"DISTINCTCOUNTRAWHLL: Returns HLL response serialized as string. The serialized HLL can be converted back into an HLL (see pinot-core/**/HllUtil.java as an example) and then aggregated with other HLLs. A common use case may be to merge HLL responses from different Pinot tables, or to allow aggregation after client-side batching.\nFASTHLL (WARN: will be deprecated soon. FASTHLL stores serialized HyperLogLog in String format, which performs worse than DISTINCTCOUNTHLL, which supports serialized HyperLogLog in BYTES (byte array) format)"),(0,o.kt)("li",{parentName:"ul"},"PERCENTILE","[0-100]",": e.g. PERCENTILE5, PERCENTILE50, PERCENTILE99, etc."),(0,o.kt)("li",{parentName:"ul"},"PERCENTILEEST","[0-100]",": e.g. PERCENTILEEST5, PERCENTILEEST50, PERCENTILEEST99, etc.")),(0,o.kt)("h3",{id:"supported-aggregations-on-multi-value-columns"},"Supported aggregations on multi-value columns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"COUNTMV"),(0,o.kt)("li",{parentName:"ul"},"MINMV"),(0,o.kt)("li",{parentName:"ul"},"MAXMV"),(0,o.kt)("li",{parentName:"ul"},"SUMMV"),(0,o.kt)("li",{parentName:"ul"},"AVGMV"),(0,o.kt)("li",{parentName:"ul"},"MINMAXRANGEMV"),(0,o.kt)("li",{parentName:"ul"},"DISTINCTCOUNTMV"),(0,o.kt)("li",{parentName:"ul"},"DISTINCTCOUNTHLLMV"),(0,o.kt)("li",{parentName:"ul"},"DISTINCTCOUNTRAWHLLMV: Returns HLL response serialized as string. The serialized HLL can be converted back into an HLL (see pinot-core/**/HllUtil.java as an example) and then aggregated with other HLLs. A common use case may be to merge HLL responses from different Pinot tables, or to allow aggregation after client-side batching."),(0,o.kt)("li",{parentName:"ul"},"FASTHLLMV (WARN: will be deprecated soon. It does not make lots of sense to configure serialized HyperLogLog column as a dimension)"),(0,o.kt)("li",{parentName:"ul"},"PERCENTILE","[0-100]","MV: e.g. PERCENTILE5MV, PERCENTILE50MV, PERCENTILE99MV, etc."),(0,o.kt)("li",{parentName:"ul"},"PERCENTILEEST","[0-100]","MV: e.g. PERCENTILEEST5MV, PERCENTILEEST50MV, PERCENTILEEST99MV, etc.")),(0,o.kt)("h3",{id:"where"},"WHERE"),(0,o.kt)("p",null,"Supported predicates are comparisons with a constant using the standard SQL operators (",(0,o.kt)("inlineCode",{parentName:"p"},"=, <, <=, >, >=, <>, '!='"),") , range comparisons using ",(0,o.kt)("inlineCode",{parentName:"p"},"BETWEEN (foo BETWEEN 42 AND 69)"),", set membership (",(0,o.kt)("inlineCode",{parentName:"p"},"foo IN (1, 2, 4, 8)"),") and exclusion (foo NOT IN (1, 2, 4, 8)). For ",(0,o.kt)("inlineCode",{parentName:"p"},"BETWEEN"),", the range is inclusive."),(0,o.kt)("p",null,"Comparison with a regular expression is supported using the regexp_like function, as in ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE regexp_like(columnName, 'regular expression')")),(0,o.kt)("h3",{id:"group-by"},"GROUP BY"),(0,o.kt)("p",null,"The GROUP BY clause groups aggregation results by a list of columns, or transform functions on columns (see below)"),(0,o.kt)("h3",{id:"order-by"},"ORDER BY"),(0,o.kt)("p",null,"The ORDER BY clause orders selection results or group by results by a list of columns. PQL supports ordering DESC or ASC."),(0,o.kt)("h3",{id:"top"},"TOP"),(0,o.kt)("p",null,"The TOP n clause causes the 'n' largest group results to be returned. If not specified, the top 10 groups are returned."),(0,o.kt)("h3",{id:"limit"},"LIMIT"),(0,o.kt)("p",null,"The LIMIT n clause causes the selection results to contain at most 'n' results. The LIMIT a, b clause paginate the selection results from the 'a' th results and return at most 'b' results."),(0,o.kt)("h2",{id:"transform-function-in-aggregation-and-grouping"},"Transform Function in Aggregation and Grouping"),(0,o.kt)("p",null,"In aggregation and grouping, each column can be transformed from one or multiple columns. For example, the following query will calculate the maximum value of column foo divided by column bar grouping on the column time converted from time unit MILLISECONDS to SECONDS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MAX(DIV(foo, bar) FROM myTable\n  GROUP BY TIMECONVERT(time, 'MILLISECONDS', 'SECONDS')\n")),(0,o.kt)("h3",{id:"supported-transform-functions"},"Supported transform functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Functions"),(0,o.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ADD"),(0,o.kt)("td",{parentName:"tr",align:null},"Sum of at least two values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUB"),(0,o.kt)("td",{parentName:"tr",align:null},"Difference between two values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MULT"),(0,o.kt)("td",{parentName:"tr",align:null},"Product of at least two values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DIV"),(0,o.kt)("td",{parentName:"tr",align:null},"Quotient of two values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIMECONVERT"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes 3 arguments, converts the value into another time unit. ",(0,o.kt)("br",null)," Examples - ",(0,o.kt)("inlineCode",{parentName:"td"},"TIMECONVERT(time, 'MILLISECONDS', 'SECONDS')"),"  - This expression converts the value of column ",(0,o.kt)("inlineCode",{parentName:"td"},"time")," (taken to be in milliseconds) to the nearest seconds (i.e. the nearest seconds that is lower than the value of ",(0,o.kt)("inlineCode",{parentName:"td"},"date")," column) ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null)," Takes 4 arguments, converts the value into another date time format, and buckets time based on the given time granularity. ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"DATETIMECONVERT(columnName, inputFormat, outputFormat, outputGranularity)")," where: ",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"columnName")," - column name to convert ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"inputFormat")," - format of the column columnName ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"outputFormat")," - format of the result desired after conversion ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"outputGranularity")," - the granularity in which to bucket the result")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DATETIMECONVERT"),(0,o.kt)("td",{parentName:"tr",align:null},"Format is expressed as ",(0,o.kt)("inlineCode",{parentName:"td"},"<time size>:<time unit>:<time format>:<pattern>")," ",(0,o.kt)("br",null)," where: ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"time size")," - size of the time unit eg: 1, 10 ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"time unit")," - HOURS, DAYS etc ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"time format")," - EPOCH or SIMPLE_DATE_FORMAT ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"pattern")," -  this is defined in case of SIMPLE_DATE_FORMAT. eg: yyyyMMdd. A specific timezone can be passed using tz(timezone) ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"timezone")," - can be expressed as long form tz(Asia/Kolkata), or short form tz(IST) or in terms of GMT tz(GMT+0530). Default is UTC. It is recommended to use long form timezone, as short forms are ambiguous with daylight savings (eg: PDT works during daylight savings, PST otherwise) ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null)," Granularity is expressed as ",(0,o.kt)("inlineCode",{parentName:"td"},"<time size>:<time unit>")," ",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Examples")," ",(0,o.kt)("br",null)," 1. To convert column ",(0,o.kt)("inlineCode",{parentName:"td"},"Date")," from ",(0,o.kt)("inlineCode",{parentName:"td"},"hoursSinceEpoch")," to ",(0,o.kt)("inlineCode",{parentName:"td"},"daysSinceEpoch")," and bucket it to 1 day granularity ",(0,o.kt)("br",null),' 2. To simply bucket millis "Date" to 15 minutes ',(0,o.kt)("inlineCode",{parentName:"td"},"granularity dateTimeConvert(Date, '1:MILLISECONDS:EPOCH', '1:MILLISECONDS:EPOCH', '15:MINUTES')")," ",(0,o.kt)("br",null),' 3. To convert column "Date" from hoursSinceEpoch to format yyyyMdd and bucket it to 1 days granularity ',(0,o.kt)("inlineCode",{parentName:"td"},"dateTimeConvert(Date, '1:HOURS:EPOCH', '1:DAYS:SIMPLE_DATE_FORMAT:yyyyMMdd', '1:DAYS')")," ",(0,o.kt)("br",null),' 4. To convert column "Date" from format yyyy/MM/dd to weeksSinceEpoch and bucket it to 1 weeks granularity ',(0,o.kt)("inlineCode",{parentName:"td"},"dateTimeConvert(Date, '1:DAYS:SIMPLE_DATE_FORMAT:yyyy/MM/dd', '1:WEEKS:EPOCH', '1:WEEKS')")," ",(0,o.kt)("br",null),' 5. To convert column "Date" from millis to format yyyyMdd in timezone PST ',(0,o.kt)("inlineCode",{parentName:"td"},"dateTimeConvert(Date, '1:MILLISECONDS:EPOCH', '1:DAYS:SIMPLE_DATE_FORMAT:yyyyMMdd tz(America/Los_Angeles)', '1:DAYS')"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DATETRUNC"),(0,o.kt)("td",{parentName:"tr",align:null},"(Presto) SQL compatible date truncation, equivalent to the Presto function date_trunc. Takes at least 3 and upto 5 arguments, converts the value into a specified output granularity seconds since UTC epoch that is bucketed on a unit in a specified timezone. Examples DATETRUNC('week', time_in_seconds, 'SECONDS') This expression converts the column time_in_seconds, which is a long containing seconds since UTC epoch truncated at WEEK (where a Week starts at Monday UTC midnight). The output is a long seconds since UTC epoch. ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"DATETRUNC('quarter', DIV(time_milliseconds/1000), 'SECONDS', 'America/Los_Angeles', 'HOURS')")," This expression converts the expression ",(0,o.kt)("inlineCode",{parentName:"td"},"time_in_milliseconds/1000")," (which is thus in seconds) into hours that are truncated at ",(0,o.kt)("inlineCode",{parentName:"td"},"QUARTER")," at the Los Angeles time zone (where a Quarter begins on 1/1, 4/1, 7/1, 10/1 in Los Angeles timezone). The output is expressed as hours since UTC epoch (note that the output is not Los Angeles timezone)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VALUEIN"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes at least 2 arguments, where the first argument is a multi-valued column, and the following arguments are constant values. The transform function will filter the value from the multi-valued column with the given constant values. The ",(0,o.kt)("inlineCode",{parentName:"td"},"VALUEIN")," transform function is especially useful when the same multi-valued column is both filtering column and grouping column. ",(0,o.kt)("br",null),(0,o.kt)("br",null)," Examples ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"VALUEIN(mvColumn, 3, 5, 15)"))))),(0,o.kt)("h2",{id:"differences-with-sql"},"Differences with SQL"),(0,o.kt)(l.Z,{type:"info",mdxType:"Alert"}," These differences only apply to the PQL endpoint. They do not hold true for the standard-SQL endpoint, which is the recommended endpoint. ",(0,o.kt)("br",null),"More information about the two types of endpoints in Querying Pinot.. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TOP works like LIMIT for truncation in group by queries"),(0,o.kt)("li",{parentName:"ul"},"No need to select the columns to group with.\nThe following two queries are both supported in PQL, where the non-aggregation columns are ignored.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM mytable\n  GROUP BY bar, baz\n  TOP 50\n\nSELECT bar, baz, MIN(foo), MAX(foo), SUM(foo), AVG(foo) FROM mytable\n  GROUP BY bar, baz\n  TOP 50\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The results will always order by the aggregated value (descending).\nThe results for query")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(foo), MAX(foo) FROM myTable\n  GROUP BY bar\n  TOP 50\n")),(0,o.kt)("p",null,"will be the same as the combining results from the following queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(foo) FROM myTable\n  GROUP BY bar\n  TOP 50\nSELECT MAX(foo) FROM myTable\n  GROUP BY bar\n  TOP 50\n")),(0,o.kt)("p",null,"where we don't put the results for the same group together."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No support for ",(0,o.kt)("strong",{parentName:"li"},"ORDER BY")," in aggregation group by. However, ORDER BY support was added recently and is available in the standard-SQL endpoint. It can be used in the PQL endpoint by passing ",(0,o.kt)("inlineCode",{parentName:"li"},"queryOptions")," into the payload as follows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'{\n  "pql" : "SELECT SUM(foo), SUM(bar) from myTable GROUP BY moo ORDER BY SUM(bar) ASC, moo DESC TOP 10",\n  "queryOptions" : "groupByMode=sql;responseFormat=sql"\n}\n')),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"groupByMode=sql")," - standard sql way of execution group by, hence accepting order by"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"responseFormat=sql")," - standard sql way of displaying results, in a tabular manner")))}c.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);