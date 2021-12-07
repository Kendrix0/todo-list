/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! @creativebulma/bulma-divider v1.1.0 | (c) 2020 Gaetan | MIT License | https://github.com/CreativeBulma/bulma-divider */\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n/* line 17, src/sass/app.sass */\n.divider {\n  position: relative;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  color: #7a7a7a;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: .5px;\n  margin: 25px 0;\n}\n\n/* line 28, src/sass/app.sass */\n.divider::after, .divider::before {\n  content: '';\n  display: block;\n  flex: 1;\n  height: 1px;\n  background-color: #dbdbdb;\n}\n\n/* line 37, src/sass/app.sass */\n.divider:not(.is-right)::after {\n  margin-left: 10px;\n}\n\n/* line 41, src/sass/app.sass */\n.divider:not(.is-left)::before {\n  margin-right: 10px;\n}\n\n/* line 45, src/sass/app.sass */\n.divider.is-left::before {\n  display: none;\n}\n\n/* line 49, src/sass/app.sass */\n.divider.is-right::after {\n  display: none;\n}\n\n/* line 52, src/sass/app.sass */\n.divider.is-vertical {\n  flex-direction: column;\n  margin: 0 25px;\n}\n\n/* line 56, src/sass/app.sass */\n.divider.is-vertical::after, .divider.is-vertical::before {\n  height: auto;\n  width: 1px;\n}\n\n/* line 61, src/sass/app.sass */\n.divider.is-vertical::after {\n  margin-left: 0;\n  margin-top: 10px;\n}\n\n/* line 65, src/sass/app.sass */\n.divider.is-vertical::before {\n  margin-right: 0;\n  margin-bottom: 10px;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-white::after, .divider.is-white::before {\n  background-color: white;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-black::after, .divider.is-black::before {\n  background-color: #0a0a0a;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-light::after, .divider.is-light::before {\n  background-color: whitesmoke;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-dark::after, .divider.is-dark::before {\n  background-color: #363636;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-primary::after, .divider.is-primary::before {\n  background-color: #00d1b2;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-primary.is-light::after, .divider.is-primary.is-light::before {\n  background-color: #ebfffc;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-link::after, .divider.is-link::before {\n  background-color: #3273dc;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-link.is-light::after, .divider.is-link.is-light::before {\n  background-color: #eef3fc;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-info::after, .divider.is-info::before {\n  background-color: #3298dc;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-info.is-light::after, .divider.is-info.is-light::before {\n  background-color: #eef6fc;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-success::after, .divider.is-success::before {\n  background-color: #48c774;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-success.is-light::after, .divider.is-success.is-light::before {\n  background-color: #effaf3;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-warning::after, .divider.is-warning::before {\n  background-color: #ffdd57;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-warning.is-light::after, .divider.is-warning.is-light::before {\n  background-color: #fffbeb;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-danger::after, .divider.is-danger::before {\n  background-color: #f14668;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-danger.is-light::after, .divider.is-danger.is-light::before {\n  background-color: #feecf0;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css"],"names":[],"mappings":"AAAA,0HAA0H;AAC1H;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,+BAA+B;AAC/B;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,cAAc;AAChB;;AAEA,+BAA+B;AAC/B;EACE,WAAW;EACX,cAAc;EACd,OAAO;EACP,WAAW;EACX,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,iBAAiB;AACnB;;AAEA,+BAA+B;AAC/B;EACE,kBAAkB;AACpB;;AAEA,+BAA+B;AAC/B;EACE,aAAa;AACf;;AAEA,+BAA+B;AAC/B;EACE,aAAa;AACf;;AAEA,+BAA+B;AAC/B;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA,+BAA+B;AAC/B;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,+BAA+B;AAC/B;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA,+BAA+B;AAC/B;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA,+BAA+B;AAC/B;EACE,uBAAuB;AACzB;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,4BAA4B;AAC9B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B","sourcesContent":["/*! @creativebulma/bulma-divider v1.1.0 | (c) 2020 Gaetan | MIT License | https://github.com/CreativeBulma/bulma-divider */\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n/* line 17, src/sass/app.sass */\n.divider {\n  position: relative;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  color: #7a7a7a;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: .5px;\n  margin: 25px 0;\n}\n\n/* line 28, src/sass/app.sass */\n.divider::after, .divider::before {\n  content: '';\n  display: block;\n  flex: 1;\n  height: 1px;\n  background-color: #dbdbdb;\n}\n\n/* line 37, src/sass/app.sass */\n.divider:not(.is-right)::after {\n  margin-left: 10px;\n}\n\n/* line 41, src/sass/app.sass */\n.divider:not(.is-left)::before {\n  margin-right: 10px;\n}\n\n/* line 45, src/sass/app.sass */\n.divider.is-left::before {\n  display: none;\n}\n\n/* line 49, src/sass/app.sass */\n.divider.is-right::after {\n  display: none;\n}\n\n/* line 52, src/sass/app.sass */\n.divider.is-vertical {\n  flex-direction: column;\n  margin: 0 25px;\n}\n\n/* line 56, src/sass/app.sass */\n.divider.is-vertical::after, .divider.is-vertical::before {\n  height: auto;\n  width: 1px;\n}\n\n/* line 61, src/sass/app.sass */\n.divider.is-vertical::after {\n  margin-left: 0;\n  margin-top: 10px;\n}\n\n/* line 65, src/sass/app.sass */\n.divider.is-vertical::before {\n  margin-right: 0;\n  margin-bottom: 10px;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-white::after, .divider.is-white::before {\n  background-color: white;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-black::after, .divider.is-black::before {\n  background-color: #0a0a0a;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-light::after, .divider.is-light::before {\n  background-color: whitesmoke;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-dark::after, .divider.is-dark::before {\n  background-color: #363636;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-primary::after, .divider.is-primary::before {\n  background-color: #00d1b2;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-primary.is-light::after, .divider.is-primary.is-light::before {\n  background-color: #ebfffc;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-link::after, .divider.is-link::before {\n  background-color: #3273dc;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-link.is-light::after, .divider.is-link.is-light::before {\n  background-color: #eef3fc;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-info::after, .divider.is-info::before {\n  background-color: #3298dc;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-info.is-light::after, .divider.is-info.is-light::before {\n  background-color: #eef6fc;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-success::after, .divider.is-success::before {\n  background-color: #48c774;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-success.is-light::after, .divider.is-success.is-light::before {\n  background-color: #effaf3;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-warning::after, .divider.is-warning::before {\n  background-color: #ffdd57;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-warning.is-light::after, .divider.is-warning.is-light::before {\n  background-color: #fffbeb;\n}\n\n/* line 72, src/sass/app.sass */\n.divider.is-danger::after, .divider.is-danger::before {\n  background-color: #f14668;\n}\n\n/* line 80, src/sass/app.sass */\n.divider.is-danger.is-light::after, .divider.is-danger.is-light::before {\n  background-color: #feecf0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_creativebulma_bulma_divider_dist_bulma_divider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_creativebulma_bulma_divider_dist_bulma_divider_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    overflow: scroll;\n}\n\n.hover {\n    cursor: pointer;\n}\n\n#heroColumn {\n    border-bottom: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n#displayContainer {\n    height: 75vh;\n    overflow: auto;\n}\n\n#sidebarContainer {\n    height: 75vh;\n    overflow: auto;\n}\n\n#sideNav {\n    height: 100%;\n    width: auto;\n    overflow-y: auto;\n    margin-top: 2rem;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n#largeDisplay {\n    height: 100%;\n    width: 100%;\n}\n\n#smallDisplay {\n    min-width: 15rem;\n    min-height: 18rem;\n    width: 22.5%;\n    max-height: 35%;\n    padding-bottom: 0px;\n    padding-right: 5px;\n}\n\n#largeTaskContainer {\n    width: 100%;\n    height: 17em;\n    overflow: auto;\n}\n\n#smallTaskContainer {\n    width: 100%;\n    height: 8rem;\n    overflow: auto;\n}\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n.menu-list a {\n    padding: 0.1em 0.75em;\n}\n\n.hidden {\n    display: none;\n}\n\n#categoryInput {\n    width: 100%;\n}\n\n.card {\n    box-shadow: none;\n}\n\n.card-header {\n    box-shadow: none;\n    border-top: 1px solid rgba(150, 150, 150, 0.5);\n    border-radius: 0;\n}\n\n.card-content {\n    padding: 0.4rem;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}\n\n.footer {\n    padding: 2rem 1.5rem 2rem;\n    border-top: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n.hero.is-small .hero-body {\n    padding: 0.5rem 1.5rem 0.5rem\n}\n\n.content p.subtitle {\n    margin-bottom: 0;\n}\n\n.lateProject {\n    border: 5px solid rgb(255, 45, 45);\n    text-shadow: 2px 2px 4px rgb(125, 115, 115);\n}\n\n.dueProject {\n    border: 5px solid rgb(255, 206, 45);\n    text-shadow: 2px 2px 4px rgb(125, 115, 115);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT;AACJ;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,8CAA8C;IAC9C,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kDAAkD;AACtD;;AAEA;IACI,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,2CAA2C;AAC/C;;AAEA;IACI,mCAAmC;IACnC,2CAA2C;AAC/C","sourcesContent":["body {\n    height: 100vh;\n    overflow: scroll;\n}\n\n.hover {\n    cursor: pointer;\n}\n\n#heroColumn {\n    border-bottom: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n#displayContainer {\n    height: 75vh;\n    overflow: auto;\n}\n\n#sidebarContainer {\n    height: 75vh;\n    overflow: auto;\n}\n\n#sideNav {\n    height: 100%;\n    width: auto;\n    overflow-y: auto;\n    margin-top: 2rem;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n#largeDisplay {\n    height: 100%;\n    width: 100%;\n}\n\n#smallDisplay {\n    min-width: 15rem;\n    min-height: 18rem;\n    width: 22.5%;\n    max-height: 35%;\n    padding-bottom: 0px;\n    padding-right: 5px;\n}\n\n#largeTaskContainer {\n    width: 100%;\n    height: 17em;\n    overflow: auto;\n}\n\n#smallTaskContainer {\n    width: 100%;\n    height: 8rem;\n    overflow: auto;\n}\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n.menu-list a {\n    padding: 0.1em 0.75em;\n}\n\n.hidden {\n    display: none;\n}\n\n#categoryInput {\n    width: 100%;\n}\n\n.card {\n    box-shadow: none;\n}\n\n.card-header {\n    box-shadow: none;\n    border-top: 1px solid rgba(150, 150, 150, 0.5);\n    border-radius: 0;\n}\n\n.card-content {\n    padding: 0.4rem;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}\n\n.footer {\n    padding: 2rem 1.5rem 2rem;\n    border-top: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n.hero.is-small .hero-body {\n    padding: 0.5rem 1.5rem 0.5rem\n}\n\n.content p.subtitle {\n    margin-bottom: 0;\n}\n\n.lateProject {\n    border: 5px solid rgb(255, 45, 45);\n    text-shadow: 2px 2px 4px rgb(125, 115, 115);\n}\n\n.dueProject {\n    border: 5px solid rgb(255, 206, 45);\n    text-shadow: 2px 2px 4px rgb(125, 115, 115);\n}\n\n@import \"~@creativebulma/bulma-divider\";\n@import \"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\""],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


