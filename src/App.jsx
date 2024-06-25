import './App.css';
import RegisterUser from './Pages/User-Pages/register';
import Home from './Pages/User-Pages/home';
import { ToastContainer } from 'react-toastify'
import { Routes, Route  } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import Complaints from './Pages/User-Pages/complaints';
import Status from './Pages/User-Pages/status';
import History from './Pages/User-Pages/history';
import Contact from './Pages/User-Pages/contact';
import ComplaintDetails from './Components/complaint_details';
import MainNavBar from './Components/main_navbar';
import AdminHome from './Pages/Admin-Pages/admin_home';
import AdminComplaints from './Pages/Admin-Pages/admin_complaints';
import AdminPoliceStations from './Pages/Admin-Pages/admin_police_stations';
import AdminPoliceOfficers from './Pages/Admin-Pages/admin_police_officers';
import AdminInquires from './Pages/Admin-Pages/admin_inquries';
import AddPoliceStation from './Components/Admin-Components/add_police_station';
import AddPoliceOfficer from './Components/Admin-Components/add_police_officer';
import PoliceHome from './Pages/Police-Pages/police_home';
import PoliceComplaints from './Pages/Police-Pages/police_complaints';
import PoliceOfficers from './Pages/Police-Pages/police_officers';
import PoliceInquires from './Pages/Police-Pages/police_inquires';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<MainNavBar />} /> 

    <Route path='/register' element={<RegisterUser />} />
    <Route path='/home' element={<Home />} />
    <Route path='/complaints' element={<Complaints />} />
    <Route path='/status' element={<Status />} />
    <Route path='/history' element={<History />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/view' element={<ComplaintDetails />} />
    <Route path='/admin-home' element={<AdminHome />} />
    <Route path='/admin-complaints' element={<AdminComplaints />} />
    <Route path='/admin-police-stations' element={<AdminPoliceStations />} />
    <Route path='/add-police-station' element={<AddPoliceStation />} />
    <Route path='/add-police-officer' element={<AddPoliceOfficer />} />
    <Route path='/admin-police-officers' element={<AdminPoliceOfficers />} />
    <Route path='/admin-users-inquires' element={<AdminInquires />} />
    <Route path='/police-home' element={<PoliceHome />} />
    <Route path='/police-complaints' element={<PoliceComplaints />} />
    <Route path='/police-officers' element={<PoliceOfficers />} />
    <Route path='/police-users-inquires' element={<PoliceInquires />} />
    
    </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
