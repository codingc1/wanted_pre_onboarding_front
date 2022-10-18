

import { useState } from "react"
import {API} from '../../../api/api'
import {axiosWithToken} from '../../../api/api-token'

export const TodoAdd=({setTodoList})=>{
    const [todo, setTodo]=useState('')

    const onChangeToto = (e) => {
        setTodo( e.target.value)
      }
   
    const fetchTodo=async()=>{
        const { data } = await axiosWithToken.get(`${API.todos}`, );
        console.log(data, 'data')   
        setTodoList(data)
      }
    const submit=async()=>{ 
        try{
            const { data } = await axiosWithToken.post(`${API.todos}`, { todo } );
            if(data){
                fetchTodo()
            }
            
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
                    </div>
                    <button className=" w-12 flex justify-center items-center bg-lime-300" onClick={submit}>추가</button>
                </div>
                
            </div>
        </div></div>
    )
}

