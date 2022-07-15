import * as React from 'react'

export type themeType = 'light' | 'dark'
export type ThemeContextType = {
  theme: themeType,
  toggle: (value?: themeType) => void,
}

const defaults: ThemeContextType = {
  theme: 'light',
  toggle: (_?: themeType) => {},
}

export const ThemeContext = React.createContext<ThemeContextType>(defaults)

export const ThemeProvider: React.FC<React.PropsWithChildren & { theme: themeType, toggleColorScheme: (value?: themeType) => void}> = 
({children, theme, toggleColorScheme}) => {
  return (
    <ThemeContext.Provider value={{
      theme,
      toggle: toggleColorScheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => React.useContext(ThemeContext)
