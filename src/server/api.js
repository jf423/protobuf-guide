const express = require('express');
const { createServer } = require('http');
const ProtoBuf = require('protobufjs');
const model = require('../interface/test-common');

const app = express();

createServer(app).listen(3333, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
});

app.get('/api/test', (req, res) => {
    const data = {
        available: false,
        name: 'jeff',
        desc: 'The freshman of PG',
        price: 100,
        item: [{
            title: 'test',
            test: false,
            number: 3
        }]
    };
    const msgBuffer = interfaceBufferTest(req, res, data);
});

function interfaceBufferTest(req, res, data) {
    const isValid = model.Ecommerce.Product.verify(data);
    console.log(isValid);
    if(!isValid) {
        const msgBuffer = model.Ecommerce.Product.encode(data).finish();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.status(200).send(msgBuffer);
    }
}

function potoBufferTest(req, res, data) {
    // get schema
    ProtoBuf.load('../schema/protos/test.proto', function(err, proto) {
        if (err)
            throw err;
        // search for Product schema
        const Product = proto.lookup('Ecommerce.Product');
        // the data to send

        const isInvalid = Product.verify(data);
        if (isInvalid)
            throw Error(err);
        // encode data with schema
        const msgBuffer = Product.encode(data).finish();
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.status(200).send(msgBuffer);
    });
}