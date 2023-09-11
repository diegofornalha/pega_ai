"use strict";
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 3130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClaimCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9200);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5023);
/* harmony import */ var _lib_cloud_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2618);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);
swr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const isClaimable = (claimStatus)=>{
    if (claimStatus && claimStatus.eligibility.status.rawValue === "0" && claimStatus.availability.status.rawValue === "0") {
        return true;
    }
    return false;
};
// [Emoji, Description, Amount, Title]
const parseClaimStatus = (user, claimStatus, tokenSymbol, isPreview, distributor)=>{
    const elements = {
        emoji: "\uD83C\uDF89",
        description: "VOC\xca EST\xc1 ELEG\xcdVEL PARA",
        amount: `❓ FLOW`,
        title: "PREVIEWING"
    };
    if (isPreview) {
        return elements;
    }
    if (!user || !user.loggedIn) {
        elements.emoji = "\uD83D\uDC40";
        elements.description = "CONECTE A CARTEIRA PARA VERIFICAR A ELEGIBILIDADE";
        elements.amount = null;
        elements.title = "Conectar carteira";
        return elements;
    }
    if (!claimStatus) {
        elements.emoji = "\u2753";
        elements.description = "UNKNOWN STATUS";
        elements.amount = null;
        elements.title = "UNKNOWN";
        return elements;
    }
    const isRandomDistributor = distributor.type === "Random";
    let eStatus = claimStatus.eligibility.status.rawValue;
    let amount = `${new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(claimStatus.eligibility.eligibleAmount).toString()} ${tokenSymbol}`;
    if (eStatus === "0") {
        elements.description = "YOU ARE ELIGIBLE FOR";
        elements.title = "CLAIM";
        if (isRandomDistributor) {
            elements.emoji = "\uD83C\uDFB2";
            elements.amount = `❓ ${tokenSymbol}`;
        } else {
            elements.emoji = "\uD83C\uDF89";
            elements.amount = amount;
        }
    } else if (eStatus === "1") {
        elements.emoji = "\uD83D\uDE49";
        elements.description = "YOU ARE NOT ELIGIBLE";
        elements.title = "NOT ELIGIBLE";
        elements.amount = null;
    } else if (eStatus === "2") {
        elements.emoji = "\uD83C\uDF89";
        elements.description = "YOU HAVE CLAIMED";
        elements.title = "HAS CLAIMED";
        elements.amount = amount;
    }
    // availability
    let aStatus = claimStatus.availability.status.rawValue;
    if (aStatus === "1") {
        // ended expired and no capacity
        elements.emoji = "\u26D4\uFE0F";
        elements.title = "DROP ENDED";
        if (eStatus != "2") {
            elements.description = "NO LONGER AVAILABLE";
            elements.amount = null;
        }
    } else if (aStatus === "3") {
        elements.emoji = "\u26D4\uFE0F";
        elements.title = "DROP EXPIRED";
        if (eStatus != "2") {
            elements.description = "NO LONGER AVAILABLE";
            elements.amount = null;
        }
    } else if (aStatus === "4") {
        elements.emoji = "\u26D4\uFE0F";
        elements.title = "DROP ENDED";
        if (eStatus != "2") {
            elements.description = "NO LONGER AVAILABLE";
            elements.amount = null;
        }
    } else if (aStatus === "2") {
        elements.emoji = "\uD83D\uDD59";
        elements.title = "NOT STARTED YET";
    } else if (aStatus === "5") {
        elements.emoji = "\u23F8\uFE0F";
        elements.title = "DROP PAUSED";
    }
    return elements;
};
function ClaimCard(props) {
    const [transactionInProgress, setTransactionInProgress] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_7__/* .transactionInProgressState */ .xr);
    const [, setTransactionStatus] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_7__/* .transactionStatusState */ .cY);
    const { mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__.useSWRConfig)();
    const { isPreview , drop , host , user , token , tokenInfo , claimStatus , setShowClaimedModal , setClaimedAmountInfo  } = props;
    const symbol = isPreview ? token && token.symbol : tokenInfo && tokenInfo.symbol;
    // [Emoji, Description, Amount, Title]
    const { emoji , description , amount , title  } = parseClaimStatus(user, claimStatus, symbol, isPreview, drop && drop.distributor);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col bg-white text-black min-w-[240px] sm:max-w-[240px] min-h-[240px] justify-center ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden p-5 shadow-drizzle ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block w-full text-center text-[60px]",
                    children: emoji
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block w-full mt-5 text-center text-lg font-bold font-flow",
                    children: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block w-full text-center mt-1 text-2xl font-bold font-flow text-drizzle-green",
                    children: amount
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(isPreview || user && user.loggedIn && !isClaimable(claimStatus) ? "bg-disabled-gray" : transactionInProgress ? "bg-drizzle-green-light" : "bg-drizzle-green hover:bg-drizzle-green-dark", `mt-5 h-[48px] text-base font-medium shadow-sm text-black rounded-2xl`),
                    disabled: isPreview || user && user.loggedIn && !isClaimable(claimStatus) || transactionInProgress,
                    onClick: async ()=>{
                        if (!user || !user.loggedIn) {
                            _onflow_fcl__WEBPACK_IMPORTED_MODULE_5__.authenticate();
                            return;
                        }
                        if (isPreview || !isClaimable(claimStatus) || !drop) {
                            return;
                        }
                        const res = await (0,_lib_cloud_transactions__WEBPACK_IMPORTED_MODULE_3__/* .claim */ .QS)(drop.dropID, host.address, tokenInfo, setTransactionInProgress, setTransactionStatus);
                        if (res && res.status === 4 && res.statusCode === 0) {
                            const claimedEvent = res.events.find((e)=>e.type.includes("DropClaimed")
                            );
                            if (claimedEvent && claimedEvent.data.amount) {
                                const claimedAmountInfo = `${new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(claimedEvent.data.amount).toString()} ${symbol}`;
                                setClaimedAmountInfo(claimedAmountInfo);
                                setShowClaimedModal(true);
                            }
                        }
                        mutate([
                            "claimStatusFetcher",
                            drop.dropID,
                            host.address,
                            user && user.addr
                        ]);
                        mutate([
                            "dropFetcher",
                            drop.dropID,
                            host.address
                        ]);
                    },
                    children: title
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DropCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5985);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5496);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5023);
/* harmony import */ var _common_ShareCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(702);
/* harmony import */ var _ClaimCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3130);
/* harmony import */ var _common_CriteriaCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6335);
/* harmony import */ var _common_TimeLimitCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(456);
/* harmony import */ var _common_TagsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ClaimCard__WEBPACK_IMPORTED_MODULE_9__, _common_CriteriaCard__WEBPACK_IMPORTED_MODULE_10__, _common_TagsCard__WEBPACK_IMPORTED_MODULE_12__]);
([_ClaimCard__WEBPACK_IMPORTED_MODULE_9__, _common_CriteriaCard__WEBPACK_IMPORTED_MODULE_10__, _common_TagsCard__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const MemoizeBanner = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ banner  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-[240px] bg-drizzle-green relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: banner,
            alt: "",
            layout: "fill",
            objectFit: "cover"
        })
    });
});
MemoizeBanner.displayName = "MemozieBanner";
const MemoizeName = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ name , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mb-2",
        children: url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-black text-3xl font-bold font-flow break-words underline decoration-drizzle-green decoration-2",
            children: [
                name,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "inline-flex items-baseline",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ExternalLinkIcon, {
                        className: "h-5 w-5 text-drizzle-green"
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            className: "text-black text-2xl font-bold font-flow break-words",
            children: name
        })
    });
});
MemoizeName.displayName = "MemoizeName";
const MemoizeBasicInfo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ nameService , host , createdAt , token , eligibilityMode , packetMode , drop  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col -mt-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TagsCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                info: {
                    drop: drop,
                    type: "DROP",
                    token: token,
                    eligibilityMode: eligibilityMode,
                    packetMode: packetMode
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "w-full font-flow text-sm text-gray-400 break-words",
                children: [
                    "Created by ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].appURL */ .Z.appURL}/${typeof host == "string" ? host : host.address}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-black underline decoration-drizzle-green decoration-2",
                            children: typeof host == "string" ? host : (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .displayUsername */ .fw)(host, nameService)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-full font-flow text-sm text-gray-400 break-words",
                children: `Created at ${createdAt.toLocaleString()}`
            })
        ]
    });
});
MemoizeBasicInfo.displayName = "MemoizeBasicInfo";
const MemoizeDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ description  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mb-10",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "w-full font-flow text-base break-words whitespace-pre-wrap",
            children: description
        })
    });
});
MemoizeDescription.displayName = "MemoizeDescription";
function DropCard(props) {
    const [transactionInProgress, setTransactionInProgress] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .transactionInProgressState */ .xr);
    const [, setTransactionStatus] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .transactionStatusState */ .cY);
    const [nameService, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .nameServiceState */ .$F);
    const isPreview = props.isPreview == true;
    const setShowClaimedModal = props.setShowClaimedModal;
    const setClaimedAmountInfo = props.setClaimedAmountInfo;
    // Only created Drop has claimStatus
    const { drop , claimStatus , user , token , eligibilityMode , packetMode , floatGroup , floatEventPairs , threshold  } = props;
    const dropID = drop && drop.dropID || props.dropID;
    const name = drop && drop.name || props.name;
    const host = drop && drop.host || props.host;
    const description = drop && drop.description || props.description;
    const url = drop && drop.url || props.url;
    const banner = drop && drop.image || props.banner;
    const createdAt = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(drop && drop.createdAt || props.createdAt);
    const startAt = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(drop && drop.startAt || props.startAt);
    const endAt = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(drop && drop.endAt || props.endAt);
    const tokenInfo = drop && drop.tokenInfo || props.tokenInfo;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full justify-center flex flex-col gap-y-8 mt-2 mb-2 sm:flex-row sm:gap-x-8 text-black",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col shadow-drizzle bg-white ring-1 ring-black ring-opacity-5 items-stretch rounded-3xl overflow-hidden grow sm:min-w-[320px] md:w-[480px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemoizeBanner, {
                        banner: banner || "/banner.png"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col p-5 sm:p-8 gap-y-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemoizeName, {
                                name: name,
                                url: url
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemoizeBasicInfo, {
                                nameService: nameService,
                                host: host,
                                createdAt: createdAt,
                                token: token,
                                eligibilityMode: eligibilityMode,
                                packetMode: packetMode,
                                drop: drop
                            }),
                            startAt || endAt ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TimeLimitCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                startAt: startAt,
                                endAt: endAt
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemoizeDescription, {
                                description: description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-y-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CriteriaCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        type: "DROP",
                        drop: drop,
                        eligibilityMode: eligibilityMode,
                        floatGroup: floatGroup,
                        floatEventPairs: floatEventPairs,
                        threshold: threshold
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClaimCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        isPreview: isPreview,
                        claimStatus: claimStatus,
                        drop: drop,
                        host: host,
                        token: token,
                        tokenInfo: tokenInfo,
                        user: user,
                        setShowClaimedModal: setShowClaimedModal,
                        setClaimedAmountInfo: setClaimedAmountInfo
                    }),
                    dropID && host ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ShareCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        url: `${_publicConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].appURL */ .Z.appURL}/${host.address}/drops/${dropID}`
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ShareCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        disabled: true,
                        url: `${_publicConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].appURL */ .Z.appURL}/create/ft_drop`
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StatsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9200);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5985);
/* harmony import */ var _PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5023);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5496);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__]);
_PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const extractStatsPreview = (packetMode, randomTotalAmount, identicalAmount, totalTokenAmount, capacity, symbol)=>{
    const red = "border-red-400";
    const green = "border-drizzle-green";
    if (!packetMode) {
        const balance = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(totalTokenAmount);
        return [
            {
                title: "DROP Balance",
                content: `${balance.toString()} ${symbol}`,
                color: balance.isZero() ? red : green
            },
            {
                title: "Claimed Amount",
                content: `0 ${symbol}`,
                color: green
            },
            {
                title: "Claimed Count",
                content: `0`,
                color: green
            }
        ];
    }
    if (packetMode) {
        let balance;
        if (packetMode.key === _PacketModeSelector__WEBPACK_IMPORTED_MODULE_4__/* .PacketModeRandom.key */ .pf.key) {
            balance = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(randomTotalAmount);
        } else {
            balance = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(identicalAmount).mul(new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(capacity));
        }
        return [
            {
                title: "DROP Balance",
                content: `${balance.toString()} ${symbol}`,
                color: balance.isZero() ? red : green
            },
            {
                title: `Claimed Amount`,
                content: `0 ${symbol}`,
                color: green
            },
            {
                title: "Claimed Count / Total Capacity",
                content: `0 / ${capacity}`,
                color: green
            }
        ];
    }
    return [];
};
const extractStats = (drop)=>{
    const distributor = drop.distributor;
    const symbol = drop.tokenInfo.symbol;
    const claimedCount = Object.keys(drop.claimedRecords).length;
    const red = "border-red-400";
    const green = "border-drizzle-green";
    if (distributor.type === "Exclusive") {
        const balance = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(drop.dropVault.balance);
        return [
            {
                title: "DROP Balance",
                content: `${balance.toString()} ${symbol}`,
                color: balance.isZero() ? red : green
            },
            {
                title: "Claimed Amount",
                content: `${new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(drop.claimedAmount).toString()} ${symbol}`,
                color: green
            },
            {
                title: "Claimed Count",
                content: `${claimedCount}`,
                color: green
            }
        ];
    }
    // Random
    if (distributor.type === "Random") {
        const balance = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(drop.dropVault.balance);
        return [
            {
                title: "DROP Balance",
                content: `${balance.toString()} ${symbol}`,
                color: balance.isZero() ? red : green
            },
            {
                title: `Claimed Amount`,
                content: `${new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(drop.claimedAmount).toString()} ${symbol}`,
                color: green
            },
            {
                title: "Claimed Count / Total Capacity",
                content: `${claimedCount} / ${distributor.capacity}`,
                color: claimedCount == distributor.capacity ? red : green
            }
        ];
    }
    // Identical 
    if (distributor.type === "Identical") {
        const balance = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(drop.dropVault.balance);
        return [
            {
                title: "DROP Balance",
                content: `${balance.toString()} ${symbol}`,
                color: balance.isZero() ? red : green
            },
            {
                title: `Claimed Amount`,
                content: `${new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(drop.claimedAmount).toString()} ${symbol}`,
                color: green
            },
            {
                title: "Claimed Count / Total Capacity",
                content: `${claimedCount} / ${distributor.capacity}`,
                color: claimedCount == distributor.capacity ? red : green
            }
        ];
    }
};
const parseClaimed = (claimedRecords)=>{
    let claimed = [];
    for (let [address, record] of Object.entries(claimedRecords)){
        const _record = {
            account: address,
            domains: record.domains,
            amount: new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(record.amount).toString(),
            rawClaimedAt: parseFloat(record.claimedAt),
            claimedAt: new Date(parseFloat(record.claimedAt) * 1000).toLocaleString()
        };
        claimed.push(_record);
    }
    return claimed.sort((a, b)=>b.rawClaimedAt - a.rawClaimedAt
    );
};
// The first one who get max tokens.
// claimed should be ordered for latest to old
const getWinner = (drop, claimed)=>{
    if (!drop) return null;
    if (drop.distributor.type != "Random") return null;
    if (claimed.length != drop.distributor.capacity) {
        return null;
    }
    let max = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(0);
    let winner = null;
    for(let i = 0; i < claimed.length; i++){
        const record = claimed[i];
        const amount = new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(record.amount);
        if (amount.cmp(max) == 1) {
            max = amount;
            winner = record.account;
        }
    }
    return winner;
};
function StatsCard(props) {
    // isPreview/token for Preview, drop for real data
    const { isPreview , token , packetMode , randomTotalAmount , identicalAmount , totalTokenAmount , capacity , drop  } = props;
    const symbol = drop && drop.tokenInfo.symbol || isPreview && token && token.symbol;
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const [nameService, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_7__/* .nameServiceState */ .$F);
    const pageSize = 10;
    const claimed = drop ? parseClaimed(drop.claimedRecords) : [];
    const winner = getWinner(drop, claimed);
    const cards = drop ? extractStats(drop) : extractStatsPreview(packetMode, randomTotalAmount, identicalAmount, totalTokenAmount, capacity, symbol);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "px-3 text-2xl font-bold font-flow",
                children: "DATA"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-col mt-5 mb-10 justify-center gap-y-3 items-stretch sm:flex-row sm:gap-x-3",
                children: cards.length > 0 ? cards.map((card, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full rounded-2xl ring-1 ring-black ring-opacity-5 overflow-hidden ${card.color} flex flex-col bg-white px-5 pt-5 pb-10 gap-y-1 shadow`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-sm font-medium text-gray-500 font-flow",
                                children: card.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-2xl font-bold font-flow text-drizzle-green",
                                children: card.content
                            })
                        ]
                    }, index);
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "px-3 text-2xl font-bold font-flow",
                children: "CLAIMERS"
            }),
            claimed.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full p-4 flex flex-col mb-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "-my-2 -mx-4 overflow-x-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "inline-block min-w-full py-2 align-middle px-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "min-w-full divide-y divide-gray-300",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: "bg-gray-50",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        scope: "col",
                                                        className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                                                        children: "Claimer"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        scope: "col",
                                                        className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                        children: "Amount"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        scope: "col",
                                                        className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                        children: "Claimed At"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            className: "divide-y divide-gray-200 bg-white",
                                            children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .getItemsInPage */ .qX)(claimed, currentPage, pageSize).map((claim, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "py-3.5 pl-4 pr-3 text-left text-sm sm:pl-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: `${_publicConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].flowscanURL */ .Z.flowscanURL}/account/${claim.account}`,
                                                                className: `block ${claim.account == winner ? "text-yellow-400 font-bold" : "text-gray-900 font-medium"} break-words max-w-[200px]`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .displayUsername */ .fw)(claim, nameService)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "whitespace-nowrap px-3 py-3.4 text-sm text-gray-500",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `${claim.account == winner ? "text-yellow-400 font-bold" : "text-gray-500"}`,
                                                                children: [
                                                                    new (decimal_js__WEBPACK_IMPORTED_MODULE_1___default())(claim.amount).toString(),
                                                                    " ",
                                                                    symbol
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "whitespace-nowrap px-3 py-3.4 text-sm text-gray-500",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-gray-500",
                                                                children: claim.claimedAt
                                                            })
                                                        })
                                                    ]
                                                }, index)
                                            )
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    claimed.length > pageSize ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-2 flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-gray-50 p-2 rounded-full overflow-hidden shadow ring-1 ring-black ring-opacity-5",
                                disabled: currentPage == 1,
                                onClick: ()=>{
                                    if (currentPage == 1) {
                                        return;
                                    }
                                    setCurrentPage(currentPage - 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ArrowLeftIcon, {
                                    className: `h-5 w-5 ${currentPage == 1 ? "text-gray-400" : "text-black"}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-gray-50 h-9 w-9 rounded-full overflow-hidden shadow ring-1 ring-black ring-opacity-5",
                                disabled: true,
                                children: currentPage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-gray-50 p-2 rounded-full overflow-hidden shadow ring-1 ring-black ring-opacity-5",
                                disabled: currentPage * pageSize >= claimed.length,
                                onClick: ()=>{
                                    if (currentPage * pageSize >= claimed.length) {
                                        return;
                                    }
                                    setCurrentPage(currentPage + 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ArrowRightIcon, {
                                    className: `h-5 w-5 ${currentPage * pageSize >= claimed.length ? "text-gray-400" : "text-black"}`
                                })
                            })
                        ]
                    }) : null
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-10 w-full flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "mt-10 leading-10 font-flow font-medium text-base text-gray-500",
                    children: "This DROP has not been claimed yet"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CM": () => (/* binding */ endDrop),
