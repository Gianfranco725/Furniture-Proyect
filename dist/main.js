/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_medias_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/medias.css */ \"./assets/styles/medias.css\");\n\nvar body = document.getElementById('body');\nvar promotionEmail = document.getElementById('promotionEmail');\nvar alertEmail = document.getElementById('alertEmail');\nvar alertEmail__background = document.getElementById('alertEmail__background');\nvar submitEmail = document.getElementById('submitEmail');\nvar submitEmail__background = document.getElementById('submitEmail__background');\nvar regUserEmail = /^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$/;\nalertEmail.addEventListener('click', function (e) {\n  e.preventDefault();\n\n  if (e.target.matches('.alertEmail__button')) {\n    tryAgainEmail();\n  }\n\n  if (e.target.matches('.submitEmail__button')) {\n    closeSuccessEmail();\n    console.log('boton gracias');\n  }\n});\nsubmitEmail.addEventListener('click', function (e) {\n  e.preventDefault();\n\n  if (e.target.matches('.submitEmail__button')) {\n    closeSuccessEmail();\n  }\n});\nbody.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var error = [];\n\n  if (!regUserEmail.test(promotionEmail.value) || !promotionEmail.value.trim()) {\n    error.push({\n      type: 'alertEmail',\n      msg: \"Escriba un correo valido\"\n    });\n\n    if (error.length > 0) {\n      error.forEach(function (error) {\n        if (error.type === 'alertEmail') {\n          errorEmail();\n        }\n      });\n    }\n  } else {\n    successEmail();\n  }\n});\n\nvar errorEmail = function errorEmail() {\n  alertEmail.style.display = 'block';\n  alertEmail__background.style.display = 'block';\n};\n\nvar tryAgainEmail = function tryAgainEmail() {\n  alertEmail.style.display = 'none';\n  alertEmail__background.style.display = 'none';\n};\n\nvar successEmail = function successEmail() {\n  submitEmail.style.display = 'block';\n  submitEmail__background.style.display = 'block';\n};\n\nvar closeSuccessEmail = function closeSuccessEmail() {\n  submitEmail.style.display = 'none';\n  submitEmail__background.style.display = 'none';\n};\n\n//# sourceURL=webpack://proyect-furniture-website/./src/index.js?");

/***/ }),

/***/ "./assets/styles/medias.css":
/*!**********************************!*\
  !*** ./assets/styles/medias.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://proyect-furniture-website/./assets/styles/medias.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;