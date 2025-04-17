import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null); // Clear any existing messages

    const data = {
      fields: [
        { name: 'firstname', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.businessName },
        { name: 'message', value: formData.message },
      ],
    };

    try {
      await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/146052007/1c4b4035-9756-4376-ac52-e8d433e9a2e1`, // Replace with your real portalId and formId
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });

      setFormData({
        name: '',
        email: '',
        businessName: '',
        message: '',
      });

      setTimeout(() => setFormStatus(null), 5000);
    } catch (error: any) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          error.response?.data?.message || 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="input"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="input"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full flex items-center justify-center"
        disabled={formStatus?.submitted && formStatus.success}
      >
        {formStatus?.submitted && formStatus.success ? 'Message Sent' : 'Send Message'}
        <Send size={18} className="ml-2" />
      </button>

      {formStatus && (
        <div
          className={`p-4 rounded-md mt-4 text-sm font-medium ${
            formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
