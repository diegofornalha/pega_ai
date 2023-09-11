"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,197];
exports.modules = {

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5023);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5496);






function Footer() {
    const [nameService, setNameService] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .nameServiceState */ .$F);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const _nameService = localStorage.getItem("PreferredNameService");
        if (_nameService) {
            setNameService(_nameService);
        } else {
            setNameService(_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .NameService.find */ .oQ.find);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (nameService != null) {
            localStorage.setItem("PreferredNameService", nameService);
        }
    }, [
        nameService
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "m-auto mt-60 max-w-[920px] flex flex-1 justify-center items-center py-8 border-t border-solid box-border",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col gap-y-2 items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex gap-x-2 items-center font-flow text-sm mb-5 -mt-3"
            })
        })
    });
};


/***/ }),

/***/ 1696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavigationBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@onflow/fcl"
var fcl_ = __webpack_require__(5820);
// EXTERNAL MODULE: ./publicConfig.js
var publicConfig = __webpack_require__(5985);
;// CONCATENATED MODULE: external "@onflow/transport-http"
const transport_http_namespaceObject = require("@onflow/transport-http");
;// CONCATENATED MODULE: ./flow/config.js



(0,fcl_.config)({
    "accessNode.api": publicConfig/* default.accessNodeAPI */.Z.accessNodeAPI,
    "discovery.wallet": publicConfig/* default.walletDiscovery */.Z.walletDiscovery,
    "sdk.transport": transport_http_namespaceObject.send,
    "app.detail.title": "drizzle",
    "app.detail.icon": "https://www.drizzle33.app/_next/image?url=%2Fdrizzle.png&w=128&q=75"
});

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(5023);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./lib/atoms.js
var atoms = __webpack_require__(5496);
;// CONCATENATED MODULE: ./components/NavigationBar.js












