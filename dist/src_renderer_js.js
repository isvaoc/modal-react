"use strict";
(self["webpackChunkmodal_app"] = self["webpackChunkmodal_app"] || []).push([["src_renderer_js"],{

/***/ "./src/components/Modal.tsx":
/*!**********************************!*\
  !*** ./src/components/Modal.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormDialog; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogActions */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var windowed_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! windowed-observable */ "./node_modules/windowed-observable/dist/windowed-observable.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var observable = new windowed_observable__WEBPACK_IMPORTED_MODULE_1__.Observable('modal-state');
function FormDialog() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    observable.subscribe(function (state) {
      setOpen(state);
      console.log(state);
    });
  });

  var handleClose = function handleClose() {
    observable.publish(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: "Subscribe"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: "To subscribe to this website, please enter your email address here. We will send updates occasionally."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: "Email Address",
          type: "email",
          fullWidth: true,
          variant: "standard"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClick: handleClose,
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClick: handleClose,
          children: "Subscribe"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInVanilla": function() { return /* binding */ renderInVanilla; }
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var renderInVanilla = function renderInVanilla(targetElement) {
  if (!targetElement) {
    throw new Error('Algo valio cake');
  }

  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(targetElement);
  root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
};

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ })

}]);
//# sourceMappingURL=src_renderer_js.js.map