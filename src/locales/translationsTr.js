// src/i18n/translationsTr.js
const translationsTr = {
  // =====================
  // Navbar
  // =====================
  home: "Ana Sayfa",
  products: "Ürünler",
  catalog: "Katalog",
  marketplaces: "Pazaryerleri",
  about: "Hakkımızda",
  contact: "İletişim",

  // =====================
  // Products (Catalog) page
  // =====================
  products_brand_name: "Nabiyev Samandar",
  products_page_eyebrow: "Nabiyev Samandar / KATALOG",
  products_title: "Katalog",
  products_lead: "Suzaniler, milli kıyafetler ve seramik ürünler — hepsi minimalizm ve sessiz lüks estetiğinde. Arama: Ctrl + K",

  products_controls_aria: "Katalog kontrolleri",
  products_grid_aria: "Katalog ızgarası",
  products_search_aria: "Ara",
  
  // Qidiruv va Placeholder (JSX dagi t("products_search_placeholder") uchun)
  products_search_placeholder: "Ürün ara... (isim, etiket veya Ctrl+K)",
  
  products_clear_aria: "Aramayı temizle",
  products_clear_title: "Temizle",

  products_sort_label: "Sıralama",
  products_sort_aria: "Sıralama türünü seçin",
  products_sort_price_asc: "Fiyat: Ucuz → Pahalı",
  products_sort_price_desc: "Fiyat: Pahalı → Ucuz",
  products_sort_az: "A–Z",

  products_filter_aria: "Kategori filtresi",
  
  // KATEGORIYALAR (JSX dagi key'lar bilan bir xil bo'lishi shart)
  products_cat_all: "Hepsi",
  products_cat_nimcha: "Nimça",
  products_cat_shapka: "Şapka",
  products_cat_uzun_nimcha: "Uzun Nimça",
  // Eskilarini ham qoldirishingiz mumkin, agar data'da ishlatilgan bo'lsa:
  products_cat_suzane: "Suzaniler",
  products_cat_clothes: "Milli Kıyafetler",
  products_cat_ceramic: "Seramik Eşyalar",

  products_total_label: "{{category}} — {{count}} adet",

  // Xatolik xabarlari (JSX dagi t("products_empty_title") uchun)
  products_empty_title: "Hiçbir şey bulunamadı",
  products_empty_text: "Arama terimini değiştirin veya başka bir kategori seçin.",

  products_img_aria: "{{name}} resmi",
  products_placeholder_aria: "Ürün resmi için yer tutucu",

  // Tugma (JSX dagi t("products_btn_order") uchun)
  products_btn_order: "Sipariş Ver",
  products_hint_custom: "Kişiselleştirme mevcut",

  // =====================
  // Product items (names/descriptions) — i18n-ready
  // =====================
  p_cl_001_name: "Büyüleyici Nimça",
  p_cl_001_desc:
    "El yapımı çapan — ince kompozisyon ve saf zevkin uyumu.",

  p_cl_002_name: "Zarif Nimça",
  p_cl_002_desc:
    "Minimalist dekor, modern tarza uygun — sakin ama premium bir hava.",

  p_cl_003_name: "Klasik Nimça",
  p_cl_003_desc:
    "Geleneksel ruh + modern siluet. İsteğe göre özelleştirilebilir.",

  p_cl_004_name: "Zarif Nimça",
  p_cl_004_desc:
    "Şık siluet, temiz dikiş, minimal nakış detayı — sessiz ama pahalı.",

  p_cl_005_name: "Premium Nimça",
  p_cl_005_desc:
    "Renk, desen ve kompozisyon uyumu — premium bir görünüm için ideal.",

  p_cl_006_name: "Parlak Paltolar",
  p_cl_006_desc:
    "Detaylarla zenginleştirilmiş, güçlü bir karakter ve sanatsal zevkle yaratılmış model.",

  p_sz_001_name: "Suzani Yastık Kılıfı",
  p_sz_001_desc:
    "Nakışlı yastık kılıfı — iç mekana zarif bir vurgu katar.",

  p_sz_002_name: "Kürk Başlık",
  p_sz_002_desc:
    "Nar kompozisyonlu suzani yastık kılıfı — hediye için de ideal.",

  // =====================
  // Marketplaces page
  // =====================
  marketplaces_page_eyebrow: "ARTCRAFT BUKHARA / PAZARYERLERİ",
  marketplaces_title: "Pazaryerleri",
  marketplaces_subtitle:
    "Ürünlerimizi aşağıdaki büyük platformlarda da görebilirsiniz. Her şey tek bir yerde — kolay seçim, premium deneyim.",

  marketplaces_grid_aria: "Pazaryerleri listesi",
  marketplaces_open_aria: "{{name}} sayfasını yeni pencerede aç",
  marketplaces_open_title: "Aç",

  marketplaces_btn_view_products: "Ürünleri Görüntüle",
  marketplaces_internal_page_aria: "{{name}} iç sayfasını aç",
  marketplaces_card_hint: "Detaylar: İç sayfa • Link: Yeni pencerede",
  marketplaces_footer_text:
    "Not: Her pazaryeri sayfasında 2 ürün önizlemesi olacaktır. Butonlar gerçek bağlantılara yönlendirir.",

  // Tags
  mp_tag_marketplace: "Pazaryeri",
  mp_tag_ecosystem: "Ekosistem",
  mp_tag_local: "Yerel",
  mp_tag_popular: "Popüler",

  // Notes
  mp_note_ozon:
    "Geniş ürün yelpazesi ve hızlı teslimat seçenekleriyle kullanışlı bir platform.",
  mp_note_yandex: "Karşılaştırmalar, derecelendirmeler ve öneriler için güçlü bir ekosistem.",
  mp_note_uzum:
    "Yerel pazar için hızlı hizmet, kolay ödeme ve geniş kapsam.",
  mp_note_wildberries:
    "Kampanyalar, kategori çeşitliliği ve kolay sipariş süreci ile popüler bir platform.",

  // Marketplace details page
  marketplace_details_eyebrow_base: "ARTCRAFT BUKHARA / PAZARYERİ",
  marketplace_details_not_found_title: "Sayfa Bulunamadı",
  marketplace_details_not_found_text:
    "Bu pazaryeri sayfası mevcut değil. Lütfen pazaryerleri sayfasına dönün.",
  marketplace_details_back_to_marketplaces: "Pazaryerlerine Geri Dön",

  marketplace_details_eyebrow_dynamic: "ARTCRAFT BUKHARA / {{name}}",
  marketplace_details_sub:
    "{{note}} Bu sayfada 2 ürün önizlemesi sunulmaktadır ve her buton gerçek bir pazaryeri bağlantısına gider.",
  marketplace_details_back: "Geri",

  marketplace_details_grid_aria: "{{name}} ürün listesi",
  marketplace_details_product_placeholder_aria:
    "Ürün resmi için yer tutucu",
  marketplace_details_open_product: "Pazaryerinde Görüntüle",
  marketplace_details_open_product_aria: "{{title}} — pazaryerinde aç",
  marketplace_details_new_window_hint: "Yeni pencerede açılır",

  marketplace_details_footer_text:
    "Gerçek fotoğraflar ve ürün linkleri eklendiğinde bu sayfa premium bir açılış sayfası olarak çalışacaktır.",

  // Product titles (marketplace previews)
  mp_p_ozon_1_title: "Kırmızı etnik çapan",
  mp_p_ozon_2_title: "Suzani yastık kılıfı",

  mp_p_yandex_1_title: "Mavi etnik çapan",
  mp_p_yandex_2_title: "Kırmızı suzani yastık kılıfı",

  mp_p_uzum_1_title: "Kadın elbisesi — atlas",
  mp_p_uzum_2_title: "Dekoratif yastık kılıfı",

  mp_p_wb_1_title: "Kırmızı etnik çapan",
  mp_p_wb_2_title: "Nar desenli suzani yastık kılıfı",

  // =====================
  // Home page
  // =====================
  home_page_aria: "Ana sayfa",
  home_hero_eyebrow: "ARTCRAFT BUKHARA / HOME",

  home_hero_title_main: "ARTCRAFT",
  home_hero_title_thin: "BUKHARA",

  home_tagline_line1: "Nakış sadece süs değildir.",
  home_tagline_line2: "Bu bir miras, zevk ve modern bir yorumdur.",

  home_cta_catalog: "Katalog",
  home_cta_contact: "Sipariş / İletişim",

  home_hero_visual_aria: "Hero görseli",
  home_hero_visual_alt: "ARTCRAFT BUKHARA hero",

  home_since_label: "Kuruluş",
  home_since_year: "2010",
  home_since_text:
    "2010'dan beri nakış sanatı ve milli ruhlu modern kıyafetler.",

  home_fact_1_title: "El İşçiliği",
  home_fact_1_text: "Her detay — hassasiyet ve sabırla elde işlenmiştir.",

  home_fact_2_title: "Buhara Tarzı",
  home_fact_2_text: "Desen ve kompozisyonlarımızda Buhara ruhunu koruyoruz.",

  home_fact_3_title: "Özel Sipariş",
  home_fact_3_text: "Beden, renk ve stil — sizin istediğiniz yorumda.",

  home_col_01: "KOLEKSİYON 01",
  home_col_02: "KOLEKSİYON 02",

  home_gallery_1_title: "Suzaniler",
  home_gallery_1_text:
    "El yapımı suzaniler — iç mekan ve hediye için premium seçim. Minimalist kompozisyon, güçlü etki.",
  home_gallery_1_alt: "Suzani önizleme",

  home_gallery_2_title: "Milli Kıyafetler",
  home_gallery_2_text:
    "Milli ruhlu modern silüetler. Nakış detayı — sakin lüks. Her dikişte hassasiyet ve zevk.",
  home_gallery_2_alt: "Milli kıyafet önizleme",

  home_gallery_link: "Katalogda Görüntüle",

  // =====================
  // About page
  // =====================
  about_page_aria: "Hakkımızda sayfası",
  about_photo_aria: "Hakkımızda fotoğraf bölümü",
  about_placeholder_aria: "Kurucu portresi için yer tutucu",
  about_badge_since: "2010'dan beri",

  about_intro:
    "<strong>ARTCRAFT BUKHARA</strong> — Buhara'nın zarif zevkini ve zengin geleneklerini modern tarzla harmanlayan yaratıcı bir markadır. Marka kurucusu Teshayev Maruf Maxsud oğlu olup, 2010 yılından bu yana faaliyetlerini nakış sanatı ve milli ruhlu modern kıyafetler yaratmaya adamıştır. Yaklaşımımız basittir: her ürün el emeği, hassasiyet ve sanatsal zevkin bir uyumudur.<br/><br/><strong>ARTCRAFT BUKHARA</strong>'da nakış desenleri sadece bir süs değil, kültürü, tarihi ve ruhu ifade eden bir sanat dilidir. Bu nedenle her parçada Buhara geleneğinin zarafeti ve günümüz modasının modern yorumu iç içedir. Kaliteye, titiz dikişe ve malzeme seçimine özel önem veriyoruz.<br/><br/>Amacımız müşteriye sadece bir kıyafet değil, benzersiz bir imaj, zarafet ve değer sunmaktır.",

  about_section_title: "TEMEL BİLGİLER",

  about_list_brand_label: "Marka",
  about_list_brand_value: "ARTCRAFT BUKHARA",

  about_list_founder_label: "Kurucu",
  about_list_founder_value: "Teshayev Maruf Maxsud oğlu",

  about_list_address_label: "Adres",
  about_list_address_value:
    "Buhara bölgesi, Şofirkon ilçesi, Bogiafzal MFY, Talija köyü, No: 120",

  about_list_activity_label: "Faaliyet Türü",
  about_list_activity_value:
    "Nakış ve milli görünümlü modern kıyafetler",

  about_list_started_label: "Başlangıç Yılı",
  about_list_started_value: "2010",

  about_note:
    "İş birliği veya sipariş için bizimle iletişime geçmek isterseniz, çekinmeden yazın — hızlıca yanıt vereceğiz.",

  about_social_aria: "Sosyal medya bağlantıları",

  // =====================
  // Contacts page
  // =====================
  contacts_page_aria: "İletişim sayfası",
  contacts_illustration_aria: "İletişim bölümü görseli",
  contacts_illustration_hint: "ARTCRAFT BUKHARA",

  contacts_title: "İletişim",
  contacts_subtitle:
    "İş birliği, sipariş veya sorularınız için yazın — mümkün olan en kısa sürede yanıt vereceğiz.",

  contacts_firstName_label: "İsim *",
  contacts_firstName_placeholder: "Örn: Ali",

  contacts_lastName_label: "Soyisim *",
  contacts_lastName_placeholder: "Örn: Veli",

  contacts_email_label: "E-posta *",
  contacts_email_placeholder: "Örn: example@mail.com",

  contacts_message_label: "Mesaj *",
  contacts_message_placeholder: "Mesajınızı yazın...",

  contacts_submit: "Gönder",
  contacts_demo_alert: "Gönderildi ✅ (demo)",

  contacts_social_aria: "Sosyal medya bağlantıları",
  contacts_map_aria: "Adres haritası",
  contacts_map_title: "Google harita",
};

export default translationsTr;