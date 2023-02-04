import React from "react";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const signInGoogleFunc = () => {
        

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result)=>{
            const user = result.user
            console.log(result,"result")
            dispatch({type: 'LOGIN', payload: user});
        })

    }
    return (
        
        <div className='h-screen bg-gray-100 flex items-center justify-center'>
            <div className='w-1/3 h-2/3 bg-white rounded-lg flex flex-column justify-center gap-10'>
                <img className="w-44" src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt= ""/>
                <div className='font-bold text-2xl'>whatsapp login page</div>
                <div onClick={signInGoogleFunc} className='border px-4 py-2 rounded lg bg-green-600 text-white cursor-pointer hover:opacity-90'>google ile giriş yap</div>
            </div>
        </div>
    )
}
export default Login