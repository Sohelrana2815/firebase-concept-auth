import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase-config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();

  const registerUser = (email, password) => {
    // create user
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  sign in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const faceBookLogin = () => {
    return signInWithPopup(auth, faceBookProvider);
  };

  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    faceBookLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
