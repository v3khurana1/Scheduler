(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-test-case/add-test-case.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-test-case/add-test-case.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10ZXN0LWNhc2UvYWRkLXRlc3QtY2FzZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-test-case/add-test-case.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-test-case/add-test-case.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-test-case works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/add-test-case/add-test-case.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-test-case/add-test-case.component.ts ***!
  \**********************************************************/
/*! exports provided: AddTestCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTestCaseComponent", function() { return AddTestCaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddTestCaseComponent = /** @class */ (function () {
    function AddTestCaseComponent() {
    }
    AddTestCaseComponent.prototype.ngOnInit = function () {
    };
    AddTestCaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-test-case',
            template: __webpack_require__(/*! ./add-test-case.component.html */ "./src/app/add-test-case/add-test-case.component.html"),
            styles: [__webpack_require__(/*! ./add-test-case.component.css */ "./src/app/add-test-case/add-test-case.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddTestCaseComponent);
    return AddTestCaseComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toll_list_toll_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toll-list/toll-list.component */ "./src/app/toll-list/toll-list.component.ts");
/* harmony import */ var _select_testcases_select_testcases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-testcases/select-testcases.component */ "./src/app/select-testcases/select-testcases.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "./src/app/loading-page/loading-page.component.ts");
/* harmony import */ var _add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-test-case/add-test-case.component */ "./src/app/add-test-case/add-test-case.component.ts");
/* harmony import */ var _display_testcases_display_testcases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-testcases/display-testcases.component */ "./src/app/display-testcases/display-testcases.component.ts");









var routes = [
    { path: 'incoming-tolls', component: _toll_list_toll_list_component__WEBPACK_IMPORTED_MODULE_3__["TollListComponent"] },
    { path: 'incoming-tolls/selectTestSuite', component: _select_testcases_select_testcases_component__WEBPACK_IMPORTED_MODULE_4__["SelectTestcasesComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'selectTestSuite', component: _select_testcases_select_testcases_component__WEBPACK_IMPORTED_MODULE_4__["SelectTestcasesComponent"] },
    { path: 'incoming-tolls/selectTestSuite/xmlCreation', component: _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_6__["LoadingPageComponent"] },
    { path: 'addTestCase', component: _add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_7__["AddTestCaseComponent"] },
    { path: 'categories', component: _display_testcases_display_testcases_component__WEBPACK_IMPORTED_MODULE_8__["DisplayTestcasesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{ title }}\r\n  </h1>\r\n\r\n</div>\r\n<app-subheader-navigation></app-subheader-navigation>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'UI Framework List';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _subheader_navigation_subheader_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subheader-navigation/subheader-navigation.component */ "./src/app/subheader-navigation/subheader-navigation.component.ts");
/* harmony import */ var _toll_list_toll_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toll-list/toll-list.component */ "./src/app/toll-list/toll-list.component.ts");
/* harmony import */ var _select_testcases_select_testcases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-testcases/select-testcases.component */ "./src/app/select-testcases/select-testcases.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mapping_tc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapping-tc.service */ "./src/app/mapping-tc.service.ts");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "./src/app/loading-page/loading-page.component.ts");
/* harmony import */ var _xml_creation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./xml-creation.service */ "./src/app/xml-creation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-test-case/add-test-case.component */ "./src/app/add-test-case/add-test-case.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _testcase_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./testcase.service */ "./src/app/testcase.service.ts");
/* harmony import */ var _display_testcases_display_testcases_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./display-testcases/display-testcases.component */ "./src/app/display-testcases/display-testcases.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _subheader_navigation_subheader_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SubheaderNavigationComponent"],
                _toll_list_toll_list_component__WEBPACK_IMPORTED_MODULE_6__["TollListComponent"],
                _select_testcases_select_testcases_component__WEBPACK_IMPORTED_MODULE_7__["SelectTestcasesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_11__["LoadingPageComponent"],
                _add_test_case_add_test_case_component__WEBPACK_IMPORTED_MODULE_14__["AddTestCaseComponent"],
                _display_testcases_display_testcases_component__WEBPACK_IMPORTED_MODULE_18__["DisplayTestcasesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            ],
            providers: [_mapping_tc_service__WEBPACK_IMPORTED_MODULE_10__["MappingTCService"], _xml_creation_service__WEBPACK_IMPORTED_MODULE_12__["XmlCreationService"], _testcase_service__WEBPACK_IMPORTED_MODULE_17__["TestcaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-testcases/display-testcases.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/display-testcases/display-testcases.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\r\n    display: none;\r\n  }\r\n  \r\n  .example-tree ul,\r\n  .example-tree li {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    list-style-type: none;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS10ZXN0Y2FzZXMvZGlzcGxheS10ZXN0Y2FzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktdGVzdGNhc2VzL2Rpc3BsYXktdGVzdGNhc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS10cmVlIHVsLFxyXG4gIC5leGFtcGxlLXRyZWUgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/display-testcases/display-testcases.component.html":
/*!********************************************************************!*\
  !*** ./src/app/display-testcases/display-testcases.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n      <button mat-icon-button disabled></button>\r\n      <mat-checkbox class=\"checklist-leaf-node\"\r\n                    [checked]=\"checklistSelection.isSelected(node)\"\r\n                    (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n    </mat-tree-node>\r\n  \r\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n      <button mat-icon-button matTreeNodeToggle\r\n              [attr.aria-label]=\"'toggle ' + node.filename\">\r\n        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n        </mat-icon>\r\n      </button>\r\n      <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                    [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                    (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n    </mat-tree-node>\r\n  </mat-tree>\r\n\r\n  \r\n  <!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n      Use of this source code is governed by an MIT-style license that\r\n      can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/display-testcases/display-testcases.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/display-testcases/display-testcases.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase, DisplayTestcasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTestcasesComponent", function() { return DisplayTestcasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-list.service */ "./src/app/product-list.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");







/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

var finalArray = {};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(finalArray, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    ChecklistDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

var DisplayTestcasesComponent = /** @class */ (function () {
    function DisplayTestcasesComponent(productListService, database) {
        var _this = this;
        this.productListService = productListService;
        this.database = database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true /* multiple */);
        this.categoryArray = [];
        this.modArray = [];
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.findUniqueCategory = function () {
            var map = new Map();
            for (var _i = 0, _a = this.dataList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!map.has(item.categoryName)) {
                    map.set(item.categoryName, true);
                    this.categoryArray.push(item.categoryName);
                    // finalArray.push({ [item.categoryName]: {} })
                    finalArray[item.categoryName] = {};
                }
            }
            console.log(finalArray);
            this.findUniqueModule();
        };
        this.findUniqueModule = function () {
            var _this = this;
            var map = new Map();
            var categoryName = Object.keys(finalArray);
            console.log(categoryName);
            categoryName.forEach(function (cat) {
                _this.dataList.forEach(function (item) {
                    if (item.categoryName == cat) {
                        if (!map.has(item.moduleName)) {
                            map.set(item.moduleName, true);
                            finalArray[cat][item.moduleName] = [];
                        }
                    }
                });
            });
            console.log(finalArray);
            this.findTestCase();
        };
        this.findTestCase = function () {
            var _this = this;
            var categoryName = Object.keys(finalArray);
            categoryName.forEach(function (cat) {
                var moduleName = Object.keys(finalArray[cat]);
                moduleName.forEach(function (modName) {
                    _this.dataList.forEach(function (item) {
                        if (item.moduleName == modName) {
                            finalArray[cat][item.moduleName].push(item.testCaseName);
                        }
                    });
                });
            });
            console.log("After testcase fetch");
            console.log(finalArray);
        };
        this.checkLoading = false;
    }
    /** Whether all the descendants of the node are selected */
    DisplayTestcasesComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    DisplayTestcasesComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    DisplayTestcasesComponent.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    DisplayTestcasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productListService.importList().subscribe(function (data) {
            _this.dataList = data,
                _this.findUniqueCategory();
        });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    DisplayTestcasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-testcases',
            template: __webpack_require__(/*! ./display-testcases.component.html */ "./src/app/display-testcases/display-testcases.component.html"),
            providers: [ChecklistDatabase],
            styles: [__webpack_require__(/*! ./display-testcases.component.css */ "./src/app/display-testcases/display-testcases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_list_service__WEBPACK_IMPORTED_MODULE_2__["ProductListService"], ChecklistDatabase])
    ], DisplayTestcasesComponent);
    return DisplayTestcasesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card{\r\n    height: 150px;\r\n    width: 300px;\r\n   background-color:gray\r\n}\r\n\r\n.textalign{\r\n    padding-top: 20%;\r\n    text-align: center;\r\n    color: black\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtHQUNiO0FBQ0g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXlcclxufVxyXG5cclxuLnRleHRhbGlnbntcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2tcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"200px\">\r\n  <div *ngFor=\"let product of ProductList\">\r\n  <mat-grid-tile  (click)=\"selectTestCase(product)\" routerLink= \"/categories\"> \r\n    <mat-card class=\"example-card\">\r\n      <mat-card-content class=\"textalign\">\r\n      {{product.name}}\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-grid-tile> \r\n</div> \r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _testcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../testcase.service */ "./src/app/testcase.service.ts");
/* harmony import */ var _product_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-list.service */ "./src/app/product-list.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(testCaseService, productListService) {
        this.testCaseService = testCaseService;
        this.productListService = productListService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productListService.getApplicationList().subscribe(function (data) { _this.ProductList = data; });
    };
    HomeComponent.prototype.selectTestCase = function (productName) {
        this.productListService.getData(productName);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_testcase_service__WEBPACK_IMPORTED_MODULE_2__["TestcaseService"],
            _product_list_service__WEBPACK_IMPORTED_MODULE_3__["ProductListService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading-page/loading-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmctcGFnZS9sb2FkaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loading-page/loading-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loading-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/loading-page/loading-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageComponent", function() { return LoadingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _xml_creation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xml-creation.service */ "./src/app/xml-creation.service.ts");



var LoadingPageComponent = /** @class */ (function () {
    function LoadingPageComponent(xmlCreation) {
        this.xmlCreation = xmlCreation;
    }
    LoadingPageComponent.prototype.ngOnInit = function () {
        this.createtestNGXML();
    };
    LoadingPageComponent.prototype.createtestNGXML = function () {
        // this.xmlCreation.createXML();
        this.xmlCreation.fetchData()
            .subscribe(function (data) {
            console.log("Data received");
            console.log(data);
            console.log(JSON.stringify(data));
        });
    };
    LoadingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-page',
            template: __webpack_require__(/*! ./loading-page.component.html */ "./src/app/loading-page/loading-page.component.html"),
            styles: [__webpack_require__(/*! ./loading-page.component.css */ "./src/app/loading-page/loading-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_xml_creation_service__WEBPACK_IMPORTED_MODULE_2__["XmlCreationService"]])
    ], LoadingPageComponent);
    return LoadingPageComponent;
}());



/***/ }),

/***/ "./src/app/mapping-tc.service.ts":
/*!***************************************!*\
  !*** ./src/app/mapping-tc.service.ts ***!
  \***************************************/
/*! exports provided: displayTC, MappingTCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTC", function() { return displayTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingTCService", function() { return MappingTCService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _select_testcases_SampleTestcasesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-testcases/SampleTestcasesList */ "./src/app/select-testcases/SampleTestcasesList.ts");



var displayTC = /** @class */ (function () {
    function displayTC() {
    }
    displayTC = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], displayTC);
    return displayTC;
}());

var MappingTCService = /** @class */ (function () {
    function MappingTCService() {
        this.tempArray = [];
        this.mappedTC = [];
        this.selectedTolls = [];
    }
    MappingTCService.prototype.getSelectedTolls = function (selectedTollsUI) {
        if (this.selectedTolls.length > 0) {
            this.clearArray(this.selectedTolls);
        }
        this.selectedTolls = selectedTollsUI;
    };
    MappingTCService.prototype.mapTestcases = function (tollList) {
        this.clearArray(this.tempArray);
        tollList.forEach(function (toll) {
            _select_testcases_SampleTestcasesList__WEBPACK_IMPORTED_MODULE_2__["TestCaseList"].forEach(function (tc) {
                tc.tollDependency.forEach(function (ele) {
                    if (ele.TName == toll.tollName) {
                        toll.testCase.push(tc);
                    }
                });
            });
        });
        return tollList;
    };
    MappingTCService.prototype.exportSelectedTolls = function () {
        return this.selectedTolls;
    };
    MappingTCService.prototype.clearArray = function (arr) {
        arr.splice(0, arr.length);
    };
    return MappingTCService;
}());



/***/ }),

/***/ "./src/app/product-list.service.ts":
/*!*****************************************!*\
  !*** ./src/app/product-list.service.ts ***!
  \*****************************************/
/*! exports provided: ProductListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListService", function() { return ProductListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductListService = /** @class */ (function () {
    function ProductListService(http) {
        this.http = http;
        this.returnURL = "http://localhost:3000/api/";
    }
    ProductListService.prototype.getApplicationList = function () {
        return this.http.get(this.returnURL + "getApplicationList");
    };
    ProductListService.prototype.getData = function (ProductName) {
        this.categoryList = this.http.post(this.returnURL + "getData", ProductName);
    };
    ProductListService.prototype.importList = function () {
        console.log("after Import");
        console.log(this.categoryList);
        return this.categoryList;
    };
    ProductListService.prototype.exportList = function (treeData) {
        console.log(treeData);
        this.TestCaseTreeList = treeData;
    };
    ProductListService.prototype.importTreeData = function () {
        console.log(this.TestCaseTreeList);
        return this.TestCaseTreeList;
    };
    ProductListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductListService);
    return ProductListService;
}());



/***/ }),

