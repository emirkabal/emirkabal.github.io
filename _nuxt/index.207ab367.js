import{r as y,a6 as O,a3 as W,a4 as j,e as P,i as C,O as L,v as k,K as q}from"./entry.79e7f890.js";function x(e){return W()?(j(e),!0):!1}function g(e){return typeof e=="function"?e():P(e)}const S=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const G=Object.prototype.toString,R=e=>G.call(e)==="[object Object]",B=()=>{};function D(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function F(e,t,n={}){const{immediate:r=!0}=n,i=y(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,s()}function d(...l){s(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...l)},g(t))}return r&&(i.value=!0,S&&d()),x(c),{isPending:O(i),start:d,stop:c}}function I(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const K=S?window:void 0,A=S?window.navigator:void 0;function T(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=K):[t,n,r,i]=e,!t)return B;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(a=>a()),o.length=0},c=(a,f,v,m)=>(a.addEventListener(f,v,m),()=>a.removeEventListener(f,v,m)),d=L(()=>[I(t),g(i)],([a,f])=>{if(s(),!a)return;const v=R(f)?{...f}:f;o.push(...n.flatMap(m=>r.map(b=>c(a,m,b,v))))},{immediate:!0,flush:"post"}),l=()=>{d(),s()};return x(l),l}function N(){const e=y(!1);return k()&&q(()=>{e.value=!0}),e}function E(e){const t=N();return C(()=>(t.value,!!e()))}function h(e,t={}){const{controls:n=!1,navigator:r=A}=t,i=E(()=>r&&"permissions"in r);let o;const s=typeof e=="string"?{name:e}:e,c=y(),d=()=>{o&&(c.value=o.state)},l=D(async()=>{if(i.value){if(!o)try{o=await r.permissions.query(s),T(o,"change",d),d()}catch{c.value="prompt"}return o}});return l(),n?{state:c,isSupported:i,query:l}:c}function $(e={}){const{navigator:t=A,read:n=!1,source:r,copiedDuring:i=1500,legacy:o=!1}=e,s=E(()=>t&&"clipboard"in t),c=h("clipboard-read"),d=h("clipboard-write"),l=C(()=>s.value||o),a=y(""),f=y(!1),v=F(()=>f.value=!1,i);function m(){s.value&&c.value!=="denied"?t.clipboard.readText().then(u=>{a.value=u}):a.value=M()}l.value&&n&&T(["copy","cut"],m);async function b(u=g(r)){l.value&&u!=null&&(s.value&&d.value!=="denied"?await t.clipboard.writeText(u):_(u),a.value=u,f.value=!0,v.start())}function _(u){const p=document.createElement("textarea");p.value=u??"",p.style.position="absolute",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),p.remove()}function M(){var u,p,w;return(w=(p=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:p.toString())!=null?w:""}return{isSupported:l,text:a,copied:f,copy:b}}export{T as a,$ as u};