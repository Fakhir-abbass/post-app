import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from './configue/configue';
import CircularProgress from '@mui/material/CircularProgress';
const Posts = () => {
  const [postData, setPostData] = useState([])
  const [postIdtoDelate, setPostIdtoDelate]=useState(null)
  const [loading, setLoading]=useState(true)
  const handleDelete =(id) =>{
    setPostIdtoDelate(id)
  }

  const  confirmDelete = async (id)=>{
    const response = await fetch(`${baseUrl}/Posts/${id}`,{
      method: 'DELETE',
    })
    if(response.status === 200){
      let updatePost = postData.slice()
      for(let i =0; i < updatePost.length; i++){
        if(postIdtoDelate === updatePost[i].id){
          updatePost.splice(i, 1)
         break;
        }       
      }
      // const updatePost = postData.filter(Posts => Posts.id !==id)
      setPostData(updatePost);
      setPostIdtoDelate(null);
    }else{
      return <div>No post exist</div>
    }
   
  }

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/Posts`);
        const data = await response.json();
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  if(loading){
    return   <CircularProgress />
  }
    return ( 
      <section className="blog-wrapper">
         <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
              <Link to="/addPost" className='btn btn-info'> {loading ?('Loading ...'):( 'Add Post')}  </Link>
               {postData.map((items, index) =>(
                 <div className=" mt-5" key={index}>
               
                <h2>{items.title}</h2>
                 <p>{items.body}</p>
                 <Link  to={`/posts/${items.id}`}>Read more</Link>
                 <Link to ={`/posts/${items.id}/edit`} className='ms-3'>Edit Post</Link>
                 <button onClick={ () => handleDelete(items.id)} className='ms-3 border-0 text-danger'>{loading ?('Loading ...'):( 'Delete')} </button>
                 {postIdtoDelate === items.id && (
                <div className="bg-success text-center p-5">
                   <p>Are you sure you want to delete this post?</p>
                   <button onClick={()=>confirmDelete(items.id)} className='btn btn-danger'>{loading ?('Loading ...'):( 'Yes')}</button>
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

  