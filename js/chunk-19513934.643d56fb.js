(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19513934"],{"01c7":function(t,a,s){},"0df3":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{attrs:{id:"user-profile",fluid:"",tag:"section"}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticStyle:{padding:"10px",background:"white",border:"1px solid #e7eaec !important"}},[s("div",{attrs:{id:"btn_group",app:""}},[s("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"#1c84c6",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-plus")]),s("h4",{staticClass:"d-none d-md-block"},[t._v("Добавить")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"d-flex"},[s("span",{staticClass:"headline"},[t._v("Добавить элемент рабочего стола")]),s("v-icon",{staticStyle:{"font-size":"25px"},on:{click:function(a){t.dialog=!1}}},[t._v("mdi-backspace-outline")])],1),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Расположение ")])],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":"",border:"none"},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Виджет ")])],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-select",{attrs:{items:t.states,"menu-props":"auto","hide-details":"",label:"Select","single-line":""},model:{value:t.e2,callback:function(a){t.e2=a},expression:"e2"}})],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Переименовать ")])],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Ширина и высота ")])],1),s("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[s("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1),s("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[s("v-select",{attrs:{items:t.states,"menu-props":"auto",label:"Select","hide-details":"","single-line":""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticStyle:{background:"white"},attrs:{id:"close"},on:{click:function(a){t.dialog=!1}}},[t._v(" Отмена ")]),s("v-btn",{attrs:{id:"save"},on:{click:function(a){t.dialog=!1}}},[s("v-icon",[t._v("mdi-save")]),t._v(" Сохранить ")],1)],1)],1)],1),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"#1c84c6",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-pencil")]),s("h4",{staticClass:"d-none d-md-block"},[t._v("Править")]),s("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"#1dc5a3",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-send-outline")]),s("h4",{staticClass:"d-none d-md-block"},[t._v("Рассылка")]),s("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"#23c6c8",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-printer")]),s("h4",{staticClass:"d-none d-md-block"},[t._v("Отчеты")]),s("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"#c2c2c2",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-more")]),s("h4",{staticClass:"d-none d-md-block"},[t._v("Другое")]),s("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({staticStyle:{float:"right"},attrs:{color:"#1ab394",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),s("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({staticStyle:{float:"right !important"},attrs:{color:"#1ab394",dark:""}},"v-btn",e,!1),i),[s("v-icon",[t._v("mdi-filter")]),s("h4",{staticClass:"d-none d-md-block"},[t._v("Фильтр")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("Фильтрация данных "),s("v-icon",{staticStyle:{"font-size":"25px"},on:{click:function(a){t.dialog=!1}}},[t._v("mdi-backspace-outline")])],1)]),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Текстовый фильтр ")])],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("input",{attrs:{type:"text",id:"text",placeholder:"По клиенту, группе, предмету или педагогу"}})]),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Статус ")])],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" запланирован ")]),s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" проведён ")]),s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" отменён ")])]),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Тип урока ")])],1),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" Групповой ")]),s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" Индивидуальный ")]),s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" Пробный ")]),s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"4",checked:""}}),t._v(" Отработка ")])]),s("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[s("v-subheader",[t._v(" Аудитории ")])],1),s("v-col",{staticClass:"col-sm-6 d-flex flex-column",attrs:{cols:"12"}},[s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"1",checked:"",onchange:"$('input.loc-1').prop('checked', $(this).is(':checked'));"}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[s("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"2",checked:"","data-type":"room"}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[s("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"3",checked:"","data-type":"room"}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[s("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"4",checked:"","data-type":"room"}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"1",checked:""}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"2",checked:""}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"3",checked:""}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"4",checked:""}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),s("label",{staticClass:"mt-2",attrs:{title:"Отображать запланированные"}},[s("input",{attrs:{type:"checkbox",value:"5",checked:""}}),s("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1)])],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticStyle:{background:"white"},attrs:{id:"close",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Отмена ")]),s("v-btn",{attrs:{id:"save",text:""},on:{click:function(a){t.dialog=!1}}},[s("v-icon",[t._v("mdi-save")]),t._v(" Сохранить ")],1)],1)],1)],1)],1)]),s("v-col",{staticStyle:{"padding-bottom":"0px","padding-left":"0px"},attrs:{cols:"12"}},[s("ul",[s("li",[s("router-link",{attrs:{to:"/components/leads"}},[t._v(" Текущие ")])],1),s("li",{staticClass:"active"},[s("router-link",{attrs:{to:"#"}},[t._v(" Я — ответственный ")])],1),s("li",[s("router-link",{attrs:{to:"/lead-archive"}},[t._v(" Архив (отказы) ")])],1)])]),s("v-col",{staticStyle:{background:"white","padding-top":"0px","margin-left":"1px"},attrs:{cols:"12"}},[s("v-row",{staticStyle:{padding:"15px"},attrs:{id:"cards"}},[s("v-col",{attrs:{cols:"12"}},[s("div",{attrs:{id:"data"}},[t._v(" Отображено 5 этапов. "),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({},"v-btn",e,!1),i),[s("span",[t._v("Настройка полей")])])]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),t._v(" . Сортировка "),s("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,e=a.attrs;return[s("v-btn",t._g(t._b({},"v-btn",e,!1),i),[s("span",[t._v("Вручную")])])]}}])},[s("v-list",{staticStyle:{padding:"0px"}},[s("v-list-item",[s("v-list-item-title",[s("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1)],1)]),s("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[s("h3",{staticStyle:{width:"95%",color:"#6a6a6a"}},[s("strong",{staticStyle:{float:"right"}},[s("input",{attrs:{type:"checkbox"}})]),s("span",[t._v(" Не разобрано ")]),s("span",{staticStyle:{opacity:"0.7"}},[t._v(" 19 ")])]),s("v-card",{staticStyle:{"border-left-width":"4px !important","border-color":"#1a7bb9"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#6a6a6a !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#9acfea"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#c26629 !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1)],1),s("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[s("h3",{staticStyle:{width:"95%",color:"#c26629"}},[s("strong",{staticStyle:{float:"right"}},[s("input",{attrs:{type:"checkbox"}})]),s("span",[t._v(" Установлен контакт ")]),s("span",{staticStyle:{opacity:"0.7"}},[t._v(" 4 ")])]),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#9acfea"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#c26629 !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#ffff00"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#c26629 !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1)],1),s("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[s("h3",{staticStyle:{width:"95%",color:"#1a7bb9"}},[s("strong",{staticStyle:{float:"right"}},[s("input",{attrs:{type:"checkbox"}})]),s("span",[t._v(" Назначено пробное ")]),s("span",{staticStyle:{opacity:"0.7"}},[t._v(" 11 ")])]),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#3C578C"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#1a7bb9 !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#1a7bb9"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#1a7bb9 !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1)],1),s("v-col",{staticClass:"col-sm-3",attrs:{cols:"12"}},[s("h3",{staticStyle:{width:"95%",color:"#3C578C"}},[s("strong",{staticStyle:{float:"right"}},[s("input",{attrs:{type:"checkbox"}})]),s("span",[t._v(" Проведено пробное ")]),s("span",{staticStyle:{opacity:"0.7"}},[t._v(" 7 ")])]),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#00aa00"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#3C578C !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1),s("v-card",{staticStyle:{"border-left-width":"4px","border-color":"#ea394c"},attrs:{width:"95%"}},[s("v-card-text",{staticStyle:{padding:"5px"}},[s("p",{staticStyle:{color:"#6a6a6a","font-size":"12px"}},[s("span",{staticStyle:{float:"right"}},[t._v("23:31")]),s("router-link",{staticStyle:{color:"#3C578C !important"},attrs:{to:"#"}},[t._v(" Миронова Диана ")])],1),s("label",{attrs:{for:"selection_1"}},[s("small",{staticClass:"task-text"},[s("v-icon",[t._v(" mdi-crosshairs ")]),t._v(" Рекомендация "),s("br"),t._v(" Английский язык - Профессиональный "),s("br"),t._v(" Екатерина Орлова ")],1)]),s("div",{staticStyle:{"margin-top":"5px"}},[s("small",[s("v-icon",[t._v(" mdi-wechat ")]),t._v(" 2 "),s("input",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"checkbox",value:"1",id:"selection_1"}})],1)])])],1)],1)],1)],1)],1)],1)},e=[],l={data:function(){return{dialog:!1,dialog1:!1,dialog2:!1,dialog3:!1,e1:"Florida",e2:"Texas",e3:null,e4:null,items:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}],states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho"]}}},c=l,o=(s("24d5"),s("2877")),r=s("6544"),n=s.n(r),v=s("8336"),d=s("b0af"),p=s("99d9"),_=s("62ad"),m=s("a523"),b=s("169a"),u=s("132d"),h=s("8860"),y=s("da13"),x=s("5d23"),f=s("e449"),k=s("0fd9"),S=s("b974"),g=s("2fa4"),C=s("e0c7"),w=Object(o["a"])(c,i,e,!1,null,"13962644",null);a["default"]=w.exports;n()(w,{VBtn:v["a"],VCard:d["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:_["a"],VContainer:m["a"],VDialog:b["a"],VIcon:u["a"],VList:h["a"],VListItem:y["a"],VListItemTitle:x["c"],VMenu:f["a"],VRow:k["a"],VSelect:S["a"],VSpacer:g["a"],VSubheader:C["a"]})},"24d5":function(t,a,s){"use strict";s("01c7")}}]);
//# sourceMappingURL=chunk-19513934.643d56fb.js.map