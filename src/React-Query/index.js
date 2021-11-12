import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function QueryClientProvider({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
