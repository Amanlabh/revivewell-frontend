import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa6"; // Import WhatsApp icon
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "11:00 AM - 8:00 PM" },
    { id: 2, day: "Tuesday", time: "11:00 PM - 8:00 AM" },
    { id: 3, day: "Wednesday", time: "11:00 AM - 8:00 PM" },
    { id: 4, day: "Thursday", time: "11:00 AM - 8:00 PM" },
    { id: 5, day: "Friday", time: "11:00 PM - 8:00 PM" },
    { id: 6, day: "Saturday", time: "11:00 AM - 8:00 PM" },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>Bhabhi ka mobile number</span>
            </div>
            <div>
              <MdEmail />
              <span>Swati@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/yourwhatsappphonenumber" // Replace with your WhatsApp number
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
      </footer>

      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25D366; // WhatsApp green color
          color: white;
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s;
        }

        .whatsapp-icon:hover {
          background-color: #128C7E; // Darker green on hover
        }
      `}</style>
    </>
  );
};

export default Footer;
