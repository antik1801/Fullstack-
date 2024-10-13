
import './App.css'

function App() {
 

  return (
    <>
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='border border-purple-300 flex p-10'>
      <button className='bg-green-500 rounded-md px-3 py-2 text-xl font-semibold text-white'>Increment</button>
      <h1 className='text-3xl mx-10'>0</h1>
      <button className='bg-red-500 rounded-md px-3 py-2 text-xl font-semibold text-white'>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App
