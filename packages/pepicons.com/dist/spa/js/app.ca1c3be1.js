/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"0":"component","3":"component-source-code"}[chunkId]||chunkId) + "." + {"0":"68874db8","3":"f67bebbf","4":"86bf019f","5":"c7bab971","6":"0ef97041","7":"fb26e397","8":"f8d9a79d","9":"2592a771","10":"c7954de3","11":"24240df4","12":"14846d77","13":"d8779964","14":"6a3234a3","15":"7b01ea98","16":"9171c931","17":"bb8722a9","18":"79479d31","19":"cda79dda","20":"533be827","21":"fb197c76","22":"c50bf93f","23":"a9da6819","24":"b5efeec0","25":"39285d38","26":"296df96f","27":"6e38331a","28":"8a8a9ab2"}[chunkId] + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"0":"component","3":"component-source-code"}[chunkId]||chunkId) + "." + {"0":"d8d661fd","3":"31d6cfe0","4":"31d6cfe0","5":"31d6cfe0","6":"31d6cfe0","7":"31d6cfe0","8":"31d6cfe0","9":"31d6cfe0","10":"31d6cfe0","11":"31d6cfe0","12":"31d6cfe0","13":"31d6cfe0","14":"31d6cfe0","15":"31d6cfe0","16":"31d6cfe0","17":"31d6cfe0","18":"31d6cfe0","19":"31d6cfe0","20":"31d6cfe0","21":"31d6cfe0","22":"31d6cfe0","23":"31d6cfe0","24":"31d6cfe0","25":"31d6cfe0","26":"31d6cfe0","27":"31d6cfe0","28":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0047":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0716":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "09a7":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/pep-header.js": "0a40"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/* lazy-once context | component-source-code */ 3).then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "09a7";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "0d54":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.vue": "3dfd",
	"./components/_Example.vue": "4d7f",
	"./components/_Template.vue": "df63",
	"./components/atoms/ColorRingSvg.vue": "2027",
	"./components/atoms/CompanyLogo.vue": "531f",
	"./components/atoms/HtmlButton.vue": "8264",
	"./components/atoms/IconButton.vue": "558f",
	"./components/atoms/IconTile.vue": "aa2d",
	"./components/atoms/PepHeaderDecoration.vue": "07e4",
	"./components/atoms/PepHeaderDecorationLight.vue": "b437",
	"./components/atoms/PepHero.vue": "136e",
	"./components/atoms/PepInput.vue": "5aa0",
	"./components/atoms/PepLink.vue": "7064",
	"./components/atoms/ProfileCard.vue": "038f",
	"./components/atoms/Stack.vue": "9238",
	"./components/dialogs/DialogWrapper.vue": "b1ac",
	"./components/molecules/IconExpose.vue": "7e74",
	"./components/molecules/IconGrid.vue": "1b0f",
	"./components/molecules/IconInfo.vue": "9ff1",
	"./components/molecules/Picker.vue": "63ba",
	"./components/molecules/Pickers.vue": "ef11",
	"./layouts/MainLayout.vue": "713b",
	"./pages/Dev.vue": "fe22",
	"./pages/Error404.vue": "e51e",
	"./pages/LandingPage.vue": "7896"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	return Promise.all(/* lazy-once context | component */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "0d54";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "0e5e":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "0e5e";

/***/ }),

/***/ "2027":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/ColorRingSvg.vue?vue&type=template&id=ccf6d60a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"260","height":"260","viewBox":"0 0 260 260"}},[_c('defs',[_c('linearGradient',{attrs:{"id":"colorring-a","x1":"0%","x2":"82.077%","y1":"33.333%","y2":"70.311%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#01E400"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#FEFF01"}})],1),_c('linearGradient',{attrs:{"id":"colorring-b","x1":"-119.339%","x2":"-119.339%","y1":"7.034%","y2":"90.018%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#FEFF01"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#FF7E00"}})],1),_c('linearGradient',{attrs:{"id":"colorring-c","x1":"81.646%","x2":"0%","y1":"26.396%","y2":"55.787%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#FF7E00"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#FB0300"}})],1),_c('linearGradient',{attrs:{"id":"colorring-d","x1":"100%","x2":"19.805%","y1":"56.141%","y2":"28.17%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#FB0300"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#9B004A"}})],1),_c('linearGradient',{attrs:{"id":"colorring-e","x1":"194.094%","x2":"194.094%","y1":"92.549%","y2":"6.231%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#9B004A"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#00117D"}})],1),_c('linearGradient',{attrs:{"id":"colorring-f","x1":"15.092%","x2":"100%","y1":"70.888%","y2":"40.756%"}},[_c('stop',{attrs:{"offset":"0%","stop-color":"#00117D"}}),_c('stop',{attrs:{"offset":"100%","stop-color":"#01E400"}})],1)],1),_c('g',{attrs:{"fill":"none","fill-rule":"evenodd","stroke-width":"20","transform":"translate(10 10)"}},[_c('path',{attrs:{"stroke":"url(#colorring-a)","d":"M120 0c42.872 0 82.487 22.872 103.923 60"}}),_c('path',{attrs:{"stroke":"url(#colorring-b)","d":"M223.923 60c21.436 37.128 21.436 82.872 0 120"}}),_c('path',{attrs:{"stroke":"url(#colorring-c)","d":"M224 179.9c-21.493 37.19-61.214 60.1-104.2 60.1"}}),_c('path',{attrs:{"stroke":"url(#colorring-d)","d":"M120.077 240c-42.904 0-82.548-22.872-104-60"}}),_c('path',{attrs:{"stroke":"url(#colorring-e)","d":"M16.09 180.03a119.972 119.972 0 0 1 0-120.03"}}),_c('path',{attrs:{"stroke":"url(#colorring-f)","d":"M16 60.15C37.472 22.93 77.155 0 120.1 0"}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/ColorRingSvg.vue?vue&type=template&id=ccf6d60a&

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/babel-loader/lib??ref--2-0!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/ColorRingSvg.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ColorRingSvgvue_type_script_lang_js_ = ({
  name: 'ColorRingSvg'
});
// CONCATENATED MODULE: ./src/components/atoms/ColorRingSvg.vue?vue&type=script&lang=js&
 /* harmony default export */ var atoms_ColorRingSvgvue_type_script_lang_js_ = (ColorRingSvgvue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: ./src/components/atoms/ColorRingSvg.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_ColorRingSvgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ColorRingSvg = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("26d3");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("32f5");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("05e4");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("dc4e");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("1108");

// EXTERNAL MODULE: ./src/css/app.sass
var css_app = __webpack_require__("0047");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("9869");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("e9c4");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("cab8");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("c3cf");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/plugins/Dialog.js + 10 modules
var Dialog = __webpack_require__("1608");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["default"].use(vue_plugin["a" /* default */], {
  config: {},
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Dialog: Dialog["a" /* default */]
  }
});
// EXTERNAL MODULE: ./src/App.vue + 4 modules
var App = __webpack_require__("3dfd");

// EXTERNAL MODULE: ./src/router/index.ts + 1 modules
var src_router = __webpack_require__("afbc");

// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/




/* harmony default export */ var _quasar_app = (async function () {
  // create store and router instances
  const router = typeof src_router["b" /* default */] === 'function' ? await Object(src_router["b" /* default */])({
    Vue: vue_runtime_esm["default"]
  }) : src_router["b" /* default */]; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    router,
    render: h => h(App["default"])
  };
  app.el = '#q-app'; // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    router
  };
});
// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@vue/composition-api/dist/vue-composition-api.umd.js
var vue_composition_api_umd = __webpack_require__("c465");
var vue_composition_api_umd_default = /*#__PURE__*/__webpack_require__.n(vue_composition_api_umd);

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/wrappers/index.js
var wrappers = __webpack_require__("56b5");

// EXTERNAL MODULE: ./src/components/molecules/IconInfo.vue + 6 modules
var IconInfo = __webpack_require__("9ff1");

// EXTERNAL MODULE: ./src/components/dialogs/DialogWrapper.vue + 4 modules
var DialogWrapper = __webpack_require__("b1ac");

// CONCATENATED MODULE: ./src/boot/composition-api.ts




/* harmony default export */ var composition_api = (Object(wrappers["boot"])(({ Vue }) => {
    Vue.use(vue_composition_api_umd_default.a);
    Vue.component(IconInfo["default"].name, IconInfo["default"]);
    Vue.component(DialogWrapper["default"].name, DialogWrapper["default"]);
}));

// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

 // We load Quasar stylesheet file






vue_runtime_esm["default"].config.devtools = true;
vue_runtime_esm["default"].config.productionTip = false;
const publicPath = `/`;

async function start() {
  const {
    app,
    router
  } = await _quasar_app();
  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [composition_api];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      await bootFiles[i]({
        app,
        router,
        Vue: vue_runtime_esm["default"],
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  new vue_runtime_esm["default"](app);
}

start();

/***/ }),

/***/ "2fb7":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.template.html": "95ba"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/* lazy-once context | component-source-code */ 3).then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "2fb7";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "3dfd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=16972947&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=16972947&

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/ts-loader??ref--3-0!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&
/* harmony default export */ var Appvue_type_script_lang_ts_ = ({
    name: 'App',
});

// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3f2c":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "3f2c";

/***/ }),

/***/ "441f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f177");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "453f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_HtmlButton_vue_vue_type_style_index_0_id_04bd43a4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c12");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_HtmlButton_vue_vue_type_style_index_0_id_04bd43a4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_HtmlButton_vue_vue_type_style_index_0_id_04bd43a4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4911":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "4911";

