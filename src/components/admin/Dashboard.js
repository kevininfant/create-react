import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import "./dashboard.css"
const Dashboard = () => {
  return (
      <div className="cardBody">
    <MDBRow >
     
     
      <MDBCol  md='3'>
        <MDBCard className="heightColumn" wide cascade>
          <MDBCardBody cascade className='text-center text3'>
            <MDBCardTitle className='card-title'>
              <strong>Total Students</strong>
            </MDBCardTitle>

         

            <MDBCardText>
            <strong>3257</strong>
            </MDBCardText>

        
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

     
     
     
  
      <MDBCol  md='3'>
        <MDBCard className="heightColumn" wide cascade>
          <MDBCardBody cascade className='text-center text3'>
            <MDBCardTitle className='card-title'>
              <strong>New Students</strong>
            </MDBCardTitle>

         

            <MDBCardText>
            <strong>257</strong>
            </MDBCardText>

        
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      
       
      <MDBCol  md='3'>
        <MDBCard className="heightColumn" wide cascade>
          <MDBCardBody cascade className='text-center text3'>
            <MDBCardTitle className='card-title'>
              <strong>Total Applications</strong>
            </MDBCardTitle>

         

            <MDBCardText>
            <strong>827</strong>
            </MDBCardText>

        
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


    </MDBRow>
    </div>
  )
}

export default Dashboard;