/***/ "./src/app/select-testcases/SampleTestcasesList.ts":
/*!*********************************************************!*\
  !*** ./src/app/select-testcases/SampleTestcasesList.ts ***!
  \*********************************************************/
/*! exports provided: testCases, TestCaseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCases", function() { return testCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCaseList", function() { return TestCaseList; });
var testCases = /** @class */ (function () {
    function testCases() {
    }
    return testCases;
}());

var tollList = /** @class */ (function () {
    function tollList() {
    }
    return tollList;
}());
var TestCaseList = [
    { id: 1, name: 'TC1', checked: false, tollDependency: [{ TName: 'Toll 2' }, { TName: 'Toll 1' }] },
    { id: 2, name: 'TC2', checked: false, tollDependency: [{ TName: 'Toll 3' }, { TName: 'Toll 2' }] },
    { id: 3, name: 'TC3', checked: false, tollDependency: [{ TName: 'Toll 4' }, { TName: 'Toll 2' }] },
    { id: 4, name: 'TC4', checked: false, tollDependency: [{ TName: 'Toll 1' }, { TName: 'Toll 4' }] },
];


/***/ }),

/***/ "./src/app/select-testcases/select-testcases.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/select-testcases/select-testcases.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC10ZXN0Y2FzZXMvc2VsZWN0LXRlc3RjYXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/select-testcases/select-testcases.component.html":
/*!******************************************************************!*\
  !*** ./src/app/select-testcases/select-testcases.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <form id = \"selectSuite\" >\r\n        <ul>\r\n            <li>\r\n                <input type=\"checkbox\" id = \"SelectAll\" (click) = \"selectAll()\">\r\n                <label id = \"SelectAll\" for = \"SelectAll\">Select All Testcases</label><br>\r\n            </li>\r\n\r\n            <li *ngFor = \"let tcObjects of displayTC\" >\r\n                    <ul>\r\n                        <li *ngFor = \"let tc of tcObjects.testCase\">\r\n                            <input type=\"checkbox\" id = {{tc.id}} (click) = \"toggle(tcObjects, tc.id)\">\r\n                            <label id = {{tc.id}} for = {{tc.name}}>{{tc.name}}</label>\r\n                               \r\n                        </li>\r\n                        <p>{{tcObjects.line}}</p> \r\n                    </ul>\r\n                    \r\n            </li>\r\n       \r\n           <input type = \"submit\" value=\"Submit selected tc\" (click) = \"createXml()\" routerLink = '/incoming-tolls/selectTestSuite/xmlCreation' >\r\n       \r\n        </ul>\r\n   </form>\r\n    \r\n   </div>\r\n "

/***/ }),

