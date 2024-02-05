import QueryProvider from './provider/query-client-provider/QueryClientProvider';
import AppRoutes from './routes/App.routes';
function App() {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  )
}

export default App
