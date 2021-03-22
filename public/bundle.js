/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_door_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/door.jpg */ "./src/images/door.jpg");
/* harmony import */ var _images_background_forest_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/background-forest.jpg */ "./src/images/background-forest.jpg");
/* harmony import */ var _images_wooden_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/wooden.jpg */ "./src/images/wooden.jpg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_door_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_background_forest_jpg__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_wooden_jpg__WEBPACK_IMPORTED_MODULE_5__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Stick';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/stick/v3/Qw3TZQpMCyTtJSvf.ttf) format('truetype');\n}\n@keyframes closeTheDoorLeft {\n  from {\n    left: -100%;\n  }\n  to {\n    left: -45%;\n  }\n}\n@keyframes closeTheDoorRight {\n  from {\n    right: -100%;\n  }\n  to {\n    right: -45%;\n  }\n}\n@keyframes openTheDoorLeft {\n  from {\n    left: -45%;\n  }\n  to {\n    left: -100%;\n  }\n}\n@keyframes openTheDoorRight {\n  from {\n    right: -45%;\n  }\n  to {\n    right: -100%;\n  }\n}\n#left_door {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  border: 1px solid black;\n  display: inline-block;\n  margin: auto;\n  background-color: black;\n  left: -100%;\n  clip-path: polygon(0 0, 100% 0, 90% 11.11111111%, 100% 22.22222222%, 90% 33.33333333%, 100% 44.44444444%, 90% 55.55555556%, 100% 66.66666667%, 90% 77.77777778%, 100% 88.88888889%, 90% 100%, 0 100%);\n}\n#left_door::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  border: 1px solid black;\n  display: inline-block;\n  margin: auto;\n  right: 10px;\n  z-index: 999;\n  clip-path: polygon(0 0, 100% 0, 90% 11.11111111%, 100% 22.22222222%, 90% 33.33333333%, 100% 44.44444444%, 90% 55.55555556%, 100% 66.66666667%, 90% 77.77777778%, 100% 88.88888889%, 90% 100%, 0 100%);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n#right_door {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  border: 1px solid black;\n  display: inline-block;\n  margin: auto;\n  background-color: black;\n  right: -100%;\n  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 10% 88.88888889%, 0 77.77777778%, 10% 66.66666667%, 0 55.55555556%, 10% 44.44444444%, 0% 33.33333333%, 10% 22.22222222%, 0 11.11111111%);\n}\n#right_door::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  border: 1px solid black;\n  display: inline-block;\n  margin: auto;\n  width: 97%;\n  left: 10px;\n  z-index: 999;\n  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 10% 88.88888889%, 0 77.77777778%, 10% 66.66666667%, 0 55.55555556%, 10% 44.44444444%, 0% 33.33333333%, 10% 22.22222222%, 0 11.11111111%);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.buttons {\n  position: absolute;\n  bottom: 15%;\n  width: 100%;\n  justify-content: space-around;\n}\n.buttons button {\n  display: inline-block;\n  background-color: #0983e7;\n  padding: 10px 30px 15px;\n  border-radius: 22px;\n  color: white;\n  font-size: 2.5rem;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  min-width: 250px;\n}\n.buttons button:hover {\n  cursor: pointer;\n  background-color: #0c70aa;\n}\n.button {\n  display: inline-block;\n  background-color: #0983e7;\n  padding: 10px 30px 15px;\n  border-radius: 22px;\n  color: white;\n  font-size: 2.5rem;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  min-width: 250px;\n}\n.button:hover {\n  cursor: pointer;\n  background-color: #0c70aa;\n}\n.option {\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 10px;\n  border-radius: 6px;\n  opacity: 0.55;\n}\n.header-font {\n  color: #fffedb;\n  letter-spacing: 5px;\n}\n#game_start {\n  text-align: center;\n  font-size: 1.5em;\n  opacity: 0.9;\n  width: 70%;\n  margin: auto;\n  padding-top: 30px;\n}\n#game_start header {\n  color: #fffedb;\n  letter-spacing: 5px;\n}\n#game_start header * {\n  margin: 4px auto;\n}\n#game_start section.main_buttons {\n  margin: 90px 0;\n}\n#game_start section.main_buttons .main_button {\n  margin: 50px auto;\n  padding: 20px;\n  background-color: #e70f0f;\n  color: #fffee0;\n  width: 70%;\n  transform: skew(-15deg);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n#game_start section.main_buttons .main_button:hover {\n  background-color: #3fb007;\n  color: #ede618;\n}\n#game_start section.main_buttons .main_button span {\n  display: inline-block;\n  transform: skew(15deg);\n}\n#game_start .switch_sound {\n  position: absolute;\n  bottom: 30px;\n  right: 50px;\n  background-color: #a3fff6;\n  padding: 10px 10px 5px;\n  cursor: pointer;\n}\n#game_start .switch_sound img {\n  width: 32px;\n}\n@media all and (orientation: landscape) and (max-device-width: 800px) {\n  #game_start header {\n    font-size: 15px;\n  }\n  #game_start section.main_buttons {\n    margin: 50px 0;\n  }\n  #game_start section.main_buttons .main_button {\n    margin: 30px auto;\n    padding: 10px;\n    font-size: 1.3rem;\n    width: 90%;\n  }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px) {\n  #game_start header {\n    font-size: 1.2em;\n  }\n  #game_start section.main_buttons .main_button {\n    margin: 55px auto;\n    padding: 20px;\n    font-size: 1.9rem;\n    width: 90%;\n  }\n  #game_start .switch_sound {\n    position: absolute;\n    bottom: 30px;\n    right: 50px;\n    background-color: #a3fff6;\n    padding: 10px 10px 5px;\n    cursor: pointer;\n  }\n  #game_start .switch_sound img {\n    width: 64px;\n  }\n}\n@font-face {\n  font-family: 'Indie Flower';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/indieflower/v12/m8JVjfNVeKWVnh3QMuKkFcZlbg.ttf) format('truetype');\n}\n#game_board {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n#game_board #game_cards {\n  width: 80%;\n  position: absolute;\n  top: 47%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n#game_board #game_cards .card_background {\n  display: inline-block;\n  margin: 5px;\n  border: 5px solid black;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  transition: all 0.3s linear;\n  filter: brightness(70%);\n  cursor: pointer;\n  background-size: cover;\n  background-image: repeating-linear-gradient(150deg, #e3e4e4 5%, #7fa9e9 8%);\n}\n#game_board #game_cards .card_background:hover {\n  filter: brightness(90%);\n}\n#game_board #game_cards .card_background .card img {\n  width: 100%;\n  height: 100%;\n}\n#game_board .stats {\n  color: #0a94d4;\n  font-size: 4em;\n  font-family: 'Indie Flower', cursive;\n  font-weight: 700;\n  position: absolute;\n  text-align: center;\n  text-shadow: 2px 2px 2px whitesmoke;\n  filter: blur(0.5px);\n  line-height: 85%;\n}\n#game_board .stats #scoreCounter {\n  font-size: 5rem;\n}\n#game_board #score {\n  color: #0a94d4;\n  font-size: 4em;\n  font-family: 'Indie Flower', cursive;\n  font-weight: 700;\n  position: absolute;\n  text-align: center;\n  text-shadow: 2px 2px 2px whitesmoke;\n  filter: blur(0.5px);\n  line-height: 85%;\n  bottom: 22%;\n  left: 1%;\n}\n#game_board #score #scoreCounter {\n  font-size: 5rem;\n}\n#game_board #timer {\n  display: none;\n  color: #0a94d4;\n  font-size: 4em;\n  font-family: 'Indie Flower', cursive;\n  font-weight: 700;\n  position: absolute;\n  text-align: center;\n  text-shadow: 2px 2px 2px whitesmoke;\n  filter: blur(0.5px);\n  line-height: 85%;\n  bottom: 21%;\n  right: 2%;\n}\n#game_board #timer #scoreCounter {\n  font-size: 5rem;\n}\n@media all and (orientation: landscape) and (max-device-width: 800px) {\n  #game_board #game_cards {\n    width: 82%;\n    top: 42%;\n  }\n  #game_board #game_cards .card_background {\n    border: 3px solid black;\n  }\n  #game_board .stats #scoreCounter {\n    font-size: 3.5rem;\n  }\n  #game_board #score {\n    font-size: 3em;\n    bottom: 2%;\n    left: 40px;\n  }\n  #game_board #score #scoreCounter {\n    font-size: 3.5rem;\n  }\n  #game_board #timer {\n    font-size: 3em;\n    bottom: 2%;\n    right: 40px;\n  }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px) {\n  #game_board #game_cards {\n    width: 97%;\n    top: 42%;\n  }\n  #game_board .stats #scoreCounter {\n    font-size: 2rem;\n  }\n  #game_board #score {\n    font-size: 5em;\n    bottom: 2%;\n    left: 110px;\n  }\n  #game_board #timer {\n    font-size: 5em;\n    bottom: 2%;\n    right: 110px;\n  }\n}\n@font-face {\n  font-family: 'RocknRoll One';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/rocknrollone/v3/kmK7ZqspGAfCeUiW6FFlmEC9guU.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Orbitron';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/orbitron/v17/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1ny_Cmxpg.ttf) format('truetype');\n}\n#game_options {\n  display: block;\n  display: none;\n  width: 90%;\n  margin: 100px auto;\n}\n#game_options .option_step {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 7px solid #c29175;\n  border-radius: 20px;\n  backdrop-filter: brightness(160%);\n  padding: 12px;\n  margin: 40px auto;\n}\n#game_options .option_step .option_description {\n  display: inline-block;\n  width: 43%;\n  text-align: center;\n  font-size: 2.2em;\n}\n#game_options .option_step .options {\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 65%;\n}\n#game_options .option_step .options .option {\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 10px;\n  border-radius: 6px;\n  opacity: 0.55;\n  border: 7px solid black;\n  background-image: repeating-linear-gradient(150deg, #e3e4e4 5%, #7fa9e9 8%);\n}\n#game_options .option_step .options .option img {\n  width: 100%;\n}\n#game_options .option_step .options .option .optHint {\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  font-size: 2.7em;\n  font-weight: 700;\n  color: #b37654;\n  font-family: 'RocknRoll One', sans-serif;\n  text-shadow: 2px 2px 2px #000000;\n}\n#game_options .option_step .options .timerNo {\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 10px;\n  border-radius: 6px;\n  opacity: 0.55;\n  border: 7px solid black;\n  background-image: repeating-linear-gradient(150deg, #e3e4e4 5%, #7fa9e9 8%);\n  background-image: none;\n  background-color: rgba(241, 47, 47, 0.8);\n}\n#game_options .option_step .options .timerNo img {\n  width: 100%;\n}\n#game_options .option_step .options .timerNo .optHint {\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  font-size: 2.7em;\n  font-weight: 700;\n  color: #b37654;\n  font-family: 'RocknRoll One', sans-serif;\n  text-shadow: 2px 2px 2px #000000;\n}\n#game_options .option_step .options .timerYes {\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 10px;\n  border-radius: 6px;\n  opacity: 0.55;\n  border: 7px solid black;\n  background-image: repeating-linear-gradient(150deg, #e3e4e4 5%, #7fa9e9 8%);\n  background-image: none;\n  background-color: rgba(96, 212, 96, 0.8);\n}\n#game_options .option_step .options .timerYes img {\n  width: 100%;\n}\n#game_options .option_step .options .timerYes .optHint {\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  font-size: 2.7em;\n  font-weight: 700;\n  color: #b37654;\n  font-family: 'RocknRoll One', sans-serif;\n  text-shadow: 2px 2px 2px #000000;\n}\n#game_options .option_step .options .clock {\n  position: relative;\n  width: 265px;\n  display: none;\n}\n#game_options .option_step .options .clock img {\n  width: 100%;\n}\n#game_options .option_step .options .clock .clockTime {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2.5rem;\n  font-family: 'Orbitron', sans-serif;\n  letter-spacing: 1.2px;\n  color: #bbda32;\n}\n#game_options .option_step .options .clock .clockTime .clockTimeDisplay {\n  width: 56%;\n  display: inline-block;\n  margin: auto;\n}\n#game_options .option_step .options .clock .clockTime .updateTime {\n  width: 7%;\n  font-size: 2.5rem;\n  display: inline-block;\n  margin: auto;\n}\n#game_options .option_step .options .clock .clockTime .updateTime button {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  color: inherit;\n  font-size: 100%;\n  font-weight: 700;\n  cursor: pointer;\n}\n#game_options .option_step .options .active {\n  border: 7px solid #ffbb00;\n  opacity: 1;\n}\n#game_options .buttons {\n  position: absolute;\n  bottom: 15%;\n  width: 100%;\n  justify-content: space-around;\n  bottom: 10%;\n  right: 0;\n  text-align: center;\n}\n#game_options .buttons button {\n  display: inline-block;\n  background-color: #0983e7;\n  padding: 10px 30px 15px;\n  border-radius: 22px;\n  color: white;\n  font-size: 2.5rem;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  min-width: 250px;\n}\n#game_options .buttons button:hover {\n  cursor: pointer;\n  background-color: #0c70aa;\n}\n#game_options .buttons button {\n  font-size: 1.8em;\n}\n@media all and (orientation: landscape) and (max-device-width: 800px) {\n  #game_options {\n    margin-top: 30px;\n  }\n  #game_options .option_step .option_description {\n    font-size: 1.6em;\n    width: 20%;\n    text-align: left;\n  }\n  #game_options .option_step .options {\n    width: 80%;\n  }\n  #game_options .option_step .options .option {\n    width: 92px !important;\n    height: 92px !important;\n  }\n  #game_options .option_step .options .option .optHint {\n    font-size: 1.6em;\n  }\n  #game_options .option_step .options .clock {\n    width: 170px;\n  }\n  #game_options .option_step .options .clock .clockTime {\n    font-size: 1.5rem;\n  }\n  #game_options .option_step .options .clock .clockTime .updateTime {\n    font-size: 1.8rem;\n  }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px) {\n  #game_options .option_step {\n    margin: 100px auto;\n  }\n  #game_options .option_step .option_description {\n    width: 20%;\n    text-align: left;\n  }\n  #game_options .option_step .options {\n    width: 70%;\n  }\n  #game_options .option_step .options .clock {\n    width: 260px;\n  }\n  #game_options .buttons button {\n    font-size: 2.8em;\n  }\n}\n#game_bestScores {\n  display: none;\n}\n#game_end {\n  display: none;\n  text-align: center;\n  font-size: 3em;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n#game_end .wrapper {\n  width: 100%;\n  height: 100%;\n}\n#game_end .wrapper .message {\n  font-size: 2.8rem;\n  margin-top: 80px;\n  text-align: left;\n  margin: 30px;\n  text-shadow: 2px 2px 4px #e7d0d0;\n}\n#game_end .wrapper .message .message_lose {\n  font-size: 3.3em;\n  padding-top: 10px;\n  text-align: center;\n  color: red;\n  display: none;\n}\n#game_end .wrapper .message .message_segment {\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: auto;\n  color: green;\n}\n#game_end .wrapper .message .message_segment#timeStart,\n#game_end .wrapper .message .message_segment#madeMoves {\n  color: red;\n}\n#game_end .wrapper .message .message_segment#totalPoints {\n  display: none;\n  position: absolute;\n  bottom: 40%;\n  font-size: 4.5rem;\n  color: green;\n  width: 90%;\n  text-align: center;\n}\n#game_end .wrapper .message .message_segment#totalPoints .message_segment_description {\n  width: 40%;\n}\n#game_end .wrapper .message .message_segment#totalPoints .message_segment_score {\n  width: 50%;\n}\n#game_end .wrapper .message .message_segment .message_segment_description {\n  width: 40%;\n}\n#game_end .wrapper .message .message_segment .message_segment_score {\n  width: 57%;\n}\n#game_end .wrapper .video {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 700px;\n  margin: 0 auto;\n}\n#game_end .wrapper .video video {\n  width: 100%;\n  border: 5px solid black;\n  border-radius: 15px;\n}\n#game_end .wrapper .buttons {\n  position: absolute;\n  bottom: 15%;\n  width: 100%;\n  justify-content: space-around;\n}\n#game_end .wrapper .buttons button {\n  display: inline-block;\n  background-color: #0983e7;\n  padding: 10px 30px 15px;\n  border-radius: 22px;\n  color: white;\n  font-size: 2.5rem;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  min-width: 250px;\n}\n#game_end .wrapper .buttons button:hover {\n  cursor: pointer;\n  background-color: #0c70aa;\n}\n@media all and (orientation: landscape) and (max-device-width: 800px) {\n  #game_end .wrapper .message {\n    font-size: 1.8rem;\n    margin: 30px 10px 0;\n  }\n  #game_end .wrapper .message .message_lose {\n    font-size: 3.1em;\n  }\n  #game_end .wrapper .message .message_segment {\n    margin-top: 15px;\n    width: 100%;\n  }\n  #game_end .wrapper .message .message_segment#totalPoints {\n    bottom: 36%;\n    font-size: 3.5rem;\n  }\n  #game_end .wrapper .message .message_segment#totalPoints .message_segment_description {\n    width: 53%;\n  }\n  #game_end .wrapper .message .message_segment#totalPoints .message_segment_score {\n    width: 71%;\n  }\n  #game_end .wrapper .video {\n    width: 95%;\n  }\n  #game_end .wrapper .buttons {\n    bottom: 15%;\n  }\n  #game_end .wrapper .buttons .button {\n    padding: 0;\n  }\n  #game_end .wrapper .buttons .button button {\n    font-size: 0.75em;\n  }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px) {\n  #game_end {\n    font-size: 7em;\n  }\n  #game_end .wrapper .message {\n    padding-top: 50px;\n    font-size: 2.5rem;\n  }\n  #game_end .wrapper .message .message_segment {\n    margin-top: 20px;\n    width: 95%;\n  }\n}\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes hide {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes squintingTimer {\n  from {\n    color: inherit;\n  }\n  to {\n    color: #cc2822;\n  }\n}\nhtml {\n  height: 100%;\n}\nbody {\n  background-color: green;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: white;\n  font-family: 'Stick', sans-serif;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\na:hover {\n  color: gold;\n}\n.container {\n  border: 11px solid black;\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 1100px;\n  height: 800px;\n}\n.game {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n}\n#overlay {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: transparent;\n  z-index: 9999;\n  display: none;\n}\n@media all and (orientation: landscape) and (max-device-width: 800px) {\n  .container {\n    top: 50%;\n    width: 65%;\n    max-height: 95%;\n  }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px) {\n  .container {\n    top: 40%;\n    width: 95%;\n    height: 900px;\n  }\n}\n", "",{"version":3,"sources":["https:\\fonts.googleapis.com\\css2?family=Stick&display=swap","webpack://./src/less/style.less","webpack://./src/less/door.less","webpack://./src/less/variables.less","webpack://./src/less/start_screen.less","https:\\fonts.googleapis.com\\css2?family=Indie+Flower&display=swap","webpack://./src/less/play.less","https:\\fonts.googleapis.com\\css2?family=RocknRoll+One&display=swap","https:\\fonts.googleapis.com\\css2?family=Orbitron:wght@700&display=swap","webpack://./src/less/options.less","webpack://./src/less/best_scores.less","webpack://./src/less/end_screen.less","webpack://./src/less/animations.less"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Stick';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/stick/v3/Qw3TZQpMCyTtJSvf.ttf) format('truetype');\n}\n","@import \"./start_screen\";\n@import \"./play\";\n@import \"./options\";\n@import \"./best_scores\";\n@import \"./end_screen\";\n@import \"./animations\";\n\nhtml{\n    height: 100%;\n}\nbody{\n    background-color: green;\n    background-image: url(../images/background-forest.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    color: white;\n    font-family: 'Stick', sans-serif;\n}\na{\n    color: inherit;\n    text-decoration: none;\n    &:hover{\n        color: gold;\n    }\n}\n.container{\n    border: 11px solid black;\n    overflow: hidden;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 1100px;\n    height: 800px;\n}\n.game{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 100%;\n    background-image: url(../images/wooden.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 100%;\n}\n#overlay{\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: transparent;\n    z-index: 9999;\n    display: none;\n}\n\n@media all and (orientation: landscape) and (max-device-width: 800px) {\n    .container{\n        top: 50%;\n        width: 65%;\n        max-height: 95%;\n    }\n}\n\n@media all and (orientation: portrait) and (max-device-width: 800px) {\n    .container{\n        top: 40%;\n        width: 95%;\n        height: 900px;\n    }\n}","\n.door(){\n    position: absolute;\n    z-index: 1000;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    border: 1px solid black;\n    display: inline-block;\n    margin: auto;\n}\n@keyframes closeTheDoorLeft{\n    from{\n        left: -100%\n    }\n    to{\n        left: -45%\n    }\n}\n@keyframes closeTheDoorRight{\n    from{\n        right: -100%\n    }\n    to{\n        right: -45%\n    }\n}\n@keyframes openTheDoorLeft{\n    from{\n        left: -45%\n    }\n    to{\n        left: -100%\n    }\n}\n@keyframes openTheDoorRight{\n    from{\n        right: -45%\n    }\n    to{\n        right: -100%\n    }\n}\n#left_door{\n    .door;\n    background-color: black;\n    left: -100%;\n    clip-path: polygon(0 0, 100% 0, \n    90% (100%/9*1), 100% (100%/9*2), 90% (100%/9*3),\n    100% (100%/9*4), 90% (100%/9*5), 100% (100%/9*6),\n    90% (100%/9*7), 100% (100%/9*8),\n    90% 100%, 0 100%);\n}\n#left_door::before{\n    content: \"\";\n    .door;\n    right: 10px;\n    z-index: 999;\n    clip-path: polygon(0 0, 100% 0, \n    90% (100%/9*1), 100% (100%/9*2), 90% (100%/9*3),\n    100% (100%/9*4), 90% (100%/9*5), 100% (100%/9*6),\n    90% (100%/9*7), 100% (100%/9*8),\n    90% 100%, 0 100%);\n    background-image: url(../images/door.jpg);\n}\n#right_door{\n    .door;\n    background-color: black;\n    right: -100%;\n    clip-path: polygon(10% 0, 100% 0,\n    100% 100%, 0 100%, \n    10% (100%/9*8), 0 (100%/9*7), 10% (100%/9*6),\n    0 (100%/9*5), 10% (100%/9*4), 0% (100%/9*3),\n    10% (100%/9*2), 0 (100%/9*1)\n    );\n}\n#right_door::before{\n    content: \"\";\n    .door;\n    width: 97%;\n    left: 10px;\n    z-index: 999;\n    clip-path: polygon(10% 0, 100% 0,\n    100% 100%, 0 100%, \n    10% (100%/9*8), 0 (100%/9*7), 10% (100%/9*6),\n    0 (100%/9*5), 10% (100%/9*4), 0% (100%/9*3),\n    10% (100%/9*2), 0 (100%/9*1)\n    );\n    background-image: url(../images/door.jpg);\n}","//spash screen\r\n@header-font-color: #fffedb;\r\n\r\n@main-button-background-color: rgb(231, 15, 15);\r\n@main-button-font-color: #fffee0;\r\n@main-button-hover-background-color: #3fb007;\r\n@main-button-hover-font-color: #ede618;\r\n\r\n@switchsound-button-background-color: #a3fff6;\r\n\r\n@clockTime-color: rgb(187, 218, 50);\r\n\r\n//game board\r\n@card-background-color: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(127, 169, 233) 8%);\r\n@score-stats-font-color: rgb(10, 148, 212);\r\n@score-squinting-stats-font-color: rgb(204, 40, 34);\r\n\r\n//end screen\r\n@end-message-text-shadow-color: 2px 2px 4px rgb(231, 208, 208);\r\n@optionAndEnd-button-background-color: rgb(9, 131, 231);\r\n@optionAndEnd-button-hover-background-color: rgb(12, 112, 170);\r\n\r\n.buttons{\r\n    position: absolute;\r\n    bottom: 15%;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    button{\r\n        .button\r\n    }\r\n}\r\n.button{\r\n    display: inline-block;\r\n    background-color: @optionAndEnd-button-background-color;\r\n    padding: 10px 30px 15px;\r\n    border-radius: 22px;\r\n    color: white;\r\n    font-size: 2.5rem;\r\n    border: none;\r\n    outline: none;\r\n    font-family: inherit;\r\n    min-width: 250px;\r\n    &:hover{\r\n        cursor: pointer;\r\n        background-color: @optionAndEnd-button-hover-background-color;\r\n    }\r\n}\r\n\r\n.option{\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 120px;\r\n    position: relative;\r\n    cursor: pointer;\r\n    margin: 0 10px;\r\n    border-radius: 6px;\r\n    opacity: .55;\r\n}","@import url('https://fonts.googleapis.com/css2?family=Stick&display=swap');\n@import \"./door.less\";\n@import \"./variables.less\";\n\n.header-font{\n    color: @header-font-color;\n    letter-spacing: 5px;\n}\n#game_start{\n    // display: none;\n    text-align: center;\n    font-size: 1.5em;\n    opacity: .9;\n    width: 70%;\n    margin: auto;\n    padding-top: 30px;\n    header{\n        .header-font;\n        & *{\n            margin: 4px auto;\n        }\n    }\n    section.main_buttons{\n        margin: 90px 0;\n        & .main_button{\n            margin: 50px auto;\n            padding: 20px;\n            background-color: @main-button-background-color;\n            color: @main-button-font-color;\n            width: 70%;\n            transform: skew(-15deg);\n            font-size: 1.5rem;\n            cursor: pointer;\n            &:hover{\n                background-color: @main-button-hover-background-color;\n                color: @main-button-hover-font-color;\n            }\n            span{\n                display: inline-block;\n                transform: skew(15deg);\n            }\n        }\n    }\n    .switch_sound{\n        position: absolute;\n        bottom: 30px;\n        right: 50px;\n        background-color: @switchsound-button-background-color;\n        padding: 10px 10px 5px;\n        cursor: pointer;\n        img{\n            width: 32px;\n        }\n    }\n    \n    \n}\n\n@media all and (orientation: landscape) and (max-device-width: 800px){\n    #game_start{\n        header{\n            font-size: 15px;\n        }\n        section.main_buttons{\n            margin: 50px 0;\n            & .main_button{\n                margin: 30px auto;\n                padding: 10px;\n                font-size: 1.3rem;\n                width: 90%;\n            }\n        }\n    }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px){\n    #game_start{\n        header{\n            font-size: 1.2em;\n        }\n        section.main_buttons{\n            & .main_button{\n                margin: 55px auto;\n                padding: 20px;\n                font-size: 1.9rem;\n                width: 90%;\n            }\n        }\n        .switch_sound{\n            position: absolute;\n            bottom: 30px;\n            right: 50px;\n            background-color: @switchsound-button-background-color;\n            padding: 10px 10px 5px;\n            cursor: pointer;\n            img{\n                width: 64px;\n            }\n        }\n    }\n}","@font-face {\n  font-family: 'Indie Flower';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/indieflower/v12/m8JVjfNVeKWVnh3QMuKkFcZlbg.ttf) format('truetype');\n}\n","@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');\n@import \"./variables.less\";\n#game_board{\n    display: none;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    #game_cards{\n        width: 80%;\n        position: absolute;\n        top: 47%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        text-align: center;\n        .card_background{\n            display: inline-block;\n            margin: 5px;\n            border: 5px solid black;\n            border-radius: 5px;\n            box-sizing: border-box;\n            text-align: center;\n            transition: all .3s linear;\n            filter: brightness(70%);\n            cursor: pointer;\n            background-size: cover;\n            background-image: @card-background-color;\n            // width: 170px;\n            // height: 170px;\n            &:hover{\n                filter: brightness(90%);\n            }.card{\n                img{\n                    width: 100%;\n                    height: 100%;\n                } \n            }  \n        }\n        \n    }\n    .stats{\n        color: @score-stats-font-color;\n        font-size: 4em;\n        font-family: 'Indie Flower', cursive;\n        font-weight: 700;\n        position: absolute;\n        text-align: center;\n        text-shadow: 2px 2px 2px whitesmoke;\n        filter:blur(.5px);\n        line-height: 85%;\n        #scoreCounter{\n            font-size: 5rem;\n        }\n    }\n    #score{\n        .stats;\n        bottom: 22%;\n        left: 1%;\n    }\n    #timer{\n        display: none;\n        .stats;\n        bottom: 21%;\n        right: 2%;\n    }\n}\n@media all and (min-device-width: 801px){\n    #game_board{\n        #game_cards{\n            .card_background{\n                // width: 110px !important;\n                // height: 110px !important;\n            }\n        }\n    }\n}\n@media all and (orientation: landscape) and (max-device-width: 800px){\n    #game_board{\n        #game_cards{\n            width: 82%;\n            top: 42%;\n            .card_background{\n                // width: 93px !important;\n                // height: 93px !important;\n                // margin: 2px;\n                border: 3px solid black;\n            }\n        }\n        .stats{\n            #scoreCounter{\n                font-size: 3.5rem;\n            }\n        }\n        #score{\n            .stats;\n            font-size: 3em;\n            bottom: 2%;\n            left: 40px;\n        }\n        #timer{\n            font-size: 3em;\n            bottom: 2%;\n            right: 40px;\n        }\n    }\n}\n\n@media all and (orientation: portrait) and (max-device-width: 800px){\n    #game_board{\n        #game_cards{\n            width: 97%;\n            top: 42%;\n        }\n        .stats{\n            #scoreCounter{\n                font-size: 2rem;\n            }\n        }\n        #score{\n            font-size: 5em;\n            bottom: 2%;\n            left: 110px\n        }\n        #timer{\n            font-size: 5em;\n            bottom: 2%;\n            right: 110px;\n        }\n    }\n}","@font-face {\n  font-family: 'RocknRoll One';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/rocknrollone/v3/kmK7ZqspGAfCeUiW6FFlmEC9guU.ttf) format('truetype');\n}\n","@font-face {\n  font-family: 'Orbitron';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/orbitron/v17/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1ny_Cmxpg.ttf) format('truetype');\n}\n","@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');\n@import \"./variables.less\";\n\n\n#game_options{\n    display: block;\n    display: none;\n    width: 90%;\n    margin: 100px auto;\n    .option_step{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 7px solid rgb(194, 145, 117);\n        border-radius: 20px;\n        backdrop-filter: brightness(160%);\n        padding: 12px;\n        margin: 40px auto;\n        .option_description{\n            display: inline-block;\n            width: 43%;\n            text-align: center;\n            font-size: 2.2em;\n        }\n        .options{\n            display: inline-flex;\n            justify-content: flex-start;\n            align-items: center;\n            width: 65%;\n            .option{\n                .option;\n                border: 7px solid black;\n                background-image: @card-background-color;\n                img{\n                    width: 100%;\n                }\n                .optHint{\n                    position: absolute;\n                    bottom: -10px;\n                    right: -10px;\n                    font-size: 2.7em;\n                    font-weight: 700;\n                    color: rgb(179, 118, 84);\n                    font-family: 'RocknRoll One', sans-serif;\n                    text-shadow: 2px 2px 2px rgb(0, 0, 0);\n                }\n            }\n            .timerNo{\n                .option;\n                background-image: none;\n                background-color: rgba(241, 47, 47, 0.8);\n            }\n            .timerYes{\n                .option;\n                background-image: none;\n                background-color: rgba(96, 212, 96, .8);\n            }\n            .clock{\n                position: relative;\n                width: 265px;\n                display: none;\n                img{\n                    width: 100%;\n                }\n                .clockTime{\n                    width: 100%;\n                    text-align: center;\n                    position: absolute;\n                    top: 55%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    font-size: 2.5rem;\n                    font-family: 'Orbitron', sans-serif;\n                    letter-spacing: 1.2px;\n                    color: @clockTime-color;\n                    .clockTimeDisplay{\n                        width: 56%;\n                        display: inline-block;\n                        margin: auto;\n                    }\n                    .updateTime{\n                        width: 7%;;\n                        font-size: 2.5rem;\n                        display: inline-block;\n                        margin: auto;\n                        & button{\n                            background-color: transparent;\n                            outline: none;\n                            border: none;\n                            color: inherit;\n                            font-size: 100%;\n                            font-weight: 700;\n                            cursor: pointer;\n                        }\n                    }\n                }\n            }\n            .active{\n                border: 7px solid rgb(255, 187, 0);\n                opacity: 1;\n            }\n        }\n    }\n    .buttons{\n        .buttons;\n        bottom: 10%;\n        right: 0;\n        text-align: center;\n        button{\n            font-size: 1.8em;\n        }\n    }\n}\n@media all and (orientation: landscape) and (max-device-width: 800px){\n    #game_options{\n        margin-top: 30px;\n        .option_step{\n            .option_description{\n                font-size: 1.6em;\n                width: 20%;\n                text-align: left;\n            }\n            .options{\n                width: 80%;\n                .option{\n                    width: 92px !important;\n                    height: 92px !important;\n                    .optHint{\n                        font-size: 1.6em;\n                    }\n                }\n                .clock{\n                    width: 170px;\n                    .clockTime{\n                        font-size: 1.5rem;\n                        .updateTime{\n                            font-size: 1.8rem;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px){\n    #game_options{\n        .option_step{\n            margin: 100px auto;\n            .option_description{\n                width: 20%;\n                text-align: left;\n            }\n            .options{\n                width: 70%;\n                .clock{\n                    width: 260px;\n                }\n            }\n        }\n        .buttons{\n            button{\n                font-size: 2.8em;\n            }\n        }\n    }\n}","#game_bestScores{\n    display: none;\n}","@import \"./variables.less\";\n\n\n#game_end{\n     display: none;\n    text-align: center;\n    font-size: 3em;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    .wrapper{\n        width: 100%;\n        height: 100%;\n        .message{\n            font-size: 2.8rem;\n            margin-top: 80px;\n            .message_lose{\n                font-size: 3.3em;\n                padding-top: 10px;\n                text-align: center;\n                color: red;\n                display: none;\n            }\n            .message_segment{\n                display: none;\n                justify-content: space-between;\n                align-items: center;\n                width: 90%;\n                margin: auto;\n                color: green;\n                &#timeStart, &#madeMoves{\n                    color: red;\n                }\n                &#totalPoints{\n                    display: none;\n                    position: absolute;\n                    bottom: 40%;\n                    font-size: 4.5rem;\n                    color: green;\n                    width: 90%;\n                    text-align: center;\n                    .message_segment_description{\n                        width: 40%;\n                    } \n                    .message_segment_score{\n                        width: 50%;\n                    }\n                }\n                \n                .message_segment_description{\n                    width: 40%;\n                } \n                .message_segment_score{\n                    width: 57%;\n                }\n            }\n            text-align: left;\n            margin: 30px;\n            text-shadow: @end-message-text-shadow-color;\n        }\n        .video{\n            position: absolute;\n            top: 45%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 700px;\n            margin: 0 auto;\n            video{\n                width: 100%;\n                border: 5px solid black;\n                border-radius: 15px;\n            }\n        }\n        .buttons{\n            .buttons\n        }\n    }\n\n}\n@media all and (orientation: landscape) and (max-device-width: 800px){\n    #game_end{\n        .wrapper{\n            .message{\n                font-size: 1.8rem;\n                margin: 30px 10px 0;\n                .message_lose{\n                    font-size: 3.1em;\n                }\n                .message_segment{\n                    margin-top: 15px;\n                    width: 100%;\n                    &#totalPoints{\n                        bottom: 36%;\n                        font-size: 3.5rem;\n                        .message_segment_description{\n                            width: 53%;\n                        } \n                        .message_segment_score{\n                            width: 71%;\n                        }\n                    }\n                }\n            }\n            .video{\n                width: 95%;\n            }\n            .buttons{\n                bottom: 15%;\n                .button{\n                    padding: 0;\n                    button{\n                        font-size: .75em;\n                    }\n                }\n            }\n        }\n    }\n}\n@media all and (orientation: portrait) and (max-device-width: 800px){\n    #game_end{\n        font-size: 7em;\n        .wrapper{\n            .message{\n                padding-top: 50px;\n                font-size: 2.5rem;\n                .message_segment{\n                    margin-top: 20px;\n                    width: 95%;\n                }\n            }\n        }\n    }\n}","@import \"./variables.less\";\n\n@keyframes show{\n    from{opacity: 0;}\n    to{opacity: 1;}\n}\n@keyframes hide{\n    from{opacity: 1;}\n    to{opacity: 0;}\n}\n@keyframes squintingTimer{\n    from {color: inherit}\n    to {color: @score-squinting-stats-font-color}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/images/background-forest.jpg":
/*!******************************************!*\
  !*** ./src/images/background-forest.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/background-forest.jpg");

/***/ }),

