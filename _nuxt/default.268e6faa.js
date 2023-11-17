import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as i,b as t,r as $,K as M,a7 as C,X as T,a8 as B,q as h,w as u,a as _,a9 as k,e as m,aa as S,t as g,g as z,ab as p,F as E,d as P,p as j,_ as D,ac as N,i as V,P as L,x as A}from"./entry.79e7f890.js";import{_ as v}from"./client-only.664c936b.js";import{a as H}from"./index.207ab367.js";const I={},K={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},O=t("path",{fill:"#ffffff",d:"M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),R=[O];function F(e,s){return o(),i("svg",K,R)}const U=f(I,[["render",F]]),X=["href"],q={class:"flex items-center gap-x-1"},J={class:"line-clamp-1 font-semibold"},W={__name:"Presence",setup(e){const s=$({}),n=$({});return M(async()=>{const r=C("lanyard");s.value=await r({userId:"269581360316940299",socket:!0}),H(s.value,"message",({data:c})=>{const{d:a}=JSON.parse(c);n.value=a})}),T(()=>{s.value&&s.value.close()}),(r,c)=>{const a=U,d=v,l=B("tooltip");return o(),h(d,null,{default:u(()=>[_(k,{"enter-active-class":"transition ease-out duration-700","enter-from-class":"opacity-0 -translate-x-[100%] ","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"transition ease-in duration-300","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:u(()=>[m(n)&&m(n).spotify?S((o(),i("a",{key:0,href:`https://open.spotify.com/track/${m(n).spotify.track_id}`,target:"_blank",rel:"noopener noreferrer nofollow",class:"hidden max-w-xs cursor-pointer rounded-lg bg-[#1DB954] px-2 py-1 text-xs text-white transition hover:bg-green-600 hover:shadow sm:inline-block"},[t("span",q,[_(a,{class:"h-4 w-4 sm:h-5 sm:w-5"}),t("span",J,g(m(n).spotify.song),1)])],8,X)),[[l,{content:"Listening now",distance:10,trigger:"hover"}]]):z("",!0)]),_:1})]),_:1})}}},Y=W,b=""+new URL("me.67f5812f.jpg",import.meta.url).href,Z={},G={key:0,class:"flex items-center justify-between"},Q={class:"tracking-wide"},tt={class:"flex items-center gap-x-2.5"},et=t("h1",{class:"flex-shrink-0 text-xl font-black sm:text-4xl"}," Emir Kabal ",-1),nt=t("h6",{class:"text-sm leading-4 text-gray-700 dark:text-gray-300 sm:text-base"}," A full-stack software developer from Turkey. ",-1),ot=t("img",{src:b,alt:"Emir Kabal",loading:"lazy",class:"ml-4 h-16 w-16 cursor-pointer rounded-lg sm:mr-0"},null,-1),st={key:1,class:"z-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 backdrop-blur-3xl dark:border-neutral-800 dark:bg-neutral-800/60"},at={class:"flex items-center gap-2 font-semibold"},rt={class:"flex flex-shrink-0 items-center gap-2"},ct=t("img",{src:b,alt:"Emir Kabal",loading:"lazy",class:"h-6 w-6 rounded-full"},null,-1),it=t("span",{class:"font-semibold text-gray-400 dark:text-neutral-600"},"/",-1),lt={class:"font-semibold text-gray-400 dark:text-neutral-600"};function _t(e,s){const n=Y,r=D;return o(),h(k,{"enter-active-class":"duration-700 ease-out","enter-from-class":"transform translate-y-8 opacity-0","enter-to-class":"opacity-700 transform translate-y-0","leave-active-class":"opacity-0"},{default:u(()=>[(e._.provides[p]||e.$route).name==="index"?(o(),i("nav",G,[t("div",Q,[t("div",tt,[et,_(n)]),nt]),ot])):(o(),i("nav",st,[t("ul",at,[t("li",rt,[_(r,{to:"/",class:"transition-opacity hover:opacity-80"},{default:u(()=>[ct]),_:1}),it]),(o(!0),i(E,null,P((e._.provides[p]||e.$route).path.split("/").slice(1),(c,a)=>(o(),i("li",{key:a,class:"flex items-center gap-2"},[_(r,{class:"line-clamp-1 text-gray-800 transition-colors dark:text-white",to:`${a<(e._.provides[p]||e.$route).path.split("/").slice(1).length-1?`/${c}`:(e._.provides[p]||e.$route).path}`},{default:u(()=>[j(g(c),1)]),_:2},1032,["to"]),t("span",lt,g(a<(e._.provides[p]||e.$route).fullPath.split("/").slice(1).length-1?"/":""),1)]))),128))])]))]),_:1})}const dt=f(Z,[["render",_t]]),ut={},pt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},mt=t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),ht=t("path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"},null,-1),ft=t("path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"},null,-1),xt=[mt,ht,ft];function gt(e,s){return o(),i("svg",pt,xt)}const vt=f(ut,[["render",gt]]),wt={},yt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},$t=t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),kt=t("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"},null,-1),bt=t("path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"},null,-1),Mt=t("path",{d:"M19 11h2m-1 -1v2"},null,-1),Ct=[$t,kt,bt,Mt];function Tt(e,s){return o(),i("svg",yt,Ct)}const Bt=f(wt,[["render",Tt]]),St={class:"fixed bottom-8 left-8 hidden lg:block"},zt=t("div",{class:"absolute left-0 right-0 top-0 -z-10 h-5 w-5 animate-pulse rounded-full bg-gradient-to-tl from-lime-300 to-violet-400 blur-lg transition-all group-hover:blur-md dark:from-lime-500 dark:to-violet-800 md:h-10 md:w-10"},null,-1),Et={__name:"ThemeSwitcher",setup(e){const s=N(),n=V(()=>s.value==="dark"),r=typeof document<"u"&&document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=a=>{if(!r||!a){s.preference=n.value?"light":"dark";return}const d=a.clientX,l=a.clientY,x=Math.hypot(Math.max(d,innerWidth-d),Math.max(l,innerHeight-l));document.startViewTransition(async()=>{s.preference=n.value?"light":"dark",await L()}).ready.then(()=>{const y=[`circle(0px at ${d}px ${l}px)`,`circle(${x}px at ${d}px ${l}px)`];document.documentElement.animate({clipPath:n.value?[...y].reverse():y},{duration:400,easing:"ease-in",pseudoElement:n.value?"::view-transition-old(root)":"::view-transition-new(root)"})})};return(a,d)=>{const l=vt,x=Bt,w=v;return o(),h(w,null,{default:u(()=>[t("div",St,[t("button",{onClick:c,class:"group relative flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors duration-500"},[m(n)?(o(),h(l,{key:0,class:"absolute h-7 w-7 text-white"})):(o(),h(x,{key:1,class:"absolute h-7 w-7 text-gray-800"})),zt])])]),_:1})}}},Pt=Et,jt={},Dt={class:"mx-auto max-w-2xl px-4 pt-6 sm:pt-14 md:px-0"},Nt=t("span",{class:"fixed bottom-0 right-0 hidden select-none flex-col p-12 opacity-0 transition-opacity duration-500 hover:opacity-100 lg:flex"},[t("span",null," dervis was here "),t("span",{class:"text-xs text-gray-600 dark:text-gray-300"},"~ he's my cat ")],-1);function Vt(e,s){const n=dt,r=Pt,c=v;return o(),i("div",null,[t("div",Dt,[t("main",null,[_(n),A(e.$slots,"default")]),_(r),_(c,null,{default:u(()=>[Nt]),_:1})])])}const Kt=f(jt,[["render",Vt]]);export{Kt as default};
