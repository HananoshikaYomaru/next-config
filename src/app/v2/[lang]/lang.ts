import "server-only";

const dictionaries = {
  en: () =>
    import("../../../../public/locales/en/test.json").then(
      (module) => module.default
    ),
  zh: () =>
    import("../../../../public/locales/zh/test.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: "en" | "zh") =>
  dictionaries[locale]();
