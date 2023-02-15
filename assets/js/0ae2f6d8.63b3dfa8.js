"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>b});var n=a(7294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,d=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=l(a),b=c,u=s["".concat(d,".").concat(b)]||s[b]||h[b]||r;return a?n.createElement(u,i(i({ref:t},f),{},{components:a})):n.createElement(u,i({ref:t},f))}));function b(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(7462),c=(a(7294),a(3905));const r={title:"Bitcoin Anchoring",description:"Bitcoin Anchoring and its purpose. Concept and technical documents. View anchor history and learn how to get the anchor bonus."},i=void 0,o={unversionedId:"auto/Bitcoin_Anchoring",id:"auto/Bitcoin_Anchoring",title:"Bitcoin Anchoring",description:"Bitcoin Anchoring and its purpose. Concept and technical documents. View anchor history and learn how to get the anchor bonus.",source:"@site/docs/auto/Bitcoin_Anchoring.md",sourceDirName:"auto",slug:"/auto/Bitcoin_Anchoring",permalink:"/docs/auto/Bitcoin_Anchoring",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Bitcoin_Anchoring.md",tags:[],version:"current",lastUpdatedAt:1673628739,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"Bitcoin Anchoring",description:"Bitcoin Anchoring and its purpose. Concept and technical documents. View anchor history and learn how to get the anchor bonus."},sidebar:"tutorialSidebar",previous:{title:"Vault and loan with CLI",permalink:"/docs/auto/CLI_Vault_and_Loan"},next:{title:"Blockchain folder",permalink:"/docs/auto/Blockchain_folder"}},d={},l=[{value:"Presentation of the concept with DFIP 1:",id:"presentation-of-the-concept-with-dfip-1",level:2},{value:"Some short FAQ information",id:"some-short-faq-information",level:2},{value:"Technical documents:",id:"technical-documents",level:2},{value:"DeFiChain anchor history",id:"defichain-anchor-history",level:2},{value:"The first anchor:",id:"the-first-anchor",level:3}],f={toc:l};function h(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Information about the Bitcoin Anchoring."),(0,c.kt)("h2",{id:"presentation-of-the-concept-with-dfip-1"},"Presentation of the concept with DFIP 1:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5d4h-XvXsVk"},"YouTube Video English")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Oh0QoKg_V70"},"YouTube Video Deutsch"))),(0,c.kt)("h2",{id:"some-short-faq-information"},"Some short FAQ information"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"No masternode is needed to set the anchor. Each user can set an anchor."),(0,c.kt)("li",{parentName:"ul"},"To see the current anchor bonus, the following command must be entered in the Console: ",(0,c.kt)("inlineCode",{parentName:"li"},"listcommunitybalances"))),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"listcommunitybalances",src:a(9580).Z,width:"300",height:"241"})),(0,c.kt)("h2",{id:"technical-documents"},"Technical documents:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/DeFiCh/ain/wiki/What-is-an-anchor%3F"},"GitHub declaration")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/DeFiCh/ain/wiki/Create-Bitcoin-Anchor"},"Instructions to set an anchor yourself")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://mainnet.defichain.io/#/DFI/mainnet/anchored-blocks"},"Show anchored blocks in DeFiChain Block Explorer")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"http://defichain-node.de/api/v1/listanchors/"},"Another data source for anchor data"))),(0,c.kt)("h2",{id:"defichain-anchor-history"},"DeFiChain anchor history"),(0,c.kt)("h3",{id:"the-first-anchor"},"The first anchor:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://defichain.ghost.io/de/100-000-us-dollar-in-weniger-als-100-sekunden/"},"Report on the first anchor")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://explorer.defichain.io/#/DFI/mainnet/tx/38adbb540e5f28273721ef025830d8ec0b404f91c56f873d31b96516a8990739"},"DFI Transaction")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://btc.bitaps.com/12ca5ac2b666478bbbdfc0e0b328552a8cd83aa1b3fbb822560ab8cbf72be893"},"Bitcoin Transaction")),(0,c.kt)("li",{parentName:"ul"},"Anchored text: Data text ",(0,c.kt)("inlineCode",{parentName:"li"},"DFAwDW\\\\\u0157K6K0*1cK/5\u0285+DFAp")),(0,c.kt)("li",{parentName:"ul"},"Data hex: ",(0,c.kt)("inlineCode",{parentName:"li"},"44464177010000000000000000000000000000000000000000000000000000000000000000000044570a00ed5cba5cc597f14b06e236de4b8d302a31ef634b2f35edca85b8d72b13d6e61d0144464170")),(0,c.kt)("li",{parentName:"ul"},"Raw transaction: ",(0,c.kt)("inlineCode",{parentName:"li"},"12ca5ac2b666478bbbdfc0e0b328552a8cd83aa1b3fbb822560ab8cbf72be893")," ",(0,c.kt)("inlineCode",{parentName:"li"},"020000000001018f522d5eda4d44b4a8f1b7512a810d1661e650bc1c940f5b28a3539c5b28fe210000000000feffffff0da0860100000000001976a914a35277c3ceb9c38da206be006e8c7ff8e94fc52988ac0000000000000000536a4c5044464177010000000000000000000000000000000000000000000000000000000000000000000044570a00ed5cba5cc597f14b06e236de4b8d302a31ef634b2f35edca85b8d72b13d6e61d01444641704a01000000000000220020580a0000000000ffe4165a1d7d5c364a0441208441f663d52c11a6fad00636a94a010000000000002200205c72a04c2f1c7cd0254beb9311927ace7e6fed21f1aee54e8983cc7ca779e70b4a0100000000000022002031c88364ca1060e12a719653ef80852ac7a4e941207b9ddd68f918d341a921d34a01000000000000220020a41621ad9c2f2788fe1a83469cf42f0129dfca8b5818fd56cb6f1c80638dd3ea4a0100000000000022002037995bd62a4dc4fced608ba835660477a03371d790411fac13dea77ad5d4785c4a0100000000000022002038f2142775330ad36e29d9b27412db0505ce176fb94dc36f1c0e39ac5153e6624a01000000000000220020ac96cb0902d0a3bb11a310afa75809ec6e2ecad3f3422c41204ef38f147e88964a01000000000000220020ab2074443d78e8505f0a75445193c6597be8b2ef56de5fe3d749c0ed1ce448e64a010000000000002200207b6c563079696a9786ec8cfc70dd006f70842e5cc83064300b56174d4c26026f4a010000000000002200201b730ab4ae75ead51b5a8380ea0100000000000000000000000000000000000012421200000000001600148af413300158113baafe63bfd2d5cdb55a28a0a70247304402206a63773bd98497d92ca5b03acf28bb97d2efb374944e1c0a9e32bee67fc948d60220067dcd3205264b76766f245ab322c33f3b429e5c64a5d11169d55700f1a739ee012102a8b1481a9533779d3299f648fbed8e64ce506257b146f66ae90bba47297f92a300000000"))))}h.isMDXComponent=!0},9580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anchoring_EN-0d8f6da82f339936dc60b135dc35a1bc.png"}}]);