import { useNavigate } from 'react-router-dom'

const Dashboard = ({ selectedRole }) => {
  const navigate = useNavigate()

  const handleRegistration = () => {
    navigate('/registration')
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
          <div className="user-initial">SN</div>
        </div>
      </header>

      <div className="user-info">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Avatar" className="user-avatar" />
        <div className="user-details">
          <h3>{selectedRole === 'faculty' ? 'FACULTY NAME' : 'STUDENT NAME'}</h3>
          <p>Registration No. ××××××××</p>
          <span className="status-badge">Active</span>
        </div>
        <div className="course-info">
          <p>{selectedRole === 'faculty' ? 'Department of Computer Engineering' : 'BTech-Artificial Intelligence and Data Science'}</p>
        </div>
      </div>

      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search Module" />
          <button className="search-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="Search" />
          </button>
        </div>

        <div className="module-grid">
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2231/2231642.png" alt="Academics" className="module-icon" />
            <h3>Academics</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1547/1547177.png" alt="Accounts" className="module-icon" />
            <h3>Accounts</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" alt="Admission" className="module-icon" />
            <h3>Admission</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1950/1950715.png" alt="Assignment" className="module-icon" />
            <h3>Assignment</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1940/1940663.png" alt="Certificate" className="module-icon" />
            <h3>Certificate</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2558/2558383.png" alt="Event" className="module-icon" />
            <h3>Event</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2641/2641457.png" alt="Examination" className="module-icon" />
            <h3>Examination</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2007/2007707.png" alt="Feedback" className="module-icon" />
            <h3>Feedback</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/850/850960.png" alt="My Time Table" className="module-icon" />
            <h3>My Time Table</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png" alt="Project Monitoring" className="module-icon" />
            <h3>Project Monitoring</h3>
          </a>
          <a href="#" className="module-card">
            <img src="https://cdn-icons-png.flaticon.com/512/5526/5526266.png" alt="Quiz" className="module-icon" />
            <h3>Quiz</h3>
          </a>
          <div 
            className="module-card"
            onClick={handleRegistration}
            style={{ cursor: 'pointer' }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/3534/3534139.png" alt="Registration" className="module-icon" />
            <h3>{selectedRole === 'faculty' ? 'Faculty Registration' : 'Student Registration'}</h3>
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

export default Dashboard