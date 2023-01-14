"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[l,c]=(0,a.useState)(t),p=l||i;return a.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>c(!l)},a.createElement("h3",null,a.createElement(s,{opened:l}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},p&&o))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},l.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},s.propTypes={opened:i().bool}},65413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Restricts the mint to holders of a specified collection."},l="NFT Gate",s={unversionedId:"programs/candy-machine/available-guards/nft-gate",id:"programs/candy-machine/available-guards/nft-gate",title:"NFT Gate",description:"Restricts the mint to holders of a specified collection.",source:"@site/docs/01-programs/02-candy-machine/09-available-guards/10-nft-gate.md",sourceDirName:"01-programs/02-candy-machine/09-available-guards",slug:"/programs/candy-machine/available-guards/nft-gate",permalink:"/programs/candy-machine/available-guards/nft-gate",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-available-guards/10-nft-gate.md",tags:[],version:"current",lastUpdatedAt:1673690866,formattedLastUpdatedAt:"Jan 14, 2023",sidebarPosition:10,frontMatter:{description:"Restricts the mint to holders of a specified collection."},sidebar:"sidebar",previous:{title:"NFT Burn",permalink:"/programs/candy-machine/available-guards/nft-burn"},next:{title:"NFT Payment",permalink:"/programs/candy-machine/available-guards/nft-payment"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nft-gate"},"NFT Gate"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"NFT Gate")," guard restricts minting to holders of a specified NFT collection."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsNFTGate.png",src:n(61866).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The NFT Gate guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required Collection"),": The mint address of the required NFT Collection. The NFT we provide as proof when minting must be part of this collection.")),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the NFT Gate guard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    nftGate: {\n      requiredCollection: requiredCollectionNft.address,\n    },\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.NftGateGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,"The NFT Gate guard contains the following Mint Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mint"),": The mint address of the NFT to provide as proof that the payer owns an NFT from the required collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token Account")," (optional): You may optionally provide the token account linking the NFT with its owner explicitly. By default, the associated token account of the payer will be used.")),(0,r.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-guard#nftgate"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"When minting via the JS SDK, simply provide the mint address of the NFT to use as proof of ownership via the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," attribute like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  // ...\n  settings: {\n    nftGate: {\n      mint: nftFromRequiredCollection.address,\n    },\n  }\n});\n")),(0,r.kt)("p",null,"You may also provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAccount")," attribute explicitly should the NFT not use an associated token account."),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.NftGateGuardMintSettings.html"},"Mint Settings"),".")))),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The NFT Gate guard does not support the route instruction.")))}d.isMDXComponent=!0},61866:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsNFTGate-0b8f5a81ae632b59418c3e896c3dc47e.png"}}]);