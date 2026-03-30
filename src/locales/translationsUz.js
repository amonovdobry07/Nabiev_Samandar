// src/i18n/translationsUz.js
const translationsUz = {
  // =====================
  // Navbar
  // =====================
  home: "Bosh sahifa",
  products: "Mahsulotlar",
  catalog: "Katalog",
  marketplaces: "Marketpleyslar",
  about: "Biz haqimizda",
  contact: "Kontaktlar",

  // =====================
  // Products (Catalog) page
  // =====================
  products_brand_name: "Nabiyev Samandar",
  products_page_eyebrow: "Nabiyev Samandar / KATALOG",
  products_title: "Katalog",
  products_lead: "Suzanelar, milliy kiyimlar va keramika buyumlari — barchasi minimalizm va sokin luxury estetikada. Qidiruv: Ctrl + K",

  products_controls_aria: "Katalog boshqaruvlari",
  products_grid_aria: "Katalog grid",
  products_search_aria: "Qidirish",
  
  // Qidiruv va Placeholder (JSX dagi t("products_search_placeholder") uchun)
  products_search_placeholder: "Mahsulotlarni qidirish... (nom, teg yoki Ctrl+K)",
  
  products_clear_aria: "Qidiruvni tozalash",
  products_clear_title: "Tozalash",

  products_sort_label: "Saralash",
  products_sort_aria: "Saralash turini tanlash",
  products_sort_price_asc: "Narx: arzon → qimmat",
  products_sort_price_desc: "Narx: qimmat → arzon",
  products_sort_az: "A–Z",

  products_filter_aria: "Kategoriya filtri",
  
  // KATEGORIYALAR (JSX dagi key'lar bilan bir xil bo'lishi shart)
  products_cat_all: "Barchasi",
  products_cat_nimcha: "Nimcha",
  products_cat_shapka: "Shapka",
  products_cat_uzun_nimcha: "Uzun Nimcha",
  // Eskilarini ham qoldirishingiz mumkin, agar data'da ishlatilgan bo'lsa:
  products_cat_suzane: "Suzanelar",
  products_cat_clothes: "Milliy kiyimlar",
  products_cat_ceramic: "Keramika idishlar",

  products_total_label: "{{category}} — {{count}} ta",

  // Xatolik xabarlari (JSX dagi t("products_empty_title") uchun)
  products_empty_title: "Hech narsa topilmadi",
  products_empty_text: "Qidiruv so'zini o'zgartiring yoki boshqa kategoriyani tanlang.",

  products_img_aria: "{{name}} rasmi",
  products_placeholder_aria: "Mahsulot rasmi uchun placeholder",

  // Tugma (JSX dagi t("products_btn_order") uchun)
  products_btn_order: "Buyurtma berish",
  products_hint_custom: "Moslashtirish mavjud",

  // =====================
  // Product items (names/descriptions) — i18n-ready
  // =====================
  p_cl_001_name: "Jozibali Nimcha",
  p_cl_001_desc:
    "Qo‘l mehnati bilan ishlangan chopon — nozik kompozitsiya va sof did uyg‘unligi.",

  p_cl_002_name: "Jozibali Nimcha",
  p_cl_002_desc:
    "Minimal bezak, zamonaviy uslubga mos — sokin, ammo premium vibe.",

  p_cl_003_name: "Jozibali Nimcha ",
  p_cl_003_desc:
    "An’anaviy ruh + zamonaviy siluet. Buyurtma bo‘yicha moslashtiriladi.",

  p_cl_004_name: "Jozibali Nimcha",
  p_cl_004_desc:
    "Nafis siluet, toza tikuv, minimal kashta detal — sokin, ammo qimmat.",

  p_cl_005_name: "Jozibali Nimcha",
  p_cl_005_desc:
    "Rang, naqsh va kompozitsiya uyg‘unligi — premium ko‘rinish uchun ideal.",

  p_cl_006_name: "Yorqin Paltolar",
  p_cl_006_desc:
    "Detallarga boy, kuchli xarakter va badiiy did bilan yaratilgan model.",

  p_sz_001_name: "Suzane yostiq jildi",
  p_sz_001_desc:
    "Kashta bilan bezatilgan yostiq jildi — interyerga nafis aksent beradi.",

  p_sz_002_name: "Mo'ynali bosh kiyim ",
  p_sz_002_desc:
    "Anor kompozitsiyasi bilan suzane yostiq jildi — sovg‘a uchun ham ideal.",

  // =====================
  // Marketplaces page
  // =====================
  marketplaces_page_eyebrow: "ARTCRAFT BUKHARA / MARKETPLEYSLAR",
  marketplaces_title: "Marketpleyslar",
  marketplaces_subtitle:
    "Mahsulotlarimizni quyidagi yirik platformalarda ham ko‘rishingiz mumkin. Hammasi bitta joyda — tanlov oson, taassurot premium.",

  marketplaces_grid_aria: "Marketpleyslar ro‘yxati",
  marketplaces_open_aria: "{{name}} sahifasini yangi oynada ochish",
  marketplaces_open_title: "Ochish",

  marketplaces_btn_view_products: "Mahsulotlarni ko‘rish",
  marketplaces_internal_page_aria: "{{name}} ichki sahifasini ochish",
  marketplaces_card_hint: "Batafsil: ichki sahifa • Link: yangi oynada",
  marketplaces_footer_text:
    "Eslatma: har bir marketpleys sahifasida 2 ta mahsulot preview bo‘ladi. Tugmalar real linklarga ulanadi — natija (conversion) ham joyida bo‘ladi.",

  // Tags
  mp_tag_marketplace: "Marketplace",
  mp_tag_ecosystem: "Ekotizim",
  mp_tag_local: "Mahalliy",
  mp_tag_popular: "Ommabop",

  // Notes
  mp_note_ozon:
    "Keng assortiment va tezkor yetkazib berish imkoniyatlari bilan qulay platforma.",
  mp_note_yandex: "Taqqoslash, reyting va tavsiyalar uchun kuchli ekotizim.",
  mp_note_uzum:
    "Mahalliy bozor uchun tezkor xizmat, qulay to‘lov va keng qamrov.",
  mp_note_wildberries:
    "Aksiyalar, toifalar xilma-xilligi va qulay buyurtma jarayoni bilan ommabop platforma.",

  // Marketplace details page
  marketplace_details_eyebrow_base: "ARTCRAFT BUKHARA / MARKETPLEYS",
  marketplace_details_not_found_title: "Sahifa topilmadi",
  marketplace_details_not_found_text:
    "Ushbu marketpleys sahifasi mavjud emas. Iltimos, marketpleyslar sahifasiga qayting.",
  marketplace_details_back_to_marketplaces: "Marketpleyslarga qaytish",

  marketplace_details_eyebrow_dynamic: "ARTCRAFT BUKHARA / {{name}}",
  marketplace_details_sub:
    "{{note}} Ushbu sahifada 2 ta mahsulot preview beriladi va har birining tugmasi real marketpleys havolasiga olib boradi.",
  marketplace_details_back: "Orqaga",

  marketplace_details_grid_aria: "{{name}} mahsulotlari ro‘yxati",
  marketplace_details_product_placeholder_aria:
    "Mahsulot rasmi uchun placeholder",
  marketplace_details_open_product: "Marketpleysda ko‘rish",
  marketplace_details_open_product_aria: "{{title}} — marketpleysda ochish",
  marketplace_details_new_window_hint: "Yangi oynada ochiladi",

  marketplace_details_footer_text:
    "Real rasmlar va real product linklar qo‘yilganda ushbu sahifa premium landing sifatida ishlaydi — natija aniq.",

  // Product titles (marketplace previews)
  mp_p_ozon_1_title: "Yengil nimcha",
  mp_p_ozon_2_title: "Yengil nimcha",

  mp_p_yandex_1_title: "Ko‘k etno chopon",
  mp_p_yandex_2_title: "Qizil suzane yostiq jildi",

  mp_p_uzum_1_title: "Ayollar libosi — atlas",
  mp_p_uzum_2_title: "Dekorativ yostiq jildi",

  mp_p_wb_1_title: "Qizil etno chopon",
  mp_p_wb_2_title: "Anor suzane yostiq jildi",

  // =====================
  // Home page
  // =====================
  home_page_aria: "Bosh sahifa",
  home_hero_eyebrow: "Nabiyev Samandar / HOME",

  home_hero_title_main: "Nabiyev",
  home_hero_title_thin: "BUKHARA",

  home_tagline_line1: "Kashta — bezak emas.",
  home_tagline_line2: "Bu meros, did va zamonaviy talqin.",

  home_cta_catalog: "Katalog",
  home_cta_contact: "Buyurtma / Bog‘lanish",

  home_hero_visual_aria: "Hero vizual",
  home_hero_visual_alt: "ARTCRAFT BUKHARA hero",

  home_since_label: "Since",
  home_since_year: "2010",
  home_since_text:
    "2010-yildan buyon kashtachilik san’ati va milliy ruhdagi zamonaviy kiyim-kechaklar.",

  home_fact_1_title: "Qo‘l mehnati",
  home_fact_1_text: "Har bir detal — qo‘lda ishlangan, aniqlik va sabr bilan.",

  home_fact_2_title: "Buxoro uslubi",
  home_fact_2_text: "Naqsh va kompozitsiyada Buxoro ruhini saqlaymiz.",

  home_fact_3_title: "Buyurtma asosida",
  home_fact_3_text: "O‘lcham, rang va uslub — Siz xohlagan talqinda.",

  home_col_01: "KOLLEKSIYA 01",
  home_col_02: "KOLLEKSIYA 02",

  home_gallery_1_title: "Jozibador Paltolar",
  home_gallery_1_text:
    "Qo‘l mehnati bilan ishlangan suzanelar — interyer va sovg‘a uchun ham premium tanlov. Minimal kompozitsiya, lekin kuchli ta’sir.",
  home_gallery_1_alt: "Suzanelar preview",

  home_gallery_2_title: "Ko'rkam Nimchalar",
  home_gallery_2_text:
    "Milliy ruhdagi zamonaviy siluetlar. Kashta detal — sokin, ammo “luxury”. Har bir tikuvda aniqlik va did.",
  home_gallery_2_alt: "Milliy kiyimlar preview",

  home_gallery_link: "Katalogda ko‘rish",

  // =====================
  // About page
  // =====================
  about_page_aria: "Biz haqimizda sahifasi",
  about_photo_aria: "Biz haqimizda foto bo‘limi",
  about_placeholder_aria: "Asoschi portreti uchun placeholder",
  about_badge_since: "Since 2010",

  about_intro:
    "<strong>ARTCRAFT BUKHARA</strong> — Buxoroning nozik didi va boy an’analarini zamonaviy uslub bilan uyg‘unlashtirgan ijodiy brend. Brend asoschisi Teshayev Maruf Maxsud o‘g‘li bo‘lib, u o‘z faoliyatini 2010-yildan buyon kashtachilik san’ati hamda milliy ruhdagi zamonaviy kiyim-kechaklar yaratishga bag‘ishlab kelmoqda. Bizning yondashuvimiz oddiy: har bir mahsulot — bu qo‘l mehnati, aniqlik va badiiy did uyg‘unligi.<br/><br/><strong>ARTCRAFT BUKHARA</strong>da kashta naqshlari shunchaki bezak emas — u madaniyat, tarix va ruhiyatni ifodalovchi san’at tili. Shu bois, har bir buyumda Buxoro an’anasining nafisligi va bugungi kun modasining zamonaviy talqini mujassam bo‘ladi. Faoliyatimiz yo‘nalishi — kashtachilik hamda milliy ko‘rinishdagi zamonaviy kiyim-kechaklar tayyorlash. Biz sifat, puxta tikuv va material tanloviga alohida e’tibor beramiz.<br/><br/>Maqsadimiz — mijozga shunchaki kiyim emas, balki o‘ziga xos imidj, nafislik va qadriyatni taqdim etish.",

  about_section_title: "ASOSIY MA’LUMOTLAR",

  about_list_brand_label: "Brend",
  about_list_brand_value: "ARTCRAFT BUKHARA",

  about_list_founder_label: "Asoschi",
  about_list_founder_value: "Teshayev Maruf Maxsud o‘g‘li",

  about_list_address_label: "Manzil",
  about_list_address_value:
    "Buxoro viloyati, Shofirkon tumani, Bog‘iafzal MFY, Talija qishlog‘i, 120-uy",

  about_list_activity_label: "Faoliyat turi",
  about_list_activity_value:
    "Kashtachilik va milliy ko‘rinishdagi zamonaviy kiyim-kechaklar",

  about_list_started_label: "Boshlangan yil",
  about_list_started_value: "2010",

  about_note:
    "Hamkorlik yoki buyurtma bo‘yicha bog‘lanmoqchi bo‘lsangiz, bemalol yozing — tezkor javob beramiz.",

  about_social_aria: "Ijtimoiy tarmoqlar havolalari",

  // =====================
  // Contacts page
  // =====================
  contacts_page_aria: "Kontaktlar sahifasi",
  contacts_illustration_aria: "Kontakt bo‘limi vizuali",
  contacts_illustration_hint: "ARTCRAFT BUKHARA",

  contacts_title: "Bog‘lanish",
  contacts_subtitle:
    "Hamkorlik, buyurtma yoki savollaringiz bo‘lsa, bemalol yozing — imkon qadar tezkor javob beramiz.",

  contacts_firstName_label: "Ism *",
  contacts_firstName_placeholder: "Masalan: Ali",

  contacts_lastName_label: "Familiya *",
  contacts_lastName_placeholder: "Masalan: Valiyev",

  contacts_email_label: "Email *",
  contacts_email_placeholder: "Masalan: example@mail.com",

  contacts_message_label: "Xabar *",
  contacts_message_placeholder: "Xabaringizni yozing...",

  contacts_submit: "Yuborish",
  contacts_demo_alert: "Yuborildi ✅ (demo)",

  contacts_social_aria: "Ijtimoiy tarmoqlar havolalari",
  contacts_map_aria: "Manzil xaritasi",
  contacts_map_title: "Google xarita",
};

export default translationsUz;
