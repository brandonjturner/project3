(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){},140:function(e){e.exports={"qb-1":{id:"qb-1",name:"Patrick Mahomes",avgPocketTime:2,completionPercentage:.45,image:"https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08282018/30123.png",currentTeam:"KC",vsDefenseCompletionPercentage:{ATL:.45,ARI:.45,BAL:.45,BUF:.45,CAR:.45,CHI:.45,CIN:.45,CLE:.45,DAL:.45,DEN:.45,DET:.45,GB:.45,HOU:.45,IND:.45,JAX:.45,KC:.45,LAC:.45,LAR:.45,MIA:.45,MIN:.45,NE:.45,NO:.45,NYG:.45,NYJ:.45,OAK:.45,PHI:.45,PIT:.45,SEA:.45,SF:.45,TB:.45,TEN:.45,WAS:.45}},"qb-2":{id:"qb-2",name:"Andy Dalton",avgPocketTime:1.8,completionPercentage:.5,image:"https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08222018/24822.png",currentTeam:"CIN",vsDefenseCompletionPercentage:{ATL:.45,ARI:.45,BAL:.45,BUF:.45,CAR:.45,CHI:.45,CIN:.45,CLE:.45,DAL:.45,DEN:.45,DET:.45,GB:.45,HOU:.45,IND:.45,JAX:.45,KC:.45,LAC:.45,LAR:.45,MIA:.45,MIN:.45,NE:.45,NO:.45,NYG:.45,NYJ:.45,OAK:.45,PHI:.45,PIT:.45,SEA:.45,SF:.45,TB:.45,TEN:.45,WAS:.45}},"qb-3":{id:"qb-3",name:"Andrew Luck",avgPocketTime:2.2,completionPercentage:.33,image:"https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09212017/25711.png",currentTeam:"IND",vsDefenseCompletionPercentage:{ATL:.45,ARI:.45,BAL:.45,BUF:.45,CAR:.45,CHI:.45,CIN:.45,CLE:.45,DAL:.45,DEN:.45,DET:.45,GB:.45,HOU:.45,IND:.45,JAX:.45,KC:.45,LAC:.45,LAR:.45,MIA:.45,MIN:.45,NE:.45,NO:.45,NYG:.45,NYJ:.45,OAK:.45,PHI:.45,PIT:.45,SEA:.45,SF:.45,TB:.45,TEN:.45,WAS:.45}}}},148:function(e,t,a){e.exports=a(291)},153:function(e,t,a){},155:function(e,t,a){},195:function(e,t,a){},236:function(e,t,a){},238:function(e,t,a){},240:function(e,t,a){},242:function(e,t,a){},283:function(e,t,a){},285:function(e,t,a){},287:function(e,t,a){},289:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),s=(a(153),a(9)),i=a(10),l=a(13),m=a(11),u=a(12),d=a(302),g=a(303),p=a(304),h=a(29),b=a(19),f=a(294),E=a(293),v=a(299),C=a(295),O=a(181),j=a(32),y=a(298),w=a(292),A=a(301),x=(a(155),a(33));function D(){var e=Object(j.a)(["\n  background-color: ",";\n  color: ",";\n"]);return D=function(){return e},e}var N=x.a.button(D(),function(e){return e.compareMode?"rgba(226, 148, 2, 0.836)":"none"},function(e){return e.compareMode?"rgba(255, 255, 255, 0.836)":"rgba(226, 148, 2, 0.678)"}),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:"placeholder",signedIn:!1,redirectTo:null},a.componentDidMount=function(){!1===a.props.placeholder?a.setState({currentUser:""}):a.setState({signedIn:!0})},a.signOut=function(e){e.preventDefault(),a.setState({redirectTo:"/"})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(this.state.redirectTo&&!0===this.state.signedIn)return r.a.createElement(A.a,{to:{pathname:this.state.redirectTo}});var e=r.a.createElement(y.a,{fixedTop:!0,inverse:!0,fluid:!0,pullLeft:!0},r.a.createElement(y.a.Header,{pullLeft:!0},r.a.createElement(y.a.Brand,null,r.a.createElement("a",{href:"/auth"},"Blitz Report"))),r.a.createElement(w.a,{navbar:!0,pullLeft:!0},r.a.createElement("div",{className:"compare-toggle-container"},!1===this.props.placeholder?"":r.a.createElement(N,{className:"compare-button",onClick:this.props.toggleCompareMode,compareMode:this.props.compareMode},"Compare Mode"))),r.a.createElement(w.a,{navbar:!0,pullRight:!0,bsClass:"logout-button-container nav"},r.a.createElement("div",{className:"user-container"},r.a.createElement("div",{className:"username"},this.state.currentUser),r.a.createElement("div",{className:"h-100",style:{minHeight:"50px"}},!1===this.props.placeholder?"":r.a.createElement("button",{className:"logout-button",onClick:this.signOut},"Sign Out"))))),t=r.a.createElement(y.a,{fixedBottom:!0,inverse:!0,fluid:!0,bsClass:"nav-bot navbar"});return this.props.footer?t:e}}]),t}(n.Component),S=a(24);a(195);function q(){var e=Object(j.a)(["\n  background-color: ",";\n"]);return q=function(){return e},e}function k(){var e=Object(j.a)(["\n  background-color: ",";\n"]);return k=function(){return e},e}var T=x.a.div(k(),function(e){return e.isDragging?"#141418f3":"#322b3acc"}),P=x.a.div(q(),function(e){return e.isDragging?"#141418f3":"#322b3acc"}),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentCol:a.props.currentCol,saved:a.props.saved},a.handleSave=function(e,t){e.preventDefault(),console.log(a.props.togglesaved)},a.handleRemove=function(e,t){e.preventDefault(),a.props.togglesaved(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.saved!==this.props.saved&&this.setState({saved:e.saved})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.qb,o=this.state,c=o.currentCol,s=o.saved;return r.a.createElement(S.b,{draggableId:this.props.qb.id,index:this.props.index},function(t,o){var i=r.a.createElement(T,Object.assign({ref:t.innerRef,id:a,className:"row qb-row"},t.draggableProps,t.dragHandleProps,{isDragging:o.isDragging}),r.a.createElement(E.a,{xs:2},r.a.createElement("div",{className:"qb-img-container"},r.a.createElement("img",{src:n.image,className:"img qb-img-prev",alt:"".concat(n.name)}))),r.a.createElement(E.a,{xs:9},r.a.createElement(f.a,null,r.a.createElement(E.a,{xs:4},r.a.createElement("h4",null,n.name)),r.a.createElement(E.a,{xs:4},r.a.createElement("h4",null,"Team: ",n.currentTeam)))),r.a.createElement(E.a,{xs:1},s?r.a.createElement("button",{className:"saved-qb-button",onClick:e.handleRemove(e.props.id)},"Saved"):r.a.createElement("button",{className:"save-qb-button",onClick:function(t){return e.handleSave(t,e.props.id)}},"Save")));return"column-2"===c?r.a.createElement(P,Object.assign({ref:t.innerRef,id:a,className:"row qb-row"},t.draggableProps,t.dragHandleProps,{isDragging:o.isDragging}),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"qb-img-container"},r.a.createElement("img",{src:n.image,className:"img qb-img",alt:"".concat(n.name)}))),r.a.createElement(E.a,{xs:8},r.a.createElement(f.a,null,r.a.createElement(E.a,{xs:8},r.a.createElement("h4",null,n.name,", ",n.currentTeam))),r.a.createElement(f.a,null,r.a.createElement(E.a,{xs:6},r.a.createElement("h4",null,"Avg. Pocket Time: ",n.avgPocketTime)),r.a.createElement(E.a,{xs:6},r.a.createElement("h4",{style:{float:"clear"}},"Completion %: ",n.completionPercentage)))),r.a.createElement(E.a,{xs:1},s?r.a.createElement("button",{className:"saved-qb-button",onClick:e.handleRemove},"Saved"):r.a.createElement("button",{className:"save-qb-button",onClick:e.handleSave},"Save"))):i})}}]),t}(n.Component),L=(a(236),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.qbs,n=t.togglesaved;return console.log(n),console.log(a),r.a.createElement(S.c,{droppableId:this.props.column.id},function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver}),r.a.createElement(O.a,{fluid:!0,bsClass:"qb-list h-100 container"},a.map(function(t,a){return r.a.createElement(B,{key:t.id,qb:t,index:a,id:t.id,name:t.name,currentCol:e.props.column.id,saved:t.saved,togglesaved:e.props.togglesaved})}),t.placeholder))})}}]),t}(n.Component)),R=(a(238),a(63)),M=a.n(R),U=a(64),z=a.n(U),Y=a(65),K=a.n(Y),F=a(66),H=a.n(F);function Q(){var e=Object(j.a)(["\n  opacity: ",";\n  transition: opacity 0.3s ease;\n"]);return Q=function(){return e},e}var Z=x.a.div(Q(),function(e){return e.isdraggingover?"0":"100"}),G=function(e){return r.a.createElement(O.a,{fluid:!0,bsClass:"welcome container"},r.a.createElement(Z,{isdraggingover:e.isdraggingover},r.a.createElement("div",{className:"welcome-text-container"},r.a.createElement("h1",{className:"title"},"Blitz Report"),r.a.createElement("p",{style:{width:"85%",textAlign:"center",direction:"ltr",color:"rgba(255, 255, 255, 0.726)"}},"Hello! Welcome to Blitz Report, where you can take your Fantasy Football game to the next level. Track your favorite Quarterback's stats throughout the season with real-time post-game updates."),r.a.createElement("h2",null,"Tutorial"),r.a.createElement("p",{style:{width:"85%",textAlign:"center",direction:"ltr",color:"rgba(255, 255, 255, 0.726)"}},"Drag a quarterback from the roster to the right-side panel to see more detailed statistics. Toggle comparison mode and drag a saved quarterback to the right panel to see their (stat) based off of the opposing team."),r.a.createElement("h2",null,"About"),r.a.createElement("p",{style:{color:"rgba(255, 255, 255, 0.726)"}},"Blitz Report was created by Brandon Turner, Bruce Chang, Cyrus Sepahbodi, and Marlo Carreon"))),r.a.createElement(Z,{isdraggingover:e.isdraggingover},r.a.createElement(f.a,{bsClass:"row welcome-row"},r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:M.a,style:{width:"140px"},alt:"Brandon Turner"}))),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:z.a,style:{width:"140px"},alt:"Bruce Chang"}))),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:K.a,style:{width:"140px"},alt:"Cyrus Sepahbodi"}))),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:H.a,style:{width:"140px"},alt:"Marlo Carreon"}))))))},W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={qbList:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.qbs;return r.a.createElement(S.c,{droppableId:this.props.column.id},function(a,n){var o=r.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps,{isDraggingOver:n.isDraggingOver}),r.a.createElement(G,{isdraggingover:n.isDraggingOver},e.props.children));return t.length>0&&(o=r.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps,{isDraggingOver:n.isDraggingOver,className:"info-section"}),r.a.createElement(O.a,{fluid:!0,bsClass:"qb-info-list h-100 container"},t.map(function(t,a){return r.a.createElement(B,{key:t.id,qb:t,index:a,id:t.id,name:t.name,currentCol:e.props.column.id})}),a.placholder))),o})}}]),t}(n.Component),X=(a(240),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.qbs;return r.a.createElement(S.c,{droppableId:this.props.column.id},function(a,n){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps,{isDraggingOver:n.isDraggingOver}),r.a.createElement(O.a,{fluid:!0,bsClass:"comparea-list h-100 container"},r.a.createElement("div",{style:{direction:"ltr"}},t.map(function(t,a){return r.a.createElement(B,{key:t.favId,qb:t,index:a,id:t.favId,name:t.name,currentCol:e.props.column.id,saved:t.saved})})),a.placeholder))})}}]),t}(n.Component)),V=(a(242),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.qbs;return r.a.createElement(S.c,{droppableId:this.props.column.id},function(a,n){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps,{isDraggingOver:n.isDraggingOver}),r.a.createElement(O.a,{fluid:!0,bsClass:"qb-list h-100 container"},t.map(function(t,a){return r.a.createElement(B,{key:t.favId,qb:t,index:a,id:t.favId,name:t.name,currentCol:e.props.column.id,saved:t.saved})}),a.placeholder))})}}]),t}(n.Component)),J=(a(125),a(37)),_=a.n(J),$={getQBList:function(){return _.a.get("/api/QBs")},getUserQBList:function(){return _.a.get("/api/user/favorites")},saveUserQB:function(e){return _.a.post("/api/user/favorites",e)},deleteUserQB:function(e){return _.a.delete("/api/user/qb/"+e)}},ee=a(140),te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={initialData:{},compareInitialData:{},compareMode:!1,compareCity:"Select a city"},a.toggleCompareMode=function(){a.setState({compareMode:!a.state.compareMode})},a.handleCompareCity=function(e){console.log(e),a.setState({compareCity:e})},a.toggleSaved=function(e){console.log(e),a.setState(Object(b.a)({},a.state,{initialData:Object(b.a)({},a.state.initialData,{qbs:Object(b.a)({},a.state.initialData.qbs,Object(h.a)({},e,{saved:!a.state.initialData.qbs[e].saved}))})}))},a.componentDidMount=function(){a.loadQBs()},a.loadQBs=function(){var e=[],t={};$.getQBList().then(function(n){n.data.forEach(function(a,n){e.push("qb-".concat(n+1)),a.id="qb-".concat(n+1),a.saved=!1,t["qb-".concat(n+1)]=a}),a.setState(Object(b.a)({},a.state,{initialData:{qbs:t,columns:{"column-1":{id:"column-1",title:"QB List",qbIds:e},"column-2":{id:"column-2",title:"Info",qbIds:[]}},columnOrder:["column-1","column-2"]}})),a.loadFavs()}).catch(function(e){return console.log(e)})},a.loadFavs=function(){console.log(ee),a.setState(Object(b.a)({},a.state,{initialData:Object(b.a)({},a.state.initialData,{columns:Object(b.a)({},a.state.initialData.columns,{"column-3":{id:"column-3",title:"Favs List",qbIds:["qb-2","qb-1"]},"column-4":{id:"column-4",title:"Comparea",qbIds:[]}}),columnOrder:[a.state.initialData.columnOrder,"column-3","column-4"]})}))},a.onDragEnd=function(e){var t=e.destination,n=e.source,r=e.draggableId,o=a.state.initialData;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var c=o.columns[n.droppableId],s=o.columns[t.droppableId];if(c!==s){var i,l=Array.from(c.qbIds);l.splice(n.index,1);var m=Object(b.a)({},c,{qbIds:l}),u=Array.from(s.qbIds);u.splice(t.index,0,r);var d=Object(b.a)({},s,{qbIds:u}),g=Object(b.a)({},a.state,{initialData:Object(b.a)({},o,{columns:Object(b.a)({},o.columns,(i={},Object(h.a)(i,m.id,m),Object(h.a)(i,d.id,d),i))})});a.setState(g)}else{var p=Array.from(c.qbIds);p.splice(n.index,1),p.splice(t.index,0,r);var f=Object(b.a)({},c,{qbIds:p}),E=Object(b.a)({},a.state,{initialData:Object(b.a)({},o,{columns:Object(b.a)({},o.columns,Object(h.a)({},f.id,f))})});a.setState(E)}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.compareMode,n=t.initialData;if(void 0!==n.qbs&&void 0!==n.columns["column-3"]){console.log(n);var o=n.columns["column-1"].qbIds.map(function(e){return n.qbs[e]}),c=n.columns["column-2"].qbIds.map(function(e){return n.qbs[e]});console.log(n.columns);var s=n.columns["column-3"].qbIds.map(function(e){return n.qbs[e]}),i=n.columns["column-4"].qbIds.map(function(e){return n.qbs[e]}),l=r.a.createElement(f.a,{bsClass:"row h-100 data-row"},r.a.createElement(E.a,{md:6,bsClass:"data-container data-left h-100 col"},r.a.createElement(L,{key:n.columns["column-1"].id,column:n.columns["column-1"],qbs:o,togglesaved:this.togglesaved})),r.a.createElement(E.a,{md:6,bsClass:"data-container data-right h-100 col"},r.a.createElement(W,{key:n.columns["column-2"].id,column:n.columns["column-2"],qbs:c}))),m=r.a.createElement("form",null,r.a.createElement(v.a,{componentClass:"ButtonGroup",title:"Select a city",id:"city-picker",onSelect:function(t){return e.handleCompareCity(t)}},r.a.createElement(v.a.Toggle,null,this.state.compareCity),r.a.createElement(v.a.Menu,null,["Los Angeles","New York"].map(function(e,t){return r.a.createElement(C.a,{eventKey:e},e)})))),u=r.a.createElement(f.a,{bsClass:"row h-100 data-row"},r.a.createElement(E.a,{md:6,bsClass:"data-container data-left h-100 col"},r.a.createElement(V,{key:n.columns["column-3"].id,column:n.columns["column-3"],qbs:s})),r.a.createElement(E.a,{md:6,bsClass:"data-container data-right h-100 col"},r.a.createElement("nav",{className:"compare-nav"},m),r.a.createElement(X,{key:n.columns["column-4"].id,column:n.columns["column-4"],qbs:i})));return r.a.createElement(S.a,{onDragEnd:this.onDragEnd},r.a.createElement(O.a,{fluid:!0,bsClass:"body-container container"},r.a.createElement(I,{toggleCompareMode:this.toggleCompareMode,compareMode:this.state.compareMode}),a?u:l,r.a.createElement(I,{footer:!0})))}return console.log(n),r.a.createElement(S.a,{onDragEnd:this.onDragEnd},r.a.createElement(O.a,{fluid:!0,bsClass:"body-container container"},r.a.createElement(I,{toggleCompareMode:this.toggleCompareMode}),r.a.createElement(f.a,{bsClass:"row h-100"},"loading"),r.a.createElement(I,{footer:!0})))}}]),t}(n.Component),ae=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(te,null)}}]),t}(n.Component),ne=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"How did you get here")}}]),t}(n.Component);function re(){var e=Object(j.a)(["\n  opacity: ",";\n  transition: opacity 0.3s ease;\n"]);return re=function(){return e},e}var oe=x.a.div(re(),function(e){return e.isdraggingover?"0":"100"}),ce=function(e){return r.a.createElement(O.a,{fluid:!0,bsClass:"guest-welcome container"},r.a.createElement(oe,{isdraggingover:e.isdraggingover},r.a.createElement("div",{className:"welcome-text-container"},r.a.createElement("h1",{className:"title"},"Blitz Report"),r.a.createElement("p",{style:{width:"85%",textAlign:"center",direction:"ltr",color:"rgba(255, 255, 255, 0.726)"}},"Hello! Welcome to Blitz Report, where you can take your Fantasy Football game to the next level. Track your favorite Quarterback's stats throughout the season with real-time post-game updates."),r.a.createElement("h2",null,"Tutorial"),r.a.createElement("p",{style:{width:"85%",textAlign:"center",direction:"ltr",color:"rgba(255, 255, 255, 0.726)"}},"Drag a quarterback from the roster to the right-side panel to see more detailed statistics. Toggle comparison mode and drag a saved quarterback to the right panel to see their (stat) based off of the opposing team."),r.a.createElement("h2",null,"About"),r.a.createElement("p",{style:{color:"rgba(255, 255, 255, 0.726)"}},"Blitz Report was created by Brandon Turner, Bruce Chang, Cyrus Sepahbodi, and Marlo Carreon"))),r.a.createElement(oe,{isdraggingover:e.isdraggingover},r.a.createElement(f.a,{bsClass:"row welcome-row"},r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:M.a,style:{width:"140px"},alt:"Brandon Turner"}))),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:z.a,style:{width:"140px"},alt:"Bruce Chang"}))),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:K.a,style:{width:"140px"},alt:"Cyrus Sepahbodi"}))),r.a.createElement(E.a,{xs:3},r.a.createElement("div",{className:"img-creator"},r.a.createElement("img",{src:H.a,style:{width:"140px"},alt:"Marlo Carreon"}))))))},se=a(90),ie=a(67),le=a.n(ie),me=(a(283),a(296)),ue=a(300),de=a(297),ge=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).login=function(e,t){},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log("handleSubmit"),e.login(e.state.username,e.state.password),e.setState({redirectTo:"/auth"})},e.state={username:"",password:"",redirectTo:null},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(A.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"login-form-container"},r.a.createElement("form",null,r.a.createElement("h2",null,"Sign In"),r.a.createElement(me.a,null,r.a.createElement(ue.a,{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(me.a,{bsClass:"password-field form-group"},r.a.createElement(ue.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),r.a.createElement(de.a,null,r.a.createElement("a",{className:"create-account-link",onClick:this.props.signupRedirect,href:"/#"},"Create an account"))),r.a.createElement("button",{className:"sign-in",onClick:this.handleSubmit},"Sign in")),r.a.createElement("a",{href:"/auth/google"},r.a.createElement("img",{src:le.a,alt:"sign into Google Button"})))}}]),t}(n.Component),pe=a(36),he=(a(285),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",confirmPassword:"",redirectTo:null,goodData:!1},e.handleSubmit=e.handleSubmit.bind(Object(pe.a)(Object(pe.a)(e))),e.handleChange=e.handleChange.bind(Object(pe.a)(Object(pe.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value.trim()))}},{key:"handleSubmit",value:function(e){var t=this;console.log(this.state.username),console.log(this.state.password),e.preventDefault(),"success"===this.validatePassword()&&"success"===this.validateUsername()&&"success"===this.confirmPassword()?_.a.post("/auth/signup",{username:this.state.username,password:this.state.password}).then(function(e){console.log(e),e.data.errmsg?console.log("duplicate"):(console.log("youre good"),t.setState({redirectTo:"/auth"}))}):console.log("Bad Data")}},{key:"validateUsername",value:function(){return this.state.username.length<=0?"error":"success"}},{key:"validatePassword",value:function(){return this.state.password.length<=0?"error":"success"}},{key:"confirmPassword",value:function(){return this.state.password!==this.state.confirmPassword?"error":"success"}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(A.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"signup-form-container"},r.a.createElement("form",{action:""},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(me.a,{validationState:this.validateUsername()},r.a.createElement(ue.a,{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(me.a,{validationState:this.validatePassword()},r.a.createElement(ue.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(me.a,{validationState:this.confirmPassword()},r.a.createElement(ue.a,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleChange}),r.a.createElement(de.a,null,r.a.createElement("a",{className:"login-link",onClick:this.props.signinRedirect,href:"/#"},"Already have one?")))),r.a.createElement("button",{className:"sign-up",onClick:this.handleSubmit},"Sign up"))}}]),t}(n.Component)),be=(a(287),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={signIn:!1,signUp:!1},a.handleSignIn=function(e){e.preventDefault(),a.setState({signIn:!0,signUp:!1})},a.handleSignUp=function(e){e.preventDefault(),a.setState({signUp:!0,signIn:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.state,a=t.signIn,n=t.signUp,o=r.a.createElement(O.a,{fluid:!0,bsClass:"h-100 sign-card-container container"},r.a.createElement("div",{className:"sign-card"},r.a.createElement("div",{className:"sign-container"},r.a.createElement("h2",{style:{marginBottom:"20px"}},"Welcome"),r.a.createElement(se.a,{onClick:this.handleSignIn,bsClass:"sign-in btn"},"Sign In"),r.a.createElement("a",{href:"/auth/google"},r.a.createElement("img",{src:le.a,alt:"sign into Google Button"})),r.a.createElement("h4",{style:{marginBottom:"20px"}},"Need an Account?"),r.a.createElement(se.a,{onClick:this.handleSignUp,bsClass:"sign-up btn"},"Sign Up")))),c=r.a.createElement(O.a,{fluid:!0,bsClass:"h-100 sign-card-container container"},r.a.createElement(ge,{signupRedirect:this.handleSignUp})),s=r.a.createElement(O.a,{fluid:!0,bsClass:"h-100 sign-card-container container"},r.a.createElement(he,{signinRedirect:this.handleSignIn}));return e=o,a?e=c:n&&(e=s),e}}]),t}(n.Component)),fe=(a(289),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{fluid:!0,bsClass:"body-container container"},r.a.createElement(I,{placeholder:!1}),r.a.createElement(f.a,{bsClass:"row h-100"},r.a.createElement(E.a,{md:6,bsClass:"guest-data-container data-left h-100 col"},r.a.createElement(be,null)),r.a.createElement(E.a,{md:6,bsClass:"guest-data-container data-right h-100 col"},r.a.createElement(ce,{isdraggingover:!1}))),r.a.createElement(I,{footer:!0}))}}]),t}(n.Component)),Ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:fe}),r.a.createElement(p.a,{exact:!0,path:"/auth",component:ae}),r.a.createElement(p.a,{component:ne})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a.p+"static/media/brandon.73a8843d.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/bruce.67907428.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/cyrus.ba1b058d.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/marlo.e64f51c0.jpg"},67:function(e,t){e.exports="data:image/png;base64,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"}},[[148,2,1]]]);
//# sourceMappingURL=main.e44a6c97.chunk.js.map