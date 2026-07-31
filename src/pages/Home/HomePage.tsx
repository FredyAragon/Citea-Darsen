import { Hero } from '../../modules/home/Hero/Hero';
import Recommended  from '../../modules/home/Recommended/Recommended';
import NewArrivals from '../../modules/home/NewArrivals/NewArrivals';
import Trends from '../../modules/home/Trends/Trends';
import Reviews from '../../modules/home/Reviews/Reviews';
import Directory from '../../modules/home/Directory/Directory';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Recommended />
      <NewArrivals />
      <Trends />
      <Reviews />
      <Directory />
    </>
  );
}