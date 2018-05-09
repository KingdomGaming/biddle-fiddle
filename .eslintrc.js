module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "rules": {
        "comma-dangle": ["error", "never"],
        "eol-last": ["error", "never"],
        "indent": ["error", 4],
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "allow",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^(e|evt|event|mutations)" }],
        "quotes": ["error", "double", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        "space-before-function-paren": ["error", "never"]
    }
}