import  {AboutMission, Authors, Categories, FeaturedPost, Hero, Join, Partners, Testimonial, Why}  from "@/components";
import Image from "next/image";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <FeaturedPost/>
      <AboutMission/>
      <Categories/>
      <Why/>
      <Authors/>
      <Partners/>
      <Testimonial/>
      <Join/>
      
    </main>
  );
}
