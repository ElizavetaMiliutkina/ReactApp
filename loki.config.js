module.exports = {
    url: "http://localhost:6006", // Make sure this points to where Storybook is running
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