class Categories {
    constructor() {
        this.categories = []
    }

    addCategory(category) {
        if (!this.categories.includes(category)) {
            this.categories.push(category);
        }
    };

    removeCategory(category) {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i] == category) {
                this.categories.splice(i, 1)
            }
        }
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
    };
}

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayedProject": () => (/* binding */ displayedProject),
/* harmony export */   "focusOneProject": () => (/* binding */ focusOneProject),
/* harmony export */   "displayMultipleProjects": () => (/* binding */ displayMultipleProjects)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);







const projectsDisplay = document.querySelector('#projectsDisplay');

let displayedProject = [];

function clearDisplay() {
    displayContainer.innerHTML = '';
    displayContainer.appendChild(projectsDisplay);
    projectsDisplay.innerHTML = '';
}

function deleteProject(projects, projectContainer) {
    _storage__WEBPACK_IMPORTED_MODULE_0__.projectList.removeProject(projects);
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
    projectsDisplay.removeChild(projectContainer);
}

function displayTasks(project, single) {
    let displayContent = document.createElement('div');
    displayContent.classList.add('content');
    for (let j = 0; j < project.tasks.length; j++) {
        let task = project.tasks[j];
        let taskItem = document.createElement('div');
        let taskField = document.createElement('div');
        let taskCheck = document.createElement('input');
        let taskDetails = document.createElement('div');
        let taskTitle = document.createElement('label');
        let deleteBtn = document.createElement('button');

        taskField.classList.add();

        taskCheck.classList.add('is-checkradio', 'is-circle', 'mr-1');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.setAttribute('name', `${task.id}`);

        taskItem.classList.add('card-header', 'pt-1', 'my-1', 'is-justify-content-space-between');

        deleteBtn.classList.add('delete', 'is-small', 'hidden');
        deleteBtn.onclick = () => { project.removeTask(j), displayContent.removeChild(taskItem), (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)() }

        function toggleBtn() { deleteBtn.classList.toggle('hidden') };
        taskItem.addEventListener('mouseover', toggleBtn);
        taskItem.addEventListener('mouseout', toggleBtn);

        if (task.completed) {
            taskCheck.setAttribute('checked', 'true')
        }

        taskCheck.onclick = () => {
            task.completed = !task.completed;
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
            console.log(task)
        }

        taskTitle.setAttribute('for', `${task.id}`);
        taskTitle.textContent = task.title;

        taskField.appendChild(taskCheck);
        taskField.appendChild(taskTitle);

        taskItem.appendChild(taskField);
        taskItem.appendChild(deleteBtn);

        displayContent.appendChild(taskItem);
        if (single) {
            let timeEstimate = document.createElement('div');
            let editTaskBtn = document.createElement('button');

            taskDetails.classList.add('card-content', 'hidden');
            taskDetails.textContent = task.desc;

            timeEstimate.classList.add('is-italic');
            timeEstimate.textContent = `Estimated time: ${task.time} min`;

            editTaskBtn.classList.add('button', 'is-info', 'is-outlined', 'is-light');
            editTaskBtn.textContent = 'Edit Task';
            editTaskBtn.onclick = () => {
                createTaskModal(true, task, single);
            }

            taskDetails.appendChild(timeEstimate);
            taskDetails.appendChild(editTaskBtn);
            displayContent.appendChild(taskDetails);
            taskItem.classList.add('hover');
            taskItem.onclick = () => {
                taskDetails.classList.toggle('hidden');
            }
        }
        deleteBtn.onclick = () => { 
            project.removeTask(j);
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
            if (single) {
                focusOneProject(project);
            } else {
                displayMultipleProjects(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.projects);
            }
        }
    }
    return displayContent;
}

function createTaskModal(edit, item, single) {
    let body = document.querySelector('body');
    let modal = document.createElement('div');
    let modalBackground = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalBox = document.createElement('div');
    let titleField = document.createElement('div');
    let titleLabel = document.createElement('label');
    let titleControl = document.createElement('div');
    let titleInput = document.createElement('input');
    let descField = document.createElement('div');
    let descLabel = document.createElement('label');
    let descControl = document.createElement('div');
    let descInput = document.createElement('textarea');
    let timeField = document.createElement('div');
    let timeLabel = document.createElement('label');
    let timeControl = document.createElement('div');
    let timeInput = document.createElement('input');
    let btnField = document.createElement('div');
    let submitBtn = document.createElement('button');
    let submitBtnControl = document.createElement('div');
    let cancelBtn = document.createElement('button');
    let cancelBtnControl = document.createElement('div');
    let closeBtn = document.createElement('button');

    modal.classList.add('modal', 'is-active');
    modalBackground.classList.add('modal-background');
    modalContent.classList.add('modal-content');
    modalBox.classList.add('box');
    titleField.classList.add('field');
    titleLabel.classList.add('label');
    titleLabel.textContent = 'Title';
    titleControl.classList.add('control');
    titleInput.classList.add('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    descField.classList.add('field');
    descLabel.classList.add('label');
    descLabel.textContent = 'Description';
    descControl.classList.add('control');
    descInput.classList.add('textarea');
    descInput.setAttribute('placeholder', 'Description');
    timeField.classList.add('field');
    timeLabel.classList.add('label');
    timeLabel.textContent = 'Time to complete';
    timeControl.classList.add('control');
    timeInput.classList.add('input');
    timeInput.setAttribute('type', 'number');
    timeInput.setAttribute('min', '0');
    btnField.classList.add('field', 'is-grouped');
    submitBtn.classList.add('button', 'is-link');
    submitBtn.textContent = 'Submit';
    submitBtnControl.classList.add('control');
    cancelBtn.classList.add('button', 'is-link', 'is-light');
    cancelBtn.textContent = 'Cancel';
    cancelBtnControl.classList.add('control');
    closeBtn.classList.add('modal-close', 'is-large');

    if (edit) {
        titleInput.value = item.title;
        descInput.value = item.desc;
        timeInput.value = parseInt(item.time);
        submitBtn.onclick = () => {
            displayedProject[0].time -= parseInt(item.time);
            item.title = titleInput.value;
            item.desc = descInput.value;
            item.time = parseInt(timeInput.value) || 0;
            displayedProject[0].time += parseInt(item.time);
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
            focusOneProject(displayedProject[0]);
            body.removeChild(modal);
        }
    } else {
        submitBtn.onclick = () => {
            item.addTask(titleInput.value, descInput.value, parseInt(timeInput.value));
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
            if (single) {
                focusOneProject(item);
            } else {
                displayMultipleProjects(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.projects);
            }
            body.removeChild(modal);
        }
    }

    cancelBtn.onclick = () => body.removeChild(modal);
    closeBtn.onclick = () => body.removeChild(modal);

    titleControl.appendChild(titleInput);
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleControl);
    descControl.appendChild(descInput);
    descField.appendChild(descLabel);
    descField.appendChild(descControl);
    timeControl.appendChild(timeInput);
    timeField.appendChild(timeLabel);
    timeField.appendChild(timeControl);
    submitBtnControl.appendChild(submitBtn);
    cancelBtnControl.appendChild(cancelBtn);
    btnField.appendChild(submitBtnControl);
    btnField.appendChild(cancelBtnControl);
    modalBox.appendChild(titleField);
    modalBox.appendChild(descField);
    modalBox.appendChild(timeField);
    modalBox.appendChild(btnField);
    modalContent.appendChild(modalBox);
    modal.appendChild(modalBackground);
    modal.appendChild(modalContent);
    modal.appendChild(closeBtn);
    body.appendChild(modal)
}

