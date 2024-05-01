import{r as n,e as t,d as r,aT as u,aU as d}from"./index-ecbcc3c7.js";import{a as s}from"./react-query-557fee5a.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function l(){return["Plain","Clean","Bold","Modern"]}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function p(){const e=l();return s(["/api/v1/designs"],()=>n("GET",t("/api/v1/designs?status=active&sort=name|asc")).then(a=>a.data.data.filter(i=>e.includes(i.name)||u()||d())),{staleTime:1/0})}function f(e){return s(["/api/v1/designs",e.id],()=>n("GET",t("/api/v1/designs/:id?include=client",{id:e.id})).then(a=>a.data.data),{staleTime:1/0,...e})}function g(e){return s(r("/api/v1/designs/create"),()=>n("GET",t("/api/v1/designs/create")).then(a=>a.data.data),{...e,staleTime:1/0})}function m(e){return s(["/api/v1/designs?template=true&entities="+e],()=>n("GET",t("/api/v1/designs?template=true&status=active&sort=name|asc&entities="+e)).then(a=>a.data.data),{staleTime:1/0})}export{l as a,p as b,m as c,f as d,g as u};
