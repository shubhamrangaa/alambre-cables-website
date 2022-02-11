const { useState } = require("react");
import styles from "@styles/contact.module.scss";
import Head from "next/head";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.email) {
      alert("Please enter a valid email");
      return;
    }
    if (!state.name) {
      alert("Please enter a valid name");
      return;
    }
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
    // console.log(res);
    if (res.status === 200) {
      window.alert("Message sent successfully");
    }
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
      <Head>
        <title>Alambre Cables | Contact</title>
        <meta
          name="description"
          content="Get in touch with alambre cables today!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contactContainer}>
        <div className={styles.headingContainer}>
          <h1>Get in touch</h1>
          <p>Get in touch today to get a free project quote</p>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formUpperContainer}>
              <div className={styles.leftInputContainer}>
                <label>Name</label>
                <input
                  required
                  name="name"
                  placeholder="Michael Schumacher"
                  onChange={handleChange}
                ></input>
                <label>Email</label>
                <input
                  required
                  name="email"
                  placeholder="michael@formula1.com"
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles.messageContainer}>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="eg: I have a query about ..."
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button onClick={handleSubmit}>Send message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
