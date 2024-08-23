import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
      
    ]
};

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo :  (state, action)=>{
             const newtodo = 
             {
                id : nanoid(), text : action.payload, completed : false
             }
              
             state.todos.push(newtodo);

        },

        removeTodo : (state, action)=>{
          state.todos =  state.todos.filter(todo=> todo.id  !== action.payload);
        },

        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
              todo.text = action.payload.text;
              todo.completed = action.payload.completed;
            }
          }
          


        
    }
});


export const  {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;

