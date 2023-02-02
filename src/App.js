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
          <Route exact path='test-app-frontend/' element={<Home />}/>
          <Route exact path='test-app-frontend/adduser' element={<AddUser />}/>
          <Route exact path='test-app-frontend/edituser/:id' element={<EditUser />}/>
          <Route exact path='test-app-frontend/viewuser/:id' element={<ViewUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
