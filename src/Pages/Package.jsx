import React from "react";
import Bggg from "../Rename/packagebanner.png";
import Bbbb from "../Rename/packagebanner2.jpg";
import Tips from "../Components/Packages/tipsArticles"

const Package = () => {
  return (
    <div>
      <div
        className="mx-auto h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Bggg})`,
      }}
        >
        <div className="flex flex-col items-center justify-center text-white">
          <div>
            <p className="text-5xl text-center">TRAVEL PACKAGES</p>
          </div>
        </div>
      </div>
     <div>
        <img src={Bbbb} />
      </div>

      <div>
        <Tips/>
      </div>
    </div>
  );
};

export default Package;
