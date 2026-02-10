import React, { useState, useRef, useEffect } from 'react'

// Rule-based chatbot responses
const chatbotRules = {
  appointment: {
    keywords: ['appointment', 'schedule', 'book', 'reserve', 'when can i'],
    response: '📅 To schedule an appointment, please fill out the support form above with your details and preferred time. Our team will contact you within 24 hours to confirm.'
  },
  emergency: {
    keywords: ['emergency', 'urgent', 'critical', 'accident', 'severe', 'ambulance'],
    response: '🚨 EMERGENCY: If this is a life-threatening situation, please call your local emergency number (911 in USA, 112 in India) immediately or visit the nearest hospital. Our support team cannot handle emergency cases.'
  },
  volunteer: {
    keywords: ['volunteer', 'join us', 'help', 'support us', 'work with', 'donation'],
    response: '💚 We appreciate your interest in volunteering! Please email us at support@healthcarengo.org with your profile. We have opportunities in healthcare, counseling, and community outreach.'
  },
  hours: {
    keywords: ['hours', 'timing', 'open', 'whats your', 'available', 'office hours'],
    response: '⏰ Our support team operates Monday to Friday, 9 AM - 6 PM IST. We typically respond within 24 hours. Fill the form above for faster assistance.'
  },
  fever: {
    keywords: ['fever', 'temperature', 'cold', 'cough', 'flu'],
    response: '🤒 Common fever management: Stay hydrated, rest well, use paracetamol/ibuprofen as directed, and monitor temperature. Seek medical help if fever persists beyond 3 days or temperature exceeds 103°F. Consult our healthcare team for personalized advice.'
  },
  injury: {
    keywords: ['injury', 'wound', 'cut', 'broken', 'sprain', 'bleeding'],
    response: '🩹 For minor injuries: Clean with soap, apply antibiotic cream, cover if necessary. For serious injuries, seek immediate medical help. Do NOT ignore persistent pain or bleeding. Use the form above to consult our healthcare professionals.'
  },
  mental: {
    keywords: ['mental', 'stress', 'anxiety', 'depression', 'sad', 'lonely', 'suicidal'],
    response: '🧠 Your mental health matters. If you\'re in crisis, please contact a mental health professional immediately. Many free helplines exist. We offer supportive guidance - fill the form to connect with our counselors.'
  },
  cost: {
    keywords: ['cost', 'price', 'fee', 'charge', 'afford', 'free', 'payment'],
    response: '💰 Our services are provided on a donation basis to ensure accessibility. We never deny care due to inability to pay. Fill the form to discuss financial assistance options with our team.'
  }
}

const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase()
  
  // Check each rule
  for (const [key, rule] of Object.entries(chatbotRules)) {
    for (const keyword of rule.keywords) {
      if (message.includes(keyword)) {
        return rule.response
      }
    }
  }
  
  // Fallback response
  return '💙 Thanks for your question! I didn\'t fully understand, but please fill out the support form above or ask about: appointments, emergencies, volunteering, hours, fever, injuries, mental health, or costs.'
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm the Healthcare Support Assistant (Concept-Level AI). How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 500)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-40"
        title="Open AI FAQ Assistant"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col max-h-96 overflow-hidden z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <h3 className="font-bold text-lg">AI-Powered FAQ Assistant (Concept)</h3>
            <p className="text-xs text-blue-100">Rule-based responses • Not real AI</p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
              >
                Send
              </button>
            </div>
          </form>

          {/* Disclaimer */}
          <div className="px-4 py-2 bg-yellow-50 border-t border-yellow-200 text-xs text-gray-600">
            ⚠️ This is a <strong>concept-level AI chatbot</strong> with predefined responses. For serious concerns, please use the form above or call emergency services.
          </div>
        </div>
      )}
    </>
  )
}
