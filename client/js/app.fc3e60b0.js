(function(t){function e(e){for(var a,r,i=e[0],l=e[1],d=e[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),t._v(" "),s("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My Boards")])],1):t._e()]),t._v(" "),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("\n        Login\n      ")])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l=s("bc3a"),d=s.n(l);d.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=c,m=s("2877"),p=Object(m["a"])(u,r,i,!1,null,null,null),h=p.exports,v=s("335d"),b={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=b,g=(s("5c0b"),Object(m["a"])(f,o,n,!1,null,null,null)),k=g.exports,_=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home text-primary mt-5"},[s("img",{staticClass:"rounded mb-3",attrs:{src:t.user.picture,alt:""}}),t._v(" "),s("h1",[t._v("Welcome, "+t._s(t.user.name))])])},C=[],y={name:"home",data(){return{}},computed:{user(){return this.$store.state.user}},methods:{},components:{}},T=y,B=Object(m["a"])(T,w,C,!1,null,"ef22680c",null),$=B.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards text-primary"},[s("h1",[t._v("Your Boards")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("div",{staticClass:"input-group input-group-lg justify-content-center m-2 p-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"rounded m-2",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"rounded m-2",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success m-2",attrs:{type:"submit"}},[t._v("Create Board")])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},t._l(t.boards,(function(e){return s("div",{key:e.id,staticClass:"bg-light border rounded text-white m-2 p-2 col-3",on:{click:function(s){t.setActiveBoard(e.id)}}},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[s("h3",[t._v(t._s(e.title))])])],1)})))])])},I=[],L={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},setActiveBoard(t){this.$store.dispatch("setActiveBoard",t)}}},j=L,O=Object(m["a"])(j,x,I,!1,null,null,null),A=O.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid board text-primary"},[s("div",{staticClass:"row justify-content-between ml-2 mt-3 mr-3 px-2"},[s("h1",[t._v(t._s(t.board.title))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteBoard(t.board._id)}}},[t._v("Delete")])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Create A List")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control",attrs:{type:"text",id:"createlist",placeholder:"Enter List Name Here"},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}})]),t._v(" "),s("Button",{staticClass:"btn btn-block btn-warning mb-2",attrs:{type:"submit"}},[t._v("Submit List")])],1),t._v(" "),s("div",{staticClass:"row"},t._l(t.lists,(function(t){return s("list",{key:t.id,staticClass:"car col-3 rounded mb-3 square text-light",attrs:{list:t}})})))])},P=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"List",attrs:{dropzone:"zone"},on:{dragover:function(t){t.preventDefault()},drop:function(e){e.preventDefault(),t.moveTask()}}},[s("div",{staticClass:"bg-light text-success border rounded p-3"},[s("div",{staticClass:"row justify-content-between ml-2 mt-1 mr-3"},[s("h3",[t._v(t._s(t.list.title))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteList(t.list._id)}}},[t._v("Delete")])]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.addTask(t.list.id)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"form-control",attrs:{type:"text",id:"createtask",placeholder:"Enter Task"},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}})]),t._v(" "),s("Button",{staticClass:"btn btn-block btn-warning",attrs:{type:"submit"}},[t._v("Add Task")])],1),t._v(" "),s("div",t._l(t.tasks,(function(e){return s("task",{key:e.id,staticClass:"task rounded mb-3 square text-light",attrs:{task:e,draggable:"true"},on:{dragstart:function(e){t.reorderTask(t.task)}}})})))])])},M=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Task",on:{dragstart:function(e){t.moveTask()}}},[s("div",{staticClass:"bg-secondary text-white border rounded mt-2"},[s("div",{staticClass:"row justify-content-between ml-2 mt-1 mr-3"},[s("h5",{staticClass:"text-left"},[t._v(t._s(t.task.title))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteTask(t.task._id)}}},[t._v("Delete")])]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.addComment(t.task.id)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],staticClass:"form-control",attrs:{type:"text",id:"createcomment",placeholder:"Enter Comment"},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}})]),t._v(" "),s("Button",{staticClass:"btn btn-block btn-warning",attrs:{type:"submit"}},[t._v("Add")])],1)]),t._v(" "),s("div",t._l(t.comments,(function(t){return s("comment",{key:t.id,staticClass:"task rounded mb-3 square bg-secondary text-light",attrs:{comment:t}})})))])},S=[],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Comment p-2 row justify-content-between ml-2 mt-1 mr-3"},[s("p",[t._v(t._s(t.comment.content))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteComment(t.comment._id)}}},[t._v("Delete")])])},z=[],R={name:"Comment",props:["comment"],data(){return{}},computed:{},methods:{deleteComment(t){this.$store.dispatch("deleteComment",{theCommentId:t,theTaskId:this.comment.taskId})}},components:{}},q=R,J=Object(m["a"])(q,U,z,!1,null,"01da44cb",null),H=J.exports,W={name:"Task",props:["task","comment"],data(){return{newComment:{}}},mounted(){},computed:{comments(){return this.task.comments}},methods:{addComment(t){this.$store.dispatch("addComment",{content:this.newComment.content,taskId:t}),console.log("sent comment")},deleteTask(t){this.$store.dispatch("deleteTask",t)},moveTask(){event.dataTransfer.setData("data",JSON.stringify(this.task)),event.dataTransfer.setData("list",this.task.listId)}},components:{Comment:H}},X=W,F=Object(m["a"])(X,N,S,!1,null,"702f289a",null),K=F.exports,Y={name:"List",props:["list","task"],data(){return{newTask:{}}},mounted(){this.$store.dispatch("getAllTasks")},computed:{tasks(){return this.$store.state.tasks.filter(t=>t.listId==this.list.id)}},methods:{addTask(t){this.$store.dispatch("addTask",{title:this.newTask.title,listId:t}),console.log("sent talks",this.title,this.listId)},deleteList(t){this.$store.dispatch("deleteList",{listId:t,boardId:this.$route.params.boardId}),this.$store.dispatch("deleteTasksByListId",t)},reorderTask(t,e){this.$store.dispatch("setTaskToMove",{task:t,oldList:this.list})},moveTask(){let t=JSON.parse(event.dataTransfer.getData("data")),e={oldListId:event.dataTransfer.getData("list"),taskToMove:t,listId:this.list.id};this.$store.dispatch("moveTask",e)}},components:{Task:K}},G=Y,Q=Object(m["a"])(G,D,M,!1,null,"26632fdc",null),V=Q.exports,Z={name:"board",props:["boardId","list"],data(){return{newList:{}}},mounted(){this.$store.dispatch("getListsByBoardId",this.$route.params.boardId)},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{addList(){this.$store.dispatch("addList",{title:this.newList.title,boardId:this.$route.params.boardId}),console.log(this.newList.title,this.$route.params.boardId)},deleteBoard(t){this.$store.dispatch("deleteBoard",t),this.$router.push({name:"boards",path:"/boards"})}},components:{List:V}},tt=Z,et=Object(m["a"])(tt,E,P,!1,null,null,null),st=et.exports;a["a"].use(_["a"]);var at=new _["a"]({routes:[{path:"/",name:"home",component:$},{path:"/boards",name:"boards",component:A,beforeEnter:v["b"]},{path:"/boards/:boardId",name:"board",component:st},{path:"*",redirect:"/"}]}),ot=s("2f62");s("eebe");a["a"].use(ot["a"]);let nt=window.location.host.includes("localhost")?"//localhost:3000/":"/",rt=d.a.create({baseURL:nt+"api/",timeout:3e3,withCredentials:!0});var it=new ot["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:[],tempTask:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){t.tasks=e},setItemToMove(t,e){t.tempTask=e}},actions:{setBearer({},t){rt.defaults.headers.authorization=t},resetBearer(){rt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await rt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},setTaskToMove({commit:t,dispatch:e},s){t("setTaskToMove",s)},async moveTask({commit:t,dispatch:e},s){console.log(s);try{await rt.put("tasks/"+s.taskToMove.id,{listId:s.listId})}catch(a){console.error(a)}t("setItemToMove"),e("getAllTasks")},getBoards({commit:t,dispatch:e}){rt.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){rt.post("boards",s).then(t=>{e("getBoards")})},async setActiveBoard({commit:t,dispatch:e},s){try{let e=await rt.get("boards/"+s);t("setActiveBoard",e.data)}catch(a){console.error(a)}},addList({commit:t,dispatch:e},s){rt.post("lists",s).then(t=>{e("getListsByBoardId",s.boardId)}),console.log(this.state)},deleteTask({commit:t,dispatch:e},s){rt.delete("tasks/"+s).then(t=>{e("getAllTasks")})},deleteTasksByListId({commit:t,dispatch:e},s){rt.delete("tasks",s).then(t=>{e("getAllTasks")})},async getListsByBoardId({commit:t,dispatch:e},s){try{let e=await rt.get("boards/"+s+"/lists");t("setLists",e.data)}catch(a){console.error(a)}},addTask({commit:t,dispatch:e},s){rt.post("tasks",s).then(t=>{e("getAllTasks")})},async getTasksByListId({commit:t,dispatch:e},s){try{let e=await rt.get("lists/"+s+"/tasks");t("setTasks",e.data)}catch(a){console.error(a)}},async getAllTasks({commit:t,dispatch:e}){try{let e=await rt.get("tasks");t("setTasks",e.data)}catch(s){console.error(s)}},deleteBoard({commit:t,dispatch:e},s){rt.delete("boards/"+s).then(t=>{e("getBoards")})},addComment({commit:t,dispatch:e},s){rt.post("tasks/"+s.taskId+"/comments",s).then(t=>{e("getAllTasks")})},deleteList({commit:t,dispatch:e},s){rt.delete("lists/"+s.listId).then(t=>{e("getListsByBoardId",s.boardId)})},deleteComment({commit:t,dispatch:e},s){rt.delete("tasks/"+s.theTaskId+"/comments/"+s.theCommentId).then(t=>{e("getAllTasks")})}}});const lt="hoppdebopp.us.auth0.com",dt="https://kanban.com",ct="HXRncFzUugsXs1ey5ER7dxc1OtPWEs60";a["a"].use(v["a"],{domain:lt,clientId:ct,audience:dt,onRedirectCallback:t=>{at.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:at,store:it,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},"9c0c":function(t,e,s){}});