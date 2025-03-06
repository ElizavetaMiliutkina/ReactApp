import { useTranslation } from "react-i18next";
import { Counter } from "@/entities";

function Dashboard() {
    const { t } = useTranslation('dashboard');
    return (
        <div>
            {t('Главная')}
            <Counter/>
        </div>
    );
}

export default Dashboard;
