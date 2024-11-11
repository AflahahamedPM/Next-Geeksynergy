import Image from "next/image";
import mainImage from "../../public/image.avif";
import WinterEssentials from "../components/WinterEssentials.jsx"
import NavComponent from "../components/NavComponent.jsx";
export default function Home() {
  return (
    <>
    <head>
    <link rel="canonical" href="https://next-geeksynergy.vercel.app" />
    </head>
    <NavComponent />
      <div className="mt-20 mb-10 relative">
        <Image src={mainImage} className="mt-10" alt="img" />
        <p className="absolute bottom-52 font-sans left-16 text-5xl text-white uppercase font-bold">
          Winter Ready <br /> Essentials
        </p>
        <p className="absolute bottom-36 left-16 text-sm text-white font-light">
          The durable, affordable, never-want-to-take-offable layers to last the{" "}
          <br /> whole season and beyond.
        </p>
      </div>
      <WinterEssentials />
    
    </>
  );
}
