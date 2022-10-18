import {  BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { NotFound } from "../page/notFound/404";
import { SignIn } from "../page/sign/signIn";
import { SignUp } from "../page/sign/signUp";
import { TodoList } from "../page/sign/todo/todo-list";



export const TodoRouter = () => {
  return (
    <Router>
    <Routes>
    <Route path={'/'} element={<SignIn />} />
    <Route path={'/signup'} element={<SignUp />} />

      <Route path="/todo" element={ <TodoList /> } />

      <Route path='*' element={<NotFound />} />
    </Routes>
      
    </Router>
  );
};



