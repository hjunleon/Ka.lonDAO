"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cd": () => (/* reexport */ SignupForm)
});

// UNUSED EXPORTS: MyButton, NavBar

// EXTERNAL MODULE: ./components/NavBar.jsx
var NavBar = __webpack_require__(5159);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ButtonGroup"
const ButtonGroup_namespaceObject = require("@mui/material/ButtonGroup");
;// CONCATENATED MODULE: external "@mui/material/TextField"
const TextField_namespaceObject = require("@mui/material/TextField");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/FormControl"
const FormControl_namespaceObject = require("@mui/material/FormControl");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/InputLabel"
const InputLabel_namespaceObject = require("@mui/material/InputLabel");
;// CONCATENATED MODULE: external "@mui/x-date-pickers/AdapterDateFns"
const AdapterDateFns_namespaceObject = require("@mui/x-date-pickers/AdapterDateFns");
;// CONCATENATED MODULE: external "@mui/x-date-pickers/LocalizationProvider"
const LocalizationProvider_namespaceObject = require("@mui/x-date-pickers/LocalizationProvider");
;// CONCATENATED MODULE: external "@mui/x-date-pickers/DatePicker"
const DatePicker_namespaceObject = require("@mui/x-date-pickers/DatePicker");
;// CONCATENATED MODULE: external "@mui/icons-material/Female"
const Female_namespaceObject = require("@mui/icons-material/Female");
var Female_default = /*#__PURE__*/__webpack_require__.n(Female_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Male"
const Male_namespaceObject = require("@mui/icons-material/Male");
var Male_default = /*#__PURE__*/__webpack_require__.n(Male_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Transgender"
const Transgender_namespaceObject = require("@mui/icons-material/Transgender");
var Transgender_default = /*#__PURE__*/__webpack_require__.n(Transgender_namespaceObject);
;// CONCATENATED MODULE: ./components/SignupForm.jsx












// import { FemaleIcon,MaleIcon, TransgenderIcon } from '@mui/icons-material';



function SignupForm() {
    const { 0: gender , 1: setGender  } = (0,external_react_.useState)("male");
    const { 0: bday , 1: setBDay  } = (0,external_react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white w-[50%] rounded-lg drop-shadow-lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-3xl text-center my-4",
                children: "Quick Sign Up!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: "form",
                sx: {
                    "& .MuiTextField-root": {
                        m: 1
                    }
                },
                noValidate: true,
                autoComplete: "off",
                className: "flex items-center justify-start flex-col h-full p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        required: true,
                        id: "outlined-required",
                        label: "Name",
                        className: "w-full"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        required: true,
                        id: "outlined-password-input",
                        label: "Password",
                        type: "password",
                        // autoComplete="current-password"
                        className: "w-full"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LocalizationProvider_namespaceObject.LocalizationProvider, {
                        dateAdapter: AdapterDateFns_namespaceObject.AdapterDateFns,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DatePicker_namespaceObject.DatePicker, {
                            label: "Birthday",
                            value: bday,
                            onChange: (newValue)=>{
                                setBDay(newValue);
                            },
                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    className: "w-full",
                                    ...params
                                })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        sx: {
                            m: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "Gender Preference: "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: [
                                    "male",
                                    "female",
                                    "both"
                                ].map((el, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        className: "mx-2",
                                        onClick: ()=>{
                                            setGender(el);
                                        },
                                        color: gender == el ? "success" : "default",
                                        children: el == "male" ? /*#__PURE__*/ jsx_runtime_.jsx((Male_default()), {}) : el == "female" ? /*#__PURE__*/ jsx_runtime_.jsx((Female_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Transgender_default()), {})
                                    }, `${el}_${idx}`))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "text",
                        color: "primary",
                        children: "Sign Up"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/MyButton/MyButton.js
var MyButton = __webpack_require__(8706);
;// CONCATENATED MODULE: ./components/index.js





/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2469);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8904);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6310);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3858);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_4__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import { IconButton } from "@material-tailwind/react";
// import IconButton from '@mui/material/IconButton';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
function Home({ allPostsData  }) {
    const { 0: gender , 1: setGender  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("male");
    const { 0: bday , 1: setBDay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        home: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: _components_layout__WEBPACK_IMPORTED_MODULE_3__/* .siteTitle */ .y
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "bg-gradient-to-b from-[#FFD88C] to-my-orange-400 h-full w-full flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "font-bold text-5xl text-white flex flex-col justify-between p-16 pb-0 h-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-16",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                                        className: "mb-6",
                                        children: "Welcome to Ka.lonDAO"
                                    }),
                                    "The ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-turqoise-400",
                                        children: "Web 3.0 Gamified Dating Experience "
                                    }),
                                    " that Makes Dating Fun Again"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/pingu.png"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center items-center h-full w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .SignupForm */ .Cd, {})
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const allPostsData = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            allPostsData
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,469,400], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();