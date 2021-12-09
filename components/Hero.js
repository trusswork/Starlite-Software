import Image from "next/image";
import mainPic from "../images/trial-1.png";
import cirlce from "../images/rectangle.png";

function Hero() {
  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      <div className="absolute inset-0 ">
        <Image
          className=""
          src={mainPic}
          alt="main picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute bottom-[-5rem] left-[-5rem] ">
        <Image
          src={cirlce}
          alt="bigger"
          height="500"
          width="500"
        />
      </div>
      <div className="absolute top-24 right-[-100px]">
        <Image
          src={cirlce}
          alt="smaller"
          height="200"
          width="200"
        />
      </div>
      <div className="absolute font-primary text-white text-center z-10 left-[50%] ml-[-25%] md:top-[160px] leading-tight">
        <h1 className="text-[23px] font-secondary">
          Proffesional, Quality
        </h1>
        <h1 className="text-[110px] tracking-[1.7px] uppercase font-medium ">
          web design
          <br />& development
        </h1>
        <div className="mt-8">
          <a
            className="px-5 py-3 bg-[#5327D0] border-[#5327D0] border-2 font-secondary rounded-md"
            href="#">
            Contact us
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 z-16 left-[15rem] flex flex-row items-center">
        <div className="p-2 border-[#B296FF] border-2 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  "
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <div className="text-white font-secondary ml-5">
          <h2 className="font-primary text-[#B296FF] font-[16px] tracking-wider uppercase">
            class us on
          </h2>
          <h2 className="font-[20px] tracking-widest">
            01283 296220
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
