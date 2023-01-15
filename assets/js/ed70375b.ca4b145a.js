"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"UTXO",description:"DeFiChain uses the UTXO model. Differences between DFI in form of Token and UTXO."},i=void 0,s={unversionedId:"auto/UTXO",id:"auto/UTXO",title:"UTXO",description:"DeFiChain uses the UTXO model. Differences between DFI in form of Token and UTXO.",source:"@site/docs/auto/UTXO.md",sourceDirName:"auto",slug:"/auto/UTXO",permalink:"/docs/auto/UTXO",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/UTXO.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"UTXO",description:"DeFiChain uses the UTXO model. Differences between DFI in form of Token and UTXO."},sidebar:"tutorialSidebar",previous:{title:"Block Rewards",permalink:"/docs/auto/Block_Rewards"},next:{title:"Staking",permalink:"/docs/category/staking"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DeFiChain uses the ",(0,o.kt)("strong",{parentName:"p"},"u"),"nspent transaction (",(0,o.kt)("strong",{parentName:"p"},"tx"),") ",(0,o.kt)("strong",{parentName:"p"},"o"),"utput model, or\nUTXO. There are two types of DFI, UTXO and token. UTXO DFI can be spent\n(sent to another wallet) through the blockchain; it is a user's\navailable balance. The other form of DFI, token DFI, is received in\nliquidity mining. Because in every block, which occurs approximately\nevery 30 seconds, rewards are distributed to liquidity providers,\ncreating tons of UTXO transactions would be inefficient, spamming the\nblockchain with transactions, and raising the cost of a transaction that\nwould make it unprofitable to liquidity mine. So, rewards are instead\ndistributed by token, which does not include a transaction fee. Token\nDFI must be converted to UTXO DFI before it is possible to send any DFI."))}p.isMDXComponent=!0}}]);