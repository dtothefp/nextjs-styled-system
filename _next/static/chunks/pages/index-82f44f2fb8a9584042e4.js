(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var c=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=c},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(c.default.useContext(o.AmpStateContext))};var n,c=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,c=void 0!==n&&n,o=e.hasQuery,a=void 0!==o&&o;return r||c&&a}},3680:function(e,t,r){"use strict";r(1682);t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var o=n?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=(n=r(617))&&n.__esModule?n:{default:n},a=r(3367),i=r(4287),h=r(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(s,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(c){var o=!0,a=!1;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){a=!0;var i=c.key.slice(c.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(c.type){case"title":case"base":t.has(c.type)?o=!1:t.add(c.type);break;case"meta":for(var h=0,l=f.length;h<l;h++){var u=f[h];if(c.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var s=c.props[u],p=n[u]||new Set;"name"===u&&a||!p.has(s)?(p.add(s),n[u]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return c.default.cloneElement(e,{key:r})}))}function d(e){var t=e.children,r=(0,c.useContext)(a.AmpStateContext),n=(0,c.useContext)(i.HeadManagerContext);return c.default.createElement(o.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,h.isInAmpMode)(r)},t)}d.rewind=function(){};var v=d;t.default=v},617:function(e,t,r){"use strict";var n=r(3115),c=r(2553),o=r(2012),a=(r(450),r(9807)),i=r(7690),h=r(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var c=h(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),s=function(e){a(r,e);var t=l(r);function r(e){var o;return c(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=s},694:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(5893),c=r(9008),o=r(8496),a=(r(7294),r(809)),i=r.n(a),h=r(2447),l=r(6265);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){return(0,n.jsx)("svg",s(s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56.48 56.48",width:e.width||56.48,height:e.height||56.48,fill:e.fill||"#000"},e),{},{children:(0,n.jsx)("path",{d:"M24.25 26.305h-4.284v-5.367h4.284v1.118h-3.002v.967h2.931v1.1h-2.931v1.072h3.002v1.11zm-9.547 0l-1.863-4.206v4.207h-2.61l-.493-1.197h-2.67l-.498 1.197H5.176l2.297-5.367h1.904l2.183 5.082v-5.082h2.094l1.679 3.641 1.541-3.641h2.138v5.367h-1.315l-.005-4.203-1.86 4.203-1.129-.001zm-5.43-2.315l-.877-2.139-.872 2.139h1.749zm20.749 7.954c0 1.491-1.112 1.799-2.233 1.799h-1.6v1.8h-2.493l-1.58-1.777-1.642 1.777h-5.081v-5.367h5.158l1.58 1.758 1.632-1.758h4.098c1.018-.001 2.161.282 2.161 1.768zm-8.731.905l-1.403-1.563h-3.215v.976h2.815v1.096h-2.815v1.068h3.152l1.466-1.577zm3.62-2.098l-1.97 2.116 1.97 2.188v-4.304zm3.734 1.193c0-.47-.32-.659-.784-.659h-1.672v1.367h1.656c.494.001.8-.244.8-.708zm-2.221-5.639H25.14v-5.367h2.95c.655 0 1.138.017 1.554.257.404.24.648.59.648 1.189 0 .855-.57 1.298-.904 1.43.281.107.521.296.635.452.182.267.213.505.213.984v1.055h-1.294l-.006-.677c0-.323.031-.787-.202-1.045-.187-.188-.473-.229-.935-.229h-1.375v1.951zm-.002-3.057h1.559c.249 0 .457-.003.635-.11.165-.087.264-.276.264-.51 0-.23-.103-.396-.269-.474-.152-.086-.386-.097-.608-.097h-1.58l-.001 1.191zm5.922-2.309h-1.309v5.367h1.309v-5.367zm1.316 4.773c-.452-.456-.688-1.074-.688-2.049 0-.796.141-1.524.691-2.099.413-.428 1.064-.625 1.948-.625h1.241v1.15h-1.215c-.471 0-.734.07-.988.318-.219.226-.368.652-.368 1.216 0 .574.112.989.353 1.259.197.213.559.277.894.277h.575l1.812-4.22h1.921l2.172 5.076v-5.076h1.953l2.256 3.738v-3.738h1.312v5.367h-1.816l-2.434-4.028v4.028h-2.611l-.5-1.197h-2.664l-.482 1.197H35.52c-.625-.001-1.414-.139-1.86-.594zm4.303-1.722h1.77l-.889-2.139-.881 2.139zm-2.693-.949c-.012.017-.102.21-.102.582 0 .368.059.545.102.625.045.012.128.026.252.026l.556-1.299h-.438c-.302-.001-.333.031-.37.066zm21.21-11.648v33.695c0 .803-.65 1.454-1.454 1.454H1.454A1.454 1.454 0 010 45.087V11.393c0-.803.65-1.454 1.454-1.454h53.572c.804 0 1.454.651 1.454 1.454zM14.703 27.192h1.127a.884.884 0 00.81-.528l.17-.38v.022c0 .489.396.885.886.885h1.315c.18 0 .337-.068.478-.159a.87.87 0 00.478.159h4.284a.855.855 0 00.444-.137.867.867 0 00.445.137h1.284a.886.886 0 00.886-.886v-1.066h.489c.111 0 .19.003.249.007.006.091.004.199.004.271l-.002.118.005.677c.004.486.4.879.887.879h1.294a.853.853 0 00.398-.107.875.875 0 00.401.107h1.31c.429 0 .769-.31.852-.714.729.611 1.751.714 2.322.714h1.502c.359 0 .685-.22.818-.555l.262-.643h1.478l.271.652a.89.89 0 00.818.545h2.611a.887.887 0 00.886-.886v-.847l.787 1.305a.887.887 0 00.761.428h1.816a.887.887 0 00.886-.886v-5.367a.886.886 0 00-.886-.886h-1.312a.887.887 0 00-.888.886v.554l-.61-1.011a.883.883 0 00-.758-.428h-1.953a.887.887 0 00-.887.886v.753l-.471-1.102a.889.889 0 00-.814-.537h-1.921a.881.881 0 00-.53.176.878.878 0 00-.529-.176h-1.241c-1.052 0-1.834.256-2.408.753a.874.874 0 00-.86-.753h-1.309a.882.882 0 00-.789.499c-.055-.04-.099-.087-.16-.124-.603-.348-1.234-.375-1.997-.375h-2.95a.864.864 0 00-.445.137.855.855 0 00-.444-.137h-4.284a.862.862 0 00-.478.159.868.868 0 00-.478-.159h-2.138a.884.884 0 00-.814.541l-.762 1.796-.839-1.822a.891.891 0 00-.805-.515H11.56a.886.886 0 00-.886.886v.771l-.481-1.122a.888.888 0 00-.815-.536H7.474a.887.887 0 00-.815.537l-2.296 5.367a.888.888 0 00.814 1.235h1.394c.356 0 .68-.216.816-.546l.271-.652h1.486l.267.648c.137.332.46.549.82.549h2.609a.886.886 0 00.886-.886v-.021l.168.381a.883.883 0 00.809.529zm37.487 6.657c0-.75-.2-1.308-.64-1.76l-.026-.026a.884.884 0 00.405-.746v-1.142a.886.886 0 00-.885-.887h-2.572c-.801 0-1.402.235-1.842.592a.88.88 0 00-.828-.592h-2.57c-.706 0-1.266.176-1.688.462a.878.878 0 00-.764-.462H36.5a.875.875 0 00-.781.489c-.062-.042-.105-.093-.172-.132-.619-.331-1.279-.357-1.961-.357h-2.962a.876.876 0 00-.784.493c-.449-.294-1.081-.493-1.979-.493h-4.098a.885.885 0 00-.65.283l-.971 1.048-.932-1.037a.878.878 0 00-.659-.294h-5.158a.886.886 0 00-.886.887v5.367c0 .489.396.887.886.887h5.081a.887.887 0 00.65-.285l.979-1.06.929 1.046c.168.189.41.297.663.297h2.493c.49 0 .887-.396.887-.886v-.915h.713c.866 0 1.494-.178 1.949-.449v1.364c0 .489.396.886.887.886h1.289a.886.886 0 00.886-.886v-1.075h.484c.118 0 .201.004.26.008.006.095.006.211.004.287v.78c0 .489.396.886.887.886h1.287a.871.871 0 00.39-.1c.118.061.249.1.392.1h4.28a.87.87 0 00.384-.096.873.873 0 00.385.096h2.498c.797 0 1.441-.194 1.928-.539a.888.888 0 00.815.539h2.498c1.816.002 2.899-.963 2.899-2.578zm-7.975-1.568l-.689-.02c-.219 0-.363-.014-.5-.061a.412.412 0 01-.28-.4c0-.17.052-.299.194-.387.128-.087.279-.097.514-.097h2.352v-1.142h-2.57c-1.346 0-1.834.818-1.834 1.598 0 1.697 1.503 1.621 2.701 1.66.225 0 .359.037.457.119.09.076.156.198.156.355a.475.475 0 01-.15.35c-.108.102-.281.133-.523.133h-2.488v1.151h2.498c1.293 0 2.016-.539 2.016-1.694 0-.551-.135-.879-.385-1.137-.295-.292-.773-.411-1.469-.428zm-9.334.767c.284.104.519.295.627.451.183.262.209.506.213.979v1.064h-1.287v-.671c0-.323.031-.801-.207-1.051-.188-.192-.473-.238-.941-.238h-1.37v1.96h-1.288v-5.367h2.961c.649 0 1.121.027 1.545.252.403.244.658.58.658 1.192-.002.859-.575 1.296-.911 1.429zm-.51-1.182c0-.229-.099-.396-.265-.483-.156-.092-.386-.097-.612-.097h-1.58v1.206h1.559c.25 0 .463-.009.635-.111.164-.1.263-.286.263-.515zm2.131 3.676h4.28v-1.113l-3.004-.006v-1.067h2.93v-1.095h-2.93v-.977h3.004v-1.109h-4.28v5.367zm12.954-3.261l-.69-.02c-.217 0-.362-.014-.5-.061a.414.414 0 01-.279-.4c0-.17.052-.299.193-.387.129-.087.281-.097.515-.097h2.353v-1.142h-2.572c-1.344 0-1.834.818-1.834 1.598 0 1.697 1.504 1.621 2.703 1.66.224 0 .357.037.457.119a.461.461 0 01.155.355.481.481 0 01-.149.35c-.109.102-.282.133-.524.133h-2.487v1.151h2.498c1.293 0 2.014-.539 2.014-1.694 0-.551-.133-.879-.385-1.137-.293-.292-.772-.411-1.468-.428z"})}))};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){return(0,n.jsx)("svg",d(d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:e.width||2500,height:e.height||2500,fill:e.fill||"#000"},e),{},{children:(0,n.jsx)("path",{d:"M5 7c-2.758 0-5 2.242-5 5v26c0 2.758 2.242 5 5 5h40c2.758 0 5-2.242 5-5V12c0-2.758-2.242-5-5-5zm16.188 14.906c.519 0 .968.137 1.5.407v1.406c-.504-.492-.958-.688-1.532-.688-1.133 0-2.031.938-2.031 2.125 0 1.254.875 2.125 2.094 2.125.547 0 .984-.203 1.468-.687v1.437a3.395 3.395 0 01-1.53.344c-1.84 0-3.282-1.398-3.282-3.219 0-1.8 1.48-3.25 3.313-3.25zm-5.72.032c.68 0 1.294.234 1.813.687l-.625.844c-.316-.352-.605-.5-.968-.5-.52 0-.907.297-.907.687 0 .336.211.512.938.782 1.375.503 1.781.953 1.781 1.937 0 1.2-.871 2.031-2.125 2.031-.918 0-1.598-.37-2.156-1.187l.781-.75c.277.539.738.812 1.313.812.539 0 .937-.37.937-.875 0-.597-.531-.722-1.188-.968-1.128-.426-1.53-.868-1.53-1.72 0-1.015.84-1.78 1.937-1.78zm10.813 0a3.21 3.21 0 013.219 3.218c0 1.785-1.434 3.25-3.219 3.25a3.263 3.263 0 01-3.25-3.25c0-1.785 1.465-3.218 3.25-3.218zm-20.375.125h1.782c1.96 0 3.312 1.265 3.312 3.093 0 .965-.617 3.094-3.313 3.094h-1.78zm5.657 0h1.218v6.187h-1.219zm17.718 0h1.313l1.656 4.156 1.688-4.157h1.312l-2.688 6.344h-.656zm6.5 0h3.438v1.03H37v1.376h2.125v1.062H37v1.657h2.219v1.062H35.78zm4.219 0h1.813c1.394 0 2.187.652 2.187 1.812 0 .95-.496 1.594-1.406 1.781l1.937 2.594h-1.5l-1.656-2.5h-.156v2.5H40zm1.219.968v1.875h.343c.77 0 1.188-.347 1.188-.968 0-.602-.402-.907-1.156-.907zm-34.094.063v4.093h.313c2.175 0 2.312-1.566 2.312-2.03 0-.973-.574-2.063-2.219-2.063z"})}))};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e){return(0,n.jsxs)("svg",y(y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e.width||2500,height:e.height||2500,fill:e.fill||"#000"},e),{},{children:[(0,n.jsx)("path",{d:"M45 35c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V13c0-2.21 1.79-4 4-4h34c2.21 0 4 1.79 4 4z",fill:"#3F51B5"}),(0,n.jsx)("path",{d:"M40 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z",fill:"#FFC107"}),(0,n.jsx)("path",{d:"M22.016 30a9.956 9.956 0 01-1.176-2h5.324a9.946 9.946 0 00.637-2h-6.598A9.895 9.895 0 0120 24h7c0-.688-.07-1.355-.2-2h-6.6a9.948 9.948 0 01.64-2h5.324a9.956 9.956 0 00-1.176-2h-2.972c.433-.578.93-1.121 1.48-1.594A9.964 9.964 0 0017 14c-5.523 0-10 4.477-10 10s4.477 10 10 10c3.27 0 6.16-1.574 7.984-4z",fill:"#FF3D00"})]}))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){return(0,n.jsx)("svg",b(b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192.756 192.756",width:e.width||2500,height:e.height||2500,fill:e.fill||"#000"},e),{},{children:(0,n.jsxs)("g",{fillRule:"evenodd",clipRule:"evenodd",children:[(0,n.jsx)("path",{fill:"#fff",d:"M0 0h192.756v192.756H0V0z"}),(0,n.jsx)("path",{d:"M189.922 50.809c0-8.986-4.67-13.444-13.729-13.444H16.562c-4.528 0-7.854 1.203-10.048 3.679-2.476 2.477-3.68 5.661-3.68 9.765v91.138c0 4.104 1.204 7.217 3.68 9.764 2.548 2.477 5.803 3.68 10.048 3.68h159.631c9.059 0 13.729-4.527 13.729-13.443V50.809zm-13.729-11.321c7.5 0 11.322 3.821 11.322 11.321v91.138c0 7.57-3.822 11.32-11.322 11.32H16.562c-3.609 0-6.368-1.061-8.42-3.184-2.123-2.053-3.184-4.883-3.184-8.137V50.809c0-7.5 3.75-11.321 11.604-11.321h159.631z",fill:"#315881"}),(0,n.jsx)("path",{d:"M17.835 44.724c-3.042 0-4.953.495-6.014 1.557-.92 1.203-1.344 3.184-1.344 6.085v19.741h171.802V52.366c0-5.165-2.549-7.642-7.643-7.642H17.835z",fill:"#315881"}),(0,n.jsx)("path",{d:"M10.477 140.107c0 5.234 2.476 7.924 7.358 7.924h156.801c5.094 0 7.643-2.689 7.643-7.924v-19.742H10.477v19.742z",fill:"#dfa43b"}),(0,n.jsx)("path",{d:"M67.367 80.528c0 .92-.142 1.627-.495 2.123l-12.383 21.582-.779-26.323H33.898l6.651 3.184c1.91 1.203 2.901 2.759 2.901 4.741l1.839 27.951h9.694l23.21-35.876H66.306c.707.637 1.061 1.627 1.061 2.618zm80.1-1.557l.777-1.062h-12.1c.424.424.566.637.566.778-.143.565-.426.92-.566 1.344l-17.619 32.124c-.424.566-.85 1.062-1.344 1.629h9.977l-.496-1.062c0-.92.496-2.617 1.557-5.023l2.123-3.963h10.26c.426 3.326.709 6.086.85 8.139l-.85 1.91h12.383l-1.84-2.689-3.678-32.125zm-7.36 19.742h-7.359l6.297-12.1 1.062 12.1zM109.539 76.07c-3.82 0-7.076 1.062-9.977 3.184-3.185 1.84-4.741 4.175-4.741 7.077 0 3.326 1.132 6.227 3.396 8.42l6.865 4.74c2.477 1.77 3.68 3.326 3.68 4.742 0 1.344-.639 2.547-1.84 3.467-1.203.92-2.549 1.344-4.246 1.344-2.477 0-6.722-1.768-12.595-5.023v6.58c4.599 2.76 9.058 4.176 13.373 4.176 4.105 0 7.572-1.133 10.545-3.68 3.184-2.336 4.74-5.094 4.74-8.137 0-2.549-1.133-4.883-3.68-7.36l-6.582-4.741c-2.191-1.769-3.395-3.326-3.395-4.528 0-2.759 1.627-4.175 4.953-4.175 2.264 0 5.59 1.274 10.047 3.963l1.346-6.864c-3.752-2.124-7.643-3.185-11.889-3.185zm-26.322 37.715c-.142-1.486-.425-2.83-.567-4.246l8.987-29.011 2.123-2.618H80.811c.142.637.283 1.486.425 2.123 0 .637 0 1.416-.142 2.123l-8.986 28.728-1.84 2.902h12.949v-.001z",fill:"#315881"})]})}))},w={initialValues:{name:"",cvv:"",cardNumber:"",expMonth:"",expYear:""},onSubmit:function(){var e=(0,h.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("*Form Input Values*",JSON.stringify(t,null,2)),e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:console.log("*After Fake Form Submission*");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validationSchema:o.validationSchema},O=function(){return(0,n.jsxs)(o.Form,{validations:w,children:[(0,n.jsx)(o.Input,{name:"name",placeholder:"Name"}),(0,n.jsx)(o.Input,{name:"cardNumber",placeholder:"Card Number"}),(0,n.jsx)(o.Input,{name:"cvv",placeholder:"CVV2"}),(0,n.jsxs)(o.Flex,{flexDirection:["column","row"],children:[(0,n.jsx)(o.Box,{width:[1,.5],mr:[0,1],children:(0,n.jsx)(o.Input,{name:"expMonth",placeholder:"Exp. Month"})}),(0,n.jsx)(o.Box,{width:[1,.5],ml:[0,1],children:(0,n.jsx)(o.Input,{name:"expYear",placeholder:"Exp. Year"})})]}),(0,n.jsxs)(o.Flex,{justifyContent:"space-between",children:[(0,n.jsx)(o.Box,{width:"23%",height:"120px",children:(0,n.jsx)(g,{width:"100%",height:"100%"})}),(0,n.jsx)(o.Box,{width:"23%",height:"120px",children:(0,n.jsx)(x,{width:"100%",height:"100%"})}),(0,n.jsx)(o.Box,{width:"23%",height:"120px",children:(0,n.jsx)(f,{width:"100%",height:"100%"})}),(0,n.jsx)(o.Box,{width:"23%",height:"120px",children:(0,n.jsx)(v,{width:"90%",height:"100%"})})]})]})},z=function(){return(0,n.jsxs)(o.Box,{maxWidth:"538px",mx:"auto",my:6,p:"72px",border:"1px solid",borderRadius:4,borderColor:"secondary",children:[(0,n.jsx)(o.Box,{as:"h2",textAlign:"center",fontSize:4,mt:0,children:"Enter your credit card information"}),(0,n.jsx)(O,{})]})};var P=function(){return(0,n.jsxs)(o.Box,{fontFamily:"body",children:[(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(z,{})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(694)}])},9008:function(e,t,r){e.exports=r(3680)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),c=r(7381),o=r(3585),a=r(5725);e.exports=function(e){return n(e)||c(e)||o(e)||a()}}},function(e){e.O(0,[774,351,333,496],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);