(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[15],{110:function(e,t,n){"use strict";n.r(t);t.default=function(e,t){}},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(4),n(656);var c=n(18);function r(e){var t=e.lang;return Object(c.jsxs)("div",{className:"m-footer",children:[Object(c.jsxs)("div",{className:"footer-link",children:[Object(c.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-envelope"})})}),Object(c.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://deri-protocol.medium.com",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-medium"})})}),Object(c.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://twitter.com/DeriProtocol",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-twitter"})})}),Object(c.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://github.com/deri-finance",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-github"})})}),Object(c.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-paper-plane"})})}),Object(c.jsx)("a",{rel:"noreferrer",className:"iocn_a",children:Object(c.jsxs)("div",{className:"circle",children:[Object(c.jsx)("div",{className:"wechat",children:Object(c.jsx)("div",{className:"down_box"})}),Object(c.jsx)("div",{className:"fa fa-wechat"})]})})]}),Object(c.jsxs)("div",{className:"banquan",children:["\xa9 2021 ",t["deri-protocol"]]})]})}},656:function(e,t,n){},681:function(e,t,n){},682:function(e,t,n){},683:function(e,t,n){},684:function(e,t,n){"use strict";function c(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),i=c(n(4)),a=n(45);n(56),n(110);var s=c(n(39));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function j(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],0<=t.indexOf(n)||(r[n]=e[n]);return r}var u=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))||this).history=a.createBrowserHistory(t.props),t}return l(t,e),t.prototype.render=function(){return i.createElement(r.Router,{history:this.history,children:this.props.children})},t}(i.Component),b=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))||this).history=a.createHashHistory(t.props),t}return l(t,e),t.prototype.render=function(){return i.createElement(r.Router,{history:this.history,children:this.props.children})},t}(i.Component),d=function(e,t){return"function"==typeof e?e(t):e},h=function(e,t){return"string"==typeof e?a.createLocation(e,null,null,t):e},f=function(e){return e},O=i.forwardRef;void 0===O&&(O=f);var p=O((function(e,t){var n=e.innerRef,c=e.navigate,r=e.onClick,a=j(e,["innerRef","navigate","onClick"]),s=a.target,l=o({},a,{onClick:function(t){try{r&&r(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),c())}});return l.ref=f!==O&&t||n,i.createElement("a",l)})),m=O((function(e,t){var n=e.component,c=void 0===n?p:n,a=e.replace,l=e.to,u=e.innerRef,b=j(e,["component","replace","to","innerRef"]);return i.createElement(r.__RouterContext.Consumer,null,(function(e){e||s(!1);var n=e.history,r=h(d(l,e.location),e.location),j=r?n.createHref(r):"",p=o({},b,{href:j,navigate:function(){var t=d(l,e.location);(a?n.replace:n.push)(t)}});return f!==O?p.ref=t||u:p.innerRef=u,i.createElement(c,p)}))})),x=function(e){return e},A=i.forwardRef;void 0===A&&(A=x);var g=A((function(e,t){var n=e["aria-current"],c=void 0===n?"page":n,a=e.activeClassName,l=void 0===a?"active":a,u=e.activeStyle,b=e.className,f=e.exact,O=e.isActive,p=e.location,g=e.sensitive,v=e.strict,y=e.style,w=e.to,N=e.innerRef,R=j(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.__RouterContext.Consumer,null,(function(e){e||s(!1);var n=p||e.location,a=h(d(w,n),n),j=a.pathname,k=j&&j.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=k?r.matchPath(n.pathname,{path:k,exact:f,sensitive:g,strict:v}):null,P=!!(O?O(S,n):S),E=P?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(b,l):b,C=P?o({},y,{},u):y,B=o({"aria-current":P&&c||null,className:E,style:C,to:a},R);return x!==A?B.ref=t||N:B.innerRef=N,i.createElement(m,B)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return r.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return r.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return r.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return r.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return r.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return r.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return r.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return r.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return r.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return r.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return r.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return r.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return r.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return r.withRouter}}),t.BrowserRouter=u,t.HashRouter=b,t.Link=m,t.NavLink=g},785:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var c=n(4),r=n.n(c),i=n(17),a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABECAYAAABZC7HwAAAABHNCSVQICAgIfAhkiAAAEkpJREFUeF7tXQl0VFWavve9qgohSDCEPZCkih7UoI600k6PnkaxnR7nqANZFBRkM4SEOAq0KLK2QnfTg4wdKiEIDoIIZuMo0xy1Hbc+2uLagqHVTi3QAQkJQROy1PLene++2l6K1JpKJpCqczwJqbv9/3f/9f73Skn8c0lzgPaD1dOx+YeGJwoOIdq12BxOZ714vpXsWOwIOca0dzRphsahCdpODSFDQjbvrgHVOlldSW4TIZR5v8+t0BmGa4ZFNSA68TGbm+225n0PtuKfvnFVA6YuePWKZJ2USMgFYho9vpmsv835/w5gSvFLQ4exxK/BiuSoiSdEYpSelSSy0Fo2871A46QXv3qDhjleBNHpjFEAGN2HUtLRbrdddXrHbIDo+uiLqu6ihFZGNyIApAygURuTyR9Nx489SN5d7/QfS7+02gg+zcP6JZmR6ebS7E/6AYCHh14pt5+klEYNoI9Q1iLJdKGlNLvqIuILa26hAqsBwSOiZbKnHyOsg7bJ6XX/ndfo+VtmYdXdokBf6/HYGBxjfN7skKaf35H3g3o8Q1H189g8iwC1RGVyS11Z9kf9DUAbFvcJwLxo9wVmDOM0jEK/SSCO67SvTKnHrifr18vePtPWawxZk49g3CloxwglJ9HJ2kUFRsR5ZpPt0n1mFYPVAGIN32Ep30QyJPqIhLHrQEMyfpchYYstxuydlxSAnHBNu2bSNy/cy+1A+J/8cu1EbeoXACYLALW3d5JrvtuVfcIzQPLsfVempiRYwdSh+N5scqRfRXbcGNpehr8C0gVARneajDMfjqC70jSjqPJekdAabDTuD7xf13DgdlJZKXnG6fcSGDWAEKWJS6u5/cmG/Xc4ZXGqtXTGXzyEj1+wf6wuUfc37O7BMmFvmbfl/DxS5oZqHwsAxxVXpyUy9jXISQIdx+sa5BtIZZ59QAAIJ6JSoFQB0OEkPzmxPecLD+FpBRXjEjTC3yCB4A+phRZ9NhQgwb7nToTU1vqKdff8zu5sIBykqCSQA5gAAAUAyNdpOitNiQMIDqsB7Alwnr6hnBjYr912nVQYyVw2GxGHUmEB3NGt2CACAHzDZDx2FyE+W35Zq9BwJTASpgZqGwrAns7BvUyMkWsyZh+MmRNjKKi5nYjyaqdAt5woyf5DTxfp6Z9S7AsjemIDwwUQc3xLZPp8T9bPKHNCwsrrt+Z1dKdCezK2yzNmb9Y1SPeo1ScfMyoJTC+qnoKI9z8RaN7C8wVwdR3Q8R9KRHrUWprndRSiXXRfAwj19kezMfvOaNcbqF+XOBA8gkfsdT6CzYWYRguVqeNtIHlnEfussDiaDnSXVYoIQENhxUQMvoIKdD6MvzKB38cuM/a8ZJO3nNiZZ4mWITEBkKexRoofwMu8Edu3wyGRySfLss2eNY2b++LwQUOTzK4wgh03nZVvxO72Sk+0a1f3i9YL1edX3CJoxbcBuBZr68QGy7OU5hzqbk1hAThhyb4rNTRhHmKRjWAI8m7KzlByc0qgjN/xU/mn+zses634oeP7/U0vLIwsfkNHPwA7MP4fIO3hx2h8NZRMxgqz3OszmYwHJhHii58I4kSDNvVLfH+1smbCTuLHn/GfL9iPDEX7D+3a4iZVvBotgJyP+qLqX4PmX4IQAWHO1/aGk1PqK5ddtMFCAqgvrHyACmIJEBumsMX1cciMllAizwaoo0H9acC4B/OuwHdKPtEN8DmZyQ9YSnPfjIQXagAj6dddWwCDDUyKEOdt9/8+HblKLaXcKehOm0Q0dSgnJuIwovhwgkFuxwajkzgvsSf3mbcdfUjtgfIFBgGQUUNRzQ60mQ/gRNcuxe5kbI8sy7+xNBGLYZSIOIpMwARWeEeZ6YU1V2sEtg4N89RgQw28Lzudyy3l938ZDldiAaBrA7EmxoTHzCOP7u+SRlMtQpESSp6DKskMZ22B2sQcQEyUUVT1E5EKb1LChuKfdqck3Wkty+uSmA8MII5YDFnNR7mKcbuw70G3bEAu7n2FCG5j/AB0E0cNSyp/QUVhLYiaylWA8nfu6BBSJkniVuv2GdagzEKeUp+V9TME4VGdDkhUZMwpt1g1iV+QkrtsIYHJ/1Sr11mvh6ymIPkcVS5YplQy29LfU6fjRhdXjBjChCl8fjsj9SeNObUh1+LXILOgYqqoEa7kf5YczjP+QjChqCpLR0kaN2SyjR3huVgXAQBw4uRzx6AWrwLjz5jsTRO6eEGBAXQvARJcWF0Eh+dJbIAxXolk7AI2wuOtTN7bWJp3IVKC4u1DcyBGALomwsHs4EFa+1qBkpWeqRVVTMg5SZJy/VVC6OXFW4TiQEwB9KjV9KWvZYjM8TQk8X5M4LKpruzCxxJhj1mNOUdCLSz+fXgc6A0AvTPriyqnwy6uhnc1TSWRHfBv9zk7pE09iR/DI+/yb9WrACrsy60QM0eI80SBPAUpzPDYRx60wmtcZbc5X6zfldd8+bO6dyjsfQBV6zYUV2+Ew/8Ez7Z7/ozA7bxMhZnWbTPe7R0SL+9RYwYgkt0jEV/91NbkeKM+SJoqDSk6naBZh3hnVhf7SMknjGiKzdvu/fTyZnlsqYsNgAgzJo4Uv4Rt42GISZbJry2N0l7/bLpq6TSzqOIOkYir0f5Wr1pFHpPI7CXEWRsRg3pLImJL8uU1WkwAHJtfPniwLvXvYE2K2+NEOoh8IkvkP6yjjn0cKDOCVJGQWZS1QKDCaqjWCT77SDoJE37pYO37TpY9cP7yYnlsqekVANVLRM7gddNHzfeQz4IV3a4XDEWTf4NEwjJPKs+9Ec4jv3p/pPnV2LKof48WcwDhaTZBlUoYeJRHGgHKeYmxXe0t7Rsa9s5tC8QSxT4SYZ0g0Ae9bXhajtLPZEmz2FJ279H+zc6+X13MAcQZ4adtLe3TkpKH5MNRWekBUgET9hHhwxbziK/Kg6lVfeF1P8XxygZshGlejxVAwlt9hUnOZyxleRHVXPY9W/tuxl4B0GzMuYmT4Crn026Cd5qHiXxni4z8RabkUUvtsQ+7KyH3kI8M/UNI4zzJj1k8f4OEt2InPNNJ6a5Txpnn+o5V/XOmXgXQQ3Jq/t4xydrEN2Djruli4wh5rcNuW6i+Y3ARm9a/o9E3nluDjA4/f0z0HV2xNkmisy1/PXY42Cbon2yP3ar6BEBluQg10lPpdI0glAOE8S4SlAN+Xv+/V7rQ8ri6ztKfRKU0UBQ2os9c1fmjEyr5qMTkhbGoz4kdW/tupL4D0E1TxryDw8QkCWXnFKqRKGdf7vsKdcjKbLbUpuwm794W6G4E4sfqW3HasQ69YB/d548o5kWhxwGnJKwNef7Yd7ztk5liDiCvrJIoW0wutL4eTKIyCitGC4LmdwJhM0ApSsk5khxL8pHTKS0/Meb4kcCODkMdyUFUD7CV6PMjVfz4OqoFUAzb/f26PuFoH08SEwDTHqtIHOQQ6iFVvkCesG8hRtknjdnHg90C0j9S9SMq08Pgud4jUS6JZAfb2uSCM6orXBfxBoly/UjNWni7a1w3k1BxljocN5MCSnAfs7f3p+sVAD3L5iV+AOMte6c0L+iJA6rG0nUpd2iYsANApKnIbsbNzV0W49En/At8PG14DhZVFScQcgyKAxhlSYWfBJ6D/PwA8DJ9OU7WwohQ2mnv3BLM4xxXVDNcR6TFAhG4fVTuP7ulsQ7V1JtMzqZ9/gWvcQA5l3pYE6MGEF7h5yic/ScU2j4O8S6AZIzzSiQjp5BaW2k+XvtKMNd/9PyKEYMHi7+FfcxFDOm9yA4wP8DmWGMqzX4nLoFuP175EWsAjTk/5sOOL6iZrBPZ25Am37Vmpe6RfYXD3Byz8WhdINXI+yuli0oNKrlBXe6I4ONwpyQX1G/POw0JHBFXobEG0HHuZr0utRwSlOe6rNj1467jRAkgrexw6ApO77i7PaC5h33MFFNuFkSxEs6KKr/K2pgsbLfJzv8aJIp1cRvYg7LCrjaQtkDGWmEDx/rKC0krqrt5EfD3KB5fh9RYusrRqUf730PtPhfk/JBkPHpwGLU7FwmCsAqq2Rc/EnYaG2E0l9C4ExOlEzOisGJIsiDyA1gljPCBw1rw+ysIB57yhANpC3emJCSmrEW14Xx+2cTrqBDyqSyIyy0l//6nYM43LoNMIBrNRmyEbH7j1m++eBgRUWEv4rDxwzVX67RsH6o/r/VLcX2M44M56ltCaman51ePEXXkoMDIVKg/JZzhSYBOcuGaU8aHQiap3aX9h9DRoJLmv6Io+fqwHvwJtksuoe+ijgPTFlak6BLEPUhmoXSQDPJ5mvQbWSPmWU7baqESvS8s+PNEv6T6DvTdib4TVABaW5h0bcgq7vVM0DfWbBEo4yk5lY1l1XXbcnIuIf73eKmRA0hII2zNy5QIc+FUqHOZJxGrre1waquCOSUTi17OYjTht/Ak70SIoFUkD/oU0refydLTQc/6IPGGEeIc1LStQqeJahuLNa2W2sQ91t0zvu8xVy6hASIGsBuP8ixOzF9oaT+/Kdj9wMxFL48SEhKWIuG13GO73GX3nzNJWm8uy0U6TfX2mN9EGUuqb8bNoqchrdNVqroNcWdVS1vrE42755+5hPges6VGBaD79ACFR+xQs0PO938SqsvqcIykTyU/p4Kwz/Oclvs+4fdg/gZzac5zwajhQX1SknKMtMBbhoh7gOjztexwzg73GlvMONbPBgoPQByqGhrPfeW5gAgp+NBpJ7kndmTzXa/c3u3uM/7hAzdpddoKTJKuOjGQwP3SC0xaFcrW4T7caszFwwavt4nJGnHslGM5K30QzMb2Mz732nLCAxDTpy2pug4HqnfDWP3JYpwJVz+wuhu/FKUURFuCNv/qx/zXZImtsZTlBClOQqlh4bUzBQE1MQhrPDUxrsS4vAHPqeyMl1L49kPYAIazhXgyehCTC/g9QbRXvEO3uq2VifwrSwOrCSY1E5ZU/FgrCGsA3D3qGlGk3g467OKav++YYQpnHQOpTWwA5OkuzcjbBCrv9JVLKODxk4lSJJ8RuAf+jM1/OTVRm4A7E+wRtWeKHsdlBymylLtvCg8kZMKktccAZhTszxBF3WFo1EldDmQJqepsvbDk1J7gQbkBlWeo4sZDpnSw6vjJjpBkrmlkSvVAOpwNE7MuzaIGkD9HohUGbcZo94HxV7hGVYqUjjgd0rLgJRH8hdvK6Sip34T2N3qBJwQJblbitNNn4SB9Fw1BA61PxACOmrMnKSl58BwwHTeMyGiPnYP6s+JSy2bzx+d2BSuj1z9c8w9EKz+JwqQHvOoS3gnGeZ05yTpzeU78dlIEuzB8AJEFSR9JpmqIyJ/9zfLMwQttIUWVnY6E4mAZGCShk5lO8zCOmJ7BpAkK8K778xaUTSy3Gmfy54oDhiQR0DSgmoYF4KgVe5KGdCQdAnC3gjve50DA7fcQD84Kpe7SCypu14jifvQdobpKhjwpfcLU4Px9sGOkAYVGFMQGBVB55j7RiSe32EM4Rr/CzXxe+sdrOBfhUbY/B8v888drcBX3OSQAbvLEc1ijk7+xZhPoplMl2ahki396woFuAeywNxkSNKmzcK+dx3Pq45p6mKst5rOsNJjUuKuo18LGPYgJBnvsJLIq/ytLiAfLcoOe+fWEoIHW9yIAYYbalDc1Gf1Hlbprx8tGNe0d8rJgdZrczhFRmIVAfiv6KkdM7rznCaQv15lKa18KVgMz0JgfC3q7AbDrsACgtpPQn4VKX+kLD9xEBO2rUJljfA6O4l1uMRlzHo/FYuNjXMwBL4Cet9LcTbida8CjPEtClcgbCl+dSKiTF+T+M/p6Hi7lj89VMuJcYzbe/22c8b3HAReA0Je4a1BCqbyka1BNnu+Q7ZtPl87i99+7fHj6a5A2YQUcFPRRXtjzqMvPmCRvMI+uPRz4bkPvETTQRnYD6CI7s6hykUDEp+B1ZnjVIN45wwnCozYpoYbHebwCLcEu/gIOSTk6K/We7oT1GZnQZy0Nzq3xY56+20ZdAFSm5c8xak9shkos9hyg8j/D9T/DqPCIwORNkLqJXoBd/yubCtzvmxfsNlLfkTSwZroYQDf9GflVV2m05HcItv/NU3TkzxpI3tuyky6zlM8M63HXgcXavqE2IIDK9Lm5uL51379A4p6BnClhBVeX+PkNfq4yOZr+ZyCV8PUNJJHNEhxAz1j8wbqR4krkMe8Cem+ZG6Sn43YuMkb3VuvwAHTPzk8iGvbOwT2GwOUUvbXQ+Ljdc+D/AK63q+pEMP4UAAAAAElFTkSuQmCC",s=n(22),o=n(109),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAABXklEQVQoU2WRP0hVcRTHP9/fvT6ejzJpCIVaIkNzMZpaskGECB2ypxA+aFGxocmh0bm2COmlEIEI+ujPIBi4ODQ4BLqYoETgYHs9VPTe+40raGTf7Zzv+XC+nCMmJ0O5ZbhXIb3yuxTml4bbfnFG5er3C5IHwTsLu9eWNfBmuzPIXwQFw6f6vsaXnv4Fc8BKXgep33BIFt3Rw+ntu3K2LCkGH2K9dXPzRG3wUv3ey9Wmc40XXwg/BhVsJxB61Ff9WiqG83NC94EYOMjMK8V6TpY9k/UEKAIJ1qLrxUfK4z+ofmuNFc0idQOR0R6wDnQJl4DUeCXN0sqHsRs/j6FjcGrralTgnazb4AiU2Q4SKWjVpJXaSPuPfPYUyouh6a0Oo1lwFxCAzHgtQZWPI9c3Txb8A+XNgZmNm8ENC4LL+YntZKg22plHPdV/UO6UpzZvqRD3pkd8fj/etnb2b38ARWSBW029yFUAAAAASUVORK5CYII=",j=n(630),u=(n(656),n(18));function b({closeMenu:e,lang:t,locale:n}){const r=!!Object(s.useRouteMatch)("/mining"),i=!!Object(s.useRouteMatch)("/futures/lite"),b=!!Object(s.useRouteMatch)("/options/lite"),d=!!Object(s.useRouteMatch)("/deritoken"),h=!!Object(s.useRouteMatch)("/bridge");return Object(c.useEffect)((()=>(document.querySelectorAll(".menu li a").forEach((t=>t.addEventListener("click",e))),()=>{})),[]),Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("a",{className:"logo",href:`https://deri.finance/?locale=${n}#index`,children:Object(u.jsx)("img",{src:a,alt:""})}),Object(u.jsx)("span",{className:"close-menu",click:"close",onClick:e})]}),Object(u.jsx)("div",{className:"ul",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:r?"selected":"",children:Object(u.jsx)("a",{rel:"noreferrer",href:`https://app.deri.finance/?locale=${n}#mining`,children:t.mining})}),Object(u.jsx)("li",{className:i?"selected":"",children:Object(u.jsxs)("a",{rel:"noreferrer",href:`https://app.deri.finance/?locale=${n}#/futures/lite`,children:[" ",t.trade," "]})}),Object(u.jsxs)("li",{className:b?"selected":"",children:[Object(u.jsx)("span",{className:"beta",children:t.beta}),Object(u.jsxs)("a",{rel:"noreferrer",href:`https://app.deri.finance/?locale=${n}#/options/lite`,children:[" ",t.options," "]})]}),Object(u.jsx)("li",{className:d?"selected":"",children:Object(u.jsx)(o.b,{to:"/deritoken",children:t["deri-token"]})}),Object(u.jsx)("li",{className:h?"selected":"",children:Object(u.jsx)("a",{rel:"noreferrer",href:`https://bridge.deri.finance/?locale=${n}#bridge`,children:t.bridge})}),Object(u.jsxs)("li",{className:"ref",children:[t.docs," ",Object(u.jsx)("img",{src:l,alt:""}),Object(u.jsxs)("ul",{className:"ref-box",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:t.whitepaper})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:t["code-audit"]})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:`http://deri.finance/?locale=${n}#/team`,children:t.team})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://docs.deri.finance/faq",children:t.faq})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://docs.deri.finance/",children:t.guide})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://github.com/deri-finance/",children:t.github})})]})]}),Object(u.jsxs)("li",{className:"ref",children:[t.more," ",Object(u.jsx)("img",{src:l,alt:""}),Object(u.jsxs)("ul",{className:"ref-box",children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/broker",children:t.broker})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/brokerbind",children:t["broker-bind"]})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/signin",children:t.signin})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/retired",children:t["retired-pools"]})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{rel:"noreferrer",href:`https://governance.deri.finance/?locale=${n}#governance`,children:t.governance})})]})]})]})}),Object(u.jsx)(j.a,{lang:t})]})}n(681);var d=n(652),h=n(670),f=n(46),O=n(623);var p,m=Object(f.b)("intl")(Object(f.c)((function(e){var t=e.intl,n=Object(c.useState)({}),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(O.a)(t.dict,"header"),j=Object(O.a)(t.dict,"footer");return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)("img",{className:"menu-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAARklEQVRIS2MMm3XzAgMjoz4DDcF/BobzjHSziIYeQTGacdQickNgGAYd3ZI33SwiN3JJ1TcMEwOpQUCu+mEYdHRL3vSyCAAv2BujNlrcrwAAAABJRU5ErkJggg==",onClick:function(){o({left:0})}}),Object(u.jsx)("div",{className:"menu-left",style:s,children:Object(u.jsx)(b,{closeMenu:function(){return o({left:"-110%"})},lang:Object.assign(l,j),locale:t.locale})}),Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:a,alt:"",onClick:function(){window.location.href="https://deri.finance/"}})}),Object(u.jsxs)("div",{className:"nav-right",children:[Object(u.jsx)(d.a,{}),Object(u.jsx)("a",{href:"https://app.deri.finance/#lite",children:Object(u.jsx)("div",{className:"trade",children:l.trade})}),Object(u.jsx)(h.a,{})]})]})}))),x=n(112),A=n(654),g=n(655);const v=Object(x.a)((()=>Promise.all([n.e(0),n.e(2),n.e(1),n.e(22)]).then(n.bind(null,770)))),y=Object(x.a)((()=>Promise.all([n.e(6),n.e(41)]).then(n.bind(null,771)))),w=Object(x.a)((()=>n.e(25).then(n.bind(null,772)))),N=Object(x.a)((()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,773)))),R=Object(x.a)((()=>Promise.all([n.e(0),n.e(29)]).then(n.bind(null,774)))),k=Object(x.a)((()=>n.e(24).then(n.bind(null,775)))),S=Object(x.a)((()=>Promise.all([n.e(0),n.e(19)]).then(n.bind(null,776)))),P=Object(x.a)((()=>Promise.all([n.e(0),n.e(4),n.e(31)]).then(n.bind(null,777)))),E=Object(x.a)((()=>Promise.all([n.e(5),n.e(40)]).then(n.bind(null,778)))),C=Object(x.a)((()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,779)))),B=Object(x.a)((()=>n.e(27).then(n.bind(null,780)))),z=Object(x.a)((()=>n.e(37).then(n.bind(null,781)))),K=Object(x.a)((()=>n.e(35).then(n.bind(null,782)))),I=Object(x.a)((()=>n.e(33).then(n.bind(null,783))));var Q=Object(s.withRouter)(p=Object(A.a)(p=class extends r.a.Component{render(){const{dict:e}=this.props;return Object(u.jsx)("div",{className:"body",children:Object(u.jsxs)(s.Switch,{children:[Object(u.jsx)(s.Route,{exact:!0,path:"/index",component:()=>Object(u.jsx)(y,{lang:e.home})}),Object(u.jsx)(s.Route,{exact:!0,path:"/team",component:()=>Object(u.jsx)(w,{lang:e.team})}),Object(u.jsx)(s.Route,{exact:!0,path:"/deritoken",component:()=>Object(u.jsx)(R,{lang:e.home})}),Object(u.jsx)(s.Route,{exact:!0,path:"/logo",component:()=>Object(u.jsx)(I,{lang:e.home})}),Object(u.jsx)(s.Route,{exact:!0,path:"/bridge",component:()=>Object(u.jsx)(E,{lang:e.bridge})}),Object(u.jsx)(s.Route,{exact:!0,path:"/broker",component:()=>Object(u.jsx)(C,{lang:e.broker})}),Object(u.jsx)(s.Route,{exact:!0,path:"/signin",component:()=>Object(u.jsx)(k,{lang:e.signin})}),Object(u.jsx)(s.Route,{exact:!0,path:"/brokerbind",component:()=>Object(u.jsx)(B,{lang:e.broker})}),Object(u.jsx)(s.Route,{exact:!0,path:"/governance",component:()=>Object(u.jsx)(z,{lang:e.governance})}),Object(u.jsx)(s.Route,{exact:!0,path:"/diphistory",component:()=>Object(u.jsx)(K,{lang:e["dip-history"]})}),Object(u.jsx)(s.Route,{exact:!0,path:"/",render:()=>Object(u.jsx)(g.a,{})}),Object(u.jsx)(s.Route,{exact:!0,path:"/futures/lite",component:()=>Object(u.jsx)(v,{lang:e.lite})}),Object(u.jsx)(s.Route,{exact:!0,path:"/options/lite",component:()=>Object(u.jsx)(v,{lang:e.lite})}),Object(u.jsx)(s.Route,{exact:!0,path:"/mining",component:()=>Object(u.jsx)(N,{lang:e.mining})}),Object(u.jsx)(s.Route,{exact:!0,path:"/retired",component:()=>Object(u.jsx)(S,{lang:e.mining})}),Object(u.jsx)(s.Route,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:()=>Object(u.jsx)(P,{lang:e.mining})}),Object(u.jsx)(s.Route,{component:()=>Object(u.jsx)(v,{lang:e.lite})})]})})}})||p)||p,M=(n(682),n(653));var J=Object(f.b)("intl")(Object(f.c)((function(e){var t=e.intl,n=Object(O.a)(t.dict,"footer"),c=Object(s.useRouteMatch)("/index"),r=Object(s.useRouteMatch)("/team"),i=!c&&!r;return Object(u.jsx)("div",{className:"wallet-panel",children:i&&Object(u.jsx)(M.a,{lang:n})})})));n(683);var q=n(684);function U({locale:e}){const t=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),n=Object(q.useLocation)().pathname.split("/")[1];return Object(c.useEffect)((()=>(document.querySelector("html").setAttribute("style",`font-size : ${t.width/375*100}px`),()=>{})),[t]),Object(u.jsxs)("div",{className:`mobile ${n} ${e}`,children:[Object(u.jsx)(m,{}),Object(u.jsx)(Q,{}),Object(u.jsx)(J,{})]})}}}]);
//# sourceMappingURL=15.1fad6d57.chunk.js.map