import React from "react";
import Footerimg from "../Rename/footerbanner.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white py-10" />
      <div className="container mx-auto flex flex-col justify-between items-center">
        {/* Footer Banner */}
        <div style={{ position: "relative" }}>
          <img src={Footerimg} alt="Footer" />
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Subscribe to get special price
          </p>
          <form
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "10px",
                borderRadius: "5px",
                marginRight: "10px",
                border: "none",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-between w-11/12">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Information</h4>
            <p>Email: iamshubham@gmail.com</p>
            <p>Phone: 8103541291 </p>
            <p>Address: 31/15 Radhika Nagar</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Package</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex items-center">
              <img
                src="facebook-logo.png"
                alt="Facebook"
                className="h-6 mr-2"
              />
              <img src="twitter-logo.png" alt="Twitter" className="h-6 mr-2" />
              <img src="youtube-logo.png" alt="YouTube" className="h-6 mr-2" />
              <img src="instagram-logo.png" alt="Instagram" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
