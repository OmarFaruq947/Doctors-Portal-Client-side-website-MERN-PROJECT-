import React from "react";

const DeveloperProfile = () => {
  return (
    <div>
      <header className="max-h-full bg-white p-6  grid max-w-5xl mx-auto px-12">
        <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img
              className="lg:h-80 md:h-64 h-40 "
              src="https://i.ibb.co/4YY3ZZM/IMG-20220317-101501.jpg"
              alt="..."
            />
          </div>
          <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
              Hi, I am Omar faruq, Creative Technologist
            </h1>
            <p className="text-xl text-gray-800 text-center md:text-left">
              Hi, I am Omar Faruq, I studied information and communication
              engineering, at Bangladesh army university of engineering and
              technology (BAUET). I am a curious learner. I love to learn new
              things. and of course A self-motivated and enthusiastic web
              developer with a deep interest in JavaScript. I love programming
              and solving problems. I count myself as a hardworking person. I
              always like to do challenging work. My job is to build your
              website so that it is functional and user-friendly but at the same
              time attractive. Moreover, I add personal touch to your product
              and make sure that is eye-catching and easy to use. My aim is to
              bring across your message and identity in the most creative way.
            </p>
            <a
              href="https://omarfaruqmebd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">Portfolio</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DeveloperProfile;
