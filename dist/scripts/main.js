/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 205:
/***/ (() => {

var laptopSpecs = function laptopSpecs() {
  var specs = window.Computer.specs;
  var clickableItems = document.querySelectorAll('.clickable');
  var selectedItems = document.querySelectorAll('.selected');
  var orderTotal = null;

  var calculateTotal = function calculateTotal() {
    orderTotal = 0;
    selectedItems.forEach(function (item) {
      orderTotal += parseInt(item.dataset.price, 10);
    });
    document.querySelector('.summary-window__total').textContent = "Total: \xA3".concat(orderTotal);
  };

  var createNewSummaryItem = function createNewSummaryItem(innerHtml) {
    var node = document.createElement('li');
    node.className = 'spec-list__spec';
    node.innerHTML = innerHtml;
    return node;
  };

  var updateOrderSummary = function updateOrderSummary() {
    var specList = document.querySelector('.chosen-specs__spec-list');
    var container = document.createElement('ul');
    container.className = 'chosen-specs__spec-list list--no-style';
    container.appendChild(createNewSummaryItem(specs.Screen[0]));
    container.appendChild(createNewSummaryItem(specs.CPU[0]));
    container.appendChild(createNewSummaryItem(specs.Storage[0]));
    container.appendChild(createNewSummaryItem(specs.Memory[0]));
    container.appendChild(createNewSummaryItem(specs.Graphics[0]));
    specList.replaceWith(container);
    calculateTotal();
  };

  var onClickItem = function onClickItem(item) {
    if (item.classList.contains('buy-button')) {
      alert('Laptop succesfully purchased, heres your order summary');
      return;
    }

    var parent = item.parentElement;
    var category = parent.previousElementSibling.textContent;
    parent.querySelector('.selected').classList.remove('selected');
    item.classList.add('selected');
    selectedItems = document.querySelectorAll('.selected');
    specs[category] = [item.querySelector('.component-option__name').textContent, parseInt(item.querySelector('.component-option__price').textContent.substr(1), 10)];
    updateOrderSummary();
  };

  clickableItems.forEach(function (item) {
    item.addEventListener('click', function () {
      onClickItem(item);
    });
  });
  calculateTotal();
};

document.addEventListener('DOMContentLoaded', function () {
  laptopSpecs();
});

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _components_laptop_specs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _components_laptop_specs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_laptop_specs__WEBPACK_IMPORTED_MODULE_0__);
// Components

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;