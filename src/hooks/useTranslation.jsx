import { useAppContext } from "../components/popup/popupContext"


export const useTranslation = (localTranslations) => {
    const { languageState } = useAppContext();
    const { language } = languageState;

    return (key) => localTranslations[language]?.[key] || key;
};