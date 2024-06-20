import  {AboutMission, Authors, Categories, FeaturedPost, Hero, Join, Partners, Testimonial, Why}  from "@/components";
import Image from "next/image";


export default async function Home() {
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
