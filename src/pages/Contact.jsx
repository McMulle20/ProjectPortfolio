import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onBlur={(e) => setErrors({ ...errors, name: e.target.value ? "" : "Name is required." })} />
        {errors.name && <p>{errors.name}</p>}

        <input type="email" placeholder="Email" onBlur={(e) => setErrors({ ...errors, email: e.target.value.includes("@") ? "" : "Valid email required." })} />
        {errors.email && <p>{errors.email}</p>}

        <textarea placeholder="Message" onBlur={(e) => setErrors({ ...errors, message: e.target.value ? "" : "Message is required." })} />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