/***/ "./src/images/door.jpg":
/*!*****************************!*\
  !*** ./src/images/door.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/door.jpg");

/***/ }),

/***/ "./src/images/wooden.jpg":
/*!*******************************!*\
  !*** ./src/images/wooden.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/wooden.jpg");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");

class Card {
    constructor(size, size_mobile_screen_landscape, size_mobile_screen_portrait, index, character) {
        this.size = size;
        this.size_mobile_screen_landscape = size_mobile_screen_landscape;
        this.size_mobile_screen_portrait = size_mobile_screen_portrait;
        this.index = index;
        this.character = character;
    }
    ;
    create() {
        const card_background = document.createElement("DIV");
        card_background.classList.add("card_background");
        card_background.style.backgroundImage = `background-image: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(1, 79, 197) 10%);
        `;
        this.changeCardsSize(card_background);
        window.addEventListener("resize", () => {
            this.changeCardsSize(card_background);
        });
        const card = document.createElement("DIV");
        card.classList.add("card");
        card.style.width = `100%`;
        card.style.height = `100%`;
        card.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        card_background.appendChild(card);
        _variables__WEBPACK_IMPORTED_MODULE_0__.gameCardsDiv.appendChild(card_background);
    }
    changeCardsSize(card_background) {
        if (window.screen.width < 700) {
            card_background.style.width = `${this.size_mobile_screen_portrait}px`;
            card_background.style.height = `${this.size_mobile_screen_portrait}px`;
        }
        else if (window.screen.width >= 700 && window.screen.width < 1000) {
            card_background.style.width = `${this.size_mobile_screen_landscape}px`;
            card_background.style.height = `${this.size_mobile_screen_landscape}px`;
        }
        else {
            card_background.style.width = `${this.size}px`;
            card_background.style.height = `${this.size}px`;
        }
    }
}


/***/ }),

