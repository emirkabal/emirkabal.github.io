import{u as x,_ as f}from"./ProseImg.vue.72efa38d.js";import k from"./ContentRenderer.a6633d50.js";import{f as y,u as v,c as s,e as t,b as r,a as p,t as n,F as w,d as M,g as C,o}from"./entry.44582468.js";import{u as D,q as I}from"./query.658c110a.js";import{w as T}from"./asyncContext.e414844f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.vue.573038af.js";import"./index.288f722b.js";import"./preview.2de5901d.js";const Y={class:"mt-8"},A={key:0,class:"mb-24"},B={class:"mb-8 space-y-2 border-b border-b-gray-200 pb-8 dark:border-b-neutral-800"},F={class:"text-2xl font-black sm:text-4xl"},N={class:"text-gray-600 dark:text-gray-300"},R={class:"flex flex-wrap gap-2"},S={class:"self-center text-sm font-bold text-neutral-700 dark:text-neutral-300"},V={class:"inline-block rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-neutral-800 dark:text-neutral-300"},$={key:1},j=r("div",{class:"sm:text-xl"},"This post could not be found.",-1),q=[j],W={__name:"[...slug]",async setup(E){let a,c;const{getImage:u}=x(),m=y(),{data:e}=([a,c]=T(()=>D(m.params.slug.toString(),()=>I("blog/"+m.params.slug).findOne(),"$sjMyffTuMb")),a=await a,c(),a),{url:d}=u(e.value.image),i=e.value.title,l=e.value.short_description||"Gönderiyi okumak için ziyaret et.";return v({titleTemplate:"%s - Emir Kabal",title:i,ogTitle:i,ogUrl:"https://emirkabal.com"+e.value._path,ogImage:d,twitterImage:d,twitterCard:"summary_large_image",twitterTitle:i,description:l,ogDescription:l,twitterDescription:l}),(g,U)=>{const _=f,b=k;return o(),s("div",Y,[t(e)?(o(),s("article",A,[r("header",B,[p(_,{src:t(e).image,alt:t(e).title+" Fotoğrafı",class:"mb-4 w-full rounded-xl prose-img:rounded-xl prose-img:border prose-img:object-cover dark:prose-img:border-neutral-800",maxHeight:"288px"},null,8,["src","alt"]),r("h1",F,n(t(e).title),1),r("p",N,n(t(e).short_description),1),r("div",R,[r("time",S,n(g.$moment(t(e).createdAt).locale("tr").format("D MMMM YYYY")),1),t(e).tags&&t(e).tags.length>0?(o(!0),s(w,{key:0},M(t(e).tags,h=>(o(),s("span",V," #"+n(h),1))),256)):C("",!0)])]),p(b,{class:"prose max-w-none dark:prose-invert prose-headings:mb-2 prose-headings:mt-4 prose-a:no-underline prose-img:rounded-xl prose-img:border dark:prose-img:border-neutral-800 dark:prose-hr:border-neutral-800",value:t(e)},null,8,["value"])])):(o(),s("div",$,q))])}}};export{W as default};