/***/ "./src/app/select-testcases/select-testcases.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/select-testcases/select-testcases.component.ts ***!
  \****************************************************************/
/*! exports provided: SelectTestcasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTestcasesComponent", function() { return SelectTestcasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mapping_tc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapping-tc.service */ "./src/app/mapping-tc.service.ts");
/* harmony import */ var _xml_creation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xml-creation.service */ "./src/app/xml-creation.service.ts");




var SelectTestcasesComponent = /** @class */ (function () {
    function SelectTestcasesComponent(mappingService, xmlCreation) {
        this.mappingService = mappingService;
        this.xmlCreation = xmlCreation;
        this.selectedTCs = [];
    }
    SelectTestcasesComponent.prototype.ngOnInit = function () {
        this.selectedTCs = [];
        this.displayTC = [];
        if (this.displayTC.length > 0) {
            this.clearArray(this.displayTC);
        }
        this.getMappedList();
        this.displayTC.forEach(function (tcObject) {
            tcObject.testCase.forEach(function (tc) {
                tc.checked = false;
            });
        });
    };
    SelectTestcasesComponent.prototype.clearArray = function (arr) {
        arr.splice(0, arr.length);
    };
    SelectTestcasesComponent.prototype.getMappedList = function () {
        var _this = this;
        this.mappingService.exportSelectedTolls().map(function (toll) {
            _this.displayTC.push({ tollName: toll, testCase: [], line: 'for toll ' + toll });
        });
        this.displayTC = this.mappingService.mapTestcases(this.displayTC);
    };
    SelectTestcasesComponent.prototype.toggle = function (tcObject, id) {
        this.index = this.displayTC.indexOf(tcObject);
        console.log("index " + tcObject.tollName + "  " + this.index);
        this.displayTC[this.index].testCase.forEach(function (ele) {
            if (ele.id == id) {
                if (!ele.checked) {
                    ele.checked = true;
                    console.log("changed to true on toggle ");
                    console.log(ele);
                }
                else {
                    ele.checked = false;
                    console.log("changed to false on toggle ");
                    console.log(ele);
                }
            }
        });
        console.log(tcObject);
        console.log("display tc after toggle");
        console.log(this.displayTC);
    };
    SelectTestcasesComponent.prototype.submittestCases = function () {
        var _this = this;
        this.clearArray(this.selectedTCs);
        console.log("after selection");
        console.log(this.displayTC);
        this.displayTC.forEach(function (element) {
            element.testCase.forEach(function (e) {
                if (_this.checkStatus(e)) {
                    _this.selectedTCs.push(e.name);
                }
            });
        });
        console.log(this.selectedTCs);
    };
    SelectTestcasesComponent.prototype.checkStatus = function (ele) {
        return ele.checked;
    };
    SelectTestcasesComponent.prototype.selectAll = function () {
        this.displayTC.forEach(function (element) {
            element.checked = true;
        });
    };
    SelectTestcasesComponent.prototype.createXml = function () {
        this.submittestCases();
        if (this.selectedTCs.length < 1) {
            console.log("No testcases selected");
        }
        else {
            console.log("Create  XML file for testNG suite");
            this.xmlCreation.exportData(this.selectedTCs);
        }
    };
    SelectTestcasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-testcases',
            template: __webpack_require__(/*! ./select-testcases.component.html */ "./src/app/select-testcases/select-testcases.component.html"),
            styles: [__webpack_require__(/*! ./select-testcases.component.css */ "./src/app/select-testcases/select-testcases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mapping_tc_service__WEBPACK_IMPORTED_MODULE_2__["MappingTCService"],
            _xml_creation_service__WEBPACK_IMPORTED_MODULE_3__["XmlCreationService"]])
    ], SelectTestcasesComponent);
    return SelectTestcasesComponent;
}());



