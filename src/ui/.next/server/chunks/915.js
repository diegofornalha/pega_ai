"use strict";
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 6335:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CriteriaCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5985);
/* harmony import */ var _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__]);
_eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const getCriteriaLabel = (drizzle, type)=>{
    let verifier = null;
    if (type === "DROP") {
        if (!drizzle || Object.keys(drizzle.verifiers) <= 0) return null;
        verifier = Object.values(drizzle.verifiers)[0][0];
    } else if (type === "Raffle") {
        if (!drizzle || Object.keys(drizzle.registrationVerifiers) <= 0) return null;
        verifier = Object.values(drizzle.registrationVerifiers)[0][0];
    }
    // NOTE Only 1 verifier is supported now
    // WhitelistWithAmount & Whitelist
    if (verifier.type === "Whitelist") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            className: "w-full font-flow font-medium text-sm break-words",
            children: `On the whitelist of this ${type}`
        });
    }
    if (verifier.type === "FLOATGroup") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "w-full font-flow font-medium text-sm break-words",
            children: [
                "Own ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "font-bold text-drizzle-green",
                    children: [
                        verifier.threshold,
                        " "
                    ]
                }),
                "FLOAT(s) in Group\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].floatURL */ .Z.floatURL}/${verifier.group.host}/group/${verifier.group.name}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-drizzle-green",
                        children: verifier.group.name
                    })
                }),
                "\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold",
                    children: "MINTED BEFORE"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold text-drizzle-green",
                    children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .convertCadenceDateTime */ .TH)(verifier.mintedBefore || verifier.receivedBefore).toLocaleString()
                })
            ]
        });
    }
    if (verifier.type === "FLOATs") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "w-full font-flow font-medium text-sm break-words",
            children: [
                "Own FLOAT of Event\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold text-drizzle-green",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].floatURL */ .Z.floatURL}/${verifier.events[0].host}/event/${verifier.events[0].eventID}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-drizzle-green",
                        children: verifier.events[0].eventID
                    })
                }),
                "\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold",
                    children: "MINTED BEFORE"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold text-drizzle-green",
                    children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .convertCadenceDateTime */ .TH)(verifier.mintedBefore || verifier.receivedBefore).toLocaleString()
                })
            ]
        });
    }
};
const getCriteriaLabelPreview = (eligibilityMode, floatGroup, floatEventPairs, threshold, type)=>{
    if (!eligibilityMode) return null;
    // WhitelistWithAmount & Whitelist
    if (eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeWhitelistWitAmount.key */ .FF.key || eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeWhitelist.key */ .P1.key) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            className: "w-full font-flow font-medium text-sm break-words",
            children: `On the whitelist of this ${type}`
        });
    }
    if (eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeFLOATGroup.key */ .qE.key) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "w-full font-flow font-medium text-sm break-words",
            children: [
                "Own ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "font-bold text-drizzle-green",
                    children: [
                        threshold,
                        " "
                    ]
                }),
                "FLOAT(s) in Group\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].floatURL */ .Z.floatURL}/${floatGroup.groupHost}/group/${floatGroup.groupName}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-drizzle-green",
                        children: floatGroup.groupName
                    })
                }),
                "\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold",
                    children: "MINTED BEFORE"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold text-drizzle-green",
                    children: new Date().toLocaleString()
                })
            ]
        });
    }
    if (eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeFLOAT.key */ .HU.key) {
        const eventID = floatEventPairs[0].eventID;
        const eventHost = floatEventPairs[0].eventHost;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "w-full font-flow font-medium text-sm break-words",
            children: [
                "Own FLOAT of Event\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold text-drizzle-green",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].floatURL */ .Z.floatURL}/${eventHost}/event/${eventID}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-drizzle-green",
                        children: eventID
                    })
                }),
                "\xa0",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold",
                    children: "MINTED BEFORE"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold text-drizzle-green",
                    children: new Date().toLocaleString()
                })
            ]
        });
    }
};
function CriteriaCard(props) {
    const { type , drop , raffle , eligibilityMode , floatGroup , floatEventPairs , threshold  } = props;
    const drizzle = drop ? drop : raffle ? raffle : null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-5 w-full min-w-[240px] shadow-drizzle bg-white ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden sm:max-w-[240px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `flex flex-col gap-y-2 ring-2 ring-drizzle-green rounded-2xl p-3 `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-center font-flow font-semibold",
                    children: "WHO IS ELIGIBLE?"
                }),
                drizzle ? getCriteriaLabel(drizzle, type) : getCriteriaLabelPreview(eligibilityMode, floatGroup, floatEventPairs, threshold, type)
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShareCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5985);



