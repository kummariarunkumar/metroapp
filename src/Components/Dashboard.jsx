import React, { Component} from 'react'

export class Dashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
  render() {
    return (
      <div className='container mt-3'>
        <div className='alert alert-primary'>
            <h1>Welcome to Train Info</h1>
        </div>
        <div className='container'>
        <a href='/checkpnr' className='btn btn-success mb-3'>Check PNR Status</a> &nbsp; &nbsp;
        <a href='/traindata' className='btn btn-success mb-3'>Train Info</a>&nbsp; &nbsp;
        <a href='/trainstatus' className='btn btn-success mb-3'>Track ur Train</a> &nbsp; &nbsp;
        <a href='/cancelledtrains' className='btn btn-success mb-3'>Cancelled Trains</a> &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <a href='/' className='btn btn-warning mb-3'>Log Out</a>
            
        </div>
        

      </div>
    )
  }
}

export default Dashboard









