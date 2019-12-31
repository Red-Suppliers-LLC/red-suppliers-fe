import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../styling/Contact.css"

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="heading-container">
        <h2 className="head-topic">
          Reach Out! Let's start something together.
        </h2>
      </div>
      <div className="contact-container">
        <form
          className="Contact_Input"
          action="https://mailthis.to/contact@redsuppliers.com"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="input-div">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              name={"Name"}
              placeholder={"John Smith"}
            />
          </div>
          <div className="input-div">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name={"Email"}
              placeholder={"Example@sample.com"}
            />
          </div>
          <div className="input-div">
            <label className="label">
              Message
              <textarea
                className="textarea"
                name="message"
                placeholder="Enter your message here."
              ></textarea>
            </label>
          </div>
          <div className="heading-container">
            <button className="button-link1" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact
