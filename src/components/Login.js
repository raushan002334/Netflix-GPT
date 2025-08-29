import React from 'react'
import Header from './Header'
import {useState} from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg" alt="Header" />
      </div>
      <form className="w-3/12 relative p-10 bg-black flex flex-col  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60">
        <h1 className="text-2xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="input p-2 m-2 rounded-lg bg-slate-600"
        />}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="input p-2 m-2 rounded-lg bg-slate-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="input p-2 m-2 rounded-lg bg-slate-600"
        />
        {!isSignInForm && <input
          type="text"
          placeholder="Refferal Code"
          className="input p-2 m-2 rounded-lg bg-slate-600"
        />}
        <button type="submit" className="bg-red-600 text-white p-2 m-2 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='text-center cursor-pointer' onClick={handleSignUp}>New to Netflix? Sign Up now.</p>
      </form>
    </div>
  )
}

export default Login;