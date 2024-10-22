import React, { Component } from 'react';
import Axiosconfig from './Axiosconfig'; 

export class CancelledTrains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            cancelledTrains: [],
            error: null,
        };
    }

    handleInputChange = (e) => {
        this.setState({ date: e.target.value });
    }

    submitHandler = (e) => {
      e.preventDefault();
      const { date } = this.state;
  
      Axiosconfig.get('/trains')
          .then(res => {
              console.log('Response:', res.data); 
              const cancelledTrains = res.data.filter(train => train.date === date && train.cancelled);
              this.setState({ cancelledTrains });
              if (cancelledTrains.length === 0) {
                  alert('No trains cancelled on this date');
              }
          })
          .catch(err => {
              console.error('Error fetching data:', err);
              this.setState({ error: 'Error fetching data' });
          });
  }
  

    render() {
        return (
            <div className='container mt-3'>
                <div className='alert alert-danger'>
                    <h1>Cancelled Trains</h1>
                    <a href='/dashboard' className='btn btn-success mb-3'>Go to Dashboard</a>

                </div>
                <div className='container'>
         <a href='/checkpnr' className='btn btn-success mb-3'>Check PNR Status</a> &nbsp; &nbsp;
         <a href='/traindata' className='btn btn-success mb-3'>Train Info</a>&nbsp; &nbsp;
         <a href='/trainstatus' className='btn btn-success mb-3'>Track ur Train</a> &nbsp; &nbsp;
         </div>
                <form className='container' onSubmit={this.submitHandler}>
                    <div className='row'>
                        <div className='col'>
                            <input
                                type="date"
                                className='form-control'
                                value={this.state.date}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='row mt-3 mb-3'>
                        <div className='col'>
                            <button type="submit" className='btn btn-danger'>Check Cancelled Trains</button>
                        </div>
                    </div>
                </form>

                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr className='table-danger'>
                            <th>Train Number</th>
                            <th>Train Name</th>
                            <th>From Station</th>
                            <th>To Station</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cancelledTrains.map((train, ind) => (
                                <tr key={ind}>
                                    <td>{train.train_number}</td>
                                    <td>{train.train_name}</td>
                                    <td>{train.from_station}</td>
                                    <td>{train.to_station}</td>
                                    <td>{train.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {this.state.error && <div className='alert alert-danger'>{this.state.error}</div>}
            </div>
        );
    }
}

export default CancelledTrains;
