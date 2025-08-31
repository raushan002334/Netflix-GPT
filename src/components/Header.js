import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from 'react-redux';
import {LOGO} from '../utils/constants';
import {USERICON} from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Sign out logic
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    // Your effect logic here
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

     //unsubscribe when component unmounts
     return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO} alt="Header"
      />
      {user && <div className="flex items-center space-x-4">
        <img src={USERICON} alt="usericon" className='w-10 h-10' />
        <button className='bg-red-600 px-3 py-1 my-4 rounded-sm font-semibold hover:bg-red-700 border-lg cursor-pointer' onClick={handleSignOut}>Sign Out</button>
      </div>
      }
    </div>

  )
}

export default Header