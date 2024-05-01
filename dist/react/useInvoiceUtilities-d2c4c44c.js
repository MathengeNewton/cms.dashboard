import{h as L,j as _,F as D,C as V,a as s,G as g,aH as p,aI as S,o as P,A as F,E as k,a9 as w,T as j,aJ as T,aK as N,as as x,aL as A,e as E,aM as O,aN as U,aO as B,z as R,ao as z,aP as G,ah as H,aC as J,aQ as Q,aR as W,aS as K}from"./index-ecbcc3c7.js";import"./react-redux-7b717b6c.js";import"./classnames-eea0979a.js";import{u as M}from"./react-i18next-91d47f13.js";import"./react-e483b31d.js";import"./react-query-557fee5a.js";import"./lodash-bd2b80f6.js";import"./i18next-076b76a4.js";import"./react-hot-toast-d3a0fddd.js";import"./dayjs-75976aa4.js";import{P as $}from"./ProjectSelector-0c0e158e.js";import{D as q}from"./DesignSelector-1def70e7.js";import{b as X,e as Y}from"./react-router-82cc6afb.js";import{u as y}from"./jotai-c7720f6e.js";function _e(h){var C,f,t,u,o,b,v,I,r,i,l,m;const{t:n}=M(),{invoice:a,handleChange:c}=h,d=L();return _(D,{children:[_(V,{className:"col-span-12 lg:col-span-6 xl:col-span-4 h-max",children:[s(g,{leftSide:n("invoice_date"),children:s(p,{type:"date",onValueChange:e=>c("date",e),value:(a==null?void 0:a.date)||"",errorMessage:(C=h.errors)==null?void 0:C.errors.date})}),s(g,{leftSide:n("due_date"),children:s(p,{type:"date",onValueChange:e=>c("due_date",e),value:(a==null?void 0:a.due_date)||"",errorMessage:(f=h.errors)==null?void 0:f.errors.due_date})}),s(g,{leftSide:n("partial"),children:s(p,{id:"partial",type:"number",changeOverride:!0,onValueChange:e=>c("partial",parseFloat(e)||0),value:(a==null?void 0:a.partial)||"",errorMessage:(t=h.errors)==null?void 0:t.errors.partial})}),a&&a.partial>0&&s(g,{leftSide:n("partial_due_date"),children:s(p,{type:"date",onValueChange:e=>c("partial_due_date",e),value:(a==null?void 0:a.partial_due_date)||"",errorMessage:(u=h.errors)==null?void 0:u.errors.partial_due_date})}),a&&((o=d==null?void 0:d.custom_fields)==null?void 0:o.invoice1)&&s(S,{field:"invoice1",defaultValue:(a==null?void 0:a.custom_value1)||"",value:d.custom_fields.invoice1,onValueChange:e=>c("custom_value1",e.toString())}),a&&((b=d==null?void 0:d.custom_fields)==null?void 0:b.invoice2)&&s(S,{field:"invoice2",defaultValue:(a==null?void 0:a.custom_value2)||"",value:d.custom_fields.invoice2,onValueChange:e=>c("custom_value2",e.toString())})]}),_(V,{className:"col-span-12 lg:col-span-6 xl:col-span-4 h-max",children:[s(g,{leftSide:n("invoice_number_short"),children:s(p,{id:"number",onValueChange:e=>c("number",e),value:(a==null?void 0:a.number)||"",errorMessage:(v=h.errors)==null?void 0:v.errors.number})}),s(g,{leftSide:n("po_number_short"),children:s(p,{id:"po_number",onValueChange:e=>c("po_number",e),value:(a==null?void 0:a.po_number)||"",errorMessage:(I=h.errors)==null?void 0:I.errors.po_number})}),s(g,{leftSide:n("discount"),children:_("div",{className:"flex space-x-2",children:[s("div",{className:"w-full lg:w-1/2",children:s(p,{type:"number",onValueChange:e=>c("discount",parseFloat(e)||0),value:(a==null?void 0:a.discount)||"",errorMessage:(r=h.errors)==null?void 0:r.errors.discount})}),s("div",{className:"w-full lg:w-1/2",children:_(P,{onValueChange:e=>c("is_amount_discount",JSON.parse(e)),value:a==null?void 0:a.is_amount_discount.toString(),errorMessage:(i=h.errors)==null?void 0:i.errors.is_amount_discount,children:[s("option",{value:"false",children:n("percent")}),s("option",{value:"true",children:n("amount")})]})})]})}),a&&((l=d==null?void 0:d.custom_fields)==null?void 0:l.invoice3)&&s(S,{field:"invoice3",defaultValue:(a==null?void 0:a.custom_value3)||"",value:d.custom_fields.invoice3,onValueChange:e=>c("custom_value3",e.toString())}),a&&((m=d==null?void 0:d.custom_fields)==null?void 0:m.invoice4)&&s(S,{field:"invoice4",defaultValue:(a==null?void 0:a.custom_value4)||"",value:d.custom_fields.invoice4,onValueChange:e=>c("custom_value4",e.toString())})]})]})}function he(h){const{t:n}=M(),a=F(),c=k(),{isAdmin:d,isOwner:C}=w(),f=X(),{invoice:t,handleChange:u,errors:o,isDefaultTerms:b,isDefaultFooter:v,setIsDefaultFooter:I,setIsDefaultTerms:r}=h,{id:i}=Y(),l=[n("public_notes"),n("private_notes"),n("terms"),n("footer"),n("documents"),n("settings"),...d||C?[n("custom_fields")]:[]],m=()=>{z(["invoices"])};return s(V,{className:"col-span-12 xl:col-span-8 h-max px-6",children:_(j,{tabs:l,formatTabLabel:e=>{if(e===4)return s(T,{numberOfDocuments:t==null?void 0:t.documents.length})},withoutVerticalMargin:!0,children:[s("div",{className:"mb-4",children:s(N,{value:(t==null?void 0:t.public_notes)||"",onChange:e=>u("public_notes",e)})}),s("div",{className:"mb-4",children:s(N,{value:(t==null?void 0:t.private_notes)||"",onChange:e=>u("private_notes",e)})}),_("div",{children:[s(N,{value:(t==null?void 0:t.terms)||"",onChange:e=>u("terms",e)}),s(g,{className:"mt-4",leftSide:s(x,{checked:b,onValueChange:e=>r(e)}),noExternalPadding:!0,noVerticalPadding:!0,children:s("span",{className:"font-medium",children:n("save_as_default_terms")})})]}),_("div",{children:[s(N,{value:(t==null?void 0:t.footer)||"",onChange:e=>u("footer",e)}),s(g,{className:"mt-4",leftSide:s(x,{checked:v,onValueChange:e=>I(e)}),noExternalPadding:!0,noVerticalPadding:!0,children:s("span",{className:"font-medium",children:n("save_as_default_footer")})})]}),f.pathname.endsWith("/create")?_("div",{className:"text-sm mt-4",children:[n("save_to_upload_documents"),"."]}):_("div",{className:"my-4",children:[s(A,{widgetOnly:!0,endpoint:E("/api/v1/invoices/:id/upload",{id:i}),onSuccess:m,disableUpload:!a("edit_invoice")&&!c(t)}),s(O,{documents:(t==null?void 0:t.documents)||[],onDocumentDelete:m,disableEditableOptions:!c(t,!0)})]}),s("div",{className:"my-4",children:_("div",{className:"grid grid-cols-12 gap-4",children:[_("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:[s("div",{className:"space-y-2",children:s($,{inputLabel:n("project"),value:t==null?void 0:t.project_id,onChange:e=>u("project_id",e.id),errorMessage:o==null?void 0:o.errors.project_id,onClearButtonClick:()=>u("project_id","")})}),s(p,{label:n("exchange_rate"),type:"number",value:(t==null?void 0:t.exchange_rate)||1,onValueChange:e=>u("exchange_rate",parseFloat(e)||1),errorMessage:o==null?void 0:o.errors.exchange_rate}),s(x,{label:n("auto_bill_enabled"),checked:(t==null?void 0:t.auto_bill_enabled)||!1,onChange:e=>u("auto_bill_enabled",e)}),s("div",{className:"space-y-2",children:s(q,{inputLabel:n("design"),value:t==null?void 0:t.design_id,onChange:e=>u("design_id",e.id),onClearButtonClick:()=>u("design_id",""),disableWithQueryParameter:!0,errorMessage:o==null?void 0:o.errors.design_id})})]}),_("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:[s("div",{className:"space-y-2",children:s(U,{inputLabel:n("user"),value:t==null?void 0:t.assigned_user_id,onChange:e=>u("assigned_user_id",e.id),errorMessage:o==null?void 0:o.errors.assigned_user_id,readonly:!a("edit_invoice")})}),s("div",{className:"space-y-2",children:s(B,{inputLabel:n("vendor"),value:t==null?void 0:t.vendor_id,onChange:e=>u("vendor_id",e.id),onClearButtonClick:()=>u("vendor_id",""),errorMessage:o==null?void 0:o.errors.vendor_id})}),s(x,{label:n("inclusive_taxes"),checked:(t==null?void 0:t.uses_inclusive_taxes)||!1,onChange:e=>u("uses_inclusive_taxes",e)})]})]})}),_("div",{className:"my-4",children:[_("span",{className:"text-sm",children:[n("custom_fields"),"  "]}),s(R,{to:"/settings/custom_fields/invoices",className:"capitalize",children:n("click_here")})]})]})})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function ge(h){const[n,a]=y(H),[,c]=y(J),d=L(),C=G(),f=(r,i)=>{a(l=>l&&{...l,[r]:i})};return{handleChange:f,handleInvitationChange:(r,i)=>{let l=[...n.invitations];const m=(l==null?void 0:l.find(e=>e.client_contact_id===r))||-1;if(m!==-1&&i===!1&&(l=l.filter(e=>e.client_contact_id!==r)),m===-1){const e={client_contact_id:r};l.push(e)}f("invitations",l)},calculateInvoiceSum:r=>{var l;const i=C(((l=h.client)==null?void 0:l.settings.currency_id)||(d==null?void 0:d.settings.currency_id));if(i&&r){const m=r.uses_inclusive_taxes?new Q(r,i).build():new W(r,i).build();c(m)}},handleLineItemChange:(r,i)=>{const l=(n==null?void 0:n.line_items)||[];l[r]=i,a(m=>m&&{...m,line_items:l})},handleLineItemPropertyChange:(r,i,l)=>{const m=(n==null?void 0:n.line_items)||[];m[l][r]!==i&&(m[l][r]=i,a(e=>e&&{...e,line_items:m}))},handleCreateLineItem:r=>{a(i=>i&&{...i,line_items:[...i.line_items,{...K(),type_id:r}]})},handleDeleteLineItem:r=>{const i=(n==null?void 0:n.line_items)||[];i.splice(r,1),a(l=>l&&{...l,line_items:i})}}}export{_e as I,he as a,ge as u};
