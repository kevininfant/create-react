import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {getUser} from '../../ApiService';
function Card (){

  const [buttons, setButtons] = useState(false);

  const showButtons = () => setButtons(!buttons);
  const [user,setUser]= useState({})
  const getUsers=async()=>{
    let result;
    try {
        result = await getUser();
    } catch (e) { }
    try {
        if (result.success) {
          setUser(result.user)
             console.log(result.user)    
        }
    } catch (e) { }
  }
  useEffect(() => {
    getUsers();
}, []);

    let history = useHistory();

    const redirect = () => {
      history.push('/students')
    }
    const redirect2 = () => {
        history.push('/studentupdate')
      }
      const redirect3 = () => {
        history.push('/students')
      }
      const redirect4 = () => {
        history.push('/userupdate')
      }
    return (
      <div className="container" style={{ backgroundImage: "url(/s2.jpg)" }}>
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
          <h2 style={{}}>RATHNAVEL SUBRAMANIAM COLLEGE OF ARTS AND SCIENCE </h2>
          
            <h2 style={{}}>(AUTONOMOUS)</h2>
            <h2 style={{}}>HOSTEL FOOD MANAGEMENT</h2>
            <h1 className="text-center">WELCOME</h1>
          
            {user.admin ?
             <div>
            <button   onClick={redirect}
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >STUDENTS DETAILS</button>
               <button onClick={redirect2}
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >STUDENTS UPDATES</button>
              </div>:
<div>
            <button onClick={redirect3}
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              > WEEKLY SPECIAL</button>
                   <button  onClick={redirect4}
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >SEND UPDATES</button>
          </div>}
          </div>
        </div>
      </div>
    )
  }


export default Card