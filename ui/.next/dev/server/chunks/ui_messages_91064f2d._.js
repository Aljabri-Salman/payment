module.exports = [
"[project]/ui/messages/ar.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ui_messages_ar_json_01cf68a5._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/ui/messages/ar.json (json)");
    });
});
}),
"[project]/ui/messages/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ui_messages_en_json_3eab0e5b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/ui/messages/en.json (json)");
    });
});
}),
];