module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
    'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
            'experimentalObjectRestSpread': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
        "space-in-parens": [ 0, "always" ],
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 0, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
        "quotes": [ 1, "single", "avoid-escape" ],
        "no-use-before-define": [ 2, { "functions": false } ],
        "semi": [0, "never"],
        "prefer-const": 1,
        "react/prefer-es6-class": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-curly-spacing": [ 2, "always" ],
        "react/jsx-indent": [ 0, 4 ],
        "react/prop-types": [ 1 ],
        "react/no-array-index-key": [ 1 ],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn",
        "class-methods-use-this": [ 1 ],
        "no-undef": [ 1 ],
        "no-case-declarations": [ 1 ],
        "no-return-assign": [ 1 ],
        "no-param-reassign": [ 1 ],
        "no-shadow": [ 1 ],
        "camelcase": [ 1 ],
        "no-underscore-dangle" : [0, "always"],
	}
}