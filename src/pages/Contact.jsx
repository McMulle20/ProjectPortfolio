import { useState } from "react";
import "../index.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let errorMsg = "";
    if (field === "name" && !value) errorMsg = "Name is required";
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMsg = "Valid email required";
    if (field === "message" && !value) errorMsg = "Message is required";
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    validate(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      validate(field, formData[field]);
      if (!formData[field]) newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    });

    if (Object.values(newErrors).some((err) => err)) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
      <section className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className={`form-input ${errors.name ? "input-error" : ""}`}
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <div className="error-text">{errors.name}</div>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? "input-error" : ""}`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              className={`form-input textarea ${errors.message ? "input-error" : ""}`}
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && <div className="error-text">{errors.message}</div>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
  );
}

export default Contact;
