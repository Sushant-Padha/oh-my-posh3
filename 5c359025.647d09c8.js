(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(99)),l={id:"powershell",title:"PowerShell",sidebar_label:"PowerShell"},c={unversionedId:"powershell",id:"powershell",isDocsHomePage:!1,title:"PowerShell",description:"A package that includes useful helper functions to install and configure Oh my Posh.",source:"@site/docs/package-powershell.mdx",slug:"/powershell",permalink:"/docs/powershell",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/package-powershell.mdx",version:"current",sidebar_label:"PowerShell",sidebar:"docs",previous:{title:"Themes",permalink:"/docs/themes"},next:{title:"Scoop",permalink:"/docs/scoop"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Show all themes",id:"show-all-themes",children:[]},{value:"Set the prompt",id:"set-the-prompt",children:[]},{value:"Create your own theme",id:"create-your-own-theme",children:[]}]}],s={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A package that includes useful helper functions to install and configure Oh my Posh."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Font icons")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For maximum enjoyment, make sure to ",Object(o.b)("strong",{parentName:"p"},"install")," and ",Object(o.b)("strong",{parentName:"p"},"configure")," your terminal to use a powerline enabled font.\nThe fonts we use are patched by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nerdfonts.com/"}),"Nerd Fonts"),", which offer a maximum of icons you can use to configure your prompt.\nTo easily find the icon you want, have a look at their ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nerdfonts.com/cheat-sheet"}),"cheat sheet"),"."))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Install-Module oh-my-posh -Scope CurrentUser -AllowPrerelease\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"show-all-themes"},"Show all themes"),Object(o.b)("p",null,"To display every available theme in the current directory, use the following\ncommand."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Get-PoshThemes\n")),Object(o.b)("h3",{id:"set-the-prompt"},"Set the prompt"),Object(o.b)("p",null,"Autocompletion is available so it will loop through all available themes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Set-PoshPrompt -Theme jandedobbeleer\n")),Object(o.b)("h3",{id:"create-your-own-theme"},"Create your own theme"),Object(o.b)("p",null,"You can output the current theme to its ",Object(o.b)("inlineCode",{parentName:"p"},"JSON")," representation which can be used to tweak and store as your custom theme."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Write-PoshTheme\n")),Object(o.b)("p",null,"Due to a bug in PowerShell, if you want to use ",Object(o.b)("inlineCode",{parentName:"p"},"Out-File")," directly to write the current theme to a new file, use the ",Object(o.b)("inlineCode",{parentName:"p"},"oem"),"\nencoding to ensure the symbols are outputted correctly."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Write-PoshTheme | Out-File -FilePath ~/.mytheme.omp.json -Encoding oem\n")),Object(o.b)("p",null,"Once you're done editing, adjust your ",Object(o.b)("inlineCode",{parentName:"p"},"$PROFILE")," to use your newly created theme."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Set-PoshPrompt -Theme ~/.mytheme.omp.json\n")))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);