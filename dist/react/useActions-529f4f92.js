import{a1 as c,a as i,a2 as o,O as s,H as d,af as t,ag as r}from"./index-ecbcc3c7.js";import{b as u}from"./transactions-20e704af.js";import{at as m,s as f,u as h,t as k}from"./react-icons-071f44cd.js";import{u as v}from"./react-i18next-91d47f13.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function D(){return n=>n.includes("\\n ")?n.replace("\\n",""):n.includes("\\n")?n.replace("\\n"," "):n}function E(){const[n]=v(),a=u(),{isEditPage:l}=c({entity:"transaction"});return[e=>e.payment_id&&i(o,{onClick:()=>a([e.id],"unlink"),icon:i(s,{element:m}),children:n("unlink")}),e=>!!(e.payment_id&&l)&&i(d,{withoutPadding:!0}),e=>t(e)===r.Active&&l&&i(o,{onClick:()=>a([e.id],"archive"),icon:i(s,{element:f}),children:n("archive")}),e=>(t(e)===r.Archived||t(e)===r.Deleted)&&l&&i(o,{onClick:()=>a([e.id],"restore"),icon:i(s,{element:h}),children:n("restore")}),e=>(t(e)===r.Active||t(e)===r.Archived)&&l&&i(o,{onClick:()=>a([e.id],"delete"),icon:i(s,{element:k}),children:n("delete")})]}export{E as a,D as u};
