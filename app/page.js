import Weather from './components/weather';
import Time from './components/time';
// const Weather = dynamic(() => import('./components/weather'), { ssr: false });
// const Time = dynamic(() => import('./components/time'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">15 Curzon Street</h1>
      
      <Time />

      <Weather />
    </div>
  );
}
