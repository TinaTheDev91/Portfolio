import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form className="form">
        <input
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          name="message"
          type="text"
          placeholder="message"
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}
