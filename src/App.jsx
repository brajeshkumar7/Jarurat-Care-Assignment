import React from 'react'
import Header from './components/Header'
import SupportForm from './components/SupportForm'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <SupportForm />
      <Chatbot />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="font-bold text-lg mb-4">About Us</h4>
              <p className="text-gray-400 text-sm">
                Healthcare Support Assistant is an NGO initiative providing accessible healthcare guidance to underserved communities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Submit Request</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400">About NGO</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 support@healthcarengo.org</li>
                <li>📱 +91-800-HEALTH-1</li>
                <li>⏰ Mon-Fri, 9 AM - 6 PM IST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm text-center">
              © 2026 Healthcare Support Assistant NGO. All rights reserved. | 
              <a href="#" className="hover:text-blue-400 ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-blue-400 ml-1">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
