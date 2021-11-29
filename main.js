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
                focusOneProject(project);
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
// Submit task, load correct display
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDdUQ7QUFDeEI7QUFDUztBQUNxQjs7QUFFbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBUztBQUNiLElBQUkscURBQVc7QUFDZixJQUFJLGlFQUF1QixDQUFDLDBEQUFvQjtBQUNoRDs7QUFFQTtBQUNBLElBQUksaUVBQXVCLENBQUMsMERBQW9CO0FBQ2hEOztBQUVBLGlDQUFpQywyREFBaUI7O0FBRWxELDBCQUEwQiw2REFBbUI7O0FBRTdDO0FBQ0EsSUFBSSw4REFBd0I7QUFDNUIsSUFBSSw2REFBbUI7QUFDdkIsSUFBSSxxREFBVztBQUNmLElBQUksbURBQVM7QUFDYjs7QUFFQSxrQ0FBa0MsNkRBQW1COztBQUVyRCw4QkFBOEIsMkRBQWlCOztBQUUvQyxnQ0FBZ0MsMERBQWdCLElBQUksMkRBQWlCOztBQUVyRSxnQ0FBZ0MsMkRBQWlCLElBQUkscURBQVc7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQSxvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIEBjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIgdjEuMS4wIHwgKGMpIDIwMjAgR2FldGFuIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vQ3JlYXRpdmVCdWxtYS9idWxtYS1kaXZpZGVyICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBsaW5lIDE3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgbWFyZ2luOiAyNXB4IDA7XFxufVxcblxcbi8qIGxpbmUgMjgsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6OmFmdGVyLCAuZGl2aWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4vKiBsaW5lIDM3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOm5vdCguaXMtcmlnaHQpOjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLWxlZnQpOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDQ1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxlZnQ6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDQ5LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXJpZ2h0OjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDUyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMjVweDtcXG59XFxuXFxuLyogbGluZSA1Niwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLyogbGluZSA2MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDY1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13aGl0ZTo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdoaXRlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtYmxhY2s6OmFmdGVyLCAuZGl2aWRlci5pcy1ibGFjazo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFyazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhcms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXByaW1hcnk6OmFmdGVyLCAuZGl2aWRlci5pcy1wcmltYXJ5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5LmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmZmZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGluazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWxpbms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbmsuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjNmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1pbmZvOjphZnRlciwgLmRpdmlkZXIuaXMtaW5mbzo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk4ZGM7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mby5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmNmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXN1Y2Nlc3M6OmFmdGVyLCAuZGl2aWRlci5pcy1zdWNjZXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4Yzc3NDtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZhZjM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2FybmluZzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdhcm5pbmc6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmcuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXI6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0NjY4O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVjZjA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEhBQTBIO0FBQzFIO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtBQUNmOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIEBjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIgdjEuMS4wIHwgKGMpIDIwMjAgR2FldGFuIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vQ3JlYXRpdmVCdWxtYS9idWxtYS1kaXZpZGVyICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBsaW5lIDE3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgbWFyZ2luOiAyNXB4IDA7XFxufVxcblxcbi8qIGxpbmUgMjgsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6OmFmdGVyLCAuZGl2aWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4vKiBsaW5lIDM3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOm5vdCguaXMtcmlnaHQpOjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLWxlZnQpOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDQ1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxlZnQ6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDQ5LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXJpZ2h0OjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDUyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMjVweDtcXG59XFxuXFxuLyogbGluZSA1Niwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLyogbGluZSA2MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDY1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13aGl0ZTo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdoaXRlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtYmxhY2s6OmFmdGVyLCAuZGl2aWRlci5pcy1ibGFjazo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFyazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhcms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXByaW1hcnk6OmFmdGVyLCAuZGl2aWRlci5pcy1wcmltYXJ5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5LmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmZmZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGluazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWxpbms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbmsuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjNmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1pbmZvOjphZnRlciwgLmRpdmlkZXIuaXMtaW5mbzo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk4ZGM7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mby5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmNmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXN1Y2Nlc3M6OmFmdGVyLCAuZGl2aWRlci5pcy1zdWNjZXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4Yzc3NDtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZhZjM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2FybmluZzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdhcm5pbmc6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmcuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXI6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0NjY4O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVjZjA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL0BjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIvZGlzdC9idWxtYS1kaXZpZGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3MpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGVyb0NvbHVtbiB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNSk7XFxufVxcblxcbiNkaXNwbGF5Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NpZGViYXJDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jc2lkZU5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zdGlja3kge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvdHRvbTogMzBweFxcbn1cXG5cXG4uYm94IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjI1KTtcXG59XFxuXFxuI2xhcmdlRGlzcGxheSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzbWFsbERpc3BsYXkge1xcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxOHJlbTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiAzNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuI2xhcmdlVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE3ZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jc21hbGxUYXNrQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0VGl0bGU6aG92ZXIsIC5tZW51LWxhYmVsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLm1lbnUtbGlzdCBhIHtcXG4gICAgcGFkZGluZzogMC4xZW0gMC43NWVtO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NhdGVnb3J5SW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtEQUFrRDtBQUN0RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGVyb0NvbHVtbiB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNSk7XFxufVxcblxcbiNkaXNwbGF5Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2NXZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NpZGViYXJDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jc2lkZU5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zdGlja3kge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvdHRvbTogMzBweFxcbn1cXG5cXG4uYm94IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjI1KTtcXG59XFxuXFxuI2xhcmdlRGlzcGxheSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzbWFsbERpc3BsYXkge1xcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxOHJlbTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiAzNSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuI2xhcmdlVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE3ZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jc21hbGxUYXNrQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0VGl0bGU6aG92ZXIsIC5tZW51LWxhYmVsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLm1lbnUtbGlzdCBhIHtcXG4gICAgcGFkZGluZzogMC4xZW0gMC43NWVtO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NhdGVnb3J5SW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxufVxcblxcbkBpbXBvcnQgXFxcIn5AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyXFxcIjtcXG5AaW1wb3J0IFxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXFxcIlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gW11cbiAgICB9XG5cbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXSA9PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9O1xufSIsImltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGxvYWRTaWRlTmF2IH0gZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBmb3JtYXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY2F0ZWdvcnlMaXN0IH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNEaXNwbGF5Jyk7XG5cbmV4cG9ydCBsZXQgZGlzcGxheWVkUHJvamVjdCA9IFtdO1xuXG5mdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgZGlzcGxheUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGlzcGxheSk7XG4gICAgcHJvamVjdHNEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RzLCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgc2F2ZUxvY2FsKCk7XG4gICAgcHJvamVjdHNEaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdCwgc2luZ2xlKSB7XG4gICAgbGV0IGRpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgdGFzayA9IHByb2plY3QudGFza3Nbal07XG4gICAgICAgIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgpO1xuXG4gICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCdpcy1jaGVja3JhZGlvJywgJ2lzLWNpcmNsZScsICdtci0xJyk7XG4gICAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3Rhc2suaWR9YCk7XG5cbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInLCAncHQtMScsICdteS0xJywgJ2lzLWp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuJyk7XG5cbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdpcy1zbWFsbCcsICdoaWRkZW4nKTtcbiAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7IHByb2plY3QucmVtb3ZlVGFzayhqKSwgZGlzcGxheUNvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0l0ZW0pLCBzYXZlTG9jYWwoKSB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlQnRuKCkgeyBkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykgfTtcbiAgICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdG9nZ2xlQnRuKTtcbiAgICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0b2dnbGVCdG4pO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tDaGVjay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gICAgICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgICAgIH1cblxuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0YXNrLmlkfWApO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRmllbGQpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgIGRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgaWYgKHNpbmdsZSkge1xuICAgICAgICAgICAgbGV0IHRpbWVFc3RpbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudCcsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gdGFzay5kZXNjO1xuXG4gICAgICAgICAgICB0aW1lRXN0aW1hdGUuY2xhc3NMaXN0LmFkZCgnaXMtaXRhbGljJyk7XG4gICAgICAgICAgICB0aW1lRXN0aW1hdGUudGV4dENvbnRlbnQgPSBgRXN0aW1hdGVkIHRpbWU6ICR7dGFzay50aW1lfSBtaW5gO1xuXG4gICAgICAgICAgICBlZGl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtaW5mbycsICdpcy1vdXRsaW5lZCcsICdpcy1saWdodCcpO1xuICAgICAgICAgICAgZWRpdFRhc2tCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICAgICAgICAgIGVkaXRUYXNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGFza01vZGFsKHRydWUsIHRhc2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aW1lRXN0aW1hdGUpO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7IFxuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKGopO1xuICAgICAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgICAgICAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrTW9kYWwoZWRpdCwgaXRlbSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IHRpdGxlQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbGV0IHRpbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aW1lQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBidG5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgc3VibWl0QnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgY2FuY2VsQnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaXMtYWN0aXZlJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIHRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgdGl0bGVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIGRlc2NGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgZGVzY0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgdGltZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgdGltZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgdG8gY29tcGxldGUnO1xuICAgIHRpbWVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICB0aW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgYnRuRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnLCAnaXMtZ3JvdXBlZCcpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycsICdpcy1saWdodCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlJywgJ2lzLWxhcmdlJyk7XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gaXRlbS50aXRsZTtcbiAgICAgICAgZGVzY0lucHV0LnZhbHVlID0gaXRlbS5kZXNjO1xuICAgICAgICB0aW1lSW5wdXQudmFsdWUgPSBwYXJzZUludChpdGVtLnRpbWUpO1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXllZFByb2plY3RbMF0udGltZSAtPSBwYXJzZUludChpdGVtLnRpbWUpO1xuICAgICAgICAgICAgaXRlbS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpdGVtLmRlc2MgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBwYXJzZUludCh0aW1lSW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0WzBdLnRpbWUgKz0gcGFyc2VJbnQoaXRlbS50aW1lKTtcbiAgICAgICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KGRpc3BsYXllZFByb2plY3RbMF0pO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIHBhcnNlSW50KHRpbWVJbnB1dC52YWx1ZSkpO1xuICAgICAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuXG4gICAgdGl0bGVDb250cm9sLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRyb2wpO1xuICAgIGRlc2NDb250cm9sLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NDb250cm9sKTtcbiAgICB0aW1lQ29udHJvbC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuICAgIHRpbWVGaWVsZC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIHRpbWVGaWVsZC5hcHBlbmRDaGlsZCh0aW1lQ29udHJvbCk7XG4gICAgc3VibWl0QnRuQ29udHJvbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChzdWJtaXRCdG5Db250cm9sKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChjYW5jZWxCdG5Db250cm9sKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChkZXNjRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKHRpbWVGaWVsZCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQoYnRuRmllbGQpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJveCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxCYWNrZ3JvdW5kKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0UHJvamVjdE1vZGFsKHByb2plY3QsIHNpbmdsZSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aXRsZUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICBsZXQgY29sdW1uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBjb2xvckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjb2xvckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBjb2xvckNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29sb3JTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsZXQgY29sb3JXaGl0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxldCBjb2xvckRhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JCbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbGV0IGNvbG9yR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JZZWxsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsZXQgY29sb3JSZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIGxldCBjYXRlZ29yeUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYXRlZ29yeUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCBjYXRlZ29yeUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcblxuICAgIGxldCBidG5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBzdWJtaXRCdG5Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGNhbmNlbEJ0bkNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaXMtYWN0aXZlJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuXG4gICAgdGl0bGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICB0aXRsZUNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICBkZXNjRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICBkZXNjTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGRlc2NDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgIGRlc2NJbnB1dC52YWx1ZSA9IHByb2plY3QuZGVzYztcblxuICAgIGNvbHVtbkZpZWxkLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbnMnKTtcbiAgICBsZXQgY29sb3JzID0gWydXaGl0ZScsJ0RhcmsnLCdCbHVlJywnR3JlZW4nLCdZZWxsb3cnLCdSZWQnXTtcbiAgICBsZXQgY29sb3JWYWx1ZXMgPSBbJ3doaXRlJywnZGFyaycsJ2luZm8nLCdwcmltYXJ5Jywnd2FybmluZycsJ2RhbmdlciddO1xuICAgIGxldCBjb2xvck9wdGlvbnMgPSBbY29sb3JXaGl0ZSwgY29sb3JEYXJrLCBjb2xvckJsdWUsIGNvbG9yR3JlZW4sIGNvbG9yWWVsbG93LCBjb2xvclJlZF07XG4gICAgY29sb3JDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sdW1uJywgJ2lzLTMnKTtcbiAgICBjb2xvckZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgY29sb3JMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGNvbG9yTGFiZWwuaW5uZXJIVE1MID0gJ0NvbG9yIDxzcGFuIGNsYXNzPVwic3VidGl0bGUgaXMtNlwiPihPcHRpb25hbCk8L3NwYW4+JztcbiAgICBjb2xvckNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNvbG9yU2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbG9yT3B0aW9uc1tpXS50ZXh0Q29udGVudCA9IGNvbG9yc1tpXTtcbiAgICAgICAgY29sb3JPcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb2xvclZhbHVlc1tpXSk7XG4gICAgfVxuICAgIGNvbG9yU2VsZWN0LnZhbHVlID0gcHJvamVjdC5jb2xvcjtcblxuICAgIGNhdGVnb3J5Q29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicsICdpcy04Jyk7XG4gICAgY2F0ZWdvcnlGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGNhdGVnb3J5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9ICdDYXRlZ29yaWVzIDxzcGFuIGNsYXNzPVwic3VidGl0bGUgaXMtNlwiPihPcHRpb25hbCwgc2VwYXJhdGVkIGJ5IHNwYWNlKTwvc3Bhbj4nXG4gICAgY2F0ZWdvcnlDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICBjYXRlZ29yeUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgY2F0ZWdvcnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgY2F0ZWdvcnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnQ2F0ZWdvcmllcycpO1xuICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBwcm9qZWN0LmNhdGVnb3JpZXMuam9pbignICcpO1xuICAgIFxuICAgIGJ0bkZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJywgJ2lzLWdyb3VwZWQnKTtcblxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJvamVjdC5kZXNjID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0LmNvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBmb3JtYXRDYXRlZ29yaWVzKGNhdGVnb3J5SW5wdXQpO1xuICAgICAgICBwcm9qZWN0LmNhdGVnb3JpZXMgPSBmb3JtYXR0ZWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoZm9ybWF0dGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkU2lkZU5hdigpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIGlmIChzaW5nbGUpIHtcbiAgICAgICAgICAgIGZvY3VzT25lUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtbGluaycsICdpcy1saWdodCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2UnLCAnaXMtbGFyZ2UnKTtcblxuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuXG4gICAgdGl0bGVDb250cm9sLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRyb2wpO1xuICAgIGRlc2NDb250cm9sLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZGVzY0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NDb250cm9sKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChjb2xvck9wdGlvbnNbaV0pO1xuICAgICAgICBpZiAoY29sb3JWYWx1ZXNbaV0gPT0gcHJvamVjdC5jb2xvcikge1xuICAgICAgICAgICAgY29sb3JPcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb2xvclNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclNlbGVjdCk7XG4gICAgY29sb3JDb250cm9sLmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0Q29udGFpbmVyKTtcbiAgICBjb2xvckZpZWxkLmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xuICAgIGNvbG9yRmllbGQuYXBwZW5kQ2hpbGQoY29sb3JDb250cm9sKTtcbiAgICBjb2xvckNvbHVtbi5hcHBlbmRDaGlsZChjb2xvckZpZWxkKTtcbiAgICBjb2x1bW5GaWVsZC5hcHBlbmRDaGlsZChjb2xvckNvbHVtbik7XG4gICAgY2F0ZWdvcnlDb250cm9sLmFwcGVuZENoaWxkKGNhdGVnb3J5SW5wdXQpO1xuICAgIGNhdGVnb3J5RmllbGQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMYWJlbCk7XG4gICAgY2F0ZWdvcnlGaWVsZC5hcHBlbmRDaGlsZChjYXRlZ29yeUlucHV0KTtcbiAgICBjYXRlZ29yeUNvbHVtbi5hcHBlbmRDaGlsZChjYXRlZ29yeUZpZWxkKTtcbiAgICBjb2x1bW5GaWVsZC5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbHVtbik7XG4gICAgc3VibWl0QnRuQ29udHJvbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGNhbmNlbEJ0bkNvbnRyb2wuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChzdWJtaXRCdG5Db250cm9sKTtcbiAgICBidG5GaWVsZC5hcHBlbmRDaGlsZChjYW5jZWxCdG5Db250cm9sKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChkZXNjRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKGNvbHVtbkZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChidG5GaWVsZCk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm94KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJhY2tncm91bmQpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3BsYXkocHJvamVjdHMsIHNpbmdsZSkge1xuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBkaXNwbGF5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcHJvamVjdFRhc2tzID0gZGlzcGxheVRhc2tzKHByb2plY3RzLCBzaW5nbGUpO1xuICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgYm90dG9tQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JveCcsICdub3RpZmljYXRpb24nLCBgaXMtJHtwcm9qZWN0cy5jb2xvcn1gLCAnaXMtdmVydGljYWwnLCdwYi0xJyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZGlzcGxheVRpbWUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1wcmltYXJ5JywgJ2lzLW91dGxpbmVkJywgJ2lzLWxpZ2h0Jyk7XG4gICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLWluZm8nLCAnaXMtb3V0bGluZWQnLCAnaXMtbGlnaHQnKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmaWVsZCcsICdpcy1ncm91cGVkJywgJ2lzLWZsZXgnLCAnaXMtanVzdGlmeS1jb250ZW50LXNwYWNlLWFyb3VuZCcpO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RzLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgbG9hZFNpZGVOYXYoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0cy50aXRsZTtcbiAgICBkaXNwbGF5VGl0bGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZm9jdXNPbmVQcm9qZWN0KHByb2plY3RzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VGltZS50ZXh0Q29udGVudCA9IGBFc3QuIHRpbWU6ICR7cHJvamVjdHMudGltZX0gbWluYDtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVRpdGxlKTtcblxuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGFkZFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlVGFza01vZGFsKGZhbHNlLCBwcm9qZWN0cylcbiAgICB9XG4gICAgZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdFByb2plY3RCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlRWRpdFByb2plY3RNb2RhbChwcm9qZWN0cywgc2luZ2xlKTtcbiAgICB9XG4gICAgaWYgKHNpbmdsZSkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5pZCA9IFwibGFyZ2VEaXNwbGF5XCJcbiAgICAgICAgbGV0IGRpc3BsYXlDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGlzcGxheUNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICAgICAgaWYgKHByb2plY3RzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGlzcGxheUNhdGVnb3JpZXMudGV4dENvbnRlbnQgPSBgQ2F0ZWdvcmllczogJHtwcm9qZWN0cy5jYXRlZ29yaWVzLmpvaW4oJywgJyl9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheUNhdGVnb3JpZXMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXNwbGF5RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGlzcGxheURlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0cy5kZXNjO1xuICAgICAgICBkaXNwbGF5RGVzYy5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheURlc2MpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDYXRlZ29yaWVzKTtcbiAgICAgICAgcHJvamVjdFRhc2tzLmlkID0gXCJsYXJnZVRhc2tDb250YWluZXJcIjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbXgtMycpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlkID0gXCJzbWFsbERpc3BsYXlcIjtcbiAgICAgICAgcHJvamVjdFRhc2tzLmlkID0gXCJzbWFsbFRhc2tDb250YWluZXJcIlxuICAgICAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgfVxuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5VGltZSk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3MpO1xuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBib3R0b21CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdG4pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUJ0bkNvbnRhaW5lcik7XG4gICAgcHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNPbmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBjcmVhdGVEaXNwbGF5KHByb2plY3QsIHRydWUpO1xuICAgIGRpc3BsYXllZFByb2plY3QgPSBbcHJvamVjdF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhsaXN0KSB7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZURpc3BsYXkobGlzdFtpXSwgZmFsc2UpXG4gICAgfVxuICAgIGRpc3BsYXllZFByb2plY3QgPSBsaXN0O1xufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBzYXZlTG9jYWwgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3QodGl0bGUsIGRlc2MsIGNvbG9yID0gXCJ3aGl0ZVwiLCBjYXRlZ29yaWVzID0gW10sIHByaW9yaXR5ID0gdGhpcy5wcm9qZWN0cy5sZW5ndGgsIHRpbWUgPSAwLCBjb21wbGV0ZWQgPSBmYWxzZSwgdGFza3MgPSBbXSkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjLCBjb2xvciwgY2F0ZWdvcmllcywgdGltZSwgY29tcGxldGVkLCB0YXNrcyk7XG4gICAgICAgIGlmIChjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLm1hcChjYXQgPT4gcHJvamVjdC5hZGRDYXRlZ29yeShjYXQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgPCB0aGlzLnByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJpb3JpdHksIDAsIHByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldID09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IHNhdmVMb2NhbCwgcHJvamVjdExpc3QsIGNhdGVnb3J5TGlzdCB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBwcm9qZWN0Rm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtVGl0bGUnKTtcbmNvbnN0IHByb2plY3RGb3JtRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybURlc2MnKTtcbmNvbnN0IHByb2plY3RGb3JtQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm1Db2xvcicpO1xuY29uc3QgcHJvamVjdEZvcm1DYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtQ2F0ZWdvcmllcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XG4gICAgbGV0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IFtdXG4gICAgbGV0IHNwbGl0VmFsdWVzID0gY2F0ZWdvcmllcy52YWx1ZS5zcGxpdCgnICcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNwbGl0VmFsdWVzW2ldICE9ICcnKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENhdGVnb3JpZXMucHVzaChzcGxpdFZhbHVlc1tpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZENhdGVnb3JpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHJvamVjdEZvcm0oKSB7XG4gICAgcHJvamVjdEZvcm1UaXRsZS52YWx1ZSA9ICcnO1xuICAgIHByb2plY3RGb3JtRGVzYy52YWx1ZSA9ICcnO1xuICAgIHByb2plY3RGb3JtQ29sb3IudmFsdWUgPSBcIndoaXRlXCI7XG4gICAgcHJvamVjdEZvcm1DYXRlZ29yaWVzLnZhbHVlID0gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RMaXN0LmNyZWF0ZVByb2plY3QocHJvamVjdEZvcm1UaXRsZS52YWx1ZSwgcHJvamVjdEZvcm1EZXNjLnZhbHVlLCBwcm9qZWN0Rm9ybUNvbG9yLnZhbHVlLCBmb3JtYXRDYXRlZ29yaWVzKHByb2plY3RGb3JtQ2F0ZWdvcmllcykpO1xuICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XG4gICAgdG9nZ2xlUHJvamVjdEZvcm0oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGNvbG9yLCBjYXRlZ29yaWVzLCB0aW1lLCBjb21wbGV0ZWQsIHRhc2tzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGl0bGUsIGRlc2MsIHRpbWUgPSAwLCBwcmlvcml0eSA9IHRoaXMudGFza3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2MsIHRpbWUpO1xuICAgICAgICBpZiAocHJpb3JpdHkgPCB0aGlzLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UocHJpb3JpdHksIDAsIHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZSArPSB0YXNrLnRpbWU7XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aW1lIC09IHRoaXMudGFza3NbcHJpb3JpdHldLnRpbWU7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHByaW9yaXR5LCAxKTtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgZ2V0VGltZUVzdGltYXRlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWU7XG4gICAgfVxuXG4gICAgY29tcGxldGVQcm9qZWN0KCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnlMaXN0LmFkZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0gPT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZm9jdXNPbmVQcm9qZWN0LCBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGNhdGVnb3J5TGlzdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkaXNwbGF5ZWRQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5SW5wdXQnKTtcbmNvbnN0IGNhdGVnb3J5SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dEZpZWxkJyk7XG5jb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVOYXYnKTtcblxuZnVuY3Rpb24gY3JlYXRlU2lkZU5hdlByb2plY3RMaW5rcyhwcm9qZWN0cywgY2F0ZWdvcmllcywgaSwgcGFyZW50KSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocHJvamVjdHNbal0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yaWVzW2ldKSkge1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlua1VsLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuICAgICAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnbXktMCcpO1xuICAgICAgICAgICAgcHJvamVjdExpbmsub25jbGljayA9ICgpID0+IHsgZm9jdXNPbmVQcm9qZWN0KHByb2plY3RzW2pdKSB9XG4gICAgICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IGDCtyR7cHJvamVjdHNbal0udGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3RMaW5rTGkuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuICAgICAgICAgICAgcHJvamVjdExpbmtVbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0xpKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlua1VsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yeUxpc3QucmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0LnByb2plY3RzW2ldLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXS5yZW1vdmVDYXRlZ29yeShjYXRlZ29yeSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlzcGxheWVkUHJvamVjdC5sZW5ndGggPT0gMSkge1xuICAgICAgICBmb2N1c09uZVByb2plY3QoZGlzcGxheWVkUHJvamVjdFswXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhkaXNwbGF5ZWRQcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIGxldCBjYXRlZ29yeVByb2plY3RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3QucHJvamVjdHNbaV0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5UHJvamVjdHMucHVzaChwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJywgJ2lzLTEnKTtcbiAgICBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMoY2F0ZWdvcnlQcm9qZWN0cyk7XG4gICAgZGlzcGxheUNvbnRhaW5lci5wcmVwZW5kKGNhdGVnb3J5VGl0bGUsIHByb2plY3RzRGlzcGxheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDYXRlZ29yeUlucHV0KCkge1xuICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSAnJztcbiAgICBjYXRlZ29yeUlucHV0RmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNpZGVOYXYoKSB7XG4gICAgc2lkZU5hdi5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjYXRlZ29yeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGxldCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBjYXRlZ29yeVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdpcy1zbWFsbCcsICdoaWRkZW4nKTtcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlQnRuKCkgeyBkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykgfTtcbiAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzW2ldKSwgbG9hZFNpZGVOYXYoKSB9XG5cbiAgICAgICAgY2F0ZWdvcnlTcGFuLnRleHRDb250ZW50ID0gY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXNbaV07XG4gICAgICAgIGNhdGVnb3J5U3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUNhdGVnb3J5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhdGVnb3J5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWVudS1sYWJlbCcsICdtYi0wJywgJ2lzLWZsZXgnLCAnaXMtanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4nKTtcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNwYW4pO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRvZ2dsZUJ0bik7XG4gICAgICAgIGNhdGVnb3J5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRvZ2dsZUJ0bik7XG4gICAgICAgIGNhdGVnb3J5U2VjdGlvbi5hcHBlbmRDaGlsZChjYXRlZ29yeUxhYmVsKTtcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBjcmVhdGVTaWRlTmF2UHJvamVjdExpbmtzKHByb2plY3RMaXN0LnByb2plY3RzLCBjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcywgaSwgY2F0ZWdvcnlTZWN0aW9uKVxuICAgICAgICBzaWRlTmF2LmFwcGVuZENoaWxkKGNhdGVnb3J5U2VjdGlvbik7XG4gICAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL2xpYnJhcnknO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi9jYXRlZ29yaWVzJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0gbmV3IExpYnJhcnkoKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBuZXcgQ2F0ZWdvcmllcygpO1xubGV0IGxvY2FsRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWwoKSB7XG4gICAgbG9jYWxEYXRhLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QucHJvamVjdHMpKVxuICAgIGxvY2FsRGF0YS5zZXRJdGVtKCdjYXRlZ29yeUxpc3QnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTG9jYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsRGF0YS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcbiAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgICAgcHJvamVjdExpc3QucHJvamVjdHMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2MsIHByb2plY3QuY29sb3IsIHByb2plY3QuY2F0ZWdvcmllcywgcHJvamVjdC50aW1lLCBwcm9qZWN0LmNvbXBsZXRlZCwgcHJvamVjdC50YXNrcykpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdExpc3QucHJvamVjdHMgPSBbXVxuICAgIH07XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbERhdGEuZ2V0SXRlbSgnY2F0ZWdvcnlMaXN0JykpO1xuICAgIGlmIChjYXRlZ29yaWVzKSB7XG4gICAgICAgIGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcyk7XG59IiwiaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgdGltZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSB0aXRsZS5zdWJzdHJpbmcoMCwzKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDAwMDAwKS50b1N0cmluZygpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzYXZlTG9jYWwsIGxvYWRMb2NhbCwgcHJvamVjdExpc3QsIGNhdGVnb3J5TGlzdCB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBsb2FkU2lkZU5hdiwgdG9nZ2xlQ2F0ZWdvcnlJbnB1dCB9IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgeyB0b2dnbGVQcm9qZWN0Rm9ybSwgc3VibWl0UHJvamVjdEZvcm0sIGNsZWFyUHJvamVjdEZvcm19IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHZpZXdBbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0FsbEJ0bicpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0QnRuJyk7XG5jb25zdCBhZGRDYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQ2F0QnRuJyk7XG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlJyk7XG5jb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5SW5wdXQnKTtcbmNvbnN0IHN1Ym1pdENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdENhdGVnb3J5QnRuJyk7XG5jb25zdCBjYW5jZWxDYXRlZ29yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxDYXRlZ29yeUJ0bicpO1xuY29uc3Qgc3VibWl0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Rm9ybScpO1xuY29uc3QgY2FuY2VsRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxQcm9qZWN0Rm9ybScpO1xuXG5mdW5jdGlvbiByZW5kZXJTaXRlKCkge1xuICAgIGxvYWRMb2NhbCgpO1xuICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xufVxuXG52aWV3QWxsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xufVxuXG5jcmVhdGVQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVQcm9qZWN0Rm9ybSgpO1xuXG5hZGRDYXRCdG4ub25jbGljayA9ICgpID0+IHRvZ2dsZUNhdGVnb3J5SW5wdXQoKTtcblxuc3VibWl0Q2F0ZWdvcnlCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnlJbnB1dC52YWx1ZSk7XG4gICAgdG9nZ2xlQ2F0ZWdvcnlJbnB1dCgpO1xuICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgc2F2ZUxvY2FsKCk7XG59XG5cbmNhbmNlbENhdGVnb3J5QnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVDYXRlZ29yeUlucHV0KClcblxuY2xvc2VNb2RhbEJ0bi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlUHJvamVjdEZvcm0oKTtcblxuY2FuY2VsRm9ybUJ0bi5vbmNsaWNrID0gKCkgPT4geyBjbGVhclByb2plY3RGb3JtKCk7IHRvZ2dsZVByb2plY3RGb3JtKCkgfTtcblxuc3VibWl0Rm9ybUJ0bi5vbmNsaWNrID0gKCkgPT4geyBzdWJtaXRQcm9qZWN0Rm9ybSgpLCBsb2FkU2lkZU5hdigpIH07XG5cbnJlbmRlclNpdGUoKTtcblxuLy8gSW1wbGVtZW50IGRhdGVzIGFuZCBmb3JtIHZhbGlkYXRpb25cbi8vIFdvcmsgb24gcHJvamVjdCBlZGl0IGZvcm1cbi8vIFN1Ym1pdCB0YXNrLCBsb2FkIGNvcnJlY3QgZGlzcGxheSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==