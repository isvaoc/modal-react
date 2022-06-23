"use strict";
(self["webpackChunkmodal_app"] = self["webpackChunkmodal_app"] || []).push([["src_components_Modal_tsx"],{

/***/ "./src/components/Calendar.tsx":
/*!*************************************!*\
  !*** ./src/components/Calendar.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Calendar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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






function Calendar(props) {
  var monthArr = [];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      renderMonth = _React$useState2[0],
      setRenderMonth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.date.getFullYear()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      year = _React$useState4[0],
      setYear = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.date.getMonth()),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      month = _React$useState6[0],
      setMonth = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      alert = _React$useState8[0],
      setAlert = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    calendarLogic();
    setRenderMonth(monthArr);
  }, [setRenderMonth]);

  var calendarLogic = function calendarLogic() {
    var firstDayOfMonth = new Date("".concat(year, "-").concat(month + 1, "-1")).getDay();
    initialEmptyDays(firstDayOfMonth);
    addDays();
    finalEmptyDays(monthArr);
  };

  var initialEmptyDays = function initialEmptyDays(firstDayOfMonth) {
    var _monthArr;

    monthArr = [];
    var initialEmptyDays = Array(firstDayOfMonth).fill({});

    (_monthArr = monthArr).push.apply(_monthArr, _toConsumableArray(initialEmptyDays));
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

  var selectDay = function selectDay(i, e) {
    e.target.classList.toogle("selected");
    monthArr = [];
    monthArr = renderMonth;

    if (monthArr[i].activity) {
      monthArr[i].activity = !monthArr[i].activity;
      var arr = props.cloneDates;
      arr.splice([arr.indexOf(monthArr[i].date.toISOString().split("T")[0])], 1);
      props.setCloneDates(arr);
    } else if (!monthArr[i].activity) {
      var _arr2 = props.cloneDates;

      if (_arr2.length < 5) {
        monthArr[i].activity = !monthArr[i].activity;

        _arr2.push(monthArr[i].date.toISOString().split("T")[0]);

        console.log(_arr2);
      }

      props.setCloneDates(_arr2.slice(0, 5));
      setRenderMonth(monthArr);
    }

    console.log(props.cloneDates);
    if (props.cloneDates.length >= 5) setAlert(true);else if (props.cloneDates.length < 5) setAlert(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: {
      maxWidth: "35vw"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
      style: {
        textAlign: "center"
      },
      children: [props.date.toDateString().substring(4, 7), ", ", props.date.getFullYear()]
    }), renderMonth.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        padding: "10px",
        margin: "auto"
      },
      children: renderMonth.map(function (day, i) {
        if (day.day) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          onClick: function onClick(e) {
            return selectDay(i, e);
          },
          className: "inactive" // style={
          //   day.activity
          //     ? {
          //         backgroundColor: "pink",
          //         border: "1px solid pink",
          //         borderRadius: "50%",
          //         textAlign: "center",
          //         padding: "4px",
          //         width: "20px",
          //         height: "20px",
          //       }
          //     : {
          //         border: "1px solid blue",
          //         borderRadius: "50%",
          //         textAlign: "center",
          //         padding: "4px",
          //         width: "20px",
          //         height: "20px",
          //       }
          // }
          ,
          children: day.day
        }, day.date.toISOString());else return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            width: "20px",
            height: "20px"
          }
        });
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: "Loading"
    }), alert ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "warning",
      children: "You can't choose more than five"
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      cloneDates = _React$useState20[0],
      setCloneDates = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_0__.useState(),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      cloneActivity = _React$useState22[0],
      setCloneActivity = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
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
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      currentProject = _React$useState24[0],
      setCurrentProject = _React$useState24[1];

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
      setCloneActivity(activity);
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
        var objAct = cloneActivity;
        objAct === null || objAct === void 0 ? true : delete objAct._id;

        var _arr2 = cloneDates.map(function (el) {
          return _objectSpread(_objectSpread({}, objAct), {}, {
            ActivityDate: el
          });
        });

        console.log(_arr2);
        console.log(cloneDates);
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
      minWidth: "90vw"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        minWidth: "90vw",
        padding: "1em"
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
        }), message === "Clone Activity" || message === "Create multiple activities" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          date: new Date(),
          cloneDates: cloneDates,
          setCloneDates: setCloneDates
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
            width: "90%",
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
      })]
    })]
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".datePicker {\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-around !important;\n  padding-left: 5px !important;\n}\n.selected{\n  background-color: \"pink\";\n  border: \"1px solid pink\";\n  border-radius: \"50%\";\n  text-align: \"center\";\n  padding: \"4px\";\n  width: \"20px\";\n  height: \"20px\";\n}\n.inactive{\n  border: \"1px solid blue\";\n  border-radius: \"50%\";\n  text-align: \"center\";\n  padding: \"4px\";\n  width: \"20px\";\n  height: \"20px\";\n}", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,wCAAwC;EACxC,4BAA4B;AAC9B;AACA;EACE,wBAAwB;EACxB,wBAAwB;EACxB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,cAAc;AAChB;AACA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,cAAc;AAChB","sourcesContent":[".datePicker {\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-around !important;\n  padding-left: 5px !important;\n}\n.selected{\n  background-color: \"pink\";\n  border: \"1px solid pink\";\n  border-radius: \"50%\";\n  text-align: \"center\";\n  padding: \"4px\";\n  width: \"20px\";\n  height: \"20px\";\n}\n.inactive{\n  border: \"1px solid blue\";\n  border-radius: \"50%\";\n  text-align: \"center\";\n  padding: \"4px\";\n  width: \"20px\";\n  height: \"20px\";\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_Modal_tsx.js.map