function createEditProjectModal(project, single) {
    let body = document.querySelector('body');

    let modal = document.createElement('div');
    let modalBackground = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalBox = document.createElement('div');

    let titleField = document.createElement('div');
    let titleLabel = document.createElement('label');
    let titleControl = document.createElement('div');
    let titleInput = document.createElement('input');

    let descField = document.createElement('div');
    let descLabel = document.createElement('label');
    let descControl = document.createElement('div');
    let descInput = document.createElement('textarea');

    let dateField = document.createElement('div');
    let dateLabel = document.createElement('label');
    let dateControl = document.createElement('div');
    let dateInput = document.createElement('input');
    
    let columnField = document.createElement('div');

    let colorColumn = document.createElement('div');
    let colorField = document.createElement('div');
    let colorLabel = document.createElement('label');
    let colorControl = document.createElement('div');
    let colorSelectContainer = document.createElement('div');
    let colorSelect = document.createElement('select');
    let colorWhite = document.createElement('option');
    let colorDark = document.createElement('option');
    let colorBlue = document.createElement('option');
    let colorGreen = document.createElement('option');
    let colorYellow = document.createElement('option');
    let colorRed = document.createElement('option');

    let categoryColumn = document.createElement('div');
    let categoryField = document.createElement('div');
    let categoryLabel = document.createElement('label');
    let categoryControl = document.createElement('div');
    let categoryInput = document.createElement('input')

    let btnField = document.createElement('div');

    let submitBtn = document.createElement('button');
    let submitBtnControl = document.createElement('div');

    let cancelBtn = document.createElement('button');
    let cancelBtnControl = document.createElement('div');

    let closeBtn = document.createElement('button');

    modal.classList.add('modal', 'is-active');
    modalBackground.classList.add('modal-background');
    modalContent.classList.add('modal-content');
    modalBox.classList.add('box');

    titleField.classList.add('field');
    titleLabel.classList.add('label');
    titleLabel.textContent = 'Title';
    titleControl.classList.add('control');
    titleInput.classList.add('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    titleInput.value = project.title;

    descField.classList.add('field');
    descLabel.classList.add('label');
    descLabel.textContent = 'Description';
    descControl.classList.add('control');
    descInput.classList.add('textarea');
    descInput.setAttribute('placeholder', 'Description');
    descInput.value = project.desc;

    dateField.classList.add('field');
    dateLabel.classList.add('label');
    dateLabel.textContent = 'Due date';
    dateControl.classList.add('control');
    dateInput.classList.add('input');
    dateInput.setAttribute('type', 'date');
    dateInput.value = project.date;

    columnField.classList.add('columns');
    let colors = ['White','Dark','Blue','Green','Yellow','Red'];
    let colorValues = ['white','dark','info','primary','warning','danger'];
    let colorOptions = [colorWhite, colorDark, colorBlue, colorGreen, colorYellow, colorRed];
    colorColumn.classList.add('column', 'is-3');
    colorField.classList.add('field');
    colorLabel.classList.add('label');
    colorLabel.innerHTML = 'Color <span class="subtitle is-6">(Optional)</span>';
    colorControl.classList.add('control');
    colorSelectContainer.classList.add('select');
    for (let i = 0; i < 6; i++) {
        colorOptions[i].textContent = colors[i];
        colorOptions[i].setAttribute('value', colorValues[i]);
    }
    colorSelect.value = project.color;

    categoryColumn.classList.add('column', 'is-8');
    categoryField.classList.add('field');
    categoryLabel.classList.add('label');
    categoryLabel.innerHTML = 'Categories <span class="subtitle is-6">(Optional, separated by space)</span>'
    categoryControl.classList.add('control');
    categoryInput.classList.add('input');
    categoryInput.setAttribute('type','text');
    categoryInput.setAttribute('placeholder','Categories');
    categoryInput.value = project.categories.join(' ');
    
    btnField.classList.add('field', 'is-grouped');

    submitBtn.classList.add('button', 'is-link');
    submitBtn.textContent = 'Submit';
    submitBtnControl.classList.add('control');
    submitBtn.onclick = () => {
        project.title = titleInput.value;
        project.desc = descInput.value;
        project.date = dateInput.value;
        project.color = colorSelect.value;
        let formatted = (0,_project__WEBPACK_IMPORTED_MODULE_2__.formatCategories)(categoryInput);
        project.categories = formatted;
        for (let i = 0; i < formatted.length; i++) {
            _storage__WEBPACK_IMPORTED_MODULE_0__.categoryList.addCategory(formatted[i]);
        }
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.loadSideNav)();
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
        body.removeChild(modal);
        if (single) {
            focusOneProject(project);
        } else {
            displayMultipleProjects(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.projects);
        }
    }

    cancelBtn.classList.add('button', 'is-link', 'is-light');
    cancelBtn.textContent = 'Cancel';
    cancelBtnControl.classList.add('control');

    closeBtn.classList.add('modal-close', 'is-large');

    cancelBtn.onclick = () => body.removeChild(modal);
    closeBtn.onclick = () => body.removeChild(modal);

    titleControl.appendChild(titleInput);
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleControl);
    descControl.appendChild(descInput);
    descField.appendChild(descLabel);
    descField.appendChild(descControl);
    dateControl.appendChild(dateInput);
    dateField.appendChild(dateLabel);
    dateField.appendChild(dateControl);
    for (let i = 0; i < 6; i++) {
        colorSelect.appendChild(colorOptions[i]);
        if (colorValues[i] == project.color) {
            colorOptions[i].setAttribute('selected','selected');
        }
    };
    colorSelectContainer.appendChild(colorSelect);
    colorControl.appendChild(colorSelectContainer);
    colorField.appendChild(colorLabel);
    colorField.appendChild(colorControl);
    colorColumn.appendChild(colorField);
    columnField.appendChild(colorColumn);
    categoryControl.appendChild(categoryInput);
    categoryField.appendChild(categoryLabel);
    categoryField.appendChild(categoryInput);
    categoryColumn.appendChild(categoryField);
    columnField.appendChild(categoryColumn);
    submitBtnControl.appendChild(submitBtn);
    cancelBtnControl.appendChild(cancelBtn);
    btnField.appendChild(submitBtnControl);
    btnField.appendChild(cancelBtnControl);
    modalBox.appendChild(titleField);
    modalBox.appendChild(descField);
    modalBox.appendChild(dateField);
    modalBox.appendChild(columnField);
    modalBox.appendChild(btnField);
    modalContent.appendChild(modalBox);
    modal.appendChild(modalBackground);
    modal.appendChild(modalContent);
    modal.appendChild(closeBtn);
    body.appendChild(modal)
}

function createDisplay(projects, single) {
    let projectContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let displayTitle = document.createElement('p');
    let displayTime = document.createElement('p');
    let displayDate = document.createElement('p');
    let projectTasks = displayTasks(projects, single);
    let deleteProjectBtn = document.createElement('button');
    let addTaskBtn = document.createElement('button');
    let editProjectBtn = document.createElement('button');
    let bottomBtnContainer = document.createElement('div');

    projectContainer.classList.add('box', 'notification', `is-${projects.color}`, 'is-vertical','pb-1');
    contentContainer.classList.add('content');
    displayTitle.classList.add('title');
    displayTime.classList.add('subtitle');
    addTaskBtn.classList.add('button', 'is-primary', 'is-outlined', 'is-light');
    editProjectBtn.classList.add('button', 'is-info', 'is-outlined', 'is-light');
    deleteProjectBtn.classList.add('delete');
    bottomBtnContainer.classList.add('field', 'is-grouped', 'is-flex', 'is-justify-content-space-around');

    deleteProjectBtn.onclick = () => {
        deleteProject(projects, projectContainer);
        (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.loadSideNav)();
    }

    displayTitle.textContent = projects.title;
    displayTitle.onclick = () => {
        focusOneProject(projects);
    }

    displayDate.classList.add('dateDisplay');
    if (projects.date == '') {
        displayDate.textContent = 'Due date: none';
    } else if (dayjs__WEBPACK_IMPORTED_MODULE_3__().isAfter(projects.date) && dayjs__WEBPACK_IMPORTED_MODULE_3__().format('MMM DD YYYY') == dayjs__WEBPACK_IMPORTED_MODULE_3__(projects.date).format('MMM DD YYYY')) {
        displayDate.innerHTML = `Due date: ${dayjs__WEBPACK_IMPORTED_MODULE_3__(projects.date).format('MMM DD YYYY')} <br><strong>DUE TODAY!</strong>`;
        displayDate.classList.add('is-italic');
        projectContainer.classList.add('dueProject');
    } else if (dayjs__WEBPACK_IMPORTED_MODULE_3__().isAfter(projects.date)) {
        displayDate.innerHTML = `Due date: ${dayjs__WEBPACK_IMPORTED_MODULE_3__(projects.date).format('MMM DD YYYY')} <br><strong>PAST DUE!</strong>`;
        displayDate.classList.add('is-italic');
        projectContainer.classList.add('lateProject');
    } else {
        displayDate.textContent = `Due date: ${dayjs__WEBPACK_IMPORTED_MODULE_3__(projects.date).format('MMM DD YYYY')}`;
    }
    displayDate.style.marginBottom = '0px';

    displayTime.textContent = `Est. time: ${projects.time} min`;

    contentContainer.appendChild(displayTitle);

    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.onclick = () => {
        createTaskModal(false, projects, single)
    }
    editProjectBtn.textContent = 'Edit';
    editProjectBtn.onclick = () => {
        createEditProjectModal(projects, single);
    }
    if (single) {
        projectContainer.classList.add('tile');
        projectContainer.id = "largeDisplay"
        let displayCategories = document.createElement('div');

        displayCategories.classList.add('subtitle');
        if (projects.categories.length > 0) {
            displayCategories.textContent = `Categories: ${projects.categories.join(', ')}`
        } else {
            displayCategories.textContent = '';
        }

        let displayDesc = document.createElement('p');
        displayDesc.textContent = projects.desc;
        displayDesc.classList.add('subtitle');

        contentContainer.appendChild(displayDesc);
        contentContainer.appendChild(displayCategories);
        projectTasks.id = "largeTaskContainer";

    } else {
        projectContainer.classList.add('mx-3');
        projectContainer.id = "smallDisplay";
        projectTasks.id = "smallTaskContainer"
        displayTitle.classList.add('projectTitle');
    }

    contentContainer.appendChild(displayTime);
    contentContainer.appendChild(displayDate);
    contentContainer.appendChild(projectTasks);
    bottomBtnContainer.appendChild(addTaskBtn);
    bottomBtnContainer.appendChild(editProjectBtn);
    projectContainer.appendChild(contentContainer);
    projectContainer.appendChild(deleteProjectBtn);
    projectContainer.appendChild(bottomBtnContainer);
    projectsDisplay.appendChild(projectContainer);
}