/***/ "./src/js/game/end_game/index.ts":
/*!***************************************!*\
  !*** ./src/js/game/end_game/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPreviousGame": () => (/* binding */ clearPreviousGame),
/* harmony export */   "showVideo": () => (/* binding */ showVideo),
/* harmony export */   "hideVideo": () => (/* binding */ hideVideo),
/* harmony export */   "showEndButtons": () => (/* binding */ showEndButtons)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables */ "./src/js/variables.ts");
/* harmony import */ var _menu_door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../menu/door */ "./src/js/menu/door.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././timer */ "./src/js/game/timer.ts");
/* harmony import */ var _init_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././init_game */ "./src/js/game/init_game.ts");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././play */ "./src/js/game/play.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function clearPreviousGame() {
    _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.innerHTML = "";
    _variables__WEBPACK_IMPORTED_MODULE_0__.message_lose.style.display = "none";
    for (const div in _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts) {
        _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts[div].style.display = "none";
    }
}
function showVideo(video) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_menu_door__WEBPACK_IMPORTED_MODULE_1__.changeView)("game_board", "game_end");
        _variables__WEBPACK_IMPORTED_MODULE_0__.end_screen_buttons.style.display = "none";
        _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.style.display = "block";
        _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.appendChild(video);
        _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.style.animation = "show 2s";
        video.play();
        video.playbackRate = .9;
        _variables__WEBPACK_IMPORTED_MODULE_0__.timer.style.animation = "none";
    });
}
function hideVideo(sound) {
    sound.play();
    _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.style.animation = "hide 2s";
    _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.style.animationFillMode = "forwards";
    _variables__WEBPACK_IMPORTED_MODULE_0__.divVideo.style.display = "none";
}
function showEndButtons() {
    _variables__WEBPACK_IMPORTED_MODULE_0__.end_screen_buttons.style.display = "flex";
    _variables__WEBPACK_IMPORTED_MODULE_0__.end_screen_buttons.style.animation = "show 2s";
    _variables__WEBPACK_IMPORTED_MODULE_0__.end_screen_buttons.style.animationFillMode = "forwards";
}
_variables__WEBPACK_IMPORTED_MODULE_0__.main_menu.addEventListener("click", function () {
    (0,_menu_door__WEBPACK_IMPORTED_MODULE_1__.changeView)("game_end", "game_start");
});
_variables__WEBPACK_IMPORTED_MODULE_0__.try_again.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_init_game__WEBPACK_IMPORTED_MODULE_3__.initGame)();
        yield (0,_play__WEBPACK_IMPORTED_MODULE_4__.mainGame)();
        yield (0,_menu_door__WEBPACK_IMPORTED_MODULE_1__.changeView)("game_start", "game_board");
        yield (0,_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)();
    });
});


