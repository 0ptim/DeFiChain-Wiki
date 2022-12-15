"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Atomic Swap",description:"TODO - Short description of this page."},o=void 0,c={unversionedId:"auto/Atomic_Swap",id:"auto/Atomic_Swap",title:"Atomic Swap",description:"TODO - Short description of this page.",source:"@site/docs/auto/Atomic_Swap.md",sourceDirName:"auto",slug:"/auto/Atomic_Swap",permalink:"/docs/auto/Atomic_Swap",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Atomic_Swap.md",tags:[],version:"current",lastUpdatedAt:1671139928,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{title:"Atomic Swap",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Import BTC private key to Electrum",permalink:"/docs/auto/Import_BTC_private_key_to_Electrum"},next:{title:"Update Masternode",permalink:"/docs/auto/Update_Masternode"}},l={},p=[{value:"Introduction",id:"introduction",level:4},{value:"Tutorial",id:"tutorial",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"***\xa0Atomic\xa0Swap\xa0is\xa0temporarily\xa0suspended\xa0***")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"***\xa0This\xa0page\xa0is\xa0not\xa0up\xa0to\xa0date!\xa0***")),(0,r.kt)("p",null,"An introduction to the Atomic Swap is available ",(0,r.kt)("a",{parentName:"p",href:"https://blog.defichain.com/decentralized-trading-with-bitcoin/"},"here"),"."),(0,r.kt)("p",null,"This feature is still experimental and has to be fully executed on the command line."),(0,r.kt)("h4",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Interchain Exchange or Atomic Swap has been described in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/pinkpaper/tree/main/interchain-exchange"},"Pinkpaper")," of DeFiChain. It's aim is to facilitate exchanges between native BTC (not DST BTC/dBTC) and DFI (or DST in general). So in an Atomic Swap an amount of native BTC is changing owner on the Bitcoin blockchain and an\namount of DFI is changing owner on the DeFiChain. In short you sell/buy BTC for DFI or vice versa. It is crucial that this swap has maximum security to allow trust less transfers."),(0,r.kt)("h4",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"With the Desktop full-node wallet the Atomic-Swap feature is only available with the command line interface. You need at least the version 2.6.2, where the SPV-Wallet (Bitcoin-Wallet) is enabled."),(0,r.kt)("p",null,"A very early tutorial was published on github beginning of June and can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/ain/wiki/Interchain-Exchange-Tutorial"},"here"),". With this nearly nobody was able to do a complete Atomic-Swap and U-Zyn decided to make a live demo in the Tech-Talk livestream on 12th August 2021. If you have not seen it, please have a look on the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lBOA1XPIUpg&t=937s"},"video"),". In this demo he presented a new tutorial, which is also published on github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/ain/wiki/ICX-Atomic-Swap"},"ICX Atomic Swap")))}u.isMDXComponent=!0}}]);