/***/ }),

/***/ "51a1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "558f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/IconButton.vue?vue&type=template&id=5cd57634&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:("icon-button reset-button " + (_vm.isActive ? '_active' : '')),style:(("background: " + _vm.backgroundColor + "; " + _vm.activeStyle)),on:{"click":_vm.click}},[(_vm.hasColorRing)?_c('ColorRingSvg',{staticClass:"_inner"}):_vm._e(),_c('div',{staticClass:"_inner flex flex-center"},[(_vm.iconConfig && _vm.iconConfig.name)?_c('Pepicon',{class:("_icon " + (_vm.isAnimating ? _vm.animationClass : '')),attrs:{"name":_vm.iconConfig.name,"type":_vm.iconConfig.type,"color":_vm.iconConfig.color,"stroke":_vm.iconConfig.stroke,"size":"md"}}):_vm._e()],1),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/IconButton.vue?vue&type=template&id=5cd57634&

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-pepicons/src/index.js + 5 modules
var src = __webpack_require__("1ad6");

// EXTERNAL MODULE: ./src/components/atoms/ColorRingSvg.vue + 4 modules
var ColorRingSvg = __webpack_require__("2027");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@vue/composition-api/dist/vue-composition-api.umd.js
var vue_composition_api_umd = __webpack_require__("c465");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__("134d");

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__("a76d");

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/ts-loader??ref--3-0!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/IconButton.vue?vue&type=script&lang=ts&



;

const { changeAlpha } = colors["a" /* default */];
/* harmony default export */ var IconButtonvue_type_script_lang_ts_ = (Object(vue_composition_api_umd["defineComponent"])({
    name: 'IconButton',
    components: { ColorRingSvg: ColorRingSvg["default"], Pepicon: src["a" /* Pepicon */] },
    props: {
        backgroundColor: { type: String, default: 'white' },
        /**
         * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
         */
        iconConfig: {
            type: Object,
            default: () => (Object.assign({}, Object(types["a" /* defaultsIconConfig */])())),
        },
        isActive: { type: Boolean },
        /**
         * The active color is always shown as 50% opaque.
         * The color applied will be `activeColor` || `iconConfig.color` || `backgroundColor`
         */
        activeColor: { type: String },
        hasColorRing: { type: Boolean, default: false },
        /**
         * The animation class to be applied on click.
         */
        animationClass: { type: String },
        /**
         * The duration of the animation on click - needs 'animationClass' set as well to work.
         */
        animationDurationMs: { type: Number, default: 500 },
    },
    setup(props, { emit }) {
        const activeStyle = Object(vue_composition_api_umd["computed"])(() => {
            var _a;
            if (!props.isActive)
                return '';
            const activeColor = props.activeColor || ((_a = props.iconConfig) === null || _a === void 0 ? void 0 : _a.color) || props.backgroundColor;
            return `box-shadow: 0 0 0 3px ${changeAlpha(activeColor, 0.5)}`;
        });
        const isAnimating = Object(vue_composition_api_umd["ref"])(false);
        function click() {
            isAnimating.value = true;
            setTimeout(() => (isAnimating.value = false), props.animationDurationMs);
            emit('click');
        }
        return { activeStyle, click, isAnimating };
    },
}));

// CONCATENATED MODULE: ./src/components/atoms/IconButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var atoms_IconButtonvue_type_script_lang_ts_ = (IconButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/atoms/IconButton.vue?vue&type=style&index=0&lang=sass&
var IconButtonvue_type_style_index_0_lang_sass_ = __webpack_require__("441f");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: ./src/components/atoms/IconButton.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_IconButtonvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5c12":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "62d0":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.vue": "e20f",
	"./components/_Example.vue": "d09f",
	"./components/_Template.vue": "7309",
	"./components/atoms/ColorRingSvg.vue": "69e7",
	"./components/atoms/CompanyLogo.vue": "5fd8",
	"./components/atoms/HtmlButton.vue": "1564",
	"./components/atoms/IconButton.vue": "fa97",
	"./components/atoms/IconTile.vue": "fb21",
	"./components/atoms/PepHeaderDecoration.vue": "a73f",
	"./components/atoms/PepHeaderDecorationLight.vue": "79e8",
	"./components/atoms/PepHero.vue": "1324",
	"./components/atoms/PepInput.vue": "a0bd",
	"./components/atoms/PepLink.vue": "e126",
	"./components/atoms/ProfileCard.vue": "b8bc",
	"./components/atoms/Stack.vue": "f463",
	"./components/dialogs/DialogWrapper.vue": "3b81",
	"./components/molecules/IconExpose.vue": "5f7c",
	"./components/molecules/IconGrid.vue": "42c1",
	"./components/molecules/IconInfo.vue": "362b",
	"./components/molecules/Picker.vue": "b7ca",
	"./components/molecules/Pickers.vue": "8f80",
	"./layouts/MainLayout.vue": "8ec6",
	"./pages/Dev.vue": "d90f",
	"./pages/Error404.vue": "b64f",
	"./pages/LandingPage.vue": "6180"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/* lazy-once context | component-source-code */ 3).then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "62d0";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "69a8";