/***/ }),

/***/ "./src/js/game/end_game/lose.ts":
/*!**************************************!*\
  !*** ./src/js/game/end_game/lose.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "losingProcedure": () => (/* binding */ losingProcedure)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables */ "./src/js/variables.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/js/game/end_game/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function losingProcedure() {
    return __awaiter(this, void 0, void 0, function* () {
        _variables__WEBPACK_IMPORTED_MODULE_0__.timeCounter.innerHTML = "0";
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.clearPreviousGame)();
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.showVideo)(_variables__WEBPACK_IMPORTED_MODULE_0__.loseVideo);
    });
}
_variables__WEBPACK_IMPORTED_MODULE_0__.loseVideo.addEventListener("ended", function () {
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.hideVideo)(_variables__WEBPACK_IMPORTED_MODULE_0__.loseSound);
    _variables__WEBPACK_IMPORTED_MODULE_0__.message_lose.style.display = "flex";
    _variables__WEBPACK_IMPORTED_MODULE_0__.message_lose.style.animation = "show 2s";
    _variables__WEBPACK_IMPORTED_MODULE_0__.message_lose.style.animationFillMode = "forwards";
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.showEndButtons)();
});


/***/ }),

/***/ "./src/js/game/end_game/summary.ts":
/*!*****************************************!*\
  !*** ./src/js/game/end_game/summary.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideAndClearSummarize": () => (/* binding */ hideAndClearSummarize),
