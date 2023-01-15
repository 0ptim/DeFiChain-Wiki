"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"V2.3.1",description:"General information about version V2.3.1 and some rare problems which can occur."},i=void 0,l={unversionedId:"auto/V2.3.1",id:"auto/V2.3.1",title:"V2.3.1",description:"General information about version V2.3.1 and some rare problems which can occur.",source:"@site/docs/auto/V2.3.1.md",sourceDirName:"auto",slug:"/auto/V2.3.1",permalink:"/docs/auto/V2.3.1",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/V2.3.1.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"V2.3.1",description:"General information about version V2.3.1 and some rare problems which can occur."},sidebar:"tutorialSidebar",previous:{title:"Version Specific Hints",permalink:"/docs/category/version-specific-hints"},next:{title:"V2.3.2",permalink:"/docs/auto/V2.3.2"}},s={},c=[{value:"General information about version V2.3.1",id:"general-information-about-version-v231",level:2},{value:"Downdload source",id:"downdload-source",level:3},{value:"Known bugs with this version",id:"known-bugs-with-this-version",level:2},{value:"Wallet does not start",id:"wallet-does-not-start",level:3},{value:"More feedback from the community",id:"more-feedback-from-the-community",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-information-about-version-v231"},"General information about version V2.3.1"),(0,o.kt)("h3",{id:"downdload-source"},"Downdload source"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/DeFiCh/app/releases/tag/v2.3.1"},"Public GitHub link"))),(0,o.kt)("h2",{id:"known-bugs-with-this-version"},"Known bugs with this version"),(0,o.kt)("h3",{id:"wallet-does-not-start"},"Wallet does not start"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DeFiChain app does not start",src:n(5043).Z,width:"900",height:"677"})),(0,o.kt)("p",null,"Many users report that the wallet does not start after installation. We have noticed that this problem occurs mainly with people who install the DeFi App V2.3.0 or V2.3.1 for the first time. People who only install an update have this problem less."),(0,o.kt)("p",null,"Error description:"),(0,o.kt)("p",null,"The DeFi App with the version does not create blockchain folders. Without this folder the app cannot work and therefore cannot start."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Faulty installation",src:n(2372).Z,width:"900",height:"483"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Correct installation",src:n(9410).Z,width:"900",height:"468"})),(0,o.kt)("p",null,"Solution:"),(0,o.kt)("p",null,"The installation of the blockchain files must be triggered manually."),(0,o.kt)("p",null,"open on Windows: ",(0,o.kt)("inlineCode",{parentName:"p"},'C:\\Users\\"username"\\AppData\\Local\\Programs\\defi-app\\resources\\binary\\win')),(0,o.kt)("p",null,"open on Mac: ",(0,o.kt)("inlineCode",{parentName:"p"},"/Applications/defi-app.app/Contents/Resources/binary/mac")),(0,o.kt)("p",null,"If you cannot find this directory: ",(0,o.kt)("a",{parentName:"p",href:"./Show_hidden_folders#Files_in_an_application"},"Show hidden folders#Files in an application")),(0,o.kt)("p",null,"Start the file ",(0,o.kt)("inlineCode",{parentName:"p"},"defid")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1441).Z,width:"900",height:"312"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7169).Z,width:"900",height:"467"})),(0,o.kt)("p",null,"The missing files are now created. After about 2 minutes, the window can be closed again and the app works smoothly."),(0,o.kt)("p",null,"Feel free to add your knowledge to this Wiki page!"),(0,o.kt)("h3",{id:"more-feedback-from-the-community"},"More feedback from the community"),(0,o.kt)("p",null,"Looks like a different defichain storage folder no longer works with this version. I have copied over the created subfolders from blockchain folder on c drive, but when i have the entry about other blockchain folder (example D:\\defichain) in config, the app will not start even with the copied over folders from c drive."))}d.isMDXComponent=!0},5043:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/v231_EN_1-242d0bfa20c8b2d7385fdece71d57957.png"},2372:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/v231_EN_2-72b43f97e2fa9dcd3d49679daecb0000.png"},9410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/v231_EN_3-5a64df182213867ee33b9e7ab3cef4f9.png"},1441:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/v231_EN_4-0d1ca4263cc02fcefbbb4cf97f6c301b.png"},7169:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/v231_EN_5-a44562515c84e583084960ed4ce1610f.png"}}]);