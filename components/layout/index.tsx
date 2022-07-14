import * as React from "react";
import { useThemeContext } from "../../context/theme";
import { Header, ThemeSwich } from "./header";
import { darkTheme, styled } from '../../stitches.config'

const AppShell = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$sand1',
})

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  const { theme } = useThemeContext()
  const _theme = theme == 'dark' ? darkTheme : ''
  return (
  <AppShell className={ _theme }>
    <Header/>
    {children}
  </AppShell>
  )
}
export default Layout

export const Shell: React.FC<React.PropsWithChildren> = ({children}) => {
  const { theme } = useThemeContext()
  const _theme = theme == 'dark' ? darkTheme : ''
  return (
    <AppShell className={_theme}>
      <ThemeSwich/>
      {children}
    </AppShell>
  )
}
