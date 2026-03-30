// src/pages/Contacts.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "../assets/styles/Contacts.css";
import contactHero from "../assets/images/contact.jpg";
export default function Contacts() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("CONTACT FORM:", form);

    setForm({ firstName: "", lastName: "", email: "", message: "" });
    alert(t("contacts_demo_alert"));
  };

  return (
    <main className="contactsPage" aria-label={t("contacts_page_aria")}>
      {/* ======= TOP SECTION (Illustration + Form) ======= */}
      <section className="contactsHero">
        <div className="contactsContainer">
          {/* LEFT: Illustration */}
          <div className="contactVisual" aria-label={t("contacts_illustration_aria")}>
            <img
              className="contactHero"
              src={contactHero}
              alt={t("contacts_illustration_aria")}
            />
          </div>

          {/* RIGHT: Form */}
          <div className="contactFormWrap">
            <h1 className="contactTitle">{t("contacts_title")}</h1>
            <p className="contactSubtitle">{t("contacts_subtitle")}</p>

            <form className="contactForm" onSubmit={onSubmit}>
              <div className="grid2">
                <label className="field">
                  <span className="labelText">{t("contacts_firstName_label")}</span>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    required
                    placeholder={t("contacts_firstName_placeholder")}
                    autoComplete="given-name"
                  />
                </label>

                <label className="field">
                  <span className="labelText">{t("contacts_lastName_label")}</span>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    required
                    placeholder={t("contacts_lastName_placeholder")}
                    autoComplete="family-name"
                  />
                </label>
              </div>

              <label className="field">
                <span className="labelText">{t("contacts_email_label")}</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder={t("contacts_email_placeholder")}
                  autoComplete="email"
                />
              </label>

              <label className="field">
                <span className="labelText">{t("contacts_message_label")}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder={t("contacts_message_placeholder")}
                  rows={7}
                />
              </label>

              <button className="submitBtn" type="submit">
                {t("contacts_submit")}
              </button>

              {/* ===== Social icons (form pastida) ===== */}
              <div className="socialRow" aria-label={t("contacts_social_aria")}>
                <a
                  className="socialLink"
                  href="https://t.me/marufbek_teshayev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <FaTelegramPlane />
                </a>

                <a
                  className="socialLink"
                  href="https://www.instagram.com/marufbek.teshayev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  className="socialLink"
                  href="https://www.facebook.com/MarufbekTeshayevUZ?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>

                <a
                  className="socialLink"
                  href="https://youtube.com/@marufbekteshayev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ======= FULL WIDTH MAP ======= */}
      <section className="mapSection" aria-label={t("contacts_map_aria")}>
        <div className="mapFullBleed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7330.031939254746!2d64.441817!3d39.85585!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUxJzIxLjEiTiA2NMKwMjYnMzAuNSJF!5e1!3m2!1sru!2s!4v1767958233252!5m2!1sru!2s"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("contacts_map_title")}
          />
        </div>
      </section>
    </main>
  );
}
