import * as React from 'react'

export type themeType = 'light' | 'dark'
export type ThemeContextType = {
  theme: themeType,
  toggle: () => void,
  set: (theme: themeType) => void,
}

const defaults: ThemeContextType = {
  theme: 'light',
  toggle: () => {},
  set: (_: themeType) => {}
}

export const ThemeContext = React.createContext<ThemeContextType>(defaults)

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = React.useState<themeType>('dark')
  const toggle = () => setTheme(theme == 'light' ? 'dark' : 'light')
  return (
    <ThemeContext.Provider value={{
      theme,
      toggle,
      set: setTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => React.useContext(ThemeContext)
