"use strict";
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 5230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9200);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5023);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5496);
/* harmony import */ var _lib_mist_transactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6887);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const isClaimable = (claimStatus)=>{
    if (!claimStatus) return false;
    let aStatus = claimStatus.availability.status.rawValue;
    let eStatusR = claimStatus.eligibilityForRegistration.status.rawValue;
    let eStatusC = claimStatus.eligibilityForClaim.status.rawValue;
    if (aStatus == "2" && eStatusR == "0") return true;
    if ((aStatus == "3" || aStatus == "4") && eStatusC == "1") return true;
    return false;
};
// [Emoji, Description, Amount, Title]
const parseClaimStatus = (user, claimStatus, displayName, isPreview)=>{
    const elements = {
        emoji: "\uD83C\uDF89",
        description: "YOU WON",
        amount: `${displayName} #ID`,
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
    let aStatus = claimStatus.availability.status.rawValue;
    let eStatusR = claimStatus.eligibilityForRegistration.status.rawValue;
    let eStatusC = claimStatus.eligibilityForClaim.status.rawValue;
    let eligibleNFT = claimStatus.eligibilityForClaim.eligibleNFTs[0];
    let winnerAmount = `${displayName} #${eligibleNFT}`;
    if (aStatus === "1") {
        // ended expired and no capacity
        elements.emoji = "\u26D4\uFE0F";
        elements.title = "RAFFLE ENDED";
        // Keep the draw result
        if (eStatusC == "5") {
            elements.description = "YOU HAVE CLAIMED";
            elements.amount = winnerAmount;
        } else if (eStatusC == "1") {
            elements.description = "YOU WON";
            elements.amount = winnerAmount;
        } else {
            elements.description = "NO LONGER AVAILABLE";
            elements.amount = null;
        }
    } else if (aStatus === "5") {
        elements.emoji = "\u26D4\uFE0F";
        elements.title = "RAFFLE EXPIRED";
        // Keep the draw result
        if (eStatusC == "5") {
            elements.description = "YOU HAVE CLAIMED";
            elements.amount = winnerAmount;
        } else if (eStatusC == "1") {
            elements.description = "YOU WON";
            elements.amount = winnerAmount;
        } else {
            elements.description = "NO LONGER AVAILABLE";
            elements.amount = null;
        }
    } else if (aStatus === "3") {
        if (eStatusC == "5") {
            elements.emoji = "\uD83C\uDF89";
            elements.description = "YOU HAVE CLAIMED";
            elements.amount = winnerAmount;
            elements.title = "HAVE CLAIMED";
        } else if (eStatusC == "1") {
            elements.emoji = "\uD83C\uDF89";
            elements.description = "YOU WON";
            elements.amount = winnerAmount;
            elements.title = "CLAIM";
        } else if (eStatusC == "3" && eStatusR == "4") {
            elements.emoji = "\uD83C\uDFB2";
            elements.description = "MAY YOU BE THE WINNER";
            elements.amount = null;
            elements.title = "RAFFLE DRAWING";
        } else if (eStatusR == "0") {
            // eligible for registration but not late
            elements.emoji = "\uD83E\uDDA5";
            elements.description = "YOU ARE LATE FOR REGISTRATION";
            elements.title = "TOO LATE";
            elements.amount = null;
        } else {
            elements.emoji = "\uD83D\uDE49";
            elements.description = "YOU ARE NOT ELIGIBLE";
            elements.title = "NOT ELIGIBLE";
            elements.amount = null;
        }
    } else if (aStatus === "4") {
        if (eStatusC == "5") {
            elements.emoji = "\uD83C\uDF89";
            elements.description = "YOU HAVE CLAIMED";
            elements.amount = winnerAmount;
            elements.title = "HAVE CLAIMED";
        } else if (eStatusC == "1") {
            elements.emoji = "\uD83C\uDF89";
            elements.description = "YOU WON";
            elements.amount = winnerAmount;
            elements.title = "CLAIM";
        } else if (eStatusC == "3" && eStatusR == "4") {
            elements.emoji = "\uD83D\uDE48";
            elements.description = "YOU ARE NOT WINNER";
            elements.title = "NOT WINNER";
            elements.amount = null;
        } else if (eStatusR == "0") {
            // eligible for registration but not late
            elements.emoji = "\uD83E\uDDA5";
            elements.description = "YOU ARE LATE FOR REGISTRATION";
            elements.title = "TOO LATE";
            elements.amount = null;
        } else {
            elements.emoji = "\uD83D\uDE49";
            elements.description = "YOU ARE NOT ELIGIBLE";
            elements.title = "NOT ELIGIBLE";
            elements.amount = null;
        }
    } else if (aStatus === "0") {
        elements.emoji = "\uD83D\uDD59";
        elements.description = "DIDA DIDA ...";
        elements.title = "NOT STARTED YET";
        elements.amount = null;
    } else if (aStatus === "6") {
        elements.emoji = "\u23F8\uFE0F";
        elements.title = "RAFFLE PAUSED";
        if (eStatusC == "5") {
            elements.description = "YOU HAVE CLAIMED";
            elements.amount = winnerAmount;
            elements.description = "YOU WON";
            elements.amount = winnerAmount;
        } else if (eStatusC == "3") {
            if (eStatusR == "4") {
                elements.description = "YOU HAVE REGISTERED";
                elements.amount = null;
            } else if (eStatusR == "2") {
                elements.description = "YOU ARE NOT ELIGIBLE";
                elements.amount = null;
            } else if (eStatusR == "0") {
                elements.description = "YOU ARE ELIGIBLE";
                elements.amount = null;
            }
        }
    } else if (aStatus === "2") {
        if (eStatusR === "0") {
            elements.emoji = "\u2705";
            elements.description = "YOU ARE ELIGIBLE";
            elements.title = "REGISTER NOW";
            elements.amount = null;
        } else if (eStatusR === "2") {
            elements.emoji = "\uD83D\uDE49";
            elements.description = "YOU ARE NOT ELIGIBLE";
            elements.title = "NOT ELIGIBLE";
            elements.amount = null;
        } else if (eStatusR === "4") {
            elements.emoji = "\u2705";
            elements.description = "YOU HAVE REGISTERED";
            elements.title = "COME BACK LATER";
            elements.amount = null;
        }
    }
    return elements;
};
function ActionCard(props) {
    const [transactionInProgress, setTransactionInProgress] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__/* .transactionInProgressState */ .xr);
    const [, setTransactionStatus] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__/* .transactionStatusState */ .cY);
    const { mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.useSWRConfig)();
    const { isPreview , raffle , host , user , nft , claimStatus , setShowClaimedModal , setShowRegisteredModal , setRewardInfo  } = props;
    const displayName = isPreview ? nft && nft.name : raffle.nftInfo && raffle.nftInfo.name;
    // [Emoji, Description, Amount, Title]
    const { emoji , description , amount , title  } = parseClaimStatus(user, claimStatus, displayName, isPreview);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col bg-white text-black min-w-[240px] sm:max-w-[240px] min-h-[240px] justify-center ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden p-5 shadow-drizzle ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block w-full text-center text-[60px]",
                    children: emoji
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block w-full mt-5 text-center text-lg font-semibold font-flow",
                    children: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block w-full text-center mt-1 text-xl font-bold font-flow text-drizzle-green break-words",
                    children: amount
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .AK)(isPreview || user && user.loggedIn && !isClaimable(claimStatus) ? "bg-disabled-gray" : transactionInProgress ? "bg-drizzle-green-light" : "bg-drizzle-green hover:bg-drizzle-green-dark", `mt-5 h-[48px] text-base font-medium shadow-sm text-black rounded-2xl`),
                    disabled: isPreview || user && user.loggedIn && !isClaimable(claimStatus) || transactionInProgress,
                    onClick: async ()=>{
                        if (!user || !user.loggedIn) {
                            _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__.authenticate();
                            return;
                        }
                        if (isPreview || !isClaimable(claimStatus) || !raffle) {
                            return;
                        }
                        // Registering
                        if (claimStatus.availability.status.rawValue == "2") {
                            const res = await (0,_lib_mist_transactions__WEBPACK_IMPORTED_MODULE_7__/* .register */ .z2)(raffle.raffleID, host.address, setTransactionInProgress, setTransactionStatus);
                            if (res && res.status === 4 && res.statusCode === 0) {
                                const event = res.events.find((e)=>e.type.includes("RaffleRegistered")
                                );
                                if (event) {
                                    setShowRegisteredModal(true);
                                }
                            }
                        } else if (claimStatus.availability.status.rawValue == "3" || claimStatus.availability.status.rawValue == "4") {
                            const res = await (0,_lib_mist_transactions__WEBPACK_IMPORTED_MODULE_7__/* .claim */ .QS)(raffle.raffleID, host.address, raffle.nftInfo, setTransactionInProgress, setTransactionStatus);
                            if (res && res.status === 4 && res.statusCode === 0) {
                                const event = res.events.find((e)=>e.type.includes("RaffleClaimed")
                                );
                                if (event) {
                                    setRewardInfo(amount);
                                    setShowClaimedModal(true);
                                }
                            }
                        }
                        mutate([
                            "raffleClaimStatusFetcher",
                            raffle.raffleID,
                            host.address,
                            user && user.addr
                        ]);
                        mutate([
                            "raffleFetcher",
                            raffle.raffleID,
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

/***/ 7425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NFTCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5023);




const getRarityColor = (rarityInfo)=>{
    if (rarityInfo == "rare") {
        return "text-blue-800 bg-blue-100";
    } else if (rarityInfo == "epic") {
        return "text-yellow-800 bg-yellow-100";
    } else if (rarityInfo == "legendary") {
        return "text-purple-800 bg-purple-100";
    } else {
        return "text-gray-800 bg-gray-100";
    }
};
function NFTCard(props) {
    const { tokenID , display , selectedTokens , setSelectedTokens , disabled  } = props;
    const isDisabled = disabled == true;
    const isSelected = selectedTokens && selectedTokens[tokenID] && selectedTokens[tokenID].isSelected == true ? true : false;
    const thumbnailURI = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .convertURI */ .bY)(display.thumbnail);
    const thumbnail = thumbnailURI == "" || !thumbnailURI ? "/drizzle.png" : thumbnailURI;
    const rarityInfo = display.extraData && (display.extraData["rarityDesc"] || display.extraData["rarityScore"]) || ([
        "common",
        "rare",
        "epic",
        "legendary"
    ].includes(display.description) ? display.description : false) // workaround
    ;
    const rarityColor = getRarityColor(rarityInfo);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-gray-800 bg-gray-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-blue-800 bg-blue-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-purple-800 bg-purple-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-yellow-800 bg-yellow-100"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .classNames */ .AK)(isDisabled ? `w-[124px]` : `w-[136px]`, isSelected ? `ring-2 ring-drizzle-green` : `ring-1 ring-black ring-opacity-5`, `bg-white h-52 rounded-2xl
        flex flex-col gap-y-1 pb-2 justify-between items-center shrink-0
        overflow-hidden shadow-md `),
                disabled: isDisabled,
                onClick: ()=>{
                    if (isDisabled) return;
                    let tokens = Object.assign({}, selectedTokens);
                    if (!tokens[tokenID] || tokens[tokenID].isSelected == false) {
                        tokens[tokenID] = {
                            isSelected: true,
                            selectedAt: new Date().getTime(),
                            display: display
                        };
                    } else {
                        tokens[tokenID] = {
                            isSelected: false,
                            selectedAt: 0,
                            display: display
                        };
                    }
                    setSelectedTokens(tokens);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full aspect-square bg-drizzle-green-ultralight relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: thumbnail,
                            alt: "",
                            layout: "fill",
                            priority: true,
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "px-3 max-h-12 overflow-hidden text-ellipsis font-flow font-semibold text-xs text-black",
                        children: `${display.name}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "px-3 font-flow font-medium text-xs text-gray-400",
                        children: `#${tokenID}`
                    }),
                    rarityInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `px-2 ${rarityColor} rounded-full font-flow font-medium text-xs`,
                        children: `${rarityInfo}`.toUpperCase()
                    }) : null
                ]
            })
        ]
    }, tokenID);
};


