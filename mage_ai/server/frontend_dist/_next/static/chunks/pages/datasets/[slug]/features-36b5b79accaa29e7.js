(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{628:function(n,t,e){"use strict";e.d(t,{FH:function(){return o}});var r=["Bad","Worse","Worst"],o=function(n){return r.includes(n)}},5009:function(n,t,e){"use strict";var r=e(7294),o=e(7618),c=e(5485),i=e(1533),a=e(5893);t.Z=function(n){var t=n.children,e=n.columnFlexNumbers,d=n.last,u=n.noHorizontalPadding,l=n.secondary;return(0,a.jsx)(i.gI,{last:d,noHorizontalPadding:u,secondary:l,children:(0,a.jsx)(c.Z,{alignItems:"center",children:r.Children.map(t,(function(n,t){return n&&(0,a.jsx)(o.Z,{flex:e[t],children:n},"row-card-item-".concat(t))}))})})}},1533:function(n,t,e){"use strict";e.d(t,{$B:function(){return d},VH:function(){return u},gI:function(){return l}});var r=e(2125),o=e(987),c=e(2631),i=e(515),a=1.75*i.iI,d=r.ZP.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-0"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;margin-bottom:","px;"," "," ",""],c.n_,c.n_,a,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).page,";\n    border: ").concat(c.YF,"px ").concat(c.M8," ").concat((n.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-top: none;\n  ")}),(function(n){return n.minHeight>0&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.scrollable&&"\n    margin-bottom: ".concat(i.iI,"px;  \n    overflow-y: auto; \n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),u=r.ZP.div.withConfig({displayName:"indexstyle__TitleStyle",componentId:"sc-13p7y8j-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,a,2*i.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).header,";\n    border: ").concat(c.YF,"px ").concat(c.M8," ").concat((n.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),l=r.ZP.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-2"})(["padding:","px ","px;"," "," "," ",""],a,2*i.iI,(function(n){return n.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(n){return!n.secondary&&"\n    background-color: ".concat((n.theme.background||o.Z.background).page,";\n  ")}),(function(n){return n.secondary&&"\n    background-color: ".concat((n.theme.background||o.Z.background).row,";\n  ")}),(function(n){return n.last&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n  ")}))},3610:function(n,t,e){"use strict";var r=e(5485),o=e(160),c=e(1533),i=e(5893);t.Z=function(n){var t=n.children,e=n.headerDetails,a=n.headerTitle,d=n.minHeight,u=n.scrollable;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.VH,{children:(0,i.jsxs)(r.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(o.ZP,{bold:!0,children:a}),e&&(0,i.jsx)(o.ZP,{children:e})]})}),(0,i.jsx)(c.$B,{minHeight:d,scrollable:u,children:t})]})}},1026:function(n,t,e){"use strict";e.d(t,{Z:function(){return j}});var r=e(9499),o=e(4730),c=e(7294),i=e(2125),a=e(7618),d=e(5485),u=e(8276),l=e(515),s=e(2631),f=e(5363),p=e(987),v=e(733),b=e.n(v),h=e(5893),g=function(n){var t=n.fullScreen,e=n.large,r=n.left,o=void 0===r?0:r,a=n.relative,d=n.right,u=void 0===d?0:d,s=n.small,f=n.top,v=void 0===f?0:f,g=(0,c.useState)(void 0),x=g[0],m=g[1],_=(0,c.useState)(void 0),y=_[0],Z=_[1],j=(0,c.useContext)(i.Ni),w=3*l.iI;if(e?w=5*l.iI:s&&(w=2*l.iI),(0,c.useEffect)((function(){m(window.document.body.offsetHeight),Z(window.document.body.offsetWidth)}),[x,y]),x&&y){var k=x-l.tr,I=(0,h.jsx)(b(),{color:(j.loader||p.Z.loader).color,height:w,type:"spin",width:w});return t?(0,h.jsx)("div",{style:{left:a?null:o+(y-w)/2-u,position:"fixed",top:v+k/2-w/2,zIndex:50},children:I}):I}return(0,h.jsx)("div",{})},x=e(1896),m=["afterIcon","beforeIcon","children","disabled","loading","onClick"];function _(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function y(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?_(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var Z=i.ZP.button.withConfig({displayName:"Button__ButtonStyle",componentId:"sc-1idlfoi-0"})(["background-color:",";border:none;border-color:",";color:",";display:block;font-family:",";padding:7px 16px;position:relative;z-index:0;"," "," "," "," "," "," "," "," "," "," "," "," "," "," ",""],p.Z.background.row,p.Z.interactive.defaultBorder,p.Z.content.active,f.nF,(function(n){return n.padding&&"\n    padding: ".concat(n.padding,";\n  ")}),(function(n){return!n.basic&&"\n    border-style: solid;\n    border-width: 1px;\n  "}),(function(n){return!n.borderRadiusLeft&&!n.borderRadiusRight&&!n.noBorder&&"\n    border-radius: ".concat(s.n_,"px;\n  ")}),(function(n){return!n.borderRadiusLeft&&n.borderRadiusRight&&"\n    border-radius: 0px ".concat(s.n_,"px ").concat(s.n_,"px 0px;\n  ")}),(function(n){return n.borderRadiusLeft&&!n.borderRadiusRight&&"\n    border-radius: ".concat(s.n_,"px 0px 0px ").concat(s.n_,"px;\n  ")}),(function(n){return n.noBorderRight&&"\n    border-right: none;\n  "}),(function(n){return!n.iconOnly&&n.large&&"\n    ".concat(x.ln,"\n  ")}),(function(n){return!n.iconOnly&&!n.large&&!n.small&&"\n    ".concat(x.iD,"\n  ")}),(function(n){return!n.iconOnly&&n.small&&"\n    ".concat(x.HC,"\n  ")}),(function(n){return n.transparent&&"\n    background-color: transparent; !important\n  "}),(function(n){return!n.disabled&&"\n    &:hover {\n      border-color: ".concat(p.Z.interactive.hoverBorder,";\n    }\n    &:active {\n      border-color: ").concat(p.Z.content.active,";\n    }\n  ")}),(function(n){return n.primary&&!n.disabled&&"\n    background-color: ".concat(p.Z.interactive.linkPrimary,";\n    color: ").concat(p.Z.monotone.white,";\n    border-color: ").concat(p.Z.interactive.linkPrimary,";\n    &:hover {\n      border-color: ").concat(p.Z.monotone.black,";\n    }\n    &:active {\n      background: ").concat(p.Z.interactive.focusBackground,";\n    }\n  ")}),(function(n){return n.disabled&&"\n    color: ".concat(p.Z.interactive.disabledBorder,";\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")}),(function(n){return n.selected&&"\n    border-color: ".concat(p.Z.content.active,";\n  ")}),(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")})),j=function(n){var t,e,r=n.afterIcon,i=n.beforeIcon,s=n.children,f=n.disabled,p=n.loading,v=n.onClick,b=(0,o.Z)(n,m),x={disabled:f,size:3*l.iI};return(0,h.jsx)(Z,y(y({},b),{},{disabled:f,onClick:function(n){null===n||void 0===n||n.preventDefault(),null===v||void 0===v||v(n)},children:(0,h.jsxs)(d.Z,{alignItems:"center",justifyContent:"center",children:[!p&&i&&(0,h.jsx)(u.Z,{mr:1,children:(0,h.jsx)(a.Z,{children:c.cloneElement(i,y(y({},x),{},{size:(null===(t=i.props)||void 0===t?void 0:t.size)||x.size}))})}),p&&(0,h.jsx)(g,{}),!p&&(0,h.jsx)(a.Z,{children:s}),!p&&r&&(0,h.jsx)(u.Z,{ml:1,children:(0,h.jsx)(a.Z,{children:c.cloneElement(r,y(y({},x),{},{size:(null===(e=r.props)||void 0===e?void 0:e.size)||x.size}))})})]})}))}},5828:function(n,t,e){"use strict";e.r(t);var r=e(6835),o=e(1163),c=e.n(o),i=e(7294),a=e(1026),d=e(5485),u=e(3481),l=e(8670),s=e(5009),f=e(3610),p=e(8276),v=e(160),b=e(8302),h=e(7851),g=e(515),x=e(686),m=e(628),_=e(5893);t.default=function(){var n,t=(0,o.useRouter)().query.slug,e=b.ZP.feature_sets.detail(t).data,y=(0,i.useMemo)((function(){return e}),[e]),Z=(0,i.useState)({id:t,metadata:{column_types:{}},statistics:{}}),j=Z[0],w=Z[1];(0,i.useEffect)((function(){return w(y)}),[y]);var k=(0,x.vI)(j),I=Object.entries((null===j||void 0===j||null===(n=j.metadata)||void 0===n?void 0:n.column_types)||{}),P=(0,_.jsx)(d.Z,{alignItems:"justify-right",flexDirection:"row-reverse",children:(0,_.jsx)(a.Z,{onClick:function(){return c().push("/datasets/".concat(t))},children:(0,_.jsx)(v.ZP,{bold:!0,children:" Dataset view "})})});return(0,_.jsxs)(u.Z,{centerAlign:!0,header:(0,_.jsx)(p.Z,{mt:g.iI}),children:[P,(0,_.jsx)(p.Z,{pb:3,pt:3,children:(0,_.jsx)(f.Z,{headerTitle:"columns",children:I.map((function(n,e){var o=(0,r.Z)(n,2),i=o[0],a=(o[1],j.statistics["".concat(i,"/quality")]),u=k[i];return(0,_.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(){c().push("/datasets/[slug]/features/[column]","/datasets/".concat(t,"/features/").concat(u))},preventDefault:!0,children:(0,_.jsxs)(s.Z,{columnFlexNumbers:[.5,.2,9,2],noHorizontalPadding:!0,secondary:e%2===1,children:[(0,_.jsx)(d.Z,{fullWidth:!0,justifyContent:"center",children:(0,_.jsx)(v.ZP,{children:e+1})}),(0,_.jsx)(h.sg,{secondary:!0}),(0,_.jsx)(v.ZP,{maxWidth:50*g.iI,overflowWrap:!0,children:i}),(0,_.jsx)(v.ZP,{bold:(0,m.FH)(a),danger:(0,m.FH)(a),children:a})]})},"".concat(i,"-").concat(e))}))})})]})}},686:function(n,t,e){"use strict";function r(n){var t,e;return n?null===(t=n.insights)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.reduce((function(n,t,e){return n[((null===t||void 0===t?void 0:t.feature)||{}).uuid]=e,n}),{}):{}}function o(n){var t,e;return n?null===(t=n.insights)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.reduce((function(n,t,e){var r=(null===t||void 0===t?void 0:t.feature)||{};return n[e]=r,n}),{}):{}}function c(n,t){if(!n)return{};var e=n.statistics;return{average:e["".concat(t,"/average")],completeness:e["".concat(t,"/completeness")],count:e["".concat(t,"/count")],count_distinct:e["".concat(t,"/count_distinct")],invalid_value_count:e["".concat(t,"/invalid_value_count")],invalid_value_rate:e["".concat(t,"/invalid_value_rate")],max:e["".concat(t,"/max")],max_null_seq:e["".concat(t,"/max_null_seq")],median:e["".concat(t,"/median")],min:e["".concat(t,"/min")],null_value_count:e["".concat(t,"/null_value_count")],null_value_rate:e["".concat(t,"/null_value_rate")],outlier_count:e["".concat(t,"/outlier_count")],quality:e["".concat(t,"/quality")],skew:e["".concat(t,"/skew")],sum:e["".concat(t,"/sum")],validity:e["".concat(t,"/validity")]}}e.d(t,{Tx:function(){return c},kx:function(){return o},vI:function(){return r}})},6562:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/[slug]/features",function(){return e(5828)}])}},function(n){n.O(0,[195,733,302,774,888,179],(function(){return t=6562,n(n.s=t);var t}));var t=n.O();_N_E=t}]);