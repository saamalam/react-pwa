(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(70);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=i(this,u(t).call(this,e))).state={open:!1},n}var n,c,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a["PureComponent"]),n=t,(c=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:" navbar-item"},r.a.createElement("strong",null,"News API PWA")),r.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},r.a.createElement(o.b,{className:"navbar-item",to:"/home",onClick:function(){return e.closeMenuBar()}},"Home"),r.a.createElement(o.b,{className:"navbar-item",to:"/async-loading",onClick:function(){return e.closeMenuBar()}},"Async Loading"),r.a.createElement(o.b,{className:"navbar-item",to:"/business",onClick:function(){return e.closeMenuBar()}},"Business"),r.a.createElement(o.b,{className:"navbar-item",to:"/entertainment",onClick:function(){return e.closeMenuBar()}},"Entertainment"),r.a.createElement(o.b,{className:"navbar-item",to:"/science",onClick:function(){return e.closeMenuBar()}},"Science"),r.a.createElement(o.b,{className:"navbar-item",to:"/technology",onClick:function(){return e.closeMenuBar()}},"Technology"),r.a.createElement(o.b,{className:"navbar-item",to:"/sports",onClick:function(){return e.closeMenuBar()}},"Sports"),r.a.createElement(o.b,{className:"navbar-item",to:"/login",onClick:function(){return e.closeMenuBar()}},"Login")))),r.a.createElement("section",{className:"hero is-medium is-info is-bold"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"News API - News all over"),r.a.createElement("h2",{className:"subtitle"},"You can find All news including Headline")))))}}])&&l(n.prototype,c),f&&l(n,f),t}(),m=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"All Right Reserved. News API React PWA App"),r.a.createElement("div",{className:"has-text-centered m-t-xl m-b-md"})))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(f,null),t,r.a.createElement("br",null),r.a.createElement(m,null))}},328:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(284),c=n(297),l=n.n(c);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,f(t).call(this,e))).state={articles:[]},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentWillMount",value:function(){this.getArticles(this.props.category,this.props.country)}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps"),console.log(this.props.category),console.log(this.props.country),e.category!==this.props.category&&this.getArticles(e.category,e.country),e.country!==this.props.country&&this.getArticles(e.category,e.country)}},{key:"formatDate",value:function(e){var t=new Date(e),n=t.getFullYear(),a=t.getDate(),r=t.getHours(),o=t.getMinutes();return a+"/"+(t.getMonth()+1)+"/"+n+" | "+r+":"+(o<10?"0"+o:o)}},{key:"getArticles",value:function(e,t){var n=this;console.log("responses......."),console.log(e),console.log(t),l.a.get("https://newsapi.org/v2/top-headlines?country=".concat(t,"&category=").concat(e,"&apiKey=").concat("0192a6c376ed45eca43e9bbae2adc28e")).then(function(e){var t=e.data.articles;n.setState({articles:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"cardsContainer"},this.state.articles.map(function(t,n){return r.a.createElement("div",{className:"card",key:n},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title)),r.a.createElement("p",null,t.description),r.a.createElement("div",{className:"author"},r.a.createElement("p",null,"By ",r.a.createElement("i",null,t.author?t.author:e.props.category)),r.a.createElement("p",null,e.formatDate(t.publishedAt)))),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.urlToImage,alt:""})))})))}}])&&u(n.prototype,a),c&&u(n,c),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=h(t).call(this,e))||"object"!==y(r)&&"function"!=typeof r?v(a):r).state={cateogies:["business","entertainment","general","health","science","sports","technology"],countries:["ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg","fr","gb","gr"," hk","hu","id","ie","il","in","it","jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us","ve","za"],cat:"business",cou:"ae"},n.handleChange=n.handleChange.bind(v(n)),n.handleChangeCountry=n.handleChangeCountry.bind(v(n)),n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a["Component"]),n=t,(o=[{key:"handleChange",value:function(e){this.setState({cat:e.target.value})}},{key:"handleChangeCountry",value:function(e){this.setState({cou:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"searchArea"},r.a.createElement("div",{className:"category"},r.a.createElement("h4",null,"News Category"),r.a.createElement("select",{value:this.state.cat,onChange:this.handleChange},">",this.state.cateogies.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("div",{className:"country"},r.a.createElement("h4",null,"Your Country"),r.a.createElement("select",{value:this.state.cou,onChange:this.handleChangeCountry},">",this.state.countries.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement(p,{category:this.state.cat,country:this.state.cou}))}}])&&b(n.prototype,o),c&&b(n,c),t}();t.default=d}}]);