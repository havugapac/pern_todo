import React,{Fragment, useState} from "react";

const EditTodo = ({todos}) =>{
const [description, setDescription] = useState(todos.description);
// console.log(todos);

const updateDescription = async e =>{
    e.preventDefault();

    try{

    const body = {description};
    const response = await fetch(`http://localhost:5000/todos/${todos.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(body)
    }) 

    // console.log(response);
    window.location="/"

    }catch(err)
    {
        console.error(err.message);
    }
}

return <Fragment>
 
<button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todos.todo_id}`} onClick={() => setDescription(todos.description)}>
  Edit
</button>


<div className="modal" id={`id${todos.todo_id}`} onClick={() => setDescription(todos.description)}>
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todos.description)}>
            &times;
        </button>
      </div>

     
      <div className="modal-body">
        <input type="text" className="form-control" value={description} 
        onChange={e =>setDescription(e.target.value)}/>
      </div>

      
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-dismiss="modal" 
      onClick={e =>updateDescription(e)}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todos.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
</Fragment>
}
export default EditTodo;