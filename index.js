var redis = require('redis');
var client = redis.createClient(6379, 'redis');
 
client.on('connect', function() {
    console.log('connected');
});

var loop = function() {
  client.incr('counter', function (err, reply) {
    console.log('counter = ' + reply.toString());
    setTimeout(loop, 500);
  });
};

loop();
