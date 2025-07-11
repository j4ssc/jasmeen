import './App.css'
import EmployeeForm from './pages/employee';
import LoginForm from "./pages/login";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="home" element={<Home />} >
        <Route path="employee" element={<EmployeeForm />} />
        <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
