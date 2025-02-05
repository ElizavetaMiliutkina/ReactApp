import React from 'react';
module.exports = {
    useTranslation: () => ({
        t: (key: string) => key, // Явно указываем, что `t` возвращает строку
        i18n: {
            changeLanguage: () => Promise.resolve(), // Исправили Promise
        },
    }),
    withTranslation: () => (Component: any) => (props: any) =>
        React.createElement(Component, { ...props, t: (key: string) => key }), // Убрали `require("react")`
};
