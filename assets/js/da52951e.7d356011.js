"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1046],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(83117),i=(n(67294),n(3905));const a={},o="Introduction",s={unversionedId:"deprecated/candy-machine-js-cli/introduction",id:"deprecated/candy-machine-js-cli/introduction",title:"Introduction",description:"The second iteration of the well-known Candy Machine, a fully on-chain generative NFT distribution program, provides many improvements over its predecessor. The new version also allows you to create a whole new set of distribution scenarios and offers protection from bot attacks, while providing the same easy-to-use experience.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/introduction.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/introduction",permalink:"/deprecated/candy-machine-js-cli/introduction",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/introduction.md",tags:[],version:"current",lastUpdatedAt:1675793172,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{},sidebar:"sidebar",previous:{title:"Deprecated",permalink:"/deprecated/"},next:{title:"1. Getting Started",permalink:"/deprecated/candy-machine-js-cli/getting-started"}},c={},l=[{value:"New Features",id:"new-features",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The second iteration of the well-known Candy Machine, a fully on-chain generative NFT distribution program, provides many improvements over its predecessor. The new version also allows you to create a whole new set of distribution scenarios and offers protection from bot attacks, while providing the same easy-to-use experience."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Throughout this guide, we will refer to the Candy Machine v1 as ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv1")," and the newer Candy Machine v2 as ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2"))),(0,i.kt)("h2",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Unpredictable mint index:"))," In the ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv1")," it is possible to estimate what item would be minted, since the mint happens in a sequential order. This created the opportunity to be able to choose which item to mint, given that all information about the items is available on-chain. Although this is not straightforward, it gives an advantage to a select few."),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," eliminates this possibility by using an unpredictable (sort of random) mint index, which it is not possible to determine in advance - a guarantee of a level playing field when it comes to minting rarer items.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Whitelist:"))," You now have the possibility to create several different configurations for whitelists. You can allow whitelist users to mint before the start date, mint at a discounted price, or restrict the mint entirely to only whitelist users. Any SPL Token can be used to create whitelists, and you choose how they are distributed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Captcha Settings:"))," Integration with captcha to limit the mint to humans - sorry, bots no more!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Larger collections and hide-and-reveal drops:"))," It is possible to create super large and hide-and-reveal drops by specifying a single hash, which is used by all mints. While the hash is the same across all mints, the name of each item is specified with a unique number, allowing an off-chain process to later update the metadata with the actual item."))),(0,i.kt)("p",null,"There are also improvements to how you configure the Candy Machine and new settings that allow the definition of rules to pause the mint at a certain point. On top of it, every configuration value can be updated at any point."))}d.isMDXComponent=!0}}]);