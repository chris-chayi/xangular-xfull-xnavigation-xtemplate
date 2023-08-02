"use strict";(self.webpackChunkfullNavigationTemplate=self.webpackChunkfullNavigationTemplate||[]).push([[431],{431:function(t,e,i){i.r(e),i.d(e,{ion_virtual_scroll:function(){return d}});var s=i(8239),n=i(1667);const l="item",r="header",o="footer",h=(t,e)=>{const i=a(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},a=(t,e)=>{switch(e){case l:return t.querySelector("template:not([name])");case r:return t.querySelector("template[name=header]");case o:return t.querySelector("template[name=footer]")}},c=(t,e,i,s,n,h,a,c,d,u,g,p)=>{const m=[],f=p+g;for(let v=g;v<f;v++){const g=t[v];if(n){const e=n(g,v,t);null!=e&&m.push({i:u++,type:r,value:e,index:v,height:i?i(e,v):a,reads:i?0:2,visible:!!i})}if(m.push({i:u++,type:l,value:g,index:v,height:e?e(g,v):d,reads:e?0:2,visible:!!e}),h){const e=h(g,v,t);null!=e&&m.push({i:u++,type:o,value:e,index:v,height:s?s(e,v):c,reads:s?0:2,visible:!!s})}}return m},d=class{constructor(t){(0,n.r)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}connectedCallback(){var t=this;return(0,s.Z)(function*(){const e=t.el.closest("ion-content");e?(t.scrollEl=yield e.getScrollElement(),t.contentEl=e,t.calcCells(),t.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")})()}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,e,i)=>{const s=e.find(e=>e.type===l&&e.index===t);return s?i[s.i]:-1})(t,this.cells,this.getHeightIndex()))}checkRange(t,e=-1){var i=this;return(0,s.Z)(function*(){if(!i.items)return;const s=-1===e?i.items.length-t:e,n=((t,e)=>0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===e))(i.cells,t),l=c(i.items,i.itemHeight,i.headerHeight,i.footerHeight,i.headerFn,i.footerFn,i.approxHeaderHeight,i.approxFooterHeight,i.approxItemHeight,n,t,s);i.cells=((t,e,i)=>{if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t})(i.cells,l,n),i.lastItemLen=i.items.length,i.indexDirty=Math.max(t-1,0),i.scheduleUpdate()})()}checkEnd(){var t=this;return(0,s.Z)(function*(){t.items&&t.checkRange(t.lastItemLen)})()}updateVirtualScroll(){!this.isEnabled||!this.scrollEl||(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,n.f)(this.readVS.bind(this)),(0,n.c)(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,n=i;for(;n&&n!==t;)s+=n.offsetTop,n=n.offsetParent;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=((t,e,i)=>({top:Math.max(t-100,0),bottom:t+e+100}))(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),s=((t,e,i)=>{const s=e.top,n=e.bottom;let l=0;for(;l<t.length&&!(t[l]>s);l++);const r=Math.max(l-2-1,0);for(;l<t.length&&!(t[l]>=n);l++);return{offset:r,length:Math.min(l+2,t.length)-r}})(i,e);!((t,e,i)=>t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length)(t,this.range,s)||(this.range=s,((t,e,i,s)=>{for(const o of t)o.change=0,o.d=!0;const n=[],l=s.offset+s.length;for(let o=s.offset;o<l;o++){const s=i[o],l=t.find(t=>t.d&&t.cell===s);if(l){const t=e[o];t!==l.top&&(l.top=t,l.change=1),l.d=!1}else n.push(s)}const r=t.filter(t=>t.d);for(const o of n){const i=r.find(t=>t.d&&t.cell.type===o.type),s=o.i;i?(i.d=!1,i.change=2,i.cell=o,i.top=e[s]):t.push({d:!1,cell:o,visible:!0,change:2,top:e[s]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})})(this.virtualDom,i,this.cells,s),this.nodeRender?((t,e,i,s)=>{const n=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),l=n.length;let r;for(let o=0;o<i.length;o++){const a=i[o],c=a.cell;if(2===a.change){if(o<l)r=n[o],e(r,c,o);else{const i=h(t,c.type);r=e(i,c,o)||i,r.classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=n[o];0!==a.change&&(r.style.transform=`translate3d(0,${a.top}px,0)`);const d=c.visible;a.visible!==d&&(d?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),a.visible=d),c.reads>0&&(s(c,r),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,n.j)(this))}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height!==e||!0!==t.visible)&&(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate())}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){!this.items||(this.lastItemLen=this.items.length,this.cells=c(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,e)=>{if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)})(this.heightIndex,this.cells.length),this.totalHeight=((t,e,i)=>{let s=t[i];for(let n=i;n<t.length;n++)t[n]=s,s+=e[n].height;return s})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const e=this.scrollEl;e&&(this.isEnabled=t,e.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{e.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case l:return this.renderItem(i,s);case r:return this.renderHeader(i,s);case o:return this.renderFooter(i,s)}}render(){return(0,n.h)(n.H,{style:{height:`${this.totalHeight}px`}},this.renderItem&&(0,n.h)(u,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t))))}get el(){return(0,n.i)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},u=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],n=e.vattrs||{};let l=n.class||"";return l+="virtual-item ",s.visible||(l+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},n),{class:l,style:Object.assign(Object.assign({},n.style),{transform:`translate3d(0,${s.top}px,0)`})})})});d.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);