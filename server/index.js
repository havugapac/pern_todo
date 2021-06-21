require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db.js');

//middlewares
app.use(express.json());
app.use(cors());

//Routes//

//create a todo
app.post('/todos', async (req, res) => {

    try{
    const {description} = req.body;
    const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1)", [description]);
    res.json(newTodo);
    console.log(req.body);

    }
    catch(err)
    {
   console.error(err.message);
    }

});




const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening to port ${port} ....`);
});

module.exports = app;
