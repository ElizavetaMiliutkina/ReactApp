import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation('home');
    return (
        <div>
            {t('Домашняя')}
        </div>
    );
}

export default Home;
