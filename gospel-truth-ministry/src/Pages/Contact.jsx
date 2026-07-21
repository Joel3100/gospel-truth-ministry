import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";
import { FaYoutube, FaFacebook, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const { t, fBody, fHeading } = useLanguage();

  const contactInfo = [
    {
      icon: "📍",
      labelKey: "contact.address",
      value: "Kochi, Near Jimma University, Jimma, Ethiopia",
    },
    {
      icon: "📞",
      labelKey: "contact.phone",
      value: "+251 984 743 425",
      href: "tel:+251984743425",
    },
    {
      icon: "✉️",
      labelKey: "contact.email",
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
      color: "hover:text-blue-500",
    },
    {
      icon: <FaTelegramPlane />,
      label: "Telegram",
      href: "https://t.me/DawitFassilMinistry",
      color: "hover:text-sky-500",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert(t("contact.send"));
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = `w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3
                      text-gray-800 text-sm outline-none focus:border-brand-500
                      focus:ring-2 focus:ring-brand-100 transition-all duration-200`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            {t("contact.eyebrow")}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            {t("contact.title")}
          </h1>
          <p
            className={`text-brand-200 max-w-xl mx-auto leading-relaxed ${fBody}`}
          >
            {t("contact.description")}
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-4xl gap-12 px-6 py-16 mx-auto">
        {/* Contact info cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-xs font-medium tracking-widest uppercase text-brand-600">
                {t(item.labelKey)}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-center text-gray-700 transition-colors duration-200 hover:text-brand-600"
                >
                  {item.value}
                </a>
              ) : (
                <p
                  className={`text-gray-700 text-sm font-medium text-center ${fBody}`}
                >
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Social media */}
        <div className="flex flex-col items-center gap-4 p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-600">
            {t("contact.followUs")}
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`text-gray-400 text-3xl transition-all duration-200
                             hover:scale-110 ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
          <div className="p-5 border-b border-gray-100">
            <p className={`text-brand-900 font-bold text-lg ${fHeading}`}>
              {t("contact.findUs")}
            </p>
            <p className={`text-gray-500 text-sm mt-1 ${fBody}`}>
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

        {/* Contact form */}
        <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
          <div className="mb-8">
            <p className="mb-1 text-xs font-medium tracking-widest uppercase text-brand-600">
              {t("contact.sendMessage")}
            </p>
            <h2 className={`text-brand-900 text-2xl font-bold ${fHeading}`}>
              {t("contact.formTitle")}
            </h2>
          </div>

          {/* Success */}
          {status === "success" && (
            <div className="flex items-start gap-3 p-5 mb-6 border border-green-200 bg-green-50 rounded-xl">
              <span className="text-2xl">✅</span>
              <div>
                <p
                  className={`text-green-800 font-semibold text-sm ${fHeading}`}
                >
                  {t("contact.success")}
                </p>
                <p className={`text-green-600 text-sm mt-0.5 ${fBody}`}>
                  {t("contact.successMsg")}
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="flex items-start gap-3 p-5 mb-6 border border-red-200 bg-red-50 rounded-xl">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className={`text-red-800 font-semibold text-sm ${fHeading}`}>
                  {t("contact.errorTitle")}
                </p>
                <p className={`text-red-600 text-sm mt-0.5 ${fBody}`}>
                  {t("contact.errorMsg")}
                </p>
              </div>
            </div>
          )}

          {/* Form fields */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.namePH")}
                  className={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPH")}
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                {t("contact.subject")}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contact.subjectPH")}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.messagePH")}
                rows={5}
                className={`${inputStyle} resize-none`}
              />
            </div>

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
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
