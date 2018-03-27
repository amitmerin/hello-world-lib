/**
 * 
 * 
 * @export
 * @class HelloWorldService
 * @description The business logic
 */
export class HelloWorldService {

    getHelloWorld(): string {
        return 'Hello World';
        
    }

    async getHelloWorldAsync(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                for (let index = 0; index < 100000000; index++) {


                }
                resolve('Hello World Async');
            } catch (error) {
                reject(`Got rejected, error=${error}`);
            }
        })
    }
}


