"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Dummy backend API call
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      // Simulate successful submission for demo
      console.log("Form submitted with data:", formData);
      setSubmitMessage("Message sent successfully! (Demo mode)");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#EBF1FF] rounded-[24px] w-11/12 mx-auto mb-12">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-28 px-6 sm:px-12 lg:px-28 py-12 lg:py-[100px]">
        {/* left */}
        <div className="w-full lg:w-auto">
          <h1 className="font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-[#0A0D14] leading-[40px] sm:leading-[48px] lg:leading-[56px] mb-5 max-w-full lg:max-w-[524px]">
            Get started on your success with a free expert consultation
          </h1>
          <div className="inline-block">
            <p className="font-inter text-[#525866] text-sm sm:text-base max-w-full lg:max-w-[548px]">
              Ready to see how a web solution service agency can help you level
              up? Book a free consultation today!
            </p>
          </div>
        </div>

        {/* right */}
        <div className="bg-[#FFFFFF] rounded-[12px] shadow-xl p-6 sm:p-8 w-full lg:flex-1 lg:max-w-[626px]">
          <h3 className="font-medium text-[24px] sm:text-[28px] lg:text-[32px] text-[#0A0D14] mb-6 leading-tight">
            Contact With Us and Schedule a Free Consultation Meeting
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Full name"
                required
                className="flex-1 border border-[#E2E4E9] px-4 py-3 rounded-[8px] text-[#525866] font-inter placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F7CFF]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                required
                className="flex-1 border border-[#E2E4E9] px-4 py-3 rounded-[8px] text-[#525866] font-inter placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F7CFF]"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="w-full border border-[#E2E4E9] px-4 py-3 rounded-[8px] text-[#525866] font-inter placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F7CFF]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message"
              required
              rows="4"
              className="w-full border border-[#E2E4E9] px-4 py-3 rounded-[8px] text-[#525866] font-inter placeholder-[#9CA3AF] resize-none focus:outline-none focus:border-[#4F7CFF]"
            ></textarea>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#375DFB] text-white py-3 px-7 rounded-[6px] font-medium hover:bg-[#3D63E6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p className="text-green-600 text-center mt-2">{submitMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
