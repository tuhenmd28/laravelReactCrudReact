import axios from "axios";
import React,{useEffect , useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
const UserDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
   const [user,setUser] = useState([])
    useEffect(() => {
        fetchData();
    }, [id])
    const fetchData = async ()=>{
        try {
            const result = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/user/${id}`);
            // console.log(result.data.results)
            setUser(result.data.results)
            
        } catch (error) {
            console.log("Something wrong")
        }
    }
    const handelBack = ()=>{
        navigate("/")
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>User Details</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Full Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
            <button onClick={handelBack} className="btn btn-primary">Back To Home</button>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
