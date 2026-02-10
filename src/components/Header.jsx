import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          🏥 Healthcare Support Assistant
        </h1>
        <p className="text-blue-100 text-lg sm:text-xl">
          NGO Healthcare Support Network — Connecting You to Care
        </p>
      </div>
    </header>
  )
}