function focusOneProject(project) {
    clearDisplay();
    createDisplay(project, true);
    displayedProject = [project];
}

function displayMultipleProjects(list) {
    clearDisplay();
    for (let i = 0; i < list.length; i++) {
        createDisplay(list[i], false)
    }
    displayedProject = list;
}

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



class Library {
    constructor() {
        this.projects = [];
    }

    createProject(title, desc, color = "white", categories = [], date, time = 0, completed = false, tasks = [], priority = this.projects.length) {
        let project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title, desc, color, categories, date, time, completed, tasks);
        if (categories) {
            categories.map(cat => project.addCategory(cat));
        }
        if (priority < this.projects.length) {
            this.projects.splice(priority, 0, project);
        } else {
            this.projects.push(project);
        }
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
    }

    /*
    createProject(title, desc, color = "white", categories = [], priority = this.projects.length, time = 0, completed = false, tasks = []) {
        let project = new Project(title, desc, color, categories, time, completed, tasks);
        if (categories) {
            categories.map(cat => project.addCategory(cat));
        }
        if (priority < this.projects.length) {
            this.projects.splice(priority, 0, project);
        } else {
            this.projects.push(project);
        }
        saveLocal();
    }
    */

    removeProject(project) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i] == project) {
                this.projects.splice(i,1);
            }
        }
    }
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCategories": () => (/* binding */ formatCategories),
/* harmony export */   "clearProjectForm": () => (/* binding */ clearProjectForm),
/* harmony export */   "toggleProjectForm": () => (/* binding */ toggleProjectForm),
/* harmony export */   "submitProjectForm": () => (/* binding */ submitProjectForm),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);





const modal = document.querySelector('.modal');
const projectFormTitle = document.querySelector('#projectFormTitle');
const projectFormDesc = document.querySelector('#projectFormDesc');
const projectFormColor = document.querySelector('#projectFormColor');
const projectFormCategories = document.querySelector('#projectFormCategories');
const projectFormDate = document.querySelector('#projectFormDate');

function formatCategories(categories) {
    let filteredCategories = []
    let splitValues = categories.value.split(' ');
    for (let i = 0; i < splitValues.length; i++) {
        if (splitValues[i] != '') {
            filteredCategories.push(splitValues[i].toLowerCase())
        }
    }
    return filteredCategories
}

function clearProjectForm() {
    projectFormTitle.value = '';
    projectFormDesc.value = '';
    projectFormColor.value = "white";
    projectFormCategories.value = '';
}

function toggleProjectForm() {
    modal.classList.toggle('is-active');
}

function submitProjectForm() {
    _storage__WEBPACK_IMPORTED_MODULE_1__.projectList.createProject(projectFormTitle.value, projectFormDesc.value, projectFormColor.value, formatCategories(projectFormCategories), projectFormDate.value);
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayMultipleProjects)(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);
    clearProjectForm();
    toggleProjectForm();
}

class Project {
    constructor(title, desc, color, categories, date, time, completed, tasks) {
        this.title = title;
        this.desc = desc;
        this.color = color;
        this.time = time;
        this.date = date;
        this.completed = completed;
        this.tasks = tasks;
        this.categories = categories;
    }

    addTask(title, desc, time = 0, priority = this.tasks.length) {
        let task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](title, desc, time);
        if (priority < this.tasks.length) {
            this.tasks.splice(priority, 0, task);
        } else {
            this.tasks.push(task);
        }
        this.time += task.time;
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
    }

    removeTask(priority) {
        this.time -= this.tasks[priority].time;
        this.tasks.splice(priority, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
    }

    completeProject() {
        this.completed = !this.completed;
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
    }

    addCategory(category) {
        if (category == '') {
            return;
        }
        if (!this.categories.includes(category)) {
            this.categories.push(category);
        }
        _storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.addCategory(category);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
    }

    removeCategory(category) {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i] == category) {
                this.categories.splice(i, 1);
            }
        }
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
    }

}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleCategoryInput": () => (/* binding */ toggleCategoryInput),
/* harmony export */   "loadSideNav": () => (/* binding */ loadSideNav)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);





const categoryInput = document.querySelector('#categoryInput');
const categoryInputField = document.querySelector('#inputField');
const sideNav = document.querySelector('#sideNav');

function createSideNavProjectLinks(projects, categories, i, parent) {
    for (let j = 0; j < projects.length; j++) {
        if (projects[j].categories.includes(categories[i])) {
            let projectLinkUl = document.createElement('ul');
            let projectLinkLi = document.createElement('li');
            let projectLink = document.createElement('a');

            projectLinkUl.classList.add('menu-list');
            projectLink.classList.add('my-0');
            projectLink.onclick = () => { (0,_display__WEBPACK_IMPORTED_MODULE_0__.focusOneProject)(projects[j]) }
            projectLink.textContent = `·${projects[j].title}`;
            projectLinkLi.appendChild(projectLink);
            projectLinkUl.appendChild(projectLinkLi);
            parent.appendChild(projectLinkUl);
        }
    }
}

function deleteCategory(category) {
    _storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.removeCategory(category);
    for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects.length; i++) {
        if (_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects[i].categories.includes(category)) {
            _storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects[i].removeCategory(category)
        }
    }
    if (_display__WEBPACK_IMPORTED_MODULE_0__.displayedProject.length == 1) {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.focusOneProject)(_display__WEBPACK_IMPORTED_MODULE_0__.displayedProject[0])
    } else {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayMultipleProjects)(_display__WEBPACK_IMPORTED_MODULE_0__.displayedProject);
    }
}

function displayCategory(category) {
    let categoryProjects = [];
    for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects.length; i++) {
        if (_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects[i].categories.includes(category)) {
            categoryProjects.push(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects[i])
        }
    }
    let categoryTitle = document.createElement('p');
    categoryTitle.classList.add('title', 'is-1');
    categoryTitle.textContent = category;
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayMultipleProjects)(categoryProjects);
    displayContainer.prepend(categoryTitle, projectsDisplay);
}

function toggleCategoryInput() {
    categoryInput.value = '';
    categoryInputField.classList.toggle('hidden');
};

function loadSideNav() {
    sideNav.innerHTML = '';
    for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.categories.length; i++) {
        let categorySection = document.createElement('section');
        let categoryLabel = document.createElement('p');
        let deleteBtn = document.createElement('button');
        let categorySpan = document.createElement('span');

        deleteBtn.classList.add('delete', 'is-small', 'hidden');
        function toggleBtn() { deleteBtn.classList.toggle('hidden') };
        deleteBtn.onclick = () => { deleteCategory(_storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.categories[i]), loadSideNav() }

        categorySpan.textContent = _storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.categories[i];
        categorySpan.onclick = () => {
            displayCategory(_storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.categories[i]);
        }

        categoryLabel.classList.add('menu-label', 'mb-0', 'is-flex', 'is-justify-content-space-between');
        categoryLabel.appendChild(categorySpan);
        categoryLabel.appendChild(deleteBtn);

        categorySection.classList.add('mb-2');
        categorySection.addEventListener('mouseover', toggleBtn);
        categorySection.addEventListener('mouseout', toggleBtn);
        categorySection.appendChild(categoryLabel);
        categoryLabel.appendChild(deleteBtn);
        createSideNavProjectLinks(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects, _storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.categories, i, categorySection)
        sideNav.appendChild(categorySection);
    }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "categoryList": () => (/* binding */ categoryList),
/* harmony export */   "saveLocal": () => (/* binding */ saveLocal),
/* harmony export */   "loadLocal": () => (/* binding */ loadLocal)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/categories.js");




const projectList = new _library__WEBPACK_IMPORTED_MODULE_1__["default"]();
const categoryList = new _categories__WEBPACK_IMPORTED_MODULE_2__["default"]();
let localData = window.localStorage;

function saveLocal() {
    localData.setItem('projectList', JSON.stringify(projectList.projects))
    localData.setItem('categoryList', JSON.stringify(categoryList.categories))
}

function loadLocal() {
    const projects = JSON.parse(localData.getItem('projectList'));
    if (projects) {
        projectList.projects = projects.map(project => new _project__WEBPACK_IMPORTED_MODULE_0__["default"](project.title, project.desc, project.color, project.categories, project.date, project.time, project.completed, project.tasks))
    } else {
        projectList.projects = []
    };

    const categories = JSON.parse(localData.getItem('categoryList'));
    if (categories) {
        categoryList.categories = categories.map(category => category)
    }
    console.log(projectList.projects);
    console.log(categoryList.categories);
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


class Task {
    constructor(title, desc, time) {
        this.title = title;
        this.desc = desc;
        this.time = time;
        this.completed = false;
        this.id = title.substring(0,3) + Math.floor(Math.random()*1000000).toString();
    }
}

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
/******/ 			id: moduleId,
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);







