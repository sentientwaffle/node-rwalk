var fs = require('fs')

var Walk = module.exports = function(dir, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) return callback(err)
    files.forEach(function(file) {
      fs.stat(dir + "/" + file, function(err, stat) {
        if (err) return callback(err)
        if (stat.isDirectory()) {
          Walk(file, callback)
        } else {
          callback(null, file)
        }
      })
    })
  })
}

