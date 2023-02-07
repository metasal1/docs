"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2225],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return t?n.createElement(u,o(o({ref:a},d),{},{components:t})):n.createElement(u,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89142:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=t(83117),r=(t(67294),t(3905));const i={description:"Provides a high-level overview of Candy Machines."},o="Overview",s={unversionedId:"programs/candy-machine/overview",id:"programs/candy-machine/overview",title:"Overview",description:"Provides a high-level overview of Candy Machines.",source:"@site/docs/01-programs/02-candy-machine/00-overview.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/overview",permalink:"/programs/candy-machine/overview",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/00-overview.md",tags:[],version:"current",lastUpdatedAt:1675793172,formattedLastUpdatedAt:"Feb 7, 2023",sidebarPosition:0,frontMatter:{description:"Provides a high-level overview of Candy Machines."},sidebar:"sidebar",previous:{title:"Candy Machine",permalink:"/programs/candy-machine/"},next:{title:"Getting Started",permalink:"/programs/candy-machine/getting-started"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"The Lifecycle of a Candy Machine",id:"the-lifecycle-of-a-candy-machine",level:2},{value:"Candy Guards",id:"candy-guards",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c};function h(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This documentation refers to the latest iteration of Candy Machine known as Candy Machine V3. If you\u2019re looking for Candy Machine V2, ",(0,r.kt)("a",{parentName:"p",href:"/deprecated/candy-machine-v2/"},"please refer to this documentation instead"),".")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Metaplex Protocol ",(0,r.kt)("strong",{parentName:"p"},"Candy Machine")," is the leading minting and distribution program for fair NFT collection launches on Solana. It allows creators to bring their digital assets on-chain in a secure and customisable way."),(0,r.kt)("p",null,"By September 2022, 78% of all NFTs in Solana were minted through Metaplex\u2019s Candy Machine. This includes most of the well known NFT projects in the Solana ecosystem."),(0,r.kt)("p",null,"Here are some of the features it offers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accept payments in SOL, NFTs or any Solana token."),(0,r.kt)("li",{parentName:"ul"},"Restrict your launch via start/end dates, mint limits, third party signers, etc."),(0,r.kt)("li",{parentName:"ul"},"Protect your launch against bots via configurable bot taxes and gatekeepers like Captchas."),(0,r.kt)("li",{parentName:"ul"},"Restrict minting to specific NFT/Token holders or to a curated list of wallets."),(0,r.kt)("li",{parentName:"ul"},"Create multiple minting groups with different sets of rules."),(0,r.kt)("li",{parentName:"ul"},"Reveal your NFTs after the launch whilst allowing your users to verify that information."),(0,r.kt)("li",{parentName:"ul"},"And so much more!")),(0,r.kt)("p",null,"Interested? Let\u2019s give you a little tour of how Candy Machines work!"),(0,r.kt)("h2",{id:"the-lifecycle-of-a-candy-machine"},"The Lifecycle of a Candy Machine"),(0,r.kt)("p",null,"Much like its name suggests, you can think of a Candy Machine as a temporary structure which is first loaded by creators and then unloaded by buyers."),(0,r.kt)("p",null,"Thus, the very first step is for the creator to create a new Candy Machine and configure it however they want."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Overview 1@2x.png",src:t(92568).Z+"#radius",width:"1692",height:"242"})),(0,r.kt)("p",null,"The created Candy Machine keeps track its own settings which helps us understand how all of its NFTs should be minted. For instance, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"creators")," parameter which will be assigned to all NFTs minted from this Candy Machine. We will see how to create and configure Candy Machines in more details, including some code examples, in the following pages: ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings"},"Candy Machine Settings")," and ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/managing-candy-machines"},"Managing Candy Machines"),"."),(0,r.kt)("p",null,"However, we still don\u2019t know which NFTs should be minted from that Candy Machine. In other words, the Candy Machine is not loaded. So our next step, is to insert items into the Candy Machine."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Overview 2@2x.png",src:t(15557).Z+"#radius",width:"1692",height:"506"})),(0,r.kt)("p",null,"Each item is composed of two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),": The name of the NFT."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"uri"),": The URI pointing to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.metaplex.com/programs/token-metadata/overview#a-json-standard"},"JSON metadata")," of the NFT. This implies that the JSON metadata has already been uploaded via either an on-chain (e.g. Arweave, IPFS) or off-chain (e.g. AWS, your own server) storage provider.")),(0,r.kt)("p",null,"All other parameters are shared between all NFTs and are therefore kept in the settings of the Candy Machine directly to avoid repetition. See ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/inserting-items"},"Inserting Items")," for more details."),(0,r.kt)("p",null,"Notice how, at this point, no real NFTs have been created yet. We are simply loading the Candy Machine with all the data it needs to ",(0,r.kt)("strong",{parentName:"p"},"create NFTs on-demand"),", at mint time. Which brings us to the next step."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Overview 3@2x.png",src:t(40906).Z+"#radius",width:"1692",height:"506"})),(0,r.kt)("p",null,"Once the Candy Machine is loaded and all pre-configured conditions are met, users can start minting NFTs from it. It\u2019s only at this point that an NFT is created on the Solana blockchain. Note that, before minting, some users may need to perform additional verification steps \u2014 such as doing a Captcha or sending a Merkle Proof. See ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/minting"},"Minting")," for more details."),(0,r.kt)("p",null,"Once all NFTs have been minted from a Candy Machine, it has served its purpose and can safely be deleted to free some storage space on the blockchain and claim some rent back. See ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/managing-candy-machines"},"Managing Candy Machines")," for more details."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Overview 4@2x.png",src:t(40221).Z+"#radius",width:"1692",height:"506"})),(0,r.kt)("h2",{id:"candy-guards"},"Candy Guards"),(0,r.kt)("p",null,"Now that we understand how Candy Machines work, let\u2019s dig into the various ways creators can protect and customise the mint process of their Candy Machine."),(0,r.kt)("p",null,"Creators can use what we call \u201c",(0,r.kt)("strong",{parentName:"p"},"Guards"),"\u201d to add various features to their Candy Machine. The Metaplex Candy Machine ships with an additional Solana Program called ",(0,r.kt)("strong",{parentName:"p"},"Candy Guard")," that ships with ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards"},(0,r.kt)("strong",{parentName:"a"},"a total of 16 default guards")),". By using an additional program, it allows advanced developers to fork the default Candy Guard program to create their own custom guards whilst still being able to rely on the main Candy Machine program."),(0,r.kt)("p",null,"Each guard can be enabled and configured at will so creators can pick and choose the features they need. Disabling all guards would be equivalent to allowing anyone to mint our NFTs for free at any time, which is likely not what we want. So let\u2019s have a look at a few guards to create a more realistic example."),(0,r.kt)("p",null,"Say a Candy Machine has the following guards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sol Payment"),": This guard ensures the minting wallet has to pay a configured amount of SOL to a configured destination wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Start Date"),": This guard ensures minting can only start after the configured time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mint Limit"),": This guard ensures each wallet cannot mint more than a configured amount."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bot Tax"),": This guard is a bit special. It doesn\u2019t guard against anything but it changes the behaviour of a failed mint to prevent bots from minting Candy Machines. When this guard is activated, if any other activated guard fails to validate the mint, it will charge a small configured amount of SOL to the wallet that tried to mint.")),(0,r.kt)("p",null,"What we end up with is a bot-protected Candy Machine that charges SOL, launches at a specific time and only allows a limited amount of mints per wallet. Here\u2019s a concrete example."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Overview 5@2x.png",src:t(49407).Z+"#radius",width:"1692",height:"570"})),(0,r.kt)("p",null,"As you can see, with 16 default guards and the ability to create custom guards, it enables creators to cherry-pick the features that matters to them and compose their perfect Candy Machine. This is such a powerful feature that we\u2019ve dedicated many pages to it. The best place to start to know more about guards is the ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards"},"Candy Guards")," page."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Whilst this provides a good overview of Candy Machines, there is a lot more to discover and learn about them. Here\u2019s what you can expect in the other pages of this Candy Machine documentation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/getting-started"},"Getting Started"),". Lists the various libraries and SDKs you can use to manage Candy Machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/candy-machine-settings"},"Candy Machine Settings"),". Explains Candy Machine settings in great detail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/managing-candy-machines"},"Managing Candy Machines"),". Explains how to manage Candy Machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/inserting-items"},"Inserting Items"),". Explains how to load items into Candy Machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/candy-guards"},"Candy Guards"),". Explains how guards work and how to enable them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/guard-groups"},"Guard Groups"),". Explains how to configure multiple groups of guards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/special-guard-instructions"},"Special Guard Instructions"),". Explains how to execute guard-specific instructions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/minting"},"Minting"),". Explains how to mint from Candy Machines and how to handle pre-mint requirements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards"},"Available Guards"),". Lists all available default guards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/how-to-guides"},"How-To Guides"),". Lists practical articles relevant to Candy Machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/conceptual-guides"},"Conceptual Guides"),". Lists theoretical articles relevant to Candy Machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/references"},"References"),". Lists API References relevant to Candy Machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/updates"},"Updates"),". Documents the latest changes.")))}h.isMDXComponent=!0},92568:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-Overview1-6554bb7c7ecdfba5e5dcb4a5d7fd10df.png"},15557:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-Overview2-65c0066403e49b3672ce739c19d42368.png"},40906:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-Overview3-c6cb3e531534929e7f0c34dbd2560bb0.png"},40221:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-Overview4-744c9041719bfb84d35af86aab5e302c.png"},49407:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-Overview5-03d49e3bbb6d7270deac73792ee72722.png"}}]);