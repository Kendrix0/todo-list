/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    overflow: scroll;\n}\n\n.hover {\n    cursor: pointer;\n}\n\n#heroColumn {\n    border-bottom: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n#displayContainer {\n    height: 65vh;\n    overflow: auto;\n}\n\n#sidebarContainer {\n    height: 65vh;\n    overflow: auto;\n}\n\n#sideNav {\n    height: 100%;\n    width: auto;\n    overflow-y: auto;\n    margin-top: 2rem;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n#largeDisplay {\n    height: 100%;\n    width: 100%;\n}\n\n#smallDisplay {\n    min-width: 15rem;\n    min-height: 18rem;\n    width: 25%;\n    height: 35%;\n    padding-bottom: 0px;\n    padding-right: 5px;\n}\n\n#largeTaskContainer {\n    width: 100%;\n    height: 17em;\n    overflow: auto;\n}\n\n#smallTaskContainer {\n    width: 100%;\n    height: 8rem;\n    overflow: auto;\n}\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n.menu-list a {\n    padding: 0.1em 0.75em;\n}\n\n.hidden {\n    display: none;\n}\n\n#categoryInput {\n    width: 100%;\n}\n\n.card {\n    box-shadow: none;\n}\n\n.card-header {\n    box-shadow: none;\n    border-top: 1px solid rgba(128, 128, 128, 0.25);\n    border-radius: 0;\n}\n\n.card-content {\n    padding: 0.4rem;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT;AACJ;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,+CAA+C;IAC/C,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kDAAkD;AACtD","sourcesContent":["body {\n    height: 100vh;\n    overflow: scroll;\n}\n\n.hover {\n    cursor: pointer;\n}\n\n#heroColumn {\n    border-bottom: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n#displayContainer {\n    height: 65vh;\n    overflow: auto;\n}\n\n#sidebarContainer {\n    height: 65vh;\n    overflow: auto;\n}\n\n#sideNav {\n    height: 100%;\n    width: auto;\n    overflow-y: auto;\n    margin-top: 2rem;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n#largeDisplay {\n    height: 100%;\n    width: 100%;\n}\n\n#smallDisplay {\n    min-width: 15rem;\n    min-height: 18rem;\n    width: 25%;\n    height: 35%;\n    padding-bottom: 0px;\n    padding-right: 5px;\n}\n\n#largeTaskContainer {\n    width: 100%;\n    height: 17em;\n    overflow: auto;\n}\n\n#smallTaskContainer {\n    width: 100%;\n    height: 8rem;\n    overflow: auto;\n}\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n.menu-list a {\n    padding: 0.1em 0.75em;\n}\n\n.hidden {\n    display: none;\n}\n\n#categoryInput {\n    width: 100%;\n}\n\n.card {\n    box-shadow: none;\n}\n\n.card-header {\n    box-shadow: none;\n    border-top: 1px solid rgba(128, 128, 128, 0.25);\n    border-radius: 0;\n}\n\n.card-content {\n    padding: 0.4rem;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}\n\n@import \"~@creativebulma/bulma-divider\";\n@import \"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\""],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayedProject": () => (/* binding */ displayedProject),
/* harmony export */   "focusOneProject": () => (/* binding */ focusOneProject),
/* harmony export */   "displayMultipleProjects": () => (/* binding */ displayMultipleProjects)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");





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
            let taskDetails = document.createElement('div');
            let timeEstimate = document.createElement('div');
            let editTaskBtn = document.createElement('button');

            taskDetails.classList.add('card-content', 'hidden');
            taskDetails.textContent = task.desc;

            timeEstimate.classList.add('is-italic');
            timeEstimate.textContent = `Estimated time: ${task.time} min`;

            editTaskBtn.classList.add('button', 'is-info', 'is-outlined', 'is-light');
            editTaskBtn.textContent = 'Edit Task';
            editTaskBtn.onclick = () => {
                createTaskModal(true, task);
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
                displayContent.removeChild(taskItem);
                displayContent.removeChild(taskDetails);
            } else {
                displayMultipleProjects(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.projects);
            }
        }
    }
    return displayContent;
}

function createTaskModal(edit, item) {
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
            displayMultipleProjects(_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.projects);
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
        project.color = colorSelect.value;
        project.categories = (0,_project__WEBPACK_IMPORTED_MODULE_2__.formatCategories)(categoryInput);
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

    displayTime.textContent = `Est. time: ${projects.time} min`;

    contentContainer.appendChild(displayTitle);

    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.onclick = () => {
        createTaskModal(false, projects)
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

    createProject(title, desc, color = "white", categories = [], priority = this.projects.length, time = 0, completed = false, tasks = []) {
        let project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title, desc, color, categories, time, completed, tasks);
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




const modal = document.querySelector('.modal');
const projectFormTitle = document.querySelector('#projectFormTitle');
const projectFormDesc = document.querySelector('#projectFormDesc');
const projectFormColor = document.querySelector('#projectFormColor');
const projectFormCategories = document.querySelector('#projectFormCategories');

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
    _storage__WEBPACK_IMPORTED_MODULE_1__.projectList.createProject(projectFormTitle.value, projectFormDesc.value, projectFormColor.value, formatCategories(projectFormCategories));
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayMultipleProjects)(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);
    clearProjectForm();
    toggleProjectForm();
}