/***/ }),

/***/ "8264":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/HtmlButton.vue?vue&type=template&id=04bd43a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:("html-button " + (_vm.value ? '_expanded' : '')),on:{"click":_vm.toggle}},[_c('Pepicon',{staticClass:"_icon",attrs:{"name":"angle-left","type":_vm.type,"color":_vm.color,"stroke":_vm.stroke}}),_c('Pepicon',{staticClass:"_icon",attrs:{"name":"angle-right","type":_vm.type,"color":_vm.color,"stroke":_vm.stroke}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/HtmlButton.vue?vue&type=template&id=04bd43a4&scoped=true&

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-pepicons/src/index.js + 5 modules
var src = __webpack_require__("1ad6");

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/babel-loader/lib??ref--2-0!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/HtmlButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HtmlButtonvue_type_script_lang_js_ = ({
  name: 'HtmlButton',
  components: {
    Pepicon: src["a" /* Pepicon */]
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: String,
    color: String,
    stroke: String
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/atoms/HtmlButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var atoms_HtmlButtonvue_type_script_lang_js_ = (HtmlButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/HtmlButton.vue?vue&type=style&index=0&id=04bd43a4&lang=sass&scoped=true&
var HtmlButtonvue_type_style_index_0_id_04bd43a4_lang_sass_scoped_true_ = __webpack_require__("453f");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: ./src/components/atoms/HtmlButton.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_HtmlButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "04bd43a4",
  null
  
)

/* harmony default export */ var HtmlButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "85c8":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "85c8";

/***/ }),

/***/ "9890":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "9890";

/***/ }),

/***/ "9ff1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/IconInfo.vue?vue&type=template&id=768f3836&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-info"},[_c('HtmlButton',_vm._b({staticClass:"_toggle-code-button",model:{value:(_vm._.codeShown),callback:function ($$v) {_vm.$set(_vm._, "codeShown", $$v)},expression:"_.codeShown"}},'HtmlButton',_vm.config,false)),_c('div',{staticClass:"_code-section"},[_c('div',{staticClass:"flex"},[_c('q-tabs',{attrs:{"dense":"","shrink":"","narrowIndicator":"","noCaps":"","align":"left","indicatorColor":"primary","content-class":"text-h6"},model:{value:(_vm._.openCodeTab),callback:function ($$v) {_vm.$set(_vm._, "openCodeTab", $$v)},expression:"_.openCodeTab"}},[_c('q-tab',{attrs:{"contentClass":"_tab","ripple":false,"name":"vue","label":"Vue"}}),_c('q-tab',{attrs:{"contentClass":"_tab","ripple":false,"name":"svg","label":"SVG"}})],1)],1),_c('q-tab-panels',{staticClass:"_tab-panels",attrs:{"animated":""},model:{value:(_vm._.openCodeTab),callback:function ($$v) {_vm.$set(_vm._, "openCodeTab", $$v)},expression:"_.openCodeTab"}},[_c('q-tab-panel',{staticClass:"_tab-panel",attrs:{"name":"vue"}},[_c('CodeBlock',{staticClass:"_code-block",attrs:{"lang":"html","content":_vm.codeVue}})],1),_c('q-tab-panel',{staticClass:"_tab-panel",attrs:{"name":"svg"}},[_c('CodeBlock',{staticClass:"_code-block",attrs:{"lang":"html","content":_vm.codeSvg}})],1)],1)],1),_c('div',{staticClass:"_top-door",class:{ '_top-door-transform': _vm._.codeShown }},[_c('Pepicon',_vm._b({attrs:{"size":"80px"}},'Pepicon',_vm.config,false)),_c('div',{staticClass:"text-h5 mt-xl"},[_vm._v(_vm._s(_vm.config.name))])],1),_c('div',{staticClass:"_bottom-door text-h6 px-xl",class:{ '_bottom-door-transform': _vm._.codeShown }},[_c('div',{staticClass:"flex-center relative"},[_c('div',[_vm._v("SVG")]),_c('div',{staticClass:"flex q-gutter-sm mt-xs"},[_c('IconButton',{attrs:{"iconConfig":Object.assign({}, _vm.configOptionButtons,
            {name: 'cloud-down'}),"isActive":_vm._.downloadSvgDone},on:{"click":_vm.downloadSvg}}),_c('IconButton',{attrs:{"iconConfig":Object.assign({}, _vm.configOptionButtons,
            {name: 'clipboard'}),"isActive":_vm._.copySvgDone},on:{"click":_vm.copySvg}})],1)]),_c('div',{staticClass:"flex-center"},[_c('div',[_vm._v("PNG")]),_c('div',{staticClass:"flex q-gutter-sm mt-xs"},[_c('IconButton',{attrs:{"iconConfig":Object.assign({}, _vm.configOptionButtons,
            {name: 'cloud-down'}),"isActive":_vm._.downloadPngDone},on:{"click":_vm.downloadPng}}),_c('IconButton',{attrs:{"iconConfig":Object.assign({}, _vm.configOptionButtons,
            {name: 'clipboard'}),"isActive":_vm._.copyPngDone},on:{"click":_vm.copyPng}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/IconInfo.vue?vue&type=template&id=768f3836&

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@vue/composition-api/dist/vue-composition-api.umd.js
var vue_composition_api_umd = __webpack_require__("c465");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/pepicons/dist/index.esm.js
var index_esm = __webpack_require__("f284");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-pepicons/src/index.js + 5 modules
var src = __webpack_require__("1ad6");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/planetar/index.js + 80 modules
var planetar = __webpack_require__("3cf3");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/copy-text-to-clipboard/index.js
var copy_text_to_clipboard = __webpack_require__("1c35");

// EXTERNAL MODULE: ./src/components/atoms/IconButton.vue + 4 modules
var IconButton = __webpack_require__("558f");

// EXTERNAL MODULE: ./src/components/atoms/HtmlButton.vue + 4 modules
var HtmlButton = __webpack_require__("8264");

// CONCATENATED MODULE: ./src/helpers/download.ts
function downloadBase64AsFile(base64string, filename) {
    // IE10+
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(base64string, filename);
        return;
    }
    const a = document.createElement('a');
    a.href = base64string;
    a.download = filename;
    a.style.position = 'absolute';
    a.style.top = '-9999px';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
    }, 1);
}
function downloadFile(data, filename, type = 'text/csv') {
    const file = new Blob([data], { type: type });
    // IE10+
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, filename);
        return;
    }
    const a = document.createElement('a');
    const url = URL.createObjectURL(file); // looks like `blob:https://...`
    a.href = url;
    a.download = filename;
    a.style.position = 'absolute';
    a.style.top = '-9999px';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 1);
}

// CONCATENATED MODULE: ./src/helpers/conversion.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getSvgUrl(svg) {
    return URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
}
function resizeCanvas(canvas, newWidth, newHeight) {
    const ctx = canvas.getContext('2d');
    const buffer = document.createElement('canvas');
    buffer.width = ctx.canvas.width;
    buffer.height = ctx.canvas.height;
    const ctxBuf = buffer.getContext('2d');
    if (!ctxBuf)
        throw new Error('no canvas found');
    let scaleX = newWidth / ctx.canvas.width;
    let scaleY = newHeight / ctx.canvas.height;
    let scaler = Math.min(scaleX, scaleY);
    //see if target scale is less than half...
    if (scaler < 0.5) {
        //while loop in case target scale is less than quarter...
        while (scaler < 0.5) {
            ctxBuf.canvas.width = ctxBuf.canvas.width * 0.5;
            ctxBuf.canvas.height = ctxBuf.canvas.height * 0.5;
            ctxBuf.scale(0.5, 0.5);
            ctxBuf.drawImage(canvas, 0, 0);
            ctxBuf.setTransform(1, 0, 0, 1, 0, 0);
            ctx.canvas.width = ctxBuf.canvas.width;
            ctx.canvas.height = ctxBuf.canvas.height;
            ctx.drawImage(buffer, 0, 0);
            scaleX = newWidth / ctxBuf.canvas.width;
            scaleY = newHeight / ctxBuf.canvas.height;
            scaler = Math.min(scaleX, scaleY);
        }
        //only if the scaler is now larger than half, double target scale trick...
        if (scaler > 0.5) {
            scaleX *= 2.0;
            scaleY *= 2.0;
            ctxBuf.canvas.width = ctxBuf.canvas.width * scaleX;
            ctxBuf.canvas.height = ctxBuf.canvas.height * scaleY;
            ctxBuf.scale(scaleX, scaleY);
            ctxBuf.drawImage(canvas, 0, 0);
            ctxBuf.setTransform(1, 0, 0, 1, 0, 0);
            scaleX = 0.5;
            scaleY = 0.5;
        }
    }
    else
        ctxBuf.drawImage(canvas, 0, 0);
    //wrapping things up...
    ctx.canvas.width = newWidth;
    ctx.canvas.height = newHeight;
    ctx.scale(scaleX, scaleY);
    ctx.drawImage(buffer, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function svgUrlToPng(svgUrl, renderWidth, renderHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const svgImage = document.createElement('img');
            svgImage.style.position = 'absolute';
            svgImage.style.top = '-9999px';
            document.body.appendChild(svgImage);
            svgImage.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = svgImage.clientWidth;
                canvas.height = svgImage.clientHeight;
                const canvasCtx = canvas.getContext('2d');
                if (!canvasCtx)
                    return reject();
                canvasCtx.drawImage(svgImage, 0, 0);
                if (renderWidth && renderHeight)
                    resizeCanvas(canvas, renderWidth, renderHeight);
                const imgData = canvas.toDataURL('image/png');
                resolve(imgData);
                document.body.removeChild(svgImage);
            };
            svgImage.src = svgUrl;
        });
    });
}
function svgToBase64Png(svg, renderWidth, renderHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = getSvgUrl(svg);
        const imgData = yield svgUrlToPng(url, renderWidth, renderHeight);
        URL.revokeObjectURL(url);
        return imgData;
    });
}
/**
 * Convert BASE64 to BLOB
 * @param base64Image Pass Base64 image data to convert into the BLOB
 */
