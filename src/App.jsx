import { useState } from 'react'
import LandingPage from './components/LandingPage'
import RegistrationForm from './components/RegistrationForm'
import ThankYouPage from './components/ThankYouPage'
import './styles/main.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [selectedRole, setSelectedRole] = useState('')

  return (
    <div className="app-container">
      {currentPage === 'landing' && (
        <LandingPage 
          onRoleSelect={(role) => {
            setSelectedRole(role)
            setCurrentPage('register')
          }} 
        />
      )}
      {currentPage === 'register' && (
        <RegistrationForm 
          selectedRole={selectedRole}
          onBack={() => setCurrentPage('landing')}
          onSubmitSuccess={() => setCurrentPage('thank-you')}
        />
      )}
      {currentPage === 'thank-you' && (
        <ThankYouPage 
          onBackToHome={() => setCurrentPage('landing')}
        />
      )}
    </div>
  )
}

export default App