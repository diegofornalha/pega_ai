"use strict";
exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 4540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BasicInfoBoard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5496);
/* harmony import */ var _TimeLimitPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2961);
/* harmony import */ var _ImageSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TimeLimitPicker__WEBPACK_IMPORTED_MODULE_5__]);
_TimeLimitPicker__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const URLPlaceholder = "https://the.link.you.want.to.add";
const BasicInfoMemoizeBanner = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ banner  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full rounded-2xl h-[144px] bg-white relative sm:max-w-[460px] ring-1 ring-black ring-opacity-10 overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: banner,
            alt: "",
            className: "rounded-2xl",
            layout: "fill",
            objectFit: "cover"
        })
    });
});
BasicInfoMemoizeBanner.displayName = "BasicInfoMemozieBanner";
function BasicInfoBoard(props) {
    const [transactionInProgress, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_4__/* .transactionInProgressState */ .xr);
    const { banner , setBanner , setBannerSize , setName , setURL , setDescription , timeLockEnabled , setTimeLockEnabled , setStartAt , setEndAt , NamePlaceholder , DescriptionPlaceholder , withTimeLimitPicker  } = props;
    const showTimeLimit = withTimeLimitPicker == true;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-y-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col-reverse gap-y-5 sm:flex-row sm:gap-x-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block text-2xl font-bold font-flow",
                                    children: "Banner"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "block text-md font-flow leading-6 mt-2 mb-2",
                                    children: [
                                        "O tamanho do banner n\xe3o deve ser superior a 500 KB. Comprimir\xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://tinypng.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "underline font-bold decoration-drizzle-green decoration-2",
                                            children: "AQUI"
                                        }),
                                        " se precisar."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageSelector__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    imageSelectedCallback: (_banner, _bannerSize)=>{
                                        setBanner(_banner);
                                        setBannerSize(_bannerSize);
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BasicInfoMemoizeBanner, {
                            banner: banner || "/banner.png"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "block text-2xl font-bold font-flow",
                            children: [
                                "Nome",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: "*"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "name",
                                id: "name",
                                disabled: transactionInProgress,
                                required: true,
                                className: "bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark placeholder:text-gray-300",
                                placeholder: NamePlaceholder,
                                onChange: (event)=>{
                                    setName(event.target.value);
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "block text-2xl font-bold font-flow",
                            children: "Descri\xe7\xe3o"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                rows: 4,
                                name: "description",
                                id: "description",
                                disabled: transactionInProgress,
                                className: "focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight resize-none block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",
                                defaultValue: "",
                                spellCheck: false,
                                placeholder: DescriptionPlaceholder,
                                onChange: (event)=>{
                                    setDescription(event.target.value);
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "block text-2xl font-bold font-flow",
                            children: "Link Oficial"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                name: "url",
                                id: "url",
                                disabled: transactionInProgress,
                                pattern: "[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]+-?)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?",
                                className: "focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",
                                placeholder: URLPlaceholder,
                                onChange: (event)=>{
                                    setURL(event.target.value);
                                }
                            })
                        })
                    ]
                }),
                showTimeLimit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeLimitPicker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    timeLockEnabled: timeLockEnabled,
                    setTimeLockEnabled: setTimeLockEnabled,
                    setStartAt: setStartAt,
                    setEndAt: setEndAt
                }) : null
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CSVSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CSVSelector(props) {
    const sample = props.sample || "/ra_sample.csv";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "shrink flex items-center gap-x-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: sample,
                download: true,
                className: "text-drizzle-green-dark text-base font-medium",
                children: "Sample"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-12 px-3 shadow-sm font-medium text-base text-drizzle-green-dark bg-drizzle-green-light rounded-2xl hover:bg-drizzle-green-dark hover:text-black",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "csv-selector",
                        className: "hidden sm:inline-block w-full text-center leading-[48px] ",
                        children: "Upload CSV"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "csv-selector",
                        className: "inline-block sm:hidden w-full text-center leading-[48px] ",
                        children: "Upload"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "csv-selector",
                        className: "hidden w-full",
                        type: "file",
                        accept: ".csv",
                        onChange: props.onChange
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3320:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreatedModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ShareCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function CreatedModal(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { type , open , setOpen , url  } = props;
    const _type = type ? type : "DROP";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            as: "div",
            className: "relative z-10",
            onClose: setOpen,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed z-10 inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            enterTo: "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                                className: "relative bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "block w-full h-[80px] text-center text-[60px]",
                                                children: "\uD83C\uDF89"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-3 text-center sm:mt-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                        as: "h3",
                                                        className: "text-2xl leading-6 font-semibold text-gray-900",
                                                        children: `${_type} Created Successfully!`
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-center justify-center gap-y-4 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm text-gray-500",
                                                                children: `Share ${_type} to your community now!`
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                styles: `flex flex-col min-w-[200px] aspect-square justify-center
                      ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden
                      shadow-[0px_5px_25px_-5px_rgba(0,0,0,0.1)] items-center`,
                                                                qrCodeSize: 160,
                                                                logoSize: 16,
                                                                url: url
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-5 sm:mt-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "inline-flex justify-center w-full rounded-2xl border border-transparent shadow-sm px-4 py-2 bg-drizzle-green text-base font-semibold hover:bg-drizzle-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drizzle-green sm:text-sm",
                                            onClick: ()=>{
                                                setOpen(false);
                                                if (url) {
                                                    router.push(url);
                                                }
                                            },
                                            children: `Go To ${_type}`
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_atoms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5496);
/* harmony import */ var _publicConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5985);




