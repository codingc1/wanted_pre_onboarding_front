import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import axios  from "axios";
import {API} from '../../api/api'

export const SignUp =()=>{
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);


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
//   const {logInTokenBatch, } = useLoginOut()
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
    setLoading(true)
    try {
        
        const { data } = await axios.post(`${API.users.signUp}`, { email, password });
        console.log(data, 'data')   
        if(data.access_token){
            alert('회원가입하였습니다.')
        }     
        navigate('/', { replace: true });
        // const res = await axios.post(`${APIRouter.users.signUp}`, {
        //   email, password, });
        // alert(res.data.message)
        
        // navigate(ROUTES.HOME, { replace: true });
      } catch(e) {
        console.log(e, 'e')
      }
      setLoading(false);
  };

    return(
        <div className="h-screen flex items-center flex-col justify-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
            <div className="w-52 mb-3 text-4xl font-mono text-center">To Do 가입</div>  
            <input className="w-full input-lime mb-3" placeholder="email" value={email} onChange={onChangeEmail}/>
            <input className={`w-full input-lime mb-3`} placeholder=" 비밀번호" type="password" value={password} onChange={onChangePassword}/>
            {!chkEmail(email) &&  !chkPassword(password) && <div className="w-full mb-1">
                <button onClick={submit}>회원가입</button>
            </div>}

            <div className=" w-full flex justify-start items-center">
            <div>이미 회원이에요</div>
            <div className="px-2 py-2">
                <a href={'/'} className="text-lime-600 hover:underline">로그인하기</a>
            </div>
            </div>
            
            </div>
        </div>
    )
}