/* harmony export */   "summary": () => (/* binding */ summary)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables */ "./src/js/variables.ts");
/* harmony import */ var _menu_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../menu/options */ "./src/js/menu/options.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././timer */ "./src/js/game/timer.ts");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././play */ "./src/js/game/play.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let totalSum = 0;
let updateTotalSum;
console.log(totalSum);
function* updateTotalSumGenerator(x) {
    totalSum += yield;
    totalSum += yield;
    totalSum -= yield;
    totalSum -= yield;
}
function hideAndClearSummarize() {
    // for(const div in messageParts){
    //     console.log(div)
    //     // div.style.display = "none";
    // }
}
function summary() {
    return __awaiter(this, void 0, void 0, function* () {
        totalSum = 0;
        _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.totalPointsScore.innerHTML = `0`;
        updateTotalSum = updateTotalSumGenerator(0);
        updateTotalSum.next(0);
        let cardsNumber = _menu_options__WEBPACK_IMPORTED_MODULE_1__.readyOptions.cardsNumber;
        let timeStart = _menu_options__WEBPACK_IMPORTED_MODULE_1__.readyOptions.time | 0;
        let timeLeft = _timer__WEBPACK_IMPORTED_MODULE_2__.currentTime | 0;
        let madeMoves = _play__WEBPACK_IMPORTED_MODULE_3__.turnCounter;
        const totalSegmentPointsCards = yield summarizePoints(cardsNumber, _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts.cardsNumber, _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.cardsNumberScore, _variables__WEBPACK_IMPORTED_MODULE_0__.multipliers.multiplierCards);
        yield summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards);
        const totalSegmentPointsTimeLeft = yield summarizePoints(timeLeft, _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts.timeLeft, _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.timeLeftScore, _variables__WEBPACK_IMPORTED_MODULE_0__.multipliers.multiplieTimeLeft);
        yield summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft);
        const totalSegmentPointsTimeStart = yield summarizePoints(timeStart, _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts.timeStart, _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.timeStartScore, _variables__WEBPACK_IMPORTED_MODULE_0__.multipliers.multiplieTimeStart);
        yield summarizeTotalPoints(totalSum - totalSegmentPointsTimeStart, totalSegmentPointsTimeStart);
        const totalSegmentPointsMoves = yield summarizePoints(madeMoves, _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts.madeMoves, _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.madeMovesScore, _variables__WEBPACK_IMPORTED_MODULE_0__.multipliers.multiplieMoves);
        yield summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves);
        cardsNumber = 0;
        timeStart = 0;
        timeLeft = 0;
        madeMoves = 0;
    });
}
function summarizePoints(x, messagePart, messageScore, multiplier) {
    return __awaiter(this, void 0, void 0, function* () {
        messagePart.style.display = "flex";
        messageScore.querySelector(":scope > .score").innerHTML = `0 x ${multiplier} = `;
        let i = 0;
        return yield new Promise((resolve, reject) => {
            const incrementScore = setInterval(() => {
                if (i < x) {
                    i++;
                    messageScore.querySelector(":scope > .score").innerHTML = `${i} x ${multiplier} = `;
                }
                else {
                    clearInterval(incrementScore);
                    messageScore.querySelector(":scope > .score_full").innerHTML = `${i * multiplier} points`;
                    resolve(i * multiplier);
                }
            }, 45);
        });
    });
}
function summarizeTotalPoints(totalSumWithValueToUpdate, valueToUpdate) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let x = totalSum;
            const incrementTotalScore = yield setInterval(() => __awaiter(this, void 0, void 0, function* () {
                if (x < totalSumWithValueToUpdate) {
                    _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.totalPointsScore.innerHTML = `${x + 25}`;
                    x += 25;
                }
                else if (x > totalSumWithValueToUpdate) {
                    _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.totalPointsScore.innerHTML = `${x - 25}`;
                    x -= 25;
                    _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.totalPointsScore.style.animation = "squintingTimer .4s infinite";
                }
                else {
                    clearInterval(incrementTotalScore);
                    yield updateTotalSum.next(valueToUpdate);
                    _variables__WEBPACK_IMPORTED_MODULE_0__.messageScores.totalPointsScore.style.animation = "none";
                    resolve();
                }
            }), 20);
        }));
    });
}


