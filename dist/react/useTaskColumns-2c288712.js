import{h as d}from"./index-e5ac1c37.js";import{r as o}from"./react-e483b31d.js";import{y as k}from"./lodash-bd2b80f6.js";import{g as h,i as n}from"./useProductColumns-2a17b8dd.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function m(){const t=d(),[$,c]=o.useState([]);return o.useEffect(()=>{let s=k.clone(t==null?void 0:t.settings.pdf_variables.task_columns)||[],a=k.clone(t==null?void 0:t.settings.pdf_variables.task_columns)||[];const f=a.length;s.includes("$task.service")||(s=["$task.service",...s],a=["$task.service",...a]),f||s.push("$task.description"),s.includes("$task.rate")||(s.push("$task.rate"),a.push("$task.rate")),s.includes("$task.hours")||(s.push("$task.hours"),a.push("$task.hours"));const i=[],r=(t==null?void 0:t.enabled_item_tax_rates)||0;r>0&&i.push("$task.tax_rate1"),r>1&&i.push("$task.tax_rate2"),r>2&&i.push("$task.tax_rate3");const l=h("$task.tax",a,s);s=n(l,i,s),a=n(l,i,a),s=s.filter(e=>e!=="$task.tax"),a=a.filter(e=>e!=="$task.tax"),t.enable_product_discount||(s=s.filter(e=>e!=="$task.discount"),a=a.filter(e=>e!=="$task.discount")),t.enable_product_discount&&!s.includes("$task.discount")&&(s.push("$task.discount"),a.push("$task.discount")),["task1","task2","task3","task4"].forEach(e=>{t!=null&&t.custom_fields[e]&&!a.includes(`$task.${e}`)&&(s=n(s.length,[`$task.${e}`],s)),!(t!=null&&t.custom_fields[e])&&a.includes(`$task.${e}`)&&(s=s.filter(u=>u!==`$task.${e}`),a=a.filter(u=>u!==`$task.${e}`))}),s=s.filter(e=>e!=="$task.line_total"),s.push("$task.line_total"),c(s)},[t]),$}export{m as u};
