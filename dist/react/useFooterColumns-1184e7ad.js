import{u as r}from"./useSumTableColumn-7473cf49.js";import{l as a,by as c}from"./index-ecbcc3c7.js";import{u as i}from"./react-i18next-91d47f13.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function p(){var s;const[t]=i(),o=a(),l=r();c();const u=[{column:"amount",id:"amount",label:t("amount"),format:(n,m)=>l(n,m)}],e=((s=o==null?void 0:o.table_footer_columns)==null?void 0:s.recurringInvoice)||[];return{footerColumns:u.filter(({id:n})=>e.includes(n)),allFooterColumns:u}}export{p as u};
