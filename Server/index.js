const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//const tasks = require('./routes/Task');

const app = express();
app.use(express.json());
const port= process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());


// mongoose  connecttion
 mongoose.connect('mongodb://127.0.0.1:27017/taskbar',{

useNewUrlParser: true,
useUnifiedTopology: true,
},)
.then(()=>{console.log('connect')})
.catch((err)=>{console.log(err)}) ;

const TaskSchema =  new mongoose.Schema({
  input: {
   type: String,
   required: true,
  },
});
 const Taskmodel = mongoose.model('task1', TaskSchema);
 
app.post('/task',async (req,res)=> {
  await Taskmodel.create(req.body)
   .then(Task => res.json(Task))
   .catch(err=> res.json(err))

});
   // fetching single tag 
app.get('/task1', async (req,res)=> {

 const task = await Taskmodel.find()
res.send(task);

  
})
// updating 

app.put('/update/:id',async (req,res)=> {
   const {id} = req.params;
   const {input} = req.body;
   console.log("ho gya");
   console.log(typeof input);
   console.log(id);
  await Taskmodel.findByIdAndUpdate(id,{input},{new:true,useFindAndModify:false}) 
  .then((res)=>{console.log(res);})
  .catch((err)=>{console.log(err);})
  res.send("success");

  })
  // delete
  app.delete('/remove/:id', async (req, res)=> {
   console.log('okay');
   const {id} = req.params;
  
  await Taskmodel.findByIdAndDelete(id)
   .then(()=> res.send("deleted"))
   .catch(()=> res.send("gadbad"));
  // res.json ("and deleted")
  })
// declaring port 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
