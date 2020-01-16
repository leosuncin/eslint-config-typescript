<h1 align="center">eslint config for typescript projects 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@suncin/eslint-config-typescript" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@suncin/eslint-config-typescript.svg">
  </a>
  <a href="https://github.com/leosuncin/eslint-config-typescript#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/leosuncin/eslint-config-typescript/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/leosuncin/eslint-config-typescript/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/leosuncin/eslint-config-typescript" />
  </a>
  <a href="https://twitter.com/jl_suncin" target="_blank">
    <img alt="Twitter: jl_suncin" src="https://img.shields.io/twitter/follow/jl_suncin.svg?style=social" />
  </a>
</p>

> A set of recommended eslint rules for typescript projects

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/leosuncin/eslint-config-typescript.svg)](https://greenkeeper.io/)

```sh
npm install --dev @suncin/eslint-config-typescript
```

Then extends your eslint file (edit `.eslintrc.json`)

```json
{
  "extends": ["@suncin/typescript"]
}
```

Other configs

```json
{
  "extends": [
    "@suncin/typescript",
    "@suncin/typescript/security",
    "@suncin/typescript/jest"
    "@suncin/typescript/all"
  ]
}
```

Note: `@suncin/typescript/all` include `@suncin/typescript/security` and `@suncin/typescript/jest` configs.

## Example configuration

```json
{
  "extends": ["@suncin/typescript/all"],
  "plugins": ["filenames"],
  "env": {
    "node": true
  },
  "rules": {
    "filenames/no-index": "error",
    "filenames/match-exported": ["error", "kebab"]
  }
}
```

## Run tests

```sh
npm test
```

## Author

👤 **Jaime Leonardo Suncin Cruz**

- Website: https://suncin.me
- Twitter: [@jl_suncin](https://twitter.com/jl_suncin)
- Github: [@leosuncin](https://github.com/leosuncin)
- LinkedIn: [@jaimesuncin](https://linkedin.com/in/jaimesuncin)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/leosuncin/eslint-config-typescript/issues). You can also take a look at the [contributing guide](https://github.com/leosuncin/eslint-config-typescript/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/suncin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

## 📝 License

Copyright © 2020 [Jaime Leonardo Suncin Cruz](https://github.com/leosuncin).<br />
This project is [MIT](https://github.com/leosuncin/eslint-config-typescript/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
