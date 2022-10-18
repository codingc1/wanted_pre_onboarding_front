
export const BASE_URL = 'http://localhost:8000'
export const API = {
    users:{ 
      signIn: BASE_URL+'/auth/signin',
      signUp: `${BASE_URL}/auth/signup`,
    },
    todos: `${BASE_URL}/todos`,

   
    
  };
  // export const ApiUser={
  //   login: async ({ email, password }) => {
  //     const { data } = await axiosLoginApi.post(`${API.users.login}`, { email, password });
  //     return data;
  //   },
  //   todo:{
  //     getTodoList: async function()  {
  //       const { data } = await axiosLoginApi.get(`${API.todos.crud}` );
  //       return data;
  //     },
  //     postTodoAdd: async function(todoObj)  {
  //       const { data } = await axiosLoginApi.post(`${API.todos.crud}`, todoObj );
  //       return data;
  //     },
  //     getTodoById: async function(id) {
  //       const { data } = await axiosLoginApi.get(`${API.todos.crud}/${id}` );
  //       return data;
  //     },
  //   },
  // }


