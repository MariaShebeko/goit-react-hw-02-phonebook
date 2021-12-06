(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={inputWrapper:"ContactForm_inputWrapper__S5dnu",input:"ContactForm_input__2QNgo",label:"ContactForm_label__1MU_T",button:"ContactForm_button__1M5Di",iconUserPlus:"ContactForm_iconUserPlus__TBB8H"}},,function(t,e,n){t.exports={list:"ContactList_list__2czqq",total:"ContactList_total__2BxaK",item:"ContactList_item__e91kp",iconAddressBook:"ContactList_iconAddressBook__2lOTc",text:"ContactList_text__2Ew5r",button:"ContactList_button__1Sjp6",iconBin:"ContactList_iconBin__o1FPB"}},,,,,,function(t,e,n){t.exports={Section:"Section_Section__1tMLF",title:"Section_title__3OA_5"}},,function(t,e,n){t.exports={Container:"Container_Container__1BXC9"}},,function(t,e,n){t.exports={input:"Filter_input__3C4mF"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),i=n(10),s=n.n(i),r=(n(20),n(14)),o=n(4),l=n(5),u=n(7),m=n(6),d=n(11),b=n.n(d),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:b.a.Container,children:e})},p=n(9),f=n.n(p),_=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:f.a.Section,children:[Object(h.jsx)("h2",{className:f.a.title,children:e}),n]})},x=n(12),O=n(1),C=n.n(O),v=n.p+"static/media/sprite.e4aca9ab.svg",g=function(t){var e=t.className,n=t.iconName,a=t.width,c=t.height,i=t.fill,s=t.stroke;return Object(h.jsx)("svg",{className:"icon icon-".concat(n," ").concat(e),width:a,height:c,fill:i,stroke:s,children:Object(h.jsx)("use",{xlinkHref:"".concat(v,"#").concat(n)})})},N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{className:C.a.inputWrapper,children:[Object(h.jsx)("input",{type:"text",className:C.a.input,value:this.state.name,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(h.jsx)("label",{className:C.a.label,htmlFor:this.nameInputId,children:"Name"})]}),Object(h.jsxs)("div",{className:C.a.inputWrapper,children:[Object(h.jsx)("input",{type:"tel",className:C.a.input,value:this.state.number,onChange:this.handleChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(h.jsx)("label",{className:C.a.label,htmlFor:this.numberInputId,children:"Number"})]}),Object(h.jsxs)("button",{className:C.a.button,type:"submit",children:["Add contact",Object(h.jsx)(g,{iconName:"iconUserPlus",width:"18",height:"18",className:C.a.iconUserPlus})]})]})}}]),n}(a.Component),S=N,k=n(3),y=n.n(k),F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsxs)("ul",{className:y.a.list,children:[Object(h.jsxs)("p",{className:y.a.total,children:["Total amount of contacts: ",e.length]}),e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:y.a.item,children:[Object(h.jsxs)("p",{className:y.a.text,children:[Object(h.jsx)(g,{iconName:"iconAddressBook",width:"18",height:"18",className:y.a.iconAddressBook}),a,": ",c]}),Object(h.jsxs)("button",{onClick:function(){return n(e)},className:y.a.button,children:["Delete",Object(h.jsx)(g,{iconName:"iconBin",width:"18",height:"18",className:y.a.iconBin})]})]},e)}))]})},w=n(13),B=n.n(w),A=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:B.a.input})]})},L=n(15),P=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Maria Shebeko",number:"111-22-33"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,c=t.state.contacts,i={id:Object(L.a)(),name:n,number:a},s=c.find((function(t){return t.name===i.name})),o=c.find((function(t){return t.number===i.number}));return s?alert("This name is allready exist"):o?alert("This number is allready exist"):void t.setState((function(t){return{contacts:[i].concat(Object(r.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(j,{children:[Object(h.jsx)(_,{title:"Phonebook",children:Object(h.jsx)(S,{onSubmit:this.formSubmitHandler})}),Object(h.jsxs)(_,{title:"Contacts",children:[Object(h.jsx)(A,{value:t,onChange:this.changeFilter}),Object(h.jsx)(F,{contacts:e,onDeleteContact:this.deleteContact})]})]})})}}]),n}(a.Component),M=P;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f0b5e3bb.chunk.js.map