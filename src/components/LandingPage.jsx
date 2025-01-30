const LandingPage = ({ onRoleSelect }) => {
  return (
    <>
      <div className="background-overlay"></div>
      <div className="container">
        <div className="campus-illustration left">
          <img src="/src/assets/campus-left.svg" alt="" />
        </div>
        <div className="campus-illustration right">
          <img src="/src/assets/campus-right.svg" alt="" />
        </div>

        <div className="welcome-card">
          <div className="logo">
            <img src="/src/assets/logo.png" alt="ParkSense Logo" />
          </div>
          <h1 className="welcome-title">Smart Campus Parking</h1>
          <p className="welcome-text">
            Welcome to ParkSense - Your intelligent parking management solution 
            for a smoother campus experience.
          </p>

          <div className="features-grid">
            <div 
              className="feature-card clickable" 
              onClick={() => onRoleSelect('student')}
            >
              <div className="feature-icon">🎓</div>
              <h3>Students</h3>
              <p>Easy registration and guaranteed parking spots</p>
            </div>
            <div 
              className="feature-card clickable" 
              onClick={() => onRoleSelect('faculty')}
            >
              <div className="feature-icon">👨‍🏫</div>
              <h3>Faculty</h3>
              <p>Priority parking with flexible vehicle options</p>
            </div>
            <div 
              className="feature-card clickable" 
              onClick={() => onRoleSelect('guest')}
            >
              <div className="feature-icon">👥</div>
              <h3>Visitors</h3>
              <p>Hassle-free temporary parking passes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}