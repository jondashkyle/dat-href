var test = require('ava')
var href = require('.')

test('dat:// env', function (t) {
  global.window = { DatArchive: function () { } }
  t.is(href('https://enoki.site', 'dat://enoki.site'), 'dat://enoki.site')
  delete global.window
})

test('https:// env', function (t) {
  t.is(href('https://enoki.site', 'dat://enoki.site'), 'https://enoki.site')
})

test('https:// env with no http', function (t) {
  t.is(href(undefined, 'dat://enoki.site'), 'dat://enoki.site')
})

test('https:// env object argument', function (t) {
  t.is(
    href({
      http: 'https://enoki.site',
      dat: 'dat://enoki.site'
    }),
    'https://enoki.site'
  )
})

test('dat:// env object argument', function (t) {
  global.window = { DatArchive: function () { } }
  t.is(
    href({
      http: 'https://enoki.site',
      dat: 'dat://enoki.site'
    }),
    'dat://enoki.site'
  )
  delete global.window
})

test('https:// env object argument missing http', function (t) {
  t.is(
    href({
      dat: 'dat://enoki.site'
    }),
    'dat://enoki.site'
  )
})

test('dat:// env single argument', function (t) {
  global.window = { DatArchive: function () { } }
  t.is(href('https://enoki.site'), 'dat://enoki.site')
  delete global.window
})

test('https:// env single argument', function (t) {
  t.is(href('dat://enoki.site'), 'https://enoki.site')
})
