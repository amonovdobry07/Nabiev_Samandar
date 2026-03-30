import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { FiArrowUpRight, FiSearch, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "../assets/styles/Products.css";
import { PRODUCTS } from "../data/productsData";

// Helper: UZS format
function formatUZS(value, locale = "uz-UZ") {
  try {
    return new Intl.NumberFormat(locale).format(value) + " so‘m";
  } catch {
    return `${value} so‘m`;
  }
}

export default function Products() {
  const { t, i18n } = useTranslation();

  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const inputRef = useRef(null);

  // 1. Kategoriyalar ro'yxati - Tarjima kalitlari bilan
  const CATEGORIES = useMemo(
    () => [
      { key: "all", label: t("products_cat_all") },
      { key: "nimcha", label: t("products_cat_nimcha") },
      { key: "shapka", label: t("products_cat_shapka") },
      { key: "uzun_nimcha", label: t("products_cat_uzun_nimcha") },
    ],
    [t]
  );

  // Search focus logic (Ctrl+K)
  useEffect(() => {
    const onKeyDown = (e) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Debounce search input
  useEffect(() => {
    const tt = setTimeout(() => setDebouncedQuery(query.trim()), 200);
    return () => clearTimeout(tt);
  }, [query]);

  // Mahsulotlarni tarjima qilish va tayyorlash
  const resolvedProducts = useMemo(() => {
    return PRODUCTS.map((p) => ({
      ...p,
      name: t(p.nameKey) || p.nameKey,
      description: t(p.descKey) || p.descKey,
    }));
  }, [i18n.language, t]);

  // Fuse.js sozlamalari
  const fuse = useMemo(() => {
    return new Fuse(resolvedProducts, {
      threshold: 0.35,
      keys: ["name", "tags", "description", "category"],
    });
  }, [resolvedProducts]);

  // ASOSIY FILTRLASH MANTIQI
  const filtered = useMemo(() => {
    let result = resolvedProducts;

    if (activeCat !== "all") {
      result = result.filter((p) => p.category === activeCat);
    }

    if (debouncedQuery.length >= 2) {
      const searchRes = fuse.search(debouncedQuery);
      const searchItems = searchRes.map(r => r.item);
      result = searchItems.filter(item => 
        activeCat === "all" || item.category === activeCat
      );
    }

    return result;
  }, [activeCat, debouncedQuery, fuse, resolvedProducts]);

  return (
    <main className="catPage">
      {/* HERO SECTION */}
      <section className="catHero">
        <div className="catContainer">
          <p className="catEyebrow">{t("products_brand_name")}</p>
          <h1 className="catTitle">{t("products_title")}</h1>
        </div>
      </section>

      {/* SEARCH VA FILTR CONTROLS */}
      <section className="catControlsSection">
        <div className="catContainer">
          
          {/* Kategoriya Tablari */}
          <div className="catFilterTabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`catTabBtn ${activeCat === cat.key ? "active" : ""}`}
                onClick={() => setActiveCat(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="catGridSection">
        <div className="catContainer">
          {filtered.length === 0 ? (
            <div className="catEmpty">
              <p className="catEmptyTitle">{t("products_empty_title")}</p>
              <p className="catEmptyText">{t("products_empty_text")}</p>
            </div>
          ) : (
            <div className="catGrid">
              {filtered.map((p) => (
                <article key={p.id} className="catCard" data-aos="fade-up">
                  <div className="catMedia">
                    {p.image ? (
                      <img className="catImg" src={p.image} alt={p.name} loading="lazy" />
                    ) : (
                      <div className="catImgPlaceholder">
                        <div className="catMark">ARTCRAFT</div>
                      </div>
                    )}
                  </div>
                  <div className="catBody">
                    <div className="catTopRow">
                      <h3 className="catName">{p.name}</h3>
                      <div className="catPrice">{formatUZS(p.price, i18n.language)}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}