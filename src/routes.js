
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Analytics from "views/examples/Analytics.js";
import EmergencyGuides from "views/examples/EmergencyGuides";
import EmergencyHotlines from "views/examples/EmergencyHotlines";
import ReportFraud from "views/examples/ReportFraud";
import Create from "views/examples/Create";


var routes = [
  {
    path: "/index",
    name: "Main",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/emergencyGuides",
    name: "Emergency Guides",
    icon: "ni ni-single-copy-04 text-blue",
    component: EmergencyGuides,
    layout: "/admin"
  },
  {
    path: "/emergencyHotlines",
    name: "Emergency Hotlines",
    icon: "ni ni-single-copy-04 text-yellow",
    component: EmergencyHotlines,
    layout: "/admin"
  },
  {
    path: "/reportFraud",
    name: "Report Fraud",
    icon: "ni ni-single-copy-04 text-green",
    component: ReportFraud,
    layout: "/admin"
  },
  {
    path: "/create",
    name: "Create Info Guide",
    icon: "ni ni-archive-2 text-orange",
    component: Create,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Analytics",
  //   icon: "ni ni-sound-wave text-red",
  //   component: Analytics,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Icons,
  //   layout: "/admin"
  // }
];
export default routes;
