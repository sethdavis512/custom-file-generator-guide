"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[244],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Setup",l={unversionedId:"foundation/setup",id:"foundation/setup",title:"Setup",description:"Here's the funnest part, you get to name your CLI! I'm going to call mine jarvis.",source:"@site/docs/foundation/setup.md",sourceDirName:"foundation",slug:"/foundation/setup",permalink:"/custom-file-generator-guide/docs/foundation/setup",draft:!1,editUrl:"https://github.com/sethdavis512/custom-file-generator-guide/tree/main/docs/foundation/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/custom-file-generator-guide/docs/intro"},next:{title:"Plop",permalink:"/custom-file-generator-guide/docs/foundation/plop"}},p={},s=[{value:"Modify <code>package.json</code>",id:"modify-packagejson",level:2},{value:"Install <code>plop</code>",id:"install-plop",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Here's the funnest part, you get to name your CLI! I'm going to call mine ",(0,a.kt)("inlineCode",{parentName:"p"},"jarvis"),"."),(0,a.kt)("p",null,"Start by creating a directory and changing into that directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir jarvis && cd jarvis\n")),(0,a.kt)("p",null,"Initialize git repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,a.kt)("p",null,"Ignore ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "node_modules" > .gitignore\n')),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "# Jarvis CLI" > README.md\n')),(0,a.kt)("p",null,"Initialize a package.json file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,a.kt)("h2",{id:"modify-packagejson"},"Modify ",(0,a.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," key. This will be the command line tool's name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"bin": {\n    "jarvis": "./index.js"\n},\n')),(0,a.kt)("p",null,"Change the scripts section to include a ",(0,a.kt)("inlineCode",{parentName:"p"},"plop")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n    "plop": "plop"\n},\n')),(0,a.kt)("h2",{id:"install-plop"},"Install ",(0,a.kt)("inlineCode",{parentName:"h2"},"plop")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D plop\n")),(0,a.kt)("p",null,"Create the index file where our plop setup is going to live:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch index.js\n")),(0,a.kt)("p",null,"Add Plop CLI instructions (",(0,a.kt)("a",{parentName:"p",href:"https://plopjs.com/documentation/#wrapping-plop"},"source"),") by copying the following code into your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"#!/usr/bin/env node\nimport path from 'node:path';\nimport minimist from 'minimist';\nimport { Plop, run } from 'plop';\n\nconst args = process.argv.slice(2);\nconst argv = minimist(args);\n\nimport { dirname } from 'node:path';\nimport { fileURLToPath } from 'node:url';\n\nconst __dirname = dirname(fileURLToPath(import.meta.url));\n\nconst config = {\n    cwd: argv.cwd,\n    configPath: path.join(__dirname, 'plopfile.js'),\n    preload: argv.preload || [],\n    completion: argv.completion\n};\n\nconst callback = (env) => Plop.execute(env, run);\n\nPlop.prepare(config, callback);\n")),(0,a.kt)("p",null,"The main take away from the code above is that Plop will launch in the current working directory and it will allow you pass parameters to your command line tool (more on this later)."))}d.isMDXComponent=!0}}]);