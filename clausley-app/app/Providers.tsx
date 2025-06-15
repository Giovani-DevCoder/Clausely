'use client';

import { Toaster } from 'sonner';
import { ThemeProvider } from "../src/context/theme-context";
import { LanguageProvider } from "../src/context/language-context";
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import Context from '../src/context/index';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);

  const fetchUserDetails = async () => {
    // Placeholder function
    console.log('fetching user details...');
  };

  return (
    <Provider store={store}>
      <Context.Provider value={{ user, fetchUserDetails }}>
        <ThemeProvider>
          <LanguageProvider>
            <Toaster richColors position="top-right" />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </Context.Provider>
    </Provider>
  );
}