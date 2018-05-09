import {HelloWorldLib} from './hello-world-lib'

let hw:HelloWorldLib = new HelloWorldLib();
console.log(hw.getHelloWorld());
hw.getHelloWorldAsync().then(result =>{
    console.log(result);
});

export {HelloWorldLib} from './hello-world-lib'