/* harmony export */   "QS": () => (/* binding */ claim),
/* harmony export */   "_s": () => (/* binding */ createDrop),
/* harmony export */   "eK": () => (/* binding */ togglePause),
/* harmony export */   "rB": () => (/* binding */ deleteDrop)
/* harmony export */ });
/* unused harmony exports withdrawAllFunds, depositToDrop, test */
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);



const FungibleTokenPath = "0xFungibleToken";
const CloudPath = "0xCloud";
const EligibilityReviewersPath = "0xEligibilityVerifiers";
const DistributorsPath = "0xDistributors";
const DrizzleRecorderPath = "0xDrizzleRecorder";
const createDrop = async (name, description, image, url, startAt, endAt, // Token from flow-token-list
token, withExclusiveWhitelist, exclusiveWhitelist, whitelistTokenAmount, withWhitelist, whitelist, withIdenticalDistributor, capacity, amountPerEntry, withRandomDistributor, totalRandomAmount, withFloats, threshold, eventIDs, eventHosts, withFloatGroup, groupName, groupHost, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doCreateDrop(name, description, image, url, startAt, endAt, // Token from flow-token-list
        token, withExclusiveWhitelist, exclusiveWhitelist, whitelistTokenAmount, withWhitelist, whitelist, withIdenticalDistributor, capacity, amountPerEntry, withRandomDistributor, totalRandomAmount, withFloats, threshold, eventIDs, eventHosts, withFloatGroup, groupName, groupHost);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const claim = async (dropID, host, tokenInfo, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doClaim(dropID, host, tokenInfo);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const togglePause = async (dropID, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doTogglePause(dropID);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const deleteDrop = async (dropID, tokenIssuer, tokenReceiverPath, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doDeleteDrop(dropID, tokenIssuer, tokenReceiverPath);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const withdrawAllFunds = async (dropID, tokenIssuer, tokenReceiverPath, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doWithdrawAllFunds(dropID, tokenIssuer, tokenReceiverPath);
    };
    return await txHandler(txFunc, setTransactionInProgress, setTransactionStatus);
};
const endDrop = async (dropID, tokenIssuer, tokenReceiverPath, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doEndDrop(dropID, tokenIssuer, tokenReceiverPath);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const depositToDrop = async (dropID, tokenInfo, amount, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doDepositToDrop(dropID, tokenInfo, amount);
    };
    return await txHandler(txFunc, setTransactionInProgress, setTransactionStatus);
};
const test = async (setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doTest();
    };
    return await txHandler(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doCreateDrop = async (name, description, image, url, startAt, endAt, // Token from flow-token-list
token, withExclusiveWhitelist, exclusiveWhitelist, whitelistTokenAmount, withWhitelist, whitelist, withIdenticalDistributor, capacity, amountPerEntry, withRandomDistributor, totalRandomAmount, withFloats, threshold, eventIDs, eventHosts, withFloatGroup, groupName, groupHost)=>{
    const tokenIssuer = token.address;
    const tokenContractName = token.contractName;
    const tokenSymbol = token.symbol;
    const tokenProviderPath = token.path.vault.replace("/storage/", "");
    const tokenBalancePath = token.path.balance.replace("/public/", "");
    const tokenReceiverPath = token.path.receiver.replace("/public/", "");
    const code = `
  import FungibleToken from 0xFungibleToken
  import Cloud from 0xCloud
  import EligibilityVerifiers from 0xEligibilityVerifiers
  import Distributors from 0xDistributors
  
  transaction(
      name: String,
      description: String,
      image: String?,
      url: String?,
      startAt: UFix64?,
      endAt: UFix64?,
      // TokenInfo
      tokenIssuer: Address,
      tokenContractName: String,
      tokenSymbol: String,
      tokenProviderPath: String,
      tokenBalancePath: String,
      tokenReceiverPath: String,
      // EligibilityVerifier
      // Distributor
      withExclusiveWhitelist: Bool,
      exclusiveWhitelist: {Address: UFix64},
      whitelistTokenAmount: UFix64?,
  
      withWhitelist: Bool,
      whitelist: {Address: Bool},
  
      withIdenticalDistributor: Bool,
      capacity: UInt32?,
      amountPerEntry: UFix64?,
  
      withRandomDistributor: Bool,
      totalRandomAmount: UFix64?,
  
      withFloats: Bool,
      threshold: UInt32?,
      eventIDs: [UInt64],
      eventHosts: [Address],
  
      withFloatGroup: Bool,
      floatGroupName: String?,
      floatGroupHost: Address?
    ) {
      let dropCollection: &Cloud.DropCollection
      let vault: &FungibleToken.Vault
  
      prepare(acct: AuthAccount) {
          if acct.borrow<&Cloud.DropCollection>(from: Cloud.DropCollectionStoragePath) == nil {
              acct.save(<- Cloud.createEmptyDropCollection(), to: Cloud.DropCollectionStoragePath)
              let cap = acct.link<&Cloud.DropCollection{Cloud.IDropCollectionPublic}>(
                  Cloud.DropCollectionPublicPath,
                  target: Cloud.DropCollectionStoragePath
              ) ?? panic("Could not link DropCollection to PublicPath")
          }
  
          self.dropCollection = acct.borrow<&Cloud.DropCollection>(from: Cloud.DropCollectionStoragePath)
              ?? panic("Could not borrow DropCollection from signer")
  
          let providerPath = StoragePath(identifier: tokenProviderPath)!
          self.vault = acct.borrow<&FungibleToken.Vault>(from: providerPath)
              ?? panic("Could not borrow Vault from signer")
      }
  
      execute {
          let tokenInfo = Cloud.TokenInfo(
              account: tokenIssuer,
              contractName: tokenContractName,
              symbol: tokenSymbol,
              providerPath: tokenProviderPath,
              balancePath: tokenBalancePath,
              receiverPath: tokenReceiverPath
          )
          
          var amount: UFix64 = 0.0
          var distributor: {Distributors.IDistributor}? = nil
          if withExclusiveWhitelist {
              distributor = Distributors.Exclusive(distributeList: exclusiveWhitelist)
              amount = whitelistTokenAmount!
          } else if withIdenticalDistributor {
              distributor = Distributors.Identical(
                  capacity: capacity!,
                  amountPerEntry: amountPerEntry!
              )
              amount = UFix64(capacity!) * amountPerEntry!
          } else if withRandomDistributor {
              distributor = Distributors.Random(
                  capacity: capacity!,
                  totalAmount: totalRandomAmount!
              )
              amount = totalRandomAmount!
          } else {
              panic("invalid distributor")
          }
          
          var verifier: {EligibilityVerifiers.IEligibilityVerifier}? = nil
          if withExclusiveWhitelist {
              verifier = EligibilityVerifiers.Whitelist(
                  whitelist: exclusiveWhitelist
              )
          } else if withWhitelist {
              verifier = EligibilityVerifiers.Whitelist(
                  whitelist: whitelist
              )
          } else if withFloats {
              assert(eventIDs.length == eventHosts.length, message: "eventIDs should have the same length with eventHosts")
              let events: [EligibilityVerifiers.FLOATEventData] = []
              var counter = 0
              while counter < eventIDs.length {
                  let event = EligibilityVerifiers.FLOATEventData(host: eventHosts[counter], eventID: eventIDs[counter])
                  events.append(event)
                  counter = counter + 1
              }
              verifier = EligibilityVerifiers.FLOATsV2(
                  events: events,
                  mintedBefore: getCurrentBlock().timestamp,
                  threshold: threshold!
              )
          } else if withFloatGroup {
              let groupData = EligibilityVerifiers.FLOATGroupData(
                  host: floatGroupHost!,
                  name: floatGroupName!
              )
              verifier = EligibilityVerifiers.FLOATGroupV2(
                  group: groupData,
                  mintedBefore: getCurrentBlock().timestamp,
                  threshold: threshold!
              )
          } else {
              panic("invalid verifier")
          }
  
          self.dropCollection.createDrop(
              name: name, 
              description: description, 
              host: self.vault.owner!.address, 
              image: image,
              url: url,
              startAt: startAt,
              endAt: endAt,
              tokenInfo: tokenInfo,
              distributor: distributor!,
              verifyMode: EligibilityVerifiers.VerifyMode.all,
              verifiers: [verifier!], 
              vault: <- self.vault.withdraw(amount: amount),
              extraData: {}
          )
      }
    }
    `.replace(FungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fungibleTokenAddress */ .Z.fungibleTokenAddress).replace(CloudPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].cloudAddress */ .Z.cloudAddress).replace(EligibilityReviewersPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].eligibilityVerifiersAddress */ .Z.eligibilityVerifiersAddress).replace(DistributorsPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].distributorsAddress */ .Z.distributorsAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>{
            const args = [
                arg(name, t.String),
                arg(description, t.String),
                arg(image, t.Optional(t.String)),
                arg(url, t.Optional(t.String)),
                arg(startAt, t.Optional(t.UFix64)),
                arg(endAt, t.Optional(t.UFix64)),
                arg(tokenIssuer, t.Address),
                arg(tokenContractName, t.String),
                arg(tokenSymbol, t.String),
                arg(tokenProviderPath, t.String),
                arg(tokenBalancePath, t.String),
                arg(tokenReceiverPath, t.String),
                arg(withExclusiveWhitelist, t.Bool),
                arg(exclusiveWhitelist, t.Dictionary({
                    key: t.Address,
                    value: t.UFix64
                })),
                arg(whitelistTokenAmount, t.Optional(t.UFix64)),
                arg(withWhitelist, t.Bool),
                arg(whitelist, t.Dictionary({
                    key: t.Address,
                    value: t.Bool
                })),
                arg(withIdenticalDistributor, t.Bool),
                arg(capacity, t.Optional(t.UInt32)),
                arg(amountPerEntry, t.Optional(t.UFix64)),
                arg(withRandomDistributor, t.Bool),
                arg(totalRandomAmount, t.Optional(t.UFix64)),
                arg(withFloats, t.Bool),
                arg(threshold, t.Optional(t.UInt32)),
                arg(eventIDs, t.Array(t.UInt64)),
                arg(eventHosts, t.Array(t.Address)),
                arg(withFloatGroup, t.Bool),
                arg(groupName, t.Optional(t.String)),
                arg(groupHost, t.Optional(t.Address))
            ];
            return args;
        },
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const doClaim = async (dropID, host, // TokenInfo in Drizzle.cdc
tokenInfo)=>{
    const tokenIssuer = tokenInfo.account;
    const tokenContractName = tokenInfo.contractName;
    const tokenProviderPath = tokenInfo.providerPath.identifier;
    const tokenBalancePath = tokenInfo.balancePath.identifier;
    const tokenReceiverPath = tokenInfo.receiverPath.identifier;
    const code = `
  import FungibleToken from 0xFungibleToken
  import ${tokenContractName} from ${tokenIssuer}
  import Cloud from 0xCloud
  import DrizzleRecorder from 0xDrizzleRecorder

  transaction(dropID: UInt64, host: Address) {
      let drop: &{Cloud.IDropPublic}
      let receiver : &${tokenContractName}.Vault{FungibleToken.Receiver}
      let recorderRef: &DrizzleRecorder.Recorder

      prepare(acct: AuthAccount) {
          let dropCollection = getAccount(host)
              .getCapability(Cloud.DropCollectionPublicPath)
              .borrow<&Cloud.DropCollection{Cloud.IDropCollectionPublic}>()
              ?? panic("Could not borrow the public DropCollection from the host")
          
          let drop = dropCollection.borrowPublicDropRef(dropID: dropID)
              ?? panic("Could not borrow the public Drop from the collection")

          let providerPath = StoragePath(identifier: "${tokenProviderPath}")!
          let receiverPath = PublicPath(identifier: "${tokenReceiverPath}")!
          let balancePath = PublicPath(identifier: "${tokenBalancePath}")!
          if (acct.borrow<&${tokenContractName}.Vault>(from: providerPath) == nil) {
            acct.save(<-${tokenContractName}.createEmptyVault(), to: providerPath)

            acct.link<&${tokenContractName}.Vault{FungibleToken.Receiver}>(
                receiverPath,
                target: providerPath
            )

            acct.link<&${tokenContractName}.Vault{FungibleToken.Balance}>(
                balancePath,
                target: providerPath
            )
        }

        if (acct.borrow<&DrizzleRecorder.Recorder>(from: DrizzleRecorder.RecorderStoragePath) == nil) {
          acct.save(<-DrizzleRecorder.createEmptyRecorder(), to: DrizzleRecorder.RecorderStoragePath)

          acct.link<&{DrizzleRecorder.IRecorderPublic}>(
              DrizzleRecorder.RecorderPublicPath,
              target: DrizzleRecorder.RecorderStoragePath
          )
        }
          
          self.drop = drop 
          self.receiver = acct
              .getCapability(receiverPath)
              .borrow<&${tokenContractName}.Vault{FungibleToken.Receiver}>()
              ?? panic("Could not borrow Receiver")

          self.recorderRef = acct
              .borrow<&DrizzleRecorder.Recorder>(from: DrizzleRecorder.RecorderStoragePath)
              ?? panic("Could not borrow Recorder")
      }

      execute {
        self.drop.claim(receiver: self.receiver, params: {
          "recorderRef": self.recorderRef
      })
      }
  }
  `.replace(FungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fungibleTokenAddress */ .Z.fungibleTokenAddress).replace(CloudPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].cloudAddress */ .Z.cloudAddress).replace(DrizzleRecorderPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].drizzleRecorderAddress */ .Z.drizzleRecorderAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(dropID, t.UInt64),
                arg(host, t.Address)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const doTogglePause = async (dropID)=>{
    const code = `
  import Cloud from 0xCloud

  transaction(dropID: UInt64) {
      let drop: &Cloud.Drop
  
      prepare(acct: AuthAccount) {
          let dropCollection = acct.borrow<&Cloud.DropCollection>(from: Cloud.DropCollectionStoragePath)
              ?? panic("Could not borrow dropCollection")
  
          self.drop = dropCollection.borrowDropRef(dropID: dropID)!
      }
  
      execute {
          self.drop.togglePause()
      }
  }
  `.replace(CloudPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].cloudAddress */ .Z.cloudAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(dropID, t.UInt64)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const doDeleteDrop = async (dropID, tokenIssuer, tokenReceiverPath)=>{
    const code = `
  import Cloud from 0xCloud
  import FungibleToken from 0xFungibleToken
  
  transaction(
      dropID: UInt64,
      tokenIssuer: Address,
      tokenReceiverPath: String
  ) {
  
      let dropCollection: &Cloud.DropCollection
      let receiver: &{FungibleToken.Receiver}
  
      prepare(acct: AuthAccount) {
          self.dropCollection = acct.borrow<&Cloud.DropCollection>(from: Cloud.DropCollectionStoragePath)
              ?? panic("Could not borrow dropCollection")
  
          let receiverPath = PublicPath(identifier: tokenReceiverPath)!
          self.receiver = acct.getCapability(receiverPath).borrow<&{FungibleToken.Receiver}>()
              ?? panic("Could not borrow Receiver from signer")
      }
  
      execute {
         self.dropCollection.deleteDrop(dropID: dropID, receiver: self.receiver) 
      }
  }
  `.replace(FungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fungibleTokenAddress */ .Z.fungibleTokenAddress).replace(CloudPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].cloudAddress */ .Z.cloudAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(dropID, t.UInt64),
                arg(tokenIssuer, t.Address),
                arg(tokenReceiverPath, t.String)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const doEndDrop = async (dropID, tokenIssuer, tokenReceiverPath)=>{
    const code = `
  import Cloud from 0xCloud
  import FungibleToken from 0xFungibleToken
  
  transaction(
    dropID: UInt64,
    tokenIssuer: Address,
    tokenReceiverPath: String
  ) {

      let drop: &Cloud.Drop
      let receiver: &{FungibleToken.Receiver}

      prepare(acct: AuthAccount) {
          let dropCollection = acct.borrow<&Cloud.DropCollection>(from: Cloud.DropCollectionStoragePath)
              ?? panic("Could not borrow dropCollection")
          self.drop = dropCollection.borrowDropRef(dropID: dropID)!

          let receiverPath = PublicPath(identifier: tokenReceiverPath)!
          self.receiver = acct.getCapability(receiverPath).borrow<&{FungibleToken.Receiver}>()
              ?? panic("Could not borrow Receiver from signer")
      }

      execute {
          self.drop.end(receiver: self.receiver)
      }
  }
  `.replace(FungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fungibleTokenAddress */ .Z.fungibleTokenAddress).replace(CloudPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].cloudAddress */ .Z.cloudAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(dropID, t.UInt64),
                arg(tokenIssuer, t.Address),
                arg(tokenReceiverPath, t.String)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const doDepositToDrop = async (dropID, tokenInfo, amount)=>{
    const tokenIssuer = tokenInfo.account;
    const tokenContractName = tokenInfo.contractName;
    const tokenProviderPath = tokenInfo.providerPath.identifier;
    const code = `
  import Cloud from 0xCloud
  import ${tokenContractName} from ${tokenIssuer}
  
  transaction(dropID: UInt64, amount: UFix64) {
      let drop: &Cloud.Drop
      let vault: &${tokenContractName}.Vault
  
      prepare(acct: AuthAccount) {
          let dropCollection = acct.borrow<&Cloud.DropCollection>(from: Cloud.DropCollectionStoragePath)
              ?? panic("Could not borrow dropCollection")

          let providerPath = StoragePath(identifier: "${tokenProviderPath}")!
          self.vault = acct.borrow<&${tokenContractName}.Vault>(from: providerPath)
              ?? panic("Could not borrow ${tokenProviderPath}")
  
          self.drop = dropCollection.borrowDropRef(dropID: dropID)!
      }
  
      execute {
          let v <- self.vault.withdraw(amount: amount)
          self.drop.deposit(from: <- v)
      }
  }
  `.replace(CloudPath, publicConfig.cloudAddress).replace("0xFUSD", tokenIssuer).replace("FUSD", tokenContractName).replace("fusdVault", tokenProviderPath);
    const transactionId = await fcl.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(dropID, t.UInt64),
                arg(amount, t.UFix64)
            ]
        ,
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        limit: 9999
    });
    return transactionId;
};


/***/ })

};
;