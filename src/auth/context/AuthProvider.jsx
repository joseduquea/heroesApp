import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
    logged: false,
}
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return{
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({children}) => {

  const [ state, dispatch] = useReducer( authReducer, initialState, init )

  const userLogin = (name = '') => {
    const user = {id: '123', name }
    const action = {type: types.login, payload: user}
    localStorage.setItem('user', JSON.stringify( user ))
    dispatch(action)
  }

  const userLogout = () => {
    localStorage.removeItem('user');
    const action = {type: types.logout};
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...state, 
      login: userLogin,
      logout: userLogout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
