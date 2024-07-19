# program-launcher

> 这个工具是用来从网页打开本地程序链接时,验证程序的可用性,在打开失败和成功有回调函数

This tool is used to verify the usability of the program when opening a local program link from a webpage, with callback functions for both failed and successful opening

## Features

> 特性

- Custom protocol support - 自定义协议，例如 mylocalapp://
- IIFE bundle for direct browser support without bundler
- Typings bundle
- Callback functions for both failed and successful opening

## Usage

> 用法

1. iife

```html
<script src="/path/to/program-launcher.iife.js"></script>
<script>
  window.programLauncher.openUri(
    "edge://",
    () => {
      /* fail */
    },
    () => {
      /* success */
    }
  );
</script>
```

2. npm install

```shell
npm install program-launcher
```

```javascript
import openUri from 'program-launcher'
// import { openUri } from 'program-launcher'
openUri(
  "your-application-uri://",
  () => {
    /* fail */
  },
  () => {
    /* success */
  }
);
```

## Acknowledgment

> 如果你发现它有用，如果你能在项目的GitHub存储库中留下一颗星，我将不胜感激。

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.
