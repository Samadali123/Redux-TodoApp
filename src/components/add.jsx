import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../App/features/todo/todoslice';
import { IoMdAdd } from "react-icons/io";



const AddTodo = () => {
  const [input, setInput] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  
  const dispatch = useDispatch();

  const toggleFormVisibility = () => {
    setIsHidden(!isHidden);
  }

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
      setIsHidden(true);
      // toast.success("Todo added successfully")
    }
  }

  return (
    <div className='max-w-md mx-auto p-4'>
      <div 
        onClick={toggleFormVisibility} 
        className='flex justify-center items-center gap-2 cursor-pointer text-silver-600 hover:text-indigo-800 transition-colors duration-200 ease-in-out'
      >
        <h1 className='text-2xl font-semibold'>Let&apos;s Todo</h1>
        <IoMdAdd size={28} className='text-indigo-600 hover:text-indigo-800 transition-colors duration-200 ease-in-out' />
      </div>
      
      {!isHidden && (
        <form className='mt-5 flex flex-col items-center space-y-4' onSubmit={addTodoHandler}>
          <input 
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full bg-gray-100 rounded border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 py-2 px-4 leading-6 transition duration-150 ease-in-out'
            type="text"
            placeholder='Enter a Todo...'
          />
          <button 
            className='w-full text-white bg-indigo-500 py-2 px-4 rounded hover:bg-indigo-600 transition duration-150 ease-in-out'
            type='submit'
          >
            Add Todo
          </button>
        </form>
      )}
    </div>
  );
}

export default AddTodo;
