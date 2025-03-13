import { useTranslation } from "react-i18next";
import { DragAndDrop } from "@/entities/DragAndDrop/ui/DragAndDrop.tsx";

function Home() {
    const { t } = useTranslation('home');
    return (
        <div>
            {t('Домашняя')}
            <DragAndDrop/>
        </div>
    );
}

export default Home;
