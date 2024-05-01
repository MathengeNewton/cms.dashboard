import{h as E,v as T,a as o,x as N,j as f,Q as d,r as C,e as S,ao as D,d as Y,bK as j}from"./index-ecbcc3c7.js";import{r as l}from"./react-e483b31d.js";import{D as k,N as A,A as R,T as q}from"./Taxes-dee0eda6.js";import{u as I}from"./react-router-dom-67fe6288.js";import{f as M,g as P,h as Q}from"./hooks-743100c9.js";import{y as w}from"./lodash-bd2b80f6.js";import{bn as F}from"./dayjs-75976aa4.js";import{u as H}from"./react-i18next-91d47f13.js";import{a as O}from"./react-router-82cc6afb.js";import{u as B}from"./jotai-c7720f6e.js";import"./react-redux-7b717b6c.js";import"./react-dom-ce3e84ee.js";import"./@babel-e5cbf021.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-2fceee1f.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-7794fa59.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./react-query-557fee5a.js";import"./@azure-485fd2d4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./classnames-eea0979a.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-debounce-input-20b6d49d.js";import"./lodash.debounce-ddb7250b.js";import"./@headlessui-220c51a1.js";import"./react-icons-071f44cd.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./@remix-run-dd360fb4.js";import"./ProjectSelector-0c0e158e.js";import"./PaymentTypeSelector-d0e238d2.js";function Qr(){const[_]=H(),e=E(),g=O(),[p]=I(),{documentTitle:v}=T("new_recurring_expense"),h=[{name:_("recurring_expenses"),href:"/recurring_expenses"},{name:_("new_recurring_expense"),href:"/recurring_expenses/create"}],[m,b]=l.useState(e!=null&&e.calculate_expense_tax_by_amount?"by_amount":"by_rate"),[t,x]=B(j),{data:n}=M({enabled:typeof t>"u"}),[a,c]=l.useState(),s=Q({setRecurringExpense:x,setErrors:c});l.useEffect(()=>{x(u=>{let r=u;if(p.get("action")!=="clone"&&(r=void 0),typeof n<"u"&&typeof r>"u"&&p.get("action")!=="clone"){const i=w.cloneDeep(n);i.frequency_id=P.FREQUENCY_MONTHLY,p.get("client")&&(i.client_id=p.get("client")),p.get("vendor")&&(i.vendor_id=p.get("vendor")),r={...i,payment_date:e!=null&&e.mark_expenses_paid?F().format("YYYY-MM-DD"):"",should_be_invoiced:e==null?void 0:e.mark_expenses_invoiceable,invoice_documents:e==null?void 0:e.invoice_expense_documents,calculate_tax_by_amount:m==="by_amount",uses_inclusive_taxes:e.expense_inclusive_taxes}}return r})},[n]);const y=u=>{d.processing(),c(void 0),C("POST",S("/api/v1/recurring_expenses"),u).then(r=>{d.success("created_recurring_expense"),D(["recurring_expenses"]),g(Y("/recurring_expenses/:id/edit",{id:r.data.data.id}))}).catch(r=>{var i;((i=r.response)==null?void 0:i.status)===422&&(c(r.response.data),d.dismiss())})};return o(N,{title:v,breadcrumbs:h,onSaveClick:()=>t&&y(t),children:f("div",{className:"grid grid-cols-12 gap-4",children:[o("div",{className:"col-span-12 xl:col-span-4",children:o(k,{recurringExpense:t,handleChange:s,taxInputType:m,pageType:"create",errors:a})}),o("div",{className:"col-span-12 xl:col-span-4",children:o(A,{recurringExpense:t,handleChange:s,errors:a})}),f("div",{className:"col-span-12 xl:col-span-4 space-y-4",children:[o(R,{recurringExpense:t,handleChange:s,errors:a}),o(q,{recurringExpense:t,handleChange:s,taxInputType:m,setTaxInputType:b})]})]})})}export{Qr as default};
