import React from 'react';
import Profileimg from '../assets/profile.png';
import Pranav from "../assets/pranav.png";
import  ajitha from "../assets/ajitha.png";
import lakshmi from "../assets/lakshmi.png";
import niruban from "../assets/niruban.png";

import "./ContactStyle.css";

const staffMembers = [
  {
    name: "Dr.Niruban R",
    mobile: "+91 98765 43210",
    email: "nirubanr@stjosephs.ac.in",
    image: niruban 
  },
  
  
];
const stdMembers = [
  {
    name: "Pranav J",
    mobile: "+91 73580 97274",
    email: "jagannathanpranav@gmail.com",
    image: Pranav 
  },
  {
    name: "Lakshmi Narayan R",
    mobile: "+91 63828 51497",
    email: "nrlakshminarayan05@gmail.com",
    image: lakshmi 
  },
  {
    name: "Ajitha",
    mobile: "+91 86674 62361",
    email: "ajithamathivanan@gmail.com",
    image: ajitha 
  }
];

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7fc5f93-9099-44fb-b6ad-f0f852fe53ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='cont-item'>
        <h1 className='cont-head'>Staff Co-ordinator</h1>
        <div className="staff-container">
          {staffMembers.map((staff, index) => (
            <div key={index} className="staff-card">
              <img src={staff.image} alt={staff.name} className="staff-img" />
              <h3 className="staff-name">{staff.name}</h3>
              <p><i className="fa-solid fa-phone"></i> {staff.mobile}</p>
              <p><i className="fa-solid fa-envelope"></i> <a href={`mailto:${staff.email}`} >{staff.email}</a></p>
            </div>
          ))}
        </div>
      </div>

      <div className='cont-item'>
        <h1 className='cont-head'>Student Co-ordinator</h1>
        <div className="std-container">
          {stdMembers.map((std, index) => (
            <div key={index} className="std-card">
              <img src={std.image} alt={std.name} className="std-img" />
              <h3 className="std-name">{std.name}</h3>
              <p><i className="fa-solid fa-phone"></i> {std.mobile}</p>
              <p> <a href={`mailto:${std.email}`} > <i className="fa-solid fa-envelope"></i>{std.email}</a></p>
            </div>
          ))}
        </div>
      </div>
       <div className='contact-us' >
      <div className="connect-section">
                <h2>CONNECT</h2>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?..."
                        width="100%"
                        height="200"
                        allowFullScreen=""
                        loading="lazy" alt=""
                    />
                </div>
                <div className="contact-info">
                    <h3>General Inquiries :</h3>
                    <div className='contact-info-org'><p>Pranav J</p><p>+91 73580 97274</p></div>
                    <div className='contact-info-org'><p>Sakthikumar P</p><p>+91 95666 74323</p></div>
                    <div className='contact-info-org'><p>Franesh T</p><p>+91 97890 45440</p></div>
                   
                </div>
            </div>
            <div className="contact-form-section">
                <h2>CONTACT US</h2>
                
                <form onSubmit={onSubmit}>
                <div class="input-container">
                      <i class="fas fa-user"></i>
                      <input type="text" name="name" required placeholder="Name" />
                  </div>

                  <div class="input-container">
                      <i class="fas fa-phone"></i>
                      <input type="number" name="phone" placeholder="Mobile" />
                  </div>

                  <div class="input-container">
                      <i class="fas fa-envelope"></i>
                      <input type="email" name="email" required placeholder="Email" />
                  </div>

                  <div class="input-container">
                      <i class="fas fa-comment-dots"></i>
                      <textarea placeholder="Your Message" name="message" required></textarea>
                  </div>
                    <button type="submit" className='btn'>Submit</button>
                </form>
                <span>{result}</span>
            </div>
            </div>
    </div>
  );
}

export default Contact;
