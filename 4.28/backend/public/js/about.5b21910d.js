"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{161:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"updateform"},[o("h1",[t._v("글을 수정하는 공간입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.memo.title,expression:"memo.title"}],attrs:{type:"text"},domProps:{value:t.memo.title},on:{input:function(e){e.target.composing||t.$set(t.memo,"title",e.target.value)}}}),t._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo.memo,expression:"memo.memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.memo.memo},on:{input:function(e){e.target.composing||t.$set(t.memo,"memo",e.target.value)}}}),t._v(" "),o("br"),o("button",{on:{click:t.update}},[t._v(" 전송 ")])])},a=[],n={data:function(){return{memo:"",title:""}},created(){this.$http.get(`/api/memo/${this.$route.params.id}`).then((t=>{console.log(t.data),this.memo=t.data}))},methods:{update:function(){this.$http.put("/api/memo/updateform",{data:{memo:this.memo,title:this.title}}).then((t=>console.log(t.data))),this.$router.push("/")}}},i=n,r=o(1),s=(0,r.Z)(i,m,a,!1,null,null,null),l=s.exports},619:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"writeform"},[o("h1",[t._v("글을 작성하는 공간입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}}),t._v(" "),o("br"),o("button",{on:{click:t.add}},[t._v(" 전송 ")])])},a=[],n={data:function(){return{title:"",memo:""}},methods:{add:function(){this.$http.post("/api/memo/",{data:{title:this.title,memo:this.memo}}).then((t=>console.log(t.data))),this.$router.push("/")}}},i=n,r=o(1),s=(0,r.Z)(i,m,a,!1,null,null,null),l=s.exports}}]);
//# sourceMappingURL=about.5b21910d.js.map