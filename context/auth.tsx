import * as React from 'react'
import jwt_decode from 'jwt-decode'

import { User } from '../lib/types'

export type authContextType = {
  user: User | undefined,
  loadingData: boolean,
  operationError?: string,
  // Returns undefined on susccess, error message on fail
  login?: (user: { name: string, password: string }) => Promise<string | undefined>,
  logout?: () => void,
  // Returns undefined on susccess, error message on fail
  signup?: (user: { name: string, password: string, img?: string }) => Promise<string | undefined>,
}

const defaultValue = { user: undefined, loadingData: true }

export const AuthContext = React.createContext<authContextType>(defaultValue)

type loginResponseType = {
  token: string,
  user: User,
}

type signupResponseType = {
  token: string,
  user: User,
}

type TokenClaims = {
  exp: number,
  iat: number,
  nbf: number,
  uid: number,
  userImg: string,
  userName: string,
}

function saveToken(token: string) {
  window.localStorage.removeItem("authToken")
  window.localStorage.setItem("authToken",token)
} 

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<User | undefined>(undefined)
  const [loading, setLoading] = React.useState(true)
  // get user from token if exits
  React.useEffect(() => {
    const token = window.localStorage.getItem("authToken")
    if (token === null) {
      setUser(undefined)
      setLoading(false)
      return
    }
    const claims: TokenClaims = jwt_decode(token)
    setUser({
      name: claims.userName,
      id: claims.uid,
      img: claims.userImg,
    })
    setLoading(false)
  }, [])
  // login
  const login = async (user: { name: string, password: string }) => {
    setLoading(true)
    let res: Response
    try {
      res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        mode: "cors",
        headers: {
          'Content-Type': "application/json",
        },
      })
    } catch (err) {
      console.log({ err })
      setLoading(false)
      return "Opps, something went wrong!"
    }
    // Check error
    if (res.status != 200)
      switch (res.status) {
        case 404:
          setLoading(false)
          return "User does not exits"
        case 403:
          setLoading(false)
          return "Your password was incorrect"
        default:
          setLoading(false)
          return "Opps, something went wrong!"
      }
    const payload: loginResponseType = await res.json()
    setUser({
      id: payload.user.id,
      name: payload.user.name,
      img: payload.user.img
    })
    saveToken(payload.token)
    setLoading(false)
  }
  // logout
  const logout = async () => {
    window.localStorage.removeItem("authToken")
    setUser(undefined)
  }
  // signup
  const signup = async (user: { name: string, password: string, img?: string }) => {
    setLoading(true)
    let res: Response
    try {
      res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(user),
        mode: "cors",
        headers: {
          'Content-Type': "application/json",
        },
      })
    } catch (err) {
      console.log({ err })
      setLoading(false)
      return "Opps, something went wrong!"
    }
    // Check error
    if (res.status != 200)
      switch (res.status) {
        case 404:
          setLoading(false)
          return "User does not exits"
        case 403:
          setLoading(false)
          return "Your password was incorrect"
        default:
          setLoading(false)
          return "Opps, something went wrong!"
      }
    const payload: signupResponseType = await res.json()
    setUser({
      id: payload.user.id,
      name: payload.user.name,
      img: payload.user.img
    })
    saveToken(payload.token)
    setLoading(false)
    return undefined
  }
  return (
    <AuthContext.Provider value={{
      user,
      loadingData: loading,
      login,
      logout,
      signup,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)
