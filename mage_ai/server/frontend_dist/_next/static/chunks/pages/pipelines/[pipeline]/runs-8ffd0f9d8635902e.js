(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{59739:function(e,n,t){"use strict";var i=t(56669);function r(){}function u(){}u.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,u,o){if(o!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:r};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},27125:function(e,n,t){"use strict";var i=t(82684),r=t(12691),u=t.n(r),o=t(34376),l=t.n(o),c=t(9518),s=t(66050),a=t(60328),d=t(16634),p=t(10919),f=t(98781),v=t(86673),h=t(17903),b=t(19711),g=t(10503),m=t(49125),x=t(44162),j=t(24224),_=t(28598);n.Z=function(e){var n=e.blockRuns,t=e.onClickRow,r=e.pipeline,o=e.selectedRun,y=(0,i.useContext)(c.ThemeContext),Z=(r||{}).uuid,O=(0,i.useMemo)((function(){return r.blocks||[]}),[r]),w=(0,i.useMemo)((function(){return(0,j.HK)(O,(function(e){return e.uuid}))}),[O]);return(0,_.jsx)(h.Z,{columnFlex:[null,1,3,2,null,null],columns:[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}],isSelectedRow:function(e){return n[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t,i,o=e.block_uuid,c=e.completed_at,h=e.created_at,j=e.id,O=e.pipeline_schedule_id,P=e.pipeline_schedule_name,k=e.status,C=o,I=C.split(":");f.q.INTEGRATION===r.type&&(C=I[0],t=I[1],i=I[2]);var S=w[C];return S||(S=w[I[0]]),[(0,_.jsx)(b.ZP,{monospace:!0,default:!0,children:h}),(0,_.jsx)(b.ZP,{danger:s.V.FAILED===k,default:s.V.CANCELLED===k,info:s.V.INITIAL===k,monospace:!0,success:s.V.COMPLETED===k,warning:s.V.RUNNING===k,children:k}),(0,_.jsx)(u(),{as:"/pipelines/".concat(Z,"/triggers/").concat(O),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,_.jsx)(p.Z,{bold:!0,sameColorAsText:!0,children:P})}),(0,_.jsx)(u(),{as:"/pipelines/".concat(Z,"/edit?block_uuid=").concat(C),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,_.jsxs)(p.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,_.jsx)(d.Z,{color:(0,x.qn)(null===(n=S)||void 0===n?void 0:n.type,{theme:y}).accent,size:1.5*m.iI,square:!0}),(0,_.jsx)(v.Z,{mr:1}),(0,_.jsxs)(b.ZP,{monospace:!0,children:[C,t&&": ",t&&(0,_.jsx)(b.ZP,{default:!0,inline:!0,monospace:!0,children:t}),i>=0&&": ",i>=0&&(0,_.jsx)(b.ZP,{default:!0,inline:!0,monospace:!0,children:i})]})]})}),(0,_.jsx)(b.ZP,{monospace:!0,default:!0,children:c||"-"}),(0,_.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l().push("/pipelines/".concat(Z,"/logs?block_run_id[]=").concat(j))},children:(0,_.jsx)(g.B4,{default:!0,size:2*m.iI})})]})),uuid:"block-runs"})}},56681:function(e,n,t){"use strict";t.d(n,{G:function(){return j},Z:function(){return _}});var i=t(75582),r=t(82394),u=t(26304),o=t(32316),l=t(22673),c=t(86532),s=t(86673),a=t(19711),d=t(17903),p=t(49125),f=t(19395),v=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={uuid:"Run details"},x={uuid:"Dependency tree"},j=[x,m];function _(e){var n=e.height,t=e.heightOffset,r=e.pipeline,b=e.selectedRun,_=e.selectedTab,y=e.setSelectedTab,Z=g({},(0,u.Z)(e,h));b?Z.blockStatus=(0,f.IJ)(null===b||void 0===b?void 0:b.block_runs):Z.noStatus=!0;var O=(null===b||void 0===b?void 0:b.variables)||{};null!==b&&void 0!==b&&b.event_variables&&(O.event=b.event_variables);var w=[];O&&JSON.stringify(O,null,2).split("\n").forEach((function(e){w.push("    ".concat(e))}));var P=b&&[["Run ID",null===b||void 0===b?void 0:b.id],["Variables",(0,v.jsx)(l.Z,{language:"json",small:!0,source:w.join("\n")})]],k=b&&(0,v.jsx)(s.Z,{pb:p.cd,px:p.cd,children:(0,v.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:P.map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[(0,v.jsx)(a.ZP,{monospace:!0,muted:!0,children:t}),(0,v.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:r})]})),uuid:"LogDetail"})}),C=_&&y;return(0,v.jsxs)(v.Fragment,{children:[C&&(0,v.jsx)(s.Z,{py:p.cd,children:(0,v.jsx)(o.Z,{onClickTab:y,selectedTabUUID:null===_||void 0===_?void 0:_.uuid,tabs:j})}),(!C||x.uuid===(null===_||void 0===_?void 0:_.uuid))&&(0,v.jsx)(c.Z,g(g({},Z),{},{height:n,heightOffset:(t||0)+(C?76:0),pipeline:r})),m.uuid===(null===_||void 0===_?void 0:_.uuid)&&k]})}},22673:function(e,n,t){"use strict";var i=t(82684),r=t(73199),u=t.n(r),o=t(71593),l=t(9518),c=t(65292),s=t(23831),a=t(2005),d=t(49125),p=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,r=e.showLineNumbers,f=e.small,v=e.source,h=e.wrapLines,b=(0,i.useContext)(l.ThemeContext);return(0,p.jsx)(u(),{source:v,renderers:{code:function(e){var i=e.value;return(0,p.jsx)(o.Z,{customStyle:{backgroundColor:(b.background||s.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,paddingBottom:2*d.iI,paddingTop:2*d.iI,maxWidth:t},lineNumberStyle:{color:(b.content||s.Z.content).muted},language:n,showLineNumbers:r,style:c._4,useInlineStyles:!0,wrapLines:h,children:i})}}})}},32316:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(82684),r=t(60328),u=t(67971),o=t(882),l=t(86673),c=t(99994),s=t(9518),a=t(49125),d=t(37391),p=s.default.div.withConfig({displayName:"indexstyle__TabsContainerStyle",componentId:"sc-segf7l-0"})(["padding-left:","px;padding-right:","px;"," "," ",""],a.cd*a.iI,a.cd*a.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.allowScroll&&"\n    overflow: auto;\n  "}),d.w5),f=t(28598);var v=function(e){var n=e.allowScroll,t=e.contained,s=e.noPadding,d=e.onClickTab,v=e.selectedTabUUID,h=e.tabs,b=(0,i.useMemo)((function(){var e=h.length,n=[];return h.forEach((function(t,i){var s=t.Icon,p=t.IconSelected,h=t.label,b=t.uuid,g=b===v,m=g&&p||s,x=h?h():b,j=(0,f.jsxs)(u.Z,{alignItems:"center",children:[m&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{default:!g,size:2*a.iI}),(0,f.jsx)(l.Z,{mr:1})]}),x]});i>=1&&e>=2&&n.push((0,f.jsx)("div",{style:{marginLeft:1.5*a.iI}},"spacing-".concat(b))),g?n.push((0,f.jsx)(o.Z,{backgroundGradient:c.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,onClick:function(){return d(t)},paddingUnitsHorizontal:2,paddingUnitsVertical:1.25,children:j},b)):n.push((0,f.jsx)("div",{style:{padding:4},children:(0,f.jsx)(r.Z,{borderLess:!0,default:!0,onClick:function(){return d(t)},outline:!0,children:j},"button-tab-".concat(b))}))})),n}),[d,v,h]),g=(0,f.jsx)(u.Z,{alignItems:"center",children:b});return t?g:(0,f.jsx)(p,{allowScroll:n,noPadding:s,children:g})}},77980:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var i=t(77837),r=t(82394),u=t(38860),o=t.n(u),l=t(82684),c=t(34376),s=t(16953),a=t(27125),d=t(32316),p=t(67971),f=t(9518),v=t(23831),h=f.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:2;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||v.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||v.Z.borders).medium,";\n  ")})),b=t(51099),g=t(76623),m=t(28598);var x=function(e){var n=e.size;return(0,m.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("g",{"clip-path":"url(#clip0_3007_70027)",children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75 6.6859C1.75 3.95988 3.95988 1.75 6.6859 1.75h.98788c-.23022.41608-.36128.89466-.36128 1.40385s.13106.98777.36128 1.40384h-.71224c-1.32761 0-2.40385 1.07624-2.40385 2.40385 0 1.32761 1.07624 2.40385 2.40385 2.40385H15.609c3.3916 0 6.141 2.74941 6.141 6.14101 0 3.3916-2.7494 6.141-6.141 6.141H9.55584c.23019-.416.36123-.8946.36123-1.4037 0-.5092-.13108-.9879-.36134-1.404H15.609c1.8409 0 3.3333-1.4923 3.3333-3.3333 0-1.8409-1.4924-3.3333-3.3333-3.3333H6.96154C4.08329 12.1731 1.75 9.83979 1.75 6.96154V6.6859zM10.2163.25H6.6859C3.13145.25.25 3.13145.25 6.6859v.27564c0 3.70666 3.00486 6.71156 6.71154 6.71156H15.609c1.0125 0 1.8333.8208 1.8333 1.8333s-.8208 1.8333-1.8333 1.8333H7.01282c-1.60375 0-2.90385 1.3001-2.90385 2.9039 0 1.3248.88713 2.4423 2.09974 2.7911.06039.0173.12158.0328.18352.0463.20007.0436.40785.0665.62099.0665l.02449-.0001H15.609c4.22 0 7.641-3.421 7.641-7.641 0-4.22-3.421-7.64101-7.641-7.64101H6.96154c-.49918 0-.90385-.40467-.90385-.90385 0-.49918.40467-.90385.90385-.90385h3.25636c1.6038 0 2.9039-1.30009 2.9039-2.90384 0-1.60375-1.3001-2.903849-2.9039-2.90385h-.0016zm0 4.30769c-.77528 0-1.4038-.62852-1.4038-1.40384 0-.77505.62808-1.4034 1.403-1.40385h.0017c.7749.00045 1.403.6288 1.403 1.40385 0 .77532-.6285 1.40384-1.4039 1.40384zM7.01282 21.6474c-.10108 0-.19967-.0106-.29469-.0309-.03025-.0065-.06014-.0139-.08963-.0223-.58829-.1673-1.01912-.7086-1.01912-1.3505 0-.7753.62852-1.4039 1.40384-1.4039s1.40385.6286 1.40385 1.4039c0 .7696-.61935 1.3946-1.38683 1.4037h-.01742z",fill:"url(#paint0_linear_3007_70027)"})}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",{id:"paint0_linear_3007_70027",x1:"11.75",y1:".250001",x2:"11.75",y2:"23.1475",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]}),(0,m.jsx)("clipPath",{id:"clip0_3007_70027",children:(0,m.jsx)("path",{fill:"#fff",transform:"matrix(0 1 1 0 0 0)",d:"M0 0h24v24H0z"})})]})]})},j=t(47409),_=t(97496),y=t(41788),Z=t(55378),O=t(86673),w=t(55170),P=t(56681),k=t(66166),C=t(10503),I=t(59920),S=t(66050),T=t(49125),R=t(33766),E=t(7715),N=t(59e3);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H={Icon:C.mR,IconSelected:x,label:function(){return"Pipeline runs"},uuid:"pipeline_runs"},L={Icon:C.Re,IconSelected:s.Z,label:function(){return"Block runs"},uuid:"block_runs"},U=[H,L];function z(e){var n=e.pipeline,t=(0,c.useRouter)(),i=(0,l.useState)(H),r=i[0],u=i[1],o=(0,l.useState)(P.G[0]),s=o[0],f=o[1],v=(0,l.useState)(null),x=v[0],y=v[1],C=n.uuid,D=w.ZP.pipelines.detail(C,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,z=(0,l.useMemo)((function(){return M(M({},null===D||void 0===D?void 0:D.pipeline),{},{uuid:C})}),[D,C]),V=w.ZP.block_runs.list((0,E.gR)(x,["tab"]),{},{pauseFetch:!x}).data,F=(0,l.useMemo)((function(){return(null===V||void 0===V?void 0:V.block_runs)||[]}),[V]),A=(0,l.useState)(),B=A[0],W=A[1],G=(0,N.iV)(),q=(0,k.Z)(G);(0,l.useEffect)((function(){var e=G.pipeline_run_id,n=G.status;if(!(0,E.Xy)(G,q)){var t=M(M({},q),G);e?t.pipeline_run_id=e:t.pipeline_uuid=C,n?t.status=n:delete t.status,y(t)}}),[C,G,q]);var X={_limit:25,_offset:25*(null!==G&&void 0!==G&&G.page?G.page:0),pipeline_uuid:C};null!==G&&void 0!==G&&G.status&&(X.status=G.status);var J=w.ZP.pipeline_runs.list(X,{refreshInterval:5e3}),K=J.data,Y=J.mutate,Q=(0,l.useMemo)((function(){return(null===K||void 0===K?void 0:K.pipeline_runs)||[]}),[K]),$=(0,l.useMemo)((function(){return(null===K||void 0===K?void 0:K.total_count)||[]}),[K]),ee=(0,k.Z)(r);(0,l.useEffect)((function(){var e=G.tab;e&&u(U.find((function(n){return n.uuid===e})))}),[G,r,ee]);var ne=(0,l.useMemo)((function(){var e=null!==G&&void 0!==G&&G.page?G.page:0;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_.Z,{fetchPipelineRuns:Y,onClickRow:function(e){return W((function(n){var t=Q[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:Q,selectedRun:B}),(0,m.jsx)(O.Z,{p:2,children:(0,m.jsx)(b.Z,{maxPages:9,onUpdate:function(e){var n=Number(e),i=M(M({},G),{},{page:n>=0?n:0});t.push("/pipelines/[pipeline]/runs","/pipelines/".concat(C,"/runs?").concat((0,N.uM)(i)))},page:Number(e),totalPages:Math.ceil($/25)})})]})}),[Y,z,Q,G,B,$]),te=(0,l.useMemo)((function(){return(0,m.jsx)(a.Z,{blockRuns:F,pipeline:z})}),[F,z]);return(0,m.jsxs)(g.Z,{afterHidden:H.uuid===(null===r||void 0===r?void 0:r.uuid)&&!B,breadcrumbs:[{label:function(){return"Runs"}}],buildSidekick:H.uuid===(null===r||void 0===r?void 0:r.uuid)?function(e){return(0,P.Z)(M(M({},e),{},{selectedRun:B,selectedTab:s,setSelectedTab:f}))}:function(e){return(0,P.Z)(e)},pageName:I.M.RUNS,pipeline:z,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(I.M.RUNS,"_").concat(C),children:[(0,m.jsx)(h,{children:(0,m.jsx)(O.Z,{py:1,children:(0,m.jsxs)(p.Z,{alignItems:"center",children:[(0,m.jsx)(d.Z,{onClickTab:function(e){var n=e.uuid;y(null),(0,R.u)({tab:n},{replaceParams:!0})},selectedTabUUID:null===r||void 0===r?void 0:r.uuid,tabs:U}),H.uuid===(null===r||void 0===r?void 0:r.uuid)&&(0,m.jsxs)(Z.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?(y(null),(0,R.u)({tab:H.uuid},{replaceParams:!0})):(0,R.u)({page:0,status:e.target.value})},paddingRight:4*T.iI,placeholder:"Select run status",value:null===x||void 0===x?void 0:x.status,children:[(0,m.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(S.V).map((function(e){return(0,m.jsx)("option",{value:e,children:j.D[e]},e)}))]})]})})}),H.uuid===(null===r||void 0===r?void 0:r.uuid)&&ne,L.uuid===(null===r||void 0===r?void 0:r.uuid)&&te]})}z.getInitialProps=function(){var e=(0,i.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var V=(0,y.Z)(z)},66166:function(e,n,t){"use strict";var i=t(82684);n.Z=function(e){var n=(0,i.useRef)();return(0,i.useEffect)((function(){n.current=e}),[e]),n.current}},79897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs",function(){return t(77980)}])}},function(e){e.O(0,[77,5823,7689,4804,1774,2524,5170,9767,4393,9898,1830,6623,5703,4846,9774,2888,179],(function(){return n=79897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);