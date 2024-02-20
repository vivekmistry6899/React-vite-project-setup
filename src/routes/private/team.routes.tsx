import { routes } from "../types"
const teamRoutes: routes = {
  path: "/team",
   children: [
    {
      name:"team",
      path: "",
      element: <>team</>,
    },
    {
      name:"add",
      path: "add",
      element: <>team add</>,
    },
    {
      name:"edit",
      path: "edit/:id",
      element: <>team edit</>,
    },
  ],
}
export default teamRoutes