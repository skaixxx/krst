import { useAppContext } from "../components/popup/popupContext"


export const useTranslation = (localTranslations) => {
    const { languageState } = useAppContext();
    const { language } = languageState;

    return (key) => {
        if (!key) return "";
        if (typeof key === "object" && !Array.isArray(key)) {
            return key[language] || key.en || "";
        }
        return localTranslations[language]?.[key] || key;
    }
};