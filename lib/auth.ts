import type { User } from "../components/feed/articleEntry"
import jwt_decode from 'jwt-decode'

type signupResponseType = {
  token: string,
  user: User,
}

export async function signup(user: {name: string, password: string}){
  const res = await fetch("http://localhost:8080/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(user),
    mode: "cors",
    headers: {
      'Content-Type': "application/json",
    },
  })
  const payload: signupResponseType = await res.json()
  window.localStorage.removeItem("authToken")
  window.localStorage.setItem("authToken", payload.token)
}

type TokenClaims = {
    exp: number,
    iat: number,
    nbf: number,
    uid: number,
    userImg: string,
    userName: string,
  }

export function getTokenClaims() : TokenClaims | undefined {
  const token = window.localStorage.getItem("authToken")
  if (token === null){
    return undefined
  }
  const claims: TokenClaims = jwt_decode(token)
  return claims
}

