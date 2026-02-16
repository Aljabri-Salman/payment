module.exports = [
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSafeContext",
    ()=>createSafeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function createSafeContext(errorMessage) {
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
    const useSafeContext = ()=>{
        const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Context);
        if (ctx === null) {
            throw new Error(errorMessage);
        }
        return ctx;
    };
    const Provider = ({ children, value })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    return [
        Provider,
        useSafeContext
    ];
}
;
 //# sourceMappingURL=create-safe-context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellProvider",
    ()=>AppShellProvider,
    "useAppShellContext",
    ()=>useAppShellContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const [AppShellProvider, useAppShellContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSafeContext"])("AppShell was not found in tree");
;
 //# sourceMappingURL=AppShell.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_89ab340",
    "navbar": "m_45252eee",
    "aside": "m_9cdde9a",
    "header": "m_3b16f56b",
    "main": "m_8983817",
    "footer": "m_3840c879",
    "section": "m_6dcfc7c7"
};
;
 //# sourceMappingURL=AppShell.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellAside",
    ()=>AppShellAside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$2$2b$efeb1d1299a8bcd3$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/react-remove-scroll@2.7.2+efeb1d1299a8bcd3/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AppShellAside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const { classNames, className, style, styles, unstyled, vars, withBorder, zIndex, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShellAside", null, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppShellContext"])();
    if (ctx.disabled) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "aside",
        ref,
        mod: [
            {
                "with-border": withBorder ?? ctx.withBorder
            },
            mod
        ],
        ...ctx.getStyles("aside", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$2$2b$efeb1d1299a8bcd3$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"].classNames.zeroRight]: ctx.offsetScrollbars
            }, className),
            classNames,
            styles,
            style
        }),
        ...others,
        __vars: {
            "--app-shell-aside-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`
        }
    });
});
AppShellAside.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShellAside.displayName = "@mantine/core/AppShellAside";
;
 //# sourceMappingURL=AppShellAside.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellFooter/AppShellFooter.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellFooter",
    ()=>AppShellFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$2$2b$efeb1d1299a8bcd3$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/react-remove-scroll@2.7.2+efeb1d1299a8bcd3/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AppShellFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const { classNames, className, style, styles, unstyled, vars, withBorder, zIndex, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShellFooter", null, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppShellContext"])();
    if (ctx.disabled) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "footer",
        ref,
        mod: [
            {
                "with-border": withBorder ?? ctx.withBorder
            },
            mod
        ],
        ...ctx.getStyles("footer", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$2$2b$efeb1d1299a8bcd3$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"].classNames.zeroRight]: ctx.offsetScrollbars
            }, className),
            classNames,
            styles,
            style
        }),
        ...others,
        __vars: {
            "--app-shell-footer-z-index": (zIndex ?? ctx.zIndex)?.toString()
        }
    });
});
AppShellFooter.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShellFooter.displayName = "@mantine/core/AppShellFooter";
;
 //# sourceMappingURL=AppShellFooter.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellHeader/AppShellHeader.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellHeader",
    ()=>AppShellHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$2$2b$efeb1d1299a8bcd3$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/react-remove-scroll@2.7.2+efeb1d1299a8bcd3/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AppShellHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const { classNames, className, style, styles, unstyled, vars, withBorder, zIndex, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShellHeader", null, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppShellContext"])();
    if (ctx.disabled) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "header",
        ref,
        mod: [
            {
                "with-border": withBorder ?? ctx.withBorder
            },
            mod
        ],
        ...ctx.getStyles("header", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$2$2b$efeb1d1299a8bcd3$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"].classNames.zeroRight]: ctx.offsetScrollbars
            }, className),
            classNames,
            styles,
            style
        }),
        ...others,
        __vars: {
            "--app-shell-header-z-index": (zIndex ?? ctx.zIndex)?.toString()
        }
    });
});
AppShellHeader.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShellHeader.displayName = "@mantine/core/AppShellHeader";
;
 //# sourceMappingURL=AppShellHeader.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMain/AppShellMain.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellMain",
    ()=>AppShellMain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AppShellMain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const { classNames, className, style, styles, vars, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShellMain", null, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppShellContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "main",
        ref,
        ...ctx.getStyles("main", {
            className,
            style,
            classNames,
            styles
        }),
        ...others
    });
});
AppShellMain.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShellMain.displayName = "@mantine/core/AppShellMain";
;
 //# sourceMappingURL=AppShellMain.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBreakpointValue",
    ()=>getBreakpointValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function getBreakpointValue(breakpoint, breakpoints) {
    if (breakpoint in breakpoints) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["px"])(breakpoints[breakpoint]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["px"])(breakpoint);
}
;
 //# sourceMappingURL=get-breakpoint-value.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSortedBreakpoints",
    ()=>getSortedBreakpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-ssr] (ecmascript)");
'use client';
;
function getSortedBreakpoints(values, breakpoints) {
    const convertedBreakpoints = values.map((breakpoint)=>({
            value: breakpoint,
            px: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBreakpointValue"])(breakpoint, breakpoints)
        }));
    convertedBreakpoints.sort((a, b)=>a.px - b.px);
    return convertedBreakpoints;
}
;
 //# sourceMappingURL=get-sorted-breakpoints.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseSize",
    ()=>getBaseSize
]);
'use client';
function getBaseSize(size) {
    if (typeof size === "object") {
        return size.base;
    }
    return size;
}
;
 //# sourceMappingURL=get-base-size.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPrimitiveSize",
    ()=>isPrimitiveSize
]);
'use client';
function isPrimitiveSize(size) {
    const isBaseSize = typeof size === "object" && size !== null && typeof size.base !== "undefined" && Object.keys(size).length === 1;
    return typeof size === "number" || typeof size === "string" || isBaseSize;
}
;
 //# sourceMappingURL=is-primitive-size.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isResponsiveSize",
    ()=>isResponsiveSize
]);
'use client';
function isResponsiveSize(size) {
    if (typeof size !== "object" || size === null) {
        return false;
    }
    if (Object.keys(size).length === 1 && "base" in size) {
        return false;
    }
    return true;
}
;
 //# sourceMappingURL=is-responsive-size.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignAsideVariables",
    ()=>assignAsideVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function assignAsideVariables({ baseStyles, minMediaStyles, maxMediaStyles, aside, theme, mode }) {
    const asideWidth = aside?.width;
    const collapsedAsideTransform = "translateX(var(--app-shell-aside-width))";
    const collapsedAsideTransformRtl = "translateX(calc(var(--app-shell-aside-width) * -1))";
    if (aside?.breakpoint && !aside?.collapsed?.mobile) {
        maxMediaStyles[aside?.breakpoint] = maxMediaStyles[aside?.breakpoint] || {};
        if (mode === "fixed") {
            maxMediaStyles[aside?.breakpoint]["--app-shell-aside-width"] = "100%";
            maxMediaStyles[aside?.breakpoint]["--app-shell-aside-offset"] = "0px";
        } else {
            maxMediaStyles[aside?.breakpoint]["--app-shell-aside-width"] = "0px";
            maxMediaStyles[aside?.breakpoint]["--app-shell-aside-offset"] = "0px";
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitiveSize"])(asideWidth)) {
        const baseSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseSize"])(asideWidth));
        baseStyles["--app-shell-aside-width"] = baseSize;
        baseStyles["--app-shell-aside-offset"] = baseSize;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponsiveSize"])(asideWidth)) {
        if (typeof asideWidth.base !== "undefined") {
            baseStyles["--app-shell-aside-width"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(asideWidth.base);
            baseStyles["--app-shell-aside-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(asideWidth.base);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(asideWidth).forEach((key)=>{
            if (key !== "base") {
                minMediaStyles[key] = minMediaStyles[key] || {};
                minMediaStyles[key]["--app-shell-aside-width"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(asideWidth[key]);
                minMediaStyles[key]["--app-shell-aside-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(asideWidth[key]);
            }
        });
    }
    if (aside?.breakpoint && mode === "static") {
        minMediaStyles[aside.breakpoint] = minMediaStyles[aside.breakpoint] || {};
        minMediaStyles[aside.breakpoint]["--app-shell-aside-position"] = "sticky";
        minMediaStyles[aside.breakpoint]["--app-shell-aside-grid-row"] = "2";
        minMediaStyles[aside.breakpoint]["--app-shell-aside-grid-column"] = "3";
        minMediaStyles[aside.breakpoint]["--app-shell-main-column-end"] = "3";
    }
    if (aside?.collapsed?.desktop) {
        const breakpointValue = aside.breakpoint;
        minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
        minMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
        minMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
        if (mode === "fixed") {
            minMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px !important";
        } else {
            minMediaStyles[breakpointValue]["--app-shell-aside-width"] = "0px";
            minMediaStyles[breakpointValue]["--app-shell-aside-display"] = "none";
            minMediaStyles[breakpointValue]["--app-shell-main-column-end"] = "-1";
        }
        minMediaStyles[breakpointValue]["--app-shell-aside-scroll-locked-visibility"] = "hidden";
    }
    if (aside?.collapsed?.mobile) {
        const breakpointValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBreakpointValue"])(aside.breakpoint, theme.breakpoints) - 0.1;
        maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
        if (mode === "fixed") {
            maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "100%";
            maxMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px";
        } else {
            maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "0px";
        }
        maxMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
        maxMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
        maxMediaStyles[breakpointValue]["--app-shell-aside-scroll-locked-visibility"] = "hidden";
    }
}
;
 //# sourceMappingURL=assign-aside-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignFooterVariables",
    ()=>assignFooterVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function assignFooterVariables({ baseStyles, minMediaStyles, footer, mode }) {
    const footerHeight = footer?.height;
    const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
    const shouldOffset = mode === "static" ? true : footer?.offset ?? true;
    if (mode === "static" && footer) {
        baseStyles["--app-shell-footer-position"] = "sticky";
        baseStyles["--app-shell-footer-grid-column"] = "1 / -1";
        baseStyles["--app-shell-footer-grid-row"] = "3";
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitiveSize"])(footerHeight)) {
        const baseSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseSize"])(footerHeight));
        baseStyles["--app-shell-footer-height"] = baseSize;
        if (shouldOffset) {
            baseStyles["--app-shell-footer-offset"] = baseSize;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponsiveSize"])(footerHeight)) {
        if (typeof footerHeight.base !== "undefined") {
            baseStyles["--app-shell-footer-height"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(footerHeight.base);
            if (shouldOffset) {
                baseStyles["--app-shell-footer-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(footerHeight.base);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(footerHeight).forEach((key)=>{
            if (key !== "base") {
                minMediaStyles[key] = minMediaStyles[key] || {};
                minMediaStyles[key]["--app-shell-footer-height"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(footerHeight[key]);
                if (shouldOffset) {
                    minMediaStyles[key]["--app-shell-footer-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(footerHeight[key]);
                }
            }
        });
    }
    if (footer?.collapsed) {
        baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
        if (mode === "fixed") {
            baseStyles["--app-shell-footer-offset"] = "0px !important";
        }
    }
}
;
 //# sourceMappingURL=assign-footer-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-header-variables/assign-header-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignHeaderVariables",
    ()=>assignHeaderVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function assignHeaderVariables({ baseStyles, minMediaStyles, header, mode }) {
    const headerHeight = header?.height;
    const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
    const shouldOffset = mode === "static" ? true : header?.offset ?? true;
    if (mode === "static" && header) {
        baseStyles["--app-shell-header-position"] = "sticky";
        baseStyles["--app-shell-header-grid-column"] = "1 / -1";
        baseStyles["--app-shell-header-grid-row"] = "1";
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitiveSize"])(headerHeight)) {
        const baseSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseSize"])(headerHeight));
        baseStyles["--app-shell-header-height"] = baseSize;
        if (shouldOffset) {
            baseStyles["--app-shell-header-offset"] = baseSize;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponsiveSize"])(headerHeight)) {
        if (typeof headerHeight.base !== "undefined") {
            baseStyles["--app-shell-header-height"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(headerHeight.base);
            if (shouldOffset) {
                baseStyles["--app-shell-header-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(headerHeight.base);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(headerHeight).forEach((key)=>{
            if (key !== "base") {
                minMediaStyles[key] = minMediaStyles[key] || {};
                minMediaStyles[key]["--app-shell-header-height"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(headerHeight[key]);
                if (shouldOffset) {
                    minMediaStyles[key]["--app-shell-header-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(headerHeight[key]);
                }
            }
        });
    }
    if (header?.collapsed) {
        baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
        if (mode === "fixed") {
            baseStyles["--app-shell-header-offset"] = "0px !important";
        }
    }
}
;
 //# sourceMappingURL=assign-header-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-navbar-variables/assign-navbar-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignNavbarVariables",
    ()=>assignNavbarVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function assignNavbarVariables({ baseStyles, minMediaStyles, maxMediaStyles, navbar, theme, mode }) {
    const navbarWidth = navbar?.width;
    const collapsedNavbarTransform = "translateX(calc(var(--app-shell-navbar-width) * -1))";
    const collapsedNavbarTransformRtl = "translateX(var(--app-shell-navbar-width))";
    if (navbar?.breakpoint && !navbar?.collapsed?.mobile) {
        maxMediaStyles[navbar?.breakpoint] = maxMediaStyles[navbar?.breakpoint] || {};
        maxMediaStyles[navbar?.breakpoint]["--app-shell-navbar-offset"] = "0px";
        maxMediaStyles[navbar?.breakpoint]["--app-shell-navbar-width"] = "100%";
        if (mode === "static") {
            maxMediaStyles[navbar?.breakpoint]["--app-shell-navbar-grid-width"] = "0px";
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitiveSize"])(navbarWidth)) {
        const baseSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseSize"])(navbarWidth));
        baseStyles["--app-shell-navbar-width"] = baseSize;
        baseStyles["--app-shell-navbar-offset"] = baseSize;
        if (mode === "static") {
            baseStyles["--app-shell-navbar-grid-width"] = baseSize;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponsiveSize"])(navbarWidth)) {
        if (typeof navbarWidth.base !== "undefined") {
            baseStyles["--app-shell-navbar-width"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(navbarWidth.base);
            baseStyles["--app-shell-navbar-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(navbarWidth.base);
            if (mode === "static") {
                baseStyles["--app-shell-navbar-grid-width"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(navbarWidth.base);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(navbarWidth).forEach((key)=>{
            if (key !== "base") {
                minMediaStyles[key] = minMediaStyles[key] || {};
                minMediaStyles[key]["--app-shell-navbar-width"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(navbarWidth[key]);
                minMediaStyles[key]["--app-shell-navbar-offset"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(navbarWidth[key]);
                if (mode === "static") {
                    minMediaStyles[key]["--app-shell-navbar-grid-width"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(navbarWidth[key]);
                }
            }
        });
    }
    if (navbar?.breakpoint && mode === "static") {
        minMediaStyles[navbar.breakpoint] = minMediaStyles[navbar.breakpoint] || {};
        minMediaStyles[navbar.breakpoint]["--app-shell-navbar-position"] = "sticky";
        minMediaStyles[navbar.breakpoint]["--app-shell-navbar-grid-row"] = "2";
        minMediaStyles[navbar.breakpoint]["--app-shell-navbar-grid-column"] = "1";
        minMediaStyles[navbar.breakpoint]["--app-shell-main-column-start"] = "2";
    }
    if (navbar?.collapsed?.desktop) {
        const breakpointValue = navbar.breakpoint;
        minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
        minMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
        minMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
        if (mode === "fixed") {
            minMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px !important";
        } else {
            minMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "0px";
            minMediaStyles[breakpointValue]["--app-shell-navbar-display"] = "none";
            minMediaStyles[breakpointValue]["--app-shell-main-column-start"] = "1";
        }
    }
    if (navbar?.collapsed?.mobile) {
        const breakpointValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBreakpointValue"])(navbar.breakpoint, theme.breakpoints) - 0.1;
        maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
        maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
        maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
        if (mode === "static") {
            maxMediaStyles[breakpointValue]["--app-shell-navbar-grid-width"] = "0px";
        }
        maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
        maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
    }
}
;
 //# sourceMappingURL=assign-navbar-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-padding-value/get-padding-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaddingValue",
    ()=>getPaddingValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function getPaddingValue(padding) {
    return Number(padding) === 0 ? "0px" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(padding);
}
;
 //# sourceMappingURL=get-padding-value.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignPaddingVariables",
    ()=>assignPaddingVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$padding$2d$value$2f$get$2d$padding$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-padding-value/get-padding-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function assignPaddingVariables({ padding, baseStyles, minMediaStyles }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$primitive$2d$size$2f$is$2d$primitive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimitiveSize"])(padding)) {
        baseStyles["--app-shell-padding"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$padding$2d$value$2f$get$2d$padding$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$base$2d$size$2f$get$2d$base$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseSize"])(padding));
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$is$2d$responsive$2d$size$2f$is$2d$responsive$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponsiveSize"])(padding)) {
        if (padding.base) {
            baseStyles["--app-shell-padding"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$padding$2d$value$2f$get$2d$padding$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingValue"])(padding.base);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(padding).forEach((key)=>{
            if (key !== "base") {
                minMediaStyles[key] = minMediaStyles[key] || {};
                minMediaStyles[key]["--app-shell-padding"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$padding$2d$value$2f$get$2d$padding$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaddingValue"])(padding[key]);
            }
        });
    }
}
;
 //# sourceMappingURL=assign-padding-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariables",
    ()=>getVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$sorted$2d$breakpoints$2f$get$2d$sorted$2d$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$aside$2d$variables$2f$assign$2d$aside$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$footer$2d$variables$2f$assign$2d$footer$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$header$2d$variables$2f$assign$2d$header$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-header-variables/assign-header-variables.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$navbar$2d$variables$2f$assign$2d$navbar$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-navbar-variables/assign-navbar-variables.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$padding$2d$variables$2f$assign$2d$padding$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getVariables({ navbar, header, footer, aside, padding, theme, mode }) {
    const minMediaStyles = {};
    const maxMediaStyles = {};
    const baseStyles = {};
    if (mode === "static") {
        baseStyles["--app-shell-main-grid-column"] = "1 / -1";
        baseStyles["--app-shell-main-grid-row"] = "2";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$navbar$2d$variables$2f$assign$2d$navbar$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignNavbarVariables"])({
        baseStyles,
        minMediaStyles,
        maxMediaStyles,
        navbar,
        theme,
        mode
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$aside$2d$variables$2f$assign$2d$aside$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignAsideVariables"])({
        baseStyles,
        minMediaStyles,
        maxMediaStyles,
        aside,
        theme,
        mode
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$header$2d$variables$2f$assign$2d$header$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignHeaderVariables"])({
        baseStyles,
        minMediaStyles,
        header,
        mode
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$footer$2d$variables$2f$assign$2d$footer$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignFooterVariables"])({
        baseStyles,
        minMediaStyles,
        footer,
        mode
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$assign$2d$padding$2d$variables$2f$assign$2d$padding$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignPaddingVariables"])({
        baseStyles,
        minMediaStyles,
        padding
    });
    const minMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$sorted$2d$breakpoints$2f$get$2d$sorted$2d$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedBreakpoints"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(minMediaStyles), theme.breakpoints).map((breakpoint)=>({
            query: `(min-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["em"])(breakpoint.px)})`,
            styles: minMediaStyles[breakpoint.value]
        }));
    const maxMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$sorted$2d$breakpoints$2f$get$2d$sorted$2d$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedBreakpoints"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(maxMediaStyles), theme.breakpoints).map((breakpoint)=>({
            query: `(max-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["em"])(breakpoint.px)})`,
            styles: maxMediaStyles[breakpoint.value]
        }));
    const media = [
        ...minMedia,
        ...maxMedia
    ];
    return {
        baseStyles,
        media
    };
}
;
 //# sourceMappingURL=get-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellMediaStyles",
    ()=>AppShellMediaStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$variables$2f$get$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function AppShellMediaStyles({ navbar, header, aside, footer, padding, mode, selector }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineContext"])();
    const { media, baseStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$get$2d$variables$2f$get$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVariables"])({
        navbar,
        header,
        footer,
        aside,
        padding,
        theme,
        mode
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStyles"], {
        media,
        styles: baseStyles,
        selector: selector || ctx.cssVariablesSelector
    });
}
;
 //# sourceMappingURL=AppShellMediaStyles.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellNavbar/AppShellNavbar.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellNavbar",
    ()=>AppShellNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AppShellNavbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const { classNames, className, style, styles, unstyled, vars, withBorder, zIndex, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShellNavbar", null, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppShellContext"])();
    if (ctx.disabled) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "nav",
        ref,
        mod: [
            {
                "with-border": withBorder ?? ctx.withBorder
            },
            mod
        ],
        ...ctx.getStyles("navbar", {
            className,
            classNames,
            styles,
            style
        }),
        ...others,
        __vars: {
            "--app-shell-navbar-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`
        }
    });
});
AppShellNavbar.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShellNavbar.displayName = "@mantine/core/AppShellNavbar";
;
 //# sourceMappingURL=AppShellNavbar.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellSection/AppShellSection.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellSection",
    ()=>AppShellSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AppShellSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const { classNames, className, style, styles, vars, grow, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShellSection", null, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppShellContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                grow
            },
            mod
        ],
        ...ctx.getStyles("section", {
            className,
            style,
            classNames,
            styles
        }),
        ...others
    });
});
AppShellSection.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShellSection.displayName = "@mantine/core/AppShellSection";
;
 //# sourceMappingURL=AppShellSection.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/use-resizing/use-resizing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResizing",
    ()=>useResizing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function useResizing({ transitionDuration, disabled }) {
    const [resizing, setResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const resizingTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const disabledTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowEvent"])("resize", ()=>{
        setResizing(true);
        clearTimeout(resizingTimeout.current);
        resizingTimeout.current = window.setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setResizing(false);
            }), 200);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])(()=>{
        setResizing(true);
        clearTimeout(disabledTimeout.current);
        disabledTimeout.current = window.setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setResizing(false);
            }), transitionDuration || 0);
    }, [
        disabled,
        transitionDuration
    ]);
    return resizing;
}
;
 //# sourceMappingURL=use-resizing.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellAside$2f$AppShellAside$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellFooter$2f$AppShellFooter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellFooter/AppShellFooter.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellHeader$2f$AppShellHeader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellHeader/AppShellHeader.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMain$2f$AppShellMain$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMain/AppShellMain.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$AppShellMediaStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellNavbar$2f$AppShellNavbar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellNavbar/AppShellNavbar.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellSection$2f$AppShellSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShellSection/AppShellSection.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$use$2d$resizing$2f$use$2d$resizing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/use-resizing/use-resizing.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    withBorder: true,
    padding: 0,
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("app"),
    mode: "fixed"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { transitionDuration, transitionTimingFunction })=>({
        root: {
            "--app-shell-transition-duration": `${transitionDuration}ms`,
            "--app-shell-transition-timing-function": transitionTimingFunction
        }
    }));
