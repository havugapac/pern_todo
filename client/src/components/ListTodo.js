import React,{Fragment, useEffect, useState} from "react";

const ListTodo = () =>{

    const [todo, setTodo] = useState([]);

    const getTodo = async () =>{
      
        try{

        const response = await fetch("http://localhost:5000/todos");
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
            <tr>
            <td>{todos.description}</td>
            <td><button className="btn btn-primary">Edit</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        ))}
      
      
    </tbody>
  </table>
</Fragment>; 
}

export default ListTodo;