node-rwalk
===========

[![build status](https://secure.travis-ci.org/sentientwaffle/node-walker.png)](http://travis-ci.org/sentientwaffle/node-walker)

Recursively explore a directory.


API
===

walk(dir, callback)
-------------------
`callback` is called for every file in `dir`, recursively.

It receives `(err, file)`.


Examples
--------

``` js
walk = require('rwalk')
walk(__dirname, function(err, file) {
  if (err) throw err
  console.log("Found another file:", file)
})
```



