"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"Privatkey auslesen",permalink:"/Read_out_private_key/"},o=void 0,s={unversionedId:"auto/Read_out_private_key",id:"auto/Read_out_private_key",title:"Privatkey auslesen",description:"Beschreibung wie der Privat Key aus der App herausgelesen werden kann.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/Read_out_private_key.md",sourceDirName:"auto",slug:"/auto/Read_out_private_key",permalink:"/DeFiChain-Wiki/de/docs/auto/Read_out_private_key",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/Read_out_private_key.md",tags:[],version:"current",lastUpdatedAt:1661698654,formattedLastUpdatedAt:"28. Aug. 2022",frontMatter:{title:"Privatkey auslesen",permalink:"/Read_out_private_key/"},sidebar:"tutorialSidebar",previous:{title:"Masternode installation erweitert",permalink:"/DeFiChain-Wiki/de/docs/auto/Masternode_installation_extended"},next:{title:"BTC-Privatschl\xfcssel in Electrum importieren",permalink:"/DeFiChain-Wiki/de/docs/auto/Import_BTC_private_key_to_Electrum"}},l={},p=[],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Beschreibung wie der Privat Key aus der App herausgelesen werden kann."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Kopiere die DFI Adresse, zu welcher du den PrivatKey auslesen willst.",src:r(4429).Z,width:"900",height:"673"})),(0,i.kt)("p",null,"Kopiere die DFI Adresse, zu welcher du den PrivatKey auslesen willst."),(0,i.kt)("p",null,"Gehe zu ",(0,i.kt)("a",{parentName:"p",href:"https://dex.defichain.com/"},"dex.defichain.com")," und suche nach dieser Adresse."),(0,i.kt)("p",null,"Hinweis: Der Betreiber der Website kann danach theoretisch deine IP Adresse mit dieser DFI Adresse verkn\xfcpfen. Eventuell ist es sinnvoll einen VPN oder einen TOR Browser zu verwenden."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Kontrolliere ob diese Adresse auch wirklich alle Coins beinhaltet!"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:r(1199).Z,width:"900",height:"413"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Gehe in die Konsole."),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Gehe in die Konsole",src:r(9125).Z,width:"900",height:"676"})),(0,i.kt)("p",null,"Gib folgenden Befehl ein (ohne Anf\xfchrungszeichen): ",(0,i.kt)("inlineCode",{parentName:"p"},"dumpprivkey "),(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},'"deine Adresse"'))),(0,i.kt)("p",null,"Hinweis: Wenn du den BTC Private Key auslesen willst, benutze statt dessen ",(0,i.kt)("inlineCode",{parentName:"p"},'spv_dumpprivkey "deine Adresse"')," . Danach kannst du den Key z. B. in Electrum importieren, siehe hier: ",(0,i.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/de/docs/auto/Import_BTC_private_key_to_Electrum"},"Import BTC private key to Electrum")),(0,i.kt)("p",null,"Best\xe4tige mit Enter \u23ce"),(0,i.kt)("p",null,"(Soll ich hier noch erkl\xe4ren wo sich die Enter Taste befindet?)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Der Privatkey wird angezeigt. L4d4AisBuCcQxyB6Be2BRh2fbuBZ6F9v6oos9uzvTWDovNvaw6rrDer"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:r(3071).Z,width:"900",height:"675"})))}c.isMDXComponent=!0},4429:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Bildschirmfoto_2021-03-13_um_23.39.18-43dab8be0ae2551b6b5f1caa7219164d.png"},1199:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Bildschirmfoto_2021-03-13_um_23.40.59-300ac7c60579e14cf5a5555683b73d07.png"},9125:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Bildschirmfoto_2021-03-13_um_23.49.001-8a0883983a27c0cca99002cdbe484f2d.png"},3071:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Bildschirmfoto_2021-03-13_um_23.56.36-c9e031f1c5dc80444e3902569be1ca8a.png"}}]);