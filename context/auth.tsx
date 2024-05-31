import { createContext, useContext, useMemo, useState } from "react"

export interface State {
  auth: any
}

const initialState = {
  authenticated: false,
  user: null,
  hasOnboarded: false,
}

export const AuthContext = createContext<State | any>(initialState)
AuthContext.displayName = "AuthContext"

export const AuthProvider: React.FC<{ initialValue?: any; children: any }> = ({
  initialValue,
  children,
  ...props
}) => {
  const [state, updateAuth] = useState(initialValue ?? initialState)
  const value = useMemo(
    () => ({
      ...state,
      updateAuth,
    }),
    [state]
  )
  return (
    <AuthContext.Provider value={value} {...props}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}
