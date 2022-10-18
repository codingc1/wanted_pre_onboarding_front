
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios  from "axios";
import {API} from '../../../api/api'
import {axiosWithToken} from '../../../api/api-token'
import {TodoAdd} from './todo-add'


export const TodoList = () => {
  let navigate = useNavigate();
  // const {todoId} = useParams();
  
  const [todoList, setTodoList] = useState([]) //{todo: 'todo', userId: 1, id: 1, isCompleted: false}
    const goHome=()=>navigate('/')

useEffect(()=>{
  const init=async()=>{
    try{
      const { data } = await axiosWithToken.get(`${API.todos}`, );
      console.log(data, 'data')   
      setTodoList(data)
    } catch(e) {
      console.log(e, 'e')
    }
  }
  init()
},[])    
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-sm flex flex-col justify-center items-center">
        <div className="w-full flex justify-center  items-center mt-16" >
          <div className=" cursor-pointer" onClick={goHome}>홈</div>
          <div className="ml-2 font-semibold text-xl">Todo List</div>
        </div>
        
        <div className="w-full">
        {todoList.map((el, index)=>(
            <div className="w-full flex mt-2 " style={{border:'1px solid rgb(229 231 235)', }} key={index} >
              
              <div className="w-full " >
                  <div className="w-full h-8 flex items-center align-middle">
                    {/* <TodoUpdateModal todoItem={el} /> */}
                    <div className='flex items-center hover:text-blue-400 cursor-pointer'
                      onClick={()=>{
   
                        
                      }}
                    >{el.todo}</div>
                  </div>
              </div>
              <div ></div>
            {/* <TodoDelButton todoItem={el} /> */}
            </div>
          ))}
        </div>
      </div>
      {/* <Outlet /> */}
      <TodoAdd />
      {/* <TodoAdd /> */}
    </div>
  );
};

