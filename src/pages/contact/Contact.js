import { Fragment, useState } from "react";
import Notifications from '../../components/misc/Notifications'
import LoadingSpinner from '../../components/misc/LoadingSpinner'

import { send } from "emailjs-com";
import "../contact/Contact.css"

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  const formSubmission = async (e) => {
    e.preventDefault();
    if (
      email.trim().length === 0 ||
      name.trim().length === 0 ||
      message.trim().length === 0
    ) {
      return;
    }
    try {
      setLoading(true);
      var templateParams = {
        name,
        email,
        message,
      };
      const result = await send(
        "service_bgbsube",
        "template_5uewivi",
        templateParams,
        "user_1Po6hCgwjWH2gGgeDmUfI"
      );
      console.log("SUCCESS!", result.text);
      setDidSubmit(true);
    } catch (error) {
      console.log("FAILED", error.text);
      setDidSubmit(false);
    }
    setMessage("");
    setEmail("");
    setName("");
    setLoading(false);
  };

  const closeModalHandler = (props) => {
    setDidSubmit(false);
  }

  return (
    <Fragment>
      {loading && <LoadingSpinner />}
      { didSubmit && (<Notifications title='Message Submitted!' body="We've received your message." onClose={closeModalHandler} open={didSubmit} />)}
      <section className="contactUs">
      
        <div className={"contactUsCard"}>
          <div className={"contactUsCardImg"}>
            <div className={"glassUi"}>
              <h1>Knock knock. </h1>
              {/* <h1>Invite only right now.</h1> */}
              <p>
                Who’s there? <br />
                Cani. <br />
                Cani who? <br />
                Cani get this query sorted? <br />
                Of course, you can! Fill up the form provided, send in your
                doubts and we’ll reach out to you soon. Thank you for your
                interest in us!
              </p>
            </div>
          </div>
          <form onSubmit={formSubmission}>
            <h1>ContactUs</h1>
            {/* <label>Email</label> */}
            <input
              type="email"
              required={true}
              onChange={emailChangeHandler}
              value={email}
              placeholder="Email"
            />
            {/* <label>Name</label> */}
            <input
              type="text"
              required={true}
              onChange={nameChangeHandler}
              value={name}
              placeholder="Name"
            />
            {/* <label>Message</label> */}
            <textarea
              name=""
              id=""
              cols="30"
              rows="1"
              required={true}
              onChange={messageChangeHandler}
              value={message}
              placeholder="Message"
            ></textarea>
            <button>
              Submit<i className="fas fa-arrow-right mx-1"></i>
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
