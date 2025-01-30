const ThankYouPage = ({ onBackToHome }) => {
  return (
    <>
      <div className="background-overlay"></div>
      <div className="container">
        <div className="thank-you-card">
          <div className="success-icon">✓</div>
          <h1 className="thank-you-title">Thank You!</h1>
          <p className="thank-you-text">
            Your vehicle registration has been successfully submitted. 
            You will receive a confirmation email shortly.
          </p>
          <div className="registration-details">
            <p>Your parking permit will be processed within 24-48 hours.</p>
            <p>Please check your email for further instructions.</p>
          </div>
          <button className="home-btn" onClick={onBackToHome}>
            Back to Home
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ThankYouPage