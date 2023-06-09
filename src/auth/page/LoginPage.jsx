
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {
      const lastPath = localStorage.getItem('lastPath') || '/'
      login('Jose')
      navigate(lastPath,{
        replace: true
      })
    }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button 
          className="btn btn-outline-light"
          onClick={onLogin}
        >
          Login 
        </button>
    </div>
  )
}

/*<div className="input-group flex-nowrap mb-2 w-50">
      <span className="input-group-text bg-grey">@</span>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onChange={handleInputChange}
      />
    </div>*/