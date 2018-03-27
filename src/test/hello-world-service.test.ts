import * as chai from 'chai';
import * as chaiPromised from "chai-as-promised"
import { HelloWorldService } from '../hello-world-service';

// let expect = chai.expect;

before(() => {
    chai.should();
    chai.use(chaiPromised);
    
});

describe('Hello World test suite', function () {
    //the async call is pretty long so we extend the default 200ms timeout
    this.timeout(15000);

    it('Can say Hello World', function () {
        let service:HelloWorldService = new HelloWorldService();
        const result = service.getHelloWorld();
        result.should.equals('Hello World', `Should return: Hello World, but returned: ${result}`);
    });

    it('Can say Hello World Async', async () => {
        
        let service:HelloWorldService = new HelloWorldService();
        const result = service.getHelloWorldAsync();
        result.should.eventually.equals('Hello World Async', `Should return: Hello World, but returned: ${result}`);
    });
});