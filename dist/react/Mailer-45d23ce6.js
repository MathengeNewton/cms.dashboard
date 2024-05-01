import{Q as S,r as E,e as y,ao as F,az as H,b2 as U,a as i,F as G,j as v,l as I,h as K,b1 as O,C as T,G as C,o as Q,aH as w,b3 as $,aT as k,aU as q,aK as z,b4 as B}from"./index-ecbcc3c7.js";import"./react-redux-7b717b6c.js";import"./classnames-eea0979a.js";import"./dayjs-75976aa4.js";import"./i18next-076b76a4.js";import{u as D}from"./react-query-557fee5a.js";import{r as o}from"./react-e483b31d.js";import"./lodash-bd2b80f6.js";import{u as R}from"./react-i18next-91d47f13.js";import{a as A}from"./react-router-82cc6afb.js";import{I as J}from"./InvoiceViewer-a729b03c.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function L(){return!0}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function W({setErrors:e}){const[m]=R(),l=A();return(a,c,u,h,t,d,_)=>{S.processing(),e(void 0),E("POST",y("/api/v1/emails"),{body:a,entity:c,entity_id:u,subject:h,template:t,cc_email:_}).then(()=>{F([`${c}s`]),S.success(m(`emailed_${c}`)||""),l(d)}).catch(g=>{var f;((f=g.response)==null?void 0:f.status)===422&&(e(g.response.data),S.dismiss())})}}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function X(e,m,l,a,c,u){const h=D(),[t,d]=o.useState();return o.useEffect(()=>{h.fetchQuery(["/api/v1/templates",c],()=>E("POST",y("/api/v1/templates"),{body:e,entity:m,entity_id:l,subject:a,template:c,cc_email:u}).then(_=>d(_.data)))},[e,m,l,a,c,u]),t}function Y(e){const m=H(),l=U(),[a,c]=o.useState(),[u,h]=o.useState("client_contact_id");return o.useEffect(()=>{e.resourceType==="purchase_order"&&e.resource.vendor_id.length>=1&&l.find(e.resource.vendor_id).then(t=>c(t)).then(()=>h("vendor_contact_id")),e.resourceType!=="purchase_order"&&e.resource.client_id.length>=1&&m.find(e.resource.client_id).then(t=>c(t)).then(()=>h("client_contact_id"))},[]),i(G,{children:a&&i("div",{children:a.contacts.filter(t=>e.resource.invitations.find(d=>d[u]===t.id)).map((t,d)=>v("p",{children:[t.first_name," ",t.last_name," ·",v("span",{className:"font-semibold",children:[" ",t.email]})]},d))})})}const ue=o.forwardRef((e,m)=>{var j;const[l]=R(),[a,c]=o.useState(),[u,h]=o.useState(e.defaultEmail),[t,d]=o.useState(""),[_,g]=o.useState(""),[f,p]=o.useState(""),b=I(),s=K(),P=r=>{d(""),g(""),p(""),h(r)},n=X(_,e.resourceType,((j=e.resource)==null?void 0:j.id)||"",t,u,f),M=O({resourceType:e.resourceType}),N=W({setErrors:c});return o.useImperativeHandle(m,()=>({sendEmail(){var r;N(_,e.resourceType,((r=e.resource)==null?void 0:r.id)||"",t,u,e.redirectUrl,f)}}),[_,t,u,f]),v("div",{className:"grid grid-cols-12 lg:gap-4 my-4",children:[v("div",{className:"col-span-12 lg:col-span-5 space-y-4",children:[v(T,{children:[i(C,{leftSide:l("to"),children:i(Y,{resource:e.resource,resourceType:e.resourceType})}),i(C,{leftSide:l("template"),children:v(Q,{defaultValue:u,onValueChange:r=>P(r),errorMessage:a==null?void 0:a.errors.template,children:[Object.entries(e.list).map(([r,V],x)=>i("option",{value:r,children:l(V)},x)),(s==null?void 0:s.settings.email_subject_custom1)&&i("option",{value:"email_template_custom1",children:s==null?void 0:s.settings.email_subject_custom1}),(s==null?void 0:s.settings.email_subject_custom2)&&i("option",{value:"email_template_custom2",children:s==null?void 0:s.settings.email_subject_custom2}),(s==null?void 0:s.settings.email_subject_custom3)&&i("option",{value:"email_template_custom3",children:s==null?void 0:s.settings.email_subject_custom3})]})})]}),v(T,{withContainer:!0,children:[i(w,{label:l("cc_email"),value:f||(n==null?void 0:n.cc_email),onValueChange:r=>p(r),errorMessage:a==null?void 0:a.errors.cc_email}),i(w,{label:l("subject"),value:t||(n==null?void 0:n.raw_subject),onValueChange:r=>d(r),disabled:L()&&$(),errorMessage:a==null?void 0:a.errors.subject}),(k()||q())&&i(z,{value:_||(n==null?void 0:n.raw_body),onChange:r=>g(String(r))})]}),n&&i(T,{className:"scale-y-100",title:n.subject,children:i("iframe",{srcDoc:B(n.body,n.wrapper),width:"100%",height:800})})]}),i("div",{className:"my-4 lg:my-0 col-span-12 lg:col-span-7 h-max",children:e.resource&&(b==null?void 0:b.show_pdf_preview)&&i(J,{method:"GET",link:M(e.resource)})})]})});export{ue as M};
