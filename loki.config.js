module.exports = {
    storybookStaticDir: './storybook-static',
    configurations: {
        "chrome.laptop": {
            target: "chrome.app",
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
        },
        "chrome.iphone7": {
            target: "chrome.app",
            preset: "iPhone 7",
        },
    },
};
