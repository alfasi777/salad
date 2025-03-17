import Image from "next/image";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
        <Hero />                  
        <Contact />
    </div>
  );
}
