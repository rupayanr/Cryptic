import { useState, useEffect, createContext, useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYrh12c-BqmlYDND9up9RMi-s3vmp_43E",
    authDomain: "cryptic-73897.firebaseapp.com",
    projectId: "cryptic-73897",
    storageBucket: "cryptic-73897.appspot.com",
    messagingSenderId: "830057639642",
    appId: "1:830057639642:web:ef9973ba6ef72871253fe3"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);


const auth = getAuth()
const provider = new GoogleAuthProvider();

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)


    return (
        <AuthContext.Provider

            value={{

                user,
                setUser,

                login: async () => {
                    signInWithPopup(auth, provider)
                        .then((result) => {

                            const credential = GoogleAuthProvider.credentialFromResult(result)
                            const token = credential.accessToken
                            const user = result.user
                            setUser(user)

                        }).catch((error) => {

                            const errorCode = error.errorCode
                            const errorMessage = error.message
                            const email = error.email
                            const credential = GoogleAuthProvider.credentialFromError(error);
                        })



                },

                logout: async () => {
                    signOut(auth)
                        .then(() => {
                            setUser(null)
                        }).catch((error) => {
                            console.log(error)
                        })
                },

                checkAuth: () => {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            setUser(user);
                        }
                        else {
                            setUser(null)
                        }
                    })
                }
            }}


        >

            {children}

        </AuthContext.Provider >
    )
}
