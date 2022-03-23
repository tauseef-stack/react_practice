import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { TodosInput } from './TodosInput';

export const Todos = () => {
    const [list, setList] = useState([]);
    function handleTodo(value) {
        setList([value,...list])
        console.log(list);
    }
    function handleDelete(id) {
        let myList = list.filter(el => el.id !== id);
        setList(myList);
    }
    function handleToggle(id) {
        let myList = list.map((el) => {
            if (el.id === id) {
                el.status = !el.status;
            };
            return el;

       });
       setList(myList) 
    }
    function handleUpdate(id) {
        let newText = prompt('Update Todo');
        let myList = list.map((ele => {
            if (ele.id === id) ele.text = newText;
            return ele;
        })) 
        setList(myList);
    }
  return (
      <div className="container w-25 mx-auto my-3">
          <h2 className="text-muted fst-italic">TodoList App :</h2>
          <TodosInput addTodo={handleTodo} />
          <TodoList list={list} myDelete={handleDelete} myToggle={handleToggle} myUpdate={ handleUpdate }/>
    </div>
  )
}