function NavigationBar(props) {
    const user = props.user;
    const router = (0,router_.useRouter)();
    const [, setShowBasicNotification] = (0,external_recoil_.useRecoilState)(atoms/* showBasicNotificationState */.lo);
    const [, setBasicNotificationContent] = (0,external_recoil_.useRecoilState)(atoms/* basicNotificationContentState */.VQ);
    const [nameService, ] = (0,external_recoil_.useRecoilState)(atoms/* nameServiceState */.$F);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("message", async (d)=>{
            if (d.data.type === "FCL:VIEW:RESPONSE" && d.data.status === "APPROVED" && d.data.data.network && d.data.data.network !== publicConfig/* default.chainEnv */.Z.chainEnv || d.data.type === "LILICO:NETWORK" && typeof d.data.network === "string" && d.data.network != publicConfig/* default.chainEnv */.Z.chainEnv) {
                setShowBasicNotification(true);
                setBasicNotificationContent({
                    type: "exclamation",
                    title: "WRONG NETWORK",
                    detail: null
                });
                await new Promise((r)=>setTimeout(r, 2)
                );
                fcl_.unauthenticate();
            }
        });
    }, []);
    const AuthedState = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "shrink truncate flex gap-x-2 items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "shrink truncate font-flow text-base text-drizzle-green-dark shadow-sm bg-drizzle-green-light rounded-full px-3 py-2 leading-5",
                    onClick: ()=>{
                        if (user) {
                            router.push(`/${user.addr}`);
                        }
                    },
                    children: user && (0,utils/* displayUsername */.fw)(user, nameService)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "shrink-0 bg-drizzle-green-light rounded-full p-2",
                    onClick: ()=>{
                        fcl_.unauthenticate();
                        router.push("/");
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.LogoutIcon, {
                        className: "h-5 w-5 text-drizzle-green-dark"
                    })
                })
            ]
        });
    };
    const UnauthenticatedState = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "h-12 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm text-black bg-drizzle-green hover:bg-drizzle-green-dark",
                onClick: fcl_.logIn,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "hidden sm:block",
                        children: "Connect Wallet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block sm:hidden",
                        children: "Connect"
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "px-6 m-auto max-w-[920px] min-w-[380px] relative gap-x-5 flex items-center justify-between bg-transparent h-44",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "min-w-[40px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/drizzle.png",
                                alt: "",
                                width: 50,
                                height: 50,
                                priority: true
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "font-flow font-bold text-3xl",
                            children: "Pega A\xed!"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "hidden sm:block px-1 text-center font-flow text-drizzle-green font-medium text-xs border border-1 border-drizzle-green",
                        children: `${publicConfig/* default.chainEnv */.Z.chainEnv == "mainnet" ? "BETA" : "TESTNET"}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block sm:hidden px-1 text-center font-flow text-drizzle-green font-medium text-xs border border-1 border-drizzle-green",
                        children: `${publicConfig/* default.chainEnv */.Z.chainEnv == "mainnet" ? "BETA" : "T"}`
                    })
                ]
            }),
            user && user.loggedIn ? /*#__PURE__*/ jsx_runtime_.jsx(AuthedState, {}) : /*#__PURE__*/ jsx_runtime_.jsx(UnauthenticatedState, {})
        ]
    });
};


/***/ }),

/***/ 1818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BasicNotification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NotificationIcon = ({ type  })=>{
    if (type == "exclamation") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircleIcon, {
                className: "h-6 w-6 text-red-500",
                "aria-hidden": "true"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.InformationCircleIcon, {
            className: "h-6 w-6 text-gray-400",
            "aria-hidden": "true"
        })
    });
};
NotificationIcon.displayName = "NotificationIcon";
function BasicNotification() {
    const [showBasicNotification, setShowBasicNotification] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__/* .showBasicNotificationState */ .lo);
    const [basicNotificationContent, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__/* .basicNotificationContentState */ .VQ);
    const type = basicNotificationContent && basicNotificationContent.type;
    const title = basicNotificationContent && basicNotificationContent.title;
    const detail = basicNotificationContent && basicNotificationContent.detail;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (showBasicNotification) {
            setTimeout(()=>setShowBasicNotification(false)
            , 2000);
        }
    }, [
        showBasicNotification
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "aria-live": "assertive",
            className: "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-col items-center space-y-4 sm:items-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                    show: showBasicNotification,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "transform ease-out duration-300 transition",
                    enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
                    enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationIcon, {
                                        type: type
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-3 w-0 flex-1 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm font-bold font-flow text-gray-900",
                                                children: title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-1 text-sm text-gray-500 break-words max-h-36 overflow-hidden",
                                                children: detail
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ml-4 flex-shrink-0 flex",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drizzle-green-dark",
                                            onClick: ()=>{
                                                setShowBasicNotification(false);
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.XIcon, {
                                                    className: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransactionNotification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5985);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NotificationContent = ({ txStatus  })=>{
    if (txStatus.status == "Initializing") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ClockIcon, {
                        className: "h-6 w-6 text-gray-400",
                        "aria-hidden": "true"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-3 w-0 flex-1 pt-0.5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex gap-x-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-bold font-flow text-gray-900",
                                children: "Initializing"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "Waiting for approval"
                        })
                    ]
                })
            ]
        });
    }
    if (txStatus.status == "Pending") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.InformationCircleIcon, {
                        className: "h-6 w-6 text-gray-400",
                        "aria-hidden": "true"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-3 w-0 flex-1 pt-0.5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm font-bold font-flow text-gray-900",
                                    children: "Pending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_4__/* ["default"].flowscanURL */ .Z.flowscanURL}/transaction/${txStatus.txid}`,
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: "truncate font-medium font-flow text-sm underline decoration-drizzle-green decoration-2",
                                    children: `${txStatus.txid}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "Waiting for confirmation"
                        })
                    ]
                })
            ]
        });
    }
    if (txStatus.status == "Success") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CheckCircleIcon, {
                        className: "h-6 w-6 text-drizzle-green",
                        "aria-hidden": "true"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-3 w-0 flex-1 pt-0.5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm font-bold font-flow text-gray-900",
                                    children: "Success"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_4__/* ["default"].flowscanURL */ .Z.flowscanURL}/transaction/${txStatus.txid}`,
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: "truncate font-medium font-flow text-sm underline decoration-drizzle-green decoration-2",
                                    children: `${txStatus.txid}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "Transaction successfully confirmed!"
                        })
                    ]
                })
            ]
        });
    }
    if (txStatus.status == "Failed") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircleIcon, {
                        className: "h-6 w-6 text-red-500",
                        "aria-hidden": "true"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-3 w-0 flex-1 pt-0.5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm font-bold font-flow text-gray-900",
                                    children: "Failed"
                                }),
                                txStatus.txid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_4__/* ["default"].flowscanURL */ .Z.flowscanURL}/transaction/${txStatus.txid}`,
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: "truncate font-medium font-flow text-sm underline decoration-drizzle-green decoration-2",
                                    children: `${txStatus.txid}`
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-1 text-sm text-gray-500 truncate",
                            children: typeof txStatus.error === "string" ? txStatus.error : txStatus.error.message
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
NotificationContent.displayName = "NotificationContent";
function TransactionNotification() {
    const [transactionInProgress, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__/* .transactionInProgressState */ .xr);
    const [transactionStatus, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__/* .transactionStatusState */ .cY);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "aria-live": "assertive",
            className: "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-col items-center space-y-4 sm:items-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                    show: transactionInProgress,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "transform ease-out duration-300 transition",
                    enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
                    enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationContent, {
                                    txStatus: transactionStatus
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1696);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(723);
/* harmony import */ var _components_common_TransactionNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3494);
/* harmony import */ var _components_common_BasicNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1818);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5985);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5941);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5023);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_TransactionNotification__WEBPACK_IMPORTED_MODULE_7__, _components_common_BasicNotification__WEBPACK_IMPORTED_MODULE_8__, swr__WEBPACK_IMPORTED_MODULE_10__]);
([_components_common_TransactionNotification__WEBPACK_IMPORTED_MODULE_7__, _components_common_BasicNotification__WEBPACK_IMPORTED_MODULE_8__, swr__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function MyApp({ Component , pageProps  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        loggedIn: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>_onflow_fcl__WEBPACK_IMPORTED_MODULE_4__.currentUser.subscribe(setUser)
    , []);
    const { data: domainData , error: domainError  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])(user.loggedIn == true ? [
        "domainOfAddressesFetcher",
        [
            user.addr
        ]
    ] : null, _lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .domainOfAddressesFetcher */ .WL);
    const { 0: domains , 1: setDomains  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (domainData && user && user.loggedIn) {
            setDomains(domainData[user.addr]);
        }
    }, [
        domainData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-white text-black bg-[url('/bg.png')] bg-cover bg-center min-h-screen",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "drizzle | token distribution tool"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "drizzle | token distribution tool"
                            }, "title")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        user: {
                            ...user,
                            domains: domains,
                            address: user.addr
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps,
                        user: {
                            ...user,
                            domains: domains,
                            address: user.addr
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_TransactionNotification__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_BasicNotification__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 5820:
/***/ ((module) => {

module.exports = require("@onflow/fcl");

/***/ }),

/***/ 9200:
/***/ ((module) => {

module.exports = require("decimal.js");

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

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,505,664,154], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();