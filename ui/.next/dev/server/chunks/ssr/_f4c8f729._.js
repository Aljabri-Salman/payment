module.exports = [
"[project]/ui/src/components/Layout/Header/Header.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButton": "Header-module__gDmPGq__actionButton",
  "header": "Header-module__gDmPGq__header",
  "leftSection": "Header-module__gDmPGq__leftSection",
  "link": "Header-module__gDmPGq__link",
  "linkButton": "Header-module__gDmPGq__linkButton",
  "linkContent": "Header-module__gDmPGq__linkContent",
  "logoIcon": "Header-module__gDmPGq__logoIcon",
  "logoLink": "Header-module__gDmPGq__logoLink",
  "logoText": "Header-module__gDmPGq__logoText",
  "notificationItem": "Header-module__gDmPGq__notificationItem",
  "notificationText": "Header-module__gDmPGq__notificationText",
  "notificationTime": "Header-module__gDmPGq__notificationTime",
  "rightSection": "Header-module__gDmPGq__rightSection",
  "searchSection": "Header-module__gDmPGq__searchSection",
  "userInfo": "Header-module__gDmPGq__userInfo",
  "userName": "Header-module__gDmPGq__userName",
  "userRole": "Header-module__gDmPGq__userRole",
  "userSection": "Header-module__gDmPGq__userSection",
});
}),
"[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/i18n/routing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconWorld.mjs [app-ssr] (ecmascript) <export default as IconWorld>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$8$2e$2$2b$83d5fd7b249dbeef$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/use-intl@4.8.2+83d5fd7b249dbeef/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/Header.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
function LocaleSwitch({ fullWidth }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$8$2e$2$2b$83d5fd7b249dbeef$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleLocaleChange = ()=>{
        startTransition(()=>{
            const newPath = `/${nextLocale}${pathname}`;
            console.log('Navigating to:', newPath);
            router.push(newPath);
        });
    };
    if (fullWidth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
            onClick: handleLocaleChange,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link} ${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkButton}`,
            type: "button",
            disabled: isPending,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__["IconWorld"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    locale === 'en' ? 'عربي' : 'EN'
                ]
            }, void 0, true, {
                fileName: "[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        size: "xs",
        disabled: isPending,
        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__["IconWorld"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx",
            lineNumber: 50,
            columnNumber: 20
        }, void 0),
        variant: "subtle",
        onClick: handleLocaleChange,
        children: locale === 'en' ? 'عربي' : 'EN'
    }, void 0, false, {
        fileName: "[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/ui/src/components/Layout/Header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$mantine$2d$color$2d$scheme$2f$use$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-mantine-color-scheme.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Burger/Burger.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Input/Input.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$Indicator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Indicator/Indicator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBell$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconBell.mjs [app-ssr] (ecmascript) <export default as IconBell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSun$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconSun.mjs [app-ssr] (ecmascript) <export default as IconSun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconMoon.mjs [app-ssr] (ecmascript) <export default as IconMoon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/i18n/routing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.8.2+3905b9632aae7a73/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$LocaleSwitch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/LocaleSwitch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/Header.module.css [app-ssr] (css module)");
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
function Header({ mobileNavbarOpened = false, onMobileNavbarToggle }) {
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const { colorScheme, toggleColorScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$mantine$2d$color$2d$scheme$2f$use$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineColorScheme"])();
    const isDark = colorScheme === 'dark';
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Header');
    const tCommon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Common');
    const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShell"].Header, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                h: "100%",
                w: "100%",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Burger"], {
                                opened: mobileNavbarOpened,
                                onClick: onMobileNavbarToggle,
                                size: "sm",
                                hiddenFrom: "sm"
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${currentLocale}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                                        children: "M"
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                                        visibleFrom: "sm",
                                        children: t('logoText')
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchSection,
                        visibleFrom: "md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: t('search'),
                            value: searchValue,
                            onChange: (e)=>setSearchValue(e.target.value),
                            leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 28
                            }, void 0),
                            radius: "md"
                        }, void 0, false, {
                            fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$LocaleSwitch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                label: isDark ? t('lightMode') : t('darkMode'),
                                position: "bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    variant: "light",
                                    size: "lg",
                                    radius: "md",
                                    onClick: toggleColorScheme,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButton,
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSun$3e$__["IconSun"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 27
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoon$3e$__["IconMoon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 51
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {
                                shadow: "md",
                                width: 320,
                                position: "bottom-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Target, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                            variant: "light",
                                            size: "lg",
                                            radius: "md",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButton,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Indicator$2f$Indicator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
                                                size: 8,
                                                color: "red",
                                                offset: 4,
                                                withBorder: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBell$3e$__["IconBell"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Dropdown, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Label, {
                                                children: t('notifications')
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "sm",
                                                    children: "New payment: SAR 1,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 28
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "sm",
                                                    children: "Gateway issue: Hyperpay"
                                                }, void 0, false, {
                                                    fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 28
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ui/src/components/Layout/Header/Header.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/ui/src/components/Layout/Header/Header2.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButton": "Header2-module__mKUpia__actionButton",
  "badge": "Header2-module__mKUpia__badge",
  "burger": "Header2-module__mKUpia__burger",
  "burgerOpen": "Header2-module__mKUpia__burgerOpen",
  "container": "Header2-module__mKUpia__container",
  "dropdown": "Header2-module__mKUpia__dropdown",
  "dropdownItem": "Header2-module__mKUpia__dropdownItem",
  "dropdownLabel": "Header2-module__mKUpia__dropdownLabel",
  "dropdownMenu": "Header2-module__mKUpia__dropdownMenu",
  "dropdownText": "Header2-module__mKUpia__dropdownText",
  "header": "Header2-module__mKUpia__header",
  "hideOnMobile": "Header2-module__mKUpia__hideOnMobile",
  "hideOnTablet": "Header2-module__mKUpia__hideOnTablet",
  "indicator": "Header2-module__mKUpia__indicator",
  "leftSection": "Header2-module__mKUpia__leftSection",
  "localeText": "Header2-module__mKUpia__localeText",
  "logoIcon": "Header2-module__mKUpia__logoIcon",
  "logoLink": "Header2-module__mKUpia__logoLink",
  "logoText": "Header2-module__mKUpia__logoText",
  "mobileOnly": "Header2-module__mKUpia__mobileOnly",
  "pulse": "Header2-module__mKUpia__pulse",
  "rightSection": "Header2-module__mKUpia__rightSection",
  "searchIcon": "Header2-module__mKUpia__searchIcon",
  "searchInput": "Header2-module__mKUpia__searchInput",
  "searchSection": "Header2-module__mKUpia__searchSection",
  "searchWrapper": "Header2-module__mKUpia__searchWrapper",
  "slideDown": "Header2-module__mKUpia__slideDown",
  "tooltip": "Header2-module__mKUpia__tooltip",
  "tooltipText": "Header2-module__mKUpia__tooltipText",
});
}),
"[project]/ui/src/components/Layout/Header/Header2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header2",
    ()=>Header2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBell$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconBell.mjs [app-ssr] (ecmascript) <export default as IconBell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSun$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconSun.mjs [app-ssr] (ecmascript) <export default as IconSun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconMoon.mjs [app-ssr] (ecmascript) <export default as IconMoon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconWorld.mjs [app-ssr] (ecmascript) <export default as IconWorld>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/i18n/routing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.8.2+3905b9632aae7a73/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$8$2e$2$2b$83d5fd7b249dbeef$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/use-intl@4.8.2+83d5fd7b249dbeef/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/Header2.module.css [app-ssr] (css module)");
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
function Header2({ mobileNavbarOpened = false, onMobileNavbarToggle }) {
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [notificationsOpen, setNotificationsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Header');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$8$2e$2$2b$83d5fd7b249dbeef$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setNotificationsOpen(false);
            }
        };
        if (notificationsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        notificationsOpen
    ]);
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    // You can implement actual theme switching logic here
    // document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    };
    const handleLocaleChange = ()=>{
        startTransition(()=>{
            const newPath = `/${nextLocale}${pathname}`;
            router.push(newPath);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        "data-theme": theme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].burger} ${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileOnly}`,
                            onClick: onMobileNavbarToggle,
                            "aria-label": "Toggle navigation",
                            "aria-expanded": mobileNavbarOpened,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: mobileNavbarOpened ? __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].burgerOpen : ''
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: mobileNavbarOpened ? __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].burgerOpen : ''
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: mobileNavbarOpened ? __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].burgerOpen : ''
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${currentLocale}`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                                    children: "M"
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText} ${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hideOnMobile}`,
                                    children: t('logoText')
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hideOnTablet}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                size: 16,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchIcon
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: t('search'),
                                value: searchValue,
                                onChange: (e)=>setSearchValue(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput,
                                "aria-label": t('search')
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLocaleChange,
                            disabled: isPending,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButton,
                            title: locale === 'en' ? 'التبديل إلى العربية' : 'Switch to English',
                            "aria-label": locale === 'en' ? 'Switch to Arabic' : 'Switch to English',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__["IconWorld"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].localeText,
                                    children: locale === 'en' ? 'عربي' : 'EN'
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tooltip,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButton,
                                    "aria-label": theme === 'dark' ? t('lightMode') : t('darkMode'),
                                    children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSun$3e$__["IconSun"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                        lineNumber: 122,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoon$3e$__["IconMoon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                        lineNumber: 122,
                                        columnNumber: 59
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tooltipText,
                                    children: theme === 'dark' ? t('lightMode') : t('darkMode')
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdown,
                            ref: dropdownRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setNotificationsOpen(!notificationsOpen),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButton,
                                    "aria-label": t('notifications'),
                                    "aria-expanded": notificationsOpen,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].indicator,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBell$3e$__["IconBell"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                                "aria-label": "2 new notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                notificationsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownMenu,
                                    role: "menu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownLabel,
                                            children: t('notifications')
                                        }, void 0, false, {
                                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                            role: "menuitem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownText,
                                                children: "New payment: SAR 1,000"
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem,
                                            role: "menuitem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownText,
                                                children: "Gateway issue: Hyperpay"
                                            }, void 0, false, {
                                                fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ui/src/components/Layout/Header/Header2.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/ui/src/components/Layout/Header/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/Header2.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/ui/src/components/Layout/SideBar/Sidebar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "Sidebar-module__gRMTyW__footer",
  "header": "Sidebar-module__gRMTyW__header",
  "link": "Sidebar-module__gRMTyW__link",
  "linkIcon": "Sidebar-module__gRMTyW__linkIcon",
  "navbar": "Sidebar-module__gRMTyW__navbar",
  "navbarMain": "Sidebar-module__gRMTyW__navbarMain",
});
}),
"[project]/convex/_generated/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "components",
    ()=>components,
    "internal",
    ()=>internal
]);
/* eslint-disable */ /**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/server/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <locals>");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anyApi"];
const internal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anyApi"];
const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["componentsGeneric"])();
}),
"[project]/ui/src/store/useMerchantStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMerchantStore",
    ()=>useMerchantStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$11$2b$efeb1d1299a8bcd3$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.11+efeb1d1299a8bcd3/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$11$2b$efeb1d1299a8bcd3$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.11+efeb1d1299a8bcd3/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useMerchantStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$11$2b$efeb1d1299a8bcd3$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$11$2b$efeb1d1299a8bcd3$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        selectedMerchantId: null,
        setSelectedMerchant: (id)=>set({
                selectedMerchantId: id
            })
    }), {
    name: 'merchant-store'
}));
}),
"[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "merchant": "MerchantButton-module__Po6DiW__merchant",
});
}),
"[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MerchantButton",
    ()=>MerchantButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$store$2f$useMerchantStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/store/useMerchantStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Menu/Menu.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconBuilding.mjs [app-ssr] (ecmascript) <export default as IconBuilding>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-ssr] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs [app-ssr] (ecmascript) <export default as IconEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-ssr] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/i18n/routing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.8.2+3905b9632aae7a73/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$MerchantButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.module.css [app-ssr] (css module)");
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
function MerchantButton() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('MerchantButton');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const merchants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].queries.merchants.listActive);
    const { selectedMerchantId, setSelectedMerchant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$store$2f$useMerchantStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMerchantStore"])();
    // Auto-select first merchant if none selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (merchants && merchants.length > 0 && !selectedMerchantId) {
            setSelectedMerchant(merchants[0]._id);
        }
    }, [
        merchants,
        selectedMerchantId,
        setSelectedMerchant
    ]);
    const selectedMerchant = merchants?.find((m)=>m._id === selectedMerchantId);
    if (merchants === undefined) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$MerchantButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].merchant,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        circle: true,
                        height: 38
                    }, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                height: 14,
                                width: 120,
                                mb: 6
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                height: 12,
                                width: 80
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    if (!merchants || merchants.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {
        shadow: "md",
        width: 280,
        position: "bottom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Target, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$MerchantButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].merchant,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 38,
                                    height: 38,
                                    borderRadius: 8,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 600
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__["IconBuilding"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        fw: 500,
                                        children: selectedMerchant?.name || t('selectMerchant')
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        c: "dimmed",
                                        size: "xs",
                                        children: t('currentWorkspace')
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                size: 14,
                                stroke: 1.5
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Dropdown, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Label, {
                        children: t('switchMerchant')
                    }, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    merchants.map((merchant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Item, {
                            leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__["IconBuilding"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 86,
                                columnNumber: 26
                            }, void 0),
                            rightSection: merchant._id === selectedMerchantId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, void 0) : null,
                            onClick: ()=>{
                                setSelectedMerchant(merchant._id);
                                router.push(`/${merchant._id}`);
                            },
                            children: merchant.name
                        }, merchant._id, false, {
                            fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Divider, {}, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Label, {
                        children: t('actions')
                    }, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Item, {
                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__["IconEdit"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                            lineNumber: 105,
                            columnNumber: 24
                        }, void 0),
                        onClick: ()=>router.push('/merchants'),
                        children: t('manageMerchants')
                    }, void 0, false, {
                        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/ui/src/components/Layout/SideBar/MerchantButton/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$MerchantButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/ui/src/components/Layout/SideBar/SideBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SideBar",
    ()=>SideBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAuth2fa$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon2fa$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconAuth2fa.mjs [app-ssr] (ecmascript) <export default as Icon2fa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBellRinging$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBellRinging$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconBellRinging.mjs [app-ssr] (ecmascript) <export default as IconBellRinging>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDatabaseImport$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDatabaseImport$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconDatabaseImport.mjs [app-ssr] (ecmascript) <export default as IconDatabaseImport>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFingerprint$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconFingerprint.mjs [app-ssr] (ecmascript) <export default as IconFingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconKey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconKey.mjs [app-ssr] (ecmascript) <export default as IconKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLogout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLogout$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.mjs [app-ssr] (ecmascript) <export default as IconLogout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconReceipt2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconReceipt2$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconReceipt2.mjs [app-ssr] (ecmascript) <export default as IconReceipt2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSettings$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs [app-ssr] (ecmascript) <export default as IconSettings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSwitchHorizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSwitchHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconSwitchHorizontal.mjs [app-ssr] (ecmascript) <export default as IconSwitchHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.8.2+3905b9632aae7a73/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/Sidebar.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/MerchantButton/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$MerchantButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/MerchantButton/MerchantButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function SideBar() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Sidebar');
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('billing');
    const data = [
        {
            link: '',
            label: t('notifications'),
            key: 'notifications',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBellRinging$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBellRinging$3e$__["IconBellRinging"]
        },
        {
            link: '',
            label: t('billing'),
            key: 'billing',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconReceipt2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconReceipt2$3e$__["IconReceipt2"]
        },
        {
            link: '',
            label: t('security'),
            key: 'security',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFingerprint$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFingerprint$3e$__["IconFingerprint"]
        },
        {
            link: '',
            label: t('sshKeys'),
            key: 'sshKeys',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconKey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconKey$3e$__["IconKey"]
        },
        {
            link: '',
            label: t('databases'),
            key: 'databases',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDatabaseImport$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDatabaseImport$3e$__["IconDatabaseImport"]
        },
        {
            link: '',
            label: t('authentication'),
            key: 'authentication',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAuth2fa$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon2fa$3e$__["Icon2fa"]
        },
        {
            link: '',
            label: t('otherSettings'),
            key: 'otherSettings',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSettings$3e$__["IconSettings"]
        }
    ];
    const links = data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
            "data-active": item.key === active || undefined,
            href: item.link,
            onClick: (event)=>{
                event.preventDefault();
                setActive(item.key);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkIcon,
                    stroke: 1.5
                }, void 0, false, {
                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: item.label
                }, void 0, false, {
                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, this)
            ]
        }, item.key, true, {
            fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
            lineNumber: 35,
            columnNumber: 5
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShell"].Navbar, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbarMain,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"], {
                            gap: "sm",
                            mb: "md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$MerchantButton$2f$MerchantButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MerchantButton"], {}, void 0, false, {
                                fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        links
                    ]
                }, void 0, true, {
                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                            onClick: (event)=>event.preventDefault(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSwitchHorizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSwitchHorizontal$3e$__["IconSwitchHorizontal"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkIcon,
                                    stroke: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t('changeAccount')
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                            onClick: (event)=>event.preventDefault(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLogout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLogout$3e$__["IconLogout"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkIcon,
                                    stroke: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t('logout')
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ui/src/components/Layout/SideBar/SideBar.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/ui/src/components/Layout/SideBar/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/SideBar.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/ui/src/components/Layout/AppLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$mantine$2d$color$2d$scheme$2f$use$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-mantine-color-scheme.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/Header2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/SideBar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AppLayout({ children }) {
    const { colorScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$mantine$2d$color$2d$scheme$2f$use$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineColorScheme"])();
    const isDark = colorScheme === 'dark';
    const [mobileNavbarOpened, setMobileNavbarOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShell"], {
        padding: "md",
        navbar: {
            width: 280,
            breakpoint: 'sm',
            collapsed: {
                mobile: !mobileNavbarOpened
            }
        },
        header: {
            height: 60
        },
        styles: {
            main: {
                // backgroundColor: isDark ? 'var(--mantine-color-dark-8)' : 'var(--mantine-color-gray-0)',
                minHeight: '100vh'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$Header2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header2"], {}, void 0, false, {
                fileName: "[project]/ui/src/components/Layout/AppLayout.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SideBar"], {}, void 0, false, {
                fileName: "[project]/ui/src/components/Layout/AppLayout.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppShell"].Main, {
                children: children
            }, void 0, false, {
                fileName: "[project]/ui/src/components/Layout/AppLayout.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ui/src/components/Layout/AppLayout.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/ui/src/components/Layout/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/AppLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$SideBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/SideBar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$Header$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/Header/index.ts [app-ssr] (ecmascript) <locals>");
;
;
;
}),
"[project]/ui/src/app/[locale]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/components/Layout/AppLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/convex@1.31.7+83d5fd7b249dbeef/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/i18n/routing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@mantine+core@8.3.14+ae26e2452d40df78/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconBuilding.mjs [app-ssr] (ecmascript) <export default as IconBuilding>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@tabler+icons-react@3.36.1+83d5fd7b249dbeef/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-ssr] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.8.2+3905b9632aae7a73/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$store$2f$useMerchantStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ui/src/store/useMerchantStore.ts [app-ssr] (ecmascript)");
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
function Home() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$8$2e$2$2b$3905b9632aae7a73$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('MerchantDashboard');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const merchants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$convex$40$1$2e$31$2e$7$2b$83d5fd7b249dbeef$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].queries.merchants.listActive);
    const { selectedMerchantId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$store$2f$useMerchantStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMerchantStore"])();
    // Redirect to merchant page if a merchant exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (merchants && merchants.length > 0) {
            const merchantToView = selectedMerchantId || merchants[0]._id;
            router.push(`/${merchantToView}`);
        }
    }, [
        merchants,
        selectedMerchantId,
        router
    ]);
    // Loading state
    if (merchants === undefined) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Center"], {
                style: {
                    minHeight: '400px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                    size: "lg"
                }, void 0, false, {
                    fileName: "[project]/ui/src/app/[locale]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/ui/src/app/[locale]/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ui/src/app/[locale]/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    // Empty state - first time user (no merchants)
    if (merchants.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                size: "sm",
                py: "xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paper"], {
                    withBorder: true,
                    shadow: "md",
                    p: 40,
                    radius: "md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "lg",
                        align: "center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 80,
                                    height: 80,
                                    borderRadius: 16,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__["IconBuilding"], {
                                    size: 40,
                                    color: "white"
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 2,
                                        mb: "xs",
                                        children: t('welcomeTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        c: "dimmed",
                                        size: "sm",
                                        children: t('welcomeDescription')
                                    }, void 0, false, {
                                        fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$tabler$2b$icons$2d$react$40$3$2e$36$2e$1$2b$83d5fd7b249dbeef$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 30
                                }, void 0),
                                onClick: ()=>router.push('/merchants'),
                                children: t('createFirstMerchant')
                            }, void 0, false, {
                                fileName: "[project]/ui/src/app/[locale]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ui/src/app/[locale]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ui/src/app/[locale]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/ui/src/app/[locale]/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ui/src/app/[locale]/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    // Should not reach here due to redirect, but just in case
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ui$2f$src$2f$components$2f$Layout$2f$AppLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Center"], {
            style: {
                minHeight: '400px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$mantine$2b$core$40$8$2e$3$2e$14$2b$ae26e2452d40df78$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                size: "lg"
            }, void 0, false, {
                fileName: "[project]/ui/src/app/[locale]/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ui/src/app/[locale]/page.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ui/src/app/[locale]/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_f4c8f729._.js.map