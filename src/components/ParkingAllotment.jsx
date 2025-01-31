import { useNavigate } from 'react-router-dom'

const ParkingAllotment = ({ selectedRole }) => {
  const navigate = useNavigate()

  const handleGuestRegistration = () => {
    navigate('/registration', { state: { registrationType: 'guest' } })
  }

  return (
    <>
      <header className="header">
        <img src="/vi-logo.png" alt="VI Logo" className="logo" />
        <h1>Vishwakarma Institute of Information Technology</h1>
        <div className="header-right">
          <span className="network-status">4G 10+ Mbps</span>
          <div className="nav-icons">
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="Home" />
            </a>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Profile" />
            </a>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png" alt="Help" />
            </a>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="Notifications" />
            </a>
          </div>
          <div className="user-initial">FN</div>
        </div>
      </header>

      <div className="user-info">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Avatar" className="user-avatar" />
        <div className="user-details">
            <h3>ADMIN NAME</h3>
            <p>Admin ID: ××××××××</p>
            <span className="status-badge">Active</span>
        </div>
        <div className="course-info">
            <p>Department of Computer Engineering</p>
        </div>
      </div>

      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search Module" />
          <button className="search-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="Search" />
          </button>
        </div>

        <div className="module-grid faculty-grid">
          <div className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/8377/8377308.png" alt="QR Scan" className="module-icon" />
            <h3>QR Scan</h3>
          </div>
          <div className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2038/2038446.png" alt="Space Occupancy" className="module-icon" />
            <h3>Space Occupancy</h3>
          </div>
          <div 
            className="module-card"
            onClick={handleGuestRegistration}
            style={{ cursor: 'pointer' }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/3534/3534139.png" alt="Guest Registration" className="module-icon" />
            <h3>Guest Registration</h3>
          </div>
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-content">
          <span>Powered By</span>
          <img src="/eduplus-logo.png" alt="Eduplus" className="footer-logo" />
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3938/3938026.png" alt="YouTube" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536394.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" alt="Twitter" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ParkingAllotment