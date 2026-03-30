// src/i18n/translationsRu.js
const translationsRu = {
  // =====================
  // Navbar
  // =====================
  home: "Главная",
  products: "Продукты",
  catalog: "Каталог",
  marketplaces: "Маркетплейсы",
  about: "О нас",
  contact: "Контакты",

  // =====================
  // Products (Catalog) page
  // =====================
  products_brand_name: "Nabiyev Samandar",
  products_page_eyebrow: "Nabiyev Samandar / КАТАЛОГ",
  products_title: "Каталог",
  products_lead: "Сюзане, национальная одежда и керамика — всё в эстетике минимализма и тихой роскоши. Поиск: Ctrl + K",

  products_controls_aria: "Управление каталогом",
  products_grid_aria: "Сетка каталога",
  products_search_aria: "Поиск",
  
  // Qidiruv va Placeholder (JSX dagi t("products_search_placeholder") uchun)
  products_search_placeholder: "Поиск товаров... (название, тег или Ctrl+K)",
  
  products_clear_aria: "Очистить поиск",
  products_clear_title: "Очистить",

  products_sort_label: "Сортировка",
  products_sort_aria: "Выбрать тип сортировки",
  products_sort_price_asc: "Цена: дешевле → дороже",
  products_sort_price_desc: "Цена: дороже → дешевле",
  products_sort_az: "А–Я",

  products_filter_aria: "Фильтр категорий",
  
  // KATEGORIYALAR (JSX dagi key'lar bilan bir xil bo'lishi shart)
  products_cat_all: "Все",
  products_cat_nimcha: "Нимча",
  products_cat_shapka: "Шапка",
  products_cat_uzun_nimcha: "Узун Нимча",
  // Eskilarini ham qoldirishingiz mumkin, agar data'da ishlatilgan bo'lsa:
  products_cat_suzane: "Сюзане",
  products_cat_clothes: "Национальная одежда",
  products_cat_ceramic: "Керамическая посуда",

  products_total_label: "{{category}} — {{count}} шт.",

  // Xatolik xabarlari (JSX dagi t("products_empty_title") uchun)
  products_empty_title: "Ничего не найдено",
  products_empty_text: "Измените поисковый запрос или выберите другую категорию.",

  products_img_aria: "Изображение {{name}}",
  products_placeholder_aria: "Плейсхолдер для изображения товара",

  // Tugma (JSX dagi t("products_btn_order") uchun)
  products_btn_order: "Заказать",
  products_hint_custom: "Доступна кастомизация",

  // =====================
  // Product items (names/descriptions) — i18n-ready
  // =====================
  p_cl_001_name: "Очаровательная Нимча",
  p_cl_001_desc:
    "Чапан ручной работы — гармония тонкой композиции и чистого вкуса.",

  p_cl_002_name: "Очаровательная Нимча",
  p_cl_002_desc:
    "Минималистичный декор, подходит для современного стиля — спокойный, но премиальный вайб.",

  p_cl_003_name: "Очаровательная Нимча",
  p_cl_003_desc:
    "Традиционный дух + современный силуэт. Настраивается под заказ.",

  p_cl_004_name: "Очаровательная Нимча",
  p_cl_004_desc:
    "Изящный силуэт, чистый пошив, минимальные детали вышивки — тихо, но дорого.",

  p_cl_005_name: "Очаровательная Нимча",
  p_cl_005_desc:
    "Гармония цвета, узора и композиции — идеально для премиального образа.",

  p_cl_006_name: "Яркие Пальто",
  p_cl_006_desc:
    "Богатая деталями модель, созданная с сильным характером и художественным вкусом.",

  p_sz_001_name: "Наволочка сюзане",
  p_sz_001_desc:
    "Вышитая наволочка — придает изысканный акцент интерьеру.",

  p_sz_002_name: "Меховой головной убор",
  p_sz_002_desc:
    "Наволочка сюзане с композицией граната — также идеально для подарка.",

  // =====================
  // Marketplaces page
  // =====================
  marketplaces_page_eyebrow: "ARTCRAFT BUKHARA / МАРКЕТПЛЕЙСЫ",
  marketplaces_title: "Маркетплейсы",
  marketplaces_subtitle:
    "Вы также можете увидеть нашу продукцию на следующих крупных платформах. Все в одном месте — легкий выбор, премиальные впечатления.",

  marketplaces_grid_aria: "Список маркетплейсов",
  marketplaces_open_aria: "Открыть страницу {{name}} в новом окне",
  marketplaces_open_title: "Открыть",

  marketplaces_btn_view_products: "Посмотреть товары",
  marketplaces_internal_page_aria: "Открыть внутреннюю страницу {{name}}",
  marketplaces_card_hint: "Подробнее: внутренняя страница • Ссылка: в новом окне",
  marketplaces_footer_text:
    "Примечание: на каждой странице маркетплейса будет превью 2 товаров. Кнопки будут привязаны к реальным ссылкам.",

  // Tags
  mp_tag_marketplace: "Маркетплейс",
  mp_tag_ecosystem: "Экосистема",
  mp_tag_local: "Местный",
  mp_tag_popular: "Популярный",

  // Notes
  mp_note_ozon:
    "Удобная платформа с широким ассортиментом и возможностью быстрой доставки.",
  mp_note_yandex: "Мощная экосистема для сравнения, рейтингов и рекомендаций.",
  mp_note_uzum:
    "Быстрый сервис для местного рынка, удобная оплата и широкий охват.",
  mp_note_wildberries:
    "Популярная платформа с разнообразием акций, категорий и удобным процессом заказа.",

  // Marketplace details page
  marketplace_details_eyebrow_base: "ARTCRAFT BUKHARA / МАРКЕТПЛЕЙС",
  marketplace_details_not_found_title: "Страница не найдена",
  marketplace_details_not_found_text:
    "Страница этого маркетплейса не существует. Пожалуйста, вернитесь на страницу маркетплейсов.",
  marketplace_details_back_to_marketplaces: "Вернуться к маркетплейсам",

  marketplace_details_eyebrow_dynamic: "ARTCRAFT BUKHARA / {{name}}",
  marketplace_details_sub:
    "{{note}} На этой странице представлено 2 товара для ознакомления, и кнопка каждого из них ведет на реальную ссылку в маркетплейсе.",
  marketplace_details_back: "Назад",

  marketplace_details_grid_aria: "Список товаров {{name}}",
  marketplace_details_product_placeholder_aria:
    "Плейсхолдер для изображения товара",
  marketplace_details_open_product: "Посмотреть на маркетплейсе",
  marketplace_details_open_product_aria: "{{title}} — открыть на маркетплейсе",
  marketplace_details_new_window_hint: "Откроется в новом окне",

  marketplace_details_footer_text:
    "Когда будут добавлены реальные фото и ссылки на товары, эта страница будет работать как премиальный лендинг.",

  // Product titles (marketplace previews)
  mp_p_ozon_1_title: "Красный этно-чапан",
  mp_p_ozon_2_title: "Наволочка сюзане",

  mp_p_yandex_1_title: "Синий этно-чапан",
  mp_p_yandex_2_title: "Красная наволочка сюзане",

  mp_p_uzum_1_title: "Женское платье — атлас",
  mp_p_uzum_2_title: "Декоративная наволочка",

  mp_p_wb_1_title: "Красный этно-чапан",
  mp_p_wb_2_title: "Наволочка сюзане с гранатом",

  // =====================
  // Home page
  // =====================
  home_page_aria: "Главная страница",
  home_hero_eyebrow: "ARTCRAFT BUKHARA / ГЛАВНАЯ",

  home_hero_title_main: "ARTCRAFT",
  home_hero_title_thin: "BUKHARA",

  home_tagline_line1: "Вышивка — это не просто украшение.",
  home_tagline_line2: "Это наследие, вкус и современная интерпретация.",

  home_cta_catalog: "Каталог",
  home_cta_contact: "Заказ / Связь",

  home_hero_visual_aria: "Герой визуализация",
  home_hero_visual_alt: "ARTCRAFT BUKHARA герой",

  home_since_label: "С",
  home_since_year: "2010",
  home_since_text:
    "С 2010 года — искусство вышивки и современная одежда в национальном духе.",

  home_fact_1_title: "Ручная работа",
  home_fact_1_text: "Каждая деталь — выполнена вручную, с точностью и терпением.",

  home_fact_2_title: "Бухарский стиль",
  home_fact_2_text: "Мы сохраняем дух Бухары в узорах и композициях.",

  home_fact_3_title: "Под заказ",
  home_fact_3_text: "Размер, цвет и стиль — в той интерпретации, которую вы желаете.",

  home_col_01: "КОЛЛЕКЦИЯ 01",
  home_col_02: "КОЛЛЕКЦИЯ 02",

  home_gallery_1_title: "Сюзане",
  home_gallery_1_text:
    "Сюзане ручной работы — премиальный выбор для интерьера и подарка. Минималистичная композиция, но сильное впечатление.",
  home_gallery_1_alt: "Превью сюзане",

  home_gallery_2_title: "Национальная одежда",
  home_gallery_2_text:
    "Современные силуэты в национальном духе. Детали вышивки — спокойная роскошь. Точность и вкус в каждом шве.",
  home_gallery_2_alt: "Превью национальной одежды",

  home_gallery_link: "Посмотреть в каталоге",

  // =====================
  // About page
  // =====================
  about_page_aria: "Страница о нас",
  about_photo_aria: "Фото раздел о нас",
  about_placeholder_aria: "Плейсхолдер для портрета основателя",
  about_badge_since: "С 2010 года",

  about_intro:
    "<strong>ARTCRAFT BUKHARA</strong> — творческий бренд, сочетающий утонченный вкус и богатые традиции Бухары с современным стилем. Основатель бренда Тешаев Маруф Махсудович посвятил свою деятельность искусству вышивки и созданию современной одежды в национальном стиле с 2010 года. Наш подход прост: каждое изделие — это гармония ручной работы, точности и художественного вкуса.<br/><br/>В <strong>ARTCRAFT BUKHARA</strong> узоры вышивки — это не просто декор, а язык искусства, выражающий культуру, историю и душу. Поэтому в каждом изделии воплощается изящество бухарских традиций и современная интерпретация сегодняшней моды. Мы уделяем особое внимание качеству, тщательному пошиву и выбору материалов.<br/><br/>Наша цель — предложить клиенту не просто одежду, а уникальный имидж, элегантность и ценность.",

  about_section_title: "ОСНОВНАЯ ИНФОРМАЦИЯ",

  about_list_brand_label: "Бренд",
  about_list_brand_value: "ARTCRAFT BUKHARA",

  about_list_founder_label: "Основатель",
  about_list_founder_value: "Тешаев Маруф Махсуд угли",

  about_list_address_label: "Адрес",
  about_list_address_value:
    "Бухарская область, Шофирконский район, МСГ Богиафзал, село Талиджа, дом 120",

  about_list_activity_label: "Вид деятельности",
  about_list_activity_value:
    "Вышивка и современная одежда в национальном стиле",

  about_list_started_label: "Год основания",
  about_list_started_value: "2010",

  about_note:
    "Если вы хотите связаться по поводу сотрудничества или заказа, пишите — мы ответим оперативно.",

  about_social_aria: "Ссылки на социальные сети",

  // =====================
  // Contacts page
  // =====================
  contacts_page_aria: "Страница контактов",
  contacts_illustration_aria: "Визуал раздела контактов",
  contacts_illustration_hint: "ARTCRAFT BUKHARA",

  contacts_title: "Связаться с нами",
  contacts_subtitle:
    "Если у вас есть вопросы по сотрудничеству, заказу или другие вопросы, пишите — мы ответим как можно скорее.",

  contacts_firstName_label: "Имя *",
  contacts_firstName_placeholder: "Например: Али",

  contacts_lastName_label: "Фамилия *",
  contacts_lastName_placeholder: "Например: Валиев",

  contacts_email_label: "Email *",
  contacts_email_placeholder: "Например: example@mail.com",

  contacts_message_label: "Сообщение *",
  contacts_message_placeholder: "Напишите ваше сообщение...",

  contacts_submit: "Отправить",
  contacts_demo_alert: "Отправлено ✅ (демо)",

  contacts_social_aria: "Ссылки на социальные сети",
  contacts_map_aria: "Карта проезда",
  contacts_map_title: "Карта Google",
};

export default translationsRu;