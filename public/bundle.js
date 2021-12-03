/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less ***!
  \**********************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '../images/backgroundForest.gif' in 'C:\\xampp\\htdocs\\test\\src\\less'\n    at finishWithoutResolve (C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:293:18)\n    at C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:362:15\n    at C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:87:43\n    at C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\xampp\\htdocs\\test\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/js/classes/card.ts":
/*!********************************!*\
  !*** ./src/js/classes/card.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
class Card {
    constructor(size, size_mobile_landscape, size_mobile_portrait, index, character) {
        this.size = size;
        this.size_mobile_landscape = size_mobile_landscape;
        this.size_mobile_portrait = size_mobile_portrait;
        this.index = index;
        this.character = character;
    }
    ;
    create() {
        const card_reverse = document.createElement("DIV");
        card_reverse.classList.add("card_reverse");
        card_reverse.style.backgroundImage = `background-image: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(1, 79, 197) 10%);
        `;
        this.changeCardsSize(card_reverse);
        window.addEventListener("resize", () => {
            this.changeCardsSize(card_reverse);
        });
        const card = document.createElement("DIV");
        card.classList.add("card");
        card.style.width = `100%`;
        card.style.height = `100%`;
        card.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        card_reverse.appendChild(card);
        const gameCards = document === null || document === void 0 ? void 0 : document.querySelector("#game_cards");
        gameCards.appendChild(card_reverse);
    }
    changeCardsSize(card_reverse) {
        if (window.screen.width < 700) {
            card_reverse.style.width = `${this.size_mobile_portrait}px`;
            card_reverse.style.height = `${this.size_mobile_portrait}px`;
        }
        else if (window.screen.width >= 700 && window.screen.width < 1000) {
            card_reverse.style.width = `${this.size_mobile_landscape}px`;
            card_reverse.style.height = `${this.size_mobile_landscape}px`;
        }
        else {
            card_reverse.style.width = `${this.size}px`;
            card_reverse.style.height = `${this.size}px`;
        }
    }
}
exports.Card = Card;


/***/ }),

/***/ "./src/js/game/end_game/index.ts":
/*!***************************************!*\
  !*** ./src/js/game/end_game/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showEndWinButton = exports.showEndLoseButtons = exports.hideVideo = exports.showVideo = void 0;
const menu_1 = __webpack_require__(/*! ../menu */ "./src/js/game/menu/index.ts");
const play_1 = __webpack_require__(/*! ../menu/buttons/play */ "./src/js/game/menu/buttons/play.ts");
function showVideo(video) {
    const divVideo = document === null || document === void 0 ? void 0 : document.querySelector(".video");
    divVideo.style.display = "block";
    divVideo.appendChild(video);
    divVideo.style.animation = "show 2s";
    video.play();
    video.playbackRate = 1.4;
}
exports.showVideo = showVideo;
function hideVideo(sound) {
    sound.play();
    const divVideo = document === null || document === void 0 ? void 0 : document.querySelector(".video");
    divVideo.style.animation = "hide 2s";
    divVideo.style.animationFillMode = "forwards";
    divVideo.style.display = "none";
}
exports.hideVideo = hideVideo;
function showEndLoseButtons() {
    const endScreenLoseButtons = document === null || document === void 0 ? void 0 : document.querySelector(".buttons_end_lose");
    const mainMenuButton = document === null || document === void 0 ? void 0 : document.querySelector(".main_menu");
    const tryAgainButton = document === null || document === void 0 ? void 0 : document.querySelector(".try_again");
    endScreenLoseButtons.style.display = "flex";
    endScreenLoseButtons.style.animation = "show 2s";
    endScreenLoseButtons.style.animationFillMode = "forwards";
    mainMenuButton === null || mainMenuButton === void 0 ? void 0 : mainMenuButton.addEventListener("click", menu_1.backToMenu);
    tryAgainButton === null || tryAgainButton === void 0 ? void 0 : tryAgainButton.addEventListener("click", play_1.menuButtonPlayAction);
}
exports.showEndLoseButtons = showEndLoseButtons;
function showEndWinButton() {
    const endScreenWinButton = document === null || document === void 0 ? void 0 : document.querySelector(".buttons_end_win");
    const go = document === null || document === void 0 ? void 0 : document.querySelector(".go");
    endScreenWinButton.style.display = "flex";
    endScreenWinButton.style.animation = "show 2s";
    endScreenWinButton.style.animationFillMode = "forwards";
    go === null || go === void 0 ? void 0 : go.addEventListener("click", function () {
        const nickNamePanel = document === null || document === void 0 ? void 0 : document.querySelector(".enter_nickname");
        nickNamePanel.style.display = "block";
        nickNamePanel.style.animation = "show 1s";
        nickNamePanel.style.animationFillMode = "forwards";
    });
}
exports.showEndWinButton = showEndWinButton;


/***/ }),

