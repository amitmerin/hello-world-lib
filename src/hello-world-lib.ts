/**
 * 
 * 
 * @export
 * @class HelloWorldLib
 * @description The business logic
 */
export class HelloWorldLib {

    getHelloWorld(): string {
        return 'Hello World Lib';
        
    }

    async getHelloWorldAsync(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                for (let index = 0; index < 100000000; index++) {


                }
                resolve('Hello World Lib Async');
            } catch (error) {
                reject(`Got rejected, error=${error}`);
            }
        })
    }
}


