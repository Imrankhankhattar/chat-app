const redis = require('redis');
const client = redis.createClient({ port: 6379 });
client.connect()
client.on('connect', () => {
    console.log('Redis client connect');
});
module.exports = client;
