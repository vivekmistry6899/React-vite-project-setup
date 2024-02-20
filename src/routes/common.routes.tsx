import NotFound from "@/screens/not-found/NotFound";
import { routes } from "./types";
const commonRoutes: routes[] = [
  {
    path: "*",
    element: <NotFound/>,
  }
]
export default commonRoutes