/***/ "./src/js/game/end_game/lose.ts":
/*!**************************************!*\
  !*** ./src/js/game/end_game/lose.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.losingProcedure = void 0;
const variables_1 = __webpack_require__(/*! ../../variables */ "./src/js/variables.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/js/game/end_game/index.ts");
const menu_1 = __webpack_require__(/*! ../menu */ "./src/js/game/menu/index.ts");
const play_1 = __webpack_require__(/*! ../menu/buttons/play */ "./src/js/game/menu/buttons/play.ts");
function losingProcedure() {
    return __awaiter(this, void 0, void 0, function* () {
        const endScreenLose = document === null || document === void 0 ? void 0 : document.querySelector(".buttons_end_lose");
        const backMenuButton = endScreenLose === null || endScreenLose === void 0 ? void 0 : endScreenLose.querySelector(".main_menu");
        const tryAgainButton = endScreenLose === null || endScreenLose === void 0 ? void 0 : endScreenLose.querySelector(".try_again");
        index_1.showVideo(variables_1.loseVideo);
        variables_1.loseVideo.addEventListener("ended", showLoseButtons);
        backMenuButton === null || backMenuButton === void 0 ? void 0 : backMenuButton.addEventListener("click", menu_1.backToMenu);
        tryAgainButton === null || tryAgainButton === void 0 ? void 0 : tryAgainButton.addEventListener("click", play_1.menuButtonPlayAction);
    });
}
exports.losingProcedure = losingProcedure;
function showLoseButtons() {
    index_1.hideVideo(variables_1.loseSound);
    const content = document === null || document === void 0 ? void 0 : document.querySelector("#page_lose .content");
    content.style.display = "block";
    content.style.animation = "show 2s";
    content.style.animationFillMode = "forwards";
}


/***/ }),

/***/ "./src/js/game/end_game/nickname.ts":
/*!******************************************!*\
  !*** ./src/js/game/end_game/nickname.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showBestPlayerPage = void 0;
const gate_1 = __webpack_require__(/*! ../../gate */ "./src/js/gate.ts");
const menu_1 = __webpack_require__(/*! ../menu */ "./src/js/game/menu/index.ts");
function showBestPlayerPage(playerTotalScore) {
    const pointsPage = document === null || document === void 0 ? void 0 : document.querySelector("#page_summary");
    const nicknamePage = document === null || document === void 0 ? void 0 : document.querySelector("#page_nickname");
    const spanPoints = document === null || document === void 0 ? void 0 : document.querySelector("span.scored_points");
    const inputPoints = document === null || document === void 0 ? void 0 : document.querySelector(".enter_nickname input[type='text']");
    pointsPage.style.animation = "hide 2s";
    pointsPage.style.animationFillMode = "forwards";
    pointsPage.addEventListener("ended", function () { this.style.display = "none"; });
    nicknamePage.style.display = "block";
    nicknamePage.style.animation = "show 2s 2s";
    nicknamePage.style.animationFillMode = "forwards";
    spanPoints.innerHTML = "" + playerTotalScore;
    window.addEventListener('keypress', function (e) {
        if (e.key === 'Enter')
            enterBestPlayer(inputPoints, playerTotalScore);
    });
}
exports.showBestPlayerPage = showBestPlayerPage;
function enterBestPlayer(inputPoints, playerTotalScore) {
    return __awaiter(this, void 0, void 0, function* () {
        yield noteBestPlayer(inputPoints.value, playerTotalScore);
        yield gate_1.changeView('menu');
        menu_1.menuButtonsService();
    });
}
function noteBestPlayer(playerNick, playerTotalScore) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', './php/results/addNewPlayer.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`nickname=${playerNick}&points=${playerTotalScore}`);
}


/***/ }),

