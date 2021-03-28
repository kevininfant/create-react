import React, { Component } from 'react'
import { studentUpdate } from '../../ApiService'
// import "./register.css";
class StudentUpdate extends Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      department:'',
      date:'',
      description: '',
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
      department:this.state.department,
      date:this.state.date,
      description:this.state.description
  
    }

    studentUpdate(newUser).then(res => {
      console.log(newUser)
            if(res.success){
      window.location='./home'
    }

    
        })
      }
  render() {
    return (
      <div className="canteiner" style={{textAlign:"center"}}>
            <div   style={{width: "min-content",borderStyle:"groove",width:"700px",marginTop:"20px",marginLeft:"245px",borderRadius:"10px",background:"#FFE3FA"}}>
              <h1  style={{marginTop:"15px" ,color:"blueviolet"}}>Update Your Report</h1>
              <div className="form-group"style={{marginTop:"25px"}}>
                <label style={{color:"blueviolet",textAlign:"-moz-initial"}}>Name</label>
               </div>
               <div style={{marginTop:"10px"}}>
               <input style={{width:"500px"}}
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="                                                             Name"
                  value={this.state.Name}
                  onChange={this.onChange}
                />
              </div>
            
              <div style={{marginTop:"20px"}}>
                <label  style={{color:"blueviolet",textAlign:"-moz-initial"}}>Depertment</label>
               </div>
               <div style={{marginTop:"10px"}}>
               <input style={{width:"500px"}}
                  type="text"
                  className="form-control"
                  name="department"
                  placeholder="                                                         Department"
                  value={this.state.department}
                  onChange={this.onChange}
                />
              </div>
              <div style={{marginTop:"20px"}}>
                <label  style={{color:"blueviolet",textAlign:"-moz-initial"}}>Date</label>
               </div>
               <div style={{marginTop:"10px"}}>
               <input style={{width:"500px"}}
                  type="text"
                  className="form-control"
                  name="date"
                  placeholder="                                                               Date"
                  value={this.state.date}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label htmlFor="textarea" style={{color:"blueviolet",textAlign:"-moz-initial"}}>Description</label>
               </div>
               <div style={{marginTop:"20px"}}>
                <input style={{width:"500px", paddingBottom:"20px",paddingTop:"20px"}}
    
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="                                                  Type of your Report"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <button  onClick={this.onSubmit}
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"30px",backgroundColor:"#CE17E4",width:"118px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >
                Send Report
              </button>
            </div>
          </div>
    )
  }
}

export default StudentUpdate
