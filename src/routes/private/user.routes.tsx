import { routes } from "../types"
const userRoutes: routes = {
  path: "/user",
   children: [
    {
      name:"user",
      path: "",
      element: <>user</>,
    },
    {
      name:"add-user",
      path: "add",
      element: <>add</>,
    },
    {
      name:"edit-user",
      path: "edit/:id",
      element: <>edit</>,
    },
    {
      path: "sub-user",
      children: [
       {
         name:"sub-user-add",
         path: "add",
         element: <>sub-user-addss</>,
       },
       {
        name:"sub-user-edit",
        path: "edit/:id",
        element: <>sub-user-edit</>,
      },
      {
        path: "sub-user-team",
        children: [
         {
           name:"sub-user-add-team",
           path: "add",
           element: <>sub-user-add-team</>,
         },
         {
          name:"sub-user-edit-team",
          path: "edit/:id",
          element: <>sub-user-edit-team</>,
        },
        ]
     },
      ]
   },
  ],
}
export default userRoutes