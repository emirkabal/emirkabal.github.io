import{u as A,_ as D}from"./BhEg4jcG.js";import S from"./CGWy5z1x.js";import{_ as T}from"./BSbpDClP.js";import{f as $,g as y,u as j,c as l,e as t,b as r,a as n,t as i,F as N,d as B,h as F,w as f,n as k,_ as G,o as c}from"./DAyJQgAX.js";import{u as v}from"./BjA037gU.js";import{q as w}from"./CRg1nzvh.js";import"./DlAUqK2U.js";import"./CJx1Wvk5.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./g1unaZA4.js";import"./DvDH6DOc.js";const V={class:"mt-8"},q={key:0,class:"mb-24"},z={class:"mb-8 space-y-2 border-b border-b-gray-200 pb-8 dark:border-b-neutral-800"},E={class:"text-2xl font-black sm:text-4xl"},L={class:"text-gray-600 dark:text-gray-300"},R={class:"flex flex-wrap gap-2"},U={class:"self-center text-sm font-bold text-neutral-700 dark:text-neutral-300"},H={class:"inline-block rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-neutral-800 dark:text-neutral-300"},K={class:"flex w-full flex-col gap-2 sm:flex-row"},O=r("div",{class:"text-xs opacity-80"},"Sonraki Gönderi",-1),P={class:"line-clamp-1 text-sm font-semibold"},J=r("div",{class:"text-xs opacity-80"},"Önceki Gönderi",-1),Q={class:"line-clamp-1 text-sm font-semibold"},W={key:1},X=r("div",{class:"sm:text-xl"},"This post could not be found.",-1),Z=[X],_t={__name:"[...slug]",async setup(tt){let o,d;const{getImage:C}=A(),p=$(),{data:e}=([o,d]=y(()=>v(p.params.slug.toString(),()=>w("blog/"+p.params.slug).findOne(),"$sjMyffTuMb")),o=await o,d(),o),{data:s}=([o,d]=y(()=>v(`${p.params.slug}-prev-next`,()=>w("blog").only(["_path","title"]).sort({createdAt:"desc"}).findSurround("/blog/"+p.params.slug))),o=await o,d(),o),{url:_}=C(e.value.image),m=e.value.title,u=e.value.short_description||"Gönderiyi okumak için ziyaret et.";return j({titleTemplate:"%s - Emir Kabal",title:m,ogTitle:m,ogUrl:"https://emirkabal.com"+e.value._path,ogImage:_,twitterImage:_,twitterCard:"summary_large_image",twitterTitle:m,description:u,ogDescription:u,twitterDescription:u}),(M,et)=>{var b,h;const I=D,Y=S,g=T,x=G;return c(),l("div",V,[t(e)?(c(),l("article",q,[r("header",z,[n(I,{src:t(e).image,alt:t(e).title+" Fotoğrafı",class:"mb-4 w-full rounded-xl prose-img:rounded-xl prose-img:border prose-img:object-cover dark:prose-img:border-neutral-800",maxHeight:"288px"},null,8,["src","alt"]),r("h1",E,i(t(e).title),1),r("p",L,i(t(e).short_description),1),r("div",R,[r("time",U,i(M.$moment(t(e).createdAt).locale("tr").format("D MMMM YYYY")),1),t(e).tags&&t(e).tags.length>0?(c(!0),l(N,{key:0},B(t(e).tags,a=>(c(),l("span",H," #"+i(a),1))),256)):F("",!0)])]),n(Y,{class:"prose max-w-none dark:prose-invert prose-headings:mb-2 prose-headings:mt-4 prose-a:no-underline prose-img:rounded-xl prose-img:border dark:prose-img:border-neutral-800 dark:prose-hr:border-neutral-800",value:t(e)},null,8,["value"]),r("div",K,[n(x,{class:k(["group flex w-full cursor-pointer items-center justify-between gap-x-2 rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-right text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white",{"cursor-default border-0 !text-gray-400 !opacity-75":!t(s)[1]}]),to:(b=t(s)[1])==null?void 0:b._path},{default:f(()=>{var a;return[n(g,{class:"inline-block h-6 w-6 flex-shrink-0 rotate-180 opacity-80 transition-opacity group-hover:opacity-100"}),r("div",null,[O,r("div",P,i(((a=t(s)[1])==null?void 0:a.title)||"Yok"),1)])]}),_:1},8,["class","to"]),n(x,{class:k(["group flex w-full cursor-pointer items-center justify-between gap-x-2 rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white",{"cursor-default border-0 !text-gray-400 !opacity-75":!t(s)[0]}]),to:(h=t(s)[0])==null?void 0:h._path},{default:f(()=>{var a;return[r("div",null,[J,r("div",Q,i(((a=t(s)[0])==null?void 0:a.title)||"Yok"),1)]),n(g,{class:"inline-block h-6 w-6 flex-shrink-0 opacity-80 transition-opacity group-hover:opacity-100"})]}),_:1},8,["class","to"])])])):(c(),l("div",W,Z))])}}};export{_t as default};
