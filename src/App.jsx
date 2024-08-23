import React from 'react'
import AddTodo from './components/add'
import AllTodos from './components/alltodo'




const App = () => {
  return (
    <div className='w-screen text-center pt-5 h-screen overflow-hidden  relative text-fuchsia-100 bg-gray-900'>
         <AddTodo/>
         <AllTodos/>
    </div>
  )
}

export default App