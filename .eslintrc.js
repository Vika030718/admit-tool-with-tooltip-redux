module.exports = {
	"env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }
};