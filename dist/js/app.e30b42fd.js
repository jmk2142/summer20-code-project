(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("Sidebar")],1),a("v-col",{attrs:{cols:"9"}},[a("v-content",[a("router-view")],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-navigation-drawer",{attrs:{color:t.color,src:t.bg,absolute:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{class:t.miniVariant&&"px-0",attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/20229052_1817578591886902_8010008018031528472_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_oc=AQlqBt2YrrFsE7IDPChctHBLAxJ23YhxNdZh8Ii3xziHuz0hQSiUZn0hdLAlhkEmbB8&_nc_ht=scontent-ort2-1.xx&oh=00f26d089c067708aa1fb29fb4525826&oe=5F311BAC"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("User Profile")]),a("v-list-item-subtitle",[t._v("Yanning")])],1)],1),a("v-divider"),t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{"router-link":"",to:e.route}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2),a("v-btn",[a("span",[t._v("sign out")])])],1)],1)},s=[],l={data:function(){return{drawer:!0,items:[{title:"Task-Sets",icon:"mdi-view-dashboard",route:"/Tasksets"},{title:"Photos",icon:"mdi-image",route:"/Photos"},{title:"About",icon:"mdi-help-box",route:"/About"}],color:"primary",colors:["primary","blue","success","red","teal"]}},computed:{bg:function(){return this.background?"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg":void 0}}},c=l,u=a("2877"),d=a("6544"),v=a.n(d),f=a("8336"),p=a("a523"),m=a("ce7e"),b=a("132d"),h=a("8860"),_=a("da13"),x=a("8270"),g=a("5d23"),w=a("34c3"),k=a("f774"),V=Object(u["a"])(c,i,s,!1,null,"36563101",null),y=V.exports;v()(V,{VBtn:f["a"],VContainer:p["a"],VDivider:m["a"],VIcon:b["a"],VList:h["a"],VListItem:_["a"],VListItemAvatar:x["a"],VListItemContent:g["a"],VListItemIcon:w["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:k["a"]});var C={name:"App",components:{Sidebar:y},data:function(){return{}}},j=C,O=a("7496"),S=a("62ad"),D=a("a75b"),P=a("0fd9"),A=Object(u["a"])(j,r,o,!1,null,null,null),I=A.exports;v()(A,{VApp:O["a"],VCol:S["a"],VContent:D["a"],VRow:P["a"]});var T,F,L=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"start"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",r,!1),n),[t._v(" + Create ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Create A Task")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Task Name*",required:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Details*",required:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-menu",{ref:"menu1",attrs:{transition:"scale-transition","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Due Date*",hint:"MM/DD/YYYY format","persistent-hint":""},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Create")])],1)],1)],1),t._l(t.tasks,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.name)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.details)}})],1)])])],1)}))],2)},Y=[],B=(a("99af"),a("ac1f"),a("4d90"),a("1276"),a("3835")),E={data:function(t){return{tasks:[{name:"Cleaning the Kitchen",details:"Wash dishes, clean the fridge...",due:"2020-7-20"}],date:(new Date).toISOString().substr(0,10),dateFormatted:t.formatDate((new Date).toISOString().substr(0,10)),menu1:!1,dialog:!1}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(){this.dateFormatted=this.formatDate(this.date)}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(B["a"])(e,3),n=a[0],r=a[1],o=a[2];return"".concat(r,"/").concat(o,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(B["a"])(e,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"-").concat(n.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}},q=E,$=a("b0af"),J=a("99d9"),N=a("2e4b"),z=a("169a"),H=a("e449"),Q=a("2fa4"),R=a("8654"),U=Object(u["a"])(q,M,Y,!1,null,null,null),Z=U.exports;v()(U,{VBtn:f["a"],VCard:$["a"],VCardActions:J["a"],VCardSubtitle:J["b"],VCardText:J["c"],VCardTitle:J["d"],VCol:S["a"],VContainer:p["a"],VDatePicker:N["a"],VDialog:z["a"],VMenu:H["a"],VRow:P["a"],VSpacer:Q["a"],VTextField:R["a"]});var K,W,G={},X=Object(u["a"])(G,T,F,!1,null,null,null),tt=X.exports,et={},at=Object(u["a"])(et,K,W,!1,null,null,null),nt=at.exports;n["a"].use(L["a"]);var rt=[{path:"/tasksets",name:"Tasksets",component:Z},{path:"/photos",name:"Photos",component:tt},{path:"/about",name:"About",component:nt}],ot=new L["a"]({mode:"history",base:"/",routes:rt}),it=ot,st=a("f309");n["a"].use(st["a"]);var lt=new st["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:it,vuetify:lt,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.e30b42fd.js.map