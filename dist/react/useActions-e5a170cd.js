import{a1 as l,af as i,ag as s,a as t,a2 as o,O as r,cZ as d}from"./index-ecbcc3c7.js";import{s as u,u as m,t as h}from"./react-icons-071f44cd.js";import{u as A}from"./react-i18next-91d47f13.js";function g(){const[n]=A(),a=d(),{isEditOrShowPage:c}=l({entity:"vendor"});return[e=>c&&i(e)===s.Active&&t(o,{onClick:()=>a(e.id,"archive"),icon:t(r,{element:u}),children:n("archive")}),e=>c&&(i(e)===s.Archived||i(e)===s.Deleted)&&t(o,{onClick:()=>a(e.id,"restore"),icon:t(r,{element:m}),children:n("restore")}),e=>c&&(i(e)===s.Active||i(e)===s.Archived)&&t(o,{onClick:()=>a(e.id,"delete"),icon:t(r,{element:h}),children:n("delete")})]}export{g as u};