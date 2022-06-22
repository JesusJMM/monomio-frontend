import Link from 'next/link';
import * as React from 'react'
import { styled } from "../../stitches.config";
import { Button } from '../styled';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1em',
})
const Icon = styled('a', {
  fontFamily: `'Inter', sans-serif`,
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
  return(
    <Container>
    <Link href={'/'} passHref>
      <Icon>Monomio</Icon>
    </Link>
      <Flex>
      <Link href='/auth/login' passHref>
        <Button as={'a'}>Login</Button>
        </Link>
      <Link href='/auth/signup' passHref>
        <Button as={'a'} color='dark'>Signup</Button>
        </Link>
      </Flex>
    </Container>
  )
}

