// import React, { useState, useEffect } from "react";
import useHomeHooks from "../hooks/useHomeHooks";
import UserList from "./UserList";

const Home = () => {
  const [users,handleDelete,addNewUser,userField,inputHandel] = useHomeHooks();

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center p-3">
        React Js Laravel 10 REST API CRUD
      </h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Add Your Details</h3>
          <form onSubmit={addNewUser}>
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
                onChange={inputHandel}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={userField.password}
                onChange={inputHandel}
                placeholder="Enter Your Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <UserList users={users} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Home;