/***/ }),

/***/ "./src/app/subheader-navigation/subheader-navigation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/subheader-navigation/subheader-navigation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul#menu {\r\n    text-align: center;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333333;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n  \r\n  li {\r\n    text-align: center;\r\n    float: left;\r\n  }\r\n  \r\n  li a {\r\n    \r\n    color: white;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  li a:hover {\r\n    background-color: #111111;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViaGVhZGVyLW5hdmlnYXRpb24vc3ViaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHdCQUFnQjtJQUFoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBOztJQUVFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3N1YmhlYWRlci1uYXZpZ2F0aW9uL3N1YmhlYWRlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCNtZW51IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBsaSBhIHtcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/subheader-navigation/subheader-navigation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/subheader-navigation/subheader-navigation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id = \"menu\">\r\n    <li >\r\n        <h2><a routerLink= \"home\">Home</a></h2>\r\n    </li>    \r\n  <li >\r\n    <h2><a id = \"incoming-tolls\" routerLink= \"/incoming-tolls\">Tolls</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a routerLink= \"/selectTestSuite\" >Testcases</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a routerLink=\"/addTestCase\" >Add Test Case</a></h2>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/subheader-navigation/subheader-navigation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/subheader-navigation/subheader-navigation.component.ts ***!
  \************************************************************************/
