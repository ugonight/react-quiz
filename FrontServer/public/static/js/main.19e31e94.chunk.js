(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{203:function(e,t,n){},228:function(e,t,n){},52:function(e,t){e.exports={APP_MODE:{MENU:0,QUIZ:1,RESULT:2}}},685:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),a=n.n(i),r=n(32),c=n.n(r),o=(n(203),n(36)),u=n(27),l=n(28),h=n(31),d=n(30),g=n(691),j=n(194),b=n(111),O=n(698),m=n(699),f=n(689),p=n(186),x=n(187),v=n(690),C=n(692),y=n(195),R=n(52),k=n(79);function N(e){var t=Object(i.useState)(""),n=Object(b.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(""),o=Object(b.a)(c,2),u=o[0],l=o[1],h=e.triedLogin&&!e.isLogin;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(O.a,{show:!e.isLogin,onHide:function(){},backdrop:"static",keyboard:!1,children:[Object(s.jsx)(O.a.Header,{children:Object(s.jsx)(O.a.Title,{children:"Login"})}),Object(s.jsx)(O.a.Body,{children:Object(s.jsxs)(m.a,{children:[Object(s.jsx)(f.a,{className:"ml-2 mb-3",children:"\u30ed\u30b0\u30a4\u30f3\u3057\u308d\u3088\uff08\u7b11\uff09"}),Object(s.jsxs)(m.a.Group,{as:f.a,controlId:"formPlaintextUserId",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:"2",children:"User ID"}),Object(s.jsx)(p.a,{sm:"10",children:Object(s.jsx)(m.a.Control,{type:"text",placeholder:"Password",onChange:function(e){l(e.target.value)}})})]}),Object(s.jsxs)(m.a.Group,{as:f.a,controlId:"formPlaintextPassword",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:"2",children:"Password"}),Object(s.jsxs)(p.a,{sm:"10",children:[Object(s.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){r(e.target.value)},isInvalid:h}),h&&Object(s.jsx)(m.a.Control.Feedback,{type:"invalid",children:"\u9593\u9055\u3063\u3068\u308b\u3088\uff08\u7b11\uff09"})]})]})]})}),Object(s.jsx)(O.a.Footer,{children:Object(s.jsx)(x.a,{variant:"primary",onClick:function(t){return e.checkLogin(a,u)},children:"OK"})})]})})}var E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;Object(u.a)(this,n),s=t.call(this,e);var i=e.cookies.get("isLogin");return i="false"!==i&&"true"===i,s.state={isLogin:i,triedLogin:!1,categories:[],selectCategories:[],ratings:[],selectRatings:[],targetCount:0,quesNumber:0,loadingQuiz:!1,progressNumber:0,progressCount:0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;k.getCategoryList().then((function(t){e.setState({categories:t,selectCategories:t})})),k.getRatingList().then((function(t){e.setState({ratings:t,selectRatings:t})})),k.getProgress().then((function(t){e.setState({progressNumber:t.number,progressCount:t.count})}))}},{key:"componentDidUpdate",value:function(e,t,n){var s=this;JSON.stringify(this.state.selectCategories)===JSON.stringify(t.selectCategories)&&JSON.stringify(this.state.selectRatings)===JSON.stringify(t.selectRatings)||k.getQuizCount(this.state.selectCategories,this.state.selectRatings).then((function(e){s.setState({targetCount:e,quesNumber:e})}))}},{key:"checkLogin",value:function(e,t){var n=this.props.cookies,s="wara"===e;this.setState({isLogin:s,triedLogin:!0}),n.set("isLogin",s),s&&n.set("userId",t)}},{key:"logout",value:function(){var e=this.props.cookies;this.setState({isLogin:!1,triedLogin:!1}),e.set("isLogin",!1),e.set("userId","")}},{key:"categoryChange",value:function(e){var t=this.state.selectCategories;t.includes(e)?t=t.filter((function(t){return t!==e})).sort():(t=t.concat()).push(e),this.setState({selectCategories:t})}},{key:"categoryChangeAll",value:function(){var e=this.state.selectCategories;e=e.length===this.state.categories.length?[]:this.state.categories.concat(),this.setState({selectCategories:e})}},{key:"ratingChange",value:function(e){var t=this.state.selectRatings;t.includes(Number(e))?t=t.filter((function(t){return t!==Number(e)})).sort():(t=t.concat()).push(Number(e)),this.setState({selectRatings:t})}},{key:"ratingChangeAll",value:function(){var e=this.state.selectRatings;e=e.length===this.state.ratings.length?[]:this.state.ratings.concat(),this.setState({selectRatings:e})}},{key:"startQuiz",value:function(){var e=this;this.setState({loadingQuiz:!0}),k.startQuiz(this.state.selectCategories,this.state.selectRatings,this.state.quesNumber).then((function(t){e.setState({loadingQuiz:!1}),e.props.changeMode(R.APP_MODE.QUIZ)}))}},{key:"restartQuiz",value:function(){this.props.changeMode(R.APP_MODE.QUIZ)}},{key:"render",value:function(){var e,t=this,n=this.props.cookies;return e=this.state.loadingQuiz?Object(s.jsxs)("div",{children:[Object(s.jsx)(v.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"\u8aad\u307f\u8fbc\u307f\u4e2d"]}):Object(s.jsx)("div",{children:"\u958b\u59cb"}),Object(s.jsxs)(g.a,{children:[Object(s.jsx)("h1",{children:"\u30e1\u30cb\u30e5\u30fc"})," \u30e6\u30fc\u30b6\u30fc\u540d: ",n.get("userId")," ",Object(s.jsxs)(x.a,{variant:"link",onClick:function(e){return t.logout()},children:[" ",Object(s.jsx)(y.a,{}),"\u30ed\u30b0\u30a2\u30a6\u30c8"]}),Object(s.jsx)(N,{isLogin:this.state.isLogin,triedLogin:this.state.triedLogin,checkLogin:function(e,n){return t.checkLogin(e,n)}}),Object(s.jsxs)(m.a,{className:"border border-dark rounded",children:[Object(s.jsxs)(m.a.Group,{as:f.a,controlId:"category",mb:3,className:"mt-3 mx-3",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:3,children:"\u30ab\u30c6\u30b4\u30ea"}),Object(s.jsx)(p.a,{children:Object(s.jsx)(x.a,{variant:"outline-primary",size:"sm",onClick:function(e){return t.categoryChangeAll()},children:"\u3059\u3079\u3066\u5207\u308a\u66ff\u3048"})}),Object(s.jsx)(p.a,{sm:"10",children:Object(s.jsx)(f.a,{children:this.state.categories.map((function(e){return Object(s.jsx)(m.a.Check,{inline:!0,label:e,type:"checkbox",id:e,onChange:function(e){return t.categoryChange(e.target.id)},checked:t.state.selectCategories.includes(e)})}))})})]}),Object(s.jsxs)(m.a.Group,{as:f.a,controlId:"rating",mb:3,className:"mt-3 mx-3",children:[Object(s.jsx)(m.a.Label,{column:!0,sm:3,children:"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0"}),Object(s.jsx)(p.a,{children:Object(s.jsx)(x.a,{variant:"outline-primary",size:"sm",onClick:function(e){return t.ratingChangeAll()},children:"\u3059\u3079\u3066\u5207\u308a\u66ff\u3048"})}),Object(s.jsx)(p.a,{sm:"10",children:Object(s.jsx)(f.a,{children:this.state.ratings.map((function(e){return Object(s.jsx)(m.a.Check,{inline:!0,label:"\u2606".repeat(e),type:"checkbox",id:e,onChange:function(e){return t.ratingChange(e.target.id)},checked:t.state.selectRatings.includes(e)})}))})})]}),Object(s.jsxs)(m.a.Group,{as:f.a,controlId:"NumberOfQuestions",mb:3,className:"mt-3 mx-3",children:[Object(s.jsxs)(m.a.Label,{column:!0,sm:"2",children:["\u51fa\u984c\u6570 ",Object(s.jsx)("br",{}),"(\u5bfe\u8c61\u554f\u984c\u6570: ",this.state.targetCount,")"]}),Object(s.jsx)(p.a,{sm:"5",children:Object(s.jsx)(m.a.Control,{type:"number",max:this.state.targetCount,min:0,step:10,value:this.state.quesNumber,onChange:function(e){return t.setState({quesNumber:Number(e.target.value)})}})})]})]}),Object(s.jsx)(f.a,{className:"d-grid gap-2 col-6 mx-auto mt-3",mb:3,children:Object(s.jsx)(x.a,{variant:"primary",size:"lg",block:!0,onClick:function(e){return t.startQuiz()},disabled:this.state.quesNumber<=0,children:e})}),Object(s.jsx)("hr",{}),this.state.progressNumber>0&&Object(s.jsxs)(x.a,{variant:"info",size:"lg",block:!0,onClick:function(e){return t.restartQuiz()},children:["\u518d\u958b(",this.state.progressNumber,"/",this.state.progressCount,")"]})]})}}]),n}(a.a.Component),M=Object(C.a)(E),w=n(196),S=(n(228),n(701)),P=n(192),z=n(694),L=n(185),Q=n(695),q=n(696),A=n(110),T=n.n(A),D=n(700),I=n(693),U=n(324),_=n(52),G=n(79),F={code:function(e){e.node;var t=e.className,n=Object(w.a)(e,["node","className"]),i=/language-(\w+)/.exec(t||"");return i?Object(s.jsx)(D.a,Object(o.a)({language:i[1],PreTag:"div",style:I.a},n)):Object(s.jsx)("code",Object(o.a)({className:t},n))}};function J(e){return Object(s.jsx)("div",{className:"question",children:Object(s.jsx)(T.a,{remarkPlugins:[U],components:F,className:"line-break",children:e.value})})}function V(e){var t=e.choices;return Object(s.jsx)(S.a,{type:e.type,name:"options",vertical:!0,className:"choices",value:e.input,onChange:e.onChange,children:t.map((function(t,n){var i="outline-dark";if(e.isAnswered){var a=!1,r=!1;"radio"===e.type?(a=n===e.answer,r=n===e.input,a&&r?i="success":a?i="warning":r&&(i="danger")):"checkbox"===e.type&&(a=e.answer.includes(n),r=e.input.includes(n),a&&r?i="success":a?i="warning":r&&(i="danger"))}return Object(s.jsx)(P.a,{variant:i,className:"choice mt-2",name:"radio",value:n,disabled:e.isAnswered,children:t},n)}))})}function Z(e){var t=e.isAnswered&&e.input!==e.answer;return Object(s.jsxs)(z.a,{className:"mb-3",children:[Object(s.jsx)(z.a.Prepend,{children:Object(s.jsx)(z.a.Text,{id:"inputGroup-sizing-default",children:"\u56de\u7b54"})}),Object(s.jsx)(L.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(t){return e.onChange(t.target.value)},readOnly:e.isAnswered,isInvalid:t,isValid:e.isAnswered&&!t}),t&&Object(s.jsx)(L.a.Feedback,{type:"invalid",children:"\u7b54\u3048: "+e.answer})]})}function B(e){var t=Object(s.jsx)("div",{}),n=e.question.choices,i=e.onChange,a=e.state.isAnswered,r=e.state.input,c=e.question.answer,o=e.question.type;return"radio"===o||"checkbox"===o?t=Object(s.jsx)(V,{choices:n,onChange:i,isAnswered:a,input:r,answer:c,type:o}):"text"===o&&(t=Object(s.jsx)(Z,{onChange:i,isAnswered:a,input:r,answer:c,type:o})),t}function H(e){var t=e.isCorrect?"success":"danger",n=e.isCorrect?"\u6b63\u89e3\uff01":"\u4e0d\u6b63\u89e3\uff01\uff57";return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(Q.a,{variant:t,show:e.show,transition:q.a,children:[Object(s.jsx)(Q.a.Heading,{children:n}),Object(s.jsx)("hr",{}),Object(s.jsx)("p",{className:"mb-0",children:Object(s.jsx)(T.a,{remarkPlugins:[U],components:F,className:"line-break",children:e.comment})})]})})}var K=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={input:null,isAnswered:!1,isCorrect:!1,quesNumber:0,question:{sentence:"",type:"",choices:"",answer:0,comment:"",rating:0,category:""},loadingQuiz:!1},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;G.getCurrentQuestion().then((function(t){t.isEnd?e.changeModeToResult():e.setState({question:t.question,quesNumber:t.quesNumber})}))}},{key:"changeInput",value:function(e){var t=e;Array.isArray(t)&&t.sort(),this.setState({input:t})}},{key:"changeModeToResult",value:function(){this.props.changeMode(_.APP_MODE.RESULT)}},{key:"clickOK",value:function(e){var t=this;this.state.isAnswered?(this.setState({loadingQuiz:!0}),G.applyResult(this.state.isCorrect).then((function(e){G.getCurrentQuestion().then((function(e){e.isEnd?(t.setState({loadingQuiz:!1}),t.changeModeToResult()):t.setState({question:e.question,quesNumber:e.quesNumber,input:null,isAnswered:!1,loadingQuiz:!1})}))}))):this.setState({isAnswered:!0,isCorrect:JSON.stringify(this.state.input)===JSON.stringify(this.state.question.answer)})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(g.a,{children:[Object(s.jsxs)("h1",{className:"header",children:[this.state.quesNumber+1,"\u554f\u76ee"]}),Object(s.jsxs)("h6",{children:["\u30ab\u30c6\u30b4\u30ea:",this.state.question.category," \u30ec\u30fc\u30c6\u30a3\u30f3\u30b0:","\u2606".repeat(this.state.question.rating)]}),Object(s.jsx)(J,{value:this.state.question.sentence}),Object(s.jsx)(B,{onChange:function(t){return e.changeInput(t)},state:this.state,question:this.state.question}),Object(s.jsx)(H,{isCorrect:this.state.isCorrect,comment:this.state.question.comment,show:this.state.isAnswered}),Object(s.jsx)(x.a,{variant:"primary",size:"lg",block:!0,className:"mt-4",onClick:function(t){return e.clickOK(t)},disabled:null==this.state.input||this.state.loadingQuiz,children:this.state.isAnswered?this.state.loadingQuiz?"\u8aad\u307f\u8fbc\u307f\u4e2d\u2026":"\u6b21\u3078":"\u6c7a\u5b9a"})]})}}]),n}(a.a.Component),W=n(193),X=(n(683),n(52)),Y=n(79),$=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={correctNum:0,wrongNum:0,correctPer:0},Y.getRecord().then((function(e){s.setState({correctNum:e.correctNum,wrongNum:e.wrongNum,correctPer:e.correctPer})})),s}return Object(l.a)(n,[{key:"changeModeToMenu",value:function(){var e=this;Y.resetQuiz().then((function(t){e.props.changeMode(X.APP_MODE.MENU)}))}},{key:"render",value:function(){var e=this,t={labels:["\u6b63\u89e3","\u4e0d\u6b63\u89e3"],datasets:[{label:"# of Votes",data:[this.state.correctNum,this.state.wrongNum],backgroundColor:["#28a745","#dc3545"],borderColor:["#c3e6cb","#f5c6cb"],borderWidth:1}]},n={responsive:!0,plugins:{doughnutlabel:{labels:[{text:"\u6b63\u89e3\u7387",color:"#666666",font:{size:20}},{text:this.state.correctPer+"%",color:"#888888",font:{size:80}}]}}};return Object(s.jsxs)(g.a,{children:[Object(s.jsx)("h1",{children:"Result"}),Object(s.jsxs)(f.a,{children:[Object(s.jsx)(p.a,{}),Object(s.jsx)(p.a,{md:10,children:Object(s.jsx)(W.Doughnut,{data:t,options:n})}),Object(s.jsx)(p.a,{})]}),Object(s.jsx)(f.a,{children:Object(s.jsx)(x.a,{variant:"primary",size:"lg",className:"mt-5",block:!0,onClick:function(t){return e.changeModeToMenu()},children:"\u30e1\u30cb\u30e5\u30fc\u3078\u623b\u308b"})})]})}}]),n}(a.a.Component),ee=n(52),te=j.a.div({visible:{opacity:1,transition:{duration:200,ease:"linear"}},hidden:{opacity:0,transition:{duration:200,ease:"linear"}}}),ne=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;Object(u.a)(this,n);var a={changeMode:function(e){return i.setState({nextMode:e,onChangeMode:!0})}};return(i=t.call(this,e)).MODE_ELEMENTS=new Map,i.MODE_ELEMENTS.set(ee.APP_MODE.MENU,Object(s.jsx)(M,Object(o.a)({},a))),i.MODE_ELEMENTS.set(ee.APP_MODE.QUIZ,Object(s.jsx)(K,Object(o.a)({},a))),i.MODE_ELEMENTS.set(ee.APP_MODE.RESULT,Object(s.jsx)($,Object(o.a)({},a))),i.state={mode:ee.APP_MODE.MENU,nextMode:ee.APP_MODE.MENU,onChangeMode:!1,isVisible:!0},i}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){var s=this;if(this.state.onChangeMode){var i=this.state.nextMode;this.setState({onChangeMode:!1,isVisible:!1}),this.delayFunc(200).then((function(){s.setState({mode:i,isVisible:!0})}))}}},{key:"delayFunc",value:function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}},{key:"render",value:function(){return Object(s.jsx)(g.a,{children:Object(s.jsx)(te,{pose:this.state.isVisible?"visible":"hidden",children:this.MODE_ELEMENTS.get(this.state.mode)})})}}]),n}(a.a.Component),se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,702)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))},ie=n(697);n(684);c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(ie.a,{children:Object(s.jsx)(ne,{})})}),document.getElementById("root")),se()},79:function(e,t,n){var s=n(204).create({baseURL:"",headers:{"Content-Type":"application/json"},responseType:"json"});t.getCategoryList=function(){return new Promise((function(e){s.get("/Menu/Categories").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Menu/Categories")}))}))},t.getRatingList=function(){return new Promise((function(e){s.get("/Menu/Ratings").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Menu/Ratings")}))}))},t.getQuizCount=function(e,t){return new Promise((function(n){s.post("/Menu/QuizCount",{categoryList:e,ratingList:t}).then((function(e){n(e.data)})).catch((function(e){console.error("REST ERROR from /Menu/QuizCount\n"+e)}))}))},t.getProgress=function(){return new Promise((function(e){s.get("/Menu/Progress").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Menu/Progress\n"+e)}))}))},t.startQuiz=function(e,t,n){return new Promise((function(i){s.post("/Quiz/Start",{categoryList:e,ratingList:t,quesNumber:n}).then((function(e){i(e.data)})).catch((function(e){console.error("REST ERROR from /Quiz/Start\n"+e)}))}))},t.getCurrentQuestion=function(){return new Promise((function(e){s.post("/Quiz/Get").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Quiz/Get\n"+e)}))}))},t.applyResult=function(e){return new Promise((function(t){s.post("/Quiz/SetResult",{result:e}).then((function(e){t(e.data)})).catch((function(e){console.error("REST ERROR from /Quiz/Get\n"+e)}))}))},t.getRecord=function(){return new Promise((function(e){s.get("/Quiz/GetRecord").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Quiz/GetRecord\n"+e)}))}))},t.resetQuiz=function(){return new Promise((function(e){s.post("/Quiz/Reset").then((function(t){e(t.data)})).catch((function(e){console.error("REST ERROR from /Quiz/Reset\n"+e)}))}))}}},[[685,1,2]]]);
//# sourceMappingURL=main.19e31e94.chunk.js.map