
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {API} from '../../../api/api'
import {axiosWithToken} from '../../../api/api-token'
import {TodoAdd} from './todo-add'


export const TodoList = () => {
  let navigate = useNavigate();
  
  const [todoList, setTodoList] = useState([]) //{todo: 'todo', userId: 1, id: 1, isCompleted: false}
    const goHome=()=>navigate('/')

  const fetchTodo=async()=>{
      const { data } = await axiosWithToken.get(`${API.todos}`, );
      console.log(data, 'data')   
      setTodoList(data)
    }
useEffect(()=>{
  const init=async()=>{
    try{
      fetchTodo()
    } catch(e) {
      console.log(e, 'e')
    }
  }
  init()
},[])    


const onChangeTodo =(e, todo) => {
  const index = todoList.findIndex(el => el.id === todo.id)
      console.log(index, 'index')   
      if(index !== -1){
        const newTodos = [...todoList]
        newTodos[index].todo = e.target.value
        setTodoList(newTodos)
      }
}
const handleUpdateToto = async(todo) => {
  try{
    const { data } = await axiosWithToken.put(`${API.todos}/${todo.id}`, { todo:todo.todo,isCompleted:todo.isCompleted } ); 
    if(data){
      fetchTodo()
    }
  } catch(e) {
    console.log(e, 'e')
  }
}
  const deleteTodo=async(todo)=>{
    try{
      const result = await axiosWithToken.delete(`${API.todos}/${todo.id}` );
      if(result.status === 204){
        fetchTodo()
      }
      
    } catch(e) {
      console.log(e, 'e')
    }
  }

  


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
                    <input className='w-full input-lime' placeholder="todo" value={el.todo} onChange={(e)=>onChangeTodo(e, el)}  />
                    <div className='flex items-center hover:text-blue-400 cursor-pointer'
                      onClick={()=>{
   
                        
                      }}
                    >{el.todo}</div>
                    <button onClick={()=>handleUpdateToto(el)}>저장</button>
                    <button onClick={()=>deleteTodo(el)}>삭제</button>
                  </div>
              </div>
              <div ></div>

            </div>
          ))}
        </div>
      </div>

      <TodoAdd setTodoList={setTodoList} />
   
    </div>
  );
};