/*! exports provided: SubheaderNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheaderNavigationComponent", function() { return SubheaderNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubheaderNavigationComponent = /** @class */ (function () {
    function SubheaderNavigationComponent() {
    }
    SubheaderNavigationComponent.prototype.ngOnInit = function () {
    };
    SubheaderNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subheader-navigation',
            template: __webpack_require__(/*! ./subheader-navigation.component.html */ "./src/app/subheader-navigation/subheader-navigation.component.html"),
            styles: [__webpack_require__(/*! ./subheader-navigation.component.css */ "./src/app/subheader-navigation/subheader-navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubheaderNavigationComponent);
    return SubheaderNavigationComponent;
}());



/***/ }),

/***/ "./src/app/testcase.service.ts":
/*!*************************************!*\
  !*** ./src/app/testcase.service.ts ***!
  \*************************************/
/*! exports provided: TestcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcaseService", function() { return TestcaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestcaseService = /** @class */ (function () {
    function TestcaseService(http) {
        this.http = http;
        this.returnURL = "http://localhost:3000/api/scheduler";
    }
    TestcaseService.prototype.getTestCase = function (ProductName) {
        return this.http.post(this.returnURL, ProductName);
    };
    TestcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestcaseService);
    return TestcaseService;
}());



/***/ }),

