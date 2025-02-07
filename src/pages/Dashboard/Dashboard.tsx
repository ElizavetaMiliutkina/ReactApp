import { useTranslation } from "react-i18next";

function Dashboard() {
    const { t } = useTranslation('dashboard');
    return (
        <div>
            {t('Главная')}
        </div>
    );
}

export default Dashboard;
