'use client';  // Need this for client-side state
import Script from 'next/script';
import { useState, useEffect } from 'react';

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

      <a className="weatherwidget-io" href="https://forecast7.com/en/51d46n0d99/rg30-1db/" data-label_1="CURZON STREET" data-label_2="WEATHER" data-theme="original">CURZON STREET WEATHER</a>
      
      <Script id="weatherwidget-io-js" src="https://weatherwidget.io/js/widget.min.js" strategy="afterInteractive" />
    </div>
  );
}
