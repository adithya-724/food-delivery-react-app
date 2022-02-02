(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={btn:"Button_btn__3Ve_g",order:"Button_order__1HcC0",primary:"Button_primary__1r43U",secondary:"Button_secondary__2gvXY"}},function(e,t,n){e.exports={btn:"HeaderCartButton_btn__1f8op","cart-icon":"HeaderCartButton_cart-icon__3uAcA",text:"HeaderCartButton_text__Ykj0k",group:"HeaderCartButton_group__W8OOz",items:"HeaderCartButton_items__14f0f",change:"HeaderCartButton_change__1ePRZ"}},function(e,t,n){e.exports={label:"MealList_label__1W9RA",image:"MealList_image__2Dt-5",item:"MealList_item___a2xU",description:"MealList_description__32MtY",price:"MealList_price__3ERHp"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={items:"Cart_items__1lLq-",amount:"Cart_amount__w4F88",label:"Cart_label__3dauQ",price:"Cart_price__3Zo1I","button-container":"Cart_button-container__3ruDO"}},,,,function(e,t,n){e.exports={header:"Header_header__1VCKf","food-icon":"Header_food-icon__3MUjl","cart-button":"Header_cart-button__19dcL"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={image:"HeaderImage_image__2p3RR"}},,,function(e,t,n){e.exports={section:"MealSummary_section__3gFOq"}},function(e,t,n){e.exports={items:"MealItems_items__3Olcp"}},function(e,t,n){e.exports={"input-container":"Input_input-container__1Phof"}},function(e,t,n){e.exports={form:"MealForm_form__39z2f"}},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),i=n(7),r=n(16),s=n(3),o=n(2),l=n.n(o),m=n(1),d=l.a.createContext({items:[],amount:0,addItem:function(e){},removeItem:function(e){}}),u={items:[],totalAmount:0},j=function(e,t){if("ADD_ITEM"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[a];if(i){var o=Object(s.a)(Object(s.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(r.a)(e.items))[a]=o}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE_ITEM"===t.type){var l,m=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[m],j=e.totalAmount-d.price;return 1===d.amount?l=e.items.filter((function(e){return e.id!==t.id})):(l=Object(r.a)(e.items))[m]=Object(s.a)(Object(s.a)({},d),{},{amount:d.amount-1}),{items:l,totalAmount:j}}return u},b=function(e){var t=Object(o.useReducer)(j,u),n=Object(i.a)(t,2),c=n[0],a=n[1],r={items:c.items,amount:c.totalAmount,addItem:function(e){a({type:"ADD_ITEM",item:e})},removeItem:function(e){a({type:"REMOVE_ITEM",id:e})}};return Object(m.jsx)(d.Provider,{value:r,children:e.children})},p=(n(29),n(19)),_=n.p+"static/media/image2.dcb2433e.jpg",x=n(17),O=n.n(x),h=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:O.a.image,children:Object(m.jsx)("img",{src:_,alt:""})})})},f=n(13),v=n.n(f),g=n(18),C=n(5),y=n.n(C),N=function(e){var t=Object(o.useContext)(d).items,n=Object(o.useState)(!1),c=Object(i.a)(n,2),a=c[0],r=c[1],s=t.reduce((function(e,t){return e+t.amount}),0),l="".concat(y.a.items," ").concat(a?y.a.change:"");return Object(o.useEffect)((function(){t.length>0&&r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}),[t]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("button",{className:y.a.btn,onClick:e.onClick,children:[Object(m.jsxs)("span",{className:y.a.group,children:[Object(m.jsx)("span",{className:y.a["cart-icon"],children:Object(m.jsx)(g.a,{})}),Object(m.jsx)("span",{className:y.a.text,children:"Cart"})]}),Object(m.jsx)("span",{className:l,children:s})]})})},I=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:v.a.header,children:[Object(m.jsxs)("div",{children:["Foodeli",Object(m.jsx)("span",{className:v.a["food-icon"],children:Object(m.jsx)(p.a,{})})]}),Object(m.jsx)("div",{className:v.a["cart-button"],children:Object(m.jsx)(N,{onClick:e.onClick})})]}),Object(m.jsx)("div",{children:Object(m.jsx)(h,{})})]})},M=n(20),k=n.n(M),w=function(){return Object(m.jsxs)("section",{className:k.a.section,children:[Object(m.jsx)("h1",{children:"Explore across multiple restaurants"}),Object(m.jsx)("p",{children:"Choose your favourite dish from the available multitudes of restaurants all over the city !"})]})},A=[{id:"m1",name:"Egg salad",description:"Healthy bowl of green veggies with an omelette",price:19.99,url:"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:"m2",name:"Pizza",description:"Medium pizza served with lots of olives and basil",price:15.99,url:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:"m3",name:"Pancake",description:"Plate of pancakes coated with fresh honey",price:18.99,url:"https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:"m4",name:"Special Salad",description:"Special salad dressed with secret spices and chicken bites",price:19.99,url:"https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}],E=n(21),F=n.n(E),H=n(6),B=n.n(H),R=n(22),S=n.n(R),D=l.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:S.a["input-container"],children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(s.a)({ref:t},e.input))]})})),P=n(4),L=n.n(P),z=function(e){var t="".concat(L.a.btn);return"primary"===e.type?t="".concat(L.a.primary," ").concat(L.a.btn):"secondary"===e.type?t="".concat(L.a.secondary," ").concat(L.a.btn):"order"===e.type&&(t="".concat(L.a.order," ").concat(L.a.btn)),Object(m.jsx)("button",{onClick:e.onClick,className:t,children:e.label})},T=n(23),U=n.n(T),V=function(e){var t=Object(o.useRef)();return Object(m.jsxs)("form",{className:U.a.form,onSubmit:function(n){n.preventDefault();var c=+t.current.value;e.onSubmit(c)},children:[Object(m.jsx)(D,{label:"Enter amount",ref:t,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)(z,{label:"Add +",type:"primary"})]})},q=function(e){var t=Object(o.useContext)(d);return Object(m.jsxs)("div",{className:B.a.item,children:[Object(m.jsx)("span",{className:B.a.label,children:e.name}),Object(m.jsx)("div",{className:B.a.image,children:Object(m.jsx)("img",{src:e.url,alt:""})}),Object(m.jsx)("div",{className:B.a.description,children:e.description}),Object(m.jsx)("div",{className:B.a.price,children:"$".concat(e.price)}),Object(m.jsx)("div",{className:B.a.form,children:Object(m.jsx)(V,{id:e.id,onSubmit:function(n){t.addItem({name:e.name,price:e.price,amount:n,id:e.id})}})})]})},J=function(){var e=Object(o.useMemo)((function(){return A}),[]);return Object(m.jsx)("section",{className:F.a.items,children:e.map((function(e){return Object(m.jsx)(q,{id:e.id,name:e.name,url:e.url,description:e.description,price:e.price},e.id)}))})},W=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{}),Object(m.jsx)(J,{})]})},X=n(15),Y=n.n(X),$=function(e){return Object(m.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},K=function(e){return Object(m.jsx)("div",{className:Y.a.modal,children:e.children})},Z=document.querySelector("#overlay"),Q=function(e){return Object(m.jsxs)(m.Fragment,{children:[a.a.createPortal(Object(m.jsx)($,{onClose:e.onClose}),Z),a.a.createPortal(Object(m.jsx)(K,{children:e.children}),Z)]})},G=n(8),ee=n.n(G),te=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:ee.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:ee.a.summary,children:[Object(m.jsx)("span",{className:ee.a.price,children:t}),Object(m.jsxs)("span",{className:ee.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:ee.a.actions,children:[Object(m.jsx)(z,{type:"primary",label:"+",onClick:e.onAdd}),Object(m.jsx)(z,{type:"primary",label:"-",onClick:e.onRemove})]})]})},ne=n(9),ce=n.n(ne),ae=function(e){var t=Object(o.useContext)(d),n=t.items.length>0,c="$".concat(t.amount.toFixed(2)),a=function(e){t.addItem(Object(s.a)(Object(s.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)};return Object(m.jsxs)(Q,{onClose:e.onClose,children:[Object(m.jsx)("ul",{className:ce.a.items,children:t.items.map((function(e){return Object(m.jsx)(te,{price:e.price,name:e.name,amount:e.amount,onAdd:a.bind(null,e),onRemove:i.bind(null,e.id)},e.id)}))}),Object(m.jsxs)("div",{className:ce.a.amount,children:[Object(m.jsx)("span",{className:ce.a.label,children:"Amount entered"}),Object(m.jsx)("span",{className:ce.a.price,children:c})]}),Object(m.jsxs)("div",{className:ce.a["button-container"],children:[n&&Object(m.jsx)(z,{label:"Order Now",type:"order"}),Object(m.jsx)(z,{type:"secondary",label:"Close",onClick:e.onClose})]})]})};var ie=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{children:[n&&Object(m.jsx)(ae,{onClose:function(e){c(!1)}}),Object(m.jsx)(I,{onClick:function(e){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(W,{})})]})};a.a.render(Object(m.jsx)(b,{children:Object(m.jsx)(ie,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.017e92c0.chunk.js.map