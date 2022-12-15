"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),f=l(r),u=n,m=f["".concat(s,".").concat(u)]||f[u]||c[u]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={title:"Delete DeFi App",description:"TODO - Short description of this page."},o=void 0,p={unversionedId:"auto/Delete_DeFi_App",id:"auto/Delete_DeFi_App",title:"Delete DeFi App",description:"TODO - Short description of this page.",source:"@site/docs/auto/Delete_DeFi_App.md",sourceDirName:"auto",slug:"/auto/Delete_DeFi_App",permalink:"/docs/auto/Delete_DeFi_App",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Delete_DeFi_App.md",tags:[],version:"current",lastUpdatedAt:1671140631,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{title:"Delete DeFi App",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Wallet.dat corrupt salvage failed",permalink:"/docs/auto/corrupt_salvage_failed"},next:{title:"Kill defid Daemon",permalink:"/docs/auto/Kill_defid_Daemon"}},s={},l=[{value:"Windows:",id:"windows",level:3},{value:"Mac:",id:"mac",level:3}],d={toc:l};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Instructions to completely delete the DeFi App."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important: It is strongly recommended to store the wallet backup (a file with .dat extension) in several safe places. For example, on a memory stick in a safe deposit box. Before deleting files, make sure you have backed up your wallet.dat files! If you are unsure whether your backup file contains all the required information and really works, you should first try this backup on another computer. ",(0,n.kt)("a",{parentName:"strong",href:"/docs/auto/Suggestion_for_using_the_DeFi_app"},"Read our instructions on how to use the DeFi app safely."))),(0,n.kt)("p",null,"To be able to delete all files, it is necessary to have access to hidden folders. You can find the instructions here: ",(0,n.kt)("a",{parentName:"p",href:"/docs/auto/Show_hidden_folders"},"Show hidden folders")),(0,n.kt)("p",null,"The following folders must be deleted:"),(0,n.kt)("h3",{id:"windows"},"Windows:"),(0,n.kt)("p",null,"C:\\Users","\\","%username%","\\",".defi\n",(0,n.kt)("img",{src:r(4239).Z,width:"900",height:"545"})),(0,n.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Local\\defi-app-updater\n",(0,n.kt)("img",{src:r(2130).Z,width:"900",height:"542"})),(0,n.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Local\\Programs\\defi-app\n",(0,n.kt)("img",{src:r(6091).Z,width:"900",height:"541"})),(0,n.kt)("p",null,"C:\\Users","\\","%username%\\AppData\\Roaming\\DeFi Blockchain\n",(0,n.kt)("img",{src:r(3624).Z,width:"900",height:"541"})),(0,n.kt)("p",null,"C:\\Users","\\",'%username%\\AppData\\Roaming\\defi-appHint: the folder for the newer version will be "defi-wallet" instead of "defi-app\n',(0,n.kt)("img",{src:r(2091).Z,width:"900",height:"543"})),(0,n.kt)("h3",{id:"mac"},"Mac:"),(0,n.kt)("p",null,"/Applications/defi-app\n",(0,n.kt)("img",{alt:"/Applications/defi-app",src:r(8055).Z,width:"900",height:"633"})),(0,n.kt)("p",null,"/Users/%username%/.defi\n",(0,n.kt)("img",{alt:"/Users/%username%/.defi",src:r(6566).Z,width:"900",height:"510"})),(0,n.kt)("p",null,"/Users/%username%/Library/Application Support/DeFi\n",(0,n.kt)("img",{alt:"/Users/%username%/Library/Application Support/DeFi",src:r(2330).Z,width:"900",height:"513"})),(0,n.kt)("p",null,'/Users/%username%/Library/Application Support/defi-appHint: the folder for the newer version will be "defi-wallet" instead of "defi-app\n',(0,n.kt)("img",{alt:"/Users/%username%/Library/Application Support/defi-appHint: the folder for the newer version will be &quot;defi-wallet&quot; instead of &quot;defi-app",src:r(7963).Z,width:"900",height:"513"})))}c.isMDXComponent=!0},4239:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_01-f6546525befd531c6f00f0b4f0922fc6.png"},2130:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_02-fdc3c6386306dd7208c3f676e06ea7eb.png"},6091:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_03-cf33aa0360b0cd9e5f48b390126042fb.png"},3624:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_04-fb30f563ec99c70a83c7007959192091.png"},2091:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_05-bd8e3e5e63bf372160033d2dcd5176c9.png"},8055:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_06-a2fa335d28dffdc0e4383660dcee0b61.png"},6566:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_07-e371374ecbd98d666096e1bb214f4ed3.png"},2330:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_08-d31d719a7ddcc0038278823deaf6b154.png"},7963:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/deletedefiapp_EN_09-7c88ff4a17205f53868384a599bc338b.png"}}]);