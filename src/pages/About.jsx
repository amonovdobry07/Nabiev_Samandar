// src/pages/About.jsx
import "../assets/styles/About.css";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

// Rasmingiz bo‘lsa shu yerga ulang:
import aboutPhoto from "../assets/images/about.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="aboutPage" aria-label={t("about_page_aria")}>
      <section className="aboutWrap">
        <div className="aboutContainer">
          {/* LEFT: PHOTO */}
          <div className="aboutLeft" aria-label={t("about_photo_aria")}>
            {/* Variant A: real rasm */}
            
            <img className="aboutImg" src={aboutPhoto} alt={t("about_photo_aria")} />
           

            {/* Variant B: placeholder */}
            {/* <div
              className="aboutImgPlaceholder"
              role="img"
              aria-label={t("about_placeholder_aria")}
            >
              <div className="aboutBadge">{t("about_badge_since")}</div>
              <div className="aboutGrain" />
            </div> */}
          </div>

          {/* RIGHT: CONTENT */}
          <div className="aboutRight">
            <p className="aboutIntro">
              <Trans i18nKey="about_intro" />
            </p>

            <p className="aboutSectionTitle">{t("about_section_title")}</p>

            <ul className="aboutList">
              <li>
                <span className="aboutKey">{t("about_list_brand_label")}:</span>{" "}
                {t("about_list_brand_value")}
              </li>
              <li>
                <span className="aboutKey">{t("about_list_founder_label")}:</span>{" "}
                {t("about_list_founder_value")}
              </li>
              <li>
                <span className="aboutKey">{t("about_list_address_label")}:</span>{" "}
                {t("about_list_address_value")}
              </li>
              <li>
                <span className="aboutKey">{t("about_list_activity_label")}:</span>{" "}
                {t("about_list_activity_value")}
              </li>
              <li>
                <span className="aboutKey">{t("about_list_started_label")}:</span>{" "}
                {t("about_list_started_value")}
              </li>
            </ul>

            <p className="aboutNote">{t("about_note")}</p>

            {/* SOCIAL / CONTACT ICONS */}
            <div className="aboutSocial" aria-label={t("about_social_aria")}>
              <a
                className="aboutIcon"
                href="/contacts"
                rel="noreferrer"
                aria-label="Email"
                title="Email"
              >
                <MdEmail />
              </a>

              <a
                className="aboutIcon"
                href="https://www.instagram.com/asadova55350"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