/***/ }),

/***/ 7296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RaffleCard)
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
/* harmony import */ var _common_CriteriaCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6335);
/* harmony import */ var _common_TimeLimitCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(456);
/* harmony import */ var _common_TagsCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4535);
/* harmony import */ var _ActionCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CriteriaCard__WEBPACK_IMPORTED_MODULE_9__, _common_TagsCard__WEBPACK_IMPORTED_MODULE_11__, _ActionCard__WEBPACK_IMPORTED_MODULE_12__]);
([_common_CriteriaCard__WEBPACK_IMPORTED_MODULE_9__, _common_TagsCard__WEBPACK_IMPORTED_MODULE_11__, _ActionCard__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













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
const MemoizeBasicInfo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ nameService , host , createdAt , nft , eligibilityMode , raffle  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col -mt-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TagsCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                info: {
                    raffle: raffle,
                    type: "RAFFLE",
                    eligibilityMode: eligibilityMode,
                    nft: nft
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
function RaffleCard(props) {
    const [transactionInProgress, setTransactionInProgress] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .transactionInProgressState */ .xr);
    const [, setTransactionStatus] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .transactionStatusState */ .cY);
    const [nameService, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_5__/* .nameServiceState */ .$F);
    const isPreview = props.isPreview == true;
    const setShowClaimedModal = props.setShowClaimedModal;
    const setShowRegisteredModal = props.setShowRegisteredModal;
    const setRewardInfo = props.setRewardInfo;
    // Only created Raffle has claimStatus
    const { raffle , claimStatus , user , nft , selectedTokens , eligibilityMode , floatGroup , floatEventPairs , threshold  } = props;
    const raffleID = raffle && raffle.raffleID || props.raffleID;
    const name = raffle && raffle.name || props.name;
    const host = raffle && raffle.host || props.host;
    const description = raffle && raffle.description || props.description;
    const url = raffle && raffle.url || props.url;
    const banner = raffle && raffle.image || props.banner;
    // TODO: registery => registry
    const registrationDeadline = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(raffle && raffle.registrationEndAt || props.registrationEndAt);
    const createdAt = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(raffle && raffle.createdAt || props.createdAt);
    const startAt = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(raffle && raffle.startAt || props.startAt);
    const endAt = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .convertCadenceDateTime */ .TH)(raffle && raffle.endAt || props.endAt);
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
                                nft: nft,
                                eligibilityMode: eligibilityMode,
                                raffle: raffle
                            }),
                            startAt || endAt || registrationDeadline ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_TimeLimitCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                startAt: startAt,
                                endAt: endAt,
                                registrationEndAt: registrationDeadline
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CriteriaCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        type: "Raffle",
                        raffle: raffle,
                        eligibilityMode: eligibilityMode,
                        floatGroup: floatGroup,
                        floatEventPairs: floatEventPairs,
                        threshold: threshold
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        isPreview: isPreview,
                        claimStatus: claimStatus,
                        raffle: raffle,
                        host: host,
                        nft: nft,
                        user: user,
                        setShowClaimedModal: setShowClaimedModal,
                        setShowRegisteredModal: setShowRegisteredModal,
                        setRewardInfo: setRewardInfo
                    }),
                    raffleID && host ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ShareCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        url: `${_publicConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].appURL */ .Z.appURL}/${host.address}/raffles/${raffleID}`
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ShareCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        disabled: true,
                        url: `${_publicConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].appURL */ .Z.appURL}/create/ft_raffle`
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RaffleStatsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5985);


