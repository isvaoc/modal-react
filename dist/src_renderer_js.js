"use strict";
(self["webpackChunkmodal_app"] = self["webpackChunkmodal_app"] || []).push([["src_renderer_js"],{

/***/ "./src/components/Calendar.tsx":
/*!*************************************!*\
  !*** ./src/components/Calendar.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Calendar; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function
  /* {date:Date} */
Calendar() {
  var monthArr = [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().getFullYear()),
      _useState2 = _slicedToArray(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().getMonth()),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      alert = _useState6[0],
      setAlert = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    calendarLogic();
  }, []);

  var calendarLogic = function calendarLogic() {
    var firstDayOfMonth = new Date("".concat(year, "-").concat(month + 1, "-1")).getDay();
    initialEmptyDays(firstDayOfMonth);
    addDays();
    finalEmptyDays(monthArr);
  };

  var initialEmptyDays = function initialEmptyDays(firstDayOfMonth) {
    monthArr.length = 0;
    var initialEmptyDays = Array(firstDayOfMonth).fill({});
    monthArr.push.apply(monthArr, _toConsumableArray(initialEmptyDays));
  };

  var finalEmptyDays = function finalEmptyDays(monthArr) {
    var finalEmptyDays = Array(monthArr.length > 35 ? 42 - monthArr.length : 35 - monthArr.length).fill({});
    monthArr.push.apply(monthArr, _toConsumableArray(finalEmptyDays));
    return finalEmptyDays;
  };

  var addDays = function addDays() {
    var day = {
      day: 0,
      activity: false,
      date: new Date()
    };

    for (var index = 1; index < daysOfMonth(month, year) + 1; index++) {
      day = {
        day: index,
        activity: false,
        date: new Date(year, month, index)
      };
      monthArr.push(day);
    }
  };

  var daysOfMonth = function daysOfMonth(month, year) {
    var daysOfMonth = 31;

    if (month === 1) {
      daysOfMonth = isLeap(year) ? 29 : 28;
    } else {
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        daysOfMonth = 30;
      }
    }

    return daysOfMonth;
  };

  var isLeap = function isLeap(year) {
    return year % 4 == 0 && year % 100 != 0 ? true : year % 400 == 0 ? true : false;
  };

  var count = 0;

  var selectDay = function selectDay(i) {
    monthArr[i].activity = !monthArr[i].activity;
    if (monthArr[i].activity) count++;else count--;
    if (count > 5) setAlert(true);else setAlert(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      border: "2px solid red"
    },
    children: [monthArr.length > 0 ? monthArr.map(function (day, i) {
      console.log('algo');
      if (day.day) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        onClick: function onClick() {
          return selectDay(i);
        },
        style: day.activity ? {
          backgroundColor: "pink",
          width: "20px",
          height: "20px"
        } : {
          border: "1px solid blue",
          width: "20px",
          height: "20px"
        },
        children: day.day
      }, day.date.toISOString());else return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          width: "20px",
          height: "20px"
        }
      });
    }) : null, alert ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Alert, {
      severity: "error",
      children: "You can only select 5!"
    }) : null]
  });
}

/***/ }),

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
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var windowed_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! windowed-observable */ "./node_modules/windowed-observable/dist/windowed-observable.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calendar */ "./src/components/Calendar.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable react-hooks/exhaustive-deps */












