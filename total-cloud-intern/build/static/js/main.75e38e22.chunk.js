(this["webpackJsonptotal-cloud-intern"]=this["webpackJsonptotal-cloud-intern"]||[]).push([[0],{19:function(e,a,t){e.exports=t(41)},24:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),m=t(6),i=t(42),s=t(43),o=t(44),u=t(50),d=t(45),f=t(46),E=t(47),p=(t(24),function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),p=Object(m.a)(r,2),v=p[0],b=p[1];return l.a.createElement(i.a,{id:"nav",expand:"md",light:!0},l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{className:"navbar-brand align-self-center",href:"/"},"FOOD.",l.a.createElement("span",{className:"primary-color"},"LOGO")),l.a.createElement(o.a,{light:!0,onClick:function(){return c(!t)},className:"toggler"}),l.a.createElement(u.a,{isOpen:t,navbar:!0},l.a.createElement(d.a,{className:"ml-auto",navbar:!0},["ABOUT","OUR FOOD","PLANS"].map((function(e,a){return l.a.createElement(f.a,{key:e,className:"nav-item justify-content-around align-self-center"},l.a.createElement(E.a,{className:v===a?"active nav-link":"",onClick:function(){return b(a)}},e))})),l.a.createElement(f.a,{className:"nav-item justify-content-around align-self-center primary-btn"},l.a.createElement(E.a,null,"CONTACT US"))))))});t(34);var v=function(){return l.a.createElement("section",{id:"showcase",className:"container d-flex flex-column justify-content-center align-items-start"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-md-7 col-sm-12"},l.a.createElement("div",{className:"showcase-content"},l.a.createElement("h2",{className:"showcase-heading"},"Have no time to prepare ",l.a.createElement("span",{className:"primary-color"},"food"),"?"),l.a.createElement("p",{className:"showcase-lead"},"Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home!"),l.a.createElement("button",{className:"showcase-btn primary-btn"},"Order Food")))))},b=(t(35),function(){return l.a.createElement("div",{className:"showcase-img"})}),g=t(12),N=t(48),h=(t(36),function(e){var a=e.render;return l.a.createElement(N.a,{className:"ApplicationCard"},a?a():null)}),j=(t(37),function(e){var a=e.addToCart,t=e.removeFromCart,n=e.availableItemIndex,c=e.selectedItemIndex;return l.a.createElement("div",{className:"btnGroup"},l.a.createElement("div",{className:"addTocart p-2"},l.a.createElement("button",{onClick:a,className:null!==n?"primary-btn":"primary-btn disable"},"Add to cart >>"),l.a.createElement("br",null)),l.a.createElement("div",{className:"removeFromCart p-2"},l.a.createElement("button",{onClick:t,className:null!==c?"primary-btn":"primary-btn disable"},"<< Remove from cart")))}),y=t(49),O=(t(38),t(7)),x=t.n(O),w=function(){var e=Object(n.useState)([{img:x.a,name:"Pizza",prize:5.99,imgAlt:"Lorem, ipsum dolor."},{img:x.a,name:"Burger",prize:2.99,imgAlt:"Lorem, ipsum dolor."},{img:x.a,name:"Chicken Pasta",prize:4.99,imgAlt:"Lorem, ipsum dolor."},{img:x.a,name:"Grilled Sandwich",prize:1.99,imgAlt:"Lorem, ipsum dolor."}]),a=Object(m.a)(e,2),t=a[0],c=(a[1],Object(n.useState)([])),r=Object(m.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(null),u=Object(m.a)(o,2),d=u[0],f=u[1],E=Object(n.useState)(null),p=Object(m.a)(E,2),v=p[0],b=p[1],O=Object(n.useState)(0),w=Object(m.a)(O,2),C=w[0],A=w[1];return l.a.createElement("section",{id:"availableSec"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"availableSecContainer",className:"row d-flex align-items-center"},l.a.createElement("div",{className:"col-12 col-md-4"},l.a.createElement(h,{render:function(){return t.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{className:"card-title"},"Available options"),t.map((function(e,a){return l.a.createElement("div",{key:e.name+e.prize,onClick:f.bind(null,a),className:a===d?"item-active card-item d-flex flex-row justify-content-between align-items-center":"card-item d-flex flex-row justify-content-between align-items-center"},l.a.createElement("img",{className:"card-img",src:e.img,alt:e.imgAlt}),l.a.createElement("div",{className:"item-name"},e.name),l.a.createElement("div",{className:"item-prize"},"$ ",e.prize))}))):l.a.createElement(N.a,{className:"ApplicationCard"},l.a.createElement("div",{className:"noItems d-flex flex-column justify-content-center align-items-center"},l.a.createElement("h2",null,"Woah! You added everything!"),l.a.createElement("br",null),l.a.createElement("p",null,"We are pround of you!")))}})),l.a.createElement("div",{className:"col-12 col-md-4"},l.a.createElement(j,{selectedItemIndex:v,availableItemIndex:d,addToCart:function(){if(null!==d&&t.length>0){var e=t[d],a=Object(g.a)(i);a.push(e),s(a),f(null)}else alert("Select atleast 1 item to add!")},removeFromCart:function(){if(null!==v&&i.length>0){var e=Object(g.a)(i);e.splice(v,1),s(e),b(null)}else alert("select atleast 1 item to remove!")}})),l.a.createElement("div",{className:"col-12 col-md-4"},l.a.createElement(h,{render:function(){if(i.length>0){for(var e=0,a=0;a<i.length;a++)e+=i[a].prize;return A(e),l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{className:"card-title"},"Your Cart"),l.a.createElement("div",{className:"card-items"},i.map((function(e,a){return l.a.createElement("div",{key:e.name+e.prize},l.a.createElement("div",{onClick:b.bind(null,a),className:a===v?"item-active card-item d-flex flex-row justify-content-between align-items-center":"card-item d-flex flex-row justify-content-between align-items-center"},l.a.createElement("img",{className:"card-img",src:e.img,alt:e.imgAlt}),l.a.createElement("div",{className:"item-name"},e.name),l.a.createElement("div",{className:"item-prize"},"$ ",e.prize)),l.a.createElement("div",{className:"total d-flex justify-content-between align-items-center"},l.a.createElement("p",{className:"total-info align-self-center"},"Total Amount: "),l.a.createElement("p",{className:"total-info align-self-center"},"$ ",parseFloat(C).toFixed(2))))}))))}return l.a.createElement(N.a,{className:"ApplicationCard"},l.a.createElement("div",{className:"noItems d-flex flex-column justify-content-center align-items-center"},l.a.createElement("h2",null,"Your cart is empty"),l.a.createElement("br",null),l.a.createElement("p",null,"Select an item and click \u201cAdd to cart\u201d.")))}})))))};var C=function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(v,null),l.a.createElement(w,null))};t(39),t(40);document.title="Total Cloud Incorporation Internship Project",r.a.render(l.a.createElement(C,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t.p+"static/media/img1.61fbdb11.png"}},[[19,1,2]]]);
//# sourceMappingURL=main.75e38e22.chunk.js.map