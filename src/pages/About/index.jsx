import React,{useRef} from 'react';
import "./style.scss";
const index = () => {

   const cardRef=useRef();
   const addStyle=()=>{
      cardRef.current.classList.toggle('d-none')
   }


   console.log("render about page");

   return (
      <>
        <div className="container">
        <button className="btn btn-success" onClick={()=>addStyle()}>menu</button>
        <div className="card shadow li-5 "ref={cardRef}>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta incidunt numquam iusto aperiam, animi eius et, optio recusandae dolorem consequuntur natus magnam esse odit dolores tenetur rem autem in molestiae doloribus qui quibusdam corrupti! Repellendus id nesciunt assumenda ad laboriosam, rem voluptate voluptatibus eos quibusdam unde asperiores eaque, iusto doloribus molestias ut tenetur beatae voluptates nemo deserunt atque est corporis illo odio deleniti? Fugiat, exercitationem!</p>
        </div>
        </div>
      </>
   );
};

export default index;