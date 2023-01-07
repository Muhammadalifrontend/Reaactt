import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./style.scss";
const index = () => {
   const [task, setTask] = useState([
      { id: 1, title: "dolor ispum lorem", deadline: "2012-12-22" },
      { id: 2, title: "dolor ispum lorem", deadline: "2012-12-20" },
   ])
   const [title, setTitle] = useState('');
   const [deadline, setDiadline] = useState('');



   const addTask = () => {
      const newTask = {
         id: uuidv4(),
         title: title,
         deadline: deadline,
      }
      console.log(newTask);
      
      const check={
         title:title.trim().length===0,
         deadline:deadline.trim().length===0
      }
      if(check.title || check.deadline){
        toast.error('plese enret title or deadline',{
           position:'top-right',
           autoClose:1000
        })
      }else{
         setTask([...task, newTask])
         setTitle('')
         setDiadline('')
         toast.success('success new task',{
            autoClose:1000,
            position:'top-right'
         })
         
      }
   }


   const removeTask=(id)=>{
      const filterTask=task.filter((el)=>{
         return el.id !==id
      })



      setTask(filterTask)
      toast.info('Task deleted succesfuly');
   }
   console.log("render home page");

   return (
      <>
       <ToastContainer />
         <div className="card w-75 p-5 mx-auto mt-3 shadow">
            <label htmlFor="taskname" className='w-75 my-2 mx-auto'>
               <p>Enter task title</p>
            </label>
            <input
               type="text"
               className='form-control p-3 w-75 mx-auto '
               id='taskname'
               placeholder='enter task title'
               value={title}
               onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="taskname" className='w-75 my-2 mx-auto'>
               <p>Select task deadline</p>
            </label>
            <input 
            type="date" 
            className='form-control p-3 w-75 mx-auto' 
            id='deadline' 
            placeholder='Select task deadline' 
            value={deadline}
            onChange={(e)=>setDiadline(e.target.value)}
            />
            <button className="btn btn-success w-75 p-3 my-3 mx-auto" onClick={()=>addTask()}>
               ADD NEW TASK
               </button>
            <table className='w-75 p-5 mx-auto mt-5 shadow table table-striped table-hover table-bordered'>
               <thead>
                  <tr>
                     <th>ID</th><th>Title</th><th>DeadLine</th><td>remove</td>
                  </tr>
               </thead>
               <tbody>
                  {
                     task.length > 0 ? 
                     (task.map((el, id) => {
                        return (
                           <tr key={el.id}>
                              <td>{id + 1}</td><td>{el.title}</td><td>{el.deadline}</td>
                              <td><button className='btn btn-danger'onClick={()=>removeTask(el.id)}>Remove</button></td>
                           </tr>
                        )
                     })) : (<h2>Not found</h2>) 
                  }
               </tbody>
            </table>


         </div>
      </>
   );
};

export default index; <h1>Home</h1>