const extractStatsPreview = (draft)=>{
    const green = "border-drizzle-green";
    return [
        {
            title: "NFT",
            content: `${draft.nftInfo.name}`,
            color: green,
            link: `${_publicConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"].flowscanURL */ .Z.flowscanURL}/contract/A.${draft.nftInfo.contractAddress.replace("0x", "")}.${draft.nftInfo.contractName}`
        },
        {
            title: "# of Registrants",
            content: `0`,
            color: green,
            link: null
        },
        {
            title: "Winners (Drawn / Total)",
            content: `0 / ${draft.numberOfWinners}`,
            color: green,
            link: null
        }
    ];
};
const extractStats = (raffle)=>{
    const green = "border-drizzle-green";
    return [
        {
            title: "NFT",
            content: `${raffle.nftInfo.name}`,
            color: green,
            link: `${_publicConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"].flowscanURL */ .Z.flowscanURL}/contract/A.${raffle.nftInfo.contractAddress.replace("0x", "")}.${raffle.nftInfo.contractName}`
        },
        {
            title: "# of Registrants",
            content: `${Object.keys(raffle.registrationRecords).length}`,
            color: green,
            link: null
        },
        {
            title: "Winners (Drawn / Total)",
            content: `${Object.keys(raffle.winners).length} / ${raffle.numberOfWinners}`,
            color: green,
            link: null
        }
    ];
};
function RaffleStatsCard(props) {
    const { isPreview , raffle , draft  } = props;
    const cards = isPreview ? extractStatsPreview(draft) : raffle ? extractStats(raffle) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "px-3 text-2xl font-bold font-flow",
                children: "DATA"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-col mt-4 mb-10 justify-center gap-y-3 items-stretch sm:flex-row sm:gap-x-3",
                children: cards.length > 0 ? cards.map((card, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full",
                        children: card.link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: card.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `cursor-pointer h-full w-full rounded-2xl ring-1 ring-black ring-opacity-5 overflow-hidden ${card.color} flex flex-col bg-white px-5 pt-5 pb-10 gap-y-1 shadow`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "cursor-pointer text-sm font-medium text-gray-500 font-flow",
                                        children: card.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "cursor-pointer text-2xl font-bold font-flow text-drizzle-green",
                                        children: card.content
                                    })
                                ]
                            }, index)
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `h-full w-full rounded-2xl ring-1 ring-black ring-opacity-5 overflow-hidden ${card.color} flex flex-col bg-white px-5 pt-5 pb-10 gap-y-1 shadow`,
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
                        }, index)
                    }, `${index}-div`);
                }) : null
            })
        ]
    });
};