const downloadQRCode = ()=>{
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `DROP.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
function ShareCard(props) {
    const url = props.url || _publicConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].appURL */ .Z.appURL;
    const logo = props.logo || "/favicon.ico";
    const styles = props.styles || `hidden sm:flex flex-col min-w-[240px] aspect-square justify-center
  ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden
  shadow-drizzle items-center bg-white`;
    const qrCodeSize = props.qrCodeSize || 200;
    const logoSize = props.logoSize || 24;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: styles,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            disabled: props.disabled === true,
            onClick: downloadQRCode,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_1__.QRCodeCanvas, {
                id: "qr-gen",
                value: url,
                size: qrCodeSize,
                bgColor: "#ffffff",
                fgColor: "#00d588",
                level: "H",
                includeMargin: false,
                imageSettings: {
                    src: logo,
                    height: logoSize,
                    width: logoSize,
                    excavate: true
                }
            })
        })
    });
};


/***/ }),

/***/ 4535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TagsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5985);
/* harmony import */ var _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7798);
/* harmony import */ var _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__, _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__]);
([_eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__, _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getReviewerTitlePreview = (eligibilityMode)=>{
    // Whitelist or WhitelistWithAmount
    if (eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeWhitelist.key */ .P1.key || eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeWhitelistWitAmount.key */ .FF.key) {
        return "Whitelist";
    }
    if (eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeFLOATGroup.key */ .qE.key) {
        return "FLOAT Group";
    }
    if (eligibilityMode.key === _eligibility_EligibilityModeSelector__WEBPACK_IMPORTED_MODULE_3__/* .EligibilityModeFLOAT.key */ .HU.key) {
        return "FLOAT";
    }
};
const getPacketPreview = (packetMode)=>{
    if (!packetMode) {
        return "Exclusive";
    }
    if (packetMode.key === _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__/* .PacketModeIdentical.key */ .Tq.key) {
        return "Identical";
    }
    if (packetMode.key === _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__/* .PacketModeRandom.key */ .pf.key) {
        return "Random";
    }
};
const getEligibilityTag = ({ drop , eligibilityMode , raffle  })=>{
    const type = drop ? "DROP" : "RAFFLE";
    if (drop || raffle) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-2 bg-blue-300 rounded-full font-flow font-medium text-sm",
            "data-tip": "same amount to all users",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .getVerifierType */ .li)(drop ? drop : raffle, type)
            })
        });
    }
    if (eligibilityMode) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-2 bg-blue-300 rounded-full font-flow font-medium text-sm",
            "data-tip": "same amount to all users",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: getReviewerTitlePreview(eligibilityMode)
            })
        });
    }
    return null;
};
const getPacketTag = ({ drop , packetMode  })=>{
    if (drop) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "tooltip px-2 bg-yellow-300 rounded-full font-flow font-medium text-sm",
            "data-tip": "same amount to all users",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .getDistributorType */ .V_)(drop)
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tooltip px-2 bg-yellow-300 rounded-full font-flow font-medium text-sm",
        "data-tip": "same amount to all users",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            children: getPacketPreview(packetMode)
        })
    });
};
const getIdentifier = (info)=>{
    if (info.drop) {
        return info.drop.tokenInfo.tokenIdentifier;
    } else if (info.token) {
        return `A.${info.token.address}.${info.token.contractName}`;
    } else if (info.raffle) {
        return `A.${info.raffle.nftInfo.contractAddress.replace("0x", "")}.${info.raffle.nftInfo.contractName}`;
    } else if (info.nft) {
        return `A.${info.nft.contractAddress.replace("0x", "")}.${info.nft.contractName}`;
    }
};
const getSymbol = (info)=>{
    if (info.drop) {
        return info.drop.tokenInfo.symbol;
    } else if (info.token) {
        return info.token.symbol;
    } else if (info.raffle) {
        return info.raffle.nftInfo.name;
    } else if (info.nft) {
        return info.nft.name;
    }
};
function TagsCard(props) {
    const { info  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex gap-x-1 mb-2`,
        children: [
            getEligibilityTag(info),
            info.type == "DROP" ? getPacketTag(info) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].flowscanURL */ .Z.flowscanURL}/contract/${getIdentifier(info)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-2 bg-drizzle-green rounded-full font-flow font-medium text-sm",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: getSymbol(info)
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TimeLimitCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);


const TimeCard = ({ title , time , active  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex gap-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "block min-w-[80px] font-flow font-bold text-base",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `grow flex gap-x-2 ring-2 ${active ? "ring-drizzle-green" : "ring-gray-300"} rounded-2xl p-3`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CalendarIcon, {
                        className: `shrink-0 h-6 w-6 ${active ? "text-drizzle-green" : "text-gray-300"}`,
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "font-flow font-bold text-base",
                        children: time
                    })
                ]
            })
        ]
    });
};
function TimeLimitCard(props) {
    const { startAt , endAt , registrationEndAt  } = props;
    const current = new Date();
    let inRange = true;
    if (startAt && startAt.getTime() > current.getTime()) {
        inRange = false;
    }
    if (endAt && endAt.getTime() < current.getTime()) {
        inRange = false;
    }
    if (registrationEndAt && registrationEndAt.getTime() < current.getTime()) {
        inRange = false;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col gap-y-2",
        children: [
            startAt && isFinite(startAt) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimeCard, {
                title: "START",
                time: startAt.toLocaleString(),
                active: inRange
            }) : null,
            registrationEndAt && isFinite(registrationEndAt) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimeCard, {
                title: "REG END",
                time: registrationEndAt.toLocaleString(),
                active: inRange
            }) : null,
            endAt && isFinite(endAt) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TimeCard, {
                title: "END",
                time: endAt.toLocaleString(),
                active: inRange
            }) : null
        ]
    });
};


/***/ }),

/***/ 4278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Warning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);


