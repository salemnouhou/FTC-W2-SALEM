import { Hero,Benefits,HowItWorks,SuccessStories,Testimonials,Pricing } from "./components";

export default function Home() {
  return (
   <>
   <Hero/>
   <div className="bg-white py-12">
      <Benefits/>
      <HowItWorks/>
      <SuccessStories/>
      <Testimonials/>
      <Pricing/>
   </div>
   </>
  );
}
