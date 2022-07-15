import Link from 'next/link';
import * as React from 'react'
import { styled } from "../../stitches.config";
import { Button } from '../styled';
import UserProfile from './profile'
import { useAuthContext } from '../../context/auth';
import { useThemeContext } from '../../context/theme';
import ThemeButton from './themeButton'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1em',
})
const Icon = styled('a', {
  fontFamily: `'Inter', sans-serif`,
  color: '$sand12',
  fontWeight: 'bold',
  fontSize: '28px',
  cursor: 'pointer',
  letterSpacing: '-1px',
})
const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5em',
})

export const Header: React.FC = () => {
  const { loadingData, user } = useAuthContext()
  let rightSide
  if (loadingData) {
    rightSide = (
      <Flex>
        <Button loading>Login</Button>
        <Button loading>Signup</Button>
      </Flex>
    )
  } else {
    rightSide = user ? (
      <UserProfile user={user} />
    ) :
      (
        <Flex>
          <Link href='/auth/login' passHref>
            <Button as={'a'}>Login</Button>
          </Link>
          <Link href='/auth/signup' passHref>
            <Button as={'a'} color='dark'>Signup</Button>
          </Link>
          <ThemeButton />
        </Flex>
      )
  }
  return (
    <Container>
      <Link href={'/'} passHref>
        <Icon>Monomio</Icon>
      </Link>
      {rightSide}
    </Container>
  )
}

const ThemeSwichContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center', 
  padding: '1.20em 1em',
})

export const ThemeSwich : React.FC = () => (
    <ThemeSwichContainer>
      <ThemeButton />
    </ThemeSwichContainer>
)
