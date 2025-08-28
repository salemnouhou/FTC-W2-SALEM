import { Hero,Benefits,HowItWorks } from "./components";

export default function Home() {
  return (
   <>
   <Hero/>
   <div className="bg-rwhite py-12">
      <Benefits/>
      <HowItWorks/>
   </div>
   </>
  );
}
