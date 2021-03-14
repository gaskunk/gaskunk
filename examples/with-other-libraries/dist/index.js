function doGet() {
}/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doGet\": () => (/* binding */ doGet)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"../../node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/ja */ \"../../node_modules/dayjs/locale/ja.js\");\n/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().locale('ja');\nfunction doGet() {\n  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY/MM/DD');\n  return ContentService.createTextOutput(JSON.stringify(date)).setMimeType(ContentService.MimeType.JSON);\n}\n\n//# sourceURL=webpack://with-other-libraries/./src/events.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.ts\");\n/**\n * @see https://www.ykicchan.dev/posts/2020-07-12\n */\n\n__webpack_require__.g.doGet = _events__WEBPACK_IMPORTED_MODULE_0__.doGet;\n\n//# sourceURL=webpack://with-other-libraries/./src/index.ts?");

/***/ }),

/***/ "../../node_modules/dayjs/dayjs.min.js":
/*!*********************************************!*\
  !*** ../../node_modules/dayjs/dayjs.min.js ***!
  \*********************************************/
/***/ (function(module) {

eval("!function (t, e) {\n   true ? module.exports = e() : 0;\n}(this, function () {\n  \"use strict\";\n\n  var t = \"millisecond\",\n      e = \"second\",\n      n = \"minute\",\n      r = \"hour\",\n      i = \"day\",\n      s = \"week\",\n      u = \"month\",\n      a = \"quarter\",\n      o = \"year\",\n      f = \"date\",\n      h = /^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[^0-9]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,\n      c = /\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,\n      d = {\n    name: \"en\",\n    weekdays: \"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),\n    months: \"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")\n  },\n      $ = function (t, e, n) {\n    var r = String(t);\n    return !r || r.length >= e ? t : \"\" + Array(e + 1 - r.length).join(n) + t;\n  },\n      l = {\n    s: $,\n    z: function (t) {\n      var e = -t.utcOffset(),\n          n = Math.abs(e),\n          r = Math.floor(n / 60),\n          i = n % 60;\n      return (e <= 0 ? \"+\" : \"-\") + $(r, 2, \"0\") + \":\" + $(i, 2, \"0\");\n    },\n    m: function t(e, n) {\n      if (e.date() < n.date()) return -t(n, e);\n      var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),\n          i = e.clone().add(r, u),\n          s = n - i < 0,\n          a = e.clone().add(r + (s ? -1 : 1), u);\n      return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);\n    },\n    a: function (t) {\n      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);\n    },\n    p: function (h) {\n      return {\n        M: u,\n        y: o,\n        w: s,\n        d: i,\n        D: f,\n        h: r,\n        m: n,\n        s: e,\n        ms: t,\n        Q: a\n      }[h] || String(h || \"\").toLowerCase().replace(/s$/, \"\");\n    },\n    u: function (t) {\n      return void 0 === t;\n    }\n  },\n      y = \"en\",\n      M = {};\n\n  M[y] = d;\n\n  var m = function (t) {\n    return t instanceof S;\n  },\n      D = function (t, e, n) {\n    var r;\n    if (!t) return y;\n    if (\"string\" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);else {\n      var i = t.name;\n      M[i] = t, r = i;\n    }\n    return !n && r && (y = r), r || !n && y;\n  },\n      v = function (t, e) {\n    if (m(t)) return t.clone();\n    var n = \"object\" == typeof e ? e : {};\n    return n.date = t, n.args = arguments, new S(n);\n  },\n      g = l;\n\n  g.l = D, g.i = m, g.w = function (t, e) {\n    return v(t, {\n      locale: e.$L,\n      utc: e.$u,\n      x: e.$x,\n      $offset: e.$offset\n    });\n  };\n\n  var S = function () {\n    function d(t) {\n      this.$L = D(t.locale, null, !0), this.parse(t);\n    }\n\n    var $ = d.prototype;\n    return $.parse = function (t) {\n      this.$d = function (t) {\n        var e = t.date,\n            n = t.utc;\n        if (null === e) return new Date(NaN);\n        if (g.u(e)) return new Date();\n        if (e instanceof Date) return new Date(e);\n\n        if (\"string\" == typeof e && !/Z$/i.test(e)) {\n          var r = e.match(h);\n\n          if (r) {\n            var i = r[2] - 1 || 0,\n                s = (r[7] || \"0\").substring(0, 3);\n            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);\n          }\n        }\n\n        return new Date(e);\n      }(t), this.$x = t.x || {}, this.init();\n    }, $.init = function () {\n      var t = this.$d;\n      this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();\n    }, $.$utils = function () {\n      return g;\n    }, $.isValid = function () {\n      return !(\"Invalid Date\" === this.$d.toString());\n    }, $.isSame = function (t, e) {\n      var n = v(t);\n      return this.startOf(e) <= n && n <= this.endOf(e);\n    }, $.isAfter = function (t, e) {\n      return v(t) < this.startOf(e);\n    }, $.isBefore = function (t, e) {\n      return this.endOf(e) < v(t);\n    }, $.$g = function (t, e, n) {\n      return g.u(t) ? this[e] : this.set(n, t);\n    }, $.unix = function () {\n      return Math.floor(this.valueOf() / 1e3);\n    }, $.valueOf = function () {\n      return this.$d.getTime();\n    }, $.startOf = function (t, a) {\n      var h = this,\n          c = !!g.u(a) || a,\n          d = g.p(t),\n          $ = function (t, e) {\n        var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);\n        return c ? n : n.endOf(i);\n      },\n          l = function (t, e) {\n        return g.w(h.toDate()[t].apply(h.toDate(\"s\"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);\n      },\n          y = this.$W,\n          M = this.$M,\n          m = this.$D,\n          D = \"set\" + (this.$u ? \"UTC\" : \"\");\n\n      switch (d) {\n        case o:\n          return c ? $(1, 0) : $(31, 11);\n\n        case u:\n          return c ? $(1, M) : $(0, M + 1);\n\n        case s:\n          var v = this.$locale().weekStart || 0,\n              S = (y < v ? y + 7 : y) - v;\n          return $(c ? m - S : m + (6 - S), M);\n\n        case i:\n        case f:\n          return l(D + \"Hours\", 0);\n\n        case r:\n          return l(D + \"Minutes\", 1);\n\n        case n:\n          return l(D + \"Seconds\", 2);\n\n        case e:\n          return l(D + \"Milliseconds\", 3);\n\n        default:\n          return this.clone();\n      }\n    }, $.endOf = function (t) {\n      return this.startOf(t, !1);\n    }, $.$set = function (s, a) {\n      var h,\n          c = g.p(s),\n          d = \"set\" + (this.$u ? \"UTC\" : \"\"),\n          $ = (h = {}, h[i] = d + \"Date\", h[f] = d + \"Date\", h[u] = d + \"Month\", h[o] = d + \"FullYear\", h[r] = d + \"Hours\", h[n] = d + \"Minutes\", h[e] = d + \"Seconds\", h[t] = d + \"Milliseconds\", h)[c],\n          l = c === i ? this.$D + (a - this.$W) : a;\n\n      if (c === u || c === o) {\n        var y = this.clone().set(f, 1);\n        y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d;\n      } else $ && this.$d[$](l);\n\n      return this.init(), this;\n    }, $.set = function (t, e) {\n      return this.clone().$set(t, e);\n    }, $.get = function (t) {\n      return this[g.p(t)]();\n    }, $.add = function (t, a) {\n      var f,\n          h = this;\n      t = Number(t);\n\n      var c = g.p(a),\n          d = function (e) {\n        var n = v(h);\n        return g.w(n.date(n.date() + Math.round(e * t)), h);\n      };\n\n      if (c === u) return this.set(u, this.$M + t);\n      if (c === o) return this.set(o, this.$y + t);\n      if (c === i) return d(1);\n      if (c === s) return d(7);\n      var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,\n          l = this.$d.getTime() + t * $;\n      return g.w(l, this);\n    }, $.subtract = function (t, e) {\n      return this.add(-1 * t, e);\n    }, $.format = function (t) {\n      var e = this;\n      if (!this.isValid()) return \"Invalid Date\";\n\n      var n = t || \"YYYY-MM-DDTHH:mm:ssZ\",\n          r = g.z(this),\n          i = this.$locale(),\n          s = this.$H,\n          u = this.$m,\n          a = this.$M,\n          o = i.weekdays,\n          f = i.months,\n          h = function (t, r, i, s) {\n        return t && (t[r] || t(e, n)) || i[r].substr(0, s);\n      },\n          d = function (t) {\n        return g.s(s % 12 || 12, t, \"0\");\n      },\n          $ = i.meridiem || function (t, e, n) {\n        var r = t < 12 ? \"AM\" : \"PM\";\n        return n ? r.toLowerCase() : r;\n      },\n          l = {\n        YY: String(this.$y).slice(-2),\n        YYYY: this.$y,\n        M: a + 1,\n        MM: g.s(a + 1, 2, \"0\"),\n        MMM: h(i.monthsShort, a, f, 3),\n        MMMM: h(f, a),\n        D: this.$D,\n        DD: g.s(this.$D, 2, \"0\"),\n        d: String(this.$W),\n        dd: h(i.weekdaysMin, this.$W, o, 2),\n        ddd: h(i.weekdaysShort, this.$W, o, 3),\n        dddd: o[this.$W],\n        H: String(s),\n        HH: g.s(s, 2, \"0\"),\n        h: d(1),\n        hh: d(2),\n        a: $(s, u, !0),\n        A: $(s, u, !1),\n        m: String(u),\n        mm: g.s(u, 2, \"0\"),\n        s: String(this.$s),\n        ss: g.s(this.$s, 2, \"0\"),\n        SSS: g.s(this.$ms, 3, \"0\"),\n        Z: r\n      };\n\n      return n.replace(c, function (t, e) {\n        return e || l[t] || r.replace(\":\", \"\");\n      });\n    }, $.utcOffset = function () {\n      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);\n    }, $.diff = function (t, f, h) {\n      var c,\n          d = g.p(f),\n          $ = v(t),\n          l = 6e4 * ($.utcOffset() - this.utcOffset()),\n          y = this - $,\n          M = g.m(this, $);\n      return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M);\n    }, $.daysInMonth = function () {\n      return this.endOf(u).$D;\n    }, $.$locale = function () {\n      return M[this.$L];\n    }, $.locale = function (t, e) {\n      if (!t) return this.$L;\n      var n = this.clone(),\n          r = D(t, e, !0);\n      return r && (n.$L = r), n;\n    }, $.clone = function () {\n      return g.w(this.$d, this);\n    }, $.toDate = function () {\n      return new Date(this.valueOf());\n    }, $.toJSON = function () {\n      return this.isValid() ? this.toISOString() : null;\n    }, $.toISOString = function () {\n      return this.$d.toISOString();\n    }, $.toString = function () {\n      return this.$d.toUTCString();\n    }, d;\n  }(),\n      p = S.prototype;\n\n  return v.prototype = p, [[\"$ms\", t], [\"$s\", e], [\"$m\", n], [\"$H\", r], [\"$W\", i], [\"$M\", u], [\"$y\", o], [\"$D\", f]].forEach(function (t) {\n    p[t[1]] = function (e) {\n      return this.$g(e, t[0], t[1]);\n    };\n  }), v.extend = function (t, e) {\n    return t.$i || (t(e, S, v), t.$i = !0), v;\n  }, v.locale = D, v.isDayjs = m, v.unix = function (t) {\n    return v(1e3 * t);\n  }, v.en = M[y], v.Ls = M, v.p = {}, v;\n});\n\n//# sourceURL=webpack://with-other-libraries/../../node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "../../node_modules/dayjs/locale/ja.js":
/*!*********************************************!*\
  !*** ../../node_modules/dayjs/locale/ja.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("!function (_, e) {\n   true ? module.exports = e(__webpack_require__(/*! dayjs */ \"../../node_modules/dayjs/dayjs.min.js\")) : 0;\n}(this, function (_) {\n  \"use strict\";\n\n  _ = _ && _.hasOwnProperty(\"default\") ? _.default : _;\n  var e = {\n    name: \"ja\",\n    weekdays: \"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日\".split(\"_\"),\n    weekdaysShort: \"日_月_火_水_木_金_土\".split(\"_\"),\n    weekdaysMin: \"日_月_火_水_木_金_土\".split(\"_\"),\n    months: \"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月\".split(\"_\"),\n    monthsShort: \"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月\".split(\"_\"),\n    ordinal: function (_) {\n      return _ + \"日\";\n    },\n    formats: {\n      LT: \"HH:mm\",\n      LTS: \"HH:mm:ss\",\n      L: \"YYYY/MM/DD\",\n      LL: \"YYYY年M月D日\",\n      LLL: \"YYYY年M月D日 HH:mm\",\n      LLLL: \"YYYY年M月D日 dddd HH:mm\",\n      l: \"YYYY/MM/DD\",\n      ll: \"YYYY年M月D日\",\n      lll: \"YYYY年M月D日 HH:mm\",\n      llll: \"YYYY年M月D日(ddd) HH:mm\"\n    },\n    meridiem: function (_) {\n      return _ < 12 ? \"午前\" : \"午後\";\n    },\n    relativeTime: {\n      future: \"%s後\",\n      past: \"%s前\",\n      s: \"数秒\",\n      m: \"1分\",\n      mm: \"%d分\",\n      h: \"1時間\",\n      hh: \"%d時間\",\n      d: \"1日\",\n      dd: \"%d日\",\n      M: \"1ヶ月\",\n      MM: \"%dヶ月\",\n      y: \"1年\",\n      yy: \"%d年\"\n    }\n  };\n  return _.locale(e, null, !0), e;\n});\n\n//# sourceURL=webpack://with-other-libraries/../../node_modules/dayjs/locale/ja.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;