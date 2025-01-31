import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = (role) => {
    localStorage.setItem('selectedRole', role)
    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="eduplus-banner">
          <img src="/vi-logo.png" alt="VI Logo" className="eduplus-logo" />
          <h3>Welcome to VI Portal!</h3>
          <div className="banner-number">1000+</div>
          <div className="banner-text">STUDENTS<br />ENROLLED!</div>
          <div className="stats-box">
            <div className="stat">
              <span>50+</span>
              <span>Faculty</span>
            </div>
            <div className="stat">
              <span>30+</span>
              <span>Courses</span>
            </div>
          </div>
          <div className="trust-badge">Your Future Starts Here</div>
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-header">
          <img src="/vi-logo.png" alt="VI Logo" className="vi-logo" />
          <h2>Welcome to <span className="highlight">VI Portal</span></h2>
        </div>
        
        <div className="login-buttons">
          <button 
            onClick={() => handleLogin('faculty')} 
            className="login-btn faculty-btn"
          >
            Login as Faculty
          </button>
          <button 
            onClick={() => handleLogin('student')} 
            className="login-btn student-btn"
          >
            Login as Student
          </button>
        </div>

        <div className="help-links">
          <a href="#" className="help">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png" alt="Help" />
            Help
          </a>
          <a href="#" className="forgot">
            <img src="https://cdn-icons-png.flaticon.com/512/7776/7776657.png" alt="Forgot" />
            Forgot Password?
          </a>
        </div>
        
        <div className="store-buttons">
          <a href="#" className="store-btn">
            <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
          </a>
          <a href="#" className="store-btn">
            <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on App Store" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage