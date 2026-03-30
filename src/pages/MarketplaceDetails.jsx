// src/pages/MarketplaceDetails.jsx
import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../assets/styles/MarketplaceDetails.css";
import { marketplaces } from "../data/marketplacesData";

export default function MarketplaceDetails() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const slug = pathname.replace("/", "");

  const mp = useMemo(() => marketplaces.find((x) => x.slug === slug), [slug]);

  if (!mp) {
    return (
      <main className="mdPage">
        <section className="mdHero">
          <div className="mdContainer">
            <p className="mdEyebrow">{t("marketplace_details_eyebrow_base")}</p>
            <h1 className="mdTitle">{t("marketplace_details_not_found_title")}</h1>
            <p className="mdText">{t("marketplace_details_not_found_text")}</p>

            <Link className="mdBtn" to="/marketplaces">
              {t("marketplace_details_back_to_marketplaces")} <FiArrowUpRight />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const note = t(mp.noteKey);

  return (
    <main className="mdPage">
      <section className="mdHero">
        <div className="mdContainer">
          <p className="mdEyebrow">
            {t("marketplace_details_eyebrow_dynamic", { name: mp.name })}
          </p>

          <div className="mdHead">
            <h1 className="mdTitle">{mp.name}</h1>

            <p className="mdSub">{t("marketplace_details_sub", { note })}</p>

            <div className="mdLinks">
              <Link className="mdBtn" to="/marketplaces">
                {t("marketplace_details_back")} <FiArrowUpRight />
              </Link>
            </div>
          </div>

          <div
            className="mdGrid"
            aria-label={t("marketplace_details_grid_aria", { name: mp.name })}
          >
            {mp.products.map((p) => {
              const title = t(p.titleKey);

              return (
                <article key={p.id} className="mdCard">
                  <div className="mdMedia">
                    {p.image ? (
                      <img className="mdImg" src={p.image} alt={title} loading="lazy" />
                    ) : (
                      <div
                        className="mdPlaceholder"
                        role="img"
                        aria-label={t("marketplace_details_product_placeholder_aria")}
                      >
                        <div className="mdMark">{mp.name}</div>
                        <div className="mdGrain" />
                      </div>
                    )}
                  </div>

                  <div className="mdBody">
                    <div className="mdTop">
                      <h3 className="mdName">{title}</h3>
                    </div>

                    <div className="mdActions">
                      <a
                        className="mdBuy"
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("marketplace_details_open_product_aria", { title })}
                      >
                        {t("marketplace_details_open_product")} <FiExternalLink />
                      </a>
                      <span className="mdHint">{t("marketplace_details_new_window_hint")}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mdFooterLine" />
          <p className="mdFooterText">{t("marketplace_details_footer_text")}</p>
        </div>
      </section>
    </main>
  );
}
