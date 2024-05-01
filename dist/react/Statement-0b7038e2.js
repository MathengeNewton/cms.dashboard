import{bL as U,bM as F,v as Q,a9 as H,n as B,bg as G,d as x,r as O,e as R,j as d,x as z,bN as J,a as e,a2 as g,O as D,C as b,o as E,aH as k,G as M,as as y,S as K,Q as p}from"./index-ecbcc3c7.js";import"./react-redux-7b717b6c.js";import"./classnames-eea0979a.js";import{bn as a,by as W}from"./dayjs-75976aa4.js";import{r as l}from"./react-e483b31d.js";import{N as X,I as Z,Q as $}from"./react-icons-071f44cd.js";import{a as tt,e as et}from"./react-router-82cc6afb.js";import{c as at}from"./jotai-c7720f6e.js";import{u as rt}from"./react-i18next-91d47f13.js";import"./hoist-non-react-statics-2fceee1f.js";import"./@babel-e5cbf021.js";import"./react-is-e8e5dbb3.js";import"./lodash-bd2b80f6.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./react-query-557fee5a.js";import"./react-dom-ce3e84ee.js";import"./scheduler-765c72db.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./react-router-dom-67fe6288.js";import"./@remix-run-dd360fb4.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-debounce-input-20b6d49d.js";import"./lodash.debounce-ddb7250b.js";import"./@headlessui-220c51a1.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./use-sync-external-store-7794fa59.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function st(){const u=tt(),s=at(F);return o=>{s({...U,clients:[o.client_id],show_aging_table:o.show_aging_table,show_credits_table:o.show_credits_table,show_payments_table:o.show_payments_table,only_clients_with_invoices:o.only_clients_with_invoices,status:o.status,date_range:o.dateRangeId==="custom"?"last7_days":o.dateRangeId,entity:"invoice"}),u("/settings/schedules/create?template=email_statement")}}a.extend(W);function Ke(){var v;const{documentTitle:u}=Q("statement"),{t:s}=rt(),{id:o}=et(),{isAdmin:q,isOwner:T}=H(),h=B(),{data:Y}=G({id:o,enabled:!0}),N=st(),[w,S]=l.useState(!1),P=[{name:s("clients"),href:"/clients"},{name:s("client"),href:x("/clients/:id",{id:o})},{name:s("statement"),href:x("/clients/:id/statement",{id:o})}],C=[{id:"last7_days",start:a().subtract(7,"days").format("YYYY-MM-DD"),end:a().format("YYYY-MM-DD")},{id:"last30_days",start:a().subtract(1,"month").format("YYYY-MM-DD"),end:a().format("YYYY-MM-DD")},{id:"last365_days",start:a().subtract(365,"days").format("YYYY-MM-DD"),end:a().format("YYYY-MM-DD")},{id:"this_month",start:a().startOf("month").format("YYYY-MM-DD"),end:a().format("YYYY-MM-DD")},{id:"last_month",start:a().startOf("month").subtract(1,"month").format("YYYY-MM-DD"),end:a().subtract(1,"month").endOf("month").format("YYYY-MM-DD")},{id:"this_quarter",start:a().startOf("quarter").format("YYYY-MM-DD"),end:a().endOf("quarter").format("YYYY-MM-DD")},{id:"last_quarter",start:a().subtract(1,"quarter").startOf("quarter").format("YYYY-MM-DD"),end:a().subtract(1,"quarter").endOf("quarter").format("YYYY-MM-DD")},{id:"this_year",start:a().startOf("year").format("YYYY-MM-DD"),end:a().format("YYYY-MM-DD")},{id:"last_year",start:a().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),end:a().subtract(1,"year").endOf("year").format("YYYY-MM-DD")},{id:"custom",start:a().subtract(7,"days").format("YYYY-MM-DD"),end:a().format("YYYY-MM-DD")}],c=l.useRef(null),[f,I]=l.useState("last7_days"),[_,A]=l.useState(),[i,m]=l.useState({client_id:o,start_date:a().subtract(7,"days").format("YYYY-MM-DD"),end_date:a().format("YYYY-MM-DD"),show_aging_table:!0,show_payments_table:!0,show_credits_table:!0,only_clients_with_invoices:!1,status:"all",dateRangeId:"last7_days"}),L=t=>{const r=C.find(n=>n.id===t);r&&(I(t),m(n=>({...n,start_date:r.start,end_date:r.end,dateRangeId:t})))},V=()=>{if(!c.current)return;p.processing();const t=document.createElement("a");t.download="statement.pdf",t.href=c.current.src,t.target="_blank",document.body.appendChild(t),t.click(),document.body.removeChild(t),p.dismiss()},j=()=>{var r;if(!((r=_==null?void 0:_.contacts)==null?void 0:r.some(n=>n.email)))return p.error("client_email_not_set");p.processing(),O("POST",R("/api/v1/client_statement?send_email=true"),i).then(n=>{p.success(n.data.message)})};return l.useEffect(()=>{Y&&A(Y)},[Y]),l.useEffect(()=>{S(!0),O("POST",R("/api/v1/client_statement"),i,{responseType:"arraybuffer"}).then(t=>{const r=new Blob([t.data],{type:"application/pdf"}),n=URL.createObjectURL(r);c.current&&(c.current.src=n)}).finally(()=>S(!1))},[i]),d(z,{title:u,breadcrumbs:P,navigationTopRight:d(J,{label:s("more_actions"),children:[((v=h==null?void 0:h.company_user)==null?void 0:v.is_admin)&&e(g,{onClick:j,icon:e(D,{element:X}),children:s("email")}),e(g,{onClick:V,icon:e(D,{element:Z}),children:s("download")}),(q||T)&&e(g,{onClick:()=>N(i),icon:e(D,{element:$}),children:s("schedule")})]}),children:[d("div",{className:"grid grid-cols-12 space-y-4 xl:space-y-0 xl:gap-4",children:[d(b,{className:"col-span-12 xl:col-span-4 h-max",withContainer:!0,children:[e(E,{label:s("date_range"),value:f,onValueChange:L,children:C.map((t,r)=>e("option",{value:t.id,children:s(t.id)},r))}),f==="custom"&&e(k,{label:s("start_date"),type:"date",value:i.start_date,onValueChange:t=>t.length>1&&m(r=>({...r,start_date:t}))}),f==="custom"&&e(k,{label:s("end_date"),type:"date",value:i.end_date,onValueChange:t=>t.length>1&&m(r=>({...r,end_date:t}))})]}),e(b,{className:"col-span-12 xl:col-span-4 h-max",withContainer:!0,children:d(E,{label:s("status"),value:i.status,onValueChange:t=>m(r=>({...r,status:t})),children:[e("option",{value:"all",children:s("all")}),e("option",{value:"paid",children:s("paid")}),e("option",{value:"unpaid",children:s("unpaid")})]})}),d(b,{className:"col-span-12 xl:col-span-4 h-max",children:[e(M,{leftSide:s("credits"),children:e(y,{checked:i.show_credits_table,onValueChange:t=>m(r=>({...r,show_credits_table:t}))})}),e(M,{leftSide:s("payments"),children:e(y,{checked:i.show_payments_table,onValueChange:t=>m(r=>({...r,show_payments_table:t}))})}),e(M,{leftSide:s("aging"),children:e(y,{checked:i.show_aging_table,onValueChange:t=>m(r=>({...r,show_aging_table:t}))})})]})]}),e("iframe",{className:"my-6",ref:c,width:"100%",height:1500,style:{display:w?"none":"block"}}),w&&e("div",{className:"flex justify-center items-center mt-6",style:{height:1500},children:e(K,{})})]})}export{Ke as default};