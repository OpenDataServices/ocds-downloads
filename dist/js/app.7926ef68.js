(function(t){function e(e){for(var r,n,l=e[0],i=e[1],c=e[2],d=0,f=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},3225:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-system-bar",{attrs:{app:"",color:"red",absolute:"",height:"20"}},[a("span",{staticClass:"white--text"},[t._v("Tool in alpha. Please do not rely on data within this page to be updated regularly. ")])]),a("v-app-bar",{attrs:{app:"",absolute:"",color:"white",flat:""}},[a("v-row",[a("v-col",[a("v-container",{staticClass:"py-0 fill-height"},[a("router-link",{attrs:{to:"/",custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.href,o=e.navigate;return[a("v-btn",{staticClass:"title mr-10 normal-case",attrs:{text:"",href:r},on:{click:o}},[t._v(" OCDS Data Downloads ")])]}}])}),a("router-link",{attrs:{to:"/about",custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.href,o=e.navigate;return[a("v-btn",{attrs:{text:"",href:r},on:{click:o}},[t._v(" About ")])]}}])}),a("v-spacer")],1)],1)],1)],1),a("v-main",{staticClass:"grey lighten-3"},[a("v-container",[a("router-view",{attrs:{allData:t.allData,originalData:t.originalData}})],1)],1)],1)},s=[],n=a("3835"),l=a("1da1"),i=(a("96cf"),a("4fad"),a("bc3a")),c=a.n(i),u=a("1149"),d=a.n(u),f={name:"App",data:function(){return{allData:[],originalData:[]}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,l,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("https://ocdsdata.fra1.digitaloceanspaces.com/metadata/stats.json");case 3:for(a=e.sent,t.originalData=a.data,r=0,o=Object.entries(t.originalData);r<o.length;r++)s=Object(n["a"])(o[r],2),l=s[0],i=s[1],u=d()(i,{delimiter:"-"}),u.source=l,t.allData.push(u);e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},v=f,p=(a("034f"),a("2877")),h=a("6544"),_=a.n(h),b=a("7496"),m=a("40dc"),g=a("8336"),y=a("62ad"),x=a("a523"),w=a("f6c4"),k=a("0fd9"),C=a("2fa4"),D=a("afd9"),S=Object(p["a"])(v,o,s,!1,null,null,null),j=S.exports;_()(S,{VApp:b["a"],VAppBar:m["a"],VBtn:g["a"],VCol:y["a"],VContainer:x["a"],VMain:w["a"],VRow:k["a"],VSpacer:C["a"],VSystemBar:D["a"]});var V=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",xl:"3"}},[a("v-card",{attrs:{elevation:"0",color:"white"}},[a("v-card-title",{staticClass:"text-h5"},[t._v(" Data Sources ")]),a("v-card-text",{staticClass:"body-1"},[a("p",[t._v(" This page contains a list of OCDS data gathered using "),a("a",{attrs:{href:"https://kingfisher-collect.readthedocs.io/en/latest/"}},[t._v(" OCDS Kingfisher Collect ")]),t._v(" and processed through a data pipeline using "),a("a",{attrs:{href:"https://airflow.apache.org/"}},[t._v(" Apache Airflow ")]),t._v(". Click on the data source for more detail about the data within each source, as well as some usage guidance. ")]),a("p",[t._v(" Slight additions to the OCDS Data Standard have been made to the data, as well as converting the original JSON into a relational data form. All data in the orginal JSON should appear in the outputs. Please read the "),a("router-link",{attrs:{to:"About"}},[t._v("about")]),t._v(" page for caveats with the current output and more information about the data processing involved in getting the data to this form.")],1),t._v(" To track and see the status of each sources please see the "),a("a",{attrs:{href:"https://ocdsdata.opendataservices.coop/"}},[t._v("Airflow homepage for this pipeline")]),t._v(", which is available in read-only form publically. There is no guarantee this service will be available but best efforts will be made to make sure the latest version of each source will kept online along with this website. ")])],1)],1),a("v-col",{attrs:{cols:"12",xl:"9"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.allData,"items-per-page":200,"disable-pagination":!0,"hide-default-footer":!0,search:t.search,dense:!1,"must-sort":!0,"sort-desc":!0},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-text-field",{staticClass:"ml-4 mt-0",attrs:{label:"Search sources"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.source",fn:function(e){var r=e.item;return[r["field_info-latest"]?a("router-link",{staticClass:"capitalize-source",attrs:{to:{name:"Source",params:{name:r.source}}}},[t._v(" "+t._s(r.source.replace(/_/g," ")))]):t._e(),r["field_info-latest"]?t._e():a("span",{staticClass:"capitalize-source"},[t._v(t._s(r.source.replace(/_/g," ")))]),r["job_info-latest_info-fileerror_count"]||!r["field_info-latest"]?a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-1",attrs:{small:"",color:r["field_info-latest"]?"yellow darken-2":"red"}},"v-icon",s,!1),o),[t._v(" mdi-alert-circle-outline ")])]}}],null,!0)},[r["job_info-latest_info-fileerror_count"]?a("span",[t._v(" There were "+t._s(r["job_info-latest_info-fileerror_count"])+" errors when fetching, so data might be incomplete. ")]):t._e(),r["field_info-latest"]?t._e():a("span",[t._v(" Unable to fetch this source ")])]):t._e()]}},{key:"item.job_info-latest_info-finish_time",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.day_from_now(a["job_info-latest_info-finish_time"]))+" ")]}},{key:"item.table_stats-release",fn:function(e){var a=e.item;return[t._v(" "+t._s((a["table_stats-release"]||0).toLocaleString())+" ")]}},{key:"item.download_links",fn:function(e){var r=e.item;return[a("v-chip",{staticClass:"ma-1",attrs:{color:"blue darken-3","text-color":"white",small:!0,active:Boolean(r["csv-url"]),href:r["csv-url"]}},[t._v(" csv ")]),a("v-chip",{staticClass:"ma-1",attrs:{color:"deep-purple darken-4","text-color":"white",small:!0,active:Boolean(r["sqlite-url"]),href:r["sqlite-url"]}},[t._v(" sqlite ")]),a("v-chip",{staticClass:"ma-1",attrs:{color:"deep-orange darken-3","text-color":"white",small:!0,active:Boolean(r["xlsx-url"]),href:r["xlsx-url"]}},[t._v(" xlsx ")]),a("v-chip",{staticClass:"ma-1",attrs:{color:"blue-grey darken-1","text-color":"white",small:!0,active:Boolean(r["pg_dump-url"]),href:r["pg_dump-url"]}},[t._v(" pg dump ")]),a("v-chip",{staticClass:"ma-1",attrs:{color:"teal darken-1","text-color":"white",small:!0,active:Boolean(r["big_query-url"]),href:r["big_query-url"]}},[t._v(" bigquery ")])]}}])})],1)],1)],1)},O=[],B=a("5a0c"),I=a.n(B),q=a("4208"),A=a.n(q);I.a.extend(A.a);var F={props:["allData"],methods:{day_from_now:function(t){return t?I()(t).fromNow():""}},data:function(){return{headers:[{text:"OCDS Source",value:"source",width:200},{text:"Country/Category",value:"scraper_info-category"},{text:"Info",value:"scraper_info-extra_info-Domain",width:200},{text:"Contracting Processes",value:"table_stats-release"},{text:"Download Formats",value:"download_links",sortable:!1},{text:"Last Fetched",value:"job_info-latest_info-finish_time"}],search:"",error:void 0}}},E=F,N=(a("cccb"),a("b0af")),P=a("99d9"),R=a("cc20"),L=a("8fea"),M=a("132d"),Q=a("8654"),U=a("3a2f"),$=Object(p["a"])(E,T,O,!1,null,null,null),z=$.exports;_()($,{VCard:N["a"],VCardText:P["b"],VCardTitle:P["c"],VChip:R["a"],VCol:y["a"],VContainer:x["a"],VDataTable:L["a"],VIcon:M["a"],VRow:k["a"],VTextField:Q["a"],VTooltip:U["a"]});var J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],G={},X=Object(p["a"])(G,J,Y,!1,null,null,null),H=X.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.sourceData?a("v-container",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",lg:"6",xl:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{elevation:"0",color:"white"}},[a("v-card-title",{staticClass:"capitalize-source text-h4"},[t._v(" "+t._s(t.name.replace(/_/g," "))+" ")]),a("v-card-text",[a("p",[t._v(" This page contains downloads for "),a("span",{staticClass:"capitalize-source"},[t._v(t._s(t.name.replace(/_/g," ")))])]),a("p",[t._v(" This data is from "+t._s(t.sourceData["scraper_info-category"])+" ")]),a("p",[t._v(" Data gathered using the "+t._s(t.name)+" scraper on "+t._s(t.sourceData["field_info-latest_date"])+" ")]),a("p",[t._v(" More info on the source can be found in "),a("a",{attrs:{href:t.sourceData["scraper_info-docs_link"]}},[t._v(" Collect Docs ")])]),a("v-dialog",{attrs:{scrollable:!0,width:"800"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("a",t._g(t._b({},"a",o,!1),r),[t._v(" Fetch Info "),t.originalSourceData.job_info.latest_info.fileerror_count?a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-1 mb-1",attrs:{small:"",color:"yellow darken-2"}},"v-icon",o,!1),r),[t._v(" mdi-alert-circle-outline ")])]}}],null,!0)},[a("span",[t._v(" There were "+t._s(t.originalSourceData.job_info.latest_info.fileerror_count)+" errors when fetching, so data might be incomplete. ")])]):t._e()],1)]}}],null,!1,1798961479),model:{value:t.fetchInfoDialog,callback:function(e){t.fetchInfoDialog=e},expression:"fetchInfoDialog"}},[a("v-card",[a("v-card-title",[t._v(" Fetch Info ")]),a("v-card-text",{staticStyle:{height:"500px"}},[a("v-simple-table",{attrs:{dense:"true"},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.originalSourceData.job_info.latest_info,(function(e,r){return a("tr",{key:r},[a("td",{staticClass:"font-weight-medium"},[t._v(t._s(r))]),a("td",[t._v(t._s(e))])])})),0)]},proxy:!0}],null,!1,628292790)})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"blue darken-3",text:""},on:{click:function(e){t.fetchInfoDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[t.fieldInfo.empty?t._e():a("div",[a("v-card",{attrs:{elevation:"0",color:"white"}},[a("v-card-title",{staticClass:"text-h5"},[t._v(" Tables ")]),a("v-card-text",[a("p",[t._v(" Each download contains the following tables: ")]),a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Table Name ")]),a("th",{staticClass:"text-left"},[t._v(" Row Count ")])])]),a("tbody",t._l(t.fieldTypes,(function(e){return a("tr",{key:e.object_type},[a("td",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#table-"+e.object_type,expression:"'#table-' + table.object_type"}],attrs:{href:"#"}},[t._v(" "+t._s(e.object_type)+" ")])]),a("td",[t._v(t._s(t.sourceData["table_stats-"+e.object_type].toLocaleString()))])])})),0)]},proxy:!0}],null,!1,3789233887)})],1)],1)],1)])],1)],1),a("v-col",{attrs:{cols:"12",lg:"6",xl:"8"}},[a("v-card",{attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"text-h5"},[t._v(" Formats ")]),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",xl:"6"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",[a("span",[t._v(" Postgres Database Dump ")]),a("v-chip",{staticClass:"ml-auto",attrs:{color:"blue-grey darken-1","text-color":"white",active:Boolean(t.sourceData["pg_dump-url"]),href:t.sourceData["pg_dump-url"]}},[t._v(" Download DB Dump ")])],1),a("v-card-text",[a("p",[t._v(' Download is a PG dump in custom (compressed) format. You need to run "pg_restore" on a database instance to load it, eg:')]),a("pre",[t._v(" pg_restore -d [db] --no-owner -c [source].pg_dump ")]),a("br"),a("p",[t._v(' A new schema "'+t._s(t.name)+'" will be created with the tables in the table list.')]),a("p",[t._v(' Additional table "_compiled_releases" also in schema with raw JSON of compiled release. A list of releases that where compiled is also in "_compiled_release" table if source provided "release" data.')])])],1)],1),a("v-col",{attrs:{cols:"12",xl:"6"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",[a("span",[t._v(" BigQuery ")]),a("v-chip",{staticClass:"ml-auto",attrs:{color:"teal darken-1","text-color":"white",active:Boolean(t.sourceData["big_query-url"]),href:t.sourceData["big_query-url"]}},[t._v(" BigQuery Console ")])],1),a("v-card-text",[a("p",[t._v(" Link takes you to BigQuery console")]),a("p",[t._v(" You may need to use the Explorer section on the left to naviage the to this dataset again.")]),a("p",[t._v(" The schema and field docs can be seen by clicking on a table in the Explorer section.")]),a("p",[t._v(" A Google account is required to query the data but a free 1TB per month of Query data processing is available without providing payment.")]),a("p",[t._v(" See "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui"}},[t._v(" BigQuery quickstart guide ")]),t._v(" for more info ")])])],1)],1),a("v-col",{attrs:{cols:"12",xl:"6"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",[a("span",[t._v(" CSV ")]),a("v-chip",{staticClass:"ml-auto",attrs:{color:"blue darken-3","text-color":"white",active:Boolean(t.sourceData["csv-url"]),href:t.sourceData["csv-url"]}},[t._v(" Download CSV ")])],1),a("v-card-text",[a("p",[t._v(" Contains a zip file of csv files named in the table list.")]),a("p",[t._v(" An extra csv file named fields.csv with the table of fields are in each table for reference.")])])],1)],1),a("v-col",{attrs:{cols:"12",xl:"6"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",[a("span",[t._v(" Excel (xlsx) ")]),a("v-chip",{staticClass:"ml-auto",attrs:{color:"deep-orange darken-3","text-color":"white",active:Boolean(t.sourceData["xlsx-url"]),href:t.sourceData["xlsx-url"]}},[t._v(" Download XLSX ")])],1),t.sourceData["xlsx-url"]?t._e():a("v-card-text",[a("p",[t._v(" No Excel download availibale as data is too large")])]),t.sourceData["xlsx-url"]?a("v-card-text",[a("p",[t._v(" Excel file contains a tab named after each table in the table list")]),a("p",[t._v(' An extra table named "Field Infromation" has detail of fields that are in each table')])]):t._e()],1)],1),t.sourceData["sqlite-url"]?a("v-col",{attrs:{cols:"12",xl:"6"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",[a("span",[t._v(" SQLite ")]),a("v-chip",{staticClass:"ml-auto",attrs:{color:"deep-purple darken-4","text-color":"white",href:t.sourceData["sqlite-url"]}},[t._v(" Download Sqlite ")])],1),a("v-card-text",[a("p",[t._v(" Contains sqlite database file. with each table in the table list. ")]),a("p",[t._v(" Use local tool such as "),a("a",{attrs:{href:"https://sqlitebrowser.org/"}},[t._v("sqlitebrowser")]),t._v(" to open ")])])],1)],1):t._e(),a("v-col",{attrs:{cols:"12",xl:"6"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",[a("span",[t._v(" Colab Notebook ")]),a("v-chip",{staticClass:"ml-auto",attrs:{color:"green darken-3","text-color":"white",active:Boolean(t.noteBookUrl),href:t.noteBookUrl}},[t._v(" Colab Notebook ")])],1),a("v-card-text",[a("p",[t._v(" Link to colab notebook that sets up SQL environment to analyse the data.")]),a("p",[t._v(" Instruction on use found inside notebook")]),a("p",[t._v(" You will need to copy the notebook to your own drive to start using.")])])],1)],1)],1)],1)],1),a("v-col",[a("v-row",[a("v-col",[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Field Detail ")]),a("v-row",{attrs:{dense:""}},t._l(t.fieldTypes,(function(e){return a("v-col",{key:e.object_type,attrs:{cols:"12"}},[a("v-card",{staticClass:"ml-2 mr-2",attrs:{elevation:"4"}},[a("v-card-title",{attrs:{id:"table-"+e.object_type}},[t._v(" "+t._s(e.object_type)+" ")]),a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Field ")]),a("th",{staticClass:"text-left"},[t._v(" Type ")]),a("th",{staticClass:"text-left"},[t._v(" OCDS Schema Type ")]),a("th",{staticClass:"text-left"},[t._v(" Field Usage Count ")]),a("th",{staticClass:"text-left"},[t._v(" Docs ")])])]),a("tbody",t._l(e.object_details,(function(r){return a("tr",{key:r.name},[a("td",[t._v(t._s(r.name))]),a("td",[t._v(t._s(r.type))]),a("td",[t._v(t._s(r.schema_type))]),a("td",[t._v(t._s(t.fieldInfo[e.object_type][r.name].count.toLocaleString()))]),a("td",[a("vue-markdown",{attrs:{source:t.replaceVersionLang(r.description)}})],1)])})),0)]},proxy:!0}],null,!0)})],1)],1)})),1)],1)],1)],1)],1)],1)],1):t._e()},W=[],Z=(a("7db0"),a("b0c0"),a("5319"),a("ac1f"),a("159b"),a("5d9b")),tt={props:["allData","name","originalData"],components:{VueMarkdown:Z["a"]},data:function(){return{fieldInfo:{empty:!0},fieldTypes:[],noteBookUrl:"",fetchInfoDialog:!1}},computed:{sourceData:function(){var t=this;return this.allData.find((function(e){return e.source===t.name}))},originalSourceData:function(){return this.originalData[this.name]}},created:function(){this.fetchFieldInfo(this.sourceData),this.fetchFieldTypes(this.sourceData),this.fetchNotebook(this.sourceData)},methods:{replaceVersionLang:function(t){return t=t.replace("{{lang}}","en"),t=t.replace("{{version}}","1.1"),t},fetchFieldInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e&&e["field_info-latest"]){t.next=3;break}return this.fieldInfo={empty:!0},t.abrupt("return");case 3:return t.next=5,c.a.get(e["field_info-latest"]);case 5:a=t.sent,r={},a.data.forEach((function(t){r[t.object_type]||(r[t.object_type]={}),r[t.object_type][t.key]=t})),this.fieldInfo=r;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchFieldTypes:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e&&e["field_types-latest"]){t.next=3;break}return this.fieldTypes=[],t.abrupt("return");case 3:return t.next=5,c.a.get(e["field_types-latest"]);case 5:a=t.sent,this.fieldTypes=a.data;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchNotebook:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,c.a.get(e.notebookIdFile);case 4:a=t.sent,a.data.id&&(this.noteBookUrl="https://colab.research.google.com/drive/"+a.data.id);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},watch:{sourceData:function(t){this.fetchFieldInfo(t),this.fetchFieldTypes(t),this.fetchNotebook(t)}}},et=tt,at=(a("b216"),a("169a")),rt=a("1f4f"),ot=Object(p["a"])(et,K,W,!1,null,null,null),st=ot.exports;_()(ot,{VBtn:g["a"],VCard:N["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VChip:R["a"],VCol:y["a"],VContainer:x["a"],VDialog:at["a"],VIcon:M["a"],VRow:k["a"],VSimpleTable:rt["a"],VTooltip:U["a"]}),r["a"].use(V["a"]);var nt=[{path:"/",name:"Home",component:z},{path:"/source/:name",name:"Source",component:st,props:!0},{path:"/about",name:"About",component:H}],lt=new V["a"]({routes:nt}),it=lt,ct=a("f309");r["a"].use(ct["a"]);var ut=new ct["a"]({}),dt=a("f13c"),ft=a.n(dt);r["a"].config.productionTip=!1,r["a"].use(ft.a),new r["a"]({router:it,vuetify:ut,render:function(t){return t(j)}}).$mount("#app")},"5ced":function(t,e,a){},"85ec":function(t,e,a){},b216:function(t,e,a){"use strict";a("3225")},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.7926ef68.js.map