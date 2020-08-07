export default [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Nhân sự"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Tổ chức nhân sự",
    route: "/nhan-su/to-chuc-nhan-su",
    icon: "cil-puzzle",
    _children: [ 
      {
        _tag: "CSidebarNavItem",
        name: "Tổ chức phòng ban",
        to: "/nhan-su/to-chuc-nhan-su/to-chuc-phong-ban",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách phòng ban",
        to: "/nhan-su/to-chuc-nhan-su/danh-sach-phong-ban",
      },]
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Dữ liệu nhân viên",
    route: "/nhan-su/du-lieu-nhan-vien",
    icon: "cil-puzzle",
    _children: [ 
      {
        _tag: "CSidebarNavItem",
        name: "Danh sách nhân viên",
        to: "/nhan-su/du-lieu-nhan-vien/danh-sach-nhan-vien",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nhân viên nghỉ việc",
        to: "/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-viec",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Nhân viên nghỉ hưu",
        to: "/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-huu",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Trình độ chuyên môn",
        to: "/nhan-su/du-lieu-nhan-vien/trinh-do-chuyen-mon",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Người thân",
        to: "/nhan-su/du-lieu-nhan-vien/nguoi-than",
      },
    ]
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Hợp đồng",
    route: "/nhan-su/hop-dong",
    icon: "cil-puzzle",
    _children: [ 
      {
        _tag: "CSidebarNavItem",
        name: "DS hợp đồng nhân viên",
        to: "/nhan-su/hop-dong",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Phụ lục hợp đồng",
        to: "/nhan-su/phu-luc-hop-dong",
      },
    ]
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Qúa trình công tác",
    route: "/base",
    icon: "cil-puzzle",
    _children: [ 
      {
        _tag: "CSidebarNavItem",
        name: "Carousel",
        to: "/base/carousels",
      },
    ]
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Chấm công"],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Lương"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "cil-speedometer",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Theme"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Colors",
    to: "/theme/colors",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Typography",
    to: "/theme/typography",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Base",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Breadcrumb",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cards",
        to: "/base/cards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Carousel",
        to: "/base/carousels",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Collapse",
        to: "/base/collapses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Forms",
        to: "/base/forms",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Jumbotron",
        to: "/base/jumbotrons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List group",
        to: "/base/list-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navs",
        to: "/base/navs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navbars",
        to: "/base/navbars",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pagination",
        to: "/base/paginations",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Popovers",
        to: "/base/popovers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Progress",
        to: "/base/progress-bar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Switches",
        to: "/base/switches",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tables",
        to: "/base/tables",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tabs",
        to: "/base/tabs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tooltips",
        to: "/base/tooltips",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Buttons",
    route: "/buttons",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Buttons",
        to: "/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Brand buttons",
        to: "/buttons/brand-buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Buttons groups",
        to: "/buttons/button-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dropdowns",
        to: "/buttons/button-dropdowns",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/charts",
    icon: "cil-chart-pie",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Icons",
    route: "/icons",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Free",
        to: "/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Flags",
        to: "/icons/flags",
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Brands",
        to: "/icons/brands",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Notifications",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Alerts",
        to: "/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Badges",
        to: "/notifications/badges",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Modal",
        to: "/notifications/modals",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Toaster",
        to: "/notifications/toaster",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Widgets",
    to: "/widgets",
    icon: "cil-calculator",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Disabled",
    icon: "cil-ban",
    badge: {
      color: "secondary",
      text: "NEW",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Labels"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label danger",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-danger",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label info",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-info",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label warning",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-warning",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
