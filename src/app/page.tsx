import { Hero,Benefits } from "./components";

export default function Home() {
  return (
   <>
   <Hero/>
   <div className="bg-rwhite py-12">
      <Benefits/>
   </div>
   </>
  );
}
