!function(){"use strict";function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(Z){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new _(n||[]);return o(a,"_invoke",{value:L(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}e.wrap=f;var h={};function p(){}function v(){}function d(){}var y={};l(y,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==r&&n.call(g,a)&&(y=g);var w=d.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):e.resolve(f).then(function(t){l.value=t,a(l)},function(t){return r("throw",t,a,u)})}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=d,o(w,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},b(w),l(w,c,"Generator"),l(w,a,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?i:String(i)),n)}var o,i}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=Object.defineProperty,i=function(t,e,r){return function(t,e,r){e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r}(t,"symbol"!=typeof e?e+"":e,r),r};(self.webpackChunkfullNavigationTemplate=self.webpackChunkfullNavigationTemplate||[]).push([[5285],{5285:function(r,o,a){a.r(o),a.d(o,{HomePageModule:function(){return O}});var u=a(8583),c=a(665),l=a(6624),f=a(2316),s=a(8239),h=a(639),p=function(){function t(){e(this,t),i(this,"rootPage")}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),v=p;i(v,"\u0275fac",function(t){return new(t||p)}),i(v,"\u0275cmp",h.Xpm({type:p,selectors:[["app-modal-base"]],decls:1,vars:1,consts:[[3,"root"]],template:function(t,e){1&t&&h._UZ(0,"ion-nav",0),2&t&&h.Q6J("root",e.rootPage)},directives:[l.O1,l.JE],styles:[""]}));var d=a(2065),y=function(){function r(t,n,o){e(this,r),i(this,"menuCtrl"),i(this,"modalController"),i(this,"routerOutlet"),this.menuCtrl=t,this.modalController=n,this.routerOutlet=o}return n(r,[{key:"ngOnInit",value:function(){}},{key:"openMenu",value:function(){this.menuCtrl.open("first")}},{key:"presentModal",value:function(){var e=this;return(0,s.Z)(t().mark(function r(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.modalController.create({presentingElement:e.routerOutlet.nativeEl,component:v,componentProps:{rootPage:d.a}});case 2:return t.next=4,t.sent.present();case 4:case"end":return t.stop()}},r)}))()}}]),r}(),m=y;i(m,"\u0275fac",function(t){return new(t||y)(h.Y36(l._q),h.Y36(l.IN),h.Y36(l.jP))}),i(m,"\u0275cmp",h.Xpm({type:y,selectors:[["app-home"]],decls:15,vars:0,consts:[["color","primary"],["slot","start"],[1,"ion-padding"],["expand","block","routerLink","/menu/tabs/home/details","routerDirection","forward"],["expand","block","routerLink","/blank","routerDirection","back"],["expand","block",3,"click"]],template:function(t,e){1&t&&(h.TgZ(0,"ion-header"),h.TgZ(1,"ion-toolbar",0),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-menu-button"),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5,"Home"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content",2),h.TgZ(7,"ion-button",3),h._uU(8," Forward to Details "),h.qZA(),h.TgZ(9,"ion-button",4),h._uU(10," Blank Page with no tabs "),h.qZA(),h.TgZ(11,"ion-button",5),h.NdJ("click",function(){return e.openMenu()}),h._uU(12," Open Menu "),h.qZA(),h.TgZ(13,"ion-button",5),h.NdJ("click",function(){return e.presentModal()}),h._uU(14,"Open Modal"),h.qZA(),h.qZA())},directives:[l.Gu,l.sr,l.Sm,l.fG,l.wd,l.W2,l.YG,l.YI,f.rH],styles:[""]}));var g=[{path:"",component:m}],w=n(function t(){e(this,t)}),b=w;i(b,"\u0275fac",function(t){return new(t||w)}),i(b,"\u0275mod",h.oAB({type:w})),i(b,"\u0275inj",h.cJS({imports:[[f.Bz.forChild(g)],f.Bz]}));var x=n(function t(){e(this,t)}),L=x;i(L,"\u0275fac",function(t){return new(t||x)}),i(L,"\u0275mod",h.oAB({type:x})),i(L,"\u0275inj",h.cJS({imports:[[u.ez,l.Pc]]}));var k=a(1673),E=n(function t(){e(this,t)}),O=E;i(O,"\u0275fac",function(t){return new(t||E)}),i(O,"\u0275mod",h.oAB({type:E})),i(O,"\u0275inj",h.cJS({imports:[[u.ez,c.u5,l.Pc,b,L,k.ModalContentPageModule]]}))}}])}();