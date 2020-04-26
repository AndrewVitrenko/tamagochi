/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/*! exports provided: eat, wash, play, doctor, bar, work, buy_food, business */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eat\", function() { return eat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wash\", function() { return wash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doctor\", function() { return doctor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bar\", function() { return bar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"work\", function() { return work; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buy_food\", function() { return buy_food; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"business\", function() { return business; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\n\r\n\r\nfunction eat() {\r\n\tfood.value += 30;\r\n\tclean.value -= 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(clean)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(clean)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(food)\r\n}\r\n\r\nfunction wash() {\r\n\tclean.value += 40;\r\n\thappiness.value -= 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(clean)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(happiness)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(happiness)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(clean)\r\n}\r\n\r\nfunction play() {\r\n\thappiness.value += 15;\r\n\tfood.value -= 10;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(happiness)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(happiness)\r\n}\r\n\r\nfunction doctor() {\r\n\thealth.value += 30;\r\n\tmoney.value -= 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(money)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(health)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(money)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(health)\r\n}\r\n\r\nfunction bar() {\r\n\tsocialization.value += 40;\r\n\tfood.value += 10;\r\n\thealth.value -= 10;\r\n\tmoney.value -= 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(health)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(socialization)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(money)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(health)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(money)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(socialization)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(food)\r\n}\r\n\r\nfunction work() {\r\n\tmoney.value += 50;\r\n\tfood.value -= 10;\r\n\thealth.value -= 10;\r\n\tsocialization.value -= 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(money)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(health)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(socialization)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(money)\t\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(health)\t\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(socialization)\t\r\n}\r\n\r\nfunction buy_food() {\r\n\tfood.value += 20;\r\n\tmoney.value -= 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(food)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(money)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(money)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(food)\t\r\n}\r\n\r\nfunction business() {\r\n\tmoney.value += 100;\r\n\thappiness.value += 100;\r\n\thealth.value -= 100;\r\n\tsocialization.value += 20;\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(money)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(happiness)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(socialization)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"dashoffset\"])(health)\r\n\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(health)\t\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(socialization)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(happiness)\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"checker\"])(money)\r\n}\n\n//# sourceURL=webpack:///./actions.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: checker, removeListener, dashoffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checker\", function() { return checker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeListener\", function() { return removeListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dashoffset\", function() { return dashoffset; });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./actions.js\");\n\r\n\r\n\r\ndocument.getElementById('start').addEventListener('click', start)\r\n\r\nclass gameElem {\r\n\tconstructor(id) {\r\n\t\tthis.id = id;\r\n\t\tthis.r = +document.getElementById(id).getAttribute('r')\r\n\t}\r\n}\r\n\r\nfunction hardDecrease(elem) {\r\n\telem.value -= 5;\r\n\r\n\tdashoffset(elem)\r\n\r\n\tchecker(elem)\r\n}\r\n\r\nfunction easyDecrease(elem) {\r\n\telem.value -= 3;\r\n\r\n\tdashoffset(elem)\r\n\r\n\tchecker(elem)\r\n}\r\n\r\nfunction start() {\r\n\tlet level = document.getElementsByTagName('select')[0].value;\r\n\r\n\tlet max_hard_value = 70;\r\n\tlet max_easy_value = 100;\r\n\r\n\twindow.food = new gameElem('food')\r\n\twindow.clean = new gameElem('clean')\r\n\twindow.happiness = new gameElem('happiness')\r\n\twindow.health = new gameElem('health')\r\n\twindow.socialization = new gameElem('socialization')\r\n\twindow.money = new gameElem('money')\r\n\r\n\t\r\n\r\n\tif (level == 'easy') {\r\n\t\tfood.value = Math.random() * max_easy_value;\t\t\r\n\t\tclean.value = Math.random() * max_easy_value;\t\t\r\n\t\thappiness.value = Math.random() * max_easy_value;\t\t\r\n\t\thealth.value = Math.random() * max_easy_value;\t\t\r\n\t\tsocialization.value = Math.random() * max_easy_value;\t\t\r\n\t\tmoney.value = Math.random() * max_easy_value;\t\r\n\t\t\r\n\t\tfood.maxValue = max_easy_value\r\n\t\tclean.maxValue = max_easy_value\r\n\t\thappiness.maxValue = max_easy_value\r\n\t\thealth.maxValue = max_easy_value\r\n\t\tsocialization.maxValue = max_easy_value\r\n\t\tmoney.maxValue = max_easy_value\r\n\t\t\r\n\t\twindow.food_decrease = setInterval(easyDecrease, 5000, food);\r\n\t\twindow.clean_decrease = setInterval(easyDecrease, 5000, clean);\r\n\t\twindow.happiness_decrease = setInterval(easyDecrease, 5000, happiness);\r\n\t\twindow.health_decrease = setInterval(easyDecrease, 5000, health);\r\n\t\twindow.socialization_decrease = setInterval(easyDecrease, 5000, socialization);\r\n\t\twindow.money_decrease = setInterval(easyDecrease, 5000, money);\r\n\r\n\t\tdashoffset(food)\r\n\t\tdashoffset(clean)\r\n\t\tdashoffset(happiness)\r\n\t\tdashoffset(socialization)\r\n\t\tdashoffset(health)\r\n\t\tdashoffset(money)\r\n\t}\r\n\telse if (level == 'hard') {\r\n\t\tfood.value = Math.random() * max_hard_value;\t\t\r\n\t\tclean.value = Math.random() * max_hard_value;\t\t\r\n\t\thappiness.value = Math.random() * max_hard_value;\t\t\r\n\t\thealth.value = Math.random() * max_hard_value;\t\t\r\n\t\tsocialization.value = Math.random() * max_hard_value;\t\t\r\n\t\tmoney.value = Math.random() * max_hard_value;\t\r\n\t\t\r\n\t\tfood.maxValue = max_hard_value\r\n\t\tclean.maxValue = max_hard_value\r\n\t\thappiness.maxValue = max_hard_value\r\n\t\thealth.maxValue = max_hard_value\r\n\t\tsocialization.maxValue = max_hard_value\r\n\t\tmoney.maxValue = max_hard_value\r\n\r\n\t\twindow.food_decrease = setInterval(hardDecrease, 5000, food);\r\n\t\twindow.clean_decrease = setInterval(hardDecrease, 5000, clean);\r\n\t\twindow.happiness_decrease = setInterval(hardDecrease, 5000, happiness);\r\n\t\twindow.health_decrease = setInterval(hardDecrease, 5000, health);\r\n\t\twindow.socialization_decrease = setInterval(hardDecrease, 5000, socialization);\r\n\t\twindow.money_decrease = setInterval(hardDecrease, 5000, money);\r\n\r\n\t\tdashoffset(food)\r\n\t\tdashoffset(clean)\r\n\t\tdashoffset(happiness)\r\n\t\tdashoffset(socialization)\r\n\t\tdashoffset(health)\r\n\t\tdashoffset(money)\r\n\t}\r\n\r\n\taddListener()\r\n}\r\n\r\nfunction addListener() {\r\n\tdocument.getElementById('feed').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"eat\"])\r\n\tdocument.getElementById('buy_food').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"buy_food\"])\r\n\tdocument.getElementById('wash').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"wash\"])\r\n\tdocument.getElementById('play').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"play\"])\r\n\tdocument.getElementById('treat').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"doctor\"])\r\n\tdocument.getElementById('drink').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"bar\"])\r\n\tdocument.getElementById('work').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"work\"])\r\n\tdocument.getElementById('business').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"business\"])\r\n}\r\n\r\nfunction checker(elem) {\r\n\tif (+elem.value <= 0) {\r\n\t\talert(`Game over ${elem.id} = ${elem.value}`)\r\n\t\tclearInterval(food_decrease)\r\n\t\tclearInterval(clean_decrease)\r\n\t\tclearInterval(happiness_decrease)\r\n\t\tclearInterval(health_decrease)\r\n\t\tclearInterval(socialization_decrease)\r\n\t\tclearInterval(money_decrease)\r\n\r\n\t\tremoveListener()\r\n\t}\r\n\r\n\tif (+elem.value >= 100) {\r\n\t\telem.value = 100;\r\n\t}\r\n}\r\n\r\nfunction removeListener() {\r\n\tdocument.getElementById('feed').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"eat\"])\r\n\tdocument.getElementById('buy_food').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"buy_food\"])\r\n\tdocument.getElementById('wash').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"wash\"])\r\n\tdocument.getElementById('play').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"play\"])\r\n\tdocument.getElementById('treat').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"doctor\"])\r\n\tdocument.getElementById('drink').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"bar\"])\r\n\tdocument.getElementById('work').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"work\"])\r\n\tdocument.getElementById('business').removeEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_1__[\"business\"])\r\n}\r\n\r\nfunction dashoffset(elem) {\r\n\tlet c = elem.r * 2 * Math.PI\r\n\tlet dashoffsetLength = (elem.maxValue - elem.value)/elem.maxValue*c\r\n\r\n\tif (dashoffsetLength < 0) {\r\n\t\tdocument.getElementById(elem.id).style.strokeDashoffset = 0\r\n\t}\r\n\telse if (dashoffsetLength >= c) {\r\n\t\tdocument.getElementById(elem.id).style.strokeDashoffset = c\r\n\t}\r\n\telse {\r\n\t\tdocument.getElementById(elem.id).style.strokeDashoffset = dashoffsetLength\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });