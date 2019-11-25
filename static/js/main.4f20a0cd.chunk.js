(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),o=a(18),l=a(5),i=a(15),u=a(16),m=a(19),d=a(17),f=a(20),v=(a(30),Object(n.memo)(function(e){var t=e.types,a=e.changeType,n=e.selected;return r.a.createElement("div",{className:"TypeSelect"},t.map(function(e,t){return r.a.createElement("button",{key:e.name,onClick:function(){return a(e)},className:e.name===n.name?"active":""},e.name)}))}));function p(e){return e>9?e:"0".concat(e)}function g(e){var t=p(Math.floor(e/60)),a=p(Math.floor(e%60));return"".concat(t,":").concat(a)}a(31);var k=function(e){var t=e.time,a=e.status,n=e.progress;document.title="(".concat(g(t),") Pomodoro");var s=280*Math.PI,c=s-n/100*s;return r.a.createElement("div",{className:"TimeDisplay"},r.a.createElement("svg",{width:"100%",viewBox:"0 0 ".concat(300," ").concat(300)},r.a.createElement("circle",{stroke:"#ddd",fill:"#fff",strokeWidth:5,r:140,cx:150,cy:150}),r.a.createElement("circle",{stroke:"#D9534F",fill:"transparent",strokeWidth:5,strokeDasharray:s+" "+s,style:{strokeDashoffset:c},r:140,cx:150,cy:150})),r.a.createElement("div",null,r.a.createElement("h1",null,g(t)),r.a.createElement("p",null,a)))},E=(a(32),Object(n.memo)(function(e){var t=e.start,a=e.reset,n=e.pause,s=e.status;return r.a.createElement("div",{className:"Controls"},!s&&r.a.createElement("button",{onClick:t,className:"start"},"Start Timer"),"Finished"===s&&r.a.createElement("button",{onClick:t,className:"start"},"Restart Timer"),("Paused"===s||"Running"===s)&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"reset"},"Reset"),r.a.createElement("button",{onClick:n,className:"Paused"===s?"resume":"pause"},"Paused"===s?"Resume":"Pause")))})),h=(a(33),Object(n.memo)(function(){return r.a.createElement("div",{className:"Shortcuts"},r.a.createElement("i",{className:"far fa-keyboard"}),r.a.createElement("div",{className:"Shortcuts-box"},r.a.createElement("div",{className:"Shortcut"},r.a.createElement("div",null,"Play / Pause / Resume"),r.a.createElement("div",null,r.a.createElement("kbd",null,"Space"))),r.a.createElement("div",{className:"Shortcut"},r.a.createElement("div",null,"Reset"),r.a.createElement("div",null,r.a.createElement("kbd",null,"Esc"))),r.a.createElement("div",{className:"Shortcut"},r.a.createElement("div",null,"Pomodoro"),r.a.createElement("div",null,r.a.createElement("kbd",null,"1"),r.a.createElement("kbd",null,"Num1"))),r.a.createElement("div",{className:"Shortcut"},r.a.createElement("div",null,"Short Break"),r.a.createElement("div",null,r.a.createElement("kbd",null,"2"),r.a.createElement("kbd",null,"Num2"))),r.a.createElement("div",{className:"Shortcut"},r.a.createElement("div",null,"Long Break"),r.a.createElement("div",null,r.a.createElement("kbd",null,"3"),r.a.createElement("kbd",null,"Num3")))))})),b=(a(34),Object(n.memo)(function(e){var t=e.sound,a=e.toggleSound;return r.a.createElement("button",{className:"ToggleSound ".concat(t&&"active"),onClick:a,title:t?"Disable Sound":"Enable Sound"},r.a.createElement("i",{className:"fa fa-volume-".concat(t?"up":"mute")}))})),T=(a(35),Object(n.memo)(function(e){var t=e.task,a=e.toggleTask;return r.a.createElement("button",{className:"ToggleTask ".concat(t&&"active"),onClick:a,title:t?"Disable Task":"Enable Task"},r.a.createElement("i",{className:"fa fa-tasks"}))})),S=a(4),y=a(8),N=Object(n.createContext)({});a(37);function O(e){var t=e.task,a=e.index,s=Object(n.useRef)(),c=Object(n.useContext)(N),o=c.move,i=c.handleStatus,u=Object(l.c)({item:{type:"TASK",id:t.id,index:a},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(S.a)(u,2),d=m[0].isDragging,f=m[1],v=Object(l.d)({accept:"TASK",hover:function(e,n){if(e.id!==t.id){var r=e,c=t,l=s.current.getBoundingClientRect(),i=(l.bottom-l.top)/2,u=n.getClientOffset().y-l.top;r.order<c.order&&u<i||r.order>c.order&&u>i||(o(e.index,a),e.index=a)}}});return f((0,Object(S.a)(v,2)[1])(s)),r.a.createElement("div",{ref:s,className:d?"Task Dragging":"Task"},r.a.createElement("div",null,t.title),r.a.createElement("span",{onClick:function(){return i(t)}},t.closed?"Open":"Close"))}a(38);var j=Object(n.memo)(function(e){e.selectedTaskType;var t=Object(n.useState)(""),a=Object(S.a)(t,2),s=a[0],c=a[1],o=[{name:"All",value:-1},{name:"Open",value:!1},{name:"Closed",value:!0}],l=Object(n.useState)(JSON.parse(window.localStorage.getItem("pomodoro-react-tasks"))||[]),i=Object(S.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(o[0]),f=Object(S.a)(d,2),p=f[0],g=f[1];return Object(n.useEffect)(function(){window.localStorage.setItem("pomodoro-react-tasks",JSON.stringify(u))},[u]),r.a.createElement(N.Provider,{value:{tasks:u,move:function(e,t){m(Object(y.a)(u,function(a){var n=a[e];a.splice(e,1),a.splice(t,0,n)}))},handleStatus:function(e){console.log("task:",e),m(Object(y.a)(u,function(t){var a=t.findIndex(function(t){return t.id===e.id});t[a].closed=!t[a].closed}))}}},r.a.createElement(v,{types:o,selected:p,changeType:g}),r.a.createElement("div",{className:"Tasks"},r.a.createElement("div",{className:"Tasks-box"},u.length>0?u.filter(function(e){return e.closed===p.value||-1===p.value}).map(function(e,t){return r.a.createElement(O,{key:e.id,index:t,task:e})}):r.a.createElement("div",{className:"Task"},"No Tasks"))),r.a.createElement("div",{className:"Task"},r.a.createElement("input",{value:s,onChange:function(e){return c(e.target.value)},placeholder:"New Task"}),r.a.createElement("span",{onClick:function(){m(Object(y.a)(u,function(e){e.push({id:e.length+1,title:s,closed:!1})})),c("")}},"Add")))}),w=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleKeyUp=function(e){"INPUT"!==e.target.tagName&&(" "===e.key?a.pauseTimer():"Escape"===e.key?a.resetTimer():e.key>=1&&e.key<=a.props.types.length&&a.changeType(a.props.types[e.key-1]))},a.changeType=function(e){a.resetTimer(),a.setState({selectedType:e,time:e.time,running:!1})},a.tick=function(){if(a.state.time<=1){a.stopInterval(),a.setState({running:!1}),a.state.sound&&a.sound.play();try{navigator.serviceWorker.register("service-worker.js").then(function(e){e.showNotification("".concat(a.state.selectedType.name," finished!"))})}catch(e){console.log("Notification error",e)}}a.setState(function(e){return{time:e.time-1}})},a.stopInterval=function(){clearInterval(a.state.interval),a.setState({interval:null})},a.startTimer=function(){a.setState(function(e){return{running:!0,interval:setInterval(a.tick,1e3),time:e.time>0?e.time:e.selectedType.time}}),a.sound.pause(),a.sound.currentTime=0},a.resetTimer=function(){a.stopInterval(),a.setState(function(e){return{time:e.selectedType.time,running:!1}})},a.pauseTimer=function(){a.state.interval?a.stopInterval():a.startTimer()},a.getStatus=function(){var e=a.state,t=e.time,n=e.running,r=e.interval;return 0===t?"Finished":n&&!r?"Paused":n?"Running":void 0},a.getProgress=function(){var e=a.state.time,t=a.state.selectedType.time;return(t-e)/t*100},a.handleToggleSound=function(){a.setState(function(e){return{sound:!e.sound}},function(){window.localStorage.setItem("pomodoro-react-sound",a.state.sound)})},a.handleToggleTask=function(){a.setState(function(e){return{taskStatus:!e.taskStatus}},function(){window.localStorage.setItem("pomodoro-react-taskStatus",a.state.taskStatus)})},a.state={selectedType:e.types[0],time:e.types[0].time,interval:null,running:!1,sound:JSON.parse(window.localStorage.getItem("pomodoro-react-sound"))||!0,taskStatus:JSON.parse(window.localStorage.getItem("pomodoro-react-taskStatus"))||null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp),Notification.requestPermission(),this.sound=new Audio("bell.flac"),this.sound.preload="auto"}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state,t=e.time,a=e.selectedType,n=e.sound,s=e.taskStatus,c=this.props.types;return r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"Pomodoro"},r.a.createElement(v,{types:c,selected:a,changeType:this.changeType}),r.a.createElement(k,{time:t,status:this.getStatus(),progress:this.getProgress()}),r.a.createElement(E,{start:this.startTimer,reset:this.resetTimer,pause:this.pauseTimer,status:this.getStatus()}),r.a.createElement(T,{task:s,toggleTask:this.handleToggleTask}),r.a.createElement(h,null),r.a.createElement(b,{sound:n,toggleSound:this.handleToggleSound})),s&&r.a.createElement("div",{className:"TaskPainel"},r.a.createElement(j,null)))}}]),t}(n.Component));w.defaultProps={types:[{name:"Pomodoro",time:1500},{name:"Short Break",time:300},{name:"Long Break",time:900}]};var C=w;c.a.render(r.a.createElement(l.b,{backend:o.a},r.a.createElement(C,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4f20a0cd.chunk.js.map