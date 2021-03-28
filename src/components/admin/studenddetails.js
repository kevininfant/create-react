import React, { useEffect,useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import { FaBeer } from 'react-icons/fa';
import {getAllusers} from '../../ApiService'
function Cards (){
  const [user,setUser]= useState([])
  const [tempUser,setTempUser]= useState([])
  const getUser=async()=>{
    let result;
    try {
        result = await getAllusers();
    } catch (e) { }
    try {
        if (result.success) {
          setUser(result.user)
          setTempUser(result.user)
             console.log(result.user)    
        }
    } catch (e) { }
  }
  useEffect(() => {
    getUser();
}, []);
 const card = 
   user.map(data =>{
     return(
<Card style={{marginTop:"25px",marginLeft: "270px",width:"710px"}}>
        <CardBody style={{textAlign:"-webkit-auto" ,padding:"30px",background:"#FFE3FA"}}>
        <table className="table col-md-6 mx-auto">
            <tbody style={{color:"blueviolet",}} >
              <tr>
                <td><b>Name</b> </td>
                :
                <td>{data.Name}</td>
              </tr>
              <tr>
                <td><b>studentId</b></td>
                :
                <td>{data.studentId}</td>
              </tr>
              <tr>
                <td><b>department</b></td>
                :
                <td>{data.department}</td>
              </tr>
              <tr>
                <td><b>Email</b></td>
                :
                <td>{data.email}</td>
              </tr>
            </tbody>
          </table>
            </CardBody> 
    </Card>
    )
   })
 
    return (
        <div>
          <h2>  <FaBeer /> </h2>
          
           <input 
                               
                               onChange={e => {
                                   setUser([])
                                   setUser(
                                       tempUser.filter(data => {
                                           return (data.Name)
                                               .toUpperCase()
                                               .includes(
                                                   e.target.value.toUpperCase()
                                               );
                                       })
                                   );
                               }}
                           />
        
  {card}
    </div>
    )
    
  }

export default Cards



// import React, { Component } from 'react';
// import { Container,Card, Button, CardTitle, CardText,CardBody, Row, Col } from 'reactstrap';
// class Users extends Component {
// constructor(props) {    super(props);
//     this.state = {
//       product: []
//     }
//   }
//   componentDidMount(){
//     fetch('http://localhost:5000/users/readgly', {
//       method: 'get',
//     }).then(res=>res.json())
//       .then(product=>{
//         return this.setState({ product });
//       })
//   }
// card(){
//   return this.state.product.map(data =>{
//     return (
      
// <Col lg="3">
       
// </Col>
//     )
//   });
// }
//   render() {
// return(
//   <Container fluid={true}>
//   <Row>
    
//     {this.card()}
//    </Row>
//    </Container>
// )
//   }
// }
// export default Users;