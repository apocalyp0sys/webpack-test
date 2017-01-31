webpackJsonp([2,1],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["A"] = A;

function A(){
    console.log("A MODULE");
}

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__A__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__B__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["C"] = C;



function C(){
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__A__["A"])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__B__["B"])();
    console.log("C MODULE");

}

/***/ })
]);