/***/ "./src/js/game/end_game/summary.ts":
/*!*****************************************!*\
  !*** ./src/js/game/end_game/summary.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = void 0;
const options_1 = __webpack_require__(/*! ../menu/buttons/options */ "./src/js/game/menu/buttons/options.ts");
const timer_1 = __webpack_require__(/*! .././timer */ "./src/js/game/timer.ts");
const play_1 = __webpack_require__(/*! .././play */ "./src/js/game/play.ts");
var multipliers;
(function (multipliers) {
    multipliers[multipliers["multiplierCards"] = 200] = "multiplierCards";
    multipliers[multipliers["multiplieTimeLeft"] = 5] = "multiplieTimeLeft";
    multipliers[multipliers["multiplieTimeBonus"] = 100] = "multiplieTimeBonus";
    multipliers[multipliers["multiplieTimeInitial"] = 10] = "multiplieTimeInitial";
    multipliers[multipliers["multiplieMoves"] = 20] = "multiplieMoves";
})(multipliers || (multipliers = {}));
let totalSum = 0;
let updateTotalSum;
function* updateTotalSumGenerator(x) {
    totalSum += yield;
    totalSum += yield;
    totalSum += yield;
    totalSum -= yield;
    totalSum -= yield;
}
function summary() {
    return __awaiter(this, void 0, void 0, function* () {
        totalSum = 0;
        const cardsNumber = document === null || document === void 0 ? void 0 : document.querySelector(".statistics#cardsNumber");
        const timeInitial = document === null || document === void 0 ? void 0 : document.querySelector(".statistics#timeInitial");
        const timeLeft = document === null || document === void 0 ? void 0 : document.querySelector(".statistics#timeLeft");
        const timeBonus = document === null || document === void 0 ? void 0 : document.querySelector(".statistics#timeBonus");
        const madeMoves = document === null || document === void 0 ? void 0 : document.querySelector(".statistics#madeMoves");
        const totalPoints = document === null || document === void 0 ? void 0 : document.querySelector(".statistics#totalPoints");
        const statisticsScores = {
            cardsNumberScore: cardsNumber === null || cardsNumber === void 0 ? void 0 : cardsNumber.querySelector(":scope > .statistics_segment_score"),
            timeInitialScore: timeInitial === null || timeInitial === void 0 ? void 0 : timeInitial.querySelector(":scope > .statistics_segment_score"),
            timeLeftScore: timeLeft === null || timeLeft === void 0 ? void 0 : timeLeft.querySelector(":scope > .statistics_segment_score"),
            timeBonusScore: timeBonus === null || timeBonus === void 0 ? void 0 : timeBonus.querySelector(":scope > .statistics_segment_score"),
            madeMovesScore: madeMoves === null || madeMoves === void 0 ? void 0 : madeMoves.querySelector(":scope > .statistics_segment_score"),
            totalPointsScore: totalPoints === null || totalPoints === void 0 ? void 0 : totalPoints.querySelector(":scope > .statistics_segment_score .score_full"),
        };
        statisticsScores.totalPointsScore.innerHTML = `0`;
        updateTotalSum = updateTotalSumGenerator(0);
        updateTotalSum.next(0);
        let cardsNumberScored = options_1.selectedOptions.cardsNumber;
        let timeInitialScored = options_1.selectedOptions.time | 0;
        let timeBonusScored = !options_1.selectedOptions.time ? 0 : options_1.selectedOptions.selectedTime;
        let timeLeftScored = timer_1.currentTime | 0;
        let madeMovesScored = play_1.turnCounter;
        const totalSegmentPointsCards = yield summarizePoints(cardsNumberScored, cardsNumber, statisticsScores.cardsNumberScore, multipliers.multiplierCards);
        yield summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards, statisticsScores);
        const totalSegmentPointsTimeLeft = yield summarizePoints(timeLeftScored, timeLeft, statisticsScores.timeLeftScore, multipliers.multiplieTimeLeft);
        yield summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft, statisticsScores);
        const totalSegmentPointsTimeBonus = yield summarizePoints(timeBonusScored, timeBonus, statisticsScores.timeBonusScore, multipliers.multiplieTimeBonus);
        yield summarizeTotalPoints(totalSum + totalSegmentPointsTimeBonus, totalSegmentPointsTimeBonus, statisticsScores);
        const totalSegmentPointstimeInitial = yield summarizePoints(timeInitialScored, timeInitial, statisticsScores.timeInitialScore, multipliers.multiplieTimeInitial);
        yield summarizeTotalPoints(totalSum - totalSegmentPointstimeInitial, totalSegmentPointstimeInitial, statisticsScores);
        const totalSegmentPointsMoves = yield summarizePoints(madeMovesScored, madeMoves, statisticsScores.madeMovesScore, multipliers.multiplieMoves);
        yield summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves, statisticsScores);
        // cardsNumberScored = 0;
        // timeInitialScored = 0;
        // timeBonusScored = 0;
        // timeLeftScored = 0;
        // madeMovesScored = 0;
        return totalSum;
    });
}
exports.summary = summary;
function summarizePoints(x, statisticsPart, statisticsScore, multiplier) {
    return __awaiter(this, void 0, void 0, function* () {
        statisticsPart.style.display = "flex";
        statisticsScore.querySelector(":scope > .score").innerHTML = `0 x ${multiplier} = `;
        let i = 0;
        return new Promise((resolve, reject) => {
            const incrementScore = setInterval(() => {
                if (i < x) {
                    i++;
                    statisticsScore.querySelector(":scope > .score").innerHTML = `${i} x ${multiplier} = `;
                }
                else {
                    clearInterval(incrementScore);
                    statisticsScore.querySelector(":scope > .score_full").innerHTML = `${i * multiplier} points`;
                    resolve(i * multiplier);
                }
            }, 50);
        });
    });
}
function summarizeTotalPoints(totalSumWithValueToUpdate, valueToUpdate, statisticsScores) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let x = totalSum;
            const incrementTotalScore = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                if (x < totalSumWithValueToUpdate) {
                    statisticsScores.totalPointsScore.innerHTML = `${x + 5}`;
                    x += 5;
                }
                else if (x > totalSumWithValueToUpdate) {
                    statisticsScores.totalPointsScore.innerHTML = `${x - 5}`;
                    x -= 5;
                    statisticsScores.totalPointsScore.style.animation = "squintingTimer .4s infinite";
                }
                else {
                    clearInterval(incrementTotalScore);
                    yield updateTotalSum.next(valueToUpdate);
                    statisticsScores.totalPointsScore.style.animation = "none";
                    resolve();
                }
            }), 1);
        });
    });
}


/***/ }),

