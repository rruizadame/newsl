"use strict";(self.webpackChunkmicro_frontend=self.webpackChunkmicro_frontend||[]).push([[624],{6624:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(4942),a=r(8152),o=r(6759),i=r.n(o),l=r(3779),m=r(9602),c=r(676),s=r(680),u=r.n(s),p=r(5697),d=r.n(p);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(3655);var g=function(e){var t=e.items,r=e.apiKeyNumber,n=(0,o.useState)(null),s=(0,a.Z)(n,2),p=s[0],d=s[1];(0,o.useEffect)((function(){f()}),[]);var f=function(){var e=(0,l.d)(t,r);d([e[0]])};return(0,m.ZP)(c.Paper)((function(e){var t=e.theme;return y(y({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),i().createElement(c.Box,{style:{padding:"0.5rem"}},i().createElement(c.Grid,{container:!0,width:"100%",className:"mainContainer",spacing:2},p&&p.map((function(e){return i().createElement(i().Fragment,null,i().createElement(c.Grid,{item:!0,key:e.urlToImage,xs:12,sm:12,md:4,lg:4,xl:4,style:{minWidth:"10rem"}},i().createElement(c.Link,{target:"_blank",href:e.url},i().createElement("img",{className:"imgResponsive",src:"".concat(e.urlToImage),srcSet:"".concat(e.urlToImage),alt:e.title,loading:"lazy"}))),i().createElement(c.Grid,{key:"news",item:!0,xs:12,sm:12,md:8,lg:8,xl:8},i().createElement(c.Grid,{item:!0,xs:12,style:{marginBottom:"2rem"}},i().createElement(c.Link,{target:"_blank",underline:"none",href:e.url},i().createElement(c.Typography,{variant:"h5",color:"#1565c0",component:"div",gutterBottom:!0},e.title))),i().createElement(c.Grid,{item:!0,xs:12},i().createElement(c.Typography,{variant:"subtitle1",className:"newsContentText",component:"div",gutterBottom:!0},e.content)),i().createElement(c.Grid,{item:!0,xs:12,className:"newsFooter"},i().createElement(c.Grid,{item:!0,xs:12,sm:12,md:6,xl:2},i().createElement(c.Chip,{style:{minWidth:"5rem",maxWidth:"18rem"},avatar:i().createElement(c.Avatar,null,e.author?e.author[0]:"U"),color:"primary",variant:"outlined",label:e.author?e.author:"Unknown"})),i().createElement(c.Grid,{item:!0,style:{display:"flex",justifyContent:"flex-end",alignItems:"flex-end"},xs:12,sm:12,md:6,xl:4},i().createElement(c.Typography,{variant:"caption",component:"div",gutterBottom:!0},u()(new Date(e.publishedAt)).format("MMMM Do YYYY, h:mm:ss a"))))))}))))};g.propTypes={items:d().string,apiKeyNumber:d().number.isRequired},g.propDefault={items:"CRIPTOCOIN"};const b=g}}]);