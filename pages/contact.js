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
    const data = {
      name: state.name,
      email: state.email,
      message: state.message,
    };
    console.log(data);
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxjg0qRTdbzCygse5-DRmFFvWRpe9DebNnayintCHH0LZfkBA5UEBp2B-SJac46od8F/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${state.name}&email=${state.email}&message=${state.message}`,
        // body: JSON.stringify(),
      }
    );
    console.log(res.json());
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
      <div className={styles.formContainer}>
        <form>
          <input name="name" placeholder="name" onChange={handleChange}></input>
          <input
            name="email"
            placeholder="email"
            onChange={handleChange}
          ></input>
          <input
            name="message"
            placeholder="message"
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
