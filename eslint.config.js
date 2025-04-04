// eslint.config.js
import globals from 'globals'; // 需要安装: pnpm add -w --save-dev globals
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier'; // 用于覆盖冲突规则

export default tseslint.config(
  {
    // 全局忽略配置
    ignores: [
      'node_modules/',
      'dist/',
      '.turbo/',
      'coverage/',
      'pnpm-lock.yaml', // 通常也忽略锁文件
      '.prettierrc.js', // 忽略 Prettier 配置文件本身
      'eslint.config.js', // 忽略 ESLint 配置文件本身
    ],
  },

  // 应用于所有检查文件的基础配置
  eslint.configs.recommended, // ESLint 官方推荐规则
  ...tseslint.configs.recommended, // TypeScript ESLint 推荐规则

  {
    // 跨文件的语言和环境设置
    languageOptions: {
      globals: {
        ...globals.node, // 添加 Node.js 全局变量
        ...globals.es2021, // 添加 ES2021 全局变量
      },
      parser: tseslint.parser, // 指定使用 TypeScript 解析器
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // 假设我们主要使用 ES Module
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // 报告未使用的 eslint-disable 指令
    },
  },

  // Prettier 配置必须放在最后，以覆盖其他配置中的样式规则
  eslintConfigPrettier
);
