(this["webpackJsonpsberapp-frontend"]=this["webpackJsonpsberapp-frontend"]||[]).push([[0],{261:function(e,t,n){},263:function(e,t,n){},527:function(e,t,n){},59:function(e,t,n){},960:function(e,t,n){},962:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),s=(n(261),n(62)),i=n(8),u=n.n(i),l=n(13),m=n(16),p=n(63),d=(n(263),n(264),n(44)),f=n(30),b=n(12),E=n(3),h=n(5),v=n(61),x=n(14),g=n(256),y=(n(509),n(254)),k=n(253),j=n(20),w=n.n(j),O="https://bodroe-ytro-2803.herokuapp.com/";function I(){return(I=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(O,"User/"),{headers:{"Access-Control-Allow-Origin":"*"},UserId:t,SberId:0,Name:"",Age:0,Gender:"",Active:0});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(O,"User/"),{params:{SberId:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(O,"AllGroupsExercises/"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(O,"ExircicesfromGroup/"),{params:{group_id:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(l.a)(u.a.mark((function e(t,n,r){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.a.post("".concat(O,"ProgressAchieve/?user_id=").concat(t)),c=a.data,e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.get("".concat(O,"ProgressByUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.get("".concat(O,"AchiviesFomUser/"),{params:{user_id:t}}),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A,M,N={API_URL:O,getAllGroupsExercises:function(){return _.apply(this,arguments)},getExircicesfromGroup:function(e){return T.apply(this,arguments)},getUsersBySberId:function(e){return C.apply(this,arguments)},getProgressByUser:function(e){return B.apply(this,arguments)},createProgressAchieve:function(e,t,n){return S.apply(this,arguments)},createUser:function(e){return I.apply(this,arguments)},getAchiviesFomUser:function(e){return D.apply(this,arguments)}},G=(n(527),Object(x.g)((function(e){var t=e.userId;e.digit;Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getProgressByUser(t);case 2:n=e.sent,r=[],console.log("Data",n),n.data.forEach((function(e){r.push(Date.parse(e.date))})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[]);var n=Object(r.useState)([]),c=Object(m.a)(n,2),o=c[0],s=c[1],i={selected:function(e){return o.some((function(t){return Object(k.a)(t,e)}))}};return a.a.createElement(g.a,{modifiers:i,locale:y.ru})}))),U=n(17),z=n(19),W=n(15),R=Object(x.g)((function(e){var t=e.setGroupId,n=e.ToChooseCateg,c=e.achieves,o=e.setName,s=e.setDescription,i=e.userId,m=e.setAchieves;return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAchiviesFomUser(i);case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(E.Card,{style:{width:"20rem"}},a.a.createElement(E.CardContent,{compact:!0},a.a.createElement(E.Cell,{content:a.a.createElement(E.TextBoxBiggerTitle,null,"\u0423\u0442\u0440\u043e \u043d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u0441"),right:a.a.createElement("span",{style:{marginTop:5}})}),a.a.createElement(z.b,{to:"/fastworkout",style:{textDecoration:"none"}},a.a.createElement(E.Cell,{onClick:function(){t(2),s("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),o("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430")},left:a.a.createElement(E.CellIcon,null,a.a.createElement(W.IconAccessibility,null)),content:a.a.createElement(E.TextBox,null,a.a.createElement(E.TextBoxTitle,null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),a.a.createElement(E.TextBoxSubTitle,null,"10 \u043c\u0438\u043d")),right:a.a.createElement(E.CellDisclosure,null)})),a.a.createElement(z.b,{to:"/choose",style:{textDecoration:"none"}},a.a.createElement(E.Cell,{left:a.a.createElement(E.CellIcon,null,a.a.createElement(W.IconApps,null)),onClick:function(){return n()},content:a.a.createElement(E.TextBox,null,a.a.createElement(E.TextBoxTitle,null,"\u041c\u0435\u043d\u044e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"),a.a.createElement(E.TextBoxSubTitle,null,"\u041d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441")),right:a.a.createElement(E.CellDisclosure,null)})),a.a.createElement(z.b,{to:"/calendar",style:{textDecoration:"none"}},a.a.createElement(E.Cell,{left:a.a.createElement(E.CellIcon,null,a.a.createElement(W.IconCalendar,null)),content:a.a.createElement(E.TextBox,null,a.a.createElement(E.TextBoxTitle,null,"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),a.a.createElement(E.TextBoxSubTitle,null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430")),right:a.a.createElement(E.CellDisclosure,null)})))),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement(U.Headline3,{style:{marginRight:"0.5rem",marginTop:"0.5rem"}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),a.a.createElement(E.Button,{size:"s",onClick:function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAchiviesFomUser(i);case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},a.a.createElement(W.IconRefresh,{size:"xs"}))),a.a.createElement(E.MarkedList,null,a.a.createElement(E.MarkedItem,{text:"\u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438 \u043f\u043e\u0434\u0440\u044f\u0434",style:{color:b.primary}},a.a.createElement(E.Badge,{text:c.dict?c.dict:0,size:"l",view:"secondary"})),a.a.createElement(E.MarkedItem,{text:"\u0432\u0441\u0435\u0433\u043e \u0434\u043d\u0435\u0439 \u0441 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438",style:{color:b.primary}},a.a.createElement(E.Badge,{text:c.count_days_train?c.count_days_train:0,size:"l",view:"secondary"})),a.a.createElement(E.MarkedItem,{text:"\u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a",style:{color:b.primary}},a.a.createElement(E.Badge,{text:c.count_train?c.count_train:0,size:"l",view:"secondary"})))))})),Y=(n(59),n(255)),L=n.n(Y),F=(n(960),function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t,":").concat(H(n))}),J={content:{color:"".concat(b.text),backgroundColor:"".concat(b.background),backgroundImage:"".concat(b.gradient),top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"1em",padding:"1em"}},P=function(e){var t,n=e.setIter,r=e.timeCount,c=e.iter,o=e.workoutLength,s=e.assistant,i=e.userId,p=e.setWorkOutStartet,d=Object(x.f)(),f=a.a.useState(!1),b=Object(m.a)(f,2),h=b[0],v=b[1];var g=a.a.useState(r.timeCount),y=Object(m.a)(g,2),k=y[0],j=y[1],w=a.a.useState(30),O=Object(m.a)(w,2),I=O[0],C=O[1];return a.a.useEffect((function(){console.log("\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044e\u0437"),j(r.timeCount)}),[r]),a.a.useEffect((function(){var e;if(k>0)e=setTimeout((function(){return j((function(e){return e-1}))}),1e3);else if(c+1===o){var t;(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.createProgressAchieve(i,new Date,!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),null===(t=s.current)||void 0===t||t.sendData({action:{action_id:"train_finish",parameters:{}}}),n(c+1)}else 0===k&&v(!0);return function(){e&&clearTimeout(e)}}),[k]),a.a.useEffect((function(){var e;return I>0?e=setTimeout((function(){return C((function(e){return e-1}))}),1e3):0===k&&(v(!1),n(c+1),j(r)),function(){e&&clearTimeout(e)}}),[I]),a.a.createElement("div",null,0!==k&&a.a.createElement(U.Headline2,null,"\u0412\u0440\u0435\u043c\u044f: ",F(k)),a.a.createElement("div",null,a.a.createElement(L.a,{isOpen:h,onAfterOpen:function(){t.style.color="",C(30)},style:J},a.a.createElement("h2",{ref:function(e){return t=e},style:{textAlign:"center"}},"\u041e\u0442\u0434\u044b\u0445"),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(U.Headline2,null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437"),a.a.createElement("br",null),0!==I&&a.a.createElement(U.Headline2,null,F(I))),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(E.Button,{onClick:function(){v(!1),C(30),d.push("/"),p(!1),n(-1)}},a.a.createElement(W.IconHouse,null)),a.a.createElement(E.Button,{onClick:function(){v(!1),n(c+1),j(r)}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))},H=function(e){return 1===String(e).length?"0".concat(e):"".concat(e)},Z=new Date,V={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"},X=Object(x.g)((function(e){var t=e.groupId,n=e.workoutExercises,c=e.setWorkoutExercises,o=e.description,s=e.name,i=e.userId,m=e.workOutStarted,p=e.setWorkOutStartet,d=e.setAchieves,f=e.iterChanged,h=e.assistant,v=e.iter,g=e.setIter,y=e.setGroupId,k=e.assistantType,j=Object(x.f)();Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getExircicesfromGroup(t);case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){void 0!=n[v]&&w(n[v].discription,n[v].discriptionJoy)}),[v]),Object(r.useEffect)((function(){var e;v+1==n.length&&-1!=v&&-1!=f&&(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.createProgressAchieve(i,new Date,!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),null===(e=h.current)||void 0===e||e.sendData({action:{action_id:"train_finish",parameters:{}}}));1==f?g(v+1):0==f&&v>0&&g(v-1)}),[f]);var w=function(e,t){var n;null===(n=h.current)||void 0===n||n.sendData({action:{action_id:"say",parameters:{off_description:e,description:t,number:v}}})};return m?a.a.createElement("div",null,a.a.createElement(E.Card,{style:{marginBottom:"3rem"}},a.a.createElement(E.CardBody,null,a.a.createElement(E.CardContent,null,n?a.a.createElement("div",null,v==n.length?a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},a.a.createElement(E.TextBoxBigTitle,null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(E.CardParagraph1,null,Z.toLocaleString("ru",V)," ")),n?a.a.createElement(E.MarkedList,null,n.map((function(e,t){e._id;var n=e.trainingName;return a.a.createElement(E.MarkedItem,{text:n,style:{color:b.primary}},a.a.createElement(W.IconDone,{size:"xs",color:b.accent}))}))):a.a.createElement(E.Spinner,null)),a.a.createElement("br",null),a.a.createElement(E.Button,{onClick:function(){p(!1),y(2),j.push("/"),g(-1),p(!1)}},a.a.createElement(W.IconHouse,null))):a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.a.createElement(E.TextBoxBigTitle,null,n[v].trainingName),a.a.createElement("div",{style:{marginTop:"0.5rem"}},a.a.createElement(P,{assistant:h,setIter:g,timeCount:{timeCount:n[v].time},iter:v,userId:i,workoutLength:n.length,setAchieves:d,workoutExercises:n,sayExircise:w,setWorkOutStartet:p}))),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"row"}},a.a.createElement("div",{class:"wrapper exmp2"},a.a.createElement("img",{src:n[v].photo})),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(E.CardParagraph1,{lines:7},"joy"==k.current?n[v].discriptionJoy:n[v].discription),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement(E.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,disabled:0==v,style:{marginTop:"1em",marginRight:"1em"},tabIndex:-1,onClick:function(){g(v-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435"),a.a.createElement(E.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){var e;v+1==n.length&&(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.createProgressAchieve(i,new Date,!0);case 2:return e.next=4,N.getAchiviesFomUser(i);case 4:t=e.sent,d(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),null===(e=h.current)||void 0===e||e.sendData({action:{action_id:"train_finish",parameters:{}}}));g(v+1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")))))):a.a.createElement("div",null,a.a.createElement(E.Spinner,null)))))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(U.Headline2,null,s),n?a.a.createElement(E.MarkedList,null,n.map((function(e,t){e._id;var n=e.trainingName;return a.a.createElement(E.MarkedItem,{text:n,style:{color:b.primary}},a.a.createElement(W.IconDone,{size:"xs",color:b.accent}))}))):a.a.createElement(E.Spinner,null),a.a.createElement("br",null)),a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(E.Card,{style:{width:"20rem"}},a.a.createElement(E.CardBody,null,a.a.createElement(E.CardContent,null,a.a.createElement(E.TextBox,null,a.a.createElement(E.TextBoxBigTitle,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),a.a.createElement(E.CardParagraph1,{style:{marginTop:"0.75rem"},lines:4},o),a.a.createElement(E.TextBoxSubTitle,null,"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445")),a.a.createElement("br",null),a.a.createElement(E.Button,{onClick:function(){void 0!=n[0].discriptionJoy&&void 0!=n[0].discription&&(w(n[0].discription,n[0].discriptionJoy),p(!0),g(v+1))}},"\u041d\u0430\u0447\u0430\u0442\u044c")))))))})),Q=n(45),q=Object(x.g)((function(e){var t=e.setGroupId,n=e.setDescription,c=e.setName,o=e.workouts,s=e.assistant;Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAllGroupsExercises();case 2:t=e.sent,o.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=Object(r.useState)(1),p=Object(m.a)(i,2),d=p[0],f=p[1];return a.a.createElement(E.Container,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(U.Headline2,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438")),a.a.createElement("br",null),a.a.createElement(Q.Row,null,o.current?a.a.createElement(E.Carousel,{as:Q.Row,axis:"x",index:d,scrollSnapType:"mandatory",detectActive:!0,detectThreshold:.5,stylingCallback:function(e,t){e.style.opacity="".concat(1-Math.abs(t)/2)},stylingResetCallback:function(e){e.style.opacity=""},onIndexChange:function(e){return f(e)},paddingStart:"50%",paddingEnd:"50%",style:{paddingTop:"1rem",paddingBottom:"1.25rem"}},o.current.data.map((function(e,r){var i=e.name,u=(e.short_description,e.description),l=e.image;return a.a.createElement(E.CarouselCol,{key:"item:".concat(r)},a.a.createElement(E.Card,{style:{width:"10rem",height:"12rem",margin:"0.3rem"},scaleOnFocus:!1,focused:r==d},a.a.createElement(E.CardBody,null,a.a.createElement("div",{style:{height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(l,")")}}),a.a.createElement(E.CardContent,null,a.a.createElement(E.TextBox,null,a.a.createElement(E.TextBoxBigTitle,null,i)),a.a.createElement(z.b,{style:{color:"#FFF",textDecoration:"none"},to:"/fastworkout"},a.a.createElement(E.Button,{view:"primary",size:"s",scaleOnInteraction:!1,outlined:!1,fullWidth:!0,style:{marginTop:"1em"},tabIndex:-1,onClick:function(){console.log(o.data),s.current.sendData({action:{action_id:"after_choose_train",parameters:{}}}),t(r+1),n(u),c(i)}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"))))))}))):a.a.createElement(E.Spinner,null)))})),K=(n(961),new Date),$={year:"numeric",month:"numeric",day:"numeric",timezone:"UTC"},ee=Object(x.g)((function(e){var t=e.groupId,n=e.workoutExercises,c=e.setWorkoutExercises,o=(e.description,e.name,e.userId,e.workOutStarted,e.setWorkOutStartet),s=(e.setAchieves,e.iterChanged,e.assistant,e.iter),i=e.setIter,m=e.setGroupId,p=(e.assistantType,e.history),d=e.workouts_wxircices_names;return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getExircicesfromGroup(t);case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("Workout useeffect"),alert(s),alert(n)}),[]),a.a.createElement("div",null,a.a.createElement(E.Card,{style:{marginBottom:"3rem"}},a.a.createElement(E.CardBody,null,a.a.createElement(E.CardContent,null,a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},a.a.createElement(E.TextBoxBigTitle,null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement("div",{style:{flexDirection:"column"}},a.a.createElement(E.CardParagraph1,null,K.toLocaleString("ru",$)," ")),d.current?a.a.createElement(E.MarkedList,null,d.current.map((function(e,t){e._id;var n=e.name;return a.a.createElement(E.MarkedItem,{text:n,style:{color:b.primary}},a.a.createElement(W.IconDone,{size:"xs",color:b.accent}))}))):a.a.createElement(E.Spinner,null)),a.a.createElement("br",null),a.a.createElement(E.Button,{onClick:function(){o(!1),i(-1),m(2),p.push("/")}},a.a.createElement(W.IconHouse,null))),";")))))})),te=h.default.div(A||(A=Object(p.a)(["\n  padding: 30px;\n  ","\n"])),U.body1),ne=Object(h.createGlobalStyle)(v.sberBox),re=Object(h.createGlobalStyle)(f.darkEva),ae=Object(h.createGlobalStyle)(f.darkSber),ce=Object(h.createGlobalStyle)(f.darkJoy),oe=Object(h.createGlobalStyle)(M||(M=Object(p.a)(["\n  html {\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n    min-height: 100vh;\n  }\n"])),b.text,b.background,b.gradient);var se=Object(x.g)((function(){var e,t=Object(r.useState)("sber"),n=Object(m.a)(t,2),c=n[0],o=n[1],i=Object(r.useRef)(),p=Object(r.useRef)(),f=Object(r.useRef)(),b=Object(r.useRef)(),E={notes:[]},h=Object(r.useState)([]),v=Object(m.a)(h,2),g=v[0],y=v[1],k=Object(r.useState)(-1),j=Object(m.a)(k,2),w=j[0],O=j[1],I=Object(r.useState)([]),C=Object(m.a)(I,2),_=C[0],T=C[1],S=Object(r.useState)(!1),B=Object(m.a)(S,2),D=B[0],A=B[1],M=Object(r.useState)(-1),U=Object(m.a)(M,2),z=U[0],W=U[1],Y=Object(r.useState)(-1),L=Object(m.a)(Y,2),F=L[0],J=(L[1],Object(r.useState)(1)),P=Object(m.a)(J,2),H=P[0],Z=P[1],V=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Calendar"===e.t0?3:"fastworkout"===e.t0?5:"choose_training"===e.t0?7:"fast_training"===e.t0?9:11;break;case 3:case 5:return Q.push("/calendar"),e.abrupt("break",12);case 7:return Q.push("/choose"),e.abrupt("break",12);case 9:return Q.push("/fastworkout"),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=Object(x.f)(),K=function(e){e=e.charAt(0).toUpperCase()+e.slice(1).trim(),console.log("WK",p.current);var t=!0;void 0!=p.current.data&&(p.current.data.map((function(n,r){n._id;var a=n.name,c=n.discription;console.log("name",a),console.log("train_name",e),e==a.trim()&&(i.current.sendData({action:{action_id:"after_choose_train",parameters:{}}}),t=!1,console.log("i",r),console.log("name",a),Ee(r+1),we(a),ge(c),Q.push("/fastworkout"))})),t&&i.current.sendData({action:{action_id:"bad_train_category",parameters:{}}}))},$=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(0),A(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="next"===e.t0?3:"previous"===e.t0?5:7;break;case 3:return W(1),e.abrupt("break",7);case 5:return W(0),e.abrupt("break",7);case 7:W(-1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("dispatchAssistantAction",t),!t){e.next=34;break}e.t0=t.type,e.next="character"===e.t0?5:"show_calendar"===e.t0?7:"to_fast_training"===e.t0?9:"to_choose_training"===e.t0?12:"choose_train"===e.t0?14:"start_train"===e.t0?16:"next_exircise"===e.t0?18:"previous_exircise"===e.t0?20:"to_main"===e.t0?22:"move_left"===e.t0?26:"move_right"===e.t0?28:"update_stat"===e.t0?30:33;break;case 5:return o(t.character.id),e.abrupt("break",34);case 7:return V("Calendar"),e.abrupt("break",34);case 9:return Ee(2),V("fast_training"),e.abrupt("break",34);case 12:return V("choose_training"),e.abrupt("break",34);case 14:return K(t.data),e.abrupt("break",34);case 16:return $(),e.abrupt("break",34);case 18:return se("next"),e.abrupt("break",34);case 20:return se("previous"),e.abrupt("break",34);case 22:return Q.push("/"),A(!1),O(-1),e.abrupt("break",34);case 26:return H>0&&Z(H-1),e.abrupt("break",34);case 28:return H<p.current.data.length&&Z(H+1),e.abrupt("break",34);case 30:return function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAchiviesFomUser(_);case 2:t=e.sent,pe(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),e.abrupt("break",34);case 33:return e.abrupt("break",34);case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=Object(r.useState)([]),le=Object(m.a)(ue,2),me=le[0],pe=le[1];Object(r.useEffect)((function(){i.current=function(e){var t;return Object(d.b)({token:null!==(t="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTcwMTM5MzAsImV4cCI6MTYxNzEwMDMzMCwidHlwZSI6IkJlYXJlciIsImp0aSI6ImU1ZDYyODhlLTYxNjUtNDY1OS04MmNiLTllZTI3YzM2NWU1MCIsInN1YiI6IjdkMTM4N2FhY2RiYjY0ZTMwNTE3ODQ3ZGVhNzgwMDNmMTA4NjE1YmNlZGIzNTlmYjhmNWJiMWVkOGI0OTU3ZmM1MzliZTkyNzAwNDI2Mjk4IiwiYXVkIjoiVlBTIn0.TwTrLM3Tb7qZ_3ffWKi3W-vgS0p9lVPmg8Av-aqEPSOMYk9RivAlLcx0vX2LjDZRM0aM4wi7oHCayJXqnSu7DF9SSaHgQ-xPgwJAkjOhn_Gg91kqxkRUczWXND810D_vY871nh1WgMNBkiGeRLEECBBvgAR90sRvjeoIkkeR9N4nzpzGR4Rn55G-4F1IPIVUM8SI_NmhZtqx1_HpuAhMfLnmnnhHfhcxQIId3BJJEMDxH-Kqv8N5J6z1Mec_mo5NHZUJTxt8CK2L7zWwfi3zgZVNaWv6kZVcQ31nSxXEgl5lcsMf0bgcAZYWSgVnnBCPDnfArR7LnI5Akh2uPLvxZthgrDnEhLvWcxBVNdUN-Y5YD3aEvgf_tIvj2gd6c6vZReYC94b7bpsoVcI_C7j0IAp-c044qw6HXoxIWUdp9aC8rpNrs8SRIGSjqy-XCqyNfDmy9TFpdauWpBuJ55jj7j63kAHtMggz4pCCDDLiCU3PBeQ1mNEJGHocx7iWAfHXbQ0TZ5ZIBc0_3Bmm4sB_Ey_AVzlIWKYk31YYyGkjGKt2Kso72DRrrBxe4fkc3j0Zr0FQRle9Y0oyP4KqXM7i8nMNrKWa8hG3QUbolLl3_Q5LhYOyXTFjaeL5hrazgYV3gfNYcpaze355k02m_p1-9Ltnt3xItkFfmoQso31Sj3o")?t:"",initPhrase:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438 \u0411\u043e\u0434\u0440\u043e\u0435 \u0443\u0442\u0440\u043e",getState:e})}((function(){return function(){console.log("getStateForAssistant: this.state:",E);var e={item_selector:{items:E.notes.map((function(e,t){return{number:t+1,id:e.id,title:e.title}}))}};return console.log("getStateForAssistant: state:",E),e}()})),i.current.on("start",(function(e){console.log("assistant.on(start)",e)})),i.current.on("data",(function(e){if("smart_app_data"==e.type){if(console.log("userId",e.user_id),void 0!=e.sub)T(e.sub),N.createUser(e.sub),function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getAchiviesFomUser(e.sub);case 2:n=t.sent,pe(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),N.createUser(_);else if(void 0!=e.user_id){T(e.user_id),N.createUser(_),function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getAchiviesFomUser(e.userId);case 2:n=t.sent,pe(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}"official"==e.assistant&&(f.current="sber",o("sber")),"no_official"==e.assistant&&(f.current="joy",o("joy"))}"character"==e.type&&(f.current=e.character.id),void 0!=e.assistant&&("official"==e.assistant?f.current="sber":f.current="joy"),console.log("assistant.on(data)",e);var t=e.action;ie(t)}),[]),null!=i.current?console.log("Non null, send data"):console.log("Null")}),[]),Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAllGroupsExercises();case 2:t=e.sent,p.current=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);var de=Object(r.useState)(2),fe=Object(m.a)(de,2),be=fe[0],Ee=fe[1],he=Object(r.useState)("\u041e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438. \u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0437\u043c\u044f\u0442\u044c \u0442\u0435\u043b\u043e \u0431\u0435\u0437 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c."),ve=Object(m.a)(he,2),xe=ve[0],ge=ve[1],ye=Object(r.useState)("\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430"),ke=Object(m.a)(ye,2),je=ke[0],we=ke[1],Oe=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.current.sendData({action:{action_id:t,parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.current.sendData({action:{action_id:"chooseCategory",parameters:{}}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(te,null,a.a.createElement(oe,null),a.a.createElement(ne,null),function(){switch(c){case"sber":return a.a.createElement(ae,null);case"eva":return a.a.createElement(re,null);case"joy":return a.a.createElement(ce,null);default:return}}(),a.a.createElement(x.c,null,a.a.createElement(x.a,{path:"/Completion"},a.a.createElement(ee,null,"workouts_wxircices_names=",b,"groupId=",be,"description=",xe,"workoutExercises=",g,"setWorkoutExercises=",y,"name=",je,"userId=",_,"workOutStarted=",D,"setWorkOutStartet=",A,"iterChanged=",z,"setAchieves=",pe,"assistant=",i,"iter=",w,"setIter=",O,"setGroupId=",Ee,"assistantType=",f,"history=",Q)),a.a.createElement(x.a,{path:"/choose"},a.a.createElement(q,(e={carouselIndex:H,setGroupId:Ee,setDescription:ge,setName:we,workouts:p,SendDataToAssistant:Oe,assistant:i},Object(s.a)(e,"carouselIndex",H),Object(s.a)(e,"setCarouselIndex",Z),e))),a.a.createElement(x.a,{path:"/fastworkout"},a.a.createElement(X,{workouts_wxircices_names:b,groupId:be,description:xe,workoutExercises:g,setWorkoutExercises:y,name:je,userId:_,workOutStarted:D,setWorkOutStartet:A,iterChanged:z,setAchieves:pe,assistant:i,iter:w,setIter:O,setGroupId:Ee,assistantType:f})),a.a.createElement(x.a,{path:"/calendar",exact:!0},a.a.createElement(G,{userId:_,digit:F})),a.a.createElement(x.a,{path:"/"},a.a.createElement(R,{setGroupId:Ee,ToChooseCateg:Ie,achieves:me,setName:we,setDescription:ge,userId:_,setAchieves:pe}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z.a,null,a.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[962,1,2]]]);
//# sourceMappingURL=main.c24042d7.chunk.js.map