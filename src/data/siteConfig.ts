export const siteConfig = {
  // Firemné údaje
  company: {
    legalName: "LVsun s. r. o.",
    brandName: "LVsun",
    ico: "54493129",
    dic: "2121694432",
    icDph: "SK2121694432",
    icDphNote: "podľa §7a",
    address: {
      street: "J.Bodona 8/1649",
      city: "Rimavská Sobota",
      postalCode: "979 01",
      country: "Slovensko",
      formatted: "J.Bodona 8/1649, 979 01 Rimavská Sobota, Slovensko",
    },
    geo: {
      latitude: "48.3828",
      longitude: "20.0224",
      region: "SK-BC", // Banskobystrický kraj
    },
    contact: {
      email: "lvsun@lvsun.com",
      supportEmail: "info@lvsun.sk",
      phone: "+421 902 123 631",
      phoneDisplay: "0902 123 631",
      phoneRaw: "+421902123631",
      workHours: "Po - Pia: 08:00 - 17:00",
    },
  },

  // Web a SEO konfigurácia
  site: {
    name: "LVsun — Diagnostika, servis a monitoring FVE",
    shortName: "LVsun",
    url: "https://lvsun.sk",
    locale: "sk_SK",
    lang: "sk",
    author: "LVsun s. r. o.",
    themeColor: "#050811",
    ogImage: "/images/og-share.png",
  },

  // Predvolené SEO hodnoty
  seo: {
    defaultTitle: "Fotovoltická diagnostika, servis a monitoring FVE",
    titleTemplate: "%s | LVsun",
    defaultDescription:
      "Nezávislá profesionálna diagnostika fotovoltických elektrární, meranie I-V kriviek, termovízia dronom, servis a 24/7 monitoring FVE po celom Slovensku.",
    keywords: [
      "fotovoltika servis",
      "diagnostika fotovoltiky",
      "meranie I-V krivky",
      "termovízia fotovoltických panelov",
      "monitoring FVE",
      "oprava fotovoltiky",
      "kontrola solárnych panelov",
      "nezávislý audit FVE",
      "hotspot solárne panely",
      "LVsun Rimavská Sobota",
      "servis fotovoltických elektrární Slovensko",
    ],
  },

  // Navigačné položky
  nav: [
    { name: "Domov", path: "/" },
    { name: "Služby", path: "/sluzby" },
    { name: "O nás", path: "/o-nas" },
    { name: "Kontakt", path: "/kontakt" },
  ],

  // Sociálne siete (ak existujú)
  social: {
    facebook: "",
    linkedin: "",
    instagram: "",
  },
};
