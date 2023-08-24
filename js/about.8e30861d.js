"use strict";(self.webpackChunkreact_template_mobile=self.webpackChunkreact_template_mobile||[]).push([[443],{96953:function(e,r,t){t.r(r);var n=t(67294),o=t(50242),i=t(76269);r.default=(0,o.Pi)((function(){return n.createElement("div",{className:"about-root"},n.createElement("a",{href:"https://github.com/guokaigdg/react-template-mobile"},n.createElement(i.Z,{size:68,color:"#f9f4da"})),n.createElement("p",null,"Hello About"))}))},50242:function(e,r,t){t.d(r,{Qj:function(){return j},Pi:function(){return g},fv:function(){return P}});var n=t(68949),o=t(67294);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var i=t(73935);function a(e){e()}function u(e){return(0,n.Gf)(e)}var l=function(){function e(e){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var t=Date.now();r.registrations.forEach((function(n,o){t-n.registeredAt>=e&&(r.finalize(n.value),r.registrations.delete(o))})),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){this.registrations.set(t,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),c=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:l)((function(e){var r;null===(r=e.reaction)||void 0===r||r.dispose(),e.reaction=null})),f=!1;function s(){return f}var d=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a};function p(e){return"observer".concat(e)}var m=function(){};function b(){return new m}function w(e,r){if(void 0===r&&(r="observed"),s())return e();var t=d(o.useState(b),1)[0],i=d(o.useState(),2)[1],a=function(){return i([])},l=o.useRef(null);l.current||(l.current={reaction:null,mounted:!1,changedBeforeMount:!1});var f,m,w=l.current;if(w.reaction||(w.reaction=new n.le(p(r),(function(){w.mounted?a():w.changedBeforeMount=!0})),c.register(t,w,w)),o.useDebugValue(w.reaction,u),o.useEffect((function(){return c.unregister(w),w.mounted=!0,w.reaction?w.changedBeforeMount&&(w.changedBeforeMount=!1,a()):(w.reaction=new n.le(p(r),(function(){a()})),a()),function(){w.reaction.dispose(),w.reaction=null,w.mounted=!1,w.changedBeforeMount=!1}}),[]),w.reaction.track((function(){try{f=e()}catch(e){m=e}})),m)throw m;return f}var v="function"==typeof Symbol&&Symbol.for,y=v?Symbol.for("react.forward_ref"):"function"==typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,h=v?Symbol.for("react.memo"):"function"==typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function g(e,r){var t;if(h&&e.$$typeof===h)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(s())return e;var n=null!==(t=null==r?void 0:r.forwardRef)&&void 0!==t&&t,i=e,a=e.displayName||e.name;if(y&&e.$$typeof===y&&(n=!0,"function"!=typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var u,l,c=function(e,r){return w((function(){return i(e,r)}),a)};return""!==a&&(c.displayName=a),e.contextTypes&&(c.contextTypes=e.contextTypes),n&&(c=(0,o.forwardRef)(c)),c=(0,o.memo)(c),u=e,l=c,Object.keys(u).forEach((function(e){O[e]||Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(u,e))})),c}var O={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function j(e){var r=e.children,t=e.render,n=r||t;return"function"!=typeof n?null:w(n)}function P(e,r){return(0,o.useState)((function(){return(0,n.LO)(e(),r,{autoBind:!0})}))[0]}j.displayName="Observer";var x,S;(S=i.unstable_batchedUpdates)||(S=a),(0,n.jQ)({reactionScheduler:S});x=c.finalizeAllImmediately},91029:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(67294),o=t(92383),i=Object.defineProperty,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&c(e,t,r[t]);return e},s=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d=(0,n.forwardRef)(((e,r)=>{const t=e,{alt:i,color:a,size:u,weight:l,mirrored:c,children:d,weights:p}=t,m=s(t,["alt","color","size","weight","mirrored","children","weights"]),b=(0,n.useContext)(o.P),{color:w="currentColor",size:v,weight:y="regular",mirrored:h=!1}=b,g=s(b,["color","size","weight","mirrored"]);return n.createElement("svg",f(f({ref:r,xmlns:"http://www.w3.org/2000/svg",width:null!=u?u:v,height:null!=u?u:v,fill:null!=a?a:w,viewBox:"0 0 256 256",transform:c||h?"scale(-1, 1)":void 0},g),m),!!i&&n.createElement("title",null,i),d,p.get(null!=l?l:y))}));d.displayName="IconBase"},92383:function(e,r,t){t.d(r,{P:function(){return n}});const n=(0,t(67294).createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1})}}]);