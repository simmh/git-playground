module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": false,
        "node": true,
        "jquery": true
    },    
    "extends": "eslint-config-airbnb-es5",
    "plugins": [ "import", "html" ],
    "rules": {
        // 0 "off", 1 "warn" 2 "error"
        "no-console": "warn",
        "quotes": [ "error", "single" ],
        "no-underscore-dangle": "warn",
        "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true }],
        "comma-dangle": [ "error", "never"]
    }
};
// eslint unexpected unnamed function