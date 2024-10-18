import React from 'react'
// import { Button } from '../ui/button'
import TodoCart from './TodoCart'
import AddTodoModel from './AddTodoModel'
import TodoFilter from './TodoFilter'
import { useAppSelector } from '@/redux/hooks/hooks'




const TodoContainer = () => {

  const {todos} = useAppSelector((state) => state.todos)
  return (
    <div>
      <div className='flex justify-between mb-5'>
      <AddTodoModel />
      <TodoFilter />
      </div>
      <div className='w-full h-full bg-primary-gradient rounded-xl p-[5px]'>
        <div className='bg-white p-5 rounded-xl space-y-3'>
        {
         todos.map((item) => <TodoCart key={item.id} {...item}/>)
        }
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
