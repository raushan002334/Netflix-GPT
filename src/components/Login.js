import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGINBG } from '../utils/constants';
import { USERICON } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const Refferal = useRef(null);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleValidation = () => {
    // checkValidateData(email, password);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = isSignInForm ? checkValidateData(email.current.value, password.current.value) : checkValidateData(email.current.value, password.current.value, name.current.value, Refferal.current.value);
    setErrorMessage(message);
    if (message) return;

    //Sign in Sign up logic

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USERICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);

        });

  
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={LOGINBG} alt="Header" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="p-2 text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="input p-2 m-2 rounded-lg bg-slate-600 w-full"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="input p-2 m-2 rounded-lg bg-slate-600 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="input p-2 m-2 rounded-lg bg-slate-600 w-full"
        />
        <p className='text-sm text-red-500 font-medium'>{errorMessage}</p>
        {!isSignInForm && <input
          ref={Refferal}
          type="text"
          placeholder="Refferal Code"
          className="input p-2 m-2 rounded-lg bg-slate-600 w-full"
        />}
        <button type="submit" className="bg-red-600 text-white p-2 m-2 rounded font-bold w-full hover:bg-red-700"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='p-2 text-center cursor-pointer' onClick={handleSignUp}>New to Netflix? Sign Up now.</p>
      </form>
    </div>
  )
}

export default Login;