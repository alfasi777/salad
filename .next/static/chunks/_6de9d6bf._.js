(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_6de9d6bf._.js", {

"[project]/app/components/ChecklistItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ChecklistItem = ({ index, title, weight, bgImage, activeItemsCount, setActiveItemsCount, maxItems })=>{
    _s();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const changeHandler = ()=>{
        setQuantity(()=>{
            if (activeItemsCount < maxItems) {
                return quantity + 1;
            }
            return quantity;
        });
        setActiveItemsCount(()=>{
            if (activeItemsCount < maxItems) {
                return activeItemsCount + 1;
            }
            return activeItemsCount;
        });
    };
    const changeHandler2 = ()=>{
        setQuantity((prev)=>{
            if (prev !== 0) {
                return prev - 1;
            }
            return prev;
        });
        setActiveItemsCount((prevCount)=>{
            if (prevCount !== 0) {
                return prevCount - 1;
            }
            return prevCount;
        });
    };
    {}
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-8 border border-0.5 border-gray-300/55 p-4 rounded-md  bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-h-[100] min-h-[100] rounded-sm",
                    "aria-hidden": true,
                    src: bgImage,
                    alt: "תמונת מוצר",
                    width: 100,
                    height: 100
                }, void 0, false, {
                    fileName: "[project]/app/components/ChecklistItem.js",
                    lineNumber: 73,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "index",
                            className: "text-lg text-gray-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/ChecklistItem.js",
                            lineNumber: 81,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0 border-2 border-gray-400/50 p-2 rounded-md max-w-max bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: changeHandler,
                                    disabled: activeItemsCount === maxItems ? true : false,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/vercel.svg",
                                        alt: "send",
                                        width: 32,
                                        height: 32,
                                        className: "bg-green-400 p-2 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ChecklistItem.js",
                                        lineNumber: 84,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ChecklistItem.js",
                                    lineNumber: 83,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: title,
                                    placeholder: "",
                                    required: true,
                                    value: quantity,
                                    readOnly: true,
                                    className: " p-0 outline-none  w-12 text-center "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ChecklistItem.js",
                                    lineNumber: 86,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: changeHandler2,
                                    disabled: quantity === 0 && activeItemsCount === maxItems ? true : false,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/vercel.svg",
                                        alt: "send",
                                        width: 32,
                                        height: 32,
                                        className: "bg-red-400 p-2 rotate-180 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ChecklistItem.js",
                                        lineNumber: 91,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ChecklistItem.js",
                                    lineNumber: 90,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ChecklistItem.js",
                            lineNumber: 82,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ChecklistItem.js",
                    lineNumber: 80,
                    columnNumber: 15
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/app/components/ChecklistItem.js",
            lineNumber: 71,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
_s(ChecklistItem, "pG3J+nknyJVr3NxgbCX0HOgwmgE=");
_c = ChecklistItem;
const __TURBOPACK__default__export__ = ChecklistItem;
var _c;
__turbopack_context__.k.register(_c, "ChecklistItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/whatsapp.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/whatsapp.a67c4329.png");}}),
"[project]/assets/whatsapp.png.mjs { IMAGE => \"[project]/assets/whatsapp.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$whatsapp$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/whatsapp.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$whatsapp$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 860,
    height: 860,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APX19evy68DowI/dj43djbvnu+ny6fX19QDt8u2m3qY6wjoMtgwJtQkpvSma25ro8OgAyubKQLlAitSKNrc2AKUAAKUAK7Irv+K/AKXWpRqfGqDToFm4WQGWAQCWAAqZCpXPlQCq16oXnBc2qzad0p1pu2k8qjwPmg+a0JoA0+nTP7c/AqQCNLY0mNiYdcx1QbhByuXKANvt23HQcT7CPhm4GRy5HEjESLLhsu7z7gDQ69DU7NTU7NSx5LGu4q7T7NPv8+/z8/Mf2nIcvvixWwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/mail_icon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/mail_icon.3936e455.png");}}),
"[project]/assets/mail_icon.png.mjs { IMAGE => \"[project]/assets/mail_icon.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$mail_icon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/mail_icon.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$mail_icon$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 64,
    height: 47,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42h2OOwrCQBiE95JJIIQQkpDANtvt+xhioVhoIZa+KtMEsfAG4gEsLGzWF4hBZ1MMLDPfP7OEUnpkjJ2NMZ219ueF9xfeqSzLhkgpXRiGw6IoGh9orT9Zlm2iKJoopa7EXwghHIxxkiSLOI5n0BThE5nrAbTcq6pqcbmCtnVd7wG8eoBzfguCYICJHYzOzwBaY3aE5gvJ83yJjx4Q+sq3F6AHvDZN0/kfWKBlcKI5MZsAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/facebook.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/facebook.b133427f.png");}}),
