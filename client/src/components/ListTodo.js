import React,{Fragment, useEffect, useState} from "react";
import EditTodo from "./EditTodo";

const ListTodo = () =>{

    const [todo, setTodo] = useState([]);


    const deleteTodo = async(id) =>{

      try{
      
    const deleteTodo = await fetch(`/todos/${id}`, {method: "DELETE"});

    setTodo( todo.filter( todos => todos.todo_id !== id));

      }catch(err)
      {
        console.error(err.message);
      }
    }

    const getTodo = async () =>{
      
        try{

        const response = await fetch("http://perntodop.herokuapp.com/todos");
        const jsonData = await response.json();

        setTodo(jsonData);

        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodo();
    }, []);

    //console.log(todo);

return <Fragment>
    <table className="table mt-5 txt-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/*
        <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
        */}

        {todo.map( todos =>(
            <tr key={todos.todo_id}>
            <td>{todos.description}</td>
            <td><button className="btn btn-primary"><EditTodo todos={todos}/></button></td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todos.todo_id)}>Delete</button></td>
          </tr>
        ))}
      
      
    </tbody>
  </table>
</Fragment>; 
}

export default ListTodo;