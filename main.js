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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    overflow: scroll;\n}\n\n.hover {\n    cursor: pointer;\n}\n\n#heroColumn {\n    border-bottom: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n#displayContainer {\n    height: 65vh;\n    overflow: auto;\n}\n\n#sideNav {\n    height: 100%;\n    width: auto;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n#largeDisplay {\n    height: 100%;\n    width: 100%;\n}\n\n#smallDisplay {\n    min-width: 15rem;\n    min-height: 18rem;\n    width: 25%;\n    height: 35%;\n    padding-bottom: 0px;\n    padding-right: 5px;\n}\n\n#largeTaskContainer {\n    width: 100%;\n    height: 17em;\n    overflow: auto;\n}\n\n#smallTaskContainer {\n    width: 100%;\n    height: 8rem;\n    overflow: auto;\n}\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n.menu-list a {\n    padding: 0.1em 0.75em;\n}\n\n.hidden {\n    display: none;\n}\n\n#categoryInput {\n    width: 100%;\n}\n\n.card {\n    box-shadow: none;\n}\n\n.card-header {\n    box-shadow: none;\n    border-top: 1px solid rgba(128, 128, 128, 0.25);\n    border-radius: 0;\n}\n\n.card-content {\n    padding: 0.4rem;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT;AACJ;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,+CAA+C;IAC/C,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kDAAkD;AACtD","sourcesContent":["body {\n    height: 100vh;\n    overflow: scroll;\n}\n\n.hover {\n    cursor: pointer;\n}\n\n#heroColumn {\n    border-bottom: 1px solid rgba(169, 169, 169, 0.5);\n}\n\n#displayContainer {\n    height: 65vh;\n    overflow: auto;\n}\n\n#sideNav {\n    height: 100%;\n    width: auto;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n#largeDisplay {\n    height: 100%;\n    width: 100%;\n}\n\n#smallDisplay {\n    min-width: 15rem;\n    min-height: 18rem;\n    width: 25%;\n    height: 35%;\n    padding-bottom: 0px;\n    padding-right: 5px;\n}\n\n#largeTaskContainer {\n    width: 100%;\n    height: 17em;\n    overflow: auto;\n}\n\n#smallTaskContainer {\n    width: 100%;\n    height: 8rem;\n    overflow: auto;\n}\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n.menu-list a {\n    padding: 0.1em 0.75em;\n}\n\n.hidden {\n    display: none;\n}\n\n#categoryInput {\n    width: 100%;\n}\n\n.card {\n    box-shadow: none;\n}\n\n.card-header {\n    box-shadow: none;\n    border-top: 1px solid rgba(128, 128, 128, 0.25);\n    border-radius: 0;\n}\n\n.card-content {\n    padding: 0.4rem;\n    border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}\n\n@import \"~@creativebulma/bulma-divider\";\n@import \"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\""],"sourceRoot":""}]);
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
        deleteBtn.onclick = () => { project.removeTask(j), displayContent.removeChild(taskItem), (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)()}
        
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

            taskDetails.classList.add('card-content','hidden');
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
    let descInput = document.createElement('input');
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
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('placeholder','Title');
    titleInput.setAttribute('id','taskModalTitle');
    descField.classList.add('field');
    descLabel.classList.add('label');
    descLabel.textContent = 'Description';
    descControl.classList.add('control');
    descInput.classList.add('input');
    descInput.setAttribute('type','textarea');
    descInput.setAttribute('placeholder','Description');
    timeField.classList.add('field');
    timeLabel.classList.add('label');
    timeLabel.textContent = 'Time to complete';
    timeControl.classList.add('control');
    timeInput.classList.add('input');
    timeInput.setAttribute('type','number');
    timeInput.setAttribute('min', '0');
    btnField.classList.add('field', 'is-grouped');
    submitBtn.classList.add('button','is-link');
    submitBtn.textContent = 'Submit';
    submitBtnControl.classList.add('control');
    cancelBtn.classList.add('button','is-link', 'is-light');
    cancelBtn.textContent = 'Cancel';
    cancelBtnControl.classList.add('control');
    closeBtn.classList.add('modal-close', 'is-large');

    if (edit) {
        titleInput.value = item.title;
        descInput.value = item.desc;
        timeInput.value = item.time;
        submitBtn.onclick = () => {
            displayedProject[0].time -= parseInt(item.time);
            item.title = titleInput.value;
            item.desc = descInput.value;
            item.time = timeInput.value || 0;
            displayedProject[0].time += parseInt(item.time);
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
            focusOneProject(displayedProject[0]);
            body.removeChild(modal);
        }
    } else {
        submitBtn.onclick = () => {
            item.addTask(titleInput.value, descInput.value, timeInput.value);
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

function createEditProjectModal() {

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

    projectContainer.classList.add('box', 'notification', `is-${projects.color}`, 'is-vertical');
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
    
    if (single) {
        projectContainer.classList.add('tile');
        projectContainer.id = "largeDisplay"
        let displayCategories = document.createElement('div');

        displayCategories.classList.add('subtitle');
        if (projects.categories.length > 0) {
            displayCategories.textContent = `Categories: ${projects.categories}`
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
    modal.classList.toggle('is-active')
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
// Work on tasks (creating tasks from project page, expanding tasks in project page for more detail(also button to edit))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtRztBQUNqQjtBQUNsRiw4QkFBOEIsc0VBQTJCLENBQUMsK0VBQXFDO0FBQy9GO0FBQ0Esc01BQXNNLFVBQVUsOEJBQThCLEtBQUssUUFBUSxnQ0FBZ0MsS0FBSyxHQUFHLDJCQUEyQixVQUFVLDhCQUE4QixLQUFLLFFBQVEsZ0NBQWdDLEtBQUssR0FBRyxnREFBZ0QsdUJBQXVCLGtCQUFrQix3QkFBd0IsOEJBQThCLG1CQUFtQix1QkFBdUIscUJBQXFCLHlCQUF5QixtQkFBbUIsR0FBRyx5RUFBeUUsZ0JBQWdCLG1CQUFtQixZQUFZLGdCQUFnQiw4QkFBOEIsR0FBRyxzRUFBc0Usc0JBQXNCLEdBQUcsc0VBQXNFLHVCQUF1QixHQUFHLGdFQUFnRSxrQkFBa0IsR0FBRyxnRUFBZ0Usa0JBQWtCLEdBQUcsNERBQTRELDJCQUEyQixtQkFBbUIsR0FBRyxpR0FBaUcsaUJBQWlCLGVBQWUsR0FBRyxtRUFBbUUsbUJBQW1CLHFCQUFxQixHQUFHLG9FQUFvRSxvQkFBb0Isd0JBQXdCLEdBQUcsMkZBQTJGLDRCQUE0QixHQUFHLDJGQUEyRiw4QkFBOEIsR0FBRywyRkFBMkYsaUNBQWlDLEdBQUcseUZBQXlGLDhCQUE4QixHQUFHLCtGQUErRiw4QkFBOEIsR0FBRyxpSEFBaUgsOEJBQThCLEdBQUcseUZBQXlGLDhCQUE4QixHQUFHLDJHQUEyRyw4QkFBOEIsR0FBRyx5RkFBeUYsOEJBQThCLEdBQUcsMkdBQTJHLDhCQUE4QixHQUFHLCtGQUErRiw4QkFBOEIsR0FBRyxpSEFBaUgsOEJBQThCLEdBQUcsK0ZBQStGLDhCQUE4QixHQUFHLGlIQUFpSCw4QkFBOEIsR0FBRyw2RkFBNkYsOEJBQThCLEdBQUcsK0dBQStHLDhCQUE4QixHQUFHLFNBQVMsMElBQTBJLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLHNMQUFzTCxVQUFVLDhCQUE4QixLQUFLLFFBQVEsZ0NBQWdDLEtBQUssR0FBRywyQkFBMkIsVUFBVSw4QkFBOEIsS0FBSyxRQUFRLGdDQUFnQyxLQUFLLEdBQUcsZ0RBQWdELHVCQUF1QixrQkFBa0Isd0JBQXdCLDhCQUE4QixtQkFBbUIsdUJBQXVCLHFCQUFxQix5QkFBeUIsbUJBQW1CLEdBQUcseUVBQXlFLGdCQUFnQixtQkFBbUIsWUFBWSxnQkFBZ0IsOEJBQThCLEdBQUcsc0VBQXNFLHNCQUFzQixHQUFHLHNFQUFzRSx1QkFBdUIsR0FBRyxnRUFBZ0Usa0JBQWtCLEdBQUcsZ0VBQWdFLGtCQUFrQixHQUFHLDREQUE0RCwyQkFBMkIsbUJBQW1CLEdBQUcsaUdBQWlHLGlCQUFpQixlQUFlLEdBQUcsbUVBQW1FLG1CQUFtQixxQkFBcUIsR0FBRyxvRUFBb0Usb0JBQW9CLHdCQUF3QixHQUFHLDJGQUEyRiw0QkFBNEIsR0FBRywyRkFBMkYsOEJBQThCLEdBQUcsMkZBQTJGLGlDQUFpQyxHQUFHLHlGQUF5Riw4QkFBOEIsR0FBRywrRkFBK0YsOEJBQThCLEdBQUcsaUhBQWlILDhCQUE4QixHQUFHLHlGQUF5Riw4QkFBOEIsR0FBRywyR0FBMkcsOEJBQThCLEdBQUcseUZBQXlGLDhCQUE4QixHQUFHLDJHQUEyRyw4QkFBOEIsR0FBRywrRkFBK0YsOEJBQThCLEdBQUcsaUhBQWlILDhCQUE4QixHQUFHLCtGQUErRiw4QkFBOEIsR0FBRyxpSEFBaUgsOEJBQThCLEdBQUcsNkZBQTZGLDhCQUE4QixHQUFHLCtHQUErRyw4QkFBOEIsR0FBRyxxQkFBcUI7QUFDcHVSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ29FO0FBQzdKLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMEJBQTBCLDRJQUFpQztBQUMzRCxrSEFBa0g7QUFDbEg7QUFDQSxnREFBZ0Qsb0JBQW9CLHVCQUF1QixHQUFHLFlBQVksc0JBQXNCLEdBQUcsaUJBQWlCLHdEQUF3RCxHQUFHLHVCQUF1QixtQkFBbUIscUJBQXFCLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsR0FBRyxhQUFhLHVCQUF1QixnQkFBZ0IscUJBQXFCLFVBQVUsa0RBQWtELEdBQUcsbUJBQW1CLG1CQUFtQixrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLHdCQUF3QixpQkFBaUIsa0JBQWtCLDBCQUEwQix5QkFBeUIsR0FBRyx5QkFBeUIsa0JBQWtCLG1CQUFtQixxQkFBcUIsR0FBRyx5QkFBeUIsa0JBQWtCLG1CQUFtQixxQkFBcUIsR0FBRyw0Q0FBNEMsc0JBQXNCLGtCQUFrQixHQUFHLGtCQUFrQiw0QkFBNEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxXQUFXLHVCQUF1QixHQUFHLGtCQUFrQix1QkFBdUIsc0RBQXNELHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0IseURBQXlELEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxnQ0FBZ0Msb0JBQW9CLHVCQUF1QixHQUFHLFlBQVksc0JBQXNCLEdBQUcsaUJBQWlCLHdEQUF3RCxHQUFHLHVCQUF1QixtQkFBbUIscUJBQXFCLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsR0FBRyxhQUFhLHVCQUF1QixnQkFBZ0IscUJBQXFCLFVBQVUsa0RBQWtELEdBQUcsbUJBQW1CLG1CQUFtQixrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLHdCQUF3QixpQkFBaUIsa0JBQWtCLDBCQUEwQix5QkFBeUIsR0FBRyx5QkFBeUIsa0JBQWtCLG1CQUFtQixxQkFBcUIsR0FBRyx5QkFBeUIsa0JBQWtCLG1CQUFtQixxQkFBcUIsR0FBRyw0Q0FBNEMsc0JBQXNCLGtCQUFrQixHQUFHLGtCQUFrQiw0QkFBNEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxXQUFXLHVCQUF1QixHQUFHLGtCQUFrQix1QkFBdUIsc0RBQXNELHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0IseURBQXlELEdBQUcsOENBQThDLDJGQUEyRjtBQUNsL0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVM7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQztBQUNFO0FBQ0E7O0FBRXhDOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUF5QjtBQUM3QixJQUFJLG1EQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsNkRBQTZELG1EQUFTO0FBQzFHO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtREFBUztBQUNyQjtBQUNBOztBQUVBLHlDQUF5QyxRQUFRO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxXQUFXO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxZQUFZLG1EQUFTO0FBQ3JCLG9DQUFvQywwREFBb0I7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0UsZUFBZTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZUFBZTs7QUFFM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxvQkFBb0I7QUFDL0UsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFTZ0M7QUFDTTs7QUFFdkI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUSxtREFBUztBQUNqQjs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjBCO0FBQ3VDO0FBQ2I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLElBQUksK0RBQXlCO0FBQzdCLElBQUksaUVBQXVCLENBQUMsMERBQW9CO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVM7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBUztBQUNqQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG1EQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBd0I7QUFDaEMsUUFBUSxtREFBUztBQUNqQjs7QUFFQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFTO0FBQ2pCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3FFO0FBQ2Y7QUFDVDs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHlEQUFlO0FBQ3pELDBDQUEwQyxrQkFBa0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBMkI7QUFDL0Isb0JBQW9CLElBQUksaUVBQTJCLEVBQUU7QUFDckQsWUFBWSwwREFBb0I7QUFDaEMsWUFBWSwwREFBb0I7QUFDaEM7QUFDQTtBQUNBLFFBQVEsNkRBQXVCO0FBQy9CLFFBQVEseURBQWUsQ0FBQyx5REFBbUI7QUFDM0MsTUFBTTtBQUNOLFFBQVEsaUVBQXVCLENBQUMsc0RBQWdCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixJQUFJLGlFQUEyQixFQUFFO0FBQ3JELFlBQVksMERBQW9CO0FBQ2hDLGtDQUFrQywwREFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQXVCO0FBQzNCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG9CQUFvQixJQUFJLG9FQUE4QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLG9DQUFvQyxlQUFlLDZEQUF1Qjs7QUFFMUUsbUNBQW1DLDZEQUF1QjtBQUMxRDtBQUNBLDRCQUE0Qiw2REFBdUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMERBQW9CLEVBQUUsNkRBQXVCO0FBQy9FO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RmdDO0FBQ0E7QUFDTTs7QUFFL0Isd0JBQXdCLGdEQUFPO0FBQy9CLHlCQUF5QixtREFBVTtBQUMxQzs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSwyREFBMkQsZ0RBQU87QUFDbEUsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDdUQ7QUFDeEI7QUFDUztBQUNxQjs7QUFFbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBUztBQUNiLElBQUkscURBQVc7QUFDZixJQUFJLGlFQUF1QixDQUFDLDBEQUFvQjtBQUNoRDs7QUFFQTtBQUNBLElBQUksaUVBQXVCLENBQUMsMERBQW9CO0FBQ2hEOztBQUVBLGlDQUFpQywyREFBaUI7O0FBRWxELDBCQUEwQiw2REFBbUI7O0FBRTdDO0FBQ0EsSUFBSSw4REFBd0I7QUFDNUIsSUFBSSw2REFBbUI7QUFDdkIsSUFBSSxxREFBVztBQUNmLElBQUksbURBQVM7QUFDYjs7QUFFQSxrQ0FBa0MsNkRBQW1COztBQUVyRCw4QkFBOEIsMkRBQWlCOztBQUUvQyxnQ0FBZ0MsMERBQWdCLElBQUksMkRBQWlCOztBQUVyRSxnQ0FBZ0MsMkRBQWlCLElBQUkscURBQVc7O0FBRWhFOztBQUVBO0FBQ0EseUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlci9kaXN0L2J1bG1hLWRpdmlkZXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBAY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyIHYxLjEuMCB8IChjKSAyMDIwIEdhZXRhbiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL0NyZWF0aXZlQnVsbWEvYnVsbWEtZGl2aWRlciAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogbGluZSAxNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzdhN2E3YTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBsaW5lIDI4LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOjphZnRlciwgLmRpdmlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLyogbGluZSAzNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLXJpZ2h0KTo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNDEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6bm90KC5pcy1sZWZ0KTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1sZWZ0OjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA0OSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1yaWdodDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA1Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi8qIGxpbmUgNTYsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyLCAuZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi8qIGxpbmUgNjEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbGluZSA2NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2hpdGU6OmFmdGVyLCAuZGl2aWRlci5pcy13aGl0ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWJsYWNrOjphZnRlciwgLmRpdmlkZXIuaXMtYmxhY2s6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhcms6OmFmdGVyLCAuZGl2aWRlci5pcy1kYXJrOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXByaW1hcnkuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbms6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGluay5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYzZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mbzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm86OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5OGRjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1pbmZvLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjZmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzOjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM3NzQ7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXN1Y2Nlc3MuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmYWYzO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmc6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtd2FybmluZy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFuZ2VyOjphZnRlciwgLmRpdmlkZXIuaXMtZGFuZ2VyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDY2ODtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlY2YwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlci9kaXN0L2J1bG1hLWRpdmlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBIQUEwSDtBQUMxSDtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBAY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyIHYxLjEuMCB8IChjKSAyMDIwIEdhZXRhbiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL0NyZWF0aXZlQnVsbWEvYnVsbWEtZGl2aWRlciAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogbGluZSAxNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzdhN2E3YTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBsaW5lIDI4LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOjphZnRlciwgLmRpdmlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLyogbGluZSAzNywgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLXJpZ2h0KTo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNDEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6bm90KC5pcy1sZWZ0KTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1sZWZ0OjpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA0OSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1yaWdodDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogbGluZSA1Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDI1cHg7XFxufVxcblxcbi8qIGxpbmUgNTYsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyLCAuZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi8qIGxpbmUgNjEsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtdmVydGljYWw6OmFmdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyogbGluZSA2NSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2hpdGU6OmFmdGVyLCAuZGl2aWRlci5pcy13aGl0ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWJsYWNrOjphZnRlciwgLmRpdmlkZXIuaXMtYmxhY2s6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhcms6OmFmdGVyLCAuZGl2aWRlci5pcy1kYXJrOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXByaW1hcnkuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbms6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtbGluay5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYzZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mbzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm86OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5OGRjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1pbmZvLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjZmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzOjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM3NzQ7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXN1Y2Nlc3MuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmYWYzO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmc6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtd2FybmluZy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFuZ2VyOjphZnRlciwgLmRpdmlkZXIuaXMtZGFuZ2VyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNDY2ODtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXIuaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlY2YwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlcm9Db2x1bW4ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4jZGlzcGxheUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjV2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNzaWRlTmF2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBib3R0b206IDMwcHhcXG59XFxuXFxuLmJveCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC4yNSk7XFxufVxcblxcbiNsYXJnZURpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc21hbGxEaXNwbGF5IHtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gICAgbWluLWhlaWdodDogMThyZW07XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogMzUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNsYXJnZVRhc2tDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxN2VtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3NtYWxsVGFza0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyLCAubWVudS1sYWJlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5tZW51LWxpc3QgYSB7XFxuICAgIHBhZGRpbmc6IDAuMWVtIDAuNzVlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjYXRlZ29yeUlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5jYXJkLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0RBQWtEO0FBQ3REXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZXJvQ29sdW1uIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcXG59XFxuXFxuI2Rpc3BsYXlDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDY1dmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jc2lkZU5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMzBweDtcXG4gICAgYm90dG9tOiAzMHB4XFxufVxcblxcbi5ib3gge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMjUpO1xcbn1cXG5cXG4jbGFyZ2VEaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NtYWxsRGlzcGxheSB7XFxuICAgIG1pbi13aWR0aDogMTVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDE4cmVtO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDM1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4jbGFyZ2VUYXNrQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTdlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNzbWFsbFRhc2tDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3RUaXRsZTpob3ZlciwgLm1lbnUtbGFiZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ubWVudS1saXN0IGEge1xcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjc1ZW07XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2F0ZWdvcnlJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4uY2FyZC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcXG59XFxuXFxuQGltcG9ydCBcXFwifkBjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXJcXFwiO1xcbkBpbXBvcnQgXFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3NcXFwiXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzYXZlTG9jYWwgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXVxuICAgIH1cblxuICAgIGFkZENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2ldID09IGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgbG9hZFNpZGVOYXYgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzRGlzcGxheScpO1xuXG5leHBvcnQgbGV0IGRpc3BsYXllZFByb2plY3QgPSBbXTtcblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIGRpc3BsYXlDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpc3BsYXkpO1xuICAgIHByb2plY3RzRGlzcGxheS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0cywgcHJvamVjdENvbnRhaW5lcikge1xuICAgIHByb2plY3RMaXN0LnJlbW92ZVByb2plY3QocHJvamVjdHMpO1xuICAgIHNhdmVMb2NhbCgpO1xuICAgIHByb2plY3RzRGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QsIHNpbmdsZSkge1xuICAgIGxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3QudGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSBwcm9qZWN0LnRhc2tzW2pdO1xuICAgICAgICBsZXQgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgpO1xuICAgICAgICBcbiAgICAgICAgdGFza0NoZWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWNoZWNrcmFkaW8nLCAnaXMtY2lyY2xlJywgJ21yLTEnKTtcbiAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGFzay5pZH1gKTtcbiAgICAgICAgXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJywgJ3B0LTEnLCAnbXktMScsICdpcy1qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbicpO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnLCAnaXMtc21hbGwnLCAnaGlkZGVuJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4geyBwcm9qZWN0LnJlbW92ZVRhc2soaiksIGRpc3BsYXlDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tJdGVtKSwgc2F2ZUxvY2FsKCl9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVCdG4oKSB7IGRlbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKSB9O1xuICAgICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0b2dnbGVCdG4pO1xuICAgICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRvZ2dsZUJ0bik7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpXG4gICAgICAgIH1cblxuICAgICAgICB0YXNrQ2hlY2sub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICAgICAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICB9XG5cbiAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGFzay5pZH1gKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGFza0NoZWNrKTtcbiAgICAgICAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIFxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRmllbGQpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgICBpZiAoc2luZ2xlKSB7XG4gICAgICAgICAgICBsZXQgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCB0aW1lRXN0aW1hdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQnLCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gdGFzay5kZXNjO1xuXG4gICAgICAgICAgICB0aW1lRXN0aW1hdGUuY2xhc3NMaXN0LmFkZCgnaXMtaXRhbGljJyk7XG4gICAgICAgICAgICB0aW1lRXN0aW1hdGUudGV4dENvbnRlbnQgPSBgRXN0aW1hdGVkIHRpbWU6ICR7dGFzay50aW1lfSBtaW5gO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlZGl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtaW5mbycsICdpcy1vdXRsaW5lZCcsICdpcy1saWdodCcpO1xuICAgICAgICAgICAgZWRpdFRhc2tCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICAgICAgICAgIGVkaXRUYXNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGFza01vZGFsKHRydWUsIHRhc2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0aW1lRXN0aW1hdGUpO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICAgICAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrTW9kYWwoZWRpdCwgaXRlbSkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1vZGFsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IHRpdGxlQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGRlc2NDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IHRpbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxldCB0aW1lQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBidG5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgc3VibWl0QnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgY2FuY2VsQnRuQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnaXMtYWN0aXZlJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIHRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgdGl0bGVDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrTW9kYWxUaXRsZScpO1xuICAgIGRlc2NGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xuICAgIGRlc2NMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgZGVzY0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0YXJlYScpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKTtcbiAgICB0aW1lRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcbiAgICB0aW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSAnVGltZSB0byBjb21wbGV0ZSc7XG4gICAgdGltZUNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIHRpbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdudW1iZXInKTtcbiAgICB0aW1lSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgIGJ0bkZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJywgJ2lzLWdyb3VwZWQnKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywnaXMtbGluaycpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCdpcy1saW5rJywgJ2lzLWxpZ2h0Jyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsQnRuQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdjb250cm9sJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2UnLCAnaXMtbGFyZ2UnKTtcblxuICAgIGlmIChlZGl0KSB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBpdGVtLnRpdGxlO1xuICAgICAgICBkZXNjSW5wdXQudmFsdWUgPSBpdGVtLmRlc2M7XG4gICAgICAgIHRpbWVJbnB1dC52YWx1ZSA9IGl0ZW0udGltZTtcbiAgICAgICAgc3VibWl0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0WzBdLnRpbWUgLT0gcGFyc2VJbnQoaXRlbS50aW1lKTtcbiAgICAgICAgICAgIGl0ZW0udGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaXRlbS5kZXNjID0gZGVzY0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgaXRlbS50aW1lID0gdGltZUlucHV0LnZhbHVlIHx8IDA7XG4gICAgICAgICAgICBkaXNwbGF5ZWRQcm9qZWN0WzBdLnRpbWUgKz0gcGFyc2VJbnQoaXRlbS50aW1lKTtcbiAgICAgICAgICAgIHNhdmVMb2NhbCgpO1xuICAgICAgICAgICAgZm9jdXNPbmVQcm9qZWN0KGRpc3BsYXllZFByb2plY3RbMF0pO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIHRpbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4gYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG5cbiAgICB0aXRsZUNvbnRyb2wuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZUZpZWxkLmFwcGVuZENoaWxkKHRpdGxlQ29udHJvbCk7XG4gICAgZGVzY0NvbnRyb2wuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbiAgICBkZXNjRmllbGQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBkZXNjRmllbGQuYXBwZW5kQ2hpbGQoZGVzY0NvbnRyb2wpO1xuICAgIHRpbWVDb250cm9sLmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG4gICAgdGltZUZpZWxkLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgdGltZUZpZWxkLmFwcGVuZENoaWxkKHRpbWVDb250cm9sKTtcbiAgICBzdWJtaXRCdG5Db250cm9sLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgY2FuY2VsQnRuQ29udHJvbC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGJ0bkZpZWxkLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bkNvbnRyb2wpO1xuICAgIGJ0bkZpZWxkLmFwcGVuZENoaWxkKGNhbmNlbEJ0bkNvbnRyb2wpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKHRpdGxlRmllbGQpO1xuICAgIG1vZGFsQm94LmFwcGVuZENoaWxkKGRlc2NGaWVsZCk7XG4gICAgbW9kYWxCb3guYXBwZW5kQ2hpbGQodGltZUZpZWxkKTtcbiAgICBtb2RhbEJveC5hcHBlbmRDaGlsZChidG5GaWVsZCk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm94KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJhY2tncm91bmQpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRQcm9qZWN0TW9kYWwoKSB7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzcGxheShwcm9qZWN0cywgc2luZ2xlKSB7XG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGRpc3BsYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwcm9qZWN0VGFza3MgPSBkaXNwbGF5VGFza3MocHJvamVjdHMsIHNpbmdsZSk7XG4gICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBib3R0b21CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm94JywgJ25vdGlmaWNhdGlvbicsIGBpcy0ke3Byb2plY3RzLmNvbG9yfWAsICdpcy12ZXJ0aWNhbCcpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGRpc3BsYXlUaW1lLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtcHJpbWFyeScsICdpcy1vdXRsaW5lZCcsICdpcy1saWdodCcpO1xuICAgIGVkaXRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1pbmZvJywgJ2lzLW91dGxpbmVkJywgJ2lzLWxpZ2h0Jyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICBib3R0b21CdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmllbGQnLCAnaXMtZ3JvdXBlZCcsICdpcy1mbGV4JywgJ2lzLWp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQnKTtcblxuICAgIGRlbGV0ZVByb2plY3RCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0cywgcHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHMudGl0bGU7XG4gICAgZGlzcGxheVRpdGxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGZvY3VzT25lUHJvamVjdChwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgZGlzcGxheVRpbWUudGV4dENvbnRlbnQgPSBgRXN0LiB0aW1lOiAke3Byb2plY3RzLnRpbWV9IG1pbmA7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlUaXRsZSk7XG5cbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBhZGRUYXNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVRhc2tNb2RhbChmYWxzZSwgcHJvamVjdHMpXG4gICAgfVxuICAgIGVkaXRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIFxuICAgIGlmIChzaW5nbGUpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuaWQgPSBcImxhcmdlRGlzcGxheVwiXG4gICAgICAgIGxldCBkaXNwbGF5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGRpc3BsYXlDYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgICAgIGlmIChwcm9qZWN0cy5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRpc3BsYXlDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gYENhdGVnb3JpZXM6ICR7cHJvamVjdHMuY2F0ZWdvcmllc31gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwbGF5Q2F0ZWdvcmllcy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3BsYXlEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNwbGF5RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3RzLmRlc2M7XG4gICAgICAgIGRpc3BsYXlEZXNjLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGVzYyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNhdGVnb3JpZXMpO1xuICAgICAgICBwcm9qZWN0VGFza3MuaWQgPSBcImxhcmdlVGFza0NvbnRhaW5lclwiO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdteC0zJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuaWQgPSBcInNtYWxsRGlzcGxheVwiO1xuICAgICAgICBwcm9qZWN0VGFza3MuaWQgPSBcInNtYWxsVGFza0NvbnRhaW5lclwiXG4gICAgICAgIGRpc3BsYXlUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlUaW1lKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUYXNrcyk7XG4gICAgYm90dG9tQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIGJvdHRvbUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tQnRuQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c09uZVByb2plY3QocHJvamVjdCkge1xuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIGNyZWF0ZURpc3BsYXkocHJvamVjdCwgdHJ1ZSk7XG4gICAgZGlzcGxheWVkUHJvamVjdCA9IFtwcm9qZWN0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKGxpc3QpIHtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlRGlzcGxheShsaXN0W2ldLCBmYWxzZSlcbiAgICB9XG4gICAgZGlzcGxheWVkUHJvamVjdCA9IGxpc3Q7XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSwgZGVzYywgY29sb3IgPSBcIndoaXRlXCIsIGNhdGVnb3JpZXMgPSBbXSwgcHJpb3JpdHkgPSB0aGlzLnByb2plY3RzLmxlbmd0aCwgdGltZSA9IDAsIGNvbXBsZXRlZCA9IGZhbHNlLCB0YXNrcyA9IFtdKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2MsIGNvbG9yLCBjYXRlZ29yaWVzLCB0aW1lLCBjb21wbGV0ZWQsIHRhc2tzKTtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKGNhdCA9PiBwcm9qZWN0LmFkZENhdGVnb3J5KGNhdCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSA8IHRoaXMucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcmlvcml0eSwgMCwgcHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0gPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgc2F2ZUxvY2FsLCBwcm9qZWN0TGlzdCwgY2F0ZWdvcnlMaXN0IH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IGRpc3BsYXlNdWx0aXBsZVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IHByb2plY3RGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm1UaXRsZScpO1xuY29uc3QgcHJvamVjdEZvcm1EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RGb3JtRGVzYycpO1xuY29uc3QgcHJvamVjdEZvcm1Db2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Rm9ybUNvbG9yJyk7XG5jb25zdCBwcm9qZWN0Rm9ybUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm1DYXRlZ29yaWVzJyk7XG5cbmZ1bmN0aW9uIGZvcm1hdENhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xuICAgIGxldCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBbXVxuICAgIGxldCBzcGxpdFZhbHVlcyA9IGNhdGVnb3JpZXMudmFsdWUuc3BsaXQoJyAnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzcGxpdFZhbHVlc1tpXSAhPSAnJykge1xuICAgICAgICAgICAgZmlsdGVyZWRDYXRlZ29yaWVzLnB1c2goc3BsaXRWYWx1ZXNbaV0udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRDYXRlZ29yaWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RGb3JtVGl0bGUudmFsdWUgPSAnJztcbiAgICBwcm9qZWN0Rm9ybURlc2MudmFsdWUgPSAnJztcbiAgICBwcm9qZWN0Rm9ybUNvbG9yLnZhbHVlID0gXCJ3aGl0ZVwiO1xuICAgIHByb2plY3RGb3JtQ2F0ZWdvcmllcy52YWx1ZSA9ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUHJvamVjdEZvcm0oKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgIHByb2plY3RMaXN0LmNyZWF0ZVByb2plY3QocHJvamVjdEZvcm1UaXRsZS52YWx1ZSwgcHJvamVjdEZvcm1EZXNjLnZhbHVlLCBwcm9qZWN0Rm9ybUNvbG9yLnZhbHVlLCBmb3JtYXRDYXRlZ29yaWVzKHByb2plY3RGb3JtQ2F0ZWdvcmllcykpO1xuICAgIGRpc3BsYXlNdWx0aXBsZVByb2plY3RzKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XG4gICAgdG9nZ2xlUHJvamVjdEZvcm0oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGNvbG9yLCBjYXRlZ29yaWVzLCB0aW1lLCBjb21wbGV0ZWQsIHRhc2tzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGl0bGUsIGRlc2MsIHRpbWUgPSAwLCBwcmlvcml0eSA9IHRoaXMudGFza3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2MsIHRpbWUpO1xuICAgICAgICBpZiAocHJpb3JpdHkgPCB0aGlzLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UocHJpb3JpdHksIDAsIHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZSArPSB0YXNrLnRpbWU7XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aW1lIC09IHRoaXMudGFza3NbcHJpb3JpdHldLnRpbWU7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHByaW9yaXR5LCAxKTtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgZ2V0VGltZUVzdGltYXRlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWU7XG4gICAgfVxuXG4gICAgY29tcGxldGVQcm9qZWN0KCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnlMaXN0LmFkZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0gPT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZm9jdXNPbmVQcm9qZWN0LCBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGNhdGVnb3J5TGlzdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkaXNwbGF5ZWRQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5SW5wdXQnKTtcbmNvbnN0IGNhdGVnb3J5SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dEZpZWxkJyk7XG5jb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVOYXYnKTtcblxuZnVuY3Rpb24gY3JlYXRlU2lkZU5hdlByb2plY3RMaW5rcyhwcm9qZWN0cywgY2F0ZWdvcmllcywgaSwgcGFyZW50KSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocHJvamVjdHNbal0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yaWVzW2ldKSkge1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlua1VsLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuICAgICAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnbXktMCcpO1xuICAgICAgICAgICAgcHJvamVjdExpbmsub25jbGljayA9ICgpID0+IHsgZm9jdXNPbmVQcm9qZWN0KHByb2plY3RzW2pdKSB9XG4gICAgICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IGDCtyR7cHJvamVjdHNbal0udGl0bGV9YDtcbiAgICAgICAgICAgIHByb2plY3RMaW5rTGkuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuICAgICAgICAgICAgcHJvamVjdExpbmtVbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0xpKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlua1VsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yeUxpc3QucmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0LnByb2plY3RzW2ldLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXS5yZW1vdmVDYXRlZ29yeShjYXRlZ29yeSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlzcGxheWVkUHJvamVjdC5sZW5ndGggPT0gMSkge1xuICAgICAgICBmb2N1c09uZVByb2plY3QoZGlzcGxheWVkUHJvamVjdFswXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyhkaXNwbGF5ZWRQcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIGxldCBjYXRlZ29yeVByb2plY3RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3QucHJvamVjdHNbaV0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5UHJvamVjdHMucHVzaChwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJywgJ2lzLTEnKTtcbiAgICBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMoY2F0ZWdvcnlQcm9qZWN0cyk7XG4gICAgZGlzcGxheUNvbnRhaW5lci5wcmVwZW5kKGNhdGVnb3J5VGl0bGUsIHByb2plY3RzRGlzcGxheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDYXRlZ29yeUlucHV0KCkge1xuICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSAnJztcbiAgICBjYXRlZ29yeUlucHV0RmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNpZGVOYXYoKSB7XG4gICAgc2lkZU5hdi5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjYXRlZ29yeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGxldCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBjYXRlZ29yeVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScsICdpcy1zbWFsbCcsICdoaWRkZW4nKTtcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlQnRuKCkgeyBkZWxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykgfTtcbiAgICAgICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzW2ldKSwgbG9hZFNpZGVOYXYoKSB9XG5cbiAgICAgICAgY2F0ZWdvcnlTcGFuLnRleHRDb250ZW50ID0gY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXNbaV07XG4gICAgICAgIGNhdGVnb3J5U3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUNhdGVnb3J5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhdGVnb3J5TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWVudS1sYWJlbCcsICdtYi0wJywgJ2lzLWZsZXgnLCAnaXMtanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4nKTtcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNwYW4pO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcbiAgICAgICAgY2F0ZWdvcnlTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRvZ2dsZUJ0bik7XG4gICAgICAgIGNhdGVnb3J5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRvZ2dsZUJ0bik7XG4gICAgICAgIGNhdGVnb3J5U2VjdGlvbi5hcHBlbmRDaGlsZChjYXRlZ29yeUxhYmVsKTtcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBjcmVhdGVTaWRlTmF2UHJvamVjdExpbmtzKHByb2plY3RMaXN0LnByb2plY3RzLCBjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcywgaSwgY2F0ZWdvcnlTZWN0aW9uKVxuICAgICAgICBzaWRlTmF2LmFwcGVuZENoaWxkKGNhdGVnb3J5U2VjdGlvbik7XG4gICAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL2xpYnJhcnknO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi9jYXRlZ29yaWVzJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0gbmV3IExpYnJhcnkoKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBuZXcgQ2F0ZWdvcmllcygpO1xubGV0IGxvY2FsRGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWwoKSB7XG4gICAgbG9jYWxEYXRhLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QucHJvamVjdHMpKVxuICAgIGxvY2FsRGF0YS5zZXRJdGVtKCdjYXRlZ29yeUxpc3QnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTG9jYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsRGF0YS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcbiAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgICAgcHJvamVjdExpc3QucHJvamVjdHMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2MsIHByb2plY3QuY29sb3IsIHByb2plY3QuY2F0ZWdvcmllcywgcHJvamVjdC50aW1lLCBwcm9qZWN0LmNvbXBsZXRlZCwgcHJvamVjdC50YXNrcykpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdExpc3QucHJvamVjdHMgPSBbXVxuICAgIH07XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbERhdGEuZ2V0SXRlbSgnY2F0ZWdvcnlMaXN0JykpO1xuICAgIGlmIChjYXRlZ29yaWVzKSB7XG4gICAgICAgIGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yeUxpc3QuY2F0ZWdvcmllcyk7XG59IiwiaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgdGltZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSB0aXRsZS5zdWJzdHJpbmcoMCwzKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDAwMDAwKS50b1N0cmluZygpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzYXZlTG9jYWwsIGxvYWRMb2NhbCwgcHJvamVjdExpc3QsIGNhdGVnb3J5TGlzdCB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBkaXNwbGF5TXVsdGlwbGVQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBsb2FkU2lkZU5hdiwgdG9nZ2xlQ2F0ZWdvcnlJbnB1dCB9IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgeyB0b2dnbGVQcm9qZWN0Rm9ybSwgc3VibWl0UHJvamVjdEZvcm0sIGNsZWFyUHJvamVjdEZvcm19IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHZpZXdBbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0FsbEJ0bicpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0QnRuJyk7XG5jb25zdCBhZGRDYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQ2F0QnRuJyk7XG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlJyk7XG5jb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5SW5wdXQnKTtcbmNvbnN0IHN1Ym1pdENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdENhdGVnb3J5QnRuJyk7XG5jb25zdCBjYW5jZWxDYXRlZ29yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxDYXRlZ29yeUJ0bicpO1xuY29uc3Qgc3VibWl0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Rm9ybScpO1xuY29uc3QgY2FuY2VsRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxQcm9qZWN0Rm9ybScpO1xuXG5mdW5jdGlvbiByZW5kZXJTaXRlKCkge1xuICAgIGxvYWRMb2NhbCgpO1xuICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xufVxuXG52aWV3QWxsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGlzcGxheU11bHRpcGxlUHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xufVxuXG5jcmVhdGVQcm9qZWN0QnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVQcm9qZWN0Rm9ybSgpO1xuXG5hZGRDYXRCdG4ub25jbGljayA9ICgpID0+IHRvZ2dsZUNhdGVnb3J5SW5wdXQoKTtcblxuc3VibWl0Q2F0ZWdvcnlCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnlJbnB1dC52YWx1ZSk7XG4gICAgdG9nZ2xlQ2F0ZWdvcnlJbnB1dCgpO1xuICAgIGxvYWRTaWRlTmF2KCk7XG4gICAgc2F2ZUxvY2FsKCk7XG59XG5cbmNhbmNlbENhdGVnb3J5QnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVDYXRlZ29yeUlucHV0KClcblxuY2xvc2VNb2RhbEJ0bi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlUHJvamVjdEZvcm0oKTtcblxuY2FuY2VsRm9ybUJ0bi5vbmNsaWNrID0gKCkgPT4geyBjbGVhclByb2plY3RGb3JtKCk7IHRvZ2dsZVByb2plY3RGb3JtKCkgfTtcblxuc3VibWl0Rm9ybUJ0bi5vbmNsaWNrID0gKCkgPT4geyBzdWJtaXRQcm9qZWN0Rm9ybSgpLCBsb2FkU2lkZU5hdigpIH07XG5cbnJlbmRlclNpdGUoKTtcblxuLy8gSW1wbGVtZW50IGRhdGVzIGFuZCBmb3JtIHZhbGlkYXRpb25cbi8vIFdvcmsgb24gdGFza3MgKGNyZWF0aW5nIHRhc2tzIGZyb20gcHJvamVjdCBwYWdlLCBleHBhbmRpbmcgdGFza3MgaW4gcHJvamVjdCBwYWdlIGZvciBtb3JlIGRldGFpbChhbHNvIGJ1dHRvbiB0byBlZGl0KSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=