function Warning(props) {
    const { content  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rounded-md bg-yellow-50 p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ExclamationIcon, {
                        className: "h-5 w-5 text-yellow-400",
                        "aria-hidden": "true"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-sm font-medium text-yellow-800",
                            children: "Attention needed"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-2 text-sm text-yellow-700",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: content
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 2874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fq": () => (/* binding */ checkPacketMode),
/* harmony export */   "Tq": () => (/* binding */ PacketModeIdentical),
/* harmony export */   "ZP": () => (/* binding */ PacketModeSelector),
/* harmony export */   "pf": () => (/* binding */ PacketModeRandom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9200);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const checkPacketMode = (packetMode, tokenBalance, capacity, amount = {})=>{
    try {
        const { identicalAmount , totalAmount  } = amount;
        if (!packetMode) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidPacket */ .Z.InvalidPacket;
        if (packetMode.key === PacketModeIdentical.key) {
            PacketModeIdentical.checkParams(capacity, identicalAmount, tokenBalance);
        } else if (packetMode.key === PacketModeRandom.key) {
            PacketModeRandom.checkParams(capacity, totalAmount, tokenBalance);
        }
        return [
            true,
            _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Valid */ .Z.Valid
        ];
    } catch (error) {
        return [
            false,
            error
        ];
    }
};
const UINT32_MAX = 4294967295;
const PacketModeRandom = {
    key: "Random",
    name: "Random Amount",
    intro: "Distribute random amount of tokens to eligible account",
    checkParams: (capacity, totalAmount, tokenBalance)=>{
        if (!capacity || isNaN(parseInt(capacity))) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidCapacity */ .Z.InvalidCapacity;
        if (!totalAmount || isNaN(parseFloat(totalAmount))) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidTotalAmount */ .Z.InvalidTotalAmount;
        if (!tokenBalance) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidTokenBalance */ .Z.InvalidTokenBalance;
        const _capacity = new (decimal_js__WEBPACK_IMPORTED_MODULE_2___default())(capacity);
        if (!(_capacity.isInteger() && _capacity.isPositive() && !_capacity.isZero() && _capacity.cmp(UINT32_MAX) == -1)) {
            throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidCapacity */ .Z.InvalidCapacity;
        }
        const _totalAmount = new (decimal_js__WEBPACK_IMPORTED_MODULE_2___default())(totalAmount);
        if (!(_totalAmount.isPositive() && !_totalAmount.isZero() && _totalAmount.decimalPlaces() <= 8)) {
            throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidTotalAmount */ .Z.InvalidTotalAmount;
        }
        if (_totalAmount.cmp(tokenBalance) != -1) {
            throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InsufficientBalance */ .Z.InsufficientBalance;
        }
        return true;
    }
};
const PacketModeIdentical = {
    key: "Identical",
    name: "Identical Amount",
    intro: "Distribute identical amount of tokens to eligible account",
    checkParams: (capacity, identicalAmount, tokenBalance)=>{
        if (!capacity || isNaN(parseInt(capacity))) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidCapacity */ .Z.InvalidCapacity;
        if (!identicalAmount || isNaN(parseFloat(identicalAmount))) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidIdenticalAmount */ .Z.InvalidIdenticalAmount;
        if (!tokenBalance) throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidTokenBalance */ .Z.InvalidTokenBalance;
        const _capacity = new (decimal_js__WEBPACK_IMPORTED_MODULE_2___default())(capacity);
        if (!(_capacity.isInteger() && _capacity.isPositive() && !_capacity.isZero() && _capacity.cmp(UINT32_MAX) == -1)) {
            throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidCapacity */ .Z.InvalidCapacity;
        }
        const _identicalAmount = new (decimal_js__WEBPACK_IMPORTED_MODULE_2___default())(identicalAmount);
        if (!(_identicalAmount.isPositive() && !_identicalAmount.isZero() && _identicalAmount.decimalPlaces() <= 8)) {
            throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InvalidIdenticalAmount */ .Z.InvalidIdenticalAmount;
        }
        if (_identicalAmount.mul(_capacity).cmp(tokenBalance) != -1) {
            throw _lib_hints__WEBPACK_IMPORTED_MODULE_3__/* ["default"].InsufficientBalance */ .Z.InsufficientBalance;
        }
        return true;
    }
};
const modes = [
    PacketModeIdentical,
    PacketModeRandom
];
function PacketModeSelector(props) {
    const { mode: mode1 , setMode  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup, {
            value: mode1,
            onChange: setMode,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4 auto-rows-fr",
                children: modes.map((mode)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Option, {
                        value: mode,
                        className: ({ active , checked  })=>`${active ? "ring-2 ring-drizzle-green ring-offset-2" : "ring-1 ring-black ring-opacity-5"}
                  ${checked ? "bg-drizzle-green text-black" : "bg-white"}

                  relative flex cursor-pointer rounded-2xl px-5 py-4 shadow-md focus:outline-none`
                        ,
                        children: ({ active , checked  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex w-full items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-sm",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Label, {
                                                        as: "p",
                                                        className: `font-semibold font-flow text-lg`,
                                                        children: mode.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Description, {
                                                        as: "span",
                                                        className: `inline text-gray-500`,
                                                        children: mode.intro
                                                    })
                                                ]
                                            })
                                        }),
                                        checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "shrink-0 text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {
                                                className: "h-6 w-6"
                                            })
                                        })
                                    ]
                                })
                            })
                    }, mode.key)
                )
            })
        })
    });
};
function CheckIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 12,
                fill: "#fff",
                opacity: "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7 13l3 3 7-7",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FF": () => (/* binding */ EligibilityModeWhitelistWitAmount),
