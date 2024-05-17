import React from "react";
import Tipss from "../../Rename/Tipsbanner.jpg";

const tipsArticles = () => {
  return (
    <div className="flex w-full ">
    {/* Left Part */}
    <div className=" flex flex-col">
      {/* First Content */}
      <div className="w-full h-full p-4 mb-4">
        <div className="border rounded-lg h-full p-4 flex flex-col justify-between">
          <div>
            <p className="font-semibold">Perfect | Tips</p>
            <p className="text-2xl font-semibold">9 Popular Travel Destinations on Sale in 2022</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
            </p>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-full">
              <p>Read more</p>
            </button>
          </div>
        </div>
      </div>
  
      {/* Second Content */}
      <div className="w-full h-full p-4 mb-4">
        <div className="border rounded-lg h-full p-4 flex flex-col justify-between">
          <div>
            <p>Tips | Travel</p>
            <p className="text-2xl font-semibold">How Are We Going to Travel in 2022</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-full">
              <p>Read more</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  
    {/* Right Part */}
    <div className="flex-1 flex flex-col">
      {/* Upper Card */}
      <div className="border rounded-lg overflow-hidden mb-4">
        {/* Image */}
        <div className="">
          <img src={Tipss} alt="Tips" style={{ width: '100%', height: '50%' }} />
        </div>
        
        {/* Content */}
        <div className=" p-4 mt-5">
          
          <div className="border rounded-lg h-full p-4 flex flex-col justify-between">
            <p>Tips | Travel</p>
            <p className="text-2xl font-semibold">How Are We Going to Travel in 2022</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
            <div className="flex mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-full">
                <p>Read more</p>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
  
  
    );
};

export default tipsArticles;
