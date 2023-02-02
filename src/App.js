import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='Fullstack-Frontend-Application/' element={<Home />}/>
          <Route exact path='Fullstack-Frontend-Application/adduser' element={<AddUser />}/>
          <Route exact path='Fullstack-Frontend-Application/edituser/:id' element={<EditUser />}/>
          <Route exact path='Fullstack-Frontend-Application/viewuser/:id' element={<ViewUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
