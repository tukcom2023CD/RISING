module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  extends: [
    // 다른 config를 사용하더라도 prettier를 맨 마지막에 넣어야 모든 중복 규칙을 비활성화 시킬 수 있다.
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/jsx-runtime', // >> 이거 추가. (안하면 컴포넌트 내부에 react 자동사용을 하는 것 같음)
    // 'prettier/@typescript-eslint', >> 주석처리하고
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-param-reassign': 0,
    'global-require': 0,
    'no-console': 0,
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
};
