import{h as I,j as v,F as M,C as x,a,G as _,aH as g,g as P,aI as b,I as E,o as F,A as k,E as j,T,aJ as H,aK as y,as as D,aN as R,aD as $,aL as B,e as U,aM as Y,ao as A,b2 as w,aO as G,aE as J,aS as Q,aP as W,aQ as K,aR as q}from"./index-e5ac1c37.js";import"./react-redux-7b717b6c.js";import"./classnames-eea0979a.js";import{u as N}from"./react-i18next-91d47f13.js";import{r as S}from"./react-e483b31d.js";import{D as z}from"./DesignSelector-512fb715.js";import{P as X}from"./ProjectSelector-c72052c6.js";import"./react-query-557fee5a.js";import{y as V}from"./lodash-bd2b80f6.js";import"./i18next-076b76a4.js";import"./react-hot-toast-d3a0fddd.js";import"./dayjs-75976aa4.js";import{e as Z,b as O}from"./react-router-82cc6afb.js";import"./react-debounce-input-20b6d49d.js";function ge(c){var s,r,u,h;const[t]=N(),{purchaseOrder:e,handleChange:i,errors:n}=c,l=I();return v(M,{children:[v(x,{className:"col-span-12 xl:col-span-4 h-max",children:[a(_,{leftSide:t("purchase_order_date"),children:a(g,{type:"date",value:e.date,onValueChange:o=>i("date",o),errorMessage:n==null?void 0:n.errors.date})}),a(_,{leftSide:t("due_date"),children:a(g,{type:"date",value:e.due_date,onValueChange:o=>i("due_date",o),errorMessage:n==null?void 0:n.errors.due_date})}),a(_,{leftSide:t("partial"),children:a(g,{type:"number",changeOverride:!0,value:e.partial,onValueChange:o=>i("partial",parseFloat(o)||0),errorMessage:n==null?void 0:n.errors.partial})}),e&&e.partial>0&&a(_,{leftSide:t("partial_due_date"),children:a(g,{type:"date",value:P(e.partial_due_date.toString(),"YYYY-MM-DD"),onValueChange:o=>i("partial_due_date",o),errorMessage:n==null?void 0:n.errors.partial_due_date})}),e&&((s=l==null?void 0:l.custom_fields)==null?void 0:s.invoice1)&&a(b,{field:"invoice1",defaultValue:(e==null?void 0:e.custom_value1)||"",value:l.custom_fields.invoice1,onValueChange:o=>i("custom_value1",o.toString())}),e&&((r=l==null?void 0:l.custom_fields)==null?void 0:r.invoice2)&&a(b,{field:"invoice2",defaultValue:(e==null?void 0:e.custom_value2)||"",value:l.custom_fields.invoice2,onValueChange:o=>i("custom_value2",o.toString())})]}),v(x,{className:"col-span-12 xl:col-span-4 h-max",children:[a(_,{leftSide:t("po_number"),children:a(g,{value:e.number,onValueChange:o=>i("number",o),errorMessage:n==null?void 0:n.errors.number})}),a(_,{leftSide:t("discount"),children:v(E,{children:[a("div",{className:"w-full lg:w-1/2",children:a(g,{type:"number",value:e.discount,onValueChange:o=>i("discount",parseFloat(o)||0),errorMessage:n==null?void 0:n.errors.discount})}),a("div",{className:"w-full lg:w-1/2",children:v(F,{value:e.is_amount_discount.toString(),onValueChange:o=>i("is_amount_discount",JSON.parse(o)),errorMessage:n==null?void 0:n.errors.is_amount_discount,children:[a("option",{value:"false",children:t("percent")}),a("option",{value:"true",children:t("amount")})]})})]})}),e&&((u=l==null?void 0:l.custom_fields)==null?void 0:u.invoice3)&&a(b,{field:"invoice3",defaultValue:(e==null?void 0:e.custom_value3)||"",value:l.custom_fields.invoice3,onValueChange:o=>i("custom_value3",o.toString())}),e&&((h=l==null?void 0:l.custom_fields)==null?void 0:h.invoice4)&&a(b,{field:"invoice4",defaultValue:(e==null?void 0:e.custom_value4)||"",value:l.custom_fields.invoice4,onValueChange:o=>i("custom_value4",o.toString())})]})]})}function he(c){const[t]=N(),e=k(),i=j(),{id:n}=Z(),l=O(),{purchaseOrder:s,handleChange:r,errors:u,isDefaultTerms:h,isDefaultFooter:o,setIsDefaultFooter:m,setIsDefaultTerms:C}=c,p=[t("terms"),t("footer"),t("public_notes"),t("private_notes"),t("settings"),t("documents")],f=()=>{A(["purchase_orders"])};return a(x,{className:"col-span-12 xl:col-span-8 h-max px-6",children:v(T,{tabs:p,formatTabLabel:d=>{if(d===5)return a(H,{numberOfDocuments:s==null?void 0:s.documents.length})},withoutVerticalMargin:!0,children:[v("div",{children:[a(y,{value:s.terms||"",onChange:d=>r("terms",d)}),a(_,{className:"mt-4",leftSide:a(D,{checked:h,onValueChange:d=>C(d)}),noExternalPadding:!0,noVerticalPadding:!0,children:a("span",{className:"font-medium",children:t("save_as_default_terms")})})]}),v("div",{children:[a(y,{value:s.footer||"",onChange:d=>r("footer",d)}),a(_,{className:"mt-4",leftSide:a(D,{checked:o,onValueChange:d=>m(d)}),noExternalPadding:!0,noVerticalPadding:!0,children:a("span",{className:"font-medium",children:t("save_as_default_footer")})})]}),a("div",{className:"mb-4",children:a(y,{value:s.public_notes||"",onChange:d=>r("public_notes",d)})}),a("div",{className:"mb-4",children:a(y,{value:s.private_notes||"",onChange:d=>r("private_notes",d)})}),a("div",{className:"my-4",children:v("div",{className:"grid grid-cols-12 gap-4",children:[a("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:a(R,{inputLabel:t("User"),value:s.assigned_user_id,onChange:d=>r("assigned_user_id",d.id),errorMessage:u==null?void 0:u.errors.assigned_user_id})}),a("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:a(X,{inputLabel:t("project"),value:s.project_id,onChange:d=>r("project_id",d.id),errorMessage:u==null?void 0:u.errors.project_id})}),a("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:a($,{inputLabel:t("client"),value:s.client_id,onChange:d=>r("client_id",d.id),errorMessage:u==null?void 0:u.errors.client_id})}),a("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:a(g,{label:t("exchange_rate"),type:"number",value:s.exchange_rate||1,onValueChange:d=>r("exchange_rate",parseFloat(d)||1),errorMessage:u==null?void 0:u.errors.exchange_rate})}),a("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:a(z,{inputLabel:t("design"),value:s==null?void 0:s.design_id,onChange:d=>r("design_id",d.id),onClearButtonClick:()=>r("design_id",""),disableWithQueryParameter:!0,errorMessage:u==null?void 0:u.errors.design_id})})]})}),l.pathname.endsWith("/create")?v("div",{className:"text-sm mt-4",children:[t("save_to_upload_documents"),"."]}):v("div",{className:"my-4",children:[a(B,{widgetOnly:!0,endpoint:U("/api/v1/purchase_orders/:id/upload",{id:n}),onSuccess:f,disableUpload:!e("edit_purchase_order")&&!i(s)}),a(Y,{documents:s.documents||[],onDocumentDelete:f,disableEditableOptions:!i(s,!0)})]})]})})}function pe(c){var o;const{t}=N(),{resource:e,initiallyVisible:i}=c,n=w(),[l,s]=S.useState(),[r,u]=S.useState("");S.useEffect(()=>{r&&n.find(r).then(m=>s(m))},[r]),S.useEffect(()=>{var m;e&&u(e.vendor_id||((m=e.vendor)==null?void 0:m.id)||"")},[e==null?void 0:e.vendor_id,(o=e==null?void 0:e.vendor)==null?void 0:o.id]);const h=m=>{var p;return!!((p=c.resource)==null?void 0:p.invitations.find(f=>f.vendor_contact_id===m))};return v(M,{children:[a("div",{className:"flex items-center justify-between",children:a(G,{inputLabel:t("vendor"),onChange:m=>c.onChange(m.id),value:r,readonly:c.readonly,onClearButtonClick:c.onClearButtonClick,initiallyVisible:i,errorMessage:c.errorMessage})}),r&&l&&l.contacts.map((m,C)=>v("div",{children:[a(J,{id:m.id,value:m.id,label:m.first_name.length>=1?`${m.first_name} ${m.last_name}`:m.email||l.name,checked:h(m.id),onValueChange:(p,f)=>c.onContactCheckboxChange(p,f||!1)}),m.first_name&&a("span",{className:"text-sm",children:m.email})]},C))]})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function fe(c){return async t=>{const e=V.cloneDeep(t);e.line_items.push(Q()),c(e)}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Ce(c){return async(t,e)=>{const i=V.cloneDeep(t);i.line_items.splice(e,1),c(i)}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function be(c){return(t,e,i)=>{let n=[...t.invitations];const l=(n==null?void 0:n.find(s=>s.vendor_contact_id===e))||-1;if(l!==-1&&i===!1&&(n=n.filter(s=>s.vendor_contact_id!==e)),l===-1){const s={vendor_contact_id:"",client_contact_id:""};s.vendor_contact_id=e,n.push(s)}c("invitations",n)}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function ee(){const c=w(),t=W(),e=I();return async i=>{const n=await c.find(i);return t(n.currency_id||e.settings.currency_id)}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function L(c){const t=ee();return async e=>{const i=await t(e.vendor_id),n=e.uses_inclusive_taxes?new K(e,i).build():new q(e,i).build();return c(n),n.invoice}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function ye(c,t){const e=L(t);return async(i,n,l,s)=>{const r=V.cloneDeep(i);r.line_items[s][n]=l,c(await e(r))}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Se(c,t){const e=L(t);return async(i,n,l)=>{const s=V.cloneDeep(i);s.line_items[n]=l,c(await e(s))}}export{ge as D,he as F,pe as V,ye as a,be as b,fe as c,Ce as d,Se as u};