const AppShell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("AppShell", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, navbar, withBorder, padding, transitionDuration, transitionTimingFunction, header, zIndex, layout, disabled, aside, footer, offsetScrollbars = true, mode, mod, attributes, id, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "AppShell",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    const resizing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$use$2d$resizing$2f$use$2d$resizing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResizing"])({
        disabled,
        transitionDuration
    });
    const _id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(id);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellProvider"], {
        value: {
            getStyles,
            withBorder,
            zIndex,
            disabled,
            offsetScrollbars,
            mode
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMediaStyles$2f$AppShellMediaStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellMediaStyles"], {
                navbar,
                header,
                aside,
                footer,
                padding,
                mode,
                selector: mode === "static" ? `#${_id}` : void 0
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                ref,
                ...getStyles("root"),
                mod: [
                    {
                        resizing,
                        layout,
                        disabled,
                        mode
                    },
                    mod
                ],
                id: _id,
                ...others
            })
        ]
    });
});
AppShell.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
AppShell.displayName = "@mantine/core/AppShell";
AppShell.Navbar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellNavbar$2f$AppShellNavbar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellNavbar"];
AppShell.Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellHeader$2f$AppShellHeader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellHeader"];
AppShell.Main = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellMain$2f$AppShellMain$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellMain"];
AppShell.Aside = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellAside$2f$AppShellAside$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellAside"];
AppShell.Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellFooter$2f$AppShellFooter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellFooter"];
AppShell.Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShellSection$2f$AppShellSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShellSection"];
;
 //# sourceMappingURL=AppShell.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
'use client';
const noop = ()=>{};
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-mantine-color-scheme.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMantineColorScheme",
    ()=>useMantineColorScheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$color$2d$scheme$2f$use$2d$color$2d$scheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-color-scheme/use-color-scheme.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function disableTransition(nonce) {
    const style = document.createElement("style");
    style.setAttribute("data-mantine-styles", "inline");
    style.innerHTML = "*, *::before, *::after {transition: none !important;}";
    style.setAttribute("data-mantine-disable-transition", "true");
    nonce && style.setAttribute("nonce", nonce);
    document.head.appendChild(style);
    const clear = ()=>document.querySelectorAll("[data-mantine-disable-transition]").forEach((element)=>element.remove());
    return clear;
}
function useMantineColorScheme({ keepTransitions } = {}) {
    const clearStylesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MantineContext"]);
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineStyleNonce"])();
    const nonceValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(nonce?.());
    if (!ctx) {
        throw new Error("[@mantine/core] MantineProvider was not found in tree");
    }
    const setColorScheme = (value)=>{
        ctx.setColorScheme(value);
        clearStylesRef.current = keepTransitions ? ()=>{} : disableTransition(nonceValue.current);
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(()=>{
            clearStylesRef.current?.();
        }, 10);
    };
    const clearColorScheme = ()=>{
        ctx.clearColorScheme();
        clearStylesRef.current = keepTransitions ? ()=>{} : disableTransition(nonceValue.current);
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(()=>{
            clearStylesRef.current?.();
        }, 10);
    };
    const osColorScheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$color$2d$scheme$2f$use$2d$color$2d$scheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])("light", {
        getInitialValueInEffect: false
    });
    const computedColorScheme = ctx.colorScheme === "auto" ? osColorScheme : ctx.colorScheme;
    const toggleColorScheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setColorScheme(computedColorScheme === "light" ? "dark" : "light"), [
        setColorScheme,
        computedColorScheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            clearStylesRef.current?.();
            window.clearTimeout(timeoutRef.current);
        }, []);
    return {
        colorScheme: ctx.colorScheme,
        setColorScheme,
        clearColorScheme,
        toggleColorScheme
    };
}
;
 //# sourceMappingURL=use-mantine-color-scheme.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterFalsyChildren",
    ()=>filterFalsyChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function filterFalsyChildren(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(Boolean);
}
;
 //# sourceMappingURL=filter-falsy-children.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_4081bf90"
};
;
 //# sourceMappingURL=Group.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>Group
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$filter$2d$falsy$2d$children$2f$filter$2d$falsy$2d$children$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    preventGrowOverflow: true,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth })=>({
        root: {
            "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
            "--group-gap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(gap),
            "--group-align": align,
            "--group-justify": justify,
            "--group-wrap": wrap
        }
    }));
const Group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Group", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, children, gap, align, justify, wrap, grow, preventGrowOverflow, vars, variant, __size, mod, attributes, ...others } = props;
    const filteredChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$filter$2d$falsy$2d$children$2f$filter$2d$falsy$2d$children$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterFalsyChildren"])(children);
    const childrenCount = filteredChildren.length;
    const resolvedGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(gap ?? "md");
    const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
    const stylesCtx = {
        childWidth
    };
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Group",
        props,
        stylesCtx,
        className,
        style,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root"),
        ref,
        variant,
        mod: [
            {
                grow
            },
            mod
        ],
        size: __size,
        ...others,
        children: filteredChildren
    });
});
Group.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Group.displayName = "@mantine/core/Group";
;
 //# sourceMappingURL=Group.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_b6d8b162"
};
;
 //# sourceMappingURL=Text.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$gradient$2f$get$2d$gradient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getTextTruncate(truncate) {
    if (truncate === "start") {
        return "start";
    }
    if (truncate === "end" || truncate) {
        return "end";
    }
    return void 0;
}
const defaultProps = {
    inherit: false
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])(// Will be removed in 9.0
// eslint-disable-next-line @typescript-eslint/no-deprecated
(theme, { variant, lineClamp, gradient, size, color })=>({
        root: {
            "--text-fz": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--text-lh": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLineHeight"])(size),
            "--text-gradient": variant === "gradient" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$gradient$2f$get$2d$gradient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGradient"])(gradient, theme) : void 0,
            "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
            "--text-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0
        }
    }));
const Text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Text", defaultProps, _props);
    const { lineClamp, truncate, inline, inherit, gradient, span, __staticSelector, vars, className, style, classNames, styles, unstyled, variant, mod, size, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "Text",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root", {
            focusable: true
        }),
        ref,
        component: span ? "span" : "p",
        variant,
        mod: [
            {
                "data-truncate": getTextTruncate(truncate),
                "data-line-clamp": typeof lineClamp === "number",
                "data-inline": inline,
                "data-inherit": inherit
            },
            mod
        ],
        size,
        ...others
    });
});
Text.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Text.displayName = "@mantine/core/Text";
;
 //# sourceMappingURL=Text.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/transitions.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transitions",
    ()=>transitions
]);
'use client';
const popIn = (from)=>({
        in: {
            opacity: 1,
            transform: "scale(1)"
        },
        out: {
            opacity: 0,
            transform: `scale(.9) translateY(${from === "bottom" ? 10 : -10}px)`
        },
        transitionProperty: "transform, opacity"
    });
const transitions = {
    fade: {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        },
        transitionProperty: "opacity"
    },
    "fade-up": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(30px)"
        },
        transitionProperty: "opacity, transform"
    },
    "fade-down": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-30px)"
        },
        transitionProperty: "opacity, transform"
    },
    "fade-left": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(30px)"
        },
        transitionProperty: "opacity, transform"
    },
    "fade-right": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(-30px)"
        },
        transitionProperty: "opacity, transform"
    },
    scale: {
        in: {
            opacity: 1,
            transform: "scale(1)"
        },
        out: {
            opacity: 0,
            transform: "scale(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-y": {
        in: {
            opacity: 1,
            transform: "scaleY(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleY(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-x": {
        in: {
            opacity: 1,
            transform: "scaleX(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleX(0)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-up": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-20px) skew(-10deg, -5deg)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-down": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) skew(-10deg, -5deg)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-left": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) rotate(-5deg)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-right": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) rotate(5deg)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-down": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-100%)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-up": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(100%)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-left": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(100%)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-right": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        common: {
            transformOrigin: "right"
        },
        transitionProperty: "transform, opacity"
    },
    pop: {
        ...popIn("bottom"),
        common: {
            transformOrigin: "center center"
        }
    },
    "pop-bottom-left": {
        ...popIn("bottom"),
        common: {
            transformOrigin: "bottom left"
        }
    },
    "pop-bottom-right": {
        ...popIn("bottom"),
        common: {
            transformOrigin: "bottom right"
        }
    },
    "pop-top-left": {
        ...popIn("top"),
        common: {
            transformOrigin: "top left"
        }
    },
    "pop-top-right": {
        ...popIn("top"),
        common: {
            transformOrigin: "top right"
        }
    }
};
;
 //# sourceMappingURL=transitions.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransitionStyles",
    ()=>getTransitionStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/transitions.mjs [app-ssr] (ecmascript)");
