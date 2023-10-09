import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{o as s,c as i,b as t,r as x,G as M,O as C,M as S,ac as T,p as f,w as p,a as l,W as $,e as h,U as B,t as v,h as H,H as j,ad as m,F as z,d as E,m as D,_ as N,a0 as P,j as V,Y as L,q as O}from"./entry.91a5616c.js";import{_ as w}from"./client-only.92610061.js";import{i as A}from"./index.3ef23d4f.js";const I={},K={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},R=t("path",{fill:"#ffffff",d:"M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),U=[R];function F(d,o){return s(),i("svg",K,U)}const W=g(I,[["render",F]]),Y=["href"],q={class:"flex items-center gap-x-1"},G={class:"line-clamp-1 font-semibold"},J={__name:"Presence",setup(d){const o=x({}),e=x({});return M(async()=>{const n=C("lanyard");o.value=await n({userId:"269581360316940299",socket:!0}),A(o.value,"message",({data:_})=>{const{d:r}=JSON.parse(_);e.value=r})}),S(()=>{o.value&&o.value.close()}),(n,_)=>{const r=W,c=w,a=T("tooltip");return s(),f(c,null,{default:p(()=>[l($,{"enter-active-class":"transition ease-out duration-700","enter-from-class":"opacity-0 -translate-x-[100%] ","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"transition ease-in duration-300","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:p(()=>[h(e)&&h(e).spotify?B((s(),i("a",{key:0,href:`https://open.spotify.com/track/${h(e).spotify.track_id}`,target:"_blank",rel:"noopener noreferrer nofollow",class:"hidden max-w-xs cursor-pointer rounded-lg bg-[#1DB954] px-2 py-1 text-xs text-white transition hover:bg-green-600 hover:shadow sm:inline-block"},[t("span",q,[l(r,{class:"h-4 w-4 sm:h-5 sm:w-5"}),t("span",G,v(h(e).spotify.song),1)])],8,Y)),[[a,{content:"Listening now",distance:10,trigger:"hover"}]]):H("",!0)]),_:1})]),_:1})}}},X=J,b=""+new URL("me.67f5812f.jpg",import.meta.url).href,Z={class:"tracking-wide"},Q={class:"flex items-center gap-x-2.5"},tt=t("h1",{class:"flex-shrink-0 text-xl font-black sm:text-4xl"}," Emir Kabal ",-1),et=t("p",{class:"text-sm leading-4 text-gray-700 dark:text-gray-300 sm:text-base"}," A full-stack software developer from Turkey. ",-1),nt=t("img",{src:b,alt:"Emir Kabal",loading:"lazy",class:"ml-4 h-16 w-16 cursor-pointer rounded-lg sm:mr-0"},null,-1),ot={key:1,class:"z-10 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 backdrop-blur-3xl dark:border-neutral-800 dark:bg-neutral-800/60"},st={class:"flex items-center gap-2 font-semibold"},at={class:"flex flex-shrink-0 items-center gap-2"},rt=t("img",{src:b,alt:"Emir Kabal",loading:"lazy",class:"h-6 w-6 rounded-full"},null,-1),ct=t("span",{class:"font-semibold text-gray-400 dark:text-neutral-600"},"/",-1),it={class:"font-semibold text-gray-400 dark:text-neutral-600"},lt={__name:"Header",setup(d){const o=x("144px"),e=x(null);return j(e,()=>{e.value&&e.value.clientHeight&&(o.value=e.value.clientHeight+"px")}),(n,_)=>{const r=X,c=N;return s(),f($,{"enter-active-class":"duration-700 ease-out","enter-from-class":"transform translate-y-8 opacity-0","enter-to-class":"opacity-700 transform translate-y-0","leave-active-class":"opacity-0"},{default:p(()=>[(n._.provides[m]||n.$route).name==="index"?(s(),i("nav",{key:0,ref_key:"headerMain",ref:e,class:"flex items-center justify-between"},[t("div",Z,[t("div",Q,[tt,l(r)]),et]),nt],512)):(s(),i("nav",ot,[t("ul",st,[t("li",at,[l(c,{to:"/",class:"transition-opacity hover:opacity-80"},{default:p(()=>[rt]),_:1}),ct]),(s(!0),i(z,null,E((n._.provides[m]||n.$route).path.split("/").slice(1),(a,u)=>(s(),i("li",{key:u,class:"flex items-center gap-2"},[l(c,{class:"line-clamp-1 text-gray-800 transition-colors dark:text-white",to:`${u<(n._.provides[m]||n.$route).path.split("/").slice(1).length-1?`/${a}`:(n._.provides[m]||n.$route).path}`},{default:p(()=>[D(v(a),1)]),_:2},1032,["to"]),t("span",it,v(u<(n._.provides[m]||n.$route).fullPath.split("/").slice(1).length-1?"/":""),1)]))),128))])]))]),_:1})}}},dt=lt,_t={},ut={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},pt=t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),mt=t("path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"},null,-1),ht=t("path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"},null,-1),ft=[pt,mt,ht];function xt(d,o){return s(),i("svg",ut,ft)}const gt=g(_t,[["render",xt]]),vt={},wt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},yt=t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),kt=t("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"},null,-1),$t=t("path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"},null,-1),bt=t("path",{d:"M19 11h2m-1 -1v2"},null,-1),Mt=[yt,kt,$t,bt];function Ct(d,o){return s(),i("svg",wt,Mt)}const St=g(vt,[["render",Ct]]),Tt=()=>P("color-mode").value,Bt={class:"fixed bottom-8 left-8 hidden lg:block"},Ht=t("div",{class:"absolute left-0 right-0 top-0 -z-10 h-5 w-5 animate-pulse rounded-full bg-gradient-to-tl from-lime-300 to-violet-400 blur-lg transition-all group-hover:blur-md dark:from-lime-500 dark:to-violet-800 md:h-10 md:w-10"},null,-1),jt={__name:"ThemeSwitcher",setup(d){const o=Tt(),e=V(()=>o.value==="dark"),n=typeof document<"u"&&document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=r=>{if(!n||!r){o.preference=e.value?"light":"dark";return}const c=r.clientX,a=r.clientY,u=Math.hypot(Math.max(c,innerWidth-c),Math.max(a,innerHeight-a));document.startViewTransition(async()=>{o.preference=e.value?"light":"dark",await L()}).ready.then(()=>{const k=[`circle(0px at ${c}px ${a}px)`,`circle(${u}px at ${c}px ${a}px)`];document.documentElement.animate({clipPath:e.value?[...k].reverse():k},{duration:400,easing:"ease-in",pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})})};return(r,c)=>{const a=gt,u=St,y=w;return s(),f(y,null,{default:p(()=>[t("div",Bt,[t("button",{onClick:_,class:"group relative flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors duration-500"},[h(e)?(s(),f(a,{key:0,class:"absolute h-7 w-7 text-white"})):(s(),f(u,{key:1,class:"absolute h-7 w-7 text-gray-800"})),Ht])])]),_:1})}}},zt=jt,Et={},Dt={class:"mx-auto max-w-2xl px-4 pt-6 sm:pt-14 md:px-0"},Nt=t("span",{class:"fixed bottom-0 right-0 hidden select-none flex-col p-12 opacity-0 transition-opacity duration-500 hover:opacity-100 lg:flex"},[t("span",null," dervis was here "),t("span",{class:"text-xs text-gray-600 dark:text-gray-300"},"~ he's my cat ")],-1);function Pt(d,o){const e=dt,n=zt,_=w;return s(),i("div",null,[t("div",Dt,[t("main",null,[l(e),O(d.$slots,"default")]),l(n),l(_,null,{default:p(()=>[Nt]),_:1})])])}const It=g(Et,[["render",Pt]]);export{It as default};
