module.exports = [
"[project]/frontend/src/app/competances/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetencesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const skills = [
    {
        category: "Technologies Web",
        items: [
            {
                name: "ReactJs",
                src: "/skills/react.svg"
            },
            {
                name: "HTML5",
                src: "/skills/html.svg"
            },
            {
                name: "CSS3",
                src: "/skills/css.svg"
            },
            {
                name: "NodeJs",
                src: "/skills/node.svg"
            },
            {
                name: "JavaScript",
                src: "/skills/javascript.svg"
            },
            {
                name: "Tailwind CSS",
                src: "/skills/tailwind.svg"
            }
        ]
    },
    {
        category: "Langages de Programmation",
        items: [
            {
                name: "C",
                src: "/skills/c.svg"
            },
            {
                name: "C#",
                src: "/skills/csharp.svg"
            },
            {
                name: "Python",
                src: "/skills/python.svg"
            },
            {
                name: "Java",
                src: "/skills/java.svg"
            }
        ]
    },
    {
        category: "Frameworks",
        items: [
            {
                name: "NextJs",
                src: "/skills/next.svg"
            },
            {
                name: "Spring Boot",
                src: "/skills/spring.svg"
            },
            {
                name: "Laravel",
                src: "/skills/laravel.svg"
            },
            {
                name: "Flutter",
                src: "/skills/flutter.svg"
            }
        ]
    },
    {
        category: "Outils",
        items: [
            {
                name: "Git",
                src: "/skills/git.svg"
            },
            {
                name: "GitHub",
                src: "/skills/github.svg"
            },
            {
                name: "PostgreSQL",
                src: "/skills/postgresql.svg"
            },
            {
                name: "MySQL",
                src: "/skills/mysql.svg"
            }
        ]
    }
];
function CompetencesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "competences",
        style: {
            minHeight: "100vh",
            padding: "60px 20px",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            transition: "0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                maxWidth: "1200px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center"
            },
            children: skills.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h3, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            style: {
                                textAlign: "center",
                                fontSize: "1.8rem",
                                marginBottom: "30px"
                            },
                            children: section.category
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/competances/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                                gap: "20px",
                                justifyItems: "center",
                                alignItems: "center",
                                padding: "0 50px"
                            },
                            children: section.items.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.1,
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.05 * index,
                                        duration: 0.5
                                    },
                                    style: {
                                        width: "140px",
                                        height: "100px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "2px",
                                        borderRadius: "15px",
                                        background: "rgba(87, 83, 83, 0.24)",
                                        backdropFilter: "blur(15px)",
                                        WebkitBackdropFilter: "blur(15px)",
                                        padding: "10px",
                                        transition: "0.3s"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: skill.src,
                                            alt: skill.name,
                                            width: 60,
                                            height: 60,
                                            style: {
                                                objectFit: "contain"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/competances/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "1rem",
                                                textAlign: "center"
                                            },
                                            children: skill.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/competances/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, skill.name, true, {
                                    fileName: "[project]/frontend/src/app/competances/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/competances/page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, section.category, true, {
                    fileName: "[project]/frontend/src/app/competances/page.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/competances/page.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/competances/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_app_competances_page_tsx_280e98a0._.js.map