function ImageSelector(props) {
    const [, setShowBasicNotification] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_lib_atoms_js__WEBPACK_IMPORTED_MODULE_2__/* .showBasicNotificationState */ .lo);
    const [, setBasicNotificationContent] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_lib_atoms_js__WEBPACK_IMPORTED_MODULE_2__/* .basicNotificationContentState */ .VQ);
    const handleImageChosen = (file)=>{
        if (file.size > _publicConfig_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].bannerSizeLimit */ .Z.bannerSizeLimit) {
            setShowBasicNotification(true);
            setBasicNotificationContent({
                type: "exclamation",
                title: "Image too large",
                detail: "Should be less than 500KB"
            });
            return;
        }
        if (file) {
            const fileReader = new FileReader();
            fileReader.onloadend = (e)=>{
                const content = fileReader.result;
                props.imageSelectedCallback(content, file.size);
            };
            fileReader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-12 max-w-[140px] px-3 shadow-sm font-medium text-base text-drizzle-green-dark bg-drizzle-green-light rounded-2xl hover:bg-drizzle-green-dark hover:text-black",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "image-selector",
                className: "w-full inline-block text-center leading-[48px] ",
                children: "Imagem \u2B06"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "image-selector",
                className: "hidden w-full",
                type: "file",
                accept: "image/png, image/jpeg",
                onChange: (e)=>{
                    handleImageChosen(e.target.files[0]);
                }
            })
        ]
    });
};


/***/ }),

/***/ 2961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TimeLimitPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5496);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5023);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Timezone = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .getTimezone */ .EP)();
function TimeLimitPicker(props) {
    const [transactionInProgress, ] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_3__/* .transactionInProgressState */ .xr);
    const { 0: timezone , 1: setTimezone  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { timeLockEnabled , setTimeLockEnabled , setStartAt , setEndAt  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setTimezone(Timezone);
    }, [
        timezone
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "block text-2xl font-bold font-flow",
                        children: [
                            "Time Limit",
                            timezone ? ` (${timezone})` : ""
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                        disabled: transactionInProgress,
                        checked: timeLockEnabled,
                        onChange: ()=>{
                            if (timeLockEnabled) {
                                setStartAt(null);
                                setEndAt(null);
                            }
                            setTimeLockEnabled(!timeLockEnabled);
                        },
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .AK)(timeLockEnabled ? "bg-drizzle-green" : "bg-gray-200", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drizzle-green"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            "aria-hidden": "true",
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .AK)(timeLockEnabled ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")
                        })
                    })
                ]
            }),
            timeLockEnabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-2 flex flex-col sm:flex-row justify-between gap-x-4 gap-y-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "inline-block w-12 font-flow font-bold",
                                    children: "Start"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "datetime-local",
                                    disabled: transactionInProgress,
                                    id: "start_at",
                                    className: "rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300 min-w-[220px]",
                                    onChange: (e)=>{
                                        setStartAt(new Date(e.target.value));
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "inline-block w-12 font-flow font-bold",
                                    children: "End"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "datetime-local",
                                    disabled: transactionInProgress,
                                    id: "end_at",
                                    className: "rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300 min-w-[220px]",
                                    onChange: (e)=>{
                                        setEndAt(new Date(e.target.value));
                                    }
                                })
                            ]
                        })
                    ]
                })
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FloatReviewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _float_FloatPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8433);


function FloatReviewer(props) {
    const { threshold , setThreshold , floatMode , rawFloatInput , floatEvents , setFloatEvents , setFloatGroup , setFloatEventPairs ,  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-4 sm:p-8 flex flex-col gap-y-10 rounded-3xl border-4 border-drizzle-green-light border-dashed",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_float_FloatPicker__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            mode: floatMode,
            threshold: threshold,
            setThreshold: setThreshold,
            rawFloatInput: rawFloatInput,
            floatEvents: floatEvents,
            setFloatEvents: setFloatEvents,
            setFloatGroup: setFloatGroup,
            setFloatEventPairs: setFloatEventPairs
        })
    });
};


/***/ }),

/***/ 9305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WhitelistReviewer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./lib/atoms.js
var atoms = __webpack_require__(5496);
// EXTERNAL MODULE: ./components/common/CSVSelector.js
var CSVSelector = __webpack_require__(4999);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(5023);
;// CONCATENATED MODULE: ./components/eligibility/WhitelistInput.js






