(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{287:function(e,t,n){"use strict";t.a={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,o,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var u="";if(n)switch(n.constructor){case Number:u=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:u="; expires="+n;break;case Date:u="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+u+(r?"; domain="+r:"")+(o?"; path="+o:"")+(c?"; secure":""),!0},removeItem:function(e,t,n){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}}},288:function(e,t,n){"use strict";var o=n(287);t.a={isLoggedIn:function(){return o.a.getItem&&"function"==typeof o.a.getItem&&"allowmein"===o.a.getItem("secretKey")},logout:function(){return o.a.removeItem&&"function"==typeof o.a.removeItem&&o.a.removeItem("secretKey")}}},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var o=n(0),r=n.n(o),c=n(1),u=n(288);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,f(t).call(this,e))).onLogoutRedirectUrl="/login",n.state={logout:!1},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){u.a.logout(),this.setState({logout:!0})}},{key:"render",value:function(){return this.state.logout?r.a.createElement(c.a,{to:this.onLogoutRedirectUrl}):null}}])&&a(n.prototype,o),i&&a(n,i),t}()}}]);