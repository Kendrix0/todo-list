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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT;AACJ;;AAEA;IACI,2CAA2C;AAC/C;;;AAGA;IACI,eAAe;IACf,WAAW;AACf","sourcesContent":["body {\n    height: 100vh;\n}\n\n.sticky {\n    position: sticky;\n    top: 30px;\n    bottom: 30px\n}\n\n.box {\n    border: 1px solid rgba(169, 169, 169, 0.25);\n}\n\n\n.projectTitle:hover, .menu-label:hover {\n    cursor: pointer;\n    color: gray;\n}\n\n@import \"~@creativebulma/bulma-divider\";\n@import \"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\""],"sourceRoot":""}]);
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
class Categories {
    constructor() {
        this.categories = []
    }

    addCategory(category) {
        if (!this.categories.includes(category)) {
            this.categories.push(category);
        }
        console.log(this.categories)
    };

    removeCategory(category) {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i] == category) {
                this.categories.splice(i, 1)
            }
        }
    };
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
        this.allCategories = [];
    }

    createProject(title, desc, color = "white", time = 0, completed = false, tasks = [], categories = [], priority = this.projects.length) {
        let project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title, desc, color, time, completed, tasks, categories);
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

    findProject() {

    }

    removeProject() {

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
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories */ "./src/categories.js");





