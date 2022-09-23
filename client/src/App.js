<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/shared/MainNavbar";
import Home from './components/shared/home/Home';
import Footer from "./components/shared/Footer";
=======
import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow';
import Doctors from './components/doctors/Doctors';
import DoctorShow from './components/doctors/DoctorShow';
import Appointments from '/.components/appointments';
>>>>>>> cee7604 (app.js)

const App = () => (
  <>
    <MainNavbar />
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={ <Home />} />
=======
      <Route path='/' element={ <Home /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/users/:id' element={ <UserShow /> } />
      <Route path='/doctors' element={ <Doctors /> } />
      <Route path='/doctors/:id' element={ <DoctorShow /> } />
      <Route path='/:doctorId/appointments' element={ <Appointments /> } />
      <Route path='/*' element={ <Nomatch /> } />
>>>>>>> cee7604 (app.js)
    </Routes>
    <Footer />
  </>
)

export default App;