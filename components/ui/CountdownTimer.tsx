'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
  className?: string
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = target - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-playfair">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-playfair">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-playfair">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Mins</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white font-playfair">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Secs</div>
      </div>
    </div>
  )
}