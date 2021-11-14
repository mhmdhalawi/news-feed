import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        console.log(error);
      },
    },
  },
});

export function QueryClientProvide({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
