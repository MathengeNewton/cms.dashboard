import{k as c,a as l,j as t,I as m}from"./index-ecbcc3c7.js";import{r}from"./react-e483b31d.js";import{o as d}from"./react-icons-071f44cd.js";import{c as i}from"./classnames-eea0979a.js";import{t as n,_ as s}from"./@headlessui-220c51a1.js";function w(e){const a=c();return l(n.Root,{show:e.visible,as:r.Fragment,children:l(s,{as:"div",className:"relative z-10",onClose:e.onClose,children:l("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",children:l(n.Child,{as:r.Fragment,enter:"transform transition ease-in-out duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-200",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:l(s.Panel,{className:i("pointer-events-auto","w-screen",{"max-w-xl":e.size==="large","max-w-sm":e.size==="small","max-w-md":e.size==="regular","max-w-xs":e.size==="extraSmall","max-w-4xl":e.size==="extraLarge"}),children:t("form",{onSubmit:o=>o.preventDefault(),className:"border flex h-full flex-col divide-y divide-gray-200 shadow-xl",style:{backgroundColor:a.$1,borderColor:a.$4},children:[t("div",{className:"flex flex-col flex-1 h-0 overflow-y-auto",children:[l("div",{className:"py-6 px-4 sm:px-6 border-b",style:{borderColor:a.$4},children:t("div",{className:"flex items-center justify-between",children:[l("span",{className:"text-lg font-medium",style:{color:a.$3},children:e.title}),t(m,{children:[e.topRight,l(d,{fontSize:24,className:"cursor-pointer",onClick:()=>e.onClose(),color:a.$3})]})]})}),l("div",{className:"flex flex-1 flex-col justify-between items-center",children:l("div",{className:i("flex flex-col flex-1 divide-y divide-gray-200 w-full",{"p-4":e.withContainer}),children:e.children})})]}),e.actionChildren&&l("div",{className:i("flex justify-center",{"p-4":!e.withoutActionContainer}),children:e.actionChildren})]})})})})})})}export{w as S};
