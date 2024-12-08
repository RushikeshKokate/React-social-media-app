import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, signOut, User } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebaseConfig";
import { Navigate } from "react-router-dom";

type AuthContextData = {
    user: User | null;
    signIn: typeof signIn;
    signUp: typeof signUp;
    logOut: typeof logOut;
    googleSignIn: typeof googleSignIn;
    resetPassword: typeof resetPassword;
}

interface userAuthProviderProps{
    children: React.ReactNode
}

const signIn = (email: string , password: string) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

const signUp = (email: string, password: string) =>{
    return  createUserWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    signOut(auth).then(() => {
        alert("Sign-out successful."); // Sign-out successful.
        <Navigate to="/login"/>
      }).catch((error) => {
        console.log(error);
      });
}

const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
}

const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage + errorCode);
  });
}
export const UserAuthContext = createContext<AuthContextData>({
    user:null,
    signIn,
    signUp,
    logOut,
    googleSignIn,
    resetPassword,
}) 

export const UserAuthContextProvider: React.FC<userAuthProviderProps> = ({children}) => {
    const [user , setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if(user){
                console.log("the user is", user);
                
                setUser(user)
            }

            return ()=>{
                unsubscribe();
            }
        })
    })
    return(
        <UserAuthContext.Provider value={{user,signIn, signUp, logOut, googleSignIn, resetPassword}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(UserAuthContext)
}
 