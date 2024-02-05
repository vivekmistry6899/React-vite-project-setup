
import { initLoginData } from '@/screens/authentication/login/Login'
import { lazy } from 'react'
import { Root } from '../types'
const Login = lazy(() => import('@/screens/authentication/login/Login'))

const authenticationRoutes: Root[] = [
  {
    name: 'login',
    path: "/",
    loader: initLoginData,
    component: <Login />
  }
]
export default authenticationRoutes