function base64ToBlob(base64Image) {
    // Split into two parts
    const parts = base64Image.split(';base64,');
    // Hold the content type
    const imageType = parts[0].split(':')[1];
    // Decode Base64 string
    const decodedData = window.atob(parts[1]);
    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);
    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
        uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
}

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__("a76d");

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/ts-loader??ref--3-0!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/IconInfo.vue?vue&type=script&lang=ts&
var IconInfovue_type_script_lang_ts_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










function generateVueCode(iconName, config) {
    const _stroke = config.stroke && config.stroke !== 'black' ? `\n    stroke="${config.stroke}"` : '';
    return `<template>
  <Pepicon
    name="${iconName}"
    type="${config.type}"
    color="${config.color}"${_stroke}
  />
</template>

<script lang="js">
import { Pepicon } from 'vue-pepicons'

export default {
  components: { Pepicon }
}
<\/script>`;
}
/* harmony default export */ var IconInfovue_type_script_lang_ts_ = (Object(vue_composition_api_umd["defineComponent"])({
    name: 'IconInfo',
    components: { IconButton: IconButton["default"], HtmlButton: HtmlButton["default"], Pepicon: src["a" /* Pepicon */], CodeBlock: planetar["a" /* CodeBlock */] },
    props: {
        /**
         * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
         */
        config: {
            type: Object,
            default: () => (Object.assign({}, Object(types["a" /* defaultsIconConfig */])())),
        },
        /**
         * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
         */
        configOptionButtons: {
            type: Object,
            default: () => (Object.assign({}, Object(types["a" /* defaultsIconConfig */])())),
        },
    },
    setup(props) {
        const _ = Object(vue_composition_api_umd["reactive"])({
            openCodeTab: 'vue',
            codeShown: false,
            downloadSvgDone: false,
            copySvgDone: false,
            downloadPngDone: false,
            copyPngDone: false,
        });
        const codeSvg = Object(index_esm["c" /* pepiconSvgString */])(props.config);
        const codeVue = generateVueCode(props.config.name || '', props.config);
        function downloadSvg() {
            downloadFile(codeSvg, `${props.config.name}.svg`);
            _.downloadSvgDone = true;
        }
        function copySvg() {
            const copied = Object(copy_text_to_clipboard["a" /* default */])(codeSvg);
            _.copySvgDone = copied;
        }
        function downloadPng() {
            return IconInfovue_type_script_lang_ts_awaiter(this, void 0, void 0, function* () {
                const _codeSvg = Object(index_esm["c" /* pepiconSvgString */])(Object.assign(Object.assign({}, props.config), { size: '48px' }));
                const pngString = yield svgToBase64Png(_codeSvg);
                downloadBase64AsFile(pngString, `${props.config.name}.png`);
                _.downloadPngDone = true;
            });
        }
        function copyPng() {
            var _a, _b;
            return IconInfovue_type_script_lang_ts_awaiter(this, void 0, void 0, function* () {
                const _codeSvg = Object(index_esm["c" /* pepiconSvgString */])(Object.assign(Object.assign({}, props.config), { size: '48px' }));
                const pngString = yield svgToBase64Png(_codeSvg);
                const item = new ClipboardItem({
                    'image/png': base64ToBlob(pngString),
                });
                // @ts-ignore
                if ((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.clipboard) === null || _b === void 0 ? void 0 : _b.write) {
                    // @ts-ignore
                    window.navigator.clipboard.write([item]).then(() => (_.copyPngDone = true));
                }
            });
        }
        return { _, codeSvg, codeVue, copySvg, copyPng, downloadSvg, downloadPng };
    },
}));

