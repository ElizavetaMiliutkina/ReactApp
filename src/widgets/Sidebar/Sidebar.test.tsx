import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar.tsx';
import { withTranslation } from "react-i18next";
import { componentRender } from "@/helpers/tests/componentRender/componentRender.tsx";

describe('Sidebar', () => {
    test('renders the toggle button with the correct icon based on theme', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation />);

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
