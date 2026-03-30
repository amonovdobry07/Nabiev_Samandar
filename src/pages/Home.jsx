// src/pages/Home.jsx
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../assets/styles/Home.css";
import hero from "../assets/images/hero.jpg";
import chopons from "../assets/images/choponlar.png";
import yostiqlar from "../assets/images/yostiqlar.png";

export default function Home() {
  const { t } = useTranslation();
  const lookRef = useRef(null); // hozircha ishlatilmayapti (keyin Lookbook qo‘shamiz)

  return (
    <main className="homePage" aria-label={t("home_page_aria")}>
      {/* HERO */}
      <section className="homeHero">
        <div className="homeContainer heroGrid">
          <div className="heroLeft">
            <p className="heroEyebrow">{t("home_hero_eyebrow")}</p>

            <h1 className="heroTitle">
              {t("home_hero_title_main")}{" "}
              <span className="heroTitleThin">{t("home_hero_title_thin")}</span>
            </h1>

            <p className="heroTagline">
              {t("home_tagline_line1")} <br />
              {t("home_tagline_line2")}
            </p>

            <div className="heroCtas">
              <a className="btnPrimary" href="/products">
                {t("home_cta_catalog")} <FiArrowUpRight />
              </a>
              <a className="btnGhost" href="/contacts">
                {t("home_cta_contact")} <FiArrowUpRight />
              </a>
            </div>

            <div className="heroFactsMini">
              <div className="factMini">
                <span className="factMiniTop">{t("home_since_label")}</span>
                <span className="factMiniMain">{t("home_since_year")}</span>
              </div>
              <div className="factMiniText">{t("home_since_text")}</div>
            </div>
          </div>

          <div className="heroRight" aria-label={t("home_hero_visual_aria")}>
            <img
              className="heroVisual"
              src={hero}
              alt={t("home_hero_visual_alt")}
            />
          </div>
        </div>
      </section>

      {/* 3 FACTS */}
      <section className="homeFacts">
        <div className="homeContainer">
          <div className="factsRow">
            <div className="factCard">
              <p className="factTitle">{t("home_fact_1_title")}</p>
              <p className="factText">{t("home_fact_1_text")}</p>
            </div>
            <div className="factCard">
              <p className="factTitle">{t("home_fact_2_title")}</p>
              <p className="factText">{t("home_fact_2_text")}</p>
            </div>
            <div className="factCard">
              <p className="factTitle">{t("home_fact_3_title")}</p>
              <p className="factText">{t("home_fact_3_text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GALLERY */}
      <section className="homeGallery">
        {/* 1 */}
        <article className="galItem">
          <div className="homeContainer galGrid">
            <div className="galMedia">
              <img
                className="galImgPlaceholder"
                src={chopons}
                alt={t("home_gallery_1_alt")}
              />
            </div>

            <div className="galContent">
              <p className="galEyebrow">{t("home_col_01")}</p>
              <h2 className="galTitle">{t("home_gallery_1_title")}</h2>
              <p className="galText">{t("home_gallery_1_text")}</p>
              <a className="galLink" href="/products">
                {t("home_gallery_link")} <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="sectionDivider" />
        </article>

        {/* 2 */}
        <article className="galItem isReverse">
          <div className="homeContainer galGrid">
            <div className="galMedia">
              <img
                className="galImgPlaceholder"
                src={yostiqlar}
                alt={t("home_gallery_2_alt")}
              />
            </div>

            <div className="galContent">
              <p className="galEyebrow">{t("home_col_02")}</p>
              <h2 className="galTitle">{t("home_gallery_2_title")}</h2>
              <p className="galText">{t("home_gallery_2_text")}</p>
              <a className="galLink" href="/products">
                {t("home_gallery_link")} <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="sectionDivider" />
        </article>
      </section>
    </main>
  );
}
