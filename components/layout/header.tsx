import * as React from 'react'
import { styled } from "../../stitches.config";
import { Button } from '../styled';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1em',
})
const Icon = styled('p', {
  fontFamily: `'Inter', sans-serif`,
  fontWeight: 'bold',
  fontSize: '28px',
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
    <Icon>Monomio</Icon>
      <Flex>
        <Button>Login</Button>
        <Button color='dark'>Signup</Button>
      </Flex>
    </Container>
  )
}