/***/ }),

/***/ "./src/js/game/end_game/win.ts":
/*!*************************************!*\
  !*** ./src/js/game/end_game/win.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "winningProcedure": () => (/* binding */ winningProcedure)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables */ "./src/js/variables.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/js/game/end_game/index.ts");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary */ "./src/js/game/end_game/summary.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// winningProcedure()
function winningProcedure() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.clearPreviousGame)();
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.showVideo)(_variables__WEBPACK_IMPORTED_MODULE_0__.winVideo);
    });
}
_variables__WEBPACK_IMPORTED_MODULE_0__.winVideo.addEventListener("ended", function () {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.hideVideo)(_variables__WEBPACK_IMPORTED_MODULE_0__.winSound);
        _variables__WEBPACK_IMPORTED_MODULE_0__.messageParts.totalPoints.style.display = "flex";
        (0,_summary__WEBPACK_IMPORTED_MODULE_2__.hideAndClearSummarize)();
        yield (0,_summary__WEBPACK_IMPORTED_MODULE_2__.summary)();
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.showEndButtons)();
    });
});


/***/ }),

/***/ "./src/js/game/init_game.ts":
/*!**********************************!*\
  !*** ./src/js/game/init_game.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameCards": () => (/* binding */ gameCards),
/* harmony export */   "initGame": () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _classes_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../classes/card */ "./src/js/classes/card.ts");
/* harmony import */ var _menu_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/options */ "./src/js/menu/options.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const gameCards = [];
let originCards;
let size;
let size_mobile_screen_landscape;
let size_mobile_screen_portrait;
function getCards() {
    switch (_menu_options__WEBPACK_IMPORTED_MODULE_1__.readyOptions.cardsNumber) {
        case 16: {
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"];
            size = 170;
            size_mobile_screen_landscape = 95;
            size_mobile_screen_portrait = 172;
            break;
        }
        case 20: {
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"];
            size = 140;
            size_mobile_screen_landscape = 93;
            size_mobile_screen_portrait = 155;
            break;
        }
        case 24: {
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"];
            size = 117;
            size_mobile_screen_landscape = 77;
            size_mobile_screen_portrait = 140;
            break;
        }
    }
}
function initGame() {
    return __awaiter(this, void 0, void 0, function* () {
        _variables__WEBPACK_IMPORTED_MODULE_2__.gameCardsDiv.innerHTML = "";
        yield getCards();
        gameCards.splice(0, gameCards.length);
        console.log(originCards);
        console.log("Przed initGame: Karty do gry: ", gameCards);
        while (gameCards.length < originCards.length * 2) {
            const i = Math.floor(Math.random() * originCards.length);
            const isThereTwoSuchCards = gameCards.filter(el => el === originCards[i]);
            if (isThereTwoSuchCards.length == 2) {
                continue;
            }
            else {
                gameCards.push(originCards[i]);
                const card = new _classes_card__WEBPACK_IMPORTED_MODULE_0__.Card(size, size_mobile_screen_landscape, size_mobile_screen_portrait, 1, originCards[i]);
                card.create();
            }
        }
        console.log("Po initGame: Karty do gry: ", gameCards);
    });
}


/***/ }),

/***/ "./src/js/game/play.ts":
/*!*****************************!*\
  !*** ./src/js/game/play.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "turnCounter": () => (/* binding */ turnCounter),
/* harmony export */   "totalPairs": () => (/* binding */ totalPairs),
/* harmony export */   "mainGame": () => (/* binding */ mainGame)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");
/* harmony import */ var _init_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init_game */ "./src/js/game/init_game.ts");
/* harmony import */ var _end_game_win__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./end_game/win */ "./src/js/game/end_game/win.ts");



let oneVisible = false;
let blockRevealMoreThanTwoCards = false;
let turnCounter = 0;
let totalPairs;
let firstCardIndex = 0;
function mainGame() {
    turnCounter = 0;
    _variables__WEBPACK_IMPORTED_MODULE_0__.scoreCounter.innerHTML = `${turnCounter}`;
    totalPairs = _init_game__WEBPACK_IMPORTED_MODULE_1__.gameCards.length / 2;
    //catches all cards
    const playableCardsBackground = document.querySelectorAll(".card_background");
    const playableCards = document.querySelectorAll(".card");
    playableCards.forEach((playableCard, index) => {
        playableCard.addEventListener("click", function () {
            if (playableCard.style.opacity !== "0" && blockRevealMoreThanTwoCards == false) {
                _variables__WEBPACK_IMPORTED_MODULE_0__.cardSound.play();
                blockRevealMoreThanTwoCards = true;
                playableCard.style.backgroundImage = `url(./images/cards/${_init_game__WEBPACK_IMPORTED_MODULE_1__.gameCards[index]}.png)`;
                if (oneVisible == false) {
                    firstCardIndex = index;
                    oneVisible = true;
                    blockRevealMoreThanTwoCards = false;
                }
                else {
                    turnCounter++;
                    _variables__WEBPACK_IMPORTED_MODULE_0__.scoreCounter.innerHTML = `${turnCounter}`;
                    if (_init_game__WEBPACK_IMPORTED_MODULE_1__.gameCards[firstCardIndex] == _init_game__WEBPACK_IMPORTED_MODULE_1__.gameCards[index] && firstCardIndex != index) {
                        setTimeout(() => { hitPair(playableCardsBackground[index], playableCardsBackground[firstCardIndex]); }, 500);
                        totalPairs--;
                        if (totalPairs == 0)
                            setTimeout(() => { (0,_end_game_win__WEBPACK_IMPORTED_MODULE_2__.winningProcedure)(); }, 1000);
                    }
                    else
                        setTimeout(() => { missedPair(playableCard, playableCards[firstCardIndex]); }, 500);
                    oneVisible = false;
                }
            }
        });
    });
}
function hitPair(card1, card2) {
    blockRevealMoreThanTwoCards = false;
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
    blockRevealMoreThanTwoCards = false;
}


/***/ }),

