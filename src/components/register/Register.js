import React, { Component } from 'react'
import { register } from '../../ApiService'
import "./register.css";
class Register extends Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      studentId: '', 
      email: '',
      depertment:'',
      password: '', 
     type:'',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit() {
  

    const newUser = {
      Name: this.state.Name,
      studentId: this.state.studentId,
      email: this.state.email,
      password: this.state.password,
      department:this.state.department,
      type:this.state.type
  
    }
    console.log(newUser)
    register(newUser).then(res => {
      console.log(res)
            if(res.success){
      // this.props.history.push(`/login`) next update
      window.location='./students'
      }

      
          })
        }
  render() {
    return (
      <div className="canteiner" style={{textAlign:"center"}}>
            <div  style={{width: "min-content",borderStyle:"groove",width:"370px",marginTop:"20px",marginLeft:"465px",borderRadius:"10px",background:"#FFE3FA"}}>
              <h1  style={{marginTop:"15px" ,color:"blueviolet"}}> Register!</h1>
              <div className="form-group"style={{marginTop:"25px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>Name</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="                 Name"
                   value={this.state.Name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>StudentId</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  placeholder="              Student Id"
                   value={this.state.studentId}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>Email address</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="           Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label style={{color:"blueviolet",textAlign:"-moz-initial"}}>Depertment</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  placeholder="           Depertment"
                  value={this.state.department}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label  style={{color:"blueviolet",textAlign:"-moz-initial"}}>Type of person</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="         Type of person"
                  value={this.state.type}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group" style={{marginTop:"20px",color:"blueviolet"}}>
                <label htmlFor="password">Password</label>
                </div>
                <div style={{marginTop:"10px"}}>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="            Password"
                  
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button onClick={this.onSubmit}
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"30px",backgroundColor:"#CE17E4",width:"118px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >
                Register!
              </button>
            </div>
          </div>
    )
  }
}

export default Register
