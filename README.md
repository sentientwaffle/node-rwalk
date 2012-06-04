node-walker
===========

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
walk = require('walker')
walk(__dirname, function(err, file) {
  if (err) throw err
  console.log("Found another file:", file)
})
```



