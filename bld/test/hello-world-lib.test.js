"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiPromised = require("chai-as-promised");
const hello_world_lib_1 = require("../hello-world-lib");
// let expect = chai.expect;
before(() => {
    chai.should();
    chai.use(chaiPromised);
});
describe('Hello World test suite', function () {
    //the async call is pretty long so we extend the default 200ms timeout
    this.timeout(15000);
    it('Can say Hello World Lib', function () {
        let service = new hello_world_lib_1.HelloWorldLib();
        const result = service.getHelloWorld();
        result.should.equals('Hello World Lib', `Should return: Hello World Lib, but returned: ${result}`);
    });
    it('Can say Hello World Lib Async', () => __awaiter(this, void 0, void 0, function* () {
        let service = new hello_world_lib_1.HelloWorldLib();
        const result = service.getHelloWorldAsync();
        result.should.eventually.equals('Hello World Lib Async', `Should return: Hello World Lib Async, but returned: ${result}`);
    }));
});
//# sourceMappingURL=hello-world-lib.test.js.map