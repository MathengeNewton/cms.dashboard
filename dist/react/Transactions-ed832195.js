import{r as z,e as R,h as oe,u as Z,c as he,dq as se,a,D as ye,d as K,U as fe,z as A,k as L,j as y,aH as G,F as B,dd as ue,aO as me,y as be,O as W,b as J,aE as pe,g as q,bu as ce,dc as Ce,dr as _e,ds as ge,dt as $e,at as ve,T as Se,p as ae,Q as P,ao as H,du as xe,dv as ke,cX as Te,dw as Ie,G as D,a3 as Ne,a2 as ne,v as De,A as we,x as Pe,f as Me,Y as Ee,Z as Ke,_ as te}from"./index-ecbcc3c7.js";import{E as Be,A as Y,T as X,u as Fe,a as de,b as Oe}from"./transactions-20e704af.js";import"./classnames-eea0979a.js";import{r as h}from"./react-e483b31d.js";import"./react-debounce-input-20b6d49d.js";import"./react-redux-7b717b6c.js";import{a as Ae,u as Qe}from"./react-query-557fee5a.js";import{u as Ve,a as je}from"./useActions-529f4f92.js";import{u as Q}from"./react-i18next-91d47f13.js";import{I as ze}from"./ImportButton-58c4bd54.js";import{c as Re,b as Le}from"./payments-ff169d7b.js";import{ar as Ue,B as Ge,as as He,y as We,al as qe,at as Xe,x as Ye}from"./react-icons-071f44cd.js";import{I as E}from"./invoice-status-756326ba.js";import{P as O}from"./payment-status-51e1486d.js";import{d as Ze}from"./jotai-c7720f6e.js";import{S as Je}from"./Slider-2eda3086.js";import"./hoist-non-react-statics-2fceee1f.js";import"./@babel-e5cbf021.js";import"./react-is-e8e5dbb3.js";import"./lodash-bd2b80f6.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import"./axios-60492c0c.js";import"./react-hot-toast-d3a0fddd.js";import"./goober-70b4b9ca.js";import"./@azure-485fd2d4.js";import"./react-router-82cc6afb.js";import"./@remix-run-dd360fb4.js";import"./@reduxjs-3eb15742.js";import"./immer-85efa438.js";import"./redux-fc7ec223.js";import"./reselect-26feef0e.js";import"./redux-thunk-ef899f4c.js";import"./react-router-dom-67fe6288.js";import"./styled-components-2e13d465.js";import"./tslib-b7af3ea6.js";import"./@emotion-4a2a218f.js";import"./stylis-60528643.js";import"./react-datepicker-27eb8381.js";import"./react-dom-ce3e84ee.js";import"./scheduler-765c72db.js";import"./@headlessui-220c51a1.js";import"./react-feather-90dbe0b6.js";import"./prop-types-20aec754.js";import"./@tippyjs-11b6b10a.js";import"./tippy.js-87d3e7d2.js";import"./@popperjs-0aa08b12.js";import"./formik-4b8c99cc.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-76c36d98.js";import"./tiny-warning-c932d744.js";import"./react-use-57961871.js";import"./react-phone-number-input-4fffe465.js";import"./react-verification-input-7fc81ee7.js";import"./collect.js-ebd014c9.js";import"./uuid-4a60fe23.js";import"./react-colorful-fdedf134.js";import"./@react-oauth-6ebaa241.js";import"./react-qr-code-d89187e6.js";import"./qr.js-8bf59ccc.js";import"./react-select-0a6a834e.js";import"./@floating-ui-f24065be.js";import"./use-isomorphic-layout-effect-90624eb0.js";import"./memoize-one-297ddbcb.js";import"./@hello-pangea-bfa72c9a.js";import"./use-memo-one-4ec633fc.js";import"./css-box-model-096cf826.js";import"./tiny-invariant-bee4f299.js";import"./raf-schd-5404ed65.js";import"./array-move-3ca81c74.js";import"./antd-c1c66b30.js";import"./rc-util-6b529ca7.js";import"./@ant-design-6511c079.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-f83f8b7d.js";import"./rc-motion-e4fc5c25.js";import"./rc-picker-0dcad4af.js";import"./@rc-component-79b9f5ef.js";import"./rc-pagination-2b5394e8.js";import"./rc-field-form-4872bfbf.js";import"./async-validator-dee29e8b.js";import"./@tinymce-7238a8f2.js";import"./pretty-bytes-5eb460d8.js";import"./react-dropzone-eadb3dbd.js";import"./file-selector-6cb2a621.js";import"./attr-accept-6df8d728.js";import"./react-string-replace-e94ae631.js";import"./currency.js-57f74176.js";import"./react-json-tree-c223e40a.js";import"./react-base16-styling-898a7ddc.js";import"./base16-823cae66.js";import"./color-65b618c9.js";import"./color-string-f5cd3c3e.js";import"./color-name-b7949e8c.js";import"./simple-swizzle-58fb3c22.js";import"./color-convert-946e453a.js";import"./lodash.curry-52fa8793.js";import"./react-turnstile-a0253d8c.js";import"./mitt-f7ef348c.js";import"./@sentry-71948bea.js";import"./@sentry-internal-c0f5a295.js";import"./use-sync-external-store-7794fa59.js";import"./lodash.debounce-ddb7250b.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function re(e){return Ae(["/api/v1/invoices",e],()=>z("GET",R("/api/v1/invoices?client_status=:client_status&filter=:filter&client_id=:client_id&without_deleted_clients=:without_deleted_clients&per_page=:per_page&page=:page&include=:include",{per_page:e.perPage??"100",page:e.currentPage??"1",client_status:e.clientStatus??"all",client_id:e.clientId??"",filter:e.filter??"",without_deleted_clients:e.withoutDeletedClients||!0,include:e.include||""})).then(o=>o.data.data),{enabled:e.enabled??!0,staleTime:1/0})}function et(){const{t:e}=Q(),o=oe(),s=Z(),n=he(),c=Ve(),{data:t}=re({perPage:1e3}),{data:i}=se({perPage:1e3}),v=u=>{var r;return((r=t==null?void 0:t.find(b=>b.id===u))==null?void 0:r.number)||""},x=u=>{var r;return((r=i==null?void 0:i.find(b=>b.id===u))==null?void 0:r.number)||""};return[{id:"status",label:e("status"),format:(u,r)=>a(ye,{to:K("/transactions/:id/edit",{id:r.id}),renderSpan:n("bank_transaction",r),children:a(Be,{transaction:r})})},{id:"deposit",label:e("deposit"),format:(u,r)=>{var b;if(r.base_type===Y.Credit)return s(r.amount,(b=o==null?void 0:o.settings)==null?void 0:b.country_id,r.currency_id)}},{id:"withdrawal",label:e("withdrawal"),format:(u,r)=>{var b;if(r.base_type===Y.Debit)return s(r.amount,(b=o==null?void 0:o.settings)==null?void 0:b.country_id,r.currency_id)}},{id:"date",label:e("date")},{id:"description",label:e("description"),format:u=>a(fe,{size:"regular",truncate:!0,containsUnsafeHTMLTags:!0,message:c(u),children:a("span",{dangerouslySetInnerHTML:{__html:c(u)}})})},{id:"invoice_ids",label:e("invoices"),format:u=>u&&a("div",{className:"flex space-x-2",children:u.toString().split(",").map(r=>a(A,{to:K("/invoices/:id/edit",{id:r}),children:v(r)},r))})},{id:"expense_id",label:e("expense"),format:u=>u&&a("div",{className:"flex space-x-2",children:u.toString().split(",").map(r=>a(A,{to:K("/expenses/:id/edit",{id:r}),children:x(r)},r))})}]}function tt(e){const[o]=Q(),s=L(),n=(c,t)=>{e.setSearchParams(i=>({...i,[c]:t}))};return a("div",{className:"absolute w-full top-full left-0 mt-1 text-center z-10",style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderColor:s.$4},children:y("div",{className:"flex flex-col items-center pt-3 pb-6 space-y-3",style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderBottom:`1px solid ${s.$5}`},children:[y("div",{className:"flex justify-evenly w-full",style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderColor:s.$4},children:[a(G,{changeOverride:!0,style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderColor:s.$4},width:"12rem",label:`${o("min")} ${o("amount")}`,value:e.searchParams.minAmount,onValueChange:c=>n("minAmount",isNaN(Number(c))?0:Number(c))}),a(G,{changeOverride:!0,style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderColor:s.$4},width:"12rem",label:`${o("max")} ${o("amount")}`,value:e.searchParams.maxAmount,onValueChange:c=>n("maxAmount",isNaN(Number(c))?0:Number(c))})]}),y("div",{className:"flex justify-evenly w-full",children:[a(G,{style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderColor:s.$4},className:"w-full",width:"12rem",label:o("start"),type:"date",value:e.searchParams.startDate,onValueChange:c=>n("startDate",c||"")}),a(G,{changeOverride:!0,style:{color:s.$3,colorScheme:s.$0,backgroundColor:s.$1,borderColor:s.$4},className:"w-full",width:"12rem",label:o("end"),type:"date",value:e.searchParams.endDate,onValueChange:c=>n("endDate",c||"")})]})]})})}function at(e){const o=e.dataKey==="invoices",s=e.dataKey==="payments",n=e.dataKey==="expenses",[c,t]=h.useState(!1),[i,v]=h.useState(!1),x=(u,r)=>{e.setSearchParams(b=>({...b,[u]:r}))},C=L();return y(B,{children:[a(ue,{initiallyVisible:c,setVisible:t,setSelectedIds:e.setSelectedIds,onChange:()=>{}}),a(me,{initiallyVisibleModal:i,setVisible:v,setSelectedIds:e.setSelectedIds,onChange:()=>{}}),y("div",{className:"flex items-center pr-3",children:[a(G,{changeOverride:!0,style:{color:C.$3,colorScheme:C.$0,backgroundColor:C.$1,borderColor:C.$4},placeholder:be(`search_${e.dataKey}`,{count:""}),value:e.searchParams.searchTerm,onValueChange:u=>x("searchTerm",u)}),o||s||n?a(B,{children:a(W,{element:Ue,className:"ml-3 cursor-pointer",size:28,onClick:()=>e.setIsFilterModalOpened(u=>!u)})}):a(B,{children:a(W,{element:Ge,className:"ml-3 cursor-pointer",size:28,onClick:()=>e.dataKey==="vendors"?v(!0):t(!0)})}),e.isFilterModalOpened&&a(tt,{searchParams:e.searchParams,setSearchParams:e.setSearchParams})]})]})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const nt={[E.Cancelled]:"cancelled",[E.Unpaid]:"unpaid",[E.PastDue]:"past_due",[E.Draft]:"draft",[E.Sent]:"sent",[E.Partial]:"partial",[E.Paid]:"paid",[E.Cancelled]:"cancelled",[E.Reversed]:"reversed"};/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const ot={[O.PartiallyUnapplied]:"partially_unapplied",[O.Unapplied]:"unapplied",[O.Pending]:"pending",[O.Cancelled]:"cancelled",[O.Failed]:"failed",[O.Completed]:"completed",[O.PartiallyRefunded]:"partially_refunded",[O.Refunded]:"refunded"};function st(e){const o=Z(),{dateFormat:s}=J(),n=L();return y("li",{style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},className:"flex justify-between w-full cursor-pointer p-4 border-b last:border-b-0",onClick:()=>e.selectItem(e.resourceItem.id,e.resourceItem.clientId),children:[y("div",{className:"flex items-center",children:[a(pe,{style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},checked:e.isItemChecked,onClick:()=>e.selectItem(e.resourceItem.id)}),y("div",{className:"flex flex-col items-start",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:[a("span",{className:"text-sm",children:e.resourceItem.name}),a("span",{className:"text-sm",children:e.resourceItem.number})]})]}),y("div",{className:"flex items-center flex-grow pr-3",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:[y("div",{className:"flex flex-col flex-grow pl-8 pr-3",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:[a("span",{className:"text-sm",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:e.resourceItem.clientName}),a("span",{className:"text-sm",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:q(e.resourceItem.date||"",s)})]}),typeof e.resourceItem.amount=="number"&&a("span",{className:"text-sm",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:o(e.resourceItem.amount||0,e.resourceItem.country_id,e.resourceItem.currency_id)})]}),a("div",{className:"flex items-center",style:{color:n.$3,colorScheme:n.$0,backgroundColor:n.$1,borderColor:n.$4},children:e.resourceItem.statusId?y(B,{children:[e.dataKey==="invoices"&&a(ce,{for:nt,code:e.resourceItem.statusId}),e.dataKey==="payments"&&a(ce,{for:ot,code:e.resourceItem.statusId})]}):a(B,{children:e.dataKey==="expenses"&&a(Ce,{entity:e.resourceItem})})})]},e.resourceItem.id)}function U(e){const[o,s]=h.useState({searchTerm:"",minAmount:0,maxAmount:0,startDate:"",endDate:""}),n=e.dataKey==="invoices",c=e.dataKey==="vendors",t=e.dataKey==="categories",i=e.dataKey==="payments",v=e.dataKey==="expenses",[x,C]=h.useState(),{data:u}=_e({enabled:n}),{data:r}=re({include:"client",clientStatus:"unpaid",filter:o.searchTerm,clientId:x,enabled:n}),{data:b}=ge({filter:o.searchTerm,enabled:c}),{data:f}=$e({filter:o.searchTerm,enabled:t}),{data:k}=Re({include:"client",filter:o.searchTerm,enabled:i,matchTransactions:!0}),{data:T}=se({include:"client",filter:o.searchTerm,enabled:v,matchTransactions:!0}),[w,g]=h.useState(),[$,I]=h.useState(),[V,j]=h.useState(!1),N=p=>{var m,S;return!!((S=(m=e.selectedIds)==null?void 0:m.find(M=>M===p))!=null&&S.length)},F=(p,m)=>{var ie,le;C(m);const S=(ie=e.selectedIds)==null?void 0:ie.find(ee=>p===ee);let M;S!=null&&S.length?(M=(le=e.selectedIds)==null?void 0:le.filter(ee=>ee!==p),e.setSelectedIds(M)):(M=[...e.selectedIds||[],p],e.setSelectedIds(M))},d=p=>{var m;return(m=$==null?void 0:$.find(({id:S})=>S===p))==null?void 0:m.display_name},l=p=>p==null?void 0:p.map(m=>{var S,M;return{id:m.id,number:m.number,name:m.name,clientName:d(m.client_id),statusId:m.status_id,amount:m.amount,date:m.date,clientId:m.client_id,should_be_invoiced:m.should_be_invoiced,invoice_id:m.invoice_id,payment_date:m.payment_date,transaction_reference:m.transaction_reference,payment_type_id:m.payment_type_id,country_id:m.country_id||((S=m.client)==null?void 0:S.country_id),currency_id:m.currency_id||((M=m.client)==null?void 0:M.settings.currency_id)}});h.useEffect(()=>{I(u),g(l(n?r:c?b:t?f:i?k:T))},[e.dataKey,r,b,f,u,k,T]),h.useEffect(()=>{var p;n&&!((p=e.selectedIds)!=null&&p.length)&&C("")},[e.selectedIds]);const _=L();return y("div",{className:"flex flex-col flex-1 w-full",style:{color:_.$3,colorScheme:_.$0,backgroundColor:_.$1,borderColor:_.$4},children:[a("div",{style:{color:_.$3,colorScheme:_.$0,backgroundColor:_.$1,borderColor:_.$4},className:`flex justify-center px-5 py-3 relative border-b border-t ${e.className}`,children:a(at,{dataKey:e.dataKey,searchParams:o,setIsFilterModalOpened:j,isFilterModalOpened:V,setSearchParams:s,setSelectedIds:e.setSelectedIds})}),a("ul",{style:{height:n?400:200,color:_.$3,colorScheme:_.$0,backgroundColor:_.$1,borderColor:_.$4},className:"flex flex-col grow justify-start overflow-y-auto",children:w==null?void 0:w.map(p=>{var m;return(N(p.id)||!((m=e.selectedIds)!=null&&m.length)||n||v)&&a(st,{isItemChecked:N(p.id),resourceItem:p,selectItem:F,dataKey:e.dataKey},p.id)})})]})}function rt(e){const[o]=Q(),s=Qe(),{transactionRule:n}=e,c=Ze(ve),[t,i]=h.useState(!1),[v,x]=h.useState(!0),[C,u]=h.useState([]),[r,b]=h.useState([]),[f,k]=h.useState([]),[T,w]=h.useState([]),[g,$]=h.useState([]),I=[e.isCreditTransactionType?o("create_payment"):o("create_expense"),e.isCreditTransactionType?o("link_payment"):o("link_expense")],V=l=>{l.preventDefault(),!(!C.length||t)&&(i(!0),P.processing(),z("POST",R("/api/v1/bank_transactions/match"),{transactions:[{id:e.transactionDetails.transaction_id,invoice_ids:C.join(",")}]}).then(()=>{s.invalidateQueries([c]),H(["invoices","bank_transactions"]),P.success("converted_transaction")}).finally(()=>i(!1)))},j=l=>{l.preventDefault(),!(!T.length||t)&&(i(!0),P.processing(),z("POST",R("/api/v1/bank_transactions/match"),{transactions:[{id:e.transactionDetails.transaction_id,payment_id:T.join(",")}]}).then(()=>{s.invalidateQueries([c]),H(["invoices","payments","bank_transactions"]),P.success("linked_transaction")}).finally(()=>i(!1)))},N=l=>{l.preventDefault(),!(!r.length&&!f.length||t)&&(i(!0),P.processing(),z("POST",R("/api/v1/bank_transactions/match"),{transactions:[{id:e.transactionDetails.transaction_id,vendor_id:r.join(","),ninja_category_id:f.join(",")}]}).then(()=>{s.invalidateQueries([c]),H(["bank_transactions","expenses"]),P.success("converted_transaction")}).finally(()=>i(!1)))},F=l=>{l.preventDefault(),!(!g.length||t)&&(i(!0),P.processing(),z("POST",R("/api/v1/bank_transactions/match"),{transactions:[{id:e.transactionDetails.transaction_id,expense_id:g.join(",")}]}).then(()=>{s.invalidateQueries([c]),H(["expenses","bank_transactions"]),P.success("linked_transaction")}).finally(()=>i(!1)))};h.useEffect(()=>{x(e.transactionDetails.status_id===X.Converted)},[e.transactionDetails.status_id,e.isCreditTransactionType,r,C,f,T,g]),h.useEffect(()=>()=>{x(!0)},[]),h.useEffect(()=>{if(n){const{category_id:l,vendor_id:_}=n;l&&k([l]),_&&b([_])}},[n]);const d=L();return a("div",{className:"flex flex-col flex-1",children:a("div",{className:"flex flex-col flex-1",children:!v&&y(Se,{className:"flex flex-col flex-1 border-t border-gray-200",tabs:I,height:"full",width:"full",children:[y("div",{children:[e.isCreditTransactionType?a(U,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},transactionDetails:e.transactionDetails,dataKey:"invoices",setSelectedIds:u,selectedIds:C}):y(B,{children:[a(U,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},transactionDetails:e.transactionDetails,dataKey:"vendors",setSelectedIds:b,selectedIds:r}),a(U,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},transactionDetails:e.transactionDetails,dataKey:"categories",setSelectedIds:k,selectedIds:f})]}),a("div",{className:"px-3 py-3 w-full border-t border-gray-200",children:y(ae,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},className:"w-full",onClick:e.isCreditTransactionType?V:N,disableWithoutIcon:!0,disabled:t||e.isCreditTransactionType&&!C.length&&!T.length||!e.isCreditTransactionType&&!r.length&&!f.length&&!g.length,children:[a(He,{fontSize:22}),a("span",{children:e.isCreditTransactionType?o("create_payment"):o("create_expense")})]})})]}),y("div",{children:[e.isCreditTransactionType?a(U,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},transactionDetails:e.transactionDetails,dataKey:"payments",setSelectedIds:w,selectedIds:T}):a(U,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},transactionDetails:e.transactionDetails,dataKey:"expenses",setSelectedIds:$,selectedIds:g}),a("div",{className:"px-3 py-3 w-full border-t border-gray-200",children:y(ae,{style:{color:d.$3,colorScheme:d.$0,backgroundColor:d.$1,borderColor:d.$4},className:"w-full",onClick:e.isCreditTransactionType?j:F,disableWithoutIcon:!0,disabled:t||e.isCreditTransactionType&&!C.length&&!T.length||!e.isCreditTransactionType&&!r.length&&!f.length&&!g.length,children:[a(We,{fontSize:22}),a("span",{children:e.isCreditTransactionType?o("link_payment"):o("link_expense")})]})})]})]})})})}function it(e){const[o]=Q(),s=oe(),n=Z(),{dateFormat:c}=J(),{data:t}=Fe({id:e.transactionId,enabled:!!e.transactionId}),{data:i}=xe({id:(t==null?void 0:t.bank_integration_id)||"",enabled:!!t}),v=X.Matched===(t==null?void 0:t.status_id),{data:x}=ke({id:(t==null?void 0:t.bank_transaction_rule_id)||"",enabled:!!t&&v}),[C,u]=h.useState(),[r,b]=h.useState(),[f,k]=h.useState(),[T,w]=h.useState(),g=(t==null?void 0:t.base_type)===Y.Credit,$=X.Converted!==(t==null?void 0:t.status_id),I=t&&!$&&!!e.transactionId,{data:V}=re({enabled:g&&I}),{data:j}=Le({id:(t==null?void 0:t.payment_id)||"",enabled:g&&I}),{data:N}=Te({id:(t==null?void 0:t.vendor_id)||"",enabled:!g&&I}),{data:F}=se({enabled:!g&&I}),{data:d}=Ie({id:(t==null?void 0:t.ninja_category_id)||"",enabled:!g&&I});h.useEffect(()=>{if(t){const _=V==null?void 0:V.filter(({id:m})=>{var S;return(S=t.invoice_ids)==null?void 0:S.includes(m)});u(_);const p=F==null?void 0:F.filter(({id:m})=>{var S;return(S=t.expense_id)==null?void 0:S.includes(m)});w(p),k(d==null?void 0:d.data.data),b(j)}},[t,d,j,e.transactionId,F]);const l=L();return y("div",{className:"flex flex-col flex-1 border-b",style:{color:l.$3,colorScheme:l.$0,backgroundColor:l.$1,borderColor:l.$4},children:[y("div",{children:[a(D,{leftSide:o("type"),children:o(g?de.Deposit:de.Withdrawal)}),a(D,{leftSide:o("amount"),children:n((t==null?void 0:t.amount)||0,s==null?void 0:s.settings.country_id,t==null?void 0:t.currency_id)}),a(D,{leftSide:o("date"),children:q((t==null?void 0:t.date)||"",c)}),a(D,{leftSide:o("bank_account"),className:"cursor-pointer",children:a(A,{style:{color:l.$3,colorScheme:l.$0,backgroundColor:l.$1,borderColor:l.$4},to:K("/settings/bank_accounts/:id/details",{id:i==null?void 0:i.id}),children:i==null?void 0:i.bank_account_name})}),(t==null?void 0:t.participant)&&a(D,{leftSide:o("participant"),children:t.participant}),(t==null?void 0:t.participant_name)&&a(D,{leftSide:o("participant_name"),children:t.participant_name})]}),$?a(rt,{transactionDetails:{base_type:(t==null?void 0:t.base_type)||"",transaction_id:(t==null?void 0:t.id)||"",status_id:(t==null?void 0:t.status_id)||""},isCreditTransactionType:g,transactionRule:x}):y(B,{children:[C==null?void 0:C.map(({id:_,number:p})=>a(D,{leftSide:o("invoice"),className:"cursor-pointer",children:a(A,{style:{color:l.$3,colorScheme:l.$0,backgroundColor:l.$1,borderColor:l.$4},to:K("/invoices/:id/edit",{id:_}),children:p})},_)),(t==null?void 0:t.payment_id)&&a(D,{leftSide:o("payment"),className:"cursor-pointer",children:a(A,{style:{color:l.$3,colorScheme:l.$0},to:K("/payments/:id/edit",{id:r==null?void 0:r.id}),children:r==null?void 0:r.number})}),(t==null?void 0:t.vendor_id)&&a(D,{leftSide:o("vendor"),className:"cursor-pointer",children:a(A,{style:{color:l.$3,colorScheme:l.$0,backgroundColor:l.$1,borderColor:l.$4},to:K("/vendors/:id",{id:N==null?void 0:N.id}),children:N==null?void 0:N.name})}),(t==null?void 0:t.ninja_category_id)&&a(D,{leftSide:o("category"),className:"cursor-pointer",children:a(A,{style:{color:l.$3,colorScheme:l.$0},to:K("/settings/expense_categories/:id/edit",{id:f==null?void 0:f.id}),children:f==null?void 0:f.name})}),T==null?void 0:T.map(({id:_,number:p,date:m})=>a(D,{leftSide:o("expense"),className:"cursor-pointer",children:a(A,{style:{color:l.$3,colorScheme:l.$0},to:K("/expenses/:id/edit",{id:_}),children:p||q(m,c)})},_))]})]})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function lt(){const[e]=Q();return[{label:e("all"),value:"all",color:"black",backgroundColor:"#e4e4e4"},{label:e("unmatched"),value:"unmatched",color:"white",backgroundColor:"#6B7280"},{label:e("matched"),value:"matched",color:"white",backgroundColor:"#1D4ED8"},{label:e("converted"),value:"converted",color:"white",backgroundColor:"#22C55E"},{label:e("deposits"),value:"deposits",color:"white",backgroundColor:"#e6b05c"},{label:e("withdrawals"),value:"withdrawals",color:"white",backgroundColor:"#93C5FD"}]}function ct(e){const[o]=Q(),{transactions:s,setSelected:n}=e,c=oe(),t=Z(),{dateFormat:i}=J(),[v,x]=h.useState(!1),[C,u]=h.useState(!1),[r,b]=h.useState(""),[f,k]=h.useState(""),T=()=>s.every(({base_type:$,status_id:I})=>$===Y.Debit&&I!==X.Converted),w=()=>{b(""),n([]),x(!1),k("")},g=()=>{P.processing(),u(!0);const $=s.map(I=>({id:I.id,vendor_id:r,ninja_category_id:f}));z("POST",R("/api/v1/bank_transactions/match"),{transactions:$}).then(()=>{H(["bank_transactions","expenses"]),P.success("converted_transaction"),w()}).finally(()=>u(!1))};return T()?y(B,{children:[y(Ne,{title:o("create_expense"),visible:v,onClose:w,overflowVisible:!0,children:[y("div",{className:"flex flex-col space-y-3",children:[y("span",{className:"text-base font-medium",children:[o("transactions"),":"]}),a("div",{className:"flex flex-col px-10",children:s.map(($,I)=>y("div",{className:"flex justify-evenly",children:[a("span",{className:"flex-1",children:q($.date,i)}),a("span",{className:"ml-16 flex-1",children:t($.amount,c==null?void 0:c.settings.country_id,$.currency_id)})]},I))})]}),a(me,{inputLabel:o("vendor"),value:r,onChange:$=>b($.id),onClearButtonClick:()=>b("")}),a(ue,{inputLabel:o("expense_category"),value:f,onChange:$=>k($.id),onClearButtonClick:()=>k("")}),a(ae,{behavior:"button",onClick:g,disableWithoutIcon:!0,disabled:!r&&!f||C,children:o("create_expense")})]}),a(ne,{onClick:()=>x(!0),icon:a(W,{element:qe}),children:o("create_expense")})]}):null}const dt=()=>{const[e]=Q(),o=Oe(),s=t=>t.every(({status_id:i})=>X.Matched===i),n=t=>t.every(({payment_id:i})=>i);return[({selectedIds:t,selectedResources:i,setSelected:v})=>i&&n(i)&&a(ne,{onClick:()=>{o(t,"unlink"),v([])},icon:a(W,{element:Xe}),children:e("unlink")}),({selectedResources:t,setSelected:i})=>t&&a(ct,{setSelected:i,transactions:t}),({selectedIds:t,selectedResources:i,setSelected:v})=>i&&s(i)&&a(ne,{onClick:()=>{o(t,"convert_matched"),v([])},icon:a(W,{element:Ye}),children:e("convert")})]};function cn(){De("transactions");const[e]=Q(),o=we(),s=[{name:e("transactions"),href:"/transactions"}],n=je(),c=lt(),t=et(),i=dt(),{dateFormat:v}=J(),[x,C]=h.useState(),[u,r]=h.useState(""),b=f=>{if(r(f.id),f.description){let k=f.description;f.description.length>35&&(k=k.slice(0,35).concat("...")),C(k)}else C(q(f.date,v))};return y(B,{children:[a(Je,{title:x,visible:!!u,onClose:()=>r(""),size:"large",children:a(it,{transactionId:u,setTransactionId:r})}),a(Pe,{title:e("transactions"),breadcrumbs:s,docsLink:"en/transactions/",withoutBackButton:!0,children:a(Me,{resource:"transaction",endpoint:"/api/v1/bank_transactions?sort=id|desc",bulkRoute:"/api/v1/bank_transactions/bulk",columns:t,linkToCreate:"/transactions/create",linkToEdit:"/transactions/:id/edit",onTableRowClick:b,customActions:n,customFilters:c,customBulkActions:i,customFilterPlaceholder:"status",rightSide:a(Ee,{type:"component",guards:[Ke(te("create_bank_transaction"),te("edit_bank_transaction"))],component:a(ze,{route:"/transactions/import"})}),withResourcefulActions:!0,linkToCreateGuards:[te("create_bank_transaction")],hideEditableOptions:!o("edit_bank_transaction")})})]})}export{cn as default};
