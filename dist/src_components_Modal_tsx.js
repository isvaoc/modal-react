"use strict";
(self["webpackChunkmodal_app"] = self["webpackChunkmodal_app"] || []).push([["src_components_Modal_tsx"],{

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
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var windowed_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! windowed-observable */ "./node_modules/windowed-observable/dist/windowed-observable.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @date-io/date-fns */ "webpack/sharing/consume/default/@date-io/date-fns/@date-io/date-fns");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/pickers */ "webpack/sharing/consume/default/@material-ui/pickers/@material-ui/pickers");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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
      oneDate = _React$useState16[0],
      setOneDate = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      activityId = _React$useState18[0],
      setActivityId = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      cloneDates = _React$useState20[0],
      setCloneDates = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_0__.useState(new Date()),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      selectedDate = _React$useState22[0],
      setSelectedDate = _React$useState22[1];

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
      setOneDate(activity.ActivityDate);
      setHours(activity.value);
      setTicket(activity.Task);
      setComments(activity.Comments);
    });
    activityToUpdate.subscribe(function (activity) {
      setProject(activity.ProjectName);
      setCategory(activity.CategoryName);
      setOneDate(activity.ActivityDate);
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

  var arr = [];

  var handleDateChange = function handleDateChange(date) {
    // setSelectedDate(date);
    // arr.push(selectedDate);
    // setCloneDates(arr);
    console.log(date);
  };

  var handleClick = function handleClick() {
    if (currentProject && category) {
      var newActivity = {
        AccountName: currentProject.AccountName,
        ActivityDate: oneDate,
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
      open: open,
      onClose: handleClose,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sx: {
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "60vw"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: option.ProjectName,
                children: option.ProjectIsActive ? option.ProjectName : ""
              }, option.ProjectID);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                value: category.CategoryName,
                children: category.CategoryName ? category.CategoryName : ""
              }, category.CategoryID);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            htmlFor: "date",
            style: {
              marginLeft: 15
            },
            children: "Select the date"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            style: {
              marginLeft: 15,
              marginBottom: 5
            },
            type: "date",
            id: "date",
            name: "trip-start",
            value: oneDate.split("T")[0],
            onChange: function onChange(e) {
              return setOneDate(new Date(e.target.value).toISOString());
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextareaAutosize, {
            style: {
              height: 50,
              width: 790,
              marginLeft: 15,
              marginBottom: 10
            },
            placeholder: "Description",
            onChange: function onChange(e) {
              return setComments(e.target.value);
            },
            value: comments
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__.MuiPickersUtilsProvider, {
      utils: (_date_io_date_fns__WEBPACK_IMPORTED_MODULE_4___default()),
      locale: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_13__["default"],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
        style: {
          overflow: "hidden"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__.Calendar, {
          date: selectedDate,
          onChange: handleDateChange
        })
      })
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_components_Modal_tsx.js.map