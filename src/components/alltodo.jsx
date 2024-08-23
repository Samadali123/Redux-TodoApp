
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../App/features/todo/todoslice';
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";



const AllTodo = () => {
  const Todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
    setIsCompleted(todo.completed);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({
      id: editId,
      text: editText,
      completed: isCompleted
    }));
    setEditText("");
    setEditId(null); // Close the form after updating
    // toast.info("Todos updated successfully")
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
    alert("Deleted Todo Successfully!");
    // toast.info("Todo Deleted Successfully..")
  };

  return (
    <div className='text-gray-700 p-4 max-w-3xl mx-auto'>
      {/* Edit Form displayed at the top */}
      {editId !== null && (
        <div className='bg-white p-4 rounded-md shadow-md mb-4'>
          <form onSubmit={handleUpdateSubmit} className='flex flex-col space-y-4'>
            <input 
              className='border border-gray-300 rounded p-2 text-gray-700'
              type="text" 
              value={editText} 
              onChange={(e) => setEditText(e.target.value)} 
              required
            />
            <div className='flex items-center space-x-4'>
              <label className='flex items-center'>
                <input 
                  type="radio" 
                  checked={isCompleted} 
                  onChange={() => setIsCompleted(true)} 
                />
                <span className='ml-2'>Completed</span>
              </label>
              <label className='flex items-center'>
                <input 
                  type="radio" 
                  checked={!isCompleted} 
                  onChange={() => setIsCompleted(false)} 
                />
                <span className='ml-2'>Not Completed</span>
              </label>
            </div>
            <button 
              type="submit" 
              className='bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600'
            >
              Update Todo
            </button>
          </form>
        </div>
      )}

      {/* Todo List */}
      <ul className='space-y-4'>
        {Todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos available.</p>
        ) : (
          Todos.map((todo) => (
            <div key={todo.id} className='bg-white p-4 rounded-md shadow-md'>
              <div className='flex justify-between items-center'>
                <li className={`mb-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </li>
                <div className="right flex gap-3">
                  <span 
                    className='text-blue-500 cursor-pointer' 
                    onClick={() => handleEditClick(todo)}
                  >
                    <RiEditCircleLine size={24} />
                  </span>
                  <span 
                    className='text-red-500 cursor-pointer' 
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <FaTrashAlt size={20} />
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default AllTodo
