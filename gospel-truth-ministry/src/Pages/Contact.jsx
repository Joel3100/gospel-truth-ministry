import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaYoutube, FaFacebook, FaTelegramPlane } from "react-icons/fa";

const contactInfo = [
  {
    icon: "📍",
    label: "Address",
    value: "Kochi, Near Jimma University Main Campus, Jimma, Ethiopia",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+251 984 743 425",
    href: "tel:+251984743425",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "eyuela3100@gmail.com",
    href: "mailto:eyuela3100@gmail.com",
  },
];

const socialLinks = [
  {
    icon: <FaYoutube />,
    label: "YouTube",
    href: "https://www.youtube.com/@dawitfassilministries",
    color: "hover:text-red-500",
  },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100064395113270&mibextid=ZbWKwL",
    // ← replace with exact Facebook page URL if different
    color: "hover:text-blue-500",
  },
  {
    icon: <FaTelegramPlane />,
    label: "Telegram",
    href: "https://t.me/DawitFassilMinistry",
    color: "hover:text-sky-500",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const inputStyle = `w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all duration-200`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            Get In Touch
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            We would love to hear from you. Reach out with any questions, prayer
            requests, or just to say hello.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-4xl gap-12 px-6 py-16 mx-auto">
        {/* ── CONTACT INFO CARDS ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-xs font-medium tracking-widest uppercase text-brand-600">
                {item.label}
              </p>
              {/* If item has a link — make it clickable, otherwise plain text */}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-center text-gray-700 transition-colors duration-200 hover:text-brand-600"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-center text-gray-700">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── SOCIAL MEDIA ICONS ── */}
        <div className="flex flex-col items-center gap-4 p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-600">
            Follow Us
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-gray-400 text-3xl transition-all duration-200 hover:scale-110 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── GOOGLE MAP ── */}
        <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
          <div className="p-5 border-b border-gray-100">
            <p className="text-lg font-bold font-heading text-brand-900">
              Find Us
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Kochi, Near Jimma University Main Campus, Jimma, Ethiopia
            </p>
          </div>

          <iframe
            title="Gospel Truth Church Location"
            src="https://maps.google.com/maps?q=7.6836539,36.8462472&z=16&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* ── CONTACT FORM ── */}
        <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
          <div className="mb-8">
            <p className="mb-1 text-xs font-medium tracking-widest uppercase text-brand-600">
              Send A Message
            </p>
            <h2 className="text-2xl font-bold font-heading text-brand-900">
              We'd Love To Hear From You
            </h2>
          </div>

          {/* ── SUCCESS STATE ── */}
          {status === "success" && (
            <div className="flex items-start gap-3 p-5 mb-6 border border-green-200 bg-green-50 rounded-xl">
              <span className="text-2xl">✅</span>
              <div>
                <p className="text-sm font-semibold text-green-800">
                  Message sent!
                </p>
                <p className="text-green-600 text-sm mt-0.5">
                  Thank you for reaching out. We will get back to you soon.
                </p>
              </div>
            </div>
          )}

          {/* ── ERROR STATE ── */}
          {status === "error" && (
            <div className="flex items-start gap-3 p-5 mb-6 border border-red-200 bg-red-50 rounded-xl">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-red-800">
                  Something went wrong.
                </p>
                <p className="text-red-600 text-sm mt-0.5">
                  Please try again or contact us directly by phone or email.
                </p>
              </div>
            </div>
          )}

          {/* ── FORM FIELDS ── */}
          <div className="flex flex-col gap-4">
            {/* Name + Email — side by side on desktop */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputStyle}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className={inputStyle}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className={`${inputStyle} resize-none`}
              />
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className={`w-full py-3 rounded-xl font-semibold text-sm
                          transition-all duration-200
                          ${
                            status === "sending"
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-brand-600 text-white hover:bg-brand-700 cursor-pointer"
                          }`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
