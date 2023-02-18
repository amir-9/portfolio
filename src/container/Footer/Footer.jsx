import { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "./../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="footer-cards">
        <div className="footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ahgaamirjan13@gmail.com" className="p-text">
            ahgaamirjan13@gmail.com
          </a>
        </div>
        <div className="footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel: +98 9370529694" className="p-text">
            09370529694
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="your name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="mail"
              className="p-text"
              placeholder="your mail"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="p-text"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "footer"), "contact", "app__whitebg");
