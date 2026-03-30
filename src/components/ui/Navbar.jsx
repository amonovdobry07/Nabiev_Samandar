import { NavLink, useLocation } from "react-router-dom";
import "../../assets/styles/Navbar.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import logo from "../../assets/NavLogo/logo.png"

const LANGS = [
  { code: "uz", label: "🇺🇿 O'zbek" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "en", label: "🇬🇧 English" },
  { code: "tr", label: "🇹🇷 Türkçe" },
  { code: "fr", label: "🇫🇷 Français" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const navClass = ({ isActive }) => (isActive ? "navLink active" : "navLink");

  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || i18n.language || "uz");

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 20 });
  }, []);

  // Apply saved lang
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
    setLang(saved || i18n.language || "uz");
  }, [i18n]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC key listener
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // --- YANGI QISMI: Ekran kattalashganda menyuni yopish ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLang = (code) => {
    setLang(code);
    localStorage.setItem("lang", code);
    i18n.changeLanguage(code);
  };

  return (
    <nav className="navRoot" aria-label="Primary navigation">
      <div className="container navContainer">
        {/* Brand */}
        <NavLink to="/" className="brand" aria-label="ARTCRAFT BUKHARA Home">
          <img src={logo} alt="" />
        </NavLink>

        {/* Desktop links */}
        <div className="nav_links" aria-label="Desktop navigation">
          <ul>
            <li data-aos="fade-down" data-aos-delay="200">
              <NavLink to="/" end className={navClass}>{t("home")}</NavLink>
            </li>
            <li data-aos="fade-down" data-aos-delay="300">
              <NavLink to="/products" className={navClass}>{t("products")}</NavLink>
            </li>
            <li data-aos="fade-down" data-aos-delay="400">
              <NavLink to="/marketplaces" className={navClass}>{t("marketplaces")}</NavLink>
            </li>
            <li data-aos="fade-down" data-aos-delay="500">
              <NavLink to="/about" className={navClass}>{t("about")}</NavLink>
            </li>
            <li data-aos="fade-down" data-aos-delay="600">
              <NavLink to="/contacts" className={navClass}>{t("contact")}</NavLink>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="navActions" data-aos="fade-left" data-aos-delay="500">
          <div className="lang_provider">
            <select
              id="select"
              value={lang}
              onChange={(e) => changeLang(e.target.value)}
              aria-label="Language selector"
            >
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className={open ? "burger isOpen" : "burger"}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile elements (Desktopda CSS orqali yashiriladi) */}
      <button
        type="button"
        className={open ? "mobileOverlay isOpen" : "mobileOverlay"}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
      />

      <div className={open ? "mobilePanel isOpen" : "mobilePanel"} aria-hidden={!open}>
        <div className="mobileInner">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "mobileLink active" : "mobileLink")}>
            {t("home")}
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "mobileLink active" : "mobileLink")}>
            {t("products")}
          </NavLink>
          <NavLink to="/marketplaces" className={({ isActive }) => (isActive ? "mobileLink active" : "mobileLink")}>
            {t("marketplaces")}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "mobileLink active" : "mobileLink")}>
            {t("about")}
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? "mobileLink active" : "mobileLink")}>
            {t("contact")}
          </NavLink>

          <div className="mobileLang">
            <label className="mobileLangLabel">{t("language")}</label>
            <div className="mobileLangSelectWrapper">
              <select value={lang} onChange={(e) => changeLang(e.target.value)}>
                {LANGS.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;