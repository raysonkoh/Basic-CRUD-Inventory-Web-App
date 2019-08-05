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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/js/test.js\");\n\nconsole.log(_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nclass Item {\n    constructor(id,name,qty,type) {\n        this.id = id;\n        this.name = name;\n        this.qty = qty;\n        this.type = type;\n    }\n}\n\nclass Inventory {\n    constructor() {\n        this.items = [];\n    }\n\n    addItem(item) {\n        this.items.push(item);\n    }\n\n    removeItem(id=-1,name=-1) {\n        if (id !== -1) {\n            this.items = this.items.filter(ele => ele.id !== id);\n        } else if (name !== -1) {\n            this.items = this.items.filter(ele => ele.name !== name);\n        }\n    }\n\n    updateItem(qty,id=-1, name=-1) {\n        if (id !== -1) {\n            const item = this.items.find(el => el.id === id);\n            item.qty = qty;\n        } else if (name !== -1) {\n            const item = this.items.find(el => el.name === name);\n            item.qty = qty;\n        }\n    }\n}\n\n\nconst renderAddForm = () => {\n    document.querySelector('.form').innerHTML = '';\n    document.querySelector('.row').innerHTML = '';\n\n    const markup = `\n        <input type=\"text\" id=\"name\" placeholder=\"Name of Product\" class=\"input-name\">\n        <input type=\"number\" id=\"qty\" placeholder=\"Quantity of Product\" class=\"input-qty\">\n        <select class=\"input-type\">\n            <option value=\"laptop\">Laptop</option>\n            <option value=\"desktop\">Desktop</option>\n            <option value=\"mobile\">Mobile</option>\n            <option value=\"tablet\">Tablet</option>\n        </select>\n        <button type=\"button\" class=\"submit\">Submit</button>\n    `\n    document.querySelector('.form').insertAdjacentHTML('afterbegin',markup);\n}\n\nconst renderUpdateForm = () => {\n    document.querySelector('.form').innerHTML = '';\n    document.querySelector('.row').innerHTML = '';\n\n    const markup = `\n        <input type=\"text\" id=\"name\" placeholder=\"Name or ID of Product\" class=\"input-name\">\n        <input type=\"number\" id=\"qty\" placeholder=\"Quantity of Product\" class=\"input-qty\">\n        <select class=\"input-type\">\n            <option value=\"id\">ID</option>\n            <option value=\"name\">Name</option>\n        </select>\n        <button type=\"button\" class=\"submit\">Submit</button>\n    `\n    document.querySelector('.form').insertAdjacentHTML('afterbegin',markup);\n}\n\nconst renderRemoveForm = () => {\n    document.querySelector('.form').innerHTML = '';\n    document.querySelector('.row').innerHTML = '';\n\n    const markup = `\n        <input type=\"text\" id=\"name\" placeholder=\"Name or ID of Product\" class=\"input-name\">\n        <select class=\"input-type\">\n            <option value=\"id\">ID</option>\n            <option value=\"name\">Name</option>\n        </select>\n        <button type=\"button\" class=\"submit\">Submit</button>\n    `\n    document.querySelector('.form').insertAdjacentHTML('afterbegin',markup);\n}\n\nconst renderForm = (target) => {\n    if (target === 'btn-add'){\n        renderAddForm();\n    } else if (target ==='btn-update') {\n        renderUpdateForm();\n    } else if  (target ==='btn-remove') {\n        renderRemoveForm();\n    }\n\n}\n\nconst submitAddController = () => {\n    const name = document.querySelector('.input-name').value;\n    id += 1;\n    const qty = parseInt(document.querySelector('.input-qty').value);\n    const type = document.querySelector('.input-type').value;\n    inventory.addItem(new Item(id,name,qty,type));\n    // document.querySelector('.form').innerHTML = '';\n\n}\n\nconst submitUpdateController = () => {\n    const val = document.querySelector('.input-name').value;\n    const selector = document.querySelector('.input-type').value;\n    const qty = parseInt(document.querySelector('.input-qty').value);\n    console.log(val,selector,qty);\n    if (selector === 'id') {\n        inventory.updateItem(qty,parseInt(val));\n    } else if (selector ==='name') {\n        inventory.updateItem(qty,-1,val);\n    }\n    // document.querySelector('.form').innerHTML = '';\n\n}\n\n\nconst submitRemoveController = () => {\n    const val = document.querySelector('.input-name').value;\n    const selector = document.querySelector('.input-type').value;\n    if (selector === 'id') {\n        inventory.removeItem(parseInt(val));\n    } else if (selector ==='name') {\n        inventory.removeItem(-1,val);\n    }\n    // document.querySelector('.form').innerHTML = '';\n\n}\n\nconst renderRow = (item,index) => {\n    console.log('renderrow');\n    if (index === 0) {\n        const init_markup = `\n        <section class=\"row-id\">ID</section>\n        <section class=\"row-name\">NAME</section>\n        <section class=\"row-qty\">QUANTITY</section>\n        <section class=\"row-type\">TYPE</section>\n        `\n        document.querySelector('.row').insertAdjacentHTML('beforeend',init_markup);\n        document.querySelector('.row').classList.add('.highlight');\n    }\n    const markup_id = `<section>${item.id}</section>`;\n    document.querySelector('.row-id').insertAdjacentHTML('beforeend',markup_id);\n\n    const markup_name = `<section>${item.name}</section>`;\n    document.querySelector('.row-name').insertAdjacentHTML('beforeend',markup_name);\n\n    const markup_qty = `<section>${item.qty}</section>`;\n    document.querySelector('.row-qty').insertAdjacentHTML('beforeend',markup_qty);\n\n    const markup_type = `<section>${item.type}</section>`;\n    document.querySelector('.row-type').insertAdjacentHTML('beforeend',markup_type);\n\n}\n\nconst renderRows = () => {\n    console.log('renderrows');\n    document.querySelector('.row').innerHTML = '';\n    document.querySelector('.form').innerHTML = '';\n    if (inventory.items.length === 0){\n        console.log('empty inventory');\n    }\n    inventory.items.forEach(renderRow);\n}\n\nlet id = 0;\nconst inventory = new Inventory();\n// const init = () => {\n//     let id = 0;\n//     const inventory = new Inventory();\n// }\n// init();\n\n\ndocument.querySelector(\".btn\").addEventListener('click',e => {\n    var target = e.target.classList.value;\n    renderForm(target);\n\n    if (target ==='btn-add') {\n        document.querySelector('.submit').addEventListener('click', submitAddController);\n    } else if (target ==='btn-update') {\n        document.querySelector('.submit').addEventListener('click', submitUpdateController);\n    } else if (target ==='btn-remove') {\n        document.querySelector('.submit').addEventListener('click', submitRemoveController);\n    }\n})\n\ndocument.querySelector('.btn-1').addEventListener('click', renderRows);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('hahaha');\n/* harmony default export */ __webpack_exports__[\"default\"] = (23);\n\n//# sourceURL=webpack:///./src/js/test.js?");

/***/ })

/******/ });