(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ce=(e,t)=>e===t,xe=Symbol("solid-track"),R={equals:Ce};let ce=pe;const k=1,J=2,ue={owned:null,cleanups:null,context:null,owner:null};var B=null;let W=null,_=null,S=null,O=null,H=0;function j(e,t){const n=_,l=B,s=e.length===0,i=s?ue:{owned:null,cleanups:null,context:null,owner:t===void 0?l:t},o=s?e:()=>e(()=>P(()=>K(i)));B=i,_=null;try{return D(o,!0)}finally{_=n,B=l}}function T(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=s=>(typeof s=="function"&&(s=s(n.value)),de(n,s));return[fe.bind(n),l]}function G(e,t,n){const l=se(e,t,!1,k);L(l)}function le(e,t,n){ce=we;const l=se(e,t,!1,k);(!n||!n.render)&&(l.user=!0),O?O.push(l):L(l)}function V(e,t,n){n=n?Object.assign({},R,n):R;const l=se(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,L(l),fe.bind(l)}function P(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function $e(e){return B===null||(B.cleanups===null?B.cleanups=[e]:B.cleanups.push(e)),e}function fe(){if(this.sources&&this.state)if(this.state===k)L(this);else{const e=S;S=null,D(()=>Y(this),!1),S=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function de(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&D(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=W&&W.running;o&&W.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?S.push(i):O.push(i),i.observers&&ge(i)),o||(i.state=k)}if(S.length>1e6)throw S=[],new Error},!1)),t}function L(e){if(!e.fn)return;K(e);const t=B,n=_,l=H;_=B=e,ye(e,e.value,l),_=n,B=t}function ye(e,t,n){let l;try{l=e.fn(t)}catch(s){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(K),e.owned=null),e.updatedAt=n+1,he(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?de(e,l):e.value=l,e.updatedAt=n)}function se(e,t,n,l=k,s){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:B,context:null,pure:n};return B===null||B!==ue&&(B.owned?B.owned.push(i):B.owned=[i]),i}function Z(e){if(e.state===0)return;if(e.state===J)return Y(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)L(e);else if(e.state===J){const l=S;S=null,D(()=>Y(e,t[0]),!1),S=l}}function D(e,t){if(S)return e();let n=!1;t||(S=[]),O?n=!0:O=[],H++;try{const l=e();return _e(n),l}catch(l){n||(O=null),S=null,he(l)}}function _e(e){if(S&&(pe(S),S=null),e)return;const t=O;O=null,t.length&&D(()=>ce(t),!1)}function pe(e){for(let t=0;t<e.length;t++)Z(e[t])}function we(e){let t,n=0;for(t=0;t<e.length;t++){const l=e[t];l.user?e[n++]=l:Z(l)}for(t=0;t<n;t++)Z(e[t])}function Y(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const s=l.state;s===k?l!==t&&(!l.updatedAt||l.updatedAt<H)&&Z(l):s===J&&Y(l,t)}}}function ge(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=J,n.pure?S.push(n):O.push(n),n.observers&&ge(n))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();l<s.length&&(i.sourceSlots[o]=l,s[l]=i,n.observerSlots[l]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){throw e}const Be=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function Se(e,t,n={}){let l=[],s=[],i=[],o=0,r=t.length>1?[]:null;return $e(()=>re(i)),()=>{let u=e()||[],c,a;return u[xe],P(()=>{let p=u.length,h,b,m,x,A,g,C,y,F;if(p===0)o!==0&&(re(i),i=[],l=[],s=[],o=0,r&&(r=[])),n.fallback&&(l=[Be],s[0]=j(X=>(i[0]=X,n.fallback())),o=1);else if(o===0){for(s=new Array(p),a=0;a<p;a++)l[a]=u[a],s[a]=j(d);o=p}else{for(m=new Array(p),x=new Array(p),r&&(A=new Array(p)),g=0,C=Math.min(o,p);g<C&&l[g]===u[g];g++);for(C=o-1,y=p-1;C>=g&&y>=g&&l[C]===u[y];C--,y--)m[y]=s[C],x[y]=i[C],r&&(A[y]=r[C]);for(h=new Map,b=new Array(y+1),a=y;a>=g;a--)F=u[a],c=h.get(F),b[a]=c===void 0?-1:c,h.set(F,a);for(c=g;c<=C;c++)F=l[c],a=h.get(F),a!==void 0&&a!==-1?(m[a]=s[c],x[a]=i[c],r&&(A[a]=r[c]),a=b[a],h.set(F,a)):i[c]();for(a=g;a<p;a++)a in m?(s[a]=m[a],i[a]=x[a],r&&(r[a]=A[a],r[a](a))):s[a]=j(d);s=s.slice(0,o=p),l=u.slice(0)}return s});function d(p){if(i[a]=p,r){const[h,b]=T(a);return r[a]=b,t(u[a],h)}return t(u[a])}}}function v(e,t){return P(()=>e(t||{}))}function Fe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return V(Se(()=>e.each,e.children,t||void 0))}function Ne(e,t,n){let l=n.length,s=t.length,i=l,o=0,r=0,u=t[s-1].nextSibling,c=null;for(;o<s||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const a=i<l?r?n[r-1].nextSibling:n[i-r]:u;for(;r<i;)e.insertBefore(n[r++],a)}else if(i===r)for(;o<s;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!c){c=new Map;let d=r;for(;d<i;)c.set(n[d],d++)}const a=c.get(t[o]);if(a!=null)if(r<a&&a<i){let d=o,p=1,h;for(;++d<s&&d<i&&!((h=c.get(t[d]))==null||h!==a+p);)p++;if(p>a-r){const b=t[o];for(;r<a;)e.insertBefore(n[r++],b)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const oe="_$DX_DELEGATE";function Ie(e,t,n,l={}){let s;return j(i=>{s=i,t===document?e():f(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{s(),t.textContent=""}}function $(e,t,n){let l;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>P(()=>document.importNode(l||(l=s()),!0)):()=>(l||(l=s())).cloneNode(!0);return i.cloneNode=i,i}function Q(e,t=window.document){const n=t[oe]||(t[oe]=new Set);for(let l=0,s=e.length;l<s;l++){const i=e[l];n.has(i)||(n.add(i),t.addEventListener(i,Te))}}function N(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function E(e,t){t==null?e.removeAttribute("class"):e.className=t}function me(e,t,n,l){if(l)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function f(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return z(e,t,l,n);G(s=>z(e,t(),s,n),l)}function Te(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const l=n[t];if(l&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?l.call(n,s,e):l.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,l,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=M(e,n,l,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=M(e,n,l);else{if(i==="function")return G(()=>{let r=t();for(;typeof r=="function";)r=r();n=z(e,r,n,l)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(te(r,t,n,s))return G(()=>n=z(e,r,n,l,!0)),()=>n;if(r.length===0){if(n=M(e,n,l),o)return n}else u?n.length===0?ae(e,r,l):Ne(e,n,r):(n&&M(e),ae(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=M(e,n,l,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function te(e,t,n,l){let s=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],u=n&&n[i],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))s=te(e,r,u)||s;else if(c==="function")if(l){for(;typeof r=="function";)r=r();s=te(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||s}else e.push(r),s=!0;else{const a=String(r);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return s}function ae(e,t,n=null){for(let l=0,s=t.length;l<s;l++)e.insertBefore(t[l],n)}function M(e,t,n,l){if(n===void 0)return e.textContent="";const s=l||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(s!==r){const u=r.parentNode===e;!i&&!o?u?e.replaceChild(s,r):e.insertBefore(s,n):u&&r.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Ge=$('<div class="max-w-[1920px] bg-gradient-to-r from-[#1A1B30] to-[#21243B]">');function Ee({children:e}){return(()=>{const t=Ge();return f(t,e),t})()}const ve="/assets/mine-eb32b879.svg",Oe="/assets/mine-grey-e4778e15.svg",ke=$("<div>"),Me=$('<p class="text-xs font-bold text-[#9A9EC8]">'),Ue=$('<div><div class="flex gap-1 items-center"><img alt="mine"><p class="font-bold text-[#9A9EC8]">x');function be({className:e,children:t,onClick:n}){return(()=>{const l=ke();return me(l,"click",n,!0),E(l,`${e} active:animate-wiggle font-bold cursor-pointer border rounded text-center drop-shadow-md shadow-black/[12%]`),f(l,t),l})()}function I({children:e,onClick:t}){return v(be,{className:"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[12%] to-white/[8%] border-white/[8%] py-1 px-2",onClick:t,get children(){const n=Me();return f(n,e),n}})}function q({minesAmount:e,multiple:t,onClick:n}){const l="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFB436]/[28%] via-[#FFB436]/[8%] to-transparent border-[#FFB436]/[36%]",s="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#767CFF]/[12%] via-white/[3%] to-white/[2%] border-white/[3%]";return(()=>{const i=Ue(),o=i.firstChild,r=o.firstChild,u=r.nextSibling;return u.firstChild,me(i,"click",n,!0),f(u,t,null),G(c=>{const a=`py-2.5 px-2 active:animate-wiggle font-bold cursor-pointer border rounded text-center drop-shadow-md shadow-black/[12%] ${e()===t?l:s}`,d=e()===t?ve:Oe;return a!==c._v$&&(i.className=c._v$=a),d!==c._v$2&&N(r,"src",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),i})()}Q(["click"]);const ie="/assets/coin-d371d0f0.svg",Pe=$('<div class="px-8 flex flex-col gap-3"><div class="flex flex-col gap-2"><p class="text-[#9A9EC8] font-medium text-xs">Bet Amount</p><div class="bg-gradient-to-r from-[#FF8A36]/[8%] via-black/0 to-white/[3%] rounded-lg bet-amount__border"><div class="flex items-center px-2"><div class="w-1/2 flex items-center gap-2"><img alt="coin"><p class="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFB436] to-[#FFD58F]"></p></div><div class="w-1/2 flex place-content-end gap-2 divide-x divide-black/[16%] items-center"><div class="flex flex-grow gap-2 items-center py-2"><div class="w-1/2"></div><div class="w-1/2"></div></div><div class="pl-2 py-2"></div></div></div></div></div><div class="grid grid-cols-6 gap-2.5 items-center">');function Le({betAmount:e,handleBetAmount:t}){return(()=>{const n=Pe(),l=n.firstChild,s=l.firstChild,i=s.nextSibling,o=i.firstChild,r=o.firstChild,u=r.firstChild,c=u.nextSibling,a=r.nextSibling,d=a.firstChild,p=d.firstChild,h=p.nextSibling,b=d.nextSibling,m=l.nextSibling;return N(u,"src",ie),f(c,()=>e().toFixed(2)),f(p,v(I,{onClick:()=>{e()>=1&&t(-e()/2)},children:"1/2"})),f(h,v(I,{onClick:()=>{t(e())},children:"x2"})),f(b,v(I,{onClick:()=>{t(-e()+.5)},children:"Clear"})),f(m,v(I,{onClick:()=>{t(.5)},children:"+0.5"}),null),f(m,v(I,{onClick:()=>{t(1)},children:"+1"}),null),f(m,v(I,{onClick:()=>{t(5)},children:"+5"}),null),f(m,v(I,{onClick:()=>{t(10)},children:"+10"}),null),f(m,v(I,{onClick:()=>{t(50)},children:"+50"}),null),f(m,v(I,{onClick:()=>{t(100)},children:"+100"}),null),n})()}const De="/assets/plus-12d4ece1.svg",qe="/assets/minus-1981f83b.svg",je=$('<img alt="plus">'),Re=$('<div class="py-1.5"><img alt="minus">'),Je=$('<div class="px-8 flex flex-col gap-3 pt-4"><div class="flex flex-col gap-2"><p class="text-[#9A9EC8] font-medium text-xs">Mines Amount</p><div class="bg-gradient-to-r from-[#D63333]/[8%] via-black/0 to-white/[3%] rounded-lg mines-amount__border"><div class="flex items-center px-2"><div class="w-1/2 flex items-center gap-2"><img alt="mine"><p class="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFB436] to-[#FFD58F]"></p></div><div class="w-1/2 place-content-end flex gap-2 divide-x divide-black/[16%] items-center"><div class="flex gap-2 items-center py-2"></div><div class="pl-2 py-2"></div></div></div></div></div><div class="grid grid-cols-4 gap-2 items-center">');function Ve({minesAmount:e,handleMinesAmount:t}){return(()=>{const n=Je(),l=n.firstChild,s=l.firstChild,i=s.nextSibling,o=i.firstChild,r=o.firstChild,u=r.firstChild,c=u.nextSibling,a=r.nextSibling,d=a.firstChild,p=d.nextSibling,h=l.nextSibling;return N(u,"src",ve),f(c,e),f(d,v(I,{onClick:()=>{e()<24&&t(e()+1)},get children(){const b=je();return N(b,"src",De),b}}),null),f(d,v(I,{onClick:()=>{e()>1&&t(e()-1)},get children(){const b=Re(),m=b.firstChild;return N(m,"src",qe),b}}),null),f(p,v(I,{onClick:()=>{t(24)},children:"MAX"})),f(h,v(q,{minesAmount:e,onClick:()=>{t(1)},multiple:1}),null),f(h,v(q,{minesAmount:e,multiple:5,onClick:()=>{t(5)}}),null),f(h,v(q,{minesAmount:e,multiple:10,onClick:()=>{t(10)}}),null),f(h,v(q,{minesAmount:e,multiple:24,onClick:()=>{t(24)}}),null),n})()}const w={INIT:"init",ONGOING:"ongoing",WON:"won",BUST:"bust"},ne=Array(5).fill(0).map(e=>new Array(5).fill(0));function Ze(){const[e,t]=T(ne),[n,l]=T(ne),[s,i]=T(0),[o,r]=T(0),[u,c]=T(w.INIT),[a,d]=T(!1);return{currentBoard:e,selectedTileArray:n,currentGameStatus:u,starCount:s,currentBonus:o,isBust:a,gameActions:{handleCurrentBoard:g=>{t(g)},handleCurrentGameStatus:g=>{c(g)},handleStarCount:g=>{i(g)},handleCurrentBonus:g=>{r(g)},handleSelectedTileArray:(g,C,y)=>{if(C===-1||y===-1)l(g);else{let F=JSON.parse(JSON.stringify(n()));F[C][y]=1,l(F)}},handleBust:g=>{d(g)}}}}function Ye(e){const t=[];for(;t.length<e();){const n=Math.floor(Math.random()*25);t.includes(n)||t.push(n)}return t}function ze(e){let t=Ye(e),n=Array(5).fill(0).map(l=>new Array(5).fill(0));return t.map(l=>{let s=Math.floor(l/5),i=Math.floor(l%5);n[s][i]=1}),n}function Ae(e,t){return e.map((l,s)=>l.map((i,o)=>i+t[s][o]>1?1:i+t[s][o]))}const He=$('<div><div class="flex justify-center gap-2 items-center "><p class="text-[#FFB436] font-bold"></p><div class="flex gap-2 items-center"><img alt="coin"><p class="font-bold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFB436] to-[#FFD58F]">');function Ke({currentGameStatus:e,currentBonus:t,betAmount:n,minesAmount:l,currentBoard:s,selectedTileArray:i,handleBust:o,handleCurrentBoard:r,handleStarCount:u,handleCurrentGameStatus:c,handleCurrentBonus:a,handleSelectedTileArray:d}){const p=()=>{if(e()===w.INIT)c(w.ONGOING),r(ze(l)),d(ne,-1,-1),o(!1),u(0),a(0);else{c(w.INIT);let h=Ae(i(),s());d(h,-1,-1)}};return(()=>{const h=He(),b=h.firstChild,m=b.firstChild,x=m.nextSibling,A=x.firstChild,g=A.nextSibling;return h.$$click=p,f(m,()=>e()===w.ONGOING?"Cashout":"Start Game"),N(A,"src",ie),f(g,()=>Number(n()).toFixed(2)),G(()=>E(h,`w-full py-3 ${e()===w.ONGOING&&!t()?"opacity-30 pointer-events-none":"opacity-100 pointer-events-auto"} ${e()===w.ONGOING?"bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#27F278]/[20%] to-transparent hover:from-[#27F278]/[30%] game-status_shadow--ongoing":"bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFB436]/[20%] to-transparent hover:from-[#FFB436]/[30%] game-status_shadow--init"} active:animate-wiggle font-bold cursor-pointer rounded text-center`)),h})()}Q(["click"]);const Qe=$('<div class="pt-14 flex flex-col gap-8 border border-white/[4%] rounded-l-xl bg-gradient-to-b from-[#1A1B30] to-[#191C35]"><div></div><div class="px-8 flex flex-col gap-3"><div>');function Xe({currentBoard:e,selectedTileArray:t,currentGameStatus:n,currentBonus:l,betAmount:s,minesAmount:i,handleBust:o,handleCurrentBoard:r,handleCurrentGameStatus:u,handleBetAmount:c,handleMinesAmount:a,handleStarCount:d,handleCurrentBonus:p,handleSelectedTileArray:h}){const b=()=>{};return(()=>{const m=Qe(),x=m.firstChild,A=x.nextSibling,g=A.firstChild;return f(x,v(Le,{betAmount:s,handleBetAmount:c}),null),f(x,v(Ve,{minesAmount:i,handleMinesAmount:a}),null),f(A,v(Ke,{currentBoard:e,selectedTileArray:t,currentGameStatus:n,betAmount:s,currentBonus:l,minesAmount:i,handleBust:o,handleCurrentBoard:r,handleCurrentGameStatus:u,handleStarCount:d,handleCurrentBonus:p,handleSelectedTileArray:h}),g),g.$$click=b,f(g,v(be,{className:`w-full py-3 border-white/[8%] flex justify-center gap-2 items-center rounded pick-random-tile  text-[#9A9EC8]
              `,children:"Pick Random Tile"})),G(C=>{const y=`flex flex-col gap-4 divide-y divide-black/[16%] transition-all 
      ${n()===w.INIT?"opacity-100 pointer-events-auto":"opacity-30 pointer-events-none"}
      `,F=`transition-all ${n()===w.ONGOING?"opacity-100 pointer-events-auto":"opacity-30 pointer-events-none"}`;return y!==C._v$&&E(x,C._v$=y),F!==C._v$2&&E(g,C._v$2=F),C},{_v$:void 0,_v$2:void 0}),m})()}Q(["click"]);const We="/assets/symbol-bg-b06a4c9e.svg",et="/assets/symbol-359a109f.svg",tt="/assets/tile-star-71c13e2a.png",nt="/assets/tile-mine-e7696d9f.png",lt=$('<div><div class="card__face"><div class="relative"><img alt="bg"><img alt="tile" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div></div><div class="card__face card__face--back">'),st=$('<img alt="mine" width="100" height="100">'),it=$('<img alt="star" width="100" height="100">');function rt({currentBoard:e,currentGameStatus:t,currentRow:n,currentColumn:l,mineFlag:s,starCount:i,selectedTileArray:o,betAmount:r,handleBust:u,handleBetAmount:c,handleSelectedTileArray:a,handleGameStatus:d,handleCurrentBonus:p,handleStarCount:h}){const[b,m]=T(!1);le(()=>{t()===w.ONGOING||t()===w.INIT&&(s||o()[n][l])||t()===w.INIT&&s?m(1):m(0)});const x=()=>{if(o()[n][l]===0&&(a(void 0,n,l),h(i()+1),p(1.2*i()),c(1.2*i())),o()[n][l]&&s===1){d(w.INIT),u(!0);let A=Ae(o(),e());a(A,-1,-1),p(0),h(0)}};return(()=>{const A=lt(),g=A.firstChild,C=g.firstChild,y=C.firstChild,F=y.nextSibling,X=g.nextSibling;return A.$$click=x,N(y,"src",We),N(F,"src",et),f(X,s?(()=>{const U=st();return N(U,"src",nt),U})():(()=>{const U=it();return N(U,"src",tt),U})()),G(()=>E(A,`cursor-pointer transition-all duration-500 w-[96px] h-[96px] card
      active:animate-wiggle
      ${o()[n][l]?"is-flipped":""} ${b()?"opacity-100":"opacity-30"} ${t()!==w.ONGOING?"pointer-events-none":"pointer-events-auto"}`)),A})()}Q(["click"]);const ot="data:image/png;base64,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",at="/assets/safe-tile-bg-ed416f7d.png",ct="/assets/bust-21d74474.png",ut=$("<div>"),ft=$('<div class="-mt-7"><img alt="bust" class="scale-110">'),dt=$('<div class="relative"><img alt="star-bg"><div class="absolute flex gap-3 items-center top-1 left-1/2 -translate-x-1/2"><img alt="star" width="32" height="32"><p class="font-bold text-xl"><span class="text-white"> </span><span class="text-[#9A9EC8]">Left');function pt({minesAmount:e,currentGameStatus:t,starCount:n,isBust:l}){return(()=>{const s=ut();return f(s,(()=>{const i=V(()=>!!l());return()=>i()?(()=>{const o=ft(),r=o.firstChild;return N(r,"src",ct),o})():(()=>{const o=dt(),r=o.firstChild,u=r.nextSibling,c=u.firstChild,a=c.nextSibling,d=a.firstChild,p=d.firstChild;return N(r,"src",at),N(c,"src",ot),f(d,()=>25-e()-n(),p),o})()})()),G(()=>E(s,`absolute  -top-2 py-2 left-1/4 px-10 transition-all
    ${t()===w.INIT&&!l()?"opacity-0":"opacity-100"}
    `)),s})()}const gt=$('<div><img alt="coin"><p><span>+</span><span>.</span><span class="text-xl">');function ee({isBust:e,isCurrent:t,currentBonus:n,starCount:l,isFuture:s=0}){const[i,o]=T(0);return le(()=>{o(t?e()?0:n():(l()+s)*1.2)}),(()=>{const r=gt(),u=r.firstChild,c=u.nextSibling,a=c.firstChild,d=a.nextSibling,p=d.firstChild,h=d.nextSibling;return N(u,"src",ie),f(d,()=>Math.floor(i()),p),f(h,()=>(i()-Math.floor(i())).toFixed(2)*100),G(b=>{const m=`py-1 pl-12 pr-4 flex gap-3 items-center bg-gradient-to-l ${t?e()?"from-[#D63333]/[24%] scale-y-100 scale-x-100 opacity-100":"from-[#5CDE90]/[24%] scale-y-100 scale-x-100 opacity-100":"from-[#FFB436]/[8%] scale-y-[80%] scale-x-75 translate-x-5 opacity-50"} to-transparent`,x=`font-bold text-2xl bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${t?e()?"from-[#D63333] to-[#D63333]":"from-[#27F278] to-[#86FFB6]":"from-[#FFB436] to-[#FFD58F]"} `;return m!==b._v$&&E(r,b._v$=m),x!==b._v$2&&E(c,b._v$2=x),b},{_v$:void 0,_v$2:void 0}),r})()}const ht=$('<div><div class="absolute right-0 top-1/2 flex flex-col gap-2 h-1/2 overflow-hidden">'),mt=$('<div class="absolute top-1/2 -mt-10 right-0">'),vt=$('<div class="flex flex-col-reverse gap-1 z-0">');function bt({currentGameStatus:e,betAmount:t,starCount:n,currentBonus:l,isBust:s}){const[i,o]=T([]);return le(()=>{o(new Array(n()).fill(0))}),(()=>{const r=ht(),u=r.firstChild;return f(r,(()=>{const c=V(()=>e()===w.ONGOING);return()=>c()&&(()=>{const a=mt();return f(a,v(ee,{isCurrent:!1,isFuture:1,betAmount:t,starCount:n,currentGameStatus:e,isBust:s})),a})()})(),u),f(u,v(ee,{isCurrent:!0,betAmount:t,currentBonus:l,starCount:n,currentGameStatus:e,isBust:s}),null),f(u,(()=>{const c=V(()=>e()===w.ONGOING);return()=>c()&&(()=>{const a=vt();return f(a,v(Fe,{get each(){return i()},children:(d,p)=>v(ee,{isCurrent:!1,betAmount:t,starCount:p,currentGameStatus:e,isBust:s})})),a})()})(),null),r})()}const At=$('<div class="relative pr-[185px] "><div><div>'),Ct=({currentGameStatus:e,currentBoard:t,selectedTileArray:n,minesAmount:l,starCount:s,currentBonus:i,betAmount:o,isBust:r,handleBust:u,handleBetAmount:c,handleCurrentBonus:a,handleGameStatus:d,handleStarCount:p,handleSelectedTileArray:h})=>(()=>{const b=At(),m=b.firstChild,x=m.firstChild;return f(m,v(pt,{minesAmount:l,currentGameStatus:e,starCount:s,isBust:r}),x),f(x,()=>t().map((A,g)=>A.map((C,y)=>v(rt,{currentBoard:t,currentGameStatus:e,currentRow:g,currentColumn:y,get mineFlag(){return t()[g][y]},starCount:s,betAmount:o,handleBust:u,handleBetAmount:c,handleCurrentBonus:a,handleGameStatus:d,handleStarCount:p,selectedTileArray:n,handleSelectedTileArray:h}))),null),f(x,v(bt,{currentGameStatus:e,starCount:s,betAmount:o,currentBonus:i,isBust:r}),null),G(A=>{const g=`px-[140px]  pt-16 pb-8 flex-grow overflow-hidden ${r()?"bust-bg":""} `,C=`grid grid-cols-5 gap-4 transition-all ${e()!==w.ONGOING?" pointer-events-none":" pointer-events-auto"} `;return g!==A._v$&&E(m,A._v$=g),C!==A._v$2&&E(x,A._v$2=C),A},{_v$:void 0,_v$2:void 0}),b})();function xt(){const[e,t]=T(.5),[n,l]=T(1);return{betAmount:e,minesAmount:n,settingActions:{handleBetAmount:o=>{t(e()+o)},handleMinesAmount:o=>{l(o)}}}}const $t=$('<div class="relative bg-gradient-to-b from-white/5 to-white/0 rounded-xl pl-32 my-40 w-4/5"><div class="flex rounded-lg bg-blend-luminosity p-[2px] w-full h-full ">');function yt(){const{betAmount:e,minesAmount:t,settingActions:n}=xt(),{currentBoard:l,selectedTileArray:s,starCount:i,currentGameStatus:o,currentBonus:r,isBust:u,gameActions:c}=Ze();return v(Ee,{get children(){const a=$t(),d=a.firstChild;return f(d,v(Xe,{currentBoard:l,selectedTileArray:s,currentGameStatus:o,betAmount:e,minesAmount:t,currentBonus:r,get handleBust(){return c.handleBust},get handleCurrentBoard(){return c.handleCurrentBoard},get handleCurrentGameStatus(){return c.handleCurrentGameStatus},get handleBetAmount(){return n.handleBetAmount},get handleMinesAmount(){return n.handleMinesAmount},get handleStarCount(){return c.handleStarCount},get handleCurrentBonus(){return c.handleCurrentBonus},get handleSelectedTileArray(){return c.handleSelectedTileArray}}),null),f(d,v(Ct,{currentGameStatus:o,selectedTileArray:s,minesAmount:t,currentBoard:l,starCount:i,currentBonus:r,betAmount:e,isBust:u,get handleBust(){return c.handleBust},get handleBetAmount(){return n.handleBetAmount},get handleCurrentBonus(){return c.handleCurrentBonus},get handleGameStatus(){return c.handleCurrentGameStatus},get handleStarCount(){return c.handleStarCount},get handleSelectedTileArray(){return c.handleSelectedTileArray}}),null),a}})}const _t=document.getElementById("root");Ie(()=>v(yt,{}),_t);
