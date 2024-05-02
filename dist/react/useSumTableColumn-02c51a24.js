import{c as e}from"./collect.js-ebd014c9.js";import{u as f}from"./index-e5ac1c37.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function p(i){const s=f(),{currencyPath:y,countryPath:l}=i||{};return(o,t)=>{if(o&&t){const u=o.reduce((c,a)=>c=c+a,0),n=e(t).pluck(l||"client.country_id").unique().toArray(),r=e(t).pluck(y||"client.settings.currency_id").unique().toArray();return n.length>1||r.length>1?u:s(u,typeof n[0]=="string"?n[0]:void 0,typeof r[0]=="string"?r[0]:void 0)}return"-/-"}}export{p as u};
