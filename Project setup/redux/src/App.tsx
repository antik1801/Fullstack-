/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByValues } from './redux/features/counterSlice';

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state: any)=> state.counter)
  return (
    <>
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='border border-purple-300 flex p-10'>
      <button onClick={()=> dispatch(increment())} className='bg-green-500 rounded-md px-3 py-2 text-xl font-semibold text-white'>Increment</button>
      <button onClick={()=> dispatch(incrementByValues(5))} className='bg-green-500 rounded-md px-3 py-2 text-xl font-semibold text-white'>Values</button>
      <h1 className='text-3xl mx-10'>{count}</h1>
      <button onClick={()=> dispatch(decrement())} className='bg-red-500 rounded-md px-3 py-2 text-xl font-semibold text-white'>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App
