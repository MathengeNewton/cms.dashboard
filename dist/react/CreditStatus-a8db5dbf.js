import{a as i,B as n,F as v}from"./index-e5ac1c37.js";import{u as f}from"./react-i18next-91d47f13.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */var t=(e=>(e.Viewed="-1",e.Draft="1",e.Sent="2",e.Partial="3",e.Applied="4",e))(t||{});function w(e){const[r]=f(),{status_id:a,is_deleted:d,archived_at:l,invitations:s}=e.entity,c=()=>s.some(u=>u.viewed_date),o=!(a===t.Applied),p=c();return d?i(n,{variant:"red",children:r("deleted")}):l?i(n,{variant:"orange",children:r("archived")}):p&&o?i(n,{variant:"light-blue",children:r("viewed")}):a===t.Draft?i(n,{variant:"generic",children:r("draft")}):a===t.Sent?i(n,{variant:"light-blue",children:r("sent")}):a===t.Partial?i(n,{variant:"dark-blue",children:r("partial")}):a===t.Applied?i(n,{variant:"green",children:r("applied")}):i(v,{})}export{w as C,t as a};
