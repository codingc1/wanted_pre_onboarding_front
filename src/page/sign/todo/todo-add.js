

import { useState } from "react"
import {API} from '../../../api/api'
import {axiosWithToken} from '../../../api/api-token'

export const TodoAdd=()=>{
    const [todo, setTodo]=useState('')
    const [content, setContent]=useState('')

    const onChangeToto = (e) => {
        setTodo( e.target.value)
      }
    const onChangeContent = (e) => {
        setContent( e.target.value)
    }
   

    const submit=async()=>{ 
        try{
            const { data } = await axiosWithToken.post(`${API.todos}`, { todo } );
            console.log(data, 'data')   
            
          } catch(e) {
            console.log(e, 'e')
          }

          setTodo('')
        }
    
    return(
        <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-sm flex flex-col justify-center items-center">
            <div className="w-full mt-4">
                <div className="w-full flex " >
                    <div className="w-full " style={{flex:1}}>
                        <input className='w-full input-lime' placeholder="todo" value={todo} onChange={onChangeToto}  />
                        {/* <textarea className='w-full input-lime' style={{resize:'none'}} placeholder="content" value={content} onChange={onChangeContent}  /> */}
                    </div>
                    <button className=" w-12 flex justify-center items-center bg-lime-300" onClick={submit}>추가</button>
                </div>
                
            </div>
        </div></div>
    )
}

