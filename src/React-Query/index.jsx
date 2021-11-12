import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function QueryClientProvide({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}