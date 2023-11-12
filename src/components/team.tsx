import React from 'react';
import Image from 'next/image';
import aboutImage from '../images/profile pic.jpeg';
import Kim from "../images/kim.jpg";

const Team = () => {
  return (
    <section id='Team' className="pt-20 flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="mb-10 text-center">
          {/* <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
            Team
          </span> */}
          <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">Meet The Team</h1>
        </div>
        <div className="flex flex-wrap justify-center mb-10 lg:mb-20">
          <div className="w-full px-6 mb-16 sm:w-1/2 lg:w-1/3 lg:mb-0">
            <div>
              <Image src={aboutImage} alt="" width={450} height={100} />
              <a href="#" className="inline-block w-full p-6 transition duration-200 bg-blue-800 rounded-lg hover:bg-blue-600">
                <h2 className="mb-2 text-3xl font-bold text-white">Nwafor Chibuike</h2>
                <p className="mb-4 text-lg font-semibold text-gray-100">Frontend Developer</p>
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-6 h-6 text-gray-100 bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full px-6 mb-16 sm:w-1/2 lg:w-1/3 lg:mb-20">
            <div>
              <Image src={Kim} alt="kim" width={350} height={10} />
              <a href="#" className="inline-block w-full p-6 transition duration-200 bg-blue-800 rounded-lg hover:bg-blue-600">
                <h2 className="mb-2 text-3xl font-bold text-white">Kimberly Peters</h2>
                <p className="mb-4 text-lg font-semibold text-gray-100">Backend developer</p>
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-6 h-6 text-gray-100 bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full px-6 mb-16 sm:w-1/2 lg:w-1/2 lg:mb-0">
            {/* <div>
              <Image src="/path/to/your/image3.jpg" alt="" width={450} height={100} />
              <a href="#" className="inline-block w-full p-6 transition duration-200 bg-blue-800 rounded-lg hover-bg-blue-600">
                <h2 className="mb-2 text-3xl font-bold text-white">Azeez Tiamiyu</h2>
                <p className="mb-4 text-lg font-semibold text-gray-100">Frontend developer</p>
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-6 h-6 text-gray-100 bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </div>
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className="flex justify-center">
          <a href="#" className="px-4 py-2 text-gray-100 bg-blue-600 rounded-lg hover-bg-blue-700">View more</a>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
