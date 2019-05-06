## router

- /home
- /home/:id
- /categories
- /categories/:id
- /tags
- /tags/:id
- /about
- /search
- /search/:id
- /search/categories
- /search/categories/:id
- /search/tags
- /search/tags/:id

## Q&A

- 同级路由sidebar，content（content 内有子视图），目标切换路由，只更新 sidebar 视图，content 及子视图不更新
- 调用接口地址统一管理
- 分 app，vendor 打包
- 如何在开发环境 debug

- webpack-dev-server -> 3.1.11

> An issue was discovered in lib/Server.js in webpack-dev-server before 3.1.11. Attackers are able to steal developer's code because the origin of requests is not checked by the WebSocket server, which is used for HMR (Hot Module Replacement). Anyone can receive the HMR message sent by the WebSocket server via a ws://127.0.0.1:8080/ connection from any origin.