'use client';
;
const transitionStatuses = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out"
};
function getTransitionStyles({ transition, state, duration, timingFunction }) {
    const shared = {
        WebkitBackfaceVisibility: "hidden",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: timingFunction
    };
    if (typeof transition === "string") {
        if (!(transition in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"])) {
            return {};
        }
        return {
            transitionProperty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"][transition].transitionProperty,
            ...shared,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"][transition].common,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"][transition][transitionStatuses[state]]
        };
    }
    return {
        transitionProperty: transition.transitionProperty,
        ...shared,
        ...transition.common,
        ...transition[transitionStatuses[state]]
    };
}
;
 //# sourceMappingURL=get-transition-styles.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/use-transition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransition",
    ()=>useTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function useTransition({ duration, exitDuration, timingFunction, mounted, onEnter, onExit, onEntered, onExited, enterDelay, exitDelay }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const [transitionDuration, setTransitionDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(reduceMotion ? 0 : duration);
    const [transitionStatus, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mounted ? "entered" : "exited");
    const transitionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const delayTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    function clearAllTimeouts() {
        window.clearTimeout(transitionTimeoutRef.current);
        window.clearTimeout(delayTimeoutRef.current);
        cancelAnimationFrame(rafRef.current);
    }
    const handleStateChange = (shouldMount)=>{
        clearAllTimeouts();
        const preHandler = shouldMount ? onEnter : onExit;
        const handler = shouldMount ? onEntered : onExited;
        const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
        setTransitionDuration(newTransitionDuration);
        if (newTransitionDuration === 0) {
            typeof preHandler === "function" && preHandler();
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
        } else {
            rafRef.current = requestAnimationFrame(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flushSync(()=>{
                    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
                });
                rafRef.current = requestAnimationFrame(()=>{
                    typeof preHandler === "function" && preHandler();
                    setStatus(shouldMount ? "entering" : "exiting");
                    transitionTimeoutRef.current = window.setTimeout(()=>{
                        typeof handler === "function" && handler();
                        setStatus(shouldMount ? "entered" : "exited");
                    }, newTransitionDuration);
                });
            });
        }
    };
    const handleTransitionWithDelay = (shouldMount)=>{
        clearAllTimeouts();
        const delay = shouldMount ? enterDelay : exitDelay;
        if (typeof delay !== "number") {
            handleStateChange(shouldMount);
            return;
        }
        delayTimeoutRef.current = window.setTimeout(()=>{
            handleStateChange(shouldMount);
        }, shouldMount ? enterDelay : exitDelay);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDidUpdate"])(()=>{
        handleTransitionWithDelay(mounted);
    }, [
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            clearAllTimeouts();
        }, []);
    return {
        transitionDuration,
        transitionStatus,
        transitionTimingFunction: timingFunction || "ease"
    };
}
;
 //# sourceMappingURL=use-transition.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>Transition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$styles$2f$get$2d$transition$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$use$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/use-transition.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Transition({ keepMounted, transition = "fade", duration = 250, exitDuration = duration, mounted, children, timingFunction = "ease", onExit, onEntered, onEnter, onExited, enterDelay, exitDelay }) {
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineEnv"])();
    const { transitionDuration, transitionStatus, transitionTimingFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$use$2d$transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])({
        mounted,
        exitDuration,
        duration,
        timingFunction,
        onExit,
        onEntered,
        onEnter,
        onExited,
        enterDelay,
        exitDelay
    });
    if (transitionDuration === 0 || env === "test") {
        return mounted ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children({})
        }) : keepMounted ? children({
            display: "none"
        }) : null;
    }
    return transitionStatus === "exited" ? keepMounted ? children({
        display: "none"
    }) : null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$styles$2f$get$2d$transition$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionStyles"])({
            transition,
            duration: transitionDuration,
            state: transitionStatus,
            timingFunction: transitionTimingFunction
        }))
    });
}
Transition.displayName = "@mantine/core/Transition";
;
 //# sourceMappingURL=Transition.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_8d3f4000",
    "icon": "m_8d3afb97",
    "loader": "m_302b9fb1",
    "group": "m_1a0f1b21",
    "groupSection": "m_437b6484"
};
;
 //# sourceMappingURL=ActionIcon.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroup/ActionIconGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionIconGroup",
    ()=>ActionIconGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    orientation: "horizontal"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { borderWidth })=>({
        group: {
            "--ai-border-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(borderWidth)
        }
    }));
const ActionIconGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ActionIconGroup", defaultProps, _props);
    const { className, style, classNames, styles, unstyled, orientation, vars, borderWidth, variant, mod, attributes, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ActionIconGroup", defaultProps, _props);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ActionIconGroup",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver,
        rootSelector: "group"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("group"),
        ref,
        variant,
        mod: [
            {
                "data-orientation": orientation
            },
            mod
        ],
        role: "group",
        ...others
    });
});
ActionIconGroup.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
ActionIconGroup.displayName = "@mantine/core/ActionIconGroup";
;
 //# sourceMappingURL=ActionIconGroup.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroupSection/ActionIconGroupSection.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionIconGroupSection",
    ()=>ActionIconGroupSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color, gradient, variant, autoContrast, size })=>{
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        groupSection: {
            "--section-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "section-height"),
            "--section-padding-x": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "section-padding-x"),
            "--section-fz": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--section-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--section-bg": color || variant ? colors.background : void 0,
            "--section-color": colors.color,
            "--section-bd": color || variant ? colors.border : void 0
        }
    };
});
const ActionIconGroupSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ActionIconGroupSection", null, _props);
    const { className, style, classNames, styles, unstyled, vars, variant, gradient, radius, autoContrast, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ActionIconGroupSection",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver,
        rootSelector: "groupSection"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("groupSection"),
        ref,
        variant,
        ...others
    });
});
ActionIconGroupSection.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
ActionIconGroupSection.displayName = "@mantine/core/ActionIconGroupSection";
;
 //# sourceMappingURL=ActionIconGroupSection.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionIcon",
    ()=>ActionIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIconGroup$2f$ActionIconGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroup/ActionIconGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIconGroupSection$2f$ActionIconGroupSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroupSection/ActionIconGroupSection.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { size, radius, variant, gradient, color, autoContrast })=>{
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        root: {
            "--ai-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "ai-size"),
            "--ai-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--ai-bg": color || variant ? colors.background : void 0,
            "--ai-hover": color || variant ? colors.hover : void 0,
            "--ai-hover-color": color || variant ? colors.hoverColor : void 0,
            "--ai-color": colors.color,
            "--ai-bd": color || variant ? colors.border : void 0
        }
    };
});
const ActionIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ActionIcon", null, _props);
    const { className, unstyled, variant, classNames, styles, style, loading, loaderProps, size, color, radius, __staticSelector, gradient, vars, children, disabled, "data-disabled": dataDisabled, autoContrast, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "ActionIcon",
            __staticSelector
        ],
        props,
        className,
        style,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        ...getStyles("root", {
            active: !disabled && !loading && !dataDisabled
        }),
        ...others,
        unstyled,
        variant,
        size,
        disabled: disabled || loading,
        ref,
        mod: [
            {
                loading,
                disabled: disabled || dataDisabled
            },
            mod
        ],
        children: [
            typeof loading === "boolean" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                mounted: loading,
                transition: "slide-down",
                duration: 150,
                children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("loader", {
                            style: transitionStyles
                        }),
                        "aria-hidden": true,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                            color: "var(--ai-color)",
                            size: "calc(var(--ai-size) * 0.55)",
                            ...loaderProps
                        })
                    })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                component: "span",
                mod: {
                    loading
                },
                ...getStyles("icon"),
                children
            })
        ]
    });
});
ActionIcon.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
ActionIcon.displayName = "@mantine/core/ActionIcon";
ActionIcon.Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIconGroup$2f$ActionIconGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIconGroup"];
ActionIcon.GroupSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIconGroupSection$2f$ActionIconGroupSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIconGroupSection"];
;
 //# sourceMappingURL=ActionIcon.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Burger/Burger.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_fea6bf1a",
    "burger": "m_d4fb9cad"
};
;
 //# sourceMappingURL=Burger.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Burger/Burger.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Burger",
    ()=>Burger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Burger/Burger.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { color, size, lineSize, transitionDuration, transitionTimingFunction })=>({
        root: {
            "--burger-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--burger-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "burger-size"),
            "--burger-line-size": lineSize ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(lineSize) : void 0,
            "--burger-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
            "--burger-transition-timing-function": transitionTimingFunction
        }
    }));
const Burger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Burger", null, _props);
    const { classNames, className, style, styles, unstyled, vars, opened, children, transitionDuration, transitionTimingFunction, lineSize, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Burger",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        ...getStyles("root"),
        ref,
        ...others,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                mod: [
                    "reduce-motion",
                    {
                        opened
                    }
                ],
                ...getStyles("burger")
            }),
            children
        ]
    });
});
Burger.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Burger.displayName = "@mantine/core/Burger";
;
 //# sourceMappingURL=Burger.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOptionalContext",
    ()=>createOptionalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function createOptionalContext(initialValue = null) {
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(initialValue);
    const useOptionalContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const Provider = ({ children, value })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    return [
        Provider,
        useOptionalContext
    ];
}
;
 //# sourceMappingURL=create-optional-context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputContext",
    ()=>InputContext,
    "useInputContext",
    ()=>useInputContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const [InputContext, useInputContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOptionalContext"])({
    size: "sm"
});
;
 //# sourceMappingURL=Input.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "wrapper": "m_6c018570",
    "input": "m_8fb7ebe7",
    "section": "m_82577fc2",
    "placeholder": "m_88bacfd0",
    "root": "m_46b77525",
    "label": "m_8fdc1311",
    "required": "m_78a94662",
    "error": "m_8f816625",
    "description": "m_fe47ce59"
};
;
 //# sourceMappingURL=Input.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResolvedStylesApi",
    ()=>useResolvedStylesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function useResolvedStylesApi({ classNames, styles, props, stylesCtx }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    return {
        resolvedClassNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveClassNames"])({
            theme,
            classNames,
            props,
            stylesCtx: stylesCtx || void 0
        }),
        resolvedStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles,
            props,
            stylesCtx: stylesCtx || void 0
        })
    };
}
;
 //# sourceMappingURL=use-resolved-styles-api.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputClearButton/InputClearButton.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputClearButton",
    ()=>InputClearButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const InputClearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputClearButton", null, _props);
    const { size, variant, vars, classNames, styles, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInputContext"])();
    const { resolvedClassNames, resolvedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResolvedStylesApi"])({
        classNames,
        styles,
        props
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseButton"], {
        variant: variant || "transparent",
        ref,
        size: size || ctx?.size || "sm",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        __staticSelector: "InputClearButton",
        style: {
            pointerEvents: "all",
            background: "var(--input-bg)",
            ...others.style
        },
        ...others
    });
});
InputClearButton.displayName = "@mantine/core/InputClearButton";
;
 //# sourceMappingURL=InputClearButton.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputClearSection/InputClearSection.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputClearSection",
    ()=>InputClearSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const clearSectionOffset = {
    xs: 7,
    sm: 8,
    md: 10,
    lg: 12,
    xl: 15
};
function InputClearSection({ __clearable, __clearSection, rightSection, __defaultRightSection, size = "sm" }) {
    const clearSection = __clearable && __clearSection;
    if (clearSection && (rightSection || __defaultRightSection)) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            "data-combined-clear-section": true,
            style: {
                display: "flex",
                gap: 2,
                alignItems: "center",
                paddingInlineEnd: clearSectionOffset[size]
            },
            children: [
                clearSection,
                rightSection || __defaultRightSection
            ]
        });
    }
    return rightSection === null ? null : rightSection || clearSection || __defaultRightSection;
}
;
 //# sourceMappingURL=InputClearSection.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputWrapperProvider",
    ()=>InputWrapperProvider,
    "useInputWrapperContext",
    ()=>useInputWrapperContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const [InputWrapperProvider, useInputWrapperContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOptionalContext"])({
    offsetBottom: false,
    offsetTop: false,
    describedBy: void 0,
    getStyles: null,
    inputId: void 0,
    labelId: void 0
});
;
 //# sourceMappingURL=InputWrapper.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputDescription",
    ()=>InputDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { size })=>({
        description: {
            "--input-description-size": size === void 0 ? void 0 : `calc(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size)} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(2)})`
        }
    }));
const InputDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputDescription", null, _props);
    const { classNames, className, style, styles, unstyled, vars, size, __staticSelector, __inheritStyles = true, attributes, variant, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputDescription", null, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const _getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "description",
        vars,
        varsResolver
    });
    const getStyles = __inheritStyles && ctx?.getStyles || _getStyles;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "p",
        ref,
        variant,
        size,
        ...getStyles("description", ctx?.getStyles ? {
            className,
            style
        } : void 0),
        ...others
    });
});
InputDescription.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
InputDescription.displayName = "@mantine/core/InputDescription";
;
 //# sourceMappingURL=InputDescription.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputError",
    ()=>InputError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { size })=>({
        error: {
            "--input-error-size": size === void 0 ? void 0 : `calc(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size)} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(2)})`
        }
    }));
const InputError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputError", null, _props);
    const { classNames, className, style, styles, unstyled, vars, size, attributes, __staticSelector, __inheritStyles = true, variant, ...others } = props;
    const _getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "error",
        vars,
        varsResolver
    });
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const getStyles = __inheritStyles && ctx?.getStyles || _getStyles;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "p",
        ref,
        variant,
        size,
        ...getStyles("error", ctx?.getStyles ? {
            className,
            style
        } : void 0),
        ...others
    });
});
InputError.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
InputError.displayName = "@mantine/core/InputError";
;
 //# sourceMappingURL=InputError.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputLabel",
    ()=>InputLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    labelElement: "label"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { size })=>({
        label: {
            "--input-label-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--input-asterisk-color": void 0
        }
    }));
const InputLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputLabel", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, labelElement, size, required, htmlFor, onMouseDown, children, __staticSelector, variant, mod, attributes, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputLabel", defaultProps, props);
    const _getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "label",
        vars,
        varsResolver
    });
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const getStyles = ctx?.getStyles || _getStyles;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("label", ctx?.getStyles ? {
            className,
            style
        } : void 0),
        component: labelElement,
        variant,
        size,
        ref,
        htmlFor: labelElement === "label" ? htmlFor : void 0,
        mod: [
            {
                required
            },
            mod
        ],
        onMouseDown: (event)=>{
            onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) {
                event.preventDefault();
            }
        },
        ...others,
        children: [
            children,
            required && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                ...getStyles("required"),
                "aria-hidden": true,
                children: " *"
            })
        ]
    });
});
InputLabel.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
InputLabel.displayName = "@mantine/core/InputLabel";
;
 //# sourceMappingURL=InputLabel.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputPlaceholder",
    ()=>InputPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const InputPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputPlaceholder", null, _props);
    const { classNames, className, style, styles, unstyled, vars, __staticSelector, variant, error, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputPlaceholder",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "placeholder"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("placeholder"),
        mod: [
            {
                error: !!error
            },
            mod
        ],
        component: "span",
        variant,
        ref,
        ...others
    });
});
InputPlaceholder.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";
;
 //# sourceMappingURL=InputPlaceholder.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInputOffsets",
    ()=>getInputOffsets
]);
'use client';
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
    const inputIndex = inputWrapperOrder.findIndex((part)=>part === "input");
    const aboveInput = inputWrapperOrder.slice(0, inputIndex);
    const belowInput = inputWrapperOrder.slice(inputIndex + 1);
    const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
    const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
    return {
        offsetBottom,
        offsetTop
    };
}
;
 //# sourceMappingURL=get-input-offsets.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputWrapper",
    ()=>InputWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$get$2d$input$2d$offsets$2f$get$2d$input$2d$offsets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    labelElement: "label",
    inputContainer: (children)=>children,
    inputWrapperOrder: [
        "label",
        "description",
        "input",
        "error"
    ]
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { size })=>({
        label: {
            "--input-label-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--input-asterisk-color": void 0
        },
        error: {
            "--input-error-size": size === void 0 ? void 0 : `calc(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size)} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(2)})`
        },
        description: {
            "--input-description-size": size === void 0 ? void 0 : `calc(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size)} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(2)})`
        }
    }));
const InputWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("InputWrapper", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, size, variant, __staticSelector, inputContainer, inputWrapperOrder, label, error, description, labelProps, descriptionProps, errorProps, labelElement, children, withAsterisk, id, required, __stylesApiProps, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props: __stylesApiProps || props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    const sharedProps = {
        size,
        variant,
        __staticSelector
    };
    const idBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(id);
    const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
    const errorId = errorProps?.id || `${idBase}-error`;
    const descriptionId = descriptionProps?.id || `${idBase}-description`;
    const inputId = idBase;
    const hasError = !!error && typeof error !== "boolean";
    const hasDescription = !!description;
    const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
    const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
    const labelId = labelProps?.id || `${idBase}-label`;
    const _label = label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputLabel"], {
        labelElement,
        id: labelId,
        htmlFor: inputId,
        required: isRequired,
        ...sharedProps,
        ...labelProps,
        children: label
    }, "label");
    const _description = hasDescription && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputDescription"], {
        ...descriptionProps,
        ...sharedProps,
        size: descriptionProps?.size || sharedProps.size,
        id: descriptionProps?.id || descriptionId,
        children: description
    }, "description");
    const _input = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: inputContainer(children)
    }, "input");
    const _error = hasError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputError"], {
        ...errorProps,
        ...sharedProps,
        size: errorProps?.size || sharedProps.size,
        key: "error",
        id: errorProps?.id || errorId
    }, error);
    const content = inputWrapperOrder.map((part)=>{
        switch(part){
            case "label":
                return _label;
            case "input":
                return _input;
            case "description":
                return _description;
            case "error":
                return _error;
            default:
                return null;
        }
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputWrapperProvider"], {
        value: {
            getStyles,
            describedBy,
            inputId,
            labelId,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$get$2d$input$2d$offsets$2f$get$2d$input$2d$offsets$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInputOffsets"])(inputWrapperOrder, {
                hasDescription,
                hasError
            })
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            ref,
            variant,
            size,
            mod: [
                {
                    error: !!error
                },
                mod
            ],
            ...getStyles("root"),
            ...others,
            children: content
        })
    });
});
InputWrapper.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
InputWrapper.displayName = "@mantine/core/InputWrapper";
;
 //# sourceMappingURL=InputWrapper.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputClearButton$2f$InputClearButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputClearButton/InputClearButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputClearSection$2f$InputClearSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputClearSection/InputClearSection.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputPlaceholder$2f$InputPlaceholder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$InputWrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: true,
    withErrorStyles: true,
    size: "sm"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, props, ctx)=>({
        wrapper: {
            "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
            "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
            "--input-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(props.size, "input-height"),
            "--input-fz": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(props.size),
            "--input-radius": props.radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(props.radius),
            "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(props.leftSectionWidth) : void 0,
            "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(props.rightSectionWidth) : void 0,
            "--input-padding-y": props.multiline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(props.size, "input-padding-y") : void 0,
            "--input-left-section-pointer-events": props.leftSectionPointerEvents,
            "--input-right-section-pointer-events": props.rightSectionPointerEvents
        }
    }));
const Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Input", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, required, __staticSelector, __stylesApiProps, size, wrapperProps, error, disabled, leftSection, leftSectionProps, leftSectionWidth, rightSection, rightSectionProps, rightSectionWidth, rightSectionPointerEvents, leftSectionPointerEvents, variant, vars, pointer, multiline, radius, id, withAria, withErrorStyles, mod, inputSize, attributes, __clearSection, __clearable, __defaultRightSection, ...others } = props;
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractStyleProps"])(others);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const stylesCtx = {
        offsetBottom: ctx?.offsetBottom,
        offsetTop: ctx?.offsetTop
    };
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "Input",
            __staticSelector
        ],
        props: __stylesApiProps || props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        stylesCtx,
        rootSelector: "wrapper",
        vars,
        varsResolver
    });
    const ariaAttributes = withAria ? {
        required,
        disabled,
        "aria-invalid": !!error,
        "aria-describedby": ctx?.describedBy,
        id: ctx?.inputId || id
    } : {};
    const _rightSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputClearSection$2f$InputClearSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputClearSection"])({
        __clearable,
        __clearSection,
        rightSection,
        __defaultRightSection,
        size
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputContext"], {
        value: {
            size: size || "sm"
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("wrapper"),
            ...styleProps,
            ...wrapperProps,
            mod: [
                {
                    error: !!error && withErrorStyles,
                    pointer,
                    disabled,
                    multiline,
                    "data-with-right-section": !!_rightSection,
                    "data-with-left-section": !!leftSection
                },
                mod
            ],
            variant,
            size,
            children: [
                leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ...leftSectionProps,
                    "data-position": "left",
                    ...getStyles("section", {
                        className: leftSectionProps?.className,
                        style: leftSectionProps?.style
                    }),
                    children: leftSection
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                    component: "input",
                    ...rest,
                    ...ariaAttributes,
                    ref,
                    required,
                    mod: {
                        disabled,
                        error: !!error && withErrorStyles
                    },
                    variant,
                    __size: inputSize,
                    ...getStyles("input")
                }),
                _rightSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ...rightSectionProps,
                    "data-position": "right",
                    ...getStyles("section", {
                        className: rightSectionProps?.className,
                        style: rightSectionProps?.style
                    }),
                    children: _rightSection
                })
            ]
        })
    });
});
Input.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Input.Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$InputWrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputWrapper"];
Input.Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputLabel"];
Input.Error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputError"];
Input.Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputDescription"];
Input.Placeholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputPlaceholder$2f$InputPlaceholder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputPlaceholder"];
Input.ClearButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputClearButton$2f$InputClearButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputClearButton"];
Input.displayName = "@mantine/core/Input";
;
 //# sourceMappingURL=Input.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findElementAncestor",
    ()=>findElementAncestor
]);
'use client';
function findElementAncestor(element, selector) {
    let _element = element;
    while((_element = _element.parentElement) && !_element.matches(selector)){}
    return _element;
}
;
 //# sourceMappingURL=find-element-ancestor.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-context-item-index/get-context-item-index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContextItemIndex",
    ()=>getContextItemIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs [app-ssr] (ecmascript)");
'use client';
;
function getContextItemIndex(elementSelector, parentSelector, node) {
    if (!node) {
        return null;
    }
    return Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findElementAncestor"])(node, parentSelector)?.querySelectorAll(elementSelector) || []).findIndex((element)=>element === node);
}
;
 //# sourceMappingURL=get-context-item-index.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/use-delayed-hover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDelayedHover",
    ()=>useDelayedHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useDelayedHover({ open, close, openDelay, closeDelay }) {
    const openTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const closeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const clearTimeouts = ()=>{
        window.clearTimeout(openTimeout.current);
        window.clearTimeout(closeTimeout.current);
    };
    const openDropdown = ()=>{
        clearTimeouts();
        if (openDelay === 0 || openDelay === void 0) {
            open();
        } else {
            openTimeout.current = window.setTimeout(open, openDelay);
        }
    };
    const closeDropdown = ()=>{
        clearTimeouts();
        if (closeDelay === 0 || closeDelay === void 0) {
            close();
        } else {
            closeTimeout.current = window.setTimeout(close, closeDelay);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>clearTimeouts, []);
    return {
        openDropdown,
        closeDropdown
    };
}
;
 //# sourceMappingURL=use-delayed-hover.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFloatingPosition",
    ()=>getFloatingPosition
]);
'use client';
function getFloatingPosition(dir, position) {
    if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
        const [side, placement] = position.split("-");
        const flippedPosition = side === "right" ? "left" : "right";
        return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
    }
    return position;
}
;
 //# sourceMappingURL=get-floating-position.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Overlay/Overlay.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_9814e45f"
};
;
 //# sourceMappingURL=Overlay.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Overlay/Overlay.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal")
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { gradient, color, backgroundOpacity, blur, radius, zIndex })=>({
        root: {
            "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgba"])(color || "#000", backgroundOpacity ?? 0.6) || void 0,
            "--overlay-filter": blur ? `blur(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(blur)})` : void 0,
            "--overlay-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--overlay-z-index": zIndex?.toString()
        }
    }));
const Overlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Overlay", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, fixed, center, children, radius, zIndex, gradient, blur, color, backgroundOpacity, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Overlay",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...getStyles("root"),
        mod: [
            {
                center,
                fixed
            },
            mod
        ],
        ...others,
        children
    });
});
Overlay.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Overlay.displayName = "@mantine/core/Overlay";
;
 //# sourceMappingURL=Overlay.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverContextProvider",
    ()=>PopoverContextProvider,
    "usePopoverContext",
    ()=>usePopoverContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const [PopoverContextProvider, usePopoverContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSafeContext"])("Popover component was not found in the tree");
;
 //# sourceMappingURL=Popover.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "dropdown": "m_38a85659",
    "arrow": "m_a31dc6c1",
    "overlay": "m_3d7bc908"
};
;
 //# sourceMappingURL=Popover.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/close-on-escape/close-on-escape.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeOnEscape",
    ()=>closeOnEscape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-ssr] (ecmascript)");
'use client';
;
function closeOnEscape(callback, options = {
    active: true
}) {
    if (typeof callback !== "function" || !options.active) {
        return options.onKeyDown || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    }
    return (event)=>{
        if (event.key === "Escape") {
            callback(event);
            options.onTrigger?.();
        }
    };
}
;
 //# sourceMappingURL=close-on-escape.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArrowPositionStyles",
    ()=>getArrowPositionStyles
]);
'use client';
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
    if (placement === "center" || arrowPosition === "center") {
        return {
            top: arrowY
        };
    }
    if (placement === "end") {
        return {
            bottom: arrowOffset
        };
    }
    if (placement === "start") {
        return {
            top: arrowOffset
        };
    }
    return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
    if (placement === "center" || arrowPosition === "center") {
        return {
            left: arrowX
        };
    }
    if (placement === "end") {
        return {
            [dir === "ltr" ? "right" : "left"]: arrowOffset
        };
    }
    if (placement === "start") {
        return {
            [dir === "ltr" ? "left" : "right"]: arrowOffset
        };
    }
    return {};
}
const radiusByFloatingSide = {
    bottom: "borderTopLeftRadius",
    left: "borderTopRightRadius",
    right: "borderBottomLeftRadius",
    top: "borderBottomRightRadius"
};
function getArrowPositionStyles({ position, arrowSize, arrowOffset, arrowRadius, arrowPosition, arrowX, arrowY, dir }) {
    const [side, placement = "center"] = position.split("-");
    const baseStyles = {
        width: arrowSize,
        height: arrowSize,
        transform: "rotate(45deg)",
        position: "absolute",
        [radiusByFloatingSide[side]]: arrowRadius
    };
    const arrowPlacement = -arrowSize / 2;
    if (side === "left") {
        return {
            ...baseStyles,
            ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
            right: arrowPlacement,
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        };
    }
    if (side === "right") {
        return {
            ...baseStyles,
            ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
            left: arrowPlacement,
            borderRightColor: "transparent",
            borderTopColor: "transparent",
            clipPath: "polygon(0 100%, 0 0, 100% 100%)"
        };
    }
    if (side === "top") {
        return {
            ...baseStyles,
            ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
            bottom: arrowPlacement,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
        };
    }
    if (side === "bottom") {
        return {
            ...baseStyles,
            ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
            top: arrowPlacement,
            borderBottomColor: "transparent",
            borderRightColor: "transparent",
            clipPath: "polygon(0 100%, 0 0, 100% 0)"
        };
    }
    return {};
}
;
 //# sourceMappingURL=get-arrow-position-styles.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingArrow",
    ()=>FloatingArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$get$2d$arrow$2d$position$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const FloatingArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ position, arrowSize, arrowOffset, arrowRadius, arrowPosition, visible, arrowX, arrowY, style, ...others }, ref)=>{
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    if (!visible) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...others,
        ref,
        style: {
            ...style,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$get$2d$arrow$2d$position$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowPositionStyles"])({
                position,
                arrowSize,
                arrowOffset,
                arrowRadius,
                arrowPosition,
                dir,
                arrowX,
                arrowY
            })
        }
    });
});
FloatingArrow.displayName = "@mantine/core/FloatingArrow";
;
 //# sourceMappingURL=FloatingArrow.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function isElement(value) {
    if (Array.isArray(value) || value === null) {
        return false;
    }
    if (typeof value === "object") {
        if (value.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"]) {
            return false;
        }
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=is-element.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSingleElementChild",
    ()=>getSingleElementChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function getSingleElementChild(children) {
    const _children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    if (_children.length !== 1 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(_children[0])) {
        return null;
    }
    return _children[0];
}
;
 //# sourceMappingURL=get-single-element-child.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_515a97f8"
};
;
 //# sourceMappingURL=VisuallyHidden.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisuallyHidden",
    ()=>VisuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const VisuallyHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("VisuallyHidden", null, _props);
    const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "VisuallyHidden",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        component: "span",
        ref,
        ...getStyles("root"),
        ...others
    });
});
VisuallyHidden.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
VisuallyHidden.displayName = "@mantine/core/VisuallyHidden";
;
 //# sourceMappingURL=VisuallyHidden.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusTrap",
    ()=>FocusTrap,
    "FocusTrapInitialFocus",
    ()=>FocusTrapInitialFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$use$2d$focus$2d$trap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function FocusTrap({ children, active = true, refProp = "ref", innerRef }) {
    const focusTrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$use$2d$focus$2d$trap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusTrap"])(active);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(focusTrapRef, innerRef);
    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSingleElementChild"])(children);
    if (!child) {
        return children;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        [refProp]: ref
    });
}
function FocusTrapInitialFocus(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        tabIndex: -1,
        "data-autofocus": true,
        ...props
    });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";
