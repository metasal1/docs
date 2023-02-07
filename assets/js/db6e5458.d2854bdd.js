"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1805],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return m}});var a=n(83117),i=(n(67294),n(3905));const r={title:"v1.1"},l="Version 1.1",o={unversionedId:"programs/token-metadata/changelog/v1.1",id:"programs/token-metadata/changelog/v1.1",title:"v1.1",description:"New Features",source:"@site/docs/01-programs/01-token-metadata/08-changelog/03-v1.1.md",sourceDirName:"01-programs/01-token-metadata/08-changelog",slug:"/programs/token-metadata/changelog/v1.1",permalink:"/programs/token-metadata/changelog/v1.1",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/08-changelog/03-v1.1.md",tags:[],version:"current",lastUpdatedAt:1675793172,formattedLastUpdatedAt:"Feb 7, 2023",sidebarPosition:3,frontMatter:{title:"v1.1"},sidebar:"sidebar",previous:{title:"v1.2",permalink:"/programs/token-metadata/changelog/v1.2"},next:{title:"v1.0",permalink:"/programs/token-metadata/changelog/v1.0"}},p={},m=[{value:"New Features",id:"new-features",level:2},{value:"New Instructions",id:"new-instructions",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Removals",id:"removals",level:2}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"version-11"},"Version 1.1"),(0,i.kt)("h2",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../certified-collections"},"On-Chain Collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../token-standard"},"Token Standards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../using-nfts"},"Token Uses"))),(0,i.kt)("h2",{id:"new-instructions"},"New Instructions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateMetadataAccountV2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Same as ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateMetadataAccount"),", but supports ",(0,i.kt)("inlineCode",{parentName:"li"},"Collections"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Use")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenStandard")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UpdateMetadataAccountV2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Same as ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdateMetadataAccount"),", but supports ",(0,i.kt)("inlineCode",{parentName:"li"},"Collections"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Use")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenStandard")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateMasterEditionV3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Same as ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateMasterEdition"),", but supports ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenStandard")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VerifyCollection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows a collection ",(0,i.kt)("inlineCode",{parentName:"li"},"verified")," flag to become ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," on an NFT to represent a Certified Collection. Essentially this officially adds to a Collection."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnVerifyCollection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows a collection ",(0,i.kt)("inlineCode",{parentName:"li"},"verified")," flag to become ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," on an NFT to represent a Certified Collection. Essentially this officially removes from a Collection."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Utilize"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Allows a "limited use" semantic. Can be used to represent a ticket, pass, game item or physical item redemption.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ApproveUseAuthority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Approves an authority to call ",(0,i.kt)("inlineCode",{parentName:"li"},"Utilize")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RevokeUseAuthority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Removes a granted authority to call ",(0,i.kt)("inlineCode",{parentName:"li"},"Utilize")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ApproveCollectionAuthority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Approves an authority to call ",(0,i.kt)("inlineCode",{parentName:"li"},"VerifyCollection")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RevokeCollectionAuthority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Removes a granted authority to call ",(0,i.kt)("inlineCode",{parentName:"li"},"VerifyCollection"))))),(0,i.kt)("h2",{id:"deprecations"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Deprecation (not removal) of "collection" and "creators" field in the token metadata JSON'),(0,i.kt)("li",{parentName:"ul"},"The following v1 instructions now show a deprecation warning when executed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateMetadataAccount")," - ",(0,i.kt)("em",{parentName:"li"},"please use ",(0,i.kt)("inlineCode",{parentName:"em"},"CreateMetadataAccountV2")," instead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UpdateMetadataAccount")," - ",(0,i.kt)("em",{parentName:"li"},"please use ",(0,i.kt)("inlineCode",{parentName:"em"},"UpdateMetadataAccountV2")," instead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateMasterEdition")," - ",(0,i.kt)("em",{parentName:"li"},"please use ",(0,i.kt)("inlineCode",{parentName:"em"},"CreateMasterEditionV3")," instead"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It may be confusing that there is no ",(0,i.kt)("inlineCode",{parentName:"li"},"V2")," but for historical reasons this instruction actually was ",(0,i.kt)("inlineCode",{parentName:"li"},"V2"),". The V1 had its name changed in a backward incompatible way.")))))),(0,i.kt)("h2",{id:"removals"},"Removals"),(0,i.kt)("p",null,"Removal of previously deprecated instructions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DeprecatedCreateMasterEdition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DeprecatedCreateReservationList")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DeprecatedMintPrintingTokensViaToken")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DeprecatedMintPrintingTokens"))))}s.isMDXComponent=!0}}]);