// CONCATENATED MODULE: ./src/components/molecules/IconInfo.vue?vue&type=script&lang=ts&
 /* harmony default export */ var molecules_IconInfovue_type_script_lang_ts_ = (IconInfovue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/molecules/IconInfo.vue?vue&type=style&index=0&lang=sass&
var IconInfovue_type_style_index_0_lang_sass_ = __webpack_require__("ee5e");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__("4776");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("dd08");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("1411");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("1d98");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("e279");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/molecules/IconInfo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_IconInfovue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconInfo = __webpack_exports__["default"] = (component.exports);





runtime_auto_import_default()(component, 'components', {QTabs: QTabs["a" /* default */],QTab: QTab["a" /* default */],QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */]});


/***/ }),

/***/ "a76d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultsIconConfig; });
/* harmony import */ var _helpers_colorHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1fb");

function defaultsIconConfig(payload) {
    const _payload = payload || {};
    return Object.assign({ name: '', type: 'print', color: Object(_helpers_colorHelpers__WEBPACK_IMPORTED_MODULE_0__[/* cssVar */ "a"])('primary'), stroke: 'black' }, _payload);
}


/***/ }),

/***/ "ae6a":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "ae6a";

/***/ }),

/***/ "afbc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Router; });

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("9869");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("5f2b");