FocusTrapInitialFocus.displayName = "@mantine/core/FocusTrapInitialFocus";
FocusTrap.InitialFocus = FocusTrapInitialFocus;
;
 //# sourceMappingURL=FocusTrap.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverDropdown",
    ()=>PopoverDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$return$2f$use$2d$focus$2d$return$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$close$2d$on$2d$escape$2f$close$2d$on$2d$escape$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/close-on-escape/close-on-escape.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FocusTrap$2f$FocusTrap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PopoverDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("PopoverDropdown", null, _props);
    const { className, style, vars, children, onKeyDownCapture, variant, classNames, styles, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopoverContext"])();
    const returnFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$return$2f$use$2d$focus$2d$return$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusReturn"])({
        opened: ctx.opened,
        shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
        "aria-labelledby": ctx.getTargetId(),
        id: ctx.getDropdownId(),
        role: "dialog",
        tabIndex: -1
    } : {};
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, ctx.floating);
    if (ctx.disabled) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
        ...ctx.portalProps,
        withinPortal: ctx.withinPortal,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
            mounted: ctx.opened,
            ...ctx.transitionProps,
            transition: ctx.transitionProps?.transition || "fade",
            duration: ctx.transitionProps?.duration ?? 150,
            keepMounted: ctx.keepMounted,
            exitDuration: typeof ctx.transitionProps?.exitDuration === "number" ? ctx.transitionProps.exitDuration : ctx.transitionProps?.duration,
            children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FocusTrap$2f$FocusTrap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusTrap"], {
                    active: ctx.trapFocus && ctx.opened,
                    innerRef: mergedRef,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        ...accessibleProps,
                        ...others,
                        variant,
                        onKeyDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$close$2d$on$2d$escape$2f$close$2d$on$2d$escape$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeOnEscape"])(()=>{
                            ctx.onClose?.();
                            ctx.onDismiss?.();
                        }, {
                            active: ctx.closeOnEscape,
                            onTrigger: returnFocus,
                            onKeyDown: onKeyDownCapture
                        }),
                        "data-position": ctx.placement,
                        "data-fixed": ctx.floatingStrategy === "fixed" || void 0,
                        ...ctx.getStyles("dropdown", {
                            className,
                            props,
                            classNames,
                            styles,
                            style: [
                                {
                                    ...transitionStyles,
                                    zIndex: ctx.zIndex,
                                    top: ctx.y ?? 0,
                                    left: ctx.x ?? 0,
                                    width: ctx.width === "target" ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(ctx.width),
                                    ...ctx.referenceHidden ? {
                                        display: "none"
                                    } : null
                                },
                                ctx.resolvedStyles.dropdown,
                                styles?.dropdown,
                                style
                            ]
                        }),
                        children: [
                            children,
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingArrow"], {
                                ref: ctx.arrowRef,
                                arrowX: ctx.arrowX,
                                arrowY: ctx.arrowY,
                                visible: ctx.withArrow,
                                position: ctx.placement,
                                arrowSize: ctx.arrowSize,
                                arrowRadius: ctx.arrowRadius,
                                arrowOffset: ctx.arrowOffset,
                                arrowPosition: ctx.arrowPosition,
                                ...ctx.getStyles("arrow", {
                                    props,
                                    classNames,
                                    styles
                                })
                            })
                        ]
                    })
                })
        })
    });
});
PopoverDropdown.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";
;
 //# sourceMappingURL=PopoverDropdown.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRefProp",
    ()=>getRefProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function getRefProp(element) {
    const version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].version;
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].version !== "string") {
        return element?.ref;
    }
    if (version.startsWith("18.")) {
        return element?.ref;
    }
    return element?.props?.ref;
}
;
 //# sourceMappingURL=get-ref-prop.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/PopoverTarget/PopoverTarget.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverTarget",
    ()=>PopoverTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    refProp: "ref",
    popupType: "dialog"
};
const PopoverTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { children, refProp, popupType, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("PopoverTarget", defaultProps, props);
    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSingleElementChild"])(children);
    if (!child) {
        throw new Error("Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
    }
    const forwardedProps = others;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopoverContext"])();
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(ctx.reference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRefProp"])(child), ref);
    const accessibleProps = ctx.withRoles ? {
        "aria-haspopup": popupType,
        "aria-expanded": ctx.opened,
        "aria-controls": ctx.opened ? ctx.getDropdownId() : void 0,
        id: ctx.getTargetId()
    } : {};
    const childProps = child.props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        ...forwardedProps,
        ...accessibleProps,
        ...ctx.targetProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ctx.targetProps.className, forwardedProps.className, childProps.className),
        [refProp]: targetRef,
        ...!ctx.controlled ? {
            onClick: ()=>{
                ctx.onToggle();
                childProps.onClick?.();
            }
        } : null
    });
});
PopoverTarget.displayName = "@mantine/core/PopoverTarget";
;
 //# sourceMappingURL=PopoverTarget.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/use-popover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePopover",
    ()=>usePopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react@0.27.17+67f6792bdf102c28/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$5$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react-dom@2.1.7+67f6792bdf102c28/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function getDefaultMiddlewares(middlewares) {
    if (middlewares === void 0) {
        return {
            shift: true,
            flip: true
        };
    }
    const result = {
        ...middlewares
    };
    if (middlewares.shift === void 0) {
        result.shift = true;
    }
    if (middlewares.flip === void 0) {
        result.flip = true;
    }
    return result;
}
function getPopoverMiddlewares(options, getFloating, env) {
    const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
    const middlewares = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options.offset),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])()
    ];
    if (options.dropdownVisible && env !== "test" && options.preventPositionChangeWhenVisible) {
        middlewaresOptions.flip = false;
    }
    if (middlewaresOptions.flip) {
        middlewares.push(typeof middlewaresOptions.flip === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(middlewaresOptions.flip));
    }
    if (middlewaresOptions.shift) {
        middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(typeof middlewaresOptions.shift === "boolean" ? {
            limiter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(),
            padding: 5
        } : {
            limiter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(),
            padding: 5,
            ...middlewaresOptions.shift
        }));
    }
    if (middlewaresOptions.inline) {
        middlewares.push(typeof middlewaresOptions.inline === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(middlewaresOptions.inline));
    }
    middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
        element: options.arrowRef,
        padding: options.arrowOffset
    }));
    if (middlewaresOptions.size || options.width === "target") {
        middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
            ...typeof middlewaresOptions.size === "boolean" ? {} : middlewaresOptions.size,
            apply ({ rects, availableWidth, availableHeight, ...rest }) {
                const floating = getFloating();
                const styles = floating.refs.floating.current?.style ?? {};
                if (middlewaresOptions.size) {
                    if (typeof middlewaresOptions.size === "object" && !!middlewaresOptions.size.apply) {
                        middlewaresOptions.size.apply({
                            rects,
                            availableWidth,
                            availableHeight,
                            ...rest
                        });
                    } else {
                        Object.assign(styles, {
                            maxWidth: `${availableWidth}px`,
                            maxHeight: `${availableHeight}px`
                        });
                    }
                }
                if (options.width === "target") {
                    Object.assign(styles, {
                        width: `${rects.reference.width}px`
                    });
                }
            }
        }));
    }
    return middlewares;
}
function usePopover(options) {
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineEnv"])();
    const [_opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value: options.opened,
        defaultValue: options.defaultOpened,
        finalValue: false,
        onChange: options.onChange
    });
    const previouslyOpened = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(_opened);
    const onClose = ()=>{
        if (_opened && !options.disabled) {
            setOpened(false);
        }
    };
    const onToggle = ()=>{
        if (!options.disabled) {
            setOpened(!_opened);
        }
    };
    const floating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        strategy: options.strategy,
        placement: options.preventPositionChangeWhenVisible ? options.positionRef.current : options.position,
        middleware: getPopoverMiddlewares(options, ()=>floating, env),
        whileElementsMounted: !options.keepMounted ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$5$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"] : void 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!floating.refs.reference.current || !floating.refs.floating.current) {
            return;
        }
        if (_opened) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$5$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"])(floating.refs.reference.current, floating.refs.floating.current, floating.update);
        }
    }, [
        _opened,
        floating.update
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDidUpdate"])(()=>{
        options.onPositionChange?.(floating.placement);
        options.positionRef.current = floating.placement;
    }, [
        floating.placement,
        options.preventPositionChangeWhenVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDidUpdate"])(()=>{
        if (_opened !== previouslyOpened.current) {
            if (!_opened) {
                options.onClose?.();
            } else {
                options.onOpen?.();
            }
        }
        previouslyOpened.current = _opened;
    }, [
        _opened,
        options.onClose,
        options.onOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])(()=>{
        let timeout = -1;
        if (_opened) {
            timeout = window.setTimeout(()=>options.setDropdownVisible(true), 4);
        }
        return ()=>{
            window.clearTimeout(timeout);
        };
    }, [
        _opened,
        options.position
    ]);
    return {
        floating,
        controlled: typeof options.opened === "boolean",
        opened: _opened,
        onClose,
        onToggle
    };
}
;
 //# sourceMappingURL=use-popover.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$click$2d$outside$2f$use$2d$click$2d$outside$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$get$2d$floating$2d$position$2f$get$2d$floating$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$PopoverDropdown$2f$PopoverDropdown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$PopoverTarget$2f$PopoverTarget$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/PopoverTarget/PopoverTarget.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$use$2d$popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/use-popover.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    position: "bottom",
    offset: 8,
    positionDependencies: [],
    transitionProps: {
        transition: "fade",
        duration: 150
    },
    middlewares: {
        flip: true,
        shift: true,
        inline: false
    },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    closeOnClickOutside: true,
    withinPortal: true,
    closeOnEscape: true,
    trapFocus: false,
    withRoles: true,
    returnFocus: false,
    withOverlay: false,
    hideDetached: true,
    clickOutsideEvents: [
        "mousedown",
        "touchstart"
    ],
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("popover"),
    __staticSelector: "Popover",
    width: "max-content"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { radius, shadow })=>({
        dropdown: {
            "--popover-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--popover-shadow": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShadow"])(shadow)
        }
    }));
function Popover(_props) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Popover", defaultProps, _props);
    const { children, position, offset, onPositionChange, // Scheduled for removal in 9.0
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    positionDependencies, opened, transitionProps, onExitTransitionEnd, onEnterTransitionEnd, width, middlewares, withArrow, arrowSize, arrowOffset, arrowRadius, arrowPosition, unstyled, classNames, styles, closeOnClickOutside, withinPortal, portalProps, closeOnEscape, clickOutsideEvents, trapFocus, onClose, onDismiss, onOpen, onChange, zIndex, radius, shadow, id, defaultOpened, __staticSelector, withRoles, disabled, returnFocus, variant, keepMounted, vars, floatingStrategy, withOverlay, overlayProps, hideDetached, attributes, preventPositionChangeWhenVisible, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: __staticSelector,
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "dropdown",
        vars,
        varsResolver
    });
    const { resolvedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResolvedStylesApi"])({
        classNames,
        styles,
        props
    });
    const [dropdownVisible, setDropdownVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(opened ?? defaultOpened ?? false);
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(position);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [targetNode, setTargetNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropdownNode, setDropdownNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineEnv"])();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(id);
    const popover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$use$2d$popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopover"])({
        middlewares,
        width,
        position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$get$2d$floating$2d$position$2f$get$2d$floating$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingPosition"])(dir, position),
        offset: typeof offset === "number" ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
        arrowRef,
        arrowOffset,
        onPositionChange,
        positionDependencies,
        opened,
        defaultOpened,
        onChange,
        onOpen,
        onClose,
        onDismiss,
        strategy: floatingStrategy,
        dropdownVisible,
        setDropdownVisible,
        positionRef,
        disabled,
        preventPositionChangeWhenVisible,
        keepMounted
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$click$2d$outside$2f$use$2d$click$2d$outside$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickOutside"])(()=>{
        if (closeOnClickOutside) {
            popover.onClose();
            onDismiss?.();
        }
    }, clickOutsideEvents, [
        targetNode,
        dropdownNode
    ]);
    const reference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        setTargetNode(node);
        popover.floating.refs.setReference(node);
    }, [
        popover.floating.refs.setReference
    ]);
    const floating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        setDropdownNode(node);
        popover.floating.refs.setFloating(node);
    }, [
        popover.floating.refs.setFloating
    ]);
    const onExited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        transitionProps?.onExited?.();
        onExitTransitionEnd?.();
        setDropdownVisible(false);
        if (!preventPositionChangeWhenVisible) {
            positionRef.current = position;
        }
    }, [
        transitionProps?.onExited,
        onExitTransitionEnd,
        preventPositionChangeWhenVisible,
        position
    ]);
    const onEntered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        transitionProps?.onEntered?.();
        onEnterTransitionEnd?.();
    }, [
        transitionProps?.onEntered,
        onEnterTransitionEnd
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContextProvider"], {
        value: {
            returnFocus,
            disabled,
            controlled: popover.controlled,
            reference,
            floating,
            x: popover.floating.x,
            y: popover.floating.y,
            arrowX: popover.floating?.middlewareData?.arrow?.x,
            arrowY: popover.floating?.middlewareData?.arrow?.y,
            opened: popover.opened,
            arrowRef,
            transitionProps: {
                ...transitionProps,
                onExited,
                onEntered
            },
            width,
            withArrow,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            placement: popover.floating.placement,
            trapFocus,
            withinPortal,
            portalProps,
            zIndex,
            radius,
            shadow,
            closeOnEscape,
            onDismiss,
            onClose: popover.onClose,
            onToggle: popover.onToggle,
            getTargetId: ()=>`${uid}-target`,
            getDropdownId: ()=>`${uid}-dropdown`,
            withRoles,
            targetProps: others,
            __staticSelector,
            classNames,
            styles,
            unstyled,
            variant,
            keepMounted,
            getStyles,
            resolvedStyles,
            floatingStrategy,
            referenceHidden: hideDetached && env !== "test" ? popover.floating.middlewareData.hide?.referenceHidden : false
        },
        children: [
            children,
            withOverlay && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                transition: "fade",
                mounted: popover.opened,
                duration: transitionProps?.duration || 250,
                exitDuration: transitionProps?.exitDuration || 250,
                children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
                        withinPortal,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
                            ...overlayProps,
                            ...getStyles("overlay", {
                                className: overlayProps?.className,
                                style: [
                                    transitionStyles,
                                    overlayProps?.style
                                ]
                            })
                        })
                    })
            })
        ]
    });
}
Popover.Target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$PopoverTarget$2f$PopoverTarget$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTarget"];
Popover.Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$PopoverDropdown$2f$PopoverDropdown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverDropdown"];
Popover.displayName = "@mantine/core/Popover";
Popover.extend = (input)=>input;
;
 //# sourceMappingURL=Popover.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuContextProvider",
    ()=>MenuContextProvider,
    "useMenuContext",
    ()=>useMenuContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const [MenuContextProvider, useMenuContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSafeContext"])("Menu component was not found in the tree");
;
 //# sourceMappingURL=Menu.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "dropdown": "m_dc9b7c9f",
    "label": "m_9bfac126",
    "divider": "m_efdf90cb",
    "item": "m_99ac2aa1",
    "itemLabel": "m_5476e0d3",
    "itemSection": "m_8b75e504",
    "chevron": "m_b85b0bed"
};
;
 //# sourceMappingURL=Menu.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuDivider/MenuDivider.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuDivider",
    ()=>MenuDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuDivider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuDivider", null, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...ctx.getStyles("divider", {
            className,
            style,
            styles,
            classNames
        }),
        ...others
    });
});
MenuDivider.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
MenuDivider.displayName = "@mantine/core/MenuDivider";
;
 //# sourceMappingURL=MenuDivider.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventHandler",
    ()=>createEventHandler
]);
'use client';
function createEventHandler(parentEventHandler, eventHandler) {
    return (event)=>{
        parentEventHandler?.(event);
        eventHandler?.(event);
    };
}
;
 //# sourceMappingURL=create-event-handler.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuDropdown/MenuDropdown.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuDropdown",
    ()=>MenuDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, onMouseEnter, onMouseLeave, onKeyDown, children, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuDropdown", null, props);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(onKeyDown, (event)=>{
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            wrapperRef.current?.querySelectorAll("[data-menu-item]:not(:disabled)")[0]?.focus();
        }
    });
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(onMouseEnter, ()=>(ctx.trigger === "hover" || ctx.trigger === "click-hover") && ctx.openDropdown());
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(onMouseLeave, ()=>(ctx.trigger === "hover" || ctx.trigger === "click-hover") && ctx.closeDropdown());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"].Dropdown, {
        ...others,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        role: "menu",
        "aria-orientation": "vertical",
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, wrapperRef),
        ...ctx.getStyles("dropdown", {
            className,
            style,
            styles,
            classNames,
            withStaticClass: false
        }),
        tabIndex: -1,
        "data-menu-dropdown": true,
        onKeyDown: handleKeyDown,
        children: [
            ctx.withInitialFocusPlaceholder && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                tabIndex: -1,
                "data-autofocus": true,
                "data-mantine-stop-propagation": true,
                style: {
                    outline: 0
                }
            }),
            children
        ]
    });
});
MenuDropdown.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
MenuDropdown.displayName = "@mantine/core/MenuDropdown";
;
 //# sourceMappingURL=MenuDropdown.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScopedKeydownHandler",
    ()=>createScopedKeydownHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs [app-ssr] (ecmascript)");
