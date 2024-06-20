import{g as fn,r as d,m as _e,q as dn,j as R}from"./app-DYtwV6Uu.js";import{H as pn,M as mn,F as hn}from"./FooterLayout-DC44yu0G.js";const Ie=Math.min,Se=Math.max,dt=Math.round,ft=Math.floor,he=e=>({x:e,y:e}),vn={left:"right",right:"left",bottom:"top",top:"bottom"},yn={start:"end",end:"start"};function _t(e,t,o){return Se(e,Ie(t,o))}function tt(e,t){return typeof e=="function"?e(t):e}function Ae(e){return e.split("-")[0]}function nt(e){return e.split("-")[1]}function Ut(e){return e==="x"?"y":"x"}function Rt(e){return e==="y"?"height":"width"}function ht(e){return["top","bottom"].includes(Ae(e))?"y":"x"}function Tt(e){return Ut(ht(e))}function gn(e,t,o){o===void 0&&(o=!1);const n=nt(e),s=Tt(e),r=Rt(s);let l=s==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=pt(l)),[l,pt(l)]}function wn(e){const t=pt(e);return[St(e),t,St(t)]}function St(e){return e.replace(/start|end/g,t=>yn[t])}function bn(e,t,o){const n=["left","right"],s=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:n:t?n:s;case"left":case"right":return t?r:l;default:return[]}}function xn(e,t,o,n){const s=nt(e);let r=bn(Ae(e),o==="start",n);return s&&(r=r.map(l=>l+"-"+s),t&&(r=r.concat(r.map(St)))),r}function pt(e){return e.replace(/left|right|bottom|top/g,t=>vn[t])}function En(e){return{top:0,right:0,bottom:0,left:0,...e}}function Zt(e){return typeof e!="number"?En(e):{top:e,right:e,bottom:e,left:e}}function mt(e){const{x:t,y:o,width:n,height:s}=e;return{width:n,height:s,top:o,left:t,right:t+n,bottom:o+s,x:t,y:o}}function Bt(e,t,o){let{reference:n,floating:s}=e;const r=ht(t),l=Tt(t),i=Rt(l),c=Ae(t),a=r==="y",m=n.x+n.width/2-s.width/2,p=n.y+n.height/2-s.height/2,x=n[i]/2-s[i]/2;let f;switch(c){case"top":f={x:m,y:n.y-s.height};break;case"bottom":f={x:m,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:p};break;case"left":f={x:n.x-s.width,y:p};break;default:f={x:n.x,y:n.y}}switch(nt(t)){case"start":f[l]-=x*(o&&a?-1:1);break;case"end":f[l]+=x*(o&&a?-1:1);break}return f}const _n=async(e,t,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:l}=o,i=r.filter(Boolean),c=await(l.isRTL==null?void 0:l.isRTL(t));let a=await l.getElementRects({reference:e,floating:t,strategy:s}),{x:m,y:p}=Bt(a,n,c),x=n,f={},h=0;for(let y=0;y<i.length;y++){const{name:E,fn:w}=i[y],{x:_,y:S,data:T,reset:O}=await w({x:m,y:p,initialPlacement:n,placement:x,strategy:s,middlewareData:f,rects:a,platform:l,elements:{reference:e,floating:t}});m=_??m,p=S??p,f={...f,[E]:{...f[E],...T}},O&&h<=50&&(h++,typeof O=="object"&&(O.placement&&(x=O.placement),O.rects&&(a=O.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:s}):O.rects),{x:m,y:p}=Bt(a,x,c)),y=-1)}return{x:m,y:p,placement:x,strategy:s,middlewareData:f}};async function Qt(e,t){var o;t===void 0&&(t={});const{x:n,y:s,platform:r,rects:l,elements:i,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:m="viewport",elementContext:p="floating",altBoundary:x=!1,padding:f=0}=tt(t,e),h=Zt(f),E=i[x?p==="floating"?"reference":"floating":p],w=mt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(E)))==null||o?E:E.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(i.floating)),boundary:a,rootBoundary:m,strategy:c})),_=p==="floating"?{x:n,y:s,width:l.floating.width,height:l.floating.height}:l.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(i.floating)),T=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},O=mt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:_,offsetParent:S,strategy:c}):_);return{top:(w.top-O.top+h.top)/T.y,bottom:(O.bottom-w.bottom+h.bottom)/T.y,left:(w.left-O.left+h.left)/T.x,right:(O.right-w.right+h.right)/T.x}}const Sn=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:s,rects:r,platform:l,elements:i,middlewareData:c}=t,{element:a,padding:m=0}=tt(e,t)||{};if(a==null)return{};const p=Zt(m),x={x:o,y:n},f=Tt(s),h=Rt(f),y=await l.getDimensions(a),E=f==="y",w=E?"top":"left",_=E?"bottom":"right",S=E?"clientHeight":"clientWidth",T=r.reference[h]+r.reference[f]-x[f]-r.floating[h],O=x[f]-r.reference[f],z=await(l.getOffsetParent==null?void 0:l.getOffsetParent(a));let N=z?z[S]:0;(!N||!await(l.isElement==null?void 0:l.isElement(z)))&&(N=i.floating[S]||r.floating[h]);const X=T/2-O/2,ee=N/2-y[h]/2-1,ae=Ie(p[w],ee),oe=Ie(p[_],ee),M=ae,re=N-y[h]-oe,C=N/2-y[h]/2+X,W=_t(M,C,re),P=!c.arrow&&nt(s)!=null&&C!==W&&r.reference[h]/2-(C<M?ae:oe)-y[h]/2<0,F=P?C<M?C-M:C-re:0;return{[f]:x[f]+F,data:{[f]:W,centerOffset:C-W-F,...P&&{alignmentOffset:F}},reset:P}}}),An=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:s,middlewareData:r,rects:l,initialPlacement:i,platform:c,elements:a}=t,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:x,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:y=!0,...E}=tt(e,t);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=Ae(s),_=Ae(i)===i,S=await(c.isRTL==null?void 0:c.isRTL(a.floating)),T=x||(_||!y?[pt(i)]:wn(i));!x&&h!=="none"&&T.push(...xn(i,y,h,S));const O=[i,...T],z=await Qt(t,E),N=[];let X=((n=r.flip)==null?void 0:n.overflows)||[];if(m&&N.push(z[w]),p){const M=gn(s,l,S);N.push(z[M[0]],z[M[1]])}if(X=[...X,{placement:s,overflows:N}],!N.every(M=>M<=0)){var ee,ae;const M=(((ee=r.flip)==null?void 0:ee.index)||0)+1,re=O[M];if(re)return{data:{index:M,overflows:X},reset:{placement:re}};let C=(ae=X.filter(W=>W.overflows[0]<=0).sort((W,P)=>W.overflows[1]-P.overflows[1])[0])==null?void 0:ae.placement;if(!C)switch(f){case"bestFit":{var oe;const W=(oe=X.map(P=>[P.placement,P.overflows.filter(F=>F>0).reduce((F,ue)=>F+ue,0)]).sort((P,F)=>P[1]-F[1])[0])==null?void 0:oe[0];W&&(C=W);break}case"initialPlacement":C=i;break}if(s!==C)return{reset:{placement:C}}}return{}}}};async function On(e,t){const{placement:o,platform:n,elements:s}=e,r=await(n.isRTL==null?void 0:n.isRTL(s.floating)),l=Ae(o),i=nt(o),c=ht(o)==="y",a=["left","top"].includes(l)?-1:1,m=r&&c?-1:1,p=tt(t,e);let{mainAxis:x,crossAxis:f,alignmentAxis:h}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return i&&typeof h=="number"&&(f=i==="end"?h*-1:h),c?{x:f*m,y:x*a}:{x:x*a,y:f*m}}const Rn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:s,y:r,placement:l,middlewareData:i}=t,c=await On(t,e);return l===((o=i.offset)==null?void 0:o.placement)&&(n=i.arrow)!=null&&n.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:l}}}}},Tn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:s}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:i={fn:E=>{let{x:w,y:_}=E;return{x:w,y:_}}},...c}=tt(e,t),a={x:o,y:n},m=await Qt(t,c),p=ht(Ae(s)),x=Ut(p);let f=a[x],h=a[p];if(r){const E=x==="y"?"top":"left",w=x==="y"?"bottom":"right",_=f+m[E],S=f-m[w];f=_t(_,f,S)}if(l){const E=p==="y"?"top":"left",w=p==="y"?"bottom":"right",_=h+m[E],S=h-m[w];h=_t(_,h,S)}const y=i.fn({...t,[x]:f,[p]:h});return{...y,data:{x:y.x-o,y:y.y-n}}}}};function Fe(e){return Jt(e)?(e.nodeName||"").toLowerCase():"#document"}function U(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function de(e){var t;return(t=(Jt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Jt(e){return e instanceof Node||e instanceof U(e).Node}function ie(e){return e instanceof Element||e instanceof U(e).Element}function ce(e){return e instanceof HTMLElement||e instanceof U(e).HTMLElement}function It(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof U(e).ShadowRoot}function ot(e){const{overflow:t,overflowX:o,overflowY:n,display:s}=ne(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(s)}function Ln(e){return["table","td","th"].includes(Fe(e))}function Lt(e){const t=Ct(),o=ne(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Cn(e){let t=ve(e);for(;ce(t)&&!Me(t);){if(Lt(t))return t;t=ve(t)}return null}function Ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Me(e){return["html","body","#document"].includes(Fe(e))}function ne(e){return U(e).getComputedStyle(e)}function vt(e){return ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ve(e){if(Fe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||It(e)&&e.host||de(e);return It(t)?t.host:t}function en(e){const t=ve(e);return Me(t)?e.ownerDocument?e.ownerDocument.body:e.body:ce(t)&&ot(t)?t:en(t)}function et(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=en(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),l=U(s);return r?t.concat(l,l.visualViewport||[],ot(s)?s:[],l.frameElement&&o?et(l.frameElement):[]):t.concat(s,et(s,[],o))}function tn(e){const t=ne(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=ce(e),r=s?e.offsetWidth:o,l=s?e.offsetHeight:n,i=dt(o)!==r||dt(n)!==l;return i&&(o=r,n=l),{width:o,height:n,$:i}}function kt(e){return ie(e)?e:e.contextElement}function Be(e){const t=kt(e);if(!ce(t))return he(1);const o=t.getBoundingClientRect(),{width:n,height:s,$:r}=tn(t);let l=(r?dt(o.width):o.width)/n,i=(r?dt(o.height):o.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!i||!Number.isFinite(i))&&(i=1),{x:l,y:i}}const kn=he(0);function nn(e){const t=U(e);return!Ct()||!t.visualViewport?kn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Nn(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==U(e)?!1:t}function Oe(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),r=kt(e);let l=he(1);t&&(n?ie(n)&&(l=Be(n)):l=Be(e));const i=Nn(r,o,n)?nn(r):he(0);let c=(s.left+i.x)/l.x,a=(s.top+i.y)/l.y,m=s.width/l.x,p=s.height/l.y;if(r){const x=U(r),f=n&&ie(n)?U(n):n;let h=x,y=h.frameElement;for(;y&&n&&f!==h;){const E=Be(y),w=y.getBoundingClientRect(),_=ne(y),S=w.left+(y.clientLeft+parseFloat(_.paddingLeft))*E.x,T=w.top+(y.clientTop+parseFloat(_.paddingTop))*E.y;c*=E.x,a*=E.y,m*=E.x,p*=E.y,c+=S,a+=T,h=U(y),y=h.frameElement}}return mt({width:m,height:p,x:c,y:a})}const jn=[":popover-open",":modal"];function Nt(e){return jn.some(t=>{try{return e.matches(t)}catch{return!1}})}function Dn(e){let{elements:t,rect:o,offsetParent:n,strategy:s}=e;const r=s==="fixed",l=de(n),i=t?Nt(t.floating):!1;if(n===l||i&&r)return o;let c={scrollLeft:0,scrollTop:0},a=he(1);const m=he(0),p=ce(n);if((p||!p&&!r)&&((Fe(n)!=="body"||ot(l))&&(c=vt(n)),ce(n))){const x=Oe(n);a=Be(n),m.x=x.x+n.clientLeft,m.y=x.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-c.scrollLeft*a.x+m.x,y:o.y*a.y-c.scrollTop*a.y+m.y}}function $n(e){return Array.from(e.getClientRects())}function on(e){return Oe(de(e)).left+vt(e).scrollLeft}function Pn(e){const t=de(e),o=vt(e),n=e.ownerDocument.body,s=Se(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=Se(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+on(e);const i=-o.scrollTop;return ne(n).direction==="rtl"&&(l+=Se(t.clientWidth,n.clientWidth)-s),{width:s,height:r,x:l,y:i}}function Bn(e,t){const o=U(e),n=de(e),s=o.visualViewport;let r=n.clientWidth,l=n.clientHeight,i=0,c=0;if(s){r=s.width,l=s.height;const a=Ct();(!a||a&&t==="fixed")&&(i=s.offsetLeft,c=s.offsetTop)}return{width:r,height:l,x:i,y:c}}function In(e,t){const o=Oe(e,!0,t==="fixed"),n=o.top+e.clientTop,s=o.left+e.clientLeft,r=ce(e)?Be(e):he(1),l=e.clientWidth*r.x,i=e.clientHeight*r.y,c=s*r.x,a=n*r.y;return{width:l,height:i,x:c,y:a}}function Mt(e,t,o){let n;if(t==="viewport")n=Bn(e,o);else if(t==="document")n=Pn(de(e));else if(ie(t))n=In(t,o);else{const s=nn(e);n={...t,x:t.x-s.x,y:t.y-s.y}}return mt(n)}function rn(e,t){const o=ve(e);return o===t||!ie(o)||Me(o)?!1:ne(o).position==="fixed"||rn(o,t)}function Mn(e,t){const o=t.get(e);if(o)return o;let n=et(e,[],!1).filter(i=>ie(i)&&Fe(i)!=="body"),s=null;const r=ne(e).position==="fixed";let l=r?ve(e):e;for(;ie(l)&&!Me(l);){const i=ne(l),c=Lt(l);!c&&i.position==="fixed"&&(s=null),(r?!c&&!s:!c&&i.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ot(l)&&!c&&rn(e,l))?n=n.filter(m=>m!==l):s=i,l=ve(l)}return t.set(e,n),n}function Fn(e){let{element:t,boundary:o,rootBoundary:n,strategy:s}=e;const l=[...o==="clippingAncestors"?Nt(t)?[]:Mn(t,this._c):[].concat(o),n],i=l[0],c=l.reduce((a,m)=>{const p=Mt(t,m,s);return a.top=Se(p.top,a.top),a.right=Ie(p.right,a.right),a.bottom=Ie(p.bottom,a.bottom),a.left=Se(p.left,a.left),a},Mt(t,i,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Wn(e){const{width:t,height:o}=tn(e);return{width:t,height:o}}function Hn(e,t,o){const n=ce(t),s=de(t),r=o==="fixed",l=Oe(e,!0,r,t);let i={scrollLeft:0,scrollTop:0};const c=he(0);if(n||!n&&!r)if((Fe(t)!=="body"||ot(s))&&(i=vt(t)),n){const p=Oe(t,!0,r,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else s&&(c.x=on(s));const a=l.left+i.scrollLeft-c.x,m=l.top+i.scrollTop-c.y;return{x:a,y:m,width:l.width,height:l.height}}function xt(e){return ne(e).position==="static"}function Ft(e,t){return!ce(e)||ne(e).position==="fixed"?null:t?t(e):e.offsetParent}function sn(e,t){const o=U(e);if(Nt(e))return o;if(!ce(e)){let s=ve(e);for(;s&&!Me(s);){if(ie(s)&&!xt(s))return s;s=ve(s)}return o}let n=Ft(e,t);for(;n&&Ln(n)&&xt(n);)n=Ft(n,t);return n&&Me(n)&&xt(n)&&!Lt(n)?o:n||Cn(e)||o}const Vn=async function(e){const t=this.getOffsetParent||sn,o=this.getDimensions,n=await o(e.floating);return{reference:Hn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function zn(e){return ne(e).direction==="rtl"}const Kn={convertOffsetParentRelativeRectToViewportRelativeRect:Dn,getDocumentElement:de,getClippingRect:Fn,getOffsetParent:sn,getElementRects:Vn,getClientRects:$n,getDimensions:Wn,getScale:Be,isElement:ie,isRTL:zn};function qn(e,t){let o=null,n;const s=de(e);function r(){var i;clearTimeout(n),(i=o)==null||i.disconnect(),o=null}function l(i,c){i===void 0&&(i=!1),c===void 0&&(c=1),r();const{left:a,top:m,width:p,height:x}=e.getBoundingClientRect();if(i||t(),!p||!x)return;const f=ft(m),h=ft(s.clientWidth-(a+p)),y=ft(s.clientHeight-(m+x)),E=ft(a),_={rootMargin:-f+"px "+-h+"px "+-y+"px "+-E+"px",threshold:Se(0,Ie(1,c))||1};let S=!0;function T(O){const z=O[0].intersectionRatio;if(z!==c){if(!S)return l();z?l(!1,z):n=setTimeout(()=>{l(!1,1e-7)},1e3)}S=!1}try{o=new IntersectionObserver(T,{..._,root:s.ownerDocument})}catch{o=new IntersectionObserver(T,_)}o.observe(e)}return l(!0),r}function Xn(e,t,o,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,a=kt(e),m=s||r?[...a?et(a):[],...et(t)]:[];m.forEach(w=>{s&&w.addEventListener("scroll",o,{passive:!0}),r&&w.addEventListener("resize",o)});const p=a&&i?qn(a,o):null;let x=-1,f=null;l&&(f=new ResizeObserver(w=>{let[_]=w;_&&_.target===a&&f&&(f.unobserve(t),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var S;(S=f)==null||S.observe(t)})),o()}),a&&!c&&f.observe(a),f.observe(t));let h,y=c?Oe(e):null;c&&E();function E(){const w=Oe(e);y&&(w.x!==y.x||w.y!==y.y||w.width!==y.width||w.height!==y.height)&&o(),y=w,h=requestAnimationFrame(E)}return o(),()=>{var w;m.forEach(_=>{s&&_.removeEventListener("scroll",o),r&&_.removeEventListener("resize",o)}),p==null||p(),(w=f)==null||w.disconnect(),f=null,c&&cancelAnimationFrame(h)}}const Yn=Rn,Gn=Tn,Un=An,Zn=Sn,Wt=(e,t,o)=>{const n=new Map,s={platform:Kn,...o},r={...s.platform,_c:n};return _n(e,t,{...s,platform:r})};var ln={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function o(){for(var r="",l=0;l<arguments.length;l++){var i=arguments[l];i&&(r=s(r,n(i)))}return r}function n(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return o.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var l="";for(var i in r)t.call(r,i)&&r[i]&&(l=s(l,i));return l}function s(r,l){return l?r?r+" "+l:r+l:r}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(ln);var Qn=ln.exports;const At=fn(Qn);var Ht={};const Jn="react-tooltip-core-styles",eo="react-tooltip-base-styles",Vt={core:!1,base:!1};function zt({css:e,id:t=eo,type:o="base",ref:n}){var s,r;if(!e||typeof document>"u"||Vt[o]||o==="core"&&typeof process<"u"&&(!((s=process==null?void 0:Ht)===null||s===void 0)&&s.REACT_TOOLTIP_DISABLE_CORE_STYLES)||o!=="base"&&typeof process<"u"&&(!((r=process==null?void 0:Ht)===null||r===void 0)&&r.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;o==="core"&&(t=Jn),n||(n={});const{insertAt:l}=n;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const i=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=t,c.type="text/css",l==="top"&&i.firstChild?i.insertBefore(c,i.firstChild):i.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e)),Vt[o]=!0}const Kt=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:o=null,place:n="top",offset:s=10,strategy:r="absolute",middlewares:l=[Yn(Number(s)),Un({fallbackAxisSideDirection:"start"}),Gn({padding:5})],border:i})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};if(t===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};const c=l;return o?(c.push(Zn({element:o,padding:5})),Wt(e,t,{placement:n,strategy:r,middleware:c}).then(({x:a,y:m,placement:p,middlewareData:x})=>{var f,h;const y={left:`${a}px`,top:`${m}px`,border:i},{x:E,y:w}=(f=x.arrow)!==null&&f!==void 0?f:{x:0,y:0},_=(h={top:"bottom",right:"left",bottom:"top",left:"right"}[p.split("-")[0]])!==null&&h!==void 0?h:"bottom",S=i&&{borderBottom:i,borderRight:i};let T=0;if(i){const O=`${i}`.match(/(\d+)px/);T=O!=null&&O[1]?Number(O[1]):1}return{tooltipStyles:y,tooltipArrowStyles:{left:E!=null?`${E}px`:"",top:w!=null?`${w}px`:"",right:"",bottom:"",...S,[_]:`-${4+T}px`},place:p}})):Wt(e,t,{placement:"bottom",strategy:r,middleware:c}).then(({x:a,y:m,placement:p})=>({tooltipStyles:{left:`${a}px`,top:`${m}px`},tooltipArrowStyles:{},place:p}))},qt=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),Xt=(e,t,o)=>{let n=null;const s=function(...r){const l=()=>{n=null};!n&&(e.apply(this,r),n=setTimeout(l,t))};return s.cancel=()=>{n&&(clearTimeout(n),n=null)},s},Yt=e=>e!==null&&!Array.isArray(e)&&typeof e=="object",Ot=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((s,r)=>Ot(s,t[r]));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!Yt(e)||!Yt(t))return e===t;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every(s=>Ot(e[s],t[s]))},to=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(o=>{const n=t.getPropertyValue(o);return n==="auto"||n==="scroll"})},Gt=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(to(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},no=typeof window<"u"?d.useLayoutEffect:d.useEffect,oo="DEFAULT_TOOLTIP_ID",ro={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},so=d.createContext({getTooltipData:()=>ro});function cn(e=oo){return d.useContext(so).getTooltipData(e)}var Pe={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Et={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const lo=({forwardRef:e,id:t,className:o,classNameArrow:n,variant:s="dark",anchorId:r,anchorSelect:l,place:i="top",offset:c=10,events:a=["hover"],openOnClick:m=!1,positionStrategy:p="absolute",middlewares:x,wrapper:f,delayShow:h=0,delayHide:y=0,float:E=!1,hidden:w=!1,noArrow:_=!1,clickable:S=!1,closeOnEsc:T=!1,closeOnScroll:O=!1,closeOnResize:z=!1,openEvents:N,closeEvents:X,globalCloseEvents:ee,imperativeModeOnly:ae,style:oe,position:M,afterShow:re,afterHide:C,content:W,contentWrapperRef:P,isOpen:F,defaultIsOpen:ue=!1,setIsOpen:ye,activeAnchor:D,setActiveAnchor:Re,border:rt,opacity:st,arrowColor:lt,role:yt="tooltip"})=>{var We;const K=d.useRef(null),Te=d.useRef(null),H=d.useRef(null),Z=d.useRef(null),ge=d.useRef(null),[pe,gt]=d.useState({tooltipStyles:{},tooltipArrowStyles:{},place:i}),[Y,it]=d.useState(!1),[we,be]=d.useState(!1),[j,He]=d.useState(null),Ve=d.useRef(!1),ze=d.useRef(null),{anchorRefs:Ke,setActiveAnchor:ct}=cn(t),Le=d.useRef(!1),[me,qe]=d.useState([]),xe=d.useRef(!1),Ce=m||a.includes("click"),Xe=Ce||(N==null?void 0:N.click)||(N==null?void 0:N.dblclick)||(N==null?void 0:N.mousedown),ke=N?{...N}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!N&&Ce&&Object.assign(ke,{mouseenter:!1,focus:!1,click:!0});const Ye=X?{...X}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!X&&Ce&&Object.assign(Ye,{mouseleave:!1,blur:!1});const te=ee?{...ee}:{escape:T||!1,scroll:O||!1,resize:z||!1,clickOutsideAnchor:Xe||!1};ae&&(Object.assign(ke,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(Ye,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(te,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),no(()=>(xe.current=!0,()=>{xe.current=!1}),[]);const $=u=>{xe.current&&(u&&be(!0),setTimeout(()=>{xe.current&&(ye==null||ye(u),F===void 0&&it(u))},10))};d.useEffect(()=>{if(F===void 0)return()=>null;F&&be(!0);const u=setTimeout(()=>{it(F)},10);return()=>{clearTimeout(u)}},[F]),d.useEffect(()=>{if(Y!==Ve.current)if(ge.current&&clearTimeout(ge.current),Ve.current=Y,Y)re==null||re();else{const u=(g=>{const b=g.match(/^([\d.]+)(ms|s)$/);if(!b)return 0;const[,I,V]=b;return Number(I)*(V==="ms"?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));ge.current=setTimeout(()=>{be(!1),He(null),C==null||C()},u+25)}},[Y]);const at=u=>{gt(g=>Ot(g,u)?g:u)},Ge=(u=h)=>{H.current&&clearTimeout(H.current),we?$(!0):H.current=setTimeout(()=>{$(!0)},u)},Ne=(u=y)=>{Z.current&&clearTimeout(Z.current),Z.current=setTimeout(()=>{Le.current||$(!1)},u)},Ue=u=>{var g;if(!u)return;const b=(g=u.currentTarget)!==null&&g!==void 0?g:u.target;if(!(b!=null&&b.isConnected))return Re(null),void ct({current:null});h?Ge():$(!0),Re(b),ct({current:b}),Z.current&&clearTimeout(Z.current)},je=()=>{S?Ne(y||100):y?Ne():$(!1),H.current&&clearTimeout(H.current)},De=({x:u,y:g})=>{var b;const I={getBoundingClientRect:()=>({x:u,y:g,width:0,height:0,top:g,left:u,right:u,bottom:g})};Kt({place:(b=j==null?void 0:j.place)!==null&&b!==void 0?b:i,offset:c,elementReference:I,tooltipReference:K.current,tooltipArrowReference:Te.current,strategy:p,middlewares:x,border:rt}).then(V=>{at(V)})},$e=u=>{if(!u)return;const g=u,b={x:g.clientX,y:g.clientY};De(b),ze.current=b},Ze=u=>{var g;if(!Y)return;const b=u.target;b.isConnected&&(!((g=K.current)===null||g===void 0)&&g.contains(b)||[document.querySelector(`[id='${r}']`),...me].some(I=>I==null?void 0:I.contains(b))||($(!1),H.current&&clearTimeout(H.current)))},ut=Xt(Ue,50),B=Xt(je,50),Q=u=>{B.cancel(),ut(u)},v=()=>{ut.cancel(),B()},A=d.useCallback(()=>{var u,g;const b=(u=j==null?void 0:j.position)!==null&&u!==void 0?u:M;b?De(b):E?ze.current&&De(ze.current):D!=null&&D.isConnected&&Kt({place:(g=j==null?void 0:j.place)!==null&&g!==void 0?g:i,offset:c,elementReference:D,tooltipReference:K.current,tooltipArrowReference:Te.current,strategy:p,middlewares:x,border:rt}).then(I=>{xe.current&&at(I)})},[Y,D,W,oe,i,j==null?void 0:j.place,c,p,M,j==null?void 0:j.position,E]);d.useEffect(()=>{var u,g;const b=new Set(Ke);me.forEach(L=>{b.add({current:L})});const I=document.querySelector(`[id='${r}']`);I&&b.add({current:I});const V=()=>{$(!1)},se=Gt(D),le=Gt(K.current);te.scroll&&(window.addEventListener("scroll",V),se==null||se.addEventListener("scroll",V),le==null||le.addEventListener("scroll",V));let q=null;te.resize?window.addEventListener("resize",V):D&&K.current&&(q=Xn(D,K.current,A,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const J=L=>{L.key==="Escape"&&$(!1)};te.escape&&window.addEventListener("keydown",J),te.clickOutsideAnchor&&window.addEventListener("click",Ze);const k=[],Qe=L=>{Y&&(L==null?void 0:L.target)===D||Ue(L)},an=L=>{Y&&(L==null?void 0:L.target)===D&&je()},jt=["mouseenter","mouseleave","focus","blur"],Dt=["click","dblclick","mousedown","mouseup"];Object.entries(ke).forEach(([L,fe])=>{fe&&(jt.includes(L)?k.push({event:L,listener:Q}):Dt.includes(L)&&k.push({event:L,listener:Qe}))}),Object.entries(Ye).forEach(([L,fe])=>{fe&&(jt.includes(L)?k.push({event:L,listener:v}):Dt.includes(L)&&k.push({event:L,listener:an}))}),E&&k.push({event:"pointermove",listener:$e});const $t=()=>{Le.current=!0},Pt=()=>{Le.current=!1,je()};return S&&!Xe&&((u=K.current)===null||u===void 0||u.addEventListener("mouseenter",$t),(g=K.current)===null||g===void 0||g.addEventListener("mouseleave",Pt)),k.forEach(({event:L,listener:fe})=>{b.forEach(wt=>{var Je;(Je=wt.current)===null||Je===void 0||Je.addEventListener(L,fe)})}),()=>{var L,fe;te.scroll&&(window.removeEventListener("scroll",V),se==null||se.removeEventListener("scroll",V),le==null||le.removeEventListener("scroll",V)),te.resize?window.removeEventListener("resize",V):q==null||q(),te.clickOutsideAnchor&&window.removeEventListener("click",Ze),te.escape&&window.removeEventListener("keydown",J),S&&!Xe&&((L=K.current)===null||L===void 0||L.removeEventListener("mouseenter",$t),(fe=K.current)===null||fe===void 0||fe.removeEventListener("mouseleave",Pt)),k.forEach(({event:wt,listener:Je})=>{b.forEach(un=>{var bt;(bt=un.current)===null||bt===void 0||bt.removeEventListener(wt,Je)})})}},[D,A,we,Ke,me,N,X,ee,Ce,h,y]),d.useEffect(()=>{var u,g;let b=(g=(u=j==null?void 0:j.anchorSelect)!==null&&u!==void 0?u:l)!==null&&g!==void 0?g:"";!b&&t&&(b=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`);const I=new MutationObserver(V=>{const se=[],le=[];V.forEach(q=>{if(q.type==="attributes"&&q.attributeName==="data-tooltip-id"&&(q.target.getAttribute("data-tooltip-id")===t?se.push(q.target):q.oldValue===t&&le.push(q.target)),q.type==="childList"){if(D){const J=[...q.removedNodes].filter(k=>k.nodeType===1);if(b)try{le.push(...J.filter(k=>k.matches(b))),le.push(...J.flatMap(k=>[...k.querySelectorAll(b)]))}catch{}J.some(k=>{var Qe;return!!(!((Qe=k==null?void 0:k.contains)===null||Qe===void 0)&&Qe.call(k,D))&&(be(!1),$(!1),Re(null),H.current&&clearTimeout(H.current),Z.current&&clearTimeout(Z.current),!0)})}if(b)try{const J=[...q.addedNodes].filter(k=>k.nodeType===1);se.push(...J.filter(k=>k.matches(b))),se.push(...J.flatMap(k=>[...k.querySelectorAll(b)]))}catch{}}}),(se.length||le.length)&&qe(q=>[...q.filter(J=>!le.includes(J)),...se])});return I.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{I.disconnect()}},[t,l,j==null?void 0:j.anchorSelect,D]),d.useEffect(()=>{A()},[A]),d.useEffect(()=>{if(!(P!=null&&P.current))return()=>null;const u=new ResizeObserver(()=>{setTimeout(()=>A())});return u.observe(P.current),()=>{u.disconnect()}},[W,P==null?void 0:P.current]),d.useEffect(()=>{var u;const g=document.querySelector(`[id='${r}']`),b=[...me,g];D&&b.includes(D)||Re((u=me[0])!==null&&u!==void 0?u:g)},[r,me,D]),d.useEffect(()=>(ue&&$(!0),()=>{H.current&&clearTimeout(H.current),Z.current&&clearTimeout(Z.current)}),[]),d.useEffect(()=>{var u;let g=(u=j==null?void 0:j.anchorSelect)!==null&&u!==void 0?u:l;if(!g&&t&&(g=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),g)try{const b=Array.from(document.querySelectorAll(g));qe(b)}catch{qe([])}},[t,l,j==null?void 0:j.anchorSelect]),d.useEffect(()=>{H.current&&(clearTimeout(H.current),Ge(h))},[h]);const G=(We=j==null?void 0:j.content)!==null&&We!==void 0?We:W,Ee=Y&&Object.keys(pe.tooltipStyles).length>0;return d.useImperativeHandle(e,()=>({open:u=>{if(u!=null&&u.anchorSelect)try{document.querySelector(u.anchorSelect)}catch{return void console.warn(`[react-tooltip] "${u.anchorSelect}" is not a valid CSS selector`)}He(u??null),u!=null&&u.delay?Ge(u.delay):$(!0)},close:u=>{u!=null&&u.delay?Ne(u.delay):$(!1)},activeAnchor:D,place:pe.place,isOpen:!!(we&&!w&&G&&Ee)})),we&&!w&&G?_e.createElement(f,{id:t,role:yt,className:At("react-tooltip",Pe.tooltip,Et.tooltip,Et[s],o,`react-tooltip__place-${pe.place}`,Pe[Ee?"show":"closing"],Ee?"react-tooltip__show":"react-tooltip__closing",p==="fixed"&&Pe.fixed,S&&Pe.clickable),onTransitionEnd:u=>{ge.current&&clearTimeout(ge.current),Y||u.propertyName!=="opacity"||(be(!1),He(null),C==null||C())},style:{...oe,...pe.tooltipStyles,opacity:st!==void 0&&Ee?st:void 0},ref:K},G,_e.createElement(f,{className:At("react-tooltip-arrow",Pe.arrow,Et.arrow,n,_&&Pe.noArrow),style:{...pe.tooltipArrowStyles,background:lt?`linear-gradient(to right bottom, transparent 50%, ${lt} 50%)`:void 0},ref:Te})):null},io=({content:e})=>_e.createElement("span",{dangerouslySetInnerHTML:{__html:e}});_e.forwardRef(({id:e,anchorId:t,anchorSelect:o,content:n,html:s,render:r,className:l,classNameArrow:i,variant:c="dark",place:a="top",offset:m=10,wrapper:p="div",children:x=null,events:f=["hover"],openOnClick:h=!1,positionStrategy:y="absolute",middlewares:E,delayShow:w=0,delayHide:_=0,float:S=!1,hidden:T=!1,noArrow:O=!1,clickable:z=!1,closeOnEsc:N=!1,closeOnScroll:X=!1,closeOnResize:ee=!1,openEvents:ae,closeEvents:oe,globalCloseEvents:M,imperativeModeOnly:re=!1,style:C,position:W,isOpen:P,defaultIsOpen:F=!1,disableStyleInjection:ue=!1,border:ye,opacity:D,arrowColor:Re,setIsOpen:rt,afterShow:st,afterHide:lt,role:yt="tooltip"},We)=>{const[K,Te]=d.useState(n),[H,Z]=d.useState(s),[ge,pe]=d.useState(a),[gt,Y]=d.useState(c),[it,we]=d.useState(m),[be,j]=d.useState(w),[He,Ve]=d.useState(_),[ze,Ke]=d.useState(S),[ct,Le]=d.useState(T),[me,qe]=d.useState(p),[xe,Ce]=d.useState(f),[Xe,ke]=d.useState(y),[Ye,te]=d.useState(null),[$,at]=d.useState(null),Ge=d.useRef(ue),{anchorRefs:Ne,activeAnchor:Ue}=cn(e),je=B=>B==null?void 0:B.getAttributeNames().reduce((Q,v)=>{var A;return v.startsWith("data-tooltip-")&&(Q[v.replace(/^data-tooltip-/,"")]=(A=B==null?void 0:B.getAttribute(v))!==null&&A!==void 0?A:null),Q},{}),De=B=>{const Q={place:v=>{var A;pe((A=v)!==null&&A!==void 0?A:a)},content:v=>{Te(v??n)},html:v=>{Z(v??s)},variant:v=>{var A;Y((A=v)!==null&&A!==void 0?A:c)},offset:v=>{we(v===null?m:Number(v))},wrapper:v=>{var A;qe((A=v)!==null&&A!==void 0?A:p)},events:v=>{const A=v==null?void 0:v.split(" ");Ce(A??f)},"position-strategy":v=>{var A;ke((A=v)!==null&&A!==void 0?A:y)},"delay-show":v=>{j(v===null?w:Number(v))},"delay-hide":v=>{Ve(v===null?_:Number(v))},float:v=>{Ke(v===null?S:v==="true")},hidden:v=>{Le(v===null?T:v==="true")},"class-name":v=>{te(v)}};Object.values(Q).forEach(v=>v(null)),Object.entries(B).forEach(([v,A])=>{var G;(G=Q[v])===null||G===void 0||G.call(Q,A)})};d.useEffect(()=>{Te(n)},[n]),d.useEffect(()=>{Z(s)},[s]),d.useEffect(()=>{pe(a)},[a]),d.useEffect(()=>{Y(c)},[c]),d.useEffect(()=>{we(m)},[m]),d.useEffect(()=>{j(w)},[w]),d.useEffect(()=>{Ve(_)},[_]),d.useEffect(()=>{Ke(S)},[S]),d.useEffect(()=>{Le(T)},[T]),d.useEffect(()=>{ke(y)},[y]),d.useEffect(()=>{Ge.current!==ue&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[ue]),d.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:ue==="core",disableBase:ue}}))},[]),d.useEffect(()=>{var B;const Q=new Set(Ne);let v=o;if(!v&&e&&(v=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),v)try{document.querySelectorAll(v).forEach(g=>{Q.add({current:g})})}catch{console.warn(`[react-tooltip] "${v}" is not a valid CSS selector`)}const A=document.querySelector(`[id='${t}']`);if(A&&Q.add({current:A}),!Q.size)return()=>null;const G=(B=$??A)!==null&&B!==void 0?B:Ue.current,Ee=new MutationObserver(g=>{g.forEach(b=>{var I;if(!G||b.type!=="attributes"||!(!((I=b.attributeName)===null||I===void 0)&&I.startsWith("data-tooltip-")))return;const V=je(G);De(V)})}),u={attributes:!0,childList:!1,subtree:!1};if(G){const g=je(G);De(g),Ee.observe(G,u)}return()=>{Ee.disconnect()}},[Ne,Ue,$,t,o]),d.useEffect(()=>{C!=null&&C.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),ye&&!qt("border",`${ye}`)&&console.warn(`[react-tooltip] "${ye}" is not a valid \`border\`.`),C!=null&&C.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),D&&!qt("opacity",`${D}`)&&console.warn(`[react-tooltip] "${D}" is not a valid \`opacity\`.`)},[]);let $e=x;const Ze=d.useRef(null);if(r){const B=r({content:($==null?void 0:$.getAttribute("data-tooltip-content"))||K||null,activeAnchor:$});$e=B?_e.createElement("div",{ref:Ze,className:"react-tooltip-content-wrapper"},B):null}else K&&($e=K);H&&($e=_e.createElement(io,{content:H}));const ut={forwardRef:We,id:e,anchorId:t,anchorSelect:o,className:At(l,Ye),classNameArrow:i,content:$e,contentWrapperRef:Ze,place:ge,variant:gt,offset:it,wrapper:me,events:xe,openOnClick:h,positionStrategy:Xe,middlewares:E,delayShow:be,delayHide:He,float:ze,hidden:ct,noArrow:O,clickable:z,closeOnEsc:N,closeOnScroll:X,closeOnResize:ee,openEvents:ae,closeEvents:oe,globalCloseEvents:M,imperativeModeOnly:re,style:C,position:W,isOpen:P,defaultIsOpen:F,border:ye,opacity:D,arrowColor:Re,setIsOpen:rt,afterShow:st,afterHide:lt,activeAnchor:$,setActiveAnchor:B=>at(B),role:yt};return _e.createElement(lo,{...ut})});typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||zt({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||zt({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});function co(){const e=dn().props.auth.user,t=({text:o,text2:n,children:s})=>{const[r,l]=d.useState(!1);return R.jsxs("div",{className:"tooltipContainer text-gray-950",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[s,R.jsx("br",{}),r&&R.jsxs("div",{className:"tooltip text-xs",children:["  ",o,R.jsx("br",{}),"  ",n]})]})};return R.jsx(R.Fragment,{children:R.jsxs("nav",{className:" px-5 h-10v flex flex-row justify-start space-x-8 items-center bg-gray-400 pb-3",children:[R.jsx("a",{className:"btn btn-sm mx-1",href:"/",children:"Home"}),e&&R.jsxs(R.Fragment,{children:[R.jsx("a",{className:"btn btn-sm",href:"films",children:"Películas"}),R.jsx("a",{className:"btn btn-sm",href:"others",children:"Otros"}),R.jsx("a",{className:"btn btn-sm",href:"awards",children:"Premios"})]}),!e&&R.jsxs(R.Fragment,{children:[R.jsx(t,{text:"Regístrese ó",text2:"Inicie sesión",children:R.jsx("button",{className:"btn btn-sm mx-1",disabled:!0,children:"Películas"})}),R.jsx(t,{text:"Regístrese ó",text2:"Inicie sesión",children:R.jsx("button",{className:"btn btn-sm mx-2",disabled:!0,children:"Otros"})}),R.jsx(t,{text:"Regístrese ó",text2:"Inicie sesión",children:R.jsx("button",{className:"btn btn-sm mx-1",disabled:!0,children:"Premios"})})]})]})})}function fo({children:e}){return R.jsxs(R.Fragment,{children:[R.jsx(pn,{}),R.jsx(co,{}),R.jsx(mn,{children:e}),R.jsx(hn,{})]})}export{fo as L};