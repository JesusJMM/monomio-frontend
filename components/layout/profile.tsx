import * as React from 'react'
import { styled } from '../../stitches.config'
import { User } from '../feed/articleEntry'
import { Avatar, IconButton} from '../styled'
import { Logout } from 'tabler-icons-react'
import { useAuthContext } from '../../context/auth'

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
})

const UserProfile: React.FC<{user: User}> = ({ user } ) => {
  const {logout} = useAuthContext()
  return (
    <Container>
      <Avatar src={user.img} />
      <UserName>{user.name}</UserName>
      <IconButton onClick={logout} title="logout" css={{ marginTop: '1px'}} icon={<Logout size={14} />} />
    </Container>
  )
}

export default UserProfile
