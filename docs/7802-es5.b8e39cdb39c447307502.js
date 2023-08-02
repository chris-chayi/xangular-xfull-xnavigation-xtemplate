!function(){"use strict";function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),u=new S(n||[]);return i(a,"_invoke",{value:k(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var f={};function v(){}function d(){}function p(){}var y={};s(y,a,function(){return this});var b=Object.getPrototypeOf,g=b&&b(b(j([])));g&&g!==r&&n.call(g,a)&&(y=g);var m=p.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){function r(i,o,a,u){var c=h(t[i],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):e.resolve(l).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,u)})}u(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e(function(e,i){r(t,n,e,i)})}return o=o?o.then(i,i):i()}})}function k(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return _()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=p,i(m,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:d,configurable:!0}),d.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,u,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(m),s(m,c,"Generator"),s(m,a,function(){return this}),s(m,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),n)}var i,o}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkfullNavigationTemplate=self.webpackChunkfullNavigationTemplate||[]).push([[7802],{7802:function(r,i,o){o.r(i),o.d(i,{ion_tab:function(){return s},ion_tabs:function(){return l}});var a=o(8239),u=o(1667),c=o(504),s=function(){function r(t){e(this,r),(0,u.r)(this,t),this.loaded=!1,this.active=!1}return n(r,[{key:"componentWillLoad",value:function(){var e=this;return(0,a.Z)(t().mark(function r(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.active,!t.t0){t.next=4;break}return t.next=4,e.setActive();case 4:case"end":return t.stop()}},r)}))()}},{key:"setActive",value:function(){var e=this;return(0,a.Z)(t().mark(function r(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prepareLazyLoaded();case 2:e.active=!0;case 3:case"end":return t.stop()}},r)}))()}},{key:"changeActive",value:function(t){t&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,c.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var t=this.tab,e=this.active,r=this.component;return(0,u.h)(u.H,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-".concat(t),class:{"ion-page":void 0===r,"tab-hidden":!e}},(0,u.h)("slot",null))}},{key:"el",get:function(){return(0,u.i)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),r}();s.style=":host(.tab-hidden){display:none !important}";var l=function(){function r(t){var n=this;e(this,r),(0,u.r)(this,t),this.ionNavWillLoad=(0,u.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,u.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,u.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var e=t.detail,r=e.href,i=e.tab;if(n.useRouter&&void 0!==r){var o=document.querySelector("ion-router");o&&o.push(r)}else n.select(i)}}return n(r,[{key:"componentWillLoad",value:function(){var e=this;return(0,a.Z)(t().mark(function r(){var n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.useRouter||(e.useRouter=!!document.querySelector("ion-router")&&!e.el.closest("[no-router]")),e.useRouter){t.next=6;break}if(n=e.tabs,t.t0=n.length>0,!t.t0){t.next=6;break}return t.next=6,e.select(n[0]);case 6:e.ionNavWillLoad.emit();case 7:case"end":return t.stop()}},r)}))()}},{key:"componentWillRender",value:function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:function(e){var r=this;return(0,a.Z)(t().mark(function n(){var i;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=h(r.tabs,e),t.t0=!!r.shouldSwitch(i),!t.t0){t.next=9;break}return t.next=5,r.setActive(i);case 5:return t.next=7,r.notifyRouter();case 7:r.tabSwitch(),t.t0=!0;case 9:return t.abrupt("return",t.t0);case 10:case"end":return t.stop()}},n)}))()}},{key:"getTab",value:function(e){var r=this;return(0,a.Z)(t().mark(function n(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h(r.tabs,e));case 1:case"end":return t.stop()}},n)}))()}},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(e){var r=this;return(0,a.Z)(t().mark(function n(){var i;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=h(r.tabs,e),!r.shouldSwitch(i)){t.next=7;break}return t.next=4,r.setActive(i);case 4:t.t0={changed:!0,element:r.selectedTab,markVisible:function(){return r.tabSwitch()}},t.next=8;break;case 7:t.t0={changed:!1,element:r.selectedTab};case 8:return t.abrupt("return",t.t0);case 9:case"end":return t.stop()}},n)}))()}},{key:"getRouteId",value:function(){var e=this;return(0,a.Z)(t().mark(function r(){var n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.selectedTab&&e.selectedTab.tab,t.abrupt("return",void 0!==n?{id:n,element:e.selectedTab}:void 0);case 2:case"end":return t.stop()}},r)}))()}},{key:"setActive",value:function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return(0,u.h)(u.H,{onIonTabButtonClick:this.onTabClicked},(0,u.h)("slot",{name:"top"}),(0,u.h)("div",{class:"tabs-inner"},(0,u.h)("slot",null)),(0,u.h)("slot",{name:"bottom"}))}},{key:"el",get:function(){return(0,u.i)(this)}}]),r}(),h=function(t,e){var r="string"==typeof e?t.find(function(t){return t.tab===e}):e;return r||console.error('tab with id: "'.concat(r,'" does not exist')),r};l.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}])}();