var stateObservable = new windowed_observable__WEBPACK_IMPORTED_MODULE_1__.Observable("modal-state");
var titleObservable = new windowed_observable__WEBPACK_IMPORTED_MODULE_1__.Observable("modal-title");
var apiObservable = new windowed_observable__WEBPACK_IMPORTED_MODULE_1__.Observable("api-observable");
var activityToClone = new windowed_observable__WEBPACK_IMPORTED_MODULE_1__.Observable("activity-to-clone");
var activityToUpdate = new windowed_observable__WEBPACK_IMPORTED_MODULE_1__.Observable("activity-to-update");
function FormDialog(props) {
  var projects = props.projects,
      apiFunction = props.apiFunction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      message = _React$useState4[0],
      setMessage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState("Delivery"),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      project = _React$useState6[0],
      setProject = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState("Available"),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      category = _React$useState8[0],
      setCategory = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      comments = _React$useState10[0],
      setComments = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      hours = _React$useState12[0],
      setHours = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      ticket = _React$useState14[0],
      setTicket = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_0__.useState(new Date().toISOString()),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      date = _React$useState16[0],
      setDate = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      activityId = _React$useState18[0],
      setActivityId = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_0__.useState([new Date().toISOString(), new Date().toISOString(), new Date().toISOString(), new Date().toISOString(), new Date().toISOString()]),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      cloneDates = _React$useState20[0],
      setCloneDates = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    AccountName: "",
    ProjectAccountID: 0,
    ProjectID: 0,
    ProjectName: "",
    ProjectCategories: [],
    ProjectColor: "",
    ProjectStartDate: "",
    ProjectEndDate: "",
    ProjectIsActive: false
  }),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      currentProject = _React$useState22[0],
      setCurrentProject = _React$useState22[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    stateObservable.subscribe(function (state) {
      setOpen(state);
    });
    titleObservable.subscribe(function (title) {
      setMessage(title);
    });
    activityToClone.subscribe(function (activity) {
      setProject(activity.ProjectName);
      setCategory(activity.CategoryName);
      setDate(activity.ActivityDate);
      setHours(activity.value);
      setTicket(activity.Task);
      setComments(activity.Comments);
    });
    activityToUpdate.subscribe(function (activity) {
      setProject(activity.ProjectName);
      setCategory(activity.CategoryName);
      setDate(activity.ActivityDate);
      setHours(activity.value);
      setTicket(activity.Task);
      setComments(activity.Comments);
      setActivityId(activity._id ? activity._id : "");
    });
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    changeByProject();
  }, [project]);

  var handleClose = function handleClose() {
    stateObservable.publish(false);
  };

  var arr = [new Date().toISOString(), new Date().toISOString(), new Date().toISOString(), new Date().toISOString(), new Date().toISOString()];

  var handleDateChange = function handleDateChange(e, i) {
    setDate(new Date(e.target.value).toISOString());
    arr[i] = date;
    setCloneDates(arr);
    console.log(date);
  };

  var handleClick = function handleClick() {
    if (currentProject && category) {
      var newActivity = {
        AccountName: currentProject.AccountName,
        ActivityDate: date,
        ActivityID: currentProject.ProjectID,
        CategoryName: category,
        Comments: comments,
        EmployeeID: 0,
        ProjectColor: currentProject.ProjectColor,
        ProjectID: currentProject.ProjectID,
        ProjectName: currentProject.ProjectName,
        StepID: 0,
        Task: ticket,
        TypeID: 0,
        value: hours,
        activeInProject: currentProject.ProjectIsActive
      };

      if (message === "Create multiple activities" || message === "Create activity") {
        apiFunction({
          path: "nova-api/activities",
          method: "POST",
          body: newActivity
        }).then(function (res) {
          console.log(res);
          apiObservable.publish("post");
        }).catch(function (err) {
          return console.log(err);
        });
      } else if (message === "Update Activity") {
        apiFunction({
          path: "nova-api/activities/".concat(activityId),
          method: "PUT",
          body: newActivity
        }).then(function (res) {
          console.log(res);
          apiObservable.publish("put");
        }).catch(function (err) {
          return console.log(err);
        });
      } else if (message === "Clone Activity") {
        console.log("React está muy feo :(");
      }
    }
  };

  var handleChangeP = function handleChangeP(event) {
    setProject(event.target.value);
  };

  var handleChangeC = function handleChangeC(event) {
    setCategory(event.target.value);
  };

  var changeByProject = function changeByProject() {
    var filterProject = projects.filter(function (option) {
      return option.ProjectName === project;
    });
    setCurrentProject(filterProject[0]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: handleClose,
    sx: {
      minWidth: '90vw'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        minWidth: '90vw',
        padding: '1em'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: {
          display: "flex",
          flexDirection: "column",
          m: "auto",
          width: "90vw"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sx: {
            margin: 2
          },
          id: "outlined-select-currency-native",
          select: true,
          label: "Project",
          value: project,
          onChange: handleChangeP,
          SelectProps: {
            native: true
          },
          children: projects.map(function (option) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: option.ProjectName,
              children: option.ProjectIsActive ? option.ProjectName : ""
            }, option.ProjectID);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sx: {
            margin: 2
          },
          id: "outlined-select-currency-native",
          select: true,
          label: "Category",
          value: category,
          onChange: handleChangeC,
          SelectProps: {
            native: true
          },
          children: currentProject.ProjectCategories.map(function (category) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: category.CategoryName,
              children: category.CategoryName ? category.CategoryName : ""
            }, category.CategoryID);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
          htmlFor: "date",
          style: {
            marginLeft: 15
          },
          children: "Select the date"
        }), message === "Clone Activity" ? cloneDates.map(function (el, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            style: {
              marginLeft: 15,
              marginBottom: 5
            },
            type: "date",
            id: "date",
            name: "trip-start",
            value: cloneDates[i].split("T")[0],
            onChange: function onChange(e) {
              return handleDateChange(e, i);
            }
          });
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          style: {
            marginLeft: 15,
            marginBottom: 5
          },
          type: "date",
          id: "date",
          name: "trip-start",
          value: date.split("T")[0],
          onChange: function onChange(e) {
            return setDate(new Date(e.target.value).toISOString());
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sx: {
            margin: 2
          },
          id: "outlined-number",
          label: "Hours",
          type: "number",
          InputLabelProps: {
            shrink: true
          },
          onChange: function onChange(e) {
            return setHours(parseInt(e.target.value));
          },
          value: hours
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
          sx: {
            margin: 2
          },
          id: "filled-helperText",
          label: "Ticket",
          variant: "outlined",
          onChange: function onChange(e) {
            return setTicket(e.target.value);
          },
          value: ticket
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextareaAutosize, {
          style: {
            height: 50,
            width: '90%',
            marginLeft: 15,
            marginBottom: 10
          },
          placeholder: "Description",
          onChange: function onChange(e) {
            return setComments(e.target.value);
          },
          value: comments
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginLeft: 15
        },
        variant: "outlined",
        onClick: function onClick() {
          handleClick();
          handleClose();
        },
        children: "Guardar"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    })]
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



