
import React from "react";
import { useParams } from "react-router-dom";

const AdoptionForm = () => {
  const { id } = useParams();

  return (
    <div className="adoption-form-container">
  <h2>Adoption Form for Animal {id}</h2>

  <form className="adoption-form" action="/submit-adoption" method="POST">
   
    <input type="hidden" name="animalId" value={id} />

    <div className="form-field">
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" required placeholder="Enter your full name" />
    </div>

    <div className="form-field">
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" required placeholder="Enter your email address" />
    </div>

    <div className="form-field">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />
    </div>

    <div className="form-field">
      <label htmlFor="address">Home Address</label>
      <textarea id="address" name="address" required placeholder="Enter your home address"></textarea>
    </div>

    <div className="form-field">
      <label htmlFor="reason">Reason for Adoption</label>
      <textarea id="reason" name="reason" required placeholder="Why do you want to adopt this animal?"></textarea>
    </div>

    <div className="form-field">
      <label htmlFor="emergencyContact">Emergency Contact (Name and Phone)</label>
      <input type="text" id="emergencyContact" name="emergencyContact" placeholder="Enter emergency contact details" />
    </div>

    <div className="form-field">
      <label htmlFor="additionalInfo">Any Additional Information</label>
      <textarea id="additionalInfo" name="additionalInfo" placeholder="Any additional info you would like to share"></textarea>
    </div>

    <div className="form-field">
      <button type="submit">Submit Adoption Request</button>
    </div>
  </form>
</div>
  );
};

export default AdoptionForm;
