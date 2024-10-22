import React, { Component } from 'react';
import Axios from 'axios';

class Traindata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trains: [],
            fromStation: '',
            toStation: '',
            journeyDate: '',
            filteredTrains: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3200/runningtrains')
            .then(res => {
                this.setState({ trains: res.data });
            })
            .catch(err => {
                console.error('Error fetching trains:', err);
            });
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { trains, fromStation, toStation, journeyDate } = this.state;

        const filteredTrains = trains.filter(train => 
            train.from_station.toLowerCase() === fromStation.toLowerCase() &&
            train.to_station.toLowerCase() === toStation.toLowerCase() &&
            train.date_of_journey === journeyDate
        );

        this.setState({ filteredTrains });
    }

    render() {
        return (
          <div className='container mt-3'>
          <div className='alert alert-success'>
              <h1> Available Trains!</h1>
      <a href='/dashboard' className='btn btn-success mb-3'>Go to Dashboard</a>
      
          </div>
          <div className='container'>
              <a href='/checkpnr' className='btn btn-success mb-3'>Check PNR Status</a> &nbsp; &nbsp;
              <a href='/trainstatus' className='btn btn-success mb-3'>Track ur Train</a> &nbsp; &nbsp;
              <a href='/cancelledtrains' className='btn btn-success mb-3'>Cancelled Trains</a>
                  
              </div>
                <form onSubmit={this.submitHandler} className='mb-3'>
                    <div className='row'>
                        <div className='col'>
                            <input 
                                type="text" 
                                name="fromStation" 
                                placeholder='From Station'
                                className='form-control' 
                                value={this.state.fromStation} 
                                onChange={this.handleInputChange} 
                                required 
                            />
                        </div>
                        <div className='col'>
                            <input 
                                type="text" 
                                name="toStation" 
                                placeholder='To Station'
                                className='form-control' 
                                value={this.state.toStation} 
                                onChange={this.handleInputChange} 
                                required 
                            />
                        </div>
                        <div className='col'>
                            <input 
                                type="date" 
                                name="journeyDate" 
                                className='form-control' 
                                value={this.state.journeyDate} 
                                onChange={this.handleInputChange} 
                                required 
                            />
                        </div>
                        <div className='col'>
                            <button type="submit" className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </form>

                {this.state.filteredTrains.length > 0 && (
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr className='table-danger'>
                                <th>Train Number</th>
                                <th>Train Name</th>
                                <th>From Station</th>
                                <th>To Station</th>
                                <th>Date of Journey</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filteredTrains.map((train, index) => (
                                <tr key={index}>
                                    <td>{train.train_number}</td>
                                    <td>{train.train_name}</td>
                                    <td>{train.from_station}</td>
                                    <td>{train.to_station}</td>
                                    <td>{train.date_of_journey}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {this.state.filteredTrains.length === 0 && (
                    <p>No trains found for the selected route and date.</p>
                )}
            </div>
        );
    }
}

export default Traindata;
