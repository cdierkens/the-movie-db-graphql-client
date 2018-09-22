webpackHotUpdate("static/development/pages/team.js",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Apollo */ "./components/Apollo.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/christopherdierkens/Projects/rocket-league-rlcs/pages/team.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n    movies(query: \"Star Wars\") {\n        id\n        title\n        overview,\n        poster_path\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function TeamList(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      movies = _ref$data.movies;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-226856546",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, movies.map(function (movie) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-226856546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-226856546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.tmdb.org/t/p/w200".concat(movie.poster_path),
      className: "jsx-226856546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-226856546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-226856546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, movie.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-226856546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, movie.overview)));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "226856546",
    css: "div.jsx-226856546 div.jsx-226856546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmRpZXJrZW5zL1Byb2plY3RzL3JvY2tldC1sZWFndWUtcmxjcy9wYWdlcy90ZWFtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cd0IsQUFHa0MsMEVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9jaHJpc3RvcGhlcmRpZXJrZW5zL1Byb2plY3RzL3JvY2tldC1sZWFndWUtcmxjcy9wYWdlcy90ZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb21wb25lbnRzL0Fwb2xsbydcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuXG5mdW5jdGlvbiBUZWFtTGlzdCh7IGRhdGE6IHsgZXJyb3IsIG1vdmllcyB9fSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bW92aWVzLm1hcChtb3ZpZSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzIwMCR7bW92aWUucG9zdGVyX3BhdGh9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21vdmllLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bW92aWUub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGRpdiBkaXYge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbmNvbnN0IGFsbFRlYW1zID0gZ3FsYHtcbiAgICBtb3ZpZXMocXVlcnk6IFwiU3RhciBXYXJzXCIpIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgb3ZlcnZpZXcsXG4gICAgICAgIHBvc3Rlcl9wYXRoXG4gICAgfVxufVxuYFxuXG5jb25zdCBUZWFtcyA9IGdyYXBocWwoYWxsVGVhbXMsIHtcbiAgICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgICAgZGF0YSxcbiAgICB9KVxuICB9KShUZWFtTGlzdClcbiAgXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICA8VGVhbXM+PC9UZWFtcz5cbiAgICA8L0xheW91dD5cbikpIl19 */\n/*@ sourceURL=/Users/christopherdierkens/Projects/rocket-league-rlcs/pages/team.js */",
    __self: this
  }));
}

var allTeams = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var Teams = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(allTeams, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data
    };
  }
})(TeamList);
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Apollo__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Teams, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
}));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/team")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=team.js.d9e2ba4d0ce701a30e28.hot-update.js.map