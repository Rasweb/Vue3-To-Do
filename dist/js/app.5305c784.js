(function(){"use strict";var e={7201:function(e,o,t){var n=t(9242),i=t(3396);function d(e,o,t,n,d,r){const l=(0,i.up)("Header"),s=(0,i.up)("todo-list");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l),(0,i.Wm)(s)],64)}var r=t(6520);const l=e=>((0,i.dD)("data-v-5b6e8a60"),e=e(),(0,i.Cn)(),e),s=l((()=>(0,i._)("h1",null,"Vue Zelda ToDo List",-1))),a=[s];function u(e,o,t,n,d,r){return(0,i.wg)(),(0,i.iD)("header",null,a)}class c extends r.w3{}var h=t(89);const v=(0,h.Z)(c,[["render",u],["__scopeId","data-v-5b6e8a60"]]);var p=v;function f(e,o,t,n,d,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("button",{onClick:o[0]||(o[0]=()=>{e.removeTodo()})}," ✗ ")])}class m extends r.w3{removeTodo(){console.log("Removing specific Todo"),this.$emit("deleteTodo")}}const w=(0,h.Z)(m,[["render",f],["__scopeId","data-v-270a1e85"]]);var g=w,_=t(7139);const b=e=>((0,i.dD)("data-v-2922b5f8"),e=e(),(0,i.Cn)(),e),T=b((()=>(0,i._)("h1",null,"Todo list",-1))),y={class:"todoList"},D=b((()=>(0,i._)("div",null,[(0,i._)("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores cumque tenetur rerum iure esse reiciendis quas, aperiam recusandae quod architecto iste neque temporibus vel aut praesentium. Autem, veniam tempora! ")],-1))),A={class:"btnCont"},Z=(0,i.Uk)("✓ "),C=["onUpdate:modelValue"];function O(e,o,t,d,r,l){const s=(0,i.up)("AddTodo"),a=(0,i.up)("DeleteTodo");return(0,i.wg)(),(0,i.iD)("div",null,[T,(0,i._)("div",y,[(0,i.Wm)(s,{onAddTodo:o[0]||(o[0]=o=>e.handleAddTodo(o))}),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.todos,((o,t)=>((0,i.wg)(),(0,i.iD)("li",{key:o.id,class:(0,_.C_)([{done:o.done}])},[(0,i._)("h3",null,(0,_.zw)(o.title)+" in "+(0,_.zw)(o.location),1),(0,i._)("h4",null,"Given by "+(0,_.zw)(o.giver),1),D,(0,i._)("div",A,[(0,i._)("label",null,[Z,(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":e=>o.done=e},null,8,C),[[n.e8,o.done]])]),(0,i.Wm)(a,{onDeleteTodo:o=>e.handleRemoveTodo(o,t)},null,8,["onDeleteTodo"])])],2)))),128))])])])}var k=t(2482);class R{constructor(e,o,t,n){(0,k.Z)(this,"title",void 0),(0,k.Z)(this,"location",void 0),(0,k.Z)(this,"giver",void 0),(0,k.Z)(this,"id",void 0),(0,k.Z)(this,"done",void 0),this.title=e,this.location=o,this.giver=t,this.id=n,this.done=!1}}const j={class:"addCont"};function x(e,o,t,d,r,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",j,[(0,i._)("button",{onClick:o[0]||(o[0]=()=>{e.isActive=!1,e.hideAddBtn=!0}),class:(0,_.C_)([[{hideShow:e.hideAddBtn}],"btnAdd"])}," Add todo ",2)]),(0,i._)("form",{onSubmit:o[8]||(o[8]=(0,n.iM)((()=>{}),["prevent"])),class:(0,_.C_)([{addForm:e.isActive}])},[(0,i._)("button",{onClick:o[1]||(o[1]=()=>{e.isActive=!e.isActive,e.hideAddBtn=!e.hideAddBtn})}," Hide "),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"title","onUpdate:modelValue":o[2]||(o[2]=o=>e.todoTitle=o)},null,512),[[n.nr,e.todoTitle]]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"location","onUpdate:modelValue":o[3]||(o[3]=o=>e.todoLoc=o)},null,512),[[n.nr,e.todoLoc]]),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"giver","onUpdate:modelValue":o[4]||(o[4]=o=>e.todoGiv=o)},null,512),[[n.nr,e.todoGiv]]),(0,i.wy)((0,i._)("input",{type:"number",placeholder:"id","onUpdate:modelValue":o[5]||(o[5]=o=>e.todoId=o),onKeypress:o[6]||(o[6]=(0,n.D2)(((...o)=>e.handleAddTodo&&e.handleAddTodo(...o)),["enter"]))},null,544),[[n.nr,e.todoId,void 0,{number:!0}]]),(0,i._)("button",{onClick:o[7]||(o[7]=()=>{e.handleAddTodo()})}," Add ")],34)])}class V extends r.w3{constructor(...e){super(...e),(0,k.Z)(this,"todoTitle",""),(0,k.Z)(this,"todoLoc",""),(0,k.Z)(this,"todoGiv",""),(0,k.Z)(this,"todoId",0),(0,k.Z)(this,"isActive",!0),(0,k.Z)(this,"hideAddBtn",!1)}handleAddTodo(){console.log("Du klickade",this.todoTitle),this.$emit("addTodo",new R(this.todoTitle,this.todoLoc,this.todoGiv,this.todoId)),this.todoTitle="",this.todoLoc="",this.todoGiv="",this.todoId=""}}const B=(0,h.Z)(V,[["render",x],["__scopeId","data-v-523f7989"]]);var G=B,I=function(e,o,t,n){var i,d=arguments.length,r=d<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,o,t,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(d<3?i(r):d>3?i(o,t,r):i(o,t))||r);return d>3&&r&&Object.defineProperty(o,t,r),r};let L=class extends r.w3{constructor(...e){super(...e),(0,k.Z)(this,"todos",[new R("Divine Beast Vah Ruta","Zoras's Domain","King Zora",1),new R("Divine Beast Vah Rudania","Goron City","Boss Bludo",2),new R("Divine Beast Vah Medoh","Rito Village","Elder Kaneli",3),new R("Divine Beast Vah Naboris","Gerudo Town","Chief Riju",4),new R("The Hero's Sword","Great Hyrule Forest","Lost Woods",5),new R("Captured Memories","Kakariko Village","Impa",6),new R("Destroy Ganon","Hyrule Castle","King Rhoam",7)]),(0,k.Z)(this,"todoDone",!1)}handleRemoveTodo(e,o){console.log("You removed a Todo"),this.todos.splice(o,1)}handleAddTodo(e){console.log("You are adding a Todo",e),this.todos.push(e)}handleDoneTodo(e,o){console.log("You are changing a Todo",e,o),e.done=!e.done}};L=I([(0,r.Ei)({components:{DeleteTodo:g,AddTodo:G,App:E}})],L);var H=L;const U=(0,h.Z)(H,[["render",O],["__scopeId","data-v-2922b5f8"]]);var K=U,P=function(e,o,t,n){var i,d=arguments.length,r=d<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,o,t,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(d<3?i(r):d>3?i(o,t,r):i(o,t))||r);return d>3&&r&&Object.defineProperty(o,t,r),r};let W=class extends r.w3{};W=P([(0,r.Ei)({components:{Header:p,TodoList:K,DeleteBtn:g}})],W);var Y=W;const q=(0,h.Z)(Y,[["render",d]]);var E=q;(0,n.ri)(E).mount("#app")}},o={};function t(n){var i=o[n];if(void 0!==i)return i.exports;var d=o[n]={exports:{}};return e[n](d,d.exports,t),d.exports}t.m=e,function(){var e=[];t.O=function(o,n,i,d){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],d=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&d||r>=d)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(l=!1,d<r&&(r=d));if(l){e.splice(u--,1);var a=i();void 0!==a&&(o=a)}}return o}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[n,i,d]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var i,d,r=n[0],l=n[1],s=n[2],a=0;if(r.some((function(o){return 0!==e[o]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(s)var u=s(t)}for(o&&o(n);a<r.length;a++)d=r[a],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(u)},n=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(7201)}));n=t.O(n)})();
//# sourceMappingURL=app.5305c784.js.map