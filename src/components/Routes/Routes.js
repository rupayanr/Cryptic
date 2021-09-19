import Auth from "../Pages/Auth";
import Home from "../Pages/Home";
import { AuthContext } from "../Provider/AuthProvider";
import { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/app'
import { CrypticContainer } from "../Styles/Styling";




export default function Routes() {


    const { user } = useContext(AuthContext)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (user) {
            console.log(user)
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }

    }, [user])

    return (
        <>
            {isAuth ? (<Home />) : (<Auth />)}
        </>
    )
}
