import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import FacultyDashboard from './components/FacultyDashboard'
import ParkingAllotment from './components/ParkingAllotment'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [selectedRole, setSelectedRole] = useState('')

  useEffect(() => {
    const role = localStorage.getItem('selectedRole')
    if (role) {
      setSelectedRole(role)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            selectedRole === 'faculty' 
              ? <FacultyDashboard selectedRole={selectedRole} />
              : <Dashboard selectedRole={selectedRole} />
          } 
        />
        <Route path="/parking" element={<ParkingAllotment selectedRole={selectedRole} />} />
        <Route path="/registration" element={<RegistrationForm selectedRole={selectedRole} />} />
      </Routes>
    </Router>
  )
}

export default App