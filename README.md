# @web-bee-ru/eslint-plugin

## Install
``` bash
$ npm i --save-dev @web-bee-ru/eslint-plugin
```

### devDependencies

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-import-resolver-alias
- eslint-import-resolver-node
- eslint-import-resolver-nuxt
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-vue

``` bash
# install base devDependencies
$ npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-import-resolver-alias eslint-import-resolver-node eslint-plugin-import eslint-plugin-prettier
```

## Using

Available configs:

``` js
extends: [
    "plugin:@web-bee-ru/base", // js/ts only

    // npm i --save-dev eslint-plugin-vue
    "plugin:@web-bee-ru/vue", // vue

    // npm i --save-dev eslint-plugin-vue eslint-import-resolver-nuxt
    "plugin:@web-bee-ru/nuxt", // nuxt (vue)

    // npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
    "plugin:@web-bee-ru/react", // react

    // npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
    "plugin:@web-bee-ru/next", // next (react)
],
```