// CONCATENATED MODULE: ./src/router/routes.ts
const routes = [
    {
        path: '/',
        component: () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "713b")),
        children: [
            { path: '', name: 'home', component: () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "7896")) },
            { path: 'dev', component: () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, "fe22")) },
        ],
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "e51e")),
    },
];
/* harmony default export */ var router_routes = (routes);

// CONCATENATED MODULE: ./src/router/index.ts
// import { route } from 'quasar/wrappers'



/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */
// export default route(function ({ Vue }) {
vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior(to, from, savedPosition) {
        if (to.path != from.path)
            return { x: 0, y: 0 };
    },
    routes: router_routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "history",
    base: "/",
});
/* harmony default export */ var router = __webpack_exports__["b"] = (Router);
// return Router
// })


/***/ }),

/***/ "b1ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/dialogs/DialogWrapper.vue?vue&type=template&id=b0305b06&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-dialog',_vm._g(_vm._b({ref:"dialog",on:{"hide":_vm.onDialogHide}},'q-dialog',Object.assign({}, _vm.dialogProps, {style: '', class: ''}),false),_vm.dialogEvents),[_c('div',{class:['dialog-wrapper', _vm.dialogProps.class].flat(),style:(_vm.dialogProps.style)},[_c(_vm.slotComponent,_vm._g(_vm._b({tag:"component"},'component',_vm.innerSlotProps,false),_vm.innerSlotEvents)),(_vm.showCloseButton)?_c('q-btn',{staticClass:"_close",attrs:{"icon":"close","color":"primary","size":"lg","flat":""},on:{"click":_vm.hide}}):_vm._e(),_c('q-inner-loading',{attrs:{"showing":_vm.dialogProps.loading}},[_c('q-spinner',{attrs:{"size":"50px","color":"primary"}})],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dialogs/DialogWrapper.vue?vue&type=template&id=b0305b06&scoped=true&

// EXTERNAL MODULE: ./node_modules/is-what/dist/index.esm.js
var index_esm = __webpack_require__("2a7b");

// CONCATENATED MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/babel-loader/lib??ref--2-0!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!/Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib??vue-loader-options!./src/components/dialogs/DialogWrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var DialogWrappervue_type_script_lang_js_ = ({
  name: 'DialogWrapper',
  props: {
    /**
     * Display a generic `✗` close button on the top-right.
     */
    showCloseButton: {
      type: Boolean,
      default: false
    },

    /**
     * The events that will be bound to the dialog component (with `v-on="dialogEvents"`)
     */
    dialogEvents: {
      type: Object,
      default: () => ({})
    },

    /**
     * The props that will be bound to the dialog component (with `v-bind="dialogProps"`)
     */
    dialogProps: {
      type: Object,
      default: () => ({})
    },

    /**
     * The component to show in the dialog. Can be a direct Vue component instance or a string with the component name (if registered).
     * @type {*}
     */
    slotComponent: {
      type: undefined
    },

    /**
     * The props that will be bound to the slot component (with `v-bind="slotProps"`). When passed a function it will receive the DialogWrapper context `(this)` as param and must return an object (with `this` you can use the context to do `hide()` etc.)
     */
    slotProps: {
      type: [Object, Function],
      default: () => ({})
    },

    /**
     * The events that will be listened to, on the slot component (with `v-on="slotEvents"`). When passed a function it will receive the DialogWrapper context `(this)` as param and must return an object (with `this` you can use the context to do `hide()` etc.)
     */
    slotEvents: {
      type: [Object, Function],
      default: () => ({})
    }
  },

  data() {
    const {
      slotProps,
      slotEvents
    } = this;
    const innerSlotProps = Object(index_esm["a" /* isFunction */])(slotProps) ? slotProps(this) : slotProps;
    const innerSlotEvents = Object(index_esm["a" /* isFunction */])(slotEvents) ? slotEvents(this) : slotEvents;
    return {
      innerSlotProps,
      innerSlotEvents
    };
  },

  computed: {},
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      if (!this.$refs.dialog) return;
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      if (!this.$refs.dialog) return;
      this.$refs.dialog.hide();
    },

    onDialogHide(val) {
      if (val !== undefined) {
        return this.Ok(val);
      } // required to be emitted
      // when QDialog emits "hide" event


      this.$emit('hide');
    },

    Ok(val) {
      // on Ok, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok', val); // or with payload: this.$emit('ok', { ... })
      // then hiding dialog

      this.hide();
    },

    onCancelClick() {
      // we just need to hide dialog
      this.hide();
    }

  }
});
// CONCATENATED MODULE: ./src/components/dialogs/DialogWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_DialogWrappervue_type_script_lang_js_ = (DialogWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/dialogs/DialogWrapper.vue?vue&type=style&index=0&id=b0305b06&lang=sass&scoped=true&
var DialogWrappervue_type_style_index_0_id_b0305b06_lang_sass_scoped_true_ = __webpack_require__("cb5c");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/dialog/QDialog.js + 2 modules
var QDialog = __webpack_require__("e81c");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("2ef0");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("57bf");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/quasar/src/components/spinner/QSpinner.js + 1 modules
var QSpinner = __webpack_require__("9cbe");

