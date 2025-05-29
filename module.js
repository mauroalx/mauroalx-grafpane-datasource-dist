/* [create-plugin] version: 5.22.1 */
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["@grafana/data","@grafana/runtime","@grafana/ui","module","react"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_amd_module__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/ConfigEditor.tsx":
/*!*************************************!*\
  !*** ./components/ConfigEditor.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nfunction ConfigEditor(props) {\n    const { onOptionsChange, options } = props;\n    const { jsonData, secureJsonFields, secureJsonData } = options;\n    const onPathChange = (event)=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            jsonData: _object_spread_props(_object_spread({}, jsonData), {\n                path: event.target.value\n            })\n        }));\n    };\n    // Secure field (only sent to the backend)\n    const onAPIKeyChange = (event)=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            secureJsonData: {\n                apiKey: event.target.value\n            }\n        }));\n    };\n    const onResetAPIKey = ()=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            secureJsonFields: _object_spread_props(_object_spread({}, options.secureJsonFields), {\n                apiKey: false\n            }),\n            secureJsonData: _object_spread_props(_object_spread({}, options.secureJsonData), {\n                apiKey: ''\n            })\n        }));\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"Path\",\n        labelWidth: 14,\n        interactive: true,\n        tooltip: 'Json field returned to frontend'\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {\n        id: \"config-editor-path\",\n        onChange: onPathChange,\n        value: jsonData.path,\n        placeholder: \"Enter the path, e.g. /api/v1\",\n        width: 40\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"API Key\",\n        labelWidth: 14,\n        interactive: true,\n        tooltip: 'Secure json field (backend only)'\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SecretInput, {\n        required: true,\n        id: \"config-editor-api-key\",\n        isConfigured: secureJsonFields.apiKey,\n        value: secureJsonData === null || secureJsonData === void 0 ? void 0 : secureJsonData.apiKey,\n        placeholder: \"Enter your API key\",\n        width: 40,\n        onReset: onResetAPIKey,\n        onChange: onAPIKeyChange\n    })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ21CO0FBTXZELFNBQVNJLGFBQWFDLEtBQVk7SUFDdkMsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtJQUNyQyxNQUFNLEVBQUVHLFFBQVEsRUFBRUMsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRSxHQUFHSDtJQUV2RCxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCTixnQkFBZ0Isd0NBQ1hDO1lBQ0hDLFVBQVUsd0NBQ0xBO2dCQUNISyxNQUFNRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7OztJQUc5QjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNQyxpQkFBaUIsQ0FBQ0o7UUFDdEJOLGdCQUFnQix3Q0FDWEM7WUFDSEcsZ0JBQWdCO2dCQUNkTyxRQUFRTCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7WUFDNUI7O0lBRUo7SUFFQSxNQUFNRyxnQkFBZ0I7UUFDcEJaLGdCQUFnQix3Q0FDWEM7WUFDSEUsa0JBQWtCLHdDQUNiRixRQUFRRSxnQkFBZ0I7Z0JBQzNCUSxRQUFROztZQUVWUCxnQkFBZ0Isd0NBQ1hILFFBQVFHLGNBQWM7Z0JBQ3pCTyxRQUFROzs7SUFHZDtJQUVBLHFCQUNFLHdJQUNFLDJEQUFDaEIsb0RBQVdBO1FBQUNrQixPQUFNO1FBQU9DLFlBQVk7UUFBSUMsYUFBQUE7UUFBWUMsU0FBUztxQkFDN0QsMkRBQUNwQiw4Q0FBS0E7UUFDSnFCLElBQUc7UUFDSEMsVUFBVWI7UUFDVkksT0FBT1AsU0FBU0ssSUFBSTtRQUNwQlksYUFBWTtRQUNaQyxPQUFPO3VCQUdYLDJEQUFDekIsb0RBQVdBO1FBQUNrQixPQUFNO1FBQVVDLFlBQVk7UUFBSUMsYUFBQUE7UUFBWUMsU0FBUztxQkFDaEUsMkRBQUNuQixvREFBV0E7UUFDVndCLFVBQUFBO1FBQ0FKLElBQUc7UUFDSEssY0FBY25CLGlCQUFpQlEsTUFBTTtRQUNyQ0YsS0FBSyxFQUFFTCwyQkFBQUEscUNBQUFBLGVBQWdCTyxNQUFNO1FBQzdCUSxhQUFZO1FBQ1pDLE9BQU87UUFDUEcsU0FBU1g7UUFDVE0sVUFBVVI7O0FBS3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF1cm9hbHgtZ3JhZnBhbmUtZGF0YXNvdXJjZS8uL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yLnRzeD9iZWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbnB1dCwgU2VjcmV0SW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBNeURhdGFTb3VyY2VPcHRpb25zLCBNeVNlY3VyZUpzb25EYXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPE15RGF0YVNvdXJjZU9wdGlvbnMsIE15U2VjdXJlSnNvbkRhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBDb25maWdFZGl0b3IocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0gPSBwcm9wcztcbiAgY29uc3QgeyBqc29uRGF0YSwgc2VjdXJlSnNvbkZpZWxkcywgc2VjdXJlSnNvbkRhdGEgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3Qgb25QYXRoQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIG9uT3B0aW9uc0NoYW5nZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAganNvbkRhdGE6IHtcbiAgICAgICAgLi4uanNvbkRhdGEsXG4gICAgICAgIHBhdGg6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gU2VjdXJlIGZpZWxkIChvbmx5IHNlbnQgdG8gdGhlIGJhY2tlbmQpXG4gIGNvbnN0IG9uQVBJS2V5Q2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIG9uT3B0aW9uc0NoYW5nZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgc2VjdXJlSnNvbkRhdGE6IHtcbiAgICAgICAgYXBpS2V5OiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uUmVzZXRBUElLZXkgPSAoKSA9PiB7XG4gICAgb25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICAgIC4uLm9wdGlvbnMuc2VjdXJlSnNvbkZpZWxkcyxcbiAgICAgICAgYXBpS2V5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzZWN1cmVKc29uRGF0YToge1xuICAgICAgICAuLi5vcHRpb25zLnNlY3VyZUpzb25EYXRhLFxuICAgICAgICBhcGlLZXk6ICcnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJQYXRoXCIgbGFiZWxXaWR0aD17MTR9IGludGVyYWN0aXZlIHRvb2x0aXA9eydKc29uIGZpZWxkIHJldHVybmVkIHRvIGZyb250ZW5kJ30+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwiY29uZmlnLWVkaXRvci1wYXRoXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25QYXRoQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtqc29uRGF0YS5wYXRofVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHBhdGgsIGUuZy4gL2FwaS92MVwiXG4gICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkFQSSBLZXlcIiBsYWJlbFdpZHRoPXsxNH0gaW50ZXJhY3RpdmUgdG9vbHRpcD17J1NlY3VyZSBqc29uIGZpZWxkIChiYWNrZW5kIG9ubHkpJ30+XG4gICAgICAgIDxTZWNyZXRJbnB1dFxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgaWQ9XCJjb25maWctZWRpdG9yLWFwaS1rZXlcIlxuICAgICAgICAgIGlzQ29uZmlndXJlZD17c2VjdXJlSnNvbkZpZWxkcy5hcGlLZXl9XG4gICAgICAgICAgdmFsdWU9e3NlY3VyZUpzb25EYXRhPy5hcGlLZXl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEFQSSBrZXlcIlxuICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICBvblJlc2V0PXtvblJlc2V0QVBJS2V5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkFQSUtleUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbmxpbmVGaWVsZCIsIklucHV0IiwiU2VjcmV0SW5wdXQiLCJDb25maWdFZGl0b3IiLCJwcm9wcyIsIm9uT3B0aW9uc0NoYW5nZSIsIm9wdGlvbnMiLCJqc29uRGF0YSIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsIm9uUGF0aENoYW5nZSIsImV2ZW50IiwicGF0aCIsInRhcmdldCIsInZhbHVlIiwib25BUElLZXlDaGFuZ2UiLCJhcGlLZXkiLCJvblJlc2V0QVBJS2V5IiwibGFiZWwiLCJsYWJlbFdpZHRoIiwiaW50ZXJhY3RpdmUiLCJ0b29sdGlwIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwid2lkdGgiLCJyZXF1aXJlZCIsImlzQ29uZmlndXJlZCIsIm9uUmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ConfigEditor.tsx\n");

/***/ }),

