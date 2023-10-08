"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,h=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},s="useStateMachine",c={unversionedId:"templates/use-state-machine",id:"templates/use-state-machine",title:"useStateMachine",description:"Git branch//github.com/sethdavis512/jarvis/tree/use-state-machine",source:"@site/docs/templates/use-state-machine.md",sourceDirName:"templates",slug:"/templates/use-state-machine",permalink:"/custom-file-generator-guide/docs/templates/use-state-machine",draft:!1,editUrl:"https://github.com/sethdavis512/custom-file-generator-guide/tree/main/docs/templates/use-state-machine.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tiny React App",permalink:"/custom-file-generator-guide/docs/templates/tiny-react"},next:{title:"useFetch",permalink:"/custom-file-generator-guide/docs/templates/use-fetch"}},o={},p=[{value:"Generator",id:"generator",level:2},{value:"Files",id:"files",level:2},{value:"Download zip",id:"download-zip",level:2}],u={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usestatemachine"},"useStateMachine"),(0,a.kt)("p",null,"Git branch: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sethdavis512/jarvis/tree/use-state-machine"},"https://github.com/sethdavis512/jarvis/tree/use-state-machine")),(0,a.kt)("h2",{id:"generator"},"Generator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="plopfile.js"',title:'"plopfile.js"'},"export default function ({ setGenerator }) {\n    setGenerator('use-state-machine', {\n        description: 'Typescript useStateMachine hook',\n        prompts: [],\n        actions: [\n            {\n                type: 'addMany',\n                destination: `${process.cwd()}/`,\n                templateFiles: `plop-templates/use-state-machine/**/*.hbs`,\n                base: `plop-templates/use-state-machine`\n            }\n        ]\n    });\n}\n")),(0,a.kt)("h2",{id:"files"},"Files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="useStateMachine.ts.hbs"',title:'"useStateMachine.ts.hbs"'},"import { useReducer } from 'react';\n\ntype MachineSpec = {\n    initialState: string;\n    states: Record<string, Record<string, string>>;\n};\n\nexport const machineSpec: MachineSpec = {\n    initialState: 'disconnected',\n    states: {\n        disconnected: {\n            CONNECT: 'connecting'\n        },\n        connecting: {\n            CONNECTION_SUCCESS: 'connected'\n        },\n        connected: {\n            DISCONNECT: 'disconnected'\n        }\n    }\n};\n\ntype MachineReducer = (currentState: string, event: string) => string;\n\nexport const buildMachineReducer =\n    (spec: MachineSpec): MachineReducer =>\n    (currentState, event) => {\n        const stateTransitions = spec.states[currentState];\n\n        if (stateTransitions === undefined) {\n            throw new Error(`No transitions defined for ${currentState}`);\n        }\n\n        const nextState = stateTransitions[event];\n\n        if (nextState === undefined) {\n            throw new Error(\n                `Unknown transition for event ${event} in state ${currentState}`\n            );\n        }\n\n        return nextState;\n    };\n\nexport const useStateMachine = (spec: MachineSpec) =>\n    useReducer(buildMachineReducer(spec), spec.initialState);\n")),(0,a.kt)("h2",{id:"download-zip"},"Download zip"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sethdavis512/jarvis/archive/refs/heads/use-state-machine.zip"},"https://github.com/sethdavis512/jarvis/archive/refs/heads/use-state-machine.zip")))}d.isMDXComponent=!0}}]);