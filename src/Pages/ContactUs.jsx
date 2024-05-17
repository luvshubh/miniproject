import React from 'react';
import Bgimg from '../Rename/Banner.png';

const  ContactUs = () => {
  return (
    <div>
      {/*First Part */}
      <div
      className="mx-auto h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Bgimg})` }} 
    ><div className="flex flex-col items-center justify-center text-white">
    <div>
      <p className="text-5xl text-center">Contact Us</p>
    </div>
  </div>
        {/* Content of the first part goes here */}
      </div>

      {/* Second Part */}
<div>
  {/* Left Box */}
  <div className="w-1/2">
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="border p-2" />
      <input type="email" placeholder="Mail" className="border p-2" />
      <input type="text" placeholder="Subject" className="border p-2" />
      <textarea placeholder="Your Message" className="border p-2"></textarea>
      <button type="send message" className="bg-black text-white">
        Send Message
      </button>
    </form>
  </div>
</div>

{/* Right Box */}
<div className="w-1/2 bg-white p-8">
  <p className="font-extrabold">Get in touch</p>
</div>
    </div>  
);
}

export default ContactUs;