/* harmony export */   "HU": () => (/* binding */ EligibilityModeFLOAT),
/* harmony export */   "P1": () => (/* binding */ EligibilityModeWhitelist),
/* harmony export */   "ZP": () => (/* binding */ EligibilityModeSelector),
/* harmony export */   "qE": () => (/* binding */ EligibilityModeFLOATGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_hints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(500);
/* harmony import */ var _float_FloatPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8433);
/* harmony import */ var _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9200);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const EligibilityModeWhitelistWitAmount = {
    key: "WhitelistWithAmount",
    name: "Whitelist with Amount",
    intro: (type)=>{
        if (type === "DROP") {
            return "Distribute specific amount to specific account on whitelist";
        }
        if (type === "RAFFLE") {
            return "Accounts on whitelist is eligible for registration";
        }
        return "";
    },
    checkParams: (whitelistWithAmountReviewerCallback, tokenBalance)=>{
        if (!whitelistWithAmountReviewerCallback) {
            return [
                false,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].NeedProcessRA */ .Z.NeedProcessRA
            ];
        }
        if (whitelistWithAmountReviewerCallback.invalidRecordsCount > 0) {
            return [
                false,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].HaveInvalidRARecords */ .Z.HaveInvalidRARecords
            ];
        }
        if (whitelistWithAmountReviewerCallback.tokenAmount.cmp(tokenBalance) != -1) {
            return [
                false,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InsufficientBalance */ .Z.InsufficientBalance
            ];
        }
        if (whitelistWithAmountReviewerCallback.tokenAmount.isZero() || whitelistWithAmountReviewerCallback.tokenAmount.isNegative()) {
            return [
                false,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidTokenAmount */ .Z.InvalidTokenAmount
            ];
        }
        return [
            true,
            _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
        ];
    },
    checkRaffleParams: ()=>{
        // This mode is not supported in Raffle
        throw "invalid mode";
    }
};
const EligibilityModeWhitelist = {
    key: "Whitelist",
    name: "Whitelist",
    intro: (type)=>{
        if (type === "DROP") {
            return "Distribute tokens to holders of specific FLOAT. FCFS";
        }
        if (type === "RAFFLE") {
            return "Accounts on whitelist is eligible for registration";
        }
        return "";
    },
    checkParams: (whitelistReviewerCallback, packetMode, totalBalance, capacity, amount = {})=>{
        try {
            const [valid, hint] = (0,_drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__/* .checkPacketMode */ .Fq)(packetMode, totalBalance, capacity, amount);
            if (!valid) {
                throw hint;
            }
            if (!whitelistReviewerCallback) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].NeedProcessR */ .Z.NeedProcessR;
            }
            if (whitelistReviewerCallback.invalidRecordsCount > 0) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].HaveInvalidRRecords */ .Z.HaveInvalidRRecords;
            }
            return [
                true,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
            ];
        } catch (error) {
            return [
                false,
                error
            ];
        }
    },
    checkRaffleParams: (whitelistReviewerCallback)=>{
        try {
            if (!whitelistReviewerCallback) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].NeedProcessR */ .Z.NeedProcessR;
            }
            if (whitelistReviewerCallback.invalidRecordsCount > 0) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].HaveInvalidRRecords */ .Z.HaveInvalidRRecords;
            }
            return [
                true,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
            ];
        } catch (error) {
            return [
                false,
                error
            ];
        }
    }
};
const EligibilityModeFLOAT = {
    key: "FLOAT",
    name: "FLOAT",
    intro: (type)=>{
        if (type === "DROP") {
            return "Distribute tokens to holders of specific FLOAT. FCFS";
        }
        if (type === "RAFFLE") {
            return "Holders of specific FLOAT is eligible for registration";
        }
        return "";
    },
    detail: _float_FloatPicker__WEBPACK_IMPORTED_MODULE_3__/* .FloatModeFloatEvent */ .SW,
    checkParams: (floatEvents, threshold, packetMode, totalBalance, capacity, amount = {})=>{
        try {
            const [valid, hint] = (0,_drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__/* .checkPacketMode */ .Fq)(packetMode, totalBalance, capacity, amount);
            if (!valid) {
                throw hint;
            }
            if (floatEvents.length != 1) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidFloatEvent */ .Z.InvalidFloatEvent;
            }
            // threshold should be 1 now
            return [
                true,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
            ];
        } catch (error) {
            return [
                false,
                error
            ];
        }
    },
    checkRaffleParams: (floatEvents)=>{
        try {
            if (floatEvents.length != 1) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidFloatEvent */ .Z.InvalidFloatEvent;
            }
            // threshold should be 1 now
            return [
                true,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
            ];
        } catch (error) {
            return [
                false,
                error
            ];
        }
    }
};
const EligibilityModeFLOATGroup = {
    key: "FLOATGroup",
    name: "FLOAT Group",
    intro: (type)=>{
        if (type === "DROP") {
            return "Distribute tokens to holders of FLOATs in specific FLOAT Group. FCFS";
        }
        if (type === "RAFFLE") {
            return "Holders of FLOATs in specific FLOAT Group is eligible for registration";
        }
        return "";
    },
    detail: _float_FloatPicker__WEBPACK_IMPORTED_MODULE_3__/* .FloatModeFloatGroup */ .J7,
    checkParams: (floatEvents, threshold, packetMode, totalBalance, capacity, amount = {})=>{
        try {
            const [valid, hint] = (0,_drop_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__/* .checkPacketMode */ .Fq)(packetMode, totalBalance, capacity, amount);
            if (!valid) {
                throw hint;
            }
            if (floatEvents.length == 0) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].EmptyFloatGroup */ .Z.EmptyFloatGroup;
            }
            if (!threshold || isNaN(parseInt(threshold))) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidThreshold */ .Z.InvalidThreshold;
            }
            const _threshold = new (decimal_js__WEBPACK_IMPORTED_MODULE_5___default())(threshold);
            if (!(_threshold.isInteger() && _threshold.isPositive() && !_threshold.isZero() && _threshold.toNumber() <= floatEvents.length)) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidThreshold */ .Z.InvalidThreshold;
            }
            return [
                true,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
            ];
        } catch (error) {
            return [
                false,
                error
            ];
        }
    },
    checkRaffleParams: (floatEvents, threshold)=>{
        try {
            if (floatEvents.length == 0) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].EmptyFloatGroup */ .Z.EmptyFloatGroup;
            }
            if (!threshold || isNaN(parseInt(threshold))) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidThreshold */ .Z.InvalidThreshold;
            }
            const _threshold = new (decimal_js__WEBPACK_IMPORTED_MODULE_5___default())(threshold);
            if (!(_threshold.isInteger() && _threshold.isPositive() && !_threshold.isZero() && _threshold.toNumber() <= floatEvents.length)) {
                throw _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].InvalidThreshold */ .Z.InvalidThreshold;
            }
            return [
                true,
                _lib_hints__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Valid */ .Z.Valid
            ];
        } catch (error) {
            return [
                false,
                error
            ];
        }
    }
};
const dropModes = [
    EligibilityModeFLOAT,
    EligibilityModeFLOATGroup,
    EligibilityModeWhitelist,
    EligibilityModeWhitelistWitAmount, 
];
const raffleModes = [
    EligibilityModeFLOAT,
    EligibilityModeFLOATGroup,
    EligibilityModeWhitelist
];
function EligibilityModeSelector(props) {
    const { mode: mode1 , setMode , setPacketMode , type  } = props;
    const _type = type || "DROP";
    const modes = _type === "DROP" ? dropModes : raffleModes;
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (setPacketMode) {
            setPacketMode(null);
        }
    }, [
        mode1
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup, {
            value: mode1,
            onChange: setMode,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Label, {
                    className: "sr-only",
                    children: "Server size"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4 auto-rows-fr",
                    children: modes.map((mode)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Option, {
                            value: mode,
                            className: ({ active , checked  })=>`${active ? "ring-2 ring-drizzle-green ring-offset-2" : "ring-1 ring-black ring-opacity-5"}
                  ${checked ? "bg-drizzle-green text-black" : "bg-white"}

                  relative flex cursor-pointer rounded-2xl px-5 py-4 shadow-md focus:outline-none`
                            ,
                            children: ({ active , checked  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-full items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Label, {
                                                            as: "p",
                                                            className: `font-semibold font-flow text-lg`,
                                                            children: mode.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Description, {
                                                            as: "span",
                                                            className: `inline text-gray-500`,
                                                            children: mode.intro(_type)
                                                        })
                                                    ]
                                                })
                                            }),
                                            checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "shrink-0 text-white",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {
                                                    className: "h-6 w-6"
                                                })
                                            })
                                        ]
                                    })
                                })
                        }, mode.key)
                    )
                })
            ]
        })
    });
};
function CheckIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 12,
                fill: "#fff",
                opacity: "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7 13l3 3 7-7",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SW": () => (/* binding */ FloatModeFloatEvent),
  "J7": () => (/* binding */ FloatModeFloatGroup),
  "ZP": () => (/* binding */ FloatPicker)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./lib/atoms.js
