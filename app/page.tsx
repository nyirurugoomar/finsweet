import  {AboutMission, Categories, FeaturedPost, Hero, Why}  from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <FeaturedPost/>
      <AboutMission/>
      <Categories/>
      <Why/>
      
    </main>
  );
}
