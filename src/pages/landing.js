import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-start px-6 py-10">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold mb-6 text-red-900">
            Welcome to AnonU: Where Your Voice Matters
          </h1>

          <p className="max-w-lg mb-6 text-gray-800">
            AnonU is a safe, anonymous space for college students to connect,
            share, and support each other. Whether you have questions, want to
            share experiences, or simply need a listening ear, AnonU is here for
            you.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Join Our Community Today and Experience:
          </h2>

          <ul className="max-w-lg mb-6 text-gray-800">
            <li>
              <span className="font-bold text-green-900">Anonymity:</span> Feel
              free to express yourself without fear of judgment or stigma.
            </li>
            <li>
              <span className="font-bold text-purple-900">Support:</span> Find
              solidarity and support from fellow students facing similar
              challenges.
            </li>
            <li>
              <span className="font-bold text-yellow-900">Connection:</span>{" "}
              Engage in meaningful conversations and forge connections with
              peers from your college community.
            </li>
          </ul>

          <p className="mb-4 text-gray-800">Ready to Join? Sign Up Now!</p>

          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 lg:pl-12">
          <Image
            src="https://images.unsplash.com/photo-1501369497246-426438abca8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Description of my image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
