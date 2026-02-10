import React, { useState } from 'react'

export default function SupportForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    category: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Log the submitted data
    console.log('Patient Support Request Submitted:', formData)
    
    // Show success message
    setShowMessage(true)
    setSubmitted(true)
    
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      email: '',
      category: '',
      message: ''
    })
    
    // Hide message after 5 seconds
    setTimeout(() => setShowMessage(false), 5000)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Info Section */}
        <div className="lg:col-span-1">
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">📋 How It Works</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">1.</span>
                <span>Fill out your details below</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">2.</span>
                <span>Describe your healthcare concern</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">3.</span>
                <span>Our NGC team will review your request</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">4.</span>
                <span>We'll contact you within 24 hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Support Request</h2>

            {/* Full Name */}
            <div className="mb-5">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="form-input"
              />
            </div>

            {/* Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="age" className="form-label">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="1"
                  max="150"
                  placeholder="Your age"
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>
            </div>

            {/* Category */}
            <div className="mb-5">
              <label htmlFor="category" className="form-label">
                Issue Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-input cursor-pointer"
              >
                <option value="">-- Select a category --</option>
                <option value="fever">🤒 Fever & Common Cold</option>
                <option value="injury">🩹 Injury & First Aid</option>
                <option value="mental-health">🧠 Mental Health & Wellness</option>
                <option value="general">❓ General Healthcare Query</option>
              </select>
            </div>

            {/* Message / Symptoms */}
            <div className="mb-6">
              <label htmlFor="message" className="form-label">
                Your Message / Symptoms <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Please describe your health concern in detail..."
                className="form-input resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="health-btn w-full text-lg font-semibold"
            >
              📤 Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Success Message */}
      {showMessage && (
        <div className="success-message">
          <p className="font-semibold">✓ Thank you! Our healthcare team will contact you shortly.</p>
        </div>
      )}
    </section>
  )
}
