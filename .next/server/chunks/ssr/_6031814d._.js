module.exports = {

"[project]/app/components/ChecklistItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ChecklistItem = ({ index, title, weight, category, activeItemsCount, setActiveItemsCount })=>{
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const changeHandler = ()=>{
        setIsActive(!isActive);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) {
            setActiveItemsCount((prevCount)=>{
                if (prevCount !== 0) {
                    return prevCount - 1;
                }
                return prevCount;
            });
        }
        if (isActive) {
            setActiveItemsCount((prevCount)=>prevCount + 1);
        }
    }, [
        isActive,
        setActiveItemsCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: index,
                type: "checkbox",
                value: title + ' ' + weight + ` גרם `,
                name: index,
                checked: isActive,
                disabled: activeItemsCount === 8 && !isActive ? true : false,
                onChange: changeHandler,
                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            }, void 0, false, {
                fileName: "[project]/app/components/ChecklistItem.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "index",
                className: "ms-2 text-sm text-gray-900 dark:text-gray-300",
                children: [
                    title,
                    " ",
                    weight,
                    " גרם"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ChecklistItem.js",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/app/components/ChecklistItem.js",
        lineNumber: 26,
        columnNumber: 9
    }, this);
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
        title: 'סלט חומוס גלילי',
        weight: 350,
        category: 'חומוס',
        bgImage: '/youtube.png'
    },
    {
        title: 'סלט חומוס אבו-גוש',
        weight: 350,
        category: 'חומוס',
        bgImage: '/youtube.png'
    },
    {
        title: 'סלט חומוס אבו-שוקרי',
        weight: 350,
        category: 'חומוס',
        bgImage: '/youtube.png'
    },
    {
        title: 'סלט חומוס ירושליים העתיקה',
        weight: 350,
        category: 'חומוס',
        bgImage: '/youtube.png'
    },
    {
        title: 'טחינה לבנה מחנה יהודה',
        weight: 400,
        category: 'טחינה',
        bgImage: '/youtube.png'
    },
    {
        title: 'טחינה עם עמבה',
        weight: 400,
        category: 'טחינה',
        bgImage: '/youtube.png'
    },
    {
        title: 'חצילים קלויים בסגנון מזרחי',
        weight: 250,
        category: 'חצילים',
        bgImage: '/youtube.png'
    },
    {
        title: 'חצילים קלויים במיונז',
        weight: 300,
        category: 'חצילים קלויים בסגנון יווני',
        image: '/youtube.png'
    },
    {
        title: 'חצילים קלויים בסלסה חריפה',
        weight: 300,
        category: 'חצילים',
        image: '/youtube.png'
    },
    {
        title: 'חצילים קלויים בטחינה',
        weight: 300,
        category: 'חצילים',
        image: '/youtube.png'
    },
    {
        title: 'חמוצי הבית בטעם חריף',
        weight: 500,
        category: 'חמוצים',
        image: '/youtube.png'
    },
    {
        title: 'חמוצים בסגנון אסייתי',
        weight: 500,
        category: 'חמוצים',
        image: '/youtube.png'
    },
    {
        title: 'מלפפון מיני בחומץ ושום',
        weight: 400,
        category: 'חמוצים',
        image: '/youtube.png'
    },
    {
        title: 'פלפל חריף מטוגן עם שום',
        weight: 300,
        category: 'מיוחדים',
        image: '/youtube.png'
    },
    {
        title: 'סלט אבוקדו טרי',
        weight: 250,
        category: 'מיוחדים',
        image: '/youtube.png'
    },
    {
        title: 'סלט ביצים במיונז',
        weight: 200,
        category: 'מיוחדים',
        image: '/youtube.png'
    },
    {
        title: 'סלט תפו"א ברוטב קארי',
        weight: 300,
        category: 'מיוחדים',
        image: '/youtube.png'
    },
    {
        title: 'בצלצלי שאלוט מוחצמים',
        weight: 300,
        category: 'מיוחדים',
        image: '/youtube.png'
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
"use client";
;
;
;
;
const Contact = ()=>{
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeItemsCount, setActiveItemsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saladList"].map((item, index)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChecklistItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            index: index,
            title: item.title,
            weight: item.weight,
            category: item.category,
            activeItemsCount: activeItemsCount,
            setActiveItemsCount: setActiveItemsCount
        }, index, false, {
            fileName: "[project]/app/components/Contact.js",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    });
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
            setResult("ההודעה נשלחה בהצלחה! תודה שבחרת סלטי שמואל, המשלוח יגיע לביתך ביום חמישי לפני הבישולים לשבת.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contactForm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-auto gap-6 mt-10 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "name",
                            placeholder: "שם ומשפחה",
                            required: true,
                            className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "address",
                            placeholder: "כתובת מלאה - עיר רחוב ומספר בית",
                            required: true,
                            className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 57,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "phone",
                            placeholder: "מספר טלפון",
                            required: true,
                            className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 62,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            name: "email",
                            placeholder: "אימייל",
                            required: true,
                            className: "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30 dark:border-white/90 "
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 67,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 52,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mb-2 text-xl font-Outfit text-yellow-500/90 font-semibold",
                    children: "אנא סמן שמונה מוצרים מתוך הרשימה !"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 72,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    transition: {
                        delay: 1.5,
                        duration: 0.6
                    },
                    className: "p-6 bg-white border border-gray-400/80 rounded-md  shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: items
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 74,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mt-6 mb-2 text-lg font-Outfit text-yellow-500/80 font-semibold",
                    children: "דרך התשלום המועדפת עליך:"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 83,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    className: "max-w-fit p-2 flex gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "country-option-1",
                                    type: "radio",
                                    name: "payment",
                                    value: "תשלום במזומן",
                                    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "country-option-1",
                                    className: "block ms-2  text-md font-medium text-gray-800/90 dark:text-gray-300",
                                    children: "תשלום במזומן"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 88,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "country-option-2",
                                    type: "radio",
                                    name: "payment",
                                    value: "העברה בביט",
                                    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 96,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "country-option-2",
                                    className: "block ms-2 text-md font-medium text-gray-800/90 dark:text-gray-300",
                                    children: "העברה בביט"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.js",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 95,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 85,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "message",
                    rows: "6",
                    placeholder: "הודעה...",
                    required: true,
                    className: "mt-6 w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHower/30 dark:border-white/90"
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 103,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "text-lg py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-sans dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHower",
                    children: [
                        "שלח הודעה",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                            src: "/vercel.svg",
                            alt: "send",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact.js",
                            lineNumber: 112,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 109,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact.js",
                    lineNumber: 115,
                    columnNumber: 14
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Contact.js",
            lineNumber: 51,
            columnNumber: 6
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Contact.js",
        lineNumber: 50,
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

};

//# sourceMappingURL=_6031814d._.js.map