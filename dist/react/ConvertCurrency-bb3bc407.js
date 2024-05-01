import{ch as d,j as i,F as g,a as u,G as l,s as x,aH as o}from"./index-ecbcc3c7.js";import"./classnames-eea0979a.js";import"./react-e483b31d.js";import"./react-redux-7b717b6c.js";import{u as m}from"./react-i18next-91d47f13.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function f(n,t,e){if(n==null||t==null)return 1;const a=e==null?void 0:e.currencies.find(c=>c.id===n),r=e==null?void 0:e.currencies.find(c=>c.id===t),h=e==null?void 0:e.currencies.find(c=>c.id==="1");return a==h?r.exchange_rate:r==h?1/((a==null?void 0:a.exchange_rate)??1):r.exchange_rate*(1/a.exchange_rate)}function b(n){const{data:t}=d(),[e]=m(),a=r=>n.onChange(f(n.currencyId,r,t),r);return i(g,{children:[u(l,{leftSide:e("currency"),children:u(x,{value:n.exchangeCurrencyId,onChange:a,dismissable:!0})}),u(l,{leftSide:e("exchange_rate"),children:u(o,{onValueChange:r=>n.onExchangeRateChange(parseFloat(r)),value:n.exchangeRate,type:"number"})}),u(l,{leftSide:e("converted_amount"),children:u(o,{value:n.amount*parseFloat(n.exchangeRate),type:"number"})})]})}export{b as C};