"[project]/assets/facebook.png.mjs { IMAGE => \"[project]/assets/facebook.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$facebook$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/facebook.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$facebook$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 980,
    height: 980,
    blurDataURL: "data:image/webp;base64,UklGRngBAABXRUJQVlA4TGwBAAAvB8ABEM1VICICHgiADQIAAIBzhHQxAgAJXRwIACgEIAhAAAAIAAAAAAAgAAIBCIQqOEAEgUe/sPMEAADwQABwEAEAAM7/bFo+2zLCSw0gkgAAAwAAAAAAAAAAAAAAAAAAAAQgAVgIARTgZBOOiwcCYIMAAABw/kNTEqiOGAAKACAI5AAAEgAQAAAAAABAAQAAkAQCgBQegHDkLwUePXggICYQAAAA538PPoCAAASAAQAAAAQAEIAACAAABEAAAgAIAAAAYAAYgIAAFpAE4KOMAZCEJZYJANpoU06qk9YpYxCR93JpdrFVq9nLVa/1FpF3yhgASdKjaD4FqRrHvw3dz/s1JWfeAElYYtkjP4a/B94K5idhyjFYmhjkKBMA/swvRPVB3uzEVvFWN6hetNGGytz1TrnekPHK2JGwhblGX6acVDlM8/mcY8l7N7tPi++cnZhGn+qk9W0axhDa0llV+/9Wl7kvh5/HJ34H",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/youtube.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/youtube.1fc83867.png");}}),
