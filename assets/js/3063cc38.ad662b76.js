"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Backup Wallet",description:"TODO - Short description of this page."},l=void 0,i={unversionedId:"auto/Backup_Wallet",id:"auto/Backup_Wallet",title:"Backup Wallet",description:"TODO - Short description of this page.",source:"@site/docs/auto/Backup_Wallet.md",sourceDirName:"auto",slug:"/auto/Backup_Wallet",permalink:"/docs/auto/Backup_Wallet",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Backup_Wallet.md",tags:[],version:"current",lastUpdatedAt:1671139928,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{title:"Backup Wallet",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Wallet Encryption",permalink:"/docs/auto/Wallet_Encryption"},next:{title:"Restore Wallet",permalink:"/docs/auto/Restore_Wallet"}},c={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is highly recommended to use the backup functionality of the app to create backups in regular time intervals. The backup file format is .dat and if you have chosen a password the backup file will be encrypted. It is also recommended to store all receive addresses in a text file or the like to be able to ",(0,n.kt)("a",{parentName:"p",href:"/docs/auto/Create_address"},"recover them manually"),", which is necessary under certain circumstances."),(0,n.kt)("p",null,"After changing the password in the app you need to backup the wallet again. To be on the safe side, keep the old backup as well."),(0,n.kt)("p",null,"A very frequent backup (e.g. daily) is not required, but to also be on the safe side here, backup regularly and keep several version of the backup."),(0,n.kt)("p",null,"The backup file can be used to ",(0,n.kt)("a",{parentName:"p",href:"/docs/auto/Restore_Wallet"},"restore the wallet")," after a new installation of the app or after using the exit function."),(0,n.kt)("p",null,'The sole usage of a seed phrase as "backup" is no longer encouraged.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Wallet backup",src:r(6187).Z,width:"572",height:"443"}),"\n",(0,n.kt)("img",{alt:"Exit wallet",src:r(8096).Z,width:"572",height:"443"})))}u.isMDXComponent=!0},6187:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Wallet_Backup-149b764c2d1aa7b47b29c3aaa11f0f87.jpg"},8096:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Wallet_Exit_1-3a51535c779676f4c3270a7808cec6ce.jpg"}}]);