var renderInVanilla = function renderInVanilla(targetElement, projects, apiFunction) {
  if (!targetElement) {
    throw new Error('Algo valio cake');
  }

  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(targetElement);
  root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    projects: projects,
    apiFunction: apiFunction
  }));
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


/***/ }),

/***/ "./node_modules/windowed-observable/dist/windowed-observable.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/windowed-observable/dist/windowed-observable.esm.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": function() { return /* binding */ Observable; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var EVENTS = '__events__';
var SHARED = '__shared__';
var OBSERVERS = '__observers__';
var Observable = /*#__PURE__*/function () {
  function Observable(namespace) {
    this.dispatch = this.publish;
    Observable.initialize();
    this.namespace = namespace;
  } // istanbul ignore next


  Observable.initialize = function initialize() {
    if (!window[SHARED]) {
      var _window$SHARED;

      window[SHARED] = (_window$SHARED = {}, _window$SHARED[EVENTS] = {}, _window$SHARED[OBSERVERS] = {}, _window$SHARED);
    }

    if (!window[SHARED][EVENTS]) {
      window[SHARED][EVENTS] = {};
    }

    if (!window[SHARED][OBSERVERS]) {
      window[SHARED][OBSERVERS] = {};
    }
  };

  var _proto = Observable.prototype;

  _proto.getEvents = function getEvents() {
    return this.events;
  };

  _proto.getLastEvent = function getLastEvent() {
    var events = this.events;

    if (!events.length) {
      return;
    }

    var lastEvent = events[events.length - 1];
    return lastEvent;
  };

  _proto.publish = function publish(data) {
    var events = this.events;
    var lastEvent = this.getLastEvent();
    this.observers.forEach(function (observer) {
      return observer(data, {
        events: events,
        lastEvent: lastEvent
      });
    });
    this.events.push(data);
  };

  _proto.subscribe = function subscribe(observer) {
    this.observers = this.observers.concat(observer);
  };

  _proto.unsubscribe = function unsubscribe(observer) {
    this.observers = this.observers.filter(function (obs) {
      return obs !== observer;
    });
  };

  _proto.clear = function clear() {
    var events = this.events;
    var lastEvent = this.getLastEvent();
    this.observers.forEach(function (observer) {
      return observer(undefined, {
        events: events,
        lastEvent: lastEvent
      });
    });
    this.events = [];
    this.observers = [];
  };

  _createClass(Observable, [{
    key: "namespace",
    set: function set(namespace) {
      this._namespace = namespace; // istanbul ignore next

      if (!this.events) this.events = []; // istanbul ignore next

      if (!this.observers) this.observers = [];
    }
  }, {
    key: "events",
    get: function get() {
      return window[SHARED][EVENTS][this._namespace];
    },
    set: function set(newEvents) {
      window[SHARED][EVENTS][this._namespace] = newEvents;
    }
  }, {
    key: "observers",
    get: function get() {
      return window[SHARED][OBSERVERS][this._namespace];
    },
    set: function set(newObservers) {
      window[SHARED][OBSERVERS][this._namespace] = newObservers;
    }
  }]);

  return Observable;
}();


//# sourceMappingURL=windowed-observable.esm.js.map


/***/ })

}]);
//# sourceMappingURL=src_renderer_js.js.map