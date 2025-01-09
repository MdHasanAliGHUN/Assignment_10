import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  // Sing Up New User using email

  const singUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const logInWithWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sing in with google
  const handleGoogleLoginWithSocial = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //sing out user
  const signOutUser = () => {
    return signOut(auth);
  };

  // manages user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);
  const value = {
    user,
    singUpWithEmail,
    logInWithWithEmailAndPassword,
    handleGoogleLoginWithSocial,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
