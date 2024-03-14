import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/API'
import SignUp from '../components/SignUp'
export default function HomePage(){
  const navigate = useNavigate();
    const [userName, setuserName] = useState('');
    const [PassworD, setPassword] = useState('');
    const [token, setToken] = useState("");
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [showSignup, setShowSignup] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();
        const userObj = {
          userName,
          PassworD
        } 
        API.login({
            username:userObj.userName,
            password:userObj.PassworD,
          })
        .then(data=>{
          setIsLoggedIn(true);
          setToken(data.token);
          localStorage.setItem("token",data.token)
          navigate('/profile')
        }).catch(err=>{
          console.log(err);
        })
      }
      const toggleSignup = () => {
        setShowSignup(!showSignup);
        document.querySelector('.formLogin').style.diplay = "none"
      };
      const handleSignup = userObj=>{
       API.signup({
            username:userObj.username,
            password: userObj.password,
            email: userObj.email,
          }).then(data=>{
          console.log(data);
          setIsLoggedIn(true);
          setToken(data.token);
          localStorage.setItem("token",data.token)
        }).catch(err=>{
          console.log(err);
        })
      }


    return (
        <>
        <div className='bg-blue-200 h-68 mt-20 ml-64  w-64 p-8 flex flex-col items-center justify-center h-screen'>
        <h1 className="text-3xl font-bold mb-4">login</h1>
          <div className='flex flex-col items-right border-black border-solid border-6'>
            <form className='focus-within' onSubmit={(e)=>handleSubmit(e, {userName, PassworD})}>
                <input
                value={userName}
                name="userName"
                onChange={e=> setuserName(e.target.value)}
                type="text"
                placeholder="userName" />
                <input
                value={PassworD}
                name="passworD"
                onChange={e=> setPassword(e.target.value)}
                type="password"
                placeholder="password"
              />
              <button type="submit">
                Login
              </button>
            </form>
        </div>
        <button onClick={toggleSignup} className="signUpButton">
            Signup
          </button>
          {showSignup && <SignUp subHandle={handleSignup} />}
        </div>
        </>
    )
}