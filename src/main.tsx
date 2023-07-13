import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';

import GlobalStyle from './globalStyles.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Routes>
        <Route path='/*' element={<App />}></Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Router>,
);