var atoms = __webpack_require__(5496);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(5023);
// EXTERNAL MODULE: ./publicConfig.js
var publicConfig = __webpack_require__(5985);
// EXTERNAL MODULE: external "@onflow/fcl"
var fcl_ = __webpack_require__(5820);
;// CONCATENATED MODULE: ./lib/float-scripts.js


const FungibleTokenPath = "0xFungibleToken";
const FLOATPath = "0xFLOAT";
const getFloatEvent = async (eventHost, eventID)=>{
    const code = `
  import FLOAT from 0xFLOAT

  pub fun main(account: Address, eventId: UInt64): FLOATEventMetadata {
    let floatEventCollection = getAccount(account).getCapability(FLOAT.FLOATEventsPublicPath)
                                .borrow<&FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic}>()
                                ?? panic("Could not borrow the FLOAT Events Collection from the account.")
    let event = floatEventCollection.borrowPublicEventRef(eventId: eventId) ?? panic("This event does not exist in the account")
    return FLOATEventMetadata(
      _claimable: event.claimable, 
      _dateCreated: event.dateCreated, 
      _description: event.description, 
      _eventId: event.eventId, 
      _groups: event.getGroups(), 
      _host: event.host, 
      _image: event.image, 
      _name: event.name, 
      _transferrable: event.transferrable, 
      _url: event.url 
    )
  }
  
  pub struct FLOATEventMetadata {
    pub let claimable: Bool
    pub let dateCreated: UFix64
    pub let description: String 
    pub let eventId: UInt64
    pub let groups: [String]
    pub let host: Address
    pub let image: String 
    pub let name: String
    pub let transferrable: Bool
    pub let url: String
  
    init(
        _claimable: Bool,
        _dateCreated: UFix64,
        _description: String, 
        _eventId: UInt64,
        _groups: [String],
        _host: Address, 
        _image: String, 
        _name: String,
        _transferrable: Bool,
        _url: String
    ) {
        self.claimable = _claimable
        self.dateCreated = _dateCreated
        self.description = _description
        self.eventId = _eventId
        self.groups = _groups
        self.host = _host
        self.image = _image
        self.name = _name
        self.transferrable = _transferrable
        self.url = _url
    }
  }
  `.replace(FLOATPath, publicConfig/* default.floatAddress */.Z.floatAddress);
    const event = await fcl_.query({
        cadence: code,
        args: (arg, t)=>[
                arg(eventHost, t.Address),
                arg(eventID, t.UInt64)
            ]
    });
    return event;
};
const getFloatEventsInGroup = async (eventHost, groupName)=>{
    const code = `
  import FLOAT from 0xFLOAT

  pub fun main(account: Address, groupName: String): [FLOATEventMetadata] {
    let floatEventCollection = getAccount(account).getCapability(FLOAT.FLOATEventsPublicPath)
                                .borrow<&FLOAT.FLOATEvents{FLOAT.FLOATEventsPublic}>()
                                ?? panic("Could not borrow the FLOAT Events Collection from the account.")
    let group = floatEventCollection.getGroup(groupName: groupName) ?? panic("This group doesn't exist.")
    let eventIds = group.getEvents()
  
    let answer: [FLOATEventMetadata] = []
    for eventId in eventIds {
      let event = floatEventCollection.borrowPublicEventRef(eventId: eventId) ?? panic("This event does not exist in the account")
      let metadata = FLOATEventMetadata(
        _claimable: event.claimable, 
        _dateCreated: event.dateCreated, 
        _description: event.description, 
        _eventId: event.eventId, 
        _groups: event.getGroups(), 
        _host: event.host, 
        _image: event.image, 
        _name: event.name, 
        _transferrable: event.transferrable, 
        _url: event.url 
      )
      answer.append(metadata)
    }
  
    return answer
  }
  
  
  pub struct FLOATEventMetadata {
    pub let claimable: Bool
    pub let dateCreated: UFix64
    pub let description: String 
    pub let eventId: UInt64
    pub let groups: [String]
    pub let host: Address
    pub let image: String 
    pub let name: String
    pub let transferrable: Bool
    pub let url: String
  
    init(
        _claimable: Bool,
        _dateCreated: UFix64,
        _description: String, 
        _eventId: UInt64,
        _groups: [String],
        _host: Address, 
        _image: String, 
        _name: String,
        _transferrable: Bool,
        _url: String
    ) {
        self.claimable = _claimable
        self.dateCreated = _dateCreated
        self.description = _description
        self.eventId = _eventId
        self.groups = _groups
        self.host = _host
        self.image = _image
        self.name = _name
        self.transferrable = _transferrable
        self.url = _url
    }
  }
  `.replace(FLOATPath, publicConfig/* default.floatAddress */.Z.floatAddress);
    const events = await fcl_.query({
        cadence: code,
        args: (arg, t)=>[
                arg(eventHost, t.Address),
                arg(groupName, t.String)
            ]
    });
    return events;
};

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "daisyui/src/colors"
var colors_ = __webpack_require__(1717);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/float/FloatEventList.js






