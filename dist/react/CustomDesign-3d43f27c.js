import{at as Q,Q as d,r as T,e as y,ao as k,af as a,ag as m,a as i,a2 as f,O as v,F as b,k as E,dy as $,d as n,v as B,dH as z,R as N,j as x,bm as q}from"./index-ecbcc3c7.js";import{r as p}from"./react-e483b31d.js";import{d as I}from"./designs-863b1b5c.js";import{I as O}from"./InvoiceViewer-a729b03c.js";import{u as F}from"./react-query-557fee5a.js";import{d as j,b as V}from"./jotai-c7720f6e.js";import{s as G,u as D,t as U}from"./react-icons-071f44cd.js";import{u as A}from"./react-i18next-91d47f13.js";import{a as J,P as K,b as W}from"./react-resizable-panels-7884a1bc.js";import{r as S}from"./react-responsive-086ba234.js";import{s as X}from"./styled-components-2e13d465.js";import{e as M,b as Y,O as Z}from"./react-router-82cc6afb.js";import"./react-redux-7b717b6c.js";import"./react-dom-ce3e84ee.js";import"./@babel-e5cbf021.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-2fceee1f.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-7794fa59.js";import"./lodash-bd2b80f6.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./classnames-eea0979a.js";import"./react-router-dom-67fe6288.js";import"./@remix-run-dd360fb4.js";import"./react-datepicker-27eb8381.js";import"./react-debounce-input-20b6d49d.js";import"./lodash.debounce-ddb7250b.js";import"./@headlessui-220c51a1.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./tslib-b7af3ea6.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function ee(){const e=F(),t=j(Q);return async(r,o)=>(d.processing(),T("POST",y("/api/v1/designs/bulk"),{action:o,ids:r}).then(()=>{d.success(`${o}d_design`),k(["designs"]),t&&e.invalidateQueries([t])}))}function te(){const[e]=A(),t=ee();return[o=>a(o)===m.Active&&i(f,{onClick:()=>t([o.id],"archive"),icon:i(v,{element:G}),children:e("archive")}),o=>(a(o)===m.Archived||a(o)===m.Deleted)&&i(f,{onClick:()=>t([o.id],"restore"),icon:i(v,{element:D}),children:e("restore")}),o=>(a(o)===m.Active||a(o)===m.Archived)&&i(f,{onClick:()=>t([o.id],"delete"),icon:i(v,{element:U}),children:e("delete")})]}function ie(e){const t=S.useMediaQuery({query:"(min-width: 1024px)"}),{children:r}=e;return t?i(J,{direction:"horizontal",className:"gap-4 mt-4",children:r}):i("div",{className:"flex flex-col gap-4",children:r})}function P(e){const t=S.useMediaQuery({query:"(min-width: 1024px)"}),{children:r,renderBasePanel:o}=e;return t||o?i(K,{defaultSize:50,minSize:25,children:r}):i(b,{children:r})}const oe=X(W)`
  background-color: ${e=>e.theme.backgroundColor};
  &:hover {
    background-color: ${e=>e.theme.hoverColor};
  }
`;function re(){const e=S.useMediaQuery({query:"(min-width: 1024px)"}),t=E();return e?i(oe,{className:"flex items-center",theme:{hoverColor:"#3366CC",backgroundColor:t.$5},style:{width:"2.5px"}}):i(b,{})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function se(){const[e]=A(),{id:t}=M(),{isCompanySettingsActive:r}=$();return[{name:e("settings"),href:n("/settings/invoice_design/custom_designs/:id/edit",{id:t}),enabled:r},{name:e("body"),href:n("/settings/invoice_design/custom_designs/:id/edit/body",{id:t}),enabled:r},{name:e("header"),href:n("/settings/invoice_design/custom_designs/:id/edit/header",{id:t}),enabled:r},{name:e("footer"),href:n("/settings/invoice_design/custom_designs/:id/edit/footer",{id:t}),enabled:r},{name:e("includes"),href:n("/settings/invoice_design/custom_designs/:id/edit/includes",{id:t}),enabled:r},{name:e("variables"),href:n("/settings/invoice_design/custom_designs/:id/edit/variables",{id:t}),enabled:r}]}const ei=V({design:null,entity_id:"-1",entity_type:"invoice"});function ti(){B("invoice_design");const e=te(),t=se(),r=Y(),{id:o}=M(),{data:u}=I({id:o,enabled:!0}),[s,h]=p.useState({design:null,entity_id:"-1",entity_type:"invoice"}),[w,L]=p.useState(),[c,_]=p.useState(!1),[g,R]=p.useState(!1),H=()=>{c||(d.processing(),_(!0),T("PUT",y("/api/v1/designs/:id",{id:o}),s.design).then(()=>{k(["designs"]),d.success("updated_design")}).catch(l=>{var C;((C=l.response)==null?void 0:C.status)===422&&(L(l.response.data),d.dismiss())}).finally(()=>_(!1)))};return z({element:(s==null?void 0:s.design)&&i(N,{resource:s.design,onSaveClick:H,actions:e,disableSaveButton:c})},[s.design,c,r]),p.useEffect(()=>(u&&h(l=>({...l,design:u})),()=>h({design:null,entity_id:"-1",entity_type:"invoice"})),[u]),x(b,{children:[i(q,{tabs:t}),x(ie,{children:[i(P,{children:i("div",{className:"space-y-4 h-full max-h-[80vh] overflow-y-auto",children:i(Z,{context:{errors:w,isFormBusy:c,shouldRenderHTML:g,setShouldRenderHTML:R,payload:s,setPayload:h}})})}),i(re,{}),i(P,{children:i("div",{className:"max-h-[80vh] overflow-y-scroll",children:s.design?i(O,{link:y("/api/v1/preview?html=:renderHTML",{renderHTML:g}),resource:s,method:"POST",withToast:!0,renderAsHTML:g}):null})})]})]})}export{ti as default,ei as payloadAtom};
