// src/i18n/translationsEn.js
const translationsEn = {
  // =====================
  // Navbar
  // =====================
  home: "Home",
  products: "Products",
  catalog: "Catalog",
  marketplaces: "Marketplaces",
  about: "About Us",
  contact: "Contacts",

  // =====================
  // Products (Catalog) page
  // =====================
  products_brand_name: "Nabiyev Samandar",
  products_page_eyebrow: "Nabiyev Samandar / CATALOG",
  products_title: "Catalog",
  products_lead: "Suzanis, traditional clothing, and ceramics — all in a minimalist and quiet luxury aesthetic. Search: Ctrl + K",

  products_controls_aria: "Catalog controls",
  products_grid_aria: "Catalog grid",
  products_search_aria: "Search",
  
  // Qidiruv va Placeholder (JSX dagi t("products_search_placeholder") uchun)
  products_search_placeholder: "Search products... (name, tag, or Ctrl+K)",
  
  products_clear_aria: "Clear search",
  products_clear_title: "Clear",

  products_sort_label: "Sort",
  products_sort_aria: "Select sort type",
  products_sort_price_asc: "Price: Low to High",
  products_sort_price_desc: "Price: High to Low",
  products_sort_az: "A–Z",

  products_filter_aria: "Category filter",
  
  // KATEGORIYALAR (JSX dagi key'lar bilan bir xil bo'lishi shart)
  products_cat_all: "All",
  products_cat_nimcha: "Nimcha",
  products_cat_shapka: "Hat",
  products_cat_uzun_nimcha: "Long Nimcha",
  // Eskilarini ham qoldirishingiz mumkin, agar data'da ishlatilgan bo'lsa:
  products_cat_suzane: "Suzanis",
  products_cat_clothes: "Traditional Clothes",
  products_cat_ceramic: "Ceramics",

  products_total_label: "{{category}} — {{count}} items",

  // Xatolik xabarlari (JSX dagi t("products_empty_title") uchun)
  products_empty_title: "Nothing found",
  products_empty_text: "Try changing your search terms or select another category.",

  products_img_aria: "{{name}} image",
  products_placeholder_aria: "Placeholder for product image",

  // Tugma (JSX dagi t("products_btn_order") uchun)
  products_btn_order: "Order Now",
  products_hint_custom: "Customization available",

  // =====================
  // Product items (names/descriptions) — i18n-ready
  // =====================
  p_cl_001_name: "Charming Nimcha",
  p_cl_001_desc:
    "Handmade chapan — a harmony of delicate composition and pure taste.",

  p_cl_002_name: "Elegant Nimcha",
  p_cl_002_desc:
    "Minimalist decor, fits modern style — a calm yet premium vibe.",

  p_cl_003_name: "Classic Nimcha",
  p_cl_003_desc:
    "Traditional spirit + modern silhouette. Customizable upon request.",

  p_cl_004_name: "Graceful Nimcha",
  p_cl_004_desc:
    "Sleek silhouette, clean stitching, minimal embroidery detail — quiet but expensive.",

  p_cl_005_name: "Premium Nimcha",
  p_cl_005_desc:
    "Harmony of color, pattern, and composition — ideal for a premium look.",

  p_cl_006_name: "Vibrant Coats",
  p_cl_006_desc:
    "Rich in detail, created with strong character and artistic taste.",

  p_sz_001_name: "Suzani Pillowcase",
  p_sz_001_desc:
    "Embroidered pillowcase — adds an elegant accent to any interior.",

  p_sz_002_name: "Fur Headwear",
  p_sz_002_desc:
    "Suzani pillowcase with pomegranate composition — also ideal for a gift.",

  // =====================
  // Marketplaces page
  // =====================
  marketplaces_page_eyebrow: "ARTCRAFT BUKHARA / MARKETPLACES",
  marketplaces_title: "Marketplaces",
  marketplaces_subtitle:
    "You can also find our products on the following major platforms. Everything in one place — easy choice, premium experience.",

  marketplaces_grid_aria: "Marketplaces list",
  marketplaces_open_aria: "Open {{name}} page in a new window",
  marketplaces_open_title: "Open",

  marketplaces_btn_view_products: "View Products",
  marketplaces_internal_page_aria: "Open {{name}} internal page",
  marketplaces_card_hint: "Details: Internal page • Link: New window",
  marketplaces_footer_text:
    "Note: each marketplace page will feature a preview of 2 products. Buttons will link to real marketplace URLs.",

  // Tags
  mp_tag_marketplace: "Marketplace",
  mp_tag_ecosystem: "Ecosystem",
  mp_tag_local: "Local",
  mp_tag_popular: "Popular",

  // Notes
  mp_note_ozon:
    "A convenient platform with a wide assortment and fast delivery options.",
  mp_note_yandex: "A powerful ecosystem for comparisons, ratings, and recommendations.",
  mp_note_uzum:
    "Fast service for the local market, convenient payment, and wide reach.",
  mp_note_wildberries:
    "A popular platform with diverse promotions, categories, and an easy ordering process.",

  // Marketplace details page
  marketplace_details_eyebrow_base: "ARTCRAFT BUKHARA / MARKETPLACE",
  marketplace_details_not_found_title: "Page Not Found",
  marketplace_details_not_found_text:
    "This marketplace page does not exist. Please return to the marketplaces page.",
  marketplace_details_back_to_marketplaces: "Back to Marketplaces",

  marketplace_details_eyebrow_dynamic: "ARTCRAFT BUKHARA / {{name}}",
  marketplace_details_sub:
    "{{note}} This page shows 2 product previews, and each button leads to a real marketplace link.",
  marketplace_details_back: "Back",

  marketplace_details_grid_aria: "{{name}} products list",
  marketplace_details_product_placeholder_aria:
    "Placeholder for product image",
  marketplace_details_open_product: "View on Marketplace",
  marketplace_details_open_product_aria: "Open {{title}} on marketplace",
  marketplace_details_new_window_hint: "Opens in a new window",

  marketplace_details_footer_text:
    "With real photos and product links, this page acts as a premium landing page.",

  // Product titles (marketplace previews)
  mp_p_ozon_1_title: "Red Ethno Chapan",
  mp_p_ozon_2_title: "Suzani Pillowcase",

  mp_p_yandex_1_title: "Blue Ethno Chapan",
  mp_p_yandex_2_title: "Red Suzani Pillowcase",

  mp_p_uzum_1_title: "Women's Dress — Atlas",
  mp_p_uzum_2_title: "Decorative Pillowcase",

  mp_p_wb_1_title: "Red Ethno Chapan",
  mp_p_wb_2_title: "Pomegranate Suzani Pillowcase",

  // =====================
  // Home page
  // =====================
  home_page_aria: "Home page",
  home_hero_eyebrow: "ARTCRAFT BUKHARA / HOME",

  home_hero_title_main: "ARTCRAFT",
  home_hero_title_thin: "BUKHARA",

  home_tagline_line1: "Embroidery is not just decoration.",
  home_tagline_line2: "It's heritage, taste, and a modern interpretation.",

  home_cta_catalog: "Catalog",
  home_cta_contact: "Order / Contact",

  home_hero_visual_aria: "Hero visual",
  home_hero_visual_alt: "ARTCRAFT BUKHARA hero",

  home_since_label: "Since",
  home_since_year: "2010",
  home_since_text:
    "Since 2010, the art of embroidery and modern clothing with a national spirit.",

  home_fact_1_title: "Handmade",
  home_fact_1_text: "Every detail is handcrafted with precision and patience.",

  home_fact_2_title: "Bukhara Style",
  home_fact_2_text: "We preserve the spirit of Bukhara in every pattern and composition.",

  home_fact_3_title: "Custom Made",
  home_fact_3_text: "Size, color, and style — in the interpretation you desire.",

  home_col_01: "COLLECTION 01",
  home_col_02: "COLLECTION 02",

  home_gallery_1_title: "Suzanis",
  home_gallery_1_text:
    "Handmade suzanis — a premium choice for interior and gifts. Minimalist composition, but a strong impact.",
  home_gallery_1_alt: "Suzanis preview",

  home_gallery_2_title: "Traditional Clothes",
  home_gallery_2_text:
    "Modern silhouettes with a national spirit. Embroidery detail — quiet luxury. Precision and taste in every stitch.",
  home_gallery_2_alt: "Traditional clothes preview",

  home_gallery_link: "View in Catalog",

  // =====================
  // About page
  // =====================
  about_page_aria: "About us page",
  about_photo_aria: "About us photo section",
  about_placeholder_aria: "Placeholder for founder's portrait",
  about_badge_since: "Since 2010",

  about_intro:
    "<strong>ARTCRAFT BUKHARA</strong> is a creative brand that blends the delicate taste and rich traditions of Bukhara with modern style. The founder, Teshaev Maruf Makhsudovich, has dedicated his work to the art of embroidery and creating modern clothing in a national spirit since 2010. Our approach is simple: every product is a harmony of handwork, precision, and artistic taste.<br/><br/>At <strong>ARTCRAFT BUKHARA</strong>, embroidery patterns are more than decoration — they are an artistic language expressing culture, history, and soul. Therefore, every item embodies the elegance of Bukhara traditions and a modern interpretation of today's fashion. We pay special attention to quality, meticulous stitching, and material selection.<br/><br/>Our goal is to offer the client not just clothing, but a unique image, elegance, and value.",

  about_section_title: "MAIN INFORMATION",

  about_list_brand_label: "Brand",
  about_list_brand_value: "ARTCRAFT BUKHARA",

  about_list_founder_label: "Founder",
  about_list_founder_value: "Teshaev Maruf Makhsud ugli",

  about_list_address_label: "Address",
  about_list_address_value:
    "120 Talija village, Bogiafzal MFY, Shofirkon district, Bukhara region",

  about_list_activity_label: "Activity Type",
  about_list_activity_value:
    "Embroidery and modern clothing in a national style",

  about_list_started_label: "Year Started",
  about_list_started_value: "2010",

  about_note:
    "If you want to contact us regarding cooperation or an order, feel free to write — we will respond promptly.",

  about_social_aria: "Social media links",

  // =====================
  // Contacts page
  // =====================
  contacts_page_aria: "Contacts page",
  contacts_illustration_aria: "Contact section visual",
  contacts_illustration_hint: "ARTCRAFT BUKHARA",

  contacts_title: "Get in Touch",
  contacts_subtitle:
    "If you have questions about cooperation, orders, or anything else, feel free to write — we will respond as soon as possible.",

  contacts_firstName_label: "First Name *",
  contacts_firstName_placeholder: "E.g.: Ali",

  contacts_lastName_label: "Last Name *",
  contacts_lastName_placeholder: "E.g.: Valiev",

  contacts_email_label: "Email *",
  contacts_email_placeholder: "E.g.: example@mail.com",

  contacts_message_label: "Message *",
  contacts_message_placeholder: "Write your message...",

  contacts_submit: "Submit",
  contacts_demo_alert: "Sent ✅ (demo)",

  contacts_social_aria: "Social media links",
  contacts_map_aria: "Location map",
  contacts_map_title: "Google Map",
};

export default translationsEn;