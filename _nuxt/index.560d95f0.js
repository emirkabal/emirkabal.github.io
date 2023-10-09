import{r as v,I as L,R as _,e as N,S as R,E as C,G as F,Y as W,aa as B,Q as H,ab as V,j as E,H as A,L as D}from"./entry.b74a26e9.js";function b(e){return _()?(R(e),!0):!1}function j(){const e=new Set,n=t=>{e.delete(t)};return{on:t=>{e.add(t);const i=()=>n(t);return b(i),{off:i}},off:n,trigger:t=>Promise.all(Array.from(e).map(i=>i(t)))}}function S(e){return typeof e=="function"?e():N(e)}const O=typeof window<"u"&&typeof document<"u",Y=Object.prototype.toString,$=e=>Y.call(e)==="[object Object]",k=()=>{};function q(e,n,u=!1){return n.reduce((o,t)=>(t in e&&(!u||e[t]!==void 0)&&(o[t]=e[t]),o),{})}function Q(e,n={}){if(!B(e))return H(e);const u=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const o in e.value)u[o]=V(()=>({get(){return e.value[o]},set(t){var i;if((i=S(n.replaceRef))!=null?i:!0)if(Array.isArray(e.value)){const s=[...e.value];s[o]=t,e.value=s}else{const s={...e.value,[o]:t};Object.setPrototypeOf(s,Object.getPrototypeOf(e.value)),e.value=s}else e.value[o]=t}}));return u}function P(e,n=!0){C()?F(e):n?e():W(e)}function G(e,n,u={}){const{immediate:o=!0}=u,t=v(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function s(){t.value=!1,a()}function r(...l){a(),t.value=!0,i=setTimeout(()=>{t.value=!1,i=null,e(...l)},S(n))}return o&&(t.value=!0,O&&r()),b(s),{isPending:L(t),start:r,stop:s}}function g(e){var n;const u=S(e);return(n=u==null?void 0:u.$el)!=null?n:u}const w=O?window:void 0,U=O?window.navigator:void 0;function x(...e){let n,u,o,t;if(typeof e[0]=="string"||Array.isArray(e[0])?([u,o,t]=e,n=w):[n,u,o,t]=e,!n)return k;Array.isArray(u)||(u=[u]),Array.isArray(o)||(o=[o]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},s=(d,c,f,h)=>(d.addEventListener(c,f,h),()=>d.removeEventListener(c,f,h)),r=A(()=>[g(n),S(t)],([d,c])=>{if(a(),!d)return;const f=$(c)?{...c}:c;i.push(...u.flatMap(h=>o.map(y=>s(d,h,y,f))))},{immediate:!0,flush:"post"}),l=()=>{r(),a()};return b(l),l}function X(){const e=v(!1);return C()&&F(()=>{e.value=!0}),e}function I(e){const n=X();return E(()=>(n.value,!!e()))}function ee(e,n={}){const{immediate:u=!0,fpsLimit:o=void 0,window:t=w}=n,i=v(!1),a=o?1e3/o:null;let s=0,r=null;function l(f){if(!i.value||!t)return;const h=f-(s||f);if(a&&h<a){r=t.requestAnimationFrame(l);return}e({delta:h,timestamp:f}),s=f,r=t.requestAnimationFrame(l)}function d(){!i.value&&t&&(i.value=!0,r=t.requestAnimationFrame(l))}function c(){i.value=!1,r!=null&&t&&(t.cancelAnimationFrame(r),r=null)}return u&&d(),b(c),{isActive:L(i),pause:c,resume:d}}function J(e,n={}){const{window:u=w}=n,o=I(()=>u&&"matchMedia"in u&&typeof u.matchMedia=="function");let t;const i=v(!1),a=l=>{i.value=l.matches},s=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",a):t.removeListener(a))},r=D(()=>{o.value&&(s(),t=u.matchMedia(S(e)),"addEventListener"in t?t.addEventListener("change",a):t.addListener(a),i.value=t.matches)});return b(()=>{r(),s(),t=void 0}),i}function te(e={}){const{navigator:n=U,read:u=!1,source:o,copiedDuring:t=1500,legacy:i=!1}=e,a=I(()=>n&&"clipboard"in n),s=E(()=>a.value||i),r=v(""),l=v(!1),d=G(()=>l.value=!1,t);function c(){a.value?n.clipboard.readText().then(m=>{r.value=m}):r.value=y()}s.value&&u&&x(["copy","cut"],c);async function f(m=S(o)){s.value&&m!=null&&(a.value?await n.clipboard.writeText(m):h(m),r.value=m,l.value=!0,d.start())}function h(m){const p=document.createElement("textarea");p.value=m??"",p.style.position="absolute",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),p.remove()}function y(){var m,p,T;return(T=(p=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:p.toString())!=null?T:""}return{isSupported:s,text:r,copied:l,copy:f}}function ne(e={}){const{window:n=w}=e,u=v(1);if(n){let o=function(){u.value=n.devicePixelRatio,t(),i=n.matchMedia(`(resolution: ${u.value}dppx)`),i.addEventListener("change",o,{once:!0})},t=function(){i==null||i.removeEventListener("change",o)},i;o(),b(t)}return{pixelRatio:u}}function M(e,n,u={}){const{window:o=w,...t}=u;let i;const a=I(()=>o&&"ResizeObserver"in o),s=()=>{i&&(i.disconnect(),i=void 0)},r=E(()=>Array.isArray(e)?e.map(c=>g(c)):[g(e)]),l=A(r,c=>{if(s(),a.value&&o){i=new ResizeObserver(n);for(const f of c)f&&i.observe(f,t)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{s(),l()};return b(d),{isSupported:a,stop:d}}function ie(e,n={}){const{reset:u=!0,windowResize:o=!0,windowScroll:t=!0,immediate:i=!0}=n,a=v(0),s=v(0),r=v(0),l=v(0),d=v(0),c=v(0),f=v(0),h=v(0);function y(){const m=g(e);if(!m){u&&(a.value=0,s.value=0,r.value=0,l.value=0,d.value=0,c.value=0,f.value=0,h.value=0);return}const p=m.getBoundingClientRect();a.value=p.height,s.value=p.bottom,r.value=p.left,l.value=p.right,d.value=p.top,c.value=p.width,f.value=p.x,h.value=p.y}return M(e,y),A(()=>g(e),m=>!m&&y()),t&&x("scroll",y,{capture:!0,passive:!0}),o&&x("resize",y,{passive:!0}),P(()=>{i&&y()}),{height:a,bottom:s,left:r,right:l,top:d,width:c,x:f,y:h,update:y}}function oe(e,n={width:0,height:0},u={}){const{window:o=w,box:t="content-box"}=u,i=E(()=>{var r,l;return(l=(r=g(e))==null?void 0:r.namespaceURI)==null?void 0:l.includes("svg")}),a=v(n.width),s=v(n.height);return M(e,([r])=>{const l=t==="border-box"?r.borderBoxSize:t==="content-box"?r.contentBoxSize:r.devicePixelContentBoxSize;if(o&&i.value){const d=g(e);if(d){const c=o.getComputedStyle(d);a.value=Number.parseFloat(c.width),s.value=Number.parseFloat(c.height)}}else if(l){const d=Array.isArray(l)?l:[l];a.value=d.reduce((c,{inlineSize:f})=>c+f,0),s.value=d.reduce((c,{blockSize:f})=>c+f,0)}else a.value=r.contentRect.width,s.value=r.contentRect.height},u),A(()=>g(e),r=>{a.value=r?n.width:0,s.value=r?n.height:0}),{width:a,height:s}}const z={x:0,y:0,pointerId:0,pressure:0,tiltX:0,tiltY:0,width:0,height:0,twist:0,pointerType:null},K=Object.keys(z);function ue(e={}){const{target:n=w}=e,u=v(!1),o=v(e.initialValue||{});Object.assign(o.value,z,o.value);const t=i=>{u.value=!0,!(e.pointerTypes&&!e.pointerTypes.includes(i.pointerType))&&(o.value=q(i,K,!1))};if(n){const i={passive:!0};x(n,["pointerdown","pointermove","pointerup"],t,i),x(n,"pointerleave",()=>u.value=!1,i)}return{...Q(o),isInside:u}}function re(e={}){const{window:n=w,initialWidth:u=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:t=!0,includeScrollbar:i=!0}=e,a=v(u),s=v(o),r=()=>{n&&(i?(a.value=n.innerWidth,s.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,s.value=n.document.documentElement.clientHeight))};if(r(),P(r),x("resize",r,{passive:!0}),t){const l=J("(orientation: portrait)");A(l,()=>r())}return{width:a,height:s}}export{ee as a,re as b,j as c,oe as d,g as e,ne as f,ue as g,ie as h,x as i,S as t,te as u};