import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact slide-in">
      <form action="https://getform.io/f/aollzepb" method="POST">
        <h1>Contact Me</h1>
        <div className="input-box slide-in">
          <label>Full Name</label>
          <input type="text" className="field slide-in" placeholder="Enter your name" name="name" required />
        </div>
        <div className="input-box slide-in">
          <label>Email Address</label>
          <input type="email" className="field slide-in" placeholder="Enter your email" name="email" required />
        </div>
        <div className="input-box slide-in">
          <label>Your Message</label>
          <textarea name="message" className="field mess slide-in" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className="slide-in">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;