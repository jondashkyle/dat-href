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

Say you’re linking to a site which is available over `http` and `dat` using the `.well-known/dat` method. All you need to do is provide a single url to the site and it’ll swap the protocol for you.

```js
href('https://enoki.site')
href('dat://enoki.site')
```

Sometimes when working with a cms you’ll have `http` and `dat` keys 

## Testing

```
npm run test
```