/**
 *
 *
 * @export
 * @class HelloWorldLib
 * @description The business logic
 */
export class HelloWorldLib {
    getHelloWorld() {
        return 'Hello World Lib';
    }
    async getHelloWorldAsync() {
        return new Promise((resolve, reject) => {
            try {
                for (let index = 0; index < 100000000; index++) {
                }
                resolve('Hello World Lib Async');
            }
            catch (error) {
                reject(`Got rejected, error=${error}`);
            }
        });
    }
}
//# sourceMappingURL=hello-world-lib.js.map