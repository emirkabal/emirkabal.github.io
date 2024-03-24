import{r as v,U as _,a1 as H,a2 as V,e as q,S as O,J as L,a8 as D,$ as R,X as $,ak as G,R as k,j as F,T as Y}from"./entry.Z0jj42Hm.js";function b(e){return H()?(V(e),!0):!1}function fe(){const e=new Set,t=i=>{e.delete(i)};return{on:i=>{e.add(i);const n=()=>t(i);return b(n),{off:n}},off:t,trigger:(...i)=>Promise.all(Array.from(e).map(n=>n(...i)))}}function S(e){return typeof e=="function"?e():q(e)}const C=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Q=e=>e!=null,U=Object.prototype.toString,X=e=>U.call(e)==="[object Object]",I=()=>{};function J(e,t){function r(...o){return new Promise((i,n)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(n)})}return r}function j(e,t={}){let r,o,i=I;const n=s=>{clearTimeout(s),i(),i=I};return s=>{const l=S(e),f=S(t.maxWait);return r&&n(r),l<=0||f!==void 0&&f<=0?(o&&(n(o),o=null),Promise.resolve(s())):new Promise((c,a)=>{i=t.rejectOnCancel?a:c,f&&!o&&(o=setTimeout(()=>{r&&n(r),o=null,c(s())},f)),r=setTimeout(()=>{o&&n(o),o=null,c(s())},l)})}}function K(e){let t;function r(){return t||(t=e()),t}return r.reset=async()=>{const o=t;t=void 0,o&&await o},r}function Z(e,t,r=!1){return t.reduce((o,i)=>(i in e&&(!r||e[i]!==void 0)&&(o[i]=e[i]),o),{})}function ee(e){return e||k()}function te(e,t=200,r={}){return J(j(t,r),e)}function de(e,t=200,r={}){const o=v(e.value),i=te(()=>{o.value=e.value},t,r);return O(e,()=>i()),o}function ne(e,t={}){if(!R(e))return $(e);const r=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const o in e.value)r[o]=G(()=>({get(){return e.value[o]},set(i){var n;if((n=S(t.replaceRef))!=null?n:!0)if(Array.isArray(e.value)){const s=[...e.value];s[o]=i,e.value=s}else{const s={...e.value,[o]:i};Object.setPrototypeOf(s,Object.getPrototypeOf(e.value)),e.value=s}else e.value[o]=i}}));return r}function P(e,t=!0,r){ee()?L(e,r):t?e():D(e)}function oe(e,t=1e3,r={}){const{immediate:o=!0,immediateCallback:i=!1}=r;let n=null;const u=v(!1);function s(){n&&(clearInterval(n),n=null)}function l(){u.value=!1,s()}function f(){const c=S(t);c<=0||(u.value=!0,i&&e(),s(),n=setInterval(e,c))}if(o&&C&&f(),R(t)||typeof t=="function"){const c=O(t,()=>{u.value&&C&&f()});b(c)}return b(l),{isActive:u,pause:l,resume:f}}function ie(e,t,r={}){const{immediate:o=!0}=r,i=v(!1);let n=null;function u(){n&&(clearTimeout(n),n=null)}function s(){i.value=!1,u()}function l(...f){u(),i.value=!0,n=setTimeout(()=>{i.value=!1,n=null,e(...f)},S(t))}return o&&(i.value=!0,C&&l()),b(s),{isPending:_(i),start:l,stop:s}}function y(e){var t;const r=S(e);return(t=r==null?void 0:r.$el)!=null?t:r}const x=C?window:void 0,N=C?window.navigator:void 0;function T(...e){let t,r,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,o,i]=e,t=x):[t,r,o,i]=e,!t)return I;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const n=[],u=()=>{n.forEach(c=>c()),n.length=0},s=(c,a,d,m)=>(c.addEventListener(a,d,m),()=>c.removeEventListener(a,d,m)),l=O(()=>[y(t),S(i)],([c,a])=>{if(u(),!c)return;const d=X(a)?{...a}:a;n.push(...r.flatMap(m=>o.map(p=>s(c,m,p,d))))},{immediate:!0,flush:"post"}),f=()=>{l(),u()};return b(f),f}function re(){const e=v(!1);return k()&&L(()=>{e.value=!0}),e}function E(e){const t=re();return F(()=>(t.value,!!e()))}function se(e,t={}){const{immediate:r=!0,fpsLimit:o=void 0,window:i=x}=t,n=v(!1),u=o?1e3/o:null;let s=0,l=null;function f(d){if(!n.value||!i)return;const m=d-(s||d);if(u&&m<u){l=i.requestAnimationFrame(f);return}e({delta:m,timestamp:d}),s=d,l=i.requestAnimationFrame(f)}function c(){!n.value&&i&&(n.value=!0,l=i.requestAnimationFrame(f))}function a(){n.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return r&&c(),b(a),{isActive:_(n),pause:a,resume:c}}function ue(e,t={}){const{window:r=x}=t,o=E(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let i;const n=v(!1),u=f=>{n.value=f.matches},s=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",u):i.removeListener(u))},l=Y(()=>{o.value&&(s(),i=r.matchMedia(S(e)),"addEventListener"in i?i.addEventListener("change",u):i.addListener(u),n.value=i.matches)});return b(()=>{l(),s(),i=void 0}),n}function M(e,t={}){const{controls:r=!1,navigator:o=N}=t,i=E(()=>o&&"permissions"in o);let n;const u=typeof e=="string"?{name:e}:e,s=v(),l=()=>{n&&(s.value=n.state)},f=K(async()=>{if(i.value){if(!n)try{n=await o.permissions.query(u),T(n,"change",l),l()}catch{s.value="prompt"}return n}});return f(),r?{state:s,isSupported:i,query:f}:s}function ve(e={}){const{navigator:t=N,read:r=!1,source:o,copiedDuring:i=1500,legacy:n=!1}=e,u=E(()=>t&&"clipboard"in t),s=M("clipboard-read"),l=M("clipboard-write"),f=F(()=>u.value||n),c=v(""),a=v(!1),d=ie(()=>a.value=!1,i);function m(){u.value&&s.value!=="denied"?t.clipboard.readText().then(h=>{c.value=h}):c.value=w()}f.value&&r&&T(["copy","cut"],m);async function p(h=S(o)){f.value&&h!=null&&(u.value&&l.value!=="denied"?await t.clipboard.writeText(h):g(h),c.value=h,a.value=!0,d.start())}function g(h){const A=document.createElement("textarea");A.value=h??"",A.style.position="absolute",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}function w(){var h,A,W;return(W=(A=(h=document==null?void 0:document.getSelection)==null?void 0:h.call(document))==null?void 0:A.toString())!=null?W:""}return{isSupported:f,text:c,copied:a,copy:p}}function ae(e,t,r={}){const{window:o=x,...i}=r;let n;const u=E(()=>o&&"MutationObserver"in o),s=()=>{n&&(n.disconnect(),n=void 0)},l=O(()=>y(e),a=>{s(),u.value&&o&&a&&(n=new MutationObserver(t),n.observe(a,i))},{immediate:!0}),f=()=>n==null?void 0:n.takeRecords(),c=()=>{s(),l()};return b(c),{isSupported:u,stop:c,takeRecords:f}}function pe(e={}){const{window:t=x}=e,r=v(1);if(t){let o=function(){r.value=t.devicePixelRatio,i(),n=t.matchMedia(`(resolution: ${r.value}dppx)`),n.addEventListener("change",o,{once:!0})},i=function(){n==null||n.removeEventListener("change",o)},n;o(),b(i)}return{pixelRatio:r}}function z(e,t,r={}){const{window:o=x,...i}=r;let n;const u=E(()=>o&&"ResizeObserver"in o),s=()=>{n&&(n.disconnect(),n=void 0)},l=F(()=>Array.isArray(e)?e.map(a=>y(a)):[y(e)]),f=O(l,a=>{if(s(),u.value&&o){n=new ResizeObserver(t);for(const d of a)d&&n.observe(d,i)}},{immediate:!0,flush:"post",deep:!0}),c=()=>{s(),f()};return b(c),{isSupported:u,stop:c}}function me(e,t={}){const{reset:r=!0,windowResize:o=!0,windowScroll:i=!0,immediate:n=!0}=t,u=v(0),s=v(0),l=v(0),f=v(0),c=v(0),a=v(0),d=v(0),m=v(0);function p(){const g=y(e);if(!g){r&&(u.value=0,s.value=0,l.value=0,f.value=0,c.value=0,a.value=0,d.value=0,m.value=0);return}const w=g.getBoundingClientRect();u.value=w.height,s.value=w.bottom,l.value=w.left,f.value=w.right,c.value=w.top,a.value=w.width,d.value=w.x,m.value=w.y}return z(e,p),O(()=>y(e),g=>!g&&p()),ae(e,p,{attributeFilter:["style","class"]}),i&&T("scroll",p,{capture:!0,passive:!0}),o&&T("resize",p,{passive:!0}),P(()=>{n&&p()}),{height:u,bottom:s,left:l,right:f,top:c,width:a,x:d,y:m,update:p}}function he(e,t={width:0,height:0},r={}){const{window:o=x,box:i="content-box"}=r,n=F(()=>{var a,d;return(d=(a=y(e))==null?void 0:a.namespaceURI)==null?void 0:d.includes("svg")}),u=v(t.width),s=v(t.height),{stop:l}=z(e,([a])=>{const d=i==="border-box"?a.borderBoxSize:i==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;if(o&&n.value){const m=y(e);if(m){const p=o.getComputedStyle(m);u.value=Number.parseFloat(p.width),s.value=Number.parseFloat(p.height)}}else if(d){const m=Array.isArray(d)?d:[d];u.value=m.reduce((p,{inlineSize:g})=>p+g,0),s.value=m.reduce((p,{blockSize:g})=>p+g,0)}else u.value=a.contentRect.width,s.value=a.contentRect.height},r);P(()=>{const a=y(e);a&&(u.value="offsetWidth"in a?a.offsetWidth:t.width,s.value="offsetHeight"in a?a.offsetHeight:t.height)});const f=O(()=>y(e),a=>{u.value=a?t.width:0,s.value=a?t.height:0});function c(){l(),f()}return{width:u,height:s,stop:c}}function we(e,t,r={}){const{root:o,rootMargin:i="0px",threshold:n=.1,window:u=x,immediate:s=!0}=r,l=E(()=>u&&"IntersectionObserver"in u),f=F(()=>{const p=S(e);return(Array.isArray(p)?p:[p]).map(y).filter(Q)});let c=I;const a=v(s),d=l.value?O(()=>[f.value,y(o),a.value],([p,g])=>{if(c(),!a.value||!p.length)return;const w=new IntersectionObserver(t,{root:y(g),rootMargin:i,threshold:n});p.forEach(h=>h&&w.observe(h)),c=()=>{w.disconnect(),c=I}},{immediate:s,flush:"post"}):I,m=()=>{c(),d(),a.value=!1};return b(m),{isSupported:l,isActive:a,pause(){c(),a.value=!1},resume(){a.value=!0},stop:m}}function ye(e){var t;const r=v(0);if(typeof performance>"u")return r;const o=(t=e==null?void 0:e.every)!=null?t:10;let i=performance.now(),n=0;return se(()=>{if(n+=1,n>=o){const u=performance.now(),s=u-i;r.value=Math.round(1e3/(s/n)),i=u,n=0}}),r}function ge(e={}){const t=v(),r=E(()=>typeof performance<"u"&&"memory"in performance);if(r.value){const{interval:o=1e3}=e;oe(()=>{t.value=performance.memory},o,{immediate:e.immediate,immediateCallback:e.immediateCallback})}return{isSupported:r,memory:t}}const B={x:0,y:0,pointerId:0,pressure:0,tiltX:0,tiltY:0,width:0,height:0,twist:0,pointerType:null},ce=Object.keys(B);function be(e={}){const{target:t=x}=e,r=v(!1),o=v(e.initialValue||{});Object.assign(o.value,B,o.value);const i=n=>{r.value=!0,!(e.pointerTypes&&!e.pointerTypes.includes(n.pointerType))&&(o.value=Z(n,ce,!1))};if(t){const n={passive:!0};T(t,["pointerdown","pointermove","pointerup"],i,n),T(t,"pointerleave",()=>r.value=!1,n)}return{...ne(o),isInside:r}}function Se(e={}){const{window:t=x,initialWidth:r=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:n=!0}=e,u=v(r),s=v(o),l=()=>{t&&(n?(u.value=t.innerWidth,s.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};if(l(),P(l),T("resize",l,{passive:!0}),i){const f=ue("(orientation: portrait)");O(f,()=>l())}return{width:u,height:s}}export{se as a,Se as b,fe as c,he as d,ye as e,ge as f,y as g,pe as h,be as i,me as j,we as k,T as l,de as r,S as t,ve as u};
