(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{44:function(e,t){e.exports={APP_MODE:{MENU:0,QUIZ:1}}},64:function(e,t,n){},65:function(e,t,n){var s=n(66).create({baseURL:"",headers:{"Content-Type":"application/json"},responseType:"json"});t.getCategoryList=function(){return new Promise((function(e){s.get("/Menu/Categories").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Menu/Categories")}))}))}},91:function(e,t,n){},92:function(e){e.exports=JSON.parse('{"section":"exsample","questions":[{"sentence":"1 + 1 = ?","type":"radio","choices":["1","2","3"],"answer":1,"comment":"1+1=2\u2026\u5e38\u8b58\u3084\u304b\u3089\u2026\uff08\u7b11\uff09"},{"sentence":"\u6b21\u306e\u5185\u3001\u30af\u30bd\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306f\u3069\u308c\uff1f","type":"checkbox","choices":["C++","Java","C#","VB","JavaScript"],"answer":[1,3],"comment":"JavaScript\u306f\u30af\u30bd\u3067\u306f\u306a\u304f\u300c\u30e4\u30d0\u3044\u300d"},{"sentence":"\u7cbe\u795e\u304c\u3064\u3089\u304f\u306a\u3063\u3061\u3083\u3063\u305f\u4ef6\uff08\u7b11\uff09","type":"text","answer":"\u308f\u3089","comment":"\u3082\u3046\u5acc\u306a\u4ef6\uff08\u7b11\uff09"}]}')},94:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n(0),a=n.n(i),c=n(16),r=n.n(c),o=(n(64),n(42)),u=n(17),j=n(18),l=n(23),d=n(22),h=n(97),b=n(41),O=n(103),m=n(104),x=n(96),p=n(55),g=n(56),f=n(98),v=n(44),w=n(65);function y(e){var t=Object(i.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(""),o=Object(b.a)(r,2),u=o[0],j=o[1],l=e.triedLogin&&!e.isLogin;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(O.a,{show:!e.isLogin,onHide:function(){},backdrop:"static",keyboard:!1,children:[Object(s.jsx)(O.a.Header,{children:Object(s.jsx)(O.a.Title,{children:"Login"})}),Object(s.jsx)(O.a.Body,{children:Object(s.jsxs)(m.a,{children:[Object(s.jsx)(x.a,{className:"ml-2 mb-3",children:"\u30ed\u30b0\u30a4\u30f3\u3057\u308d\u3088\uff08\u7b11\uff09"}),Object(s.jsxs)(m.a.Group,{as:x.a,controlId:"formPlaintextUserId",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:"2",children:"User ID"}),Object(s.jsx)(p.a,{sm:"10",children:Object(s.jsx)(m.a.Control,{type:"text",placeholder:"Password",onChange:function(e){j(e.target.value)}})})]}),Object(s.jsxs)(m.a.Group,{as:x.a,controlId:"formPlaintextPassword",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:"2",children:"Password"}),Object(s.jsxs)(p.a,{sm:"10",children:[Object(s.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){c(e.target.value)},isInvalid:l}),l&&Object(s.jsx)(m.a.Control.Feedback,{type:"invalid",children:"\u9593\u9055\u3063\u3068\u308b\u3088\uff08\u7b11\uff09"})]})]})]})}),Object(s.jsx)(O.a.Footer,{children:Object(s.jsx)(g.a,{variant:"primary",onClick:function(t){return e.checkLogin(a,u)},children:"OK"})})]})})}var C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;Object(u.a)(this,n),s=t.call(this,e);var i=e.cookies;return s.state={isLogin:i.get("isLogin")||!1,triedLogin:!1,categories:[]},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.getCategoryList().then((function(t){e.setState({categories:t})}))}},{key:"checkLogin",value:function(e,t){var n=this.props.cookies,s="wara"===e;this.setState({isLogin:s,triedLogin:!0}),n.set("isLogin",s),s&&n.set("userId",t)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(h.a,{children:[Object(s.jsx)("h1",{children:"\u30e1\u30cb\u30e5\u30fc"}),Object(s.jsx)(y,{isLogin:this.state.isLogin,triedLogin:this.state.triedLogin,checkLogin:function(t,n){return e.checkLogin(t,n)}}),Object(s.jsxs)(m.a,{className:"border border-dark rounded",children:[Object(s.jsxs)(m.a.Group,{as:x.a,controlId:"category",mb:3,className:"mt-3 mx-3",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:"2",children:"\u30ab\u30c6\u30b4\u30ea"}),Object(s.jsxs)(p.a,{sm:"10",children:[Object(s.jsxs)(x.a,{children:[Object(s.jsx)(p.a,{children:Object(s.jsx)(g.a,{variant:"outline-primary",size:"sm",children:"\u3059\u3079\u3066\u5207\u308a\u66ff\u3048"})}),Object(s.jsx)(p.a,{children:"\u5bfe\u8c61\u554f\u984c\u6570: 100"})]}),Object(s.jsx)(x.a,{children:this.state.categories.map((function(e){return Object(s.jsx)(m.a.Check,{inline:!0,label:e,type:"checkbox",id:e})}))})]})]}),Object(s.jsxs)(m.a.Group,{as:x.a,controlId:"NumberOfQuestions",mb:3,className:"mt-3 mx-3",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:"2",children:"\u51fa\u984c\u6570"}),Object(s.jsx)(p.a,{sm:"5",children:Object(s.jsx)(m.a.Control,{type:"number"})})]})]}),Object(s.jsx)(x.a,{className:"d-grid gap-2 col-6 mx-auto mt-3",mb:3,children:Object(s.jsx)(g.a,{variant:"primary",size:"lg",block:!0,onClick:function(t){return e.props.changeMode(v.APP_MODE.QUIZ)},children:"\u958b\u59cb"})})]})}}]),n}(a.a.Component),k=Object(f.a)(C),L=(n(91),n(105)),E=n(57),N=n(99),M=n(54),q=n(100),A=n(101);function P(e){return Object(s.jsx)("div",{className:"question",children:e.value})}function S(e){var t=e.choices;return Object(s.jsx)(L.a,{type:e.type,name:"options",vertical:!0,className:"choices",value:e.input,onChange:e.onChange,children:t.map((function(t,n){var i="outline-dark";if(e.isAnswered){var a=!1,c=!1;"radio"===e.type?(a=n===e.answer,c=n===e.input,a&&c?i="success":a?i="warning":c&&(i="danger")):"checkbox"===e.type&&(a=e.answer.includes(n),c=e.input.includes(n),a&&c?i="success":a?i="warning":c&&(i="danger"))}return Object(s.jsx)(E.a,{variant:i,className:"choice mt-2",name:"radio",value:n,disabled:e.isAnswered,children:t},n)}))})}function I(e){var t=e.isAnswered&&e.input!==e.answer;return Object(s.jsxs)(N.a,{className:"mb-3",children:[Object(s.jsx)(N.a.Prepend,{children:Object(s.jsx)(N.a.Text,{id:"inputGroup-sizing-default",children:"\u56de\u7b54"})}),Object(s.jsx)(M.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(t){return e.onChange(t.target.value)},readOnly:e.isAnswered,isInvalid:t,isValid:e.isAnswered&&!t}),t&&Object(s.jsx)(M.a.Feedback,{type:"invalid",children:"\u7b54\u3048: "+e.answer})]})}function _(e){var t,n=e.question.choices,i=e.onChange,a=e.state.isAnswered,c=e.state.input,r=e.question.answer,o=e.question.type;return"radio"===o||"checkbox"===o?t=Object(s.jsx)(S,{choices:n,onChange:i,isAnswered:a,input:c,answer:r,type:o}):"text"===o&&(t=Object(s.jsx)(I,{onChange:i,isAnswered:a,input:c,answer:r,type:o})),t}function D(e){var t=e.isCorrect?"success":"danger",n=e.isCorrect?"\u6b63\u89e3\uff01":"\u4e0d\u6b63\u89e3\uff01\uff57";return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(q.a,{variant:t,show:e.show,transition:A.a,children:[Object(s.jsx)(q.a.Heading,{children:n}),Object(s.jsx)("hr",{}),Object(s.jsx)("p",{className:"mb-0",children:e.comment})]})})}var T=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(u.a)(this,i),(s=t.call(this,e)).state={input:null,isAnswered:!1,isCorrect:!1,questionNum:0},s.file_json=n(92),s.question=s.file_json.questions[s.state.questionNum],s}return Object(j.a)(i,[{key:"changeInput",value:function(e){var t=e;Array.isArray(t)&&t.sort(),this.setState({input:t})}},{key:"clickOK",value:function(e){if(this.state.isAnswered){var t=this.state.questionNum+1;t>=this.file_json.questions.length&&(t=0),this.setState({input:null,isAnswered:!1,questionNum:t}),this.question=this.file_json.questions[t]}else this.setState({isAnswered:!0,isCorrect:JSON.stringify(this.state.input)===JSON.stringify(this.question.answer)})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"header",children:this.file_json.section}),Object(s.jsx)(P,{value:this.question.sentence}),Object(s.jsx)(_,{onChange:function(t){return e.changeInput(t)},state:this.state,question:this.question}),Object(s.jsx)(D,{isCorrect:this.state.isCorrect,comment:this.question.comment,show:this.state.isAnswered}),Object(s.jsx)(g.a,{variant:"primary",size:"lg",block:!0,className:"mt-4",onClick:function(t){return e.clickOK(t)},disabled:null==this.state.input,children:this.state.isAnswered?"\u6b21\u3078":"\u6c7a\u5b9a"})]})}}]),i}(a.a.Component);var F=function(){return Object(s.jsx)(h.a,{children:Object(s.jsx)(T,{})})},U=n(44),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;Object(u.a)(this,n);var a={changeMode:function(e){return i.setState({mode:e})}};return(i=t.call(this,e)).MODE_ELEMENTS=new Map,i.MODE_ELEMENTS.set(U.APP_MODE.MENU,Object(s.jsx)(k,Object(o.a)({},a))),i.MODE_ELEMENTS.set(U.APP_MODE.QUIZ,Object(s.jsx)(F,Object(o.a)({},a))),i.state={mode:U.APP_MODE.MENU},i}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)(h.a,{children:this.MODE_ELEMENTS.get(this.state.mode)})}}]),n}(a.a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))},G=n(102);n(93);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(G.a,{children:Object(s.jsx)(J,{})})}),document.getElementById("root")),z()}},[[94,1,2]]]);
//# sourceMappingURL=main.c9636266.chunk.js.map