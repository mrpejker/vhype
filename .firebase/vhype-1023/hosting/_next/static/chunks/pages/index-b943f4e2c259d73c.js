(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2627)}])},7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),o=r._(n(7294)),u=n(4450),l=n(2227),f=n(4364),i=n(109),a=n(3607),c=n(1823),s=n(9031),d=n(920),p=n(30),v=n(7192),b=n(7498),h=new Set;function prefetch(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(h.has(u))return;h.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,u,f,i,a,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:a,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let _=o.default.forwardRef(function(e,t){let n,r;let{href:l,as:f,children:h,prefetch:_=null,passHref:y,replace:g,shallow:O,scroll:E,locale:C,onClick:m,onMouseEnter:P,onTouchStart:T,legacyBehavior:j=!1,...M}=e;n=h,j&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let k=o.default.useContext(c.RouterContext),R=o.default.useContext(s.AppRouterContext),I=null!=k?k:R,A=!k,L=!1!==_,N=null===_?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:S,as:x}=o.default.useMemo(()=>{if(!k){let e=formatStringOrUrl(l);return{href:e,as:f?formatStringOrUrl(f):e}}let[e,t]=(0,u.resolveHref)(k,l,!0);return{href:e,as:f?(0,u.resolveHref)(k,f):t||e}},[k,l,f]),w=o.default.useRef(S),U=o.default.useRef(x);j&&(r=o.default.Children.only(n));let H=j?r&&"object"==typeof r&&r.ref:t,[K,D,F]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(U.current!==x||w.current!==S)&&(F(),U.current=x,w.current=S),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[x,H,S,F,K]);o.default.useEffect(()=>{I&&D&&L&&prefetch(I,S,x,{locale:C},{kind:N},A)},[x,S,D,C,L,null==k?void 0:k.locale,I,A,N]);let X={ref:V,onClick(e){j||"function"!=typeof m||m(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&linkClicked(e,I,S,x,g,O,E,C,A,L)},onMouseEnter(e){j||"function"!=typeof P||P(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!A)&&prefetch(I,S,x,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:N},A)},onTouchStart(e){j||"function"!=typeof T||T(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!A)&&prefetch(I,S,x,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:N},A)}};if((0,i.isAbsoluteUrl)(x))X.href=x;else if(!j||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(x,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);X.href=t||(0,v.addBasePath)((0,a.addLocale)(x,e,null==k?void 0:k.defaultLocale))}return j?o.default.cloneElement(r,X):o.default.createElement("a",{...M,...X},n)}),y=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),u="function"==typeof IntersectionObserver,l=new Map,f=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}function observe(e,t,n){let{id:r,observer:o,elements:u}=createObserver(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:l}=e,f=l||!u,[i,a]=(0,r.useState)(!1),c=(0,r.useRef)(null),s=(0,r.useCallback)(e=>{c.current=e},[]);(0,r.useEffect)(()=>{if(u){if(f||i)return;let e=c.current;if(e&&e.tagName){let r=observe(e,e=>e&&a(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=(0,o.requestIdleCallback)(()=>a(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,n,t,i,c.current]);let d=(0,r.useCallback)(()=>{a(!1)},[]);return[s,i,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2627:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return IndexPage}});var r=n(5893),o=n(1664),u=n.n(o);function IndexPage(){return(0,r.jsxs)("div",{children:["Hello World. ",(0,r.jsx)(u(),{href:"/about",children:"About"})]})}},1664:function(e,t,n){e.exports=n(5170)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);