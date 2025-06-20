import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { Toaster } from 'sonner'
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userslice';
import { ThemeProvider } from "./context/theme-context"
import { LanguageProvider } from "./context/language-context"


function App() {
  const dispatch = useDispatch();

  // Memoriza la función fetchUserDetails para evitar recrearla en cada renderizado
  const fetchUserDetails = useCallback(async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

    console.log("data-user", dataResponse);
  }, [dispatch]); // 'dispatch' como dependencia, ya que se usa dentro de la función

  // Ejecuta fetchUserDetails al montar el componente
  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]); // Ahora incluye fetchUserDetails como dependencia

  return (
    <>
    <ThemeProvider>
    <LanguageProvider>
      <Context.Provider
        value={{
          fetchUserDetails, // Proporciona la función en el contexto
        }}
      >
        <Toaster richColors position="top-right" />
        <main className="min-h-[calc(100vh-100px)]">
          <Outlet />
        </main>
      </Context.Provider>
      </LanguageProvider>
    </ThemeProvider>
    </>
  );
}

export default App;

