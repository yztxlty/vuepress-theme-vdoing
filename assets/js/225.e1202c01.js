(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{799:function(e,t,a){"use strict";a.r(t);var r=a(36),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue父子组件的生命周期顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue父子组件的生命周期顺序"}},[e._v("#")]),e._v(" vue父子组件的生命周期顺序")]),e._v(" "),a("h3",{attrs:{id:"加载渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载渲染过程"}},[e._v("#")]),e._v(" 加载渲染过程")]),e._v(" "),a("div",{staticClass:"language-repl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("父beforeCreate -> 父created-> 父beforeMount-> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted\n")])])]),a("p",[e._v("父组件会先执行到beforeMount，接着会执行子组件钩子到挂载结束，再挂载父组件。")]),e._v(" "),a("h3",{attrs:{id:"子组件更新过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件更新过程"}},[e._v("#")]),e._v(" 子组件更新过程")]),e._v(" "),a("div",{staticClass:"language-repl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated\n")])])]),a("h3",{attrs:{id:"父组件更新过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件更新过程"}},[e._v("#")]),e._v(" 父组件更新过程")]),e._v(" "),a("div",{staticClass:"language-repl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("父beforeUpdate -> 父updated\n")])])]),a("h3",{attrs:{id:"销毁过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁过程"}},[e._v("#")]),e._v(" 销毁过程")]),e._v(" "),a("div",{staticClass:"language-repl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);