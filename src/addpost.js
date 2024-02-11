import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./configue/configue";
import axios from "axios";

const AddPost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ userId: "", title: "", body: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate positive numbers for userId
    if (name === "userId" && /^\d*$/.test(value)) {
      setInputs((prev) => ({ ...prev, [name]: value }));
    } else if (name !== "userId") {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/posts`, inputs);
      console.log(response);
      if (response.status === 201) {
        // navigate("/");
        console.log(response);
        setInputs({ userId: "", title: "", body: "" });
      } else {
        console.error("Failed to add post");
      }
    } catch (error) {
      console.log("something went wrong", error);
    }

    // Check the length of the title from inputs object
    if (inputs.title.length < 5) {
      alert("Please enter a title with at least 5 characters.");
    }
    if (inputs.body.length > 500) {
      // console.log("Character count exceeded 500");
      alert("exceed limit you can enter maximum 500 characters.");
    }
    if (parseInt(inputs.userId) < 0) {
      alert("Please enter a positive number for userId.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card p-5">
            <form onSubmit={handleSubmit}>
              <h3>Add Post</h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="userId"
                  placeholder="userId *"
                  required
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
                  placeholder="title *"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="body"
                  placeholder="body *"
                  value={inputs.body}
                  onChange={handleChange}
                  required
                ></textarea>
                <p className="mt-3">Character Count: {inputs.body.length}</p>
              </div>

              <button type="submit" className="btn btn-primary">
                Add Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