/***/ "./components/QueryEditor.tsx":
/*!************************************!*\
  !*** ./components/QueryEditor.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ \"@grafana/runtime\");\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\n\nfunction QueryEditor({ query, onChange, onRunQuery, datasource }) {\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`/api/datasources/${datasource.id}/resources/services`).then((res)=>{\n            if (Array.isArray(res)) {\n                setServices(res);\n            } else {\n                setServices([]);\n            }\n        }).catch(()=>setServices([]));\n    }, [\n        datasource.id\n    ]);\n    const queryText = query.queryText || '';\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        gap: 0\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"Query Text\",\n        labelWidth: 16,\n        tooltip: \"Type a service name\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {\n        id: \"query-editor-query-text\",\n        list: \"service-options\",\n        value: queryText,\n        placeholder: \"Enter a service (e.g., Claro)\",\n        onChange: (e)=>onChange(_object_spread_props(_object_spread({}, query), {\n                queryText: e.currentTarget.value\n            })),\n        autoComplete: \"off\"\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"datalist\", {\n        id: \"service-options\"\n    }, services.map((s)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n            key: s,\n            value: s\n        }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        onClick: ()=>onRunQuery()\n    }, \"Run\"));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNhO0FBRWY7QUFNMUMsU0FBU1EsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQVM7SUFDNUUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFXLEVBQUU7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1JNLCtEQUFhQSxHQUNWUSxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUgsV0FBV0ksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQzFEQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQyxNQUFNQyxPQUFPLENBQUNGLE1BQU07Z0JBQ3RCSixZQUFZSTtZQUNkLE9BQU87Z0JBQ0xKLFlBQVksRUFBRTtZQUNoQjtRQUNGLEdBQ0NPLEtBQUssQ0FBQyxJQUFNUCxZQUFZLEVBQUU7SUFDL0IsR0FBRztRQUFDRixXQUFXSSxFQUFFO0tBQUM7SUFFbEIsTUFBTU0sWUFBWWIsTUFBTWEsU0FBUyxJQUFJO0lBRXJDLHFCQUNFLDJEQUFDbkIsOENBQUtBO1FBQUNvQixLQUFLO3FCQUNWLDJEQUFDbkIsb0RBQVdBO1FBQUNvQixPQUFNO1FBQWFDLFlBQVk7UUFBSUMsU0FBUTtxQkFDdEQsMkRBQUNyQiw4Q0FBS0E7UUFDSlcsSUFBRztRQUNIVyxNQUFLO1FBQ0xDLE9BQU9OO1FBQ1BPLGFBQVk7UUFDWm5CLFVBQVUsQ0FBQ29CLElBQ1RwQixTQUFTLHdDQUNKRDtnQkFDSGEsV0FBV1EsRUFBRUMsYUFBYSxDQUFDSCxLQUFLOztRQUdwQ0ksY0FBYTt1QkFJakIsMkRBQUNDO1FBQVNqQixJQUFHO09BQ1ZILFNBQVNxQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ2IsMkRBQUNDO1lBQU9DLEtBQUtGO1lBQUdQLE9BQU9POzRCQUkzQiwyREFBQzdCLCtDQUFNQTtRQUFDZ0MsU0FBUyxJQUFNM0I7T0FBYztBQUczQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdXJvYWx4LWdyYWZwYW5lLWRhdGFzb3VyY2UvLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeD8wYTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RhY2ssIElubGluZUZpZWxkLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTXlRdWVyeSwgTXlEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8RGF0YVNvdXJjZSwgTXlRdWVyeSwgTXlEYXRhU291cmNlT3B0aW9ucz47XG5cbmV4cG9ydCBmdW5jdGlvbiBRdWVyeUVkaXRvcih7IHF1ZXJ5LCBvbkNoYW5nZSwgb25SdW5RdWVyeSwgZGF0YXNvdXJjZSB9OiBQcm9wcykge1xuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5nZXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhc291cmNlLmlkfS9yZXNvdXJjZXMvc2VydmljZXNgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXMpKSB7XG4gICAgICAgICAgc2V0U2VydmljZXMocmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTZXJ2aWNlcyhbXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0U2VydmljZXMoW10pKTtcbiAgfSwgW2RhdGFzb3VyY2UuaWRdKTtcblxuICBjb25zdCBxdWVyeVRleHQgPSBxdWVyeS5xdWVyeVRleHQgfHwgJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgZ2FwPXswfT5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5IFRleHRcIiBsYWJlbFdpZHRoPXsxNn0gdG9vbHRpcD1cIlR5cGUgYSBzZXJ2aWNlIG5hbWVcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9XCJxdWVyeS1lZGl0b3ItcXVlcnktdGV4dFwiXG4gICAgICAgICAgbGlzdD1cInNlcnZpY2Utb3B0aW9uc1wiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5VGV4dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgc2VydmljZSAoZS5nLiwgQ2xhcm8pXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICBxdWVyeVRleHQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuXG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJzZXJ2aWNlLW9wdGlvbnNcIj5cbiAgICAgICAge3NlcnZpY2VzLm1hcCgocykgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtzfSB2YWx1ZT17c30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2RhdGFsaXN0PlxuXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUnVuUXVlcnkoKX0+UnVuPC9CdXR0b24+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RhY2siLCJJbmxpbmVGaWVsZCIsIklucHV0IiwiQnV0dG9uIiwiZ2V0QmFja2VuZFNydiIsIlF1ZXJ5RWRpdG9yIiwicXVlcnkiLCJvbkNoYW5nZSIsIm9uUnVuUXVlcnkiLCJkYXRhc291cmNlIiwic2VydmljZXMiLCJzZXRTZXJ2aWNlcyIsImdldCIsImlkIiwidGhlbiIsInJlcyIsIkFycmF5IiwiaXNBcnJheSIsImNhdGNoIiwicXVlcnlUZXh0IiwiZ2FwIiwibGFiZWwiLCJsYWJlbFdpZHRoIiwidG9vbHRpcCIsImxpc3QiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJhdXRvQ29tcGxldGUiLCJkYXRhbGlzdCIsIm1hcCIsInMiLCJvcHRpb24iLCJrZXkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QueryEditor.tsx\n");

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataSource: () => (/* binding */ DataSource)\n/* harmony export */ });\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ \"@grafana/runtime\");\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./types.ts\");\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nclass DataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.DataSourceWithBackend {\n    getDefaultQuery(_) {\n        return _types__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_QUERY;\n    }\n    applyTemplateVariables(query, scopedVars) {\n        const text = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)().replace(query.queryText || '', scopedVars);\n        return _object_spread_props(_object_spread({}, query), {\n            services: [\n                text\n            ],\n            queryText: text\n        });\n    }\n    filterQuery(query) {\n        // Só executa se tiver pelo menos 1 serviço selecionado\n        return query.services && query.services.length > 0;\n    }\n    constructor(instanceSettings){\n        super(instanceSettings);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhc291cmNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lFO0FBRUg7QUFFL0QsTUFBTUcsbUJBQW1CSCxtRUFBcUJBO0lBS25ESSxnQkFBZ0JDLENBQVUsRUFBb0I7UUFDNUMsT0FBT0gsaURBQWFBO0lBQ3RCO0lBRUFJLHVCQUF1QkMsS0FBYyxFQUFFQyxVQUFzQixFQUFXO1FBQ3RFLE1BQU1DLE9BQU9SLGdFQUFjQSxHQUFHUyxPQUFPLENBQUNILE1BQU1JLFNBQVMsSUFBSSxJQUFJSDtRQUM3RCxPQUFPLHdDQUNGRDtZQUNISyxVQUFVO2dCQUFDSDthQUFLO1lBQ2hCRSxXQUFXRjs7SUFJZjtJQUVBSSxZQUFZTixLQUFjLEVBQVc7UUFDbkMsdURBQXVEO1FBQ3ZELE9BQU9BLE1BQU1LLFFBQVEsSUFBSUwsTUFBTUssUUFBUSxDQUFDRSxNQUFNLEdBQUc7SUFDbkQ7SUF0QkFDLFlBQVlDLGdCQUFpRSxDQUFFO1FBQzdFLEtBQUssQ0FBQ0E7SUFDUjtBQXFCRiIsInNvdXJjZXMiOlsid2VicGFjazovL21hdXJvYWx4LWdyYWZwYW5lLWRhdGFzb3VyY2UvLi9kYXRhc291cmNlLnRzP2VhYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIENvcmVBcHAsIFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgTXlRdWVyeSwgTXlEYXRhU291cmNlT3B0aW9ucywgREVGQVVMVF9RVUVSWSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxNeVF1ZXJ5LCBNeURhdGFTb3VyY2VPcHRpb25zPiB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPE15RGF0YVNvdXJjZU9wdGlvbnM+KSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gIH1cblxuICBnZXREZWZhdWx0UXVlcnkoXzogQ29yZUFwcCk6IFBhcnRpYWw8TXlRdWVyeT4ge1xuICAgIHJldHVybiBERUZBVUxUX1FVRVJZO1xuICB9XG5cbiAgYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyhxdWVyeTogTXlRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IE15UXVlcnkge1xuICAgIGNvbnN0IHRleHQgPSBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UocXVlcnkucXVlcnlUZXh0IHx8ICcnLCBzY29wZWRWYXJzKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVlcnksXG4gICAgICBzZXJ2aWNlczogW3RleHRdLCAvLyBzZW1wcmUgY29tbyBhcnJheVxuICAgICAgcXVlcnlUZXh0OiB0ZXh0LFxuICAgICAgLy8gU2UgcXVpc2VyIHF1ZSBvIG5vbWUgZG8gc2VydmnDp28gcG9zc2EgdGVyIHZhcmnDoXZlaXMsIGRlc2NvbWVudGU6XG4gICAgICAvLyBzZXJ2aWNlczogcXVlcnkuc2VydmljZXMubWFwKChzKSA9PiBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2Uocywgc2NvcGVkVmFycykpLFxuICAgIH07XG4gIH1cblxuICBmaWx0ZXJRdWVyeShxdWVyeTogTXlRdWVyeSk6IGJvb2xlYW4ge1xuICAgIC8vIFPDsyBleGVjdXRhIHNlIHRpdmVyIHBlbG8gbWVub3MgMSBzZXJ2acOnbyBzZWxlY2lvbmFkb1xuICAgIHJldHVybiBxdWVyeS5zZXJ2aWNlcyAmJiBxdWVyeS5zZXJ2aWNlcy5sZW5ndGggPiAwO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0VGVtcGxhdGVTcnYiLCJERUZBVUxUX1FVRVJZIiwiRGF0YVNvdXJjZSIsImdldERlZmF1bHRRdWVyeSIsIl8iLCJhcHBseVRlbXBsYXRlVmFyaWFibGVzIiwicXVlcnkiLCJzY29wZWRWYXJzIiwidGV4dCIsInJlcGxhY2UiLCJxdWVyeVRleHQiLCJzZXJ2aWNlcyIsImZpbHRlclF1ZXJ5IiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZVNldHRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./datasource.ts\n");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plugin: () => (/* binding */ plugin)\n/* harmony export */ });\n/* harmony import */ var grafana_public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana-public-path */ \"./node_modules/grafana-public-path.js\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ \"@grafana/data\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource */ \"./datasource.ts\");\n/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ConfigEditor */ \"./components/ConfigEditor.tsx\");\n/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/QueryEditor */ \"./components/QueryEditor.tsx\");\n/*** IMPORTS FROM imports-loader ***/\n\n\n\n\n\n\nconst plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.DataSource).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_4__.QueryEditor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNQO0FBQ2U7QUFDRjtBQUdoRCxNQUFNSSxTQUFTLElBQUlKLDJEQUFnQkEsQ0FBMkNDLG1EQUFVQSxFQUM1RkksZUFBZSxDQUFDSCxrRUFBWUEsRUFDNUJJLGNBQWMsQ0FBQ0gsZ0VBQVdBLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXVyb2FseC1ncmFmcGFuZS1kYXRhc291cmNlLy4vbW9kdWxlLnRzP2MyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IE15UXVlcnksIE15RGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luPERhdGFTb3VyY2UsIE15UXVlcnksIE15RGF0YVNvdXJjZU9wdGlvbnM+KERhdGFTb3VyY2UpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpO1xuIl0sIm5hbWVzIjpbIkRhdGFTb3VyY2VQbHVnaW4iLCJEYXRhU291cmNlIiwiQ29uZmlnRWRpdG9yIiwiUXVlcnlFZGl0b3IiLCJwbHVnaW4iLCJzZXRDb25maWdFZGl0b3IiLCJzZXRRdWVyeUVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./module.ts\n");

