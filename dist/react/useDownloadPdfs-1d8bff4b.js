import{Q as t,r as o,e as u}from"./index-e5ac1c37.js";import{u as i}from"./react-query-557fee5a.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function l({entity:e}){const n=i();return s=>{s.length&&(t.processing(),n.fetchQuery([`/api/v1/${e}s/bulk`],()=>o("POST",u(`/api/v1/${e}s/bulk`),{action:"bulk_download",ids:s}).then(()=>t.success("downloaded_entities"))))}}export{l as u};
