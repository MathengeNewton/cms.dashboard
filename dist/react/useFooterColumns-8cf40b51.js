import{ae as w,a as s,a3 as M,y as V,h as F,j as k,F as R,a2 as f,O as _,p as q,d as Q,A as X,ac as H,X as W,Q as P,aq as z,l as G}from"./index-ecbcc3c7.js";import{N as J,P as K,I as g,a7 as L,R as U,B as Y,a6 as Z,a9 as $,a8 as ee,V as te}from"./react-icons-071f44cd.js";import{u as ne}from"./useDownloadPdfs-dc322b9d.js";import{r as I}from"./react-e483b31d.js";import{u as b}from"./react-i18next-91d47f13.js";import"./classnames-eea0979a.js";import"./react-debounce-input-20b6d49d.js";import"./react-redux-7b717b6c.js";import{a as y}from"./react-router-82cc6afb.js";import{u as se}from"./payments-ff169d7b.js";import{p as oe}from"./atoms-1e1b685d.js";import{v as ae}from"./uuid-4a60fe23.js";import{c as ie}from"./jotai-c7720f6e.js";import{I as p}from"./invoice-status-756326ba.js";import{c as le}from"./collect.js-ebd014c9.js";import{a as re,i as ce}from"./Actions-bf5a7e5b.js";import{a as me}from"./useInvoiceColumns-b37f3891.js";import{u as ue}from"./useSumTableColumn-7473cf49.js";function de(){const n=F(),o=[{label:"initial_email",value:"invoice"},{label:"first_reminder",value:"reminder1"},{label:"second_reminder",value:"reminder2"},{label:"third_reminder",value:"reminder3"},{label:"endless_reminder",value:"reminder_endless"}];return n!=null&&n.settings.email_subject_custom1&&o.push({label:n==null?void 0:n.settings.email_subject_custom1,value:"custom1"}),n!=null&&n.settings.email_subject_custom2&&o.push({label:n==null?void 0:n.settings.email_subject_custom2,value:"custom2"}),n!=null&&n.settings.email_subject_custom3&&o.push({label:n==null?void 0:n.settings.email_subject_custom3,value:"custom3"}),o}function fe(n){const{visible:o,setVisible:i,invoiceIds:m}=n,[u]=b(),c=w({onSuccess:()=>i(!1)}),l=de();return s(M,{title:V("email_count_invoices",{count:m.length}),visible:o,onClose:()=>i(!1),closeButtonCypressRef:"sendEmailModalXButton",children:s("div",{children:l.map((d,h)=>s("div",{className:"flex justify-between py-2 cursor-pointer hover:bg-gray-100 pl-2",onClick:()=>{c(m,"email",d.value),n.setSelected([])},children:u(d.label)},h))})})}function _e(n){const{invoices:o}=n,[i]=b(),m=y(),[u,c]=I.useState(!1),[l,d]=I.useState(!1),h=()=>o.every(({client:r})=>r==null?void 0:r.contacts.some(({email:v})=>v)),C=()=>o.find(({client:r})=>!(r!=null&&r.contacts.some(({email:v})=>v)));return k(R,{children:[s(fe,{visible:u,setVisible:c,invoiceIds:o.map(({id:r})=>r),setSelected:n.setSelected}),s(f,{onClick:()=>h()?c(!0):d(!0),icon:s(_,{element:J}),children:i("send_email")}),s(M,{title:i("contact_email"),visible:l,onClose:()=>d(!1),children:k("div",{className:"flex flex-col items-center space-y-4",children:[k("span",{className:"text-base font-medium",children:[i("client_email_not_set"),"."]}),s(q,{className:"self-end",onClick:()=>{var r;m(Q("/clients/:id/edit",{id:(r=C())==null?void 0:r.client_id})),d(!1)},children:i("edit_client")})]})})]})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function pe(){const n=y(),o=ie(oe),{data:i}=se();return m=>{i&&(o({...i.data.data,invoices:[],credits:[],client_id:m[0].client_id}),m.forEach(u=>{o(c=>c&&{...c,invoices:[...c.invoices,{_id:ae(),invoice_id:u.id,amount:u.balance>0?u.balance:u.amount}]})}),n("/payments/create?action=enter"))}}const Te=()=>{const[n]=b(),o=z(),i=X(),m=H({entity:"invoice"}),u=ne({entity:"invoice"}),c=pe(),l=w(),d=re(),h=e=>e.flatMap(({documents:t})=>t.map(({id:a})=>a)),C=e=>e.every(({is_deleted:t})=>!t),r=e=>!e.some(t=>!ce(t)),v=e=>{if(e.length){if(le(e).pluck("client_id").unique().toArray().length>1)return P.error("multiple_client_error");c(e)}},B=e=>!e.some(t=>parseInt(t.status_id)>parseInt(p.Partial)),A=e=>e.some(({documents:t})=>t.length),D=e=>!e.some(({status_id:t})=>t!==p.Sent),E=e=>!e.some(({status_id:t,is_deleted:a})=>t!==p.Draft||a),S=e=>!e.some(({status_id:t,is_deleted:a})=>parseInt(t)>parseInt(p.Partial)||a),j=e=>!e.some(({status_id:t,is_deleted:a,archived_at:N})=>t!==p.Paid&&t!==p.Partial||a||N),x=(e,t)=>{const a=h(e);o(a,"download"),t==null||t([])},{setChangeTemplateVisible:O,setChangeTemplateResources:T}=W();return[({selectedResources:e,setSelected:t})=>s(_e,{invoices:e,setSelected:t}),({selectedIds:e,setSelected:t})=>s(f,{onClick:()=>{m(e),t([])},icon:s(_,{element:K}),children:n("print_pdf")}),({selectedIds:e,setSelected:t})=>s(f,{onClick:()=>{u(e),t([])},icon:s(_,{element:g}),children:n("download_pdf")}),({selectedIds:e,selectedResources:t,setSelected:a})=>r(t)&&s(f,{onClick:()=>{l(e,"auto_bill"),a([])},icon:s(_,{element:L}),children:n("auto_bill")}),({selectedIds:e,selectedResources:t,setSelected:a})=>E(t)&&s(f,{onClick:()=>{l(e,"mark_sent"),a([])},icon:s(_,{element:U}),children:n("mark_sent")}),({selectedResources:e,setSelected:t})=>B(e)&&i("create_payment")&&s(f,{onClick:()=>{v(e),t([])},icon:s(_,{element:Y}),children:n("enter_payment")}),({selectedIds:e,selectedResources:t,setSelected:a})=>S(t)&&s(f,{onClick:()=>{l(e,"mark_paid"),a([])},icon:s(_,{element:Z}),children:n("mark_paid")}),({selectedResources:e,setSelected:t})=>C(e)&&s(f,{onClick:()=>A(e)?x(e,t):P.error("no_documents_to_download"),icon:s(_,{element:g}),children:n("documents")}),({selectedResources:e,setSelected:t})=>j(e)&&i("create_credit")&&s(f,{onClick:()=>{d(e[0]),t([])},icon:s(_,{element:$}),children:n("reverse")}),({selectedIds:e,selectedResources:t,setSelected:a})=>D(t)&&s(f,{onClick:()=>{l(e,"cancel"),a([])},icon:s(_,{element:ee}),children:n("cancel_invoice")}),({selectedResources:e})=>s(f,{onClick:()=>{O(!0),T(e)},icon:s(_,{element:te}),children:n("run_template")})]};/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Ne(){var c;const[n]=b(),o=G(),i=ue();me();const m=[{column:"amount",id:"amount",label:n("amount"),format:(l,d)=>i(l,d)},{column:"balance",id:"balance",label:n("balance"),format:(l,d)=>i(l,d)}],u=((c=o==null?void 0:o.table_footer_columns)==null?void 0:c.invoice)||[];return{footerColumns:m.filter(({id:l})=>u.includes(l)),allFooterColumns:m}}export{Ne as a,Te as u};
