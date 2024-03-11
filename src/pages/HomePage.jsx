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
             <h1>login</h1>
             <div className='loginPart'>
          <div className='loginDev'>
            <form className='formLogin' onSubmit={(e)=>handleSubmit(e, {userName, PassworD})}>
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