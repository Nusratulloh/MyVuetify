(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154fe815"],{"190d":function(t,a,e){},"1f4f":function(t,a,e){"use strict";e("a9e3");var s=e("5530"),i=(e("8b37"),e("80d2")),l=e("7560"),c=e("58df");a["a"]=Object(c["a"])(l["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"5bc1":function(t,a,e){"use strict";e("498a");var s=e("5530"),i=e("9d26"),l=e("8336"),c=e("2b0e");a["a"]=c["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,a){var e=a.slots,c=a.listeners,o=a.props,n=a.data,r=Object.assign(n,{staticClass:"v-app-bar__nav-icon ".concat(n.staticClass||"").trim(),props:Object(s["a"])(Object(s["a"])({},o),{},{icon:!0}),on:c}),v=e().default;return t(l["a"],r,v||[t(i["a"],"$menu")])}})},"8b37":function(t,a,e){},a3db:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"user-profile",fluid:"",tag:"section"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{staticStyle:{padding:"10px",background:"white",border:"1px solid #e7eaec !important"}},[e("div",{attrs:{id:"btn_group",app:""}},[e("v-app-bar-nav-icon",{staticClass:"icon",staticStyle:{color:"black !important"},attrs:{to:"/components/leads"}}),e("v-app-bar-nav-icon",{staticClass:"icon active2",staticStyle:{color:"black !important"},attrs:{to:"#"}}),e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"#1c84c6",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-plus")]),e("h4",{staticClass:"d-none d-md-block"},[t._v("Добавить")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"d-flex"},[e("span",{staticClass:"headline"},[t._v("Добавить элемент рабочего стола")]),e("v-icon",{staticStyle:{"font-size":"25px"},on:{click:function(a){t.dialog=!1}}},[t._v("mdi-backspace-outline")])],1),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Расположение ")])],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":"",border:"none"},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Виджет ")])],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-select",{attrs:{items:t.states,"menu-props":"auto","hide-details":"",label:"Select","single-line":""},model:{value:t.e2,callback:function(a){t.e2=a},expression:"e2"}})],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Переименовать ")])],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Ширина и высота ")])],1),e("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[e("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1),e("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[e("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticStyle:{background:"white"},attrs:{id:"close"},on:{click:function(a){t.dialog=!1}}},[t._v(" Отмена ")]),e("v-btn",{attrs:{id:"save"},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-save")]),t._v(" Сохранить ")],1)],1)],1)],1),e("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"#1c84c6",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-pencil")]),e("h4",{staticClass:"d-none d-md-block"},[t._v("Править")]),e("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[e("v-list",{staticStyle:{padding:"0px"}},[e("v-list-item",[e("v-list-item-title",[e("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),e("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"#1dc5a3",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-send-outline")]),e("h4",{staticClass:"d-none d-md-block"},[t._v("Рассылка")]),e("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[e("v-list",{staticStyle:{padding:"0px"}},[e("v-list-item",[e("v-list-item-title",[e("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),e("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"#23c6c8",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-printer")]),e("h4",{staticClass:"d-none d-md-block"},[t._v("Отчеты")]),e("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[e("v-list",{staticStyle:{padding:"0px"}},[e("v-list-item",[e("v-list-item-title",[e("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),e("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"#c2c2c2",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-more")]),e("h4",{staticClass:"d-none d-md-block"},[t._v("Другое")]),e("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[e("v-list",{staticStyle:{padding:"0px"}},[e("v-list-item",[e("v-list-item-title",[e("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),e("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticStyle:{float:"right"},attrs:{color:"#1ab394",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[e("v-list",{staticStyle:{padding:"0px"}},[e("v-list-item",[e("v-list-item-title",[e("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticStyle:{float:"right !important"},attrs:{color:"#1ab394",dark:""}},"v-btn",i,!1),s),[e("v-icon",[t._v("mdi-filter")]),e("h4",{staticClass:"d-none d-md-block"},[t._v("Фильтр")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Фильтрация данных "),e("v-icon",{staticStyle:{"font-size":"25px"},on:{click:function(a){t.dialog=!1}}},[t._v("mdi-backspace-outline")])],1)]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Текстовый фильтр ")])],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("input",{attrs:{type:"text",id:"text",placeholder:"По клиенту, группе, предмету или педагогу"}})]),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Статус ")])],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" запланирован ")]),e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" проведён ")]),e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" отменён ")])]),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Тип урока ")])],1),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" Групповой ")]),e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" Индивидуальный ")]),e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" Пробный ")]),e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"4",checked:""}}),t._v(" Отработка ")])]),e("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[e("v-subheader",[t._v(" Аудитории ")])],1),e("v-col",{staticClass:"col-sm-6 d-flex flex-column",attrs:{cols:"12"}},[e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"1",checked:"",onchange:"$('input.loc-1').prop('checked', $(this).is(':checked'));"}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[e("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"2",checked:"","data-type":"room"}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[e("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"3",checked:"","data-type":"room"}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[e("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"4",checked:"","data-type":"room"}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"1",checked:""}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"2",checked:""}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"3",checked:""}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"4",checked:""}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),e("label",{staticClass:"mt-2",attrs:{title:"Отображать запланированные"}},[e("input",{attrs:{type:"checkbox",value:"5",checked:""}}),e("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1)])],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticStyle:{background:"white"},attrs:{id:"close",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Отмена ")]),e("v-btn",{attrs:{id:"save",text:""},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-save")]),t._v(" Сохранить ")],1)],1)],1)],1)],1)]),e("v-col",{staticStyle:{"padding-bottom":"0px","padding-left":"0px"},attrs:{cols:"12"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"/lead-mode"}},[t._v(" Текущие ")])],1),e("li",[e("router-link",{attrs:{to:"/mode-assign"}},[t._v(" Я — ответственный ")])],1),e("li",{staticClass:"active"},[e("router-link",{attrs:{to:"#"}},[t._v(" Архив (отказы) ")])],1)])]),e("v-col",{staticStyle:{background:"white","padding-top":"0px","margin-left":"1px"},attrs:{cols:"12"}},[e("v-row",{staticStyle:{padding:"15px"},attrs:{id:"cards"}},[e("v-col",{attrs:{cols:"12"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",[e("input",{attrs:{type:"checkbox"}})]),e("th",[t._v(" Добавлен ")]),e("th",[t._v(" ФИО ")]),e("th",[t._v(" Ответственный ")]),e("th",[t._v(" Коммуникации ")]),e("th",[t._v(" Следующий контакт ")]),e("th",[t._v(" Этап воронки ")]),e("th"),e("th")])]),e("tbody",[e("tr",[e("td",[e("span",[t._v("Ничего не найдено.")])])])])])],1)],1)],1)],1)],1)},i=[],l={data:function(){return{page2:1,page1:1,dialog:!1,dialog1:!1,dialog2:!1,dialog3:!1,e1:"Florida",e2:"Texas",e3:null,e4:null,items:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}],states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho"]}}},c=l,o=(e("d6e5"),e("2877")),n=e("6544"),r=e.n(n),v=e("5bc1"),d=e("8336"),u=e("b0af"),p=e("99d9"),b=e("62ad"),m=e("a523"),h=e("169a"),_=e("132d"),f=e("8860"),k=e("da13"),x=e("5d23"),g=e("e449"),y=e("0fd9"),C=e("b974"),S=e("1f4f"),w=e("2fa4"),V=e("e0c7"),$=Object(o["a"])(c,s,i,!1,null,"7a0a691c",null);a["default"]=$.exports;r()($,{VAppBarNavIcon:v["a"],VBtn:d["a"],VCard:u["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:b["a"],VContainer:m["a"],VDialog:h["a"],VIcon:_["a"],VList:f["a"],VListItem:k["a"],VListItemTitle:x["c"],VMenu:g["a"],VRow:y["a"],VSelect:C["a"],VSimpleTable:S["a"],VSpacer:w["a"],VSubheader:V["a"]})},d6e5:function(t,a,e){"use strict";e("190d")}}]);
//# sourceMappingURL=chunk-154fe815.69bacd7b.js.map