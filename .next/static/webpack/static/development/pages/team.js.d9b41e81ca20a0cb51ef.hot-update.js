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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2674565175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, movies.map(function (movie) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2674565175" + " " + "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2674565175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://image.tmdb.org/t/p/w200".concat(movie.poster_path),
      className: "jsx-2674565175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2674565175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2674565175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, movie.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2674565175",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, movie.overview)));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2674565175",
    css: ".flex.jsx-2674565175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-2674565175{margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmRpZXJrZW5zL1Byb2plY3RzL3JvY2tldC1sZWFndWUtcmxjcy9wYWdlcy90ZWFtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cd0IsQUFHa0MsQUFJRCxZQUNoQiw4REFKQSIsImZpbGUiOiIvVXNlcnMvY2hyaXN0b3BoZXJkaWVya2Vucy9Qcm9qZWN0cy9yb2NrZXQtbGVhZ3VlLXJsY3MvcGFnZXMvdGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9BcG9sbG8nXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcblxuZnVuY3Rpb24gTW92aWVMaXN0KHsgZGF0YTogeyBlcnJvciwgbW92aWVzIH19KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHttb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzIwMCR7bW92aWUucG9zdGVyX3BhdGh9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21vdmllLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bW92aWUub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0YXJXYXJzID0gZ3FsYHtcbiAgICBtb3ZpZXMocXVlcnk6IFwiU3RhciBXYXJzXCIpIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgb3ZlcnZpZXcsXG4gICAgICAgIHBvc3Rlcl9wYXRoXG4gICAgfVxufWBcblxuY29uc3QgTW92aWVzID0gZ3JhcGhxbChzdGFyV2Fycywge1xuICAgIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgICBkYXRhLFxuICAgIH0pXG4gIH0pKE1vdmllTGlzdClcbiAgXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICA8TW92aWVzPjwvTW92aWVzPlxuICAgIDwvTGF5b3V0PlxuKSkiXX0= */\n/*@ sourceURL=/Users/christopherdierkens/Projects/rocket-league-rlcs/pages/team.js */",
    __self: this
  }));
}

var starWars = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var Movies = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(starWars, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data
    };
  }
})(MovieList);
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Apollo__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Movies, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
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
//# sourceMappingURL=team.js.d9b41e81ca20a0cb51ef.hot-update.js.map