'use client';
;
function getPreviousIndex(current, elements, loop) {
    for(let i = current - 1; i >= 0; i -= 1){
        if (!elements[i].disabled) {
            return i;
        }
    }
    if (loop) {
        for(let i = elements.length - 1; i > -1; i -= 1){
            if (!elements[i].disabled) {
                return i;
            }
        }
    }
    return current;
}
function getNextIndex(current, elements, loop) {
    for(let i = current + 1; i < elements.length; i += 1){
        if (!elements[i].disabled) {
            return i;
        }
    }
    if (loop) {
        for(let i = 0; i < elements.length; i += 1){
            if (!elements[i].disabled) {
                return i;
            }
        }
    }
    return current;
}
function onSameLevel(target, sibling, parentSelector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findElementAncestor"])(target, parentSelector) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findElementAncestor"])(sibling, parentSelector);
}
function createScopedKeydownHandler({ parentSelector, siblingSelector, onKeyDown, loop = true, activateOnFocus = false, dir = "rtl", orientation }) {
    return (event)=>{
        onKeyDown?.(event);
        const elements = Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findElementAncestor"])(event.currentTarget, parentSelector)?.querySelectorAll(siblingSelector) || []).filter((node)=>onSameLevel(event.currentTarget, node, parentSelector));
        const current = elements.findIndex((el)=>event.currentTarget === el);
        const _nextIndex = getNextIndex(current, elements, loop);
        const _previousIndex = getPreviousIndex(current, elements, loop);
        const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
        const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
        switch(event.key){
            case "ArrowRight":
                {
                    if (orientation === "horizontal") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[nextIndex].focus();
                        activateOnFocus && elements[nextIndex].click();
                    }
                    break;
                }
            case "ArrowLeft":
                {
                    if (orientation === "horizontal") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[previousIndex].focus();
                        activateOnFocus && elements[previousIndex].click();
                    }
                    break;
                }
            case "ArrowUp":
                {
                    if (orientation === "vertical") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[_previousIndex].focus();
                        activateOnFocus && elements[_previousIndex].click();
                    }
                    break;
                }
            case "ArrowDown":
                {
                    if (orientation === "vertical") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[_nextIndex].focus();
                        activateOnFocus && elements[_nextIndex].click();
                    }
                    break;
                }
            case "Home":
                {
                    event.stopPropagation();
                    event.preventDefault();
                    !elements[0].disabled && elements[0].focus();
                    break;
                }
            case "End":
                {
                    event.stopPropagation();
                    event.preventDefault();
                    const last = elements.length - 1;
                    !elements[last].disabled && elements[last].focus();
                    break;
                }
        }
    };
}
;
 //# sourceMappingURL=create-scoped-keydown-handler.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubMenuProvider",
    ()=>SubMenuProvider,
    "useSubMenuContext",
    ()=>useSubMenuContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const [SubMenuProvider, useSubMenuContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOptionalContext"])();
;
 //# sourceMappingURL=MenuSub.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuItem/MenuItem.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItem",
    ()=>MenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$scoped$2d$keydown$2d$handler$2f$create$2d$scoped$2d$keydown$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, color, closeMenuOnClick, leftSection, rightSection, children, disabled, "data-disabled": dataDisabled, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuItem", null, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const subCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubMenuContext"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const itemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _others = others;
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_others.onClick, ()=>{
        if (dataDisabled) {
            return;
        }
        if (typeof closeMenuOnClick === "boolean") {
            closeMenuOnClick && ctx.closeDropdownImmediately();
        } else {
            ctx.closeOnItemClick && ctx.closeDropdownImmediately();
        }
    });
    const colors = color ? theme.variantColorResolver({
        color,
        theme,
        variant: "light"
    }) : void 0;
    const parsedThemeColor = color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    }) : null;
    const handleKeydown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_others.onKeyDown, (event)=>{
        if (event.key === "ArrowLeft" && subCtx) {
            subCtx.close();
            subCtx.focusParentItem();
        }
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        onMouseDown: (event)=>event.preventDefault(),
        ...others,
        unstyled: ctx.unstyled,
        tabIndex: ctx.menuItemTabIndex,
        ...ctx.getStyles("item", {
            className,
            style,
            styles,
            classNames
        }),
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(itemRef, ref),
        role: "menuitem",
        disabled,
        "data-menu-item": true,
        "data-disabled": disabled || dataDisabled || void 0,
        "data-mantine-stop-propagation": true,
        onClick: handleClick,
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$scoped$2d$keydown$2d$handler$2f$create$2d$scoped$2d$keydown$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScopedKeydownHandler"])({
            siblingSelector: "[data-menu-item]:not([data-disabled])",
            parentSelector: "[data-menu-dropdown]",
            activateOnFocus: false,
            loop: ctx.loop,
            dir,
            orientation: "vertical",
            onKeyDown: handleKeydown
        }),
        __vars: {
            "--menu-item-color": parsedThemeColor?.isThemeColor && parsedThemeColor?.shade === void 0 ? `var(--mantine-color-${parsedThemeColor.color}-6)` : colors?.color,
            "--menu-item-hover": colors?.hover
        },
        children: [
            leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...ctx.getStyles("itemSection", {
                    styles,
                    classNames
                }),
                "data-position": "left",
                children: leftSection
            }),
            children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...ctx.getStyles("itemLabel", {
                    styles,
                    classNames
                }),
                children
            }),
            rightSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...ctx.getStyles("itemSection", {
                    styles,
                    classNames
                }),
                "data-position": "right",
                children: rightSection
            })
        ]
    });
});
MenuItem.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
MenuItem.displayName = "@mantine/core/MenuItem";
;
 //# sourceMappingURL=MenuItem.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuLabel/MenuLabel.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuLabel",
    ()=>MenuLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuLabel", null, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...ctx.getStyles("label", {
            className,
            style,
            styles,
            classNames
        }),
        ...others
    });
});
MenuLabel.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
MenuLabel.displayName = "@mantine/core/MenuLabel";
;
 //# sourceMappingURL=MenuLabel.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSubDropdown/MenuSubDropdown.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSubDropdown",
    ()=>MenuSubDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuSubDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, onMouseEnter, onMouseLeave, onKeyDown, children, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuSubDropdown", null, props);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const subCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubMenuContext"])();
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(onMouseEnter, subCtx?.open);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(onMouseLeave, subCtx?.close);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"].Dropdown, {
        ...others,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        role: "menu",
        "aria-orientation": "vertical",
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, wrapperRef),
        ...ctx.getStyles("dropdown", {
            className,
            style,
            styles,
            classNames,
            withStaticClass: false
        }),
        tabIndex: -1,
        "data-menu-dropdown": true,
        children
    });
});
MenuSubDropdown.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
MenuSubDropdown.displayName = "@mantine/core/MenuSubDropdown";
;
 //# sourceMappingURL=MenuSubDropdown.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionChevron",
    ()=>AccordionChevron
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function AccordionChevron({ style, size = 16, ...others }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            ...style,
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size),
            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size),
            display: "block"
        },
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
        })
    });
}
AccordionChevron.displayName = "@mantine/core/AccordionChevron";
;
 //# sourceMappingURL=AccordionChevron.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSubItem/MenuSubItem.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSubItem",
    ()=>MenuSubItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$scoped$2d$keydown$2d$handler$2f$create$2d$scoped$2d$keydown$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionChevron$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuSubItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, color, leftSection, rightSection, children, disabled, "data-disabled": dataDisabled, closeMenuOnClick, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuSubItem", null, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const subCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubMenuContext"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const itemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _others = others;
    const colors = color ? theme.variantColorResolver({
        color,
        theme,
        variant: "light"
    }) : void 0;
    const parsedThemeColor = color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    }) : null;
    const handleKeydown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_others.onKeyDown, (event)=>{
        if (event.key === "ArrowRight") {
            subCtx?.open();
            subCtx?.focusFirstItem();
        }
        if (event.key === "ArrowLeft" && subCtx?.parentContext) {
            subCtx.parentContext.close();
            subCtx.parentContext.focusParentItem();
        }
    });
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_others.onClick, ()=>{
        if (!dataDisabled && closeMenuOnClick) {
            ctx.closeDropdownImmediately();
        }
    });
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_others.onMouseEnter, subCtx?.open);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_others.onMouseLeave, subCtx?.close);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        onMouseDown: (event)=>event.preventDefault(),
        ...others,
        unstyled: ctx.unstyled,
        tabIndex: ctx.menuItemTabIndex,
        ...ctx.getStyles("item", {
            className,
            style,
            styles,
            classNames
        }),
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(itemRef, ref),
        role: "menuitem",
        disabled,
        "data-menu-item": true,
        "data-sub-menu-item": true,
        "data-disabled": disabled || dataDisabled || void 0,
        "data-mantine-stop-propagation": true,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$scoped$2d$keydown$2d$handler$2f$create$2d$scoped$2d$keydown$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScopedKeydownHandler"])({
            siblingSelector: "[data-menu-item]:not([data-disabled])",
            parentSelector: "[data-menu-dropdown]",
            activateOnFocus: false,
            loop: ctx.loop,
            dir,
            orientation: "vertical",
            onKeyDown: handleKeydown
        }),
        __vars: {
            "--menu-item-color": parsedThemeColor?.isThemeColor && parsedThemeColor?.shade === void 0 ? `var(--mantine-color-${parsedThemeColor.color}-6)` : colors?.color,
            "--menu-item-hover": colors?.hover
        },
        children: [
            leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...ctx.getStyles("itemSection", {
                    styles,
                    classNames
                }),
                "data-position": "left",
                children: leftSection
            }),
            children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...ctx.getStyles("itemLabel", {
                    styles,
                    classNames
                }),
                children
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...ctx.getStyles("itemSection", {
                    styles,
                    classNames
                }),
                "data-position": "right",
                children: rightSection || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionChevron$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionChevron"], {
                    ...ctx.getStyles("chevron"),
                    size: 14
                })
            })
        ]
    });
});
MenuSubItem.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
MenuSubItem.displayName = "@mantine/core/MenuSubItem";
;
 //# sourceMappingURL=MenuSubItem.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSubTarget/MenuSubTarget.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSubTarget",
    ()=>MenuSubTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MenuSubTarget({ children, refProp }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(children)) {
        throw new Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"].Target, {
        refProp,
        popupType: "menu",
        children
    });
}
MenuSubTarget.displayName = "@mantine/core/MenuSubTarget";
;
 //# sourceMappingURL=MenuSubTarget.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSub",
    ()=>MenuSub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$disclosure$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$use$2d$delayed$2d$hover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/use-delayed-hover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSubDropdown$2f$MenuSubDropdown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSubDropdown/MenuSubDropdown.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSubItem$2f$MenuSubItem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSubItem/MenuSubItem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSubTarget$2f$MenuSubTarget$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSubTarget/MenuSubTarget.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    offset: 0,
    position: "right-start",
    transitionProps: {
        duration: 0
    },
    openDelay: 0,
    middlewares: {
        shift: {
            // Enable crossAxis shift to keep submenu dropdown within viewport bounds when positioned horizontally
            crossAxis: true
        }
    }
};
function MenuSub(_props) {
    const { children, closeDelay, openDelay, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuSub", defaultProps, _props);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [opened, { open, close }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$disclosure$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisclosure"])(false);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubMenuContext"])();
    const { openDropdown, closeDropdown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$use$2d$delayed$2d$hover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDelayedHover"])({
        open,
        close,
        closeDelay,
        openDelay
    });
    const focusFirstItem = ()=>window.setTimeout(()=>{
            document.getElementById(`${id}-dropdown`)?.querySelectorAll("[data-menu-item]:not([data-disabled])")[0]?.focus();
        }, 16);
    const focusParentItem = ()=>window.setTimeout(()=>{
            document.getElementById(`${id}-target`)?.focus();
        }, 16);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubMenuProvider"], {
        value: {
            opened,
            close: closeDropdown,
            open: openDropdown,
            focusFirstItem,
            focusParentItem,
            parentContext: ctx
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
            opened,
            withinPortal: false,
            withArrow: false,
            id,
            ...others,
            children
        })
    });
}
MenuSub.extend = (input)=>input;
MenuSub.displayName = "@mantine/core/MenuSub";
MenuSub.Target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSubTarget$2f$MenuSubTarget$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuSubTarget"];
MenuSub.Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSubDropdown$2f$MenuSubDropdown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuSubDropdown"];
MenuSub.Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSubItem$2f$MenuSubItem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuSubItem"];
;
 //# sourceMappingURL=MenuSub.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuTarget/MenuTarget.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuTarget",
    ()=>MenuTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    refProp: "ref"
};
const MenuTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { children, refProp, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("MenuTarget", defaultProps, props);
    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSingleElementChild"])(children);
    if (!child) {
        throw new Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
    }
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const _childProps = child.props;
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_childProps.onClick, ()=>{
        if (ctx.trigger === "click") {
            ctx.toggleDropdown();
        } else if (ctx.trigger === "click-hover") {
            ctx.setOpenedViaClick(true);
            if (!ctx.opened) {
                ctx.openDropdown();
            }
        }
    });
    const onMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_childProps.onMouseEnter, ()=>(ctx.trigger === "hover" || ctx.trigger === "click-hover") && ctx.openDropdown());
    const onMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventHandler"])(_childProps.onMouseLeave, ()=>{
        if (ctx.trigger === "hover") {
            ctx.closeDropdown();
        } else if (ctx.trigger === "click-hover" && !ctx.openedViaClick) {
            ctx.closeDropdown();
        }
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"].Target, {
        refProp,
        popupType: "menu",
        ref,
        ...others,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            onClick,
            onMouseEnter,
            onMouseLeave,
            "data-expanded": ctx.opened ? true : void 0
        })
    });
});
MenuTarget.displayName = "@mantine/core/MenuTarget";
;
 //# sourceMappingURL=MenuTarget.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$context$2d$item$2d$index$2f$get$2d$context$2d$item$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-context-item-index/get-context-item-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$use$2d$delayed$2d$hover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/use-delayed-hover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Popover/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuDivider$2f$MenuDivider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuDivider/MenuDivider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuDropdown$2f$MenuDropdown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuDropdown/MenuDropdown.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuItem/MenuItem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuLabel$2f$MenuLabel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuLabel/MenuLabel.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuSub/MenuSub.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuTarget$2f$MenuTarget$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/MenuTarget/MenuTarget.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    trapFocus: true,
    closeOnItemClick: true,
    withInitialFocusPlaceholder: true,
    clickOutsideEvents: [
        "mousedown",
        "touchstart",
        "keydown"
    ],
    loop: true,
    trigger: "click",
    openDelay: 0,
    closeDelay: 100,
    menuItemTabIndex: -1
};
function Menu(_props) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Menu", defaultProps, _props);
    const { children, onOpen, onClose, opened, defaultOpened, trapFocus, onChange, closeOnItemClick, loop, closeOnEscape, trigger, openDelay, closeDelay, classNames, styles, unstyled, variant, vars, menuItemTabIndex, keepMounted, withInitialFocusPlaceholder, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Menu",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        classNames,
        styles,
        unstyled,
        attributes
    });
    const [_opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value: opened,
        defaultValue: defaultOpened,
        finalValue: false,
        onChange
    });
    const [openedViaClick, setOpenedViaClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const close = ()=>{
        setOpened(false);
        setOpenedViaClick(false);
        _opened && onClose?.();
    };
    const open = ()=>{
        setOpened(true);
        !_opened && onOpen?.();
    };
    const toggleDropdown = ()=>{
        _opened ? close() : open();
    };
    const { openDropdown, closeDropdown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$use$2d$delayed$2d$hover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDelayedHover"])({
        open,
        close,
        closeDelay,
        openDelay
    });
    const getItemIndex = (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$context$2d$item$2d$index$2f$get$2d$context$2d$item$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContextItemIndex"])("[data-menu-item]", "[data-menu-dropdown]", node);
    const { resolvedClassNames, resolvedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResolvedStylesApi"])({
        classNames,
        styles,
        props
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuContextProvider"], {
        value: {
            getStyles,
            opened: _opened,
            toggleDropdown,
            getItemIndex,
            openedViaClick,
            setOpenedViaClick,
            closeOnItemClick,
            closeDropdown: trigger === "click" ? close : closeDropdown,
            openDropdown: trigger === "click" ? open : openDropdown,
            closeDropdownImmediately: close,
            loop,
            trigger,
            unstyled,
            menuItemTabIndex,
            withInitialFocusPlaceholder
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Popover$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
            returnFocus: true,
            ...others,
            opened: _opened,
            onChange: toggleDropdown,
            defaultOpened,
            trapFocus: keepMounted ? false : trapFocus,
            closeOnEscape,
            __staticSelector: "Menu",
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            variant,
            keepMounted,
            children
        })
    });
}
Menu.extend = (input)=>input;
Menu.withProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWithProps"])(Menu);
Menu.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Menu.displayName = "@mantine/core/Menu";
Menu.Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItem"];
Menu.Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuLabel$2f$MenuLabel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuLabel"];
Menu.Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuDropdown$2f$MenuDropdown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuDropdown"];
Menu.Target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuTarget$2f$MenuTarget$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuTarget"];
Menu.Divider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuDivider$2f$MenuDivider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuDivider"];
Menu.Sub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$MenuSub$2f$MenuSub$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuSub"];
;
 //# sourceMappingURL=Menu.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAutoContrastValue",
    ()=>getAutoContrastValue
]);
'use client';
function getAutoContrastValue(autoContrast, theme) {
    return typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
}
;
 //# sourceMappingURL=get-auto-contrast-value.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Indicator/get-position-variables/get-position-variables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPositionVariables",
    ()=>getPositionVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function getPositionVariables(_position = "top-end", offset = 0) {
    const variables = {
        "--indicator-top": void 0,
        "--indicator-bottom": void 0,
        "--indicator-left": void 0,
        "--indicator-right": void 0,
        "--indicator-translate-x": void 0,
        "--indicator-translate-y": void 0
    };
    const _offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(offset);
    const [position, placement] = _position.split("-");
    if (position === "top") {
        variables["--indicator-top"] = _offset;
        variables["--indicator-translate-y"] = "-50%";
    }
    if (position === "middle") {
        variables["--indicator-top"] = "50%";
        variables["--indicator-translate-y"] = "-50%";
    }
    if (position === "bottom") {
        variables["--indicator-bottom"] = _offset;
        variables["--indicator-translate-y"] = "50%";
    }
    if (placement === "start") {
        variables["--indicator-left"] = _offset;
        variables["--indicator-translate-x"] = "-50%";
    }
    if (placement === "center") {
        variables["--indicator-left"] = "50%";
        variables["--indicator-translate-x"] = "-50%";
    }
    if (placement === "end") {
        variables["--indicator-right"] = _offset;
        variables["--indicator-translate-x"] = "50%";
    }
    return variables;
}
;
 //# sourceMappingURL=get-position-variables.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Indicator/Indicator.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_e5262200",
    "indicator": "m_760d1fb1",
    "processing": "m_885901b1"
};
;
 //# sourceMappingURL=Indicator.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Indicator/Indicator.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Indicator",
    ()=>Indicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$auto$2d$contrast$2d$value$2f$get$2d$auto$2d$contrast$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$get$2d$position$2d$variables$2f$get$2d$position$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Indicator/get-position-variables/get-position-variables.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$Indicator$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Indicator/Indicator.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    position: "top-end",
    offset: 0
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { color, position, offset, size, radius, zIndex, autoContrast })=>({
        root: {
            "--indicator-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--indicator-text-color": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$auto$2d$contrast$2d$value$2f$get$2d$auto$2d$contrast$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAutoContrastValue"])(autoContrast, theme) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContrastColor"])({
                color,
                theme,
                autoContrast
            }) : void 0,
            "--indicator-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size),
            "--indicator-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--indicator-z-index": zIndex?.toString(),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$get$2d$position$2d$variables$2f$get$2d$position$2d$variables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPositionVariables"])(position, offset)
        }
    }));
const Indicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Indicator", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, children, position, offset, inline, label, radius, color, withBorder, disabled, processing, zIndex, autoContrast, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Indicator",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$Indicator$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...getStyles("root"),
        mod: [
            {
                inline
            },
            mod
        ],
        ...others,
        children: [
            !disabled && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                mod: {
                    "with-label": !!label,
                    "with-border": withBorder,
                    processing
                },
                ...getStyles("indicator"),
                children: label
            }),
            children
        ]
    });
});
Indicator.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$Indicator$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Indicator.displayName = "@mantine/core/Indicator";
;
 //# sourceMappingURL=Indicator.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransitionProps",
    ()=>getTransitionProps
]);
'use client';
const defaultTransition = {
    duration: 100,
    transition: "fade"
};
function getTransitionProps(transitionProps, componentTransition) {
    return {
        ...defaultTransition,
        ...componentTransition,
        ...transitionProps
    };
}
;
 //# sourceMappingURL=get-transition-props.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "tooltip": "m_1b3c8819",
    "arrow": "m_f898399f"
};
;
 //# sourceMappingURL=Tooltip.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStyleObject",
    ()=>getStyleObject
]);
'use client';
function getStyleObject(style, theme) {
    if (Array.isArray(style)) {
        return [
            ...style
        ].reduce((acc, item)=>({
                ...acc,
                ...getStyleObject(item, theme)
            }), {});
    }
    if (typeof style === "function") {
        return style(theme);
    }
    if (style == null) {
        return {};
    }
    return style;
}
;
 //# sourceMappingURL=get-style-object.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFloatingTooltip",
    ()=>useFloatingTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react@0.27.17+67f6792bdf102c28/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react-dom@2.1.7+67f6792bdf102c28/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function useFloatingTooltip({ offset, position, defaultOpened }) {
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultOpened);
    const boundaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { x, y, elements, refs, update, placement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        placement: position,
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                crossAxis: true,
                padding: 5,
                rootBoundary: "document"
            })
        ]
    });
    const horizontalOffset = placement.includes("right") ? offset : position.includes("left") ? offset * -1 : 0;
    const verticalOffset = placement.includes("bottom") ? offset : position.includes("top") ? offset * -1 : 0;
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ clientX, clientY })=>{
        refs.setPositionReference({
            getBoundingClientRect () {
                return {
                    width: 0,
                    height: 0,
                    x: clientX,
                    y: clientY,
                    left: clientX + horizontalOffset,
                    top: clientY + verticalOffset,
                    right: clientX,
                    bottom: clientY
                };
            }
        });
    }, [
        elements.reference
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (refs.floating.current) {
            const boundary = boundaryRef.current;
            boundary.addEventListener("mousemove", handleMouseMove);
            const parents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(refs.floating.current);
            parents.forEach((parent)=>{
                parent.addEventListener("scroll", update);
            });
            return ()=>{
                boundary.removeEventListener("mousemove", handleMouseMove);
                parents.forEach((parent)=>{
                    parent.removeEventListener("scroll", update);
                });
            };
        }
        return void 0;
    }, [
        elements.reference,
        refs.floating.current,
        update,
        handleMouseMove,
        opened
    ]);
    return {
        handleMouseMove,
        x,
        y,
        opened,
        setOpened,
        boundaryRef,
        floating: refs.setFloating
    };
}
;
 //# sourceMappingURL=use-floating-tooltip.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipFloating",
    ()=>TooltipFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$style$2d$object$2f$get$2d$style$2d$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$use$2d$floating$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    refProp: "ref",
    withinPortal: true,
    offset: 10,
    position: "right",
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("popover")
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color })=>({
        tooltip: {
            "--tooltip-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--tooltip-bg": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
        }
    }));
const TooltipFloating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("TooltipFloating", defaultProps, _props);
    const { children, refProp, withinPortal, style, className, classNames, styles, unstyled, radius, color, label, offset, position, multiline, zIndex, disabled, defaultOpened, variant, vars, portalProps, attributes, ...others } = props;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "TooltipFloating",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "tooltip",
        vars,
        varsResolver
    });
    const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$use$2d$floating$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFloatingTooltip"])({
        offset,
        position,
        defaultOpened
    });
    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSingleElementChild"])(children);
    if (!child) {
        throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");
    }
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(boundaryRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRefProp"])(child), ref);
    const childProps = child.props;
    const onMouseEnter = (event)=>{
        childProps.onMouseEnter?.(event);
        handleMouseMove(event);
        setOpened(true);
    };
    const onMouseLeave = (event)=>{
        childProps.onMouseLeave?.(event);
        setOpened(false);
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
                ...portalProps,
                withinPortal,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                    ...others,
                    ...getStyles("tooltip", {
                        style: {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$style$2d$object$2f$get$2d$style$2d$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleObject"])(style, theme),
                            zIndex,
                            display: !disabled && opened ? "block" : "none",
                            top: (y && Math.round(y)) ?? "",
                            left: (x && Math.round(x)) ?? ""
                        }
                    }),
                    variant,
                    ref: floating,
                    mod: {
                        multiline
                    },
                    children: label
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                ...childProps,
                [refProp]: targetRef,
                onMouseEnter,
                onMouseLeave
            })
        ]
    });
});
TooltipFloating.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
TooltipFloating.displayName = "@mantine/core/TooltipFloating";
;
 //# sourceMappingURL=TooltipFloating.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipGroupProvider",
    ()=>TooltipGroupProvider,
    "useTooltipGroupContext",
    ()=>useTooltipGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const TooltipGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