class Project {
    constructor(title, desc, color, time, completed, tasks, categories) {
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

    findTask() {

    }

    removeTask(priority) {
        this.time -= this.tasks[priority].getTime();
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
        projectList.projects = projects.map(project => new _project__WEBPACK_IMPORTED_MODULE_0__["default"](project.title, project.desc, project.color, project.time, project.completed, project.tasks, project.categories))
    } else {
        projectList.projects = []
    };

    const categories = JSON.parse(localData.getItem('categoryList'));
    if (categories) {
        categoryList.categories = categories.map(category => category)
    }
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

    changePriority() {

        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
    }

    completeTask() {
        this.completed = !this.completed;
        console.log(this.completed)
        ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
    }

    getTime() {
        return this.time;
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





const viewAllBtn = document.querySelector('#viewAllBtn');
const addCatBtn = document.querySelector('#addCatBtn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');
const projectsDisplay = document.querySelector('#projectsDisplay');
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadLocal)();

function focusOneProject(project) {
    projectsDisplay.innerHTML = '';
    let displayContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let displayTitle = document.createElement('p');
    let displayDesc = document.createElement('p');
    let displayCategories = document.createElement('div');
    let projectTasks = displayTasks(project)

    displayContainer.classList.add('tile', 'box', `is-${project.color}`, 'is-vertical');
    contentContainer.classList.add('content');
    displayTitle.classList.add('title');
    displayDesc.classList.add('subtitle');
    displayCategories.classList.add('subtitle');

    displayTitle.textContent = project.title;
    displayTitle.onclick = () => {
        focusOneProject(project)
    }
    displayDesc.textContent = project.desc;
    displayCategories.textContent = `Categories: ${project.categories}`

    contentContainer.appendChild(displayTitle);
    contentContainer.appendChild(displayDesc);
    contentContainer.appendChild(displayCategories);
    contentContainer.appendChild(projectTasks);
    displayContainer.appendChild(contentContainer);
    projectsDisplay.appendChild(displayContainer);
}

function displayCategory(category) {
    projectsDisplay.innerHTML = '';
    let categoryProjects = [];
    for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects.length; i++) {
        if (_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects[i].categories.includes(category)) {
            categoryProjects.push(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects[i])
        }
    }
    displayProjects(categoryProjects);
}

function displayTasks(project) {
    let displayContent = document.createElement('div');
    displayContent.classList.add('content');
    for (let j = 0; j < project.tasks.length; j++) {
        let taskField = document.createElement('div');
        let taskCheck = document.createElement('input');
        let taskTitle = document.createElement('label');

        taskField.classList.add('field');
        taskCheck.classList.add('is-checkradio', 'is-circle');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.setAttribute('name', `${project.tasks[j].id}`);

        if (project.tasks[j].completed) {
            taskCheck.setAttribute('checked', 'true')
        }

        taskCheck.onclick = () => {
            project.tasks[j].completed = !project.tasks[j].completed;
            (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();
            console.log(project.tasks[j])
        }

        taskTitle.setAttribute('for', `${project.tasks[j].id}`);
        taskTitle.textContent = project.tasks[j].title;

        taskField.appendChild(taskCheck);
        taskField.appendChild(taskTitle);
        displayContent.appendChild(taskField);
    }
    return displayContent;
}

function displayProjects(list) {
    for (let i = 0; i < list.length; i++) {
        let displayContainer = document.createElement('div');
        let contentContainer = document.createElement('div');
        let displayTitle = document.createElement('p');
        let displayDesc = document.createElement('p');
        let projectTasks = displayTasks(list[i])

        displayContainer.classList.add('box', 'notification', `is-${list[i].color}`, 'mx-3');
        contentContainer.classList.add('content');
        displayTitle.classList.add('title','projectTitle');
        displayDesc.classList.add('subtitle');

        displayTitle.textContent = list[i].title;
        displayTitle.onclick = () => {
            focusOneProject(list[i])
        }
        displayDesc.textContent = list[i].desc;

        contentContainer.appendChild(displayTitle);
        contentContainer.appendChild(displayDesc);
        contentContainer.appendChild(projectTasks);
        displayContainer.appendChild(contentContainer);
        projectsDisplay.appendChild(displayContainer);
    }
}

function loadSidebar() {

}
/* projectList.createProject('Test3', 'This is a test3');
projectList.projects[1].addCategory('TEST3');
projectList.projects[2].addCategory('TEST3');
projectList.projects[2].addTask('Test task', 'This is a test task', 1); */
console.log(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);

function renderSite() {
    loadSidebar();
    displayProjects(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);
}

function toggleModal() {
    modal.classList.toggle('is-active')
}

viewAllBtn.onclick = () => {
    projectsDisplay.innerHTML = '';
    displayProjects(_storage__WEBPACK_IMPORTED_MODULE_1__.projectList.projects);
}

addCatBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

renderSite();

let testCategory = document.querySelector('.menu-label');
testCategory.onclick = () => {
    displayCategory('TEST')
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC8uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIEBjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIgdjEuMS4wIHwgKGMpIDIwMjAgR2FldGFuIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vQ3JlYXRpdmVCdWxtYS9idWxtYS1kaXZpZGVyICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBsaW5lIDE3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgbWFyZ2luOiAyNXB4IDA7XFxufVxcblxcbi8qIGxpbmUgMjgsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6OmFmdGVyLCAuZGl2aWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4vKiBsaW5lIDM3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOm5vdCguaXMtcmlnaHQpOjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLWxlZnQpOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDQ1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxlZnQ6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDQ5LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXJpZ2h0OjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDUyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMjVweDtcXG59XFxuXFxuLyogbGluZSA1Niwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLyogbGluZSA2MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDY1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13aGl0ZTo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdoaXRlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtYmxhY2s6OmFmdGVyLCAuZGl2aWRlci5pcy1ibGFjazo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFyazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhcms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXByaW1hcnk6OmFmdGVyLCAuZGl2aWRlci5pcy1wcmltYXJ5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5LmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmZmZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGluazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWxpbms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbmsuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjNmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1pbmZvOjphZnRlciwgLmRpdmlkZXIuaXMtaW5mbzo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk4ZGM7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mby5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmNmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXN1Y2Nlc3M6OmFmdGVyLCAuZGl2aWRlci5pcy1zdWNjZXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4Yzc3NDtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZhZjM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2FybmluZzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdhcm5pbmc6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmcuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXI6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0NjY4O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVjZjA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AY3JlYXRpdmVidWxtYS9idWxtYS1kaXZpZGVyL2Rpc3QvYnVsbWEtZGl2aWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEhBQTBIO0FBQzFIO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtBQUNmOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIEBjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIgdjEuMS4wIHwgKGMpIDIwMjAgR2FldGFuIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vQ3JlYXRpdmVCdWxtYS9idWxtYS1kaXZpZGVyICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBsaW5lIDE3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgbWFyZ2luOiAyNXB4IDA7XFxufVxcblxcbi8qIGxpbmUgMjgsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXI6OmFmdGVyLCAuZGl2aWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4vKiBsaW5lIDM3LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyOm5vdCguaXMtcmlnaHQpOjphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogbGluZSA0MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlcjpub3QoLmlzLWxlZnQpOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDQ1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxlZnQ6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDQ5LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXJpZ2h0OjphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBsaW5lIDUyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMjVweDtcXG59XFxuXFxuLyogbGluZSA1Niwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLyogbGluZSA2MSwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy12ZXJ0aWNhbDo6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiBsaW5lIDY1LCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXZlcnRpY2FsOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy13aGl0ZTo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdoaXRlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtYmxhY2s6OmFmdGVyLCAuZGl2aWRlci5pcy1ibGFjazo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtZGFyazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhcms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXByaW1hcnk6OmFmdGVyLCAuZGl2aWRlci5pcy1wcmltYXJ5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1wcmltYXJ5LmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtcHJpbWFyeS5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmZmZmM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtbGluazo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWxpbms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjO1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWxpbmsuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy1saW5rLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjNmYztcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1pbmZvOjphZnRlciwgLmRpdmlkZXIuaXMtaW5mbzo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk4ZGM7XFxufVxcblxcbi8qIGxpbmUgODAsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtaW5mby5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWluZm8uaXMtbGlnaHQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmNmZjO1xcbn1cXG5cXG4vKiBsaW5lIDcyLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXN1Y2Nlc3M6OmFmdGVyLCAuZGl2aWRlci5pcy1zdWNjZXNzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4Yzc3NDtcXG59XFxuXFxuLyogbGluZSA4MCwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1zdWNjZXNzLmlzLWxpZ2h0OjphZnRlciwgLmRpdmlkZXIuaXMtc3VjY2Vzcy5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZhZjM7XFxufVxcblxcbi8qIGxpbmUgNzIsIHNyYy9zYXNzL2FwcC5zYXNzICovXFxuLmRpdmlkZXIuaXMtd2FybmluZzo6YWZ0ZXIsIC5kaXZpZGVyLmlzLXdhcm5pbmc6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLXdhcm5pbmcuaXMtbGlnaHQ6OmFmdGVyLCAuZGl2aWRlci5pcy13YXJuaW5nLmlzLWxpZ2h0OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcXG59XFxuXFxuLyogbGluZSA3Miwgc3JjL3Nhc3MvYXBwLnNhc3MgKi9cXG4uZGl2aWRlci5pcy1kYW5nZXI6OmFmdGVyLCAuZGl2aWRlci5pcy1kYW5nZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0NjY4O1xcbn1cXG5cXG4vKiBsaW5lIDgwLCBzcmMvc2Fzcy9hcHAuc2FzcyAqL1xcbi5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YWZ0ZXIsIC5kaXZpZGVyLmlzLWRhbmdlci5pcy1saWdodDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVjZjA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL0BjcmVhdGl2ZWJ1bG1hL2J1bG1hLWRpdmlkZXIvZGlzdC9idWxtYS1kaXZpZGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3MpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMzBweDtcXG4gICAgYm90dG9tOiAzMHB4XFxufVxcblxcbi5ib3gge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMjUpO1xcbn1cXG5cXG5cXG4ucHJvamVjdFRpdGxlOmhvdmVyLCAubWVudS1sYWJlbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zdGlja3kge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGJvdHRvbTogMzBweFxcbn1cXG5cXG4uYm94IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjI1KTtcXG59XFxuXFxuXFxuLnByb2plY3RUaXRsZTpob3ZlciwgLm1lbnUtbGFiZWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG5AaW1wb3J0IFxcXCJ+QGNyZWF0aXZlYnVsbWEvYnVsbWEtZGl2aWRlclxcXCI7XFxuQGltcG9ydCBcXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzc1xcXCJcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXVxuICAgIH1cblxuICAgIGFkZENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcmllcylcbiAgICB9O1xuXG4gICAgcmVtb3ZlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0gPT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBzYXZlTG9jYWwgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWJyYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmFsbENhdGVnb3JpZXMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjLCBjb2xvciA9IFwid2hpdGVcIiwgdGltZSA9IDAsIGNvbXBsZXRlZCA9IGZhbHNlLCB0YXNrcyA9IFtdLCBjYXRlZ29yaWVzID0gW10sIHByaW9yaXR5ID0gdGhpcy5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzYywgY29sb3IsIHRpbWUsIGNvbXBsZXRlZCwgdGFza3MsIGNhdGVnb3JpZXMpO1xuICAgICAgICBpZiAoY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoY2F0ID0+IHByb2plY3QuYWRkQ2F0ZWdvcnkoY2F0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5IDwgdGhpcy5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByaW9yaXR5LCAwLCBwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBmaW5kUHJvamVjdCgpIHtcblxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QoKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgc2F2ZUxvY2FsLCBjYXRlZ29yeUxpc3QgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi9saWJyYXJ5JztcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4vY2F0ZWdvcmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBjb2xvciwgdGltZSwgY29tcGxldGVkLCB0YXNrcywgY2F0ZWdvcmllcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcbiAgICB9XG5cbiAgICBhZGRUYXNrKHRpdGxlLCBkZXNjLCB0aW1lID0gMCwgcHJpb3JpdHkgPSB0aGlzLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjLCB0aW1lKTtcbiAgICAgICAgaWYgKHByaW9yaXR5IDwgdGhpcy50YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHByaW9yaXR5LCAwLCB0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWUgKz0gdGFzay50aW1lO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBmaW5kVGFzaygpIHtcblxuICAgIH1cblxuICAgIHJlbW92ZVRhc2socHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aW1lIC09IHRoaXMudGFza3NbcHJpb3JpdHldLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UocHJpb3JpdHksIDEpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBnZXRUaW1lRXN0aW1hdGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudGltZTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZVByb2plY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeUxpc3QuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXSA9PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxvY2FsKCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbGlicmFyeSc7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NhdGVnb3JpZXMnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBuZXcgTGlicmFyeSgpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IG5ldyBDYXRlZ29yaWVzKCk7XG5sZXQgbG9jYWxEYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbCgpIHtcbiAgICBsb2NhbERhdGEuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdC5wcm9qZWN0cykpXG4gICAgbG9jYWxEYXRhLnNldEl0ZW0oJ2NhdGVnb3J5TGlzdCcsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5TGlzdC5jYXRlZ29yaWVzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMb2NhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxEYXRhLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IG5ldyBQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzYywgcHJvamVjdC5jb2xvciwgcHJvamVjdC50aW1lLCBwcm9qZWN0LmNvbXBsZXRlZCwgcHJvamVjdC50YXNrcywgcHJvamVjdC5jYXRlZ29yaWVzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0cyA9IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGxvY2FsRGF0YS5nZXRJdGVtKCdjYXRlZ29yeUxpc3QnKSk7XG4gICAgaWYgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeSlcbiAgICB9XG59IiwiaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgdGltZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSB0aXRsZS5zdWJzdHJpbmcoMCwzKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDAwMDAwKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGNoYW5nZVByaW9yaXR5KCkge1xuXG4gICAgICAgIHNhdmVMb2NhbCgpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlVGFzaygpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcGxldGVkKVxuICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICB9XG5cbiAgICBnZXRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzYXZlTG9jYWwsIGxvYWRMb2NhbCwgcHJvamVjdExpc3QgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IHZpZXdBbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0FsbEJ0bicpO1xuY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZENhdEJ0bicpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcbmNvbnN0IHByb2plY3RzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c0Rpc3BsYXknKTtcbmxvYWRMb2NhbCgpO1xuXG5mdW5jdGlvbiBmb2N1c09uZVByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzRGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgZGlzcGxheURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGRpc3BsYXlDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHByb2plY3RUYXNrcyA9IGRpc3BsYXlUYXNrcyhwcm9qZWN0KVxuXG4gICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aWxlJywgJ2JveCcsIGBpcy0ke3Byb2plY3QuY29sb3J9YCwgJ2lzLXZlcnRpY2FsJyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgZGlzcGxheVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZGlzcGxheURlc2MuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICBkaXNwbGF5Q2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuXG4gICAgZGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBkaXNwbGF5VGl0bGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZm9jdXNPbmVQcm9qZWN0KHByb2plY3QpXG4gICAgfVxuICAgIGRpc3BsYXlEZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjO1xuICAgIGRpc3BsYXlDYXRlZ29yaWVzLnRleHRDb250ZW50ID0gYENhdGVnb3JpZXM6ICR7cHJvamVjdC5jYXRlZ29yaWVzfWBcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVRpdGxlKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlEZXNjKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDYXRlZ29yaWVzKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUYXNrcyk7XG4gICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHByb2plY3RzRGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgY2F0ZWdvcnlQcm9qZWN0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0LnByb2plY3RzW2ldLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjYXRlZ29yeVByb2plY3RzLnB1c2gocHJvamVjdExpc3QucHJvamVjdHNbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGxheVByb2plY3RzKGNhdGVnb3J5UHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdCkge1xuICAgIGxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3QudGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XG4gICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCdpcy1jaGVja3JhZGlvJywgJ2lzLWNpcmNsZScpO1xuICAgICAgICB0YXNrQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIHRhc2tDaGVjay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtwcm9qZWN0LnRhc2tzW2pdLmlkfWApO1xuXG4gICAgICAgIGlmIChwcm9qZWN0LnRhc2tzW2pdLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGFza0NoZWNrLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tDaGVjay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrc1tqXS5jb21wbGV0ZWQgPSAhcHJvamVjdC50YXNrc1tqXS5jb21wbGV0ZWQ7XG4gICAgICAgICAgICBzYXZlTG9jYWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3Nbal0pXG4gICAgICAgIH1cblxuICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtwcm9qZWN0LnRhc2tzW2pdLmlkfWApO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRhc2tzW2pdLnRpdGxlO1xuXG4gICAgICAgIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2spO1xuICAgICAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlDb250ZW50O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMobGlzdCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgZGlzcGxheURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSBkaXNwbGF5VGFza3MobGlzdFtpXSlcblxuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JveCcsICdub3RpZmljYXRpb24nLCBgaXMtJHtsaXN0W2ldLmNvbG9yfWAsICdteC0zJyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgICAgICBkaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnLCdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgZGlzcGxheURlc2MuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcblxuICAgICAgICBkaXNwbGF5VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0W2ldLnRpdGxlO1xuICAgICAgICBkaXNwbGF5VGl0bGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvY3VzT25lUHJvamVjdChsaXN0W2ldKVxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlEZXNjLnRleHRDb250ZW50ID0gbGlzdFtpXS5kZXNjO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVRpdGxlKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGVzYyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tzKTtcbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgcHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXlDb250YWluZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFNpZGViYXIoKSB7XG5cbn1cbi8qIHByb2plY3RMaXN0LmNyZWF0ZVByb2plY3QoJ1Rlc3QzJywgJ1RoaXMgaXMgYSB0ZXN0MycpO1xucHJvamVjdExpc3QucHJvamVjdHNbMV0uYWRkQ2F0ZWdvcnkoJ1RFU1QzJyk7XG5wcm9qZWN0TGlzdC5wcm9qZWN0c1syXS5hZGRDYXRlZ29yeSgnVEVTVDMnKTtcbnByb2plY3RMaXN0LnByb2plY3RzWzJdLmFkZFRhc2soJ1Rlc3QgdGFzaycsICdUaGlzIGlzIGEgdGVzdCB0YXNrJywgMSk7ICovXG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG5cbmZ1bmN0aW9uIHJlbmRlclNpdGUoKSB7XG4gICAgbG9hZFNpZGViYXIoKTtcbiAgICBkaXNwbGF5UHJvamVjdHMocHJvamVjdExpc3QucHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxufVxuXG52aWV3QWxsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvamVjdHNEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG59XG5cbmFkZENhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XG5cbnJlbmRlclNpdGUoKTtcblxubGV0IHRlc3RDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWxhYmVsJyk7XG50ZXN0Q2F0ZWdvcnkub25jbGljayA9ICgpID0+IHtcbiAgICBkaXNwbGF5Q2F0ZWdvcnkoJ1RFU1QnKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==