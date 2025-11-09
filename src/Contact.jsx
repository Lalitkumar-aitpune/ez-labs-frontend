import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format'
    if (!formData.phone.trim()) return 'Phone is required'
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) return 'Phone must be 10 digits'
    if (!formData.message.trim()) return 'Message is required'
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.status === 200) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError('Failed to submit form. Please try again.')
      }
    } catch (err) {
      setError('Error submitting form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">We'd love to hear from you. Send us a message!</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {submitted && <div className="success-message">Form Submitted</div>}
        
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