class Project {
    constructor(title, desc, color, categories, time, completed, tasks) {
        this.title = title;
        this.desc = desc;
        this.color = color;
        this.time = time;
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

    getTimeEstimate() {

        return this.time;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleCategoryInput": () => (/* binding */ toggleCategoryInput),
/* harmony export */   "loadSideNav": () => (/* binding */ loadSideNav)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




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
        projectList.projects = projects.map(project => new _project__WEBPACK_IMPORTED_MODULE_0__["default"](project.title, project.desc, project.color, project.categories, project.time, project.completed, project.tasks))
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");






const viewAllBtn = document.querySelector('#viewAllBtn');
const createProjectBtn = document.querySelector('#createProjectBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const closeModalBtn = document.querySelector('.modal-close');
const categoryInput = document.querySelector('#categoryInput');
const submitCategoryBtn = document.querySelector('#submitCategoryBtn');
const cancelCategoryBtn = document.querySelector('#cancelCategoryBtn');
const submitFormBtn = document.querySelector('#submitProjectForm');
const cancelFormBtn = document.querySelector('#cancelProjectForm');

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

// Implement dates and form validation
// Work on project edit form
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDdUQ7QUFDeEI7QUFDUztBQUNxQjs7QUFFbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBUztBQUNiLElBQUkscURBQVc7QUFDZixJQUFJLGlFQUF1QixDQUFDLDBEQUFvQjtBQUNoRDs7QUFFQTtBQUNBLElBQUksaUVBQXVCLENBQUMsMERBQW9CO0FBQ2hEOztBQUVBLGlDQUFpQywyREFBaUI7O0FBRWxELDBCQUEwQiw2REFBbUI7O0FBRTdDO0FBQ0EsSUFBSSw4REFBd0I7QUFDNUIsSUFBSSw2REFBbUI7QUFDdkIsSUFBSSxxREFBVztBQUNmLElBQUksbURBQVM7QUFDYjs7QUFFQSxrQ0FBa0MsNkRBQW1COztBQUVyRCw4QkFBOEIsMkRBQWlCOztBQUUvQyxnQ0FBZ0MsMERBQWdCLElBQUksMkRBQWlCOztBQUVyRSxnQ0FBZ0MsMkRBQWlCLElBQUkscURBQVc7O0FBRWhFOztBQUVBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlci9kaXN0L2J1bG1hLWRpdmlkZXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBAY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyIHYxLjEuMCB8IChjKSAyMDIwIEdhZXRhbiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL0NyZWF0aXZlQnVsbWEvYnVsbWEtZGl2aWRlciAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogbGluZSAxNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzdhN2E3YTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBsaW5lIDI4LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOjphZnRlciwgLmRpdmlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLyogbGluZSAzNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLXJpZ2h0KTo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNDEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6bm90KC5pcy1sZWZ0KTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1sZWZ0OjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA0OSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1yaWdodDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA1Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi8qIGxpbmUgNTYsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyLCAuZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi8qIGxpbmUgNjEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbGluZSA2NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2hpdGU6OmFmdGVyLCAuZGl2aWRlci5pcy13aGl0ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWJsYWNrOjphZnRlciwgLmRpdmlkZXIuaXMtYmxhY2s6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhcms6OmFmdGVyLCAuZGl2aWRlci5pcy1kYXJrOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXByaW1hcnkuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbms6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGluay5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYzZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mbzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm86OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5OGRjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1pbmZvLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjZmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzOjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM3NzQ7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXN1Y2Nlc3MuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmYWYzO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmc6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtd2FybmluZy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFuZ2VyOjphZnRlciwgLmRpdmlkZXIuaXMtZGFuZ2VyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDY2ODtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlY2YwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlci9kaXN0L2J1bG1hLWRpdmlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBIQUEwSDtBQUMxSDtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBAY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyIHYxLjEuMCB8IChjKSAyMDIwIEdhZXRhbiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL0NyZWF0aXZlQnVsbWEvYnVsbWEtZGl2aWRlciAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogbGluZSAxNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzdhN2E3YTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBsaW5lIDI4LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOjphZnRlciwgLmRpdmlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLyogbGluZSAzNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLXJpZ2h0KTo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNDEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6bm90KC5pcy1sZWZ0KTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1sZWZ0OjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA0OSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1yaWdodDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA1Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi8qIGxpbmUgNTYsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyLCAuZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi8qIGxpbmUgNjEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbGluZSA2NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2hpdGU6OmFmdGVyLCAuZGl2aWRlci5pcy13aGl0ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWJsYWNrOjphZnRlciwgLmRpdmlkZXIuaXMtYmxhY2s6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhcms6OmFmdGVyLCAuZGl2aWRlci5pcy1kYXJrOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXByaW1hcnkuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbms6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGluay5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYzZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mbzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm86OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5OGRjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1pbmZvLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjZmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzOjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM3NzQ7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXN1Y2Nlc3MuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmYWYzO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmc6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtd2FybmluZy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFuZ2VyOjphZnRlciwgLmRpdmlkZXIuaXMtZGFuZ2VyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDY2ODtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlY2YwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlcm9Db2x1bW4ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4jZGlzcGxheUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NpZGVOYXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3R0b206IDMwcHhcXG59XFxuXFxuLmJveCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC4yNSk7XFxufVxcblxcbiNsYXJnZURpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc21hbGxEaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gICAgbWluLWhlaWdodDogMThyZW07XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogMzUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNsYXJnZVRhc2tDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxN2VtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NtYWxsVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyLCAubWVudS1sYWJlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5tZW51LWxpc3QgYSB7XFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNzVlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXRlZ29yeUlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0NBQStDO0lBQy9DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrREFBa0Q7QUFDdERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlcm9Db2x1bW4ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4jZGlzcGxheUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NpZGVOYXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3R0b206IDMwcHhcXG59XFxuXFxuLmJveCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC4yNSk7XFxufVxcblxcbiNsYXJnZURpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc21hbGxEaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gICAgbWluLWhlaWdodDogMThyZW07XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogMzUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNsYXJnZVRhc2tDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxN2VtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NtYWxsVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyLCAubWVudS1sYWJlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5tZW51LWxpc3QgYSB7XFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNzVlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXRlZ29yeUlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xcbn1cXG5cXG5AaW1wb3J0IFxcXCJ+QGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlclxcXCI7XFxuQGltcG9ydCBcXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzc1xcXCJcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0gPT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBzYXZlTG9jYWwgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBsb2FkU2lkZU5hdiB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZm9ybWF0Q2F0ZWdvcmllcyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzRGlzcGxheScpO1xuXG5leHBvcnQgbGV0IGRpc3BsYXllZFByb2plY3QgPSBbXTtcblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIGRpc3BsYXlDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpc3BsYXkpO1xuICAgIHByb2plY3RzRGlzcGxheS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0cywgcHJvamVjdENvbnRhaW5lcikge1xuICAgIHByb2plY3RMaXN0LnJlbW92ZVByb2plY3QocHJvamVjdHMpO1xuICAgIHNhdmVMb2NhbCgpO1xuICAgIHByb2plY3RzRGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QsIHNpbmdsZSkge1xuICAgIGxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3QudGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSBwcm9qZWN0LnRhc2tzW2pdO1xuICAgICAgICBsZXQgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgpO1xuXG4gICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCdpcy1jaGVja3JhZGlvJywgJ2lzLWNpcmNsZScsICdtci0xJyk7XG4gICAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3Rhc2suaWR9YCk7XG5cbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInLCAncHQtMScsICdteS0xJywgJ2lzLWp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuJyk7XG5cbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdpcy1zbWFsbCcsICdoaWRkZW4nKTtcbiAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7IHByb2plY3QucmVtb3ZlVGFzayhqKSwgZGlzcGxheUNvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0l0ZW0pLCBzYXZlTG9jYWwoKSB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlQnRuKCkgeyBkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykgfTtcbiAgICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdG9nZ2xlQnRuKTtcbiAgICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0b2dnbGVCdG4pO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tDaGVjay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gICAgICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgICAgIH1cblxuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0YXNrLmlkfWApO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRmllbGQpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgIGRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICAgICAgbGV0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGltZUVzdGltYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrLmRlc2M7XG5cbiAgICAgICAgICAgIHRpbWVFc3RpbWF0ZS5jbGFzc0xpc3QuYWRkKCdpcy1pdGFsaWMnKTtcbiAgICAgICAgICAgIHRpbWVFc3RpbWF0ZS50ZXh0Q29udGVudCA9IGBFc3RpbWF0ZWQgdGltZTogJHt0YXNrLnRpbWV9IG1pbmA7XG5cbiAgICAgICAgICAgIGVkaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1pbmZvJywgJ2lzLW91dGxpbmVkJywgJ2lzLWxpZ2h0Jyk7XG4gICAgICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgICAgICAgICAgZWRpdFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrTW9kYWwodHJ1ZSwgdGFzayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRpbWVFc3RpbWF0ZSk7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgdGFza0l0ZW0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IHsgXG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZVRhc2soaik7XG4gICAgICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgICAgIGlmIChzaW5nbGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udGVudC5yZW1vdmVDaGlsZCh0YXNrSXRlbSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrTW9kYWwoZWRpdCwgaXRlbSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IHRpdGxlQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbGV0IHRpbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aW1lQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBidG5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgc3VibWl0QnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgY2FuY2VsQnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaXMtYWN0aXZlJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIHRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgdGl0bGVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIGRlc2NGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgZGVzY0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgdGltZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgdGltZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgdG8gY29tcGxldGUnO1xuICAgIHRpbWVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICB0aW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgYnRuRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnLCAnaXMtZ3JvdXBlZCcpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycsICdpcy1saWdodCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlJywgJ2lzLWxhcmdlJyk7XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gaXRlbS50aXRsZTtcbiAgICAgICAgZGVzY0lucHV0LnZhbHVlID0gaXRlbS5kZXNjO1xuICAgICAgICB0aW1lSW5wdXQudmFsdWUgPSBwYXJzZUludChpdGVtLnRpbWUpO1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXllZFByb2plY3RbMF0udGltZSAtPSBwYXJzZUludChpdGVtLnRpbWUpO1xuICAgICAgICAgICAgaXRlbS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpdGVtLmRlc2MgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBwYXJzZUludCh0aW1lSW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0WzBdLnRpbWUgKz0gcGFyc2VJbnQoaXRlbS50aW1lKTtcbiAgICAgICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KGRpc3BsYXllZFByb2plY3RbMF0pO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIHBhcnNlSW50KHRpbWVJbnB1dC52YWx1ZSkpO1xuICAgICAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuXG4gICAgdGl0bGVDb250cm9sLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRyb2wpO1xuICAgIGRlc2NDb250cm9sLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NDb250cm9sKTtcbiAgICB0aW1lQ29udHJvbC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuICAgIHRpbWVGaWVsZC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIHRpbWVGaWVsZC5hcHBlbmRDaGlsZCh0aW1lQ29udHJvbCk7XG4gICAgc3VibWl0QnRuQ29udHJvbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChzdWJtaXRCdG5Db250cm9sKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChjYW5jZWxCdG5Db250cm9sKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChkZXNjRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKHRpbWVGaWVsZCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQoYnRuRmllbGQpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJveCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxCYWNrZ3JvdW5kKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0UHJvamVjdE1vZGFsKHByb2plY3QsIHNpbmdsZSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aXRsZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICBsZXQgY29sdW1uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBjb2xvckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjb2xvckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBjb2xvckNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29sb3JTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsZXQgY29sb3JXaGl0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxldCBjb2xvckRhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JCbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGV0IGNvbG9yR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JZZWxsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JSZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIGxldCBjYXRlZ29yeUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYXRlZ29yeUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBjYXRlZ29yeUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcblxuICAgIGxldCBidG5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBzdWJtaXRCdG5Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGNhbmNlbEJ0bkNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaXMtYWN0aXZlJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuXG4gICAgdGl0bGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICB0aXRsZUNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICBkZXNjRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICBkZXNjTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGRlc2NDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NJbnB1dC52YWx1ZSA9IHByb2plY3QuZGVzYztcblxuICAgIGNvbHVtbkZpZWxkLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbnMnKTtcbiAgICBsZXQgY29sb3JzID0gWydXaGl0ZScsJ0RhcmsnLCdCbHVlJywnR3JlZW4nLCdZZWxsb3cnLCdSZWQnXTtcbiAgICBsZXQgY29sb3JWYWx1ZXMgPSBbJ3doaXRlJywnZGFyaycsJ2luZm8nLCdwcmltYXJ5Jywnd2FybmluZycsJ2RhbmdlciddO1xuICAgIGxldCBjb2xvck9wdGlvbnMgPSBbY29sb3JXaGl0ZSwgY29sb3JEYXJrLCBjb2xvckJsdWUsIGNvbG9yR3JlZW4sIGNvbG9yWWVsbG93LCBjb2xvclJlZF07XG4gICAgY29sb3JDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sdW1uJywgJ2lzLTMnKTtcbiAgICBjb2xvckZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgY29sb3JMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGNvbG9yTGFiZWwuaW5uZXJIVE1MID0gJ0NvbG9yIDxzcGFuIGNsYXNzPVwic3VidGl0bGUgaXMtNlwiPihPcHRpb25hbCk8L3NwYW4+JztcbiAgICBjb2xvckNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNvbG9yU2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbG9yT3B0aW9uc1tpXS50ZXh0Q29udGVudCA9IGNvbG9yc1tpXTtcbiAgICAgICAgY29sb3JPcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb2xvclZhbHVlc1tpXSk7XG4gICAgfVxuICAgIGNvbG9yU2VsZWN0LnZhbHVlID0gcHJvamVjdC5jb2xvcjtcblxuICAgIGNhdGVnb3J5Q29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicsICdpcy04Jyk7XG4gICAgY2F0ZWdvcnlGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGNhdGVnb3J5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9ICdDYXRlZ29yaWVzIDxzcGFuIGNsYXNzPVwic3VidGl0bGUgaXMtNlwiPihPcHRpb25hbCwgc2VwYXJhdGVkIGJ5IHNwYWNlKTwvc3Bhbj4nXG4gICAgY2F0ZWdvcnlDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBjYXRlZ29yeUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgY2F0ZWdvcnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgY2F0ZWdvcnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnQ2F0ZWdvcmllcycpO1xuICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBwcm9qZWN0LmNhdGVnb3JpZXMuam9pbignICcpO1xuICAgIFxuICAgIGJ0bkZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJywgJ2lzLWdyb3VwZWQnKTtcblxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJvamVjdC5kZXNjID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0LmNvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XG4gICAgICAgIHByb2plY3QuY2F0ZWdvcmllcyA9IGZvcm1hdENhdGVnb3JpZXMoY2F0ZWdvcnlJbnB1dCk7XG4gICAgICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1saW5rJywgJ2lzLWxpZ2h0Jyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsQnRuQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdjb250cm9sJyk7XG5cbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZScsICdpcy1sYXJnZScpO1xuXG4gICAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG5cbiAgICB0aXRsZUNvbnRyb2wuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZUZpZWxkLmFwcGVuZENoaWxkKHRpdGxlQ29udHJvbCk7XG4gICAgZGVzY0NvbnRyb2wuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbiAgICBkZXNjRmllbGQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBkZXNjRmllbGQuYXBwZW5kQ2hpbGQoZGVzY0NvbnRyb2wpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKGNvbG9yT3B0aW9uc1tpXSk7XG4gICAgICAgIGlmIChjb2xvclZhbHVlc1tpXSA9PSBwcm9qZWN0LmNvbG9yKSB7XG4gICAgICAgICAgICBjb2xvck9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbG9yU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0KTtcbiAgICBjb2xvckNvbnRyb2wuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3RDb250YWluZXIpO1xuICAgIGNvbG9yRmllbGQuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XG4gICAgY29sb3JGaWVsZC5hcHBlbmRDaGlsZChjb2xvckNvbnRyb2wpO1xuICAgIGNvbG9yQ29sdW1uLmFwcGVuZENoaWxkKGNvbG9yRmllbGQpO1xuICAgIGNvbHVtbkZpZWxkLmFwcGVuZENoaWxkKGNvbG9yQ29sdW1uKTtcbiAgICBjYXRlZ29yeUNvbnRyb2wuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJbnB1dCk7XG4gICAgY2F0ZWdvcnlGaWVsZC5hcHBlbmRDaGlsZChjYXRlZ29yeUxhYmVsKTtcbiAgICBjYXRlZ29yeUZpZWxkLmFwcGVuZENoaWxkKGNhdGVnb3J5SW5wdXQpO1xuICAgIGNhdGVnb3J5Q29sdW1uLmFwcGVuZENoaWxkKGNhdGVnb3J5RmllbGQpO1xuICAgIGNvbHVtbkZpZWxkLmFwcGVuZENoaWxkKGNhdGVnb3J5Q29sdW1uKTtcbiAgICBzdWJtaXRCdG5Db250cm9sLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgY2FuY2VsQnRuQ29udHJvbC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGJ0bkZpZWxkLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bkNvbnRyb2wpO1xuICAgIGJ0bkZpZWxkLmFwcGVuZENoaWxkKGNhbmNlbEJ0bkNvbnRyb2wpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKGRlc2NGaWVsZCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQoY29sdW1uRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKGJ0bkZpZWxkKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb3gpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQmFja2dyb3VuZCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbClcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzcGxheShwcm9qZWN0cywgc2luZ2xlKSB7XG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGRpc3BsYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwcm9qZWN0VGFza3MgPSBkaXNwbGF5VGFza3MocHJvamVjdHMsIHNpbmdsZSk7XG4gICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBib3R0b21CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm94JywgJ25vdGlmaWNhdGlvbicsIGBpcy0ke3Byb2plY3RzLmNvbG9yfWAsICdpcy12ZXJ0aWNhbCcsJ3BiLTEnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBkaXNwbGF5VGltZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLXByaW1hcnknLCAnaXMtb3V0bGluZWQnLCAnaXMtbGlnaHQnKTtcbiAgICBlZGl0UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtaW5mbycsICdpcy1vdXRsaW5lZCcsICdpcy1saWdodCcpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgYm90dG9tQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJywgJ2lzLWdyb3VwZWQnLCAnaXMtZmxleCcsICdpcy1qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYXJvdW5kJyk7XG5cbiAgICBkZWxldGVQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdHMsIHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBsb2FkU2lkZU5hdigpO1xuICAgIH1cblxuICAgIGRpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzLnRpdGxlO1xuICAgIGRpc3BsYXlUaXRsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBmb2N1c09uZVByb2plY3QocHJvamVjdHMpO1xuICAgIH1cblxuICAgIGRpc3BsYXlUaW1lLnRleHRDb250ZW50ID0gYEVzdC4gdGltZTogJHtwcm9qZWN0cy50aW1lfSBtaW5gO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5VGl0bGUpO1xuXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgYWRkVGFza0J0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrTW9kYWwoZmFsc2UsIHByb2plY3RzKVxuICAgIH1cbiAgICBlZGl0UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjcmVhdGVFZGl0UHJvamVjdE1vZGFsKHByb2plY3RzLCBzaW5nbGUpO1xuICAgIH1cbiAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gXCJsYXJnZURpc3BsYXlcIlxuICAgICAgICBsZXQgZGlzcGxheUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgICAgICBpZiAocHJvamVjdHMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9IGBDYXRlZ29yaWVzOiAke3Byb2plY3RzLmNhdGVnb3JpZXMuam9pbignLCAnKX1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3BsYXlEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNwbGF5RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3RzLmRlc2M7XG4gICAgICAgIGRpc3BsYXlEZXNjLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGVzYyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNhdGVnb3JpZXMpO1xuICAgICAgICBwcm9qZWN0VGFza3MuaWQgPSBcImxhcmdlVGFza0NvbnRhaW5lclwiO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdteC0zJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuaWQgPSBcInNtYWxsRGlzcGxheVwiO1xuICAgICAgICBwcm9qZWN0VGFza3MuaWQgPSBcInNtYWxsVGFza0NvbnRhaW5lclwiXG4gICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlUaW1lKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUYXNrcyk7XG4gICAgYm90dG9tQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tQnRuQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c09uZVByb2plY3QocHJvamVjdCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIGNyZWF0ZURpc3BsYXkocHJvamVjdCwgdHJ1ZSk7XG4gICAgZGlzcGxheWVkUHJvamVjdCA9IFtwcm9qZWN0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKGxpc3QpIHtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlRGlzcGxheShsaXN0W2ldLCBmYWxzZSlcbiAgICB9XG4gICAgZGlzcGxheWVkUHJvamVjdCA9IGxpc3Q7XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYywgY29sb3IgPSBcIndoaXRlXCIsIGNhdGVnb3JpZXMgPSBbXSwgcHJpb3JpdHkgPSB0aGlzLnByb2plY3RzLmxlbmd0aCwgdGltZSA9IDAsIGNvbXBsZXRlZCA9IGZhbHNlLCB0YXNrcyA9IFtdKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2MsIGNvbG9yLCBjYXRlZ29yaWVzLCB0aW1lLCBjb21wbGV0ZWQsIHRhc2tzKTtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKGNhdCA9PiBwcm9qZWN0LmFkZENhdGVnb3J5KGNhdCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSA8IHRoaXMucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcmlvcml0eSwgMCwgcHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgc2F2ZUxvY2FsLCBwcm9qZWN0TGlzdCwgY2F0ZWdvcnlMaXN0IH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IGRpc3BsYXlNdWx0aXBsZVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IHByb2plY3RGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm1UaXRsZScpO1xuY29uc3QgcHJvamVjdEZvcm1EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtRGVzYycpO1xuY29uc3QgcHJvamVjdEZvcm1Db2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybUNvbG9yJyk7XG5jb25zdCBwcm9qZWN0Rm9ybUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm1DYXRlZ29yaWVzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDYXRlZ29yaWVzKGNhdGVnb3JpZXMpIHtcbiAgICBsZXQgZmlsdGVyZWRDYXRlZ29yaWVzID0gW11cbiAgICBsZXQgc3BsaXRWYWx1ZXMgPSBjYXRlZ29yaWVzLnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3BsaXRWYWx1ZXNbaV0gIT0gJycpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQ2F0ZWdvcmllcy5wdXNoKHNwbGl0VmFsdWVzW2ldLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2F0ZWdvcmllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybSgpIHtcbiAgICBwcm9qZWN0Rm9ybVRpdGxlLnZhbHVlID0gJyc7XG4gICAgcHJvamVjdEZvcm1EZXNjLnZhbHVlID0gJyc7XG4gICAgcHJvamVjdEZvcm1Db2xvci52YWx1ZSA9IFwid2hpdGVcIjtcbiAgICBwcm9qZWN0Rm9ybUNhdGVnb3JpZXMudmFsdWUgPSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVByb2plY3RGb3JtKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdExpc3QuY3JlYXRlUHJvamVjdChwcm9qZWN0Rm9ybVRpdGxlLnZhbHVlLCBwcm9qZWN0Rm9ybURlc2MudmFsdWUsIHByb2plY3RGb3JtQ29sb3IudmFsdWUsIGZvcm1hdENhdGVnb3JpZXMocHJvamVjdEZvcm1DYXRlZ29yaWVzKSk7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgIGNsZWFyUHJvamVjdEZvcm0oKTtcbiAgICB0b2dnbGVQcm9qZWN0Rm9ybSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgY29sb3IsIGNhdGVnb3JpZXMsIHRpbWUsIGNvbXBsZXRlZCwgdGFza3MpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzYywgdGltZSA9IDAsIHByaW9yaXR5ID0gdGhpcy50YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzYywgdGltZSk7XG4gICAgICAgIGlmIChwcmlvcml0eSA8IHRoaXMudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShwcmlvcml0eSwgMCwgdGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lICs9IHRhc2sudGltZTtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayhwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpbWUgLT0gdGhpcy50YXNrc1twcmlvcml0eV0udGltZTtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UocHJpb3JpdHksIDEpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBnZXRUaW1lRXN0aW1hdGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudGltZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVByb2plY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXSA9PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBmb2N1c09uZVByb2plY3QsIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgY2F0ZWdvcnlMaXN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXllZFByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnlJbnB1dCcpO1xuY29uc3QgY2F0ZWdvcnlJbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RmllbGQnKTtcbmNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZU5hdicpO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2UHJvamVjdExpbmtzKHByb2plY3RzLCBjYXRlZ29yaWVzLCBpLCBwYXJlbnQpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tqXS5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3JpZXNbaV0pKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmtVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmtMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaW5rVWwuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdteS0wJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGluay5vbmNsaWNrID0gKCkgPT4geyBmb2N1c09uZVByb2plY3QocHJvamVjdHNbal0pIH1cbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gYMK3JHtwcm9qZWN0c1tqXS50aXRsZX1gO1xuICAgICAgICAgICAgcHJvamVjdExpbmtMaS5hcHBlbmRDaGlsZChwcm9qZWN0TGluayk7XG4gICAgICAgICAgICBwcm9qZWN0TGlua1VsLmFwcGVuZENoaWxkKHByb2plY3RMaW5rTGkpO1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RMaW5rVWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIGNhdGVnb3J5TGlzdC5yZW1vdmVDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3QucHJvamVjdHNbaV0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnByb2plY3RzW2ldLnJlbW92ZUNhdGVnb3J5KGNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkaXNwbGF5ZWRQcm9qZWN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGZvY3VzT25lUHJvamVjdChkaXNwbGF5ZWRQcm9qZWN0WzBdKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKGRpc3BsYXllZFByb2plY3QpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgbGV0IGNhdGVnb3J5UHJvamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXS5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgY2F0ZWdvcnlQcm9qZWN0cy5wdXNoKHByb2plY3RMaXN0LnByb2plY3RzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnLCAnaXMtMScpO1xuICAgIGNhdGVnb3J5VGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhjYXRlZ29yeVByb2plY3RzKTtcbiAgICBkaXNwbGF5Q29udGFpbmVyLnByZXBlbmQoY2F0ZWdvcnlUaXRsZSwgcHJvamVjdHNEaXNwbGF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNhdGVnb3J5SW5wdXQoKSB7XG4gICAgY2F0ZWdvcnlJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGNhdGVnb3J5SW5wdXRGaWVsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2lkZU5hdigpIHtcbiAgICBzaWRlTmF2LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNhdGVnb3J5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJywgJ2lzLXNtYWxsJywgJ2hpZGRlbicpO1xuICAgICAgICBmdW5jdGlvbiB0b2dnbGVCdG4oKSB7IGRlbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKSB9O1xuICAgICAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IHsgZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXNbaV0pLCBsb2FkU2lkZU5hdigpIH1cblxuICAgICAgICBjYXRlZ29yeVNwYW4udGV4dENvbnRlbnQgPSBjYXRlZ29yeUxpc3QuY2F0ZWdvcmllc1tpXTtcbiAgICAgICAgY2F0ZWdvcnlTcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcnkoY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5jbGFzc0xpc3QuYWRkKCdtZW51LWxhYmVsJywgJ21iLTAnLCAnaXMtZmxleCcsICdpcy1qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbicpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmFwcGVuZENoaWxkKGNhdGVnb3J5U3Bhbik7XG4gICAgICAgIGNhdGVnb3J5TGFiZWwuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICBjYXRlZ29yeVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuICAgICAgICBjYXRlZ29yeVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdG9nZ2xlQnRuKTtcbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdG9nZ2xlQnRuKTtcbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWwpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGNyZWF0ZVNpZGVOYXZQcm9qZWN0TGlua3MocHJvamVjdExpc3QucHJvamVjdHMsIGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzLCBpLCBjYXRlZ29yeVNlY3Rpb24pXG4gICAgICAgIHNpZGVOYXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWN0aW9uKTtcbiAgICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbGlicmFyeSc7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NhdGVnb3JpZXMnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBuZXcgTGlicmFyeSgpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IG5ldyBDYXRlZ29yaWVzKCk7XG5sZXQgbG9jYWxEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbCgpIHtcbiAgICBsb2NhbERhdGEuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdC5wcm9qZWN0cykpXG4gICAgbG9jYWxEYXRhLnNldEl0ZW0oJ2NhdGVnb3J5TGlzdCcsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMb2NhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxEYXRhLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IG5ldyBQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzYywgcHJvamVjdC5jb2xvciwgcHJvamVjdC5jYXRlZ29yaWVzLCBwcm9qZWN0LnRpbWUsIHByb2plY3QuY29tcGxldGVkLCBwcm9qZWN0LnRhc2tzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cyA9IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGxvY2FsRGF0YS5nZXRJdGVtKCdjYXRlZ29yeUxpc3QnKSk7XG4gICAgaWYgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeSlcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QucHJvamVjdHMpO1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzKTtcbn0iLCJpbXBvcnQgeyBzYXZlTG9jYWwgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCB0aW1lKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IHRpdGxlLnN1YnN0cmluZygwLDMpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMDAwMDApLnRvU3RyaW5nKCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNhdmVMb2NhbCwgbG9hZExvY2FsLCBwcm9qZWN0TGlzdCwgY2F0ZWdvcnlMaXN0IH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IGRpc3BsYXlNdWx0aXBsZVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5JztcbmltcG9ydCB7IGxvYWRTaWRlTmF2LCB0b2dnbGVDYXRlZ29yeUlucHV0IH0gZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCB7IHRvZ2dsZVByb2plY3RGb3JtLCBzdWJtaXRQcm9qZWN0Rm9ybSwgY2xlYXJQcm9qZWN0Rm9ybX0gZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3Qgdmlld0FsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3QWxsQnRuJyk7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3RCdG4nKTtcbmNvbnN0IGFkZENhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRDYXRCdG4nKTtcbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcbmNvbnN0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnlJbnB1dCcpO1xuY29uc3Qgc3VibWl0Q2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Q2F0ZWdvcnlCdG4nKTtcbmNvbnN0IGNhbmNlbENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbENhdGVnb3J5QnRuJyk7XG5jb25zdCBzdWJtaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3RGb3JtJyk7XG5jb25zdCBjYW5jZWxGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFByb2plY3RGb3JtJyk7XG5cbmZ1bmN0aW9uIHJlbmRlclNpdGUoKSB7XG4gICAgbG9hZExvY2FsKCk7XG4gICAgbG9hZFNpZGVOYXYoKTtcbiAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG59XG5cbnZpZXdBbGxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG59XG5cbmNyZWF0ZVByb2plY3RCdG4ub25jbGljayA9ICgpID0+IHRvZ2dsZVByb2plY3RGb3JtKCk7XG5cbmFkZENhdEJ0bi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlQ2F0ZWdvcnlJbnB1dCgpO1xuXG5zdWJtaXRDYXRlZ29yeUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNhdGVnb3J5TGlzdC5hZGRDYXRlZ29yeShjYXRlZ29yeUlucHV0LnZhbHVlKTtcbiAgICB0b2dnbGVDYXRlZ29yeUlucHV0KCk7XG4gICAgbG9hZFNpZGVOYXYoKTtcbiAgICBzYXZlTG9jYWwoKTtcbn1cblxuY2FuY2VsQ2F0ZWdvcnlCdG4ub25jbGljayA9ICgpID0+IHRvZ2dsZUNhdGVnb3J5SW5wdXQoKVxuXG5jbG9zZU1vZGFsQnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVQcm9qZWN0Rm9ybSgpO1xuXG5jYW5jZWxGb3JtQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGNsZWFyUHJvamVjdEZvcm0oKTsgdG9nZ2xlUHJvamVjdEZvcm0oKSB9O1xuXG5zdWJtaXRGb3JtQnRuLm9uY2xpY2sgPSAoKSA9PiB7IHN1Ym1pdFByb2plY3RGb3JtKCksIGxvYWRTaWRlTmF2KCkgfTtcblxucmVuZGVyU2l0ZSgpO1xuXG4vLyBJbXBsZW1lbnQgZGF0ZXMgYW5kIGZvcm0gdmFsaWRhdGlvblxuLy8gV29yayBvbiBwcm9qZWN0IGVkaXQgZm9ybSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==