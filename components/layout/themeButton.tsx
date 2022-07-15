import * as React from 'react'
import { IconButton } from '../styled'
import { MoonStars, Sun } from 'tabler-icons-react'
import { useThemeContext } from '../../context/theme'

const ThemeButton: React.FC<React.ComponentProps<typeof IconButton>> = () => {
  const { theme, toggle } = useThemeContext()
  return (
    <IconButton onClick={() => toggle()}>
      {theme == 'light' ? <MoonStars size={14} /> : <Sun size={14} />}
    </IconButton>
  )
}

export default ThemeButton
