import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          
          <h3>Our Mission</h3>
          <p>
          Our mission is to revolutionize the way people access physiotherapy services.
           By leveraging the power of technology, we aim to provide high-quality,
            evidence-based treatments to patients who may face barriers to in-person care,
             such as mobility issues,
           busy schedules, or geographic distance. We believe that everyone deserves
            access to the best possible care, and we are committed to making that a reality.
          </p>
          <p>We are all in 2024!</p>
          <br /><br /><br />
          <h3>Our Approach</h3>
          <p>
          Our Approach At our online physiotherapy clinic, 
          we believe in a holistic approach to care that addresses the physical, 
          emotional, and social aspects of health. We understand that every patient is different, 
          and we take the time to listen to your concerns, conduct a thorough assessment, and develop 
          a personalized treatment plan that aligns with your goals.Our virtual sessions are designed to be interactive, engaging,
          and effective, with a focus on empowering you to take an active role in your recovery.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
