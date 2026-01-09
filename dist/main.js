/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/featured.mjs":
/*!*************************************!*\
  !*** ./src/components/featured.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featured: () => (/* binding */ featured)
/* harmony export */ });
const featured = () => {
  const cards = document.querySelectorAll('.featuredSlide')

  if (!cards.length) return

  cards.forEach((card) => {
    const sliderEl = card.querySelector('.img')
    const wrapper = sliderEl?.querySelector('.swiper-wrapper')
    const slides = wrapper?.querySelectorAll('.swiper-slide') || []
    const prev = card.querySelector('.prevBtn')
    const next = card.querySelector('.nextBtn')
    const currentEl = card.querySelector('.count .current')
    const totalEl = card.querySelector('.count .all')

    if (!sliderEl || !wrapper || !slides.length) return

    sliderEl.classList.add('swiper')

    const swiper = new Swiper(sliderEl, {
      loop: true,
      slidesPerView: 1,
      navigation: { prevEl: prev, nextEl: next },
      on: {
        init(sw) {
          if (totalEl) totalEl.textContent = slides.length
          if (currentEl) currentEl.textContent = sw.realIndex + 1
        },
        slideChange(sw) {
          if (currentEl) currentEl.textContent = sw.realIndex + 1
        },
      },
    })
  })
}


/***/ }),

/***/ "./src/components/modal.mjs":
/*!**********************************!*\
  !*** ./src/components/modal.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
    console.log('modal');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/components/objectSliders.mjs":
/*!******************************************!*\
  !*** ./src/components/objectSliders.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const objectSliders = () => {
    const objectThumbs = document.getElementById('objectThumbs')

    if (objectThumbs) {
        new Swiper(objectThumbs, {
            loop: true,
            direction: "vertical",
            spaceBetween: 10,
            slidesPerView: 3,
            navigation: {
                nextEl: '.thumbs .nextBtn',
                prevEl: '.thumbs .prevBtn',
            },
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectSliders);

/***/ }),

/***/ "./src/components/swiper.mjs":
/*!***********************************!*\
  !*** ./src/components/swiper.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = () => {
  const partnersSlider = document.querySelector('.partnersSlider')

  if (!partnersSlider) return

  new Swiper(partnersSlider, {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: '.partnersSlider .next',
      prevEl: '.partnersSlider .prev',
    },
  })

  const objectMain = document.getElementById('objectMain')

  if (!objectMain) return

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal.mjs */ "./src/components/modal.mjs");
/* harmony import */ var _components_swiper_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/swiper.mjs */ "./src/components/swiper.mjs");
/* harmony import */ var _components_featured_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/featured.mjs */ "./src/components/featured.mjs");
/* harmony import */ var _components_objectSliders_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/objectSliders.mjs */ "./src/components/objectSliders.mjs");





(0,_components_modal_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_components_swiper_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_components_featured_mjs__WEBPACK_IMPORTED_MODULE_2__.featured)()
;(0,_components_objectSliders_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=main.js.map