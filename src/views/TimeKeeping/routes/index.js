import React from "react";

// import CalculateKeepingPage from "../CalculateKeepingPage";
// import TimeKeepingDayPage from "../TimeKeepingDayPage";
// import TimeKeepingGroupPage from "../TimeKeepingGroupPage";
// import LeaveDayPage from "../LeaveDayPage";

const CalculateKeepingPage = React.lazy(() =>
  import("../CalculateKeepingPage")
);
const TimeKeepingDayPage = React.lazy(() => import("../TimeKeepingDayPage"));
const TimeKeepingGroupPage = React.lazy(() =>
  import("../TimeKeepingGroupPage")
);
const LeaveDayPage = React.lazy(() => import("../LeaveDayPage"));

// const DanhSachNhanVien = React.lazy(() =>
//   import("../DuLieuNhanVien/DanhSachNhanVien")
// );
// const NhanVienNghiViec = React.lazy(() =>
//   import("../DuLieuNhanVien/NhanVienNghiViec")
// );
// const NhanVienNghiHuu = React.lazy(() =>
//   import("../DuLieuNhanVien/NhanVienNghiHuu")
// );
// const TrinhDoChuyenMon = React.lazy(() =>
//   import("../DuLieuNhanVien/TrinhDoChuyenMon")
// );
// const NguoiThan = React.lazy(() => import("../DuLieuNhanVien/NguoiThan"));

const TimeKeepingRoute = [
  {
    path: "/cham-cong",
    name: "Chấm công",
    exact: true,
    component: CalculateKeepingPage,
  },
  {
    path: "/cham-cong/tong-hop-cong",
    name: "Tổng hợp công",
    exact: true,
    component: CalculateKeepingPage,
  },
  {
    path: "/cham-cong/du-lieu-ngay-cong",
    name: "Dữ liệu ngày công",
    exact: true,
    component: TimeKeepingDayPage,
  },
  {
    path: "/cham-cong/du-lieu-tong-hop-cong",
    name: "Dữ liệu tổng hợp công",
    exact: true,
    component: TimeKeepingGroupPage,
  },
  {
    path: "/cham-cong/nghi-phep",
    name: "Nghỉ-phép",
    exact: true,
    component: LeaveDayPage,
  },
];

export default TimeKeepingRoute;
