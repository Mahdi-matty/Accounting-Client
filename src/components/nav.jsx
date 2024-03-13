import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../utils/AuthContext';

export default function Nav() {
  const navigate = useNavigate()
  const {isLoggedIn, token} = useAuthContext()
 
  const logout = ()=>{
    localStorage.removeItem('token')
      navigate('/login')
    }
  
  return (
     <nav className="navbar fixed top-0	flex w-full justify-between items-center px-4">
      <div className='flex space-x-4'>
        <ul className='flex space-x-4'>
        <li className='nav-item'>
          <Link className="nav-link  newNavHead" to="/">
            Home
          </Link>
        </li>
      
             <li className='nav-item'>
              <Link className="nav-link  newNavHead" to="/profile">
                Profile
              </Link>
            </li> 
            {isLoggedIn ? (
              <div>
              <li className='nav-item'>
                <button className='nav-link  newNavHead' onClick={()=>logout()}>signout</button>
              </li>
              </div>
             ) :(
                <li className='nav-item'>
              <Link className="nav-link  newNavHead" to="/">
                login
              </Link>
            </li>
              )
            }           
        </ul>
      </div>
    </nav>
  )
 
}
