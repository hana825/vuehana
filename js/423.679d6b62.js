"use strict";(self["webpackChunkvuehana"]=self["webpackChunkvuehana"]||[]).push([[423],{7423:function(o,e,t){t.r(e),t.d(e,{default:function(){return m}});var d=t(3396),n=t(9242),l=t(7139);const i={class:"todo"},u=(0,d._)("button",null,"Add Todo",-1),a=["onUpdate:modelValue"],s=["onClick"];function r(o,e,t,r,h,c){return(0,d.wg)(),(0,d.iD)("div",i,[(0,d._)("form",{onSubmit:e[1]||(e[1]=(0,n.iM)(((...o)=>c.addTodo&&c.addTodo(...o)),["prevent"]))},[(0,d.wy)((0,d._)("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>h.newTodo=o)},null,512),[[n.nr,h.newTodo]]),u],32),(0,d._)("ol",null,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(h.todos,(o=>((0,d.wg)(),(0,d.iD)("li",{key:o.id},[(0,d.wy)((0,d._)("input",{type:"checkbox","onUpdate:modelValue":e=>o.done=e},null,8,a),[[n.e8,o.done]]),(0,d._)("span",{class:(0,l.C_)({done:o.done})},(0,l.zw)(o.text),3),(0,d._)("button",{onClick:e=>c.removeTodo(o)},"X",8,s)])))),128))]),(0,d._)("button",{onClick:e[2]||(e[2]=o=>h.hideCompleted=!h.hideCompleted)})])}t(7658);let h=0;var c={data(){return{newTodo:"",hideCompleted:!1,todos:[{id:h++,text:"React 분석하기"},{id:h++,text:"Vue 배우기"}]}},methods:{addTodo(){""!=this.newTodo.trim()?this.todos.push({id:h++,text:this.newTodo}):alert("내용을 입력해주세요."),this.newTodo=""},removeTodo(o){this.todos=this.todos.filter((e=>e!==o))}}},p=t(89);const w=(0,p.Z)(c,[["render",r]]);var m=w}}]);
//# sourceMappingURL=423.679d6b62.js.map