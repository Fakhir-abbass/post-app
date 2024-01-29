import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Data from './Data';

const Posts = () => {
  const [postData, setPostData] = useState(Data)
  const [postIdtoDelate, setPostIdtoDelate]=useState(null)
  const handleDelete =(id) =>{
    setPostIdtoDelate(id)
  }

  const  confirmDelete = ()=>{
    if(postIdtoDelate !== null){
      let updatePost = postData.slice()
      for(let i =0; i < updatePost.length; i++){
        if(postIdtoDelate === updatePost[i].id){
          updatePost.splice(i, 1)
         break;
        }
        
      }
      setPostData(updatePost);
      setPostIdtoDelate(null);
    }
   
  }
  
    return ( 
      <section className="blog-wrapper">
         <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
               {postData.map((items, index) =>(
                 <div className=" mt-5" key={index}>
               
                <h2>{items.title}</h2>
                 <p>{items.detail}</p>

                 <Link  to={`/posts/${items.id}`}>Read more</Link>
                 <button onClick={ () => handleDelete(items.id)} className='ms-3 border-0 text-danger'>Delete</button>
                 {postIdtoDelate === items.id && (
                <div className="bg-success text-center p-5">
                   <p>Are you sure you want to delete this post?</p>
                   <button onClick={confirmDelete} className='btn btn-danger'>Yes</button>
                  <button onClick={() => setPostIdtoDelate(null)} className='btn btn-warning ms-3'>No</button>
                </div>
                 )}
             </div>
               ))}
            </div>
        </div>
       </div>
      </section>
     );
}
 
export default Posts;

  