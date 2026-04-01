// src/data/marketplacesData.js
import img1 from "../assets/images/img1.png";
import img5 from "../assets/images/img5.png";
import yostiq2 from "../assets/images/yostiq2.png";
import yostiq3 from "../assets/images/yostiq3.png";

import ozon_1 from "../assets/MarketPlace/ozon_1.webp"
import ozon_2 from "../assets/MarketPlace/ozon_2.webp"
import ozon_3 from "../assets/MarketPlace/ozon_3.webp"
import ozon_4 from "../assets/MarketPlace/ozon_4.webp"


import uzum_1 from "../assets/MarketPlace/uzum_1.webp"
import uzum_2 from "../assets/MarketPlace/uzum_2.webp"
import uzum_3 from "../assets/MarketPlace/uzum_3.webp"
import uzum_4 from "../assets/MarketPlace/uzum_4.webp"

import yandex_1 from "../assets/MarketPlace/yandex_1.webp"
import yandex_2 from "../assets/MarketPlace/yandex_2.webp"
import yandex_3 from "../assets/MarketPlace/yandex_3.webp"
import yandex_4 from "../assets/MarketPlace/yandex_4.webp"

import wb_1 from "../assets/MarketPlace/wb_1.webp"
import wb_2 from "../assets/MarketPlace/wb_2.webp"
import wb_3 from "../assets/MarketPlace/wb_3.webp"
import wb_4 from "../assets/MarketPlace/wb_4.webp"



export const marketplaces = [
  {
    slug: "ozon",
    name: "OZON",
    url: "https://www.ozon.ru",
    noteKey: "mp_note_ozon",
    tagKey: "mp_tag_marketplace",
    products: [
      {
        id: "ozon-1",
        titleKey: "mp_p_ozon_1_title",
        image: ozon_1,
        url: "https://uz.ozon.com/product/palto-1-3764037835/?__rr=1&abt_att=1",
      },
      {
        id: "ozon-2",
        titleKey: "mp_p_ozon_2_title",
        image: ozon_2,
        url: "https://uz.ozon.com/product/zhilet-uteplennyy-zhenskoe-palto-i-iz-karakulya-3764147564/",
      },
      {
        id: "ozon-3",
        titleKey: "mp_p_ozon_2_title",
        image: ozon_3,
        url: "https://uz.ozon.com/product/zhilet-uteplennyy-zhenskoe-palto-i-iz-karakulya-3764176110/",
      },
      {
        id: "ozon-4",
        titleKey: "mp_p_ozon_2_title",
        image: ozon_4,
        url: "https://uz.ozon.com/product/zhilet-uteplennyy-zhenskoe-palto-i-iz-karakulya-3764222447/",
      },
    ],
  },

  {
    slug: "yandex-market",
    name: "YANDEX MARKET",
    url: "https://market.yandex.ru",
    noteKey: "mp_note_yandex",
    tagKey: "mp_tag_ecosystem",
    products: [
      {
        id: "ym-1",
        titleKey: "mp_p_yandex_1_title",
        image: yandex_1,
        url: "https://market.yandex.uz/card/elegantnyye-zhenskiye-modeli-iz-naturalnogo-karakulya--eto-sochetaniye-premialnogo-kachestva/5429436047?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
      },
      {
        id: "ym-2",
        titleKey: "mp_p_yandex_2_title",
        image: yandex_2,
        url: "https://market.yandex.uz/card/elegantnyye-zhenskiye-modeli-iz-naturalnogo-karakulya--eto-sochetaniye-premialnogo-kachestva/5429500078?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
      },
      {
        id: "ym-3",
        titleKey: "mp_p_yandex_2_title",
        image: yandex_3,
        url: "https://market.yandex.uz/card/elegantnyye-zhenskiye-modeli-iz-naturalnogo-karakulya--eto-sochetaniye-premialnogo-kachestva/5429523687?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12",
      },
      {
        id: "ym-4",
        titleKey: "mp_p_yandex_2_title",
        image: yandex_4,
        url: "https://market.yandex.uz/card/elegantnyye-zhenskiye-modeli-iz-naturalnogo-karakulya--eto-sochetaniye-premialnogo-kachestva/5429491290?do-waremd5=OSVv_RgQfnqqMqbtYN7Ibg&businessId=216503443&ogV=-12&showOriginalKmEmptyOffer=1&_redirectCount=1",
      },
    ],
  },

  {
    slug: "uzum-market",
    name: "UZUM MARKET",
    url: "https://uzum.uz",
    noteKey: "mp_note_uzum",
    tagKey: "mp_tag_local",
    products: [
      {
        id: "uz-1",
        titleKey: "mp_p_uzum_1_title",
        image: uzum_1,
        url: "https://uzum.uz/uz/product/ayollar-uchun-qisqa-sargish---11-2565333",
      },
      {
        id: "uz-2",
        titleKey: "mp_p_uzum_1_title",
        image: uzum_2,
        url: "https://uzum.uz/uz/product/ayollar-uchun-qisqa-sargish-melanj---249-2565333",
      },
      {
        id: "uz-3",
        titleKey: "mp_p_uzum_2_title",
        image: uzum_3,
        url: "https://uzum.uz/uz/product/ayollar-uchun-qisqa-oq---5-2565333",
      },
      {
        id: "uz-4",
        titleKey: "mp_p_uzum_2_title",
        image: uzum_4,
        url: "https://uzum.uz/uz/product/ayollar-uchun-qisqa-qora---1-2565333",
      },
    ],
  },

  {
    slug: "wildberries",
    name: "WILDBERRIES",
    url: "https://www.wildberries.ru",
    noteKey: "mp_note_wildberries",
    tagKey: "mp_tag_popular",
    products: [
      {
        id: "wb-1",
        titleKey: "mp_p_wb_1_title",
        image: wb_1,
        url: "https://www.wildberries.ru/catalog/915340062/detail.aspx?targetUrl=GP",
      },
      {
        id: "wb-2",
        titleKey: "mp_p_wb_2_title",
        image: wb_2,
        url: "https://www.wildberries.ru/catalog/915401345/detail.aspx?targetUrl=GP",
      },
      {
        id: "wb-3",
        titleKey: "mp_p_wb_1_title",
        image: wb_3,
        url: "https://www.wildberries.ru/catalog/915401346/detail.aspx?targetUrl=GP",
      },
      {
        id: "wb-4",
        titleKey: "mp_p_wb_1_title",
        image: wb_4,
        url: "https://www.wildberries.ru/catalog/915454220/detail.aspx?targetUrl=GP",
      },
    ],
  },
];
