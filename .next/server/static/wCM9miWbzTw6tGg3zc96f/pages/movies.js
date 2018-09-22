module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.js




var Header_Header = function Header() {
  return external_react_default.a.createElement("div", {
    className: "jsx-480275872"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "jsx-480275872"
  }, "Home")), external_react_default.a.createElement(link_default.a, {
    href: "/movies"
  }, external_react_default.a.createElement("a", {
    className: "jsx-480275872"
  }, "Movies")), external_react_default.a.createElement(style_default.a, {
    styleId: "480275872",
    css: ["a.jsx-480275872{padding:15px;}"]
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Layout.js




var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-3599161385" + " " + "layout"
  }, external_react_default.a.createElement(components_Header, null), props.children, external_react_default.a.createElement(style_default.a, {
    styleId: "3599161385",
    css: [".layout.jsx-3599161385{margin:20px;padding:20px;border:1px solid #DDD;}"]
  }));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(3);

// EXTERNAL MODULE: external "next-apollo"
var external_next_apollo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Apollo.js


var config = {
  link: new external_apollo_link_http_["HttpLink"]({
    uri: 'https://movie-database-graphql.herokuapp.com/graphql'
  })
};
/* harmony default export */ var Apollo = (Object(external_next_apollo_["withData"])(config));
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(6);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(7);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./pages/movies.js



function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n    movies(query: \"Star Wars\") {\n        id\n        title\n        overview,\n        poster_path\n    }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function MovieList(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      movies = _ref$data.movies;
  return external_react_default.a.createElement("div", {
    className: "jsx-2674565175"
  }, movies.map(function (movie) {
    return external_react_default.a.createElement("div", {
      className: "jsx-2674565175" + " " + "flex"
    }, external_react_default.a.createElement("div", {
      className: "jsx-2674565175"
    }, external_react_default.a.createElement("img", {
      src: "https://image.tmdb.org/t/p/w200".concat(movie.poster_path),
      className: "jsx-2674565175"
    })), external_react_default.a.createElement("div", {
      className: "jsx-2674565175"
    }, external_react_default.a.createElement("h2", {
      className: "jsx-2674565175"
    }, movie.title), external_react_default.a.createElement("p", {
      className: "jsx-2674565175"
    }, movie.overview)));
  }), external_react_default.a.createElement(style_default.a, {
    styleId: "2674565175",
    css: [".flex.jsx-2674565175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "img.jsx-2674565175{margin:10px;}"]
  }));
}

var starWars = external_graphql_tag_default()(_templateObject());
var Movies = Object(external_react_apollo_["graphql"])(starWars, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data
    };
  }
})(MovieList);
/* harmony default export */ var pages_movies = __webpack_exports__["default"] = (Apollo(function () {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(Movies, null));
}));

/***/ })
/******/ ]);