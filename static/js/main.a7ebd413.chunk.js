(this.webpackJsonpjetstyle=this.webpackJsonpjetstyle||[]).push([[0],{20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),s=a.n(r),l=(a(20),a(14)),i=a(5),o=a(31),j=[{name:"\u0418\u043b\u043e\u043d \u041c\u0430\u0441\u043a: \u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0441\u0434\u0430\u043c\u0441\u044f",author:"\u0421\u043e\u0441\u0442. \u0410\u0445\u043c\u0435\u0442\u043e\u0432 \u041a.",id:Object(o.a)()},{name:"Apple. \u041a\u0430\u043a \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c $1 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d \u0434\u043e\u043b\u043b\u0430\u0440\u043e\u0432",author:"\u041a\u0430\u043c\u043c\u0438\u043d\u0433\u0441 \u0414\u0436\u0443\u0434\u0438 \u0414\u043e\u043d\u0436",id:Object(o.a)()},{name:"\u041a\u0430\u043a Coca-Cola \u0437\u0430\u0432\u043e\u0435\u0432\u0430\u043b\u0430 \u043c\u0438\u0440. 101 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u043a\u0435\u0439\u0441 \u043e\u0442 \u0431\u0440\u0435\u043d\u0434\u043e\u0432 \u0441 \u043c\u0438\u0440\u043e\u0432\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c ",author:"\u041b\u044c\u044e\u0440\u0438 \u0414\u0436\u0430\u0439\u043b\u0441",id:Object(o.a)()},{name:"Burger King. \u041a\u0430\u043a \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438\u043c\u043f\u0435\u0440\u0438\u044e",author:"\u041c\u0430\u043a\u041b\u0430\u043c\u043e\u0440 \u0414\u0436\u0438\u043c",id:Object(o.a)()}],b=a(1),u=function(e){var t=e.list,a=e.onDelete;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("section",{className:"books books--wrapper",children:t.map((function(e,t){return Object(b.jsxs)("div",{className:"inner books__inner",children:[Object(b.jsxs)("ul",{className:"list inner__list",children:[Object(b.jsxs)("li",{className:"list__item",children:[Object(b.jsx)("b",{children:"\u041a\u043d\u0438\u0433\u0430 \u2116:"})," ",t+1]}),Object(b.jsxs)("li",{className:"list__item",children:[Object(b.jsx)("b",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("br",{})," ",e.name]}),Object(b.jsxs)("li",{className:"list__item",children:[Object(b.jsx)("b",{children:"\u0410\u0432\u0442\u043e\u0440"}),Object(b.jsx)("br",{})," ",e.author]})]}),Object(b.jsx)("div",{className:"button inner__buttons",children:Object(b.jsx)("button",{className:"button__delete",onClick:function(){return a(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e.id)}))})})},m=function(e){var t=e.onAdd,a=e.setName,n=e.setAuthor,r=e.name,s=e.author,l=e.enabled;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("section",{className:"adding adding--wrapper",children:Object(b.jsxs)("form",{className:"form adding__form",onSubmit:t,children:[Object(b.jsx)("img",{className:"form__image",src:"https://source.unsplash.com/1600x900/?reading",alt:"iamge"}),Object(b.jsx)("label",{className:"form__label",for:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),Object(b.jsx)("input",{value:r,onChange:function(e){return a(e.target.value)},className:"form__name",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",type:"text"}),Object(b.jsx)("label",{className:"form__label",for:"name",children:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438"}),Object(b.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},className:"form__name",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0430 \u043a\u043d\u0438\u0433\u0438",type:"text"}),Object(b.jsx)("button",{className:"form__button",disabled:!l,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"})]})})})},d=function(e){var t=e.search,a=e.setSearch;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("section",{className:"search search--wrapper",children:Object(b.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},type:"text",className:"search__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 ..."})})})},h=function(){var e=Object(n.useState)(j),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),h=Object(i.a)(s,2),O=h[0],x=h[1],f=Object(n.useState)(""),_=Object(i.a)(f,2),p=_[0],g=_[1],N=Object(n.useState)(""),v=Object(i.a)(N,2),w=v[0],C=v[1],S=(a.length,O.length>0&&p.length>0),k=a.filter((function(e){return e.name.toLocaleLowerCase().includes(w.toLocaleLowerCase())}));return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(m,{onAdd:function(e){e.preventDefault(),r((function(e){return[].concat(Object(l.a)(e),[{name:O,author:p,id:Object(o.a)()}])})),alert("\u041a\u043d\u0438\u0433\u0430 ".concat(O," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430!")),x(""),g("")},name:O,author:p,setName:x,setAuthor:g,enabled:S}),Object(b.jsx)(d,{search:w,setSearch:C}),Object(b.jsx)(u,{list:k,onDelete:function(e){if(window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443, \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f: ".concat(e," ?"))){var t=a.filter((function(t){return t.id!==e}));r(t),alert("\u041a\u043d\u0438\u0433\u0430, \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f: ".concat(e," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430!"))}}})]})};var O=function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(h,{})})},x=a(13);s.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a7ebd413.chunk.js.map