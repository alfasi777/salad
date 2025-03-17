module.exports = {

"[project]/app/components/ChecklistItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const ChecklistItem = ({ index, title, weight, bgImage, activeItemsCount, setActiveItemsCount, maxItems })=>{
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-8 border border-0.5 border-gray-300/55 p-4 rounded-md  bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "index",
                            className: "text-lg text-gray-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/ChecklistItem.js",
                            lineNumber: 81,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0 border-2 border-gray-400/50 p-2 rounded-md max-w-max bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: changeHandler,
                                    disabled: activeItemsCount === maxItems ? true : false,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: changeHandler2,
                                    disabled: quantity === 0 && activeItemsCount === maxItems ? true : false,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = ChecklistItem;
}}),
"[project]/assets/whatsapp.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/whatsapp.a67c4329.png");}}),
"[project]/assets/whatsapp.png.mjs { IMAGE => \"[project]/assets/whatsapp.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/assets/mail_icon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/mail_icon.3936e455.png");}}),
"[project]/assets/mail_icon.png.mjs { IMAGE => \"[project]/assets/mail_icon.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/assets/facebook.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/facebook.b133427f.png");}}),
"[project]/assets/facebook.png.mjs { IMAGE => \"[project]/assets/facebook.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/assets/youtube.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/youtube.1fc83867.png");}}),
"[project]/assets/youtube.png.mjs { IMAGE => \"[project]/assets/youtube.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/assets/assets.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assets": (()=>assets),
    "saladList": (()=>saladList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$whatsapp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$whatsapp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/whatsapp.png.mjs { IMAGE => "[project]/assets/whatsapp.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$mail_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$mail_icon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/mail_icon.png.mjs { IMAGE => "[project]/assets/mail_icon.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$facebook$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$facebook$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/facebook.png.mjs { IMAGE => "[project]/assets/facebook.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/youtube.png.mjs { IMAGE => "[project]/assets/youtube.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
;
;
;
;
const assets = {
    youtube: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$facebook$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$facebook$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    whatsapp: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$whatsapp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$whatsapp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    mail_icon: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$mail_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$mail_icon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
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
}}),
"[project]/app/components/Contact.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChecklistItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ChecklistItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/assets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Contact = ()=>{
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeItemsCount, setActiveItemsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [maxItems, setMaxItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(8);
    const [isBit, setIsBit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saladList"].map((item, index)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChecklistItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contactForm",
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "max-w-7xl mx-auto p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-auto gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-auto sm:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-auto sm:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "mt-6 m-4 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "items-option-1",
                                    className: "block ms-2  text-md font-semibold text-gray-800/90 dark:text-gray-300",
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "items-option-2",
                                    className: "block ms-2 text-md font-semibold text-gray-800/90 dark:text-gray-300",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12",
                    children: items
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 114,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "max-w-fit p-2 rounded-b-md mt-6 mb-2 text-xl font-Outfit text-green-900 font-semibold shadow inset-shadow-black",
                    children: "דרך התשלום המועדפת עליך"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 121,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "max-w-fit p-2 flex gap-6 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "country-option-1",
                                    className: "block ms-2  text-md font-medium text-gray-800/90 dark:text-gray-300",
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "country-option-2",
                                            type: "radio",
                                            name: "צורת תשלום",
                                            value: "העברה בביט",
                                            onChange: handleChange2,
                                            className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.js",
                                            lineNumber: 136,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "country-option-2",
                                            className: "block ms-2 text-md font-medium text-gray-800/90 dark:text-gray-300",
                                            children: "העברה בביט"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.js",
                                            lineNumber: 138,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 135,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "אסמכתה ביט",
                                    placeholder: "מספר אסמכתה",
                                    hidden: !isBit,
                                    required: isBit ? true : false,
                                    className: "flex-1 p-0 max-w-[50%] outline-none border-[0.5px] border-green-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90  "
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 134,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 123,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "message",
                    rows: "6",
                    placeholder: "הודעה...",
                    className: "md:w-[45%] w-[85%] p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHower/30 dark:border-white/90"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 149,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: activeItemsCount === maxItems ? false : true,
                    className: "text-lg py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-semibold",
                    children: [
                        "שלח הזמנה",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/vercel.svg",
                            alt: "send",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 159,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 155,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 162,
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
const __TURBOPACK__default__export__ = Contact;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
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
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
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
"[project]/node_modules/next/image.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_348aa412._.js.map