// EXTERNAL MODULE: /Users/lucaban/ghq/github.com/CyCraft/pepicons/node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("e279");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/dialogs/DialogWrapper.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_DialogWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b0305b06",
  null
  
)

/* harmony default export */ var DialogWrapper = __webpack_exports__["default"] = (component.exports);





runtime_auto_import_default()(component, 'components', {QDialog: QDialog["a" /* default */],QBtn: QBtn["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ }),

/***/ "b1fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setPrimaryColor; });
/* harmony import */ var quasar_src_utils_colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("134d");
;
const { lighten, brightness, getBrand, setBrand } = quasar_src_utils_colors_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
function getRandomColor() {
    const color = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
    const isDark = brightness(color) < 140;
    return isDark ? lighten(color, 50) : color;
}
function cssVar(varName) {
    return getBrand(varName) || '';
}
function setPrimaryColor(color) {
    setBrand('primary', color);
}


/***/ }),

/***/ "cb5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_style_index_0_id_b0305b06_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0716");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_style_index_0_id_b0305b06_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_style_index_0_id_b0305b06_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e6f4":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.vue": [
		"187f",
		4
	],
	"./components/_Example.vue": [
		"e97f",
		5
	],
	"./components/_Template.vue": [
		"b4d7",
		6
	],
	"./components/atoms/ColorRingSvg.vue": [
		"7ccd",
		7
	],
	"./components/atoms/CompanyLogo.vue": [
		"b1a8",
		8
	],
	"./components/atoms/HtmlButton.vue": [
		"f362",
		9
	],
	"./components/atoms/IconButton.vue": [
		"9159",
		10
	],
	"./components/atoms/IconTile.vue": [
		"304c",
		11
	],
	"./components/atoms/PepHeaderDecoration.vue": [
		"bd3a",
		12
	],
	"./components/atoms/PepHeaderDecorationLight.vue": [
		"f129",
		13
	],
	"./components/atoms/PepHero.vue": [
		"c1f8",
		14
	],
	"./components/atoms/PepInput.vue": [
		"be14",
		15
	],
	"./components/atoms/PepLink.vue": [
		"cd31",
		16
	],
	"./components/atoms/ProfileCard.vue": [
		"e0dc",
		17
	],
	"./components/atoms/Stack.vue": [
		"0638",
		18
	],
	"./components/dialogs/DialogWrapper.vue": [
		"14ba",
		19
	],
	"./components/molecules/IconExpose.vue": [
		"1be9",
		20
	],
	"./components/molecules/IconGrid.vue": [
		"ff99",
		21
	],
	"./components/molecules/IconInfo.vue": [
		"0e1c",
		22
	],
	"./components/molecules/Picker.vue": [
		"a0b4",
		23
	],
	"./components/molecules/Pickers.vue": [
		"267c",
		24
	],
	"./layouts/MainLayout.vue": [
		"26f9",
		25
	],
	"./pages/Dev.vue": [
		"4f29",
		26
	],
	"./pages/Error404.vue": [
		"9525",
		27
	],
	"./pages/LandingPage.vue": [
		"a20f",
		28
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "e6f4";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ee5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInfo_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51a1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInfo_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_sass_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_IconInfo_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f177":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fdcc":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "fdcc";

/***/ })

/******/ });
//# sourceMappingURL=app.ca1c3be1.js.map