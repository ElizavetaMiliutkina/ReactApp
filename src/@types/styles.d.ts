declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

interface Window {
    __STORYBOOK__?: boolean;
}
