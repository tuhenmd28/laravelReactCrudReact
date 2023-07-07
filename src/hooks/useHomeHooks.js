import React, { useState, useEffect } from "react";
import axios from "axios";
const useHomeHooks = ()=>{
  
const initialValue = {
  name: "",
  email: "",
  password: "",
}
// input field state
const [userField, setUserField] = useState({...initialValue});
// input handel
const inputHandel = (e)=>{
  setUserField({
      ...userField,
      [e.target.name] : e.target.value,
  })
}
// new user add 
const addNewUser = async (e)=>{
  e.preventDefault();
  try {
    const responce = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/addNew/`,userField);
    fetchData();
     setUserField({...initialValue})
  } catch (error) {
      console.log("Somethimg Wrong");
  }
}
// user data state
const [users,setUsers] = useState([])
useEffect(()=>{
    fetchData()  
},[])
//  fatch user data function
const fetchData = async ()=>{
  try {
      const result = await axios(`${import.meta.env.VITE_REACT_APP_URL}/api/users`);
      setUsers(result.data.results)  
  } catch (error) {
      console.log("Something wrong")
  }
}
//  delete user
const handleDelete = async (id)=>{
await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/deleteUser/${id}`);
const newUserData = users.filter((item)=>{
    return(
        item.id !== id
    )
})
setUsers(newUserData);
}

return [users,handleDelete,addNewUser,userField,inputHandel];

}

export default useHomeHooks;