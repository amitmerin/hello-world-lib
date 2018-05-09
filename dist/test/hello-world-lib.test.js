import * as chai from 'chai';
import { HelloWorldLib } from '../hello-world-lib';
// let expect = chai.expect;
before(() => {
    chai.should();
});
describe('Hello World test suite', function () {
    //the async call is pretty long so we extend the default 200ms timeout
    this.timeout(15000);
    it('Can say Hello World Lib', function () {
        let service = new HelloWorldLib();
        const result = service.getHelloWorld();
        result.should.equals('Hello World Lib', `Should return: Hello World Lib, but returned: ${result}`);
    });
    it('Can say Hello World Lib Async', async () => {
        let service = new HelloWorldLib();
        const result = await service.getHelloWorldAsync();
        result.should.equals('Hello World Lib Async', `Should return: Hello World Lib Async, but returned: ${result}`);
    });
});
//# sourceMappingURL=hello-world-lib.test.js.map