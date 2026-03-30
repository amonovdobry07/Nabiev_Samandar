// src/pages/Marketplaces.jsx
import "../assets/styles/Marketplaces.css";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { marketplaces } from "../data/marketplacesData";

export default function Marketplaces() {
  const { t } = useTranslation();

  return (
    <main className="mpPage">
      <section className="mpHero">
        <div className="mpContainer">
          <p className="mpEyebrow">{t("marketplaces_page_eyebrow")}</p>

          <div className="mpHead">
            <h1 className="mpTitle">{t("marketplaces_title")}</h1>
            <p className="mpSubtitle">{t("marketplaces_subtitle")}</p>
          </div>

          <div className="mpGrid" aria-label={t("marketplaces_grid_aria")}>
            {marketplaces.map((m) => (
              <article key={m.slug} className="mpCard">
                <div className="mpCardTop">
                  <div className="mpLogo" aria-hidden="true">
                    {m.name.slice(0, 1)}
                  </div>

                  <div className="mpMeta">
                    <h3 className="mpName">{m.name}</h3>
                    <span className="mpTag">{t(m.tagKey)}</span>
                  </div>

                  <a
                    className="mpGo"
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("marketplaces_open_aria", { name: m.name })}
                    title={t("marketplaces_open_title")}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className="mpNote">{t(m.noteKey)}</p>

                <div className="mpCardBottom">
                  <Link
                    className="mpBtn"
                    to={`/${m.slug}`}
                    aria-label={t("marketplaces_internal_page_aria", { name: m.name })}
                    title={t("marketplaces_btn_view_products")}
                  >
                    {t("marketplaces_btn_view_products")} <FiArrowUpRight />
                  </Link>
                </div>

                <span className="mpHint">{t("marketplaces_card_hint")}</span>
              </article>
            ))}
          </div>

          <div className="mpFooterLine" />
          <p className="mpFooterText">{t("marketplaces_footer_text")}</p>
        </div>
      </section>
    </main>
  );
}
