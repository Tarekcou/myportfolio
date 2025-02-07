import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Simulate successful form submission
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Optional: Add API integration here
  };

  return (
    <section className="py-12">
      <div className="mx-auto px-6 max-w-5xl">
        <div className="flex md:flex-row flex-col mb-8 text-center">
          <div className="w-full">
            <h2 className="font-bold text-3xl text-gray-900">
              Let's Work <span className="text-red-500">Together</span>
            </h2>
            <p className="mt-2 text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          {/* <div className="border rounded-full w-1/2">
            <img className="border w-full" src="" alt="" />
          </div> */}
        </div>

        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-6 md:p-10 rounded-lg"
        >
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="block border-gray-300 shadow-sm mt-2 p-3 border focus:border-red-500 rounded-md focus:ring-red-500 w-full"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="block border-gray-300 shadow-sm mt-2 p-3 border focus:border-red-500 rounded-md focus:ring-red-500 w-full"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="block border-gray-300 shadow-sm mt-2 p-3 border focus:border-red-500 rounded-md focus:ring-red-500 w-full h-28"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 shadow-md px-6 py-3 rounded-md font-semibold text-white transition"
            >
              Submit
            </button>
          </div>

          {/* Success Message */}
          {success && (
            <p className="mt-4 font-semibold text-center text-green-600">
              Thank you for contacting us! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
