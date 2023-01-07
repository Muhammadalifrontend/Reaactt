import React, { useEffect } from 'react';
import "./style.scss";

const index = () => {
   
const [gallery, setGallery] = useState([]);
const [loading, setLoading] = useState(false)



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((result) => {
                setGallery(result)
                setLoading(true)

            });

    }, []);
    console.log(gallery);
    if (! loading) {
        return <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    }
    return (
        <div className='w-75 card shadow mt-5 mx-auto user'>
       <h1>User List</h1>
       <div className="wrapper">
           {gallery.length > 0 ? gallery.map((post) => {
               return(
                   <div className="card">
                       <img src={post.thumbnailUrl} alt={post.title} />
                       <div className="card-body">
                           <h4 className='card-title'>{post.title}</h4>
                       </div>
                   </div>

               )
           }) : "Not found"
           }
       </div>
   </div>
   
    );
    
};

export default index;