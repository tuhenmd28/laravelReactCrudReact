import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const UserList = ({users,handleDelete}) => {
  return (
    <>
    <div className="container">
        <h3>Users Details</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>SL NO.</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,i)=>(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/userDetails/${user.id}`} className='btn btn-sm btn-success'>View</Link>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-info mx-1'>Edit</Link>
                            <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default UserList