function FloatEventList(props) {
    const events = props.events;
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const pageSize = 5;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: events.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-1 overflow-x-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "inline-block min-w-full py-2 align-middle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-2xl",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                className: "min-w-full divide-y divide-gray-300",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                    children: "Groups"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    scope: "col",
                                                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                    children: "Created at"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                        className: "divide-y divide-gray-200 bg-white",
                                        children: (0,utils/* getItemsInPage */.qX)(events, currentPage, pageSize).map((event)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "py-4 pl-4 pr-3 text-sm sm:pl-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "h-10 w-10 flex-shrink-0 relative rounded-xl",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        className: "rounded-xl",
                                                                        src: event.image == "" ? "/float.png" : `https://ipfs.io/ipfs/${event.image}`,
                                                                        alt: "",
                                                                        layout: "fill",
                                                                        objectFit: "cover"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "ml-4",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                        className: "block font-medium text-gray-900 break-words max-w-[300px]",
                                                                        children: event.name
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text-gray-500",
                                                            children: event.groups.toString()
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text-gray-500",
                                                            children: new Date(parseFloat(event.dateCreated) * 1000).toLocaleString()
                                                        })
                                                    })
                                                ]
                                            }, event.eventId)
                                        )
                                    })
                                ]
                            })
                        })
                    })
                }),
                events.length > pageSize ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-2 flex justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-gray-50 p-2 rounded-full overflow-hidden shadow ring-1 ring-black ring-opacity-5",
                            disabled: currentPage == 1,
                            onClick: ()=>{
                                if (currentPage == 1) {
                                    return;
                                }
                                setCurrentPage(currentPage - 1);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowLeftIcon, {
                                className: `h-5 w-5 ${currentPage == 1 ? "text-gray-400" : "text-black"}`
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-gray-50 h-9 w-9 rounded-full overflow-hidden shadow ring-1 ring-black ring-opacity-5",
                            disabled: true,
                            children: currentPage
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-gray-50 p-2 rounded-full overflow-hidden shadow ring-1 ring-black ring-opacity-5",
                            disabled: currentPage * pageSize >= events.length,
                            onClick: ()=>{
                                if (currentPage * pageSize >= events.length) {
                                    return;
                                }
                                setCurrentPage(currentPage + 1);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.ArrowRightIcon, {
                                className: `h-5 w-5 ${currentPage * pageSize >= events.length ? "text-gray-400" : "text-black"}`
                            })
                        })
                    ]
                }) : null
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex mb-10 justify-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "leading-[200px] font-flow font-medium text-base text-gray-500",
                children: "No FLOATs found"
            })
        })
    });
};

