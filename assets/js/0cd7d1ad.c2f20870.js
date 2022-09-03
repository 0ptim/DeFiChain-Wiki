"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,m=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return a?i.createElement(m,r(r({ref:t},h),{},{components:a})):i.createElement(m,r({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const o={title:"DeFiChain Intermediate Tutorial",permalink:"/DeFiChain_Intermediate_Tutorial/"},r=void 0,l={unversionedId:"auto/DeFiChain_Intermediate_Tutorial",id:"auto/DeFiChain_Intermediate_Tutorial",title:"DeFiChain Intermediate Tutorial",description:"Part of a series on DeFiChain Tutorials",source:"@site/docs/auto/DeFiChain_Intermediate_Tutorial.md",sourceDirName:"auto",slug:"/auto/DeFiChain_Intermediate_Tutorial",permalink:"/DeFiChain-Wiki/docs/auto/DeFiChain_Intermediate_Tutorial",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/DeFiChain_Intermediate_Tutorial.md",tags:[],version:"current",lastUpdatedAt:1662186740,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"DeFiChain Intermediate Tutorial",permalink:"/DeFiChain_Intermediate_Tutorial/"},sidebar:"tutorialSidebar",previous:{title:"DeFiChain Basics Tutorial",permalink:"/DeFiChain-Wiki/docs/auto/DeFiChain_Basics_Tutorial"},next:{title:"DeFiChain \xd6\u011freticileri",permalink:"/DeFiChain-Wiki/docs/auto/DeFiChain_Tutorials"}},s={},d=[{value:"The DEX",id:"the-dex",level:2},{value:"Getting Cashflow with DFI",id:"getting-cashflow-with-dfi",level:2},{value:"Staking",id:"staking",level:3},{value:"Introduction",id:"introduction",level:4},{value:"Advantages",id:"advantages",level:4},{value:"Disadvantages",id:"disadvantages",level:4},{value:"Masternodes",id:"masternodes",level:4},{value:"Advantages",id:"advantages-1",level:5},{value:"Disadvantages",id:"disadvantages-1",level:5},{value:"Centralized Delegation",id:"centralized-delegation",level:4},{value:"Advantages",id:"advantages-2",level:5},{value:"Disadvantages",id:"disadvantages-2",level:5},{value:"Liquidity Mining",id:"liquidity-mining",level:3},{value:"Advantages",id:"advantages-3",level:4},{value:"Disadvantages",id:"disadvantages-3",level:4}],h={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Part of a series on ",(0,n.kt)("a",{parentName:"em",href:"/DeFiChain-Wiki/docs/auto/DeFiChain_Tutorials"},"DeFiChain Tutorials"))),(0,n.kt)("p",null,"This is the second tutorial in the series. If you have not read the previous tutorial, you should read it ",(0,n.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/DeFiChain_Basics_Tutorial"},"here")," before reading this tutorial. In this tutorial, we will talk about DeFiChain's decentralized exchange (often just called the DEX). We also will go over staking and liquidity mining, which are two different ways of getting cashflow on your crypto."),(0,n.kt)("h2",{id:"the-dex"},"The DEX"),(0,n.kt)("p",null,"Embedded in DeFiChain is a decentralized exchange. All of the dTokens are listed on the DEX and paired with either DFI or DUSD, DeFiChain's stablecoin. The DEX works almost like a traditional exchange, but there are no orderbooks and no current way to buy or sell tokens except for what would be called a market order. All the information about the DEX can be found on the wallet being used or on ",(0,n.kt)("a",{parentName:"p",href:"https://defiscan.live"},"defiscan.live"),", which aggregates DeFiChain's data and puts it on one website. You can find data about transactions, wallet balances, and more on defiscan.live as well."),(0,n.kt)("p",null,"In DeFiChain's DEX you will be able to exchange for various assets and/or provide liquidity to the exchange for great rewards. The DEX offers DFI pairs such as dBTC to DFI (read previous tutorial for reason why the asset is called dBTC instead of BTC), also written as dBTC-DFI, and DUSD pairs (DUSD is DeFiChain's stablecoin, backed with \\$1.50 or more per stablecoin ","[","they are worth \\$1 each","]","). DUSD pairs are found with stock tokens such as dSPY-DUSD."),(0,n.kt)("p",null,"Using the DEX, users can build their own portfolio in an almost completely decentralized manner, while earning rewards."),(0,n.kt)("p",null,"To use it, first locate it on the wallet you are using. A DEX dashboard might look similar to this:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DEX Pool Pairs")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pair",(0,n.kt)("sup",null,"1")),(0,n.kt)("th",{parentName:"tr",align:null},"Total Liquidity",(0,n.kt)("sup",null,"2")),(0,n.kt)("th",{parentName:"tr",align:null},"Volume (24H)",(0,n.kt)("sup",null,"3")),(0,n.kt)("th",{parentName:"tr",align:null},"Liquidity",(0,n.kt)("sup",null,"4")),(0,n.kt)("th",{parentName:"tr",align:null},"Price Ratio",(0,n.kt)("sup",null,"5")),(0,n.kt)("th",{parentName:"tr",align:null},"APR",(0,n.kt)("sup",null,"6")," (includes commission",(0,n.kt)("sup",null,"7"),")"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dBTC-DFI"),(0,n.kt)("td",{parentName:"tr",align:null},"\\$306,240,605"),(0,n.kt)("td",{parentName:"tr",align:null},"\\$1,934,290"),(0,n.kt)("td",{parentName:"tr",align:null},"3,888 dBTC 43,704,406 DFI"),(0,n.kt)("td",{parentName:"tr",align:null},"0.00008897 dBTC/DFI 11,240 DFI/dBTC"),(0,n.kt)("td",{parentName:"tr",align:null},"62.61%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DUSD-DFI"),(0,n.kt)("td",{parentName:"tr",align:null},"\\$152,173,668"),(0,n.kt)("td",{parentName:"tr",align:null},"\\$5,068,896"),(0,n.kt)("td",{parentName:"tr",align:null},"76,086,834 DUSD 21,861,738 DFI"),(0,n.kt)("td",{parentName:"tr",align:null},"3.48 DUSD/DFI 0.2873 DFI/DUSD"),(0,n.kt)("td",{parentName:"tr",align:null},"83.37%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dSPY-DUSD"),(0,n.kt)("td",{parentName:"tr",align:null},"\\$18,399,690"),(0,n.kt)("td",{parentName:"tr",align:null},"\\$264,387"),(0,n.kt)("td",{parentName:"tr",align:null},"19,297 dSPY 9,199,845 DUSD"),(0,n.kt)("td",{parentName:"tr",align:null},"0.002098 dSPY/DUSD 476.7 DUSD/dSPY"),(0,n.kt)("td",{parentName:"tr",align:null},"103.69%")))),(0,n.kt)("p",null,"Now let's break down each of the columns, so we can understand what is going on.."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pair: The pair is what is being exchanged. In the pair dBTC-DFI, we can exchange dBTC to DFI or DFI to dBTC."),(0,n.kt)("li",{parentName:"ol"},"Total Liquidity: Every pair comes with a liquidity pool. A liquidity pool is all of the capital that is being invested in the pool by investors. They provide liquidity for users to swap. Total liquidity is the dollar equivalent of the assets that are in the liquidity pool. So in the case of the dBTC-DFI pool, the total liquidity is the value of the dBTC and DFI in the pool converted to USD."),(0,n.kt)("li",{parentName:"ol"},"Volume (24H): The volume is the amount that was traded in the preceding 24 hours. In the DUSD-DFI pool, there was \\$5,068,896 of trades (people exchanging both from DUSD to DFI and DFI back to DUSD)."),(0,n.kt)("li",{parentName:"ol"},'Liquidity: The liquidity column shows what the liquidity is actually made of. While the column "Total Liquidity" shows the dollar equivalent of the assets, the liquidity column actually shows how much of each asset is in the liquidity pool. Notice that each side of the liquidity pool makes up exactly 50% of the total liquidity.'),(0,n.kt)("li",{parentName:"ol"},"Price Ratio: The price ratio, like it implies, is the ratio of the liquidity in the pool. There is 19,297 dSPY and 9,199,845 DUSD in the liquidity pool, so in the pool there is 476.7 DUSD for every dSPY just as the price ratio notes, and 0.002098 dSPY for every DUSD as well."),(0,n.kt)("li",{parentName:"ol"},"APR: There will be more information in the liquidity mining section below. In a nutshell, this is the current rate that liquidity miners are receiving rewards for providing their assets to the pool, exposing themselves both to the risk of both assets and another risk which is known as impermanent loss. There is a calculation in order to get the APR, but it is more complex than an investor would need to know at the moment."),(0,n.kt)("li",{parentName:"ol"},"Commission: When a user swaps, 0.2% of their trade stays in the liquidity pool and is instead distributed proportionally to each of the liquidity miners. The APR that is listed on defiscan.live includes the commissions, which are based on the total liquidity and the 24-hour volume.")),(0,n.kt)("h2",{id:"getting-cashflow-with-dfi"},"Getting Cashflow with DFI"),(0,n.kt)("p",null,"While investors can simply hold their DFI, they have opportunities to use that DFI to make a greater return on their investment. There are multiple ways investors can generate more income on their DFI:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Staking",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Masternodes"),(0,n.kt)("li",{parentName:"ul"},"Centralized Delegation"))),(0,n.kt)("li",{parentName:"ul"},"Liquidity Mining",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tokenized Cryptocurrencies"),(0,n.kt)("li",{parentName:"ul"},"Tokenized Stocks"),(0,n.kt)("li",{parentName:"ul"},"Tokenized ETFs on bonds and various markets and commodities")))),(0,n.kt)("h3",{id:"staking"},"Staking"),(0,n.kt)("h4",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Every blockchain must ensure it is secure. If not, people will be able to write transactions sending money to themselves, spending their money twice. (Side note: this is best explained as having 1 euro, and then when you spend it you then can print another one and spend it again. This does not happen in the real world since money cannot be printed and made in such a way.)"),(0,n.kt)("p",null,"-- verify --"),(0,n.kt)("p",null,"So, DeFiChain is secured by thousands of what we call ",(0,n.kt)("a",{parentName:"p",href:"/DeFiChain-Wiki/docs/auto/Masternode"},"masternodes")," from around the world. Masternodes work to make sure there are no bad actors trying to do anything malicious such as mint new DFI. Masternodes are randomly chosen to help verify the transactions, so about every 30 seconds a random masternode looks at all the transactions people want to make and confirm them, and then tell the other masternodes about this, and everything is then verified, and the transactions go through. So when a masternode completes this process it creates a block (why it is called a ",(0,n.kt)("strong",{parentName:"p"},"block"),"chain.) There are nearly 10,900 masternodes right now, so it would take a lot of masternodes to gain a majority to mess up the network. In exchange for verifying the transactions, they receive a reward for every block that they make, and the fees that people pay to make the transaction. So when a user stakes, they create their own masternode or give their DFI to a centralized entity to make and maintain the masternodes for them."),(0,n.kt)("p",null,"-- verify --"),(0,n.kt)("h4",{id:"advantages"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Investors are helping to operate the network and make the network more decentralized"),(0,n.kt)("li",{parentName:"ul"},"The only price volatility risk investors incur is in the price of DFI, unlike with liquidity mining, where investors have the price volatility of multiple coins"),(0,n.kt)("li",{parentName:"ul"},"When making a masternode, investors are given the option to freeze the masternode (they may not withdraw) for 5 years, to gain 1.5x the rewards, or 10 years, to receive 2x the normal rewards"),(0,n.kt)("li",{parentName:"ul"},"DFI staking has existed since the very beginning of DFI, and is the oldest form of gaining a return on an investor's investment")),(0,n.kt)("h4",{id:"disadvantages"},"Disadvantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Investors must stake (put) a minimum of 20,000 DFI, the minimum required to make a masternode. Otherwise, an investor will have to give, or delegate, their DFI to a centralized entity such as Cake"),(0,n.kt)("li",{parentName:"ul"},"The average APR (rewards per year) may be lower than with liquidity mining or other options"),(0,n.kt)("li",{parentName:"ul"},"Rewards are not guaranteed when staking, as it depends on the masternode's luck to find a block. Please read the masternodes section below to get a better understanding. The APY listed when creating your masternode may be lower or higher; the APY only shows the theoretical rewards that a staker will receive. This may not apply to centralized delegation."),(0,n.kt)("li",{parentName:"ul"},"APY decreases over time as block rewards decrease and more investors create masternodes and invest their capital, although this occurs to all methods of gaining a return on DFI."),(0,n.kt)("li",{parentName:"ul"},"If an investor is creating their own masternode, they can only compound their rewards when they gain another 20,000 DFI, meaning that they cannot simply compound once they get a block reward, as they are only allowed to invest 20,000 DFI at a time. This does not apply to centralized delegation.")),(0,n.kt)("h4",{id:"masternodes"},"Masternodes"),(0,n.kt)("p",null,"On DeFiChain, masternodes secure the network. Every masternode gets a couple attempts every second to find a new block (hashes per second). Every unfrozen masternode gets 2 attempts per second, every 5-year frozen masternode gets 3 hashes per second, and 10-year frozen masternodes get 4 hashes per second. The system automatically adjusts so that all of the masternodes together find approximately 1 block every 30 seconds."),(0,n.kt)("p",null,"So, if the total hash rate is 50 hashes per second, the network would adjust the difficulty of finding a block so it takes about 1,500 hashes to find a new block."),(0,n.kt)("p",null,"Staking is based on probability. Every hash has a small chance of being the right one, and masternodes get a couple of hashes every second. If you have an acceptable one, you get to write the next block. This means that there may be a masternode that gets lucky and their hashes are acceptable, while other masternodes are not having any luck at all getting the right hash. This is why above, it is written that rewards are not guaranteed. Your masternode may be lucky and receive lots of rewards in a period, and in the next it may receive close to nothing. The APY is just an estimate, just as flipping fifty coins does not mean you will get heads exactly 25 times. All fifty may be heads, all fifty could be tails."),(0,n.kt)("h5",{id:"advantages-1"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All rewards you receive go straight to investors' wallets. There is no centralized entity involved and they will not need to pay fees, and in this option they actually are helping the network become decentralized"),(0,n.kt)("li",{parentName:"ul"},"Non-custodial, they run your masternode, which can be done on their personal laptop. They control their keys, and no one needs to have control of them")),(0,n.kt)("h5",{id:"disadvantages-1"},"Disadvantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Staking becomes less profitable the less they leave your device open to write blocks. Cake leaves their servers on 24 hours a day, every day of the year, so rewards can be earned at any time"),(0,n.kt)("li",{parentName:"ul"},"20,000 DFI must be staked, and it can only be compounded when there is another 20,000 DFI available to create another masternode"),(0,n.kt)("li",{parentName:"ul"},"Rewards cannot be guaranteed; there may be periods where little rewards are found")),(0,n.kt)("h4",{id:"centralized-delegation"},"Centralized Delegation"),(0,n.kt)("p",null,"Many people do not have the capital available to create their own masternode, or cannot run it for long enough to keep it more profitable than simply delegating it. This is where entities like DFX.Swiss, Cake, and KuCoin come in. People can stake any amount of DFI and earn rewards on it, while also being able to compound it. However, these entities run the masternodes, and they are in control of how much rewards a staker receive and the keys to the staker's DFI."),(0,n.kt)("h5",{id:"advantages-2"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Users can "set it and forget it," meaning that they can stake your DFI and not have to check back on it, as rewards will continue to accrue in their account'),(0,n.kt)("li",{parentName:"ul"},"No minimum to stake")),(0,n.kt)("h5",{id:"disadvantages-2"},"Disadvantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users are making the network more centralized by allowing centralized entities to control your DFI"),(0,n.kt)("li",{parentName:"ul"},"Fees can be significant. Exchanges such as KuCoin can take more than half of the staking profits")),(0,n.kt)("h3",{id:"liquidity-mining"},"Liquidity Mining"),(0,n.kt)("p",null,'Liquidity Mining is the process of adding liquidity to a "liquidity pool." This was explained a little in previous sections, but everyone who wants to earn rewards/provide liquidity places their holdings here, and receives tokens to represent their share of the pool, and users can swap from one token to another.'),(0,n.kt)("p",null,"A simpler example of liquidity mining is listed below:"),(0,n.kt)("p",null,"Alice is looking for a return on her DFI. Bob is a crypto investor. Currently, she sees a pool called dBTC-DFI. dBTC-DFI means that the two assets in this pool are dBTC and DFI. Since Alice has no DFI, and she must deposit both dBTC and DFI at the rate of the pool (investors cannot simply add to one side of the pool, it will imbalance it), she has to swap half of her DFI to dBTC at the current rate of the pool. She then adds both the DFI and the dBTC to the pool, and she has a 1% share of the pool. In return, the pool (system) gives her liquidity pool tokens that show that she is entitled to, or owns, 1% of the pool, whatever that might be."),(0,n.kt)("p",null,"Bob is anticipating that dBTC will perform worse than DFI, and he has dBTC after atomic swapping his bitcoin. He would like to own DFI instead. Luckily for him, he can swap in the dBTC-DFI pool and receive DFI instead. Bob will give the liquidity pool his bitcoin and take an equivalent DFI amount minus a fee, which is divided proportionally to each liquidity provider. Bob is now happy with his DFI, and Alice is as well, as she received a commission on her funds."),(0,n.kt)("h4",{id:"advantages-3"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Help reduce slippage to users who are swapping. Slippage is the difference in tokens a swapper should get when swapping and the amount of tokens they actually receive"),(0,n.kt)("li",{parentName:"ul"},"APYs are higher than staking (as of 01 March 2022)"),(0,n.kt)("li",{parentName:"ul"},"Small price changes on one side of the pool is reduced due to the other side of the pool (risk is more diversified)")),(0,n.kt)("h4",{id:"disadvantages-3"},"Disadvantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/DeFiChain-Wiki/docs/auto/Impermanent_Loss"},"Impermanent Loss")," (also called IL, read the article for more information)"),(0,n.kt)("li",{parentName:"ul"},"Severe crashes in either token's price compared to the other will lead to significant losses")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Read the next tutorial ",(0,n.kt)("a",{parentName:"em",href:"/DeFiChain-Wiki/docs/auto/DeFiChain_Advanced_Tutorial"},"here"),".")))}u.isMDXComponent=!0}}]);