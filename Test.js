
const test = "hello test string";

function hello() {
    console.log("hello from function in module.");
}

export {test, hello};

console.log("hello inside Test"); 