var URL = require('url-parse')

module.exports = parse

function parse (http, dat) {
  // skip if nothing
  if (!http && !dat) return ''

  // missing http
  if (!http && dat) http = dat

  // deconstruct object
  if (typeof http === 'object') {
    dat = http.dat
    http = http.http
  }

  // single argument or swap
  if (typeof dat === 'undefined') {
    return getDatOrHttpHref(http)
  } else {
    if (isEnvDat()) return dat
    else return http
  }
}

function getDatOrHttpHref (href) {
  var url = new URL(href)
  if (isEnvDat()) url.set('protocol', 'dat')
  else url.set('protocol', 'https')
  return url.toString()
}

function isEnvDat () {
  return (
    typeof window !== 'undefined' &&
    typeof window.DatArchive !== 'undefined'
  )
}
