import React, { useState } from 'react'
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

 
//actionTypes ==>
const ADD_COUNT = "ADD_COUNT";
const DEC_COUNT = "DEC_COUNT";
const RESET_COUNT = "RESET_COUNT";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

//ACTION ==>
const addCount = (payload) => {
    return {
        type: ADD_COUNT,
        payload,
    }
}

const decCount = (payload) => {
    return {
        type: DEC_COUNT,
        payload,
    }
}

const resetCount = (payload) => {
    return {
        type: RESET_COUNT,
        payload,
   } 
          
}

const addTodo = (payload) => {
    
    return {
        type: ADD_TODO,
        todoData: {
            id:uuid(),
            todo: payload,
            status: false,
        }
   }
}

const deleteActionTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id,
    }
}

const doneMyTodo = (id) => {
    return {
        type: DONE_TODO,
        id:id,
    }
}

const updateMyTodo = (id,myUpdatedTodo) => {
    return {
        type: UPDATE_TODO,
        id:id,
        newTodo:myUpdatedTodo,
    }
}

//Reducer Configuration ==>
const initialState = {
    count: 0,
    todos:[],
}
const counterReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, count: state.count + action.payload };
        case DEC_COUNT:
            return { ...state, count: state.count - action.payload };
        case RESET_COUNT:
            return { ...state, count: action.payload };
        case ADD_TODO:
            return { ...state, todos: [action.todoData, ...state.todos] };
        case DELETE_TODO:
            const filteredTodos = state.todos.filter((ele) => ele.id !== action.id);
            console.log(filteredTodos);
            return { ...state, todos: [...filteredTodos] };
        case DONE_TODO:
            const doneTodos = state.todos.map((ele) => (ele.id === action.id) ? {...ele,status:!ele.status} : ele)
            console.log(doneTodos)
            return { ...state, todos: [...doneTodos] };
        case UPDATE_TODO:
            const updatedTodos = state.todos.map((ele) => (ele.id === action.id) ? { ...ele, todo: action.newTodo } : ele)
            return { ...state, todos: [...updatedTodos] };
        default:
            return state;
    }
}

//Store Cofiguration ==>
export const store = createStore(counterReducer)

export const ReduxApp = () => {

     const dispatch = useDispatch(); //To dispatch Action 
    const count = useSelector((state) => state.count) //To render component of that particular state ==>
    const mytodos = useSelector((state) => state.todos) //Getting Array of Todo and re-render todos component=>
    function incCount() {
        dispatch(addCount(1));
    }
    function redCount() {
       dispatch(decCount(1))
    }
    function resCount() {
       dispatch(resetCount(0))
    }

    const [todo, setToodo] = useState("");
    function handleChange(e) {
        setToodo(e.target.value);
        console.log(todo);
    }
    function handleTodo() {
        dispatch(addTodo(todo));
        setToodo("");
    }
    function deleteTodo(id) {
        dispatch(deleteActionTodo(id));
    }
    function doneTodo(id) {
        dispatch(doneMyTodo(id))
    }
    function updtateTodo(id) {
        const myUpdatedTodo = prompt("Enter Updated Todo")
        dispatch(updateMyTodo(id,myUpdatedTodo))
    }
  return (
      <div className="container w-50 mx-auto my-3">
          <div className=" mb-3 border border-info p-3">
              <h3 className="text-muted fst-italic">My Counter App Using Redux</h3>
              <h4 className="text-muted fst-italic">Count is {count}</h4>
              <button className="btn btn-info" onClick={incCount}>+</button>
              <button className="btn btn-danger m-3" onClick={redCount}>-</button>
              <button className="btn btn-primary" onClick={resCount}>Reset</button>
          </div > 

          <div className=" mb-3 border border-success p-3">
              <h3 className="text-muted fst-italic">Todo list</h3>
              <h5 className="text-muted fst-italic">Yous todo : {todo ?  todo : "Enter Your Todo" }</h5>
              <input type="text" placeholder="enter Your Todo" className="form-control my-3" onChange={handleChange} value={todo} />
              <button className="btn btn-success" onClick={handleTodo}>Add Todo</button>
              </div>
                  {mytodos&&mytodos.map((ele,i) => { 
                      return (
                        <div className=" mb-3 border border-warning p-3" key={i}>
                          <h4 className={`${ele.status&& "text-decoration-line-through"} text-muted fst-italic `}>Todo: {ele.todo}</h4>
                              <h5 className="text-muted fst-italic">Status: {ele.status ? "True" : "False"}</h5>
                              <button className="btn btn-primary" onClick={()=>updtateTodo(ele.id)}>Update</button>
                              <button className="btn btn-success m-3" onClick={()=>doneTodo(ele.id)}>Done</button>
                              <button className="btn btn-danger" onClick={()=>deleteTodo(ele.id)}>Delete</button>
                        </div>
                          
                      )
                  })}
              
          
    </div>
  )
}