"[project]/assets/youtube.png.mjs { IMAGE => \"[project]/assets/youtube.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/youtube.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 980,
    height: 980,
    blurDataURL: "data:image/webp;base64,UklGRvsAAABXRUJQVlA4TO8AAAAvB8ABEM1VICICHgiACQMAAIA9AADAIAgIAAAAADs4wAngBxAAAALQAQIHcB8AAAAAAgbBAADAnwIAADwQAhQGAACA8z82wAMAIAAAAAAAAAMwAQAAYgNAEQAAsAcMAAAAAAAABACAABAeCIgJBAAAwPlfA4ACGIAAACAAANADACAAAAAAAAAAAQDgAwAAAQDAAAygAGDlQpA61RBAF8KUIy0mW69/sFVMpE710biW68n5zVyLj+ZUQ1pJcfJc3Ddx0koyBDC/k/8AMLuw66XG9rN/pIZdrwthdW/Kc4x79kt56t7ClAeD9NU3SA+GcgA=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/assets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "assets": (()=>assets),
    "saladList": (()=>saladList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$whatsapp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$whatsapp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/whatsapp.png.mjs { IMAGE => "[project]/assets/whatsapp.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$mail_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$mail_icon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/mail_icon.png.mjs { IMAGE => "[project]/assets/mail_icon.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$facebook$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$facebook$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/facebook.png.mjs { IMAGE => "[project]/assets/facebook.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/youtube.png.mjs { IMAGE => "[project]/assets/youtube.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
;
;
;
const assets = {
    youtube: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$facebook$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$facebook$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    whatsapp: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$whatsapp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$whatsapp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    mail_icon: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$mail_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$mail_icon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
};
const saladList = [
    {
        title: 'חמוצי הבית',
        weight: 350,
        category: 'חמוצים',
        bgImage: '/pikels.jpeg'
    },
    {
        title: 'סלט גזר',
        weight: 350,
        category: 'מיוחדים',
        bgImage: '/gezer.jpeg'
    },
    {
        title: 'סלט תירס ופטריות',
        weight: 350,
        category: 'חומוס',
        bgImage: '/tiras.jpeg'
    },
    {
        title: 'סלט משייר',
        weight: 350,
        category: 'חומוס',
        bgImage: '/gezer2.jpeg'
    },
    {
        title: 'סלט כבד',
        weight: 400,
        category: 'טחינה',
        bgImage: '/kaved.jpeg'
    },
    {
        title: 'סלט סלק',
        weight: 400,
        category: 'טחינה',
        bgImage: '/selek.jpeg'
    },
    {
        title: 'חצילים קלויים',
        weight: 250,
        category: 'חצילים',
        bgImage: '/hazil1.jpeg'
    },
    {
        title: 'סלט אסיאתי',
        weight: 300,
        category: 'חצילים קלויים בסגנון יווני',
        bgImage: '/asiati.jpeg'
    },
    {
        title: 'חצילים קלויים חריפים',
        weight: 300,
        category: 'חצילים',
        bgImage: '/hazil2.jpeg'
    },
    {
        title: 'חצילים חריפים',
        weight: 300,
        category: 'חצילים',
        bgImage: '/hazil22.jpeg'
    },
    {
        title: 'סלט טצישי טריפוליטאי',
        weight: 500,
        category: 'חמוצים',
        bgImage: '/tirshi.jpeg'
    },
    {
        title: 'חציל על האש',
        weight: 500,
        category: 'חמוצים',
        bgImage: '/hfire.jpeg'
    },
    {
        title: 'חציל מטוגן',
        weight: 400,
        category: 'חמוצים',
        bgImage: '/hazil3.jpeg'
    },
    {
        title: 'פלפל חריף מטוגן',
        weight: 300,
        category: 'מיוחדים',
        bgImage: '/paper.jpeg'
    },
    {
        title: 'סלט אבוקדו טרי',
        weight: 250,
        category: 'מיוחדים',
        bgImage: '/avokado.jpg'
    },
    {
        title: 'סלט ביצים במיונז',
        weight: 200,
        category: 'מיוחדים',
        bgImage: '/eggs.jpg'
    },
    {
        title: 'סלט תפו"א',
        weight: 300,
        category: 'מיוחדים',
        bgImage: '/adama.jpg'
    },
    {
        title: 'סלט טחינה עמבה',
        weight: 300,
        category: 'מיוחדים',
        bgImage: '/thinaAmba.jpg'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Contact.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChecklistItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ChecklistItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/assets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Contact = ()=>{
    _s();
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeItemsCount, setActiveItemsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [maxItems, setMaxItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [isBit, setIsBit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saladList"].map((item, index)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChecklistItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            index: index,
            title: item.title,
            weight: item.weight,
            bgImage: item.bgImage,
            activeItemsCount: activeItemsCount,
            setActiveItemsCount: setActiveItemsCount,
            maxItems: maxItems
        }, index, false, {
            fileName: "[project]/app/components/Contact.js",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    });
    const changeHandler = ()=>{
        setMaxItems((prev)=>22 - prev);
    };
    const handleChange = ()=>{
        setIsBit(false);
    };
    const handleChange2 = ()=>{
        setIsBit(true);
    };
    const onSubmit = async (event)=>{
        event.preventDefault();
        setResult("שולח...");
        const formData = new FormData(event.target);
        formData.append("access_key", "b7897d0e-ed09-4dc4-aa69-50b167e2ec6d");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("ההודעה נשלחה בהצלחה! תודה שבחרת סלטי שולחן השבת, המשלוח יגיע לביתך ביום חמישי לפני הבישולים לשבת.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contactForm",
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "max-w-7xl mx-auto p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-auto gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-auto sm:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "שם",
                                    placeholder: "שם ומשפחה",
                                    required: true,
                                    className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90  "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 70,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "כתובת",
                                    placeholder: "כתובת מלאה - עיר רחוב ומספר בית",
                                    required: true,
                                    className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-auto sm:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "נייד",
                                    placeholder: "מספר טלפון",
                                    required: true,
                                    className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "אימייל",
                                    placeholder: "אימייל",
                                    required: true,
                                    className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 86,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 68,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "mt-6 m-4 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "items-option-1",
                                    type: "radio",
                                    name: "מספר יחידות",
                                    value: "שמונה יחידות",
                                    onChange: changeHandler,
                                    disabled: activeItemsCount > 8,
                                    defaultChecked: true,
                                    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 96,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "items-option-1",
                                    className: "block ms-2  text-md font-semibold text-gray-800/90",
                                    children: "8 יחידות - 99 שקלים"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 95,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "items-option-2",
                                    type: "radio",
                                    name: "מספר יחידות",
                                    value: "14 יחידות",
                                    onChange: changeHandler,
                                    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 105,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "items-option-2",
                                    className: "block ms-2 text-md font-semibold text-gray-800/90",
                                    children: "14 יחידות - 149 שקלים"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 107,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 104,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 92,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-6 gap-2",
                    children: items
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 114,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "max-w-fit p-2 rounded-b-md mt-6 mb-2 text-xl font-Outfit text-green-900 font-semibold shadow inset-shadow-black",
                    children: "דרך התשלום המועדפת עליך"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 121,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "max-w-fit flex flex-col p-2  gap-2 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "country-option-1",
                                    type: "radio",
                                    name: "צורת תשלום",
                                    value: "תשלום במזומן",
                                    onChange: handleChange,
                                    defaultChecked: true,
                                    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "country-option-1",
                                    className: "block ms-2 font-medium text-gray-800/90",
                                    children: "תשלום במזומן"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 129,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 126,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "country-option-2",
                                                type: "radio",
                                                name: "צורת תשלום",
                                                value: "העברה בביט",
                                                onChange: handleChange2,
                                                className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Contact.js",
                                                lineNumber: 136,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "country-option-2",
                                                className: "block ms-2 font-medium text-gray-800/90",
                                                children: "העברה בביט"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Contact.js",
                                                lineNumber: 138,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Contact.js",
                                        lineNumber: 135,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "אסמכתה ביט",
                                        placeholder: "מספר אסמכתה",
                                        hidden: !isBit,
                                        required: isBit ? true : false,
                                        className: "flex-1 p-0 max-w-[50%] outline-none border-[0.5px] border-green-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90  "
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Contact.js",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Contact.js",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 133,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 123,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "message",
                    rows: "6",
                    placeholder: "הודעה...",
                    className: "md:w-[45%] w-[85%] p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHower/30 dark:border-white/90"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 153,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: activeItemsCount === maxItems ? false : true,
                    className: "text-lg py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-semibold",
                    children: [
                        "שלח הזמנה",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/vercel.svg",
                            alt: "send",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 163,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 159,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 166,
                    columnNumber: 14
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Contact.js",
            lineNumber: 67,
            columnNumber: 6
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Contact.js",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_s(Contact, "c9QRS1Kx8RzIn5K6BRe/ENJPr1Q=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[]}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_6de9d6bf._.js.map