import React, { useState } from 'react';
import { useForm } from '@formspree/react';

const Contact = () => {
  // const formId = process.env.FORM_ENDPOINT;
  // const [state, handleSubmit] = useForm(formId);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // if (state.succeeded) {
  //   return <p>Thanks for contacting us!</p>;
  // }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending an email
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // You could also set a confirmation message here
  };

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="container p-4 relative z-10 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl text-slate-300 text-center mb-4">Contact Me!</h1>
        </div>
        <div>
          <h1 className="text-2xl text-slate-300 text-center mb-4">Input Your Info</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="block w-full p-2 mx-auto rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="block w-full p-2 mx-auto rounded"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="block w-full p-2 mx-auto rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="block w-full p-2 mx-auto rounded"
              rows="4"
            ></textarea>
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
