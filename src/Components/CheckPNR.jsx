import React, { Component } from "react";
import Axiosconfig from "./Axiosconfig";

export class CheckPNR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pnrDetails: [],
      pnrNumber: "",
      filteredDetails: [],
    };
  }

  componentDidMount() {
    Axiosconfig.get("/pnrDetails")
      .then((res) => {
        console.log(res.data);
        this.setState({ pnrDetails: res.data });
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching data");
      });
  }

  handleInputChange = (e) => {
    this.setState({ pnrNumber: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { pnrDetails, pnrNumber } = this.state;

    const filteredDetails = pnrDetails.filter(
      (detail) => detail.pnr === pnrNumber
    );

    if (filteredDetails.length > 0) {
      this.setState({ filteredDetails });
      alert("Details fetched successfully");
    } else {
      alert("No details found for this PNR number");
      this.setState({ filteredDetails: [] });
    }
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="alert alert-success">
          <h1>Check PNR Here!</h1>
          <a href="/dashboard" className="btn btn-success mb-3">
            Go to Dashboard
          </a>
        </div>
        <div className="container">
          <a href="/traindata" className="btn btn-success mb-3">
            Train Info
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/trainstatus" className="btn btn-success mb-3">
            Track ur Train
          </a>
          &nbsp; &nbsp;
          <a href="/cancelledtrains" className="btn btn-success mb-3">
            Cancelled Trains
          </a>
        </div>
        <form className="container" onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="pnrnumber"
                placeholder="Enter 10 Digit PNR Number"
                className="form-control"
                value={this.state.pnrNumber}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col">
              <button type="submit" className="btn btn-success">
                Check
              </button>
            </div>
          </div>
        </form>

        {this.state.filteredDetails.length > 0 && (
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="table-primary">
                <th>Train Number</th>
                <th>Train Name</th>
                <th>Boarding Station</th>
                <th>Destination Station</th>
                <th>Class</th>
                <th>Passenger Count</th>
                <th>Status</th>
                <th>Date of Journey</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredDetails.map((detail, ind) => (
                <tr key={ind}>
                  <td>{detail.trainNumber}</td>
                  <td>{detail.trainName}</td>
                  <td>{detail.boardingStation}</td>
                  <td>{detail.destinationStation}</td>
                  <td>{detail.class}</td>
                  <td>{detail.passengerCount}</td>
                  <td>{detail.status}</td>
                  <td>{detail.dateOfJourney}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default CheckPNR;
