import{h as Y,j as i,F as w,C as y,a as s,G as u,o as p,c2 as k,aH as f,aI as C,a6 as L,A as E,E as T,T as O,aJ as P,aK as g,aL as q,e as B,aM as U,aN as G,aO as H,as as J,ao as W,a3 as K,p as Q}from"./index-ecbcc3c7.js";import"./react-redux-7b717b6c.js";import"./classnames-eea0979a.js";import{bn as F}from"./dayjs-75976aa4.js";import{u as M}from"./react-i18next-91d47f13.js";import{u as x,b as $}from"./jotai-c7720f6e.js";import{r as z}from"./react-e483b31d.js";import"./react-query-557fee5a.js";import"./lodash-bd2b80f6.js";import"./i18next-076b76a4.js";import"./react-hot-toast-d3a0fddd.js";import{P as R}from"./ProjectSelector-0c0e158e.js";import{D as X}from"./DesignSelector-1def70e7.js";import{e as Z,b as I}from"./react-router-82cc6afb.js";import"./react-debounce-input-20b6d49d.js";function fe(r){var n,v,c,m,b,_,o,V,S,N,D,j,A;const{t:e}=M(),{handleChange:d}=r,t=Y(),[a]=x(L);return i(w,{children:[i(y,{className:"col-span-12 lg:col-span-6 xl:col-span-4 h-max",children:[s(u,{leftSide:e("frequency"),children:s(p,{value:a==null?void 0:a.frequency_id,onValueChange:l=>d("frequency_id",l),errorMessage:(n=r.errors)==null?void 0:n.errors.frequency_id,children:Object.keys(k).map((l,h)=>s("option",{value:l,children:e(k[l])},h))})}),s(u,{leftSide:e("start_date"),children:s(f,{type:"date",onValueChange:l=>d("next_send_date",l),value:F(a==null?void 0:a.next_send_date).format("YYYY-MM-DD"),min:F().format("YYYY-MM-DD"),errorMessage:(v=r.errors)==null?void 0:v.errors.next_send_date})}),s(u,{leftSide:e("remaining_cycles"),children:i(p,{value:a==null?void 0:a.remaining_cycles,onValueChange:l=>d("remaining_cycles",parseInt(l)),errorMessage:(c=r.errors)==null?void 0:c.errors.remaining_cycles,children:[s("option",{value:"-1",children:e("endless")}),[...Array(37).keys()].map((l,h)=>s("option",{value:l,children:l},h))]})}),s(u,{leftSide:e("due_date"),children:i(p,{value:a==null?void 0:a.due_date_days,onValueChange:l=>d("due_date_days",l),errorMessage:(m=r.errors)==null?void 0:m.errors.due_date_days,children:[s("option",{value:"terms",children:e("use_payment_terms")}),[...Array(31).keys()].map((l,h)=>i("option",{value:l+1,children:[e("day")," ",l+1]},h))]})}),a&&((b=t==null?void 0:t.custom_fields)==null?void 0:b.invoice1)&&s(C,{field:"invoice1",defaultValue:(a==null?void 0:a.custom_value1)||"",value:t.custom_fields.invoice1,onValueChange:l=>d("custom_value1",String(l))}),a&&((_=t==null?void 0:t.custom_fields)==null?void 0:_.invoice2)&&s(C,{field:"invoice2",defaultValue:(a==null?void 0:a.custom_value2)||"",value:t.custom_fields.invoice2,onValueChange:l=>d("custom_value2",String(l))})]}),i(y,{className:"col-span-12 lg:col-span-6 xl:col-span-4 h-max",children:[s(u,{leftSide:e("invoice_number_short"),children:s(f,{id:"number",onValueChange:l=>d("number",l),value:(a==null?void 0:a.number)||"",errorMessage:(o=r.errors)==null?void 0:o.errors.number})}),s(u,{leftSide:e("po_number_short"),children:s(f,{id:"po_number",onValueChange:l=>d("po_number",l),value:(a==null?void 0:a.po_number)||"",errorMessage:(V=r.errors)==null?void 0:V.errors.po_number})}),s(u,{leftSide:e("discount"),children:i("div",{className:"flex space-x-2",children:[s("div",{className:"w-full lg:w-1/2",children:s(f,{type:"number",onValueChange:l=>d("discount",parseFloat(l)),value:(a==null?void 0:a.discount)||"",errorMessage:(S=r.errors)==null?void 0:S.errors.discount})}),s("div",{className:"w-full lg:w-1/2",children:i(p,{onValueChange:l=>d("is_amount_discount",JSON.parse(l)),value:a==null?void 0:a.is_amount_discount.toString(),errorMessage:(N=r.errors)==null?void 0:N.errors.is_amount_discount,children:[s("option",{value:"false",children:e("percent")}),s("option",{value:"true",children:e("amount")})]})})]})}),s(u,{leftSide:e("auto_bill"),children:i(p,{value:(a==null?void 0:a.auto_bill)||!1,onValueChange:l=>d("auto_bill",l),errorMessage:(D=r.errors)==null?void 0:D.errors.auto_bill,children:[s("option",{value:"always",children:e("enabled")}),s("option",{value:"optout",children:e("optout")}),s("option",{value:"optin",children:e("optin")}),s("option",{value:"off",children:e("disabled")})]})}),a&&((j=t==null?void 0:t.custom_fields)==null?void 0:j.invoice3)&&s(C,{field:"invoice3",defaultValue:(a==null?void 0:a.custom_value3)||"",value:t.custom_fields.invoice3,onValueChange:l=>d("custom_value3",String(l))}),a&&((A=t==null?void 0:t.custom_fields)==null?void 0:A.invoice4)&&s(C,{field:"invoice4",defaultValue:(a==null?void 0:a.custom_value4)||"",value:t.custom_fields.invoice4,onValueChange:l=>d("custom_value4",String(l))})]})]})}function ve(r){const[e]=x(L),{id:d}=Z(),{t}=M(),{handleChange:a,errors:n}=r,v=I(),c=E(),m=T(),b=[t("public_notes"),t("private_notes"),t("terms"),t("footer"),t("documents"),t("settings")],_=()=>{W(["recurring_invoices"])};return s(y,{className:"col-span-12 xl:col-span-8 h-max px-6",children:i(O,{tabs:b,formatTabLabel:o=>{if(o===4)return s(P,{numberOfDocuments:e==null?void 0:e.documents.length})},children:[s("div",{children:s(g,{value:e==null?void 0:e.public_notes,onChange:o=>a("public_notes",o)})}),s("div",{children:s(g,{value:e==null?void 0:e.private_notes,onChange:o=>a("private_notes",o)})}),s("div",{children:s(g,{value:e==null?void 0:e.terms,onChange:o=>a("terms",o)})}),s("div",{children:s(g,{value:e==null?void 0:e.footer,onChange:o=>a("footer",o)})}),v.pathname.endsWith("/create")?i("div",{className:"text-sm",children:[t("save_to_upload_documents"),"."]}):i("div",{children:[s(q,{widgetOnly:!0,endpoint:B("/api/v1/recurring_invoices/:id/upload",{id:d}),onSuccess:_,disableUpload:!c("edit_recurring_invoice")&&!m(e)}),s(U,{documents:(e==null?void 0:e.documents)||[],onDocumentDelete:_,disableEditableOptions:!m(e,!0)})]}),s("div",{children:i("div",{className:"grid grid-cols-12 gap-4",children:[i("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:[s("div",{className:"space-y-2",children:s(R,{inputLabel:t("project"),value:e==null?void 0:e.project_id,onChange:o=>a("project_id",o.id),errorMessage:n==null?void 0:n.errors.project_id})}),s(f,{label:t("exchange_rate"),type:"number",value:(e==null?void 0:e.exchange_rate)||1,onValueChange:o=>a("exchange_rate",parseFloat(o)),errorMessage:n==null?void 0:n.errors.exchange_rate}),s("div",{className:"space-y-2",children:s(X,{inputLabel:t("design"),value:e==null?void 0:e.design_id,onChange:o=>a("design_id",o.id),onClearButtonClick:()=>a("design_id",""),disableWithQueryParameter:!0,errorMessage:n==null?void 0:n.errors.design_id})})]}),i("div",{className:"col-span-12 lg:col-span-6 space-y-6",children:[s("div",{className:"space-y-2",children:s(G,{inputLabel:t("user"),value:e==null?void 0:e.assigned_user_id,onChange:o=>a("assigned_user_id",o.id),errorMessage:n==null?void 0:n.errors.assigned_user_id,readonly:!c("edit_recurring_invoice")})}),s("div",{className:"space-y-2",children:s(H,{inputLabel:t("vendor"),value:e==null?void 0:e.vendor_id,onChange:o=>a("vendor_id",o.id),onClearButtonClick:()=>a("vendor_id",""),errorMessage:n==null?void 0:n.errors.vendor_id})}),s("div",{className:"pt-9",children:s(J,{label:t("inclusive_taxes"),checked:(e==null?void 0:e.uses_inclusive_taxes)||!1,onChange:o=>a("uses_inclusive_taxes",o)})})]})]})})]})})}const ee=$(!1);function be({onClick:r}){const[e]=M(),[d,t]=x(ee);return z.useEffect(()=>()=>{t(!1)},[]),s(K,{title:e("are_you_sure"),visible:d,onClose:()=>t(!1),children:s(Q,{onClick:()=>r(),children:e("continue")})})}export{be as C,fe as I,ve as a,ee as c};