/***/ }),

/***/ "./node_modules/grafana-public-path.js":
/*!*********************************************!*\
  !*** ./node_modules/grafana-public-path.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var amd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amd-module */ \"amd-module\");\n/* harmony import */ var amd_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amd_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n__webpack_require__.p =\n  (amd_module__WEBPACK_IMPORTED_MODULE_0___default()) && (amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri)\n    ? amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri.slice(0, amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri.lastIndexOf('/') + 1)\n    : 'public/plugins/mauroalx-grafpane-datasource/';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1wdWJsaWMtcGF0aC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ3VDOztBQUV2QyxxQkFBdUI7QUFDdkIsRUFBRSxtREFBYSxJQUFJLHVEQUFpQjtBQUNwQyxNQUFNLHFEQUFpQixVQUFVLHFEQUFpQjtBQUNsRCIsInNvdXJjZXMiOlsid2VicGFjazovL21hdXJvYWx4LWdyYWZwYW5lLWRhdGFzb3VyY2UvLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1wdWJsaWMtcGF0aC5qcz85M2UzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGFtZE1ldGFNb2R1bGUgZnJvbSAnYW1kLW1vZHVsZSc7XG5cbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID1cbiAgYW1kTWV0YU1vZHVsZSAmJiBhbWRNZXRhTW9kdWxlLnVyaVxuICAgID8gYW1kTWV0YU1vZHVsZS51cmkuc2xpY2UoMCwgYW1kTWV0YU1vZHVsZS51cmkubGFzdEluZGV4T2YoJy8nKSArIDEpXG4gICAgOiAncHVibGljL3BsdWdpbnMvbWF1cm9hbHgtZ3JhZnBhbmUtZGF0YXNvdXJjZS8nO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/grafana-public-path.js\n");

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_QUERY: () => (/* binding */ DEFAULT_QUERY)\n/* harmony export */ });\nconst DEFAULT_QUERY = {\n    constant: 6.5,\n    queryText: ''\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBU08sTUFBTUEsZ0JBQWtDO0lBQzdDQyxVQUFVO0lBQ1ZDLFdBQVc7QUFDYixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF1cm9hbHgtZ3JhZnBhbmUtZGF0YXNvdXJjZS8uL3R5cGVzLnRzPzkwY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZUpzb25EYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhUXVlcnkgfSBmcm9tICdAZ3JhZmFuYS9zY2hlbWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE15UXVlcnkgZXh0ZW5kcyBEYXRhUXVlcnkge1xuICBxdWVyeVRleHQ/OiBzdHJpbmc7XG4gIGNvbnN0YW50OiBudW1iZXI7XG4gIHNlcnZpY2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUVVFUlk6IFBhcnRpYWw8TXlRdWVyeT4gPSB7XG4gIGNvbnN0YW50OiA2LjUsXG4gIHF1ZXJ5VGV4dDogJycsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIFRpbWU6IG51bWJlcjtcbiAgVmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhU291cmNlUmVzcG9uc2Uge1xuICBkYXRhcG9pbnRzOiBEYXRhUG9pbnRbXTtcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgb3B0aW9ucyBjb25maWd1cmVkIGZvciBlYWNoIERhdGFTb3VyY2UgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNeURhdGFTb3VyY2VPcHRpb25zIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgcGF0aD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBWYWx1ZSB0aGF0IGlzIHVzZWQgaW4gdGhlIGJhY2tlbmQsIGJ1dCBuZXZlciBzZW50IG92ZXIgSFRUUCB0byB0aGUgZnJvbnRlbmRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNeVNlY3VyZUpzb25EYXRhIHtcbiAgYXBpS2V5Pzogc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkRFRkFVTFRfUVVFUlkiLCJjb25zdGFudCIsInF1ZXJ5VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./types.ts\n");

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "amd-module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_amd_module__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "public/plugins/mauroalx-grafpane-datasource/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;