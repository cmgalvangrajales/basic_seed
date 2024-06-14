import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from '@contexts/LanguageContext';
import { AppThemeProvider } from '@contexts/ThemeContext';

import App from '@pages/App';

import { AxiosInterceptor } from './services/interceptors';

const container = document.getElementById('root');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// TODO: remember to re-write the test files.
// you can replace this for session storage or cookie or delete it
const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

// you can leave this even if not used
AxiosInterceptor();

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <AppThemeProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AppThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
