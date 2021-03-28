import React, { Component } from 'react'
import { login } from '../../ApiService'
import './login.css'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      console.log(res)
      if (res.success) {
        if(res.type=='student'){
           window.location='./home'
        }
        else{
          window.location='./home'
        }
      }
    })
  }

  render() {
    return (
      
       <div className="canteiner" style={{textAlign:"center" }}>
            <form noValidate onSubmit={this.onSubmit} style={{width: "min-content",borderStyle:"groove",width:"350px",marginTop:"70px",marginLeft:"465px",borderRadius:"10px",background:"#FFE3FA"}}>
              <h1  style={{marginTop:"50px" ,color:"blueviolet"}}> sign in</h1>
              <div className="form-group"style={{marginTop:"30px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>Email address</label>
               </div>
               <div style={{marginTop:"15px"}}>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="              Enter email"
                  value={this.state.email}
                  onChange={this.onChange} />
              </div>
              <div className="form-group" style={{marginTop:"30px",color:"blueviolet"}}>
                <label htmlFor="password">Password</label>
                </div>
                <div style={{marginTop:"15px"}}>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="               Password"
                  
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button 
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"118px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >
                Sign in
              </button>
            </form>
          </div>
      
      
    )
  }
}
export default Login