/***/ "./src/js/game/end_game/win.ts":
/*!*************************************!*\
  !*** ./src/js/game/end_game/win.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.winningProcedure = void 0;
const index_1 = __webpack_require__(/*! ./index */ "./src/js/game/end_game/index.ts");
const summary_1 = __webpack_require__(/*! ./summary */ "./src/js/game/end_game/summary.ts");
const gate_1 = __webpack_require__(/*! ../../gate */ "./src/js/gate.ts");
const variables_1 = __webpack_require__(/*! ../../variables */ "./src/js/variables.ts");
const nickname_1 = __webpack_require__(/*! ./nickname */ "./src/js/game/end_game/nickname.ts");
function winningProcedure() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gate_1.changeView("win");
        const statisticsParts = {
            cardsNumber: document === null || document === void 0 ? void 0 : document.querySelector(".statistics#cardsNumber"),
            timeInitial: document === null || document === void 0 ? void 0 : document.querySelector(".statistics#timeInitial"),
            timeLeft: document === null || document === void 0 ? void 0 : document.querySelector(".statistics#timeLeft"),
            timeBonus: document === null || document === void 0 ? void 0 : document.querySelector(".statistics#timeBonus"),
            madeMoves: document === null || document === void 0 ? void 0 : document.querySelector(".statistics#madeMoves"),
            totalPoints: document === null || document === void 0 ? void 0 : document.querySelector(".statistics#totalPoints"),
        };
        const pointsPage = document === null || document === void 0 ? void 0 : document.querySelector("#page_summary");
        const endScreenWinButton = document === null || document === void 0 ? void 0 : document.querySelector(".buttons_end_win");
        statisticsParts.totalPoints.style.display = "flex";
        pointsPage.style.display = "block";
        pointsPage.style.animation = "show 2s";
        const playerTotalScore = yield summary_1.summary();
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            if (playerTotalScore > +this.responseText) {
                variables_1.winSound.play();
                index_1.showEndWinButton();
                endScreenWinButton.addEventListener('click', function () {
                    nickname_1.showBestPlayerPage(playerTotalScore);
                });
                window.addEventListener('keypress', function (e) {
                    if (e.key === 'enter')
                        nickname_1.showBestPlayerPage(playerTotalScore);
                });
            }
            else {
                index_1.showEndLoseButtons();
            }
        };
        xhttp.open('GET', './php/results/get10thBestPlayer.php', true);
        xhttp.send();
    });
}
exports.winningProcedure = winningProcedure;


/***/ }),

/***/ "./src/js/game/init_game.ts":
/*!**********************************!*\
  !*** ./src/js/game/init_game.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initGame = exports.allGameCards = void 0;
const card_1 = __webpack_require__(/*! ./../classes/card */ "./src/js/classes/card.ts");
const options_1 = __webpack_require__(/*! ./menu/buttons/options */ "./src/js/game/menu/buttons/options.ts");
exports.allGameCards = [];
let originCards;
let size;
let size_mobile_landscape;
let size_mobile_portrait;
function getCards() {
    switch (options_1.selectedOptions.cardsNumber) {
        case 16: {
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"];
            size = 170;
            size_mobile_landscape = 100;
            size_mobile_portrait = 150;
            break;
        }
        case 20: {
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"];
            size = 140;
            size_mobile_landscape = 93;
            size_mobile_portrait = 155;
            break;
        }
        case 24: {
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"];
            size = 117;
            size_mobile_landscape = 77;
            size_mobile_portrait = 140;
            break;
        }
    }
}
function initGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const gameCards = document === null || document === void 0 ? void 0 : document.querySelector("#game_cards");
        gameCards.innerHTML = "";
        yield getCards();
        exports.allGameCards.splice(0, exports.allGameCards.length);
        while (exports.allGameCards.length < originCards.length * 2) {
            const i = Math.floor(Math.random() * originCards.length);
            const isThereTwoSameCards = exports.allGameCards.filter(el => el === originCards[i]);
            if (isThereTwoSameCards.length == 2) {
                continue;
            }
            else {
                exports.allGameCards.push(originCards[i]);
                const card = new card_1.Card(size, size_mobile_landscape, size_mobile_portrait, 1, originCards[i]);
                card.create();
            }
        }
    });
}
exports.initGame = initGame;


/***/ }),

/***/ "./src/js/game/menu/buttons/bestScore.ts":
/*!***********************************************!*\
  !*** ./src/js/game/menu/buttons/bestScore.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.menuButtonBestScoresAction = void 0;
const gate_1 = __webpack_require__(/*! ../../../gate */ "./src/js/gate.ts");
const __1 = __webpack_require__(/*! .. */ "./src/js/game/menu/index.ts");
function menuButtonBestScoresAction() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gate_1.changeView('best_scores');
        const backMenuButton = document === null || document === void 0 ? void 0 : document.querySelector(".back_menu");
        backMenuButton === null || backMenuButton === void 0 ? void 0 : backMenuButton.addEventListener("click", __1.backToMenu, { once: true });
        window.addEventListener("keyup", (e) => { if (e.key === 'Escape' || e.key === 'Enter')
            __1.backToMenu(); });
    });
}
exports.menuButtonBestScoresAction = menuButtonBestScoresAction;


/***/ }),

