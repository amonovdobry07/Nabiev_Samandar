import { Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Marketplaces from "../pages/Marketplaces";
import Products from "../pages/Products";
import Home from "../pages/Home";
import MarketplaceDetails from "../pages/MarketplaceDetails";


import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import translationsUz from "../locales/translationsUz.js";
import translationsEn from "../locales/translationsEn.js";
import translationsRu from "../locales/translationsRu.js";
import translationsFr from "../locales/translationsFr.js";
import translationsTr from "../locales/translationsTr.js";
export default function App() {
  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: translationsUz },
      tr: { translation: translationsTr },
      ru: { translation: translationsRu },
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: "uz",
    fallbackLng: "uz",
  });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* Detail pages */}
        <Route path="/ozon" element={<MarketplaceDetails />} />
        <Route path="/yandex-market" element={<MarketplaceDetails />} />
        <Route path="/uzum-market" element={<MarketplaceDetails />} />
        <Route path="/wildberries" element={<MarketplaceDetails />} />
      </Routes>
    </>
  );
}
