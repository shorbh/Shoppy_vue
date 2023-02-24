(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Zl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function eu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=De(s)?hw(s):eu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(De(t))return t;if(Ae(t))return t}}const cw=/;(?![^(]*\))/g,lw=/:([^]+)/,uw=/\/\*.*?\*\//gs;function hw(t){const e={};return t.replace(uw,"").split(cw).forEach(n=>{if(n){const s=n.split(lw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qs(t){let e="";if(De(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Qs(t[n]);s&&(e+=s+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fw=Zl(dw);function Bp(t){return!!t||t===""}const Re=t=>De(t)?t:t==null?"":G(t)||Ae(t)&&(t.toString===Wp||!J(t.toString))?JSON.stringify(t,$p,2):String(t),$p=(t,e)=>e&&e.__v_isRef?$p(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:jp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!G(e)&&!Vp(e)?String(e):e,Ie={},Ws=[],$t=()=>{},pw=()=>!1,gw=/^on[^a-z]/,ia=t=>gw.test(t),tu=t=>t.startsWith("onUpdate:"),Ze=Object.assign,nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mw=Object.prototype.hasOwnProperty,ce=(t,e)=>mw.call(t,e),G=Array.isArray,Vs=t=>ra(t)==="[object Map]",jp=t=>ra(t)==="[object Set]",J=t=>typeof t=="function",De=t=>typeof t=="string",su=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Hp=t=>Ae(t)&&J(t.then)&&J(t.catch),Wp=Object.prototype.toString,ra=t=>Wp.call(t),_w=t=>ra(t).slice(8,-1),Vp=t=>ra(t)==="[object Object]",iu=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,co=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yw=/-(\w)/g,sn=oa(t=>t.replace(yw,(e,n)=>n?n.toUpperCase():"")),vw=/\B([A-Z])/g,ci=oa(t=>t.replace(vw,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=oa(t=>t?`on${aa(t)}`:""),Qi=(t,e)=>!Object.is(t,e),lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zh;const ww=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class qp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function ru(t){return new qp(t)}function Ew(t,e=gt){e&&e.active&&e.effects.push(t)}function Iw(){return gt}function bw(t){gt&&gt.cleanups.push(t)}const ou=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zp=t=>(t.w&Vn)>0,Kp=t=>(t.n&Vn)>0,Tw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vn},Cw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];zp(i)&&!Kp(i)?i.delete(t):e[n++]=i,i.w&=~Vn,i.n&=~Vn}e.length=n}},Vc=new WeakMap;let xi=0,Vn=1;const qc=30;let Mt;const us=Symbol(""),zc=Symbol("");class au{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ew(this,s)}run(){if(!this.active)return this.fn();let e=Mt,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,Fn=!0,Vn=1<<++xi,xi<=qc?Tw(this):Kh(this),this.fn()}finally{xi<=qc&&Cw(this),Vn=1<<--xi,Mt=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(Kh(this),this.onStop&&this.onStop(),this.active=!1)}}function Kh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Gp=[];function li(){Gp.push(Fn),Fn=!1}function ui(){const t=Gp.pop();Fn=t===void 0?!0:t}function bt(t,e,n){if(Fn&&Mt){let s=Vc.get(t);s||Vc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ou()),Yp(i)}}function Yp(t,e){let n=!1;xi<=qc?Kp(t)||(t.n|=Vn,n=!zp(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function wn(t,e,n,s,i,r){const o=Vc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=bo(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?iu(n)&&a.push(o.get("length")):(a.push(o.get(us)),Vs(t)&&a.push(o.get(zc)));break;case"delete":G(t)||(a.push(o.get(us)),Vs(t)&&a.push(o.get(zc)));break;case"set":Vs(t)&&a.push(o.get(us));break}if(a.length===1)a[0]&&Kc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Kc(ou(c))}}function Kc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Gh(s);for(const s of n)s.computed||Gh(s)}function Gh(t,e){(t!==Mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Aw=Zl("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(su)),Sw=cu(),Rw=cu(!1,!0),kw=cu(!0),Yh=Ow();function Ow(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)bt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){li();const s=ue(this)[e].apply(this,n);return ui(),s}}),t}function cu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?zw:tg:e?eg:Zp).get(s))return s;const o=G(s);if(!t&&o&&ce(Yh,i))return Reflect.get(Yh,i,r);const a=Reflect.get(s,i,r);return(su(i)?Jp.has(i):Aw(i))||(t||bt(s,"get",i),e)?a:Oe(a)?o&&iu(i)?a:a.value:Ae(a)?t?ng(a):Wt(a):a}}const Pw=Xp(),Nw=Xp(!0);function Xp(t=!1){return function(n,s,i,r){let o=n[s];if(Zs(o)&&Oe(o)&&!Oe(i))return!1;if(!t&&(!To(i)&&!Zs(i)&&(o=ue(o),i=ue(i)),!G(n)&&Oe(o)&&!Oe(i)))return o.value=i,!0;const a=G(n)&&iu(s)?Number(s)<n.length:ce(n,s),c=Reflect.set(n,s,i,r);return n===ue(r)&&(a?Qi(i,o)&&wn(n,"set",s,i):wn(n,"add",s,i)),c}}function xw(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&wn(t,"delete",e,void 0),s}function Dw(t,e){const n=Reflect.has(t,e);return(!su(e)||!Jp.has(e))&&bt(t,"has",e),n}function Mw(t){return bt(t,"iterate",G(t)?"length":us),Reflect.ownKeys(t)}const Qp={get:Sw,set:Pw,deleteProperty:xw,has:Dw,ownKeys:Mw},Lw={get:kw,set(t,e){return!0},deleteProperty(t,e){return!0}},Fw=Ze({},Qp,{get:Rw,set:Nw}),lu=t=>t,ca=t=>Reflect.getPrototypeOf(t);function qr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&bt(i,"get",e),bt(i,"get",r));const{has:o}=ca(i),a=s?lu:n?du:Zi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function zr(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&bt(s,"has",t),bt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Kr(t,e=!1){return t=t.__v_raw,!e&&bt(ue(t),"iterate",us),Reflect.get(t,"size",t)}function Jh(t){t=ue(t);const e=ue(this);return ca(e).has.call(e,t)||(e.add(t),wn(e,"add",t,t)),this}function Xh(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=ca(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Qi(e,o)&&wn(n,"set",t,e):wn(n,"add",t,e),this}function Qh(t){const e=ue(this),{has:n,get:s}=ca(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&wn(e,"delete",t,void 0),r}function Zh(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&wn(t,"clear",void 0,void 0),n}function Gr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?lu:t?du:Zi;return!t&&bt(a,"iterate",us),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Yr(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Vs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?lu:e?du:Zi;return!e&&bt(r,"iterate",c?zc:us),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:this}}function Uw(){const t={get(r){return qr(this,r)},get size(){return Kr(this)},has:zr,add:Jh,set:Xh,delete:Qh,clear:Zh,forEach:Gr(!1,!1)},e={get(r){return qr(this,r,!1,!0)},get size(){return Kr(this)},has:zr,add:Jh,set:Xh,delete:Qh,clear:Zh,forEach:Gr(!1,!0)},n={get(r){return qr(this,r,!0)},get size(){return Kr(this,!0)},has(r){return zr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Gr(!0,!1)},s={get(r){return qr(this,r,!0,!0)},get size(){return Kr(this,!0)},has(r){return zr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Yr(r,!1,!1),n[r]=Yr(r,!0,!1),e[r]=Yr(r,!1,!0),s[r]=Yr(r,!0,!0)}),[t,n,e,s]}const[Bw,$w,jw,Hw]=Uw();function uu(t,e){const n=e?t?Hw:jw:t?$w:Bw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const Ww={get:uu(!1,!1)},Vw={get:uu(!1,!0)},qw={get:uu(!0,!1)},Zp=new WeakMap,eg=new WeakMap,tg=new WeakMap,zw=new WeakMap;function Kw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gw(t){return t.__v_skip||!Object.isExtensible(t)?0:Kw(_w(t))}function Wt(t){return Zs(t)?t:hu(t,!1,Qp,Ww,Zp)}function Yw(t){return hu(t,!1,Fw,Vw,eg)}function ng(t){return hu(t,!0,Lw,qw,tg)}function hu(t,e,n,s,i){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Gw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function _n(t){return Zs(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function To(t){return!!(t&&t.__v_isShallow)}function sg(t){return _n(t)||Zs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function ei(t){return Io(t,"__v_skip",!0),t}const Zi=t=>Ae(t)?Wt(t):t,du=t=>Ae(t)?ng(t):t;function ig(t){Fn&&Mt&&(t=ue(t),Yp(t.dep||(t.dep=ou())))}function rg(t,e){t=ue(t),t.dep&&Kc(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function ut(t){return og(t,!1)}function Jw(t){return og(t,!0)}function og(t,e){return Oe(t)?t:new Xw(t,e)}class Xw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Zi(e)}get value(){return ig(this),this._value}set value(e){const n=this.__v_isShallow||To(e)||Zs(e);e=n?e:ue(e),Qi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zi(e),rg(this))}}function qs(t){return Oe(t)?t.value:t}const Qw={get:(t,e,n)=>qs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ag(t){return _n(t)?t:new Proxy(t,Qw)}function cg(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=lg(t,n);return e}class Zw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function lg(t,e,n){const s=t[e];return Oe(s)?s:new Zw(t,e,n)}var ug;class eE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ug]=!1,this._dirty=!0,this.effect=new au(e,()=>{this._dirty||(this._dirty=!0,rg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return ig(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ug="__v_isReadonly";function tE(t,e,n=!1){let s,i;const r=J(t);return r?(s=t,i=$t):(s=t.get,i=t.set),new eE(s,i,r||!i,n)}function Un(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){la(r,e,n)}return i}function At(t,e,n,s){if(J(t)){const r=Un(t,e,n,s);return r&&Hp(r)&&r.catch(o=>{la(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(At(t[r],e,n,s));return i}function la(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}nE(t,n,i,s)}function nE(t,e,n,s=!0){console.error(t)}let er=!1,Gc=!1;const Ye=[];let Yt=0;const zs=[];let hn=null,ns=0;const hg=Promise.resolve();let fu=null;function pu(t){const e=fu||hg;return t?e.then(this?t.bind(this):t):e}function sE(t){let e=Yt+1,n=Ye.length;for(;e<n;){const s=e+n>>>1;tr(Ye[s])<t?e=s+1:n=s}return e}function gu(t){(!Ye.length||!Ye.includes(t,er&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?Ye.push(t):Ye.splice(sE(t.id),0,t),dg())}function dg(){!er&&!Gc&&(Gc=!0,fu=hg.then(pg))}function iE(t){const e=Ye.indexOf(t);e>Yt&&Ye.splice(e,1)}function rE(t){G(t)?zs.push(...t):(!hn||!hn.includes(t,t.allowRecurse?ns+1:ns))&&zs.push(t),dg()}function ed(t,e=er?Yt+1:0){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function fg(t){if(zs.length){const e=[...new Set(zs)];if(zs.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,s)=>tr(n)-tr(s)),ns=0;ns<hn.length;ns++)hn[ns]();hn=null,ns=0}}const tr=t=>t.id==null?1/0:t.id,oE=(t,e)=>{const n=tr(t)-tr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pg(t){Gc=!1,er=!0,Ye.sort(oE);const e=$t;try{for(Yt=0;Yt<Ye.length;Yt++){const n=Ye[Yt];n&&n.active!==!1&&Un(n,null,14)}}finally{Yt=0,Ye.length=0,fg(),er=!1,fu=null,(Ye.length||zs.length)&&pg()}}function aE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ie;d&&(i=n.map(p=>De(p)?p.trim():p)),h&&(i=n.map(bo))}let a,c=s[a=sc(e)]||s[a=sc(sn(e))];!c&&r&&(c=s[a=sc(ci(e))]),c&&At(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,i)}}function gg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=gg(l,e,!0);u&&(a=!0,Ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ae(t)&&s.set(t,null),null):(G(r)?r.forEach(c=>o[c]=null):Ze(o,r),Ae(t)&&s.set(t,o),o)}function ua(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ci(e))||ce(t,e))}let yt=null,ha=null;function Co(t){const e=yt;return yt=t,ha=t&&t.type.__scopeId||null,e}function mg(t){ha=t}function _g(){ha=null}function Bn(t,e=yt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hd(-1);const r=Co(e);let o;try{o=t(...i)}finally{Co(r),s._d&&hd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ic(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:_}=t;let A,C;const L=Co(t);try{if(n.shapeFlag&4){const B=i||s;A=Gt(u.call(B,B,h,r,p,d,m)),C=c}else{const B=e;A=Gt(B.length>1?B(r,{attrs:c,slots:a,emit:l}):B(r,null)),C=e.props?c:cE(c)}}catch(B){Hi.length=0,la(B,t,1),A=de(jt)}let k=A;if(C&&_!==!1){const B=Object.keys(C),{shapeFlag:q}=k;B.length&&q&7&&(o&&B.some(tu)&&(C=lE(C,o)),k=qn(k,C))}return n.dirs&&(k=qn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),A=k,Co(L),A}const cE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},lE=(t,e)=>{const n={};for(const s in t)(!tu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function uE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?td(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ua(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?td(s,o,l):!0:!!o;return!1}function td(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ua(n,r))return!0}return!1}function hE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dE=t=>t.__isSuspense;function fE(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):rE(t)}function uo(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function wt(t,e,n=!1){const s=$e||yt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}function Er(t,e){return mu(t,null,e)}const Jr={};function Bi(t,e,n){return mu(t,e,n)}function mu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ie){const a=$e;let c,l=!1,u=!1;if(Oe(t)?(c=()=>t.value,l=To(t)):_n(t)?(c=()=>t,s=!0):G(t)?(u=!0,l=t.some(k=>_n(k)||To(k)),c=()=>t.map(k=>{if(Oe(k))return k.value;if(_n(k))return rs(k);if(J(k))return Un(k,a,2)})):J(t)?e?c=()=>Un(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),At(t,a,3,[d])}:c=$t,e&&s){const k=c;c=()=>rs(k())}let h,d=k=>{h=C.onStop=()=>{Un(k,a,4)}},p;if(sr)if(d=$t,e?n&&At(e,a,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const k=uI();p=k.__watcherHandles||(k.__watcherHandles=[])}else return $t;let m=u?new Array(t.length).fill(Jr):Jr;const _=()=>{if(C.active)if(e){const k=C.run();(s||l||(u?k.some((B,q)=>Qi(B,m[q])):Qi(k,m)))&&(h&&h(),At(e,a,3,[k,m===Jr?void 0:u&&m[0]===Jr?[]:m,d]),m=k)}else C.run()};_.allowRecurse=!!e;let A;i==="sync"?A=_:i==="post"?A=()=>ct(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),A=()=>gu(_));const C=new au(c,A);e?n?_():m=C.run():i==="post"?ct(C.run.bind(C),a&&a.suspense):C.run();const L=()=>{C.stop(),a&&a.scope&&nu(a.scope.effects,C)};return p&&p.push(L),L}function pE(t,e,n){const s=this.proxy,i=De(t)?t.includes(".")?yg(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=$e;ti(this);const a=mu(i,r.bind(s),n);return o?ti(o):hs(),a}function yg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function rs(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))rs(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)rs(t[n],e);else if(jp(t)||Vs(t))t.forEach(n=>{rs(n,e)});else if(Vp(t))for(const n in t)rs(t[n],e);return t}function gE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _u(()=>{t.isMounted=!0}),bg(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],mE={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=Iu(),s=gE();let i;return()=>{const r=e.default&&wg(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==jt){o=_;break}}const a=ue(t),{mode:c}=a;if(s.isLeaving)return rc(o);const l=nd(o);if(!l)return rc(o);const u=Yc(l,a,s,n);Jc(l,u);const h=n.subTree,d=h&&nd(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,p=!0)}if(d&&d.type!==jt&&(!ss(l,d)||p)){const _=Yc(d,a,s,n);if(Jc(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},rc(o);c==="in-out"&&l.type!==jt&&(_.delayLeave=(A,C,L)=>{const k=vg(s,d);k[String(d.key)]=d,A._leaveCb=()=>{C(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},_E=mE;function vg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Yc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:A,onAfterAppear:C,onAppearCancelled:L}=e,k=String(t.key),B=vg(n,t),q=(P,X)=>{P&&At(P,s,9,X)},Z=(P,X)=>{const ee=X[1];q(P,X),G(P)?P.every(ye=>ye.length<=1)&&ee():P.length<=1&&ee()},V={mode:r,persisted:o,beforeEnter(P){let X=a;if(!n.isMounted)if(i)X=_||a;else return;P._leaveCb&&P._leaveCb(!0);const ee=B[k];ee&&ss(t,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),q(X,[P])},enter(P){let X=c,ee=l,ye=u;if(!n.isMounted)if(i)X=A||c,ee=C||l,ye=L||u;else return;let Le=!1;const ft=P._enterCb=tt=>{Le||(Le=!0,tt?q(ye,[P]):q(ee,[P]),V.delayedLeave&&V.delayedLeave(),P._enterCb=void 0)};X?Z(X,[P,ft]):ft()},leave(P,X){const ee=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return X();q(h,[P]);let ye=!1;const Le=P._leaveCb=ft=>{ye||(ye=!0,X(),ft?q(m,[P]):q(p,[P]),P._leaveCb=void 0,B[ee]===t&&delete B[ee])};B[ee]=t,d?Z(d,[P,Le]):Le()},clone(P){return Yc(P,e,n,s)}};return V}function rc(t){if(da(t))return t=qn(t),t.children=null,t}function nd(t){return da(t)?t.children?t.children[0]:void 0:t}function Jc(t,e){t.shapeFlag&6&&t.component?Jc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wg(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===st?(o.patchFlag&128&&i++,s=s.concat(wg(o.children,e,a))):(e||o.type!==jt)&&s.push(a!=null?qn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Eg(t){return J(t)?{setup:t,name:t.name}:t}const ho=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function yE(t,e){Ig(t,"a",e)}function vE(t,e){Ig(t,"da",e)}function Ig(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)da(i.parent.vnode)&&wE(s,e,n,i),i=i.parent}}function wE(t,e,n,s){const i=fa(e,t,s,!0);Tg(()=>{nu(s[e],i)},n)}function fa(t,e,n=$e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;li(),ti(n);const a=At(e,n,t,o);return hs(),ui(),a});return s?i.unshift(r):i.push(r),r}}const bn=t=>(e,n=$e)=>(!sr||t==="sp")&&fa(t,(...s)=>e(...s),n),EE=bn("bm"),_u=bn("m"),IE=bn("bu"),bE=bn("u"),bg=bn("bum"),Tg=bn("um"),TE=bn("sp"),CE=bn("rtg"),AE=bn("rtc");function SE(t,e=$e){fa("ec",t,e)}function gs(t,e){const n=yt;if(n===null)return t;const s=_a(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Ie]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&rs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(li(),At(c,n,8,[t.el,a,t,e]),ui())}}const Cg="components";function ke(t,e){return kE(Cg,t,!0,e)||t}const RE=Symbol();function kE(t,e,n=!0,s=!1){const i=yt||$e;if(i){const r=i.type;if(t===Cg){const a=aI(r,!1);if(a&&(a===e||a===sn(e)||a===aa(sn(e))))return r}const o=sd(i[t]||r[t],e)||sd(i.appContext[t],e);return!o&&s?r:o}}function sd(t,e){return t&&(t[e]||t[sn(e)]||t[aa(sn(e))])}function pa(t,e,n,s){let i;const r=n&&n[s];if(G(t)||De(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Xc=t=>t?Lg(t)?_a(t)||t.proxy:Xc(t.parent):null,$i=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$emit:t=>t.emit,$options:t=>yu(t),$forceUpdate:t=>t.f||(t.f=()=>gu(t.update)),$nextTick:t=>t.n||(t.n=pu.bind(t.proxy)),$watch:t=>pE.bind(t)}),oc=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ce(t,e),OE={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(oc(s,e))return o[e]=1,s[e];if(i!==Ie&&ce(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,r[e];if(n!==Ie&&ce(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const u=$i[e];let h,d;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return oc(i,e)?(i[e]=n,!0):s!==Ie&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ie&&ce(t,o)||oc(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce($i,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qc=!0;function PE(t){const e=yu(t),n=t.proxy,s=t.ctx;Qc=!1,e.beforeCreate&&id(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:_,deactivated:A,beforeDestroy:C,beforeUnmount:L,destroyed:k,unmounted:B,render:q,renderTracked:Z,renderTriggered:V,errorCaptured:P,serverPrefetch:X,expose:ee,inheritAttrs:ye,components:Le,directives:ft,filters:tt}=e;if(l&&NE(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const ge=o[ve];J(ge)&&(s[ve]=ge.bind(n))}if(i){const ve=i.call(n,n);Ae(ve)&&(t.data=Wt(ve))}if(Qc=!0,r)for(const ve in r){const ge=r[ve],Nt=J(ge)?ge.bind(n,n):J(ge.get)?ge.get.bind(n,n):$t,Jn=!J(ge)&&J(ge.set)?ge.set.bind(n):$t,xt=_t({get:Nt,set:Jn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>xt.value,set:at=>xt.value=at})}if(a)for(const ve in a)Ag(a[ve],s,n,ve);if(c){const ve=J(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{uo(ge,ve[ge])})}u&&id(u,t,"c");function Ne(ve,ge){G(ge)?ge.forEach(Nt=>ve(Nt.bind(n))):ge&&ve(ge.bind(n))}if(Ne(EE,h),Ne(_u,d),Ne(IE,p),Ne(bE,m),Ne(yE,_),Ne(vE,A),Ne(SE,P),Ne(AE,Z),Ne(CE,V),Ne(bg,L),Ne(Tg,B),Ne(TE,X),G(ee))if(ee.length){const ve=t.exposed||(t.exposed={});ee.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:Nt=>n[ge]=Nt})})}else t.exposed||(t.exposed={});q&&t.render===$t&&(t.render=q),ye!=null&&(t.inheritAttrs=ye),Le&&(t.components=Le),ft&&(t.directives=ft)}function NE(t,e,n=$t,s=!1){G(t)&&(t=Zc(t));for(const i in t){const r=t[i];let o;Ae(r)?"default"in r?o=wt(r.from||i,r.default,!0):o=wt(r.from||i):o=wt(r),Oe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function id(t,e,n){At(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ag(t,e,n,s){const i=s.includes(".")?yg(n,s):()=>n[s];if(De(t)){const r=e[t];J(r)&&Bi(i,r)}else if(J(t))Bi(i,t.bind(n));else if(Ae(t))if(G(t))t.forEach(r=>Ag(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&Bi(i,r,t)}}function yu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Ao(c,l,o,!0)),Ao(c,e,o)),Ae(e)&&r.set(e,c),c}function Ao(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ao(t,r,n,!0),i&&i.forEach(o=>Ao(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xE={data:rd,props:Zn,emits:Zn,methods:Zn,computed:Zn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Zn,directives:Zn,watch:ME,provide:rd,inject:DE};function rd(t,e){return e?t?function(){return Ze(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function DE(t,e){return Zn(Zc(t),Zc(e))}function Zc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?Ze(Ze(Object.create(null),t),e):e}function ME(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const s in e)n[s]=nt(t[s],e[s]);return n}function LE(t,e,n,s=!1){const i={},r={};Io(r,ma,1),t.propsDefaults=Object.create(null),Sg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Yw(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function FE(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ua(t.emitsOptions,d))continue;const p=e[d];if(c)if(ce(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const m=sn(d);i[m]=el(c,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{Sg(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=ci(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=el(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ce(e,h))&&(delete r[h],l=!0)}l&&wn(t,"set","$attrs")}function Sg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(co(c))continue;const l=e[c];let u;i&&ce(i,u=sn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:ua(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||Ie;for(let u=0;u<r.length;u++){const h=r[u];n[h]=el(i,c,h,l[h],t,!ce(l,h))}}return o}function el(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(ti(i),s=l[n]=c.call(null,e),hs())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ci(n))&&(s=!0))}return s}function Rg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,p]=Rg(h,e,!0);Ze(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ae(t)&&s.set(t,Ws),Ws;if(G(r))for(let u=0;u<r.length;u++){const h=sn(r[u]);od(h)&&(o[h]=Ie)}else if(r)for(const u in r){const h=sn(u);if(od(h)){const d=r[u],p=o[h]=G(d)||J(d)?{type:d}:Object.assign({},d);if(p){const m=ld(Boolean,p.type),_=ld(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||ce(p,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&s.set(t,l),l}function od(t){return t[0]!=="$"}function ad(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function cd(t,e){return ad(t)===ad(e)}function ld(t,e){return G(e)?e.findIndex(n=>cd(n,t)):J(e)&&cd(e,t)?0:-1}const kg=t=>t[0]==="_"||t==="$stable",vu=t=>G(t)?t.map(Gt):[Gt(t)],UE=(t,e,n)=>{if(e._n)return e;const s=Bn((...i)=>vu(e(...i)),n);return s._c=!1,s},Og=(t,e,n)=>{const s=t._ctx;for(const i in t){if(kg(i))continue;const r=t[i];if(J(r))e[i]=UE(i,r,s);else if(r!=null){const o=vu(r);e[i]=()=>o}}},Pg=(t,e)=>{const n=vu(e);t.slots.default=()=>n},BE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Io(e,"_",n)):Og(e,t.slots={})}else t.slots={},e&&Pg(t,e);Io(t.slots,ma,1)},$E=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ze(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Og(e,i)),o=e}else e&&(Pg(t,e),o={default:1});if(r)for(const a in i)!kg(a)&&!(a in o)&&delete i[a]};function Ng(){return{app:null,config:{isNativeTag:pw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jE=0;function HE(t,e){return function(s,i=null){J(s)||(s=Object.assign({},s)),i!=null&&!Ae(i)&&(i=null);const r=Ng(),o=new Set;let a=!1;const c=r.app={_uid:jE++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:hI,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=de(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,_a(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function tl(t,e,n,s,i=!1){if(G(t)){t.forEach((d,p)=>tl(d,e&&(G(e)?e[p]:e),n,s,i));return}if(ho(s)&&!i)return;const r=s.shapeFlag&4?_a(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Oe(l)&&(l.value=null)),J(c))Un(c,a,12,[o,u]);else{const d=De(c),p=Oe(c);if(d||p){const m=()=>{if(t.f){const _=d?ce(h,c)?h[c]:u[c]:c.value;i?G(_)&&nu(_,r):G(_)?_.includes(r)||_.push(r):d?(u[c]=[r],ce(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ct(m,n)):m()}}}const ct=fE;function WE(t){return VE(t)}function VE(t,e){const n=ww();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=$t,insertStaticContent:m}=t,_=(f,g,y,w=null,b=null,R=null,D=!1,S=null,O=!!g.dynamicChildren)=>{if(f===g)return;f&&!ss(f,g)&&(w=x(f),at(f,b,R,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:T,ref:j,shapeFlag:F}=g;switch(T){case ga:A(f,g,y,w);break;case jt:C(f,g,y,w);break;case ac:f==null&&L(g,y,w,D);break;case st:Le(f,g,y,w,b,R,D,S,O);break;default:F&1?q(f,g,y,w,b,R,D,S,O):F&6?ft(f,g,y,w,b,R,D,S,O):(F&64||F&128)&&T.process(f,g,y,w,b,R,D,S,O,ae)}j!=null&&b&&tl(j,f&&f.ref,R,g||f,!g)},A=(f,g,y,w)=>{if(f==null)s(g.el=a(g.children),y,w);else{const b=g.el=f.el;g.children!==f.children&&l(b,g.children)}},C=(f,g,y,w)=>{f==null?s(g.el=c(g.children||""),y,w):g.el=f.el},L=(f,g,y,w)=>{[f.el,f.anchor]=m(f.children,g,y,w,f.el,f.anchor)},k=({el:f,anchor:g},y,w)=>{let b;for(;f&&f!==g;)b=d(f),s(f,y,w),f=b;s(g,y,w)},B=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),i(f),f=y;i(g)},q=(f,g,y,w,b,R,D,S,O)=>{D=D||g.type==="svg",f==null?Z(g,y,w,b,R,D,S,O):X(f,g,b,R,D,S,O)},Z=(f,g,y,w,b,R,D,S)=>{let O,T;const{type:j,props:F,shapeFlag:H,transition:Y,dirs:te}=f;if(O=f.el=o(f.type,R,F&&F.is,F),H&8?u(O,f.children):H&16&&P(f.children,O,null,w,b,R&&j!=="foreignObject",D,S),te&&Xn(f,null,w,"created"),F){for(const me in F)me!=="value"&&!co(me)&&r(O,me,null,F[me],R,f.children,w,b,M);"value"in F&&r(O,"value",null,F.value),(T=F.onVnodeBeforeMount)&&Kt(T,w,f)}V(O,f,f.scopeId,D,w),te&&Xn(f,null,w,"beforeMount");const we=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;we&&Y.beforeEnter(O),s(O,g,y),((T=F&&F.onVnodeMounted)||we||te)&&ct(()=>{T&&Kt(T,w,f),we&&Y.enter(O),te&&Xn(f,null,w,"mounted")},b)},V=(f,g,y,w,b)=>{if(y&&p(f,y),w)for(let R=0;R<w.length;R++)p(f,w[R]);if(b){let R=b.subTree;if(g===R){const D=b.vnode;V(f,D,D.scopeId,D.slotScopeIds,b.parent)}}},P=(f,g,y,w,b,R,D,S,O=0)=>{for(let T=O;T<f.length;T++){const j=f[T]=S?On(f[T]):Gt(f[T]);_(null,j,g,y,w,b,R,D,S)}},X=(f,g,y,w,b,R,D)=>{const S=g.el=f.el;let{patchFlag:O,dynamicChildren:T,dirs:j}=g;O|=f.patchFlag&16;const F=f.props||Ie,H=g.props||Ie;let Y;y&&Qn(y,!1),(Y=H.onVnodeBeforeUpdate)&&Kt(Y,y,g,f),j&&Xn(g,f,y,"beforeUpdate"),y&&Qn(y,!0);const te=b&&g.type!=="foreignObject";if(T?ee(f.dynamicChildren,T,S,y,w,te,R):D||ge(f,g,S,null,y,w,te,R,!1),O>0){if(O&16)ye(S,g,F,H,y,w,b);else if(O&2&&F.class!==H.class&&r(S,"class",null,H.class,b),O&4&&r(S,"style",F.style,H.style,b),O&8){const we=g.dynamicProps;for(let me=0;me<we.length;me++){const xe=we[me],Dt=F[xe],xs=H[xe];(xs!==Dt||xe==="value")&&r(S,xe,Dt,xs,b,f.children,y,w,M)}}O&1&&f.children!==g.children&&u(S,g.children)}else!D&&T==null&&ye(S,g,F,H,y,w,b);((Y=H.onVnodeUpdated)||j)&&ct(()=>{Y&&Kt(Y,y,g,f),j&&Xn(g,f,y,"updated")},w)},ee=(f,g,y,w,b,R,D)=>{for(let S=0;S<g.length;S++){const O=f[S],T=g[S],j=O.el&&(O.type===st||!ss(O,T)||O.shapeFlag&70)?h(O.el):y;_(O,T,j,null,w,b,R,D,!0)}},ye=(f,g,y,w,b,R,D)=>{if(y!==w){if(y!==Ie)for(const S in y)!co(S)&&!(S in w)&&r(f,S,y[S],null,D,g.children,b,R,M);for(const S in w){if(co(S))continue;const O=w[S],T=y[S];O!==T&&S!=="value"&&r(f,S,T,O,D,g.children,b,R,M)}"value"in w&&r(f,"value",y.value,w.value)}},Le=(f,g,y,w,b,R,D,S,O)=>{const T=g.el=f?f.el:a(""),j=g.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:Y}=g;Y&&(S=S?S.concat(Y):Y),f==null?(s(T,y,w),s(j,y,w),P(g.children,y,j,b,R,D,S,O)):F>0&&F&64&&H&&f.dynamicChildren?(ee(f.dynamicChildren,H,y,b,R,D,S),(g.key!=null||b&&g===b.subTree)&&wu(f,g,!0)):ge(f,g,y,j,b,R,D,S,O)},ft=(f,g,y,w,b,R,D,S,O)=>{g.slotScopeIds=S,f==null?g.shapeFlag&512?b.ctx.activate(g,y,w,D,O):tt(g,y,w,b,R,D,O):Fe(f,g,O)},tt=(f,g,y,w,b,R,D)=>{const S=f.component=nI(f,w,b);if(da(f)&&(S.ctx.renderer=ae),sI(S),S.asyncDep){if(b&&b.registerDep(S,Ne),!f.el){const O=S.subTree=de(jt);C(null,O,g,y)}return}Ne(S,f,g,y,b,R,D)},Fe=(f,g,y)=>{const w=g.component=f.component;if(uE(f,g,y))if(w.asyncDep&&!w.asyncResolved){ve(w,g,y);return}else w.next=g,iE(w.update),w.update();else g.el=f.el,w.vnode=g},Ne=(f,g,y,w,b,R,D)=>{const S=()=>{if(f.isMounted){let{next:j,bu:F,u:H,parent:Y,vnode:te}=f,we=j,me;Qn(f,!1),j?(j.el=te.el,ve(f,j,D)):j=te,F&&lo(F),(me=j.props&&j.props.onVnodeBeforeUpdate)&&Kt(me,Y,j,te),Qn(f,!0);const xe=ic(f),Dt=f.subTree;f.subTree=xe,_(Dt,xe,h(Dt.el),x(Dt),f,b,R),j.el=xe.el,we===null&&hE(f,xe.el),H&&ct(H,b),(me=j.props&&j.props.onVnodeUpdated)&&ct(()=>Kt(me,Y,j,te),b)}else{let j;const{el:F,props:H}=g,{bm:Y,m:te,parent:we}=f,me=ho(g);if(Qn(f,!1),Y&&lo(Y),!me&&(j=H&&H.onVnodeBeforeMount)&&Kt(j,we,g),Qn(f,!0),F&&Q){const xe=()=>{f.subTree=ic(f),Q(F,f.subTree,f,b,null)};me?g.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=ic(f);_(null,xe,y,w,f,b,R),g.el=xe.el}if(te&&ct(te,b),!me&&(j=H&&H.onVnodeMounted)){const xe=g;ct(()=>Kt(j,we,xe),b)}(g.shapeFlag&256||we&&ho(we.vnode)&&we.vnode.shapeFlag&256)&&f.a&&ct(f.a,b),f.isMounted=!0,g=y=w=null}},O=f.effect=new au(S,()=>gu(T),f.scope),T=f.update=()=>O.run();T.id=f.uid,Qn(f,!0),T()},ve=(f,g,y)=>{g.component=f;const w=f.vnode.props;f.vnode=g,f.next=null,FE(f,g.props,w,y),$E(f,g.children,y),li(),ed(),ui()},ge=(f,g,y,w,b,R,D,S,O=!1)=>{const T=f&&f.children,j=f?f.shapeFlag:0,F=g.children,{patchFlag:H,shapeFlag:Y}=g;if(H>0){if(H&128){Jn(T,F,y,w,b,R,D,S,O);return}else if(H&256){Nt(T,F,y,w,b,R,D,S,O);return}}Y&8?(j&16&&M(T,b,R),F!==T&&u(y,F)):j&16?Y&16?Jn(T,F,y,w,b,R,D,S,O):M(T,b,R,!0):(j&8&&u(y,""),Y&16&&P(F,y,w,b,R,D,S,O))},Nt=(f,g,y,w,b,R,D,S,O)=>{f=f||Ws,g=g||Ws;const T=f.length,j=g.length,F=Math.min(T,j);let H;for(H=0;H<F;H++){const Y=g[H]=O?On(g[H]):Gt(g[H]);_(f[H],Y,y,null,b,R,D,S,O)}T>j?M(f,b,R,!0,!1,F):P(g,y,w,b,R,D,S,O,F)},Jn=(f,g,y,w,b,R,D,S,O)=>{let T=0;const j=g.length;let F=f.length-1,H=j-1;for(;T<=F&&T<=H;){const Y=f[T],te=g[T]=O?On(g[T]):Gt(g[T]);if(ss(Y,te))_(Y,te,y,null,b,R,D,S,O);else break;T++}for(;T<=F&&T<=H;){const Y=f[F],te=g[H]=O?On(g[H]):Gt(g[H]);if(ss(Y,te))_(Y,te,y,null,b,R,D,S,O);else break;F--,H--}if(T>F){if(T<=H){const Y=H+1,te=Y<j?g[Y].el:w;for(;T<=H;)_(null,g[T]=O?On(g[T]):Gt(g[T]),y,te,b,R,D,S,O),T++}}else if(T>H)for(;T<=F;)at(f[T],b,R,!0),T++;else{const Y=T,te=T,we=new Map;for(T=te;T<=H;T++){const pt=g[T]=O?On(g[T]):Gt(g[T]);pt.key!=null&&we.set(pt.key,T)}let me,xe=0;const Dt=H-te+1;let xs=!1,Wh=0;const Ci=new Array(Dt);for(T=0;T<Dt;T++)Ci[T]=0;for(T=Y;T<=F;T++){const pt=f[T];if(xe>=Dt){at(pt,b,R,!0);continue}let zt;if(pt.key!=null)zt=we.get(pt.key);else for(me=te;me<=H;me++)if(Ci[me-te]===0&&ss(pt,g[me])){zt=me;break}zt===void 0?at(pt,b,R,!0):(Ci[zt-te]=T+1,zt>=Wh?Wh=zt:xs=!0,_(pt,g[zt],y,null,b,R,D,S,O),xe++)}const Vh=xs?qE(Ci):Ws;for(me=Vh.length-1,T=Dt-1;T>=0;T--){const pt=te+T,zt=g[pt],qh=pt+1<j?g[pt+1].el:w;Ci[T]===0?_(null,zt,y,qh,b,R,D,S,O):xs&&(me<0||T!==Vh[me]?xt(zt,y,qh,2):me--)}}},xt=(f,g,y,w,b=null)=>{const{el:R,type:D,transition:S,children:O,shapeFlag:T}=f;if(T&6){xt(f.component.subTree,g,y,w);return}if(T&128){f.suspense.move(g,y,w);return}if(T&64){D.move(f,g,y,ae);return}if(D===st){s(R,g,y);for(let F=0;F<O.length;F++)xt(O[F],g,y,w);s(f.anchor,g,y);return}if(D===ac){k(f,g,y);return}if(w!==2&&T&1&&S)if(w===0)S.beforeEnter(R),s(R,g,y),ct(()=>S.enter(R),b);else{const{leave:F,delayLeave:H,afterLeave:Y}=S,te=()=>s(R,g,y),we=()=>{F(R,()=>{te(),Y&&Y()})};H?H(R,te,we):we()}else s(R,g,y)},at=(f,g,y,w=!1,b=!1)=>{const{type:R,props:D,ref:S,children:O,dynamicChildren:T,shapeFlag:j,patchFlag:F,dirs:H}=f;if(S!=null&&tl(S,null,y,f,!0),j&256){g.ctx.deactivate(f);return}const Y=j&1&&H,te=!ho(f);let we;if(te&&(we=D&&D.onVnodeBeforeUnmount)&&Kt(we,g,f),j&6)I(f.component,y,w);else{if(j&128){f.suspense.unmount(y,w);return}Y&&Xn(f,null,g,"beforeUnmount"),j&64?f.type.remove(f,g,y,b,ae,w):T&&(R!==st||F>0&&F&64)?M(T,g,y,!1,!0):(R===st&&F&384||!b&&j&16)&&M(O,g,y),w&&Ns(f)}(te&&(we=D&&D.onVnodeUnmounted)||Y)&&ct(()=>{we&&Kt(we,g,f),Y&&Xn(f,null,g,"unmounted")},y)},Ns=f=>{const{type:g,el:y,anchor:w,transition:b}=f;if(g===st){Vr(y,w);return}if(g===ac){B(f);return}const R=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:D,delayLeave:S}=b,O=()=>D(y,R);S?S(f.el,R,O):O()}else R()},Vr=(f,g)=>{let y;for(;f!==g;)y=d(f),i(f),f=y;i(g)},I=(f,g,y)=>{const{bum:w,scope:b,update:R,subTree:D,um:S}=f;w&&lo(w),b.stop(),R&&(R.active=!1,at(D,f,g,y)),S&&ct(S,g),ct(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},M=(f,g,y,w=!1,b=!1,R=0)=>{for(let D=R;D<f.length;D++)at(f[D],g,y,w,b)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,g,y)=>{f==null?g._vnode&&at(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,y),ed(),fg(),g._vnode=f},ae={p:_,um:at,m:xt,r:Ns,mt:tt,mc:P,pc:ge,pbc:ee,n:x,o:t};let Se,Q;return e&&([Se,Q]=e(ae)),{render:$,hydrate:Se,createApp:HE($,Se)}}function Qn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wu(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=On(i[r]),a.el=o.el),n||wu(o,a)),a.type===ga&&(a.el=o.el)}}function qE(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const zE=t=>t.__isTeleport,ji=t=>t&&(t.disabled||t.disabled===""),ud=t=>typeof SVGElement<"u"&&t instanceof SVGElement,nl=(t,e)=>{const n=t&&t.to;return De(n)?e?e(n):null:n},KE={__isTeleport:!0,process(t,e,n,s,i,r,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:m,createText:_,createComment:A}}=l,C=ji(e.props);let{shapeFlag:L,children:k,dynamicChildren:B}=e;if(t==null){const q=e.el=_(""),Z=e.anchor=_("");p(q,n,s),p(Z,n,s);const V=e.target=nl(e.props,m),P=e.targetAnchor=_("");V&&(p(P,V),o=o||ud(V));const X=(ee,ye)=>{L&16&&u(k,ee,ye,i,r,o,a,c)};C?X(n,Z):V&&X(V,P)}else{e.el=t.el;const q=e.anchor=t.anchor,Z=e.target=t.target,V=e.targetAnchor=t.targetAnchor,P=ji(t.props),X=P?n:Z,ee=P?q:V;if(o=o||ud(Z),B?(d(t.dynamicChildren,B,X,i,r,o,a),wu(t,e,!0)):c||h(t,e,X,ee,i,r,o,a,!1),C)P||Xr(e,n,q,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ye=e.target=nl(e.props,m);ye&&Xr(e,ye,null,l,0)}else P&&Xr(e,Z,V,l,1)}xg(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=t;if(h&&r(u),(o||!ji(d))&&(r(l),a&16))for(let p=0;p<c.length;p++){const m=c[p];i(m,e,n,!0,!!m.dynamicChildren)}},move:Xr,hydrate:GE};function Xr(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||ji(u))&&c&16)for(let d=0;d<l.length;d++)i(l[d],e,n,2);h&&s(a,e,n)}function GE(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=nl(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(ji(e.props))e.anchor=l(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,i,r)}xg(e)}return e.anchor&&o(e.anchor)}const YE=KE;function xg(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const st=Symbol(void 0),ga=Symbol(void 0),jt=Symbol(void 0),ac=Symbol(void 0),Hi=[];let Ft=null;function z(t=!1){Hi.push(Ft=t?null:[])}function JE(){Hi.pop(),Ft=Hi[Hi.length-1]||null}let nr=1;function hd(t){nr+=t}function Dg(t){return t.dynamicChildren=nr>0?Ft||Ws:null,JE(),nr>0&&Ft&&Ft.push(t),t}function ne(t,e,n,s,i,r){return Dg(E(t,e,n,s,i,r,!0))}function rn(t,e,n,s,i){return Dg(de(t,e,n,s,i,!0))}function sl(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const ma="__vInternal",Mg=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Oe(t)||J(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function E(t,e=null,n=null,s=0,i=null,r=t===st?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mg(e),ref:e&&fo(e),scopeId:ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yt};return a?(Eu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),nr>0&&!o&&Ft&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ft.push(c),c}const de=XE;function XE(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===RE)&&(t=jt),sl(t)){const a=qn(t,e,!0);return n&&Eu(a,n),nr>0&&!r&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag|=-2,a}if(cI(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Qs(a)),Ae(c)&&(sg(c)&&!G(c)&&(c=Ze({},c)),e.style=eu(c))}const o=De(t)?1:dE(t)?128:zE(t)?64:Ae(t)?4:J(t)?2:0;return E(t,e,n,s,i,o,r,!0)}function QE(t){return t?sg(t)||ma in t?Ze({},t):t:null}function qn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?ZE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mg(a),ref:e&&e.ref?n&&i?G(i)?i.concat(fo(e)):[i,fo(e)]:fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qn(t.ssContent),ssFallback:t.ssFallback&&qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ms(t=" ",e=0){return de(ga,null,t,e)}function dn(t="",e=!1){return e?(z(),rn(jt,null,t)):de(jt,null,t)}function Gt(t){return t==null||typeof t=="boolean"?de(jt):G(t)?de(st,null,t.slice()):typeof t=="object"?On(t):de(ga,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qn(t)}function Eu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Eu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ma in e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[ms(e)]):n=8);t.children=e,t.shapeFlag|=n}function ZE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Qs([e.class,s.class]));else if(i==="style")e.style=eu([e.style,s.style]);else if(ia(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Kt(t,e,n,s=null){At(t,e,7,[n,s])}const eI=Ng();let tI=0;function nI(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||eI,r={uid:tI++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rg(s,i),emitsOptions:gg(s,i),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=aE.bind(null,r),t.ce&&t.ce(r),r}let $e=null;const Iu=()=>$e||yt,ti=t=>{$e=t,t.scope.on()},hs=()=>{$e&&$e.scope.off(),$e=null};function Lg(t){return t.vnode.shapeFlag&4}let sr=!1;function sI(t,e=!1){sr=e;const{props:n,children:s}=t.vnode,i=Lg(t);LE(t,n,i,e),BE(t,s);const r=i?iI(t,e):void 0;return sr=!1,r}function iI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ei(new Proxy(t.ctx,OE));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?oI(t):null;ti(t),li();const r=Un(s,t,0,[t.props,i]);if(ui(),hs(),Hp(r)){if(r.then(hs,hs),e)return r.then(o=>{dd(t,o,e)}).catch(o=>{la(o,t,0)});t.asyncDep=r}else dd(t,r,e)}else Fg(t,e)}function dd(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=ag(e)),Fg(t,n)}let fd;function Fg(t,e,n){const s=t.type;if(!t.render){if(!e&&fd&&!s.render){const i=s.template||yu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ze(Ze({isCustomElement:r,delimiters:a},o),c);s.render=fd(i,l)}}t.render=s.render||$t}ti(t),li(),PE(t),ui(),hs()}function rI(t){return new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}})}function oI(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=rI(t))},slots:t.slots,emit:t.emit,expose:e}}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ag(ei(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $i)return $i[n](t)},has(e,n){return n in e||n in $i}}))}function aI(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function cI(t){return J(t)&&"__vccOpts"in t}const _t=(t,e)=>tE(t,e,sr);function Ug(t,e,n){const s=arguments.length;return s===2?Ae(e)&&!G(e)?sl(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sl(n)&&(n=[n]),de(t,e,n))}const lI=Symbol(""),uI=()=>wt(lI),hI="3.2.45",dI="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,pd=is&&is.createElement("template"),fI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?is.createElementNS(dI,t):is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>is.createTextNode(t),createComment:t=>is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{pd.innerHTML=s?`<svg>${t}</svg>`:t;const a=pd.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gI(t,e,n){const s=t.style,i=De(n);if(n&&!i){for(const r in n)il(s,r,n[r]);if(e&&!De(e))for(const r in e)n[r]==null&&il(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const gd=/\s*!important$/;function il(t,e,n){if(G(n))n.forEach(s=>il(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=mI(t,e);gd.test(n)?t.setProperty(ci(s),n.replace(gd,""),"important"):t[s]=n}}const md=["Webkit","Moz","ms"],cc={};function mI(t,e){const n=cc[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return cc[e]=s;s=aa(s);for(let i=0;i<md.length;i++){const r=md[i]+s;if(r in t)return cc[e]=r}return e}const _d="http://www.w3.org/1999/xlink";function _I(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_d,e.slice(6,e.length)):t.setAttributeNS(_d,e,n);else{const r=fw(e);n==null||r&&!Bp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function yI(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Bp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Fs(t,e,n,s){t.addEventListener(e,n,s)}function vI(t,e,n,s){t.removeEventListener(e,n,s)}function wI(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=EI(e);if(s){const l=r[e]=TI(s,i);Fs(t,a,l,c)}else o&&(vI(t,a,o,c),r[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function EI(t){let e;if(yd.test(t)){e={};let s;for(;s=t.match(yd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ci(t.slice(2)),e]}let lc=0;const II=Promise.resolve(),bI=()=>lc||(II.then(()=>lc=0),lc=Date.now());function TI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(CI(s,n.value),e,5,[s])};return n.value=t,n.attached=bI(),n}function CI(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const vd=/^on[a-z]/,AI=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?pI(t,s,i):e==="style"?gI(t,n,s):ia(e)?tu(e)||wI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SI(t,e,s,i))?yI(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_I(t,e,s,i))};function SI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vd.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vd.test(e)&&De(n)?!1:e in t}const RI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_E.props;const wd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>lo(e,n):e};function kI(t){t.target.composing=!0}function Ed(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=wd(i);const r=s||i.props&&i.props.type==="number";Fs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=bo(a)),t._assign(a)}),n&&Fs(t,"change",()=>{t.value=t.value.trim()}),e||(Fs(t,"compositionstart",kI),Fs(t,"compositionend",Ed),Fs(t,"change",Ed))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=wd(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&bo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},OI=["ctrl","shift","alt","meta"],PI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OI.some(n=>t[`${n}Key`]&&!e.includes(n))},Bg=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=PI[e[i]];if(r&&r(n,e))return}return t(n,...s)},NI=Ze({patchProp:AI},fI);let Id;function xI(){return Id||(Id=WE(NI))}const DI=(...t)=>{const e=xI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=MI(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function MI(t){return De(t)?document.querySelector(t):t}var LI=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let $g;const ya=t=>$g=t,jg=Symbol();function rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wi||(Wi={}));function FI(){const t=ru(!0),e=t.run(()=>ut({}));let n=[],s=[];const i=ei({install(r){ya(i),i._a=r,r.provide(jg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!LI?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Hg=()=>{};function bd(t,e,n,s=Hg){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Iw()&&bw(i),i}function Ds(t,...e){t.slice().forEach(n=>{n(...e)})}function ol(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];rl(i)&&rl(s)&&t.hasOwnProperty(n)&&!Oe(s)&&!_n(s)?t[n]=ol(i,s):t[n]=s}return t}const UI=Symbol();function BI(t){return!rl(t)||!t.hasOwnProperty(UI)}const{assign:Pn}=Object;function $I(t){return!!(Oe(t)&&t.effect)}function jI(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=cg(n.state.value[t]);return Pn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=ei(_t(()=>{ya(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Wg(t,l,e,n,s,!0),c.$reset=function(){const h=i?i():{};this.$patch(d=>{Pn(d,h)})},c}function Wg(t,e,n={},s,i,r){let o;const a=Pn({actions:{}},n),c={deep:!0};let l,u,h=ei([]),d=ei([]),p;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),ut({});let _;function A(V){let P;l=u=!1,typeof V=="function"?(V(s.state.value[t]),P={type:Wi.patchFunction,storeId:t,events:p}):(ol(s.state.value[t],V),P={type:Wi.patchObject,payload:V,storeId:t,events:p});const X=_=Symbol();pu().then(()=>{_===X&&(l=!0)}),u=!0,Ds(h,P,s.state.value[t])}const C=Hg;function L(){o.stop(),h=[],d=[],s._s.delete(t)}function k(V,P){return function(){ya(s);const X=Array.from(arguments),ee=[],ye=[];function Le(Fe){ee.push(Fe)}function ft(Fe){ye.push(Fe)}Ds(d,{args:X,name:V,store:q,after:Le,onError:ft});let tt;try{tt=P.apply(this&&this.$id===t?this:q,X)}catch(Fe){throw Ds(ye,Fe),Fe}return tt instanceof Promise?tt.then(Fe=>(Ds(ee,Fe),Fe)).catch(Fe=>(Ds(ye,Fe),Promise.reject(Fe))):(Ds(ee,tt),tt)}}const B={_p:s,$id:t,$onAction:bd.bind(null,d),$patch:A,$reset:C,$subscribe(V,P={}){const X=bd(h,V,P.detached,()=>ee()),ee=o.run(()=>Bi(()=>s.state.value[t],ye=>{(P.flush==="sync"?u:l)&&V({storeId:t,type:Wi.direct,events:p},ye)},Pn({},c,P)));return X},$dispose:L},q=Wt(B);s._s.set(t,q);const Z=s._e.run(()=>(o=ru(),o.run(()=>e())));for(const V in Z){const P=Z[V];if(Oe(P)&&!$I(P)||_n(P))r||(m&&BI(P)&&(Oe(P)?P.value=m[V]:ol(P,m[V])),s.state.value[t][V]=P);else if(typeof P=="function"){const X=k(V,P);Z[V]=X,a.actions[V]=P}}return Pn(q,Z),Pn(ue(q),Z),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:V=>{A(P=>{Pn(P,V)})}}),s._p.forEach(V=>{Pn(q,o.run(()=>V({store:q,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(q.$state,m),l=!0,u=!0,q}function Rs(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,c){const l=Iu();return a=a||l&&wt(jg,null),a&&ya(a),a=$g,a._s.has(s)||(r?Wg(s,e,i,a):jI(s,i,a)),a._s.get(s)}return o.$id=s,o}function HI(t){{t=ue(t);const e={};for(const n in t){const s=t[n];(Oe(s)||_n(s))&&(e[n]=lg(t,n))}return e}}const mt=Rs("product.state",()=>{const t=ut(!1),e=ut(0),n=ut(!1),s=ut(window.innerWidth);let i=Wt({productInfo:[],filterProducts:[],cartProducts:[],favProducts:[]});return{...cg(i),isLoad:t,position:e,openSideBar:n,windowWidth:s}}),WI=Rs("NavBar.action",()=>{function t(){const e=mt();e.openSideBar=!e.openSideBar}return{toggleSideBar:t}});function Vg(t,e){return function(){return t.apply(e,arguments)}}const{toString:qg}=Object.prototype,{getPrototypeOf:bu}=Object,Tu=(t=>e=>{const n=qg.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Tn=t=>(t=t.toLowerCase(),e=>Tu(e)===t),va=t=>e=>typeof e===t,{isArray:hi}=Array,ir=va("undefined");function VI(t){return t!==null&&!ir(t)&&t.constructor!==null&&!ir(t.constructor)&&ys(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const zg=Tn("ArrayBuffer");function qI(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&zg(t.buffer),e}const zI=va("string"),ys=va("function"),Kg=va("number"),Cu=t=>t!==null&&typeof t=="object",KI=t=>t===!0||t===!1,po=t=>{if(Tu(t)!=="object")return!1;const e=bu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},GI=Tn("Date"),YI=Tn("File"),JI=Tn("Blob"),XI=Tn("FileList"),QI=t=>Cu(t)&&ys(t.pipe),ZI=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||qg.call(t)===e||ys(t.toString)&&t.toString()===e)},eb=Tn("URLSearchParams"),tb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ir(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,i;if(typeof t!="object"&&(t=[t]),hi(t))for(s=0,i=t.length;s<i;s++)e.call(null,t[s],s,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(s=0;s<o;s++)a=r[s],e.call(null,t[a],a,t)}}function Gg(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,i;for(;s-- >0;)if(i=n[s],e===i.toLowerCase())return i;return null}const Yg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Jg=t=>!ir(t)&&t!==Yg;function al(){const{caseless:t}=Jg(this)&&this||{},e={},n=(s,i)=>{const r=t&&Gg(e,i)||i;po(e[r])&&po(s)?e[r]=al(e[r],s):po(s)?e[r]=al({},s):hi(s)?e[r]=s.slice():e[r]=s};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Ir(arguments[s],n);return e}const nb=(t,e,n,{allOwnKeys:s}={})=>(Ir(e,(i,r)=>{n&&ys(i)?t[r]=Vg(i,n):t[r]=i},{allOwnKeys:s}),t),sb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ib=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},rb=(t,e,n,s)=>{let i,r,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),r=i.length;r-- >0;)o=i[r],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&bu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ob=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},ab=t=>{if(!t)return null;if(hi(t))return t;let e=t.length;if(!Kg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},cb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&bu(Uint8Array)),lb=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=s.next())&&!i.done;){const r=i.value;e.call(t,r[0],r[1])}},ub=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},hb=Tn("HTMLFormElement"),db=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,s,i){return s.toUpperCase()+i}),Td=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),fb=Tn("RegExp"),Xg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Ir(n,(i,r)=>{e(i,r,t)!==!1&&(s[r]=i)}),Object.defineProperties(t,s)},pb=t=>{Xg(t,(e,n)=>{if(ys(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(ys(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gb=(t,e)=>{const n={},s=i=>{i.forEach(r=>{n[r]=!0})};return hi(t)?s(t):s(String(t).split(e)),n},mb=()=>{},_b=(t,e)=>(t=+t,Number.isFinite(t)?t:e),yb=t=>{const e=new Array(10),n=(s,i)=>{if(Cu(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[i]=s;const r=hi(s)?[]:{};return Ir(s,(o,a)=>{const c=n(o,i+1);!ir(c)&&(r[a]=c)}),e[i]=void 0,r}}return s};return n(t,0)},v={isArray:hi,isArrayBuffer:zg,isBuffer:VI,isFormData:ZI,isArrayBufferView:qI,isString:zI,isNumber:Kg,isBoolean:KI,isObject:Cu,isPlainObject:po,isUndefined:ir,isDate:GI,isFile:YI,isBlob:JI,isRegExp:fb,isFunction:ys,isStream:QI,isURLSearchParams:eb,isTypedArray:cb,isFileList:XI,forEach:Ir,merge:al,extend:nb,trim:tb,stripBOM:sb,inherits:ib,toFlatObject:rb,kindOf:Tu,kindOfTest:Tn,endsWith:ob,toArray:ab,forEachEntry:lb,matchAll:ub,isHTMLForm:hb,hasOwnProperty:Td,hasOwnProp:Td,reduceDescriptors:Xg,freezeMethods:pb,toObjectSet:gb,toCamelCase:db,noop:mb,toFiniteNumber:_b,findKey:Gg,global:Yg,isContextDefined:Jg,toJSONObject:yb};function le(t,e,n,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),i&&(this.response=i)}v.inherits(le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qg=le.prototype,Zg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Zg[t]={value:t}});Object.defineProperties(le,Zg);Object.defineProperty(Qg,"isAxiosError",{value:!0});le.from=(t,e,n,s,i,r)=>{const o=Object.create(Qg);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),le.call(o,t.message,e,n,s,i),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};var vb=typeof self=="object"?self.FormData:window.FormData;const wb=vb;function cl(t){return v.isPlainObject(t)||v.isArray(t)}function em(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Cd(t,e,n){return t?t.concat(e).map(function(i,r){return i=em(i),!n&&r?"["+i+"]":i}).join(n?".":""):e}function Eb(t){return v.isArray(t)&&!t.some(cl)}const Ib=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function bb(t){return t&&v.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function wa(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new(wb||FormData),n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,A){return!v.isUndefined(A[_])});const s=n.metaTokens,i=n.visitor||u,r=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&bb(e);if(!v.isFunction(i))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(v.isDate(m))return m.toISOString();if(!c&&v.isBlob(m))throw new le("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(m)||v.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,_,A){let C=m;if(m&&!A&&typeof m=="object"){if(v.endsWith(_,"{}"))_=s?_:_.slice(0,-2),m=JSON.stringify(m);else if(v.isArray(m)&&Eb(m)||v.isFileList(m)||v.endsWith(_,"[]")&&(C=v.toArray(m)))return _=em(_),C.forEach(function(k,B){!(v.isUndefined(k)||k===null)&&e.append(o===!0?Cd([_],B,r):o===null?_:_+"[]",l(k))}),!1}return cl(m)?!0:(e.append(Cd(A,_,r),l(m)),!1)}const h=[],d=Object.assign(Ib,{defaultVisitor:u,convertValue:l,isVisitable:cl});function p(m,_){if(!v.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(m),v.forEach(m,function(C,L){(!(v.isUndefined(C)||C===null)&&i.call(e,C,v.isString(L)?L.trim():L,_,d))===!0&&p(C,_?_.concat(L):[L])}),h.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Ad(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Au(t,e){this._pairs=[],t&&wa(t,this,e)}const tm=Au.prototype;tm.append=function(e,n){this._pairs.push([e,n])};tm.toString=function(e){const n=e?function(s){return e.call(this,s,Ad)}:Ad;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Tb(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nm(t,e,n){if(!e)return t;const s=n&&n.encode||Tb,i=n&&n.serialize;let r;if(i?r=i(e,n):r=v.isURLSearchParams(e)?e.toString():new Au(e,n).toString(s),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class Cb{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Sd=Cb,sm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ab=typeof URLSearchParams<"u"?URLSearchParams:Au,Sb=FormData,Rb=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kb=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Xt={isBrowser:!0,classes:{URLSearchParams:Ab,FormData:Sb,Blob},isStandardBrowserEnv:Rb,isStandardBrowserWebWorkerEnv:kb,protocols:["http","https","file","blob","url","data"]};function Ob(t,e){return wa(t,new Xt.classes.URLSearchParams,Object.assign({visitor:function(n,s,i,r){return Xt.isNode&&v.isBuffer(n)?(this.append(s,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Pb(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Nb(t){const e={},n=Object.keys(t);let s;const i=n.length;let r;for(s=0;s<i;s++)r=n[s],e[r]=t[r];return e}function im(t){function e(n,s,i,r){let o=n[r++];const a=Number.isFinite(+o),c=r>=n.length;return o=!o&&v.isArray(i)?i.length:o,c?(v.hasOwnProp(i,o)?i[o]=[i[o],s]:i[o]=s,!a):((!i[o]||!v.isObject(i[o]))&&(i[o]=[]),e(n,s,i[o],r)&&v.isArray(i[o])&&(i[o]=Nb(i[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(s,i)=>{e(Pb(s),i,n,0)}),n}return null}const xb={"Content-Type":void 0};function Db(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const Ea={transitional:sm,adapter:["xhr","http"],transformRequest:[function(e,n){const s=n.getContentType()||"",i=s.indexOf("application/json")>-1,r=v.isObject(e);if(r&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return i&&i?JSON.stringify(im(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Ob(e,this.formSerializer).toString();if((a=v.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return wa(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||i?(n.setContentType("application/json",!1),Db(e)):e}],transformResponse:[function(e){const n=this.transitional||Ea.transitional,s=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&v.isString(e)&&(s&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?le.from(a,le.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(e){Ea.headers[e]={}});v.forEach(["post","put","patch"],function(e){Ea.headers[e]=v.merge(xb)});const Su=Ea,Mb=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Lb=t=>{const e={};let n,s,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),s=o.substring(i+1).trim(),!(!n||e[n]&&Mb[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Rd=Symbol("internals");function Ai(t){return t&&String(t).trim().toLowerCase()}function go(t){return t===!1||t==null?t:v.isArray(t)?t.map(go):String(t)}function Fb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}function Ub(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function kd(t,e,n,s){if(v.isFunction(s))return s.call(this,e,n);if(v.isString(e)){if(v.isString(s))return e.indexOf(s)!==-1;if(v.isRegExp(s))return s.test(e)}}function Bb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function $b(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(i,r,o){return this[s].call(this,e,i,r,o)},configurable:!0})})}class Ia{constructor(e){e&&this.set(e)}set(e,n,s){const i=this;function r(a,c,l){const u=Ai(c);if(!u)throw new Error("header name must be a non-empty string");const h=v.findKey(i,u);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||c]=go(a))}const o=(a,c)=>v.forEach(a,(l,u)=>r(l,u,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!Ub(e)?o(Lb(e),n):e!=null&&r(n,e,s),this}get(e,n){if(e=Ai(e),e){const s=v.findKey(this,e);if(s){const i=this[s];if(!n)return i;if(n===!0)return Fb(i);if(v.isFunction(n))return n.call(this,i,s);if(v.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ai(e),e){const s=v.findKey(this,e);return!!(s&&(!n||kd(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let i=!1;function r(o){if(o=Ai(o),o){const a=v.findKey(s,o);a&&(!n||kd(s,s[a],a,n))&&(delete s[a],i=!0)}}return v.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const n=this,s={};return v.forEach(this,(i,r)=>{const o=v.findKey(s,r);if(o){n[o]=go(i),delete n[r];return}const a=e?Bb(r):String(r).trim();a!==r&&delete n[r],n[a]=go(i),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(s,i)=>{s!=null&&s!==!1&&(n[i]=e&&v.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(i=>s.set(i)),s}static accessor(e){const s=(this[Rd]=this[Rd]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=Ai(o);s[a]||($b(i,o),s[a]=!0)}return v.isArray(e)?e.forEach(r):r(e),this}}Ia.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);v.freezeMethods(Ia.prototype);v.freezeMethods(Ia);const yn=Ia;function uc(t,e){const n=this||Su,s=e||n,i=yn.from(s.headers);let r=s.data;return v.forEach(t,function(a){r=a.call(n,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function rm(t){return!!(t&&t.__CANCEL__)}function br(t,e,n){le.call(this,t??"canceled",le.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(br,le,{__CANCEL__:!0});const jb=null;function Hb(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new le("Request failed with status code "+n.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wb=Xt.isStandardBrowserEnv?function(){return{write:function(n,s,i,r,o,a){const c=[];c.push(n+"="+encodeURIComponent(s)),v.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),v.isString(r)&&c.push("path="+r),v.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Vb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function qb(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function om(t,e){return t&&!Vb(e)?qb(t,e):e}const zb=Xt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function i(r){let o=r;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=i(window.location.href),function(o){const a=v.isString(o)?i(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function Kb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Gb(t,e){t=t||10;const n=new Array(t),s=new Array(t);let i=0,r=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=s[r];o||(o=l),n[i]=c,s[i]=l;let h=r,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===r&&(r=(r+1)%t),l-o<e)return;const p=u&&l-u;return p?Math.round(d*1e3/p):void 0}}function Od(t,e){let n=0;const s=Gb(50,250);return i=>{const r=i.loaded,o=i.lengthComputable?i.total:void 0,a=r-n,c=s(a),l=r<=o;n=r;const u={loaded:r,total:o,progress:o?r/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-r)/c:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const Yb=typeof XMLHttpRequest<"u",Jb=Yb&&function(t){return new Promise(function(n,s){let i=t.data;const r=yn.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}v.isFormData(i)&&(Xt.isStandardBrowserEnv||Xt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(p+":"+m))}const u=om(t.baseURL,t.url);l.open(t.method.toUpperCase(),nm(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const p=yn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),_={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:p,config:t,request:l};Hb(function(C){n(C),c()},function(C){s(C),c()},_),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(s(new le("Request aborted",le.ECONNABORTED,t,l)),l=null)},l.onerror=function(){s(new le("Network Error",le.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const _=t.transitional||sm;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),s(new le(m,_.clarifyTimeoutError?le.ETIMEDOUT:le.ECONNABORTED,t,l)),l=null},Xt.isStandardBrowserEnv){const p=(t.withCredentials||zb(u))&&t.xsrfCookieName&&Wb.read(t.xsrfCookieName);p&&r.set(t.xsrfHeaderName,p)}i===void 0&&r.setContentType(null),"setRequestHeader"in l&&v.forEach(r.toJSON(),function(m,_){l.setRequestHeader(_,m)}),v.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",Od(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Od(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=p=>{l&&(s(!p||p.type?new br(null,t,l):p),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=Kb(u);if(d&&Xt.protocols.indexOf(d)===-1){s(new le("Unsupported protocol "+d+":",le.ERR_BAD_REQUEST,t));return}l.send(i||null)})},mo={http:jb,xhr:Jb};v.forEach(mo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Xb={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,s;for(let i=0;i<e&&(n=t[i],!(s=v.isString(n)?mo[n.toLowerCase()]:n));i++);if(!s)throw s===!1?new le(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(v.hasOwnProp(mo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!v.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:mo};function hc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new br(null,t)}function Pd(t){return hc(t),t.headers=yn.from(t.headers),t.data=uc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Xb.getAdapter(t.adapter||Su.adapter)(t).then(function(s){return hc(t),s.data=uc.call(t,t.transformResponse,s),s.headers=yn.from(s.headers),s},function(s){return rm(s)||(hc(t),s&&s.response&&(s.response.data=uc.call(t,t.transformResponse,s.response),s.response.headers=yn.from(s.response.headers))),Promise.reject(s)})}const Nd=t=>t instanceof yn?t.toJSON():t;function ni(t,e){e=e||{};const n={};function s(l,u,h){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:h},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function i(l,u,h){if(v.isUndefined(u)){if(!v.isUndefined(l))return s(void 0,l,h)}else return s(l,u,h)}function r(l,u){if(!v.isUndefined(u))return s(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return s(void 0,l)}else return s(void 0,u)}function a(l,u,h){if(h in e)return s(l,u);if(h in t)return s(void 0,l)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>i(Nd(l),Nd(u),!0)};return v.forEach(Object.keys(t).concat(Object.keys(e)),function(u){const h=c[u]||i,d=h(t[u],e[u],u);v.isUndefined(d)&&h!==a||(n[u]=d)}),n}const am="1.2.3",Ru={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ru[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const xd={};Ru.transitional=function(e,n,s){function i(r,o){return"[Axios v"+am+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return(r,o,a)=>{if(e===!1)throw new le(i(o," has been removed"+(n?" in "+n:"")),le.ERR_DEPRECATED);return n&&!xd[o]&&(xd[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function Qb(t,e,n){if(typeof t!="object")throw new le("options must be an object",le.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let i=s.length;for(;i-- >0;){const r=s[i],o=e[r];if(o){const a=t[r],c=a===void 0||o(a,r,t);if(c!==!0)throw new le("option "+r+" must be "+c,le.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new le("Unknown option "+r,le.ERR_BAD_OPTION)}}const ll={assertOptions:Qb,validators:Ru},Sn=ll.validators;class So{constructor(e){this.defaults=e,this.interceptors={request:new Sd,response:new Sd}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ni(this.defaults,n);const{transitional:s,paramsSerializer:i,headers:r}=n;s!==void 0&&ll.assertOptions(s,{silentJSONParsing:Sn.transitional(Sn.boolean),forcedJSONParsing:Sn.transitional(Sn.boolean),clarifyTimeoutError:Sn.transitional(Sn.boolean)},!1),i!==void 0&&ll.assertOptions(i,{encode:Sn.function,serialize:Sn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=r&&v.merge(r.common,r[n.method]),o&&v.forEach(["delete","get","head","post","put","patch","common"],m=>{delete r[m]}),n.headers=yn.concat(o,r);const a=[];let c=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(c=c&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,h=0,d;if(!c){const m=[Pd.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,l),d=m.length,u=Promise.resolve(n);h<d;)u=u.then(m[h++],m[h++]);return u}d=a.length;let p=n;for(h=0;h<d;){const m=a[h++],_=a[h++];try{p=m(p)}catch(A){_.call(this,A);break}}try{u=Pd.call(this,p)}catch(m){return Promise.reject(m)}for(h=0,d=l.length;h<d;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=ni(this.defaults,e);const n=om(e.baseURL,e.url);return nm(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){So.prototype[e]=function(n,s){return this.request(ni(s||{},{method:e,url:n,data:(s||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(s){return function(r,o,a){return this.request(ni(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}So.prototype[e]=n(),So.prototype[e+"Form"]=n(!0)});const _o=So;class ku{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const s=this;this.promise.then(i=>{if(!s._listeners)return;let r=s._listeners.length;for(;r-- >0;)s._listeners[r](i);s._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{s.subscribe(a),r=a}).then(i);return o.cancel=function(){s.unsubscribe(r)},o},e(function(r,o,a){s.reason||(s.reason=new br(r,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new ku(function(i){e=i}),cancel:e}}}const Zb=ku;function eT(t){return function(n){return t.apply(null,n)}}function tT(t){return v.isObject(t)&&t.isAxiosError===!0}const ul={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ul).forEach(([t,e])=>{ul[e]=t});const nT=ul;function cm(t){const e=new _o(t),n=Vg(_o.prototype.request,e);return v.extend(n,_o.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return cm(ni(t,i))},n}const Me=cm(Su);Me.Axios=_o;Me.CanceledError=br;Me.CancelToken=Zb;Me.isCancel=rm;Me.VERSION=am;Me.toFormData=wa;Me.AxiosError=le;Me.Cancel=Me.CanceledError;Me.all=function(e){return Promise.all(e)};Me.spread=eT;Me.isAxiosError=tT;Me.mergeConfig=ni;Me.AxiosHeaders=yn;Me.formToJSON=t=>im(v.isHTMLForm(t)?new FormData(t):t);Me.HttpStatusCode=nT;Me.default=Me;const sT=Me,iT=Rs("productList.action",()=>{async function t(){const a=await sT.get("https://fakestoreapi.com/products"),c=mt();c.isLoad=!0,c.productInfo=a.data,c.filterProducts=a.data}function e(){const a=mt();a.position=a.position+6}function n(){const a=mt();a.position=a.position-6}return{getProducts:t,loadNextCards:e,loadPrevCards:n,addToCart:a=>{const c=mt();c.cartProducts=[...c.cartProducts,a]},remToCart:a=>{const c=mt();c.cartProducts=[...c.cartProducts.filter(({id:l})=>l!==a.id)]},addToFav:a=>{const c=mt();c.favProducts=[...c.favProducts,a]},remToFav:a=>{const c=mt();c.favProducts=[...c.favProducts.filter(l=>l.id!==a.id)]}}}),rT=Rs("Cart.action",()=>({incCountToCart:n=>{const s=mt();s.cartProducts=[...s.cartProducts.filter((i,r)=>r<n),{...s.cartProducts[n],count:s.cartProducts[n].count?s.cartProducts[n].count+1:2},...s.cartProducts.filter((i,r)=>r>n)]},decCountToCart:n=>{const s=mt();s.cartProducts=[...s.cartProducts.filter((i,r)=>r<n),{...s.cartProducts[n],count:s.cartProducts[n].count?s.cartProducts[n].count-1:1},...s.cartProducts.filter((i,r)=>r>n)]}})),oT=Rs("FilterProduct.action",()=>({resetFilterProducts:()=>{const n=mt();n.filterProducts=n.productInfo},searchProduct:n=>{const s=mt();let i=ut([]);n.category&&(i.value=s.productInfo.filter(r=>r.category===n.category)),n.minprice&&(i.value=(i.value[0]?i.value:s.productInfo).filter(r=>r.price>=parseInt(n.minprice,10))),n.maxprice&&(i.value=(i.value[0]?i.value:s.productInfo).filter(r=>r.price<=parseInt(n.maxprice,10))),n.search&&(i.value=(i.value[0]?i.value:s.productInfo).filter(r=>r.category.includes(n.search)||r.title.includes(n.search))),(n.search||n.category||n.minprice||n.maxprice)&&(s.filterProducts=i.value)}})),aT=Rs("product.action",()=>({...iT(),...WI(),...rT(),...oT()})),cn=Rs("productStore",()=>({...HI(mt()),...aT()})),ot=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},cT={name:"App",setup(){const t=cn();return _u(()=>{let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{t.windowWidth=window.innerWidth},200)})}),t.getProducts(),{productStore:t}}};function lT(t,e,n,s,i,r){const o=ke("router-view");return z(),rn(o)}const uT=ot(cT,[["render",lT]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Us=typeof window<"u";function hT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function dc(t,e){const n={};for(const s in e){const i=e[s];n[s]=Vt(i)?i.map(t):t(i)}return n}const Vi=()=>{},Vt=Array.isArray,dT=/\/$/,fT=t=>t.replace(dT,"");function fc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=_T(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function pT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gT(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&si(e.matched[s],n.matched[i])&&lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function si(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mT(t[n],e[n]))return!1;return!0}function mT(t,e){return Vt(t)?Md(t,e):Vt(e)?Md(e,t):t===e}function Md(t,e){return Vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function _T(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var rr;(function(t){t.pop="pop",t.push="push"})(rr||(rr={}));var qi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qi||(qi={}));function yT(t){if(!t)if(Us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fT(t)}const vT=/^[^#]+#/;function wT(t,e){return t.replace(vT,"#")+e}function ET(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function IT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ET(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ld(t,e){return(history.state?history.state.position-e:-1)+t}const hl=new Map;function bT(t,e){hl.set(t,e)}function TT(t){const e=hl.get(t);return hl.delete(t),e}let CT=()=>location.protocol+"//"+location.host;function um(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Dd(c,"")}return Dd(n,t)+s+i}function AT(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=um(t,location),m=n.value,_=e.value;let A=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}A=_?d.position-_.position:0}else s(p);i.forEach(C=>{C(n.value,m,{delta:A,type:rr.pop,direction:A?A>0?qi.forward:qi.back:qi.unknown})})};function c(){o=n.value}function l(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:ba()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Fd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ba():null}}function ST(t){const{history:e,location:n}=window,s={value:um(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:CT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,Fd(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=fe({},i.value,e.state,{forward:c,scroll:ba()});r(u.current,u,!0);const h=fe({},Fd(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function RT(t){t=yT(t);const e=ST(t),n=AT(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=fe({location:"",base:t,go:s,createHref:wT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function kT(t){return typeof t=="string"||t&&typeof t=="object"}function hm(t){return typeof t=="string"||typeof t=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dm=Symbol("");var Ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ud||(Ud={}));function ii(t,e){return fe(new Error,{type:t,[dm]:!0},e)}function un(t,e){return t instanceof Error&&dm in t&&(e==null||!!(t.type&e))}const Bd="[^/]+?",OT={sensitive:!1,strict:!1,start:!0,end:!0},PT=/[.+*?^${}()[\]/\\]/g;function NT(t,e){const n=fe({},OT,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(PT,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:_,optional:A,regexp:C}=d;r.push({name:m,repeatable:_,optional:A});const L=C||Bd;if(L!==Bd){p+=10;try{new RegExp(`(${L})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+B.message)}}let k=_?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(k=A&&l.length<2?`(?:/${k})`:"/"+k),A&&(k+="?"),i+=k,p+=20,A&&(p+=-8),_&&(p+=-20),L===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=r[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:A}=p,C=m in l?l[m]:"";if(Vt(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=Vt(C)?C.join("/"):C;if(!L)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=L}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function xT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DT(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=xT(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if($d(s))return 1;if($d(i))return-1}return i.length-s.length}function $d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MT={type:0,value:""},LT=/[a-zA-Z0-9_]/;function FT(t){if(!t)return[[]];if(t==="/")return[[MT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:LT.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function UT(t,e,n){const s=NT(FT(t.path),n),i=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function BT(t,e){const n=[],s=new Map;e=Wd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,m=$T(u);m.aliasOf=d&&d.record;const _=Wd(e,u),A=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of k)A.push(fe({},m,{components:d?d.record.components:m.components,path:B,aliasOf:d?d.record:m}))}let C,L;for(const k of A){const{path:B}=k;if(h&&B[0]!=="/"){const q=h.record.path,Z=q[q.length-1]==="/"?"":"/";k.path=h.record.path+(B&&Z+B)}if(C=UT(k,h,_),d?d.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),p&&u.name&&!Hd(C)&&o(u.name)),m.children){const q=m.children;for(let Z=0;Z<q.length;Z++)r(q[Z],C,d&&d.children[Z])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return L?()=>{o(L)}:Vi}function o(u){if(hm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&DT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!fm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Hd(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ii(1,{location:u});_=d.record.name,p=fe(jd(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&jd(u.params,d.keys.map(L=>L.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(L=>L.re.test(m)),d&&(p=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw ii(1,{location:u,currentLocation:h});_=d.record.name,p=fe({},h.params,u.params),m=d.stringify(p)}const A=[];let C=d;for(;C;)A.unshift(C.record),C=C.parent;return{name:_,path:m,params:p,matched:A,meta:HT(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function jd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function $T(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HT(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Wd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fm(t,e){return e.children.some(n=>n===t||fm(t,n))}const pm=/#/g,WT=/&/g,VT=/\//g,qT=/=/g,zT=/\?/g,gm=/\+/g,KT=/%5B/g,GT=/%5D/g,mm=/%5E/g,YT=/%60/g,_m=/%7B/g,JT=/%7C/g,ym=/%7D/g,XT=/%20/g;function Ou(t){return encodeURI(""+t).replace(JT,"|").replace(KT,"[").replace(GT,"]")}function QT(t){return Ou(t).replace(_m,"{").replace(ym,"}").replace(mm,"^")}function dl(t){return Ou(t).replace(gm,"%2B").replace(XT,"+").replace(pm,"%23").replace(WT,"%26").replace(YT,"`").replace(_m,"{").replace(ym,"}").replace(mm,"^")}function ZT(t){return dl(t).replace(qT,"%3D")}function e0(t){return Ou(t).replace(pm,"%23").replace(zT,"%3F")}function t0(t){return t==null?"":e0(t).replace(VT,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function n0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(gm," "),o=r.indexOf("="),a=Ro(o<0?r:r.slice(0,o)),c=o<0?null:Ro(r.slice(o+1));if(a in e){let l=e[a];Vt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Vd(t){let e="";for(let n in t){const s=t[n];if(n=ZT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(s)?s.map(r=>r&&dl(r)):[s&&dl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function s0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Vt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const i0=Symbol(""),qd=Symbol(""),Ta=Symbol(""),Pu=Symbol(""),fl=Symbol("");function Si(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Nn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ii(4,{from:n,to:e})):h instanceof Error?a(h):kT(h)?a(ii(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function pc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(r0(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Nn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=hT(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Nn(d,n,s,r,o)()}))}}return i}function r0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zd(t){const e=wt(Ta),n=wt(Pu),s=_t(()=>e.resolve(qs(t.to))),i=_t(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(si.bind(null,u));if(d>-1)return d;const p=Kd(c[l-2]);return l>1&&Kd(u)===p&&h[h.length-1].path!==p?h.findIndex(si.bind(null,c[l-2])):d}),r=_t(()=>i.value>-1&&l0(n.params,s.value.params)),o=_t(()=>i.value>-1&&i.value===n.matched.length-1&&lm(n.params,s.value.params));function a(c={}){return c0(c)?e[qs(t.replace)?"replace":"push"](qs(t.to)).catch(Vi):Promise.resolve()}return{route:s,href:_t(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const o0=Eg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zd,setup(t,{slots:e}){const n=Wt(zd(t)),{options:s}=wt(Ta),i=_t(()=>({[Gd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Gd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),a0=o0;function c0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function l0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Vt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Kd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gd=(t,e,n)=>t??e??n,u0=Eg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=wt(fl),i=_t(()=>t.route||s.value),r=wt(qd,0),o=_t(()=>{let l=qs(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=_t(()=>i.value.matched[o.value]);uo(qd,_t(()=>o.value+1)),uo(i0,a),uo(fl,i);const c=ut();return Bi(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!si(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Yd(n.default,{Component:d,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,A=Ug(d,fe({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Yd(n.default,{Component:A,route:l})||A}}});function Yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const h0=u0;function d0(t){const e=BT(t.routes,t),n=t.parseQuery||n0,s=t.stringifyQuery||Vd,i=t.history,r=Si(),o=Si(),a=Si(),c=Jw(Rn);let l=Rn;Us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dc.bind(null,I=>""+I),h=dc.bind(null,t0),d=dc.bind(null,Ro);function p(I,M){let x,$;return hm(I)?(x=e.getRecordMatcher(I),$=M):$=I,e.addRoute($,x)}function m(I){const M=e.getRecordMatcher(I);M&&e.removeRoute(M)}function _(){return e.getRoutes().map(I=>I.record)}function A(I){return!!e.getRecordMatcher(I)}function C(I,M){if(M=fe({},M||c.value),typeof I=="string"){const f=fc(n,I,M.path),g=e.resolve({path:f.path},M),y=i.createHref(f.fullPath);return fe(f,g,{params:d(g.params),hash:Ro(f.hash),redirectedFrom:void 0,href:y})}let x;if("path"in I)x=fe({},I,{path:fc(n,I.path,M.path).path});else{const f=fe({},I.params);for(const g in f)f[g]==null&&delete f[g];x=fe({},I,{params:h(I.params)}),M.params=h(M.params)}const $=e.resolve(x,M),ae=I.hash||"";$.params=u(d($.params));const Se=pT(s,fe({},I,{hash:QT(ae),path:$.path})),Q=i.createHref(Se);return fe({fullPath:Se,hash:ae,query:s===Vd?s0(I.query):I.query||{}},$,{redirectedFrom:void 0,href:Q})}function L(I){return typeof I=="string"?fc(n,I,c.value.path):fe({},I)}function k(I,M){if(l!==I)return ii(8,{from:M,to:I})}function B(I){return V(I)}function q(I){return B(fe(L(I),{replace:!0}))}function Z(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:x}=M;let $=typeof x=="function"?x(I):x;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=L($):{path:$},$.params={}),fe({query:I.query,hash:I.hash,params:"path"in $?{}:I.params},$)}}function V(I,M){const x=l=C(I),$=c.value,ae=I.state,Se=I.force,Q=I.replace===!0,f=Z(x);if(f)return V(fe(L(f),{state:typeof f=="object"?fe({},ae,f.state):ae,force:Se,replace:Q}),M||x);const g=x;g.redirectedFrom=M;let y;return!Se&&gT(s,$,x)&&(y=ii(16,{to:g,from:$}),Jn($,$,!0,!1)),(y?Promise.resolve(y):X(g,$)).catch(w=>un(w)?un(w,2)?w:Nt(w):ve(w,g,$)).then(w=>{if(w){if(un(w,2))return V(fe({replace:Q},L(w.to),{state:typeof w.to=="object"?fe({},ae,w.to.state):ae,force:Se}),M||g)}else w=ye(g,$,!0,Q,ae);return ee(g,$,w),w})}function P(I,M){const x=k(I,M);return x?Promise.reject(x):Promise.resolve()}function X(I,M){let x;const[$,ae,Se]=f0(I,M);x=pc($.reverse(),"beforeRouteLeave",I,M);for(const f of $)f.leaveGuards.forEach(g=>{x.push(Nn(g,I,M))});const Q=P.bind(null,I,M);return x.push(Q),Ms(x).then(()=>{x=[];for(const f of r.list())x.push(Nn(f,I,M));return x.push(Q),Ms(x)}).then(()=>{x=pc(ae,"beforeRouteUpdate",I,M);for(const f of ae)f.updateGuards.forEach(g=>{x.push(Nn(g,I,M))});return x.push(Q),Ms(x)}).then(()=>{x=[];for(const f of I.matched)if(f.beforeEnter&&!M.matched.includes(f))if(Vt(f.beforeEnter))for(const g of f.beforeEnter)x.push(Nn(g,I,M));else x.push(Nn(f.beforeEnter,I,M));return x.push(Q),Ms(x)}).then(()=>(I.matched.forEach(f=>f.enterCallbacks={}),x=pc(Se,"beforeRouteEnter",I,M),x.push(Q),Ms(x))).then(()=>{x=[];for(const f of o.list())x.push(Nn(f,I,M));return x.push(Q),Ms(x)}).catch(f=>un(f,8)?f:Promise.reject(f))}function ee(I,M,x){for(const $ of a.list())$(I,M,x)}function ye(I,M,x,$,ae){const Se=k(I,M);if(Se)return Se;const Q=M===Rn,f=Us?history.state:{};x&&($||Q?i.replace(I.fullPath,fe({scroll:Q&&f&&f.scroll},ae)):i.push(I.fullPath,ae)),c.value=I,Jn(I,M,x,Q),Nt()}let Le;function ft(){Le||(Le=i.listen((I,M,x)=>{if(!Vr.listening)return;const $=C(I),ae=Z($);if(ae){V(fe(ae,{replace:!0}),$).catch(Vi);return}l=$;const Se=c.value;Us&&bT(Ld(Se.fullPath,x.delta),ba()),X($,Se).catch(Q=>un(Q,12)?Q:un(Q,2)?(V(Q.to,$).then(f=>{un(f,20)&&!x.delta&&x.type===rr.pop&&i.go(-1,!1)}).catch(Vi),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ve(Q,$,Se))).then(Q=>{Q=Q||ye($,Se,!1),Q&&(x.delta&&!un(Q,8)?i.go(-x.delta,!1):x.type===rr.pop&&un(Q,20)&&i.go(-1,!1)),ee($,Se,Q)}).catch(Vi)}))}let tt=Si(),Fe=Si(),Ne;function ve(I,M,x){Nt(I);const $=Fe.list();return $.length?$.forEach(ae=>ae(I,M,x)):console.error(I),Promise.reject(I)}function ge(){return Ne&&c.value!==Rn?Promise.resolve():new Promise((I,M)=>{tt.add([I,M])})}function Nt(I){return Ne||(Ne=!I,ft(),tt.list().forEach(([M,x])=>I?x(I):M()),tt.reset()),I}function Jn(I,M,x,$){const{scrollBehavior:ae}=t;if(!Us||!ae)return Promise.resolve();const Se=!x&&TT(Ld(I.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return pu().then(()=>ae(I,M,Se)).then(Q=>Q&&IT(Q)).catch(Q=>ve(Q,I,M))}const xt=I=>i.go(I);let at;const Ns=new Set,Vr={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:A,getRoutes:_,resolve:C,options:t,push:B,replace:q,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Fe.add,isReady:ge,install(I){const M=this;I.component("RouterLink",a0),I.component("RouterView",h0),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>qs(c)}),Us&&!at&&c.value===Rn&&(at=!0,B(i.location).catch(ae=>{}));const x={};for(const ae in Rn)x[ae]=_t(()=>c.value[ae]);I.provide(Ta,M),I.provide(Pu,Wt(x)),I.provide(fl,c);const $=I.unmount;Ns.add(I),I.unmount=function(){Ns.delete(I),Ns.size<1&&(l=Rn,Le&&Le(),Le=null,c.value=Rn,at=!1,Ne=!1),$()}}};return Vr}function Ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function f0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>si(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>si(l,c))||i.push(c))}return[n,s,i]}function Tr(){return wt(Ta)}function p0(){return wt(Pu)}const g0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAWlBMVEUAAACTM+uKMf+TM+qUL+mTM+uRMOyTM+qTM+qTM+qTM+qUM+qTM+uTMuqUM+qUM+mUNeeTM+qSM+qTMuqSM+uTNOuSMuuTM+qTMuqUNOuTM+qTM+qRM+uTM+rdIVkqAAAAHXRSTlMA0wX0FlYN3PnYpYVvUPFpK8OHx2c/KunLimveQXk29wQAAADRSURBVCjPvZLbbsMgDIZ/IJxSAkmTHtbtf//X3FYhWdBlN1X73Vjoky3bGG9B2zEaE0er/7KTZ8VPj/aDVOns3JwUeXy0YUOlhN5PDCd5nQKb+tpzA4RCryFYqnYIRQthZAIO5gDUkDhCiDwDhhmoYWaEkOnabMcMwdChwdF0xRtm+r416LLmvGwatbVusJV3FhlM1lKARVnnrPrRN3q9v9SvulThyFBqgr4FXgb0nirN9UMvVMPuOXxOgxLfHpO/H1P1e/z6+KS/4j9/XfFivgHbDQ4OSF62QAAAAABJRU5ErkJggg==",m0={setup(){const t=cn();let e=ut([]);return Er(async()=>{e.value=[...t.filterProducts.slice(t.position,t.position+6)]}),{productStore:t,products:e,addFav:(i,r)=>{i.stopPropagation(),i.preventDefault(),t.favProducts.some(o=>r.id===o.id)?t.remToFav(r):t.addToFav(r)},toggleCart:(i,r)=>{i.stopPropagation(),i.preventDefault(),t.cartProducts.some(o=>r.id===o.id)?t.remToCart(r):t.addToCart(r)}}}},_0={class:"w-full flex flex-row sm:flex-row flex-wrap justify-center sm:justify-evenly"},y0=["src","onClick"],v0=["src","onClick"],w0=["src"],E0={class:"w-full truncate my-1 text-center"},I0={class:"flex justify-center items-center"},b0={class:"px-1 bg-green-800 text-white"},T0={class:"text-center"},C0={key:1,class:"flex flex-col justify-center items-center h-96 w-full"},A0=E("img",{src:g0},null,-1),S0=E("p",{class:"text-2xl"},"Try different search",-1),R0=[A0,S0],k0={key:2,class:"flex flex-col justify-center items-center h-96"};function O0(t,e,n,s,i,r){const o=ke("router-link");return z(),ne("div",_0,[s.products.length?(z(),ne(st,{key:0},[(z(!0),ne(st,null,pa(s.products,a=>(z(),rn(o,{key:a.id,to:`/product/${a.id}`,class:Qs(["md:w-1/3",s.productStore.windowWidth<300?"w-64":"w-72"])},{default:Bn(()=>[(z(),ne("div",{class:"p-2.5 m-1 shadow bg-gray-50 relative flex flex-col justify-center items-center",key:a.id},[E("img",{alt:"wishlist",class:"absolute top-0.5 right-0.5",src:s.productStore.favProducts.some(c=>c.id===a.id)?"https://img.icons8.com/color/30/000000/like--v3.png":"https://img.icons8.com/ios/30/000000/like--v2.png",onClick:c=>s.addFav(c,a)},null,8,y0),E("img",{alt:"cart",class:"absolute top-10 right-0.5",src:s.productStore.cartProducts.some(c=>c.id===a.id)?"https://img.icons8.com/external-those-icons-lineal-those-icons/30/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-8.png":"https://img.icons8.com/material-rounded/30/000000/add-shopping-cart.png",onClick:c=>s.toggleCart(c,a)},null,8,v0),E("img",{alt:"Not found",src:a.image,class:"bg-no-repeat h-72 sm:h-64 md:h-48"},null,8,w0),E("h3",E0,Re(a.title),1),E("div",I0,[E("p",b0,Re(a.rating.rate),1),ms(" ("+Re(a.rating.count)+") ",1)]),E("h3",T0,"₹"+Re(a.price),1)]))]),_:2},1032,["to","class"]))),128)),E("div",{class:Qs([!s.productStore.position&&"flex-row-reverse","w-3/4 flex justify-between items-center h-8 my-1"])},[s.productStore.position?(z(),ne("button",{key:0,class:"py-1 px-2.5 mr-1 h-8 bg-purple-600 text-white rounded md:rounded-md lg:rounded-lg cursor-pointer m-1",onClick:e[0]||(e[0]=a=>s.productStore.loadPrevCards())}," Prev ")):dn("",!0),s.productStore.filterProducts[s.productStore.position+6]?(z(),ne("button",{key:1,class:"py-1 px-2.5 ml-1 h-8 bg-purple-600 text-white rounded md:rounded-md lg:rounded-lg cursor-pointer m-1",onClick:e[1]||(e[1]=a=>s.productStore.loadNextCards())}," Next ")):dn("",!0)],2)],64)):!s.productStore.filterProducts.length&&s.productStore.productInfo.length?(z(),ne("div",C0,R0)):(z(),ne("p",k0," Loading... "))])}const P0=ot(m0,[["render",O0]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw di(e)},di=function(t){return new Error("Firebase Database ("+vm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Em=function(t){const e=wm(t);return Ca.encodeByteArray(e,!0)},Im=function(t){return Em(t).replace(/\./g,"")},ko=function(t){try{return Ca.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){return bm(void 0,t)}function bm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!D0(n)||(t[n]=bm(t[n],e[n]));return t}function D0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=()=>M0().__FIREBASE_DEFAULTS__,F0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},U0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ko(t[1]);return e&&JSON.parse(e)},Nu=()=>{try{return L0()||F0()||U0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B0=t=>{var e,n;return(n=(e=Nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$0=()=>{var t;return(t=Nu())===null||t===void 0?void 0:t.config},Tm=t=>{var e;return(e=Nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function Cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j0(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sm(){return vm.NODE_ADMIN===!0}function Du(){try{return typeof indexedDB=="object"}catch{return!1}}function Rm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function H0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="FirebaseError";class Ot extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=W0,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?V0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,s)}}function V0(t,e){return t.replace(q0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const q0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ar(ko(r[0])||""),n=ar(ko(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},z0=function(t){const e=km(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K0=function(t){const e=km(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jd(r)&&Jd(o)){if(!cr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Y0(t,e){const n=new J0(t,e);return n.subscribe.bind(n)}class J0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");X0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}function Q0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,N(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Aa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=1e3,tC=2,nC=4*60*60*1e3,sC=.5;function Xd(t,e=eC,n=tC){const s=e*Math.pow(n,t),i=Math.round(sC*s*(Math.random()-.5)*2);return Math.min(nC,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class rt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new or;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oC(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rC(t){return t===es?void 0:t}function oC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const cC={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},lC=pe.INFO,uC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},hC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=uC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pi{constructor(e){this.name=e,this._logLevel=lC,this._logHandler=hC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const dC=(t,e)=>e.some(n=>t instanceof n);let Qd,Zd;function fC(){return Qd||(Qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pC(){return Zd||(Zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,gl=new WeakMap,Pm=new WeakMap,mc=new WeakMap,Mu=new WeakMap;function gC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n($n(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),Mu.set(e,t),e}function mC(t){if(gl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _C(t){ml=t(ml)}function yC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_c(this),e,...n);return Pm.set(s,e.sort?e.sort():[e]),$n(s)}:pC().includes(t)?function(...e){return t.apply(_c(this),e),$n(Om.get(this))}:function(...e){return $n(t.apply(_c(this),e))}}function vC(t){return typeof t=="function"?yC(t):(t instanceof IDBTransaction&&mC(t),dC(t,fC())?new Proxy(t,ml):t)}function $n(t){if(t instanceof IDBRequest)return gC(t);if(mc.has(t))return mc.get(t);const e=vC(t);return e!==t&&(mc.set(t,e),Mu.set(e,t)),e}const _c=t=>Mu.get(t);function wC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=$n(o);return s&&o.addEventListener("upgradeneeded",c=>{s($n(o.result),c.oldVersion,c.newVersion,$n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const EC=["get","getKey","getAll","getAllKeys","count"],IC=["put","add","delete","clear"],yc=new Map;function ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=IC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||EC.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return yc.set(e,r),r}_C(t=>({...t,get:(e,n,s)=>ef(e,n)||t.get(e,n,s),has:(e,n)=>!!ef(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function TC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",tf="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new pi("@firebase/app"),CC="@firebase/app-compat",AC="@firebase/analytics-compat",SC="@firebase/analytics",RC="@firebase/app-check-compat",kC="@firebase/app-check",OC="@firebase/auth",PC="@firebase/auth-compat",NC="@firebase/database",xC="@firebase/database-compat",DC="@firebase/functions",MC="@firebase/functions-compat",LC="@firebase/installations",FC="@firebase/installations-compat",UC="@firebase/messaging",BC="@firebase/messaging-compat",$C="@firebase/performance",jC="@firebase/performance-compat",HC="@firebase/remote-config",WC="@firebase/remote-config-compat",VC="@firebase/storage",qC="@firebase/storage-compat",zC="@firebase/firestore",KC="@firebase/firestore-compat",GC="firebase",YC="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="[DEFAULT]",JC={[_l]:"fire-core",[CC]:"fire-core-compat",[SC]:"fire-analytics",[AC]:"fire-analytics-compat",[kC]:"fire-app-check",[RC]:"fire-app-check-compat",[OC]:"fire-auth",[PC]:"fire-auth-compat",[NC]:"fire-rtdb",[xC]:"fire-rtdb-compat",[DC]:"fire-fn",[MC]:"fire-fn-compat",[LC]:"fire-iid",[FC]:"fire-iid-compat",[UC]:"fire-fcm",[BC]:"fire-fcm-compat",[$C]:"fire-perf",[jC]:"fire-perf-compat",[HC]:"fire-rc",[WC]:"fire-rc-compat",[VC]:"fire-gcs",[qC]:"fire-gcs-compat",[zC]:"fire-fst",[KC]:"fire-fst-compat","fire-js":"fire-js",[GC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,vl=new Map;function XC(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(vl.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Po.values())XC(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Kn("app","Firebase",QC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=YC;function Nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=$0()),!n)throw jn.create("no-options");const r=Po.get(i);if(r){if(cr(n,r.options)&&cr(s,r.config))return r;throw jn.create("duplicate-app",{appName:i})}const o=new aC(i);for(const c of vl.values())o.addComponent(c);const a=new ZC(n,s,o);return Po.set(i,a),a}function Lu(t=yl){const e=Po.get(t);if(!e&&t===yl)return Nm();if(!e)throw jn.create("no-app",{appName:t});return e}function Ve(t,e,n){var s;let i=(s=JC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(a.join(" "));return}dt(new rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="firebase-heartbeat-database",tA=1,lr="firebase-heartbeat-store";let vc=null;function xm(){return vc||(vc=wC(eA,tA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),vc}async function nA(t){try{return(await xm()).transaction(lr).objectStore(lr).get(Dm(t))}catch(e){if(e instanceof Ot)vs.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vs.warn(n.message)}}}async function nf(t,e){try{const s=(await xm()).transaction(lr,"readwrite");return await s.objectStore(lr).put(e,Dm(t)),s.done}catch(n){if(n instanceof Ot)vs.warn(n.message);else{const s=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vs.warn(s.message)}}}function Dm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1024,iA=30*24*60*60*1e3;class rA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=iA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sf(),{heartbeatsToSend:n,unsentEntries:s}=oA(this._heartbeatsCache.heartbeats),i=Im(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sf(){return new Date().toISOString().substring(0,10)}function oA(t,e=sA){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class aA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?Rm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rf(t){return Im(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){dt(new rt("platform-logger",e=>new bC(e),"PRIVATE")),dt(new rt("heartbeat",e=>new rA(e),"PRIVATE")),Ve(_l,tf,t),Ve(_l,tf,"esm2017"),Ve("fire-js","")}cA("");function Fu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Mm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lA=Mm,Lm=new Kn("auth","Firebase",Mm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new pi("@firebase/auth");function yo(t,...e){of.logLevel<=pe.ERROR&&of.error(`Auth (${ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw Uu(t,...e)}function Zt(t,...e){return Uu(t,...e)}function uA(t,e,n){const s=Object.assign(Object.assign({},lA()),{[e]:n});return new Kn("auth","Firebase",s).create(e,{appName:t.name})}function Uu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Lm.create(t,...e)}function W(t,e,...n){if(!t)throw Uu(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function En(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function pn(t){En(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e){const n=gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(cr(r,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function dA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fA(){return cf()==="http:"||cf()==="https:"}function cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fA()||Cm()||"connection"in navigator)?navigator.onLine:!0}function gA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=xu()||Am()}get(){return pA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Cr(3e4,6e4);function mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,s,i={}){return Um(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=fi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Fm.fetch()(Bm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Um(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mA),e);try{const i=new yA(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw uA(t,u,l);qt(t,u)}}catch(i){if(i instanceof Ot)throw i;qt(t,"network-request-failed")}}async function Ar(t,e,n,s,i={}){const r=await _i(t,e,n,s,i);return"mfaPendingCredential"in r&&qt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Bm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Bu(t.config,i):`${t.config.apiScheme}://${i}`}class yA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),_A.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Zt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function wA(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EA(t,e=!1){const n=Pt(t),s=await n.getIdToken(e),i=$u(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:zi(wc(i.auth_time)),issuedAtTime:zi(wc(i.iat)),expirationTime:zi(wc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function $u(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ko(n);return i?JSON.parse(i):(yo("Failed to decode base64 JWT payload"),null)}catch(i){return yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function IA(t){const e=$u(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ot&&bA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function bA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ur(t,wA(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?SA(r.providerUserInfo):[],a=AA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $m(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function CA(t){const e=Pt(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AA(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function SA(t){return t.map(e=>{var{providerId:n}=e,s=Fu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){const n=await Um(t,{},async()=>{const s=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Bm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await RA(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hr;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ds{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $m(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EA(this,e)}reload(){return CA(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,vA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:B,isAnonymous:q,providerData:Z,stsTokenManager:V}=n;W(k&&V,e,"internal-error");const P=hr.fromJSON(this.name,V);W(typeof k=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),W(typeof B=="boolean",e,"internal-error"),W(typeof q=="boolean",e,"internal-error"),kn(p,e.name),kn(m,e.name),kn(_,e.name),kn(A,e.name),kn(C,e.name),kn(L,e.name);const X=new ds({uid:k,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:q,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:P,createdAt:C,lastLoginAt:L});return Z&&Array.isArray(Z)&&(X.providerData=Z.map(ee=>Object.assign({},ee))),A&&(X._redirectEventId=A),X}static async _fromIdTokenResponse(e,n,s=!1){const i=new hr;i.updateFromServerResponse(n);const r=new ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await No(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jm.type="NONE";const lf=jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,r),this.fullPersistenceKey=vo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ks(pn(lf),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||pn(lf);const o=vo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ds._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ks(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ks(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Km(e))return"Webos";if(ju(e))return"Safari";if((e.includes("chrome/")||Wm(e))&&!e.includes("edge/"))return"Chrome";if(qm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hm(t=et()){return/firefox\//i.test(t)}function ju(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wm(t=et()){return/crios\//i.test(t)}function Vm(t=et()){return/iemobile/i.test(t)}function qm(t=et()){return/android/i.test(t)}function zm(t=et()){return/blackberry/i.test(t)}function Km(t=et()){return/webos/i.test(t)}function Sa(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kA(t=et()){var e;return Sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OA(){return j0()&&document.documentMode===10}function Gm(t=et()){return Sa(t)||qm(t)||Km(t)||zm(t)||/windows phone/i.test(t)||Vm(t)}function PA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=uf(et());break;case"Worker":n=`${uf(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hf(this),this.idTokenSubscription=new hf(this),this.beforeStateQueue=new NA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Sr(t){return Pt(t)}class hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y0(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function DA(t,e,n){const s=Sr(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Jm(e),{host:o,port:a}=MA(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LA()}function Jm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MA(t){const e=Jm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:df(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:df(o)}}}function df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function FA(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e){return Ar(t,"POST","/v1/accounts:signInWithPassword",mi(t,e))}async function BA(t,e){return _i(t,"POST","/v1/accounts:sendOobCode",mi(t,e))}async function $A(t,e){return BA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e){return Ar(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}async function HA(t,e){return Ar(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Hu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new dr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new dr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return UA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jA(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return FA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HA(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e){return Ar(t,"POST","/v1/accounts:signInWithIdp",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="http://localhost";class ws extends Hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ws(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:WA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qA(t){const e=Di(Mi(t)).link,n=e?Di(Mi(e)).deep_link_id:null,s=Di(Mi(t)).deep_link_id;return(s?Di(Mi(s)).link:null)||s||n||e||t}class Wu{constructor(e){var n,s,i,r,o,a;const c=Di(Mi(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=VA((i=c.mode)!==null&&i!==void 0?i:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qA(e);try{return new Wu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Wu.parseLink(n);return W(s,"argument-error"),dr._fromEmailAndCode(e,s.code,s.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Xm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Rr{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Dn.credential(n,s)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Rr{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Rr{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ln.credential(n,s)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e){return Ar(t,"POST","/v1/accounts:signUp",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ds._fromIdTokenResponse(e,s,i),o=ff(s);return new Es({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ff(s);return new Es({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Ot{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xo(e,n,s,i)}}function Qm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,r,e,s):r})}async function KA(t,e,n=!1){const s=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ur(t,Qm(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=$u(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),Es._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t,e,n=!1){const s="signIn",i=await Qm(t,s,e),r=await Es._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function YA(t,e){return Zm(Sr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e,n){var s;W(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function XA(t,e,n){const s=Sr(t),i=await zA(s,{returnSecureToken:!0,email:e,password:n}),r=await Es._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function QA(t,e,n){return YA(Pt(t),yi.credential(e,n))}async function ZA(t,e){const n=Pt(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&JA(n.auth,i,e);const{email:r}=await $A(n.auth,i);r!==t.email&&await t.reload()}function e_(t,e,n,s){return Pt(t).onIdTokenChanged(e,n,s)}function eS(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function tS(t){return Pt(t).signOut()}const Do="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){const t=et();return ju(t)||Sa(t)}const sS=1e3,iS=10;class n_ extends t_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nS()&&PA(),this.fallbackToPolling=Gm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);OA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},sS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n_.type="LOCAL";const rS=n_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends t_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s_.type="SESSION";const i_=s_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ra(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await oS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Vu("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function cS(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function lS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hS(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="firebaseLocalStorageDb",dS=1,Mo="firebaseLocalStorage",a_="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function fS(){const t=indexedDB.deleteDatabase(o_);return new kr(t).toPromise()}function El(){const t=indexedDB.open(o_,dS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mo,{keyPath:a_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mo)?e(s):(s.close(),await fS(),e(await El()))})})}async function pf(t,e,n){const s=ka(t,!0).put({[a_]:e,value:n});return new kr(s).toPromise()}async function pS(t,e){const n=ka(t,!1).get(e),s=await new kr(n).toPromise();return s===void 0?null:s.value}function gf(t,e){const n=ka(t,!0).delete(e);return new kr(n).toPromise()}const gS=800,mS=3;class c_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await El(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>mS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(hS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lS(),!this.activeServiceWorker)return;this.sender=new aS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await El();return await pf(e,Do,"1"),await gf(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>pf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>pS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ka(i,!1).getAll();return new kr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c_.type="LOCAL";const _S=c_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Zt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",yS().appendChild(s)})}function wS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Cr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e){return e?pn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Hu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IS(t){return Zm(t.auth,new qu(t),t.bypassAuthState)}function bS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),GA(n,new qu(t),t.bypassAuthState)}async function TS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),KA(n,new qu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IS;case"linkViaPopup":case"linkViaRedirect":return TS;case"reauthViaPopup":case"reauthViaRedirect":return bS;default:qt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Cr(2e3,1e4);class Bs extends l_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,CS.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="pendingRedirect",wo=new Map;class SS extends l_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const s=await RS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RS(t,e){const n=PS(e),s=OS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function kS(t,e){wo.set(t._key(),e)}function OS(t){return pn(t._redirectPersistence)}function PS(t){return vo(AS,t.config.apiKey,t.name)}async function NS(t,e,n=!1){const s=Sr(t),i=ES(s,e),o=await new SS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=10*60*1e3;class DS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!u_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xS&&this.cachedEventUids.clear(),this.cachedEventUids.has(mf(e))}saveEventToCache(e){this.cachedEventUids.add(mf(e)),this.lastProcessedEventTime=Date.now()}}function mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function u_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,US=/^https?/;async function BS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LS(t);for(const n of e)try{if($S(n))return}catch{}qt(t,"unauthorized-domain")}function $S(t){const e=wl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!US.test(n))return!1;if(FS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new Cr(3e4,6e4);function _f(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HS(t){return new Promise((e,n)=>{var s,i,r;function o(){_f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(Zt(t,"network-request-failed"))},timeout:jS.get()})}if(!((i=(s=en().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=en().gapi)===null||r===void 0)&&r.load)o();else{const a=wS("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},vS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function WS(t){return Eo=Eo||HS(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=new Cr(5e3,15e3),qS="__/auth/iframe",zS="emulator/auth/iframe",KS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YS(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,zS):`https://${t.config.authDomain}/${qS}`,s={apiKey:e.apiKey,appName:t.name,v:ks},i=GS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${fi(s).slice(1)}`}async function JS(t){const e=await WS(t),n=en().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:YS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{r(o)},VS.get());function c(){en().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QS=500,ZS=600,eR="_blank",tR="http://localhost";class yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nR(t,e,n,s=QS,i=ZS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},XS),{width:s.toString(),height:i.toString(),top:r,left:o}),l=et().toLowerCase();n&&(a=Wm(l)?eR:n),Hm(l)&&(e=e||tR,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(kA(l)&&a!=="_self")return sR(e||"",a),new yf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new yf(h)}function sR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="__/auth/handler",rR="emulator/auth/handler";function vf(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ks,eventId:i};if(e instanceof Xm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof Rr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${oR(t)}?${fi(a).slice(1)}`}function oR({config:t}){return t.emulator?Bu(t,rR):`https://${t.authDomain}/${iR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class aR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i_,this._completeRedirectFn=NS,this._overrideRedirectResult=kS}async _openPopup(e,n,s,i){var r;En((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=vf(e,n,s,wl(),i);return nR(e,o,Vu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),cS(vf(e,n,s,wl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(En(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await JS(e),s=new DS(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ec];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gm()||ju()||Sa()}}const cR=aR;var wf="@firebase/auth",Ef="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hR(t){dt(new rt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{W(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},u=new xA(a,c,l);return dA(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),dt(new rt("auth-internal",e=>{const n=Sr(e.getProvider("auth").getImmediate());return(s=>new lR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(wf,Ef,uR(t)),Ve(wf,Ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=5*60,fR=Tm("authIdTokenMaxAge")||dR;let If=null;const pR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fR)return;const i=n==null?void 0:n.token;If!==i&&(If=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Or(t=Lu()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hA(t,{popupRedirectResolver:cR,persistence:[_S,rS,i_]}),s=Tm("authTokenSyncURL");if(s){const r=pR(s);eS(n,r,()=>r(n.currentUser)),e_(n,o=>r(o))}const i=B0("auth");return i&&DA(n,`http://${i}`),n}hR("Browser");const gR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADDklEQVR42u2bNdAVMRCAg0OF9B1W4S4tTom70/c4He7aYX2F0+Hu7pTPc8nlyd0tmxluJsCv5/lfvpnvl9dtLtnbbPKIwWAwGAzxwqvVuZZtX6KMvylbrFhhnDMhRLVWd+qNRsP1vBIAfEZvoSfQzehwojMY8OIK50+KlDr5cgUwcMCIwXVd6AS/0P3oKKIDANDd4mJ3iVqWDFpKOYd6w4EIuIvOR7uRLMKEWFuijMmg/SfecByIgQfoeJIVKhUYRBl/4QdewA/kVI8ZFz2M9iVpwqrV2UWLCT94nPrgOC4kyDN0KEkDzqubChXq+cFXGAfP8yAFiuj0ZIMXYquc6n8HD2nC0dlJPfnNfwfPwINMYKPTY1/zctqra15O+wxRiC0nlMswsGgxW832MuFlkBdoPxI1lPGXMnBfUatBhjkUdZGzWgatFjkZx0UnRlbeqhWeVFZ4GnAvkrJZ1vZq8JRzaImzSy8nageZQ8KibGyUp6/NANwJu6Vd0s7az/oASEaSoMj9/F+Zv1rTcQD2kqD4zQxf1/VAQ34EbmPJoNWqT2OGBFn/l9QBYLYAjdkUpPJ782/lpzHHSGeR3Vt1ALB7CxpzI0ACtBp/J0AXNOYL6SzqthdVtr3avQYlOdJZZNCqiM4DUDUDYJaASYLmNWgKoU6Wwhe6UCm8MVALvFk3Q2oidLpAIvwepiHyWB0AW8+GyJ5QtzyatSWmNkWpxk3R2yQslhA7NW6Lz27mg5E7UR6NrdTsaMxBx0R9OPr83xZ5hjlAoqYI0L+kHo+jzXI8rlaHMzJ+QSKPDo77ftAGHIS/r8h4mbkiMy2pS1Jb/h4EnvZM4OgskhDqTPCUmZDmNblpJA1kTlATY5Fa4CRbIzxW1nw6lAAGVDh/pr4d7PhfkQ56AO2TpcvSy9TLFGWLKbfEI+WOUuRkD0uI7eoGijIeVT/xNjqb6IJt2wso54/87nLJskAuDadzTZXv6F50BNEZmSypbZ+jjL/CpVGoMM7+fGWm8ecrMzKTf0RvoMfRjegQYjAYDAZDrPwGYN0Z09kBMMEAAAAASUVORK5CYII=",h_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABiUlEQVR42u2UA6wcURhGi1jYhkWsmhEa1bZtx1VYxNiwtm3bFp5tYW1+779r4c7sneeTnEX0nWGPdgWAPuRy8mDge4FMZ5FDpY4vIE0Qyx9yDM94P9IGZbCkjQAwE8mxI3N+c5z+pHyDGAbLDfiMGFx2N2pzNKjN1fh+M5rLDaj80wiL1o4kzBISUF+gxeVtr3FiyWOm7/fDA19D/08tf4I/d4uRgAUZB7CjvbT1FRtKa/W/JvEBdXkarnHmpzM54gOaSvXcAd8u54sP8Li9uL33Y9rxUyueQlNuFB/AMNRbcGXHm6TjJ5c9QeG7ahDKBDAsOjtu7vqQ8MhLv9aBkBwwRUoAw2pwRF2OM6ufoepvIwhZASpSKyWA4bA48WD/V5zf8ML3fiDkBIQixpK/STdvgA8v4HZ6QMgOSBd2HWLoDugOUJMLAo4ne0oLEM/4tg5YwBvQHXAYyjCXN2AZlGEQb0Bv8gfE8p7sJeVdoCLvkF5B4wPkvpRGkftJtUQPkPPIQb4jb0+0AA6IUFYCjBVUAAAAAElFTkSuQmCC",d_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB/0lEQVR42u1WA8ycQRDd2rb14ZKfu3v37X61HdW2FdcMGzaoohpx6rBuWNu2bb6p3U/pz5e842Tn3cybuWW5IFhCnwff/8TX4GKWUWjatGl+U+jDptQqIyszDwLGsYwCKjAAIpazjIKRlkiypD7JMhB5UYEHMccpl5E+2GJI1TrjBEg92+R66mc/vI+It2zhNPdmRK46I/naiKs61LO56yUSNRB8nQGG0a4QA8K+NoWaY0k10Y/iq5+FHGCfEfL1UUNq4WcfrKVWRFL+NLcaBNymCWNeQSYkM0bRBpu7g1D+VcwPaAxpHCMo/QFwNTwwkPlB7fSmpS2hH7KuXfNFsNhukp+C7IOTtJrDtCEmlLSkeyTo7C6n0oVpA5JPohFkQUB/yzDjfBYQdZSqBCGnLeE08nM7Ov+1jEJpvN9j8wZVbaFS4eSGpnQ6mNLtZUs90uZ6Ak0KhC4gl1vC3YD4neAh8AL4CJzMgsKIuxwHvMTB1z4eyvUucCMlg6CFlJy2G4khUaZwO9KvJbGxdF07KSmpIAsDSogZHvz/LqU/toFiHiclNS2ekfeCTRZXs2o3bVo4YwTQDqeeC/086D2A7hThhcRVexjuMpFeB4gLBzrQjusGNIaW0JeCxIWcBtWXATRi/xJAyb/GeQEZDMEHPUwG8RI80e6vLUDMv+Jy8QFZsg9c5MuepAAAAABJRU5ErkJggg==",mR={setup(){const t=cn(),e=Tr();let n=ut("");return{productStore:t,search:n,onSearch:r=>{r.preventDefault(),n.value?t.searchProduct({search:n.value}):t.resetFilterProducts(),e.push("/")},handleLogout:async()=>{const r=Or();try{await tS(r),e.push("/login")}catch(o){console.log(o)}}}}},_R={class:"z-10 sticky top-0 bg-purple-600 h-12 p-2.5 flex"},yR={key:0,class:"mr-1 text-2xl"},vR={class:"flex flex-grow"},wR=E("img",{src:h_,class:""},null,-1),ER=E("img",{src:d_,class:""},null,-1);function IR(t,e,n,s,i,r){const o=ke("router-link");return z(),ne("div",_R,[s.productStore.windowWidth<=643?(z(),ne("img",{key:0,src:gR,class:"cursor-pointer active:text-purple-500",onClick:e[0]||(e[0]=a=>s.productStore.toggleSideBar())})):dn("",!0),de(o,{to:"/"},{default:Bn(()=>[s.productStore.windowWidth>643?(z(),ne("p",yR,"eshop")):dn("",!0)]),_:1}),E("div",vR,[gs(E("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.search=a),type:"text",class:"w-4/5 sm:w-96 md:w-3/4 outline-none rounded"},null,512),[[_s,s.search]]),E("input",{type:"image",alt:"submit",src:"https://img.icons8.com/color/28/000000/search--v2.png",onClick:e[2]||(e[2]=a=>s.onSearch(a))})]),s.productStore.windowWidth>643?(z(),rn(o,{key:1,class:"mr-3",to:"/wishlist"},{default:Bn(()=>[wR]),_:1})):dn("",!0),s.productStore.windowWidth>643?(z(),rn(o,{key:2,class:"mr-3",to:"/cart"},{default:Bn(()=>[ER]),_:1})):dn("",!0),E("button",{class:"border px-2 rounded-md active:bg-white",onClick:e[3]||(e[3]=(...a)=>s.handleLogout&&s.handleLogout(...a))},"Log out")])}const Oa=ot(mR,[["render",IR]]),bR={setup(){const t=cn();let e=Wt(new Set);t.productInfo.forEach(a=>e.add(a.category));let n=ut([]);Er(async()=>{n.value=[...e]});let s=Wt({category:"",minprice:"",maxprice:""});return{filterProduct:s,resetFilters:()=>{s.category&&(document.getElementById(s.category).checked=!1),Object.assign(s,{category:"",minprice:"",maxprice:""}),t.resetFilterProducts()},filter:a=>{if(a.preventDefault(),a.stopPropagation(),s.minprice&&s.maxprice&&s.minprice>s.maxprice){s.minprice="",s.maxprice="";return}t.searchProduct(s)},productCategories:n,setFilterProduct:a=>{Object.assign(s,a)}}}},TR={class:"w-full overflow-y-auto"},CR={class:"flex justify-between items-center text-2xl my-2"},AR=E("h2",null,"Filters",-1),SR=E("dt",{class:"text-2xl my-2"},"Category",-1),RR=["onClick","id","value"],kR=["htmlFor"],OR=E("div",{class:"text-2xl my-2"},"Price",-1),PR={class:"flex justify-around flex-col md:flex-row"},NR={class:"flex justify-around"};function xR(t,e,n,s,i,r){return z(),ne("form",TR,[E("div",CR,[AR,E("p",{class:"reset-filter cursor-pointer active:text-purple-500",onClick:e[0]||(e[0]=o=>s.resetFilters())},"Clear All")]),E("dl",null,[SR,(z(!0),ne(st,null,pa(s.productCategories,(o,a)=>(z(),ne("dd",{class:"text-xl my-0.5 pl-8",key:a},[E("input",{onClick:c=>s.setFilterProduct({...s.filterProduct,category:o}),type:"radio",id:o,name:"select_category",value:o,class:"mr-1"},null,8,RR),E("label",{htmlFor:o},Re(o),9,kR)]))),128))]),OR,E("div",PR,[gs(E("input",{placeholder:"Min",name:"min-price",class:"w-1/2 md:1/5 outline-none text-center text-black",type:"number",min:"1","onUpdate:modelValue":e[1]||(e[1]=o=>s.filterProduct.minprice=o)},null,512),[[_s,s.filterProduct.minprice]]),gs(E("input",{placeholder:"Max",name:"max-price",class:"w-1/2 md:1/5 outline-none text-center text-black",type:"number",min:"1","onUpdate:modelValue":e[2]||(e[2]=o=>s.filterProduct.maxprice=o)},null,512),[[_s,s.filterProduct.maxprice]])]),E("div",NR,[E("button",{type:"submit",onClick:e[3]||(e[3]=o=>s.filter(o)),class:"absolute bottom-8 bg-white text-purple-600 border-none rounded-lg h-8 w-40 text-xl"}," Apply ")])])}const f_=ot(bR,[["render",xR]]),DR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAI5UlEQVR4nO2ba2wU1xXHf3f24fcjNksDJqg8kqpgGuy1obSF4kBa9UsDBEgrBYEimhQIqiKlHzBq2UgNoH4hgpA2oLQJapXGPAqpVFWQYAhNotjGBmygDRgCIk7I2tj4ud7dmdsPu+PZxbPrtXfWuIr/n+Zx5t5z/nPuuefeOQPjGMc4xvE1hhjNzvaUeCdj4xE0OQ1BtoBMAAm9SLqlTVxTNT594azri9HSKaUE/OHR1qKAQ1suNBYjWAS4EnzUi+QDAdVSir9vbnC1pEpHywmoWiVtt5u9K6UifiGkrACUJJtUpRCnFE3umzjDdXj1QaFaoacOywjwIJWCMu86IakEZpjJpOUK8qfayZ9qIy1HYE8PdR/sk/R3aXTcVGm/oeLvlrG6uYpke1u96y0PQrNCb0sI2FveWq6q2l4hKI9qXIEpZU5mPOZkcqmTgum2oRuT0HY1yK26AM0n+2k5F4BBfMgaNGXT5gZXXbK6J0WAB6kUulu3gtwGDFiXniuY81QGxSsyyHIlNwI6W1SaDvloOtSHvzeKiSACT1uda0cy3jBiAnbNbc+3K8GDCLlUv2ZzCtzrMih5OhNHprXhpb9TUvenHs7/rQ8tGHXrRFB1rH7h3AMdI2l3RFruKfFORpH/Aubo1ybNdbB0Ww55DyXg5kmgrTnI+y918dUlgwUJF4QmfjKS2WLYBISN/zcwTW/BvTaT+RuyUFJr+wDUAHy0u5vzb/dFXr6OJn4wXBKGRcDr7jt5foKngLkQCnKLt+Qwe3n6cJqxDJff9VH9cheaMTE22fzORRsb89sTbSPhCOVBKv1CPUyE8T/ennvfjAf49k/T+dHLuQjDimLV6X/Hg0zYroQFC92tW4WUS/TzhS9mM3NpWsLKpgozl6axZFtOpC8/XuD2Vib6fEJDYHdZ6zwhtQ8BO0DJmky+/6us4eqaUny0u4f6A736qaooyoJNtRNqh3puSA/wIBWBtpew8d+YbWfBprFlPMB3N2Yx6TsO/dSmqtreRIbCkAIFZd51SMoAFDssfSkXxZ6csqmAYoclnhxszpBTC0F5Yal37ZDPxbtZtUrawrk9AI/+PJMHvjlKc90IkD/VRsnTGcYFQWXVKhlX4bgE3G72riS8sHFmCsqeybRAzdSidG0maTkDoW1m2IaYiD8EBL/UD2c/mRHZ8JiFM0swZ1WEFyDWx5OPScDu+W1TgEWhNmDOyvs33w8XxSszjNxAyIo9Jd7JsWRjEiCC6pP6/QfnOMgtGrtj/15kT1QochszghByeSzZOENALNaPZlQ4k1Lo9sUgRzd0ULOvx2RtHwEJNft6ObqhI2qxMxJMrzCSNAkVseRMCZBIAXKhfl7kTo6Aj1/t5lZtgJp9vZza0WVOgoRTO7qo2dfDrdoAH7/ak1SfER4AgkUhmwbDlIDd7vaHgEIAe7pgwreSm/iLSg0Cm474BpMQNr7piG/g0qS5EQaMAIXT7ZFB2/WKu/VBMzlTAmya/2H9OH+qLellbvn6TOasNiJz0xEfJ3/XhdQACad/3x1l/Kxl6ZSvT3LKFSHddTg0+bCZmPmrVWzT9FeUN8WC4Cfgh7/OBqCxKrSGv3QsZLDiEDQdMtb1s5alU1GZE7nCGzHyHrJx+2I4lihMAz64V8aUAA3ydOdJz7No7o9Dgg4rjQdIzzUakpBrJmPalZBk68eODAuTnzAJkcNBx6wnrDUewJFl6C4wbIqEOQEiIkSlIvkz28ONNz2mEKYEaDAwBwX6LNQsHPAaD/UNunUpvL0lLfncEUKgx9BdE3SZycTwADmwxezrsIgA3fiDEQHvifSovP3SMWtJ8HUaDSnSnADTIChU7TOphLi5e8uCT3FmxusBTwBicGCs2Jp8POi4GaG7xnUzGXMPsDs+jWxES5KDmv09UcYXr0jnMd3AcGAsXmEsti4d81H3Rq9JS4lDatBxw1A8oIgrZnKmBGysLbgloRUg6JO0/je5vLzlnPF88Yp0Fm/JiQ6uIrS9HklCS0MgqT7brgbxGzHAG6vmwNwDEFLAGf3887P+pJT53vNZTJnnZP5zWYONNzpl8ZYc5j0bkl3wfHL7jrfqDAIFnI4lFy/JrwaWAzRX+ylZM/LUdOIsO8teyxtaUMC8Z63ZdWo+2T9wLJHVseRihxlNHCY8Y3/ZGKCzxdK6hJSis0Xli/MDHqCiKUdjycYkYHODq2XAdSQ0HvTFEh1zaKzqMxIrKarjfS+MP9FI/qgfXjzSR3/XfUrXhgHfXS1qZSmQ++PJxyVg4gzXYeAqgL9HcvbPyU1No4HaN3oJGIUUV8I2xERcAlYfFCqS7fr5+bd7o5OLMYa2q0Ea3zHyDSnZPlRR1ZC5Vlu96y0Qn0Dou/yJ33TeW6ExJqD6Je95Ij6VC+ru1LsODPVcAt8GhaYoYjMQhNAG5yevJ7dflwp8+EoP3v8MvJkgqtiQSO1QQtn2ptoJtQg8+vnZN3u5/O7YmRWajvi4UBXl+tsSrSBLeLnRVufaAZwI9QDV27v47ExyGaIVuPpeP6d3Ri30jt+pd+1M9PlhVIgITdptK4EGAC0I/3zxLpfuoydc/oeP41s7I5fPTTa/82fDKZsbaZHUGWC63kL5M5nMey7L0u2seNCCoW8NDX+J2li5hiYWprRISodZmdzkUgdLfptjzS5yHLTfUHnf08WXjcZiZ1TL5HTsmtueb7cFqoDH9Ws2p6B0bQala6wvlPR3S86+2cu5v/aiRq+UjwdVx1OjWiipw4NUCtzeSgEezEpll2eQNTG5cdH9lUbToT4uVPXdW0QdlJJtd+pdO+9LqWwk9pR4y6SQr5kVSxe5HUyvSKPI7aBwun3oHiW0XQvyuV4s3RAw2SMcI8XSkfAglcJS71oElcBMM5m0HEH+VFu4XF7BnhFdLt9+Q6XjZtxy+StSsv1OvevAmCqXj0QqfphAimqB3D+mf5gww54S72Qh5HIJFcP9ZUbAaYmsRlOO/l/9MhMPu9zeSTaFR1DlNBSyFUkWgCboQaMbm7g+2j9NjWMc4xjH1xr/A2KoYr8WEmr8AAAAAElFTkSuQmCC",MR={components:{FilterProducts:f_},setup(){const t=cn(),e=Tr();function n(s){t.toggleSideBar(),e.push(s)}return Er(async()=>{t.windowWidth>645&&t.openSideBar&&t.toggleSideBar()}),{productStore:t,beforeRoute:n}}},LR={key:0,class:"w-screen h-screen z-50 bg-grey fixed top-0"},FR={class:"z-50 fixed transition duration-700 ease-in top-0 p-5 flex flex-col h-screen w-screen max-w-sm bg-purple-600 text-white"},UR=E("hr",null,null,-1),BR=E("img",{class:"w-1/6 h-10 mr-1",src:h_},null,-1),$R=E("p",{class:"font-bold text-2xl"},"Wishlist",-1),jR=[BR,$R],HR=E("img",{class:"w-1/6 h-10 mr-1",src:d_},null,-1),WR=E("p",{class:"font-bold text-2xl"},"Cart",-1),VR=[HR,WR];function qR(t,e,n,s,i,r){const o=ke("FilterProducts");return z(),rn(YE,{to:"body"},[s.productStore.openSideBar?(z(),ne("div",LR,[E("div",FR,[E("p",{class:"font-bold text-7xl mb-4 cursor-pointer",onClick:e[0]||(e[0]=()=>s.beforeRoute("/"))}," eshop "),UR,E("div",{class:"flex items-center p-2 cursor-pointer my-1 hover:bg-purple-500",onClick:e[1]||(e[1]=()=>s.beforeRoute("/wishlist"))},jR),E("div",{class:"flex items-center p-2 my-1 cursor-pointer hover:bg-purple-500",onClick:e[2]||(e[2]=()=>s.beforeRoute("/cart"))},VR),E("img",{src:DR,class:"absolute top-2 right-2 cursor-pointer",onClick:e[3]||(e[3]=a=>s.productStore.toggleSideBar())}),de(o)])])):dn("",!0)])}const Pa=ot(MR,[["render",qR]]),zR={},KR={class:"h-screen w-screen flex justify-center items-center text-3xl"};function GR(t,e){return z(),ne("div",KR," Loading... ")}const p_=ot(zR,[["render",GR]]),YR={components:{ProductList:P0,NavBar:Oa,SideBar:Pa,FilterProducts:f_,Loader:p_},setup(){return{productStore:cn()}}},JR={key:0,class:"h-screen w-screen"},XR={key:0,class:"flex absolute top-12 bottom-0 w-full"},QR={class:"p-5 flex flex-col bg-purple-600 text-white w-2/5 md:w-1/3 lg:w-1/4"},ZR={class:"w-3/5 md:w-2/3 lg:w-3/4 overflow-y-auto"};function ek(t,e,n,s,i,r){const o=ke("nav-bar"),a=ke("FilterProducts"),c=ke("product-list"),l=ke("ProductList"),u=ke("side-bar"),h=ke("Loader");return s.productStore.productInfo.length?(z(),ne("div",JR,[de(o),s.productStore.windowWidth>643?(z(),ne("div",XR,[E("div",QR,[de(a)]),E("div",ZR,[de(c)])])):(z(),rn(l,{key:1})),de(u)])):(z(),rn(h,{key:1}))}const tk=ot(YR,[["render",ek]]),nk={setup(){return{productStore:cn()}}},sk={key:0,class:"w-5/6 md:w-3/4 my-0 mx-auto overflow-y-auto h-auto"},ik=E("h3",null,"My Wishlist",-1),rk=["src"],ok={class:"flex flex-col w-2/4"},ak={class:"truncate w-6/7"},ck={class:"flex"},lk={class:"m-1",style:{width:"25px",height:"20px",backgroundColor:"#388e3c",color:"white"}},uk={class:"m-1"},hk={class:"m-1"},dk=["onClick"],fk={key:1,class:"flex justify-center items-center h-5/6"},pk=E("img",{src:"https://img.icons8.com/ios/100/000000/wish-list.png",alt:"No Wishlist yet"},null,-1),gk=[pk];function mk(t,e,n,s,i,r){return s.productStore.favProducts.length?(z(),ne("div",sk,[ik,(z(!0),ne(st,null,pa(s.productStore.favProducts,(o,a)=>(z(),ne("div",{class:"flex justify-around items-center w-full md:w-3/4 h-48 shadow-md p-2.5 m-2.5 mx-auto",key:a},[E("img",{src:o.image,class:"h-full w-1/4 md:w-1/6 mr-1",alt:"product"},null,8,rk),E("div",ok,[E("h3",ak,Re(o.title),1),E("div",ck,[E("p",lk,Re(o.rating.rate),1),E("p",uk,"("+Re(o.rating.count)+")",1)]),E("h3",hk,"₹"+Re(o.price),1)]),E("img",{src:"https://img.icons8.com/small/16/000000/filled-trash.png",height:"20px",alt:"delete",onClick:c=>s.productStore.remToFav(o),class:"cursor-pointer"},null,8,dk)]))),128))])):(z(),ne("div",fk,gk))}const _k=ot(nk,[["render",mk]]),yk={components:{NavBar:Oa,UserWishlist:_k,SideBar:Pa}},vk={class:"h-screen"};function wk(t,e,n,s,i,r){const o=ke("NavBar"),a=ke("UserWishlist"),c=ke("SideBar");return z(),ne("div",vk,[de(o),de(a),de(c)])}const Ek=ot(yk,[["render",wk]]),Ik={setup(){const t=cn();let e=ut(0);return Er(async()=>{var n;e.value=(n=t.cartProducts)==null?void 0:n.reduce((s,i)=>s+(i.count?i.count:1)*i.price,0).toFixed(2)}),{productStore:t,totalPrice:e}}},bk={key:0,class:"flex w-screen flex-col md:flex-row overflow-y-auto justify-center items-center md:items-start"},Tk={class:"w-4/5 sm:w-3/5 md:w-2/5 mr-2.5"},Ck=["src"],Ak={class:"flex flex-col w-2/4"},Sk={class:"truncate w-6/7"},Rk={class:"flex"},kk={class:"m-1 w-6 h-5 bg-green-700 text-white text-center"},Ok={class:"m-1"},Pk={class:"flex justify-between"},Nk={class:"m-1"},xk={class:"flex"},Dk=["disabled","onClick"],Mk=["value"],Lk=["disabled","onClick"],Fk=["onClick"],Uk={class:"w-4/5 sm:w-3/5 md:w-1/5 border-2 p-2.5 shadow-md"},Bk=E("p",{class:"my-1"},"Price Details",-1),$k={class:"flex my-1 justify-between"},jk=E("hr",{class:"border border-gray-300"},null,-1),Hk={class:"flex my-1 justify-between"},Wk=E("p",null,"Total",-1),Vk={key:1,class:"flex justify-center items-center h-5/6"},qk=E("img",{src:"https://img.icons8.com/ios/200/000000/empty-box.png",alt:"empty cart",class:"h-40"},null,-1),zk=[qk];function Kk(t,e,n,s,i,r){return s.productStore.cartProducts.length?(z(),ne("div",bk,[E("div",Tk,[(z(!0),ne(st,null,pa(s.productStore.cartProducts,(o,a)=>(z(),ne("div",{class:"flex justify-around items-center h-1/5 shadow-md p-2.5 mb-2.5",key:a},[E("img",{src:o.image,class:"h-6/7 md:h-1/2 w-1/4 md:w-1/5 mr-1",alt:"product"},null,8,Ck),E("div",Ak,[E("h3",Sk,Re(o.title),1),E("div",Rk,[E("p",kk,Re(o.rating.rate),1),E("p",Ok,"("+Re(o.rating.count)+")",1)]),E("div",Pk,[E("h3",Nk,"₹"+Re(o.price),1),E("div",xk,[E("button",{disabled:o.count<=1,onClick:()=>s.productStore.decCountToCart(a)}," - ",8,Dk),E("input",{type:"text",class:"outline-none mx-2 w-10 h-8 text-center",value:o.count?o.count:1,readOnly:""},null,8,Mk),E("button",{disabled:o.count>=5,onClick:()=>s.productStore.incCountToCart(a)}," + ",8,Lk)])])]),E("img",{src:"https://img.icons8.com/small/16/000000/filled-trash.png",height:"20px",alt:"delete",onClick:c=>s.productStore.remToCart(o),class:"cursor-pointer"},null,8,Fk)]))),128))]),E("div",Uk,[Bk,E("div",$k,[E("p",null,"Price("+Re(s.productStore.cartProducts.length)+" items)",1),E("p",null,"₹"+Re(s.totalPrice),1)]),jk,E("div",Hk,[Wk,E("p",null,"₹"+Re(s.totalPrice),1)])])])):(z(),ne("div",Vk,zk))}const Gk=ot(Ik,[["render",Kk]]),Yk={components:{NavBar:Oa,UserCart:Gk,SideBar:Pa}},Jk={class:"h-screen"};function Xk(t,e,n,s,i,r){const o=ke("NavBar"),a=ke("UserCart"),c=ke("SideBar");return z(),ne("div",Jk,[de(o),de(a),de(c)])}const Qk=ot(Yk,[["render",Xk]]),Zk={setup(){const t=cn(),e=p0(),n=Tr();let s=ut({});return Er(async()=>{s.value=t.productInfo.filter(r=>r.id===parseInt(e.params.productId))[0]}),{productStore:t,addProdToCart:()=>{t.addToCart(s.value),n.push("/cart")},product:s}}},eO={class:"flex flex-col sm:flex-row my-0 mx-auto items-center w-5/6"},tO={class:"flex flex-col items-center sm:mr-4"},nO=["src"],sO=E("button",{class:"p-2.5 my-2 w-3/4 rounded-md shadow-lg border-none bg-orange-400 text-white cursor-pointer"}," Go to Cart ",-1),iO={class:"product-desc"},rO={class:"my-2 text-xl"},oO={class:"flex my-2 text-2xl"},aO={class:"text-white bg-green-700 w-10 text-center"},cO={class:"text-2xl"};function lO(t,e,n,s,i,r){const o=ke("router-link");return z(),ne("div",eO,[E("div",tO,[(z(),ne("div",{key:s.product.id,class:Qs(["product-image-card flex justify-center items-center h-70 sm:h-72 sm:w-40",s.productStore.windowWidth>400?"w-40":"w-3/4"])},[E("img",{alt:"Not found",src:s.product.image},null,8,nO)],2)),s.productStore.cartProducts.some(a=>a.id===s.product.id)?(z(),rn(o,{key:0,to:"/cart"},{default:Bn(()=>[sO]),_:1})):(z(),ne("button",{key:1,class:"p-2.5 my-2 w-3/4 rounded-md shadow-lg border-none bg-orange-400 text-white cursor-pointer",onClick:e[0]||(e[0]=(...a)=>s.addProdToCart&&s.addProdToCart(...a))}," Add to Cart "))]),E("div",iO,[E("h3",rO,Re(s.product.title),1),E("div",oO,[E("p",aO,Re(s.product.rating.rate),1),ms(" ("+Re(s.product.rating.count)+") ",1)]),E("h3",cO,"₹"+Re(s.product.price),1),E("p",null,Re(s.product.description),1)])])}const uO=ot(Zk,[["render",lO]]),hO={components:{UserProduct:uO,NavBar:Oa,SideBar:Pa,Loader:p_},setup(){return{productStore:cn()}}},dO={key:0,class:"h-screen"};function fO(t,e,n,s,i,r){const o=ke("NavBar"),a=ke("UserProduct"),c=ke("SideBar"),l=ke("Loader");return s.productStore.productInfo.length?(z(),ne("div",dO,[de(o),de(a),de(c)])):(z(),rn(l,{key:1}))}const pO=ot(hO,[["render",fO]]);const gO={setup(){const t=Tr(),e=Wt({email:"",password:"",error:""});async function n(){try{const s=Or();await XA(s,e.email,e.password),e.error="",await ZA(s.currentUser),t.push("/")}catch(s){e.error=s.message}}return{formFields:e,signUp:n}}},Na=t=>(mg("data-v-9d3215f9"),t=t(),_g(),t),mO={class:"signup bg-color signup-page"},_O={class:"form-container"},yO=Na(()=>E("h2",null,"Sign Up",-1)),vO={class:"form-group"},wO=Na(()=>E("label",{for:"email"},"Email",-1)),EO={class:"form-group"},IO=Na(()=>E("label",{for:"password"},"Password",-1)),bO=Na(()=>E("button",{type:"submit",class:"border border-black"},"Sign Up",-1)),TO={key:0,class:"text-red-500"},CO={class:"text-gray-500"},AO={class:"text-purple-600"};function SO(t,e,n,s,i,r){const o=ke("RouterLink");return z(),ne("div",mO,[E("div",_O,[yO,E("form",{onSubmit:e[2]||(e[2]=Bg((...a)=>s.signUp&&s.signUp(...a),["prevent"]))},[E("div",vO,[wO,gs(E("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=a=>s.formFields.email=a),required:"",class:"border border-black"},null,512),[[_s,s.formFields.email]])]),E("div",EO,[IO,gs(E("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=a=>s.formFields.password=a),required:"",class:"border border-black"},null,512),[[_s,s.formFields.password]])]),bO,s.formFields.error?(z(),ne("p",TO,Re(s.formFields.error),1)):dn("",!0),E("p",CO,[ms("Already had a acoount "),E("span",AO,[de(o,{to:{name:"Signin"}},{default:Bn(()=>[ms(" Sign In")]),_:1})])])],32)])])}const RO=ot(gO,[["render",SO],["__scopeId","data-v-9d3215f9"]]);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=new Map,OO={activated:!1,tokenObservers:[]};function on(t){return kO.get(t)||Object.assign({},OO)}const bf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new or,await NO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new or,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function NO(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Lo=new Kn("appCheck","AppCheck",xO);function DO(t){if(!on(t).activated)throw Lo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="firebase-app-check-database",LO=1,Il="firebase-app-check-store";let Zr=null;function FO(){return Zr||(Zr=new Promise((t,e)=>{try{const n=indexedDB.open(MO,LO);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Lo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Il,{keyPath:"compositeKey"})}}}catch(n){e(Lo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Zr)}function UO(t,e){return BO($O(t),e)}async function BO(t,e){const s=(await FO()).transaction(Il,"readwrite"),r=s.objectStore(Il).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Lo.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function $O(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new pi("@firebase/app-check");function Tf(t,e){return Du()?UO(t,e).catch(n=>{bl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO={error:"UNKNOWN_ERROR"};function HO(t){return Ca.encodeString(JSON.stringify(t),!1)}async function Tl(t,e=!1){const n=t.app;DO(n);const s=on(n);let i=s.token,r;if(i&&!Li(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Li(c)?i=c:await Tf(n,void 0))}if(!e&&i&&Li(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await on(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?bl.warn(c.message):bl.error(c),r=c}let a;return i?r?Li(i)?a={token:i.token,internalError:r}:a=Af(r):(a={token:i.token},s.token=i,await Tf(n,i)):a=Af(r),o&&qO(n,a),a}function WO(t,e,n,s){const{app:i}=t,r=on(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Li(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Cf(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Cf(t))}function g_(t,e){const n=on(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Cf(t){const{app:e}=t,n=on(e);let s=n.tokenRefresher;s||(s=VO(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function VO(t){const{app:e}=t;return new PO(async()=>{const n=on(e);let s;if(n.token?s=await Tl(t,!0):s=await Tl(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=on(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},bf.RETRIAL_MIN_WAIT,bf.RETRIAL_MAX_WAIT)}function qO(t,e){const n=on(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Li(t){return t.expireTimeMillis-Date.now()>0}function Af(t){return{token:HO(jO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=on(this.app);for(const n of e)g_(this.app,n.next);return Promise.resolve()}}function KO(t,e){return new zO(t,e)}function GO(t){return{getToken:e=>Tl(t,e),addTokenListener:e=>WO(t,"INTERNAL",e),removeTokenListener:e=>g_(t.app,e)}}const YO="@firebase/app-check",JO="0.6.3",XO="app-check",Sf="app-check-internal";function QO(){dt(new rt(XO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return KO(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Sf).initialize()})),dt(new rt(Sf,t=>{const e=t.getProvider("app-check").getImmediate();return GO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ve(YO,JO)}QO();var ZO="firebase",eP="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(ZO,eP,"app");const m_=Symbol("firebaseApp");function __(t){return Iu()&&wt(m_,null)||Lu(t)}const tP=typeof window<"u",eo=new WeakMap;function nP(t,e){if(!eo.has(t)){const n=ru(!0);eo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),eo.delete(t)}}return eo.get(t)}const sP=new WeakMap,to=new WeakMap;function y_(t){const e=__(t);if(!to.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{to.set(e,r),n(r.value)}];to.set(e,i)}return to.get(e)}function iP(t){const e=y_(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function rP(t,e){const n=Or(e);e_(n,s=>{const i=y_();t.value=s,Array.isArray(i)&&i[1](t)})}const Rf="@firebase/database",kf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v_="";function oP(t){v_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ar(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aP(e)}}catch{}return new cP},os=w_("localStorage"),Cl=w_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new pi("@firebase/database"),lP=function(){let t=1;return function(){return t++}}(),E_=function(t){const e=Z0(t),n=new G0;n.update(e);const s=n.digest();return Ca.encodeByteArray(s)},Pr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pr.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let fs=null,Of=!0;const uP=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ys.logLevel=pe.VERBOSE,fs=Ys.log.bind(Ys),e&&Cl.set("logging_enabled",!0)):typeof t=="function"?fs=t:(fs=null,Cl.remove("logging_enabled"))},Ke=function(...t){if(Of===!0&&(Of=!1,fs===null&&Cl.get("logging_enabled")===!0&&uP(!0)),fs){const e=Pr.apply(null,t);fs(e)}},Nr=function(t){return function(...e){Ke(t,...e)}},Al=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pr(...t);Ys.error(e)},Is=function(...t){const e=`FIREBASE FATAL ERROR: ${Pr(...t)}`;throw Ys.error(e),new Error(e)},Et=function(...t){const e="FIREBASE WARNING: "+Pr(...t);Ys.warn(e)},hP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},I_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",bs="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===oi||e===bs)return-1;if(e===oi||t===bs)return 1;{const n=Pf(t),s=Pf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},fP=function(t,e){return t===e?0:t<e?-1:1},Ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},zu=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=We(e[s]),n+=":",n+=zu(t[e[s]]);return n+="}",n},b_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const T_=function(t){N(!I_(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},pP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},mP=new RegExp("^-?(0*)\\d{1,10}$"),_P=-2147483648,yP=2147483647,Pf=function(t){if(mP.test(t)){const e=Number(t);if(e>=_P&&e<=yP)return e}return null},xr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Et("Exception was thrown by user callback.",n),e},Math.floor(0))}},vP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Et(e)}}class Sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="5",C_="v",A_="s",S_="r",R_="f",k_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,O_="ls",P_="p",Rl="ac",N_="websocket",x_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function D_(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let s;if(e===N_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bP(t)&&(n.ns=t.namespace);const i=[];return Rt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return x0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={},bc={};function Gu(t){const e=t.toString();return Ic[e]||(Ic[e]=new TP),Ic[e]}function CP(t,e){const n=t.toString();return bc[n]||(bc[n]=e()),bc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="start",SP="close",RP="pLPCommand",kP="pRTLPCB",M_="id",L_="pw",F_="ser",OP="cb",PP="seg",NP="ts",xP="d",DP="dframe",U_=1870,B_=30,MP=U_-B_,LP=25e3,FP=3e4;class $s{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nr(e),this.stats_=Gu(n),this.urlFn=c=>(this.appCheckToken&&(c[Rl]=this.appCheckToken),D_(n,x_,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FP)),dP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yu((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nf)this.id=a,this.password=c;else if(o===SP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Nf]="t",s[F_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[OP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[C_]=Ku,this.transportSessionId&&(s[A_]=this.transportSessionId),this.lastSessionId&&(s[O_]=this.lastSessionId),this.applicationId&&(s[P_]=this.applicationId),this.appCheckToken&&(s[Rl]=this.appCheckToken),typeof location<"u"&&location.hostname&&k_.test(location.hostname)&&(s[S_]=R_);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$s.forceAllow_=!0}static forceDisallow(){$s.forceDisallow_=!0}static isAvailable(){return $s.forceAllow_?!0:!$s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pP()&&!gP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Em(n),i=b_(s,MP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[DP]="t",s[M_]=e,s[L_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lP(),window[RP+this.uniqueCallbackIdentifier]=e,window[kP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[M_]=this.myID,e[L_]=this.myPW,e[F_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+B_+s.length<=U_;){const o=this.pendingSegs.shift();s=s+"&"+PP+i+"="+o.seg+"&"+NP+i+"="+o.ts+"&"+xP+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(LP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=16384,BP=45e3;let Fo=null;typeof MozWebSocket<"u"?Fo=MozWebSocket:typeof WebSocket<"u"&&(Fo=WebSocket);class Lt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nr(this.connId),this.stats_=Gu(n),this.connURL=Lt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[C_]=Ku,typeof location<"u"&&location.hostname&&k_.test(location.hostname)&&(o[S_]=R_),n&&(o[A_]=n),s&&(o[O_]=s),i&&(o[Rl]=i),r&&(o[P_]=r),D_(e,N_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,os.set("previous_websocket_failure",!0);try{let s;Sm(),this.mySock=new Fo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fo!==null&&!Lt.forceDisallow_}static previouslyFailed(){return os.isInMemoryStorage||os.get("previous_websocket_failure")===!0}markConnectionHealthy(){os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ar(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=b_(n,UP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$s,Lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Lt&&Lt.isAvailable();let s=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||Et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Lt];else{const i=this.transports_=[];for(const r of fr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=6e4,jP=5e3,HP=10*1024,WP=100*1024,Tc="t",xf="d",VP="s",Df="r",qP="e",Mf="o",Lf="a",Ff="n",Uf="p",zP="h";class KP{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nr("c:"+this.id+":"),this.transportManager_=new fr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tc in e){const n=e[Tc];n===Lf?this.upgradeIfSecondaryHealthy_():n===Df?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ri("t",e),s=Ri("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ff,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ri("t",e),s=Ri("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ri(Tc,e);if(xf in e){const s=e[xf];if(n===zP){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ff){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VP?this.onConnectionShutdown_(s):n===Df?this.onReset_(s):n===qP?Al("Server Error: "+s):n===Mf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Al("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ku!==s&&Et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($P))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends j_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Uo}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=32,$f=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Te("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function zn(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function H_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function W_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function V_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function je(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Te(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Ct(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Ct(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function q_(t,e){if(zn(t)!==zn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ut(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(zn(t)>zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class YP{constructor(e,n){this.errorPrefix_=n,this.parts_=W_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Aa(this.parts_[s]);z_(this)}}function JP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Aa(e),z_(t)}function XP(t){const e=t.parts_.pop();t.byteLength_-=Aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function z_(t){if(t.byteLength_>$f)throw new Error(t.errorPrefix_+"has a key path longer than "+$f+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bf+") or object contains a cycle "+ts(t))}function ts(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends j_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ju}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,QP=60*5*1e3,jf=30*1e3,ZP=1.3,eN=3e4,tN="server_kill",Hf=3;class vn extends $_{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=vn.nextPersistentConnectionId_++,this.log_=Nr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=QP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Sm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ju.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(We(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new or,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;vn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const s=ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=z0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Al("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eN&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ZP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new KP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Et(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(tN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Et(h),c())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pl(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>zu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hf&&(this.reconnectDelay_=jf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+v_.replace(/\./g,"-")]=1,xu()?e["framework.cordova"]=1:Am()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uo.getInstance().currentlyOnline();return pl(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(oi,e),i=new oe(oi,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class K_ extends xa{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(bs,no)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,no)}toString(){return".key"}}const Js=new K_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Be.RED,this.left=i??ht.EMPTY_NODE,this.right=r??ht.EMPTY_NODE}copy(e,n,s,i,r){return new Be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class nN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new nN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t,e){return vi(t.name,e.name)}function Xu(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;function iN(t){kl=t}const G_=function(t){return typeof t=="number"?"number:"+T_(t):"string:"+t},Y_=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else N(t===kl||t.isEmpty(),"priority of unexpected type.");N(t===kl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;class Ue{constructor(e,n=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Y_(this.priorityNode_)}static set __childrenNodeConstructor(e){Wf=e}static get __childrenNodeConstructor(){return Wf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(N(s!==".priority"||zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=T_(this.value_):e+=this.value_,this.lazyHash_=E_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ue.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ue.VALUE_TYPE_ORDER.indexOf(n),r=Ue.VALUE_TYPE_ORDER.indexOf(s);return N(i>=0,"Unknown leaf type: "+n),N(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J_,X_;function rN(t){J_=t}function oN(t){X_=t}class aN extends xa{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(bs,new Ue("[PRIORITY-POST]",X_))}makePost(e,n){const s=J_(e);return new oe(n,new Ue("[PRIORITY-POST]",s))}toString(){return".priority"}}const Je=new aN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=Math.log(2);class lN{constructor(e){const n=r=>parseInt(Math.log(r)/cN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bo=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Be(d,h.node,Be.BLACK,null,null);{const p=parseInt(u/2,10)+c,m=i(c,p),_=i(p+1,l);return h=t[p],d=n?n(h):h,new Be(d,h.node,Be.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const d=function(m,_){const A=h-m,C=h;h-=m;const L=i(A+1,C),k=t[A],B=n?n(k):k;p(new Be(B,k.node,_,null,L))},p=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),A=Math.pow(2,c.count-(m+1));_?d(A,Be.BLACK):(d(A,Be.BLACK),d(A,Be.RED))}return u},o=new lN(t.length),a=r(o);return new ht(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;const Ls={};class gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Ls&&Je,"ChildrenNode.ts has not been loaded"),Cc=Cc||new gn({".priority":Ls},{".priority":Je}),Cc}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Bo(s,e.getCompare()):a=Ls;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new gn(u,l)}addToIndexes(e,n){const s=Oo(this.indexes_,(i,r)=>{const o=ri(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),i===Ls)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(oe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Bo(a,o.getCompare())}else return Ls;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new oe(e.name,a))),c.insert(e,e.node)}});return new gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Oo(this.indexes_,i=>{if(i===Ls)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new gn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class he{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Y_(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new he(new ht(Xu),null,gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oi:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Oi:this.priorityNode_;return new he(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{N(re(e)!==".priority"||zn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Je,(o,a)=>{n[o]=a.val(e),s++,r&&he.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G_(this.getPriority().val())+":"),this.forEachChild(Je,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":E_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===Js||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Js||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Je),i=n.getIterator(Je);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Js?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uN extends he{constructor(){super(new ht(Xu),he.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const Dr=new uN;Object.defineProperties(oe,{MIN:{value:new oe(oi,he.EMPTY_NODE)},MAX:{value:new oe(bs,Dr)}});K_.__EMPTY_NODE=he.EMPTY_NODE;Ue.__childrenNodeConstructor=he;iN(Dr);oN(Dr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=!0;function Ge(t,e=null){if(t===null)return he.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ue(n,Ge(e))}if(!(t instanceof Array)&&hN){const n=[];let s=!1;if(Rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ge(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new oe(o,c)))}}),n.length===0)return he.EMPTY_NODE;const r=Bo(n,sN,o=>o.name,Xu);if(s){const o=Bo(n,Je.getCompare());return new he(r,Ge(e),new gn({".priority":o},{".priority":Je}))}else return new he(r,Ge(e),gn.Default)}else{let n=he.EMPTY_NODE;return Rt(t,(s,i)=>{if(Cn(t,s)&&s.substring(0,1)!=="."){const r=Ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ge(e))}}rN(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN extends xa{constructor(e){super(),this.indexPath_=e,N(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}makePost(e,n){const s=Ge(e),i=he.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new oe(bs,e)}toString(){return W_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN extends xa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=Ge(e);return new oe(n,s)}toString(){return".value"}}const pN=new fN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){return{type:"value",snapshotNode:t}}function mN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _N(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new Qu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Je?n="$priority":t.index_===pN?n="$value":t.index_===Js?n="$key":(N(t.index_ instanceof dN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=We(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+We(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=We(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Je&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends $_{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Nr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$o.getListenId_(e,s),a={};this.listens_[o]=a;const c=qf(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ri(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=$o.getListenId_(e,n);delete this.listens_[s]}get(e){const n=qf(e._queryParams),s=e._path.toString(),i=new or;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ar(a.responseText)}catch{Et("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Et("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(){return{value:null,children:new Map}}function Q_(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,jo());const i=t.children.get(s);e=be(e),Q_(i,e,n)}}function Ol(t,e,n){t.value!==null?n(e,t.value):wN(t,(s,i)=>{const r=new Te(e.toString()+"/"+s);Ol(i,r,n)})}function wN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Rt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=10*1e3,IN=30*1e3,bN=5*60*1e3;class TN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EN(e);const s=Kf+(IN-Kf)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Rt(e,(i,r)=>{r>0&&Cn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*bN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function Z_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ey(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ty(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Qt.ACK_USER_WRITE,this.source=Z_()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new Ho(_e(),n,this.revert)}}else return N(re(this.path)===e,"operationForChild called for unrelated child."),new Ho(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Qt.OVERWRITE}operationForChild(e){return se(this.path)?new Ts(this.source,_e(),this.snap.getImmediateChild(e)):new Ts(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Qt.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Ts(this.source,_e(),n.value):new pr(this.source,_e(),n)}else return N(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pr(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function CN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(yN(o.childName,o.snapshotNode))}),Pi(t,i,"child_removed",e,s,n),Pi(t,i,"child_added",e,s,n),Pi(t,i,"child_moved",r,s,n),Pi(t,i,"child_changed",e,s,n),Pi(t,i,"value",e,s,n),i}function Pi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>SN(t,a,c)),o.forEach(a=>{const c=AN(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function AN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SN(t,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){return{eventCache:t,serverCache:e}}function Gi(t,e,n,s){return ny(new Zu(e,n,s),t.serverCache)}function sy(t,e,n,s){return ny(t.eventCache,new Zu(e,n,s))}function Pl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Cs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;const RN=()=>(Ac||(Ac=new ht(fP)),Ac);class Ee{constructor(e,n=RN()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return Rt(e,(s,i)=>{n=n.set(new Te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(se(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(be(e),n);return r!=null?{path:je(new Te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new Ee(null)}}set(e,n){if(se(e))return new Ee(n,this.children);{const s=re(e),r=(this.children.get(s)||new Ee(null)).set(be(e),n),o=this.children.insert(s,r);return new Ee(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ee(null):new Ee(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(se(e))return n;{const s=re(e),r=(this.children.get(s)||new Ee(null)).setTree(be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ee(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(je(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(be(e),je(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),je(n,i),s):new Ee(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new Ee(null))}}function Yi(t,e,n){if(se(e))return new Ht(new Ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ct(i,e);return r=r.updateChild(o,n),new Ht(t.writeTree_.set(i,r))}else{const i=new Ee(n),r=t.writeTree_.setTree(e,i);return new Ht(r)}}}function Gf(t,e,n){let s=t;return Rt(n,(i,r)=>{s=Yi(s,je(e,i),r)}),s}function Yf(t,e){if(se(e))return Ht.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new Ht(n)}}function Nl(t,e){return Os(t,e)!=null}function Os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ct(n.path,e)):null}function Jf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Je,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function Hn(t,e){if(se(e))return t;{const n=Os(t,e);return n!=null?new Ht(new Ee(n)):new Ht(t.writeTree_.subtree(e))}}function xl(t){return t.writeTree_.isEmpty()}function ai(t,e){return iy(_e(),t.writeTree_,e)}function iy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=iy(je(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(je(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e){return uy(e,t)}function kN(t,e,n,s,i){N(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Yi(t.visibleWrites,e,n)),t.lastWriteId=s}function ON(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function PN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&NN(a,s.path)?i=!1:Ut(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return xN(t),!0;if(s.snap)t.visibleWrites=Yf(t.visibleWrites,s.path);else{const a=s.children;Rt(a,c=>{t.visibleWrites=Yf(t.visibleWrites,je(s.path,c))})}return!0}else return!1}function NN(t,e){if(t.snap)return Ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ut(je(t.path,n),e))return!0;return!1}function xN(t){t.visibleWrites=oy(t.allWrites,DN,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DN(t){return t.visible}function oy(t,e,n){let s=Ht.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ut(n,o)?(a=Ct(n,o),s=Yi(s,a,r.snap)):Ut(o,n)&&(a=Ct(o,n),s=Yi(s,_e(),r.snap.getChild(a)));else if(r.children){if(Ut(n,o))a=Ct(n,o),s=Gf(s,a,r.children);else if(Ut(o,n))if(a=Ct(o,n),se(a))s=Gf(s,_e(),r.children);else{const c=ri(r.children,re(a));if(c){const l=c.getChild(be(a));s=Yi(s,_e(),l)}}}else throw di("WriteRecord should have .snap or .children")}}return s}function ay(t,e,n,s,i){if(!s&&!i){const r=Os(t.visibleWrites,e);if(r!=null)return r;{const o=Hn(t.visibleWrites,e);if(xl(o))return n;if(n==null&&!Nl(o,_e()))return null;{const a=n||he.EMPTY_NODE;return ai(o,a)}}}else{const r=Hn(t.visibleWrites,e);if(!i&&xl(r))return n;if(!i&&n==null&&!Nl(r,_e()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Ut(l.path,e)||Ut(e,l.path))},a=oy(t.allWrites,o,e),c=n||he.EMPTY_NODE;return ai(a,c)}}}function MN(t,e,n){let s=he.EMPTY_NODE;const i=Os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Je,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Hn(t.visibleWrites,e);return n.forEachChild(Je,(o,a)=>{const c=ai(Hn(r,new Te(o)),a);s=s.updateImmediateChild(o,c)}),Jf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Hn(t.visibleWrites,e);return Jf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function LN(t,e,n,s,i){N(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=je(e,n);if(Nl(t.visibleWrites,r))return null;{const o=Hn(t.visibleWrites,r);return xl(o)?i.getChild(n):ai(o,i.getChild(n))}}function FN(t,e,n,s){const i=je(e,n),r=Os(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Hn(t.visibleWrites,i);return ai(o,s.getNode().getImmediateChild(n))}else return null}function UN(t,e){return Os(t.visibleWrites,e)}function BN(t,e,n,s,i,r,o){let a;const c=Hn(t.visibleWrites,e),l=Os(c,_e());if(l!=null)a=l;else if(n!=null)a=ai(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function $N(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function Dl(t,e,n,s){return ay(t.writeTree,t.treePath,e,n,s)}function cy(t,e){return MN(t.writeTree,t.treePath,e)}function Xf(t,e,n,s){return LN(t.writeTree,t.treePath,e,n,s)}function Wo(t,e){return UN(t.writeTree,je(t.treePath,e))}function jN(t,e,n,s,i,r){return BN(t.writeTree,t.treePath,e,n,s,i,r)}function eh(t,e,n){return FN(t.writeTree,t.treePath,e,n)}function ly(t,e){return uy(je(t.treePath,e),t.writeTree)}function uy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Vf(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_N(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,mN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Vf(s,e.snapshotNode,i.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hy=new WN;class th{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return eh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cs(this.viewCache_),r=jN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function VN(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qN(t,e,n,s,i){const r=new HN;let o,a;if(n.type===Qt.OVERWRITE){const l=n;l.source.fromUser?o=Ml(t,e,l.path,l.snap,s,i,r):(N(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!se(l.path),o=Vo(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===Qt.MERGE){const l=n;l.source.fromUser?o=KN(t,e,l.path,l.children,s,i,r):(N(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ll(t,e,l.path,l.children,s,i,a,r))}else if(n.type===Qt.ACK_USER_WRITE){const l=n;l.revert?o=JN(t,e,l.path,s,i,r):o=GN(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===Qt.LISTEN_COMPLETE)o=YN(t,e,n.path,s,r);else throw di("Unknown operation type: "+n.type);const c=r.getChanges();return zN(e,o,c),{viewCache:o,changes:c}}function zN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Pl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(gN(Pl(e)))}}function dy(t,e,n,s,i,r){const o=e.eventCache;if(Wo(s,n)!=null)return e;{let a,c;if(se(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Cs(e),u=l instanceof he?l:he.EMPTY_NODE,h=cy(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Dl(s,Cs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=re(n);if(l===".priority"){N(zn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Xf(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=be(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Xf(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=eh(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Gi(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Vo(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=re(n);if(!c.isCompleteForPath(n)&&zn(n)>1)return e;const m=be(n),A=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=u.updatePriority(c.getNode(),A):l=u.updateChild(c.getNode(),p,A,m,hy,null)}const h=sy(e,l,c.isFullyInitialized()||se(n),u.filtersNodes()),d=new th(i,h,r);return dy(t,h,n,i,d,a)}function Ml(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new th(i,e,r);if(se(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Gi(e,l,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Gi(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=be(n),p=a.getNode().getImmediateChild(h);let m;if(se(d))m=s;else{const _=u.getCompleteChild(h);_!=null?H_(d)===".priority"&&_.getChild(V_(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=he.EMPTY_NODE}if(p.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);c=Gi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Qf(t,e){return t.eventCache.isCompleteForChild(e)}function KN(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=je(n,c);Qf(e,re(u))&&(a=Ml(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=je(n,c);Qf(e,re(u))||(a=Ml(t,a,u,l,i,r,o))}),a}function Zf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ll(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;se(n)?l=s:l=new Ee(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Zf(t,p,d);c=Vo(t,c,new Te(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=Zf(t,m,d);c=Vo(t,c,new Te(h),_,i,r,o,a)}}),c}function GN(t,e,n,s,i,r,o){if(Wo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(se(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Vo(t,e,n,c.getNode().getChild(n),i,r,a,o);if(se(n)){let l=new Ee(null);return c.getNode().forEachChild(Js,(u,h)=>{l=l.set(new Te(u),h)}),Ll(t,e,n,l,i,r,a,o)}else return e}else{let l=new Ee(null);return s.foreach((u,h)=>{const d=je(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Ll(t,e,n,l,i,r,a,o)}}function YN(t,e,n,s,i){const r=e.serverCache,o=sy(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return dy(t,o,n,s,hy,i)}function JN(t,e,n,s,i,r){let o;if(Wo(s,n)!=null)return e;{const a=new th(s,e,i),c=e.eventCache.getNode();let l;if(se(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Dl(s,Cs(e));else{const h=e.serverCache.getNode();N(h instanceof he,"serverChildren would be complete if leaf node"),u=cy(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=re(n);let h=eh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,be(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,he.EMPTY_NODE,be(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Dl(s,Cs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Wo(s,_e())!=null,Gi(e,l,o,t.filter.filtersNodes())}}function XN(t,e){const n=Cs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function ep(t,e,n,s){e.type===Qt.MERGE&&e.source.queryId!==null&&(N(Cs(t.viewCache_),"We should always have a full cache before handling merges"),N(Pl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qN(t.processor_,i,e,n,s);return VN(t.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,QN(t,r.changes,r.viewCache.eventCache.getNode(),null)}function QN(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return CN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp;function ZN(t){N(!tp,"__referenceConstructor has already been defined"),tp=t}function nh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return N(r!=null,"SyncTree gave us an op for an invalid query."),ep(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ep(o,e,n,s));return r}}function sh(t,e){let n=null;for(const s of t.views.values())n=n||XN(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;function e1(t){N(!np,"__referenceConstructor has already been defined"),np=t}class sp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=$N(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function t1(t,e,n,s,i){return kN(t.pendingWriteTree_,e,n,s,i),i?Ma(t,new Ts(Z_(),e,n)):[]}function js(t,e,n=!1){const s=ON(t.pendingWriteTree_,e);if(PN(t.pendingWriteTree_,e)){let r=new Ee(null);return s.snap!=null?r=r.set(_e(),!0):Rt(s.children,o=>{r=r.set(new Te(o),!0)}),Ma(t,new Ho(s.path,r,n))}else return[]}function Da(t,e,n){return Ma(t,new Ts(ey(),e,n))}function n1(t,e,n){const s=Ee.fromObject(n);return Ma(t,new pr(ey(),e,s))}function s1(t,e,n,s){const i=my(t,s);if(i!=null){const r=_y(i),o=r.path,a=r.queryId,c=Ct(o,e),l=new Ts(ty(a),c,n);return yy(t,o,l)}else return[]}function i1(t,e,n,s){const i=my(t,s);if(i){const r=_y(i),o=r.path,a=r.queryId,c=Ct(o,e),l=Ee.fromObject(n),u=new pr(ty(a),c,l);return yy(t,o,u)}else return[]}function fy(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ct(o,e),l=sh(a,c);if(l)return l});return ay(i,e,r,n,!0)}function Ma(t,e){return py(e,t.syncPointTree_,null,ry(t.pendingWriteTree_,_e()))}function py(t,e,n,s){if(se(t.path))return gy(t,e,n,s);{const i=e.get(_e());n==null&&i!=null&&(n=sh(i,_e()));let r=[];const o=re(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=ly(s,o);r=r.concat(py(a,c,l,u))}return i&&(r=r.concat(nh(i,t,s,n))),r}}function gy(t,e,n,s){const i=e.get(_e());n==null&&i!=null&&(n=sh(i,_e()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=ly(s,o),u=t.operationForChild(o);u&&(r=r.concat(gy(u,a,c,l)))}),i&&(r=r.concat(nh(i,t,s,n))),r}function my(t,e){return t.tagToQueryMap.get(e)}function _y(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function yy(t,e,n){const s=t.syncPointTree_.get(e);N(s,"Missing sync point for query tag that we're tracking");const i=ry(t.pendingWriteTree_,e);return nh(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ih(n)}node(){return this.node_}}class rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new rh(this.syncTree_,n)}node(){return fy(this.syncTree_,this.path_)}}const r1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ip=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return o1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return a1(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},o1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},a1=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&N(!1,"Unexpected increment value: "+s);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},c1=function(t,e,n,s){return oh(e,new rh(n,t),s)},l1=function(t,e,n){return oh(t,new ih(e),n)};function oh(t,e,n){const s=t.getPriority().val(),i=ip(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ip(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ue(a,Ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ue(i))),o.forEachChild(Je,(a,c)=>{const l=oh(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ch(t,e){let n=e instanceof Te?e:new Te(e),s=t,i=re(n);for(;i!==null;){const r=ri(s.node.children,i)||{children:{},childCount:0};s=new ah(i,s,r),n=be(n),i=re(n)}return s}function wi(t){return t.node.value}function vy(t,e){t.node.value=e,Fl(t)}function wy(t){return t.node.childCount>0}function u1(t){return wi(t)===void 0&&!wy(t)}function La(t,e){Rt(t.node.children,(n,s)=>{e(new ah(n,t,s))})}function Ey(t,e,n,s){n&&!s&&e(t),La(t,i=>{Ey(i,e,!0,s)}),n&&s&&e(t)}function h1(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Mr(t){return new Te(t.parent===null?t.name:Mr(t.parent)+"/"+t.name)}function Fl(t){t.parent!==null&&d1(t.parent,t.name,t)}function d1(t,e,n){const s=u1(n),i=Cn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/[\[\].#$\/\u0000-\u001F\u007F]/,p1=/[\[\].#$\u0000-\u001F\u007F]/,Sc=10*1024*1024,Iy=function(t){return typeof t=="string"&&t.length!==0&&!f1.test(t)},g1=function(t){return typeof t=="string"&&t.length!==0&&!p1.test(t)},m1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),g1(t)},by=function(t,e,n){const s=n instanceof Te?new YP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ts(s));if(typeof e=="function")throw new Error(t+"contains a function "+ts(s)+" with contents = "+e.toString());if(I_(e))throw new Error(t+"contains "+e.toString()+" "+ts(s));if(typeof e=="string"&&e.length>Sc/3&&Aa(e)>Sc)throw new Error(t+"contains a string greater than "+Sc+" utf8 bytes "+ts(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Iy(o)))throw new Error(t+" contains an invalid key ("+o+") "+ts(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JP(s,o),by(t,a,s),XP(s)}),i&&r)throw new Error(t+' contains ".value" child '+ts(s)+" in addition to actual children.")}},_1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Iy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!m1(n))throw new Error(Q0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function v1(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!q_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ps(t,e,n){v1(t,n),w1(t,s=>Ut(s,e)||Ut(e,s))}function w1(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(E1(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function E1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();fs&&Ke("event: "+n.toString()),xr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="repo_interrupt",b1=25;class T1{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new y1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jo(),this.transactionQueueTree_=new ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function C1(t,e,n){if(t.stats_=Gu(t.repoInfo_),t.forceRestClient_||vP())t.server_=new $o(t.repoInfo_,(s,i,r,o)=>{rp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vn(t.repoInfo_,e,(s,i,r,o)=>{rp(t,s,i,r,o)},s=>{op(t,s)},s=>{S1(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=CP(t.repoInfo_,()=>new TN(t.stats_,t.server_)),t.infoData_=new vN,t.infoSyncTree_=new sp({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Da(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lh(t,"connected",!1),t.serverSyncTree_=new sp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Ps(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function A1(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ty(t){return r1({timestamp:A1(t)})}function rp(t,e,n,s,i){t.dataUpdateCount++;const r=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Oo(n,l=>Ge(l));o=i1(t.serverSyncTree_,r,c,i)}else{const c=Ge(n);o=s1(t.serverSyncTree_,r,c,i)}else if(s){const c=Oo(n,l=>Ge(l));o=n1(t.serverSyncTree_,r,c)}else{const c=Ge(n);o=Da(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=hh(t,r)),Ps(t.eventQueue_,a,o)}function op(t,e){lh(t,"connected",e),e===!1&&k1(t)}function S1(t,e){Rt(e,(n,s)=>{lh(t,n,s)})}function lh(t,e,n){const s=new Te("/.info/"+e),i=Ge(n);t.infoData_.updateSnapshot(s,i);const r=Da(t.infoSyncTree_,s,i);Ps(t.eventQueue_,s,r)}function R1(t){return t.nextWriteId_++}function k1(t){Cy(t,"onDisconnectEvents");const e=Ty(t),n=jo();Ol(t.onDisconnect_,_e(),(i,r)=>{const o=c1(i,r,t.serverSyncTree_,e);Q_(n,i,o)});let s=[];Ol(n,_e(),(i,r)=>{s=s.concat(Da(t.serverSyncTree_,i,r));const o=x1(t,i);hh(t,o)}),t.onDisconnect_=jo(),Ps(t.eventQueue_,_e(),s)}function O1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(I1)}function Cy(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function Ay(t,e,n){return fy(t.serverSyncTree_,e,n)||he.EMPTY_NODE}function uh(t,e=t.transactionQueueTree_){if(e||Fa(t,e),wi(e)){const n=Ry(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&P1(t,Mr(e),n)}else wy(e)&&La(e,n=>{uh(t,n)})}function P1(t,e,n){const s=n.map(l=>l.currentWriteId),i=Ay(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ct(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Cy(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(js(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Fa(t,ch(t.transactionQueueTree_,e)),uh(t,t.transactionQueueTree_),Ps(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)xr(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Et("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}hh(t,e)}},o)}function hh(t,e){const n=Sy(t,e),s=Mr(n),i=Ry(t,n);return N1(t,i,s),s}function N1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ct(n,c.path);let u=!1,h;if(N(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(js(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=b1)u=!0,h="maxretry",i=i.concat(js(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Ay(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){by("transaction failed: Data returned ",p,c.path);let m=Ge(p);typeof p=="object"&&p!=null&&Cn(p,".priority")||(m=m.updatePriority(d.getPriority()));const A=c.currentWriteId,C=Ty(t),L=l1(m,d,C);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=L,c.currentWriteId=R1(t),o.splice(o.indexOf(A),1),i=i.concat(t1(t.serverSyncTree_,c.path,L,c.currentWriteId,c.applyLocally)),i=i.concat(js(t.serverSyncTree_,A,!0))}else u=!0,h="nodata",i=i.concat(js(t.serverSyncTree_,c.currentWriteId,!0))}Ps(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Fa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)xr(s[a]);uh(t,t.transactionQueueTree_)}function Sy(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&wi(s)===void 0;)s=ch(s,n),e=be(e),n=re(e);return s}function Ry(t,e){const n=[];return ky(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ky(t,e,n){const s=wi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);La(e,i=>{ky(t,i,n)})}function Fa(t,e){const n=wi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,vy(e,n.length>0?n:void 0)}La(e,s=>{Fa(t,s)})}function x1(t,e){const n=Mr(Sy(t,e)),s=ch(t.transactionQueueTree_,e);return h1(s,i=>{Rc(t,i)}),Rc(t,s),Ey(s,i=>{Rc(t,i)}),n}function Rc(t,e){const n=wi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(js(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vy(e,void 0):n.length=r+1,Ps(t.eventQueue_,Mr(e),i);for(let o=0;o<s.length;o++)xr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function M1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Et(`Invalid query segment '${n}' in query '${t}'`)}return e}const ap=function(t,e){const n=L1(t),s=n.namespace;n.domain==="firebase.com"&&Is(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Is("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new IP(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Te(n.pathString)}},L1=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=D1(t.substring(u,h)));const d=M1(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:H_(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const e=zf(this._queryParams),n=zu(e);return n==="{}"?"default":n}get _queryObject(){return zf(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof dh))return!1;const n=this._repo===e._repo,s=q_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GP(this._path)}}class Ei extends dh{constructor(e,n){super(e,n,new Qu,!1)}get parent(){const e=V_(this._path);return e===null?null:new Ei(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ZN(Ei);e1(Ei);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="FIREBASE_DATABASE_EMULATOR_HOST",Ul={};let U1=!1;function B1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Is("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ap(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[F1]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=ap(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Sl(Sl.OWNER):new EP(t.name,t.options,e);_1("Invalid Firebase Database URL",o),se(o.path)||Is("Database URL must point to the root of a Firebase Database (not including a child path).");const h=j1(a,t,u,new wP(t.name,n));return new H1(h,t)}function $1(t,e){const n=Ul[e];(!n||n[t.key]!==t)&&Is(`Database ${e}(${t.repoInfo_}) has already been deleted.`),O1(t),delete n[t.key]}function j1(t,e,n,s){let i=Ul[e.name];i||(i={},Ul[e.name]=i);let r=i[t.toURLString()];return r&&Is("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new T1(t,U1,n,s),i[t.toURLString()]=r,r}class H1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(C1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&($1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Is("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){oP(ks),dt(new rt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return B1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ve(Rf,kf,t),Ve(Rf,kf,"esm2017")}vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};W1();var V1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,fh=fh||{},K=V1||self;function qo(){}function Ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Lr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function q1(t){return Object.prototype.hasOwnProperty.call(t,kc)&&t[kc]||(t[kc]=++z1)}var kc="closure_uid_"+(1e9*Math.random()>>>0),z1=0;function K1(t,e,n){return t.call.apply(t.bind,arguments)}function G1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=K1:Xe=G1,Xe.apply(null,arguments)}function io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Gn(){this.s=this.s,this.o=this.o}var Y1=0;Gn.prototype.s=!1;Gn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Y1!=0)&&q1(this)};Gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ph(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function cp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ua(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var J1=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",qo,e),K.removeEventListener("test",qo,e)}catch{}return t}();function zo(t){return/^[\s\xa0]*$/.test(t)}var lp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Oc(t,e){return t<e?-1:t>e?1:0}function Ba(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return Ba().indexOf(t)!=-1}function gh(t){return gh[" "](t),t}gh[" "]=qo;function X1(t){var e=ex;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Q1=Jt("Opera"),gr=Jt("Trident")||Jt("MSIE"),Py=Jt("Edge"),Bl=Py||gr,Ny=Jt("Gecko")&&!(Ba().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),Z1=Ba().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function xy(){var t=K.document;return t?t.documentMode:void 0}var $l;e:{var Pc="",Nc=function(){var t=Ba();if(Ny)return/rv:([^\);]+)(\)|;)/.exec(t);if(Py)return/Edge\/([\d\.]+)/.exec(t);if(gr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Z1)return/WebKit\/(\S+)/.exec(t);if(Q1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Pc=Nc?Nc[1]:""),gr){var xc=xy();if(xc!=null&&xc>parseFloat(Pc)){$l=String(xc);break e}}$l=Pc}var ex={};function tx(){return X1(function(){let t=0;const e=lp(String($l)).split("."),n=lp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Oc(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Oc(i[2].length==0,r[2].length==0)||Oc(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}K.document&&gr&&xy();function mr(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ny){e:{try{gh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mr.X.h.call(this)}}ze(mr,Qe);var nx={2:"touch",3:"pen",4:"mouse"};mr.prototype.h=function(){mr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),sx=0;function ix(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++sx,this.ba=this.ea=!1}function $a(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function mh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Dy(t){const e={};for(const n in t)e[n]=t[n];return e}const up="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function My(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<up.length;r++)n=up[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ja(t){this.src=t,this.g={},this.h=0}ja.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Hl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ix(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function jl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Oy(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var _h="closure_lm_"+(1e6*Math.random()|0),Dc={};function Ly(t,e,n,s,i){if(s&&s.once)return Uy(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ly(t,e[r],n,s,i);return null}return n=wh(n),t&&t[Fr]?t.N(e,n,Lr(s)?!!s.capture:!!s,i):Fy(t,e,n,!1,s,i)}function Fy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Lr(i)?!!i.capture:!!i,a=vh(t);if(a||(t[_h]=a=new ja(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=rx(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)J1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent($y(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rx(){function t(n){return e.call(t.src,t.listener,n)}const e=ox;return t}function Uy(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Uy(t,e[r],n,s,i);return null}return n=wh(n),t&&t[Fr]?t.O(e,n,Lr(s)?!!s.capture:!!s,i):Fy(t,e,n,!0,s,i)}function By(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)By(t,e[r],n,s,i);else s=Lr(s)?!!s.capture:!!s,n=wh(n),t&&t[Fr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Hl(r,n,s,i),-1<n&&($a(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=vh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hl(e,n,s,i)),(n=-1<t?e[t]:null)&&yh(n))}function yh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Fr])jl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent($y(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vh(e))?(jl(n,t),n.h==0&&(n.src=null,e[_h]=null)):$a(t)}}}function $y(t){return t in Dc?Dc[t]:Dc[t]="on"+t}function ox(t,e){if(t.ba)t=!0;else{e=new mr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&yh(t),t=n.call(s,e)}return t}function vh(t){return t=t[_h],t instanceof ja?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function He(){Gn.call(this),this.i=new ja(this),this.P=this,this.I=null}ze(He,Gn);He.prototype[Fr]=!0;He.prototype.removeEventListener=function(t,e,n,s){By(this,t,e,n,s)};function qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(s,t),My(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ro(o,s,!0,e)&&i}if(o=e.g=t,i=ro(o,s,!0,e)&&i,i=ro(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ro(o,s,!1,e)&&i}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$a(n[s]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};He.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ro(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&jl(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Eh=K.JSON.stringify;function ax(){var t=Wy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cx{constructor(){this.h=this.g=null}add(e,n){const s=jy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var jy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lx,t=>t.reset());class lx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ux(t){K.setTimeout(()=>{throw t},0)}function Hy(t,e){Wl||hx(),Vl||(Wl(),Vl=!0),Wy.add(t,e)}var Wl;function hx(){var t=K.Promise.resolve(void 0);Wl=function(){t.then(dx)}}var Vl=!1,Wy=new cx;function dx(){for(var t;t=ax();){try{t.h.call(t.g)}catch(n){ux(n)}var e=jy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vl=!1}function Ha(t,e){He.call(this),this.h=t||1,this.g=e||K,this.j=Xe(this.lb,this),this.l=Date.now()}ze(Ha,He);U=Ha.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),qe(this,"tick"),this.ca&&(Ih(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ih(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Ha.X.M.call(this),Ih(this),delete this.g};function bh(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Vy(t){t.g=bh(()=>{t.g=null,t.i&&(t.i=!1,Vy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fx extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vy(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(t){Gn.call(this),this.h=t,this.g={}}ze(_r,Gn);var hp=[];function qy(t,e,n,s){Array.isArray(n)||(n&&(hp[0]=n.toString()),n=hp);for(var i=0;i<n.length;i++){var r=Ly(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function zy(t){mh(t.g,function(e,n){this.g.hasOwnProperty(n)&&yh(e)},t),t.g={}}_r.prototype.M=function(){_r.X.M.call(this),zy(this)};_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wa(){this.g=!0}Wa.prototype.Aa=function(){this.g=!1};function px(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gx(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_x(t,n)+(s?" "+s:"")})}function mx(t,e){t.info(function(){return"TIMEOUT: "+e})}Wa.prototype.info=function(){};function _x(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Eh(n)}catch{return e}}var Ii={},dp=null;function Th(){return dp=dp||new He}Ii.Pa="serverreachability";function Ky(t){Qe.call(this,Ii.Pa,t)}ze(Ky,Qe);function yr(t){const e=Th();qe(e,new Ky(e))}Ii.STAT_EVENT="statevent";function Gy(t,e){Qe.call(this,Ii.STAT_EVENT,t),this.stat=e}ze(Gy,Qe);function it(t){const e=Th();qe(e,new Gy(e,t))}Ii.Qa="timingevent";function Yy(t,e){Qe.call(this,Ii.Qa,t),this.size=e}ze(Yy,Qe);function Ur(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Ch={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},yx={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ah(){}Ah.prototype.h=null;function fp(t){return t.h||(t.h=t.i())}function vx(){}var Br={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Sh(){Qe.call(this,"d")}ze(Sh,Qe);function Rh(){Qe.call(this,"c")}ze(Rh,Qe);var ql;function Va(){}ze(Va,Ah);Va.prototype.g=function(){return new XMLHttpRequest};Va.prototype.i=function(){return{}};ql=new Va;function $r(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new _r(this),this.O=wx,t=Bl?125:void 0,this.T=new Ha(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jy}function Jy(){this.i=null,this.g="",this.h=!1}var wx=45e3,zl={},Ko={};U=$r.prototype;U.setTimeout=function(t){this.O=t};function Kl(t,e,n){t.K=1,t.v=za(In(e)),t.s=n,t.P=!0,Xy(t,null)}function Xy(t,e){t.F=Date.now(),jr(t),t.A=In(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),rv(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Jy,t.g=Av(t.l,n?e:null,!t.s),0<t.N&&(t.L=new fx(Xe(t.La,t,t.g),t.N)),qy(t.S,t.g,"readystatechange",t.ib),e=t.H?Dy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yr(),px(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&mn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=mn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Bl||this.g&&(this.h.h||this.g.fa()||_p(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?yr(3):yr(2)),qa(this);var n=this.g.aa();this.Y=n;t:if(Qy(this)){var s=_p(this.g);t="";var i=s.length,r=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Ji(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gx(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zo(a)){var l=a;break t}}l=null}if(n=l)Hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gl(this,n);else{this.i=!1,this.o=3,it(12),as(this),Ji(this);break e}}this.P?(Zy(this,u,o),Bl&&this.i&&u==3&&(qy(this.S,this.T,"tick",this.hb),this.T.start())):(Hs(this.j,this.m,o,null),Gl(this,o)),u==4&&as(this),this.i&&!this.I&&(u==4?Iv(this.l,this):(this.i=!1,jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),as(this),Ji(this)}}}catch{}finally{}};function Qy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Zy(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ex(t,n),i==Ko){e==4&&(t.o=4,it(14),s=!1),Hs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zl){t.o=4,it(15),Hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Hs(t.j,t.m,i,null),Gl(t,i);Qy(t)&&i!=Ko&&i!=zl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mh(e),e.K=!0,it(11))):(Hs(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),Ji(t))}U.hb=function(){if(this.g){var t=mn(this.g),e=this.g.fa();this.C<e.length&&(qa(this),Zy(this,t,e),this.i&&t!=4&&jr(this))}};function Ex(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ko:(n=Number(e.substring(n,s)),isNaN(n)?zl:(s+=1,s+n>e.length?Ko:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,as(this)};function jr(t){t.V=Date.now()+t.O,ev(t,t.O)}function ev(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ur(Xe(t.gb,t),e)}function qa(t){t.B&&(K.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(mx(this.j,this.A),this.K!=2&&(yr(),it(17)),as(this),this.o=2,Ji(this)):ev(this,this.V-t)};function Ji(t){t.l.G==0||t.I||Iv(t.l,t)}function as(t){qa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ih(t.T),zy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yl(n.h,t))){if(!t.J&&Yl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jo(n),Ja(n);else break e;Dh(n),it(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ur(Xe(n.cb,n),6e3));if(1>=cv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else cs(n,11)}else if((t.J||n.g==t)&&Jo(n),!zo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(kh(r,r.h),r.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ce(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Cv(s,s.H?s.ka:null,s.V),o.J){lv(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(qa(a),jr(a)),s.g=o}else wv(s);0<n.i.length&&Xa(n)}else l[0]!="stop"&&l[0]!="close"||cs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cs(n,7):xh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}yr(4)}catch{}}function Ix(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ua(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function bx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ua(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function tv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ua(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bx(t),s=Ix(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var nv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ps(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ps){this.h=e!==void 0?e:t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Yo(this,t.m),this.l=t.l,e=t.i;var n=new vr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pp(this,n),this.o=t.o}else t&&(n=String(t).match(nv))?(this.h=!!e,Go(this,n[1]||"",!0),this.s=Fi(n[2]||""),this.g=Fi(n[3]||"",!0),Yo(this,n[4]),this.l=Fi(n[5]||"",!0),pp(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.h=!!e,this.i=new vr(null,this.h))}ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ui(e,gp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ui(e,gp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ui(n,n.charAt(0)=="/"?Sx:Ax,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ui(n,kx)),t.join("")};function In(t){return new ps(t)}function Go(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pp(t,e,n){e instanceof vr?(t.i=e,Ox(t.i,t.h)):(n||(e=Ui(e,Rx)),t.i=new vr(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function za(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ui(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Cx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Cx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gp=/[#\/\?@]/g,Ax=/[#\?:]/g,Sx=/[#\?]/g,Rx=/[#\?@]/g,kx=/#/g;function vr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yn(t){t.g||(t.g=new Map,t.h=0,t.i&&Tx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=vr.prototype;U.add=function(t,e){Yn(this),this.i=null,t=bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sv(t,e){Yn(t),e=bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function iv(t,e){return Yn(t),e=bi(t,e),t.g.has(e)}U.forEach=function(t,e){Yn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};U.oa=function(){Yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};U.W=function(t){Yn(this);let e=[];if(typeof t=="string")iv(this,t)&&(e=e.concat(this.g.get(bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Yn(this),this.i=null,t=bi(this,t),iv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rv(t,e,n){sv(t,e),0<n.length&&(t.i=null,t.g.set(bi(t,e),ph(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ox(t,e){e&&!t.j&&(Yn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(sv(this,s),rv(this,i,n))},t)),t.j=e}var Px=class{constructor(t,e){this.h=t,this.g=e}};function ov(t){this.l=t||Nx,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Nx=10;function av(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cv(t){return t.h?1:t.g?t.g.size:0}function Yl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kh(t,e){t.g?t.g.add(e):t.h=e}function lv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ov.prototype.cancel=function(){if(this.i=uv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ph(t.i)}function Oh(){}Oh.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Oh.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function xx(){this.g=new Oh}function Dx(t,e,n){const s=n||"";try{tv(t,function(i,r){let o=i;Lr(i)&&(o=Eh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Mx(t,e){const n=new Wa;if(K.Image){const s=new Image;s.onload=io(oo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=io(oo,n,s,"TestLoadImage: error",!1,e),s.onabort=io(oo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=io(oo,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function oo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ka(t){this.l=t.ac||null,this.j=t.jb||!1}ze(Ka,Ah);Ka.prototype.g=function(){return new Ga(this.l,this.j)};Ka.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ph,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Ga,He);var Ph=0;U=Ga.prototype;U.open=function(t,e){if(this.readyState!=Ph)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=Ph};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function hv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hr(this):wr(this),this.readyState==3&&hv(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Hr(this))};U.Ua=function(t){this.g&&(this.response=t,Hr(this))};U.ga=function(){this.g&&Hr(this)};function Hr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Lx=K.JSON.parse;function Pe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=dv,this.K=this.L=!1}ze(Pe,He);var dv="",Fx=/^https?$/i,Ux=["POST","PUT"];U=Pe.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ql.g(),this.C=this.u?fp(this.u):fp(ql),this.g.onreadystatechange=Xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){mp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Oy(Ux,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gv(this),0<this.B&&((this.K=Bx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.qa,this)):this.A=bh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){mp(this,r)}};function Bx(t){return gr&&tx()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function mp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fv(t),Ya(t)}function fv(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Ya(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ya(this,!0)),Pe.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?pv(this):this.fb())};U.fb=function(){pv(this)};function pv(t){if(t.h&&typeof fh<"u"&&(!t.C[1]||mn(t)!=4||t.aa()!=2)){if(t.v&&mn(t)==4)bh(t.Ha,0,t);else if(qe(t,"readystatechange"),mn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(nv)[1]||null;if(!i&&K.self&&K.self.location){var r=K.self.location.protocol;i=r.substr(0,r.length-1)}s=!Fx.test(i?i.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<mn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",fv(t)}}finally{Ya(t)}}}}function Ya(t,e){if(t.g){gv(t);const n=t.g,s=t.C[0]?qo:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function gv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function mn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Lx(e)}};function _p(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case dv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mv(t){let e="";return mh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _v(t){this.Ca=0,this.i=[],this.j=new Wa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ni("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ni("baseRetryDelayMs",5e3,t),this.bb=Ni("retryDelaySeedMs",1e4,t),this.$a=Ni("forwardChannelMaxRetries",2,t),this.ta=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ov(t&&t.concurrentRequestLimit),this.Fa=new xx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=_v.prototype;U.ma=8;U.G=1;function xh(t){if(yv(t),t.G==3){var e=t.U++,n=In(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Wr(t,n),e=new $r(t,t.j,e,void 0),e.K=2,e.v=za(In(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Av(e.l,null),e.g.da(e.v)),e.F=Date.now(),jr(e)}Tv(t)}function Ja(t){t.g&&(Mh(t),t.g.cancel(),t.g=null)}function yv(t){Ja(t),t.u&&(K.clearTimeout(t.u),t.u=null),Jo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Xa(t){av(t.h)||t.m||(t.m=!0,Hy(t.Ja,t),t.C=0)}function $x(t,e){return cv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ur(Xe(t.Ja,t,e),bv(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new $r(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Dy(r),My(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vv(this,i,e),n=In(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Wr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(mv(r)))+"&"+e:this.o&&Nh(n,this.o,r)),kh(this.h,i),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),i.Z=!0,Kl(i,n,null)):Kl(i,n,e),this.G=2}}else this.G==3&&(t?yp(this,t):this.i.length==0||av(this.h)||yp(this))};function yp(t,e){var n;e?n=e.m:n=t.U++;const s=In(t.F);Ce(s,"SID",t.I),Ce(s,"RID",n),Ce(s,"AID",t.T),Wr(t,s),t.o&&t.s&&Nh(s,t.o,t.s),n=new $r(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kh(t.h,n),Kl(n,s,e)}function Wr(t,e){t.ia&&mh(t.ia,function(n,s){Ce(e,s,n)}),t.l&&tv({},function(n,s){Ce(e,s,n)})}function vv(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Xe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Dx(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function wv(t){t.g||t.u||(t.Z=1,Hy(t.Ia,t),t.A=0)}function Dh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ur(Xe(t.Ia,t),bv(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Ev(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ur(Xe(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,it(10),Ja(this),Ev(this))};function Mh(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Ev(t){t.g=new $r(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=In(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),Wr(t,e),t.o&&t.s&&Nh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=za(In(e)),n.s=null,n.P=!0,Xy(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ja(this),Dh(this),it(19))};function Jo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Iv(t,e){var n=null;if(t.g==e){Jo(t),Mh(t),t.g=null;var s=2}else if(Yl(t.h,e))n=e.D,lv(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Th(),qe(s,new Yy(s,n)),Xa(t)}else wv(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&$x(t,e)||s==2&&Dh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cs(t,5);break;case 4:cs(t,10);break;case 3:cs(t,6);break;default:cs(t,2)}}}function bv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Xe(t.kb,t);n||(n=new ps("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Go(n,"https"),za(n)),Mx(n.toString(),s)}else it(2);t.G=0,t.l&&t.l.va(e),Tv(t),yv(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Tv(t){if(t.G=0,t.la=[],t.l){const e=uv(t.h);(e.length!=0||t.i.length!=0)&&(cp(t.la,e),cp(t.la,t.i),t.h.i.length=0,ph(t.i),t.i.length=0),t.l.ua()}}function Cv(t,e,n){var s=n instanceof ps?In(n):new ps(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Yo(s,s.m);else{var i=K.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ps(null,void 0);s&&Go(r,s),e&&(r.g=e),i&&Yo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ma),Wr(t,s),s}function Av(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new Ka({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function Sv(){}U=Sv.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function kt(t,e){He.call(this),this.g=new _v(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ti(this)}ze(kt,He);kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Cv(t,null,t.V),Xa(t)};kt.prototype.close=function(){xh(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eh(t),t=n);e.i.push(new Px(e.ab++,t)),e.G==3&&Xa(e)};kt.prototype.M=function(){this.g.l=null,delete this.j,xh(this.g),delete this.g,kt.X.M.call(this)};function Rv(t){Sh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(Rv,Sh);function kv(){Rh.call(this),this.status=1}ze(kv,Rh);function Ti(t){this.g=t}ze(Ti,Sv);Ti.prototype.xa=function(){qe(this.g,"a")};Ti.prototype.wa=function(t){qe(this.g,new Rv(t))};Ti.prototype.va=function(t){qe(this.g,new kv)};Ti.prototype.ua=function(){qe(this.g,"b")};kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;Ch.NO_ERROR=0;Ch.TIMEOUT=8;Ch.HTTP_ERROR=6;yx.COMPLETE="complete";vx.EventType=Br;Br.OPEN="a";Br.CLOSE="b";Br.ERROR="c";Br.MESSAGE="d";He.prototype.listen=He.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;const vp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new pi("@firebase/firestore");function vt(t,...e){if(Xo.logLevel<=pe.DEBUG){const n=e.map(Ov);Xo.debug(`Firestore (${Qa}): ${t}`,...n)}}function Lh(t,...e){if(Xo.logLevel<=pe.ERROR){const n=e.map(Ov);Xo.error(`Firestore (${Qa}): ${t}`,...n)}}function Ov(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t="Unexpected state"){const e=`FIRESTORE (${Qa}) INTERNAL ASSERTION FAILED: `+t;throw Lh(e),new Error(e)}function Qo(t,e){t||Pv()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nn extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class Wx{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Xs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Xs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Xs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qo(typeof s.accessToken=="string"),new jx(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qo(e===null||typeof e=="string"),new lt(e)}}class Vx{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Qo(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class qx{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Vx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,vt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qo(typeof n.token=="string"),this.A=n.token,new zx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Gx(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Nv(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wp,ie;(ie=wp||(wp={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";function Lc(){return typeof document<"u"?document:null}class Xx{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&vt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Xs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Fh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new nn(tn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qx(t,e){if(Lh("AsyncQueue",`${e}: ${t}`),Nv(t))return new nn(tn.UNAVAILABLE,`${e}: ${t}`);throw t}function Zx(t,e,n,s){if(e===!0&&s===!0)throw new nn(tn.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Map;class Ip{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new nn(tn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new nn(tn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Zx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nn(tn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new nn(tn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Hx;switch(n.type){case"gapi":const s=n.client;return new qx(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new nn(tn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ep.get(e);n&&(vt("ComponentProvider","Removing Datastore"),Ep.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=Yx.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{vt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(vt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nn(tn.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Qx(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}class nD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Xx(this,"async_queue_retry"),this.Wc=()=>{const n=Lc();n&&vt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Xs;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Nv(e))throw e;vt("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Lh("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Fh.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Pv()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class sD extends eD{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new nD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iD(this),this._firestoreClient.terminate()}}function iD(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Jx(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tD(t._authCredentials,t._appCheckCredentials,t._queue,s)}(function(t,e=!0){(function(n){Qa=n})(ks),dt(new rt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new sD(new Wx(n.getProvider("auth-internal")),new Kx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new nn(tn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ve(vp,"3.8.3",t),Ve(vp,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="firebasestorage.googleapis.com",rD="storageBucket",oD=2*60*1e3,aD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ot{constructor(e,n,s=0){super(Fc(e),`Firebase Storage: ${n} (${Fc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var an;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(an||(an={}));function Fc(t){return"storage/"+t}function cD(){const t="An unknown error occurred, please check the error payload for server response.";return new ln(an.UNKNOWN,t)}function lD(){return new ln(an.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uD(){return new ln(an.CANCELED,"User canceled the upload/download.")}function hD(t){return new ln(an.INVALID_URL,"Invalid URL '"+t+"'.")}function dD(t){return new ln(an.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bp(t){return new ln(an.INVALID_ARGUMENT,t)}function Dv(){return new ln(an.APP_DELETED,"The Firebase app was deleted.")}function fD(t){return new ln(an.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(s.path==="")return s;throw dD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===xv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",C=new RegExp(`^https?://${_}/${i}/${A}`,"i"),k=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<k.length;B++){const q=k[B],Z=q.regex.exec(e);if(Z){const V=Z[q.indices.bucket];let P=Z[q.indices.path];P||(P=""),s=new Bt(V,P),q.postModify(s);break}}if(s==null)throw hD(e);return s}}class pD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...A){l||(l=!0,e.apply(null,A))}function h(A){i=setTimeout(()=>{i=null,t(p,c())},A)}function d(){r&&clearTimeout(r)}function p(A,...C){if(l){d();return}if(A){d(),u.call(null,A,...C);return}if(c()||o){d(),u.call(null,A,...C);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function _(A){m||(m=!0,d(),!l&&(i!==null?(A||(a=2),clearTimeout(i),h(0)):A||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function mD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){return t!==void 0}function Tp(t,e,n,s){if(s<e)throw bp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw bp(`Invalid value for '${t}'. Expected ${n} or less.`)}function yD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ea;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ea||(ea={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ao(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ea.NO_ERROR,c=r.getStatus();if(!a||vD(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ea.ABORT;s(!1,new ao(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ao(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());_D(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=cD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Dv():uD();o(c)}else{const c=lD();o(c)}};this.canceled_?n(!1,new ao(!1,null,!0)):this.backoffId_=gD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ao{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ED(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ID(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CD(t,e,n,s,i,r,o=!0){const a=yD(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return bD(l,e),ED(l,n),ID(l,r),TD(l,s),new wD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ta(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SD(this._location.path)}get storage(){return this._service}get parent(){const e=AD(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new ta(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fD(e)}}function Cp(t,e){const n=e==null?void 0:e[rD];return n==null?null:Bt.makeFromBucketSpec(n,t)}class RD{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=xv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oD,this._maxUploadRetryTime=aD,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=Cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ta(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new pD(Dv());{const o=CD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ap="@firebase/storage",Sp="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="storage";function OD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new RD(n,s,i,e,ks)}function PD(){dt(new rt(kD,OD,"PUBLIC").setMultipleInstances(!0)),Ve(Ap,Sp,""),Ve(Ap,Sp,"esm2017")}PD();function ND(t){return(e,n)=>{const s=nP(e,n).run(()=>ut(t));sP.set(e,s),rP(s,e)}}function xD(t){return tP?Or(__(t)):null}function DD(t,{firebaseApp:e,modules:n=[]}){t.provide(m_,e);for(const s of n)t.use(s.bind(null,e))}const MD={setup(){xD();const t=Tr(),e=Wt({email:"",password:"",error:""});async function n(){const s=Or();try{await QA(s,e.email,e.password),e.error&&(e.error=""),t.push("/")}catch(i){e.error=i.message,console.log(i)}}return{formFields:e,login:n}}},Za=t=>(mg("data-v-b84a979d"),t=t(),_g(),t),LD={class:"signup-page"},FD={class:"form-container"},UD=Za(()=>E("h2",null,"Sign In",-1)),BD={class:"form-group"},$D=Za(()=>E("label",{for:"email"},"Email",-1)),jD={class:"form-group"},HD=Za(()=>E("label",{for:"password"},"Password",-1)),WD=Za(()=>E("button",{type:"submit",class:"border border-black"},"Sign In",-1)),VD={key:0,class:"text-red-500"},qD={class:"text-gray-500"},zD={class:"text-purple-600"};function KD(t,e,n,s,i,r){const o=ke("RouterLink");return z(),ne("div",LD,[E("div",FD,[UD,E("form",{onSubmit:e[2]||(e[2]=Bg((...a)=>s.login&&s.login(...a),["prevent"]))},[E("div",BD,[$D,gs(E("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=a=>s.formFields.email=a),required:"",class:"border border-black"},null,512),[[_s,s.formFields.email]])]),E("div",jD,[HD,gs(E("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=a=>s.formFields.password=a),required:"",class:"border border-black"},null,512),[[_s,s.formFields.password]])]),WD,s.formFields.error?(z(),ne("p",VD,Re(s.formFields.error),1)):dn("",!0),E("p",qD,[ms("Create a acoount "),E("span",zD,[de(o,{to:{name:"Signup"}},{default:Bn(()=>[ms(" Sign Up")]),_:1})])])],32)])])}const GD=ot(MD,[["render",KD],["__scopeId","data-v-b84a979d"]]),YD=[{path:"/",name:"HomePage",component:tk,meta:{requireAuth:!0}},{path:"/wishlist",name:"Wishlist",component:Ek,meta:{requireAuth:!0}},{path:"/cart",name:"Cart",component:Qk,meta:{requireAuth:!0}},{path:"/product/:productId",name:"Product",component:pO,meta:{requireAuth:!0}},{path:"/signup",name:"Signup",component:RO,meta:{requireAuth:!0}},{path:"/login",name:"Signin",component:GD,meta:{requireAuth:!0}}];async function JD(t,e,n){const s=await iP();s&&(t.name==="Signup"||t.name==="Signin")?n({name:"HomePage"}):s||!s&&(t.name==="Signup"||t.name==="Signin")?n():n({name:"Signin"})}const Mv=d0({history:RT("/Shoppy_vue/"),routes:YD});Mv.beforeEach((t,e,n)=>{t.meta.requireAuth?JD(t,e,n):n()});const XD=(t,e)=>e.some(n=>t instanceof n);let Rp,kp;function QD(){return Rp||(Rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZD(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lv=new WeakMap,Jl=new WeakMap,Fv=new WeakMap,Uc=new WeakMap,Uh=new WeakMap;function eM(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Wn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lv.set(n,t)}).catch(()=>{}),Uh.set(e,t),e}function tM(t){if(Jl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Jl.set(t,e)}let Xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nM(t){Xl=t(Xl)}function sM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bc(this),e,...n);return Fv.set(s,e.sort?e.sort():[e]),Wn(s)}:ZD().includes(t)?function(...e){return t.apply(Bc(this),e),Wn(Lv.get(this))}:function(...e){return Wn(t.apply(Bc(this),e))}}function iM(t){return typeof t=="function"?sM(t):(t instanceof IDBTransaction&&tM(t),XD(t,QD())?new Proxy(t,Xl):t)}function Wn(t){if(t instanceof IDBRequest)return eM(t);if(Uc.has(t))return Uc.get(t);const e=iM(t);return e!==t&&(Uc.set(t,e),Uh.set(e,t)),e}const Bc=t=>Uh.get(t);function rM(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Wn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const oM=["get","getKey","getAll","getAllKeys","count"],aM=["put","add","delete","clear"],$c=new Map;function Op(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=aM.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||oM.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return $c.set(e,r),r}nM(t=>({...t,get:(e,n,s)=>Op(e,n)||t.get(e,n,s),has:(e,n)=>!!Op(e,n)||t.has(e,n)}));const Uv="@firebase/installations",Bh="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=1e4,$v=`w:${Bh}`,jv="FIS_v2",cM="https://firebaseinstallations.googleapis.com/v1",lM=60*60*1e3,uM="installations",hM="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},As=new Kn(uM,hM,dM);function Hv(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv({projectId:t}){return`${cM}/projects/${t}/installations`}function Vv(t){return{token:t.token,requestStatus:2,expiresIn:pM(t.expiresIn),creationTime:Date.now()}}async function qv(t,e){const s=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function zv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fM(t,{refreshToken:e}){const n=zv(t);return n.append("Authorization",gM(e)),n}async function Kv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pM(t){return Number(t.replace("s","000"))}function gM(t){return`${jv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Wv(t),i=zv(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:jv,appId:t.appId,sdkVersion:$v},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Kv(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Vv(l.authToken)}}else throw await qv("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=/^[cdef][\w-]{21}$/,Ql="";function vM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wM(t);return yM.test(n)?n:Ql}catch{return Ql}}function wM(t){return _M(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new Map;function Jv(t,e){const n=ec(t);Xv(n,e),EM(n,e)}function Xv(t,e){const n=Yv.get(t);if(n)for(const s of n)s(e)}function EM(t,e){const n=IM();n&&n.postMessage({key:t,fid:e}),bM()}let ls=null;function IM(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=t=>{Xv(t.data.key,t.data.fid)}),ls}function bM(){Yv.size===0&&ls&&(ls.close(),ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM="firebase-installations-database",CM=1,Ss="firebase-installations-store";let jc=null;function $h(){return jc||(jc=rM(TM,CM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}})),jc}async function na(t,e){const n=ec(t),i=(await $h()).transaction(Ss,"readwrite"),r=i.objectStore(Ss),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Jv(t,e.fid),e}async function Qv(t){const e=ec(t),s=(await $h()).transaction(Ss,"readwrite");await s.objectStore(Ss).delete(e),await s.done}async function tc(t,e){const n=ec(t),i=(await $h()).transaction(Ss,"readwrite"),r=i.objectStore(Ss),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Jv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(t){let e;const n=await tc(t.appConfig,s=>{const i=AM(s),r=SM(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Ql?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function AM(t){const e=t||{fid:vM(),registrationStatus:0};return Zv(e)}function SM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=RM(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kM(t)}:{installationEntry:e}}async function RM(t,e){try{const n=await mM(t,e);return na(t.appConfig,n)}catch(n){throw Hv(n)&&n.customData.serverCode===409?await Qv(t.appConfig):await na(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kM(t){let e=await Pp(t.appConfig);for(;e.registrationStatus===1;)await Gv(100),e=await Pp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await jh(t);return s||n}return e}function Pp(t){return tc(t,e=>{if(!e)throw As.create("installation-not-found");return Zv(e)})}function Zv(t){return OM(t)?{fid:t.fid,registrationStatus:0}:t}function OM(t){return t.registrationStatus===1&&t.registrationTime+Bv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM({appConfig:t,heartbeatServiceProvider:e},n){const s=NM(t,n),i=fM(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:$v,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Kv(()=>fetch(s,a));if(c.ok){const l=await c.json();return Vv(l)}else throw await qv("Generate Auth Token",c)}function NM(t,{fid:e}){return`${Wv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e=!1){let n;const s=await tc(t.appConfig,r=>{if(!ew(r))throw As.create("not-registered");const o=r.authToken;if(!e&&MM(o))return r;if(o.requestStatus===1)return n=xM(t,e),r;{if(!navigator.onLine)throw As.create("app-offline");const a=FM(r);return n=DM(t,a),a}});return n?await n:s.authToken}async function xM(t,e){let n=await Np(t.appConfig);for(;n.authToken.requestStatus===1;)await Gv(100),n=await Np(t.appConfig);const s=n.authToken;return s.requestStatus===0?Hh(t,e):s}function Np(t){return tc(t,e=>{if(!ew(e))throw As.create("not-registered");const n=e.authToken;return UM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function DM(t,e){try{const n=await PM(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await na(t.appConfig,s),n}catch(n){if(Hv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qv(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await na(t.appConfig,s)}throw n}}function ew(t){return t!==void 0&&t.registrationStatus===2}function MM(t){return t.requestStatus===2&&!LM(t)}function LM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lM}function FM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UM(t){return t.requestStatus===1&&t.requestTime+Bv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BM(t){const e=t,{installationEntry:n,registrationPromise:s}=await jh(e);return s?s.catch(console.error):Hh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $M(t,e=!1){const n=t;return await jM(n),(await Hh(n,e)).token}async function jM(t){const{registrationPromise:e}=await jh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){if(!t||!t.options)throw Hc("App Configuration");if(!t.name)throw Hc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hc(t){return As.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="installations",WM="installations-internal",VM=t=>{const e=t.getProvider("app").getImmediate(),n=HM(e),s=gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},qM=t=>{const e=t.getProvider("app").getImmediate(),n=gi(e,tw).getImmediate();return{getId:()=>BM(n),getToken:i=>$M(n,i)}};function zM(){dt(new rt(tw,VM,"PUBLIC")),dt(new rt(WM,qM,"PRIVATE"))}zM();Ve(Uv,Bh);Ve(Uv,Bh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="analytics",KM="firebase_id",GM="origin",YM=60*1e3,JM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nw="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new pi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function XM(t,e){const n=document.createElement("script");n.src=`${nw}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function QM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZM(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await sw(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){It.error(a)}t("config",i,r)}async function eL(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await sw(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){It.error(r)}}function tL(t,e,n,s){async function i(r,o,a){try{r==="event"?await eL(t,e,n,o,a):r==="config"?await ZM(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(c){It.error(c)}}return i}function nL(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=tL(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function sL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nw)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},St=new Kn("analytics","Analytics",iL);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=30,oL=1e3;class aL{constructor(e={},n=oL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iw=new aL;function cL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function lL(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:cL(s)},r=JM.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function uL(t,e=iw,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw St.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw St.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fL;return setTimeout(async()=>{a.abort()},n!==void 0?n:YM),rw({appId:s,apiKey:i,measurementId:r},o,a,e)}async function rw(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=iw){var r;const{appId:o,measurementId:a}=t;try{await hL(s,e)}catch(c){if(a)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await lL(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!dL(l)){if(i.deleteThrottleMetadata(o),a)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Xd(n,i.intervalMillis,rL):Xd(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),It.debug(`Calling attemptFetch again in ${u} millis`),rw(t,h,s,i)}}function hL(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(St.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dL(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class fL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pL(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(){if(Du())try{await Rm()}catch(t){return It.warn(St.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mL(t,e,n,s,i,r,o){var a;const c=uL(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>It.error(p)),e.push(c);const l=gL().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);sL(r)||XM(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[GM]="firebase",d.update=!0,h!=null&&(d[KM]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.app=e}_delete(){return delete Xi[this.app.options.appId],Promise.resolve()}}let Xi={},xp=[];const Dp={};let Wc="dataLayer",yL="gtag",Mp,ow,Lp=!1;function vL(){const t=[];if(Cm()&&t.push("This is a browser extension environment."),H0()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=St.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function wL(t,e,n){vL();const s=t.options.appId;if(!s)throw St.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(Xi[s]!=null)throw St.create("already-exists",{id:s});if(!Lp){QM(Wc);const{wrappedGtag:r,gtagCore:o}=nL(Xi,xp,Dp,Wc,yL);ow=r,Mp=o,Lp=!0}return Xi[s]=mL(t,xp,Dp,e,Mp,Wc,n),new _L(t)}function EL(t=Lu()){t=Pt(t);const e=gi(t,sa);return e.isInitialized()?e.getImmediate():IL(t)}function IL(t,e={}){const n=gi(t,sa);if(n.isInitialized()){const i=n.getImmediate();if(cr(e,n.getOptions()))return i;throw St.create("already-initialized")}return n.initialize({options:e})}function bL(t,e,n,s){t=Pt(t),pL(ow,Xi[t.app.options.appId],e,n,s).catch(i=>It.error(i))}const Fp="@firebase/analytics",Up="0.9.3";function TL(){dt(new rt(sa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return wL(s,i,n)},"PUBLIC")),dt(new rt("analytics-internal",t,"PRIVATE")),Ve(Fp,Up),Ve(Fp,Up,"esm2017");function t(e){try{const n=e.getProvider(sa).getImmediate();return{logEvent:(s,i,r)=>bL(n,s,i,r)}}catch(n){throw St.create("interop-component-reg-failed",{reason:n})}}}TL();console.log({BASE_URL:"/Shoppy_vue/",MODE:"production",DEV:!1,PROD:!0});const CL={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID,measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID},aw=Nm(CL);EL(aw);const nc=DI(uT);nc.use(FI());nc.use(Mv);nc.use(DD,{firebaseApp:aw,modules:[ND()]});nc.mount("#app");
