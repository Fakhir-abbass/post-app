import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from './configue/configue';

const PostDetail = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { id } = useParams();
  useEffect(()=> {
    const fetchData = async ()=>{
     try{
      const response = await fetch(`${baseUrl}/Posts/${id}`)
      const data = await response.json();
      setPostData(data);
      setLoading(false);
     }
     catch(error){
      console.log("something went wrong", error);
      setLoading(false);
     }
    }
    fetchData()
  },[id])
if(loading){
  return  <div>Loading ....</div>
 
}
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7">
          <div className="card p-5 text-center">
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
// ----------------------without Api 
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import Data from './Data';
// const PostDetail = () => {
//   const { id } = useParams();
//   const PostDetail = ()=>{
//     let foundPost = null;
//     for (let i = 0; i < Data.length; i++) {
//       if (Number(id) === Data[i].id) {
//       //  if( id === String(Data[i].id)){
//         foundPost = Data[i];
//         break;
//       }
//     }   
//     return  foundPost;
//   }
//    const resultFoundPost = PostDetail()
//    if (!resultFoundPost) {
//     return <div>Post not found</div>;
// }

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//        <div className="col-lg-7">
//        <div className="card p-5 text-center">
//         <h1>{resultFoundPost.title}</h1>
//         <p>{resultFoundPost.detail}</p>
//         </div> 
//        </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetail;