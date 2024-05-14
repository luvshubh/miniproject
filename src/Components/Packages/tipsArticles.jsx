import React from "react";
import Tipss from "../../Rename/tipsarticles.jpg";

const tipsArticles = () => {
  return (
    <div className="flex">
  {/* Left Part */}
  <div className="flex-1">
    <div>
      <p className="text-italian font-semibold">Perfect | Tips</p>
      <p>9 Popular Travel Destinations on Sale in 2022</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
      </p>
      <div>
        <button>
          <p>Read more</p>
        </button>
      </div>
    </div>

    <div>
      <p>Tips | Travel</p>
      <p>How Are We Going to Travel in 2022</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      </p>
      <div>
        <button>
          <p>Read more</p>
        </button>
      </div>
    </div>
  </div>
  {/* Right Part */}
  <div className="flex-1">
    {/* img */}
    <img src={Tipss} alt="Tips" />
    {/* content */}
    <div>
      <p>Stories | Tips</p>
      <p>Travel Stories For Now and the Future</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      </p>
      <div>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          <p>Read more</p>
        </button>
      </div>
    </div>
  </div>
</div>
    );
};

export default tipsArticles;
