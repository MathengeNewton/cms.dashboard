import{av as V,aw as W,Q as b,r as $,e as J,ao as K,d as X,ax as Y,v as Z,l as ee,ay as te,az as ie,h as oe,j as T,x as re,a as s,C as ae,T as se,aA as A,aB as c,S as E,ah as ne,aC as me}from"./index-ecbcc3c7.js";import{b as pe}from"./blank-invitation-ca06b7b6.js";import{y as F}from"./lodash-bd2b80f6.js";import{r as l}from"./react-e483b31d.js";import{u as j}from"./react-router-dom-67fe6288.js";import{C as ce}from"./ClientSelector-8b233044.js";import{u as le,I as ue,a as de}from"./useInvoiceUtilities-d2c4c44c.js";import{u as fe,I as _e,a as ve}from"./useProductColumns-62bcf2b6.js";import{u as ge}from"./useTaskColumns-fe4d1c28.js";import{a as he}from"./react-router-82cc6afb.js";import{c as Ce,u as R}from"./jotai-c7720f6e.js";import"./classnames-eea0979a.js";import{u as xe}from"./react-i18next-91d47f13.js";import"./react-redux-7b717b6c.js";import"./react-dom-ce3e84ee.js";import"./@babel-e5cbf021.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-2fceee1f.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-7794fa59.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./react-query-557fee5a.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-debounce-input-20b6d49d.js";import"./lodash.debounce-ddb7250b.js";import"./@headlessui-220c51a1.js";import"./react-icons-071f44cd.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./@remix-run-dd360fb4.js";import"./ProjectSelector-0c0e158e.js";import"./DesignSelector-1def70e7.js";import"./designs-863b1b5c.js";import"./InvoiceViewer-a729b03c.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Ie(u){const C=he(),[v]=j(),{setErrors:t,isDefaultTerms:g,isDefaultFooter:p}=u,x=V(),a=W(),I=Ce(Y);return async y=>{b.processing(),t(void 0),await a(!0);let d="/api/v1/invoices?";g?(d+="save_default_terms=true",p&&(d+="&save_default_footer=true")):p&&(d+="save_default_footer=true"),$("POST",J(d),y).then(async f=>{(g||p)&&await x(),b.success("created_invoice"),K(["products"]),C(X("/invoices/:id/edit?table=:table",{id:f.data.data.id,table:v.get("table")??"products"}))}).catch(f=>{var o;((o=f.response)==null?void 0:o.status)===422&&(b.dismiss(),t(f.response.data))}).finally(()=>I(void 0))}}function Ii(){const{t:u}=xe(),{documentTitle:C}=Z("new_invoice"),v=ee(),[t,g]=R(ne),{data:p}=te({enabled:typeof t>"u"}),x=ie(),a=oe(),I=fe(),y=ge(),[d,f]=R(me),[o]=j(),[h,N]=l.useState(),[B,U]=l.useState(),[S,H]=l.useState(!1),[k,Q]=l.useState(!1),q=()=>(i("client_id",""),i("tax_name1",""),i("tax_rate1",0),i("tax_name2",""),i("tax_rate2",0),i("tax_name3",""),i("tax_rate3",0),!0),z=[{name:u("invoices"),href:"/invoices"},{name:u("new_invoice"),href:"/invoices/create"}],{handleChange:i,calculateInvoiceSum:G,handleInvitationChange:M,handleLineItemChange:D,handleLineItemPropertyChange:P,handleCreateLineItem:w,handleDeleteLineItem:L}=le({client:B}),O=Ie({setErrors:N,isDefaultTerms:S,isDefaultFooter:k});l.useEffect(()=>(f(void 0),g(e=>{var m;let r=e;if(o.get("action")!=="clone"&&o.get("action")!=="invoice_project"&&o.get("action")!=="invoice_task"&&o.get("action")!=="invoice_expense"&&o.get("action")!=="invoice_product"&&(r=void 0),typeof p<"u"&&typeof r>"u"&&o.get("action")!=="clone"){const n=F.cloneDeep(p);typeof n.line_items=="string"&&(n.line_items=[]),o.get("client")&&(n.client_id=o.get("client")),n.uses_inclusive_taxes=((m=a==null?void 0:a.settings)==null?void 0:m.inclusive_taxes)??!1,r=n}return r}),()=>{g(void 0)}),[p]);const _=(e,r)=>{var m,n;return e!=null&&e.settings&&(e!=null&&e.settings[r])?e.settings[r]:e!=null&&e.group_settings&&((m=e==null?void 0:e.group_settings)!=null&&m.settings[r])?(n=e==null?void 0:e.group_settings)==null?void 0:n.settings[r]:a==null?void 0:a.settings[r]};return l.useEffect(()=>{t&&t.client_id.length>1&&x.find(t.client_id).then(e=>{U(e);const r=[];e.contacts.map(m=>{if(m.send_email){const n=F.cloneDeep(pe);n.client_contact_id=m.id,r.push(n)}}),i("invitations",r),a&&a.enabled_tax_rates>0&&(i("tax_name1",_(e,"tax_name1")),i("tax_rate1",_(e,"tax_rate1"))),a&&a.enabled_tax_rates>1&&(i("tax_name2",_(e,"tax_name2")),i("tax_rate2",_(e,"tax_rate2"))),a&&a.enabled_tax_rates>2&&(i("tax_name3",_(e,"tax_name3")),i("tax_rate3",_(e,"tax_rate3")))})},[t==null?void 0:t.client_id]),l.useEffect(()=>{t&&G(t)},[t]),T(re,{title:C,breadcrumbs:z,onSaveClick:()=>O(t),disableSaveButton:(t==null?void 0:t.client_id.length)===0,children:[T("div",{className:"grid grid-cols-12 gap-4",children:[s(ae,{className:"col-span-12 xl:col-span-4 h-max",withContainer:!0,children:s(ce,{resource:t,onChange:e=>i("client_id",e),onClearButtonClick:q,onContactCheckboxChange:M,readonly:o.get("project")==="true",errorMessage:h==null?void 0:h.errors.client_id,disableWithSpinner:o.get("action")==="create"})}),s(ue,{invoice:t,handleChange:i,errors:h}),s("div",{className:"col-span-12",children:T(se,{tabs:[u("products"),u("tasks")],defaultTabIndex:o.get("table")==="tasks"?1:0,children:[s("div",{children:t?s(A,{type:"product",resource:t,shouldCreateInitialLineItem:o.get("table")!=="tasks",items:t.line_items.filter(e=>[c.Product,c.UnpaidFee,c.PaidFee,c.LateFee].includes(e.type_id)),columns:I,relationType:"client_id",onLineItemChange:D,onSort:e=>i("line_items",e),onLineItemPropertyChange:P,onCreateItemClick:()=>w(c.Product),onDeleteRowClick:L}):s(E,{})}),s("div",{children:t?s(A,{type:"task",resource:t,shouldCreateInitialLineItem:o.get("table")==="tasks",items:t.line_items.filter(e=>e.type_id===c.Task),columns:y,relationType:"client_id",onLineItemChange:D,onSort:e=>i("line_items",e),onLineItemPropertyChange:P,onCreateItemClick:()=>w(c.Task),onDeleteRowClick:L}):s(E,{})})]})}),s(de,{invoice:t,handleChange:i,errors:h,isDefaultFooter:k,isDefaultTerms:S,setIsDefaultFooter:Q,setIsDefaultTerms:H}),t&&s(_e,{relationType:"client_id",resource:t,invoiceSum:d,onChange:(e,r)=>i(e,r)})]}),(v==null?void 0:v.show_pdf_preview)&&s("div",{className:"my-4",children:t&&s(ve,{for:"create",resource:t,entity:"invoice",relationType:"client_id",endpoint:"/api/v1/live_preview?entity=:entity",observable:!0,initiallyVisible:!1})})]})}export{Ii as default};