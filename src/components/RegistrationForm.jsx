import { useState } from 'react'

const RegistrationForm = ({ selectedRole, onBack, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    prnNumber: '',
    vehicleNumber: '',
    gender: '',
    vehicleType: selectedRole === 'faculty' ? '' : undefined,
    license: null
  })
  const [previewImage, setPreviewImage] = useState(null)
  const [fileName, setFileName] = useState('No file chosen')
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          license: 'Please select an image file only'
        }))
        return
      }

      setFileName(file.name)
      setFormData(prev => ({
        ...prev,
        license: file
      }))

      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName || !/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Please enter a valid name (letters only)'
    }

    if (!formData.prnNumber || !/^[A-Za-z0-9]+$/.test(formData.prnNumber)) {
      newErrors.prnNumber = 'Please enter a valid registration number'
    }

    if (!formData.vehicleNumber || !/^[A-Z0-9\s-]+$/.test(formData.vehicleNumber.toUpperCase())) {
      newErrors.vehicleNumber = 'Please enter a valid vehicle registration number'
    }

    if (!formData.license) {
      newErrors.license = 'Please select a license image'
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender'
    }

    if (selectedRole === 'faculty' && !formData.vehicleType) {
      newErrors.vehicleType = 'Please select your vehicle type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form Data:', formData)
      onSubmitSuccess()
    }
  }

  return (
    <>
      <div className="background-overlay"></div>
      <div className="container">
        <div className="form-card">
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
          <div className="logo">
            <img src="logo.png" alt="Company Logo" />
          </div>
          <h2 className="form-title">Vehicle Registration Form</h2>
          <div className="role-badge">
            {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </div>
          
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter Your Full Name"
                />
                {errors.fullName && <div className="error-message">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="prnNumber">Registration Number</label>
                <input
                  type="text"
                  id="prnNumber"
                  name="prnNumber"
                  value={formData.prnNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Your Registration Number"
                />
                {errors.prnNumber && <div className="error-message">{errors.prnNumber}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Registration Number</label>
                <input
                  type="text"
                  id="vehicleNumber"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Vehicle Number"
                />
                {errors.vehicleNumber && <div className="error-message">{errors.vehicleNumber}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="license">License Image</label>
                <div className="file-input-container">
                  <input
                    type="file"
                    id="license"
                    name="license"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <span className="file-name">{fileName}</span>
                </div>
                {previewImage && (
                  <div className="image-preview">
                    <img src={previewImage} alt="License preview" />
                    <button 
                      type="button" 
                      className="remove-image" 
                      onClick={() => {
                        setPreviewImage(null)
                        setFileName('No file chosen')
                        setFormData(prev => ({ ...prev, license: null }))
                      }}
                    >
                      ×
                    </button>
                  </div>
                )}
                {errors.license && <div className="error-message">{errors.license}</div>}
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && <div className="error-message">{errors.gender}</div>}
                </div>

                {selectedRole === 'faculty' && (
                  <div className="form-group half">
                    <label htmlFor="vehicleType">Vehicle Type</label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Vehicle Type</option>
                      <option value="2wheeler">2 Wheeler</option>
                      <option value="4wheeler">4 Wheeler</option>
                    </select>
                    {errors.vehicleType && <div className="error-message">{errors.vehicleType}</div>}
                  </div>
                )}
              </div>

              <button type="submit" className="register-btn">
                Submit Registration
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationForm