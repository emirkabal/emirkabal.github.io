import{j as p,o as c,G as f,w as u,I as _,V as i,W as d,e as h,_ as m}from"./entry.c3fa5fea.js";const x=p({__name:"ProseA",props:{href:{default:""},blank:{type:Boolean,default:!1}},setup(a){const e=a;function s(o){let t;try{t=new URL(o)}catch{return!1}return t.protocol==="http:"||t.protocol==="https:"}const l=s(e.href);let r={to:e.href};return(l||e.blank)&&(r.target="_blank"),(o,t)=>{const n=m;return c(),f(n,i(d(h(r))),{default:u(()=>[_(o.$slots,"default")]),_:3},16)}}});export{x as default};