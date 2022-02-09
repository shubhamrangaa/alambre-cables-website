const { useState } = require("react");
import styles from "@styles/contact.module.scss";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      process.env.GOOGLE_SHEETS_POST_URL ||
        "https://script.google.com/macros/s/AKfycbxjg0qRTdbzCygse5-DRmFFvWRpe9DebNnayintCHH0LZfkBA5UEBp2B-SJac46od8F/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${state.name}&email=${state.email}&message=${state.message}`,
      }
    );
  };

  function handleChange(evt) {
    const value = evt.target.value;

    setState({
      ...state,

      [evt.target.name]: value,
    });
  }

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.headingContainer}>
          <h1>Get in touch</h1>
          <p>Get in touch today to get a free project quote</p>
        </div>
        <div className={styles.formContainer}>
          <form>
            <label>Name</label>
            <input
              name="name"
              placeholder="Michael Schumacher"
              onChange={handleChange}
            ></input>
            <label>Email</label>
            <input
              name="email"
              placeholder="michael@formula1.com"
              onChange={handleChange}
            ></input>
            <label>Message</label>
            <input
              name="message"
              placeholder="eg: I have a query about ..."
              onChange={handleChange}
            ></input>
            <button onClick={handleSubmit}>Send message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
