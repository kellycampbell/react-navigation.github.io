"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[85730],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[f]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),a=r(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(83117),a=r(67294),i=r(86010),o=r(12466),u=r(16550),l=r(91980),s=r(67392),c=r(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,i=(0,u.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function g(e){var t,r,n,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,f=d(e),g=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),v=g[0],b=g[1],h=m({queryString:l,groupId:s}),y=h[0],w=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],i=r[1],[n,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=k[0],E=k[1],O=function(){var e=null!=y?y:x;return p({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){O&&b(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),E(e)}),[w,E,f]),tabValues:f}}var v=r(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],f=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(f(t),l(n))},p=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;r=null!=(i=c[o])?i:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var i=r.find((function(e){return e.props.value===n}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},29295:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=(r(74866),r(85162),["components"]),u={id:"migration-guides",title:"Migration Guides",sidebar_label:"Migration Guides"},l=void 0,s={unversionedId:"migration-guides",id:"version-6.x/migration-guides",title:"Migration Guides",description:"This page contains links to pages that will guide you through the process of upgrading React Navigation:",source:"@site/versioned_docs/version-6.x/migration-guides.md",sourceDirName:".",slug:"/migration-guides",permalink:"/docs/migration-guides",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/migration-guides.md",tags:[],version:"6.x",frontMatter:{id:"migration-guides",title:"Migration Guides",sidebar_label:"Migration Guides"},sidebar:"version-6.x/docs",previous:{title:"Custom navigators",permalink:"/docs/custom-navigators"},next:{title:"Navigation Solutions and Community Libraries",permalink:"/docs/navigation-solutions-and-community-libraries"}},c={},f=[],d={toc:f},p="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page contains links to pages that will guide you through the process of upgrading React Navigation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/upgrading-from-5.x"},"Upgrading from 5.x to 6.x")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/5.x/upgrading-from-4.x"},"Upgrading from 4.x to 5.x")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.x/upgrading-from-3.x"},"Upgrading from 3.x to 4.x"))),(0,i.kt)("p",null,"If you're upgrading from a version older by multiple major releases, please refer to the migration guides of all the versions in between when upgrading. We recommend configuring TypeScript for your React Navigation setup to make it easier to upgrade as you'll get type errors."))}m.isMDXComponent=!0}}]);