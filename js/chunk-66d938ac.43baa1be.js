(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d938ac"],{"0bc6":function(t,e,a){},"169a":function(t,e,a){"use strict";a("7db0"),a("caad"),a("45fc"),a("a9e3"),a("2532"),a("498a");var i=a("5530"),s=a("2909"),n=a("ade3"),o=(a("368e"),a("480e")),c=a("4ad4"),l=a("b848"),r=a("75eb"),d=a("e707"),v=a("e4d3"),u=a("21be"),h=a("f2e7"),p=a("a293"),m=a("58df"),b=a("d9bd"),f=a("80d2"),y=Object(m["a"])(c["a"],l["a"],r["a"],d["a"],v["a"],u["a"],h["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:p["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(n["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(t,"v-dialog--active",this.isActive),Object(n["a"])(t,"v-dialog--persistent",this.persistent),Object(n["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(t,"v-dialog--scrollable",this.scrollable),Object(n["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===f["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(s["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(f["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1f4f":function(t,e,a){"use strict";a("a9e3");var i=a("5530"),s=(a("8b37"),a("80d2")),n=a("7560"),o=a("58df");e["a"]=Object(o["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2fa4":function(t,e,a){"use strict";a("20f6");var i=a("80d2");e["a"]=Object(i["g"])("spacer","div","v-spacer")},"368e":function(t,e,a){},"3c93":function(t,e,a){},"81ec":function(t,e,a){},"8b37":function(t,e,a){},e004:function(t,e,a){"use strict";a("81ec")},e0c7:function(t,e,a){"use strict";var i=a("5530"),s=(a("0bc6"),a("7560")),n=a("58df");e["a"]=Object(n["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(i["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},e2b7:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[a("v-row",[a("v-col",{staticStyle:{padding:"10px",background:"white",border:"1px solid #e7eaec !important"}},[a("div",{attrs:{id:"btn_group",app:""}},[a("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"#1c84c6",dark:""}},"v-btn",s,!1),i),[a("v-icon",[t._v("mdi-plus")]),a("h4",{staticClass:"d-none d-md-block"},[t._v("Добавить")]),a("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[a("v-list",{staticStyle:{padding:"0px"}},[a("v-list-item",[a("v-list-item-title",[a("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),a("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"#1c84c6",dark:""}},"v-btn",s,!1),i),[a("v-icon",[t._v("mdi-pencil")]),a("h4",{staticClass:"d-none d-md-block"},[t._v("Править")]),a("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[a("v-list",{staticStyle:{padding:"0px"}},[a("v-list-item",[a("v-list-item-title",[a("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),a("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"#c2c2c2",dark:""}},"v-btn",s,!1),i),[a("v-icon",[t._v("mdi-more")]),a("h4",{staticClass:"d-none d-md-block"},[t._v("Другое")]),a("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[a("v-list",{staticStyle:{padding:"0px"}},[a("v-list-item",[a("v-list-item-title",[a("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticStyle:{float:"right !important"},attrs:{color:"#1ab394",dark:""}},"v-btn",s,!1),i),[a("v-icon",[t._v("mdi-filter")]),a("h4",{staticClass:"d-none d-md-block"},[t._v("Фильтр")])],1)]}}]),model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Фильтрация данных "),a("v-icon",{staticStyle:{"font-size":"25px"},on:{click:function(e){t.dialog1=!1}}},[t._v("mdi-backspace-outline")])],1)]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Текстовый фильтр ")])],1),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("input",{attrs:{type:"text",id:"text",placeholder:"По клиенту, группе, предмету или педагогу"}})]),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Статус ")])],1),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" запланирован ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" проведён ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" отменён ")])]),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Тип урока ")])],1),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" Групповой ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" Индивидуальный ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" Пробный ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"4",checked:""}}),t._v(" Отработка ")])]),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Аудитории ")])],1),a("v-col",{staticClass:"col-sm-6 d-flex flex-column",attrs:{cols:"12"}},[a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:"",onchange:"$('input.loc-1').prop('checked', $(this).is(':checked'));"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"2",checked:"","data-type":"room"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"3",checked:"","data-type":"room"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"4",checked:"","data-type":"room"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"2",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"3",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"4",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"mt-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"5",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1)])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticStyle:{background:"white"},attrs:{id:"close",text:""},on:{click:function(e){t.dialog1=!1}}},[t._v(" Отмена ")]),a("v-btn",{attrs:{id:"save",text:""},on:{click:function(e){t.dialog1=!1}}},[a("v-icon",[t._v("mdi-save")]),t._v(" Сохранить ")],1)],1)],1)],1)],1)]),a("v-col",{staticStyle:{"padding-bottom":"0px","padding-left":"0px"},attrs:{cols:"12"}},[a("div",[a("ul",{staticClass:"column-none  flex-xs-column-block"},[a("li",{staticClass:"active"},[a("router-link",{attrs:{to:"#"}},[t._v(" Текущие ")])],1),a("li",[a("router-link",{attrs:{to:"/tariff-archive"}},[t._v(" Архивные ")])],1)])])]),a("v-col",{staticStyle:{"padding-top":"0px"}},[a("v-row",[a("v-col",{staticStyle:{background:"white"},attrs:{cols:"12"}},[a("span",{attrs:{id:"data"}},[t._v(" Отображены строки "),a("b",[t._v("1 — 20")]),t._v(" . Всего в базе "),a("b",[t._v("516")]),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({},"v-btn",s,!1),i),[a("span",[t._v("Настройка полей")])])]}}]),model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Фильтрация данных "),a("v-icon",{staticStyle:{"font-size":"25px"},on:{click:function(e){t.dialog2=!1}}},[t._v("mdi-backspace-outline")])],1)]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Текстовый фильтр ")])],1),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("input",{attrs:{type:"text",id:"text",placeholder:"По клиенту, группе, предмету или педагогу"}})]),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Статус ")])],1),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" запланирован ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" проведён ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" отменён ")])]),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Тип урока ")])],1),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:""}}),t._v(" Групповой ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"2",checked:""}}),t._v(" Индивидуальный ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"3",checked:""}}),t._v(" Пробный ")]),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"4",checked:""}}),t._v(" Отработка ")])]),a("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[a("v-subheader",[t._v(" Аудитории ")])],1),a("v-col",{staticClass:"col-sm-6 d-flex flex-column",attrs:{cols:"12"}},[a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:"",onchange:"$('input.loc-1').prop('checked', $(this).is(':checked'));"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"2",checked:"","data-type":"room"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"3",checked:"","data-type":"room"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{staticClass:"loc-1",attrs:{type:"checkbox",value:"4",checked:"","data-type":"room"}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"1",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"2",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"3",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"ml-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"4",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1),a("label",{staticClass:"mt-2",attrs:{title:"Отображать запланированные"}},[a("input",{attrs:{type:"checkbox",value:"5",checked:""}}),a("v-icon",[t._v("mdi-location")]),t._v(" Китай-город ")],1)])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticStyle:{background:"white"},attrs:{id:"close",text:""},on:{click:function(e){t.dialog2=!1}}},[t._v(" Отмена ")]),a("v-btn",{attrs:{id:"save",text:""},on:{click:function(e){t.dialog2=!1}}},[a("v-icon",[t._v("mdi-save")]),t._v(" Сохранить ")],1)],1)],1)],1),t._v(" Пагинация "),a("v-menu",{attrs:{bottom:"","offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticStyle:{background:"transparent"}},"v-btn",s,!1),i),[a("span",[t._v("20 строк")])])]}}])},[a("v-list",{staticStyle:{padding:"0px"}},[a("v-list-item",[a("v-list-item-title",[a("v-icon",[t._v("mdi-history")]),t._v(" История изменений ")],1)],1)],1)],1)],1)]),a("v-simple-table",[a("thead",[a("tr",[a("th",[a("input",{attrs:{type:"checkbox"}})]),a("th",[t._v(" Название ")]),a("th",[t._v(" Тарификация ")]),a("th",[t._v(" Стоимость ")]),a("th",[t._v(" Используется ")]),a("th",[t._v(" Добавлен ")])])]),a("tbody",[a("tr",[a("td",[a("input",{attrs:{type:"checkbox"}})]),a("td",[a("span",[t._v("Первый план (3 000,00 за 8 шт)")])]),a("td",[a("span",[t._v("Поурочный")])]),a("td",[a("span",[t._v("40000")])]),a("td",[a("span",{staticStyle:{color:"#226895"}},[t._v("163")]),t._v(" - "),a("span",{staticStyle:{color:"#23c6c8"}},[t._v("163")]),t._v(" , "),a("span",{staticStyle:{"text-decoration":"line-through"}},[t._v("0")])]),a("td",[a("span",[a("v-icon",{attrs:{size:"14"}},[t._v(" mdi-clock ")]),t._v(" 12:34 ")],1),a("br"),a("span",[a("v-icon",{attrs:{size:"14"}},[t._v(" mdi-calendar ")]),t._v(" 16.12.2020 ")],1)]),a("td",[a("v-icon",{attrs:{size:"19",color:"#ed5565"}},[t._v(" mdi-trash-can-outline ")])],1)]),a("tr",[a("td",[t._v("2")]),a("td",[t._v("Minverva Hooper")]),a("td",[t._v("Curaçao")]),a("td",[t._v("Sinaas-Waas")]),a("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),a("tr",[a("td",[t._v("3")]),a("td",[t._v("Sage Rodriguez")]),a("td",[t._v("Netherlands")]),a("td",[t._v("Baileux")]),a("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),a("tr",[a("td",[t._v("4")]),a("td",[t._v("Philip Chaney")]),a("td",[t._v("Korea, South")]),a("td",[t._v("Overland Park")]),a("td",[t._v(" $38,735 ")])]),a("tr",[a("td",[t._v("5")]),a("td",[t._v("Doris Greene")]),a("td",[t._v("Malawi")]),a("td",[t._v("Feldkirchen in Kärnten")]),a("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),a("tr",[a("td",[t._v("6")]),a("td",[t._v("Mason Porter")]),a("td",[t._v("Chile")]),a("td",[t._v("Gloucester")]),a("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1)],1)],1)],1)},s=[],n={data:function(){return{page:1,dialog:!1,dialog1:!1,dialog2:!1,e1:"Florida",e2:"Texas",e3:null,e4:null,items:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}],states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho"]}}},o=n,c=(a("e004"),a("2877")),l=a("6544"),r=a.n(l),d=a("8336"),v=a("b0af"),u=a("99d9"),h=a("62ad"),p=a("a523"),m=a("169a"),b=a("132d"),f=a("8860"),y=a("da13"),_=a("5d23"),k=a("e449"),g=a("0fd9"),x=a("1f4f"),C=a("2fa4"),w=a("e0c7"),S=Object(c["a"])(o,i,s,!1,null,"642c4eb8",null);e["default"]=S.exports;r()(S,{VBtn:d["a"],VCard:v["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:h["a"],VContainer:p["a"],VDialog:m["a"],VIcon:b["a"],VList:f["a"],VListItem:y["a"],VListItemTitle:_["c"],VMenu:k["a"],VRow:g["a"],VSimpleTable:x["a"],VSpacer:C["a"],VSubheader:w["a"]})},e707:function(t,e,a){"use strict";a("caad"),a("a9e3"),a("2532");var i=a("5530"),s=(a("3c93"),a("a9ad")),n=a("7560"),o=a("f2e7"),c=a("58df"),l=Object(c["a"])(s["a"],n["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),r=l,d=a("80d2"),v=a("2b0e");e["a"]=v["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new r({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(d["p"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(d["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[d["r"].up,d["r"].pageup],a=[d["r"].down,d["r"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!a.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),a=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,s=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(s,i))||this.shouldScroll(i,a)}for(var n=0;n<e.length;n++){var o=e[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,a)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],a=t.target;while(a){if(e.push(a),"HTML"===a.tagName)return e.push(document),e.push(window),e;a=a.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(d["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-66d938ac.43baa1be.js.map