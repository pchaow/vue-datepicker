import{N as r}from"./vue3-date-time-picker.esm.0cec9195.js";import{u as a,r as s,o as u,c as d,b as i}from"./app.37f37379.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={components:{Datepicker:r},props:["textInput","textInputOptions"],data(){return{date:null,dark:!0}},mounted(){this.dark=a()}},m={class:"demo-wrap"};function x(k,t,o,_,e,f){const n=s("Datepicker");return u(),d("div",m,[i(n,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=p=>e.date=p),dark:e.dark,"text-input":o.textInput,"text-input-options":o.textInputOptions,placeholder:"Start Typing ..."},null,8,["modelValue","dark","text-input","text-input-options"])])}var V=c(l,[["render",x]]);export{V as default};