/***/ "./src/app/toll-list/sampleTolls.ts":
/*!******************************************!*\
  !*** ./src/app/toll-list/sampleTolls.ts ***!
  \******************************************/
/*! exports provided: TOLLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOLLS", function() { return TOLLS; });
var TOLLStructure = /** @class */ (function () {
    function TOLLStructure() {
    }
    return TOLLStructure;
}());
var TOLLS = [
    { id: 'TID1', name: 'Toll 1', checked: false },
    { id: 'TID2', name: 'Toll 2', checked: false },
    { id: 'TID3', name: 'Toll 3', checked: false },
    { id: 'TID4', name: 'Toll 4', checked: false }
];


/***/ }),

/***/ "./src/app/toll-list/toll-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/toll-list/toll-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#selectCheckboxes{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9sbC1saXN0L3RvbGwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RvbGwtbGlzdC90b2xsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWxlY3RDaGVja2JveGVze1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/toll-list/toll-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/toll-list/toll-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-app = \"app\" ng-controller = \"selectTolls\">\r\n <form id = \"selectTolls\" name = \"selectTolls\">\r\n    <ul>\r\n        <li>\r\n            <input type=\"checkbox\" name = \"selectAll\" id = \"SelectAll\" (change) = \"selectAll()\" ng-model = \"all\">\r\n            <label id = \"SelectAll\" for = \"SelectAll\">Select All tolls</label><br>\r\n        </li>\r\n\r\n    <li *ngFor = \"let toll of tolls\" >\r\n        <input type=\"checkbox\" id = {{toll.id}} (click) = \"toggle(toll)\" [(checked)] = \"all\">\r\n        <label id = {{toll.id}} for = {{toll.name}}>{{toll.name}}</label><br>\r\n    </li>\r\n        <input type = \"submit\" value=\"Submit selected values\"  (click)=\"submitTolls()\" routerLink= \"/incoming-tolls/selectTestSuite\" >\r\n    </ul>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/toll-list/toll-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/toll-list/toll-list.component.ts ***!
  \**************************************************/