// EXTERNAL MODULE: ./components/common/Warning.js
var Warning = __webpack_require__(4278);
;// CONCATENATED MODULE: ./components/float/FloatPicker.js









const FloatModeFloatEvent = {
    key: "FLOATEvent",
    title: "FLOAT Event",
    description: `Enter the url of the FLOAT Event. Or enter event id and event host, concat them with "@". For instance: ${publicConfig/* default.chainEnv */.Z.chainEnv == "testnet" ? "98963710@0x257c27ba4951541d" : "420442474@0x39b144ab4d348e2b"}.`,
    placeholder: `${publicConfig/* default.chainEnv */.Z.chainEnv == "testnet" ? "98963710@0x257c27ba4951541d" : "420442474@0x39b144ab4d348e2b"}`,
    inputHandler: utils/* floatEventInputHandler */.DX
};
const FloatModeFloatGroup = {
    key: "FLOATGroup",
    title: "FLOAT Group",
    description: `Enter the url of the FLOAT Group. Or enter group name and group creator, concat them with "@". For instance: ${publicConfig/* default.chainEnv */.Z.chainEnv == "testnet" ? "Drizzle@0x257c27ba4951541d" : "Drizzle@0x39b144ab4d348e2b"}.`,
    placeholder: `${publicConfig/* default.chainEnv */.Z.chainEnv == "testnet" ? "Drizzle@0x257c27ba4951541d" : "Drizzle@0x39b144ab4d348e2b"}`,
    inputHandler: utils/* floatGroupInputHandler */.uw
};
function FloatPicker(props) {
    const [, setShowBasicNotification] = (0,external_recoil_.useRecoilState)(atoms/* showBasicNotificationState */.lo);
    const [, setBasicNotificationContent] = (0,external_recoil_.useRecoilState)(atoms/* basicNotificationContentState */.VQ);
    const [transactionInProgress, ] = (0,external_recoil_.useRecoilState)(atoms/* transactionInProgressState */.xr);
    const { 0: rawEventStr , 1: setRawEventStr  } = (0,external_react_.useState)("");
    // FLOAT || FLOATGroup
    const mode = props.mode || FloatModeFloatEvent;
    const disabled = props.disabled || false;
    const { threshold , setThreshold , rawFloatInput , floatEvents: floatEvents1 , setFloatEvents , setFloatGroup , setFloatEventPairs  } = props;
    (0,external_react_.useEffect)(()=>{
        if (floatEvents1.length == 1) {
            setThreshold(1);
        }
    }, [
        floatEvents1
    ]);
    (0,external_react_.useEffect)(()=>{
        setThreshold("");
        setFloatEvents([]);
        setFloatGroup(null);
        setFloatEventPairs([]);
        setRawEventStr("");
    }, [
        mode
    ]);
    (0,external_react_.useEffect)(()=>{
        if (rawFloatInput) {
            setRawEventStr(rawFloatInput);
        }
    }, [
        rawFloatInput
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "block text-2xl font-bold font-flow",
                children: [
                    mode.title,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-red-600",
                        children: "*"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                content: "FLOAT(s) received after the creation of this DROP will not be counted in when checking eligibility."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "block font-flow text-md leading-6 mt-2 mb-2",
                children: mode.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex justify-between gap-x-2 sm:gap-x-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        name: "floatPicker",
                        id: "floatPicker",
                        className: "w-full bg-drizzle-green-ultralight grow border-drizzle-green font-flow text-lg rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark placeholder:text-gray-300",
                        disabled: transactionInProgress,
                        value: rawEventStr,
                        placeholder: mode.placeholder,
                        onChange: (event)=>{
                            setRawEventStr(event.target.value);
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: (0,utils/* classNames */.AK)(transactionInProgress ? "bg-drizzle-green-light" : "bg-drizzle-green hover:bg-drizzle-green-dark", `rounded-xl h-12 px-3 sm:px-6 text-base font-medium shadow-sm text-black`),
                        disabled: transactionInProgress,
                        onClick: async ()=>{
                            setFloatEventPairs([]);
                            setFloatEvents([]);
                            setShowBasicNotification(false);
                            if (rawEventStr && mode) {
                                try {
                                    let events = [];
                                    if (mode.key === "FLOATEvent") {
                                        const floatEvents = await mode.inputHandler(rawEventStr);
                                        for(let i = 0; i < floatEvents.length; i++){
                                            let floatEvent = floatEvents[i];
                                            let event = await getFloatEvent(floatEvent.eventHost, floatEvent.eventID);
                                            if (event) {
                                                events.push(event);
                                            }
                                        }
                                        if (events.length > 0) {
                                            setFloatEventPairs(floatEvents);
                                            setFloatEvents(events);
                                        } else {
                                            throw "No events";
                                        }
                                    } else if (mode.key === "FLOATGroup") {
                                        const group = await mode.inputHandler(rawEventStr);
                                        const _events = await getFloatEventsInGroup(group.groupHost, group.groupName);
                                        if (_events && _events.length > 0) {
                                            events = _events.sort((a, b)=>b.eventId - a.eventId
                                            );
                                            setFloatGroup(group);
                                            setFloatEvents(events);
                                        } else {
                                            throw "Group not exist or no events in group";
                                        }
                                    }
                                } catch (error) {
                                    let err = error.message || error;
                                    if (err.includes("This event does not exist in the account")) {
                                        err = "This event does not exist in the account";
                                    } else if (err.includes("This group doesn't exist")) {
                                        err = "This group doesn't exist";
                                    }
                                    setShowBasicNotification(true);
                                    setBasicNotificationContent({
                                        type: "exclamation",
                                        title: "Invalid Params",
                                        detail: err
                                    });
                                }
                            } else {
                                setShowBasicNotification(true);
                                setBasicNotificationContent({
                                    type: "exclamation",
                                    title: "Invalid Params",
                                    detail: "invalid FLOAT info or mode"
                                });
                            }
                        },
                        children: "Sync"
                    })
                ]
            }),
            floatEvents1.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full mt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FloatEventList, {
                        events: floatEvents1
                    }),
                    floatEvents1.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex flex-col gap-y-2 mt-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-x-2 sm:justify-between sm:w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "block w-[75px] shrink-0 font-flow font-bold",
                                    children: "Threshold"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    disabled: disabled,
                                    min: "1",
                                    max: floatEvents1.length,
                                    value: threshold,
                                    id: "threshold",
                                    className: "grow w-full rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight border-drizzle-green font-flow text-lg placeholder:text-gray-300",
                                    onWheel: (e)=>e.target.blur()
                                    ,
                                    onChange: (event)=>{
                                        setThreshold(event.target.value);
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    className: "shrink-0 font-float font-bold",
                                    children: [
                                        "of ",
                                        floatEvents1.length,
                                        " FLOATs"
                                    ]
                                })
                            ]
                        })
                    }) : null
                ]
            }) : null
        ]
    });
};


