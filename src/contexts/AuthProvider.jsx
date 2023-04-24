import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ** Providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const microsoftProvider = new OAuthProvider("microsoft.com");

  // ** Create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ** Sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ** Log out
  const logout = () => {
    return signOut(auth);
  };

  // ** Sign in with Google account
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ** Sign in with Facebook account
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // ** Sign in with Twitter account
  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // ** Sign in with Github account
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // ** Sign in with Microsoft account
  const signInWithMicrosoft = () => {
    setLoading(true);
    return signInWithPopup(auth, microsoftProvider);
  };

  // ** Update profile
  const handleUpdateProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      handleUpdateProfile();
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
    logout,
    handleUpdateProfile,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signInWithGithub,
    signInWithMicrosoft,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