function WhitelistInput(props) {
    const [, setShowBasicNotification] = (0,external_recoil_.useRecoilState)(atoms/* showBasicNotificationState */.lo);
    const [, setBasicNotificationContent] = (0,external_recoil_.useRecoilState)(atoms/* basicNotificationContentState */.VQ);
    const [transactionInProgress] = (0,external_recoil_.useRecoilState)(atoms/* transactionInProgressState */.xr);
    const { callback  } = props;
    const { 0: rawRecordsStr , 1: setRawRecordsStr  } = (0,external_react_.useState)("");
    const { 0: validRecords , 1: setValidRecords  } = (0,external_react_.useState)([]);
    const { 0: invalidRecords , 1: setInvalidRecords  } = (0,external_react_.useState)([]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block text-2xl font-bold font-flow",
                        children: "Addresses"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block font-flow text-md leading-6 mt-2 mb-2",
                        children: "For each line, enter one address. Duplicate addresses are not allowed."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                rows: 8,
                                name: "recipients",
                                id: "recipients",
                                className: "focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight resize-none block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",
                                spellCheck: false,
                                value: rawRecordsStr,
                                placeholder: "0xf8d6e0586b0a20c7",
                                onChange: (event)=>{
                                    if (validRecords.length > 0 || invalidRecords.length > 0) {
                                        setValidRecords([]);
                                        setInvalidRecords([]);
                                    }
                                    setRawRecordsStr(event.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex mt-4 gap-x-2 justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        className: (0,utils/* classNames */.AK)(transactionInProgress ? "bg-drizzle-green-light" : "bg-drizzle-green hover:bg-drizzle-green-dark", "h-12 w-40 px-6 text-base rounded-2xl font-medium shadow-md text-black"),
                                        disabled: transactionInProgress,
                                        onClick: async ()=>{
                                            if (rawRecordsStr.trim().length == 0) {
                                                setShowBasicNotification(true);
                                                setBasicNotificationContent({
                                                    type: "exclamation",
                                                    title: "Invalid Params",
                                                    detail: "NO addresses provided"
                                                });
                                                return;
                                            }
                                            const [valids, invalids] = await (0,utils/* filterAddresses */.$k)(rawRecordsStr.trim());
                                            setValidRecords(valids);
                                            setInvalidRecords(invalids);
                                            const whitelist = (0,utils/* getWhitelistFromAddresses */._p)(valids);
                                            callback({
                                                whitelist: whitelist,
                                                invalidRecordsCount: invalids.length
                                            });
                                        },
                                        children: "Process"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CSVSelector/* default */.Z, {
                                        sample: "r_sample.csv",
                                        onChange: (event)=>{
                                            callback(null);
                                            const f = event.target.files[0];
                                            const reader = new FileReader();
                                            reader.addEventListener("load", (e)=>{
                                                const data = e.target.result;
                                                setRawRecordsStr(data);
                                                event.target.value = null;
                                            });
                                            reader.readAsText(f);
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            validRecords.length > 0 || invalidRecords.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block text-2xl font-bold font-flow",
                        children: "Summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-1 mb-30",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            role: "list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-none w-30 text-md font-flow font-semibold leading-10",
                                                children: "# of Valid Records"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grow"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-none w-30 text-md font-flow font-semibold leading-10",
                                                children: validRecords.length
                                            })
                                        ]
                                    })
                                }, "valid count"),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-none w-30 text-md font-flow font-semibold leading-10",
                                                children: "# of Invalid Records"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grow"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-none w-30 text-md font-flow font-semibold leading-10",
                                                children: invalidRecords.length
                                            })
                                        ]
                                    })
                                }, "invalid count")
                            ]
                        })
                    })
                ]
            }) : null,
            invalidRecords.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block text-2xl font-bold font-flow",
                        children: "Invalid records"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block font-flow text-md leading-8 mt-2",
                        children: "Invalid format or duplicate accounts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            rows: invalidRecords.length > 8 ? 8 : invalidRecords.length,
                            name: "invalid",
                            id: "invalid",
                            className: "focus:ring-rose-700 focus:border-rose-700 bg-rose-300/10 resize-none block w-full border-rose-700 font-flow text-lg placeholder:text-gray-300",
                            disabled: true,
                            value: invalidRecords.reduce((p, c)=>{
                                return `${p}\n${c}`;
                            }, "").trim(),
                            spellCheck: false
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/eligibility/WhitelistReviewer.js


function WhitelistReviewer(props) {
    const { callback  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "p-4 sm:p-8 flex flex-col gap-y-10 rounded-3xl border-4 border-drizzle-green-light border-dashed",
        children: /*#__PURE__*/ jsx_runtime_.jsx(WhitelistInput, {
            callback: callback
        })
    });
};


/***/ })

};
;