/***/ }),

/***/ 4749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RewardCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);


const CardStatus = {
    UNDRAWN: {
        title: "UNDRAWN",
        style: "text-gray-800 bg-gray-100"
    },
    DRAWN: {
        title: "DRAWN",
        style: "text-yellow-800 bg-yellow-100"
    },
    CLAIMED: {
        title: "CLAIMED",
        style: "text-green-800 bg-green-100"
    }
};
const parsePreviewDisplays = (draft)=>{
    let displays = Object.assign({}, draft.rewardDisplays);
    for (const [, display] of Object.entries(displays)){
        if (!display.status) {
            display.status = CardStatus.UNDRAWN;
        }
    }
    return displays;
};
const parseDisplays = (raffle)=>{
    let displays = Object.assign({}, raffle.rewardDisplays);
    for (const [, winnerRecord] of Object.entries(raffle.winners)){
        const rewardID = winnerRecord.rewardTokenIDs[0];
        const display = displays[rewardID];
        display.status = winnerRecord.isClaimed ? CardStatus.CLAIMED : CardStatus.DRAWN;
    }
    for (const [, display] of Object.entries(displays)){
        if (!display.status) {
            display.status = CardStatus.UNDRAWN;
        }
        if (display.name.length == 0) {
            display.name = `${raffle.nftInfo.contractName} #${display.tokenID}`;
        }
    }
    return displays;
};
function RewardCard(props) {
    const { isPreview , raffle , draft  } = props;
    const displays = isPreview ? parsePreviewDisplays(draft) : raffle ? parseDisplays(raffle) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-green-800 bg-green-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-gray-800 bg-gray-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                hidden: true,
                className: "text-yellow-800 bg-yellow-100"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "px-3 text-2xl font-bold font-flow",
                children: "REWARDS"
            }),
            Object.keys(displays).length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `
          ring-1 ring-black ring-opacity-5
          p-3 bg-white shadow rounded-3xl mt-4 mb-10 grid grid-rows-1 grid-flow-col gap-3 sm:gap-5 justify-start w-full overflow-auto sm:max-h-[450px]
        `,
                children: Object.entries(displays).sort(([tokenID1, ], [tokenID2, ])=>tokenID2 - tokenID1
                ).map(([tokenID, tokenDisplay])=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-y-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NFTCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                disabled: true,
                                tokenID: tokenID,
                                display: tokenDisplay
                            }, tokenID),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: `rounded-full px-2 text-xs font-semibold leading-6 ${tokenDisplay.status.style}`,
                                children: tokenDisplay.status.title
                            }, `${tokenID}-label`)
                        ]
                    }, `${tokenID}-div`);
                })
            }) : null
        ]
    });
};


