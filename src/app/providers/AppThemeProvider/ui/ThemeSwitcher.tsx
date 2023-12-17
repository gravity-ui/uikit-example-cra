import React from 'react';
import { useTheme } from '../lib/useTheme';
import { Themes } from '../lib/ThemeContext';
import { Select } from '@gravity-ui/uikit';


export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Select
        value={[String(theme)]}
        placeholder="Values"
        onUpdate={(nextValue) => toggleTheme(Themes[Number(nextValue[0])])}
      >
        {
          Themes.map((val, i) => (
            <Select.Option
              key={i}
              value={String(i)}
              disabled={theme === val}
            >
              {val}
            </Select.Option>
          ))
        }
      </Select >
    </div >

  );
};
