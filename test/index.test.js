var assert = require('assert')
  , walk   = require(__dirname + '/..')

walk(__dirname, function(e, f) {
  console.log(e, f)
})

walk(__dirname + "/..", function(e, f) {
  console.log(e, f)
})

