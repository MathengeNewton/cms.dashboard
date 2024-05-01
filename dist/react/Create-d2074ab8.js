import{r as w,e as _,Q as k,d as re,ao as oe,v as le,h as se,u as ce,a as n,x as de,bU as ue,j as C,C as me,G as p,aD as pe,aH as f,H as E,a_ as I,p as Q,a$ as N,o as he,bv as _e,aI as V,as as j}from"./index-ecbcc3c7.js";import"./react-redux-7b717b6c.js";import{u as fe}from"./react-router-dom-67fe6288.js";import"./classnames-eea0979a.js";import{c as y}from"./collect.js-ebd014c9.js";import{u as G}from"./react-query-557fee5a.js";import{u as ge}from"./payments-ff169d7b.js";import{C as ve}from"./ConvertCurrency-bb3bc407.js";import{r as $}from"./react-e483b31d.js";import{v as g}from"./uuid-4a60fe23.js";import{s as be}from"./js-sha256-76525563.js";import{a as Ce}from"./react-router-82cc6afb.js";import{p as ye}from"./atoms-1e1b685d.js";import{u as $e}from"./react-i18next-91d47f13.js";import{X as q}from"./react-feather-90dbe0b6.js";import{u as Se}from"./jotai-c7720f6e.js";import"./hoist-non-react-statics-2fceee1f.js";import"./@babel-e5cbf021.js";import"./react-is-e8e5dbb3.js";import"./lodash-bd2b80f6.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-dom-ce3e84ee.js";import"./scheduler-765c72db.js";import"./react-debounce-input-20b6d49d.js";import"./lodash.debounce-ddb7250b.js";import"./@headlessui-220c51a1.js";import"./react-icons-071f44cd.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./prop-types-20aec754.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./use-sync-external-store-7794fa59.js";import"./@remix-run-dd360fb4.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function xe(){const m=G();return{find:c=>m.fetchQuery(["/api/v1/credits",c],()=>w("GET",_("/api/v1/credits/:id?include=client&sort=id|asc",{id:c})).then(s=>s.data.data),{staleTime:1/0})}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Ie(){const m=G();return{find:c=>m.fetchQuery(["/api/v1/invoices",c],()=>w("GET",_("/api/v1/invoices/:id?include=client.group_settings&sort=id|asc",{id:c})).then(s=>s.data.data),{staleTime:1/0})}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Ne(m){const{payment:l,setPayment:c}=m;return{handleCreditChange:s=>{c(i=>i&&{...i,credits:[...i.credits,{_id:g(),amount:s.balance>0?s.balance:s.amount,credit_id:s.id}]})},handleExistingCreditChange:(s,i)=>{const u={...l};u.credits[i]={_id:g(),amount:s.balance>0?s.balance:s.amount,credit_id:s.id},c({...u})},handleCreditInputChange:(s,i)=>{const u={...l};u.credits[s].amount=i,c({...u})},handleDeletingCredit:s=>{c(i=>i&&{...i,credits:i.credits.filter(u=>u._id!==s)})}}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Ve(m){const{payment:l,setPayment:c}=m;return{handleInvoiceChange:s=>{c(i=>i&&{...i,invoices:[...i.invoices,{_id:g(),amount:s.balance>0?s.balance:s.amount,invoice_id:s.id}]})},handleExistingInvoiceChange:(s,i)=>{const u={...l};u.invoices[i]={_id:g(),amount:s.balance>0?s.balance:s.amount,invoice_id:s.id},c({...u})},handleInvoiceInputChange:(s,i)=>{const u={...l};u.invoices[s].amount=i,c({...u})},handleDeletingInvoice:s=>{c(i=>i&&{...i,invoices:i.invoices.filter(u=>u._id!==s)})}}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Fe(){const m=be.sha256.create();return m.update(`${Date.now().toString()}${Math.random().toString()}`),m.hex()}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function ke(m){const l=Ce();return(c,s)=>{m(void 0),k.processing();const i=Fe();w("POST",_("/api/v1/payments?email_receipt=:email",{email:s}),{...c,idempotency_key:i}).then(u=>{k.success("created_payment"),l(re("/payments/:id/edit",{id:u.data.data.id}))}).catch(u=>{var S;((S=u.response)==null?void 0:S.status)===422&&(k.dismiss(),m(u.response.data))}).finally(()=>{oe(["payments","credits","invoices","clients"])})}}function xi(){var O,T,D,M,P,L,B,H,R;const{documentTitle:m}=le("create_payment"),[l]=$e(),[c]=fe(),s=[{name:l("payments"),href:"/payments"},{name:l("new_payment"),href:"/payments/create"}],i=se(),u=Ie(),S=xe(),x=ce(),[e,h]=Se(ye),[a,W]=$.useState(),[A,K]=$.useState((O=i==null?void 0:i.settings)==null?void 0:O.client_manual_payment_notification),[U,X]=$.useState(!1),{data:F}=ge();$.useEffect(()=>{h(t=>{var o;let r=t;return c.get("action")!=="enter"&&c.get("action")!=="apply"&&(r=void 0),typeof F<"u"&&typeof r>"u"&&(r={...F.data.data,invoices:[],credits:[],client_id:"",type_id:((o=i==null?void 0:i.settings)==null?void 0:o.payment_type_id)??""}),r}),c.has("client")&&h(t=>t&&{...t,client_id:c.get("client")}),c.has("client")&&c.has("invoice")&&u.find(c.get("invoice")).then(t=>h(r=>r&&{...r,invoices:[{_id:g(),invoice_id:t.id,amount:t.balance>0?t.balance:t.amount}]})),c.has("client")&&c.has("credit")&&S.find(c.get("credit")).then(t=>h(r=>r&&{...r,credits:[{_id:g(),credit_id:t.id,amount:t.balance>0?t.balance:t.amount}]})),c.has("type")&&h(t=>t&&{...t,type_id:c.get("type")??""})},[F]),$.useEffect(()=>{h(t=>{var r;return t&&{...t,currency_id:(r=t.client)==null?void 0:r.settings.currency_id}})},[e==null?void 0:e.invoices]);const{handleInvoiceChange:z,handleExistingInvoiceChange:J,handleInvoiceInputChange:Y,handleDeletingInvoice:Z}=Ve({payment:e,setPayment:h}),{handleCreditChange:ee,handleExistingCreditChange:te,handleCreditInputChange:ie,handleDeletingCredit:ne}=Ne({payment:e,setPayment:h}),d=(t,r)=>{h(o=>o&&{...o,[t]:r})},ae=ke(W);return n(de,{title:m,breadcrumbs:s,onSaveClick:t=>{t.preventDefault(),ae(e,A)},disableSaveButton:!e,children:n(ue,{children:C(me,{title:l("enter_payment"),children:[n(p,{leftSide:l("client"),children:n(pe,{onChange:t=>{d("client_id",t==null?void 0:t.id),d("currency_id",t==null?void 0:t.settings.currency_id),d("invoices",[]),d("credits",[])},onClearButtonClick:()=>{d("client_id",""),d("currency_id",""),d("invoices",[]),d("credits",[])},errorMessage:a==null?void 0:a.errors.client_id,defaultValue:e==null?void 0:e.client_id,value:e==null?void 0:e.client_id,readonly:c.has("invoice")||c.get("action")==="enter"||c.get("action")==="apply",initiallyVisible:!(e!=null&&e.client_id)})}),n(p,{leftSide:l("amount_received"),leftSideHelp:l("amount_received_help"),children:n(f,{id:"amount",type:"number",value:e==null?void 0:e.amount,onValueChange:t=>d("amount",isNaN(parseFloat(t))?0:parseFloat(t)),errorMessage:a==null?void 0:a.errors.amount})}),(e==null?void 0:e.client_id)&&n(E,{}),e&&e.invoices.length>0&&e.invoices.map((t,r)=>n(p,{children:C("div",{className:"flex flex-col",children:[C("div",{className:"flex items-end space-x-2",children:[n(I,{inputOptions:{value:t.invoice_id,label:l("invoice")??""},endpoint:_(`/api/v1/invoices?payable=${e.client_id}&per_page=100`),entryOptions:{label:"number",id:"id",value:"id",searchable:"number",dropdownLabelFn:o=>{var v,b;return`${l("invoice_number_short")}${o.number} - ${l("balance")} ${x(o.balance,(v=e.client)==null?void 0:v.country_id,(b=e.client)==null?void 0:b.settings.currency_id)}`},inputLabelFn:o=>o?`${l("invoice_number_short")}${o==null?void 0:o.number}`:""},onChange:o=>o.resource?J(o.resource,r):null,exclude:y(e.invoices.filter(({invoice_id:o})=>o!==t.invoice_id)).pluck("invoice_id").toArray()}),n(f,{type:"number",label:l("amount_received"),onValueChange:o=>Y(r,isNaN(parseFloat(o))?0:parseFloat(o)),className:"w-full",value:t.amount,withoutLabelWrapping:!0}),n(Q,{behavior:"button",type:"minimal",className:"self-center mt-6",onClick:()=>Z(t._id),children:n(q,{})})]}),(a==null?void 0:a.errors[`invoices.${r}.amount`])&&n(N,{className:"mt-2",type:"danger",children:a==null?void 0:a.errors[`invoices.${r}.amount`]}),(a==null?void 0:a.errors[`invoices.${r}.invoice_id`])&&n(N,{className:"mt-2",type:"danger",children:a==null?void 0:a.errors[`invoices.${r}.invoice_id`]})]})},r)),(e==null?void 0:e.client_id)&&n(p,{leftSide:l("invoices"),children:n(I,{endpoint:_(`/api/v1/invoices?payable=${e==null?void 0:e.client_id}&per_page=100`),inputOptions:{value:"id"},entryOptions:{id:"id",value:"id",label:"number",searchable:"number",dropdownLabelFn:t=>{var r,o;return`${l("invoice_number_short")}${t.number} - ${l("balance")} ${x(t.balance,(r=e.client)==null?void 0:r.country_id,(o=e.client)==null?void 0:o.settings.currency_id)}`}},onChange:({resource:t})=>t?z(t):null,exclude:y(e.invoices).pluck("invoice_id").toArray(),clearInputAfterSelection:!0})}),(e==null?void 0:e.client_id)&&n(E,{}),e&&e.credits.length>0&&e.credits.map((t,r)=>n(p,{children:C("div",{className:"flex flex-col",children:[C("div",{className:"flex items-end space-x-2",children:[n(I,{inputOptions:{value:t.credit_id,label:l("credit")??""},endpoint:_(`/api/v1/credits?client_id=${e.client_id}&per_page=100&applicable=true`),entryOptions:{id:"id",value:"id",label:"number",searchable:"number",dropdownLabelFn:o=>{var v,b;return`${l("credit")} #${o.number} - ${l("balance")} ${x(o.balance,(v=e.client)==null?void 0:v.country_id,(b=e.client)==null?void 0:b.settings.currency_id)}`}},onChange:o=>o.resource?te(o.resource,r):null,exclude:y(e.credits.filter(({credit_id:o})=>o!==t.credit_id)).pluck("credit_id").toArray()}),n(f,{type:"number",label:l("amount"),onValueChange:o=>ie(r,isNaN(parseFloat(o))?0:parseFloat(o)),className:"w-full",value:t.amount,withoutLabelWrapping:!0}),n(Q,{behavior:"button",type:"minimal",className:"self-center mt-6",onClick:()=>ne(t._id),children:n(q,{})})]}),(a==null?void 0:a.errors[`credits.${r}.amount`])&&n(N,{className:"mt-2",type:"danger",children:a==null?void 0:a.errors[`credits.${r}.amount`]}),(a==null?void 0:a.errors[`credits.${r}.credit_id`])&&n(N,{className:"mt-2",type:"danger",children:a==null?void 0:a.errors[`credits.${r}.credit_id`]})]})},r)),(e==null?void 0:e.client_id)&&n(p,{leftSide:l("credits"),children:n(I,{endpoint:_(`/api/v1/credits?client_id=${e.client_id}&applicable=true`),inputOptions:{value:null},entryOptions:{id:"id",label:"number",value:"id",searchable:"number",dropdownLabelFn:t=>{var r,o;return`${l("credit")} #${t.number} - ${l("balance")} ${x(t.balance,(r=e.client)==null?void 0:r.country_id,(o=e.client)==null?void 0:o.settings.currency_id)}`}},onChange:t=>t.resource?ee(t.resource):null,exclude:y(e.credits).pluck("credit_id").toArray(),clearInputAfterSelection:!0})}),(e==null?void 0:e.client_id)&&n(E,{}),n(p,{leftSide:l("payment_date"),children:n(f,{type:"date",id:"date",value:e==null?void 0:e.date,onValueChange:t=>d("date",t),errorMessage:a==null?void 0:a.errors.date})}),n(p,{leftSide:l("payment_type"),children:n(he,{id:"type_id",value:e==null?void 0:e.type_id,onValueChange:t=>d("type_id",t),errorMessage:a==null?void 0:a.errors.type_id,withBlank:!0,children:Object.entries(_e).map(([t,r],o)=>n("option",{value:t,children:l(r)},o))})}),n(p,{leftSide:l("transaction_reference"),children:n(f,{id:"transaction_reference",onValueChange:t=>d("transaction_reference",t),errorMessage:a==null?void 0:a.errors.transaction_reference})}),n(p,{leftSide:l("private_notes"),children:n(f,{element:"textarea",id:"private_notes",onValueChange:t=>d("private_notes",t),errorMessage:a==null?void 0:a.errors.private_notes})}),((T=i==null?void 0:i.custom_fields)==null?void 0:T.payment1)&&n(V,{field:"payment1",defaultValue:e==null?void 0:e.custom_value1,value:(D=i==null?void 0:i.custom_fields)==null?void 0:D.payment1,onValueChange:t=>d("custom_value1",t.toString())}),((M=i==null?void 0:i.custom_fields)==null?void 0:M.payment2)&&n(V,{field:"payment2",defaultValue:e==null?void 0:e.custom_value2,value:(P=i==null?void 0:i.custom_fields)==null?void 0:P.payment2,onValueChange:t=>d("custom_value2",t.toString())}),((L=i==null?void 0:i.custom_fields)==null?void 0:L.payment3)&&n(V,{field:"payment3",defaultValue:e==null?void 0:e.custom_value3,value:(B=i==null?void 0:i.custom_fields)==null?void 0:B.payment3,onValueChange:t=>d("custom_value3",t.toString())}),((H=i==null?void 0:i.custom_fields)==null?void 0:H.payment4)&&n(V,{field:"payment4",defaultValue:e==null?void 0:e.custom_value4,value:(R=i==null?void 0:i.custom_fields)==null?void 0:R.payment4,onValueChange:t=>d("custom_value4",t.toString())}),n(p,{leftSide:l("send_email"),children:n(j,{checked:A,onChange:K})}),n(p,{leftSide:l("convert_currency"),children:n(j,{checked:!!(e!=null&&e.exchange_currency_id),onChange:t=>{X(t),t?d("exchange_currency_id","1"):d("exchange_currency_id",""),d("exchange_rate",1)}})}),U&&e&&n(ve,{exchangeRate:e.exchange_rate.toString()||"1",exchangeCurrencyId:e.exchange_currency_id,currencyId:e.currency_id||"1",amount:y(e==null?void 0:e.invoices).sum("amount")+(e==null?void 0:e.amount),onChange:(t,r)=>{d("exchange_rate",t),d("exchange_currency_id",r)},onExchangeRateChange:t=>d("exchange_rate",t)})]})})})}export{xi as default};
