(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var s=c(0),r=c(1),n=c.n(r),i=c(8),a=c.n(i),h=(c(15),c(7)),j=c(2),o=c(3),d=c(5),l=c(4),b=c(9),p=function(t){return t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"\u20ab":""},O=function(t){Object(d.a)(c,t);var e=Object(l.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this.props.products,e=this.props.addToCart;return Object(s.jsx)("div",{children:t.map((function(t){return Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("img",{src:t.thumbnail,alt:t.name}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h4",{children:t.name})}),Object(s.jsx)("div",{className:"price",children:Object(s.jsx)("p",{children:p(t.price)})}),Object(s.jsx)("div",{className:"ship",children:Object(s.jsx)("p",{children:t.ship})}),Object(s.jsx)("div",{className:"btn-buy",children:Object(s.jsx)("button",{onClick:function(){return e(t)},children:"+ Cho v\xe0o gi\u1ecf"})})]})}))})}}]),c}(n.a.Component),u=function(t){Object(d.a)(c,t);var e=Object(l.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this.props,e=t.cartItems,c=t.removeFromCart;return Object(s.jsx)("div",{className:"container-cart",children:Object(s.jsxs)("div",{className:"center-cart",children:[Object(s.jsxs)("div",{className:"title-cart",children:[Object(s.jsx)("h1",{children:"Gi\u1ecf h\xe0ng"}),Object(s.jsxs)("p",{children:["Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n \u0111ang c\xf3 ",e.length," s\u1ea3n ph\u1ea9m"]})]}),Object(s.jsxs)("table",{className:"table-cart",border:"1",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"X\xf3a"}),Object(s.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(s.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(s.jsx)("th",{children:"Gi\xe1 ti\u1ec1n"})]})}),Object(s.jsx)("tbody",{children:e.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("button",{onClick:function(){return c(t)},children:"X\xf3a"})}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:t.thumbnail,alt:t.name,width:"100",height:"90"})}),Object(s.jsx)("td",{children:t.name}),Object(s.jsxs)("td",{children:[t.price," x ",t.qty]})]})}))})]}),0!==e.length&&Object(s.jsx)("div",{className:"total",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"T\u1ed5ng ti\u1ec1n thanh to\xe1n:"}),p(e.reduce((function(t,e){return t+e.price*e.qty}),0))]})})]})})}}]),c}(n.a.Component),m=function(t){Object(d.a)(c,t);var e=Object(l.a)(c);function c(t){var s;return Object(j.a)(this,c),(s=e.call(this,t)).addToCart=function(t){for(var e=s.state.cartItems.slice(),c=!1,r=0;r<e.length;r++)e[r].id===t.id&&(e[r].qty+=1,c=!0);c||e.push(Object(h.a)(Object(h.a)({},t),{},{qty:1})),s.setState({cartItems:e}),localStorage.setItem("cart",JSON.stringify(e))},s.removeFromCart=function(t){for(var e=s.state.cartItems.slice(),c=[],r=0;r<e.length;r++)e[r].id!==t.id&&c.push(e[r]);s.setState({cartItems:c})},s.state={products:b.products,cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]},s}return Object(o.a)(c,[{key:"render",value:function(){var t=this.state,e=t.products,c=t.cartItems;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["C\xf3 t\u1ea5t c\u1ea3 ",e.length," s\u1ea3n ph\u1ea9m trong c\u1eeda h\xe0ng"]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(O,{products:e,addToCart:this.addToCart})}),Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("div",{className:"title-cart"}),Object(s.jsx)(u,{cartItems:c,removeFromCart:this.removeFromCart})]})]})}}]),c}(n.a.Component);a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))},9:function(t){t.exports=JSON.parse('{"products":[{"id":1,"name":"M\xd3C KHO\xc1 INTERNOT","price":79000,"thumbnail":"https://www.bugs.vn/static/store/products/moc-khoa-internot-ss-0.jpg","ship":"Mi\u1ec5n ph\xed giao h\xe0ng"},{"id":2,"name":"M\xd3C KHO\xc1 VISUAL STUDIO","price":79000,"thumbnail":"https://www.bugs.vn/static/store/products/moc-khoa-vs-ss-0.jpg","ship":"Mi\u1ec5n ph\xed giao h\xe0ng"},{"id":3,"name":"M\xd3C KHO\xc1 PHOTOSHOP","price":79000,"thumbnail":"https://www.bugs.vn/static/store/products/moc-khoa-pts-ss-0.jpg","ship":"Mi\u1ec5n ph\xed giao h\xe0ng"},{"id":4,"name":"M\xd3C KH\xd3A ILLUSTRATOR","price":79000,"thumbnail":"https://www.bugs.vn/static/store/products/moc-khoa-ai-ss-0.jpg","ship":"Mi\u1ec5n ph\xed giao h\xe0ng"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.f59bb97f.chunk.js.map