/***/ }),

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Valid = "Valid";
const InvalidName = "Invalid name";
const InvalidURL = "Invalid URL";
const InvalidToken = "Invalid token";
const InvalidNFT = "Invalid NFT";
const BannerOversize = "Banner oversize";
const DropEnded = "Invalid DROP end time";
const RaffleEnded = "Invalid RAFFLE end time";
const InvalidTimeLimit = "Start time should be less than end time";
const InvalidRegistrationDeadline = "Invalid registration deadline";
const NeedProcessRA = "Please process Recipients & Amounts";
const NeedProcessR = "Please process Recipients";
const HaveInvalidRARecords = "There are some invalid Recipients & Amounts records";
const HaveInvalidRRecords = "There are some invalid Recipients";
const InsufficientBalance = "Insufficient balance";
const InvalidTokenAmount = "Invalid token amount";
const InvalidFloatEvent = "Invalid FLOAT event";
const InvalidPacket = "Please select distribution mode";
const InvalidNumberOfWinners = "Invalid number of winners";
const InvalidCapacity = "Invalid capacity";
const InvalidThreshold = "Invalid threshold";
const InvalidIdenticalAmount = "Invalid identical amount";
const InvalidTotalAmount = "Invalid total amount";
const InvalidTokenBalance = "Invalid token balance";
const EmptyFloatGroup = "Empty FLOAT Group";
const InsufficientNFTs = "The number of NFTs selected as reward should be more than the number of winners";
const Hints = {
    Valid,
    InvalidName,
    InvalidURL,
    InvalidToken,
    InvalidNFT,
    BannerOversize,
    DropEnded,
    RaffleEnded,
    InvalidRegistrationDeadline,
    InvalidTimeLimit,
    NeedProcessRA,
    NeedProcessR,
    HaveInvalidRARecords,
    HaveInvalidRRecords,
    InsufficientBalance,
    InvalidFloatEvent,
    InvalidPacket,
    InvalidNumberOfWinners,
    InvalidCapacity,
    InvalidThreshold,
    InvalidIdenticalAmount,
    InvalidTotalAmount,
    InvalidTokenAmount,
    InvalidTokenBalance,
    EmptyFloatGroup,
    InsufficientNFTs
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hints);


/***/ }),

/***/ 4266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ txHandler)
/* harmony export */ });
/* unused harmony export TxStatus */
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_0__);

// Different from the response of FCL
// We don't need to show every status to users
const TxStatus = {
    // Initializing: Initialing
    // the transaction is waiting to be approved
    initializing () {
        return {
            status: "Initializing",
            error: null,
            txid: null
        };
    },
    // Pending: Pending & Finalized & Executed
    // the transaction has not been confirmed on chain
    pending (txid) {
        return {
            status: "Pending",
            error: null,
            txid: txid
        };
    },
    // Success: Sealed with no error
    success (txid) {
        return {
            status: "Success",
            error: null,
            txid: txid
        };
    },
    // Failed: Sealed with error
    failed (error, txid) {
        return {
            status: "Failed",
            error: error,
            txid: txid
        };
    }
};
const txHandler = async (txFunc, setTransactionInProgress, setTransactionStatus)=>{
    let transactionId = null;
    setTransactionInProgress(true);
    setTransactionStatus(TxStatus.initializing());
    try {
        transactionId = await txFunc();
        setTransactionStatus(TxStatus.pending(transactionId));
        let res = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_0__.tx(transactionId).onceSealed();
        if (res.status === 4) {
            if (res.statusCode === 0) {
                setTransactionStatus(TxStatus.success(transactionId));
            } else {
                setTransactionStatus(TxStatus.failed(res.errorMessage, transactionId));
            }
            setTimeout(()=>setTransactionInProgress(false)
            , 3000);
        }
        return res;
    } catch (e) {
        console.log(e);
        setTransactionStatus(TxStatus.failed(e, null));
        setTimeout(()=>setTransactionInProgress(false)
        , 3000);
    }
};


/***/ })

};
;