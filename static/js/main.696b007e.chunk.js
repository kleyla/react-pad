(this["webpackJsonpreact-pad"]=this["webpackJsonpreact-pad"]||[]).push([[0],{11:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),c=n.n(r),o=n(3),a=n.n(o),s=(n(22),n(10)),d=n(16),u=n(4),l=n(5),j=n(7),h=n(6),b=(n(11),n(15)),p=n.n(b),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).componentWillMount=function(){r.style={right:r.randomBetween(0,window.innerWidth-150,"px"),top:r.randomBetween(0,window.innerHeight-150,"px")}},r.randomBetween=function(e,t,n){return e+Math.ceil(Math.random()*(t-e))+n},r.edit=function(){r.setState({editing:!0})},r.delete=function(e){r.props.onRemove(r.props.id)},r.save=function(){r.props.onChange(r.refs.newText.value,r.props.id),r.setState({editing:!1})},r.renderForm=function(){return Object(i.jsxs)("div",{className:"note",style:r.style,children:[Object(i.jsx)("textarea",{ref:"newText"}),Object(i.jsx)("button",{onClick:r.save,children:"Save"})]})},r.renderDisplay=function(){return Object(i.jsxs)("div",{className:"note",style:r.style,children:[Object(i.jsx)("p",{children:r.props.children}),Object(i.jsxs)("span",{children:[Object(i.jsx)("button",{onClick:r.edit,children:"Edit"}),Object(i.jsx)("button",{onClick:r.delete,children:"X"})]})]})},r.state={editing:!1},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(p.a,{children:this.state.editing?this.renderForm():this.renderDisplay()})}}]),n}(c.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).nextID=function(){return r.uniqueId=r.uniqueId||0,r.uniqueId++},r.add=function(e){var t=[].concat(Object(d.a)(r.state.notes),[{id:r.nextID(),note:e}]);r.setState({notes:t})},r.update=function(e,t){var n=r.state.notes.map((function(n){return n.id!==t?n:Object(s.a)(Object(s.a)({},n),{},{note:e})}));r.setState({notes:n})},r.remove=function(e){var t=r.state.notes.filter((function(t){return t.id!==e}));r.setState({notes:t})},r.eachNote=function(e){return Object(i.jsx)(f,{id:e.id,onChange:r.update,onRemove:r.remove,children:e.note},e.id)},r.state={notes:[]},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"board",children:[this.state.notes.map(this.eachNote),Object(i.jsx)("button",{onClick:function(){return e.add()},children:"+"})]})}}]),n}(c.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),c(e),o(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.696b007e.chunk.js.map