import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
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
        <Route path="/dashboard" element={<Dashboard selectedRole={selectedRole} />} />
        <Route path="/registration" element={<RegistrationForm selectedRole={selectedRole} />} />
      </Routes>
    </Router>
  )
}

export default App