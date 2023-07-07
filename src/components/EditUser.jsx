import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userField, setUserField] = useState({
    name:"",
    email:"",
    password:"",

  })
  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/api/user/${id}`
      );

      setUserField(result.data.results);
    } catch (error) {
      console.log("Something wrong");
    }
  };
  const handelBack = () => {
    navigate("/");
  };
  const inputHandel = (e)=>{
    setUserField({
        ...userField,
        [e.target.name] : e.target.value,
    })
  }
  const updateUserData = async (e)=>{
    e.preventDefault();
    try {
       await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/updateUser/${id}`,userField);
       navigate('/')
    } catch (error) {
        console.log("Somethimg Wrong");
    }
  }
//   console.log(userField.password)
  return (
    <>
      <div className="container">
        <h1>Edit Form</h1>
        <form onSubmit={updateUserData}>
          <div className="my-3">
            <label htmlFor="id" className="form-label">
              ID:
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={id}
              disabled
            />
          </div>
          <div className="my-3">
            <label htmlFor="name" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userField.name}
              onChange={inputHandel}
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={userField.email}
              placeholder="Enter Your Email"
              onChange={inputHandel}
            />
          </div>
          <div className="my-3">
            <label htmlFor="Password" className="form-label">
              Password:
            </label>
            <input
              type="text"
              className="form-control"
              id="Password"
              name="password"
              value={userField.password}
              placeholder="Enter Your Password"
              onChange={(e)=>inputHandel(e)}
            />
          </div>
         
     
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
            <button onClick={handelBack} className="btn btn-primary">Back To Home</button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
