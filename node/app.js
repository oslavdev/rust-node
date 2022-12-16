const ffi = require("ffi-napi")

const lib = ffi.Library("../rust/target/release/librust_node",{
    "fibonacci":['int',["int"]]
})

const startTime = performance.now()
const result = lib.fibonacci(20)
const endTime = performance.now()

function fibonacci_node(x){
    if (x <= 2) {
        return 1;
      } else {
        return fibonacci_node(x - 1) + fibonacci_node(x - 2);
      }
}

const startTimeNode = performance.now()
const result_node = fibonacci_node(20)
const endTimeNode = performance.now()


console.log(`Call to rust-sum took ${endTime - startTime} milliseconds`)
console.log('Result: ', result)


console.log(`Call to node-sum took ${endTimeNode - startTimeNode} milliseconds`)
console.log('Result: ', result_node)
