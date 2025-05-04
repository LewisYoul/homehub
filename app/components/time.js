'use client';

import { useState, useEffect } from 'react';

export default function Time() {
  // Initialize with null to prevent hydration mismatch
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    // Set initial time only on client side
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render anything until we're on the client
  if (!currentTime) {
    return null;
  }

  return (
    <div className="text-center text-2xl">
      {currentTime.toLocaleTimeString()}
    </div>
  );
}