/*! exports provided: TollListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TollListComponent", function() { return TollListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sampleTolls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampleTolls */ "./src/app/toll-list/sampleTolls.ts");
/* harmony import */ var _mapping_tc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mapping-tc.service */ "./src/app/mapping-tc.service.ts");




var TollListComponent = /** @class */ (function () {
    function TollListComponent(mappingService) {
        this.mappingService = mappingService;
        this.all = false;
        this.tolls = _sampleTolls__WEBPACK_IMPORTED_MODULE_2__["TOLLS"];
        this.selectedTolls = [];
        this.mapTestCases = [];
        this.emptyCheckboxes = false;
    }
    TollListComponent.prototype.ngOnInit = function () {
        this.tolls.forEach(function (element) {
            element.checked = false;
        });
    };
    TollListComponent.prototype.submitTolls = function () {
        var _this = this;
        this.tolls.forEach(function (element) {
            if (element.checked) {
                _this.selectedTolls.push(element.name);
            }
        });
        console.log(this.selectedTolls);
        this.mappingService.getSelectedTolls(this.selectedTolls);
    };
    TollListComponent.prototype.toggle = function (ele) {
        if (!ele.checked) {
            ele.checked = true;
        }
        else {
            ele.checked = false;
        }
    };
    TollListComponent.prototype.checkStatus = function (ele) {
        return ele.checked;
    };
    TollListComponent.prototype.selectAll = function () {
        this.all = !this.all;
        if (this.all) {
            this.tolls.forEach(function (element) {
                element.checked = true;
            });
        }
        else {
            this.tolls.forEach(function (element) {
                element.checked = false;
            });
        }
    };
    TollListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toll-list',
            template: __webpack_require__(/*! ./toll-list.component.html */ "./src/app/toll-list/toll-list.component.html"),
            styles: [__webpack_require__(/*! ./toll-list.component.css */ "./src/app/toll-list/toll-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mapping_tc_service__WEBPACK_IMPORTED_MODULE_3__["MappingTCService"]])
    ], TollListComponent);
    return TollListComponent;
}());



/***/ }),

/***/ "./src/app/xml-creation.service.ts":
/*!*****************************************!*\
  !*** ./src/app/xml-creation.service.ts ***!
  \*****************************************/
/*! exports provided: XmlCreationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlCreationService", function() { return XmlCreationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_xmlbuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/xmlbuilder */ "./node_modules/xmlbuilder/lib/index.js");
/* harmony import */ var _node_modules_xmlbuilder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_xmlbuilder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var XmlCreationService = /** @class */ (function () {
    function XmlCreationService(http) {
        this.http = http;
        this.returnURL = "http://localhost:3000/api/scheduler";
    }
    XmlCreationService.prototype.exportData = function (selectedData) {
        this.dataForXML = selectedData;
    };
    XmlCreationService.prototype.createXML = function () {
        this.xml = _node_modules_xmlbuilder__WEBPACK_IMPORTED_MODULE_3__["create"]('suite', { 'type': 'Suite', 'encoding': 'UTF-8' })
            .ele('test', { 'name': 'Test' })
            .ele('classes');
        var classTag = this.xml;
        this.dataForXML.forEach(function (ele) {
            classTag.ele('class', { 'name': ele });
        });
        console.log("final xml");
        this.xml = this.xml.end({ pretty: true });
        console.log(this.xml);
        var blob = new Blob([this.xml], { type: "text/plain;charset=utf-8" });
        _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, "testNG.xml");
    };
    XmlCreationService.prototype.fetchData = function () {
        console.log("Calling server api");
        return this.http.get(this.returnURL);
    };
    XmlCreationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], XmlCreationService);
    return XmlCreationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nidhi.joshi\Documents\GitHub\Scheduler\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map