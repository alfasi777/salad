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
"[project]/assets/instegram.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/instegram.d05ceace.png");}}),
"[project]/assets/instegram.png.mjs { IMAGE => \"[project]/assets/instegram.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$instegram$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/instegram.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$instegram$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    blurWidth: 1,
    blurHeight: 1
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
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$instegram$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$instegram$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/instegram.png.mjs { IMAGE => "[project]/assets/instegram.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/youtube.png.mjs { IMAGE => "[project]/assets/youtube.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
;
;
;
;
;
const assets = {
    youtube: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$youtube$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$youtube$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    instegram: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$instegram$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$instegram$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contactForm"
    }, void 0, false, {
        fileName: "[project]/app/components/Contact.js",
        lineNumber: 26,
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

//# sourceMappingURL=_7b3527c4._.js.map