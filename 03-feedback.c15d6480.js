!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||l.default(e,t)||f.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),f=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={save:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},d={},v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",y=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,b=/^0o[0-7]+$/i,O=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,x=_||j||Function("return this")(),h=Object.prototype.toString,w=Math.max,S=Math.min,M=function(){return x.Date.now()};function T(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function y(e){return l=e,a=setTimeout(g,t),c?v(e):u}function m(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function g(){var e=M();if(m(e))return b(e);a=setTimeout(g,function(e){var r=t-(e-f);return s?S(r,i-(e-l)):r}(e))}function b(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function O(){var e=M(),r=m(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return y(f);if(s)return a=setTimeout(g,t),v(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=A(t)||0,N(r)&&(c=!!r.leading,i=(s="maxWait"in r)?w(A(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:b(M())},O}function N(t){var r=void 0===t?"undefined":e(v)(t);return!!t&&("object"==r||"function"==r)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(v)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(y,"");var n=g.test(t);return n||b.test(t)?O(t.slice(2),n?2:8):m.test(t)?NaN:+t}d=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return N(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),T(e,t,{leading:n,maxWait:t,trailing:o})};var E,I="feedback-form-state",P=document.querySelector(".feedback-form");(E=s.load(I))&&Object.entries(E).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];P.elements[n].value=o})),P.addEventListener("input",d((function(e){var t=s.load(I);t||(t={});var r=e.target,n=r.name,o=r.value;console.log(n,o),t[n]=o,s.save(I,t)}),500));P.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget,r=t.email,n=t.message;console.log({email:r.value,message:n.value}),e.currentTarget.reset(),s.remove(I)}))}();
//# sourceMappingURL=03-feedback.c15d6480.js.map
