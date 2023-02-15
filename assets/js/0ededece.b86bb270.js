"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"DeFiChain-Masternode-Monitor",description:"Monitor any DeFiChain masternode and see its activites, straight from your browser."},a=void 0,s={unversionedId:"auto/DeFiChain-Masternode-Monitor",id:"auto/DeFiChain-Masternode-Monitor",title:"DeFiChain-Masternode-Monitor",description:"Monitor any DeFiChain masternode and see its activites, straight from your browser.",source:"@site/docs/auto/DeFiChain-Masternode-Monitor.md",sourceDirName:"auto",slug:"/auto/DeFiChain-Masternode-Monitor",permalink:"/docs/auto/DeFiChain-Masternode-Monitor",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/DeFiChain-Masternode-Monitor.md",tags:[],version:"current",lastUpdatedAt:1670761168,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{title:"DeFiChain-Masternode-Monitor",description:"Monitor any DeFiChain masternode and see its activites, straight from your browser."},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/auto/Services"},next:{title:"DeFiChain-Portfolio",permalink:"/docs/auto/DeFiChain-Portfolio"}},u={},l=[{value:"Installation",id:"installation",level:3},{value:"Setup",id:"setup",level:3},{value:"Requirements",id:"requirements",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Nerd Stuff",id:"nerd-stuff",level:3}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"See what's going on on your Masternodes without having the DeFiChain Wallet desktop app running. So, you can check the activities of your masternodes right from your smartphone or any other computer with internet access."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.defichain-masternode-monitor.com/"},"https://www.defichain-masternode-monitor.com/")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"thumb",src:n(9883).Z,width:"300",height:"172"})),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You don't need to install anything. It's a web page."),(0,o.kt)("p",null,"You can add that page to your home screen on your smartphone (iOS and Android), though. This makes it behave and feel like an app you've downloaded from the App Store."),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The Masternode Monitor comes pre-configured with some random masternodes. You can delete them and fill in your own."),(0,o.kt)("p",null,"There's an optional backup & sync function. You can enable it in the app's settings. This enables you to synchronize your masternode entries over multiple devices."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You only need a modern browser. If you're using a smartphone or desktop operating system younger than 3 years, you're fine. Internet Explorer is not supported."),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The app gathers data regarding your entered masternode owner addresses from the official DeFiChain APIs and shows it to you in a pretty way. It's magic :D"),(0,o.kt)("h3",{id:"nerd-stuff"},"Nerd Stuff"),(0,o.kt)("p",null,"It is built using the ",(0,o.kt)("a",{parentName:"p",href:"https://quasar.dev"},"Quasar")," framework, using Vue.js. It compiles to a lightweight PWA, consisting of just a few JS, CSS and a single HTML file. There will be a public GitHub repository in the future, so you can run it by your own if you like. There's no central backend needed."))}d.isMDXComponent=!0},9883:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/services_EN_13_Defichain-masternode-monitor-moackup-1c547466965cc05995ccbc2bb2a48827.png"}}]);