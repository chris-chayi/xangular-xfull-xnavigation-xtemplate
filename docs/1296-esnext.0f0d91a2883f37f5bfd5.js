"use strict";(self.webpackChunkfullNavigationTemplate=self.webpackChunkfullNavigationTemplate||[]).push([[1296],{1296:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return D},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return l},resetKeyboardAssist:function(){return u},setKeyboardClose:function(){return c},setKeyboardOpen:function(){return f},startKeyboardAssist:function(){return d},trackViewportChanges:function(){return y}});const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},a={},s=!1;const u=()=>{r={},a={},s=!1},d=e=>{h(e),e.visualViewport&&(a=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),p()||l(e)?f(e):g(e)&&c(e)})},h=e=>{e.addEventListener("keyboardDidShow",t=>f(e,t)),e.addEventListener("keyboardDidHide",()=>c(e))},f=(e,t)=>{b(e,t),s=!0},c=e=>{w(e),s=!1},p=()=>!s&&r.width===a.width&&(r.height-a.height)*a.scale>150,l=e=>s&&!g(e),g=e=>s&&a.height===e.innerHeight,b=(e,t)=>{const n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-a.height}});e.dispatchEvent(n)},w=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},y=e=>{r=Object.assign({},a),a=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);