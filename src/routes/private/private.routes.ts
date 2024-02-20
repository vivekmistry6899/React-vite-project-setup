import dashboardRoutes from "./dashboard.routes"
import teamRoutes from "./team.routes"
import userRoutes from "./user.routes"

const privateRoutes = [
  userRoutes,
  dashboardRoutes,
  teamRoutes
]


export default privateRoutes