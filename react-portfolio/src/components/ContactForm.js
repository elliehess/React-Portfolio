import React, { useState } from "react";
import '../styles/ContactForm.css';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [requiredError, setRequiredError] = useState("");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function handleBlur(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (!fieldValue) {
      setRequiredError(`The ${fieldName} field is required`);
    } else {
      setRequiredError("");
    }

    if (fieldName === "email" && fieldValue && !validateEmail(fieldValue)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setRequiredError("Please fill out all required fields");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleBlur}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        required
      />
      {emailError && <div className="error">{emailError}</div>}

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={handleBlur}
        required
      ></textarea>

      {requiredError && <div className="error">{requiredError}</div>}

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
