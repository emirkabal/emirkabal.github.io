import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as l,b as h,j as _,k as v,X as w,Y as y,Z as x,$ as b,r as d,e,R as c,a as L,h as u}from"./entry.abf5c66c.js";const k={},S={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},z=h("path",{fill:"currentColor",d:"m21.9 21.9l-6.1-6.1l-2.69-2.69L5 5L3.59 3.59L2.1 2.1L.69 3.51L3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31l1.42-1.41zM5 19V7.83l6.84 6.84l-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z"},null,-1),N=[z];function V(r,a){return o(),l("svg",S,N)}const $=p(k,[["render",V]]),j={key:0,class:"absolute inset-0 flex flex-col items-center justify-center"},C=["src","alt","width","height"],H=_({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const a=r,f=v(()=>{var i;if((i=a.src)!=null&&i.startsWith("/")&&!a.src.startsWith("//")){const t=w(y(x().app.baseURL));if(t!=="/"&&!a.src.startsWith(t))return b(t,a.src)}return a.src}),s=d(!1),n=d(!1);return(i,t)=>{const m=$;return o(),l("div",{class:c({"my-4":!e(s)||!e(n)})},[!e(s)||e(n)?(o(),l("div",{key:0,class:c(["relative aspect-video rounded-xl bg-gray-200 dark:bg-slate-800",{"animate-pulse":!e(s)&&!e(n)}])},[e(n)?(o(),l("div",j,[L(m,{class:"h-12 w-12 text-gray-700 dark:text-gray-300"})])):u("",!0)],2)):u("",!0),h("img",{src:e(f),loading:"lazy",onLoad:t[0]||(t[0]=g=>s.value=!0),onError:t[1]||(t[1]=g=>{s.value=!1,n.value=!0}),alt:r.alt,width:r.width,height:r.height,class:c(["h-full w-full object-contain object-center",{"pointer-events-none absolute inset-0 left-0 top-0 -z-50 h-0 w-0 opacity-0":!e(s),"opacity-100":e(s)}])},null,42,C)],2)}}});export{H as default};