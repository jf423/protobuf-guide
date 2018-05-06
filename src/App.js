import React, { Component } from 'react';
import ProtoBuf from 'protobufjs';
import { Ecommerce } from './interface/test-es6';
import proto from './schema/protos/test.proto';

class App extends Component {
  getFetch = () => (
    fetch('http://localhost:3333/api/test')
      .then(res => res.arrayBuffer())
      .then(res => new Uint8Array(res))
      .catch(err => console.log(err))
  )
  interfaceHandler = async() => {
    const data = await this.getFetch();
    const result = Ecommerce.Product.decode(data);
    console.log(result);
  }
  protoHandler = async() => {
    const data = await this.getFetch();
    ProtoBuf.load(proto, function(err, root) {
        if (err)
            throw err;
        const Product = root.lookup('Ecommerce.Product');
        
        const result = Product.decode(data);
        console.log(result);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>protocol buffer test</h1>
        <button onClick={this.protoHandler}>.proto</button>
        <button onClick={this.interfaceHandler}>static interface</button>
      </div>
    );
  }
}

export default App;
