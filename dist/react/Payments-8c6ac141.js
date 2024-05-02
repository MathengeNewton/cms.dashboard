import{X as I,a as t,a2 as B,O as D,b as H,u as M,A as j,E as Q,c as G,r as J,e as K,R as U,j as a,T as W,G as T,g as N,bv as X,H as F,J as $,d as k,N as Y,y as Z,z as v,v as ee,cg as te,x as ie,f as se,_ as oe,$ as re}from"./index-e5ac1c37.js";import{u as ne,a as le,d as ae}from"./usePaymentColumns-ac7db25b.js";import{D as me}from"./DataTableColumnsPicker-e6b5c621.js";import{u as O}from"./useActions-b331010a.js";import{a as ce,b as pe}from"./payments-292c2f42.js";import{N as de,V as ue}from"./react-icons-071f44cd.js";import{u as E}from"./react-i18next-91d47f13.js";import{r as V}from"./react-e483b31d.js";import"./classnames-eea0979a.js";import"./react-debounce-input-20b6d49d.js";import"./react-redux-7b717b6c.js";import{S as he}from"./Slider-3903b35c.js";import{a as fe}from"./react-query-557fee5a.js";import{bn as be,bx as ye}from"./dayjs-75976aa4.js";import{r as _e}from"./react-string-replace-e94ae631.js";import{P as ge}from"./PaymentStatus-4a5a4ead.js";import{I as Ce}from"./InvoiceStatus-82691a21.js";import{C as Se}from"./CreditStatus-a8db5dbf.js";import{b as q,u as w}from"./jotai-4279821d.js";import"./hoist-non-react-statics-2fceee1f.js";import"./@babel-e5cbf021.js";import"./react-is-e8e5dbb3.js";import"./lodash-bd2b80f6.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./@azure-485fd2d4.js";import"./react-router-82cc6afb.js";import"./@remix-run-dd360fb4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./react-router-dom-67fe6288.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-dom-ce3e84ee.js";import"./scheduler-765c72db.js";import"./@headlessui-220c51a1.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./use-sync-external-store-7794fa59.js";import"./lodash.debounce-ddb7250b.js";import"./payment-status-51e1486d.js";import"./invoice-status-756326ba.js";const xe=()=>{const[o]=E(),f=ce(),i=n=>n.every(({client:l})=>l==null?void 0:l.contacts.some(({email:e})=>e)),{setChangeTemplateVisible:r,setChangeTemplateResources:m}=I();return[({selectedResources:n,selectedIds:l,setSelected:e})=>i(n)&&t(B,{onClick:()=>{f(l,"email"),e([])},icon:t(D,{element:de}),children:o("email_payment")}),({selectedResources:n})=>t(B,{onClick:()=>{r(!0),m(n)},icon:t(D,{element:ue}),children:o("run_template")})]},L=q(null),z=q(!1);be.extend(ye);function ke(){const[o]=E(),f=M();return(i,r)=>{var n,l,e,g,b,C,p,d,u,c,y;let m=Z(`activity_${i.activity_type_id}`,{});const _={client:t(v,{to:k("/clients/:id",{id:(n=i.client)==null?void 0:n.hashed_id}),children:(l=i.client)==null?void 0:l.label}),user:((e=i.user)==null?void 0:e.label)??o("system"),payment_amount:f(i.payment_amount,(g=r==null?void 0:r.client)==null?void 0:g.country_id,(b=r==null?void 0:r.client)==null?void 0:b.settings.currency_id),invoice:t(v,{to:k("/invoices/:id/edit",{id:(C=i.invoice)==null?void 0:C.hashed_id}),children:(p=i==null?void 0:i.invoice)==null?void 0:p.label})??"",payment:t(v,{to:k("/payments/:id/edit",{id:(d=i.payment)==null?void 0:d.hashed_id}),children:(u=i==null?void 0:i.payment)==null?void 0:u.label})??"",contact:t(v,{to:k("/clients/:id/edit",{id:(c=i==null?void 0:i.contact)==null?void 0:c.hashed_id}),children:(y=i==null?void 0:i.contact)==null?void 0:y.label})??""};for(const[S,x]of Object.entries(_))m=_e(m,`:${S}`,()=>x);return m}}function Pe(){var d,u,c,y,S,x,h;const[o]=E(),f=O({showCommonBulkAction:!0,showEditAction:!0}),{dateFormat:i}=H(),r=M(),m=j(),_=Q(),n=G(),l=ke(),[e,g]=w(L),[b,C]=w(z),{data:p}=fe({queryKey:["/api/v1/activities",e==null?void 0:e.id,"payment"],queryFn:()=>J("POST",K("/api/v1/activities/entity"),{entity:"payment",entity_id:e==null?void 0:e.id}).then(s=>s.data.data),enabled:e!==null&&b,staleTime:1/0});return t(he,{size:"regular",visible:b,onClose:()=>{C(!1),g(null)},title:`${o("payment")} ${e==null?void 0:e.number}`,topRight:e&&(m("edit_payment")||_(e))&&t(U,{label:o("more_actions"),resource:e,actions:f}),withoutActionContainer:!0,children:a(W,{tabs:[o("overview"),o("activity")],width:"full",children:[a("div",{className:"space-y-2",children:[a("div",{children:[t(T,{leftSide:o("payment_amount"),withoutWrappingLeftSide:!0,children:e?r(e==null?void 0:e.amount,(d=e.client)==null?void 0:d.country_id,(u=e.client)==null?void 0:u.settings.currency_id):null}),t(T,{leftSide:o("applied"),children:e?r(e.applied,(c=e.client)==null?void 0:c.country_id,(y=e.client)==null?void 0:y.settings.currency_id):null}),t(T,{leftSide:o("date"),children:e?N(e.date,i):null}),t(T,{leftSide:o("payment_type"),children:e?o(X[e.type_id]):null}),t(T,{leftSide:o("status"),children:e?t(ge,{entity:e}):null})]}),t(F,{withoutPadding:!0}),t("div",{className:"flex flex-col space-y-2",children:(S=e==null?void 0:e.invoices)==null?void 0:S.map((s,R)=>{var P,A;return t($,{to:k("/invoices/:id/edit",{id:s.id}),disableNavigation:n("invoice",s),children:a("div",{className:"flex flex-col space-y-2",children:[a("p",{className:"font-semibold",children:[o("invoice")," ",s.number]}),a("div",{className:"flex items-center space-x-1",children:[t("p",{children:r(s.amount,(P=s.client)==null?void 0:P.country_id,(A=s.client)==null?void 0:A.settings.currency_id)}),t("p",{children:"·"}),t("p",{children:N(s.date,i)})]}),t("div",{children:t(Ce,{entity:s})})]})},R)})}),!!((x=e==null?void 0:e.credits)!=null&&x.length)&&t(F,{withoutPadding:!0}),t("div",{className:"flex flex-col space-y-2",children:(h=e==null?void 0:e.credits)==null?void 0:h.map((s,R)=>{var P,A;return t($,{to:k("/credits/:id/edit",{id:s.id}),disableNavigation:n("credit",s),children:a("div",{className:"flex flex-col space-y-2",children:[a("p",{className:"font-semibold",children:[o("credit")," ",s.number]}),a("div",{className:"flex items-center space-x-1",children:[t("p",{children:r(s.amount,(P=s.client)==null?void 0:P.country_id,(A=s.client)==null?void 0:A.settings.currency_id)}),t("p",{children:"·"}),t("p",{children:N(s.date,i)})]}),t("div",{children:t(Se,{entity:s})})]})},R)})})]}),t("div",{children:p==null?void 0:p.map(s=>a(Y,{className:"flex flex-col",children:[t("p",{children:l(s,e)}),a("div",{className:"inline-flex items-center space-x-1",children:[t("p",{children:N(s.created_at,`${i} h:mm:ss A`)}),t("p",{children:"·"}),t("p",{children:s.ip})]})]},s.id))})]})})}function Ai(){ee("payments");const[o]=E(),f=j(),i=G(),r=O(),m=te(),_=ne(),n=le(),l=xe(),e=[{name:o("payments"),href:"/payments"}],[g,b]=V.useState(""),[C,p]=w(L),[d,u]=w(z),{data:c}=pe({id:g,include:"credits"});V.useEffect(()=>{c&&d&&p(c)},[c,d]),V.useEffect(()=>()=>u(!1),[]);const{changeTemplateVisible:y,setChangeTemplateVisible:S,changeTemplateResources:x}=I();return a(ie,{title:o("payments"),breadcrumbs:e,docsLink:"en/payments/",withoutBackButton:!0,children:[t(se,{resource:"payment",columns:_,endpoint:"/api/v1/payments?include=client,invoices&without_deleted_clients=true&sort=id|desc",linkToCreate:"/payments/create",bulkRoute:"/api/v1/payments/bulk",linkToEdit:"/payments/:id/edit",withResourcefulActions:!0,customActions:r,customFilters:m,customBulkActions:l,customFilterPlaceholder:"status",showRestore:h=>!h.is_deleted,leftSideChevrons:t(me,{columns:n,defaultColumns:ae,table:"payment"}),onTableRowClick:h=>{b(h.id),u(!0)},linkToCreateGuards:[oe("create_payment")],hideEditableOptions:!f("edit_payment")}),!i("payment",C)&&t(Pe,{}),t(re,{entity:"payment",entities:x,visible:y,setVisible:S,labelFn:h=>`${o("number")}: ${h.number}`,bulkUrl:"/api/v1/payments/bulk"})]})}export{Ai as default};