const viewAllBtn = document.querySelector('#viewAllBtn');
const createProjectBtn = document.querySelector('#createProjectBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const closeModalBtn = document.querySelector('.modal-close');
const categoryInput = document.querySelector('#categoryInput');
const submitCategoryBtn = document.querySelector('#submitCategoryBtn');
const cancelCategoryBtn = document.querySelector('#cancelCategoryBtn');
const submitFormBtn = document.querySelector('#submitProjectForm');
const cancelFormBtn = document.querySelector('#cancelProjectForm');
let today = dayjs__WEBPACK_IMPORTED_MODULE_5__();


function renderSite() {
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadLocal)();
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.loadSideNav)();
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayMultipleProjects)(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);
}

viewAllBtn.onclick = () => {
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayMultipleProjects)(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);
}

createProjectBtn.onclick = () => (0,_project__WEBPACK_IMPORTED_MODULE_4__.toggleProjectForm)();

addCatBtn.onclick = () => (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleCategoryInput)();

submitCategoryBtn.onclick = () => {
    _storage__WEBPACK_IMPORTED_MODULE_1__.categoryList.addCategory(categoryInput.value);
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleCategoryInput)();
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.loadSideNav)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
}

cancelCategoryBtn.onclick = () => (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleCategoryInput)()

closeModalBtn.onclick = () => (0,_project__WEBPACK_IMPORTED_MODULE_4__.toggleProjectForm)();

cancelFormBtn.onclick = () => { (0,_project__WEBPACK_IMPORTED_MODULE_4__.clearProjectForm)(); (0,_project__WEBPACK_IMPORTED_MODULE_4__.toggleProjectForm)() };

submitFormBtn.onclick = () => { (0,_project__WEBPACK_IMPORTED_MODULE_4__.submitProjectForm)(), (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.loadSideNav)() };

renderSite();

