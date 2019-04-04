const http = require("http"),
    express = require("express"),
    app = express(),
    server = http.createServer(app)

app.use(express.static(__dirname + '/website'))



server.listen(80, () => console.log('\x1b[32m%s\x1b[0m', 'Server Started'))
//31, 32, 33, 34, 35, 36
//red, green, yellow, blue, purple, cyan
