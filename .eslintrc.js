module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "no-underscore-dangle": ["error", {
            "allowAfterThis": true,
            "allowAfterSuper": true
        }],
        "eol-last": ["error", "never"],
        "no-trailing-spaces": "error",
        "space-before-function-paren": ["error", "never"],
        "comma-dangle": ["error", "never"]
    },
    "parser": "babel-eslint",
}