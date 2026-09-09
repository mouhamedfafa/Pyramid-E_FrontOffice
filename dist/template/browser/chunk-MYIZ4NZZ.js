import {
  MatPaginatorModule
} from "./chunk-YNV3DQRN.js";
import "./chunk-TQ6WKIUR.js";
import {
  CustomPaginationComponent
} from "./chunk-ZJKM6ASN.js";
import {
  MatSortModule
} from "./chunk-BXMLSR5P.js";
import {
  PaginationService
} from "./chunk-YDGV2JUC.js";
import "./chunk-PNUN5GR5.js";
import {
  MatTableDataSource,
  MatTableModule
} from "./chunk-ETBPMBNN.js";
import {
  MatSelectModule
} from "./chunk-4LP4I6E4.js";
import "./chunk-HRYSPOMT.js";
import "./chunk-EF5IHDNU.js";
import "./chunk-HOBROW2X.js";
import "./chunk-XQI6XDX7.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-2UN5Q7KH.js";
import "./chunk-OLAFOK7F.js";
import {
  BsDatepickerModule
} from "./chunk-GRVKPV72.js";
import "./chunk-XBFY2PKJ.js";
import "./chunk-7THY2SNH.js";
import {
  DataService
} from "./chunk-D4NYV26W.js";
import {
  routes
} from "./chunk-DN5YN62E.js";
import {
  FormsModule
} from "./chunk-GE23GOQB.js";
import {
  Router
} from "./chunk-WU2IX7JC.js";
import "./chunk-IN7OGW6T.js";
import "./chunk-YONGDJMG.js";
import {
  CommonModule
} from "./chunk-O72RKWZB.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject
} from "./chunk-F67U43FE.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-payouts/instructor-payouts.component.ts
var InstructorPayoutsComponent = class _InstructorPayoutsComponent {
  data;
  router;
  pagination;
  routes = routes;
  // pagination variables
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getPayout().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructor_payouts) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPayout().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  searchData(value) {
    if (value == "") {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
    }
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  static \u0275fac = function InstructorPayoutsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorPayoutsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorPayoutsComponent, selectors: [["app-instructor-payouts"]], decls: 0, vars: 0, template: function InstructorPayoutsComponent_Template(rf, ctx) {
  }, dependencies: [CommonModule, MatTableModule, MatSortModule, FormsModule, MatPaginatorModule, MatSelectModule, BsDatepickerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorPayoutsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-payouts", imports: [CommonModule, MatTableModule, MatSortModule, FormsModule, MatPaginatorModule, MatSelectModule, BsDatepickerModule, CustomPaginationComponent], template: "" }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorPayoutsComponent, { className: "InstructorPayoutsComponent", filePath: "app/features/instructor/instructor-payouts/instructor-payouts.component.ts", lineNumber: 23 });
})();
export {
  InstructorPayoutsComponent
};
//# sourceMappingURL=chunk-MYIZ4NZZ.js.map
