import { ThemeProvider } from '@/provider/theme-provider/ThemeProvider'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'


const queryCache = new QueryCache({
  //onError: () => { },
})

const mutationCache = new MutationCache({
  //onError: () => { },
})
const queryClient = new QueryClient({
  queryCache,
  mutationCache,

  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
})
const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default QueryProvider
