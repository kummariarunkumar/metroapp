import React, { Component } from "react";
import Axios from "axios";

class TrainStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainNumberOrName: "",
      trainStatus: null,
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ trainNumberOrName: e.target.value });
  };

  fetchTrainStatus = async (e) => {
    e.preventDefault();
    const { trainNumberOrName } = this.state;

    try {
      const response = await Axios.get(`http://localhost:3200/trainstatus`);
      const trainData = response.data;
      const trainStatus = trainData.find(
        (train) =>
          train.trainNumber === trainNumberOrName ||
          train.trainName.toLowerCase() === trainNumberOrName.toLowerCase()
      );

      if (trainStatus) {
        this.setState({ trainStatus, error: null });
      } else {
        this.setState({ error: "Train not found", trainStatus: null });
      }
    } catch (error) {
      this.setState({
        error: "Failed to fetch train status",
        trainStatus: null,
      });
    }
  };

  render() {
    const { trainNumberOrName, trainStatus, error } = this.state;

    return (
      <div className="container mt-3">
        <div className="container mt-3">
          <div className="alert alert-success">
            <h1>Check Train Status</h1>
            <a href="/dashboard" className="btn btn-success mb-3">
              Go to Dashboard
            </a>
          </div>
          <div className="container">
            <a href="/checkpnr" className="btn btn-success mb-3">
              Check PNR Status
            </a>{" "}
            &nbsp; &nbsp;
            <a href="/traindata" className="btn btn-success mb-3">
              Train Info
            </a>
            &nbsp; &nbsp;
            <a href="/cancelledtrains" className="btn btn-success mb-3">
              Cancelled Trains
            </a>
          </div>
        </div>
        <form onSubmit={this.fetchTrainStatus}>
          <input
            type="text"
            placeholder="Enter Train Number or Name"
            value={trainNumberOrName}
            onChange={this.handleInputChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-success mt-2">
            Check Status
          </button>
        </form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {trainStatus && (
          <div className="mt-3">
            <h2>Train Status:</h2>
            <p>
              <strong>Train Number:</strong> {trainStatus.trainNumber}
            </p>
            <p>
              <strong>Train Name:</strong> {trainStatus.trainName}
            </p>
            <p>
              <strong>Status:</strong> {trainStatus.status}
            </p>
            <p>
              <strong>Current Station:</strong> {trainStatus.currentStation}
            </p>
            <p>
              <strong>Arrival Time:</strong>{" "}
              {new Date(trainStatus.arrivalTime).toLocaleString()}
            </p>
            <p>
              <strong>Departure Time:</strong>{" "}
              {new Date(trainStatus.departureTime).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default TrainStatus;
