import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./../style/components/ContactForm.css";
import { useSpring, animated } from "react-spring";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x0ztw6l",
        "template_4x9zx1k",
        e.target,
        "user_YtKvdmz7EqmSTRSoHPVej"
      )

      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const [emailSent, setEmailSent] = useState(false);
  const [elementHoverColor, setElementHoverColor] = useSpring(() => ({
    color: "white",
    backgroundColor: "black",
  }));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(setEmailSent(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [emailSent]);
  return (
    <form className="ContactForm" onSubmit={sendEmail}>
      <div className="ContactForm__inputs-wrapper">
        <div className="ContactForm__name-email-subject-wrapper">
          <input
            className="ContactForm__name-input"
            aria-label="Name"
            placeholder="Name"
            type="text"
            name="name"
          />
          <input
            aria-label="Email"
            placeholder="Email"
            className="ContactForm__email-input"
            type="email"
            name="email"
          />
          <textarea
            className="ContactForm__subject-textarea"
            aria-label="Subject"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="ContactForm__message-textarea"
            aria-label="Message"
            placeholder="Message"
            name="message"
          />
          <animated.input
            style={elementHoverColor}
            onMouseEnter={() =>
              setElementHoverColor({
                color: "#000000",
                backgroundColor: "transparent",
              })
            }
            onMouseLeave={() =>
              setElementHoverColor({
                color: "#ffffff",
                backgroundColor: "#000000",
              })
            }
            onClick={() =>
              setElementHoverColor({
                color: "#ffffff",
                backgroundColor: "#000000",
              })
            }
            className="ContactForm__submit-input"
            aria-label="Submit"
            type="submit"
            value={emailSent ? "Sent" : "Send"}
            name="submit"
          />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
