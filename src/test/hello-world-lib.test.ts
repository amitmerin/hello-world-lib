import * as chai from 'chai';
import * as chaiPromised from "chai-as-promised"
import { HelloWorldLib } from '../hello-world-lib';

// let expect = chai.expect;

before(() => {
    chai.should();
    chai.use(chaiPromised);
    
});

describe('Hello World test suite', function () {
    //the async call is pretty long so we extend the default 200ms timeout
    this.timeout(15000);

    it('Can say Hello World Lib', function () {
        let service:HelloWorldLib = new HelloWorldLib();
        const result = service.getHelloWorld();
        result.should.equals('Hello World Lib', `Should return: Hello World Lib, but returned: ${result}`);
    });

    it('Can say Hello World Lib Async', async () => {
        
        let service:HelloWorldLib = new HelloWorldLib();
        const result = service.getHelloWorldAsync();
        result.should.eventually.equals('Hello World Lib Async', `Should return: Hello World Lib Async, but returned: ${result}`);
    });
});