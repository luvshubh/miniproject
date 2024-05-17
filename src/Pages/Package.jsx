import React from "react";
import Bggg from "../Rename/packagebanner.png";
import Bbbb from "../Rename/travelimg.png";
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
      <div style={{ height: '100vh' }}>
  <img src={Bbbb} alt="" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
      </div>
     {/* TIPS & ARICLE*/}
     <div style={{ display: 'flex', justifyContent:'space-between' }}>
  {/* Left side */}
  <div>
    <p className="font-bold text-3xl">Tips & Article</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
       suscipit laborum autem fugiat ipsam et mollitia nesciunt accusamus!
       Ex asperiores quam amet consequuntur assumenda recusandae voluptatibus.
       Itaque labore deleniti beatae?</p>
  </div>

  {/* Right side */}
  <div className="flex items-center">
  <button className="bg-black text-white px-4 py-2 rounded-full">
            <p>Veiw More</p>
          </button>
  </div>
</div>

       <div className="w-[1372px] h-[1086px]">
        <Tips/>
      </div>
    </div>
  );
};

export default Package;
