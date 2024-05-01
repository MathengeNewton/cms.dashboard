import{cB as m,b as c,cC as u,g as l}from"./index-ecbcc3c7.js";import{r as f}from"./react-e483b31d.js";import{b as s,c as i}from"./jotai-c7720f6e.js";import{u as p}from"./react-i18next-91d47f13.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const T=s(void 0),S=s(void 0),b=s(!1);s(!1);/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function w(t){const a=i(T),o=i(b),{data:e}=m({id:t,enabled:!!t});f.useEffect(()=>{e&&(a(e),o(!0))},[e])}function A(){const{dateFormat:t}=c(),{t:a}=p();return o=>{const e=[];return u(o).map(([r,n])=>{e.push([l(r,t),new Date(r*1e3).toLocaleTimeString(),n===0?a("now"):new Date(n*1e3).toLocaleTimeString()])}),e}}export{w as a,S as b,T as c,b as i,A as u};
