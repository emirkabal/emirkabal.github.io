import{$ as v,a0 as m,a1 as l,Y as d,a2 as g,j as y,K as h,k as _,n as w,C as p,_ as C}from"./entry.9b40ce3c.js";import{q as $,w as f,h as c,e as P,s as x,j as N,a as j,u as E}from"./query.b41acac1.js";import{u as T}from"./preview.179a1892.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=l(),s=v(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(m(i))return r.payload.state[a]=i,i;s.value=i}return s}const D=async t=>{const{content:e}=d().public;typeof(t==null?void 0:t.params)!="function"&&(t=$(t));const n=t.params(),o=e.experimental.stripQueryParameters?f(`/navigation/${`${c(n)}.${e.integrity}`}/${P(n)}.json`):f(`/navigation/${c(n)}.${e.integrity}.json`);if(x())return(await g(()=>import("./client-db.595148c6.js"),["./client-db.595148c6.js","./entry.9b40ce3c.js","./entry.394a5d85.css","./query.b41acac1.js","./preview.179a1892.js","./index.a6ef77ff.js"],import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:N(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=h(t),n=_(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=j();return{navigation:a}}const{data:o}=await E(`content-navigation-${c(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=w(),{navigation:n}=t,o=s=>p(C,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),L=R;export{L as default};
