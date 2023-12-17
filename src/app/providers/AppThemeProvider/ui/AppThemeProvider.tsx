import React, { FC, ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
import { ThemeProvider } from '@gravity-ui/uikit';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

interface ThemeProviderProps {
  children?: ReactNode;
}

const AppThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
  } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={defaultProps}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default AppThemeProvider;