/***/ "./src/js/game/menu/buttons/options.ts":
/*!*********************************************!*\
  !*** ./src/js/game/menu/buttons/options.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.menuButtonOptionsAction = exports.selectedOptions = void 0;
const gate_1 = __webpack_require__(/*! ../../../gate */ "./src/js/gate.ts");
const __1 = __webpack_require__(/*! .. */ "./src/js/game/menu/index.ts");
;
let enumIndex = 3;
exports.selectedOptions = {
    cardsNumber: 16,
    time: null,
    selectedTime: 11 - enumIndex
};
var enumCardsNumber;
(function (enumCardsNumber) {
    enumCardsNumber[enumCardsNumber["opt1"] = 16] = "opt1";
    enumCardsNumber[enumCardsNumber["opt2"] = 20] = "opt2";
    enumCardsNumber[enumCardsNumber["opt3"] = 24] = "opt3";
})(enumCardsNumber || (enumCardsNumber = {}));
;
var enumTimer;
(function (enumTimer) {
    enumTimer[enumTimer["opt1"] = 15] = "opt1";
    enumTimer[enumTimer["opt2"] = 20] = "opt2";
    enumTimer[enumTimer["opt3"] = 25] = "opt3";
    enumTimer[enumTimer["opt4"] = 30] = "opt4";
    enumTimer[enumTimer["opt5"] = 35] = "opt5";
    enumTimer[enumTimer["opt6"] = 40] = "opt6";
    enumTimer[enumTimer["opt7"] = 45] = "opt7";
    enumTimer[enumTimer["opt8"] = 50] = "opt8";
    enumTimer[enumTimer["opt9"] = 55] = "opt9";
    enumTimer[enumTimer["opt10"] = 60] = "opt10";
})(enumTimer || (enumTimer = {}));
;
const enumLength = Object.keys(enumTimer).length / 2;
function setInitialOptions(optionsCardsNumber, optionsTimer, timer) {
    optionsCardsNumber === null || optionsCardsNumber === void 0 ? void 0 : optionsCardsNumber.children[(exports.selectedOptions.cardsNumber - 16) / 4].classList.add("active");
    if (exports.selectedOptions.time === null)
        optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[0].classList.add("active");
    else {
        optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[0].classList.remove("active");
        optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[1].classList.add("active");
        timer.style.display = "block";
    }
}
function setCardsNumber(el, index) {
    exports.selectedOptions.cardsNumber = enumCardsNumber[`opt${index + 1}`];
    el.classList.add("active");
}
function setTimer(clockMinutes, clockSeconds) {
    exports.selectedOptions.time = enumTimer[`opt${enumIndex}`];
    exports.selectedOptions.selectedTime = 11 - enumIndex;
    const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60);
    const seconds = enumTimer[`opt${enumIndex}`] % 60;
    clockMinutes.innerHTML = ` ${minutes} `;
    clockSeconds.innerHTML = seconds < 10 ? ` 0${seconds} ` : ` ${seconds} `;
}
function menuButtonOptionsAction() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gate_1.changeView('options');
        const optionsCardsNumber = document === null || document === void 0 ? void 0 : document.querySelector(".optCardsNumber");
        const optionsTimer = document === null || document === void 0 ? void 0 : document.querySelector(".optTimer");
        const timer = document === null || document === void 0 ? void 0 : document.querySelector(".timer");
        const clockMinutes = document === null || document === void 0 ? void 0 : document.querySelector(".timer span.clockTimeMinutes");
        const clockSeconds = document === null || document === void 0 ? void 0 : document.querySelector(".timer span.clockTimeSeconds");
        const minusTime = document === null || document === void 0 ? void 0 : document.querySelector(".setTimer.minusTime");
        const plusTime = document === null || document === void 0 ? void 0 : document.querySelector(".setTimer.plusTime");
        const backMenuButton = document === null || document === void 0 ? void 0 : document.querySelector("button.back_menu");
        setInitialOptions(optionsCardsNumber, optionsTimer, timer);
        const cardsOptions = Array.from(optionsCardsNumber.children);
        cardsOptions.forEach((optionCardsNumber, index) => optionCardsNumber.addEventListener("click", () => {
            cardsOptions.forEach(optionCardsNumber => optionCardsNumber.classList.remove("active"));
            setCardsNumber(optionCardsNumber, index);
        }));
        optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[0].addEventListener("click", function () {
            optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[1].classList.remove("active");
            this.classList.add("active");
            timer.style.display = "none";
            exports.selectedOptions.time = null;
            exports.selectedOptions.selectedTime = 0;
        });
        optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[1].addEventListener("click", function () {
            optionsTimer === null || optionsTimer === void 0 ? void 0 : optionsTimer.children[0].classList.remove("active");
            this.classList.add("active");
            timer.style.display = "block";
            exports.selectedOptions.time = enumTimer[`opt${enumIndex}`];
            clockSeconds.innerHTML = "" + exports.selectedOptions.time;
        });
        minusTime === null || minusTime === void 0 ? void 0 : minusTime.addEventListener("click", function () {
            enumIndex == 1 ? enumIndex = enumLength : enumIndex--;
            setTimer(clockMinutes, clockSeconds);
        });
        plusTime === null || plusTime === void 0 ? void 0 : plusTime.addEventListener("click", function () {
            enumIndex == enumLength ? enumIndex = 1 : enumIndex++;
            setTimer(clockMinutes, clockSeconds);
        });
        backMenuButton === null || backMenuButton === void 0 ? void 0 : backMenuButton.addEventListener("click", __1.backToMenu, { once: true });
        window.addEventListener("keyup", (e) => { if (e.key === 'Escape')
            __1.backToMenu(); });
    });
}
exports.menuButtonOptionsAction = menuButtonOptionsAction;


/***/ }),

/***/ "./src/js/game/menu/buttons/play.ts":
/*!******************************************!*\
  !*** ./src/js/game/menu/buttons/play.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.menuButtonPlayAction = void 0;
const gate_1 = __webpack_require__(/*! ../../../gate */ "./src/js/gate.ts");
const __1 = __webpack_require__(/*! ../ */ "./src/js/game/menu/index.ts");
const init_game_1 = __webpack_require__(/*! ../../init_game */ "./src/js/game/init_game.ts");
const play_1 = __webpack_require__(/*! ../../play */ "./src/js/game/play.ts");
const timer_1 = __webpack_require__(/*! ../../timer */ "./src/js/game/timer.ts");
function menuButtonPlayAction() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gate_1.changeView("game");
        yield init_game_1.initGame();
        yield play_1.mainGame();
        yield timer_1.startTimer();
        window.addEventListener("keyup", (e) => { if (e.key === 'Escape')
            __1.backToMenu(); });
    });
}
exports.menuButtonPlayAction = menuButtonPlayAction;


