import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom";
import axios  from "axios";
import {API} from '../../api/api'
import {LOCALSTORAGE_TOKEN} from '../../constants'



export const SignIn =()=>{
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  // const [isLoading  , setLoading] = useState(false);

//   const {logInTokenBatch, logOutokenBatch} = useLoginOut()
  useEffect(()=>{
    const reset =async()=>{
    //   navigate(ROUTES.LOGIN, { replace: true });
    }
    reset()
  },[])

  const onChangeEmail = (e) => {
    setEmail( e.target.value)
  }
  const onChangePassword =(e) => {
    setPassword(e.target.value)
  }



  const chkEmail=(str)=>{
    if(!(str.includes("@") && str.includes(".")))return '이메일을 입력해 주세요'
    return
  }
  const chkPassword=(str)=>{
    if(str.length < 8)return '8자 이상 입력해 주세요'
    return
  }
  const submit = async() => {
    const emailCheckResult = chkEmail(email)
    if(emailCheckResult){
        alert(emailCheckResult); 
        return;
    }
    const passCheckResult = chkPassword(password)
    if(passCheckResult){
        alert(passCheckResult); 
        return;
    }

    try{
        const { data } = await axios.post(`${API.users.signIn}`, { email, password });
        console.log(data, 'data')   
        if(data.access_token){
            window.localStorage.setItem(LOCALSTORAGE_TOKEN, data.access_token)
            navigate('/todo');
        }     
        
      } catch(e) {
        console.log(e, 'e')
      }

  };

    return( // style={{color:"bg-lime-600", hoverColor:"bg-lime-700"}}
        <div className="h-screen flex items-center flex-col justify-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
                <div className="w-52 mb-3 text-4xl font-mono text-center">To Do</div>  
                <input className="w-full input-lime mb-3" placeholder="email" value={email} onChange={onChangeEmail}/>
                <input className={`w-full input-lime mb-3`} placeholder=" 비밀번호" type="password" value={password} onChange={onChangePassword}/>
                {!chkEmail(email) &&  !chkPassword(password) && <div className="w-full mb-1">
                    <button onClick={()=>submit()}>로그인</button>
                </div>}

                <div className=" w-full flex justify-start items-center">
                    <div >ToDo가 처음이세요?</div>
                    <div className="px-2 py-2">
                        <a href={'/signup'} className="text-lime-600 hover:underline">회원 가입하기</a>
                    </div>
                </div>
            
            </div>
        </div>
    )
}