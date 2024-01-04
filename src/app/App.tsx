import React from 'react';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { AppRouter } from './AppRouter';



export const App = () => {

  return (
    <AppThemeProvider>
      <AppRouter />
    </AppThemeProvider>
  );
};