/***/ }),

/***/ "./src/js/game/menu/buttons/sound.ts":
/*!*******************************************!*\
  !*** ./src/js/game/menu/buttons/sound.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unmuteAudio = exports.toggleAudio = void 0;
const variables_1 = __webpack_require__(/*! ../../../variables */ "./src/js/variables.ts");
function toggleAudio() {
    variables_1.audios.forEach(audio => audio.muted = !audio.muted);
    const menuButtonToggleSound = document === null || document === void 0 ? void 0 : document.querySelector(".switch_sound");
    if (menuButtonToggleSound) {
        const statusSound = variables_1.backgroundSound.muted ? 'muted' : 'unmuted';
        menuButtonToggleSound.innerHTML = `<img src="images/${statusSound}.png" alt=${statusSound}/>`;
    }
}
exports.toggleAudio = toggleAudio;
function unmuteAudio() {
    variables_1.backgroundSound.autoplay = true;
    variables_1.backgroundSound.loop = true;
}
exports.unmuteAudio = unmuteAudio;


/***/ }),

/***/ "./src/js/game/menu/index.ts":
/*!***********************************!*\
  !*** ./src/js/game/menu/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.backToMenu = exports.menuButtonsService = void 0;
const gate_1 = __webpack_require__(/*! ../../gate */ "./src/js/gate.ts");
const play_1 = __webpack_require__(/*! ./buttons/play */ "./src/js/game/menu/buttons/play.ts");
const options_1 = __webpack_require__(/*! ./buttons/options */ "./src/js/game/menu/buttons/options.ts");
const bestScore_1 = __webpack_require__(/*! ./buttons/bestScore */ "./src/js/game/menu/buttons/bestScore.ts");
const sound_1 = __webpack_require__(/*! ./buttons/sound */ "./src/js/game/menu/buttons/sound.ts");
const keyboardNavigation_1 = __webpack_require__(/*! ./navigation/keyboardNavigation */ "./src/js/game/menu/navigation/keyboardNavigation.ts");
const mouseNavigation_1 = __webpack_require__(/*! ./navigation/mouseNavigation */ "./src/js/game/menu/navigation/mouseNavigation.ts");
function menuButtonsService() {
    const menuButtonPlay = document === null || document === void 0 ? void 0 : document.querySelector("#menu_play");
    const menuButtonOptions = document === null || document === void 0 ? void 0 : document.querySelector("#menu_options");
    const menuButtonBestScores = document === null || document === void 0 ? void 0 : document.querySelector("#menu_bestScores");
    const menuButtonToggleSound = document === null || document === void 0 ? void 0 : document.querySelector(".switch_sound");
    menuButtonPlay === null || menuButtonPlay === void 0 ? void 0 : menuButtonPlay.addEventListener('click', play_1.menuButtonPlayAction);
    menuButtonOptions === null || menuButtonOptions === void 0 ? void 0 : menuButtonOptions.addEventListener('click', options_1.menuButtonOptionsAction);
    menuButtonBestScores === null || menuButtonBestScores === void 0 ? void 0 : menuButtonBestScores.addEventListener('click', bestScore_1.menuButtonBestScoresAction);
    menuButtonToggleSound === null || menuButtonToggleSound === void 0 ? void 0 : menuButtonToggleSound.addEventListener("click", sound_1.toggleAudio);
    menuButtonPlay === null || menuButtonPlay === void 0 ? void 0 : menuButtonPlay.addEventListener('mouseover', () => mouseNavigation_1.menuMouseNavigation(menuButtonPlay));
    menuButtonOptions === null || menuButtonOptions === void 0 ? void 0 : menuButtonOptions.addEventListener('mouseover', () => mouseNavigation_1.menuMouseNavigation(menuButtonOptions));
    menuButtonBestScores === null || menuButtonBestScores === void 0 ? void 0 : menuButtonBestScores.addEventListener('mouseover', () => mouseNavigation_1.menuMouseNavigation(menuButtonBestScores));
    window.addEventListener("keydown", keyboardNavigation_1.menuKeyboardNavigation);
}
exports.menuButtonsService = menuButtonsService;
function backToMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const isPageMenu = !!document.querySelector('#page_menu');
        const isPageWin = !!document.querySelector('#page_summary');
        if (!isPageMenu && !isPageWin) {
            yield gate_1.changeView('menu');
            menuButtonsService();
        }
    });
}
exports.backToMenu = backToMenu;


/***/ }),

/***/ "./src/js/game/menu/navigation/index.ts":
/*!**********************************************!*\
  !*** ./src/js/game/menu/navigation/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeClassActive = exports.bestScores = exports.options = exports.play = void 0;
const play_1 = __webpack_require__(/*! ../buttons/play */ "./src/js/game/menu/buttons/play.ts");
const options_1 = __webpack_require__(/*! ../buttons/options */ "./src/js/game/menu/buttons/options.ts");
const bestScore_1 = __webpack_require__(/*! ../buttons/bestScore */ "./src/js/game/menu/buttons/bestScore.ts");
function play() {
    play_1.menuButtonPlayAction();
}
exports.play = play;
function options() {
    options_1.menuButtonOptionsAction();
}
exports.options = options;
function bestScores() {
    bestScore_1.menuButtonBestScoresAction();
}
exports.bestScores = bestScores;
function removeClassActive() {
    const menuButtons = document === null || document === void 0 ? void 0 : document.querySelectorAll("[id^='menu_'");
    menuButtons.forEach(menuButton => menuButton === null || menuButton === void 0 ? void 0 : menuButton.classList.remove("active"));
}
exports.removeClassActive = removeClassActive;


