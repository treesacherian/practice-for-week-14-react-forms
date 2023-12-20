import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  console.log(name, email, phone);
  const onSubmit = (e) => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date(),
    };
    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactUs;
