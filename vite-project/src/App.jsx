import './App.css'
import EmployeeForm from './pages/employee';
import LoginForm from "./pages/login";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './components/utils/protectedroute';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="home" element={
          <ProtectedRoute>
            <Home />
            </ProtectedRoute>} >
        <Route path="employee" element={
          <ProtectedRoute allowedRoles={["hr", "manager", "admin"]}>
            <EmployeeForm />
          </ProtectedRoute>
          } />
        <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
