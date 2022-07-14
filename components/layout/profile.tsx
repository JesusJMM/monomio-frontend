import * as React from 'react'
import { styled } from '../../stitches.config'
import { User } from '../../lib/types'
import { Avatar, IconButton } from '../styled'
import { Logout, MoonStars, Plus } from 'tabler-icons-react'
import { useAuthContext } from '../../context/auth'
import { useThemeContext } from '../../context/theme'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5em'
})
const UserName = styled('span', {
  fontWeight: 'bold',
  fontSize: '14px',
  fontFamily: "'Inter', sans-serif",
  color: '$sand12',
})

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  const { logout } = useAuthContext()
  const { toggle } = useThemeContext()
  return (
    <Container>
      <Avatar src={user.img} />
      <UserName>{user.name}</UserName>
      <IconButton onClick={logout} title="logout"><Logout size={14}/></IconButton>
      <IconButton><Plus size={14} /></IconButton>
      <IconButton onClick={toggle}><MoonStars size={14} /></IconButton>
    </Container>
  )
}

export default UserProfile
