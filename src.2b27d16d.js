parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"KHxu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.insertAfter=exports.hideElement=exports.renderComponent=exports.renderComponentIntoSelectedTagID=void 0;var e=function(e,t){if(e&&t)return document.getElementById("".concat(t)).appendChild(e),e};exports.renderComponentIntoSelectedTagID=e;var t=function(e,t){t instanceof String&&document.querySelector(t);return t.parentNode.replaceChild(e,t),e};exports.renderComponent=t;var n=function(e){return e?e.hide():null};exports.hideElement=n;var r=function(e,t){e.parentNode.insertBefore(t,e.nextSibling)};exports.insertAfter=r;
},{}],"CuAT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.buttonPlay=void 0;var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",t=arguments.length>1?arguments[1]:void 0,n=document.createElement("button");return n.className="gameButton gameButton_play",n.innerText=e,n.onClick=t,t&&n.addEventListener("click",t),{render:function(){return n},hide:function(){n.style.display="none"}}};exports.buttonPlay=e;
},{}],"vBUq":[function(require,module,exports) {
"use strict";var e,s;function o(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.gameRules=exports.questions=exports.starships=exports.vehicles=exports.people=void 0;var t="People";exports.people=t;var a="Vehicles";exports.vehicles=a;var r="Starships";exports.starships=r;var i=(o(e={},t,"Who is this character?"),o(e,a,"Do you recognize this vehicle?"),o(e,r,"Do you recognize this starship?"),e);exports.questions=i;var n=(o(s={},t,"You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left from available options"),o(s,a,"You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select what vehicle from Star Wars is showed on the left from available options"),o(s,r,"You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select what starship from Star Wars is showed on the left from available options"),s);exports.gameRules=n;
},{}],"AOvM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gameNavigation=void 0;var t=require("../../constants"),e=function(t,e){var n=document.createElement("div");return i(n),c(n,t,e),n};exports.gameNavigation=e;var n="\n<div data-testid='".concat(t.people,"' class='nav-btn clicked'>People</div>\n<div data-testid='").concat(t.vehicles,"' class='nav-btn'>Vehicles</div>\n<div data-testid='").concat(t.starships,"' class='nav-btn'>Starships</div>\n");function a(t,e,n){var a=t.innerText;t.classList.add("clicked"),e&&e.changeLabel(a),n&&n.changeRulesDescription(a)}var i=function(t){return t.classList.add("navigation"),t.setAttribute("data-testid","html-navigation"),t.innerHTML=n,t.innerHTML},c=function(t,e,n){Array.from(t.children).forEach(function(i){return i.addEventListener("click",function(){Array.from(t.children).forEach(function(t){return t.classList.remove("clicked")}),a(i,e,n)})})};
},{"../../constants":"vBUq"}],"Mb2L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iconButton=void 0;var n=function(){},t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,c=document.createElement("button");if(c.className="iconButton",c.onclick=o,e){var i=document.createElement("span");i.className="button__icon",i.style.backgroundImage='url("../static/assets/ui/icons/icon-'.concat(e,'_24px.png")'),c.appendChild(i)}return c.innerHTML+=t,{render:function(){return c},hide:function(){c.style.display="none"}}};exports.iconButton=t;
},{}],"Sfvy":[function(require,module,exports) {
module.exports="rulesIcon.49f3844d.png";
},{}],"P92G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModeRules=void 0;var e=s(require("../../../static/assets/ui/rulesIcon.png")),t=require("../../constants"),n=require("../../utils/functions");function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function l(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var a=function(){function s(){r(this,s),this.currentRuleDescripton=t.gameRules[t.people],this.modeRulesPanel=document.createElement("div"),this.modeRulesPanelWrapper=document.createElement("div"),this.panelIcon=document.createElement("img"),this.panelHeader=document.createElement("h2"),this.modeRulesDescription=document.createElement("p")}return l(s,[{key:"decorateElements",value:function(){this.modeRulesPanel.classList.add("rules__header"),this.modeRulesPanelWrapper.classList.add("rules"),this.modeRulesPanelWrapper.setAttribute("data-testid","rules-panel"),this.panelIcon.className="rules__icon",this.panelIcon.src=e.default,this.panelHeader.innerText="Mode rules",this.modeRulesDescription.innerText=this.currentRuleDescripton}},{key:"hide",value:function(){this.modeRulesPanelWrapper.style.display="none"}},{key:"render",value:function(){return this.decorateElements(),this.modeRulesPanel.appendChild(this.panelIcon),this.modeRulesPanel.appendChild(this.panelHeader),this.modeRulesPanelWrapper.appendChild(this.modeRulesPanel),(0,n.insertAfter)(this.modeRulesPanel,this.modeRulesDescription),this.modeRulesPanelWrapper}},{key:"changeRulesDescription",value:function(e){var n=t.gameRules[e];this.currentRuleDescripton=n,this.modeRulesDescription.innerText="".concat(n)}}]),s}();exports.ModeRules=a;
},{"../../../static/assets/ui/rulesIcon.png":"Sfvy","../../constants":"vBUq","../../utils/functions":"KHxu"}],"FHC0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.peopleImage=void 0;var e=function(e){if(e){var t=document.createElement("div");return t.style.backgroundImage='url("'.concat(e,'")'),t.className="peopleImage",{render:function(){return t},hide:function(){t.style.display="none"}}}};exports.peopleImage=e;
},{}],"kEwq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.QuestionPanel=void 0;var e=require("../../constants");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}var a=function(){function t(){n(this,t),this.qPanelComponent=document.createElement("div"),this.currentGameMode=e.questions[e.people]}return o(t,[{key:"render",value:function(){return this.qPanelComponent.classList.add("q-panel"),this.qPanelComponent.setAttribute("data-testid","html-q-panel"),this.qPanelComponent.innerHTML="MODE: ".concat(this.currentGameMode),this.qPanelComponent}},{key:"hide",value:function(){this.qPanelComponent.style.display="none"}},{key:"changeLabel",value:function(n){var t=e.questions[n];this.currentGameMode=t,this.qPanelComponent.innerHTML="MODE: ".concat(t)}}]),t}();exports.QuestionPanel=a;
},{"../../constants":"vBUq"}],"JzCf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rankMode=void 0;var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");return n.className="rank",r.className="header__rank",a.className="user_list__rank",r.innerHTML="\n    <span></span>\n    <h1>Mode Ranking</h1>\n  ",e.length>=0&&(a.innerHTML="\n    <div class='user_list_item'>\n      <h2>Place</h2>\n      <p>1st</p>\n      <p>2nd</p>\n      <p>3rd</p>\n    </div>\n    <div class='user_list_item' id='rank_player'>\n      <h2>Player</h2>\n      <p>Player 1</p>\n      <p>Player 2</p>\n      <p>Player 3</p>\n    </div>\n    <div class='user_list_item' id='rank_answered'>\n      <h2>Answered</h2>\n      <p>-/-</p>\n      <p>-/-</p>\n      <p>-/-</p>\n    </div>\n  "),e.length>0&&(a.querySelector("#rank_player p:nth-child(2)").innerHTML="".concat(e[0][0]),a.querySelector("#rank_answered p:nth-child(2)").innerHTML="".concat(e[0][1])),e.length>1&&(a.querySelector("#rank_player p:nth-child(3)").innerHTML="".concat(e[1][0]),a.querySelector("#rank_answered p:nth-child(3)").innerHTML="".concat(e[1][1])),e.length>2&&(a.querySelector("#rank_player p:nth-child(4)").innerHTML="".concat(e[2][0]),a.querySelector("#rank_answered p:nth-child(4)").innerHTML="".concat(e[2][1])),n.appendChild(r),n.appendChild(a),{render:function(){return n},hide:function(){n.style.display="none"}}};exports.rankMode=e;
},{}],"VMfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MainMenu=void 0;var e=require("../../utils/functions"),n=require("../buttonPlay/buttonPlay"),o=require("../gameNavigation/GameNavigation"),t=require("../iconButton/iconButton"),r=require("../modeRules/modeRules"),a=require("../PeopleImage/peopleImage"),i=require("../questionPanel/QuestionPanel"),d=require("../rankMode/rankMode"),u=function(){var u=new i.QuestionPanel,s=new r.ModeRules,l=(0,e.renderComponentIntoSelectedTagID)((0,a.peopleImage)("../../static/assets/img/modes/people/36.jpg").render(),"swquiz-header"),m=((0,e.renderComponentIntoSelectedTagID)((0,o.gameNavigation)(u,s),"swquiz-game-intro"),(0,e.renderComponentIntoSelectedTagID)(u.render(),"swquiz-game-intro")),g=(0,e.renderComponentIntoSelectedTagID)(s.render(),"swquiz-game-intro"),p=(0,e.renderComponentIntoSelectedTagID)((0,t.iconButton)("Hall of fame","contacts",I).render(),"swquiz-game-btns"),c=(0,e.renderComponentIntoSelectedTagID)((0,n.buttonPlay)("play the game").render(),"swquiz-game-btns"),I=function(){l.hide(),m.hide(),g.hide(),p.hide(),c.hide(),(0,e.renderComponentIntoSelectedTagID)((0,d.rankMode)().render(),"swquiz-app")}};exports.MainMenu=u;
},{"../../utils/functions":"KHxu","../buttonPlay/buttonPlay":"CuAT","../gameNavigation/GameNavigation":"AOvM","../iconButton/iconButton":"Mb2L","../modeRules/modeRules":"P92G","../PeopleImage/peopleImage":"FHC0","../questionPanel/QuestionPanel":"kEwq","../rankMode/rankMode":"JzCf"}],"rDxQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("../components/mainMenu/MainMenu"),n=function(n){n.options;(0,e.MainMenu)()};exports.App=n;
},{"../components/mainMenu/MainMenu":"VMfT"}],"H99C":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("./app/App"),r=1e3,i="https://swapi.dev/api",p="120"*r;window.onload=function(){return(0,e.App)({options:{swApiBaseUrl:i,quizMaxTime:p}})};
},{"regenerator-runtime/runtime":"KA2S","./app/App":"rDxQ"}]},{},["H99C"], null)
//# sourceMappingURL=src.2b27d16d.js.map