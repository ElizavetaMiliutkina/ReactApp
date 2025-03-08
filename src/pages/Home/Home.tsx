import { useTranslation } from "react-i18next";
import { Counter } from "@/entities/Counter";

function Home() {
    const { t } = useTranslation('home');
    return (
        <div>
            {t('Домашняя')}
            <Counter/>
        </div>
    );
}

export default Home;
