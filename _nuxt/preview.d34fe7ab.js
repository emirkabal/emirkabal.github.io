import{r as w,N as m,S as y,a3 as g,O as h,ad as v,ab as k,f}from"./entry.3a94cbbf.js";const p=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function S(e,r){if(typeof e!="string")throw new TypeError("argument str must be a string");const o={},s=(r||{}).decode||b;let a=0;for(;a<e.length;){const i=e.indexOf("=",a);if(i===-1)break;let n=e.indexOf(";",a);if(n===-1)n=e.length;else if(n<i){a=e.lastIndexOf(";",i-1)+1;continue}const c=e.slice(a,i).trim();if(o[c]===void 0){let u=e.slice(i+1,n).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),o[c]=T(u,s)}a=n+1}return o}function l(e,r,o){const t=o||{},s=t.encode||C;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!p.test(e))throw new TypeError("argument name is invalid");const a=s(r);if(a&&!p.test(a))throw new TypeError("argument val is invalid");let i=e+"="+a;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(n)}if(t.domain){if(!p.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!p.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(!x(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function x(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function T(e,r){try{return r(e)}catch{return e}}function b(e){return e.includes("%")?decodeURIComponent(e):e}function C(e){return encodeURIComponent(e)}const E={path:"/",watch:!0,decode:e=>v(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function d(e,r){var a;const o={...E,...r},t=I(o)||{},s=w(t[e]??((a=o.default)==null?void 0:a.call(o)));{const i=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`);m()&&y(()=>{i==null||i.close()});const n=()=>{O(e,s.value,o),i==null||i.postMessage(k(s.value))};let c=!1;i&&(i.onmessage=u=>{c=!0,s.value=u.data,g(()=>{c=!1})}),o.watch?h(s,()=>{c||n()},{deep:o.watch!=="shallow"}):n()}return s}function I(e={}){return S(document.cookie,e)}function P(e,r,o={}){return r==null?l(e,r,{...o,maxAge:-1}):l(e,r,o)}function O(e,r,o={}){document.cookie=P(e,r,o)}const A=()=>({isEnabled:()=>{const t=f().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||d("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>d("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{d("previewToken").value=t,f().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{A as u};
