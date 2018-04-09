<h1 align="center">dat-href</h1>

An easy way to get an `https://` or `dat://` url depending upon environment.

```js
npm i dat-href --save
```

## Usage

Simply require the module, which exposes a single function always returning a string. The first argument is the `http` url, the second is the `dat` url. 

```js
var href = require('dat-href')
href('https://enoki.site', 'dat://26232fd9e3b7683cabe91fff04ca43cf65c59ce888be89d3635fea9d3a02a6f2')
```

It’s also possible to use an object:

```js
href({
  http: 'https://enoki.site',
  dat: 'dat://26232fd9e3b7683cabe91fff04ca43cf65c59ce888be89d3635fea9d3a02a6f2'
})
```

Want to simply replace `http` or `dat`? Just pass a single `http` or `dat` url, and depending upon the environment the protocol will be modified. This is useful if the site is configured with `.well-known/dat` to verify ownership of the domain.

```js
href('https://enoki.site')
href('dat://enoki.site')
```

## Testing

```
npm run test
```