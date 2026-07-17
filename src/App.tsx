import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; 
import Hero from './modules/Hero/Hero';
import Recommended from './modules/Recommended/Recommended';
import NewArrivals from './modules/NewArrivals/NewArrivals';
import Trends from './modules/Trends/Trends';
import Reviews from './modules/Reviews/Reviews';
import Directory from './modules/Directory/Directory';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recommended />
        <NewArrivals />
        <Trends />
        <Reviews />
        <Directory />
      </main>
      <Footer /> 
    </>
  );
}