/***/ "./src/js/game/timer.ts":
/*!******************************!*\
  !*** ./src/js/game/timer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentTime": () => (/* binding */ currentTime),
/* harmony export */   "startTimer": () => (/* binding */ startTimer)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ "./src/js/game/play.ts");
/* harmony import */ var _menu_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/options */ "./src/js/menu/options.ts");
/* harmony import */ var _end_game_lose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./end_game/lose */ "./src/js/game/end_game/lose.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let currentTime;
function startTimer() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(_menu_options__WEBPACK_IMPORTED_MODULE_2__.readyOptions.time, currentTime);
        if (_menu_options__WEBPACK_IMPORTED_MODULE_2__.readyOptions.time !== null) {
            //shows timer
            _variables__WEBPACK_IMPORTED_MODULE_0__.timer.style.display = "block";
            currentTime = _menu_options__WEBPACK_IMPORTED_MODULE_2__.readyOptions.time;
            _variables__WEBPACK_IMPORTED_MODULE_0__.timeCounter.innerHTML = currentTime.toString();
            const startTimer = setInterval(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    currentTime--;
                    _variables__WEBPACK_IMPORTED_MODULE_0__.timeCounter.innerHTML = currentTime.toString();
                    if (currentTime <= 5 && currentTime >= 0) {
                        _variables__WEBPACK_IMPORTED_MODULE_0__.timer.style.animation = "squintingTimer .4s infinite";
                        _variables__WEBPACK_IMPORTED_MODULE_0__.timer.style.animationDirection = "alternate";
                    }
                    if (currentTime == -1) {
                        clearInterval(startTimer);
                        (0,_end_game_lose__WEBPACK_IMPORTED_MODULE_3__.losingProcedure)();
                    }
                    if (_play__WEBPACK_IMPORTED_MODULE_1__.totalPairs == 0) {
                        clearInterval(startTimer);
                    }
                });
            }, 1000);
        }
    });
}


/***/ }),

/***/ "./src/js/menu/door.ts":
/*!*****************************!*\
  !*** ./src/js/menu/door.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeView": () => (/* binding */ changeView)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");

function changeView(hideId, showId) {
    return new Promise((resolve, reject) => {
        _variables__WEBPACK_IMPORTED_MODULE_0__.overlay.style.display = "block";
        const hideMe = document.querySelector("#" + hideId);
        const showMe = document.querySelector("#" + showId);
        _variables__WEBPACK_IMPORTED_MODULE_0__.doorLeft.style.animation = "closeTheDoorLeft 1s";
        _variables__WEBPACK_IMPORTED_MODULE_0__.doorLeft.style.animationFillMode = "forwards";
        _variables__WEBPACK_IMPORTED_MODULE_0__.doorRight.style.animation = "closeTheDoorRight 1s";
        _variables__WEBPACK_IMPORTED_MODULE_0__.doorRight.style.animationFillMode = "forwards";
        setTimeout(() => {
            hideMe.style.display = "none";
            showMe.style.display = "block";
            _variables__WEBPACK_IMPORTED_MODULE_0__.doorLeft.style.animation = "openTheDoorLeft 1s";
            _variables__WEBPACK_IMPORTED_MODULE_0__.doorRight.style.animation = "openTheDoorRight 1s";
            _variables__WEBPACK_IMPORTED_MODULE_0__.overlay.style.display = "none";
            resolve();
        }, 1600);
    });
}


/***/ }),

/***/ "./src/js/menu/index.ts":
/*!******************************!*\
  !*** ./src/js/menu/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound */ "./src/js/menu/sound.ts");
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./door */ "./src/js/menu/door.ts");
/* harmony import */ var _game_init_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/init_game */ "./src/js/game/init_game.ts");
/* harmony import */ var _game_play__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/play */ "./src/js/game/play.ts");
/* harmony import */ var _game_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../game/timer */ "./src/js/game/timer.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






// import "../game/end_game";
_variables__WEBPACK_IMPORTED_MODULE_0__.play.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0,_game_init_game__WEBPACK_IMPORTED_MODULE_3__.initGame)();
    yield (0,_game_play__WEBPACK_IMPORTED_MODULE_4__.mainGame)();
    yield (0,_door__WEBPACK_IMPORTED_MODULE_2__.changeView)("game_start", "game_board");
    yield (0,_game_timer__WEBPACK_IMPORTED_MODULE_5__.startTimer)();
}));
_variables__WEBPACK_IMPORTED_MODULE_0__.options.addEventListener("click", function () {
    (0,_door__WEBPACK_IMPORTED_MODULE_2__.changeView)("game_start", "game_options");
});
_variables__WEBPACK_IMPORTED_MODULE_0__.bestScores.addEventListener("click", function () {
    (0,_door__WEBPACK_IMPORTED_MODULE_2__.changeView)("game_start", "game_bestScores");
});
_variables__WEBPACK_IMPORTED_MODULE_0__.switchSoundButton.addEventListener("click", _sound__WEBPACK_IMPORTED_MODULE_1__.switchSoundFunction);


/***/ }),

/***/ "./src/js/menu/options.ts":
/*!********************************!*\
  !*** ./src/js/menu/options.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readyOptions": () => (/* binding */ readyOptions)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./door */ "./src/js/menu/door.ts");


let enumIndex = 3;
const enumLength = Object.keys(_variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer).length / 2;
for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_0__.optCardsNumberDiv.children.length; i++) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.optCardsNumberDiv.children[i].addEventListener("click", function () {
        readyOptions.cardsNumber = _variables__WEBPACK_IMPORTED_MODULE_0__.enumCardsNumber[`opt${i + 1}`];
        for (let j = 0; j < _variables__WEBPACK_IMPORTED_MODULE_0__.optCardsNumberDiv.children.length; j++) {
            _variables__WEBPACK_IMPORTED_MODULE_0__.optCardsNumberDiv.children[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}
_variables__WEBPACK_IMPORTED_MODULE_0__.optTimerDiv.children[0].addEventListener("click", function () {
    _variables__WEBPACK_IMPORTED_MODULE_0__.optTimerDiv.children[1].classList.remove("active");
    this.classList.add("active");
    _variables__WEBPACK_IMPORTED_MODULE_0__.clock.style.display = "none";
    readyOptions.time = null;
});
_variables__WEBPACK_IMPORTED_MODULE_0__.optTimerDiv.children[1].addEventListener("click", function () {
    _variables__WEBPACK_IMPORTED_MODULE_0__.optTimerDiv.children[0].classList.remove("active");
    this.classList.add("active");
    _variables__WEBPACK_IMPORTED_MODULE_0__.clock.style.display = "block";
    readyOptions.time = _variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer[`opt${enumIndex}`];
    _variables__WEBPACK_IMPORTED_MODULE_0__.clockSeconds.innerHTML = "" + readyOptions.time;
});
_variables__WEBPACK_IMPORTED_MODULE_0__.minusTime.addEventListener("click", function () {
    enumIndex == 1 ? enumIndex = enumLength : enumIndex--;
    readyOptions.time = _variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer["opt".concat(enumIndex.toString())];
    const minutes = Math.floor(_variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer[`opt${enumIndex}`] / 60);
    _variables__WEBPACK_IMPORTED_MODULE_0__.clockMinutes.innerHTML = ` ${minutes} `;
    let seconds = _variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer[`opt${enumIndex}`] % 60;
    seconds < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.clockSeconds.innerHTML = ` 0${seconds} ` : _variables__WEBPACK_IMPORTED_MODULE_0__.clockSeconds.innerHTML = ` ${seconds} `;
});
_variables__WEBPACK_IMPORTED_MODULE_0__.plusTime.addEventListener("click", function () {
    enumIndex == enumLength ? enumIndex = 1 : enumIndex++;
    readyOptions.time = _variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer[`opt${enumIndex}`];
    const minutes = Math.floor(_variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer[`opt${enumIndex}`] / 60);
    _variables__WEBPACK_IMPORTED_MODULE_0__.clockMinutes.innerHTML = ` ${minutes} `;
    let seconds = _variables__WEBPACK_IMPORTED_MODULE_0__.enumTimer[`opt${enumIndex}`] % 60;
    seconds < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.clockSeconds.innerHTML = ` 0${seconds} ` : _variables__WEBPACK_IMPORTED_MODULE_0__.clockSeconds.innerHTML = ` ${seconds} `;
});
const readyOptions = {
    cardsNumber: 16,
    time: null,
};
_variables__WEBPACK_IMPORTED_MODULE_0__.optButton.addEventListener("click", function () {
    (0,_door__WEBPACK_IMPORTED_MODULE_1__.changeView)("game_options", "game_start");
});


/***/ }),

/***/ "./src/js/menu/sound.ts":
/*!******************************!*\
  !*** ./src/js/menu/sound.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchSoundFunction": () => (/* binding */ switchSoundFunction),
