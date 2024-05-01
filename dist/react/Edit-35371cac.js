import{v as G,A as H,E as O,l as X,d as z,cn as J,bn as K,co as W,k as Y,X as Z,j as a,x as tt,a as o,R as et,C as ot,ck as it,T as rt,aA as _,aB as n,S as I,$ as st,a4 as mt,cp as at}from"./index-ecbcc3c7.js";import{y as nt}from"./lodash-bd2b80f6.js";import{C as pt}from"./ClientSelector-8b233044.js";import{u as ct,I as lt,a as ut}from"./useProductColumns-62bcf2b6.js";import{r as s}from"./react-e483b31d.js";import{u as dt}from"./react-router-dom-67fe6288.js";import{Q as ht,a as Ct}from"./QuoteFooter-a01edcd1.js";import{u as ft}from"./queries-fbb304cc.js";import"./classnames-eea0979a.js";import{u as vt}from"./useTaskColumns-fe4d1c28.js";import{u as gt}from"./react-i18next-91d47f13.js";import{e as yt}from"./react-router-82cc6afb.js";import{v as Tt}from"./uuid-4a60fe23.js";import{u as b}from"./jotai-c7720f6e.js";import"./react-redux-7b717b6c.js";import"./react-dom-ce3e84ee.js";import"./@babel-e5cbf021.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-2fceee1f.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-7794fa59.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./react-query-557fee5a.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-debounce-input-20b6d49d.js";import"./lodash.debounce-ddb7250b.js";import"./@headlessui-220c51a1.js";import"./react-icons-071f44cd.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./@remix-run-dd360fb4.js";import"./InvoiceViewer-a729b03c.js";import"./DesignSelector-1def70e7.js";import"./designs-863b1b5c.js";import"./ProjectSelector-0c0e158e.js";function _o(){const{documentTitle:k}=G("edit_quote"),{t:r}=gt(),{id:h}=yt(),S=H(),x=O(),p=X(),q=[{name:r("quotes"),href:"/quotes"},{name:r("edit_quote"),href:z("/quotes/:id/edit",{id:h})}],{data:c}=ft({id:h}),[t,P]=b(mt),[A]=b(at),[l,D]=s.useState(),[m,w]=s.useState(),[C,L]=s.useState(!1),[f,R]=s.useState(!1),E=ct(),{handleChange:i,handleInvitationChange:Q,handleLineItemChange:v,handleLineItemPropertyChange:g,handleCreateLineItem:y,handleDeleteLineItem:T,calculateInvoiceSum:N}=J({client:l});s.useEffect(()=>{if(c){const e=nt.cloneDeep(c);e.line_items.map(d=>d._id=Tt()),P(e),e&&e.client&&D(e.client)}},[c]),s.useEffect(()=>{t&&N(t)},[t]);const $=K(),F=W({setErrors:w,isDefaultFooter:f,isDefaultTerms:C}),[j]=dt(),V=vt(),u=Y(),{changeTemplateVisible:B,setChangeTemplateVisible:M,changeTemplateResources:U}=Z();return a(tt,{title:k,breadcrumbs:q,...(S("edit_quote")||x(t))&&t&&{navigationTopRight:o(et,{resource:t,actions:$,onSaveClick:()=>t&&F(t),cypressRef:"quoteActionDropdown"})},children:[a("div",{className:"grid grid-cols-12 gap-4",children:[a(ot,{className:"col-span-12 xl:col-span-4 h-max",withContainer:!0,children:[t&&a("div",{className:"flex space-x-20",children:[o("span",{className:"text-sm",style:{backgroundColor:u.$2,color:u.$3,colorScheme:u.$0},children:r("status")}),o(it,{entity:t})]}),o(pt,{resource:t,onChange:e=>i("client_id",e),onClearButtonClick:()=>i("client_id",""),onContactCheckboxChange:Q,errorMessage:m==null?void 0:m.errors.client_id,textOnly:!0,readonly:!0})]}),o(ht,{handleChange:i,errors:m}),o("div",{className:"col-span-12",children:a(rt,{tabs:[r("products"),r("tasks")],defaultTabIndex:j.get("table")==="tasks"?1:0,children:[o("div",{children:t&&l?o(_,{type:"product",resource:t,items:t.line_items.filter(e=>e.type_id===n.Product),columns:E,relationType:"client_id",onLineItemChange:v,onSort:e=>i("line_items",e),onLineItemPropertyChange:g,onCreateItemClick:()=>y(n.Product),onDeleteRowClick:T}):o(I,{})}),o("div",{children:t&&l?o(_,{type:"task",resource:t,items:t.line_items.filter(e=>e.type_id===n.Task),columns:V,relationType:"client_id",onLineItemChange:v,onSort:e=>i("line_items",e),onLineItemPropertyChange:g,onCreateItemClick:()=>y(n.Task),onDeleteRowClick:T}):o(I,{})})]})}),o(Ct,{handleChange:i,errors:m,isDefaultFooter:f,isDefaultTerms:C,setIsDefaultFooter:R,setIsDefaultTerms:L}),t&&o(lt,{relationType:"client_id",resource:t,invoiceSum:A,onChange:(e,d)=>i(e,d)})]}),(p==null?void 0:p.show_pdf_preview)&&o("div",{className:"my-4",children:t&&o(ut,{for:"invoice",resource:t,entity:"quote",relationType:"client_id",endpoint:"/api/v1/live_preview?entity=:entity",withRemoveLogoCTA:!0})}),o(st,{entity:"quote",entities:U,visible:B,setVisible:M,labelFn:e=>`${r("number")}: ${e.number}`,bulkUrl:"/api/v1/quotes/bulk"})]})}export{_o as default};