const TooltipGroupProvider = TooltipGroupContext.Provider;
const useTooltipGroupContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TooltipGroupContext);
;
 //# sourceMappingURL=TooltipGroup.context.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipGroup",
    ()=>TooltipGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react@0.27.17+67f6792bdf102c28/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    openDelay: 0,
    closeDelay: 0
};
function TooltipGroup(props) {
    const { openDelay, closeDelay, children } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("TooltipGroup", defaultProps, props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipGroupProvider"], {
        value: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingDelayGroup"], {
            delay: {
                open: openDelay,
                close: closeDelay
            },
            children
        })
    });
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";
TooltipGroup.extend = (c)=>c;
;
 //# sourceMappingURL=TooltipGroup.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltip",
    ()=>useTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react@0.27.17+67f6792bdf102c28/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$5$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+react-dom@2.1.7+67f6792bdf102c28/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function getDefaultMiddlewares(middlewares) {
    if (middlewares === void 0) {
        return {
            shift: true,
            flip: true
        };
    }
    const result = {
        ...middlewares
    };
    if (middlewares.shift === void 0) {
        result.shift = true;
    }
    if (middlewares.flip === void 0) {
        result.flip = true;
    }
    return result;
}
function getTooltipMiddlewares(settings) {
    const middlewaresOptions = getDefaultMiddlewares(settings.middlewares);
    const middlewares = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(settings.offset)
    ];
    if (middlewaresOptions.shift) {
        middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(typeof middlewaresOptions.shift === "boolean" ? {
            padding: 8
        } : {
            padding: 8,
            ...middlewaresOptions.shift
        }));
    }
    if (middlewaresOptions.flip) {
        middlewares.push(typeof middlewaresOptions.flip === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(middlewaresOptions.flip));
    }
    middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
        element: settings.arrowRef,
        padding: settings.arrowOffset
    }));
    if (middlewaresOptions.inline) {
        middlewares.push(typeof middlewaresOptions.inline === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(middlewaresOptions.inline));
    } else if (settings.inline) {
        middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$7$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])());
    }
    return middlewares;
}
function useTooltip(settings) {
    const [uncontrolledOpened, setUncontrolledOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(settings.defaultOpened);
    const controlled = typeof settings.opened === "boolean";
    const opened = controlled ? settings.opened : uncontrolledOpened;
    const withinGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTooltipGroupContext"])();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((_opened)=>{
        setUncontrolledOpened(_opened);
        if (_opened) {
            setCurrentId(uid);
        }
    }, [
        uid
    ]);
    const { x, y, context, refs, placement, middlewareData: { arrow: { x: arrowX, y: arrowY } = {} } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        strategy: settings.strategy,
        placement: settings.position,
        open: opened,
        onOpenChange: onChange,
        middleware: getTooltipMiddlewares(settings),
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$5$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"]
    });
    const { delay: groupDelay, currentId, setCurrentId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDelayGroup"])(context, {
        id: uid
    });
    const { getReferenceProps, getFloatingProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInteractions"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useHover"])(context, {
            enabled: settings.events?.hover,
            delay: withinGroup ? groupDelay : {
                open: settings.openDelay,
                close: settings.closeDelay
            },
            mouseOnly: !settings.events?.touch
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFocus"])(context, {
            enabled: settings.events?.focus,
            visibleOnly: true
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRole"])(context, {
            role: "tooltip"
        }),
        // Cannot be used with controlled tooltip, page jumps
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$react$40$0$2e$27$2e$17$2b$67f6792bdf102c28$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDismiss"])(context, {
            enabled: typeof settings.opened === "undefined"
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDidUpdate"])(()=>{
        settings.onPositionChange?.(placement);
    }, [
        placement
    ]);
    const isGroupPhase = opened && currentId && currentId !== uid;
    return {
        x,
        y,
        arrowX,
        arrowY,
        reference: refs.setReference,
        floating: refs.setFloating,
        getFloatingProps,
        getReferenceProps,
        isGroupPhase,
        opened,
        placement
    };
}
;
 //# sourceMappingURL=use-tooltip.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+hooks@8.3.14+83d5fd7b249dbeef/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$get$2d$floating$2d$position$2f$get$2d$floating$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$props$2f$get$2d$transition$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$TooltipFloating$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$use$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    position: "top",
    refProp: "ref",
    withinPortal: true,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transitionProps: {
        duration: 100,
        transition: "fade"
    },
    events: {
        hover: true,
        focus: false,
        touch: false
    },
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("popover"),
    positionDependencies: [],
    middlewares: {
        flip: true,
        shift: true,
        inline: false
    }
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color, variant, autoContrast })=>{
    const colors = theme.variantColorResolver({
        theme,
        color: color || theme.primaryColor,
        autoContrast,
        variant: variant || "filled"
    });
    return {
        tooltip: {
            "--tooltip-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--tooltip-bg": color ? colors.background : void 0,
            "--tooltip-color": color ? colors.color : void 0
        }
    };
});
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Tooltip", defaultProps, _props);
    const { children, position, refProp, label, openDelay, closeDelay, onPositionChange, opened, defaultOpened, withinPortal, radius, color, classNames, styles, unstyled, style, className, withArrow, arrowSize, arrowOffset, arrowRadius, arrowPosition, offset, transitionProps, multiline, events, zIndex, disabled, // Scheduled for removal in 9.0
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    positionDependencies, onClick, onMouseEnter, onMouseLeave, inline, variant, keepMounted, vars, portalProps, mod, floatingStrategy, middlewares, autoContrast, attributes, target, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Tooltip", defaultProps, props);
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$use$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTooltip"])({
        position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$get$2d$floating$2d$position$2f$get$2d$floating$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingPosition"])(dir, position),
        closeDelay,
        openDelay,
        onPositionChange,
        opened,
        defaultOpened,
        events,
        arrowRef,
        arrowOffset,
        offset: typeof offset === "number" ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
        positionDependencies: [
            ...positionDependencies,
            target ?? children
        ],
        inline,
        strategy: floatingStrategy,
        middlewares
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const targetNode = target instanceof HTMLElement ? target : typeof target === "string" ? document.querySelector(target) : target?.current || null;
        if (targetNode) {
            tooltip.reference(targetNode);
        }
    }, [
        target,
        tooltip
    ]);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Tooltip",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        rootSelector: "tooltip",
        vars,
        varsResolver
    });
    const child = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$single$2d$element$2d$child$2f$get$2d$single$2d$element$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSingleElementChild"])(children);
    if (!target && !child) {
        return null;
    }
    if (target) {
        const transition2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$props$2f$get$2d$transition$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionProps"])(transitionProps, {
            duration: 100,
            transition: "fade"
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
                ...portalProps,
                withinPortal,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                    ...transition2,
                    keepMounted,
                    mounted: !disabled && !!tooltip.opened,
                    duration: tooltip.isGroupPhase ? 10 : transition2.duration,
                    children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                            ...others,
                            "data-fixed": floatingStrategy === "fixed" || void 0,
                            variant,
                            mod: [
                                {
                                    multiline
                                },
                                mod
                            ],
                            ...tooltip.getFloatingProps({
                                ref: tooltip.floating,
                                className: getStyles("tooltip").className,
                                style: {
                                    ...getStyles("tooltip").style,
                                    ...transitionStyles,
                                    zIndex,
                                    top: tooltip.y ?? 0,
                                    left: tooltip.x ?? 0
                                }
                            }),
                            children: [
                                label,
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingArrow"], {
                                    ref: arrowRef,
                                    arrowX: tooltip.arrowX,
                                    arrowY: tooltip.arrowY,
                                    visible: withArrow,
                                    position: tooltip.placement,
                                    arrowSize,
                                    arrowOffset,
                                    arrowRadius,
                                    arrowPosition,
                                    ...getStyles("arrow")
                                })
                            ]
                        })
                })
            })
        });
    }
    const childProps = child.props;
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$hooks$40$8$2e$3$2e$14$2b$83d5fd7b249dbeef$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(tooltip.reference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRefProp"])(child), ref);
    const transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$props$2f$get$2d$transition$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionProps"])(transitionProps, {
        duration: 100,
        transition: "fade"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
                ...portalProps,
                withinPortal,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                    ...transition,
                    keepMounted,
                    mounted: !disabled && !!tooltip.opened,
                    duration: tooltip.isGroupPhase ? 10 : transition.duration,
                    children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                            ...others,
                            "data-fixed": floatingStrategy === "fixed" || void 0,
                            variant,
                            mod: [
                                {
                                    multiline
                                },
                                mod
                            ],
                            ...tooltip.getFloatingProps({
                                ref: tooltip.floating,
                                className: getStyles("tooltip").className,
                                style: {
                                    ...getStyles("tooltip").style,
                                    ...transitionStyles,
                                    zIndex,
                                    top: tooltip.y ?? 0,
                                    left: tooltip.x ?? 0
                                }
                            }),
                            children: [
                                label,
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingArrow"], {
                                    ref: arrowRef,
                                    arrowX: tooltip.arrowX,
                                    arrowY: tooltip.arrowY,
                                    visible: withArrow,
                                    position: tooltip.placement,
                                    arrowSize,
                                    arrowOffset,
                                    arrowRadius,
                                    arrowPosition,
                                    ...getStyles("arrow")
                                })
                            ]
                        })
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, tooltip.getReferenceProps({
                onClick,
                onMouseEnter,
                onMouseLeave,
                onMouseMove: props.onMouseMove,
                onPointerDown: props.onPointerDown,
                onPointerEnter: props.onPointerEnter,
                ...childProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, childProps.className),
                [refProp]: targetRef
            }))
        ]
    });
});
Tooltip.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Tooltip.displayName = "@mantine/core/Tooltip";
Tooltip.Floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$TooltipFloating$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipFloating"];
Tooltip.Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipGroup"];
;
 //# sourceMappingURL=Tooltip.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_77c9d27d",
    "inner": "m_80f1301b",
    "label": "m_811560b9",
    "section": "m_a74036a",
    "loader": "m_a25b86ee",
    "group": "m_80d6d844",
    "groupSection": "m_70be2a01"
};
;
 //# sourceMappingURL=Button.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroup",
    ()=>ButtonGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    orientation: "horizontal"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { borderWidth })=>({
        group: {
            "--button-border-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(borderWidth)
        }
    }));
const ButtonGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroup", defaultProps, _props);
    const { className, style, classNames, styles, unstyled, orientation, vars, borderWidth, variant, mod, attributes, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroup", defaultProps, _props);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ButtonGroup",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver,
        rootSelector: "group"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("group"),
        ref,
        variant,
        mod: [
            {
                "data-orientation": orientation
            },
            mod
        ],
        role: "group",
        ...others
    });
});
ButtonGroup.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
ButtonGroup.displayName = "@mantine/core/ButtonGroup";
;
 //# sourceMappingURL=ButtonGroup.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroupSection",
    ()=>ButtonGroupSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color, gradient, variant, autoContrast, size })=>{
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        groupSection: {
            "--section-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "section-height"),
            "--section-padding-x": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "section-padding-x"),
            "--section-fz": size?.includes("compact") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size.replace("compact-", "")) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--section-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--section-bg": color || variant ? colors.background : void 0,
            "--section-color": colors.color,
            "--section-bd": color || variant ? colors.border : void 0
        }
    };
});
const ButtonGroupSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroupSection", null, _props);
    const { className, style, classNames, styles, unstyled, vars, variant, gradient, radius, autoContrast, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ButtonGroupSection",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver,
        rootSelector: "groupSection"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("groupSection"),
        ref,
        variant,
        ...others
    });
});
ButtonGroupSection.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
ButtonGroupSection.displayName = "@mantine/core/ButtonGroupSection";
;
 //# sourceMappingURL=ButtonGroupSection.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroup$2f$ButtonGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroupSection$2f$ButtonGroupSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const loaderTransition = {
    in: {
        opacity: 1,
        transform: `translate(-50%, calc(-50% + ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(1)}))`
    },
    out: {
        opacity: 0,
        transform: "translate(-50%, -200%)"
    },
    common: {
        transformOrigin: "center"
    },
    transitionProperty: "transform, opacity"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color, gradient, variant, size, justify, autoContrast })=>{
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        root: {
            "--button-justify": justify,
            "--button-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "button-height"),
            "--button-padding-x": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "button-padding-x"),
            "--button-fz": size?.includes("compact") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size.replace("compact-", "")) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--button-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--button-bg": color || variant ? colors.background : void 0,
            "--button-hover": color || variant ? colors.hover : void 0,
            "--button-color": colors.color,
            "--button-bd": color || variant ? colors.border : void 0,
            "--button-hover-color": color || variant ? colors.hoverColor : void 0
        }
    };
});
const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Button", null, _props);
    const { style, vars, className, color, disabled, children, leftSection, rightSection, fullWidth, variant, radius, loading, loaderProps, gradient, classNames, styles, unstyled, "data-disabled": dataDisabled, autoContrast, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Button",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    const hasLeftSection = !!leftSection;
    const hasRightSection = !!rightSection;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        ref,
        ...getStyles("root", {
            active: !disabled && !loading && !dataDisabled
        }),
        unstyled,
        variant,
        disabled: disabled || loading,
        mod: [
            {
                disabled: disabled || dataDisabled,
                loading,
                block: fullWidth,
                "with-left-section": hasLeftSection,
                "with-right-section": hasRightSection
            },
            mod
        ],
        ...others,
        children: [
            typeof loading === "boolean" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                mounted: loading,
                transition: loaderTransition,
                duration: 150,
                children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("loader", {
                            style: transitionStyles
                        }),
                        "aria-hidden": true,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                            color: "var(--button-color)",
                            size: "calc(var(--button-height) / 1.8)",
                            ...loaderProps
                        })
                    })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                ...getStyles("inner"),
                children: [
                    leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("section"),
                        mod: {
                            position: "left"
                        },
                        children: leftSection
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        mod: {
                            loading
                        },
                        ...getStyles("label"),
                        children
                    }),
                    rightSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("section"),
                        mod: {
                            position: "right"
                        },
                        children: rightSection
                    })
                ]
            })
        ]
    });
});
Button.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Button.displayName = "@mantine/core/Button";
Button.Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroup$2f$ButtonGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonGroup"];
Button.GroupSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroupSection$2f$ButtonGroupSection$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonGroupSection"];
;
 //# sourceMappingURL=Button.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_6d731127"
};
;
 //# sourceMappingURL=Stack.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stack",
    ()=>Stack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    gap: "md",
    align: "stretch",
    justify: "flex-start"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { gap, align, justify })=>({
        root: {
            "--stack-gap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(gap),
            "--stack-align": align,
            "--stack-justify": justify
        }
    }));
const Stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Stack", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, align, justify, gap, variant, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Stack",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...getStyles("root"),
        variant,
        ...others
    });
});
Stack.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Stack.displayName = "@mantine/core/Stack";
;
 //# sourceMappingURL=Stack.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Skeleton/Skeleton.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_18320242",
    "skeleton-fade": "m_299c329c"
};
;
 //# sourceMappingURL=Skeleton.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Skeleton/Skeleton.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    visible: true,
    animate: true
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { width, height, radius, circle })=>({
        root: {
            "--skeleton-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(height),
            "--skeleton-width": circle ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(height) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(width),
            "--skeleton-radius": circle ? "1000px" : radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius)
        }
    }));
const Skeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Skeleton", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, width, height, circle, visible, radius, animate, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Skeleton",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...getStyles("root"),
        mod: [
            {
                visible,
                animate
            },
            mod
        ],
        ...others
    });
});
Skeleton.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Skeleton.displayName = "@mantine/core/Skeleton";
;
 //# sourceMappingURL=Skeleton.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_7485cace"
};
;
 //# sourceMappingURL=Container.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { size, fluid })=>({
        root: {
            "--container-size": fluid ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "container-size")
        }
    }));
const Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Container", null, _props);
    const { classNames, className, style, styles, unstyled, vars, fluid, mod, attributes, strategy, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Container",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                fluid,
                strategy: strategy || "block"
            },
            mod
        ],
        ...getStyles("root"),
        ...others
    });
});
Container.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Container.displayName = "@mantine/core/Container";
;
 //# sourceMappingURL=Container.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_1b7284a3"
};
;
 //# sourceMappingURL=Paper.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paper",
    ()=>Paper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { radius, shadow })=>({
        root: {
            "--paper-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--paper-shadow": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShadow"])(shadow)
        }
    }));
const Paper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Paper", null, _props);
    const { classNames, className, style, styles, unstyled, withBorder, vars, radius, shadow, variant, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Paper",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                "data-with-border": withBorder
            },
            mod
        ],
        ...getStyles("root"),
        variant,
        ...others
    });
});
Paper.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Paper.displayName = "@mantine/core/Paper";
;
 //# sourceMappingURL=Paper.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Title/get-title-size.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTitleSize",
    ()=>getTitleSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
];
function getTitleSize(order, size) {
    const titleSize = size !== void 0 ? size : `h${order}`;
    if (headings.includes(titleSize)) {
        return {
            fontSize: `var(--mantine-${titleSize}-font-size)`,
            fontWeight: `var(--mantine-${titleSize}-font-weight)`,
            lineHeight: `var(--mantine-${titleSize}-line-height)`
        };
    } else if (sizes.includes(titleSize)) {
        return {
            fontSize: `var(--mantine-font-size-${titleSize})`,
            fontWeight: `var(--mantine-h${order}-font-weight)`,
            lineHeight: `var(--mantine-h${order}-line-height)`
        };
    }
    return {
        fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(titleSize),
        fontWeight: `var(--mantine-h${order}-font-weight)`,
        lineHeight: `var(--mantine-h${order}-line-height)`
    };
}
;
 //# sourceMappingURL=get-title-size.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_8a5d1357"
};
;
 //# sourceMappingURL=Title.module.css.mjs.map
}),
"[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+8fba677b1d6253e6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$get$2d$title$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Title/get-title-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    order: 1
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { order, size, lineClamp, textWrap })=>{
    const sizeVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$get$2d$title$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTitleSize"])(order || 1, size);
    return {
        root: {
            "--title-fw": sizeVariables.fontWeight,
            "--title-lh": sizeVariables.lineHeight,
            "--title-fz": sizeVariables.fontSize,
            "--title-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
            "--title-text-wrap": textWrap
        }
    };
});
const Title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Title", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, order, vars, size, variant, lineClamp, textWrap, mod, attributes, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Title",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        attributes,
        vars,
        varsResolver
    });
    if (![
        1,
        2,
        3,
        4,
        5,
        6
    ].includes(order)) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$8fba677b1d6253e6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root"),
        component: `h${order}`,
        variant,
        ref,
        mod: [
            {
                order,
                "data-line-clamp": typeof lineClamp === "number"
            },
            mod
        ],
        size,
        ...others
    });
});
Title.classes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Title.displayName = "@mantine/core/Title";
;
 //# sourceMappingURL=Title.mjs.map
}),
];

//# sourceMappingURL=d15d6_%40mantine_core_esm_db285b65._.js.map