// Implement form validation
// Submit task, load correct display
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVoRTs7QUFFQTtBQUNBLG9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIvZGlzdC9idWxtYS1kaXZpZGVyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBAY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyIHYxLjEuMCB8IChjKSAyMDIwIEdhZXRhbiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL0NyZWF0aXZlQnVsbWEvYnVsbWEtZGl2aWRlciAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogbGluZSAxNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzdhN2E3YTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBsaW5lIDI4LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOjphZnRlciwgLmRpdmlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLyogbGluZSAzNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLXJpZ2h0KTo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNDEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6bm90KC5pcy1sZWZ0KTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1sZWZ0OjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA0OSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1yaWdodDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA1Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi8qIGxpbmUgNTYsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyLCAuZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi8qIGxpbmUgNjEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbGluZSA2NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2hpdGU6OmFmdGVyLCAuZGl2aWRlci5pcy13aGl0ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWJsYWNrOjphZnRlciwgLmRpdmlkZXIuaXMtYmxhY2s6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhcms6OmFmdGVyLCAuZGl2aWRlci5pcy1kYXJrOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXByaW1hcnkuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbms6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGluay5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYzZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mbzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm86OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5OGRjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1pbmZvLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjZmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzOjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM3NzQ7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXN1Y2Nlc3MuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmYWYzO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmc6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtd2FybmluZy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFuZ2VyOjphZnRlciwgLmRpdmlkZXIuaXMtZGFuZ2VyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDY2ODtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlY2YwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlci9kaXN0L2J1bG1hLWRpdmlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBIQUEwSDtBQUMxSDtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBAY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyIHYxLjEuMCB8IChjKSAyMDIwIEdhZXRhbiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL0NyZWF0aXZlQnVsbWEvYnVsbWEtZGl2aWRlciAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogbGluZSAxNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzdhN2E3YTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBsaW5lIDI4LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOjphZnRlciwgLmRpdmlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLyogbGluZSAzNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLXJpZ2h0KTo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNDEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6bm90KC5pcy1sZWZ0KTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1sZWZ0OjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA0OSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1yaWdodDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA1Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi8qIGxpbmUgNTYsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyLCAuZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi8qIGxpbmUgNjEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbGluZSA2NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2hpdGU6OmFmdGVyLCAuZGl2aWRlci5pcy13aGl0ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWJsYWNrOjphZnRlciwgLmRpdmlkZXIuaXMtYmxhY2s6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhcms6OmFmdGVyLCAuZGl2aWRlci5pcy1kYXJrOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXByaW1hcnkuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbms6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGluay5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYzZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mbzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm86OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5OGRjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1pbmZvLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjZmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzOjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM3NzQ7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXN1Y2Nlc3MuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmYWYzO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmc6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtd2FybmluZy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFuZ2VyOjphZnRlciwgLmRpdmlkZXIuaXMtZGFuZ2VyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDY2ODtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlY2YwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlcm9Db2x1bW4ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4jZGlzcGxheUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzV2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NpZGVOYXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3R0b206IDMwcHhcXG59XFxuXFxuLmJveCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC4yNSk7XFxufVxcblxcbiNsYXJnZURpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc21hbGxEaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gICAgbWluLWhlaWdodDogMThyZW07XFxuICAgIHdpZHRoOiAyMi41JTtcXG4gICAgbWF4LWhlaWdodDogMzUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNsYXJnZVRhc2tDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxN2VtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NtYWxsVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyLCAubWVudS1sYWJlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5tZW51LWxpc3QgYSB7XFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNzVlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXRlZ29yeUlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbSAycmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4uaGVyby5pcy1zbWFsbCAuaGVyby1ib2R5IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbSAwLjVyZW1cXG59XFxuXFxuLmNvbnRlbnQgcC5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5sYXRlUHJvamVjdCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyNTUsIDQ1LCA0NSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoMTI1LCAxMTUsIDExNSk7XFxufVxcblxcbi5kdWVQcm9qZWN0IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI1NSwgMjA2LCA0NSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoMTI1LCAxMTUsIDExNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQywyQ0FBMkM7QUFDL0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlcm9Db2x1bW4ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4jZGlzcGxheUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzV2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NpZGVOYXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3R0b206IDMwcHhcXG59XFxuXFxuLmJveCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC4yNSk7XFxufVxcblxcbiNsYXJnZURpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc21hbGxEaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gICAgbWluLWhlaWdodDogMThyZW07XFxuICAgIHdpZHRoOiAyMi41JTtcXG4gICAgbWF4LWhlaWdodDogMzUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNsYXJnZVRhc2tDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxN2VtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NtYWxsVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyLCAubWVudS1sYWJlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5tZW51LWxpc3QgYSB7XFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNzVlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXRlZ29yeUlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbSAycmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4uaGVyby5pcy1zbWFsbCAuaGVyby1ib2R5IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbSAwLjVyZW1cXG59XFxuXFxuLmNvbnRlbnQgcC5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5sYXRlUHJvamVjdCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyNTUsIDQ1LCA0NSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoMTI1LCAxMTUsIDExNSk7XFxufVxcblxcbi5kdWVQcm9qZWN0IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI1NSwgMjA2LCA0NSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoMTI1LCAxMTUsIDExNSk7XFxufVxcblxcbkBpbXBvcnQgXFxcIn5AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyXFxcIjtcXG5AaW1wb3J0IFxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXFxcIlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixmPVwibW9udGhcIixoPVwicXVhcnRlclwiLGM9XCJ5ZWFyXCIsZD1cImRhdGVcIiwkPVwiSW52YWxpZCBEYXRlXCIsbD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LGc9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LEQ9XCJlblwiLHY9e307dltEXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoIXQpcmV0dXJuIEQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpdlt0XSYmKHI9dCksZSYmKHZbdF09ZSxyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO3ZbaV09dCxyPWl9cmV0dXJuIW4mJnImJihEPXIpLHJ8fCFuJiZEfSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgRD10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0oeTxEP3krNzp5KS1EO3JldHVybiAkKHI/bS12Om0rKDYtdiksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnN1YnN0cigwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsJCl7dmFyIGwseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtTSxEPU8ubSh0aGlzLE0pO3JldHVybiBEPShsPXt9LGxbY109RC8xMixsW2ZdPUQsbFtoXT1ELzMsbFtvXT0oZy1tKS82MDQ4ZTUsbFthXT0oZy1tKS84NjRlNSxsW3VdPWcvbixsW3NdPWcvZSxsW2ldPWcvdCxsKVt5XXx8ZywkP0Q6Ty5hKEQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiB2W3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGI9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPWIsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2JbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPXZbRF0sdy5Mcz12LHcucD17fSx3fSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzYXZlTG9jYWwgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXVxuICAgIH1cblxuICAgIGFkZENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2ldID09IGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgbG9hZFNpZGVOYXYgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGZvcm1hdENhdGVnb3JpZXMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjYXRlZ29yeUxpc3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbmNvbnN0IHByb2plY3RzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c0Rpc3BsYXknKTtcblxuZXhwb3J0IGxldCBkaXNwbGF5ZWRQcm9qZWN0ID0gW107XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICBkaXNwbGF5Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXNwbGF5KTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdHMsIHByb2plY3RDb250YWluZXIpIHtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3RzKTtcbiAgICBzYXZlTG9jYWwoKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBzaW5nbGUpIHtcbiAgICBsZXQgZGlzcGxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCB0YXNrID0gcHJvamVjdC50YXNrc1tqXTtcbiAgICAgICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxldCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCk7XG5cbiAgICAgICAgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWNoZWNrcmFkaW8nLCAnaXMtY2lyY2xlJywgJ21yLTEnKTtcbiAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGFzay5pZH1gKTtcblxuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicsICdwdC0xJywgJ215LTEnLCAnaXMtanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4nKTtcblxuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJywgJ2lzLXNtYWxsJywgJ2hpZGRlbicpO1xuICAgICAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IHsgcHJvamVjdC5yZW1vdmVUYXNrKGopLCBkaXNwbGF5Q29udGVudC5yZW1vdmVDaGlsZCh0YXNrSXRlbSksIHNhdmVMb2NhbCgpIH1cblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVCdG4oKSB7IGRlbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKSB9O1xuICAgICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0b2dnbGVCdG4pO1xuICAgICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRvZ2dsZUJ0bik7XG5cbiAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ3RydWUnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGFza0NoZWNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke3Rhc2suaWR9YCk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRhc2tDaGVjayk7XG4gICAgICAgIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgICAgICBsZXQgdGltZUVzdGltYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrLmRlc2M7XG5cbiAgICAgICAgICAgIHRpbWVFc3RpbWF0ZS5jbGFzc0xpc3QuYWRkKCdpcy1pdGFsaWMnKTtcbiAgICAgICAgICAgIHRpbWVFc3RpbWF0ZS50ZXh0Q29udGVudCA9IGBFc3RpbWF0ZWQgdGltZTogJHt0YXNrLnRpbWV9IG1pbmA7XG5cbiAgICAgICAgICAgIGVkaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1pbmZvJywgJ2lzLW91dGxpbmVkJywgJ2lzLWxpZ2h0Jyk7XG4gICAgICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgICAgICAgICAgZWRpdFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrTW9kYWwodHJ1ZSwgdGFzaywgc2luZ2xlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGltZUVzdGltYXRlKTtcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICAgICAgICAgIGRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4geyBcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVGFzayhqKTtcbiAgICAgICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICAgICAgICAgIGZvY3VzT25lUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza01vZGFsKGVkaXQsIGl0ZW0sIHNpbmdsZSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IHRpdGxlQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbGV0IHRpbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aW1lQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBidG5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgc3VibWl0QnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgY2FuY2VsQnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaXMtYWN0aXZlJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIHRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgdGl0bGVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIGRlc2NGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgZGVzY0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgdGltZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgdGltZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgdG8gY29tcGxldGUnO1xuICAgIHRpbWVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICB0aW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgYnRuRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnLCAnaXMtZ3JvdXBlZCcpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycsICdpcy1saWdodCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlJywgJ2lzLWxhcmdlJyk7XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gaXRlbS50aXRsZTtcbiAgICAgICAgZGVzY0lucHV0LnZhbHVlID0gaXRlbS5kZXNjO1xuICAgICAgICB0aW1lSW5wdXQudmFsdWUgPSBwYXJzZUludChpdGVtLnRpbWUpO1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXllZFByb2plY3RbMF0udGltZSAtPSBwYXJzZUludChpdGVtLnRpbWUpO1xuICAgICAgICAgICAgaXRlbS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpdGVtLmRlc2MgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBwYXJzZUludCh0aW1lSW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0WzBdLnRpbWUgKz0gcGFyc2VJbnQoaXRlbS50aW1lKTtcbiAgICAgICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KGRpc3BsYXllZFByb2plY3RbMF0pO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIHBhcnNlSW50KHRpbWVJbnB1dC52YWx1ZSkpO1xuICAgICAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgICAgICAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuXG4gICAgdGl0bGVDb250cm9sLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRyb2wpO1xuICAgIGRlc2NDb250cm9sLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NDb250cm9sKTtcbiAgICB0aW1lQ29udHJvbC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuICAgIHRpbWVGaWVsZC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIHRpbWVGaWVsZC5hcHBlbmRDaGlsZCh0aW1lQ29udHJvbCk7XG4gICAgc3VibWl0QnRuQ29udHJvbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChzdWJtaXRCdG5Db250cm9sKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChjYW5jZWxCdG5Db250cm9sKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChkZXNjRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKHRpbWVGaWVsZCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQoYnRuRmllbGQpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJveCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxCYWNrZ3JvdW5kKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0UHJvamVjdE1vZGFsKHByb2plY3QsIHNpbmdsZSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aXRsZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICBsZXQgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRhdGVDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgXG4gICAgbGV0IGNvbHVtbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgY29sb3JDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29sb3JGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgY29sb3JDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbG9yU2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgbGV0IGNvbG9yV2hpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JEYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGV0IGNvbG9yQmx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxldCBjb2xvckdyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGV0IGNvbG9yWWVsbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGV0IGNvbG9yUmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICBsZXQgY2F0ZWdvcnlDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY2F0ZWdvcnlGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsZXQgY2F0ZWdvcnlDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICBsZXQgYnRuRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgc3VibWl0QnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBjYW5jZWxCdG5Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2lzLWFjdGl2ZScpO1xuICAgIG1vZGFsQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1iYWNrZ3JvdW5kJyk7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKCdib3gnKTtcblxuICAgIHRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgdGl0bGVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgZGVzY0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgZGVzY0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBkZXNjQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdjb250cm9sJyk7XG4gICAgZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICBkZXNjSW5wdXQudmFsdWUgPSBwcm9qZWN0LmRlc2M7XG5cbiAgICBkYXRlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuICAgIGRhdGVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmRhdGU7XG5cbiAgICBjb2x1bW5GaWVsZC5jbGFzc0xpc3QuYWRkKCdjb2x1bW5zJyk7XG4gICAgbGV0IGNvbG9ycyA9IFsnV2hpdGUnLCdEYXJrJywnQmx1ZScsJ0dyZWVuJywnWWVsbG93JywnUmVkJ107XG4gICAgbGV0IGNvbG9yVmFsdWVzID0gWyd3aGl0ZScsJ2RhcmsnLCdpbmZvJywncHJpbWFyeScsJ3dhcm5pbmcnLCdkYW5nZXInXTtcbiAgICBsZXQgY29sb3JPcHRpb25zID0gW2NvbG9yV2hpdGUsIGNvbG9yRGFyaywgY29sb3JCbHVlLCBjb2xvckdyZWVuLCBjb2xvclllbGxvdywgY29sb3JSZWRdO1xuICAgIGNvbG9yQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicsICdpcy0zJyk7XG4gICAgY29sb3JGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGNvbG9yTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICBjb2xvckxhYmVsLmlubmVySFRNTCA9ICdDb2xvciA8c3BhbiBjbGFzcz1cInN1YnRpdGxlIGlzLTZcIj4oT3B0aW9uYWwpPC9zcGFuPic7XG4gICAgY29sb3JDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBjb2xvclNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3QnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb2xvck9wdGlvbnNbaV0udGV4dENvbnRlbnQgPSBjb2xvcnNbaV07XG4gICAgICAgIGNvbG9yT3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29sb3JWYWx1ZXNbaV0pO1xuICAgIH1cbiAgICBjb2xvclNlbGVjdC52YWx1ZSA9IHByb2plY3QuY29sb3I7XG5cbiAgICBjYXRlZ29yeUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nLCAnaXMtOCcpO1xuICAgIGNhdGVnb3J5RmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICBjYXRlZ29yeUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgY2F0ZWdvcnlMYWJlbC5pbm5lckhUTUwgPSAnQ2F0ZWdvcmllcyA8c3BhbiBjbGFzcz1cInN1YnRpdGxlIGlzLTZcIj4oT3B0aW9uYWwsIHNlcGFyYXRlZCBieSBzcGFjZSk8L3NwYW4+J1xuICAgIGNhdGVnb3J5Q29udHJvbC5jbGFzc0xpc3QuYWRkKCdjb250cm9sJyk7XG4gICAgY2F0ZWdvcnlJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGNhdGVnb3J5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIGNhdGVnb3J5SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0NhdGVnb3JpZXMnKTtcbiAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gcHJvamVjdC5jYXRlZ29yaWVzLmpvaW4oJyAnKTtcbiAgICBcbiAgICBidG5GaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcsICdpcy1ncm91cGVkJyk7XG5cbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLWxpbmsnKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBzdWJtaXRCdG5Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgIHByb2plY3QuZGVzYyA9IGRlc2NJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJvamVjdC5kYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0LmNvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBmb3JtYXRDYXRlZ29yaWVzKGNhdGVnb3J5SW5wdXQpO1xuICAgICAgICBwcm9qZWN0LmNhdGVnb3JpZXMgPSBmb3JtYXR0ZWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoZm9ybWF0dGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkU2lkZU5hdigpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIGlmIChzaW5nbGUpIHtcbiAgICAgICAgICAgIGZvY3VzT25lUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycsICdpcy1saWdodCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2UnLCAnaXMtbGFyZ2UnKTtcblxuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuXG4gICAgdGl0bGVDb250cm9sLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRyb2wpO1xuICAgIGRlc2NDb250cm9sLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NDb250cm9sKTtcbiAgICBkYXRlQ29udHJvbC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChkYXRlQ29udHJvbCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY29sb3JPcHRpb25zW2ldKTtcbiAgICAgICAgaWYgKGNvbG9yVmFsdWVzW2ldID09IHByb2plY3QuY29sb3IpIHtcbiAgICAgICAgICAgIGNvbG9yT3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29sb3JTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xuICAgIGNvbG9yQ29udHJvbC5hcHBlbmRDaGlsZChjb2xvclNlbGVjdENvbnRhaW5lcik7XG4gICAgY29sb3JGaWVsZC5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcbiAgICBjb2xvckZpZWxkLmFwcGVuZENoaWxkKGNvbG9yQ29udHJvbCk7XG4gICAgY29sb3JDb2x1bW4uYXBwZW5kQ2hpbGQoY29sb3JGaWVsZCk7XG4gICAgY29sdW1uRmllbGQuYXBwZW5kQ2hpbGQoY29sb3JDb2x1bW4pO1xuICAgIGNhdGVnb3J5Q29udHJvbC5hcHBlbmRDaGlsZChjYXRlZ29yeUlucHV0KTtcbiAgICBjYXRlZ29yeUZpZWxkLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICAgIGNhdGVnb3J5RmllbGQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJbnB1dCk7XG4gICAgY2F0ZWdvcnlDb2x1bW4uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlGaWVsZCk7XG4gICAgY29sdW1uRmllbGQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlDb2x1bW4pO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBjYW5jZWxCdG5Db250cm9sLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgYnRuRmllbGQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuQ29udHJvbCk7XG4gICAgYnRuRmllbGQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuQ29udHJvbCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQodGl0bGVGaWVsZCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQoZGVzY0ZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChkYXRlRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKGNvbHVtbkZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChidG5GaWVsZCk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm94KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJhY2tncm91bmQpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3BsYXkocHJvamVjdHMsIHNpbmdsZSkge1xuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBkaXNwbGF5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHByb2plY3RUYXNrcyA9IGRpc3BsYXlUYXNrcyhwcm9qZWN0cywgc2luZ2xlKTtcbiAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGJvdHRvbUJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib3gnLCAnbm90aWZpY2F0aW9uJywgYGlzLSR7cHJvamVjdHMuY29sb3J9YCwgJ2lzLXZlcnRpY2FsJywncGItMScpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGRpc3BsYXlUaW1lLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtcHJpbWFyeScsICdpcy1vdXRsaW5lZCcsICdpcy1saWdodCcpO1xuICAgIGVkaXRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1pbmZvJywgJ2lzLW91dGxpbmVkJywgJ2lzLWxpZ2h0Jyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICBib3R0b21CdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmllbGQnLCAnaXMtZ3JvdXBlZCcsICdpcy1mbGV4JywgJ2lzLWp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQnKTtcblxuICAgIGRlbGV0ZVByb2plY3RCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0cywgcHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHMudGl0bGU7XG4gICAgZGlzcGxheVRpdGxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGZvY3VzT25lUHJvamVjdChwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgZGlzcGxheURhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZURpc3BsYXknKTtcbiAgICBpZiAocHJvamVjdHMuZGF0ZSA9PSAnJykge1xuICAgICAgICBkaXNwbGF5RGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogbm9uZSc7XG4gICAgfSBlbHNlIGlmIChkYXlqcygpLmlzQWZ0ZXIocHJvamVjdHMuZGF0ZSkgJiYgZGF5anMoKS5mb3JtYXQoJ01NTSBERCBZWVlZJykgPT0gZGF5anMocHJvamVjdHMuZGF0ZSkuZm9ybWF0KCdNTU0gREQgWVlZWScpKSB7XG4gICAgICAgIGRpc3BsYXlEYXRlLmlubmVySFRNTCA9IGBEdWUgZGF0ZTogJHtkYXlqcyhwcm9qZWN0cy5kYXRlKS5mb3JtYXQoJ01NTSBERCBZWVlZJyl9IDxicj48c3Ryb25nPkRVRSBUT0RBWSE8L3N0cm9uZz5gO1xuICAgICAgICBkaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKCdpcy1pdGFsaWMnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkdWVQcm9qZWN0Jyk7XG4gICAgfSBlbHNlIGlmIChkYXlqcygpLmlzQWZ0ZXIocHJvamVjdHMuZGF0ZSkpIHtcbiAgICAgICAgZGlzcGxheURhdGUuaW5uZXJIVE1MID0gYER1ZSBkYXRlOiAke2RheWpzKHByb2plY3RzLmRhdGUpLmZvcm1hdCgnTU1NIEREIFlZWVknKX0gPGJyPjxzdHJvbmc+UEFTVCBEVUUhPC9zdHJvbmc+YDtcbiAgICAgICAgZGlzcGxheURhdGUuY2xhc3NMaXN0LmFkZCgnaXMtaXRhbGljJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGF0ZVByb2plY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5RGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHtkYXlqcyhwcm9qZWN0cy5kYXRlKS5mb3JtYXQoJ01NTSBERCBZWVlZJyl9YDtcbiAgICB9XG4gICAgZGlzcGxheURhdGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XG5cbiAgICBkaXNwbGF5VGltZS50ZXh0Q29udGVudCA9IGBFc3QuIHRpbWU6ICR7cHJvamVjdHMudGltZX0gbWluYDtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVRpdGxlKTtcblxuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlVGFza01vZGFsKGZhbHNlLCBwcm9qZWN0cywgc2luZ2xlKVxuICAgIH1cbiAgICBlZGl0UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjcmVhdGVFZGl0UHJvamVjdE1vZGFsKHByb2plY3RzLCBzaW5nbGUpO1xuICAgIH1cbiAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gXCJsYXJnZURpc3BsYXlcIlxuICAgICAgICBsZXQgZGlzcGxheUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgICAgICBpZiAocHJvamVjdHMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9IGBDYXRlZ29yaWVzOiAke3Byb2plY3RzLmNhdGVnb3JpZXMuam9pbignLCAnKX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3BsYXlEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNwbGF5RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3RzLmRlc2M7XG4gICAgICAgIGRpc3BsYXlEZXNjLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGVzYyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNhdGVnb3JpZXMpO1xuICAgICAgICBwcm9qZWN0VGFza3MuaWQgPSBcImxhcmdlVGFza0NvbnRhaW5lclwiO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdteC0zJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuaWQgPSBcInNtYWxsRGlzcGxheVwiO1xuICAgICAgICBwcm9qZWN0VGFza3MuaWQgPSBcInNtYWxsVGFza0NvbnRhaW5lclwiXG4gICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlUaW1lKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlEYXRlKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUYXNrcyk7XG4gICAgYm90dG9tQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tQnRuQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c09uZVByb2plY3QocHJvamVjdCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIGNyZWF0ZURpc3BsYXkocHJvamVjdCwgdHJ1ZSk7XG4gICAgZGlzcGxheWVkUHJvamVjdCA9IFtwcm9qZWN0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKGxpc3QpIHtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlRGlzcGxheShsaXN0W2ldLCBmYWxzZSlcbiAgICB9XG4gICAgZGlzcGxheWVkUHJvamVjdCA9IGxpc3Q7XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYywgY29sb3IgPSBcIndoaXRlXCIsIGNhdGVnb3JpZXMgPSBbXSwgZGF0ZSwgdGltZSA9IDAsIGNvbXBsZXRlZCA9IGZhbHNlLCB0YXNrcyA9IFtdLCBwcmlvcml0eSA9IHRoaXMucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2MsIGNvbG9yLCBjYXRlZ29yaWVzLCBkYXRlLCB0aW1lLCBjb21wbGV0ZWQsIHRhc2tzKTtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKGNhdCA9PiBwcm9qZWN0LmFkZENhdGVnb3J5KGNhdCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSA8IHRoaXMucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcmlvcml0eSwgMCwgcHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjLCBjb2xvciA9IFwid2hpdGVcIiwgY2F0ZWdvcmllcyA9IFtdLCBwcmlvcml0eSA9IHRoaXMucHJvamVjdHMubGVuZ3RoLCB0aW1lID0gMCwgY29tcGxldGVkID0gZmFsc2UsIHRhc2tzID0gW10pIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzYywgY29sb3IsIGNhdGVnb3JpZXMsIHRpbWUsIGNvbXBsZXRlZCwgdGFza3MpO1xuICAgICAgICBpZiAoY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoY2F0ID0+IHByb2plY3QuYWRkQ2F0ZWdvcnkoY2F0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5IDwgdGhpcy5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByaW9yaXR5LCAwLCBwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG4gICAgKi9cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldID09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IHNhdmVMb2NhbCwgcHJvamVjdExpc3QsIGNhdGVnb3J5TGlzdCB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBwcm9qZWN0Rm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtVGl0bGUnKTtcbmNvbnN0IHByb2plY3RGb3JtRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybURlc2MnKTtcbmNvbnN0IHByb2plY3RGb3JtQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm1Db2xvcicpO1xuY29uc3QgcHJvamVjdEZvcm1DYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtQ2F0ZWdvcmllcycpO1xuY29uc3QgcHJvamVjdEZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtRGF0ZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XG4gICAgbGV0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IFtdXG4gICAgbGV0IHNwbGl0VmFsdWVzID0gY2F0ZWdvcmllcy52YWx1ZS5zcGxpdCgnICcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNwbGl0VmFsdWVzW2ldICE9ICcnKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENhdGVnb3JpZXMucHVzaChzcGxpdFZhbHVlc1tpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZENhdGVnb3JpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdEZvcm1UaXRsZS52YWx1ZSA9ICcnO1xuICAgIHByb2plY3RGb3JtRGVzYy52YWx1ZSA9ICcnO1xuICAgIHByb2plY3RGb3JtQ29sb3IudmFsdWUgPSBcIndoaXRlXCI7XG4gICAgcHJvamVjdEZvcm1DYXRlZ29yaWVzLnZhbHVlID0gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RMaXN0LmNyZWF0ZVByb2plY3QocHJvamVjdEZvcm1UaXRsZS52YWx1ZSwgcHJvamVjdEZvcm1EZXNjLnZhbHVlLCBwcm9qZWN0Rm9ybUNvbG9yLnZhbHVlLCBmb3JtYXRDYXRlZ29yaWVzKHByb2plY3RGb3JtQ2F0ZWdvcmllcyksIHByb2plY3RGb3JtRGF0ZS52YWx1ZSk7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcbiAgICB0b2dnbGVQcm9qZWN0Rm9ybSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgY29sb3IsIGNhdGVnb3JpZXMsIGRhdGUsIHRpbWUsIGNvbXBsZXRlZCwgdGFza3MpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzYywgdGltZSA9IDAsIHByaW9yaXR5ID0gdGhpcy50YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzYywgdGltZSk7XG4gICAgICAgIGlmIChwcmlvcml0eSA8IHRoaXMudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShwcmlvcml0eSwgMCwgdGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lICs9IHRhc2sudGltZTtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayhwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpbWUgLT0gdGhpcy50YXNrc1twcmlvcml0eV0udGltZTtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UocHJpb3JpdHksIDEpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVByb2plY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXSA9PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBmb2N1c09uZVByb2plY3QsIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgY2F0ZWdvcnlMaXN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXllZFByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbmNvbnN0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnlJbnB1dCcpO1xuY29uc3QgY2F0ZWdvcnlJbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RmllbGQnKTtcbmNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZU5hdicpO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2UHJvamVjdExpbmtzKHByb2plY3RzLCBjYXRlZ29yaWVzLCBpLCBwYXJlbnQpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tqXS5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3JpZXNbaV0pKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmtVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmtMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaW5rVWwuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdteS0wJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGluay5vbmNsaWNrID0gKCkgPT4geyBmb2N1c09uZVByb2plY3QocHJvamVjdHNbal0pIH1cbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gYMK3JHtwcm9qZWN0c1tqXS50aXRsZX1gO1xuICAgICAgICAgICAgcHJvamVjdExpbmtMaS5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG4gICAgICAgICAgICBwcm9qZWN0TGlua1VsLmFwcGVuZENoaWxkKHByb2plY3RMaW5rTGkpO1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RMaW5rVWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIGNhdGVnb3J5TGlzdC5yZW1vdmVDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3QucHJvamVjdHNbaV0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnByb2plY3RzW2ldLnJlbW92ZUNhdGVnb3J5KGNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkaXNwbGF5ZWRQcm9qZWN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGZvY3VzT25lUHJvamVjdChkaXNwbGF5ZWRQcm9qZWN0WzBdKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKGRpc3BsYXllZFByb2plY3QpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgbGV0IGNhdGVnb3J5UHJvamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXS5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgY2F0ZWdvcnlQcm9qZWN0cy5wdXNoKHByb2plY3RMaXN0LnByb2plY3RzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnLCAnaXMtMScpO1xuICAgIGNhdGVnb3J5VGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhjYXRlZ29yeVByb2plY3RzKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLnByZXBlbmQoY2F0ZWdvcnlUaXRsZSwgcHJvamVjdHNEaXNwbGF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNhdGVnb3J5SW5wdXQoKSB7XG4gICAgY2F0ZWdvcnlJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGNhdGVnb3J5SW5wdXRGaWVsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2lkZU5hdigpIHtcbiAgICBzaWRlTmF2LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNhdGVnb3J5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJywgJ2lzLXNtYWxsJywgJ2hpZGRlbicpO1xuICAgICAgICBmdW5jdGlvbiB0b2dnbGVCdG4oKSB7IGRlbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKSB9O1xuICAgICAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IHsgZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXNbaV0pLCBsb2FkU2lkZU5hdigpIH1cblxuICAgICAgICBjYXRlZ29yeVNwYW4udGV4dENvbnRlbnQgPSBjYXRlZ29yeUxpc3QuY2F0ZWdvcmllc1tpXTtcbiAgICAgICAgY2F0ZWdvcnlTcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcnkoY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5jbGFzc0xpc3QuYWRkKCdtZW51LWxhYmVsJywgJ21iLTAnLCAnaXMtZmxleCcsICdpcy1qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbicpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmFwcGVuZENoaWxkKGNhdGVnb3J5U3Bhbik7XG4gICAgICAgIGNhdGVnb3J5TGFiZWwuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICBjYXRlZ29yeVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuICAgICAgICBjYXRlZ29yeVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdG9nZ2xlQnRuKTtcbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdG9nZ2xlQnRuKTtcbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGNyZWF0ZVNpZGVOYXZQcm9qZWN0TGlua3MocHJvamVjdExpc3QucHJvamVjdHMsIGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzLCBpLCBjYXRlZ29yeVNlY3Rpb24pXG4gICAgICAgIHNpZGVOYXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWN0aW9uKTtcbiAgICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbGlicmFyeSc7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NhdGVnb3JpZXMnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBuZXcgTGlicmFyeSgpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IG5ldyBDYXRlZ29yaWVzKCk7XG5sZXQgbG9jYWxEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbCgpIHtcbiAgICBsb2NhbERhdGEuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdC5wcm9qZWN0cykpXG4gICAgbG9jYWxEYXRhLnNldEl0ZW0oJ2NhdGVnb3J5TGlzdCcsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMb2NhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxEYXRhLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IG5ldyBQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzYywgcHJvamVjdC5jb2xvciwgcHJvamVjdC5jYXRlZ29yaWVzLCBwcm9qZWN0LmRhdGUsIHByb2plY3QudGltZSwgcHJvamVjdC5jb21wbGV0ZWQsIHByb2plY3QudGFza3MpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RMaXN0LnByb2plY3RzID0gW11cbiAgICB9O1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxEYXRhLmdldEl0ZW0oJ2NhdGVnb3J5TGlzdCcpKTtcbiAgICBpZiAoY2F0ZWdvcmllcykge1xuICAgICAgICBjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXMpO1xufSIsImltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIHRpbWUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gdGl0bGUuc3Vic3RyaW5nKDAsMykgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkudG9TdHJpbmcoKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2F2ZUxvY2FsLCBsb2FkTG9jYWwsIHByb2plY3RMaXN0LCBjYXRlZ29yeUxpc3QgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZGlzcGxheU11bHRpcGxlUHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IHsgbG9hZFNpZGVOYXYsIHRvZ2dsZUNhdGVnb3J5SW5wdXQgfSBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IHsgdG9nZ2xlUHJvamVjdEZvcm0sIHN1Ym1pdFByb2plY3RGb3JtLCBjbGVhclByb2plY3RGb3JtfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0ICogYXMgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5jb25zdCB2aWV3QWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdBbGxCdG4nKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdEJ0bicpO1xuY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZENhdEJ0bicpO1xuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbG9zZScpO1xuY29uc3QgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeUlucHV0Jyk7XG5jb25zdCBzdWJtaXRDYXRlZ29yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRDYXRlZ29yeUJ0bicpO1xuY29uc3QgY2FuY2VsQ2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsQ2F0ZWdvcnlCdG4nKTtcbmNvbnN0IHN1Ym1pdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdEZvcm0nKTtcbmNvbnN0IGNhbmNlbEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsUHJvamVjdEZvcm0nKTtcbmxldCB0b2RheSA9IGRheWpzKCk7XG5cblxuZnVuY3Rpb24gcmVuZGVyU2l0ZSgpIHtcbiAgICBsb2FkTG9jYWwoKTtcbiAgICBsb2FkU2lkZU5hdigpO1xuICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbn1cblxudmlld0FsbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbn1cblxuY3JlYXRlUHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlUHJvamVjdEZvcm0oKTtcblxuYWRkQ2F0QnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVDYXRlZ29yeUlucHV0KCk7XG5cbnN1Ym1pdENhdGVnb3J5QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY2F0ZWdvcnlMaXN0LmFkZENhdGVnb3J5KGNhdGVnb3J5SW5wdXQudmFsdWUpO1xuICAgIHRvZ2dsZUNhdGVnb3J5SW5wdXQoKTtcbiAgICBsb2FkU2lkZU5hdigpO1xuICAgIHNhdmVMb2NhbCgpO1xufVxuXG5jYW5jZWxDYXRlZ29yeUJ0bi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlQ2F0ZWdvcnlJbnB1dCgpXG5cbmNsb3NlTW9kYWxCdG4ub25jbGljayA9ICgpID0+IHRvZ2dsZVByb2plY3RGb3JtKCk7XG5cbmNhbmNlbEZvcm1CdG4ub25jbGljayA9ICgpID0+IHsgY2xlYXJQcm9qZWN0Rm9ybSgpOyB0b2dnbGVQcm9qZWN0Rm9ybSgpIH07XG5cbnN1Ym1pdEZvcm1CdG4ub25jbGljayA9ICgpID0+IHsgc3VibWl0UHJvamVjdEZvcm0oKSwgbG9hZFNpZGVOYXYoKSB9O1xuXG5yZW5kZXJTaXRlKCk7XG5cbi8vIEltcGxlbWVudCBmb3JtIHZhbGlkYXRpb25cbi8vIFN1Ym1pdCB0YXNrLCBsb2FkIGNvcnJlY3QgZGlzcGxheSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==