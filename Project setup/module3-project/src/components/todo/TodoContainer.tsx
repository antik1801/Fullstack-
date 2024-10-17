import React from 'react'
import { Button } from '../ui/button'
import TodoCart from './TodoCart'


const TodoContainer = () => {
  return (
    <div>
      <div>
      <Button>Add to Do</Button>
      <Button>Filter</Button>
      </div>
      <div className='w-full h-full bg-red-400 rounded-xl p-4 space-y-10'>
        <TodoCart />
        <TodoCart />
        <TodoCart />
        <TodoCart />
        <TodoCart />
        <TodoCart />
      </div>
    </div>
  )
}

export default TodoContainer
