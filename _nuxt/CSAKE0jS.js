import{e as a,R as w,f as y,aa as D,J as H,I as g,i as S,O as _,M as b,L as p}from"./DAyJQgAX.js";import q from"./CGWy5z1x.js";import x from"./Cf6gxbHB.js";import"./CJx1Wvk5.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./g1unaZA4.js";import"./DvDH6DOc.js";import"./BjA037gU.js";import"./CRg1nzvh.js";const d=(u,s=y())=>{const e=a(u),f=g();w(()=>a(u),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>H(t))},{immediate:!0})},O=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:s}=g().public.content,e=_(),{tag:f,excerpt:m,path:n,query:t,head:r}=u,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||b(y().path),find:"one"},C=(o,i)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return p(x,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return c&&d(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:m,...this.$attrs})}:({data:o})=>(c&&d(o),p(q,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||p("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||p("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),M=O;export{M as default};
