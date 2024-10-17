import TodoContainer from '@/components/todo/TodoContainer'
import Container from '@/components/ui/container'
import React from 'react'

const Todo = () => {
  return (
    <Container>
      <h1 className='text-center text-3xl my-10 font-semibold'>My Todo list</h1>
      <TodoContainer />
    </Container>
  )
}

export default Todo