/* harmony export */   "unmuteBackgroundSound": () => (/* binding */ unmuteBackgroundSound)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables.ts");

function switchSoundFunction() {
    const switchSoundImage = document.querySelector(".switch_sound>img");
    if (switchSoundImage.src.includes("volume")) {
        _variables__WEBPACK_IMPORTED_MODULE_0__.switchSoundButton.innerHTML = `<img src="images/mute.png" alt="muted"/>`;
        _variables__WEBPACK_IMPORTED_MODULE_0__.audios.forEach(audio => {
            audio.muted = true;
        });
    }
    else {
        _variables__WEBPACK_IMPORTED_MODULE_0__.switchSoundButton.innerHTML = `<img src="images/volume.png" alt="volume"/>`;
        _variables__WEBPACK_IMPORTED_MODULE_0__.audios.forEach(audio => {
            audio.muted = false;
        });
        unmuteBackgroundSound();
    }
}
function unmuteBackgroundSound() {
    _variables__WEBPACK_IMPORTED_MODULE_0__.audios[_variables__WEBPACK_IMPORTED_MODULE_0__.backgroundSoundIndex].autoplay = true;
    _variables__WEBPACK_IMPORTED_MODULE_0__.audios[_variables__WEBPACK_IMPORTED_MODULE_0__.backgroundSoundIndex].loop = true;
}


/***/ }),

/***/ "./src/js/variables.ts":
/*!*****************************!*\
  !*** ./src/js/variables.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "bestScores": () => (/* binding */ bestScores),
/* harmony export */   "enumCardsNumber": () => (/* binding */ enumCardsNumber),
/* harmony export */   "enumTimer": () => (/* binding */ enumTimer),
/* harmony export */   "optCardsNumberDiv": () => (/* binding */ optCardsNumberDiv),
/* harmony export */   "optTimerDiv": () => (/* binding */ optTimerDiv),
/* harmony export */   "clock": () => (/* binding */ clock),
/* harmony export */   "clockMinutes": () => (/* binding */ clockMinutes),
/* harmony export */   "clockSeconds": () => (/* binding */ clockSeconds),
/* harmony export */   "minusTime": () => (/* binding */ minusTime),
/* harmony export */   "plusTime": () => (/* binding */ plusTime),
/* harmony export */   "optButton": () => (/* binding */ optButton),
/* harmony export */   "overlay": () => (/* binding */ overlay),
/* harmony export */   "doorLeft": () => (/* binding */ doorLeft),
/* harmony export */   "doorRight": () => (/* binding */ doorRight),
/* harmony export */   "switchSoundButton": () => (/* binding */ switchSoundButton),
/* harmony export */   "backgroundSound": () => (/* binding */ backgroundSound),
/* harmony export */   "cardSound": () => (/* binding */ cardSound),
/* harmony export */   "winSound": () => (/* binding */ winSound),
/* harmony export */   "loseSound": () => (/* binding */ loseSound),
/* harmony export */   "audios": () => (/* binding */ audios),
/* harmony export */   "backgroundSoundIndex": () => (/* binding */ backgroundSoundIndex),
/* harmony export */   "gameCardsDiv": () => (/* binding */ gameCardsDiv),
/* harmony export */   "winVideo": () => (/* binding */ winVideo),
/* harmony export */   "loseVideo": () => (/* binding */ loseVideo),
/* harmony export */   "divVideo": () => (/* binding */ divVideo),
/* harmony export */   "scoreCounter": () => (/* binding */ scoreCounter),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timeCounter": () => (/* binding */ timeCounter),
/* harmony export */   "multipliers": () => (/* binding */ multipliers),
/* harmony export */   "end_screen_message": () => (/* binding */ end_screen_message),
/* harmony export */   "messageParts": () => (/* binding */ messageParts),
/* harmony export */   "cardsNumber": () => (/* binding */ cardsNumber),
/* harmony export */   "timeStart": () => (/* binding */ timeStart),
/* harmony export */   "timeLeft": () => (/* binding */ timeLeft),
/* harmony export */   "madeMoves": () => (/* binding */ madeMoves),
/* harmony export */   "totalPoints": () => (/* binding */ totalPoints),
/* harmony export */   "messageScores": () => (/* binding */ messageScores),
/* harmony export */   "message_lose": () => (/* binding */ message_lose),
/* harmony export */   "end_screen_buttons": () => (/* binding */ end_screen_buttons),
/* harmony export */   "main_menu": () => (/* binding */ main_menu),
/* harmony export */   "try_again": () => (/* binding */ try_again)
/* harmony export */ });
// menu
const play = document.querySelector(".main_button#play");
const options = document.querySelector(".main_button#options");
const bestScores = document.querySelector(".main_button#best_scores");
//options
var enumCardsNumber;
(function (enumCardsNumber) {
    enumCardsNumber[enumCardsNumber["opt1"] = 16] = "opt1";
    enumCardsNumber[enumCardsNumber["opt2"] = 20] = "opt2";
    enumCardsNumber[enumCardsNumber["opt3"] = 24] = "opt3";
})(enumCardsNumber || (enumCardsNumber = {}));
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
const optCardsNumberDiv = document.querySelector("#game_options .cardsNumber");
const optTimerDiv = document.querySelector("#game_options .timer");
const clock = document.querySelector("#game_options .clock");
const clockMinutes = document.querySelector("#game_options .clock span.clockTimeMinutes");
const clockSeconds = document.querySelector("#game_options .clock span.clockTimeSeconds");
const minusTime = document.querySelector("#game_options .updateTime #minusTime");
const plusTime = document.querySelector("#game_options .updateTime #plusTime");
const optButton = document.querySelector("#game_options .buttons button");
//door
const overlay = document.querySelector("#overlay");
const doorLeft = document.querySelector("#left_door");
const doorRight = document.querySelector("#right_door");
//sounds
const switchSoundButton = document.querySelector(".switch_sound");
const backgroundSound = new Audio("audio/forest.mp3");
const cardSound = new Audio("audio/card.mp3");
const winSound = new Audio("audio/win.mp3");
const loseSound = new Audio("audio/lose.mp3");
const audios = [backgroundSound, cardSound, winSound, loseSound];
const backgroundSoundIndex = audios.findIndex(audio => audio == backgroundSound);
// game
const gameCardsDiv = document.querySelector("#game_cards");
//videos
const winVideo = document.createElement("VIDEO");
winVideo.setAttribute("src", "video/win.mp4");
const loseVideo = document.createElement("VIDEO");
loseVideo.setAttribute("src", "video/lose.mp4");
const divVideo = document.querySelector(".video");
//moves and timer
const scoreCounter = document.getElementById("scoreCounter");
const timer = document.getElementById("timer");
let timeCounter = document.getElementById("timeCounter");
//end screen
var multipliers;
(function (multipliers) {
    multipliers[multipliers["multiplierCards"] = 150] = "multiplierCards";
    multipliers[multipliers["multiplieTimeLeft"] = 75] = "multiplieTimeLeft";
    multipliers[multipliers["multiplieTimeStart"] = 50] = "multiplieTimeStart";
    multipliers[multipliers["multiplieMoves"] = 25] = "multiplieMoves";
})(multipliers || (multipliers = {}));
const end_screen_message = document.querySelector("#game_end .message");
const messageParts = {
    cardsNumber: document.querySelector("#game_end .message #cardsNumber"),
    timeStart: document.querySelector("#game_end .message #timeStart"),
    timeLeft: document.querySelector("#game_end .message #timeLeft"),
    madeMoves: document.querySelector("#game_end .message #madeMoves"),
    totalPoints: document.querySelector("#game_end .message #totalPoints"),
};
const cardsNumber = document.querySelector("#game_end .message #cardsNumber");
const timeStart = document.querySelector("#game_end .message #timeStart");
const timeLeft = document.querySelector("#game_end .message #timeLeft");
const madeMoves = document.querySelector("#game_end .message #madeMoves");
const totalPoints = document.querySelector("#game_end .message #totalPoints");
const messageScores = {
    cardsNumberScore: cardsNumber.querySelector(":scope > .message_segment_score"),
    timeStartScore: timeStart.querySelector(":scope > .message_segment_score"),
    timeLeftScore: timeLeft.querySelector(":scope > .message_segment_score"),
    madeMovesScore: madeMoves.querySelector(":scope > .message_segment_score"),
    totalPointsScore: totalPoints.querySelector(":scope > .message_segment_score .score_full"),
};
const message_lose = document.querySelector("#game_end .message_lose");
const end_screen_buttons = document.querySelector("#game_end .buttons");
const main_menu = document.querySelector(".main_menu");
const try_again = document.querySelector(".try_again");


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../less/style.less */ "./src/less/style.less");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/menu/index.ts");
/* harmony import */ var _menu_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/sound */ "./src/js/menu/sound.ts");
//styles

console.log(345534);
//game

//starts playing background music

(0,_menu_sound__WEBPACK_IMPORTED_MODULE_2__.unmuteBackgroundSound)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map