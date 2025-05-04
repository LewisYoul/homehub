'use client';  // Need this for client-side state
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

const Weather = dynamic(() => import('./components/weather'), { ssr: false });

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">15 Curzon Street</h1>
      
      <div className="text-center text-2xl">
        {currentTime.toLocaleTimeString()}
      </div>

      <Weather />
    </div>
  );
}
