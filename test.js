var test = require('ava')
var href = require('.')

test('dat:// environment', function (t) {
  global.window = { DatArchive: function () { } }
  t.is(href('https://enoki.site', 'dat://enoki.site'), 'dat://enoki.site')
  delete global.window
})

test('https:// environment', function (t) {
  t.is(href('https://enoki.site', 'dat://enoki.site'), 'https://enoki.site')
})

test('https:// environment object argument', function (t) {
  t.is(
    href({
      http: 'https://enoki.site',
      dat: 'dat://enoki.site'
    }),
    'https://enoki.site'
  )
})

test('dat:// environment single argument', function (t) {
  global.window = { DatArchive: function () { } }
  t.is(href('https://enoki.site'), 'dat://enoki.site')
  delete global.window
})

test('https:// environment single argument', function (t) {
  t.is(href('dat://enoki.site'), 'https://enoki.site')
})