/***/ }),

/***/ "./src/js/game/menu/navigation/keyboardNavigation.ts":
/*!***********************************************************!*\
  !*** ./src/js/game/menu/navigation/keyboardNavigation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.menuKeyboardNavigation = void 0;
const sound_1 = __webpack_require__(/*! ../buttons/sound */ "./src/js/game/menu/buttons/sound.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/js/game/menu/navigation/index.ts");
function menuKeyboardNavigation(e) {
    const menuButtonActive = document === null || document === void 0 ? void 0 : document.querySelector(".menu_button.active");
    switch (e.key) {
        case "ArrowDown":
            index_1.removeClassActive();
            arrowDown(menuButtonActive);
            break;
        case "ArrowUp":
            index_1.removeClassActive();
            arrowUp(menuButtonActive);
            break;
        case "Enter":
            enter(menuButtonActive, index_1.play, index_1.options, index_1.bestScores);
            break;
        case "M":
        case "m":
            sound_1.toggleAudio();
            break;
        default: null;
    }
}
exports.menuKeyboardNavigation = menuKeyboardNavigation;
function arrowDown(button) {
    const menuButtons = document === null || document === void 0 ? void 0 : document.querySelectorAll("[id^='menu_'");
    const index = Array.from(menuButtons).findIndex(menuButton => menuButton.isEqualNode(button));
    menuButtons[index === 2 ? 0 : index + 1].classList.add("active");
}
function arrowUp(button) {
    const menuButtons = document === null || document === void 0 ? void 0 : document.querySelectorAll("[id^='menu_'");
    const index = Array.from(menuButtons).findIndex(menuButton => menuButton.isEqualNode(button));
    menuButtons[index == 0 ? menuButtons.length - 1 : index - 1].classList.add("active");
}
function enter(menuButton, play, options, bestScores) {
    const isPageMenuExists = !!document.querySelector('#page_menu');
    if (isPageMenuExists) {
        const id = menuButton.id.replace("menu_", "");
        eval(`${id}()`);
    }
}


/***/ }),

/***/ "./src/js/game/menu/navigation/mouseNavigation.ts":
/*!********************************************************!*\
  !*** ./src/js/game/menu/navigation/mouseNavigation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.menuMouseNavigation = void 0;
const _1 = __webpack_require__(/*! . */ "./src/js/game/menu/navigation/index.ts");
function menuMouseNavigation(menuButton) {
    _1.removeClassActive();
    menuButton === null || menuButton === void 0 ? void 0 : menuButton.classList.add("active");
}
exports.menuMouseNavigation = menuMouseNavigation;


/***/ }),

/***/ "./src/js/game/play.ts":
/*!*****************************!*\
  !*** ./src/js/game/play.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mainGame = exports.totalPairs = exports.turnCounter = void 0;
const variables_1 = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");
const init_game_1 = __webpack_require__(/*! ./init_game */ "./src/js/game/init_game.ts");
const win_1 = __webpack_require__(/*! ./end_game/win */ "./src/js/game/end_game/win.ts");
let oneVisible = false;
let blockRevealCard = false;
exports.turnCounter = 0;
let firstCardIndex = 0;
function mainGame() {
    exports.turnCounter = 0;
    const scoreCounter = document === null || document === void 0 ? void 0 : document.getElementById("scoreCounter");
    scoreCounter.innerHTML = `${exports.turnCounter}`;
    exports.totalPairs = init_game_1.allGameCards.length / 2;
    // gets all cards
    const playableCardsBackground = document.querySelectorAll(".card_reverse");
    const playableCards = document.querySelectorAll(".card");
    playableCards.forEach((playableCard, index) => {
        playableCard.addEventListener("click", function () {
            if (playableCard.style.opacity !== "0" && blockRevealCard == false) {
                variables_1.cardSound.play();
                blockRevealCard = true;
                playableCard.style.backgroundImage = `url(./images/cards/${init_game_1.allGameCards[index]}.png)`;
                if (oneVisible == false) {
                    firstCardIndex = index;
                    oneVisible = true;
                    blockRevealCard = false;
                }
                else {
                    exports.turnCounter++;
                    scoreCounter.innerHTML = `${exports.turnCounter}`;
                    if (init_game_1.allGameCards[firstCardIndex] == init_game_1.allGameCards[index] && firstCardIndex != index) {
                        setTimeout(() => { hitPair(playableCardsBackground[index], playableCardsBackground[firstCardIndex]); }, 500);
                        exports.totalPairs--;
                        if (exports.totalPairs == 0)
                            setTimeout(() => { win_1.winningProcedure(); }, 1000);
                    }
                    else
                        setTimeout(() => { missedPair(playableCard, playableCards[firstCardIndex]); }, 500);
                    oneVisible = false;
                }
            }
        });
    });
}
exports.mainGame = mainGame;
function hitPair(card1, card2) {
    blockRevealCard = false;
    card1.style.opacity = "0";
    card2.style.opacity = "0";
    card1.children[0].style.opacity = "0";
    card2.children[0].style.opacity = "0";
    card1.style.cursor = "default";
    card2.style.cursor = "default";
}
function missedPair(card1, card2) {
    card1.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
    card2.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
    blockRevealCard = false;
}


