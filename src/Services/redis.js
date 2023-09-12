const redis = require('redis');
const client = redis.createClient({ port: 6379 });
client.connect()
client.on('connect', () => {
    console.log('Redis client connect');
});
const setData = (key, value) => {
    value = JSON.stringify(value)
    client.set(key, value)
}
const getData = async (key) => {
    const data = await client.get(key.toString())
    return JSON.parse(data)
}
module.exports = {
    client,
    setData,
    getData
};
