import { useState } from "react"
import {SignIn} from './sign/signIn'
import { SignUp } from "./sign/signUp"


export const Home=()=>{
    const [isLoginMode, setIsLoginMode] = useState(true)

    if(isLoginMode){
        return <SignIn setIsLoginMode={setIsLoginMode} />
    }
    return <SignUp setIsLoginMode={setIsLoginMode} />
}