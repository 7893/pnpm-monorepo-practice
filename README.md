# pnpm Monorepo 实践项目

这是一个使用 pnpm Workspaces 和 Turborepo 搭建的简单 Monorepo 练习项目。

## 技术栈

* pnpm Workspaces
* Turborepo
* ESLint
* Prettier

## 快速开始

1.  **安装依赖:**
    ```bash
    pnpm install
    ```

2.  **常用命令 (在项目根目录运行):**

    * **代码检查 (Lint):**
        ```bash
        pnpm run lint
        ```
    * **构建 (Build):**
        ```bash
        pnpm run build
        ```
    * **运行 App One:**
        ```bash
        pnpm run start --filter=@my-monorepo/app-one
        ```
    * **运行 App Two:**
        ```bash
        pnpm run start --filter=@my-monorepo/app-two
        ```
    * **运行 App Three:**
        ```bash
        pnpm run start --filter=@my-monorepo/app-three
        ```
