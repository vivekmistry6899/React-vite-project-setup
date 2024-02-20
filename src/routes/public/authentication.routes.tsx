import { routes } from '../types'

const authenticationRoutes:routes = {
  path: "/",
   children: [
    {
      path: "",
      element: <>Login</>,
     },
    {
      path: "register",
      element: <>register</>,
     },
  ],
 }

export default authenticationRoutes