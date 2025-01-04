"use client";
import Link from "next/link";
import topImage from "@/public/assets/home/Logo_13.jpg"
import header from "@/public/assets/home/Header.svg"
import Image from "next/image"

import house from "@/public/assets/home/header/width_800.webp"
import Logo from "@/public/assets/home/header/width_200 (4).webp"
import Logo1 from "@/public/assets/home/header/width_200 (1).webp"
import AI from "@/public/assets/home/header/width_200 (3).webp"

const Form = () => {
  return (
    <>
      <div className="mt-40"></div>
      <div className="mb-4 px-[10%]">
        <div className="relative md:h-[60vh] lg:h-[70vh]">
          {/* <Image
          src={topImage}
          alt="Logo"
          className="absolute inset-0 -z-10 w-full"
          width={500}
          height={300}
          style={{ objectFit: 'cover', height: '100%' }}
        />
         flex items-center justify-center 
        <div className="text-center max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-white text-2xl md:text-3xl mb-6  ">
            Transforming Real estate lending
          </h1>

          <h2 className="text-white text-5xl md:text-6xl font-semibold mb-4  ">
            AI-Driven Solutions for Thriving Lending Ecosystem
          </h2>

          <p className="text-white text-lg mb-12  max-w-2xl mx-auto ">
            Revolutionizing how brokers and borrowers seamlessly navigate the lending process with AI-powered precision.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <Link
              href="/funding-request"
              className="px-8 py-3 bg-[#004F8F] border rounded-full hover:bg-white-800 text-white transition-colors duration-200"
            >
              Funding Request
            </Link>

            <Link
              href="/solutions"
              className="px-8 py-3 bg-white  rounded-full hover:bg-white-100 text-[#004F8F] transition-colors duration-200  "
            >
              Explore our solutions
            </Link>
          </div>
        </div>
        <div className="absolute right-2 md:right-8">
          <svg width="13" height="109" viewBox="0 0 13 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.58079" cy="5.92845" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="30.2136" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="54.4988" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="78.7839" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="103.071" r="5.72533" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-4">
          <svg width="38" height="51" viewBox="0 0 38 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" d="M1.0625 31.6328L18.9898 49.3917L36.9349 31.6328" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.5" d="M1.0625 16.4883L18.9898 34.2472L36.9349 16.4883" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.2" d="M1.0625 1.3457L18.9898 19.1046L36.9349 1.3457" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div> */}

          {/* <Image
        src={header.src}
        alt="Logo"
          className="inset-0  w-[100%]"
          width={500}
          height={300}
        style={{objectFit: 'cover', height: "100%"}}
        /> */}
          <div className="">
            <div className="left-top relative hidden md:block">
              <div className="absolute w-[5vw] h-[5vw] bg-gray-300"></div>
              <div className="absolute w-[5vw] h-[5vw] bg-gray-200 left-[5vw] top-[5vw]"></div>
            </div>
            <div className="right-top absolute right-0">
              <div className="absolute w-[5vw] h-[5vw] bg-gray-300 right-[5vw]"></div>
              <div className="absolute w-[5vw] h-[5vw] bg-gray-200 right-[10vw]"></div>
              <div className="absolute w-[5vw] h-[5vw] bg-gray-300 right-[5vw] top-[5vw] mt-[2px]"></div>
              <div className="absolute w-[5vw] h-[5vw] bg-gray-300 right-0 top-[8vw]"></div>
            </div>
            <div className="left-bottom absolute bottom-0 w-[20vw]">
              <div className="absolute w-[5vw] h-[5vw] bg-gray-300 bottom-0"></div>
              <div className="absolute w-[5vw] h-[5vw] bg-gray-200 left-[5vw] bottom-0 ml-[2px]"></div>
              <div className="absolute w-[5vw] h-[5vw] bg-gray-200 bottom-[5vw]"></div>
              <div className="absolute left-[6vw] bottom-0 justify-center h-[10vw] w-[100%]">
                <Image
                  src={Logo.src}
                  alt="logo"
                  className="w-[50%] h-[80%] mx-auto"
                  width={500}
                  height={100}
                />
                <Image
                  src={Logo1.src}
                  alt="logo1"
                  className="w-[50%] h-[60%] mx-auto -translate-y-[50%]"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="right-bottom absolute right-0 bottom-0 w-[8vw] h-[10vw]">
              <Image
                src={AI.src}
                alt="ai-avatar"
                className="w-[100%] h-[100%] absolute right-[5vw] "
                width={600}
                height={200}
              />
              <div className="absolute w-[5vw] h-[5vw] bg-gray-300 right-0 bottom-0 "></div>
            </div>
          </div>
          <div className="md:flex">
            <div className="w-[80vw] md:w-[30vw] mt-[10vw]">
              <div className="flex relative">
                <p className="text-black text-xl xl:text-4xl font-bold w-[80%]">Revolutionizing Real Estate Lending for Brokers</p>
                <div className="absolute w-[5vw] h-[5vw] bg-gray-300 right-0 hidden md:block"></div>
              </div>
              <div className="mb-2">
                <p className="text-gray-500 text-sm">"Streamlining Real Estate Lending with AI and Real-Time Data."</p>
              </div>
              <div className="w-[100%] mb-4">
                <p className="text-gray-500 text-md xl:text-lg text-wrap font-semibold">We are more than a consulting firm; we are problem-solvers, innovators, and trusted advisors. Our mission is to transform how businesses leverage technology to drive efficiency, security, and growth.</p>
              </div>
            </div>
            <div className="md:w-[40vw] xl:w-[50vw] md:h-[30vh] xl:h-[50vh]  mt-[10vw]">
              <div className="relative">
                <Image
                  src={house.src}
                  alt="house"
                  width={750}
                  height={600}
                />
                  <p className="absolute left-[40%] bottom-[20%] font-semibold text-sm md:text-xl xl:text-3xl text-[#004F8F]">AiBuildiQ™</p>
                {/* <Image
                  src={Logo1.src}
                  alt="logo1"
                  className="absolute left-[35%] bottom-[5%]"
                  width={200}
                  height={100}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
