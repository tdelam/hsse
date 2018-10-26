const elasticsearch = require('elasticsearch');

const host = process.env.ES_HOST;
const port = process.env.ES_PORT;

const client = new elasticsearch.Client({ host: { host, port } });

async function checkConection() {
    let isConnected = false;
    while (!isConnected) {
        console.log('Connecting to ES');
        try {
            const health = await client.cluster.health({});
            console.log(health);
            isConnected = true;
        } catch (err) {
            console.log('Connection Failed, Retrying...', err);
        }
    }
}

checkConection();