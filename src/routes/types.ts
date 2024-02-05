import { ReactNode } from "react"
import { LoaderFunction } from "react-router-dom"

export interface Root {
  name: string
  path: string
  loader: LoaderFunction,
  component: ReactNode
}