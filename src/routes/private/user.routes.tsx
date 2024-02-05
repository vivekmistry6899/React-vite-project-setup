import { initDashboardData } from '@/screens/dashboard/Dashboard'
import { lazy } from 'react'
import { Root } from '../types'
const Dashboard = lazy(() => import('@/screens/dashboard/Dashboard'))

const userRoutes: Root[] = [
  {
    name: 'dashboard',
    path: "/dashboard",
    loader: initDashboardData,
    component: <Dashboard />
  }
]

export default userRoutes