import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import CheckPNR from './Components/CheckPNR';
import Traindata from './Components/Traindata';
import TrainStatus from './Components/TrainStatus';
import CancelledTrains from './Components/CancelledTrains';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Main/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        <Route path="/checkpnr" element={<CheckPNR/>}> </Route>
        <Route path="/traindata" element={<Traindata/>}> </Route>
          <Route path="/trainstatus" element={<TrainStatus/>}> </Route>
          <Route path="/cancelledtrains" element={<CancelledTrains/>}> </Route>

        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
