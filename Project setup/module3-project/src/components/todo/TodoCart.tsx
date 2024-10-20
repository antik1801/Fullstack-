import React from "react";
import { Button } from "../ui/button";
import { removeTodo, toggleCompleted, TTodo } from "@/redux/features/todoSlice";
import { useDispatch } from "react-redux";
import EditTodoModel from "./EditTodoModel";

const TodoCart = ({title, description, id, isCompleted} : Partial<TTodo>) => {

  const dispatch = useDispatch();

  const toggleChange = () =>{
    dispatch(toggleCompleted(id!));
  }

  return (
    <div className="card bg-white p-3 rounded-lg flex justify-between items-center border">
      <input className="mr-4" type="checkbox" onChange={toggleChange} name="checkTodo" id="checkTodo" />
      <div className="flex-1 min-w-0"> <p className="font-bold break-words">{title}</p> </div>
      <div className="flex-1 text-center">{isCompleted? <p className="font-semibold text-green-500">Done</p> : <p className="font-semibold text-red-500">Pending</p> }</div>
      <div className={`flex-1 min-w-0 mr-4 ${description && description.length <= 20 ? 'text-center' : 'text-left'}`}>
      <p className="break-words">{description}</p>
      </div>
      <div className="space-x-1 flex flex-none items-center">
        <Button onClick={()=> dispatch(removeTodo(id!))} className="bg-red-500">
          <svg
            className="size-5"
            
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
        <EditTodoModel />
        
      </div>
    </div>
  );
};

export default TodoCart;
