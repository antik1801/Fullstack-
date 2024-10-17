import React from 'react'
import { Button } from '../ui/button'
import TodoCart from './TodoCart'
import AddTodoModel from './AddTodoModel'


const TodoContainer = () => {
  return (
    <div>
      <div className='flex justify-between mb-5'>
      
      <AddTodoModel />
      <Button>Filter</Button>
      </div>
      <div className='w-full h-full bg-primary-gradient rounded-xl p-[5px]'>
        <div className='bg-white p-5 rounded-xl space-y-3'>
        <TodoCart/>
        <TodoCart/>
        <TodoCart/>
        <TodoCart/>
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
