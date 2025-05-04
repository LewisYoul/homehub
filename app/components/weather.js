'use client';

import Script from 'next/script';

export default function Weather() {
  return (
    <div>
      <a className="weatherwidget-io" href="https://forecast7.com/en/51d46n0d99/rg30-1db/" data-label_1="CURZON STREET" data-label_2="WEATHER" data-theme="original">CURZON STREET WEATHER</a>
      
      <Script id="weatherwidget-io-js" src="https://weatherwidget.io/js/widget.min.js" strategy="afterInteractive" />
    </div>
  );
}