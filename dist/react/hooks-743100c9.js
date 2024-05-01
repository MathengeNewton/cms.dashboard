import{a as n,B as O,bu as R,A as L,r as T,e as Y,at as D,Q as S,ao as W,ai as I,c as B,b as V,u as $,l as j,ak as z,D as v,d as N,g as p,U as M,am as G,bv as X,a1 as J,bI as Z,bJ as ee,bK as te,a2 as m,O as f,H,af as y,ag as C}from"./index-ecbcc3c7.js";import{a as q,u as w}from"./react-query-557fee5a.js";import{Y as ne,Z as ae,K as k,s as se,u as oe,t as ie}from"./react-icons-071f44cd.js";import{u as A}from"./react-i18next-91d47f13.js";import{d as K,c as P}from"./jotai-c7720f6e.js";import{a as re}from"./react-router-82cc6afb.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */var l=(e=>(e.FREQUENCY_DAILY="1",e.FREQUENCY_WEEKLY="2",e.FREQUENCY_TWO_WEEKS="3",e.FREQUENCY_FOUR_WEEKS="4",e.FREQUENCY_MONTHLY="5",e.FREQUENCY_TWO_MONTHS="6",e.FREQUENCY_THREE_MONTHS="7",e.FREQUENCY_FOUR_MONTHS="8",e.FREQUENCY_SIX_MONTHS="9",e.FREQUENCY_ANNUALLY="10",e.FREQUENCY_TWO_YEARS="11",e.FREQUENCY_THREE_YEARS="12",e))(l||{});/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const de={[l.FREQUENCY_ANNUALLY]:"freq_annually",[l.FREQUENCY_DAILY]:"freq_daily",[l.FREQUENCY_FOUR_MONTHS]:"freq_four_months",[l.FREQUENCY_FOUR_WEEKS]:"freq_four_weeks",[l.FREQUENCY_MONTHLY]:"freq_monthly",[l.FREQUENCY_SIX_MONTHS]:"freq_six_months",[l.FREQUENCY_THREE_MONTHS]:"freq_three_months",[l.FREQUENCY_THREE_YEARS]:"freq_three_years",[l.FREQUENCY_TWO_MONTHS]:"freq_two_months",[l.FREQUENCY_TWO_WEEKS]:"freq_two_weeks",[l.FREQUENCY_TWO_YEARS]:"freq_two_years",[l.FREQUENCY_WEEKLY]:"freq_weekly"};/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */var _=(e=>(e.Draft="1",e.Active="2",e.Paused="3",e.Completed="4",e.Pending="-1",e))(_||{});/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const le={[_.Active]:"active",[_.Draft]:"draft",[_.Paused]:"paused",[_.Pending]:"pending",[_.Completed]:"completed"};function ce(e){const[o]=A(),{recurringExpense:i}=e,{is_deleted:r,archived_at:d}=i;return r?n(O,{variant:"red",children:o("deleted")}):d?n(O,{variant:"orange",children:o("archived")}):n(R,{for:le,code:i.status_id})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function xe(e){const o=L();return q(["/api/v1/recurring_expenses","create"],()=>T("GET",Y("/api/v1/recurring_expenses/create")).then(i=>i.data.data),{enabled:o("create_recurring_expense")?e.enabled??!0:!1,staleTime:1/0})}function ve(e){return q(["/api/v1/recurring_expenses",e.id],()=>T("GET",Y("/api/v1/recurring_expenses/:id",{id:e.id})).then(o=>o.data.data),{enabled:e.enabled??!0,staleTime:1/0})}const _e={start:"started_recurring_expense",stop:"stopped_recurring_expense"},ue=()=>{const e=w(),o=K(D);return(i,r)=>{S.processing(),T("POST",Y("/api/v1/recurring_expenses/bulk"),{action:r,ids:i}).then(()=>{const d=_e[r]||`${r}d_recurring_expense`;S.success(d),o&&e.invalidateQueries([o]),W(["recurring_expenses"])})}},me=["status","number","vendor","client","date","frequency","next_send_date","remaining_cycles","amount","public_notes","entity_state"];function fe(){const[e,o,i,r]=I({entity:"expense"});return["status","number","vendor","client","date","amount","public_notes","entity_state","archived_at","created_at","created_by",e,o,i,r,"documents","exchange_rate","is_deleted","net_amount","payment_date","payment_type","private_notes","should_be_invoiced","tax_name1","tax_name2","tax_name3","tax_rate1","tax_rate2","tax_rate3","transaction_reference","updated_at","frequency","remaining_cycles","next_send_date"]}function Ne(){var F;const[e]=A(),o=B(),{dateFormat:i}=V(),r=$(),d=j(),c=z(),b=Z();fe();const[u,g,x,Q]=I({entity:"expense"}),s=[{column:"status",id:"status_id",label:e("status"),format:(t,a)=>n(v,{to:N("/recurring_expenses/:id/edit",{id:a.id}),renderSpan:o("recurring_expense",a),children:n(ce,{recurringExpense:a})})},{column:"number",id:"number",label:e("number"),format:(t,a)=>n(v,{to:N("/recurring_expenses/:id/edit",{id:a.id}),renderSpan:o("recurring_expense",a),children:t})},{column:"vendor",id:"vendor_id",label:e("vendor"),format:(t,a)=>a.vendor&&n(v,{to:N("/vendors/:id",{id:t.toString()}),renderSpan:o("vendor",a.vendor),children:a.vendor.name})},{column:"client",id:"client_id",label:e("client"),format:(t,a)=>a.client&&n(v,{to:N("/clients/:id",{id:t.toString()}),renderSpan:o("client",a.client),children:a.client.display_name})},{column:"date",id:"date",label:e("date"),format:t=>p(t,i)},{column:"amount",id:"amount",label:e("amount"),format:(t,a)=>{var h,E;return r(b(a),(h=a.client)==null?void 0:h.country_id,a.currency_id||((E=a.client)==null?void 0:E.settings.currency_id))}},{column:"public_notes",id:"public_notes",label:e("public_notes"),format:t=>n(M,{size:"regular",truncate:!0,containsUnsafeHTMLTags:!0,message:t,children:n("span",{dangerouslySetInnerHTML:{__html:t}})})},{column:"entity_state",id:"id",label:e("entity_state"),format:(t,a)=>n(G,{entity:a})},{column:"archived_at",id:"archived_at",label:e("archived_at"),format:t=>p(t,i)},{column:"created_at",id:"created_at",label:e("created_at"),format:t=>p(t,i)},{column:u,id:"custom_value1",label:u,format:t=>c("expense1",t==null?void 0:t.toString())},{column:g,id:"custom_value2",label:g,format:t=>c("expense2",t==null?void 0:t.toString())},{column:x,id:"custom_value3",label:x,format:t=>c("expense3",t==null?void 0:t.toString())},{column:Q,id:"custom_value4",label:Q,format:t=>c("expense4",t==null?void 0:t.toString())},{column:"documents",id:"documents",label:e("documents"),format:(t,a)=>a.documents.length},{column:"exchange_rate",id:"exchange_rate",label:e("exchange_rate")},{column:"is_deleted",id:"is_deleted",label:e("is_deleted"),format:(t,a)=>a.is_deleted?e("yes"):e("no")},{column:"net_amount",id:"amount",label:e("net_amount"),format:(t,a)=>{var h,E;return r(t,(h=a.client)==null?void 0:h.country_id,a.currency_id||((E=a.client)==null?void 0:E.settings.currency_id))}},{column:"payment_date",id:"payment_date",label:e("payment_date"),format:t=>p(t,i)},{column:"payment_type",id:"payment_type_id",label:e("payment_type"),format:t=>n(R,{for:X,code:t,headless:!0})},{column:"private_notes",id:"private_notes",label:e("private_notes"),format:t=>n(M,{size:"regular",truncate:!0,containsUnsafeHTMLTags:!0,message:t,children:n("span",{dangerouslySetInnerHTML:{__html:t}})})},{column:"should_be_invoiced",id:"should_be_invoiced",label:e("should_be_invoiced"),format:t=>e(t?"yes":"no")},{column:"tax_name1",id:"tax_name1",label:e("tax_name1")},{column:"tax_name2",id:"tax_name2",label:e("tax_name2")},{column:"tax_name3",id:"tax_name3",label:e("tax_name3")},{column:"tax_rate1",id:"tax_rate1",label:e("tax_rate1")},{column:"tax_rate2",id:"tax_rate2",label:e("tax_rate2")},{column:"tax_rate3",id:"tax_rate3",label:e("tax_rate3")},{column:"transaction_reference",id:"transaction_reference",label:e("transaction_reference")},{column:"updated_at",id:"updated_at",label:e("updated_at"),format:t=>p(t,i)},{column:"frequency",id:"frequency_id",label:e("frequency"),format:t=>n(R,{for:de,code:t,headless:!0})},{column:"next_send_date",id:"next_send_date",label:e("next_send_date"),format:t=>p(t,i)},{column:"remaining_cycles",id:"remaining_cycles",label:e("remaining_cycles"),format:t=>t.toString()==="-1"?n("span",{children:e("endless")}):n("span",{children:t})}],U=((F=d==null?void 0:d.react_table_columns)==null?void 0:F.recurringExpense)||me;return s.filter(t=>U.includes(t.column)).sort((t,a)=>U.indexOf(t.column)-U.indexOf(a.column))}function pe(){const e=w(),o=K(D);return(i,r)=>{S.processing(),T("PUT",Y(r==="start"?"/api/v1/recurring_expenses/:id?start=true":"/api/v1/recurring_expenses/:id?stop=true",{id:i.id}),i).then(()=>{W(["recurring_expenses"]),o&&e.invalidateQueries([o]),S.success(r==="start"?"start":"stop")})}}function Se(){const[e]=A(),o=re(),i=L(),r=P(ee),d=P(te),c=pe(),b=ue(),{isEditPage:u}=J({entity:"recurring_expense",editPageTabs:["documents"]}),g=s=>{d({...s,id:"",documents:[],number:""}),o("/recurring_expenses/create?action=clone")},x=s=>{r({...s,id:"",documents:[],number:""}),o("/expenses/create?action=clone")};return[s=>(s.status_id===_.Draft||s.status_id===_.Paused)&&n(m,{onClick:()=>c(s,"start"),icon:n(f,{element:ne}),children:e("start")}),s=>s.status_id===_.Active&&n(m,{onClick:()=>c(s,"stop"),icon:n(f,{element:ae}),children:e("stop")}),()=>n(H,{withoutPadding:!0}),s=>i("create_recurring_expense")&&n(m,{onClick:()=>g(s),icon:n(f,{element:k}),children:e("clone")}),s=>i("create_expense")&&n(m,{onClick:()=>x(s),icon:n(f,{element:k}),children:e("clone_to_expense")}),()=>u&&n(H,{withoutPadding:!0}),s=>u&&y(s)===C.Active&&n(m,{onClick:()=>b([s.id],"archive"),icon:n(f,{element:se}),children:e("archive")}),s=>u&&(y(s)===C.Archived||y(s)===C.Deleted)&&n(m,{onClick:()=>b([s.id],"restore"),icon:n(f,{element:oe}),children:e("restore")}),s=>u&&(y(s)===C.Active||y(s)===C.Archived)&&n(m,{onClick:()=>b([s.id],"delete"),icon:n(f,{element:ie}),children:e("delete")})]}function Te(e){const{setRecurringExpense:o,setErrors:i}=e;return(r,d)=>{i(void 0),o(c=>c&&{...c,[r]:d})}}export{_ as R,Se as a,ve as b,ue as c,fe as d,me as e,xe as f,l as g,Te as h,ce as i,de as j,Ne as u};