/***/ }),

/***/ "./src/js/game/timer.ts":
/*!******************************!*\
  !*** ./src/js/game/timer.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startTimer = exports.currentTime = void 0;
const play_1 = __webpack_require__(/*! ./play */ "./src/js/game/play.ts");
const options_1 = __webpack_require__(/*! ./menu/buttons/options */ "./src/js/game/menu/buttons/options.ts");
const lose_1 = __webpack_require__(/*! ./end_game/lose */ "./src/js/game/end_game/lose.ts");
const gate_1 = __webpack_require__(/*! ../gate */ "./src/js/gate.ts");
function startTimer() {
    return __awaiter(this, void 0, void 0, function* () {
        const timer = document === null || document === void 0 ? void 0 : document.getElementById("timer");
        const timeCounter = document === null || document === void 0 ? void 0 : document.getElementById("timeCounter");
        if (options_1.selectedOptions.time !== null) {
            timer.style.display = "block";
            exports.currentTime = options_1.selectedOptions.time;
            timeCounter.innerHTML = exports.currentTime.toString();
            const startTimer = setInterval(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    window.addEventListener("keyup", (e) => { if (e.key === 'Escape')
                        clearInterval(startTimer); });
                    exports.currentTime--;
                    timeCounter.innerHTML = exports.currentTime.toString();
                    if (exports.currentTime <= 5 && exports.currentTime >= 0) {
                        timer.style.animation = "squintingTimer .4s infinite";
                        timer.style.animationDirection = "alternate";
                    }
                    if (exports.currentTime == -1) {
                        clearInterval(startTimer);
                        const timeCounter = document === null || document === void 0 ? void 0 : document.getElementById("timeCounter");
                        timeCounter.innerHTML = "0";
                        yield gate_1.changeView('lose');
                        lose_1.losingProcedure();
                        timer.style.animation = "none";
                    }
                    if (play_1.totalPairs == 0) {
                        clearInterval(startTimer);
                        timer.style.animation = "none";
                    }
                });
            }, 1000);
        }
        else {
            timer.style.display = "none";
        }
    });
}
exports.startTimer = startTimer;


/***/ }),

/***/ "./src/js/gate.ts":
/*!************************!*\
  !*** ./src/js/gate.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changeView = void 0;
const variables_1 = __webpack_require__(/*! ./variables */ "./src/js/variables.ts");
function changeView(filename) {
    return new Promise((resolve, reject) => {
        variables_1.overlay.style.display = "block";
        variables_1.gateLeft.style.animation = "closeTheGateLeft 1s";
        variables_1.gateLeft.style.animationFillMode = "forwards";
        variables_1.gateRight.style.animation = "closeTheGateRight 1s";
        variables_1.gateRight.style.animationFillMode = "forwards";
        variables_1.gateRight.addEventListener('animationend', () => {
            variables_1.overlay.style.display = "none";
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                const page = document.querySelector(".page");
                page.innerHTML = this.responseText;
                resolve();
            };
            xhttp.open("GET", `./php/pages/${filename}.php`, true);
            xhttp.send();
            variables_1.gateLeft.style.animation = "openTheGateLeft 1s";
            variables_1.gateRight.style.animation = "openTheGateRight 1s";
        }, { once: true });
    });
}
exports.changeView = changeView;


/***/ }),

/***/ "./src/js/variables.ts":
/*!*****************************!*\
  !*** ./src/js/variables.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loseVideo = exports.audios = exports.winSound = exports.loseSound = exports.cardSound = exports.backgroundSound = exports.gateRight = exports.gateLeft = exports.overlay = void 0;
//gate
exports.overlay = document === null || document === void 0 ? void 0 : document.querySelector("#overlay");
exports.gateLeft = document === null || document === void 0 ? void 0 : document.querySelector("#left_gate");
exports.gateRight = document === null || document === void 0 ? void 0 : document.querySelector("#right_gate");
//audio
exports.backgroundSound = new Audio("audio/background.mp3");
exports.cardSound = new Audio("audio/card.mp3");
exports.loseSound = new Audio("audio/lose.mp3");
exports.winSound = new Audio("audio/win.mp3");
exports.audios = [exports.backgroundSound, exports.cardSound, exports.loseSound, exports.winSound];
//video
exports.loseVideo = document === null || document === void 0 ? void 0 : document.createElement("VIDEO");
exports.loseVideo.setAttribute("src", "video/lose.mp4");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/js/script.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../less/style.less */ "./src/less/style.less");
const sound_1 = __webpack_require__(/*! ./game/menu/buttons/sound */ "./src/js/game/menu/buttons/sound.ts");
sound_1.unmuteAudio();
const menu_1 = __webpack_require__(/*! ./game/menu */ "./src/js/game/menu/index.ts");
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    const page = document === null || document === void 0 ? void 0 : document.querySelector(".page");
    page.innerHTML = this.responseText;
    menu_1.menuButtonsService();
};
xhttp.open("GET", "./php/pages/menu.php", true);
xhttp.send();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map