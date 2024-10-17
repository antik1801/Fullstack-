import React from 'react'
import { Button } from '../ui/button'

const TodoCart = () => {
  return (
    <div className='card bg-white p-3 rounded-lg flex justify-between items-center'>
          <input type="checkbox" name="checkTodo" id="checkTodo" />
          <p className='font-semibold'>Title:</p>
          <p>Time:</p>
          <p>Description:</p>
          <div className='space-x-1'>
            <Button>Delete</Button>
            <Button>Edit</Button>
          </div>
        </div>
  )
}

export default TodoCart
