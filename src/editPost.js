import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "./configue/configue";
import axios from "axios";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({ userId: "", title: "", body: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${baseUrl}/posts/${id}`, inputs);
      console.log("Post updated:", response.data);
      setInputs({ userId: "", title: "", body: "" });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${baseUrl}/posts/${id}`);
        setInputs(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="id"
                name="userId"
                placeholder="userId"
                value={inputs.userId}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="title"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                name="body"
                placeholder="body"
                value={inputs.body}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Update Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
