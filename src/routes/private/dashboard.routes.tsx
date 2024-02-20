import { routes } from "../types"
const dashboardRoutes: routes = {
   path: "/",
   children:[
    {
      name:"dashboard",
      path: "dashboard",
      checkPermission:false,
      element: <>dashboard</>,
    },
  ]
}
export default dashboardRoutes