/***/ }),

/***/ 6887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DE": () => (/* binding */ deleteRaffle),
/* harmony export */   "QS": () => (/* binding */ claim),
/* harmony export */   "eK": () => (/* binding */ togglePause),
/* harmony export */   "ii": () => (/* binding */ draw),
/* harmony export */   "mU": () => (/* binding */ endRaffle),
/* harmony export */   "ni": () => (/* binding */ createRaffle),
/* harmony export */   "oB": () => (/* binding */ batchDraw),
/* harmony export */   "z2": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5023);




const NonFungibleTokenPath = "0xNonFungibleToken";
const MistPath = "0xMist";
const MetadataViewsPath = "0xMetadataViews";
const EligibilityReviewersPath = "0xEligibilityVerifiers";
const DrizzleRecorderPath = "0xDrizzleRecorder";
const createRaffle = async (name, description, image, url, startAt, endAt, registrationEndAt, numberOfWinners, // NFT info
nftName, nftTypeIdentifier, nftContractName, nftContractAddress, nftCollectionTypeIdentifier, nftCollectionTypeRestrictions, nftCollectionLogoURL, nftCollectionPublicPath, nftCollectionStoragePath, rewardTokenIDs, // whitelist
withWhitelist, whitelist, // Floats
withFloats, threshold, eventIDs, eventHosts, withFloatGroup, groupName, groupHost, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doCreateRaffle(name, description, image, url, startAt, endAt, registrationEndAt, numberOfWinners, nftName, nftTypeIdentifier, nftContractName, nftContractAddress, nftCollectionTypeIdentifier, nftCollectionTypeRestrictions, nftCollectionLogoURL, nftCollectionPublicPath, nftCollectionStoragePath, rewardTokenIDs, withWhitelist, whitelist, withFloats, threshold, eventIDs, eventHosts, withFloatGroup, groupName, groupHost);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doCreateRaffle = async (name, description, image, url, startAt, endAt, registrationEndAt, numberOfWinners, nftName, nftTypeIdentifier, nftContractName, nftContractAddress, nftCollectionTypeIdentifier, nftCollectionTypeRestrictions, nftCollectionLogoURL, nftCollectionPublicPath, nftCollectionStoragePath, rewardTokenIDs, withWhitelist, whitelist, withFloats, threshold, eventIDs, eventHosts, withFloatGroup, groupName, groupHost)=>{
    const code = `
  import Mist from 0xMist
  import EligibilityVerifiers from 0xEligibilityVerifiers
  import ${nftContractName} from ${nftContractAddress}
  import MetadataViews from 0xMetadataViews
  
  transaction(
      name: String,
      description: String,
      image: String?,
      url: String?,
      startAt: UFix64?,
      endAt: UFix64?,
      registrationEndAt: UFix64,
      numberOfWinners: UInt64,
      // NFTInfo
      nftName: String,
      nftTypeIdentifier: String,
      nftContractName: String,
      nftContractAddress: Address,
      nftCollectionTypeIdentifier: String,
      nftCollectionTypeRestrictions: [String],
      nftCollectionLogoURL: String,
      nftCollectionPublicPath: String,
      nftCollectionStoragePath: String,
  
      rewardTokenIDs: [UInt64],
      // EligibilityVerifier
      // Only support registrationVerify now
      withWhitelist: Bool,
      whitelist: {Address: Bool},
  
      withFloats: Bool,
      threshold: UInt32?,
      eventIDs: [UInt64],
      eventHosts: [Address],
  
      withFloatGroup: Bool,
      floatGroupName: String?,
      floatGroupHost: Address?
  ) {
      let raffleCollection: &Mist.RaffleCollection
      let nftCollectionRef: &${nftContractName}.Collection
      let rewardDisplays: {UInt64: Mist.NFTDisplay}
  
      prepare(acct: AuthAccount) {
          if acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath) == nil {
              acct.save(<- Mist.createEmptyRaffleCollection(), to: Mist.RaffleCollectionStoragePath)
              let cap = acct.link<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>(
                  Mist.RaffleCollectionPublicPath,
                  target: Mist.RaffleCollectionStoragePath
              ) ?? panic("Could not link RaffleCollection to PublicPath")
          }
  
          self.raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
              ?? panic("Could not borrow RaffleCollection from signer")
  
          let nftStoragePath = StoragePath(identifier: nftCollectionStoragePath)!
          self.nftCollectionRef = acct.borrow<&${nftContractName}.Collection>(from: nftStoragePath)
              ?? panic("Could not borrow collection from signer")
  
          self.rewardDisplays = {}
          for tokenID in rewardTokenIDs {
              let resolver = self.nftCollectionRef.borrowViewResolver(id: tokenID)
              let mDisplay = MetadataViews.getDisplay(resolver)!
              // Mist.NFTDisplay has no extraData field, we put rarity desc to description temporarily
              var desc = mDisplay.description
              if let mRarity = MetadataViews.getRarity(resolver) {
                  if let rarityDesc = mRarity.description {
                      desc = rarityDesc
                  }
              }
              let display = Mist.NFTDisplay(
                  tokenID: tokenID,
                  name: mDisplay.name,
                  description: desc,
                  thumbnail: mDisplay.thumbnail.uri()
              )
              self.rewardDisplays[tokenID] = display
          } 
      }
  
      execute {
          assert(UInt64(rewardTokenIDs.length) >= numberOfWinners, message: "reward number is not enough")
  
          let nftInfo = Mist.NFTInfo(
              name: nftName,
              nftType: CompositeType(nftTypeIdentifier)!,
              contractName: nftContractName,
              contractAddress: nftContractAddress,
              collectionType: RestrictedType(
                  identifier: nftCollectionTypeIdentifier,
                  restrictions: nftCollectionTypeRestrictions
              )!,
              collectionLogoURL: nftCollectionLogoURL,
              collectionStoragePath: StoragePath(identifier: nftCollectionStoragePath)!,
              collectionPublicPath: PublicPath(identifier: nftCollectionPublicPath)!
          )
          
          var verifier: {EligibilityVerifiers.IEligibilityVerifier}? = nil
          if withWhitelist {
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
  
          let collection <- ${nftContractName}.createEmptyCollection()
          let raffleID = self.raffleCollection.createRaffle(
              name: name, 
              description: description, 
              host: self.nftCollectionRef.owner!.address, 
              image: image,
              url: url,
              startAt: startAt,
              endAt: endAt,
              registrationEndAt: registrationEndAt,
              numberOfWinners: numberOfWinners,
              nftInfo: nftInfo,
              collection: <- collection,
              registrationVerifyMode: EligibilityVerifiers.VerifyMode.all,
              claimVerifyMode: EligibilityVerifiers.VerifyMode.all,
              registrationVerifiers: [verifier!],
              claimVerifiers: [],
              extraData: {}
          )
  
          let raffle = self.raffleCollection.borrowRaffleRef(raffleID: raffleID)!
          for tokenID in rewardTokenIDs {
              let token <- self.nftCollectionRef.withdraw(withdrawID: tokenID)
              let display = self.rewardDisplays[tokenID]!
              raffle.deposit(token: <- token, display: display)
          }
      }
  }
    `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress).replace(EligibilityReviewersPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].eligibilityVerifiersAddress */ .Z.eligibilityVerifiersAddress).replace(MetadataViewsPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].metadataViewsAddress */ .Z.metadataViewsAddress);
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
                arg(registrationEndAt, t.UFix64),
                arg(numberOfWinners, t.UInt64),
                arg(nftName, t.String),
                arg(nftTypeIdentifier, t.String),
                arg(nftContractName, t.String),
                arg(nftContractAddress, t.Address),
                arg(nftCollectionTypeIdentifier, t.String),
                arg(nftCollectionTypeRestrictions, t.Array(t.String)),
                arg(nftCollectionLogoURL, t.String),
                arg(nftCollectionPublicPath, t.String),
                arg(nftCollectionStoragePath, t.String),
                arg(rewardTokenIDs, t.Array(t.UInt64)),
                arg(withWhitelist, t.Bool),
                arg(whitelist, t.Dictionary({
                    key: t.Address,
                    value: t.Bool
                })),
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
const register = async (raffleID, host, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doRegister(raffleID, host);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doRegister = async (raffleID, host)=>{
    const code = `
  import NonFungibleToken from 0xNonFungibleToken
  import Mist from 0xMist
  import DrizzleRecorder from 0xDrizzleRecorder
  
  transaction(raffleID: UInt64, host: Address) {
      let raffle: &{Mist.IRafflePublic}
      let address: Address
      let recorderRef: &DrizzleRecorder.Recorder
  
      prepare(acct: AuthAccount) {
          self.address = acct.address
  
          let raffleCollection = getAccount(host)
              .getCapability(Mist.RaffleCollectionPublicPath)
              .borrow<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>()
              ?? panic("Could not borrow the public RaffleCollection from the host")
          
          let raffle = raffleCollection.borrowPublicRaffleRef(raffleID: raffleID)
              ?? panic("Could not borrow the public Raffle from the collection")

          if (acct.borrow<&DrizzleRecorder.Recorder>(from: DrizzleRecorder.RecorderStoragePath) == nil) {
              acct.save(<-DrizzleRecorder.createEmptyRecorder(), to: DrizzleRecorder.RecorderStoragePath)
  
              acct.link<&{DrizzleRecorder.IRecorderPublic}>(
                  DrizzleRecorder.RecorderPublicPath,
                  target: DrizzleRecorder.RecorderStoragePath
              )
            }
  
          self.raffle = raffle 
          self.recorderRef = acct
            .borrow<&DrizzleRecorder.Recorder>(from: DrizzleRecorder.RecorderStoragePath)
            ?? panic("Could not borrow Recorder")
      }
  
      execute {
        self.raffle.register(account: self.address, params: {
          "recorderRef": self.recorderRef
        })
      }
  }
    `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress).replace(NonFungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].nonFungibleTokenAddress */ .Z.nonFungibleTokenAddress).replace(DrizzleRecorderPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].drizzleRecorderAddress */ .Z.drizzleRecorderAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>{
            const args = [
                arg(raffleID, t.UInt64),
                arg(host, t.Address), 
            ];
            return args;
        },
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const togglePause = async (raffleID, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doTogglePause(raffleID);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doTogglePause = async (raffleID)=>{
    const code = `
  import Mist from 0xMist

  transaction(raffleID: UInt64) {
      let raffle: &Mist.Raffle
  
      prepare(acct: AuthAccount) {
          let raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
              ?? panic("Could not borrow raffleCollection")
  
          self.raffle = raffleCollection.borrowRaffleRef(raffleID: raffleID)!
      }
  
      execute {
          self.raffle.togglePause()
      }
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const draw = async (raffleID, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doDraw(raffleID);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doDraw = async (raffleID)=>{
    const code = `
  import Mist from 0xMist

  transaction(raffleID: UInt64) {
      let raffle: &Mist.Raffle
  
      prepare(acct: AuthAccount) {
          let raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
              ?? panic("Could not borrow raffleCollection")
          self.raffle = raffleCollection.borrowRaffleRef(raffleID: raffleID)!
      }
  
      execute {
          self.raffle.draw(params: {})
      }
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const batchDraw = async (raffleID, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doBatchDraw(raffleID);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doBatchDraw = async (raffleID)=>{
    const code = `
  import Mist from 0xMist

  transaction(raffleID: UInt64) {
      let raffle: &Mist.Raffle
  
      prepare(acct: AuthAccount) {
          let raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
              ?? panic("Could not borrow raffleCollection")
          self.raffle = raffleCollection.borrowRaffleRef(raffleID: raffleID)!
      }
  
      execute {
          self.raffle.batchDraw(params: {})
      }
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const endRaffle = async (raffleID, nftContractName, nftContractAddress, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doEndRaffle(raffleID, nftContractName, nftContractAddress);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const deleteRaffle = async (raffleID, nftContractName, nftContractAddress, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doDeleteRaffle(raffleID, nftContractName, nftContractAddress);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doDeleteRaffle = async (raffleID, nftContractName, nftContractAddress)=>{
    const code = `
  import Mist from 0xMist
  import NonFungibleToken from 0xNonFungibleToken
  import ${nftContractName} from ${nftContractAddress}
  
  transaction(raffleID: UInt64) {
      let raffleCollection: &Mist.RaffleCollection
      let nftCollectionRef: &${nftContractName}.Collection{NonFungibleToken.CollectionPublic}
  
      prepare(acct: AuthAccount) {
          self.raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
              ?? panic("Could not borrow raffleCollection")
  
          let raffle = self.raffleCollection.borrowRaffleRef(raffleID: raffleID)!
  
          self.nftCollectionRef = acct.borrow<&${nftContractName}.Collection{NonFungibleToken.CollectionPublic}>(from: raffle.nftInfo.collectionStoragePath)
              ?? panic("Could not borrow collection from signer")
      }
  
      execute {
          self.raffleCollection.deleteRaffle(raffleID: raffleID, receiver: self.nftCollectionRef)
      }
  }
  `.replace(NonFungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].nonFungibleTokenAddress */ .Z.nonFungibleTokenAddress).replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const doEndRaffle = async (raffleID, nftContractName, nftContractAddress)=>{
    const code = `
  import Mist from 0xMist
  import NonFungibleToken from 0xNonFungibleToken
  import ${nftContractName} from ${nftContractAddress}
  
  transaction(raffleID: UInt64) {
      let raffle: &Mist.Raffle
      let nftCollectionRef: &${nftContractName}.Collection{NonFungibleToken.CollectionPublic}
  
      prepare(acct: AuthAccount) {
          let raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
              ?? panic("Could not borrow raffleCollection")
  
          self.raffle = raffleCollection.borrowRaffleRef(raffleID: raffleID)!
  
          self.nftCollectionRef = acct.borrow<&${nftContractName}.Collection{NonFungibleToken.CollectionPublic}>(from: self.raffle.nftInfo.collectionStoragePath)
              ?? panic("Could not borrow collection from signer")
      }
  
      execute {
          self.raffle.end(receiver: self.nftCollectionRef)
      }
  }
  `.replace(NonFungibleTokenPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].nonFungibleTokenAddress */ .Z.nonFungibleTokenAddress).replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};
const claim = async (raffleID, host, nftInfo, setTransactionInProgress, setTransactionStatus)=>{
    const txFunc = async ()=>{
        return await doClaim(raffleID, host, nftInfo);
    };
    return await (0,_transactions__WEBPACK_IMPORTED_MODULE_2__/* .txHandler */ .Z)(txFunc, setTransactionInProgress, setTransactionStatus);
};
const doClaim = async (raffleID, host, nftInfo)=>{
    const nftContractName = nftInfo.contractName;
    const storagePath = `/storage/${nftInfo.collectionStoragePath.identifier}`;
    const publicPath = `/public/${nftInfo.collectionPublicPath.identifier}`;
    const restrictions = nftInfo.collectionType.restrictions.map((r)=>r.typeID
    );
    const [imports, interfaces] = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateImportsAndInterfaces */ .xg)(restrictions);
    const rawCode = `
  import Mist from 0xMist
  import DrizzleRecorder from 0xDrizzleRecorder
  
  transaction(raffleID: UInt64, host: Address) {
      let raffle: &{Mist.IRafflePublic}
      let receiver: &{NonFungibleToken.CollectionPublic}
      let recorderRef: &DrizzleRecorder.Recorder
  
      prepare(acct: AuthAccount) {
          let raffleCollection = getAccount(host)
              .getCapability(Mist.RaffleCollectionPublicPath)
              .borrow<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>()
              ?? panic("Could not borrow the public RaffleCollection from the host")
          
          let raffle = raffleCollection.borrowPublicRaffleRef(raffleID: raffleID)
              ?? panic("Could not borrow the public Raffle from the collection")
          
          if acct.borrow<&NonFungibleToken.Collection>(from: ${storagePath}) != nil 
            && !acct.getCapability<&{${interfaces}}>(${publicPath}).check() {
            acct.unlink(${publicPath})
            acct.link<&{${interfaces}}>(
              ${publicPath},
              target: ${storagePath}
            )
          } else if (acct.borrow<&${nftContractName}.Collection>(from: ${storagePath}) == nil) {
              acct.save(<-${nftContractName}.createEmptyCollection(), to: ${storagePath})
  
              acct.link<&{${interfaces}}>(
                  ${publicPath},
                  target: ${storagePath}
              )
          }

          if (acct.borrow<&DrizzleRecorder.Recorder>(from: DrizzleRecorder.RecorderStoragePath) == nil) {
            acct.save(<-DrizzleRecorder.createEmptyRecorder(), to: DrizzleRecorder.RecorderStoragePath)

            acct.link<&{DrizzleRecorder.IRecorderPublic}>(
                DrizzleRecorder.RecorderPublicPath,
                target: DrizzleRecorder.RecorderStoragePath
            )
          }
          
          self.raffle = raffle 
          self.receiver = acct
              .getCapability(${publicPath})
              .borrow<&{NonFungibleToken.CollectionPublic}>()
              ?? panic("Could not borrow Receiver")

          self.recorderRef = acct
            .borrow<&DrizzleRecorder.Recorder>(from: DrizzleRecorder.RecorderStoragePath)
            ?? panic("Could not borrow Recorder")
      }
  
      execute {
        self.raffle.claim(receiver: self.receiver, params: {
          "recorderRef": self.recorderRef
        })
      }
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress).replace(DrizzleRecorderPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].drizzleRecorderAddress */ .Z.drizzleRecorderAddress);
    const code = imports.concat(rawCode);
    const transactionId = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.mutate({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64),
                arg(host, t.Address)
            ]
        ,
        proposer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        payer: _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser,
        limit: 9999
    });
    return transactionId;
};


/***/ })

};
;