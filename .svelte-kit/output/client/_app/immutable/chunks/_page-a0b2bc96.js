import{H as i}from"./control-e7f5239e.js";import{I as s,n as c}from"./iconsManifest-b37bd7c7.js";function a(n,o){return new i(n,o)}new TextEncoder;const f=async({params:n})=>{const{family:o}=n,e=s.filter(t=>t.id===o),{content:r}=c.filter(t=>t.id===o)[0];if(e.length===0)throw a(404,"Not found Bx");return{id:o,icons:r,info:e[0]}},m=Object.freeze(Object.defineProperty({__proto__:null,load:f},Symbol.toStringTag,{value:"Module"}));export{m as _,f as l};