import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../utils/AuthContext';

export default function Nav() {
  const navigate = useNavigate()
  const {isLoggedIn, token} = useAuthContext()
 
  const logout = ()=>{
    localStorage.removeItem('token')
      navigate('/')
    }
  
  return (
     <nav className="navbar fixed top-0	flex w-full justify-between justify-item-end bg-teal-400 h-10">
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
                <Link to='/logout'>
                  logout
                </Link>
                {/* <button className='nav-link  newNavHead' onClick={()=>logout()}>signout</button> */}
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
