"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,k=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={title:"Fullnode",description:"TODO - Short description of this page."},o=void 0,r={unversionedId:"auto/Fullnode",id:"auto/Fullnode",title:"Fullnode",description:"TODO - Short description of this page.",source:"@site/docs/auto/Fullnode.md",sourceDirName:"auto",slug:"/auto/Fullnode",permalink:"/DeFiChain-Wiki/docs/auto/Fullnode",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Fullnode.md",tags:[],version:"current",lastUpdatedAt:1663524427,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{title:"Fullnode",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Dual setup (App + Node)",permalink:"/DeFiChain-Wiki/docs/auto/Dual_setup_App_and_Node"},next:{title:"Criticism",permalink:"/DeFiChain-Wiki/docs/auto/Criticism"}},s={},p=[{value:"DeFiChain Fullnode",id:"defichain-fullnode",level:2},{value:"Requirements",id:"requirements",level:2},{value:"General",id:"general",level:3},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"List of Fullnodes",id:"list-of-fullnodes",level:2},{value:"Fullnode Installation",id:"fullnode-installation",level:2},{value:"Ubuntu 18.04/20.04",id:"ubuntu-18042004",level:4},{value:"Create Swapfile",id:"create-swapfile",level:5},{value:"Install Fullnode",id:"install-fullnode",level:5},{value:"Start Fullnode",id:"start-fullnode",level:5},{value:"Monitor Fullnode",id:"monitor-fullnode",level:5},{value:"Create and use backup for blockchain data",id:"create-and-use-backup-for-blockchain-data",level:2},{value:"Problem description",id:"problem-description",level:3},{value:"Create backup",id:"create-backup",level:3},{value:"Restore backup",id:"restore-backup",level:3},{value:"Blockchain Snapshot Service",id:"blockchain-snapshot-service",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Download sources",id:"download-sources",level:3},{value:"DeFiChain Foundation:",id:"defichain-foundation",level:4},{value:"mydefichain.com",id:"mydefichaincom",level:4},{value:"Installation guide",id:"installation-guide",level:3},{value:"Example commands for Linux",id:"example-commands-for-linux",level:4}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"defichain-fullnode"},"DeFiChain Fullnode"),(0,l.kt)("p",null,"To stabilize the network, it is possible to setup a DeFiChain Fullnode on a virtual or physical server with a fixed IP address. A Fullnode holds the whole blockchain without acting as a masternode (no Collateral required) and other Nodes and Wallets in the network can use it to synchronize. Everyone in the community can help make the network more stable with a public Fullnode."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed IP address"),(0,l.kt)("li",{parentName:"ul"},"Port forwarding enabled on router (Port 8555)"),(0,l.kt)("li",{parentName:"ul"},"24/7 online"),(0,l.kt)("li",{parentName:"ul"},"Stable internet connection (Upload)")),(0,l.kt)("h3",{id:"hardware"},"Hardware"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"100 GB free disk space (SSD recommended)"),(0,l.kt)("li",{parentName:"ul"},"2-4 vCPU"),(0,l.kt)("li",{parentName:"ul"},"4 GB Memory")),(0,l.kt)("h3",{id:"software"},"Software"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Debian 10, 64 Bit"),(0,l.kt)("li",{parentName:"ul"},"Ubuntu 18.04 or 20.04"),(0,l.kt)("li",{parentName:"ul"},"CentOS 8")),(0,l.kt)("p",null,"Ubuntu 16.04 is no longer supported with Version 1.7.0 and higher."),(0,l.kt)("h2",{id:"list-of-fullnodes"},"List of Fullnodes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"195.90.210.76:8555")," (Germany, Berlin)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"85.214.187.210:8555")," (Germany, Berlin)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"85.214.55.116:8555")," (Germany, Berlin)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"45.157.177.82:8555")," (Germany, Karlsruhe)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"185.244.194.174:8555")," (Germany, Karlsruhe)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"202.61.246.71:8555")," (Germany, Karlsruhe)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"24.134.79.25:8555")," (Germany, W\xfcrzburg)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://status.defichain-masternode.com/"},"77.56.65.5:8555")," (Switzerland, Greifensee)"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,"to be continued..."),(0,l.kt)("h2",{id:"fullnode-installation"},"Fullnode Installation"),(0,l.kt)("h4",{id:"ubuntu-18042004"},"Ubuntu 18.04/20.04"),(0,l.kt)("h5",{id:"create-swapfile"},"Create Swapfile"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"recommended for Systems less then 4 GB")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo fallocate -l 4G /swapfile")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo chmod 600 /swapfile")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo mkswap /swapfile")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo swapon /swapfile")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Check the swapfile")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo swapon --show")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"make the Swapfile permanent")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo cp /etc/fstab /etc/fstab.bak")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Optimization")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo sysctl vm.swappiness=10")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/sysctl.conf")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vm.swappiness=10")),(0,l.kt)("h5",{id:"install-fullnode"},"Install Fullnode"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Make sure your download link always starts with https and not with http. Even if you can download the binaries over http you should never do so.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/ain/releases/latest"},"Latest Version")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wget https://github.com/DeFiCh/ain/releases/download/v2.11.1/defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"check your downloaded package")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wget https://github.com/DeFiCh/ain/releases/download/v2.11.1/defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz.SHA256")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sha256sum -c defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz.SHA256")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"unzip package")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tar -xvzf defichain-2.11.1-x86_64-pc-linux-gnu.tar.gz")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"copy to directory")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mkdir ~/.defi")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cp ./defichain-2.11.1/bin/* ~/.defi")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WARNING"),(0,l.kt)("br",{parentName:"p"}),"\n","This will work but you should avoid placing executables in ~/.defi because this is where most of you will be extracting your snapshots into. If you don't selectively pick only those files you need from your snapshot every time you could unknowningly replace key files that could cause your full node to be compromised and could even cause your funds to be stolen. If you keep important files out of your data directory they can not be overwritten by a malicious snapshot."),(0,l.kt)("h5",{id:"start-fullnode"},"Start Fullnode"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Start Fullnode")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"~/.defi/defid -daemon")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"When you upgrade from a previous version, please reindex the whole blockchain data")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"~/.defi/defid -reindex -daemon")),(0,l.kt)("h5",{id:"monitor-fullnode"},"Monitor Fullnode"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Check Blockcount")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".defi/defi-cli getblockcount")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Start defid after reboot")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo crontab -e")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"* * * * * pidof defid || ~/.defi/defid")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Is your node online?")),(0,l.kt)("p",null,"After the node is completely synchronized, check the number of connections with the command below."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"~/.defi/defi-cli getconnectioncount")),(0,l.kt)("p",null,"If the number of connections is 8 or less, only outbound connections are active. Check your firewall or router to see whether your full node can be reached from the Internet via port 8555. More than 8 connections mean that incoming connections are also possible and exist."),(0,l.kt)("h2",{id:"create-and-use-backup-for-blockchain-data"},"Create and use backup for blockchain data"),(0,l.kt)("h3",{id:"problem-description"},"Problem description"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Corrupted block database",src:n(14).Z,width:"600",height:"299"})),(0,l.kt)("p",null,"Some users report that this error message occurs again and again. Afterwards, the entire blockchain has to be reloaded, which is very tedious. The cause of this problem lies in the incorrect termination of the DeFi app. It is important that the app is always shut down correctly."),(0,l.kt)("p",null,"As a remedy, it is recommended to work with backup solutions. Then the entire blockchain does not have to be reloaded, but only the blocks after creating the backup."),(0,l.kt)("h3",{id:"create-backup"},"Create backup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Close the DeFi app"),(0,l.kt)("li",{parentName:"ol"},"Go to the folder with the blockchain data On Windows: ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\%username%\\AppData\\Roaming\\DeFi Blockchain")," On Mac: ",(0,l.kt)("inlineCode",{parentName:"li"},"/Users/%username%/Library/Application Support/DeFi/")," On Linux: ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.defi")),(0,l.kt)("li",{parentName:"ol"},"Copy the following 3 folders to another location. This is your blockchain backup. ",(0,l.kt)("inlineCode",{parentName:"li"},"blocks")," ",(0,l.kt)("inlineCode",{parentName:"li"},"enhancedcs")," ",(0,l.kt)("inlineCode",{parentName:"li"},"chainstate")),(0,l.kt)("li",{parentName:"ol"},"The backup is thus created.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"enhancedcs blocks chainstate",src:n(8727).Z,width:"830",height:"588"})),(0,l.kt)("h3",{id:"restore-backup"},"Restore backup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Launch the DeFi app and make sure the app has started syncing."),(0,l.kt)("li",{parentName:"ol"},"Exit the DeFi App"),(0,l.kt)("li",{parentName:"ol"},"Go to the folder with the blockchain data On Windows: ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\%username%\\AppData\\Roaming\\DeFi Blockchain")," On Mac: ",(0,l.kt)("inlineCode",{parentName:"li"},"/Users/%username%/Library/Application Support/DeFi/")," On Linux: ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.defi")),(0,l.kt)("li",{parentName:"ol"},"Delete the following folders ",(0,l.kt)("inlineCode",{parentName:"li"},"blocks")," ",(0,l.kt)("inlineCode",{parentName:"li"},"enhancedcs")," ",(0,l.kt)("inlineCode",{parentName:"li"},"chainstate")),(0,l.kt)("li",{parentName:"ol"},"Copy the 3 folders from your backup to this folder"),(0,l.kt)("li",{parentName:"ol"},"Restart the computer"),(0,l.kt)("li",{parentName:"ol"},"Launch the DeFi App"),(0,l.kt)("li",{parentName:"ol"},"The app should now continue at the state of the last backup.")),(0,l.kt)("h2",{id:"blockchain-snapshot-service"},"Blockchain Snapshot Service"),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"A snapshot helps in cases of corrupted blocks not to re-index the blockchain again. You will start from a much closer block to the most recent one. So, usage of a blockchain snapshot saves time and nerves not to verify each block again and again and again. It can be stored and installed locally, so that in case of issues, you can sync from that point on."),(0,l.kt)("h3",{id:"download-sources"},"Download sources"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Make sure your download link always starts with https and not with http. Even if you can download the index.txt files or snapshots over http you should never do so. ")),(0,l.kt)("h4",{id:"defichain-foundation"},"DeFiChain Foundation:"),(0,l.kt)("p",null,"Asia:\n",(0,l.kt)("a",{parentName:"p",href:"https://defi-snapshots.s3-ap-southeast-1.amazonaws.com/snapshot-mainnet-1578261.zip"},"https://defi-snapshots.s3-ap-southeast-1.amazonaws.com/snapshot-mainnet-1578261.zip")),(0,l.kt)("p",null,"Europe:\n",(0,l.kt)("a",{parentName:"p",href:"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1894199.zip"},"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1894199.zip")),(0,l.kt)("p",null,"To get the most recent snapshot:"),(0,l.kt)("p",null,"Manually browse to\n",(0,l.kt)("a",{parentName:"p",href:"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/index.txt"},"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/index.txt")),(0,l.kt)("p",null,"Extract last line, it's the most recent snapshot."),(0,l.kt)("p",null,"Append the filename to the base URL:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/"},"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/")),(0,l.kt)("p",null,"Example of snapshot URL:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1430890.zip"},"<https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1572520.zip>")),(0,l.kt)("h4",{id:"mydefichaincom"},"mydefichain.com"),(0,l.kt)("p",null,"List all available Snapshots:"),(0,l.kt)("p",null,"Mainnet: ",(0,l.kt)("a",{parentName:"p",href:"https://snapshot-de.mydefichain.com/index.txt"},"https://snapshot-de.mydefichain.com/index.txt")),(0,l.kt)("p",null,"Testnet: ",(0,l.kt)("a",{parentName:"p",href:"https://testnet.snapshot-de.mydefichain.com/index.txt"},"https://testnet.snapshot-de.mydefichain.com/index.txt")),(0,l.kt)("p",null,"Download latest Snapshots (ZIP):"),(0,l.kt)("p",null,"Mainnet: ",(0,l.kt)("a",{parentName:"p",href:"https://snapshot-de.mydefichain.com/latest/"},"https://snapshot-de.mydefichain.com/latest/")),(0,l.kt)("p",null,"Testnet: ",(0,l.kt)("a",{parentName:"p",href:"https://testnet.snapshot-de.mydefichain.com/latest/"},"https://testnet.snapshot-de.mydefichain.com/latest/")),(0,l.kt)("h3",{id:"installation-guide"},"Installation guide"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",{class:"header"},(0,l.kt)("th",null,(0,l.kt)("p",null,"1. Backup your wallet")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",{class:"odd"},(0,l.kt)("td",null,(0,l.kt)("p",null,"Before doing anything else, always take a backup from your wallet!"),(0,l.kt)("ol",null,(0,l.kt)("li",null,"In case your DeFi app is running, please close it gracefully."),(0,l.kt)("li",null,"Locate the DeFi Blockchain data directory:",(0,l.kt)("ol",null,(0,l.kt)("li",null,"Windows: C:\\Users\\%username%\\AppData\\Roaming\\DeFi Blockchain"),(0,l.kt)("li",null,"Linux: ~/.defi"),(0,l.kt)("li",null,"Mac OS: /Users/%username%/Library/Application Support/DeFi/"))),(0,l.kt)("li",null,"Make a copy from the directory: wallets")))))),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",{class:"header"},(0,l.kt)("th",null,(0,l.kt)("p",null,"2. Remove blockchain files")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",{class:"odd"},(0,l.kt)("td",null,(0,l.kt)("p",null,"We are still in the DeFi Blockchain data directory from step 1."),(0,l.kt)("ol",null,(0,l.kt)("li",null,"Windows: Select and delete all files and directories, excepting: wallets"),(0,l.kt)("li",null,"Linux: Delete all files and directories, excepting: wallets"),(0,l.kt)("li",null,"Mac OS: Delete all files and directories, excepting: wallets")))))),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",{class:"header"},(0,l.kt)("th",null,(0,l.kt)("p",null,"3. Unzip blockchain archive")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",{class:"odd"},(0,l.kt)("td",null,(0,l.kt)("ol",null,(0,l.kt)("li",null,"Copy the downloaded blockchain archive to the DeFi Blockchain data directory."),(0,l.kt)("li",null,"Unzip the archive and check that it is not been asked to replace any existing files. In case check steps before."),(0,l.kt)("li",null,"You will see, that removed directories been created again.")))))),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",{class:"header"},(0,l.kt)("th",null,(0,l.kt)("p",null,"4. Start DeFi app")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",{class:"odd"},(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("strong",null,"OPTION 1")," - New wallet or transaction history is not important"),(0,l.kt)("ol",null,(0,l.kt)("li",null,"You can start DeFi app directly and you will see that starting block for sync is close to the last block."),(0,l.kt)("li",null,"Happy DEXing :)")),(0,l.kt)("p",null,(0,l.kt)("strong",null,"OPTION 2")," - Re-Index to get full transaction history back"),(0,l.kt)("ol",null,(0,l.kt)("li",null,'If you already have a wallet from previous installation, you need to perform a "reindex" action by selecting the according option in the settings menu of the app OR you can start your local node headless on the command line with ',(0,l.kt)("code",null,"defid.exe -reindex"),". Defid is located within your apps installation directory."),(0,l.kt)("li",null,"This will take a while. Take a drink and relax until it is finished."),(0,l.kt)("li",null,"Happy DEXing :)")))))),(0,l.kt)("h4",{id:"example-commands-for-linux"},"Example commands for Linux"),(0,l.kt)("p",null,"Just replace the snapshot file with the current version from above."),(0,l.kt)("p",null,"The following steps assume that defid was installed under ","~","/.defi and you're logged in with the user created to run defid -",">"," adjust it in case your environment is different!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#\xa0create\xa0a\xa0new\xa0temporary\xa0folder\xa0for\xa0the\xa0snapshot\xa0in\xa0the\xa0current\xa0user's\xa0home\xa0folder\ncd\xa0~\nmkdir\xa0snapshot\ncd\xa0snapshot\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#\xa0download\xa0the\xa0snapshot\xa0& unzip\xa0it\xa0if\xa0needed\xa0install\xa0the\xa0unzip\xa0package\xa0first\xa0via\xa0your\xa0package\xa0manager\xa0like\xa0apt\xa0etc.)\nwget\xa0https://defi-snapshots-europe.s3.eu-central-1.amazonaws.com/snapshot-mainnet-1430890.zip\nunzip\xa0snapshot-mainnet-1430890.zip\n\n#\xa0remove\xa0the\xa0snapshot\xa0archive\xa0to\xa0save\xa0space\nrm\xa0snapshot-mainnet-1430890.zip\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#\xa0only\xa0if\xa0you\'re\xa0using\xa0crontab\xa0to\xa0restart\xa0defid\xa0automatically:\xa0comment\xa0the\xa0corresponding\xa0line\xa0add\xa0a\xa0"#"\xa0in\xa0front\xa0of\xa0it)\n#\xa0otherwise\xa0the\xa0node\xa0will\xa0restart\xa0again\xa0and\xa0you\xa0can\xa0not\xa0copy\xa0all\xa0directories\xa0successfully\ncrontab\xa0-e\n\n#\xa0stop\xa0defid\n~/.defi/defi-cli\xa0stop\n\n#\xa0remove\xa0old\xa0blockchain\xa0data\xa0(be\xa0very\xa0careful\xa0with\xa0that\xa0command!)\nrm\xa0-rf\xa0~/.defi/anchors\xa0~/.defi/blocks\xa0~/.defi/burn\xa0~/.defi/chainstate\xa0~/.defi/enhancedcs\xa0~/.defi/history\xa0~/.defi/indexes\xa0~/.defi/spv\n\n#\xa0move\xa0snapshot\xa0files\xa0to\xa0the\xa0folder\xa0where\xa0defid\xa0can\xa0find\xa0them\xa0(usually\xa0~/.defi)\nmv\xa0./*\xa0~/.defi/\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#\xa0start\xa0defid:\xa0choose\xa0option\xa0A\xa0or\xa0B\xa0but\xa0not\xa0both!\n#\xa0option\xa0A:\xa0only\xa0if\xa0you\xa0ARE\xa0using\xa0crontab:\xa0uncomment\xa0the\xa0corresponding\xa0line\nremove\xa0"#"\xa0from\xa0the\xa0beginning\xa0of\xa0the\xa0line)\n\ncrontab\xa0-e\n\n#\xa0option\xa0B:\xa0only\xa0if\xa0you\xa0do\xa0NOT\xa0use\xa0crontab\xa0->\xa0you\xa0have\xa0to\xa0start\xa0defid\xa0manually\n#\xa0otherwise\xa0cron\xa0will\xa0periodically\xa0check\xa0and\xa0start\xa0defid\n~/.defi/defid\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#\xa0check\xa0that\xa0defid\xa0is\xa0running\xa0again\xa0&\xa0check\xa0that\xa0everything\xa0is\xa0working\ntail\xa0-fn50\xa0~/.defi/debug.log\n")))}u.isMDXComponent=!0},14:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fullnode_EN_1-31de35532d0fd6c9a57cefe766a56fad.jpg"},8727:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fullnode_EN_2-0af2863e36e125fb00632ebfffe4778d.png"}}]);