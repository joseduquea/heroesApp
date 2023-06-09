import { /*Link,*/ NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`} 
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`} 
                        to="/dragonball"
                    >
                        Dragon Ball
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`} 
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`} 
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <div>
                        <span className='nav-item nav-link text-primary fw-bolder'>
                            {user?.name}
                        </span>
                    </div>
                    
                    <button 
                        className='nav-item nav-link btn'
                        onClick={onLogout}

                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}