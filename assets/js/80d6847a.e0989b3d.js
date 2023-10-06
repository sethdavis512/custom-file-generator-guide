"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},c="React component (TypeScript)",p={unversionedId:"templates/ts-component",id:"templates/ts-component",title:"React component (TypeScript)",description:"Generator",source:"@site/docs/templates/ts-component.md",sourceDirName:"templates",slug:"/templates/ts-component",permalink:"/custom-file-generator-guide/docs/templates/ts-component",draft:!1,editUrl:"https://github.com/sethdavis512/custom-file-generator-guide/tree/main/docs/templates/ts-component.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Complete",permalink:"/custom-file-generator-guide/docs/foundation/complete"},next:{title:"Remix route",permalink:"/custom-file-generator-guide/docs/templates/remix-route"}},i={},s=[{value:"Generator",id:"generator",level:2},{value:"Files",id:"files",level:2}],l={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-component-typescript"},"React component (TypeScript)"),(0,o.kt)("h2",{id:"generator"},"Generator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="plopfile.js"',title:'"plopfile.js"'},"export default function ({ setGenerator }) {\n    setGenerator('ts-component', {\n        description: 'Tiny React app built using Parcel',\n        prompts: [\n            {\n                type: 'input',\n                name: 'name',\n                message: 'Name'\n            }\n        ],\n        actions: [\n            {\n                type: 'addMany',\n                destination: `${process.cwd()}/{{ kebabCase name }}/`,\n                templateFiles: `plop-templates/ts-component/**/*.hbs`,\n                base: `plop-templates/ts-component`\n            }\n        ]\n    });\n}\n")),(0,o.kt)("h2",{id:"files"},"Files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts.hbs"',title:'"index.ts.hbs"'},"export { default } from './{{ pascalCase name }}';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="{{name}}.tsx.hbs"',title:'"{{name}}.tsx.hbs"'},"import React, { ReactNode } from 'react';\n\ninterface {{name}}Props {\n    children: ReactNode;\n}\n\nexport default function {{name}}({ children }: {{name}}Props): JSX.Element {\n    return <>{children}</>;\n}\n")))}u.isMDXComponent=!0}}]);