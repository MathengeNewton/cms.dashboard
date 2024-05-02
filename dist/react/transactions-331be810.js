import{a as n,B as i,F as m,r as u,e as l,at as f,Q as v,ao as p}from"./index-e5ac1c37.js";import{u as _}from"./react-i18next-91d47f13.js";import{a as h,u as b}from"./react-query-557fee5a.js";import{d as k}from"./jotai-4279821d.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */var o=(e=>(e.Deposit="deposit",e.Withdrawal="withdrawal",e))(o||{}),y=(e=>(e.Credit="CREDIT",e.Debit="DEBIT",e))(y||{}),a=(e=>(e.Unmatched="1",e.Matched="2",e.Converted="3",e))(a||{});/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const T={[o.Deposit]:"deposit",[o.Withdrawal]:"withdrawal"},c={[a.Unmatched]:"unmatched",[a.Matched]:"matched",[a.Converted]:"converted"};function B(e){const[t]=_(),{is_deleted:d,archived_at:r,status_id:s}=e.transaction;return d?n(i,{variant:"red",children:t("deleted")}):r?n(i,{variant:"orange",children:t("archived")}):a.Unmatched===s?n(i,{variant:"generic",children:t(c[1])}):a.Matched===s?n(i,{variant:"dark-blue",children:t(c[2])}):a.Converted===s?n(i,{variant:"green",children:t(c[3])}):n(m,{})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function D(e){return h(["/api/v1/bank_transactions",e.id],()=>u("GET",l("/api/v1/bank_transactions/:id",{id:e.id})).then(t=>t.data.data),{enabled:e.enabled??!0,staleTime:1/0})}function I(){return h(["/api/v1/bank_transactions","create"],()=>u("GET",l("/api/v1/bank_transactions/create")).then(e=>e.data.data),{staleTime:1/0})}const g={convert_matched:"converted_transactions",unlink:"unlinked_payment"},M=()=>{const e=b(),t=k(f);return(d,r)=>{v.processing(),u("POST",l("/api/v1/bank_transactions/bulk"),{action:r,ids:d}).then(()=>{const s=g[r]||`${r}d_invoice`;v.success(s),p(["bank_transactions"]),t&&e.invalidateQueries([t])})}};export{y as A,B as E,a as T,o as a,M as b,I as c,T as t,D as u};
