import{w as A,d as a,a as i,aJ as k,bl as w,v as D,cX as v,cY as L,bh as S,A as $,E as j,b as O,k as P,j as o,x as R,R as F,am as I,z as V,bm as z,g as B}from"./index-ecbcc3c7.js";import"./classnames-eea0979a.js";import{r as H}from"./react-e483b31d.js";import"./react-debounce-input-20b6d49d.js";import{I as u}from"./InfoCard-eeea6490.js";import{u as J}from"./useActions-e5a170cd.js";import{e as f,a as Q,O as X}from"./react-router-82cc6afb.js";import"./react-redux-7b717b6c.js";import"./lodash-bd2b80f6.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import"./react-query-557fee5a.js";import"./react-hot-toast-d3a0fddd.js";import"./react-qr-code-d89187e6.js";import"./react-verification-input-7fc81ee7.js";import"./axios-60492c0c.js";import"./react-phone-number-input-4fffe465.js";import"./collect.js-ebd014c9.js";import"./@tinymce-7238a8f2.js";import{u as b}from"./react-i18next-91d47f13.js";import"./hoist-non-react-statics-2fceee1f.js";import"./@babel-e5cbf021.js";import"./react-is-e8e5dbb3.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./jotai-c7720f6e.js";import"./react-router-dom-67fe6288.js";import"./@remix-run-dd360fb4.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-dom-ce3e84ee.js";import"./scheduler-765c72db.js";import"./@headlessui-220c51a1.js";import"./react-icons-071f44cd.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./use-sync-external-store-7794fa59.js";import"./goober-70b4b9ca.js";import"./lodash.debounce-ddb7250b.js";import"./qr.js-8bf59ccc.js";function Y(c){const[e]=b(),p=A(),{vendor:t}=c,{id:m}=f();let n=[{name:e("purchase_orders"),href:a("/vendors/:id",{id:m})},{name:e("expenses"),href:a("/vendors/:id/expenses",{id:m})},{name:e("recurring_expenses"),href:a("/vendors/:id/recurring_expenses",{id:m})},{name:e("documents"),href:a("/vendors/:id/documents",{id:m}),formatName:()=>i(k,{numberOfDocuments:t==null?void 0:t.documents.length})}];return w.forEach(l=>{p(l.bitmask)||(n=n.filter(r=>r.name!==e(l.label)))}),n}function Vi(){var h;const{documentTitle:c,setDocumentTitle:e}=D("view_vendor"),{id:p}=f(),{data:t}=v({id:p}),m=L(),n=S(),l=J(),[r]=b(),g=Q(),y=$(),_=j();H.useEffect(()=>{t&&t.name.length>=1&&e(t.name)},[t]);const x=[{name:r("vendors"),href:"/vendors"},{name:c||"",href:a("/vendors/:id",{id:p})}],N=Y({vendor:t}),{dateFormat:C}=O(),T=s=>s?B(s,C):r("never"),d=P();return o(R,{title:c,breadcrumbs:x,...(y("edit_vendor")||_(t))&&t&&{navigationTopRight:i(F,{saveButtonLabel:r("edit_vendor"),onSaveClick:()=>g(a("/vendors/:id/edit",{id:p})),resource:t,actions:l})},children:[o("div",{className:"grid grid-cols-12 space-y-4 lg:space-y-0 lg:gap-4",children:[o(u,{title:r("details"),className:"col-span-12 lg:col-span-4",children:[t&&o("div",{className:"flex space-x-20 my-3",children:[i("span",{className:"text-sm",style:{backgroundColor:d.$2,color:d.$3,colorScheme:d.$0},children:r("status")}),i(I,{entity:t})]}),o("p",{children:[r("id_number"),": ",t==null?void 0:t.id_number]}),o("p",{children:[r("vat_number"),": ",t==null?void 0:t.vat_number]}),o("p",{children:[r("last_login"),": ",T(t==null?void 0:t.last_login)]}),(t==null?void 0:t.website)&&i(V,{to:t.website,external:!0,children:t.website})]}),o(u,{title:r("address"),className:"col-span-12 lg:col-span-4",children:[i("p",{children:t==null?void 0:t.address1}),i("p",{children:t==null?void 0:t.address2}),o("p",{children:[t==null?void 0:t.city,", ",t==null?void 0:t.state," ",t==null?void 0:t.postal_code]}),i("p",{children:(h=m.find(s=>s.id===(t==null?void 0:t.country_id)))==null?void 0:h.name})]}),i(u,{title:r("contacts"),className:"col-span-12 lg:col-span-4",value:i("div",{className:"space-y-2",children:t==null?void 0:t.contacts.map((s,E)=>o("div",{children:[o("p",{className:"font-semibold",style:{color:n},children:[s.first_name," ",s.last_name]}),i("a",{href:`mailto:${s.email}`,children:s.email})]},E))})})]}),i(z,{tabs:N,className:"my-6"}),i(X,{})]})}export{Vi as default};