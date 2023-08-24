"use strict";(self.webpackChunkreact_template_mobile=self.webpackChunkreact_template_mobile||[]).push([[893],{33975:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(67294),o=r(50242),i=r.p+"images/web.7c251027..png",a=r(79703),u=(0,o.Pi)((function(){return n.createElement("div",{className:"home-icon-root"},n.createElement(a.Z,{svgName:"apple",svgClass:"icon-top"}),n.createElement("img",{className:"about-img",src:i,alt:""}),n.createElement(a.Z,{svgName:"my",color:"pink",svgClass:"icon-my"}),n.createElement(a.Z,{svgName:"loop",color:"#1db02e"}),n.createElement(a.Z,{svgName:"loading",color:"#1db02e"}))}))},50242:function(e,t,r){r.d(t,{Qj:function(){return S},Pi:function(){return g},fv:function(){return j}});var n=r(68949),o=r(67294);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var i=r(73935);function a(e){e()}function u(e){return(0,n.Gf)(e)}var c=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach((function(n,o){r-n.registeredAt>=e&&(t.finalize(n.value),t.registrations.delete(o))})),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),l=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:c)((function(e){var t;null===(t=e.reaction)||void 0===t||t.dispose(),e.reaction=null})),f=!1;function s(){return f}var m=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a};function p(e){return"observer".concat(e)}var d=function(){};function b(){return new d}function v(e,t){if(void 0===t&&(t="observed"),s())return e();var r=m(o.useState(b),1)[0],i=m(o.useState(),2)[1],a=function(){return i([])},c=o.useRef(null);c.current||(c.current={reaction:null,mounted:!1,changedBeforeMount:!1});var f,d,v=c.current;if(v.reaction||(v.reaction=new n.le(p(t),(function(){v.mounted?a():v.changedBeforeMount=!0})),l.register(r,v,v)),o.useDebugValue(v.reaction,u),o.useEffect((function(){return l.unregister(v),v.mounted=!0,v.reaction?v.changedBeforeMount&&(v.changedBeforeMount=!1,a()):(v.reaction=new n.le(p(t),(function(){a()})),a()),function(){v.reaction.dispose(),v.reaction=null,v.mounted=!1,v.changedBeforeMount=!1}}),[]),v.reaction.track((function(){try{f=e()}catch(e){d=e}})),d)throw d;return f}var y="function"==typeof Symbol&&Symbol.for,w=y?Symbol.for("react.forward_ref"):"function"==typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,h=y?Symbol.for("react.memo"):"function"==typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function g(e,t){var r;if(h&&e.$$typeof===h)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(s())return e;var n=null!==(r=null==t?void 0:t.forwardRef)&&void 0!==r&&r,i=e,a=e.displayName||e.name;if(w&&e.$$typeof===w&&(n=!0,"function"!=typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var u,c,l=function(e,t){return v((function(){return i(e,t)}),a)};return""!==a&&(l.displayName=a),e.contextTypes&&(l.contextTypes=e.contextTypes),n&&(l=(0,o.forwardRef)(l)),l=(0,o.memo)(l),u=e,c=l,Object.keys(u).forEach((function(e){O[e]||Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(u,e))})),l}var O={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function S(e){var t=e.children,r=e.render,n=t||r;return"function"!=typeof n?null:v(n)}function j(e,t){return(0,o.useState)((function(){return(0,n.LO)(e(),t,{autoBind:!0})}))[0]}S.displayName="Observer";var E,P;(P=i.unstable_batchedUpdates)||(P=a),(0,n.jQ)({reactionScheduler:P});E=l.finalizeAllImmediately}}]);